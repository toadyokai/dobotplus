# Motion

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

Motion commands are used to control the robotic arm's movement. Please read the general instructions before use.

| Command          | Function                                 |
| ---------------- | ---------------------------------------- |
| MovJ             | Joint motion                             |
| MovL             | Linear motion                            |
| Arc              | Arc interpolation movement               |
| Circle           | Full circle interpolation movement       |
| MovJIO           | Joint motion with output DO              |
| MovLIO           | Linear motion with output DO             |
| StartPath        | Reproduce recorded motion trajectory     |
| GetPathStartPose | Get the starting point of the trajectory |
| PositiveKin      | Forward kinematics for joint angles      |
| InverseKin       | Inverse kinematics for poses             |

## MovJ

**Prototype:**

```lua
MovJ(point, {user = 1, tool = 0, a = 20, v = 50, cp = 100, stopcond = "expression"})
```

**Description:**

Moves from the current position to the target point using joint motion.

**Required Parameters:**

- point: Target point.

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command. Range: (0,100]
- cp: Smoothing transition ratio. Range: [0,100]
- stopcond: Stop condition expression, the current motion will end when this condition is met to execute the next command.
  For more details, please refer to the general instructions.

**Examples:**

```lua
-- The robotic arm moves to point P1 with default settings.
MovJ(P1)
-- The robotic arm moves to the specified joint angle with default settings.
MovJ({joint={0,0,90,0,90,0} })
-- The robotic arm moves to a specific pose corresponding to user coordinate system 1 and tool coordinate system 1, with acceleration and speed both at 50%, and a smoothing transition ratio of 50%.
MovJ({pose={300,200,300,180,0,0} },{user=1,tool=1,a=50,v=50,cp=50})
-- First define a point and then call it in the motion command. The effect is the same as the previous command.
customPoint={pose={300,200,300,180,0,0} }
MovJ(customPoint,{user=1,tool=1,a=50,v=50,cp=50})
-- The robotic arm moves to point P1, and the current motion will end if DI1 is ON during the movement.
MovJ(P1,{stopcond="DI(1) == ON"})
```

## MovL

**Prototype:**

```lua
MovL(point, {user = 1, tool = 0, a = 20, v = 50, speed = 500, cp = 100, r = 5, stopcond = "expression"})
```

**Description:**

Moves from the current position to the target point using linear motion.

**Required Parameters:**

- point: Target point.

**Optional Parameters:**

- user: User coordinate system of the target point. Invalid if the target point is a joint variable.
- tool: Tool coordinate system of the target point. Invalid if the target point is a joint variable.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command, mutually exclusive with speed. Range: (0,100]
- speed: Target speed for the robotic arm when executing this command, mutually exclusive with v. If both exist, speed takes precedence. Range: [1, max speed], unit: mm/s
- cp: Smoothing transition ratio, mutually exclusive with r. Range: [0,100]
- r: Smoothing transition radius, mutually exclusive with cp. If both exist, r takes precedence. Range: [0,100], unit: mm
- stopcond: Stop condition expression, the current motion will end when this condition is met to execute the next command.
  For more details, please refer to the general instructions.

**Examples:**

```lua
-- The robotic arm moves to point P1 with default settings.
MovL(P1)
-- The robotic arm moves to point P1 with an absolute speed of 500 mm/s.
MovL(P1,{speed=500})
-- The robotic arm moves to the specified joint angle with default settings.
MovL({joint={0,0,90,0,90,0} })
-- The robotic arm moves to a specific pose corresponding to user coordinate system 1 and tool coordinate system 1, with acceleration and speed both at 50%, and a smoothing transition radius of 5 mm.
MovL({pose={300,200,300,180,0,0} },{user=1,tool=1,a=50,v=50,r=5})
-- First define a point and then call it in the motion command. The effect is the same as the previous command.
customPoint={pose={300,200,300,180,0,0} }
MovL(customPoint,{user=1,tool=1,a=50,v=50,r=5})
-- Both speed and v are present; speed takes effect, and a corresponding warning log will be printed by the controller.
-- Both cp and r are present; r takes effect, and a corresponding warning log will be printed by the controller.
MovL(P1,{v=50,speed=500,cp=60,r=5}) -- Only optional parameters speed and r take effect during execution.
-- The robotic arm moves to point P1, and the current motion will end if DI1 is ON during the movement.
MovL(P1,{stopcond="DI(1) == ON"})
```

## Arc

**Prototype:**

```lua
Arc(P1, P2, {user = 1, tool = 0, a = 20, v = 50, speed = 500, cp = 100, r = 5, stopcond = "expression"})
```

**Description:**

Moves from the current position to the target point using arc interpolation.

The arc is determined by the current position, P1, and P2, so the current position cannot be on the line determined by P1 and P2.

The end posture of the robotic arm during the movement is calculated by interpolating between the current point and the posture of P2, and the posture at point P1 does not participate in the calculation (i.e., the posture of the robotic arm when reaching P1 may differ from the taught posture).

**Required Parameters:**

