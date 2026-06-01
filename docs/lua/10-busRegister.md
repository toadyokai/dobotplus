# 总线寄存器

> 不同版本的控制器、插件和上位机支持不同的 lua API 指令，开发者可在 DobotStudio Pro “应用” 菜单，“脚本编程” 的指令侧边栏查看具体支持的 lua API

指令列表
总线寄存器指令用于读写 Profinet 或 Ethernet/IP 总线寄存器。

说明：
Magician E6 不支持这组指令。
|指令 |功能|
|-|-|
|GetInputBool |获取输⼊寄存器指定地址的 bool 值|
|GetInputInt |获取输⼊寄存器指定地址的 int 值|
|GetInputFloat |获取输⼊寄存器指定地址的 float 值|
|GetOutputBool |获取输出寄存器指定地址的 bool 值|
|GetOutputInt |获取输出寄存器指定地址的 int 值|
|GetOutputFloat| 获取输出寄存器指定地址的 float 值|
|SetOutputBool |设置输出寄存器指定地址的 bool 值|
|SetOutputInt |设置输出寄存器指定地址的 int 值|
|SetOutputFloat |设置输出寄存器指定地址的 float 值|

## GetInputBool

**原型：**

```lua

GetInputBool(address)
```

**描述：**

获取输⼊寄存器指定地址的 bool 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-63]

**返回：**

指定的寄存器地址的值，为 0 或 1

**示例：**

```lua

-- 当输入寄存器0的值为1时，执行后续操作。
if(GetInputBool(0)==1)
then
    -- 执行后续操作
end
```

## GetInputInt

**原型：**

```lua

GetInputInt(address)
```

**描述：**

获取输⼊寄存器指定地址的 int 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]

**返回：**

指定的寄存器地址的值，为整型数（int32）

**示例：**

```lua

-- 读取输入寄存器1的值并赋值给变量regInt。
local regInt = GetInputInt(1)
```

## GetInputFloat

**原型：**

```lua

GetInputFloat(address)
```

**描述：**

获取输⼊寄存器指定地址的 float 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]

**返回：**

指定的寄存器地址的值，为单精度浮点数（float）

**示例：**

```lua

-- 读取输入寄存器2的值并赋值给变量regFloat。
local regFloat = GetInputFloat(2)
```

## GetOutputBool

**原型：**

```lua

GetOutputBool(address)
```

**描述：**

获取输出寄存器指定地址的 bool 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-63]

**返回：**

指定的寄存器地址的值，为 0 或 1

**示例：**

```lua

-- 当输出寄存器0的值为1时，执行后续操作。
if(GetOutputBool(0)==1)
then
    -- 执行后续操作
end
```

## GetOutputInt

**原型：**

```lua

GetOutputInt(address)
```

**描述：**

获取输出寄存器指定地址的 int 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]

**返回：**

指定的寄存器地址的值，为整型数（int32）

**示例：**

```lua

-- 读取输出寄存器1的值并赋值给变量regInt。
local regInt = GetOutputInt(1)
```

## GetOutputFloat

**原型：**

```lua

GetOutputFloat(address)
```

**描述：**

获取输出寄存器指定地址的 float 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]

**返回：**

指定的寄存器地址的值，为单精度浮点数（float）

**示例：**

```lua

-- 读取输出寄存器2的值并赋值给变量regFloat。
local regFloat = GetOutputFloat(2)
```

## SetOutputBool

**原型：**

```lua

SetOutputBool(address, value)
```

**描述：**

设置输出寄存器指定地址的 bool 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-63]
value：要设置的值，支持布尔值或 0/1
**示例：**

```lua

-- 设置输出寄存器0的值为假。
SetOutputBool(0,0)
```

## SetOutputInt

**原型：**

```lua
SetOutputInt(address, value)
```

**描述：**

设置输出寄存器指定地址的 int 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]
value：要设置的值，支持整型数（int32）
**示例：**

```lua

-- 设置输出寄存器1的值为123。
SetOutputInt(1,123)
```

## SetOutputFloat

**原型：**

```lua

SetOutputFloat(address, value)
```

**描述：**

设置输出寄存器指定地址的 float 类型的数值。

**必选参数：**

address：寄存器地址，取值范围[0-23]
value：要设置的值，支持单精度浮点数（float）。受浮点数的存储机制（IEEE754）限制，单精度浮点数可保存的有效数字约 6 到 7 位（与小数点位置无关）。有效数字大于 6 位的值保存为单精度浮点数可能会产生偏差，有效数字位数越多可能产生的偏差越大。
**示例：**

```lua

-- 设置输出寄存器2的值为12.3。
SetOutputFloat(2,12.3)
```
