# Script Programming

> After installing the plugin, you can run the plugin's commands in script programming. By configuring, you can add plugin commands to the command menu for quick insertion.

Locate `configs/Scripts.json` and customize the commands you want to display by specifying parameters.

This chapter will introduce how to configure dynamically generated commands, and you will learn about:
- How to customize commands
- How to customize command documentation
- How to perform internationalization
- How to debug commands online

## Customizing Commands

### JSON Configuration

```json
{
  "script_name": "EnableSafeSkin",
  "message": "开关安全皮肤",
  "script_code": "EnableSafeSkin()"
}
```

### Description of Fields

| Field        | Type         | Default Value | Required | Description                                 |
|--------------|--------------|---------------|----------|---------------------------------------------|
| `script_name`| string       | None          | Yes      | The name of the command function; only pure letters are supported. |
| `message`    | string       | None          | Yes      | Description of the command.                 |
| `script_code`| string       | None          | Yes      | The code that runs the command.             |

## Customizing Command Documentation

The command programming can display help documentation, which supports custom configuration. You can place the documentation in the `Resources/document` folder and specify the path under it.

* Add to `Resources/document/config.json`:

  ```json
  {
      "script": "Safety Skin.html"
  }
  ```

* Place the `Safety Skin.html` documentation resource in `Resources/document`.

## Internationalization

You can configure translations for command information in the `Resources/i18n` folder.

* In `Resources/i18n/client/zh.json`, add the following to the `scripts` field:

  ```json
  {
    "scripts": {
      "tr_dobot_switch_safe_skin": "开关安全皮肤"
    }
  }
  ```

* In `Resources/i18n/client/en.json`, add the following to the `scripts` field:

  ```json
  {
    "scripts": {
      "tr_dobot_switch_safe_skin": "Switch Security Skin"
    }
  }
  ```

* Use the translation in the command:

  ```json
  {
      "script_name": "EnableSafeSkin",
      "message": "%{tr_dobot_switch_safe_skin}"
  }
  ```
