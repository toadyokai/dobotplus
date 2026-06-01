# 程序控制

> 不同版本的控制器、插件和上位机支持不同的 lua API 指令，开发者可在 DobotStudio Pro “应用” 菜单，“脚本编程” 的指令侧边栏查看具体支持的 lua API

## 指令列表

程序控制函数为程序运行控制相关的通用函数。

指令 功能
Print 打印调试信息到控制台
Log 输出自定义日志
Wait 等待指定时间或满足指定条件后再继续执行下一条命令
Pause 暂停脚本运行
ResetElapsedTime 开始计时
ElapsedTime 结束计时
Systime 获取当前系统时间
SetGlobalVariable 设置全局变量

## Print

**原型：**

```lua
Print(value)
```

**描述：**

打印调试信息到控制台（命令名也可写成 print）。

说明：
变量打印出来的格式和本文档中描述的格式可能有所差异，但表示的是同一种数据格式，参考本文档中描述的格式理解和使用即可。

```lua
-- 例如，变量的格式为 {pose={x,y,z,rx,ry,rz}}，打印出来的格式则类似于：
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

**必选参数：**

- value：待打印的数据

**示例：**

```lua
-- 打印字符串Success到控制台。
Print('Success')
```

## Log

**原型：**

```lua
Log(value)
```

**描述：**

输出自定义级别的日志信息，可在控制软件日志页面中查看及导出。

**必选参数：**

value：日志信息

**示例：**

```lua
-- 输出内容为test的日志信息。
Log('test')
```

## Wait

**原型：**

```lua
Wait(time_ms)
Wait(check_str)
Wait(check_str, timeout_ms)
```

**描述：**

机械臂完成上一条指令后，等待指定时间或满足指定条件后再继续执行下一条命令。等待时间的最大值为 2147483647ms，设置的参数超过最大值会导致指令无效。

**必选参数：**

time_ms：参数值为 integer 类型时，表示指定等待时间，小于等于 0 时表示不等待。单位：ms
check_str：参数值为 string 类型时，表示判断逻辑，逻辑为 true 后再继续执行下一条指令。
可选参数：

timeout_ms：超时时间。判断逻辑一直为 false 且等待超过该时间时，系统会继续执行下一条指令并返回 false。小于等于 0 时表示不等待，立刻超时。不设置该参数时，表示不会超时，会一直等待直到判断逻辑为 true。单位：ms

返回：

满足条件并继续运行时，返回 true；不满足条件，因超时导致继续运行时，返回 false。

**示例：**

```lua
-- 等待300ms。
Wait(300)
-- DI1为ON时继续运行。
Wait("DI(1) == ON")
-- DO1为ON且AI(1)小于7时继续运行。
Wait("GetDO(1) == ON and AI(1) < 7")
-- 根据1s内DI1的状态执行不同的业务逻辑。
if (Wait("DI(1) == ON", 1000))
then
    -- DI1状态为ON
else
    -- DI1状态为OFF且等待超过1s
end
```

## Pause

**原型：**

```lua
Pause()
```

**描述：**

暂停脚本运行。需要通过控制软件或者远程控制操作才可继续运行。

**示例：**

```lua
-- 机械臂运行至P1点后暂停运行，通过外部控制继续运行后才会运行至P2点。
MovJ(P1)
Pause()
MovJ(P2)
```

## ResetElapsedTime

**原型：**

```lua
ResetElapsedTime()
```

**描述：**

待此指令前所有指令执行完成后开始计时，需配合 ElapsedTime()一起使用，可用于计算运行时间。

**示例：**

请参考 ElapsedTime 的示例。

## ElapsedTime

**原型：**

```lua
ElapsedTime()
```

**描述：**

结束计时，返回时间差，需配合 ResetElapsedTime()一起使用。

**返回：**

从开始计时到结束计时的时间差，单位毫秒。最大可统计 4294967295ms（约 49.7 天），超过此时间后会从 0 开始重新计数。

**示例：**

```lua
-- 计算机械臂在P1和P2间直线运动来回10次的时间，打印至控制台。
MovJ(P2)
ResetElapsedTime()
for i=1,10 do
    MovL(P1)
    MovL(P2)
end
print (ElapsedTime())
```

## Systime

**原型：**

```lua
Systime()
```

**描述：**

获取当前系统时间。

**返回：**

系统当前时间的 Unix 时间戳，单位转换为了毫秒，即从格林威治时间 1970 年 1 月 1 日零时到当前时间的毫秒数，一般用于计算时间差。如需获取当地时间，请根据当地时区使用获取的格林威治时间换算获得。

**示例：**

```lua
-- 获取系统当前时间。
local time1 = Systime()
print(time1)  -- > 1686304295963,换算为北京时间为2023-06-09 17:51:35（加963毫秒）
local time2 = Systime()
print(time2)  -- > 1686304421968,换算为北京时间为2023-06-09 17:53:41（加968毫秒）

-- 计算机械臂移动到P1所花费的时间，单位毫秒。
local time1 = Systime()
MovL(P1)
local time2 = Systime()
print(time2-time1)
```

## SetGlobalVariable

**原型：**

```lua
SetGlobalVariable(key,val)
```

**描述：**

设置全局变量。如需对全局变量进行赋值，建议使用此函数，不建议使用”=“。

**必选参数：**

key：要设置的全局变量的名称。
val：要设置的全局变量的值，支持的数据类型包括 bool，table，string，number。
**示例：**

```lua
-- 设置全局变量g1的值为10
SetGlobalVariable("g1",10)
```
