# 国际化配置

## 文件夹结构
```bash
Resources
└── document
    └── config.json
    ├── i18n # 国际化资源
    ├── client # 积木编程、脚本编程、插件在客户端展示的翻译资源
    │   ├── de.json # 德语
    │   ├── en.json # 英语
    │   ├── es.json # 西班牙语
    │   ├── hk.json # 繁体中文
    │   ├── ja.json # 日语
    │   ├── ko.json # 韩语
    │   ├── ru.json # 俄语
    │   └── zh.json # 中文
    └── plugin # 插件 UI 界面的国际化翻译资源
        ├── de.json
        ├── en.json
        ├── es.json
        ├── hk.json
        ├── ja.json
        ├── ko.json
        ├── ru.json
        └── zh.json
```
一个新建后的插件文件夹中，多语言目录结构如下，在构建完成后生成的目录结构如下：
```bash
Resources
├── document
│   └── config.json
├── i18n
│   ├── Deutsch          # 德语翻译文件
│   │   ├── blocks.json  # 积木编程的德语翻译
│   │   ├── config.json  # 插件列表展示的德语翻译
│   │   └── scripts.json # 脚本编程的德语翻译
│   ├── English
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   ├── Español
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   ├── Русский язык
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   ├── 日本語
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   ├── 简体中文
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   ├── 繁體中文
│   │   ├── blocks.json
│   │   ├── config.json
│   │   └── scripts.json
│   └── 한국어
│       ├── blocks.json
│       ├── config.json
│       └── scripts.json
└── images
    └── pallet.svg
```

## 配置文件结构
以下为简体中文的翻译内容，对应文件为 `Resources/i18n/client/zh.json`

```js
{
  // 积木编程的翻译
  "blocks": {
    "blocksDemoKey": "夹爪配置",
    "DOBOTPLUS_DH_INIT": "初始化DH夹爪 ID %1",
    "DOBOTPLUS_DH_CONTROL": "控制DH夹爪 宽度%1 力度%2 速度%3 ID %4 是否同步 %5",
    "DOBOTPLUS_DH_WIDTH_GET": "获取DH夹爪当前宽度 ID %1",
    "DOBOTPLUS_DH_MOVE_STATUS": "获取DH夹爪抓取状态 ID %1",
    "DOBOTPLUS_DH_INIT_STATUS": "获取DH夹爪初始化状态 ID %1",
    "DOBOTPLUS_DH_GET_ERR_STATUS": "获取DH夹爪故障码 ID %1",
    "POPUP_TITLE_TEST": "测试弹窗国际化"
  },
  // 插件列表所展示的插件信息的翻译
  "config": {
    "configDemoKey": "DH系列电爪，与协作机器人即插即用",
    "tr_dobot_application_title": "码垛工作站",
    "tr_dobot_toolbar": "大寰夹爪"
  },
  // 脚本编程的翻译
  "scripts": {
    "scriptDemoKey": "初始化DH夹爪",
    "tr_dobot_switch_control_dh": "控制DH夹爪(参数1: 夹爪宽度,范围0-100；参数2：夹爪力度，范围0-100；参数3：夹爪速度，范围：0-100)",
    "tr_dobot_switch_control_description1_dh": "夹爪宽度",
    "tr_dobot_switch_control_description2_dh": "夹爪力度",
    "tr_dobot_switch_control_description3_dh": "夹爪速度",
    "tr_dobot_switch_control_width_get_dh": "获取DH夹爪的当前宽度",
    "tr_dobot_switch_control_get_move_status_dh": "获取DH夹爪当前状态,\n 0:运动中，未检测到物体; \n 1:已到达指定位置，未检测到物体；\n 2:抓取到物体；\n 3:物体掉落。\n",
    "tr_dobot_switch_control_get_init_status_dh": "获取DH夹爪初始化状态,\n 0:初始化未完成; \n 1:初始化已完成；\n 2:初始化中。\n",
    "tr_dobot_switch_control_get_err_code_dh": "获取DH夹爪故障码"
  }
}
```

开发者在添加翻译信息时，需要注意将翻译的键值对信息写入对应功能模块下，例如：
- 积木编程的翻译需要添加在 `blocks` 字段下
- 插件信息展示相关的翻译需要加在 `config` 字段下
- 脚本编程相关的翻译需要加在 `scripts` 字段下