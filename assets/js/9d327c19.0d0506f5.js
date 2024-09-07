"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[4343],{3232:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>i});var l=t(5723),r=t(3327);const s={},o="Lua \u8fdb\u7a0b",a={id:"api/lua",title:"Lua \u8fdb\u7a0b",description:"daemon.lua",source:"@site/docs/api/05-lua.md",sourceDirName:"api",slug:"/api/lua",permalink:"/dobotplus/api/lua",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"api",previous:{title:"\u56fd\u9645\u5316\u914d\u7f6e",permalink:"/dobotplus/api/local"},next:{title:"\u9879\u76ee\u914d\u7f6e\u6587\u4ef6",permalink:"/dobotplus/api/config"}},u={},i=[{value:"daemon.lua",id:"daemonlua",level:2},{value:"httpAPI.lua",id:"httpapilua",level:2},{value:"userAPI.lua",id:"userapilua",level:2}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"lua-\u8fdb\u7a0b",children:"Lua \u8fdb\u7a0b"})}),"\n",(0,l.jsx)(n.h2,{id:"daemonlua",children:"daemon.lua"}),"\n",(0,l.jsx)(n.p,{children:"\u63d2\u4ef6\u4e3b\u8fdb\u7a0b\uff0c\u5f53\u63d2\u4ef6\u5b89\u88c5\u6210\u529f\u540e\uff0c\u63a7\u5236\u5668\u4f1a\u81ea\u52a8\u8c03\u8d77\u8be5\u8fdb\u7a0b\uff0c\u5e76\u6267\u884c\u5176\u4e2d\u7a0b\u5e8f\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"local mqtt = require('utils.mqtt')\n\nlocal function handleInLoop()\n  local data = {}\n  mqtt.publish(data)\nend\n\nlocal function EventLoop()\n  while true do\n    handleInLoop()\n    Wait(1000)\n  end\nend\n\nlocal thread = systhread.create(EventLoop, 1)\nthread:wait()\n\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u8be5\u6587\u4ef6\u4e2d\u4f1a\u521b\u5efa\u4e00\u4e2a mqtt \u8fde\u63a5\uff0c\u5e76\u4e14\u6bcf\u9694 1s \u5411\u5916\u5e7f\u64ad\u6d88\u606f\uff0c\u5f00\u53d1\u8005\u6709\u9700\u8981\u5e7f\u64ad\u7684\u6d88\u606f\uff0c\u53ef\u4ee5\u81ea\u884c\u5728 ",(0,l.jsx)(n.code,{children:"handleInLoop"})," \u8fdb\u884c\u4ee3\u7801\u7f16\u5199\u3002\u5f53\u63d2\u4ef6\u521b\u5efa\u6210\u529f\u540e\uff0c\u8be5\u63d2\u4ef6\u7684\u5e7f\u64ad\u6d88\u606f\u901a\u9053\u9ed8\u8ba4\u4e3a ",(0,l.jsx)(n.code,{children:"<\u63d2\u4ef6\u540d>Status"})," \u4e0e\u4e4b\u914d\u5957\u7684\uff0c\u524d\u7aef\u9ad8\u9636\u7ec4\u4ef6\u5728\u5efa\u7acb websocket \u8fde\u63a5\u65f6\u4e5f\u4f1a\u9ed8\u8ba4\u4f7f\u7528\u6b64\u901a\u9053\u3002\n\u5f00\u53d1\u8005\u53ef\u4ee5\u8fdb\u5165 ",(0,l.jsx)(n.code,{children:".dobot/lua/utils/mqtt.lua"})," \u67e5\u770b"]}),"\n",(0,l.jsx)(n.h2,{id:"httpapilua",children:"httpAPI.lua"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local userAPI = require("userAPI")\n\nlocal httpModule = {}\n\n--- This function will be called when plugin uninstalled\nhttpModule.OnUninstall = function()\n\nend\n\n--- This function will be called when plugin installed\nhttpModule.OnInstall = function()\n    \nend\n\n--- This function will be called when plugin installed, this action will export some http method for device hotkey binding\nhttpModule.OnRegistHotKey = function() \n\treturn {press = {"demoMethod1", "demoMethod2"}, longPress = {"demoMethod3"}}\nend\n\n--- This method will be called when a http \'/dobotPlus/[plugin name]_[plugin version]/demoMethod1\' request arrived\n--- The return value will response the http request, the return value is not necessory\n--- @param params table \n--- @return string The return value will response the http request, the return value is not necessory\n--- @method post\nhttpModule.demoMethod1 = function(params)\n\t\n\treturn {\n\t\t--- Your responce data\n        --- example: status = true\n\t}\nend\n\n--- This method will be called when a http \'/dobotPlus/[plugin name]_[plugin version]/demoMethod2\' request arrived\n--- The return value will response the http request, the return value is not necessory\n--- @param params table\n--- @return string \nhttpModule.demoMethod2 = function(params)\n\t\n\treturn {\n\t\t--- Your responce data\n        --- example: status = true\n\t}\nend\n\n--- This method will be called when a http \'/dobotPlus/[plugin name]_[plugin version]/demoMethod3\' request arrived\n--- The return value will response the http request, the return value is not necessory\n--- @param params table\n--- @return string The return value will response the http request, the return value is not necessory\nhttpModule.demoMethod3 = function(params)\n\t\n\treturn {\n        --- Your responce data\n        --- example: status = true\n    }\nend\n\nreturn httpModule\n\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u5728\u63d2\u4ef6\u6210\u529f\u5b89\u88c5\u4e14\u4e3b\u8fdb\u7a0b\u88ab\u987a\u5229\u8c03\u8d77\u540e\uff0c\u63a7\u5236\u5668\u4f1a\u4e3a\u8be5\u63d2\u4ef6\u52a8\u6001\u5206\u914d\u4e00\u4e2a\u670d\u52a1\u7aef\u53e3 ",(0,l.jsx)(n.code,{children:"pluginPort"}),"\u3002",(0,l.jsx)(n.br,{}),"\n","\u5f53\u63a7\u5236\u5668\u6536\u5230 ",(0,l.jsx)(n.code,{children:"http://<ip>:<pluginPort>/dobotPlus/<pluginName>_V<pluginVersion>/<methodName>"})," \u683c\u5f0f\u7684 post \u8bf7\u6c42\u540e\uff0c\u4f1a\u6839\u636emethodName \u81ea\u52a8\u8c03\u8d77 ",(0,l.jsx)(n.code,{children:"httpAPI.lua"})," \u6587\u4ef6\u4e2d\u7684\u5bf9\u5e94\u65b9\u6cd5\u3002\u76ee\u524d\u63a7\u5236\u5668\u53ea\u4f1a\u54cd\u5e94post\u8bf7\u6c42\u3002\n\u54cd\u5e94\u4f53\u683c\u5f0f\u793a\u4f8b"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["\u8bf7\u6c42url\n",(0,l.jsx)(n.code,{children:"http://192.168.5.1:22011/dobotPlus/test_V1-0-0/demoMethod1"})]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"httpAPI.lua \u6a21\u5757\u5177\u4f53\u5b9e\u73b0"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"httpModule.demoMethod1 = function(params)\n  return {\n    status = true\n  }\nend\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\u8bf7\u6c42\u7684\u8fd4\u56de"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "status": true\n  }\n]\n'})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"userapilua",children:"userAPI.lua"}),"\n",(0,l.jsx)(n.p,{children:"userAPI.lua \u4e2d\u7684\u51fd\u6570\u5728\u79ef\u6728\u7f16\u7a0b\u548c\u811a\u672c\u7f16\u7a0b\u4e2d\u4f7f\u7528\uff0c\u5728\u7f16\u5199\u65f6\uff0c\u8bf7\u6ce8\u610f\u51fd\u6570\u7684\u53c2\u6570\u5f62\u5f0f\u548c\u79ef\u6728\u7f16\u7a0b\u3001\u811a\u672c\u7f16\u7a0b\u914d\u7f6e\u4fdd\u6301\u4e00\u81f4\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},3327:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var l=t(2155);const r={},s=l.createContext(r);function o(e){const n=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);