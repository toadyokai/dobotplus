# 命令行工具

## create
运行此命令时，系统会引导您创建一个新的插件项目。您可以通过一系列的选择，设置项目的名称、版本号以及插件的基础结构。生成的项目将包含初始的配置文件和文件结构，方便后续开发。

### 示例

```bash
dpt create
```

在使用上述指令后，在完成提示的插件基础信息后，该指令会：
- 拉取插件文件模板
- 将用户输入的基础信息写入模板
- 自动安装插件开发需要的依赖

当第三步自动安装插件失败时，用户可以进入插件文件夹手动安装
```bash
pnpm install
```

**注意**
推荐使用`pnpm`进行依赖的安装，`pnpm`相比越`yarn`具有如下优势：
- 依赖共享：重复的依赖可以使用软连接的形式共享依赖包，减少插件依赖占用的磁盘存储空间
- 并行下载：在安装依赖时，可以并行发起http请求，安装依赖包，具备更快的安装速度

## dev
启动开发服务器，并将代码同步到真实设备进行调试，运行 `dpt dev` 后，系统会启动 Webpack 开发服务器，并根据配置文件 `dpt.json` 与真实设备建立连接。您可以选择是否在真实设备上调试 Lua 脚本。如果选择调试，系统会通过 SFTP 将代码同步到设备，并监控文件变动。每当 Lua 脚本发生变化时，系统会自动更新设备上的文件并重新加载插件。

### 示例

```bash
dpt dev
```

### dpt.json
连接真机进行调试时的服务器基础配置信息
```json
{
  "ip": "192.168.5.1",
  "port": 22001,
  "pluginPort": 22100
}
```

|字段|说明|
|-|-|
|ip|控制器的真实ip，有线连接时默认为 192.168.5.1 |
|port| 控制器公共服务端口，例如获取插件端口、安装卸载插件等服务|
|pluginPort| 当前插件http服务端口号，动态更新，在插件使用时会动态获取，对应 httpAPI.lua 模块映射出的端口号|

此外，lua文件的同步使用的是 sftp 协议，具体连接建立参数可以在 `.dobot/.sftprc` 文件中查看，一般情况无需开发者修改。

### 页面预览
该指令内部使用webpack进行打包，支持webpack的热更新机制
- http://localhost:8080/Main - 插件的主要控制界面，安装后，点击插件，上位机展示的控制界面
- http://localhost:8080/Toolbar - 插件的工具栏界面的展示
- http://localhost:8080/Blocks - 点击积木时自定义的展示界面

## lua
运行 Lua 脚本，并在项目中选择目标 Lua 文件执行，此命令会列出 `./lua` 目录中的所有 Lua 文件，并让您选择目标文件执行。选择完成后，命令会通过 `lua54.exe` 运行该脚本，输出执行结果。此功能适合开发过程中快速测试和运行 Lua 代码。

### 示例

假设你的项目结构如下：

```
/your-project
│
└── lua/
   ├── script1.lua
   ├── script2.lua
   └── init.lua

```

- 运行 `dpt lua` 后，将看到如下提示：

  ```bash
  Please select target lua file: 
  ❯ script1.lua
    script2.lua
    init.lua
  ```

- 选择 `script1.lua` 后，工具会执行以下命令：

  ```
  lua54.exe -l init /your-project/lua/script1.lua
  ```

- 脚本在 `.dobot/lua/` 目录中执行，并且输出将显示在命令行中。

## gui
通过图形化界面（GUI）配置项目，运行此命令时，系统会启动一个 Web GUI 界面，允许用户通过浏览器进行项目配置。该界面支持实时预览和交互操作。如果指定 `--dev` 选项，命令会以开发模式启动 GUI，适用于调试和开发场景。

### 示例
```bash
dpt gui
```

- 积木编程配置文件的管理面板

  ![](../../assets/imgs/blocks.png)

- 函数编程的配置文件管理面板

  ![](../../assets/imgs/script.png)

- 配置文件翻译资源的编辑面板

    ![](../../assets/imgs/translate-gui.png)

## build
此命令用于将项目代码进行打包处理，生成最终的插件发布版本。打包时会根据项目的 Webpack 配置，优化代码并生成最终的可发布文件。
### 示例
```bash
dpt build
```
在构建的过程中，`ui/pages` 路径下的第一层的 `.tsx` 文件会被构建成对应的页面
      - `Main.tsx` 对应插件主页面
      - `Toolbar.tsx` 对应插件工具栏
      - `Blocks.tsx` 对应插件的积木弹窗页面
      - 其他一级自定义页面也会进行同类型构建，所以请开发者注意 `ui/pages` 文件夹下一级目录中 `.tsx` 文件的命名

  在程序顺利执行完毕后，当前文件夹下会出现 `dist` 文件夹和 `output` 文件夹。
  - `dist` 文件夹中存放着本次构建后的插件代码，用于开发者检查构建结果
  - `output` 文件夹存放着压缩后的 `zip` 文件，文件名格式为 `<插件名>-<版本号>.zip`，该文件为实际在客户端导入使用的的插件。

  构建后未压缩的文件夹结构如下：
  ```bash
  ├── Blocks
  │   ├── config.json # 积木编程配置文件
  │   └── index.html  # 积木编程点击积木块展示的页面
  ├── Main
  │   ├── config.json # 插件基础配置
  │   └── index.html
  ├── Resources
  │   ├── document
  │   │   └── config.json # 脚本编程文档配置
  │   ├── i18n            # 国际化翻译数据
  │   │   ├── Deutsch     # 德语翻译
  │   │   │   ├── blocks.json  # 积木编程翻译
  │   │   │   ├── config.json  # 基础配置的翻译
  │   │   │   └── scripts.json # 脚本编程的翻译
  │   │   ├── English
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   ├── Español
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   ├── Русский язык
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   ├── 日本語
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   ├── 简体中文
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   ├── 繁體中文
  │   │   │   ├── blocks.json
  │   │   │   ├── config.json
  │   │   │   └── scripts.json
  │   │   └── 한국어
  │   │       ├── blocks.json
  │   │       ├── config.json
  │   │       └── scripts.json
  │   └── images
  │       └── pallet.svg
  ├── Scripts
  │   └── config.json # 脚本编程的配置文件
  ├── Toolbar
  │   ├── config.json
  │   └── index.html
  ├── daemon.lua  # lua入口文件、守护进程 
  ├── httpAPI.lua # 控制器和GUI的数据交互模块，处理GUI界面的http请求
  ├── userAPI.lua # 积木编程和脚本编程的模块，对应实际控制机械臂末端的方法
  └── utils
      └── await485.lua
  ```

           