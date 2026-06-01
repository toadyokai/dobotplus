# Hotkey Configuration

> The robot's end effector can be configured with plugin hotkeys, supporting the 485 communication protocol. To configure hotkeys, we need to define the methods that the hotkeys will execute in `lua/httpAPI.lua`, and then register these methods with the end effector hotkeys.

## Step 1: Define Hotkey Methods in `httpAPI.lua`

First, locate and open the `lua/httpAPI.lua` file. Then, define your hotkey methods as shown below:

```lua
local Plugin = {}

-- Define the OnTestPress1 method
function Plugin.OnTestPress1()
    EcoLog("-------Plugin.OnTestPress1----")
end

-- Define the OnTestPress2 method
function Plugin.OnTestPress2()
    EcoLog("-------Plugin.OnTestPress2----")
end

-- Define the OnTestLongPress method
function Plugin.OnTestLongPress()
    EcoLog("-------Plugin.OnTestLongPress----")
end

-- Register hotkey execution
function Plugin.OnRegistHotKey()
    return {
        press = {"OnTestPress1", "OnTestPress2"},
        longPress = {"OnTestLongPress"}
    }
end

return Plugin
```

### Explanation of the Code:

- **Function Definitions**: The methods `OnTestPress1`, `OnTestPress2`, and `OnTestLongPress` are defined to log messages when the respective hotkeys are pressed.
- **Hotkey Registration**: The `OnRegistHotKey` function returns a table that specifies which methods correspond to normal presses and long presses of the hotkeys.

## Step 2: Configure Hotkeys in `Main.json`

Next, open the `configs/Main.json` file and add the hotkey configuration as follows:

```json
{
    "name": "DH",
    "version": 1,
    "description": "%{tr_description}",
    "hotkey": true
}
```

### Explanation of the Configuration:

- **`name`**: The name of your plugin.
- **`version`**: The version number of your plugin.
- **`description`**: A description of your plugin, which can be translated.
- **`hotkey`**: Set to `true` to enable hotkey functionality for the end effector.

## Conclusion

By completing the above two steps, you can now set the execution methods for the end effector hotkeys through the hotkey settings page. This allows for quick access to the defined functionalities via the robot's end effector buttons.

### Additional Notes:

- Make sure the hotkey methods are thoroughly tested to ensure they execute as expected.
- You can expand this configuration by adding more methods or different types of hotkey triggers if needed.
- Always check the logs to confirm that the hotkey actions are being registered and executed properly.