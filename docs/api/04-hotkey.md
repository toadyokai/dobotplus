# 末端快捷键配置
> 机器人末端可以配置插件的快捷键，支持485通讯协议
配置快捷键我们需要定义快捷键执行方法，在`lua/httpAPI.lua`中定义执行函数，然后注册到末端快捷键上。

* 首先，先在httpAPI.lua中
  ```lua
  local Plugin = {}

  -- 定义OnTestPress1方法
  function Plugin.OnTestPress1()
      EcoLog("-------Plugin.OnTestPress1----")
  end

  -- 定义OnTestPress2方法
  function Plugin.OnTestPress2()
      EcoLog("-------Plugin.OnTestPress2----")
  end

  -- 定义OnTestLongPress方法
  function Plugin.OnTestLongPress()
      EcoLog("-------Plugin.OnTestLongPress----")
  end

  -- 注册快捷键执行
  function Plugin.OnRegistHotKey()
      return {
          press = {"OnTestPress1", "OnTestPress2"},
          longPress = {"OnTestLongPress"}
      }
  end

  return Plugin
  ```

* 然后在`configs/Main.json`中配置
  ```js
  {
      "name": "DH",
      "version": 1,
      "description": "%{tr_description}",
      "hotkey":true
  }
  ```
    
完成以上两项配置，我们就可以在快捷键页面设置机器末端按键执行方法。