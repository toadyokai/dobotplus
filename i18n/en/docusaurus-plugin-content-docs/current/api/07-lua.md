# Lua Processes

## daemon.lua
This is the main process for the plugin. After successful installation, the controller will automatically invoke this process and execute the contained program.

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

Typically, this file will establish an MQTT connection and broadcast messages every second. Developers can write code in `handleInLoop` to send messages as needed. After the plugin is successfully created, the default broadcast message channel for this plugin is `<plugin name>Status`. The frontend higher-level components will also default to using this channel when establishing a WebSocket connection.

Developers can view the MQTT implementation in the file located at `.dobot/lua/utils/mqtt.lua`.

## control.lua

The functions in `control.lua` are the actual control methods for the plugin. These can be used in both `userAPI.lua` and `httpAPI.lua` and form the core module for implementing plugin functionalities.

## httpAPI.lua

This module handles HTTP requests related to the plugin.

```lua
local control = require("control")

local httpModule = {}

--- This function will be called when the plugin is uninstalled
httpModule.OnUninstall = function()

end

--- This function will be called when the plugin is installed
httpModule.OnInstall = function()
    
end

--- This function will be called when the plugin is installed, 
--- this action will export some HTTP methods for device hotkey binding
httpModule.OnRegistHotKey = function() 
    return {
        press = {"demoMethod1", "demoMethod2"}, 
        longPress = {"demoMethod3"}
    }
end

--- This method will be called when an HTTP request arrives at 
--- '/dobotPlus/[plugin name]_[plugin version]/demoMethod1'
--- The return value will respond to the HTTP request, and is not necessary
--- @param params table 
--- @return string The return value will respond to the HTTP request, and is not necessary
--- @method post
httpModule.demoMethod1 = function(params)
    return {
        --- Your response data
        --- example: status = true
    }
end

--- This method will be called when an HTTP request arrives at 
--- '/dobotPlus/[plugin name]_[plugin version]/demoMethod2'
--- The return value will respond to the HTTP request, and is not necessary
--- @param params table
--- @return string 
httpModule.demoMethod2 = function(params)
    return {
        --- Your response data
        --- example: status = true
    }
end

--- This method will be called when an HTTP request arrives at 
--- '/dobotPlus/[plugin name]_[plugin version]/demoMethod3'
--- The return value will respond to the HTTP request, and is not necessary
--- @param params table
--- @return string The return value will respond to the HTTP request, and is not necessary
httpModule.demoMethod3 = function(params)
    return {
        --- Your response data
        --- example: status = true
    }
end

return httpModule
```

After the plugin is successfully installed and the main process is invoked, the controller dynamically assigns a service port, `pluginPort`, to the plugin. When the controller receives a POST request in the following format:
```
http://<ip>:<pluginPort>/dobotPlus/<pluginName>_V<pluginVersion>/<methodName>
```
It will automatically invoke the corresponding method in `httpAPI.lua` based on the `methodName`. Currently, the controller only responds to POST requests.

### Example Response Format
- **Request URL**  
  `http://192.168.5.1:22011/dobotPlus/test_V1-0-0/demoMethod1`

- **httpAPI.lua Module Implementation**  
  ```lua
  httpModule.demoMethod1 = function(params)
      return {
          status = true
      }
  end
  ```

- **Request Response**  
  ```json
  [
      {
          "status": true
      }
  ]
  ```

## userAPI.lua

The functions in `userAPI.lua` are used in block programming and script programming. When writing these functions, please ensure that the parameter formats are consistent with the configurations for block programming and script programming.