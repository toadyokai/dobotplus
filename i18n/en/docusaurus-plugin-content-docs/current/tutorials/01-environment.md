# Environment
> The required configuration environment for developing plugins using this toolkit includes `NodeJs` and `Pnpm`.

## Operating System
It is recommended to develop on Windows 10 or later systems.

|Feature|Windows|Mac OS|Linux|
|-|-|-|-|
|Initialize Plugin Template|✅|✅|✅|
|Develop Plugin Interface|✅|✅|✅|
|Package Plugin Interface|✅|✅|✅|
|Web GUI Tool: Translation Tool|✅|✅|✅|
|Web GUI Tool: Block Preview and Edit|✅|✅|✅|
|Web GUI Tool: Lua Script Configuration|✅|✅|✅|
|Lua Code Check|✅|✅|❓|
|Lua Script Simulation|✅|❓|❓|

✅ indicates the feature is supported. ❓ indicates the feature is limited and may encounter compilation issues.

## Node.js
This toolkit is developed based on NodeJS version `20.13.1`. Please install [NodeJS](https://nodejs.org/en/download/prebuilt-installer) version 20 or above for development.  
You can check the node version by running the following command in the terminal !
```bash
node -v
``` 

## VSCode
Developers can choose their preferred IDE based on their habits. It is recommended to use [VSCode](https://code.visualstudio.com/) for local development.  
During development, this tool uses some `VSCode` extensions to improve development efficiency. When using `VSCode`, corresponding suggestion pop-ups will appear.  
It is recommended that developers install the `VSCode` recommended extensions when developing with `VSCode`.

- [lua](https://marketplace.visualstudio.com/items?itemName=sumneko.lua)
  - This extension is the first choice for debugging and developing lua, featuring code inspection, auto-completion, and code hints.

- [lua-helper](https://marketplace.visualstudio.com/items?itemName=yinfei.luahelper)
  - A lua development tool developed with GO, which provides code checking, completion, hints, and formatting.
  - Stable functionality.

- [i18n](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally)
  - Provides a visual translation resource editing tool in VSCode.
  - Can translate text with one click when online.
  - Allows previewing text within components.
