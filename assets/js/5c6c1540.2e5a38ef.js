"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[1352],{4323:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var l=r(65723),s=r(43327);const t={},i="\u6258\u76d8",c={id:"lua/tray",title:"\u6258\u76d8",description:"\u6307\u4ee4\u5217\u8868",source:"@site/docs/lua/12-tray.md",sourceDirName:"lua",slug:"/lua/tray",permalink:"/dobotplus/lua/tray",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{},sidebar:"lua",previous:{title:"\u7a0b\u5e8f\u63a7\u5236",permalink:"/dobotplus/lua/programControl"},next:{title:"\u5206\u5e03\u5f0f\u9501",permalink:"/dobotplus/lua/lock"}},d={},a=[{value:"\u6307\u4ee4\u5217\u8868",id:"\u6307\u4ee4\u5217\u8868",level:2},{value:"CreateTray",id:"createtray",level:2},{value:"GetTrayPoint",id:"gettraypoint",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u6258\u76d8",children:"\u6258\u76d8"})}),"\n",(0,l.jsx)(e.h2,{id:"\u6307\u4ee4\u5217\u8868",children:"\u6307\u4ee4\u5217\u8868"}),"\n",(0,l.jsx)(e.p,{children:"\u6258\u76d8\u662f\u6309\u6392\u5217\u89c4\u5f8b\u653e\u7f6e\u6279\u91cf\u7269\u6599\u7684\u627f\u8f7d\u88c5\u7f6e\uff0c\u5e38\u7528\u4e8e\u81ea\u52a8\u5316\u4e0a\u4e0b\u6599\u73af\u8282\u3002\u6258\u76d8\u4e2d\u901a\u5e38\u9635\u5217\u5206\u5e03\u4e86\u8bb8\u591a\u51f9\u69fd\uff0c\u6bcf\u4e2a\u51f9\u69fd\u90fd\u53ef\u4ee5\u653e\u7f6e\u4e00\u4e2a\u7269\u6599\u3002\u4f7f\u7528\u6258\u76d8\u6307\u4ee4\u53ef\u4ee5\u901a\u8fc7\u793a\u6559\u5c11\u91cf\u7684\u70b9\u521b\u5efa\u4e00\u4e2a\u5b8c\u6574\u7684\u6258\u76d8\u70b9\u4f4d\u9635\u5217\uff0c\u5e76\u53ef\u4ee5\u83b7\u53d6\u5df2\u521b\u5efa\u6258\u76d8\u4e2d\u7684\u5177\u4f53\u70b9\u4f4d\uff0c\u5feb\u901f\u5b9e\u73b0\u673a\u5668\u4eba\u81ea\u52a8\u4e0a\u4e0b\u6599\u3002"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u6307\u4ee4"}),(0,l.jsx)(e.th,{children:"\u529f\u80fd"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"CreateTray"}),(0,l.jsx)(e.td,{children:"\u521b\u5efa\u6258\u76d8"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"GetTrayPoint"}),(0,l.jsx)(e.td,{children:"\u83b7\u53d6\u6258\u76d8\u70b9"})]})]})]}),"\n",(0,l.jsx)(e.h2,{id:"createtray",children:"CreateTray"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:"CreateTray(Trayname, {Count}, {P1,P2})  -- \u4e00\u7ef4\u6258\u76d8\nCreateTray(Trayname, {row,col}, {P1,P2,P3,P4})  -- \u4e8c\u7ef4\u6258\u76d8\nCreateTray(Trayname, {row,col,layer}, {P1,P2,P3,P4,P5,P6,P7,P8})  -- \u4e09\u7ef4\u6258\u76d8\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u6258\u76d8\uff0c\u652f\u6301\u521b\u5efa\u4e00\u7ef4\u3001\u4e8c\u7ef4\u548c\u4e09\u7ef4\u7684\u6258\u76d8\u3002\u6700\u591a\u53ef\u521b\u5efa20\u4e2a\u6258\u76d8\uff0c\u521b\u5efa\u540c\u540d\u7684\u6258\u76d8\u65f6\u4f1a\u8986\u76d6\u5df2\u6709\u7684\u6258\u76d8\uff0c\u4e0d\u4f1a\u589e\u52a0\u6258\u76d8\u6570\u91cf\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Trayname\uff1a\u6258\u76d8\u540d\u79f0\uff0c\u6700\u957f32\u5b57\u8282\u7684\u5b57\u7b26\u4e32\uff0c\u4e0d\u5141\u8bb8\u4e3a\u7eaf\u6570\u5b57\u6216\u8005\u7eaf\u7a7a\u683c\u3002\n\u540e\u4e24\u4e2a\u53c2\u6570\u4e3atable\u53d8\u91cf\uff0c\u6839\u636e\u8981\u521b\u5efa\u7684\u6258\u76d8\u7ef4\u5ea6\u4e0d\u540c\uff0ctable\u5185\u7684\u503c\u7684\u6570\u91cf\u4e0d\u540c\uff0c\u4e0b\u6587\u5206\u522b\u8fdb\u884c\u4ecb\u7ecd\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u4e00\u7ef4\u6258\u76d8\uff1a\u4e00\u7ef4\u6258\u76d8\u662f\u5728\u4e00\u6761\u76f4\u7ebf\u4e0a\u7b49\u8ddd\u5206\u5e03\u7684\u4e00\u7ec4\u70b9\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{Count}"}),"\uff1aCount\u8868\u793a\u70b9\u4f4d\u6570\u91cf\uff0c\u53d6\u503c\u8303\u56f4\uff1a[2, 50]\uff0c\u8f93\u5165\u975e\u6574\u6570\u4f1a\u81ea\u52a8\u5411\u4e0b\u53d6\u6574\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{P1,P2}"}),"\uff1aP1\u548cP2\u5206\u522b\u4e3a\u4e00\u4f4d\u6258\u76d8\u76842\u4e2a\u7aef\u70b9\uff0c\u652f\u6301\u793a\u6559\u70b9\u548c\u4f4d\u59ff\u53d8\u91cf\u3002-"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u4e8c\u7ef4\u6258\u76d8\uff1a\u4e8c\u7ef4\u6258\u76d8\u662f\u5728\u4e00\u4e2a\u5e73\u9762\u4e0a\u9635\u5217\u5206\u5e03\u7684\u4e00\u7ec4\u70b9\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{row,col}"}),"\uff1arow\u8868\u793a\u884c\u65b9\u5411\uff08P1\u5230P2\u65b9\u5411\uff09\u4e0a\u70b9\u4f4d\u7684\u6570\u91cf\uff0ccol\u8868\u793a\u5217\u65b9\u5411\uff08P1\u5230P4\u65b9\u5411\uff09\u4e0a\u70b9\u4f4d\u7684\u6570\u91cf\uff0c\u53d6\u503c\u8303\u56f4\u90fd\u4e0e\u4e00\u7ef4\u6258\u76d8\u7684Count\u76f8\u540c\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{P1,P2,P3,P4}"}),"\uff1aP1\u3001P2\u3001P3\u3001P4\u5206\u522b\u4e3a\u4e8c\u7ef4\u6258\u76d8\u76844\u4e2a\u9876\u70b9\uff0c\u652f\u6301\u793a\u6559\u70b9\u548c\u4f4d\u59ff\u53d8\u91cf\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u521b\u5efa\u4e09\u7ef4\u6258\u76d8\uff1a\u4e09\u4f4d\u6258\u76d8\u662f\u5728\u7a7a\u95f4\u4e0a\u7acb\u4f53\u5206\u5e03\u7684\u4e00\u7ec4\u70b9\uff0c\u53ef\u89c6\u4e3a\u7ad6\u5411\u6392\u5e03\u7684\u591a\u4e2a\u4e8c\u7ef4\u6258\u76d8\u3002"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{row,col,layer}"}),"\uff1arow\u8868\u793a\u884c\u65b9\u5411\uff08P1\u5230P2\u65b9\u5411\uff09\u4e0a\u70b9\u4f4d\u7684\u6570\u91cf\uff0ccol\u8868\u793a\u5217\u65b9\u5411\uff08P2\u5230P4\u65b9\u5411\uff09\u4e0a\u70b9\u4f4d\u7684\u6570\u91cf\uff0clayer\u8868\u793a\u5c42\u6570\uff08P1\u5230P5\u65b9\u5411\uff09\u3002"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"{P1,P2,P3,P4,P5,P6,P7,P8}"}),"\uff1aP1~P8\u5206\u522b\u4e3a\u4e09\u7ef4\u6258\u76d8\u76848\u4e2a\u9876\u70b9\uff0c\u652f\u6301\u793a\u6559\u70b9\u548c\u4f4d\u59ff\u53d8\u91cf\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u6ce8\u610f\uff1a\n\u5982\u679c\u4f7f\u7528\u4e86\u672b\u7aef\u5de5\u5177\uff0c\u8bf7\u786e\u4fdd\u793a\u6559\u70b9\u4f4d\u65f6\u9009\u62e9\u4e86\u672b\u7aef\u5de5\u5177\u5bf9\u5e94\u7684\u5de5\u5177\u5750\u6807\u7cfb\u3002\n",(0,l.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:'-- \u521b\u5efa\u540d\u79f0\u4e3at1\u76845\u4e2a\u70b9\u7684\u4e00\u7ef4\u6258\u76d8\u3002\nCreateTray("t1", {5}, {P1,P2})\n-- \u521b\u5efa\u540d\u79f0\u4e3at2\u76844x5\u7684\u4e8c\u7ef4\u6258\u76d8\u3002\nCreateTray("t2", {4,5}, {P1,P2,P3,P4})\n-- \u521b\u5efa\u540d\u79f0\u4e3at3\u76844x5x6\u7684\u4e09\u7ef4\u6258\u76d8\u3002\nCreateTray("t2", {4,5,6}, {P1,P2,P3,P4,P5,P6,P7,P8})\n'})}),"\n",(0,l.jsx)(e.h2,{id:"gettraypoint",children:"GetTrayPoint"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:"GetTrayPoint(Trayname, index)\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(e.p,{children:"\u83b7\u53d6\u6307\u5b9a\u6258\u76d8\u6307\u5b9a\u5e8f\u53f7\u7684\u70b9\u4f4d\u3002\u70b9\u4f4d\u5e8f\u53f7\u548c\u521b\u5efa\u6258\u76d8\u65f6\u4f20\u5165\u7684\u70b9\u4f4d\u987a\u5e8f\u6709\u5173\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u7ef4\u6258\u76d8\uff1aP1\u70b9\u5e8f\u53f7\u4e3a1\uff0cP2\u70b9\u5e8f\u53f7\u4e0e\u70b9\u4f4d\u6570\u91cf\u76f8\u540c\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e8c\u7ef4\u6258\u76d8\uff1a\u4e0b\u56fe\u4ee53x3\u7684\u6258\u76d8\u4e3a\u4f8b\u8bf4\u660e\u793a\u6559\u70b9\u4e0e\u70b9\u4f4d\u5e8f\u53f7\u7684\u5173\u7cfb\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e09\u7ef4\u6258\u76d8\uff1a\u53c2\u8003\u4e8c\u7ef4\u6258\u76d8\uff0c\u7b2c\u4e8c\u5c42\u7684\u7b2c\u4e00\u4e2a\u70b9\u7684\u5e8f\u53f7\u4e3a\u7b2c\u4e00\u5c42\u6700\u540e\u4e00\u4e2a\u70b9\u7684\u5e8f\u53f7\u52a0\u4e00\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Trayname\uff1a\u5df2\u521b\u5efa\u7684\u6258\u76d8\u540d\u79f0\uff0c\u6700\u957f32\u5b57\u8282\u7684\u5b57\u7b26\u4e32\u3002"}),"\n",(0,l.jsx)(e.li,{children:"index\uff1a\u8981\u83b7\u53d6\u7684\u70b9\u4f4d\u7684\u5e8f\u53f7\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsx)(e.p,{children:"\u5bf9\u5e94\u5e8f\u53f7\u7684\u70b9\u4f4d\u5750\u6807\u3002\u5982\u679c\u521b\u5efa\u6258\u76d8\u65f6\u4f7f\u7528\u7684\u70b9\u4e3a\u793a\u6559\u70b9\uff0c\u5219\u8fd4\u56de\u7684\u70b9\u4f4d\u683c\u5f0f\u4e5f\u662f\u793a\u6559\u70b9\u3002\u5982\u679c\u521b\u5efa\u6258\u76d8\u65f6\u4f7f\u7528\u7684\u70b9\u4e3a\u4f4d\u59ff\u53d8\u91cf\uff0c\u5219\u8fd4\u56de\u7684\u70b9\u4f4d\u683c\u5f0f\u4e5f\u662f\u4f4d\u59ff\u53d8\u91cf\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:'-- \u83b7\u53d6\u540d\u79f0\u4e3at1\u7684\u6258\u76d8\u7684\u5e8f\u53f7\u4e3a3\u7684\u70b9\u4f4d\u3002\nGetTrayPoint("t1",3)\n'})})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},43327:(n,e,r)=>{r.d(e,{R:()=>i,x:()=>c});var l=r(22155);const s={},t=l.createContext(s);function i(n){const e=l.useContext(t);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),l.createElement(t.Provider,{value:e},n.children)}}}]);