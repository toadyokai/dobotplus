# Modbus

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

Modbus is a communication protocol widely used for connecting industrial electronic devices. The following instructions outline the primary functions available for establishing communication between a Modbus master and slave devices, along with details on how to read from and write to various types of Modbus registers.

## Instruction List

The following table provides an overview of Modbus functions used for communication:

| Command           | Function                                                        |
| ----------------- | --------------------------------------------------------------- |
| `ModbusCreate`    | Create a Modbus master and establish a connection with a slave. |
| `ModbusRTUCreate` | Create a Modbus master based on RS485 interface.                |
| `ModbusClose`     | Disconnect from the Modbus slave.                               |
| `GetInBits`       | Read contact registers.                                         |
| `GetInRegs`       | Read input registers.                                           |
| `GetCoils`        | Read coil registers.                                            |
| `SetCoils`        | Write to coil registers.                                        |
| `GetHoldRegs`     | Read holding registers.                                         |
| `SetHoldRegs`     | Write to holding registers.                                     |

The Modbus function codes for various register types are as follows:

| Register Type    | Read Register | Write Single Register | Write Multiple Registers |
| ---------------- | ------------- | --------------------- | ------------------------ |
| Coil Register    | 01            | 05                    | 0F                       |
| Contact Register | 02            | -                     | -                        |
| Input Register   | 04            | -                     | -                        |
| Holding Register | 03            | 06                    | 10                       |

## `ModbusCreate`

### Prototype

```lua
ModbusCreate(IP, port, slave_id, isRTU)
```

### Description

This function creates a Modbus master and establishes a connection with a slave device. It supports a maximum of 15 simultaneous connections.

- For built-in slave devices, set `IP` to the robot's IP (default is `192.168.5.1`, which can be modified) and the port to `502` (map1) or `1502` (map2). Refer to the Modbus register definition appendix for details.
- For third-party slave devices, set `IP` and port to the respective addresses.

### Required Parameters

- **IP**: Slave device's IP address.
- **port**: Slave device's port.

### Optional Parameters

- **slave_id**: Slave ID.
- **isRTU**: Boolean value. If omitted or set to `false`, it establishes a Modbus TCP connection; if `true`, it establishes a Modbus RTU connection.

**Note**: This parameter determines the protocol format for data transmission after the connection is established and does not affect the connection result. If set incorrectly, the connection may succeed, but subsequent communications may fail.

### Return Values

- **err**:

  - `0`: Successfully created the Modbus master.
  - `1`: The maximum number of Modbus masters has been reached; creation failed.
  - `2`: Initialization of the master failed (check IP, port, network, etc.).
  - `3`: Connection to the slave failed (check if the slave is operational and if the network is functional).

- **id**: Returns the index of the created master for subsequent Modbus function calls. Range: `[0, 14]`

### Example

```lua
-- Create Modbus master and connect to specified slave.
local ip = "192.168.5.123"
local port = 503
local err = 0
local id = 0
err, id = ModbusCreate(ip, port, 1)

-- Create Modbus master and connect to built-in slave.
local ip = "192.168.5.1"
local port = 502
err, id = ModbusCreate(ip, port)
```

## `ModbusRTUCreate`

### Prototype

```lua
ModbusRTUCreate(slave_id, baud, parity, data_bit, stop_bit)
```

### Description

Creates a Modbus master based on RS485 interface and establishes a connection with a slave device. It supports a maximum of 15 simultaneous connections.

### Required Parameters

- **slave_id**: Slave ID.
- **baud**: Baud rate for the RS485 interface.

### Optional Parameters

- **parity**: Parity bit. `"O"` for odd, `"E"` for even, `"N"` for none. Default is `"E"` if not provided.
- **data_bit**: Data bit length. Default value is `8`.
- **stopbit**: Stop bit length. Options are `1` or `2`. Default value is `1`.

### Return Values

- **err**:
  - `0`: Successfully created the Modbus master.
  - `1`: Failed to create the Modbus master.
- **id**: Returns the index of the created master for subsequent Modbus function calls.

### Example

```lua
-- Create Modbus master and connect to RS485 slave with ID 1 and baud rate of 115200.
err, id = ModbusRTUCreate(1, 115200)
```

## `ModbusClose`

### Prototype

```lua
ModbusClose(id)
```

### Description

Disconnects from the Modbus slave and releases the master.

### Required Parameters

- **id**: Index of the created master.

### Return Values

- Operation result:
  - `0`: Successfully disconnected.
  - `1`: Failed to disconnect.

### Example

