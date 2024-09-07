"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[8001],{666:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var s=t(5723),l=t(3327);const r={},d="\u603b\u7ebf\u5bc4\u5b58\u5668",i={id:"lua/busRegister",title:"\u603b\u7ebf\u5bc4\u5b58\u5668",description:"\u6307\u4ee4\u5217\u8868",source:"@site/docs/lua/10-busRegister.md",sourceDirName:"lua",slug:"/lua/busRegister",permalink:"/dobotplus/en/lua/busRegister",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"lua",previous:{title:"\u5b89\u5168\u76ae\u80a4",permalink:"/dobotplus/en/lua/safeskin"},next:{title:"\u7a0b\u5e8f\u63a7\u5236",permalink:"/dobotplus/en/lua/programControl"}},c={},o=[{value:"GetInputBool",id:"getinputbool",level:2},{value:"GetInputInt",id:"getinputint",level:2},{value:"GetInputFloat",id:"getinputfloat",level:2},{value:"GetOutputBool",id:"getoutputbool",level:2},{value:"GetOutputInt",id:"getoutputint",level:2},{value:"GetOutputFloat",id:"getoutputfloat",level:2},{value:"SetOutputBool",id:"setoutputbool",level:2},{value:"SetOutputInt",id:"setoutputint",level:2},{value:"SetOutputFloat",id:"setoutputfloat",level:2}];function h(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"\u603b\u7ebf\u5bc4\u5b58\u5668",children:"\u603b\u7ebf\u5bc4\u5b58\u5668"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u4ee4\u5217\u8868\n\u603b\u7ebf\u5bc4\u5b58\u5668\u6307\u4ee4\u7528\u4e8e\u8bfb\u5199Profinet\u6216Ethernet/IP\u603b\u7ebf\u5bc4\u5b58\u5668\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u8bf4\u660e\uff1a\nMagician E6\u4e0d\u652f\u6301\u8fd9\u7ec4\u6307\u4ee4\u3002"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u6307\u4ee4"}),(0,s.jsx)(e.th,{children:"\u529f\u80fd"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetInputBool"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetInputInt"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetInputFloat"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetOutputBool"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetOutputInt"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"GetOutputFloat"}),(0,s.jsx)(e.td,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SetOutputBool"}),(0,s.jsx)(e.td,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SetOutputInt"}),(0,s.jsx)(e.td,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u503c"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"SetOutputFloat"}),(0,s.jsx)(e.td,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u503c"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"getinputbool",children:"GetInputBool"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetInputBool(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-63]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a0\u62161"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u5f53\u8f93\u5165\u5bc4\u5b58\u56680\u7684\u503c\u4e3a1\u65f6\uff0c\u6267\u884c\u540e\u7eed\u64cd\u4f5c\u3002\nif(GetInputBool(0)==1)\nthen\n    -- \u6267\u884c\u540e\u7eed\u64cd\u4f5c\nend\n"})}),"\n",(0,s.jsx)(e.h2,{id:"getinputint",children:"GetInputInt"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetInputInt(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a\u6574\u578b\u6570\uff08int32\uff09"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bfb\u53d6\u8f93\u5165\u5bc4\u5b58\u56681\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u53d8\u91cfregInt\u3002\nlocal regInt = GetInputInt(1)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"getinputfloat",children:"GetInputFloat"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetInputFloat(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u2f0a\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff08float\uff09"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bfb\u53d6\u8f93\u5165\u5bc4\u5b58\u56682\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u53d8\u91cfregFloat\u3002\nlocal regFloat = GetInputFloat(2)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"getoutputbool",children:"GetOutputBool"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetOutputBool(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-63]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a0\u62161"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u5f53\u8f93\u51fa\u5bc4\u5b58\u56680\u7684\u503c\u4e3a1\u65f6\uff0c\u6267\u884c\u540e\u7eed\u64cd\u4f5c\u3002\nif(GetOutputBool(0)==1)\nthen\n    -- \u6267\u884c\u540e\u7eed\u64cd\u4f5c\nend\n"})}),"\n",(0,s.jsx)(e.h2,{id:"getoutputint",children:"GetOutputInt"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetOutputInt(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a\u6574\u578b\u6570\uff08int32\uff09"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bfb\u53d6\u8f93\u51fa\u5bc4\u5b58\u56681\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u53d8\u91cfregInt\u3002\nlocal regInt = GetOutputInt(1)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"getoutputfloat",children:"GetOutputFloat"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nGetOutputFloat(address)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u83b7\u53d6\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u6307\u5b9a\u7684\u5bc4\u5b58\u5668\u5730\u5740\u7684\u503c\uff0c\u4e3a\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff08float\uff09"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bfb\u53d6\u8f93\u51fa\u5bc4\u5b58\u56682\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u53d8\u91cfregFloat\u3002\nlocal regFloat = GetOutputFloat(2)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setoutputbool",children:"SetOutputBool"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nSetOutputBool(address, value)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684bool\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(e.p,{children:["address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-63]\nvalue\uff1a\u8981\u8bbe\u7f6e\u7684\u503c\uff0c\u652f\u6301\u5e03\u5c14\u503c\u62160/1\n",(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u56680\u7684\u503c\u4e3a\u5047\u3002\nSetOutputBool(0,0)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setoutputint",children:"SetOutputInt"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"SetOutputInt(address, value)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684int\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(e.p,{children:["address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]\nvalue\uff1a\u8981\u8bbe\u7f6e\u7684\u503c\uff0c\u652f\u6301\u6574\u578b\u6570\uff08int32\uff09\n",(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u56681\u7684\u503c\u4e3a123\u3002\nSetOutputInt(1,123)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"setoutputfloat",children:"SetOutputFloat"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\nSetOutputFloat(address, value)\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,s.jsx)(e.p,{children:"\u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u5668\u6307\u5b9a\u5730\u5740\u7684float\u7c7b\u578b\u7684\u6570\u503c\u3002"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,s.jsxs)(e.p,{children:["address\uff1a\u5bc4\u5b58\u5668\u5730\u5740\uff0c\u53d6\u503c\u8303\u56f4[0-23]\nvalue\uff1a\u8981\u8bbe\u7f6e\u7684\u503c\uff0c\u652f\u6301\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\uff08float\uff09\u3002\u53d7\u6d6e\u70b9\u6570\u7684\u5b58\u50a8\u673a\u5236\uff08IEEE754\uff09\u9650\u5236\uff0c\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\u53ef\u4fdd\u5b58\u7684\u6709\u6548\u6570\u5b57\u7ea66\u52307\u4f4d\uff08\u4e0e\u5c0f\u6570\u70b9\u4f4d\u7f6e\u65e0\u5173\uff09\u3002\u6709\u6548\u6570\u5b57\u5927\u4e8e6\u4f4d\u7684\u503c\u4fdd\u5b58\u4e3a\u5355\u7cbe\u5ea6\u6d6e\u70b9\u6570\u53ef\u80fd\u4f1a\u4ea7\u751f\u504f\u5dee\uff0c\u6709\u6548\u6570\u5b57\u4f4d\u6570\u8d8a\u591a\u53ef\u80fd\u4ea7\u751f\u7684\u504f\u5dee\u8d8a\u5927\u3002\n",(0,s.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-lua",children:"\n-- \u8bbe\u7f6e\u8f93\u51fa\u5bc4\u5b58\u56682\u7684\u503c\u4e3a12.3\u3002\nSetOutputFloat(2,12.3)\n"})})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},3327:(n,e,t)=>{t.d(e,{R:()=>d,x:()=>i});var s=t(2155);const l={},r=s.createContext(l);function d(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:d(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);