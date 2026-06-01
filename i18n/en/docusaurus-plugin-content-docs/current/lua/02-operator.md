# Operators

> Different versions of controllers, plugins, and upper computers support different Lua API commands. Developers can view the specific supported Lua APIs in the "Application" menu of DobotStudio Pro, under the "Script Programming" command sidebar.

## Arithmetic Operators

Arithmetic operators are used to perform mathematical calculations.

| Operator | Description             |
| -------- | ----------------------- | ---------- |
| `+`      | Addition                |
| `-`      | Subtraction             |
| `*`      | Multiplication          |
| `/`      | Floating-point division |
| `//`     | Floor division          |
| `%`      | Modulus (remainder)     |
| `^`      | Exponentiation          |
| `&`      | Bitwise AND             |
| `        | `                       | Bitwise OR |
| `~`      | Bitwise XOR             |
| `<<`     | Bitwise left shift      |
| `>>`     | Bitwise right shift     |

### Example:

```lua
a = 20
b = 5

print(a + b)            -- Prints the result of a + b: 25
print(a - b)            -- Prints the result of a - b: 15
print(a * b)            -- Prints the result of a * b: 100
print(a / b)            -- Prints the result of a / b: 4
print(a // b)           -- Prints the result of a // b (floor division): 4
print(a % b)            -- Prints the result of a % b (modulus): 0
print(a ^ b)            -- Prints the result of a raised to the power of b: 3200000
print(a & b)            -- Prints the result of bitwise AND: 4
print(a | b)            -- Prints the result of bitwise OR: 21
print(a ~ b)            -- Prints the result of bitwise XOR: 17
print(a << b)           -- Prints the result of a left shifted by b: 640
print(a >> b)           -- Prints the result of a right shifted by b: 0
```

## Relational Operators

Relational operators are used to compare two values.

| Operator | Description              |
| -------- | ------------------------ |
| `==`     | Equal to                 |
| `~=`     | Not equal to             |
| `<=`     | Less than or equal to    |
| `>=`     | Greater than or equal to |
| `<`      | Less than                |
| `>`      | Greater than             |

### Example:

```lua
a = 20
b = 5

print(a == b)            -- Prints the comparison result: false
print(a ~= b)            -- Prints the comparison result: true
print(a <= b)            -- Prints the comparison result: false
print(a >= b)            -- Prints the comparison result: true
print(a < b)             -- Prints the comparison result: false
print(a > b)             -- Prints the comparison result: true
```

## Logical Operators

Logical operators are used to perform logical operations on boolean values.

| Operator | Description                                                        |
| -------- | ------------------------------------------------------------------ |
| `and`    | Logical AND; returns true if both sides are true, otherwise false. |
| `or`     | Logical OR; returns true if at least one side is true.             |
| `not`    | Logical NOT; reverses the boolean value.                           |

### Example:

```lua
a = true
b = false

print(a and b)           -- true AND false results in false
print(a or b)            -- true OR false results in true
print(20 > 5 and not true) -- true AND NOT true, which results in false
```

These operators enable various forms of computation and logical reasoning in Lua scripts, providing the foundation for more complex programming logic.