- P1: Intermediate point of the arc.
- P2: Target point.

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command, mutually exclusive with speed. Range: (0,100]
- speed: Target speed for the robotic arm when executing this command, mutually exclusive with v. If both exist, speed takes precedence. Range: [1, max speed], unit: mm/s
- cp: Smoothing transition ratio, mutually exclusive with r. Range: [0,100]
- r: Smoothing transition radius, mutually exclusive with cp. If both exist, r takes precedence. Range: [0,100], unit: mm
- stopcond: Stop condition expression, the current motion will end when this condition is met to execute the next command.
  For more details, please refer to the general instructions.

**Examples:**

```lua
-- The robotic arm moves to P1, then uses default settings to move to P3 via P2 in an arc.
MovJ(P1)
Arc(P2,P3)
-- The robotic arm moves to P1, then uses the specified pose {300,200,300,180,0,0} to move to P3 via arc, with user coordinate system and tool coordinate system both set to 1, and acceleration and speed both at 50%.
MovJ(P1)
Arc({pose={300,200,300,180,0,0} },P3,{user=1,tool=1,a=50,v=50})
-- The robotic arm moves to P1, then the current motion will end if DI1 is ON during the arc movement to P3 via P2 using default settings.
MovJ(P1)
Arc(P2,P3,{stopcond="DI(1) == ON"})
```

## Circle

**Prototype:**

```lua
Circle(P1, P2, Count, {user = 1, tool = 0, a = 20, v = 50, speed = 500, cp = 100, r = 5, stopcond = "expression"})
```

**Description:**

Performs full circle interpolation movement from the current position and returns to the current position after completing the specified number of circles.

The circle is determined by the current position, P1, and P2, so the current position cannot be on the line determined by P1 and P2, and the circle defined by the three points cannot exceed the robotic arm's movement range.

The end posture of the robotic arm during the movement is calculated by interpolating between the current point and the posture of P2, and the posture at point P1 does not participate in the calculation (i.e., the posture of the robotic

arm when reaching P1 may differ from the taught posture).

**Required Parameters:**

- P1: Intermediate point of the circle.
- P2: Target point.
- Count: Number of circles to be completed.

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command, mutually exclusive with speed. Range: (0,100]
- speed: Target speed for the robotic arm when executing this command, mutually exclusive with v. If both exist, speed takes precedence. Range: [1, max speed], unit: mm/s
- cp: Smoothing transition ratio, mutually exclusive with r. Range: [0,100]
- r: Smoothing transition radius, mutually exclusive with cp. If both exist, r takes precedence. Range: [0,100], unit: mm
- stopcond: Stop condition expression, the current motion will end when this condition is met to execute the next command.
  For more details, please refer to the general instructions.

**Examples:**

```lua
-- The robotic arm moves to P1, then uses default settings to move to P3 via a full circle around P2.
MovJ(P1)
Circle(P2,P3,1)
-- The robotic arm moves to P1, then uses the specified pose {300,200,300,180,0,0} to perform a full circle around P2, completing 10 circles, with user coordinate system and tool coordinate system both set to 1, and acceleration and speed both at 50%.
MovJ(P1)
Circle({pose={300,200,300,180,0,0} },P2,10,{user=1,tool=1,a=50,v=50})
```

## MovJIO

**Prototype:**

```lua
MovJIO(P, { {Mode, Distance, Index, Status}, ...}, {user = 1, tool = 0, a = 20, v = 50, cp = 100})
```

**Description:**

Moves from the current position to the target point using joint motion while simultaneously setting the digital output port status.

**Required Parameters:**

Here’s the translation of the provided text into English:

---

- **P**: Target point.  
  Parallel digital output parameters: Set to trigger a specified digital output (DO) when the robotic arm moves to a specified distance or percentage. Multiple sets can be configured, each containing the following parameters:

  - **Mode**: Trigger mode. 0 indicates percentage triggering, while 1 indicates distance triggering. The system will synthesize the joint angles into an angle vector and calculate the angle difference between the endpoint and the starting point as the total distance of movement.

  - **Distance**: Specified percentage/angle. Since the angle calculation uses the synthesized angle vector, it is recommended to use the percentage mode for a more intuitive effect.

    - When **Distance** is a positive number, it represents the percentage/angle away from the starting point.
    - When **Distance** is a negative number, it represents the percentage/angle away from the target point.

  - When **Mode** is 0, **Distance** represents the percentage of the total angle. The value range is (0,100].
  - When **Mode** is 1, **Distance** represents the angle value. Unit: °.

  - **Index**: The number of the DO terminal.

  - **Status**: The state of the DO to be set, where 0 and OFF indicate no signal, and 1 and ON indicate a signal is present.

---

If you need further adjustments or additional translations, feel free to ask!

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command. Range: (0,100]
- cp: Smoothing transition ratio. Range: [0,100]

| Mode | Distance | Index | Status |
| ---- | -------- | ----- | ------ |
| 0    | Positive | 0-6   | 0 or 1 |
| 1    | Negative | 0-6   | 0 or 1 |

**Examples:**

```lua
-- The robotic arm moves to P1, setting DO2 to ON.
MovJIO(P1, { {0, 30, 2, 1} })
-- The robotic arm moves to P1, setting DO3 to OFF.
MovJIO(P1, { {1, -15, 3, 0} })
```

