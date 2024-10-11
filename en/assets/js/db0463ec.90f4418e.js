"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[8828],{37622:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>a});var l=i(65723),s=i(43327);const t={},o="Command Line Tool",r={id:"api/cli",title:"Command Line Tool",description:"create",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/06-cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/dobotplus/en/api/cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"api",previous:{title:"Internationalization Configuration",permalink:"/dobotplus/en/api/local"},next:{title:"Lua Processes",permalink:"/dobotplus/en/api/lua"}},c={},a=[{value:"create",id:"create",level:2},{value:"Example",id:"example",level:3},{value:"dev",id:"dev",level:2},{value:"Example",id:"example-1",level:3},{value:"dpt.json",id:"dptjson",level:3},{value:"Page Preview",id:"page-preview",level:3},{value:"lua",id:"lua",level:2},{value:"Example",id:"example-2",level:3},{value:"gui",id:"gui",level:2},{value:"Example",id:"example-3",level:3},{value:"build",id:"build",level:2},{value:"Example",id:"example-4",level:3}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"command-line-tool",children:"Command Line Tool"})}),"\n",(0,l.jsx)(n.h2,{id:"create",children:"create"}),"\n",(0,l.jsx)(n.p,{children:"Running this command will guide you through creating a new plugin project. You can set the project's name, version number, and basic structure through a series of prompts. The generated project will include initial configuration files and file structure to facilitate subsequent development."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dpt create\n"})}),"\n",(0,l.jsx)(n.p,{children:"After using the above command and completing the plugin basic information prompts, the command will:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Pull the plugin file template."}),"\n",(0,l.jsx)(n.li,{children:"Write the user-input basic information into the template."}),"\n",(0,l.jsx)(n.li,{children:"Automatically install the dependencies required for plugin development."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"If the third step of automatic installation fails, the user can manually install dependencies in the plugin folder:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note"}),(0,l.jsx)(n.br,{}),"\n","It is recommended to use ",(0,l.jsx)(n.code,{children:"pnpm"})," for dependency installation. ",(0,l.jsx)(n.code,{children:"pnpm"})," has the following advantages over ",(0,l.jsx)(n.code,{children:"yarn"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Dependency sharing: Duplicate dependencies can be shared using symlinks, reducing the disk space occupied by plugin dependencies."}),"\n",(0,l.jsx)(n.li,{children:"Parallel downloads: Dependencies can be installed faster by sending HTTP requests in parallel."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"dev",children:"dev"}),"\n",(0,l.jsxs)(n.p,{children:["Start the development server and synchronize the code to the real device for debugging. After running ",(0,l.jsx)(n.code,{children:"dpt dev"}),", the system will start a Webpack development server and establish a connection with the real device based on the ",(0,l.jsx)(n.code,{children:"dpt.json"})," configuration file. You can choose whether to debug Lua scripts on the real device. If debugging is selected, the system will synchronize the code to the device via SFTP and monitor file changes. Whenever the Lua script changes, the system will automatically update the files on the device and reload the plugin."]}),"\n",(0,l.jsx)(n.h3,{id:"example-1",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dpt dev\n"})}),"\n",(0,l.jsx)(n.h3,{id:"dptjson",children:"dpt.json"}),"\n",(0,l.jsx)(n.p,{children:"Basic configuration information for connecting to the real machine for debugging:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "ip": "192.168.5.1",\n  "port": 22001,\n  "pluginPort": 22100\n}\n'})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Field"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"ip"}),(0,l.jsx)(n.td,{children:"The real IP of the controller, default is 192.168.5.1 for wired connection."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"port"}),(0,l.jsx)(n.td,{children:"The public service port of the controller, e.g., for obtaining plugin port, installing, and uninstalling plugins."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"pluginPort"}),(0,l.jsxs)(n.td,{children:["The HTTP service port number of the current plugin, dynamically updated, and will be dynamically obtained when the plugin is used, corresponding to the port number mapped by the ",(0,l.jsx)(n.code,{children:"httpAPI.lua"})," module."]})]})]})]}),"\n",(0,l.jsxs)(n.p,{children:["Additionally, the synchronization of Lua files uses the SFTP protocol. The specific connection parameters can be found in the ",(0,l.jsx)(n.code,{children:".dobot/.sftprc"})," file, which generally does not need to be modified by developers."]}),"\n",(0,l.jsx)(n.h3,{id:"page-preview",children:"Page Preview"}),"\n",(0,l.jsx)(n.p,{children:"This command internally uses Webpack for bundling and supports Webpack's hot update mechanism:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"http://localhost:8080/Main"})," - The main control interface of the plugin, displayed when the plugin is clicked after installation."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"http://localhost:8080/Toolbar"})," - Display of the plugin's toolbar interface."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"http://localhost:8080/Blocks"})," - Custom display interface when clicking on blocks."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"lua",children:"lua"}),"\n",(0,l.jsxs)(n.p,{children:["Run Lua scripts and select the target Lua file for execution in the project. This command will list all Lua files in the ",(0,l.jsx)(n.code,{children:"./lua"})," directory and allow you to select a target file to execute. Once selected, the command will run the script using ",(0,l.jsx)(n.code,{children:"lua54.exe"}),", outputting the execution result. This feature is suitable for quickly testing and running Lua code during development."]}),"\n",(0,l.jsx)(n.h3,{id:"example-2",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"Suppose your project structure is as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"/your-project\n\u2502\n\u2514\u2500\u2500 lua/\n   \u251c\u2500\u2500 script1.lua\n   \u251c\u2500\u2500 script2.lua\n   \u2514\u2500\u2500 init.lua\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["After running ",(0,l.jsx)(n.code,{children:"dpt lua"}),", you will see the following prompt:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"Please select target lua file: \n\u276f script1.lua\n  script2.lua\n  init.lua\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["After selecting ",(0,l.jsx)(n.code,{children:"script1.lua"}),", the tool will execute the following command:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"lua54.exe -l init /your-project/lua/script1.lua\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["The script will execute in the ",(0,l.jsx)(n.code,{children:".dobot/lua/"})," directory, and the output will be displayed in the command line."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"gui",children:"gui"}),"\n",(0,l.jsxs)(n.p,{children:["Configure the project through a graphical user interface (GUI). Running this command will start a web GUI interface that allows users to configure the project through a browser. This interface supports real-time preview and interactive operations. If the ",(0,l.jsx)(n.code,{children:"--dev"})," option is specified, the command will start the GUI in development mode, suitable for debugging and development scenarios."]}),"\n",(0,l.jsx)(n.h3,{id:"example-3",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dpt gui\n"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Management panel for block programming configuration files"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(44669).A+"",width:"1920",height:"929"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Management panel for function programming configuration files"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(19862).A+"",width:"1920",height:"929"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Editing panel for translation resources of configuration files"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:i(47923).A+"",width:"1920",height:"929"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"build",children:"build"}),"\n",(0,l.jsx)(n.p,{children:"This command is used to package the project code and generate the final plugin release version. During packaging, the code will be optimized based on the project's Webpack configuration, and the final publishable files will be generated."}),"\n",(0,l.jsx)(n.h3,{id:"example-4",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"dpt build\n"})}),"\n",(0,l.jsxs)(n.p,{children:["During the build process, the first-level ",(0,l.jsx)(n.code,{children:".tsx"})," files in the ",(0,l.jsx)(n.code,{children:"ui/pages"})," path will be built into corresponding pages:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Main.tsx"})," corresponds to the main page of the plugin."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Toolbar.tsx"})," corresponds to the plugin toolbar."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Blocks.tsx"})," corresponds to the plugin's block pop-up page."]}),"\n",(0,l.jsxs)(n.li,{children:["Other first-level custom pages will also undergo similar builds, so developers should pay attention to the naming of ",(0,l.jsx)(n.code,{children:".tsx"})," files in the first-level directory of the ",(0,l.jsx)(n.code,{children:"ui/pages"})," folder."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["After the program completes successfully, a ",(0,l.jsx)(n.code,{children:"dist"})," folder and an ",(0,l.jsx)(n.code,{children:"output"})," folder will appear in the current folder."]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"dist"})," folder contains the plugin code after this build for developers to check the build results."]}),"\n",(0,l.jsxs)(n.li,{children:["The ",(0,l.jsx)(n.code,{children:"output"})," folder contains the compressed ",(0,l.jsx)(n.code,{children:"zip"})," file, with the file name format ",(0,l.jsx)(n.code,{children:"<plugin name>-<version>.zip"}),", which is the plugin actually imported for use in the client."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"The folder structure of uncompressed files after building is as follows:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"\u251c\u2500\u2500 Blocks\n\u2502   \u251c\u2500\u2500 config.json # Block programming configuration file\n\u2502   \u2514\u2500\u2500 index.html  # Page displayed when clicking on block\n\u251c\u2500\u2500 Main\n\u2502   \u251c\u2500\u2500 config.json # Basic configuration of the plugin\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 Resources\n\u2502   \u251c\u2500\u2500 document\n\u2502   \u2502   \u2514\u2500\u2500 config.json # Script programming document configuration\n\u2502   \u251c\u2500\u2500 i18n            # Internationalization translation data\n\u2502   \u2502   \u251c\u2500\u2500 Deutsch     # German translation\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json  # Block programming translation\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json  # Basic configuration translation\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json # Script programming translation\n\u2502   \u2502   \u251c\u2500\u2500 English\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 Espa\xf1ol\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u65e5\u672c\u8a9e\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7b80\u4f53\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7e41\u9ad4\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u2514\u2500\u2500 \ud55c\uad6d\uc5b4\n\u2502   \u2502       \u251c\u2500\u2500 blocks.json\n\u2502   \u2502       \u251c\u2500\u2500 config.json\n\u2502   \u2502       \u2514\u2500\u2500 scripts.json\n\u2502   \u2514\u2500\u2500 images\n\u2502       \u2514\u2500\u2500 pallet.svg\n\u251c\u2500\u2500 Scripts\n\u2502   \u2514\u2500\u2500 config.json # Script programming configuration file\n\u251c\u2500\u2500 Toolbar\n\u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 daemon.lua  # Lua entry file, daemon \n\u251c\u2500\u2500 httpAPI.lua # Data interaction module between controller and GUI, handles HTTP requests from the GUI interface\n\u251c\u2500\u2500 userAPI.lua # Modules for block programming and script programming, corresponding to the actual methods for controlling the end of the robotic arm\n\u2514\u2500\u2500 utils\n    \u2514\u2500\u2500 await485.lua\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},44669:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/blocks-d3796bd994c33e9dd71401a54e9cf700.png"},19862:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/script-75e8face6b91968e0ea6f05989f488ca.png"},47923:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/translate-gui-f67a44c5ac5babd644e228afa26ad8ae.png"},43327:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var l=i(22155);const s={},t=l.createContext(s);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);