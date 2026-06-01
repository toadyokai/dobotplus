# 上位机插件展示配置
> 在Dobot+资源中，每个模块都是通过`json`格式的文件来配置页面参数及显示。本章节将介绍如何配置安装页面的相关内容，你将会了解到
- 如何配置config.json
- 如何创建和开发相关页面
- 如何调试页面

## 配置config.json
找到 `configs/Main.json`，参考以下示例来配置你的安装界面
json内容
```js
{
  "name": "EXTIO",
  "version": 1,
  "description": "扩展IO插件"
}
```
说明
|字段	|类型	|默认值|	必填|	说明|
|-|-|-|-|-|
|name|	string|	无	|是|	安装界面插件名称|
|version|	number/string|	无|	是	|插件版本号，可用作区分不同版本|
|description|	string|	无|	是	|安装界面插件的相关介绍|
|hotkey|	boolean	|无	|否|	需要配置末端按键操作时设为true|

Dobot+界面展示效果如下所示：

![](../../assets/imgs/install.jpg)


插件支持末端按键的配置，可以快捷执行固定的指令
参阅[快捷键配置](/api/hotkey)以学习如何配置末端按键的快捷操作

