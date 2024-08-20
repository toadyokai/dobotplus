"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[2284],{2863:(n,s,o)=>{o.r(s),o.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var i=o(5723),e=o(3327);const t={},l="build",c={id:"api/CLI/build",title:"build",description:"\u6839\u636e\u63d2\u4ef6\u6a21\u677f\u53ca\u6e90\u7801\u6784\u5efa\u751f\u4ea7\u4ee3\u7801",source:"@site/docs/api/CLI/03-build.md",sourceDirName:"api/CLI",slug:"/api/CLI/build",permalink:"/toadyokai/dobotplus/api/CLI/build",draft:!1,unlisted:!1,editUrl:"http://192.168.0.11:20080/IndustrialProducts/TPGroup/FrontEndpluginCollection/dobotplus/dobotpluginsworktile/apps/website/docs/docs/api/CLI/03-build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"api",previous:{title:"dev",permalink:"/toadyokai/dobotplus/api/CLI/dev"},next:{title:"gui",permalink:"/toadyokai/dobotplus/api/CLI/gui"}},r={},d=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}];function p(n){const s={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,e.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"build",children:"build"}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsx)(s.p,{children:"\u6839\u636e\u63d2\u4ef6\u6a21\u677f\u53ca\u6e90\u7801\u6784\u5efa\u751f\u4ea7\u4ee3\u7801"}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"dpt build\n"})}),"\n",(0,i.jsx)(s.p,{children:"\u8be5\u6307\u4ee4\u4f7f\u7528 nodejs \u9488\u5bf9\u6587\u4ef6\u8fdb\u884c\u9884\u5904\u7406\uff0c\u540c\u65f6\u4f7f\u7528webpack\u5bf9GUI\u754c\u9762\u8fdb\u884c\u7f16\u8bd1\u6253\u5305\u5904\u7406\uff0c\u5e76\u5c06\u6784\u5efa\u540e\u7684\u4ea7\u7269\u8fdb\u884czip\u538b\u7f29"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"\u521b\u5efadist\u6587\u4ef6\u5939"}),"\n",(0,i.jsx)(s.li,{children:"\u5728dist\u6587\u4ef6\u5939\u4e2d\uff0c\u521b\u5efa\u5339\u914d\u4e0a\u4f4d\u673a\u7684\u6587\u4ef6\u5939\u7ed3\u6784"}),"\n",(0,i.jsx)(s.li,{children:"\u5904\u7406\u56fd\u9645\u5316\u7684\u7ffb\u8bd1\u8d44\u6e90"}),"\n",(0,i.jsx)(s.li,{children:"\u7f16\u8bd1GUI\u754c\u9762"}),"\n",(0,i.jsx)(s.li,{children:"\u6267\u884czip\u538b\u7f29"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"\u6784\u5efa\u540e\u7684\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"\u251c\u2500\u2500 Blocks\n\u2502   \u251c\u2500\u2500 config.json # \u79ef\u6728\u7f16\u7a0b\u914d\u7f6e\u6587\u4ef6\n\u2502   \u2514\u2500\u2500 index.html  # \u79ef\u6728\u7f16\u7a0b\u70b9\u51fb\u79ef\u6728\u5757\u5c55\u793a\u7684\u9875\u9762\n\u251c\u2500\u2500 Main\n\u2502   \u251c\u2500\u2500 config.json # \u63d2\u4ef6\u57fa\u7840\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 Resources\n\u2502   \u251c\u2500\u2500 document\n\u2502   \u2502   \u2514\u2500\u2500 config.json # \u811a\u672c\u7f16\u7a0b\u6587\u6863\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 i18n            # \u56fd\u9645\u5316\u7ffb\u8bd1\u6570\u636e\n\u2502   \u2502   \u251c\u2500\u2500 Deutsch     # \u5fb7\u8bed\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json  # \u79ef\u6728\u7f16\u7a0b\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json  # \u57fa\u7840\u914d\u7f6e\u7684\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json # \u811a\u672c\u7f16\u7a0b\u7684\u7ffb\u8bd1\n\u2502   \u2502   \u251c\u2500\u2500 English\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 Espa\xf1ol\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u65e5\u672c\u8a9e\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7b80\u4f53\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7e41\u9ad4\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u2514\u2500\u2500 \ud55c\uad6d\uc5b4\n\u2502   \u2502       \u251c\u2500\u2500 blocks.json\n\u2502   \u2502       \u251c\u2500\u2500 config.json\n\u2502   \u2502       \u2514\u2500\u2500 scripts.json\n\u2502   \u2514\u2500\u2500 images\n\u2502       \u2514\u2500\u2500 pallet.svg\n\u251c\u2500\u2500 Scripts\n\u2502   \u2514\u2500\u2500 config.json # \u811a\u672c\u7f16\u7a0b\u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 Toolbar\n\u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 daemon.lua  # lua\u5165\u53e3\u6587\u4ef6\u3001\u5b88\u62a4\u8fdb\u7a0b \n\u251c\u2500\u2500 httpAPI.lua # \u63a7\u5236\u5668\u548cGUI\u7684\u6570\u636e\u4ea4\u4e92\u6a21\u5757\uff0c\u5904\u7406GUI\u754c\u9762\u7684http\u8bf7\u6c42\n\u251c\u2500\u2500 userAPI.lua # \u79ef\u6728\u7f16\u7a0b\u548c\u811a\u672c\u7f16\u7a0b\u7684\u6a21\u5757\uff0c\u5bf9\u5e94\u5b9e\u9645\u63a7\u5236\u673a\u68b0\u81c2\u672b\u7aef\u7684\u65b9\u6cd5\n\u2514\u2500\u2500 utils\n    \u2514\u2500\u2500 await485.lua\n"})}),"\n",(0,i.jsxs)(s.p,{children:["\u6784\u5efa\u540e\u7684zip\u62a5\u7684\u683c\u5f0f\u5982\u4e0b ",(0,i.jsx)(s.code,{children:"[plugin name]-[plugin version].zip"})]})]})}function u(n={}){const{wrapper:s}={...(0,e.R)(),...n.components};return s?(0,i.jsx)(s,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},3327:(n,s,o)=>{o.d(s,{R:()=>l,x:()=>c});var i=o(2155);const e={},t=i.createContext(e);function l(n){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(e):n.components||e:l(n.components),i.createElement(t.Provider,{value:s},n.children)}}}]);