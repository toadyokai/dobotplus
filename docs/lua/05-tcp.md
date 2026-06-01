# TCP&UDP

> 不同版本的控制器、插件和上位机支持不同的 lua API 指令，开发者可在 DobotStudio Pro “应用” 菜单，“脚本编程” 的指令侧边栏查看具体支持的 lua API

指令列表
TCP&UDP 函数用于进行 TCP 或 UDP 通信。

| 指令       | 功能                            |
| ---------- | ------------------------------- |
| TCPCreate  | 创建 TCP 网络对象               |
| TCPStart   | 建立 TCP 连接                   |
| TCPRead    | 接收 TCP 对端发送的数据         |
| TCPWrite   | 发送数据给 TCP 对端             |
| TCPDestroy | 断开 TCP 连接并销毁 socket 对象 |
| UDPCreate  | 创建 UDP 网络对象               |
| UDPRead    | 接收 UDP 对端发送的数据         |
| UDPWrite   | 发送数据给 UDP 对端             |

## TCPCreate

**原型：**

```lua
TCPCreate(isServer, IP, port)
```

**描述：**

创建 TCP 网络对象，仅可创建一个。

**必选参数：**

- isServer：是否创建服务端。true：表示创建服务端；false：表示创建客户端。

- IP：服务端 IP 地址。需与客户端 IP 地址在同一网段，且不冲突。创建服务端时为机械臂的 IP 地址，创建客户端时为对端的地址。

- port：服务端端口。请勿使用下述已被系统占用的端口，会导致服务端创建失败。
  - 7, 13, 22, 37, 139, 445, 502, 503（0 ~ 1024 之间的端口是 linux 系统自定义端口，被占用可能性高，请尽量避免使用）
  - 1501, 1502, 1503
  - 4840, 8172, 9527, 11740
  - 22000, 22001, 29999
  - 30004, 30005, 30006
  - 60000 ~ 65504, 65506, 65511 ~ 65515, 65521, 65522

**返回：**

- err： 0 表示创建 TCP 网络对象成功 ，1 表示创建 TCP 网络对象失败。
- socket：创建的 socket 对象。

示例 1：

```lua
-- 创建TCP服务端。
local ip="192.168.5.1" -- 机械臂的IP地址作为服务端的IP地址
local port=6001 -- 服务端端口
local err=0
local socket=0
err, socket = TCPCreate(true, ip, port)
```

示例 2：

```lua
-- 创建TCP客户端。
local ip="192.168.5.25" -- 外部设备如相机的IP地址作为服务端的IP地址
local port=6001 -- 服务端端口
local err=0
local socket=0
err, socket = TCPCreate(false, ip, port)
```

## TCPStart

**原型：**

```lua
TCPStart(socket, timeout)
```

**描述：**

建立 TCP 连接。机械臂作为服务端时，等待客户端来连接；机械臂作为客户端时，主动连接服务端。

**必选参数：**

- socket：已创建的 socket 对象。
- timeout：等待超时时间，单位：秒。如果设置为 0，会一直等待到连接建立成功；如果不为 0，则超过设定的时间后返回连接失败。

**返回：**

- 连接结果。

  - 0：连接成功
  - 1：输入参数错误
  - 2：socket 对象不存在
  - 3：设置超时时间错误
  - 4：连接失败

**示例：**

```lua
-- 开始建立TCP连接，一直等待直到连接建立成功。
err = TCPStart(socket, 0) -- socket为TCPCreate成功返回的socket对象
```

## TCPRead

**原型：**

```lua
TCPRead(socket, timeout, type)
```

**描述：**

接收 TCP 对端发送的数据。

**必选参数：**

- socket：已创建的 socket 对象。

**可选参数：**

- timeout：等待超时时间，单位：秒。如果不设置或设置为小于等于 0 的值，会一直等待直到读取完数据再往下执行；如果设为大于 0 的值，则超过设定的时间后会直接往下执行。

- type：返回值类型。如果不设置或设置为"table"，则 RecBuf 缓存格式为 table 形式；如果设置为“string”，则 RecBuf 缓存为字符串。

**返回：**

- err： 0 表示接收数据成功 ，1 表示接收数据失败。
- Recbuf：接收数据缓存区。

**示例：**

```lua
-- 接收TCP数据，接收的数据分别保存为字符串和table形式。
-- socket为TCPCreate成功返回的socket对象
err, RecBuf = TCPRead(socket,0,"string") -- RecBuf数据类型为字符串
err, RecBuf = TCPRead(socket, 0) -- RecBuf数据类型为table
```

