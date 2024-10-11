"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[6155],{80953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(65723),l=t(43327);const o={},r="Lua Processes",a={id:"api/lua",title:"Lua Processes",description:"daemon.lua",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/api/07-lua.md",sourceDirName:"api",slug:"/api/lua",permalink:"/dobotplus/en/api/lua",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"api",previous:{title:"Command Line Tool",permalink:"/dobotplus/en/api/cli"}},i={},d=[{value:"daemon.lua",id:"daemonlua",level:2},{value:"control.lua",id:"controllua",level:2},{value:"httpAPI.lua",id:"httpapilua",level:2},{value:"Example Response Format",id:"example-response-format",level:3},{value:"userAPI.lua",id:"userapilua",level:2}];function u(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"lua-processes",children:"Lua Processes"})}),"\n",(0,s.jsx)(n.h2,{id:"daemonlua",children:"daemon.lua"}),"\n",(0,s.jsx)(n.p,{children:"This is the main process for the plugin. After successful installation, the controller will automatically invoke this process and execute the contained program."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"local mqtt = require('utils.mqtt')\n\nlocal function handleInLoop()\n  local data = {}\n  mqtt.publish(data)\nend\n\nlocal function EventLoop()\n  while true do\n    handleInLoop()\n    Wait(1000)\n  end\nend\n\nlocal thread = systhread.create(EventLoop, 1)\nthread:wait()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Typically, this file will establish an MQTT connection and broadcast messages every second. Developers can write code in ",(0,s.jsx)(n.code,{children:"handleInLoop"})," to send messages as needed. After the plugin is successfully created, the default broadcast message channel for this plugin is ",(0,s.jsx)(n.code,{children:"<plugin name>Status"}),". The frontend higher-level components will also default to using this channel when establishing a WebSocket connection."]}),"\n",(0,s.jsxs)(n.p,{children:["Developers can view the MQTT implementation in the file located at ",(0,s.jsx)(n.code,{children:".dobot/lua/utils/mqtt.lua"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"controllua",children:"control.lua"}),"\n",(0,s.jsxs)(n.p,{children:["The functions in ",(0,s.jsx)(n.code,{children:"control.lua"})," are the actual control methods for the plugin. These can be used in both ",(0,s.jsx)(n.code,{children:"userAPI.lua"})," and ",(0,s.jsx)(n.code,{children:"httpAPI.lua"})," and form the core module for implementing plugin functionalities."]}),"\n",(0,s.jsx)(n.h2,{id:"httpapilua",children:"httpAPI.lua"}),"\n",(0,s.jsx)(n.p,{children:"This module handles HTTP requests related to the plugin."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local control = require("control")\n\nlocal httpModule = {}\n\n--- This function will be called when the plugin is uninstalled\nhttpModule.OnUninstall = function()\n\nend\n\n--- This function will be called when the plugin is installed\nhttpModule.OnInstall = function()\n    \nend\n\n--- This function will be called when the plugin is installed, \n--- this action will export some HTTP methods for device hotkey binding\nhttpModule.OnRegistHotKey = function() \n    return {\n        press = {"demoMethod1", "demoMethod2"}, \n        longPress = {"demoMethod3"}\n    }\nend\n\n--- This method will be called when an HTTP request arrives at \n--- \'/dobotPlus/[plugin name]_[plugin version]/demoMethod1\'\n--- The return value will respond to the HTTP request, and is not necessary\n--- @param params table \n--- @return string The return value will respond to the HTTP request, and is not necessary\n--- @method post\nhttpModule.demoMethod1 = function(params)\n    return {\n        --- Your response data\n        --- example: status = true\n    }\nend\n\n--- This method will be called when an HTTP request arrives at \n--- \'/dobotPlus/[plugin name]_[plugin version]/demoMethod2\'\n--- The return value will respond to the HTTP request, and is not necessary\n--- @param params table\n--- @return string \nhttpModule.demoMethod2 = function(params)\n    return {\n        --- Your response data\n        --- example: status = true\n    }\nend\n\n--- This method will be called when an HTTP request arrives at \n--- \'/dobotPlus/[plugin name]_[plugin version]/demoMethod3\'\n--- The return value will respond to the HTTP request, and is not necessary\n--- @param params table\n--- @return string The return value will respond to the HTTP request, and is not necessary\nhttpModule.demoMethod3 = function(params)\n    return {\n        --- Your response data\n        --- example: status = true\n    }\nend\n\nreturn httpModule\n'})}),"\n",(0,s.jsxs)(n.p,{children:["After the plugin is successfully installed and the main process is invoked, the controller dynamically assigns a service port, ",(0,s.jsx)(n.code,{children:"pluginPort"}),", to the plugin. When the controller receives a POST request in the following format:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"http://<ip>:<pluginPort>/dobotPlus/<pluginName>_V<pluginVersion>/<methodName>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["It will automatically invoke the corresponding method in ",(0,s.jsx)(n.code,{children:"httpAPI.lua"})," based on the ",(0,s.jsx)(n.code,{children:"methodName"}),". Currently, the controller only responds to POST requests."]}),"\n",(0,s.jsx)(n.h3,{id:"example-response-format",children:"Example Response Format"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Request URL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"http://192.168.5.1:22011/dobotPlus/test_V1-0-0/demoMethod1"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"httpAPI.lua Module Implementation"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"httpModule.demoMethod1 = function(params)\n    return {\n        status = true\n    }\nend\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Response"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "status": true\n    }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"userapilua",children:"userAPI.lua"}),"\n",(0,s.jsxs)(n.p,{children:["The functions in ",(0,s.jsx)(n.code,{children:"userAPI.lua"})," are used in block programming and script programming. When writing these functions, please ensure that the parameter formats are consistent with the configurations for block programming and script programming."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},43327:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(22155);const l={},o=s.createContext(l);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);