```lua
-- Disconnect from the Modbus slave.
ModbusClose(id)
```

## `GetInBits`

### Prototype

```lua
GetInBits(id, addr, count)
```

### Description

Reads the values from the Modbus slave's contact register address. Corresponds to Modbus function code 02.

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the contact register.
- **count**: Number of continuous contact registers to read (1-2000, depending on the slave's register count and protocol specifications).

### Return Values

Returns the values from the contact register address stored in a table. The first value corresponds to the value of the starting address.

### Example

```lua
-- Read 5 continuous values starting from address 0.
inBits = GetInBits(id, 0, 5)
```

## `GetInRegs`

### Prototype

```lua
GetInRegs(id, addr, count, type)
```

### Description

Reads the values from the Modbus slave's input register address based on the specified data type. Corresponds to Modbus function code 04.

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the input register.
- **count**: Number of continuous input registers to read (1-125, depending on the slave's register count and protocol specifications).

### Optional Parameters

- **type**: Data type (default is `U16` if omitted).
  - `U16`: 16-bit unsigned integer (2 bytes, occupying 1 register).
  - `U32`: 32-bit unsigned integer (4 bytes, occupying 2 registers).
  - `F32`: 32-bit single-precision float (4 bytes, occupying 2 registers).
  - `F64`: 64-bit double-precision float (8 bytes, occupying 4 registers).

### Return Values

Returns the values from the input register address stored in a table. The first value corresponds to the starting address.

### Example

```lua
-- Read a 32-bit unsigned integer starting from address 2048.
data = GetInRegs(id, 2048, 2, "U32")
```

## `GetCoils`

### Prototype

```lua
GetCoils(id, addr, count)
```

### Description

Reads the values from the Modbus slave's coil register address. Corresponds to Modbus function code 01.

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the coil register.
- **count**: Number of continuous coil registers to read (1-2000, depending on the slave's register count and protocol specifications).

### Return Values

Returns the values from the coil register address stored in a table. The first value corresponds to the starting address.

### Example

```lua
-- Read 5 continuous values starting from address 0.
Coils = GetCoils(id, 0, 5)
```

## `SetCoils`

### Prototype

```lua
SetCoils(id, addr, count, table)
```

### Description

Writes specified values to the coil registers at the specified addresses. Corresponds to Modbus function codes 05 (write single) and 0F (write multiple).

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the coil register.
- **count**: Number of continuous coil registers to write (1-1968, depending on the slave's register count and protocol specifications).
- **table**: Values to be written to the coil registers stored in a table. The first value corresponds to the starting address.

### Example

```lua
-- Write continuous values to 5 coils starting from address 1024.
local Coils = {0, 1, 1, 1, 0}
SetCoils(id, 1024, #Coils, Coils)
```

## `GetHoldRegs`

### Prototype

```lua
GetHoldRegs(id, addr, count, type)
```

### Description

Reads the values from the Modbus slave's holding register

address based on the specified data type. Corresponds to Modbus function code 03.

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the holding register.
- **count**: Number of continuous holding registers to read (1-125, depending on the slave's register count and protocol specifications).

### Optional Parameters

- **type**: Data type (default is `U16` if omitted).
  - `U16`: 16-bit unsigned integer (2 bytes, occupying 1 register).
  - `U32`: 32-bit unsigned integer (4 bytes, occupying 2 registers).
  - `F32`: 32-bit single-precision float (4 bytes, occupying 2 registers).
  - `F64`: 64-bit double-precision float (8 bytes, occupying 4 registers).

### Return Values

Returns the values from the holding register address stored in a table. The first value corresponds to the starting address.

### Example

```lua
-- Read a 32-bit unsigned integer starting from address 2048.
holdRegData = GetHoldRegs(id, 2048, 2, "U32")
```

## `SetHoldRegs`

### Prototype

```lua
SetHoldRegs(id, addr, count, table)
```

### Description

Writes specified values to the holding registers at the specified addresses. Corresponds to Modbus function codes 06 (write single) and 10 (write multiple).

### Required Parameters

- **id**: Index of the created master.
- **addr**: Starting address of the holding register.
- **count**: Number of continuous holding registers to write (1-123, depending on the slave's register count and protocol specifications).
- **table**: Values to be written to the holding registers stored in a table. The first value corresponds to the starting address.

### Example

```lua
-- Write continuous values to 5 holding registers starting from address 2048.
local holdRegs = {100, 200, 300, 400, 500}
SetHoldRegs(id, 2048, #holdRegs, holdRegs)
```
