# Program Control

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

Program control functions are general functions related to the control of program execution.

| Command           | Function                                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------------------- |
| Print             | Print debugging information to the console                                                            |
| Log               | Output custom logs                                                                                    |
| Wait              | Wait for a specified time or until a specified condition is met before continuing to the next command |
| Pause             | Pause script execution                                                                                |
| ResetElapsedTime  | Start timing                                                                                          |
| ElapsedTime       | End timing                                                                                            |
| Systime           | Get the current system time                                                                           |
| SetGlobalVariable | Set a global variable                                                                                 |

## Print

**Prototype:**

```lua
Print(value)
```

**Description:**

Print debugging information to the console (the command can also be written as `print`).

**Note:**
The format of the printed variable may differ from the format described in this document, but it represents the same data format. Refer to the format described in this document for understanding and usage.

```lua
-- For example, if the variable format is {pose={x,y,z,rx,ry,rz}}, the printed format will be similar to:
table:0x123abc{
  [pose] => table:0x123abc{
  [1] => x
  [2] => y
  [3] => z
  [4] => rx
  [5] => ry
  [6] => rz
  }
}
```

**Required Parameters:**

- value: The data to be printed.

**Example:**

```lua
-- Print the string 'Success' to the console.
Print('Success')
```

## Log

**Prototype:**

```lua
Log(value)
```

**Description:**

Output custom-level log information, which can be viewed and exported from the control software's log page.

**Required Parameters:**

- value: Log information.

**Example:**

```lua
-- Output log information with the content 'test'.
Log('test')
```

## Wait

**Prototype:**

```lua
Wait(time_ms)
Wait(check_str)
Wait(check_str, timeout_ms)
```

**Description:**

Wait for a specified time or until a specified condition is met after the robotic arm completes the previous command before continuing to the next command. The maximum waiting time is 2147483647 ms. Setting a parameter value above the maximum will render the command invalid.

**Required Parameters:**

- `time_ms`: When this parameter is of type integer, it indicates the specified waiting time. If less than or equal to 0, it indicates no wait. (Unit: ms)
- `check_str`: When this parameter is of type string, it indicates the condition for judgment, and the next command will continue only after the logic evaluates to true.

**Optional Parameters:**

- `timeout_ms`: Timeout period. If the judgment logic remains false and exceeds this time, the system will continue to execute the next command and return false. If less than or equal to 0, it indicates no wait, resulting in an immediate timeout. If this parameter is not set, it indicates no timeout, and it will keep waiting until the judgment logic becomes true. (Unit: ms)

**Returns:**

Returns true if the condition is met and execution continues; returns false if it continues due to timeout.

**Example:**

```lua
-- Wait for 300 ms.
Wait(300)
-- Continue running when DI1 is ON.
Wait("DI(1) == ON")
-- Continue running when DO1 is ON and AI(1) is less than 7.
Wait("GetDO(1) == ON and AI(1) < 7")
-- Execute different business logic based on the state of DI1 within 1 second.
if (Wait("DI(1) == ON", 1000)) then
    -- DI1 state is ON
else
    -- DI1 state is OFF and waiting exceeded 1 second
end
```

## Pause

**Prototype:**

```lua
Pause()
```

**Description:**

Pause script execution. It can only be resumed through control software or remote control.

**Example:**

```lua
-- The robotic arm moves to point P1 and then pauses. It will only continue to point P2 after external control resumes.
MovJ(P1)
Pause()
MovJ(P2)
```

## ResetElapsedTime

**Prototype:**

```lua
ResetElapsedTime()
```

**Description:**

Start timing after all commands before this command have completed. It must be used together with `ElapsedTime()`, and can be used to calculate execution time.

**Example:**

Please refer to the example for `ElapsedTime`.

## ElapsedTime

**Prototype:**

```lua
ElapsedTime()
```

**Description:**

End timing and return the time difference. It must be used together with `ResetElapsedTime()`.

**Returns:**

The time difference from the start to the end of timing, in milliseconds. It can count up to a maximum of 4294967295 ms (about 49.7 days). After exceeding this time, it will start counting from 0 again.

**Example:**

```lua
-- Calculate the time taken for the robotic arm to move back and forth 10 times between P1 and P2, and print to the console.
MovJ(P2)
ResetElapsedTime()
for i=1,10 do
    MovL(P1)
    MovL(P2)
end
print (ElapsedTime())
```

## Systime

**Prototype:**

```lua
Systime()
```

**Description:**

Get the current system time.

**Returns:**

The current system time as a Unix timestamp, converted to milliseconds. This represents the number of milliseconds from Greenwich Mean Time (GMT) January 1, 1970, to the current time, generally used to calculate time differences. To get local time, convert the obtained Greenwich time based on the local time zone.

**Example:**

```lua
-- Get the current system time.
local time1 = Systime()
print(time1)  -- > 1686304295963, converted to Beijing time is 2023-06-09 17:51:35 (plus 963 milliseconds)
local time2 = Systime()
print(time2)  -- > 1686304421968, converted to Beijing time is 2023-06-09 17:53:41 (plus 968 milliseconds)

-- Calculate the time taken for the robotic arm to move to P1, in milliseconds.
local time1 = Systime()
MovL(P1)
local time2 = Systime()
print(time2 - time1)
```

## SetGlobalVariable

**Prototype:**

```lua
SetGlobalVariable(key, val)
```

**Description:**

Set a global variable. It is recommended to use this function to assign values to global variables instead of using `=`.

**Required Parameters:**

- key: The name of the global variable to be set.
- val: The value of the global variable to be set. Supported data types include bool, table, string, and number.

**Example:**

```lua
-- Set the global variable g1 to 10.
SetGlobalVariable("g1", 10)
```
