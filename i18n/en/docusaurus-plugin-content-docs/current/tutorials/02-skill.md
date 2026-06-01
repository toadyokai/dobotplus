# Dobot+ Agent Skill

`@dobot-plus/skill` is a Agent Skill that converts the device specification in a project's root `doc.md` into runnable Dobot+ plugin code — Lua logic, UI pages, block/script configurations, and more.

Use it together with [@dobot-plus/cli](https://www.npmjs.com/package/@dobot-plus/cli) to speed up Dobot+ plugin development.

## Requirements

- **Node.js** v20+
- **IDE** (with Agent Skills support)
- **@dobot-plus/cli** (install globally for the `dpt` build command)

## Installation

```bash
npm install -g @dobot-plus/skill@latest
```

After installation, the skill is deployed automatically to `~/agents/skills/dobot-plus`. 

You can customize it with environment variables:

| Variable | Description |
| --- | --- |
| `DOBOT_SKILL_INSTALL_DIR` | Root directory for skill installation; defaults to `~/agents/skills` |
| `SKIP_DOBOT_SKILL_INSTALL` | Set to `1` to skip the postinstall deployment step |

## Usage

### 1. Prepare a Dobot+ plugin project

Create or open an existing Dobot+ plugin project with `@dobot-plus/cli`:

```bash
npm install -g @dobot-plus/cli
dpt create
```

### 2. Write the device specification

Create `doc.md` in the project root describing the device's communication protocol, register addresses, and function definitions. The document should include:

- Protocol parameters (e.g. Modbus RTU baud rate, parity)
- Register addresses and bit-field descriptions
- A list of device functions

Here is an example doc:

```markdown
# VG10 / VGC10 Development Manual

## 1. Device Overview

VG10/VGC10 is OnRobot's vacuum gripper series. This document is based on Connectivity Guide v1.23.0 and describes its underlying Modbus communication interface.

> **Note:** This interface is confidential and intended for experienced integrators only. Improper use may damage the device and void the warranty. OnRobot does not provide further support.

## 2. Communication Protocol

VG10/VGC10 supports the **Modbus RTU** protocol over RS485 at the physical layer.

### 2.1 Modbus RTU Settings

| Setting        | Value                    |
| -------------- | ------------------------ |
| Baud rate      | 1000000 bit/s            |
| Start bit      | 1                        |
| Data bits      | 8                        |
| Parity         | Even                     |
| Stop bits      | 1                        |
| CRC checksum   | 16 bit (Modbus default)  |
| CRC polynomial | 0xA001 (Modbus default)  |

### 2.2 Device Address

| Connection method                    | Device address |
| ------------------------------------ | -------------- |
| Via Quick Changer                    | 65 (0x41)      |
| Via HEX-E/H QC                       | 65 (0x41)      |
| Via Dual Quick Changer (primary 1)   | 66 (0x42)      |
| Via Dual Quick Changer (secondary 2) | 67 (0x43)      |

## 3. Product Identification

You can confirm that a connected device is VG10/VGC10 via common registers:

| Address      | Register name | VG10/VGC10 value         |
| ------------ | ------------- | ------------------------ |
| 1536 (0x600) | Product code  | VG10: 0x10 / VGC10: 0x11 |

## 4. Supported Modbus Function Codes

| Function code | Name                      | Purpose                                              |
| ------------- | ------------------------- | ---------------------------------------------------- |
| 3 (0x03)      | Read Holding Registers    | Read one or more consecutive registers               |
| 6 (0x06)      | Write Single Register     | Set the value of a single register                   |
| 16 (0x10)     | Write Multiple Registers  | Set values of multiple consecutive registers         |
| 23 (0x17)     | Read/Write Multiple Registers | Read and write registers in one operation (write then read) |

## 5. Register Map

### 5.1 Register Overview

| Address      | Register name           | Access       |
| ------------ | ----------------------- | ------------ |
| 0 (0x0000)   | Channel A Control       | Read + Write |
| 1 (0x0001)   | Channel B Control       | Read + Write |
| 2 (0x0002)   | Current Limit           | Read + Write |
| 258 (0x0102) | Channel A Actual Vacuum | Read only    |
| 259 (0x0103) | Channel B Actual Vacuum | Read only    |

### 5.2 Common Registers

The following registers apply to all OnRobot devices:

| Address       | Content                                                          |
| ------------- | ---------------------------------------------------------------- |
| 0x600         | Product code (VG10: 0x10, VGC10: 0x11)                           |
| 0x604         | Firmware version (high 8 bits: major, low 8 bits: minor)         |
| 0x605         | Firmware build number                                            |
| 0x609 - 0x618 | Serial number (32 bytes, 2 ASCII characters per register)        |

---

## 6. Register Details

### 6.1 Channel A Control (0x0000) - Read/Write

Controls vacuum operations for channel A.

**Register value composition:**

- Low byte (Bit 0-7): Control mode
- High byte (Bit 8-15): Target vacuum level (used only in Grip mode)

**Control modes:**

| Register value | Name    | Description                                                          |
| -------------- | ------- | -------------------------------------------------------------------- |
| 0 (0x0000)     | Release | Release the workpiece; stop the pump if the other channel has no demand |
| 1 (0x0001)     | Grip    | Build and maintain vacuum                                            |
| 2 (0x0002)     | Idle    | Idle mode; neither release nor grip; slightly lower power consumption  |

**Target vacuum level examples:**

| Target vacuum | Register value |
| ------------- | -------------- |
| Release       | 0 (0x0000)     |
| 20%           | 276 (0x0114)   |
| 40%           | 296 (0x0128)   |
| 75%           | 331 (0x014B)   |
| Idle          | 512 (0x0200)   |

> **Note:** The target vacuum level must not exceed 80%.

---

### 6.2 Channel B Control (0x0001) - Read/Write

Controls vacuum operations for channel B. Functionality is identical to Channel A Control; refer to the previous section.

---

### 6.3 Current Limit (0x0002) - Read/Write

Sets and reads the current limit.

| Parameter    | Value    |
| ------------ | -------- |
| Unit         | mA       |
| Default      | 500 mA   |
| Maximum allowed | 1000 mA |

> **Warning:** Do not set this value above 1000 mA.

---

### 6.4 Channel A Actual Vacuum (0x0102) - Read Only

Reads the current actual vacuum level for channel A.

| Parameter | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| Unit      | 1/1000 relative vacuum                                                      |
| Note      | Unlike the setpoint (percentage), this uses thousandths for higher precision |

---

### 6.5 Channel B Actual Vacuum (0x0103) - Read Only

Reads the current actual vacuum level for channel B.

Specifications are the same as Channel A Actual Vacuum.

---

## 7. Operation Flow

### 7.1 Basic Control Flow

1. **Configure current limit (optional)**
   - Write the current limit value (mA) to register 0x0002

2. **Set and start vacuum gripping**
   - Write a Grip command with target vacuum to register 0x0000 (channel A) or 0x0001 (channel B)
   - Example: `0x0114` = grip at 20% vacuum, where **01 is the mode in the high 8 bits; 14 is the parameter in the low 8 bits**

3. **Monitor actual vacuum**
   - Read register 0x0102 (channel A) or 0x0103 (channel B)
   - Obtain actual vacuum in thousandths

4. **Release workpiece**
   - Write `0x0000` to the corresponding channel control register

5. **Idle state**
   - Write `0x0200` to the corresponding channel control register

### 7.2 Dual-Channel Usage

Both channels of VG10/VGC10 can be controlled independently:

- Channel A is controlled by register 0x0000
- Channel B is controlled by register 0x0001
- When one channel releases, the pump continues running if the other channel still requires vacuum

---

## 8. Version Information

| Item                              | Value                      |
| --------------------------------- | -------------------------- |
| Based on document version         | Connectivity Guide v1.23.0 |
| Applicable devices                | VG10, VGC10                |
| Minimum firmware version (115200 bps) | v2.0.3                 |
| Communication protocol            | Modbus RTU (RS485)         |

---

## 9. Safety Notes

- Do not exceed 80% target vacuum
- Do not exceed 1000 mA current limit
- Use this interface only with sufficient integration experience
- Always read the device operating instructions before use
- Improper use may damage the device and void the warranty
```

### 3. Invoke the skill in IDE

In IDE Chat, run:

```
/dobot-plus
```

The agent follows the steps in `SKILL.md` automatically:

1. Parse `doc.md` and break it down into atomic function items
2. Generate and validate `function.json`
3. Generate scaffold code for Lua scripts, HTTP APIs, block configs, UI pages, and more
4. Prompt you to run `dpt build` to produce the final plugin package

![skill demo](../../../../../assets/imgs/skill.png)

## Troubleshooting

### Skill not recognized by IDE

Verify that the skill is installed at `~/agents/skills/dobot-plus/SKILL.md` and that Agent Skills are enabled in IDE settings.

### Missing doc.md

The skill does not create or modify `doc.md`. Prepare a complete device specification in the project root before invoking `/dobot-plus`.

### Poor Agent results

- Confirm on-site communication parameters match the manual  
- Review `doc.md` for ambiguous or contradictory descriptions  
- Check the Agent model: in VS Code Copilot use **GPT-5.4** or newer; in Cursor, **Auto** mode generally works well

## Related links

- [@dobot-plus/cli](https://www.npmjs.com/package/@dobot-plus/cli) — Dobot+ plugin development CLI
- [@dobot-plus/template](https://www.npmjs.com/package/@dobot-plus/template) — Plugin project template
- [Dobot+ documentation](https://dobot-arm.github.io/dobotplus/)
