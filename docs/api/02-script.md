# 脚本编程配置
> 安装完插件后，支持在脚本编程中运行插件的指令，通过配置，可以将插件指令添加进指令菜单栏，实现指令的快速插入。
找到`configs/Scripts.json`，通过指定参数来自定义你想要展示的指令。

本章节将介绍如何配置动态生成指令,你将会了解到
- 如何自定义指令
- 如何自定义指令帮助文档
- 如何做国际化翻译
- 如何在线调试指令

## 自定义指令

json配置
```js
{
  "script_name": "EnableSafeSkin",
  "message": "开关安全皮肤",
  "script_code": "EnableSafeSkin()"
}
```

说明
|字段	|类型|	默认值|	必填|	说明|
|-|-|-|-|-|
|script_name|	string|	无|	是|	指令函数名，只支持纯字母|
|message	|string|	无|	是|	指令描述|
|script_code|	string|	无|	是|	指令运行转代码|

## 自定义指令帮助文档
指令编程可以展示指令的帮助文档，支持自定义配置。
可以将文档放入`Resources/document`中，并且在`Resources/document`下指定路径
* 在`Resources/document/config.json`中添加
  ```js
  {
      "script":"Safety Skin.html"
  }
  ```
在`Resources/document`放入`Safety Skin.html`文档资源
## 国际化翻译
`Resources/i18n`可以配置指令信息翻译
* 在`Resources/i18n/client/zh.json`中`scripts`字段中添加
  ```js
  {
    "scripts":{
      "tr_dobot_switch_safe_skin": "开关安全皮肤"
    }
  }
  ```
* 在`Resources/i18n/client/en.json`中`scripts`字段下添加
  ```js
  {
    "scripts":{
      "tr_dobot_switch_safe_skin": "Switch Security Skin"
    }
  }
  ```
* 在指令中中使用
  ```js
  {
      "script_name": "EnableSafeSkin",
      "message": "%{tr_dobot_switch_safe_skin}",
  }
  ```