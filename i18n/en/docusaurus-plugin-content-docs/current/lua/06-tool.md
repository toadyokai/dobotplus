# End Effector

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

The end effector commands are used for reading and writing the mechanical arm's end I/O states and setting related parameters.

| Command      | Function                                                                 |
| ------------ | ------------------------------------------------------------------------ |
| ToolDI       | Read the status of the end digital input ports                           |
| ToolDO       | Set the status of the end digital output ports (queue command)           |
| GetToolDO    | Get the current status of the end digital output ports                   |
| ToolAI       | Read the value of the end analog input ports                             |
| SetToolMode  | Set the communication mode of the end multipurpose terminal              |
| SetToolPower | Set the power state of the end tool                                      |
| SetTool485   | Set the data format corresponding to the RS485 interface of the end tool |

## ToolDI

**Prototype:**

```lua
ToolDI(index)
```

**Description:**

Reads the status of the end digital input port.

**Required Parameter:**

- `index`: The number of the end DI terminal.

**Returns:**

- The status of the corresponding DI terminal (ON/OFF).

**Example:**

```lua
-- If end DI1 is ON, move the mechanical arm to point P1 in a linear motion.
if (ToolDI(1) == ON) then
    MovL(P1)
end
```

---

## ToolDO

**Prototype:**

```lua
ToolDO(index, ON|OFF)
```

**Description:**

Sets the status of the end digital output port.

**Required Parameters:**

- `index`: The number of the end DO terminal.
- `ON|OFF`: The status to set the DO port.

**Example:**

```lua
-- Set end DO1 to ON.
ToolDO(1, ON)
```

---

## GetToolDO

**Prototype:**

```lua
GetToolDO(index)
```

**Description:**

Gets the current status of the end digital output port.

**Required Parameter:**

- `index`: The number of the end DO terminal.

**Returns:**

- The status of the corresponding end DO terminal (ON/OFF).

**Example:**

```lua
-- Get the current status of end DO1.
GetToolDO(1)
```

---

## ToolAI

**Prototype:**

```lua
ToolAI(index)
```

**Description:**

Reads the value of the end analog input port. Before using, you need to set the terminal to analog input mode using `SetToolMode`.

**Note:**
No effect if the mechanical arm does not have an end AI interface.

**Required Parameter:**

- `index`: The number of the end AI terminal.

**Returns:**

- The value of the corresponding AI terminal.

**Example:**

```lua
-- Read the value of end AI1 and assign it to the variable test.
test = ToolAI(1)
```

---

## SetToolMode

**Prototype:**

```lua
SetToolMode(mode, type, identify)
```

**Description:**

For mechanical arms with end AI1 and AI2 interfaces and RS485 interface multiplexing (CR and CR A series), this interface can set the mode of the end multiplexing terminal. The default mode is RS485 mode.

**Note:**
No effect if the mechanical arm does not support mode switching.

**Required Parameters:**

- `mode`: The mode of the multiplexing terminal
  - `1`: RS485 mode.
  - `2`: Analog input mode.
- `type`: When `mode` is `1`, this parameter is invalid. When `mode` is `2`, this parameter sets the mode of the analog input. The units represent the mode for AI1 and AI2, with tens place indicating AI2. Mode options:
  - `0`: 0~10V voltage input mode
  - `1`: Current collection mode
  - `2`: 0~5V voltage input mode

**Optional Parameter:**

- `identify`: When the mechanical arm has multiple end connectors, specifies the connector. `1` indicates connector 1, `2` indicates connector 2.

**Example:**

```lua
-- Set the end multiplexing terminal to analog input, both paths to 0~10V voltage input mode.
SetToolMode(2, 0)
```

---

## SetToolPower

**Prototype:**

```lua
SetToolPower(status)
```

**Description:**

Sets the power state of the end tool, generally used to restart the end power supply, such as re-powering and initializing the end gripper. If continuous calls to this interface are needed, it is recommended to wait at least 4ms between calls.

**Note:**
Closing the end power supply will also disable the end DO.

**Required Parameter:**

- `status`: The power state of the end tool, `0`: turn off power; `1`: turn on power.

**Example:**

```lua
-- Restart the power supply for the end tool.
SetToolPower(0)
Wait(5)
SetToolPower(1)
```

---

## SetTool485

**Prototype:**

```lua
SetTool485(baud, parity, stopbit, identify)
```

**Description:**

Sets the data format corresponding to the RS485 interface of the end tool.

**Note:**
No effect if the mechanical arm does not have an end RS485 interface.

**Required Parameter:**

- `baud`: The baud rate of the RS485 interface.

**Optional Parameters:**

- `parity`: Whether there is a parity bit. `"O"` indicates odd parity, `"E"` indicates even parity, `"N"` indicates no parity. The default value is `"N"`.
- `stopbit`: Length of the stop bit. Valid values: `0.5`, `1`, `1.5`, `2`. Values within ±0.1 will be automatically rounded (e.g., `0.4001` rounds to `0.5`, `0.3999` results in an error, `1.09999` rounds to `1`). The default value is `1`.
- `identify`: When the mechanical arm has multiple end connectors, specifies the connector. `1` indicates connector 1, `2` indicates connector 2.

**Example:**

```lua
-- Set the baud rate of the RS485 interface of the end tool to 115200Hz, no parity, and stop bit length of 1.
SetTool485(115200, "N", 1)
```
