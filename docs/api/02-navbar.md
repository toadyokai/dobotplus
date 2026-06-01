# 导航栏配置
> 安装完插件后，支持配置快捷操作的导航栏
找到 `configs/Toolbar.json`，通过指定参数来自定义你想要的导航栏页面。

本章节将介绍如何配置快捷导航栏
- 你将会了解到
- 如何自定义导航栏
- 如何在线调试导航栏

## 导航栏

导航栏位于上位机顶部菜单栏

![](../../assets/imgs/toolbar.png)

常用于在界面切换中快速查看插件状态和操作插件

![](../../assets/imgs/tollbar-open.png)

## 自定义导航栏

json内容
```js
{
  "name": "DHGrip",
  "icon": "grip.svg",
  "width": 800,
  "height": 900
}
```

说明
|字段	|类型|	默认值|	必填|	说明|
|-|-|-|-|-|
|name	|string|	无	|是	|导航栏显示名称|
|icon	|number/string|	无|	否	|如果需要自定义图标，可配置图标路径|
|width|	number|	无|	否|	如果需要自定义导航页面宽度，可配置宽度，单位是px|
|height|	number|	无|	否|	如果需要自定义导航页面高度，可配置高度，单位是px|

## 导航栏页面开发
导航栏页面在`ui/Toolbar.tsx`文件中进行开发，页面开发使用[React框架](https://react.docschina.org/learn)开发