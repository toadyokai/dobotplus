"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[8156],{1300:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>j,frontMatter:()=>t,metadata:()=>d,toc:()=>o});var i=s(5723),c=s(3327);const t={},r="\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",d={id:"api/script",title:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",description:"\u5b89\u88c5\u5b8c\u63d2\u4ef6\u540e\uff0c\u652f\u6301\u5728\u811a\u672c\u7f16\u7a0b\u4e2d\u8fd0\u884c\u63d2\u4ef6\u7684\u6307\u4ee4\uff0c\u901a\u8fc7\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u63d2\u4ef6\u6307\u4ee4\u6dfb\u52a0\u8fdb\u6307\u4ee4\u83dc\u5355\u680f\uff0c\u5b9e\u73b0\u6307\u4ee4\u7684\u5feb\u901f\u63d2\u5165\u3002",source:"@site/docs/api/02-script.md",sourceDirName:"api",slug:"/api/script",permalink:"/dobotplus/en/api/script",draft:!1,unlisted:!1,editUrl:"http://192.168.0.11:20080/IndustrialProducts/TPGroup/FrontEndpluginCollection/dobotplus/dobotpluginsworktile/apps/website/docs/docs/api/02-script.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"api",previous:{title:"\u56fe\u5f62\u7f16\u7a0b\u914d\u7f6e",permalink:"/dobotplus/en/api/blocky"},next:{title:"\u672b\u7aef\u5feb\u6377\u952e\u914d\u7f6e",permalink:"/dobotplus/en/api/hotkey"}},l={},o=[{value:"\u81ea\u5b9a\u4e49\u6307\u4ee4",id:"\u81ea\u5b9a\u4e49\u6307\u4ee4",level:2},{value:"\u81ea\u5b9a\u4e49\u6307\u4ee4\u5e2e\u52a9\u6587\u6863",id:"\u81ea\u5b9a\u4e49\u6307\u4ee4\u5e2e\u52a9\u6587\u6863",level:2},{value:"\u56fd\u9645\u5316\u7ffb\u8bd1",id:"\u56fd\u9645\u5316\u7ffb\u8bd1",level:2}];function h(e){const n={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",children:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5b89\u88c5\u5b8c\u63d2\u4ef6\u540e\uff0c\u652f\u6301\u5728\u811a\u672c\u7f16\u7a0b\u4e2d\u8fd0\u884c\u63d2\u4ef6\u7684\u6307\u4ee4\uff0c\u901a\u8fc7\u914d\u7f6e\uff0c\u53ef\u4ee5\u5c06\u63d2\u4ef6\u6307\u4ee4\u6dfb\u52a0\u8fdb\u6307\u4ee4\u83dc\u5355\u680f\uff0c\u5b9e\u73b0\u6307\u4ee4\u7684\u5feb\u901f\u63d2\u5165\u3002\n\u627e\u5230",(0,i.jsx)(n.code,{children:"configs/Scripts.json"}),"\uff0c\u901a\u8fc7\u6307\u5b9a\u53c2\u6570\u6765\u81ea\u5b9a\u4e49\u4f60\u60f3\u8981\u5c55\u793a\u7684\u6307\u4ee4\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u672c\u7ae0\u8282\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u52a8\u6001\u751f\u6210\u6307\u4ee4,\u4f60\u5c06\u4f1a\u4e86\u89e3\u5230"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u81ea\u5b9a\u4e49\u6307\u4ee4"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u81ea\u5b9a\u4e49\u6307\u4ee4\u5e2e\u52a9\u6587\u6863"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u505a\u56fd\u9645\u5316\u7ffb\u8bd1"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u4f55\u5728\u7ebf\u8c03\u8bd5\u6307\u4ee4"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6307\u4ee4",children:"\u81ea\u5b9a\u4e49\u6307\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"json\u914d\u7f6e"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "script_name": "EnableSafeSkin",\n  "message": "\u5f00\u5173\u5b89\u5168\u76ae\u80a4",\n  "script_code": "EnableSafeSkin()"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u8bf4\u660e"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,i.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,i.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,i.jsx)(n.th,{children:"\u5fc5\u586b"}),(0,i.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"script_name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u65e0"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"\u6307\u4ee4\u51fd\u6570\u540d\uff0c\u53ea\u652f\u6301\u7eaf\u5b57\u6bcd"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"message"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u65e0"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"\u6307\u4ee4\u63cf\u8ff0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"script_code"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"\u65e0"}),(0,i.jsx)(n.td,{children:"\u662f"}),(0,i.jsx)(n.td,{children:"\u6307\u4ee4\u8fd0\u884c\u8f6c\u4ee3\u7801"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6307\u4ee4\u5e2e\u52a9\u6587\u6863",children:"\u81ea\u5b9a\u4e49\u6307\u4ee4\u5e2e\u52a9\u6587\u6863"}),"\n",(0,i.jsxs)(n.p,{children:["\u6307\u4ee4\u7f16\u7a0b\u53ef\u4ee5\u5c55\u793a\u6307\u4ee4\u7684\u5e2e\u52a9\u6587\u6863\uff0c\u652f\u6301\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002\n\u53ef\u4ee5\u5c06\u6587\u6863\u653e\u5165",(0,i.jsx)(n.code,{children:"Resources/document"}),"\u4e2d\uff0c\u5e76\u4e14\u5728",(0,i.jsx)(n.code,{children:"Resources/document"}),"\u4e0b\u6307\u5b9a\u8def\u5f84"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728",(0,i.jsx)(n.code,{children:"Resources/document/config.json"}),"\u4e2d\u6dfb\u52a0","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n    "script":"Safety Skin.html"\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728",(0,i.jsx)(n.code,{children:"Resources/document"}),"\u653e\u5165",(0,i.jsx)(n.code,{children:"Safety Skin.html"}),"\u6587\u6863\u8d44\u6e90"]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fd\u9645\u5316\u7ffb\u8bd1",children:"\u56fd\u9645\u5316\u7ffb\u8bd1"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Resources/i18n"}),"\u53ef\u4ee5\u914d\u7f6e\u6307\u4ee4\u4fe1\u606f\u7ffb\u8bd1"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5728",(0,i.jsx)(n.code,{children:"Resources/i18n/zh.json"}),"\u4e2d",(0,i.jsx)(n.code,{children:"scripts"}),"\u5b57\u6bb5\u4e2d\u6dfb\u52a0","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "scripts":{\n    "tr_dobot_switch_safe_skin": "\u5f00\u5173\u5b89\u5168\u76ae\u80a4"\n  }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728",(0,i.jsx)(n.code,{children:"Resources/i18n/en.json"}),"\u4e2d",(0,i.jsx)(n.code,{children:"scripts"}),"\u5b57\u6bb5\u4e0b\u6dfb\u52a0","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n  "scripts":{\n    "tr_dobot_switch_safe_skin": "Switch Security Skin"\n  }\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5728\u6307\u4ee4\u4e2d\u4e2d\u4f7f\u7528","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'{\n    "script_name": "EnableSafeSkin",\n    "message": "%{tr_dobot_switch_safe_skin}",\n}\n'})}),"\n"]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3327:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(2155);const c={},t=i.createContext(c);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);