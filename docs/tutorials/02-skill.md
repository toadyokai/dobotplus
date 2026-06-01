# Agent Skill

> `@dobot-plus/skill` 是一个 Agent Skill，可将项目根目录下的 `doc.md` 设备文档转换为可运行的 Dobot+ 插件代码，包括 Lua 逻辑、UI 页面、积木/脚本配置等。  
配合 [@dobot-plus/cli](https://www.npmjs.com/package/@dobot-plus/cli) 使用，可显著加速 Dobot+ 插件开发。

## 依赖

- **Node.js** v20+
- **IDE**（支持 Agent Skills）
- **@dobot-plus/cli**（全局安装 `dpt` 命令，用于项目构建）

## 安装

```bash
npm install -g @dobot-plus/skill@latest
```

安装完成后，Skill 会自动部署到以下目录 `~/.agents/skills/dobot-plus`。

## 示例

- [适配 Modbus-RTU 协议的末端工具](../examples/Agent/01-Modbus-RTU.md) 
- [I/O 状态控制](../examples/Agent/02-IO.md)
- [自定义控制界面 UI](../examples/Agent/03-UI.md)