## MovLIO

**Prototype:**

```lua
MovLIO(P, { {Mode, Distance, Index, Status}, ...}, {user = 1, tool = 0, a = 20, v = 50, speed = 500, cp = 100, r = 5})
```

**Description:**

Moves from the current position to the target point using linear motion while simultaneously setting the digital output port status.

**Required Parameters:**

- **P**: Target point.  
  Parallel digital output parameters: Set to trigger a specified digital output (DO) when the robotic arm moves to a specified distance or percentage. Multiple sets can be configured, each containing the following parameters:

  - **Mode**: Trigger mode. 0 indicates percentage triggering, while 1 indicates distance triggering.

  - **Distance**: Specified percentage/distance.

    - When **Distance** is a positive number, it represents the percentage/distance away from the starting point.
    - When **Distance** is a negative number, it represents the percentage/distance away from the target point.

  - When **Mode** is 0, **Distance** represents the percentage of the total distance. The value range is (0,100].
  - When **Mode** is 1, **Distance** represents the distance value. Unit: mm.

  - **Index**: The number of the DO terminal.

  - **Status**: The state of the DO to be set, where 0 and OFF indicate no signal, and 1 and ON indicate a signal is present.

**Optional Parameters:**

- user: User coordinate system of the target point. Invalid if the target point is a joint variable.
- tool: Tool coordinate system of the target point. Invalid if the target point is a joint variable.
- a: Acceleration ratio for the robotic arm when executing this command. Range: (0,100]
- v: Speed ratio for the robotic arm when executing this command, mutually exclusive with speed. Range: (0,100]
- speed: Target speed for the robotic arm when executing this command, mutually exclusive with v. If both exist, speed takes precedence. Range: [1, max speed], unit: mm/s
- cp: Smoothing transition ratio, mutually exclusive with r. Range: [0,100]
- r: Smoothing transition radius, mutually exclusive with cp. If both exist, r takes precedence. Range: [0,100], unit: mm

| Mode | Distance | Index | Status |
| ---- | -------- | ----- | ------ |
| 0    | Positive | 0-6   | 0 or 1 |
| 1    | Negative | 0-6   | 0 or 1 |

**Examples:**

```lua
-- The robotic arm moves to P1, setting DO2 to ON.
MovLIO(P1, { {0, 30, 2, 1} })
-- The robotic arm moves to P1, setting DO3 to OFF.
MovLIO(P1, { {1, -15, 3, 0} })
```

## StartPath

**Prototype:**

```lua
StartPath(string, {multi = 1, isConst = 0, sample = 50, freq = 0.2, user = 0, tool = 0})
```

**Description:**

Reproduces the recorded trajectory from the specified trajectory file. Before calling this command, the user must manually move the robotic arm to the starting point of the trajectory.

**Required Parameters:**

- string: Path name.

**Optional Parameters:**

- multi: Multiplier for the trajectory speed. Default is 1.
- isConst: Whether to maintain a constant speed while reproducing the trajectory. 0 means normal reproduction; 1 means constant speed.
- sample: Sampling interval for the trajectory. Default is 50 ms.
- freq: Frequency of trajectory reproduction. Default is 0.2 Hz.
- user: User coordinate system.
- tool: Tool coordinate system.

**Examples:**

```lua
-- Get the starting point of the trajectory from "track.csv", then move the robotic arm to that starting point.
local StartPoint = GetPathStartPose("track.csv")
MovJ(StartPoint)
-- Reproduce the trajectory with a speed multiplier of 2.
StartPath("track.csv", {multi = 2, isConst = 0})
```

## GetPathStartPose

**Prototype:**

```lua
GetPathStartPose(string)
```

**Description:**

Gets the starting point of the trajectory.

**Required Parameters:**

- string: Path name.

**Examples:**

```lua
-- Get the starting point of the trajectory from "track.csv".
local StartPoint = GetPathStartPose("track.csv")
print(StartPoint)
```

## PositiveKin

**Prototype:**

```lua
PositiveKin(joint, {user = 1, tool = 0})
```

**Description:**

Performs forward kinematics, providing the joint angles of the robotic arm to calculate its end-effector position in the given Cartesian coordinate system.

**Required Parameters:**

- joint: Joint angles.

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.

**Examples:**

```lua
-- Calculate the end-effector position for the given joint angles.
PositiveKin({joint={0, 0, 90, 0, 90, 0} })
```

## InverseKin

**Prototype:**

```lua
InverseKin(pose, {user = 1, tool = 0})
```

**Description:**

Performs inverse kinematics to calculate the joint angles of the robotic arm based on the given end-effector pose.

**Required Parameters:**

- pose: Target pose.

**Optional Parameters:**

- user: User coordinate system of the target point.
- tool: Tool coordinate system of the target point.

**Examples:**

```lua
-- Calculate the joint angles for the given end-effector pose.
InverseKin({pose={300, 200, 300, 180, 0, 0} })
```

The above provides detailed descriptions and examples for each motion command. When using these commands, please select the appropriate command and parameter configuration based on your specific needs.
