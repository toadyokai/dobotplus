# Github Codespace 中进行开发

Dobot+ 插件的开发也支持在 Github 的 Codespaces 中进行云端开发。  
开发者可以创建一份 Dobot+ 插件模板的拷贝，并在自己的分支上进行云端开发，无需在计算机本地搭建开发环境。

![](../../assets/imgs/codespace/fork.png)

- Dobot+ 插件模板仓库：https://github.com/toadyokai/dobot-plus-template.git
- Dobot+ 插件模板 NPM 包：https://www.npmjs.com/package/@dobot-plus/template

开发者可以针对模板仓库执行 fork 操作，到自己的代码仓库中，或者，可以手动下载 Dobot+ 插件模板，在本地创建仓库，并推送到 Github。

Codespaces 该服务会收取一定的费用。

![](../../assets/imgs/codespace/pay.png)

个人开发者每月的免费额度为 [15G 的存储空间和 120 小时的计算时长](https://docs.github.com/zh/billing/concepts/product-billing/github-codespaces#free-and-billed-use-by-personal-accounts)

## 环境初始化

在页面 Code 菜单下，用户可以创建当前仓库的 Codespaces 工作区间。
![](../../assets/imgs/codespace/codespace.png)

在工作区间创建完成后，浏览器界面上会展示 VScode 的编码界面

![](../../assets/imgs/codespace/install.png)

界面右下角在第一次进入时，会有弹窗提示 Dobot+ 模板项目推荐安装的 vscode 插件，这些插件对于开发效率的提升很有帮助，建议开发者进行安装。

在远端容器初始化时，会自动执行项目依赖的安装和`@dobot-plus/cli`依赖的安装，在 codespace 打开后，开发者可以在其中命令行工具中进行查看确认。

```bash
node -v # 查看node版本

pnpm -v # 查看pnpm版本

dpt -v  # 查看dpt开发工具版本
```

**注意**

如果自动化程序失效，开发者可以自行进行依赖初始化操作：

```bash
# 当前模板项目的 npm 依赖的安装
pnpm i

# 安装Dobot+ 开发调试工具
npm install @dobot-plus/cli --global
```

![](../../assets/imgs/codespace/cli.png)

在完成上述操作后，云端基础的开发环境就搭建完成了。

开发者可以在命令行中执行以下指令，查看工具版本是否符合要求。

## 开发调试

codespace 初始化完成后，在命令行中执行

```bash
dpt dev
```

上述操作与本地执行

```
dpt dev
```

效果一致，开发者需要在浏览器地址栏中保证页面弹窗提示功能打开，以确保可以实现预览页面的自动打开和重定向。

**注意**  
codespace 端的调试需要使用虚拟控制器进行连接，开发者需要自行申请虚拟控制器用于开发调试，同时将虚拟控制器 ip 更新到项目的 `dpt.json` 配置文件中。

![](../../assets/imgs/codespace/dev.png)

当上述指令顺利执行后，浏览器会自动打开插件预览界面，如下
![](../../assets/imgs/codespace/preview.png)

开发者可以根据需求，调试对应插件界面的交互和样式。

当存在页面无法自动弹出的情况时，开发者也可以根据当前 Codespaces 的 url 地址，手动拼凑预览界面的地址，并在浏览器中打开，默认的预览端口号为 8080.

![](../../assets/imgs/codespace/url.png)

修改 `.github.dev` 前的部分，增加 `-8080`，可在浏览器中手动打开界面预览链接。

![](../../assets/imgs/codespace/url2.png)

## 插件打包

在 Codespaces 命令行中执行插件构建指令

```
dpt build
```

在构建操作执行完毕后，在界面左侧文件菜单中打开 `output` 文件夹，右键选择其中的 zip 文件，执行下载操作，稍等片刻后打包压缩后插件包会自动下载到浏览器的文件下载目录。

![](../../assets/imgs/codespace/download.png)

## 继续开发

使用 Codespaces 需要保持设备联网状态，在完成某次开发后，如果项目 Codespaces 不主动删除销毁，会一直保存，开发者可以点击对应的 Codespaces 再次进入，进行新的开发工作。

![](../../assets/imgs/codespace/codespace.png)

参考资料

- [什么是 GitHub Codespaces？](https://docs.github.com/zh/codespaces/about-codespaces/what-are-codespaces)
- [Codespaces 计费规则](https://docs.github.com/zh/billing/concepts/product-billing/github-codespaces)
