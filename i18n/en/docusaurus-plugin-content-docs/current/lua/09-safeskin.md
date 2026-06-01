# Safe Skin

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

Safe skin commands are used to set the functionality related to safe skin.

| Command        | Function                                       |
| -------------- | ---------------------------------------------- |
| EnableSafeSkin | Safe skin switch                               |
| SetSafeSkin    | Set the sensitivity of various safe skin parts |

## EnableSafeSkin

**Prototype:**

```lua
EnableSafeSkin(ON|OFF)
```

**Description:**

This command acts as a switch for the safe skin.

**Required Parameters:**

- ON|OFF: ON means to enable safe skin, OFF means to disable safe skin.

**Returns:**

- 0: Safe skin not detected
- 1: Safe skin detected

**Example:**

```lua
-- Enable safe skin.
EnableSafeSkin(ON)
```

## SetSafeSkin

**Prototype:**

```lua
SetSafeSkin(part, status)
```

**Description:**

Sets the sensitivity of various safe skin parts.

**Required Parameters:**

- part: The part to be set, valid range is 3 to 6
  - 3: Forearm
  - 4: J4 joint
  - 5: J5 joint
  - 6: J6 joint
- status: The sensitivity to be set, valid range is 0 to 3
  - 0: Off
  - 1: Low sensitivity (approach distance ≤ 5 cm)
  - 2: Medium sensitivity (approach distance ≤ 10 cm)
  - 3: High sensitivity (approach distance ≤ 15 cm)

**Example:**

```lua
-- Set the sensitivity of the safe skin on the forearm to off.
SetSafeSkin(3, 0)
```
