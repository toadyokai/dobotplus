"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[2163],{3729:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var l=s(5723),i=s(3327);const c={},d="\u547d\u4ee4\u884c\u5de5\u5177",r={id:"api/cli",title:"\u547d\u4ee4\u884c\u5de5\u5177",description:"create",source:"@site/docs/api/07-cli.md",sourceDirName:"api",slug:"/api/cli",permalink:"/dobotplus/en/api/cli",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"api",previous:{title:"\u9879\u76ee\u914d\u7f6e\u6587\u4ef6",permalink:"/dobotplus/en/api/config"}},t={},h=[{value:"create",id:"create",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"dev",id:"dev",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"dpt.json",id:"dptjson",level:3},{value:"\u9875\u9762\u9884\u89c8",id:"\u9875\u9762\u9884\u89c8",level:3},{value:"lua",id:"lua",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"gui",id:"gui",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"build",id:"build",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:3}];function o(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"\u547d\u4ee4\u884c\u5de5\u5177",children:"\u547d\u4ee4\u884c\u5de5\u5177"})}),"\n",(0,l.jsx)(e.h2,{id:"create",children:"create"}),"\n",(0,l.jsx)(e.p,{children:"\u8fd0\u884c\u6b64\u547d\u4ee4\u65f6\uff0c\u7cfb\u7edf\u4f1a\u5f15\u5bfc\u60a8\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u63d2\u4ef6\u9879\u76ee\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u9009\u62e9\uff0c\u8bbe\u7f6e\u9879\u76ee\u7684\u540d\u79f0\u3001\u7248\u672c\u53f7\u4ee5\u53ca\u63d2\u4ef6\u7684\u57fa\u7840\u7ed3\u6784\u3002\u751f\u6210\u7684\u9879\u76ee\u5c06\u5305\u542b\u521d\u59cb\u7684\u914d\u7f6e\u6587\u4ef6\u548c\u6587\u4ef6\u7ed3\u6784\uff0c\u65b9\u4fbf\u540e\u7eed\u5f00\u53d1\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt create\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u4f7f\u7528\u4e0a\u8ff0\u6307\u4ee4\u540e\uff0c\u5728\u5b8c\u6210\u63d0\u793a\u7684\u63d2\u4ef6\u57fa\u7840\u4fe1\u606f\u540e\uff0c\u8be5\u6307\u4ee4\u4f1a\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u62c9\u53d6\u63d2\u4ef6\u6587\u4ef6\u6a21\u677f"}),"\n",(0,l.jsx)(e.li,{children:"\u5c06\u7528\u6237\u8f93\u5165\u7684\u57fa\u7840\u4fe1\u606f\u5199\u5165\u6a21\u677f"}),"\n",(0,l.jsx)(e.li,{children:"\u81ea\u52a8\u5b89\u88c5\u63d2\u4ef6\u5f00\u53d1\u9700\u8981\u7684\u4f9d\u8d56"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u7b2c\u4e09\u6b65\u81ea\u52a8\u5b89\u88c5\u63d2\u4ef6\u5931\u8d25\u65f6\uff0c\u7528\u6237\u53ef\u4ee5\u8fdb\u5165\u63d2\u4ef6\u6587\u4ef6\u5939\u624b\u52a8\u5b89\u88c5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"pnpm install\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.strong,{children:"\u6ce8\u610f"}),"\n\u63a8\u8350\u4f7f\u7528",(0,l.jsx)(e.code,{children:"pnpm"}),"\u8fdb\u884c\u4f9d\u8d56\u7684\u5b89\u88c5\uff0c",(0,l.jsx)(e.code,{children:"pnpm"}),"\u76f8\u6bd4\u8d8a",(0,l.jsx)(e.code,{children:"yarn"}),"\u5177\u6709\u5982\u4e0b\u4f18\u52bf\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4f9d\u8d56\u5171\u4eab\uff1a\u91cd\u590d\u7684\u4f9d\u8d56\u53ef\u4ee5\u4f7f\u7528\u8f6f\u8fde\u63a5\u7684\u5f62\u5f0f\u5171\u4eab\u4f9d\u8d56\u5305\uff0c\u51cf\u5c11\u63d2\u4ef6\u4f9d\u8d56\u5360\u7528\u7684\u78c1\u76d8\u5b58\u50a8\u7a7a\u95f4"}),"\n",(0,l.jsx)(e.li,{children:"\u5e76\u884c\u4e0b\u8f7d\uff1a\u5728\u5b89\u88c5\u4f9d\u8d56\u65f6\uff0c\u53ef\u4ee5\u5e76\u884c\u53d1\u8d77http\u8bf7\u6c42\uff0c\u5b89\u88c5\u4f9d\u8d56\u5305\uff0c\u5177\u5907\u66f4\u5feb\u7684\u5b89\u88c5\u901f\u5ea6"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"dev",children:"dev"}),"\n",(0,l.jsxs)(e.p,{children:["\u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5e76\u5c06\u4ee3\u7801\u540c\u6b65\u5230\u771f\u5b9e\u8bbe\u5907\u8fdb\u884c\u8c03\u8bd5\uff0c\u8fd0\u884c ",(0,l.jsx)(e.code,{children:"dpt dev"})," \u540e\uff0c\u7cfb\u7edf\u4f1a\u542f\u52a8 Webpack \u5f00\u53d1\u670d\u52a1\u5668\uff0c\u5e76\u6839\u636e\u914d\u7f6e\u6587\u4ef6 ",(0,l.jsx)(e.code,{children:"dpt.json"})," \u4e0e\u771f\u5b9e\u8bbe\u5907\u5efa\u7acb\u8fde\u63a5\u3002\u60a8\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u5728\u771f\u5b9e\u8bbe\u5907\u4e0a\u8c03\u8bd5 Lua \u811a\u672c\u3002\u5982\u679c\u9009\u62e9\u8c03\u8bd5\uff0c\u7cfb\u7edf\u4f1a\u901a\u8fc7 SFTP \u5c06\u4ee3\u7801\u540c\u6b65\u5230\u8bbe\u5907\uff0c\u5e76\u76d1\u63a7\u6587\u4ef6\u53d8\u52a8\u3002\u6bcf\u5f53 Lua \u811a\u672c\u53d1\u751f\u53d8\u5316\u65f6\uff0c\u7cfb\u7edf\u4f1a\u81ea\u52a8\u66f4\u65b0\u8bbe\u5907\u4e0a\u7684\u6587\u4ef6\u5e76\u91cd\u65b0\u52a0\u8f7d\u63d2\u4ef6\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-1",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt dev\n"})}),"\n",(0,l.jsx)(e.h3,{id:"dptjson",children:"dpt.json"}),"\n",(0,l.jsx)(e.p,{children:"\u8fde\u63a5\u771f\u673a\u8fdb\u884c\u8c03\u8bd5\u65f6\u7684\u670d\u52a1\u5668\u57fa\u7840\u914d\u7f6e\u4fe1\u606f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "ip": "192.168.5.1",\n  "port": 22001,\n  "pluginPort": 22100\n}\n'})}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u5b57\u6bb5"}),(0,l.jsx)(e.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"ip"}),(0,l.jsx)(e.td,{children:"\u63a7\u5236\u5668\u7684\u771f\u5b9eip\uff0c\u6709\u7ebf\u8fde\u63a5\u65f6\u9ed8\u8ba4\u4e3a 192.168.5.1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"port"}),(0,l.jsx)(e.td,{children:"\u63a7\u5236\u5668\u516c\u5171\u670d\u52a1\u7aef\u53e3\uff0c\u4f8b\u5982\u83b7\u53d6\u63d2\u4ef6\u7aef\u53e3\u3001\u5b89\u88c5\u5378\u8f7d\u63d2\u4ef6\u7b49\u670d\u52a1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"pluginPort"}),(0,l.jsx)(e.td,{children:"\u5f53\u524d\u63d2\u4ef6http\u670d\u52a1\u7aef\u53e3\u53f7\uff0c\u52a8\u6001\u66f4\u65b0\uff0c\u5728\u63d2\u4ef6\u4f7f\u7528\u65f6\u4f1a\u52a8\u6001\u83b7\u53d6\uff0c\u5bf9\u5e94 httpAPI.lua \u6a21\u5757\u6620\u5c04\u51fa\u7684\u7aef\u53e3\u53f7"})]})]})]}),"\n",(0,l.jsxs)(e.p,{children:["\u6b64\u5916\uff0clua\u6587\u4ef6\u7684\u540c\u6b65\u4f7f\u7528\u7684\u662f sftp \u534f\u8bae\uff0c\u5177\u4f53\u8fde\u63a5\u5efa\u7acb\u53c2\u6570\u53ef\u4ee5\u5728 ",(0,l.jsx)(e.code,{children:".dobot/.sftprc"})," \u6587\u4ef6\u4e2d\u67e5\u770b\uff0c\u4e00\u822c\u60c5\u51b5\u65e0\u9700\u5f00\u53d1\u8005\u4fee\u6539\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u9875\u9762\u9884\u89c8",children:"\u9875\u9762\u9884\u89c8"}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u6307\u4ee4\u5185\u90e8\u4f7f\u7528webpack\u8fdb\u884c\u6253\u5305\uff0c\u652f\u6301webpack\u7684\u70ed\u66f4\u65b0\u673a\u5236"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"http://localhost:8080/Main",children:"http://localhost:8080/Main"})," - \u63d2\u4ef6\u7684\u4e3b\u8981\u63a7\u5236\u754c\u9762\uff0c\u5b89\u88c5\u540e\uff0c\u70b9\u51fb\u63d2\u4ef6\uff0c\u4e0a\u4f4d\u673a\u5c55\u793a\u7684\u63a7\u5236\u754c\u9762"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"http://localhost:8080/Toolbar",children:"http://localhost:8080/Toolbar"})," - \u63d2\u4ef6\u7684\u5de5\u5177\u680f\u754c\u9762\u7684\u5c55\u793a"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.a,{href:"http://localhost:8080/Blocks",children:"http://localhost:8080/Blocks"})," - \u70b9\u51fb\u79ef\u6728\u65f6\u81ea\u5b9a\u4e49\u7684\u5c55\u793a\u754c\u9762"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"lua",children:"lua"}),"\n",(0,l.jsxs)(e.p,{children:["\u8fd0\u884c Lua \u811a\u672c\uff0c\u5e76\u5728\u9879\u76ee\u4e2d\u9009\u62e9\u76ee\u6807 Lua \u6587\u4ef6\u6267\u884c\uff0c\u6b64\u547d\u4ee4\u4f1a\u5217\u51fa ",(0,l.jsx)(e.code,{children:"./lua"})," \u76ee\u5f55\u4e2d\u7684\u6240\u6709 Lua \u6587\u4ef6\uff0c\u5e76\u8ba9\u60a8\u9009\u62e9\u76ee\u6807\u6587\u4ef6\u6267\u884c\u3002\u9009\u62e9\u5b8c\u6210\u540e\uff0c\u547d\u4ee4\u4f1a\u901a\u8fc7 ",(0,l.jsx)(e.code,{children:"lua54.exe"})," \u8fd0\u884c\u8be5\u811a\u672c\uff0c\u8f93\u51fa\u6267\u884c\u7ed3\u679c\u3002\u6b64\u529f\u80fd\u9002\u5408\u5f00\u53d1\u8fc7\u7a0b\u4e2d\u5feb\u901f\u6d4b\u8bd5\u548c\u8fd0\u884c Lua \u4ee3\u7801\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-2",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.p,{children:"\u5047\u8bbe\u4f60\u7684\u9879\u76ee\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"/your-project\n\u2502\n\u2514\u2500\u2500 lua/\n   \u251c\u2500\u2500 script1.lua\n   \u251c\u2500\u2500 script2.lua\n   \u2514\u2500\u2500 init.lua\n\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u8fd0\u884c ",(0,l.jsx)(e.code,{children:"dpt lua"})," \u540e\uff0c\u5c06\u770b\u5230\u5982\u4e0b\u63d0\u793a\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"Please select target lua file: \n\u276f script1.lua\n  script2.lua\n  init.lua\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u9009\u62e9 ",(0,l.jsx)(e.code,{children:"script1.lua"})," \u540e\uff0c\u5de5\u5177\u4f1a\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"lua54.exe -l init /your-project/lua/script1.lua\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u811a\u672c\u5728 ",(0,l.jsx)(e.code,{children:".dobot/lua/"})," \u76ee\u5f55\u4e2d\u6267\u884c\uff0c\u5e76\u4e14\u8f93\u51fa\u5c06\u663e\u793a\u5728\u547d\u4ee4\u884c\u4e2d\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"gui",children:"gui"}),"\n",(0,l.jsxs)(e.p,{children:["\u901a\u8fc7\u56fe\u5f62\u5316\u754c\u9762\uff08GUI\uff09\u914d\u7f6e\u9879\u76ee\uff0c\u8fd0\u884c\u6b64\u547d\u4ee4\u65f6\uff0c\u7cfb\u7edf\u4f1a\u542f\u52a8\u4e00\u4e2a Web GUI \u754c\u9762\uff0c\u5141\u8bb8\u7528\u6237\u901a\u8fc7\u6d4f\u89c8\u5668\u8fdb\u884c\u9879\u76ee\u914d\u7f6e\u3002\u8be5\u754c\u9762\u652f\u6301\u5b9e\u65f6\u9884\u89c8\u548c\u4ea4\u4e92\u64cd\u4f5c\u3002\u5982\u679c\u6307\u5b9a ",(0,l.jsx)(e.code,{children:"--dev"})," \u9009\u9879\uff0c\u547d\u4ee4\u4f1a\u4ee5\u5f00\u53d1\u6a21\u5f0f\u542f\u52a8 GUI\uff0c\u9002\u7528\u4e8e\u8c03\u8bd5\u548c\u5f00\u53d1\u573a\u666f\u3002"]}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-3",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt gui\n"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e\u6587\u4ef6\u7684\u7ba1\u7406\u9762\u677f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(7607).A+"",width:"1920",height:"929"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u51fd\u6570\u7f16\u7a0b\u7684\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u9762\u677f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(9862).A+"",width:"1920",height:"929"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u914d\u7f6e\u6587\u4ef6\u7ffb\u8bd1\u8d44\u6e90\u7684\u7f16\u8f91\u9762\u677f"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(7923).A+"",width:"1920",height:"929"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"build",children:"build"}),"\n",(0,l.jsx)(e.p,{children:"\u6b64\u547d\u4ee4\u7528\u4e8e\u5c06\u9879\u76ee\u4ee3\u7801\u8fdb\u884c\u6253\u5305\u5904\u7406\uff0c\u751f\u6210\u6700\u7ec8\u7684\u63d2\u4ef6\u53d1\u5e03\u7248\u672c\u3002\u6253\u5305\u65f6\u4f1a\u6839\u636e\u9879\u76ee\u7684 Webpack \u914d\u7f6e\uff0c\u4f18\u5316\u4ee3\u7801\u5e76\u751f\u6210\u6700\u7ec8\u7684\u53ef\u53d1\u5e03\u6587\u4ef6\u3002"}),"\n",(0,l.jsx)(e.h3,{id:"\u793a\u4f8b-4",children:"\u793a\u4f8b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt build\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"ui/pages"})," \u8def\u5f84\u4e0b\u7684\u7b2c\u4e00\u5c42\u7684 ",(0,l.jsx)(e.code,{children:".tsx"})," \u6587\u4ef6\u4f1a\u88ab\u6784\u5efa\u6210\u5bf9\u5e94\u7684\u9875\u9762"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Main.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u4e3b\u9875\u9762"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Toolbar.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u5de5\u5177\u680f"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Blocks.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u7684\u79ef\u6728\u5f39\u7a97\u9875\u9762"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5176\u4ed6\u4e00\u7ea7\u81ea\u5b9a\u4e49\u9875\u9762\u4e5f\u4f1a\u8fdb\u884c\u540c\u7c7b\u578b\u6784\u5efa\uff0c\u6240\u4ee5\u8bf7\u5f00\u53d1\u8005\u6ce8\u610f ",(0,l.jsx)(e.code,{children:"ui/pages"})," \u6587\u4ef6\u5939\u4e0b\u4e00\u7ea7\u76ee\u5f55\u4e2d ",(0,l.jsx)(e.code,{children:".tsx"})," \u6587\u4ef6\u7684\u547d\u540d"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u7a0b\u5e8f\u987a\u5229\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u4f1a\u51fa\u73b0 ",(0,l.jsx)(e.code,{children:"dist"})," \u6587\u4ef6\u5939\u548c ",(0,l.jsx)(e.code,{children:"output"})," \u6587\u4ef6\u5939\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"dist"})," \u6587\u4ef6\u5939\u4e2d\u5b58\u653e\u7740\u672c\u6b21\u6784\u5efa\u540e\u7684\u63d2\u4ef6\u4ee3\u7801\uff0c\u7528\u4e8e\u5f00\u53d1\u8005\u68c0\u67e5\u6784\u5efa\u7ed3\u679c"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"output"})," \u6587\u4ef6\u5939\u5b58\u653e\u7740\u538b\u7f29\u540e\u7684 ",(0,l.jsx)(e.code,{children:"zip"})," \u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a ",(0,l.jsx)(e.code,{children:"<\u63d2\u4ef6\u540d>-<\u7248\u672c\u53f7>.zip"}),"\uff0c\u8be5\u6587\u4ef6\u4e3a\u5b9e\u9645\u5728\u5ba2\u6237\u7aef\u5bfc\u5165\u4f7f\u7528\u7684\u7684\u63d2\u4ef6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6784\u5efa\u540e\u672a\u538b\u7f29\u7684\u6587\u4ef6\u5939\u7ed3\u6784\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"\u251c\u2500\u2500 Blocks\n\u2502   \u251c\u2500\u2500 config.json # \u79ef\u6728\u7f16\u7a0b\u914d\u7f6e\u6587\u4ef6\n\u2502   \u2514\u2500\u2500 index.html  # \u79ef\u6728\u7f16\u7a0b\u70b9\u51fb\u79ef\u6728\u5757\u5c55\u793a\u7684\u9875\u9762\n\u251c\u2500\u2500 Main\n\u2502   \u251c\u2500\u2500 config.json # \u63d2\u4ef6\u57fa\u7840\u914d\u7f6e\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 Resources\n\u2502   \u251c\u2500\u2500 document\n\u2502   \u2502   \u2514\u2500\u2500 config.json # \u811a\u672c\u7f16\u7a0b\u6587\u6863\u914d\u7f6e\n\u2502   \u251c\u2500\u2500 i18n            # \u56fd\u9645\u5316\u7ffb\u8bd1\u6570\u636e\n\u2502   \u2502   \u251c\u2500\u2500 Deutsch     # \u5fb7\u8bed\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json  # \u79ef\u6728\u7f16\u7a0b\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json  # \u57fa\u7840\u914d\u7f6e\u7684\u7ffb\u8bd1\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json # \u811a\u672c\u7f16\u7a0b\u7684\u7ffb\u8bd1\n\u2502   \u2502   \u251c\u2500\u2500 English\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 Espa\xf1ol\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u0420\u0443\u0441\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u65e5\u672c\u8a9e\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7b80\u4f53\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u251c\u2500\u2500 \u7e41\u9ad4\u4e2d\u6587\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 blocks.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 scripts.json\n\u2502   \u2502   \u2514\u2500\u2500 \ud55c\uad6d\uc5b4\n\u2502   \u2502       \u251c\u2500\u2500 blocks.json\n\u2502   \u2502       \u251c\u2500\u2500 config.json\n\u2502   \u2502       \u2514\u2500\u2500 scripts.json\n\u2502   \u2514\u2500\u2500 images\n\u2502       \u2514\u2500\u2500 pallet.svg\n\u251c\u2500\u2500 Scripts\n\u2502   \u2514\u2500\u2500 config.json # \u811a\u672c\u7f16\u7a0b\u7684\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500\u2500 Toolbar\n\u2502   \u251c\u2500\u2500 config.json\n\u2502   \u2514\u2500\u2500 index.html\n\u251c\u2500\u2500 daemon.lua  # lua\u5165\u53e3\u6587\u4ef6\u3001\u5b88\u62a4\u8fdb\u7a0b \n\u251c\u2500\u2500 httpAPI.lua # \u63a7\u5236\u5668\u548cGUI\u7684\u6570\u636e\u4ea4\u4e92\u6a21\u5757\uff0c\u5904\u7406GUI\u754c\u9762\u7684http\u8bf7\u6c42\n\u251c\u2500\u2500 userAPI.lua # \u79ef\u6728\u7f16\u7a0b\u548c\u811a\u672c\u7f16\u7a0b\u7684\u6a21\u5757\uff0c\u5bf9\u5e94\u5b9e\u9645\u63a7\u5236\u673a\u68b0\u81c2\u672b\u7aef\u7684\u65b9\u6cd5\n\u2514\u2500\u2500 utils\n    \u2514\u2500\u2500 await485.lua\n"})})]})}function a(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(o,{...n})}):o(n)}},7607:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/blocky-1d8c588c03d4aa5533ce62b3e7fac13a.png"},9862:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/script-75e8face6b91968e0ea6f05989f488ca.png"},7923:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/translate-gui-f67a44c5ac5babd644e228afa26ad8ae.png"},3327:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>r});var l=s(2155);const i={},c=l.createContext(i);function d(n){const e=l.useContext(c);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(c.Provider,{value:e},n.children)}}}]);