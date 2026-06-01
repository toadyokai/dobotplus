# Lua 进程

## daemon.lua
插件主进程，当插件安装成功后，控制器会自动调起该进程，并执行其中程序。
```lua
local mqtt = require('utils.mqtt')

local function handleInLoop()
  local data = {}
  mqtt.publish(data)
end

local function EventLoop()
  while true do
    handleInLoop()
    Wait(1000)
  end
end

local thread = systhread.create(EventLoop, 1)
thread:wait()

```

一般情况下，该文件中会创建一个 mqtt 连接，并且每隔 1s 向外广播消息，开发者有需要广播的消息，可以自行在 `handleInLoop` 进行代码编写。当插件创建成功后，该插件的广播消息通道默认为 `<插件名>Status` 与之配套的，前端高阶组件在建立 websocket 连接时也会默认使用此通道。
开发者可以进入 `.dobot/lua/utils/mqtt.lua` 查看


## control.lua

control.lua 中的函数是实际控制插件的方法，可以在 `userAPI.lua` 和 `httpAPI.lua` 中使用，是插件功能实现的核心模块。

## httpAPI.lua

```lua
local control = require("control")

local httpModule = {}

--- This function will be called when plugin uninstalled
httpModule.OnUninstall = function()

end

--- This function will be called when plugin installed
httpModule.OnInstall = function()
    
end

--- This function will be called when plugin installed, this action will export some http method for device hotkey binding
httpModule.OnRegistHotKey = function() 
	return {press = {"demoMethod1", "demoMethod2"}, longPress = {"demoMethod3"}}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod1' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table 
--- @return string The return value will response the http request, the return value is not necessory
--- @method post
httpModule.demoMethod1 = function(params)
	
	return {
		--- Your responce data
        --- example: status = true
	}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod2' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table
--- @return string 
httpModule.demoMethod2 = function(params)
	
	return {
		--- Your responce data
        --- example: status = true
	}
end

--- This method will be called when a http '/dobotPlus/[plugin name]_[plugin version]/demoMethod3' request arrived
--- The return value will response the http request, the return value is not necessory
--- @param params table
--- @return string The return value will response the http request, the return value is not necessory
httpModule.demoMethod3 = function(params)
	
	return {
        --- Your responce data
        --- example: status = true
    }
end

return httpModule

```

在插件成功安装且主进程被顺利调起后，控制器会为该插件动态分配一个服务端口 `pluginPort`。  
当控制器收到 
```
http://<ip>:<pluginPort>/dobotPlus/<pluginName>_V<pluginVersion>/<methodName>
```
格式的 post 请求后，会根据 `methodName` 自动调起 `httpAPI.lua` 文件中的对应方法。目前控制器只会响应post请求。

响应体格式示例
- 请求url
  `http://192.168.5.1:22011/dobotPlus/test_V1-0-0/demoMethod1`

- httpAPI.lua 模块具体实现
  ```lua
  httpModule.demoMethod1 = function(params)
    return {
      status = true
    }
  end
  ```
- 请求的返回
  ```json
  [
    {
      "status": true
    }
  ]
  ```


## userAPI.lua

userAPI.lua 中的函数在积木编程和脚本编程中使用，在编写时，请注意函数的参数形式和积木编程、脚本编程配置保持一致。



