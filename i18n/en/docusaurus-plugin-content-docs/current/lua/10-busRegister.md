# Bus Register

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

Bus register commands are used to read and write Profinet or Ethernet/IP bus registers.

**Note:**  
The Magician E6 does not support this set of commands.

| Command        | Function                                                       |
| -------------- | -------------------------------------------------------------- |
| GetInputBool   | Get the boolean value at the specified input register address  |
| GetInputInt    | Get the integer value at the specified input register address  |
| GetInputFloat  | Get the float value at the specified input register address    |
| GetOutputBool  | Get the boolean value at the specified output register address |
| GetOutputInt   | Get the integer value at the specified output register address |
| GetOutputFloat | Get the float value at the specified output register address   |
| SetOutputBool  | Set the boolean value at the specified output register address |
| SetOutputInt   | Set the integer value at the specified output register address |
| SetOutputFloat | Set the float value at the specified output register address   |

## GetInputBool

**Prototype:**

```lua
GetInputBool(address)
```

**Description:**

Gets the boolean value at the specified input register address.

**Required Parameters:**

- address: Register address, valid range [0-63]

**Returns:**

The value at the specified register address, which will be either 0 or 1.

**Example:**

```lua
-- Execute subsequent operations when the value of input register 0 is 1.
if(GetInputBool(0) == 1) then
    -- Execute subsequent operations
end
```

## GetInputInt

**Prototype:**

```lua
GetInputInt(address)
```

**Description:**

Gets the integer value at the specified input register address.

**Required Parameters:**

- address: Register address, valid range [0-23]

**Returns:**

The value at the specified register address, which will be an integer (int32).

**Example:**

```lua
-- Read the value of input register 1 and assign it to the variable regInt.
local regInt = GetInputInt(1)
```

## GetInputFloat

**Prototype:**

```lua
GetInputFloat(address)
```

**Description:**

Gets the float value at the specified input register address.

**Required Parameters:**

- address: Register address, valid range [0-23]

**Returns:**

The value at the specified register address, which will be a single-precision floating-point number (float).

**Example:**

```lua
-- Read the value of input register 2 and assign it to the variable regFloat.
local regFloat = GetInputFloat(2)
```

## GetOutputBool

**Prototype:**

```lua
GetOutputBool(address)
```

**Description:**

Gets the boolean value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-63]

**Returns:**

The value at the specified register address, which will be either 0 or 1.

**Example:**

```lua
-- Execute subsequent operations when the value of output register 0 is 1.
if(GetOutputBool(0) == 1) then
    -- Execute subsequent operations
end
```

## GetOutputInt

**Prototype:**

```lua
GetOutputInt(address)
```

**Description:**

Gets the integer value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-23]

**Returns:**

The value at the specified register address, which will be an integer (int32).

**Example:**

```lua
-- Read the value of output register 1 and assign it to the variable regInt.
local regInt = GetOutputInt(1)
```

## GetOutputFloat

**Prototype:**

```lua
GetOutputFloat(address)
```

**Description:**

Gets the float value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-23]

**Returns:**

The value at the specified register address, which will be a single-precision floating-point number (float).

**Example:**

```lua
-- Read the value of output register 2 and assign it to the variable regFloat.
local regFloat = GetOutputFloat(2)
```

## SetOutputBool

**Prototype:**

```lua
SetOutputBool(address, value)
```

**Description:**

Sets the boolean value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-63]
- value: The value to be set, supports boolean or 0/1.

**Example:**

```lua
-- Set the value of output register 0 to false.
SetOutputBool(0, 0)
```

## SetOutputInt

**Prototype:**

```lua
SetOutputInt(address, value)
```

**Description:**

Sets the integer value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-23]
- value: The value to be set, supports integer (int32).

**Example:**

```lua
-- Set the value of output register 1 to 123.
SetOutputInt(1, 123)
```

## SetOutputFloat

**Prototype:**

```lua
SetOutputFloat(address, value)
```

**Description:**

Sets the float value at the specified output register address.

**Required Parameters:**

- address: Register address, valid range [0-23]
- value: The value to be set, supports single-precision floating-point numbers (float). Due to the storage mechanism of floating-point numbers (IEEE754), single-precision floating-point numbers can hold about 6 to 7 significant digits (regardless of the decimal point position). Values with significant digits greater than 6 may result in deviations when stored as single-precision floating-point numbers, and the more significant digits there are, the greater the potential deviation.

**Example:**

```lua
-- Set the value of output register 2 to 12.3.
SetOutputFloat(2, 12.3)
```
