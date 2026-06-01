# 开发环境
> 使用该工具集开发插件必须的配置环境包括 `NodeJs`、`Pnpm`。

## 操作系统
推荐在Windows10及以上系统开发。

|功能|Windows|Mac OS|Linux|
|-|-|-|-|
|初始化插件模板|✅|✅|✅|
|开发插件界面|✅|✅|✅|
|打包插件界面|✅|✅|✅|
|Web GUI工具：翻译工具|✅|✅|✅|
|Web GUI工具：积木预览和编辑|✅|✅|✅|
|Web GUI工具：Lua脚本配置|✅|✅|✅|
|Lua 代码检查|✅|✅|❓|
|Lua 脚本模拟运行|✅|❓| ❓|

✅ 表示支持该功能 ❓该功能受限，可能存在编译问题

## Node.js
该工具集基于 NodeJS `20.13.1` 版本进行开发，请安装 v20 以上的 [NodeJS](https://nodejs.org/en/download/prebuilt-installer) 版本进行开发。  
在命令行中执行以下命令可查看node版本号 ‼️ ❗
```bash
node -v
``` 

## VSCode
开发者可以根据使用习惯选择自己习惯的IDE工具。推荐使用[VSCode](https://code.visualstudio.com/)用于本地开发。  
该工具在开发过程中会利用一些 `VSCode` 插件提高开发效率，在使用 `VSCode` 进行开发时，会有对应的建议弹窗。  
开发者使用 `VSCode` 进行开发时，建议安装 `VSCode` 推荐的插件。

- [lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)
  - 该插件是调试开发lua的首选，具备代码检查、自动补全和代码提示的功能

- [lua-helper](https://marketplace.visualstudio.com/items?itemName=yinfei.luahelper)
  - 使用 GO 开发的一款 lua 开发工具，可以执行代码的检查、补全、提示和格式化
  - 功能稳定

- [i18n](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)
  - 在 vscode 中提供可视化的翻译资源编辑工具
  - 联网状态在可以一键翻译文案
  - 在组件内，可以预览文案
