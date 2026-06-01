# Tray

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Command List

A tray is a carrying device for placing bulk materials according to a specific arrangement pattern, commonly used in automated loading and unloading processes. Trays typically feature an array of grooves, with each groove capable of holding one material. Using tray commands, you can create a complete array of tray points by teaching a few points, and you can retrieve specific points from an existing tray to quickly achieve automatic loading and unloading by the robot.

| Command      | Function         |
| ------------ | ---------------- |
| CreateTray   | Create a tray    |
| GetTrayPoint | Get a tray point |

## CreateTray

**Prototype:**

```lua
CreateTray(Trayname, {Count}, {P1,P2})  -- One-dimensional tray
CreateTray(Trayname, {row,col}, {P1,P2,P3,P4})  -- Two-dimensional tray
CreateTray(Trayname, {row,col,layer}, {P1,P2,P3,P4,P5,P6,P7,P8})  -- Three-dimensional tray
```

**Description:**

Creates a tray, supporting the creation of one-dimensional, two-dimensional, and three-dimensional trays. A maximum of 20 trays can be created. If a tray with the same name is created, it will overwrite the existing tray, not increasing the total number of trays.

**Required Parameters:**

- `Trayname`: The name of the tray, a string with a maximum length of 32 bytes, which cannot be purely numeric or consist solely of spaces.
- The last two parameters are table variables, and the number of values within the tables varies according to the dimensionality of the tray being created, as described below.

- **Creating a One-Dimensional Tray**: A one-dimensional tray consists of a set of points distributed evenly along a straight line.

  - `{Count}`: Count indicates the number of points, with a value range of [2, 50]. Non-integer input will automatically round down.
  - `{P1,P2}`: P1 and P2 are the two endpoints of the tray, supporting taught points and pose variables.

- **Creating a Two-Dimensional Tray**: A two-dimensional tray consists of a set of points distributed in an array on a plane.

  - `{row,col}`: `row` represents the number of points in the row direction (from P1 to P2), and `col` represents the number of points in the column direction (from P1 to P4). Both ranges are the same as the Count of a one-dimensional tray.
  - `{P1,P2,P3,P4}`: P1, P2, P3, and P4 are the four vertices of the two-dimensional tray, supporting taught points and pose variables.

- **Creating a Three-Dimensional Tray**: A three-dimensional tray consists of a set of points distributed in three-dimensional space, visualized as multiple two-dimensional trays stacked vertically.

  - `{row,col,layer}`: `row` indicates the number of points in the row direction (from P1 to P2), `col` indicates the number of points in the column direction (from P2 to P4), and `layer` indicates the number of layers (from P1 to P5).
  - `{P1,P2,P3,P4,P5,P6,P7,P8}`: P1 to P8 are the eight vertices of the three-dimensional tray, supporting taught points and pose variables.

**Note:**
If you are using an end tool, please ensure that the tool coordinate system corresponding to the end tool is selected when teaching the points.

**Example:**

```lua
-- Create a one-dimensional tray named "t1" with 5 points.
CreateTray("t1", {5}, {P1,P2})
-- Create a two-dimensional tray named "t2" with 4 rows and 5 columns.
CreateTray("t2", {4,5}, {P1,P2,P3,P4})
-- Create a three-dimensional tray named "t3" with 4 rows, 5 columns, and 6 layers.
CreateTray("t3", {4,5,6}, {P1,P2,P3,P4,P5,P6,P7,P8})
```

## GetTrayPoint

**Prototype:**

```lua
GetTrayPoint(Trayname, index)
```

**Description:**

Retrieve the point at a specified index from a specified tray. The point index is related to the order in which points were passed when creating the tray.

- **One-Dimensional Tray**: Point P1 has an index of 1, and P2 has the same index as the total number of points, and so on.

- **Two-Dimensional Tray**: The relationship between the taught points and point indices is illustrated below using a 3x3 tray as an example.

- **Three-Dimensional Tray**: Refer to the two-dimensional tray; the first point of the second layer has an index equal to the last point of the first layer's index plus one, and so on.

**Required Parameters:**

- `Trayname`: The name of the created tray, a string with a maximum length of 32 bytes.
- `index`: The index of the point to retrieve.

**Returns:**

The coordinates of the corresponding point at the specified index. If taught points were used to create the tray, the returned format will also be that of taught points. If pose variables were used, the returned format will be that of pose variables.

**Example:**

```lua
-- Get the point with index 3 from the tray named "t1".
GetTrayPoint("t1", 3)
```