## TCPWrite

**原型：**

```lua
TCPWrite(socket, buf, timeout)
```

**描述：**

发送数据给 TCP 对端。

**必选参数：**

- socket：已创建的 socket 对象。

- buf：要发送的数据。

**可选参数：**

- timeout：等待超时时间，单位：秒。如果不设置或设置为 0，会一直等待直到对端接收完数据再往下执行；如果不为 0，则超过设定的时间后会直接往下执行。

**返回：**

- 发送结果。
  - 0：发送成功。
  - 1：发送失败

**示例：**

```lua
-- 发送TCP数据，数据内容为“test”。
TCPWrite(socket, "test") -- socket为TCPCreate成功返回的socket对象
```

## TCPDestroy

**原型：**

```lua
TCPDestroy(socket)
```

**描述：**

断开 TCP 连接并销毁 socket 对象。

**必选参数：**

- socket：已创建的 socket 对象。

**返回：**

- 执行结果。

  - 0：执行成功
  - 1：执行失败

**示例：**

```lua
-- 断开与TCP对端的连接。
TCPDestroy(socket) -- socket为TCPCreate成功返回的socket对象
```

## UDPCreate

**原型：**

```lua
UDPCreate(isServer, IP, port)
```

**描述：**

创建 UDP 网络对象，仅可创建一个。

**必选参数：**

- isServer：是否创建服务端。true：表示创建服务端；false：表示创建客户端。
- IP：创建服务端和客户端时都填写为对端 IP 地址。需与机械臂 IP 地址在同一网段，且不冲突。
- port：
  创建服务端时，表示本端和对端都使用该端口。请勿使用已被系统占用的端口，详见 TCPCreate 的参数说明。
  创建客户端时，表示对端的端口。此时本端发送数据时会使用随机端口。

**返回：**

- err： 0 表示创建 UDP 网络对象成功 ，1 表示创建 UDP 网络对象失败。
- socket：创建的 socket 对象。

示例 1：

```lua
-- 创建UDP服务端。
local ip="192.168.5.25" -- 外部设备如相机的IP地址作为对端的IP地址
local port=6001 -- 本端和对端都使用该端口
local err=0
local socket=0
err, socket = UDPCreate(true, ip, port)
```

示例 2：

```lua
-- 创建UDP客户端。
local ip="192.168.5.25" -- 外部设备如相机的IP地址作为对端的IP地址
local port=6001 -- 对端端口
local err=0
local socket=0
err, socket = UDPCreate(false, ip, port)
```

## UDPRead

**原型：**

```lua
UDPRead(socket, timeout, type)
```

**描述：**

接收 UDP 对端发送的数据。

**必选参数：**

- socket：已创建的 socket 对象。

**可选参数：**

- timeout：等待超时时间，单位：秒。如果不设置或设置为小于等于 0 的值，会一直等待直到读取完数据再往下执行；如果设为大于 0 的值，则超过设定的时间后会直接往下执行。

- type：返回值类型。如果不设置或设置为"table"，则 RecBuf 缓存格式为 table 形式；如果设置为“string”，则 RecBuf 缓存为字符串。

**返回：**

- err： 0 表示接收数据成功 ，1 表示接收数据失败。
- Recbuf：接收数据缓存区。

**示例：**

```lua
-- 接收UDP数据，接收的数据分别保存为字符串和table形式。
-- socket为UDPCreate成功返回的socket对象
err, RecBuf = UDPRead(socket,0,"string") -- RecBuf数据类型为字符串
err, RecBuf = UDPRead(socket, 0) -- RecBuf数据类型为table
```

## UDPWrite

**原型：**

```lua
UDPWrite(socket, buf, timeout)
```

**描述：**

发送数据给 UDP 对端。

**必选参数：**

- socket：已创建的 socket 对象。

- buf：要发送的数据。

**可选参数：**

- timeout：等待超时时间，单位：秒。如果不设置或设置为 0，会一直等待直到对端接收完数据再往下执行；如果不为 0，则超过设定的时间后会直接往下执行。

**返回：**

- 发送结果。

  - 0：发送成功。
  - 1：发送失败

**示例：**

```lua
-- 发送UDP数据，数据内容为“test”。
UDPWrite(socket, "test") -- socket为UDPCreate成功返回的socket对象
```
