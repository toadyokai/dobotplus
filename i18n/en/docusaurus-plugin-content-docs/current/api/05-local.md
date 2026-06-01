# Locale

## Folder Structure
```bash
Resources
└── document
    └── config.json
    ├── i18n # Internationalization resources
    ├── client # Translations for block programming, script programming, and plugin display in the client
    │   ├── de.json # German
    │   ├── en.json # English
    │   ├── es.json # Spanish
    │   ├── hk.json # Traditional Chinese
    │   ├── ja.json # Japanese
    │   ├── ko.json # Korean
    │   ├── ru.json # Russian
    │   └── zh.json # Simplified Chinese
    └── plugin # Internationalization translations for plugin UI
        ├── de.json
        ├── en.json
        ├── es.json
        ├── hk.json
        ├── ja.json
        ├── ko.json
        ├── ru.json
        └── zh.json
```
The folder structure of a newly created plugin will look like this after the build is complete:
```bash
Resources
├── document
│   └── config.json
├── i18n
│   ├── Deutsch          # German translation files
│   │   ├── blocks.json  # German translation for block programming
│   │   ├── config.json  # German translation for plugin list display
│   │   └── scripts.json # German translation for script programming
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

## Configuration File Structure
Below is the translation content for Simplified Chinese, corresponding to the file `Resources/i18n/client/zh.json`:

```js
{
  // Translations for block programming
  "blocks": {
    "blocksDemoKey": "Gripper Configuration",
    "DOBOTPLUS_DH_INIT": "Initialize DH Gripper ID %1",
    "DOBOTPLUS_DH_CONTROL": "Control DH Gripper Width %1 Force %2 Speed %3 ID %4 Sync %5",
    "DOBOTPLUS_DH_WIDTH_GET": "Get Current Width of DH Gripper ID %1",
    "DOBOTPLUS_DH_MOVE_STATUS": "Get Gripper Status ID %1",
    "DOBOTPLUS_DH_INIT_STATUS": "Get Initialization Status of DH Gripper ID %1",
    "DOBOTPLUS_DH_GET_ERR_STATUS": "Get Error Code of DH Gripper ID %1",
    "POPUP_TITLE_TEST": "Test Popup Internationalization"
  },
  // Translations for plugin information displayed in the plugin list
  "config": {
    "configDemoKey": "DH Series Electric Gripper, Plug and Play with Collaborative Robots",
    "tr_dobot_application_title": "Palletizing Workstation",
    "tr_dobot_toolbar": "Great Horizon Gripper"
  },
  // Translations for script programming
  "scripts": {
    "scriptDemoKey": "Initialize DH Gripper",
    "tr_dobot_switch_control_dh": "Control DH Gripper (Parameter 1: Gripper Width, Range 0-100; Parameter 2: Gripper Force, Range 0-100; Parameter 3: Gripper Speed, Range 0-100)",
    "tr_dobot_switch_control_description1_dh": "Gripper Width",
    "tr_dobot_switch_control_description2_dh": "Gripper Force",
    "tr_dobot_switch_control_description3_dh": "Gripper Speed",
    "tr_dobot_switch_control_width_get_dh": "Get Current Width of DH Gripper",
    "tr_dobot_switch_control_get_move_status_dh": "Get Current Status of DH Gripper,\n 0: Moving, No Object Detected; \n 1: Reached Target Position, No Object Detected;\n 2: Object Grabbed;\n 3: Object Dropped.\n",
    "tr_dobot_switch_control_get_init_status_dh": "Get Initialization Status of DH Gripper,\n 0: Initialization Not Completed; \n 1: Initialization Completed;\n 2: Initializing.\n",
    "tr_dobot_switch_control_get_err_code_dh": "Get Error Code of DH Gripper"
  }
}
```

When adding translation information, developers need to ensure that key-value pairs are placed under the corresponding functional module, for example:
- Translations for block programming should be added under the `blocks` field.
- Translations for plugin information display should be added under the `config` field.
- Translations for script programming should be added under the `scripts` field.