# 使用快捷键控制设备 IO
> 在完成 [IO 控制案例](./01-io.md) 后，经调试，IO 可符合预期的工作，此时可以针对该插件进行更加丰富的配置。

## 注册快捷键方法
`httpAPI.lua` 的用途在于提供对外的接口，包括快捷键、UI界面，用户于机器的交互行为会集中进入到 `httpAPI.lua` 模块。

- 编写 `httpAPI.lua`

    ```lua

    local control = require('control')
    local httpModule = {}
    
    -- 添加一个名为 grip 的 http post 请求的处理函数
    httpModule.grip = function()
       control.grip()    
        return {
            success = true
        }
    end
    
    -- 添加一个名为 release 的 http post 请求的处理函数
    httpModule.release = function()
       control.release() 
        return {
            success = true
        }
    end

    -- 注册可供末端快捷键使用的方法名称，"grip" 控制吸取, "release" 控制释放
    httpModule.OnRegistHotKey = function() 
         return {
            -- 按下快捷键可以执行的操作，开发者可以自行决定哪些行为可以注册到快捷键上，数量不限
            -- "grip" 指向 httpApi.grip 函数
            -- "release" 指向 httpApi.release 函数
            press = { "grip", "release" } 
            -- 长按快捷键可以执行的操作，数量不限
            longPress = {} 
        }
    end    

    return httpModule
    ```
- 客户端配置快捷键

    用户可在`Dobot+` 菜单中选择 `末端快捷键` 菜单

    ![](../../../assets/imgs/shortcut.png)

    在插件列表中选择当前的插件

    ![](../../../assets/imgs/shortcut-guide.png)

    在对应快捷键的下来菜单中选择对应的 `httpAPI.lua` 的方法


## 脚本编程配置
当前的开发者工具提供了一个可配置的 Web GUI 工具，运行如下指令

```bash
dpt gui
```

当控制台出现一下信息，表示 gui 工具正常启动。

```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000

 ✓ Starting...
 ✓ Ready in 958ms
```

在浏览器中打开 gui 工具的地址 http://localhost:3000




- 函数编程的配置文件管理中心

    ![](../../../assets/imgs/script.png)

开发者可以在该页面中：

- 查看和编辑 `userAPI.lua` 模块的源码
- 查看当前项目对外提供的函数编程配置
- 新增、编辑、查看、删除当前项目的函数编程配置

## 积木编程配置

- 积木编程配置文件的管理中心

![](../../../assets/imgs/blocks-detail.png)

开发者可以在该页面中：
- 对积木配置的效果进行预览
- 新增、编辑、查看、删除积木配置信息

在该 GUI 工具中的所有资源支持增删查改，改动会同步到插件项目，用户也可以不使用该工具，自行前往插件文件夹 `config` 下修改，该文件夹下的均已支持格式正确性的检验和可选内容的提示，如果出现告警，则预示配置文件异常，会影响真实的使用和调试，请勿忽略告警。

```bash
io # 项目根目录
└── configs
   ├── Blocks.json  # 积木配置
   ├── Main.json    # 插件信息配置
   ├── Scripts.json # 脚本编程配置
   └── Toolbar.json # 工具栏配置
```

## 国际化翻译
国际化翻译的配置目前支持三种方式
- vscode 插件：该操作依赖于 `lokalise.i18n-ally` 插件，该插件的配置工作已在初始化时完成，插件创建后也会有安装提示，如果出现问题，请开发者在 vscode 插件查看具体问题原因。该插件支持：
    - 翻译文案的预览
    - 多语言切换展示
    - 可视化的编辑内容工具
    - 连接网络时支持自动一键翻译
- Wep app 管理工具：这是一个基于浏览器的GUI工具，用途给开发者提供一个翻译资源的管理界面，支持翻译内容的增删查改，开发者可针对性的在此进行翻译资源的变更
- 用户手工维护：对于习惯自己维护翻译资源的开发者，可直接在 `Resources/i18n` 和 `ui/locals` 文件夹下修改对应语言的翻译，目前支持德(DE)、日(JA)、韩(KO)、俄(RU)、西班牙(ES)、英(EN)、中(ZH)、繁体(HK)八个地区的语言。


- 当前的国际化资源支持翻译的预览
    
    ![](../../../assets/imgs/translate.png)

    示例代码中的 “测试” 字样是一个关键字的翻译，点击右下角的切换展示语言的按钮，选择要预览的语言，即可查看其他语言的翻译

- 当需要对翻译资源进行编辑时，可以点击vscode侧边栏的翻译功能按钮或者鼠标双击要编辑的翻译字段，悬停在关键字上片刻，可出现对应的编辑框，开发者可自由编辑翻译资源

    ![](../../../assets/imgs/tanslate-edit.png)

- 配置文件翻译资源的编辑中心

    ![](../../../assets/imgs/translate-gui.png)