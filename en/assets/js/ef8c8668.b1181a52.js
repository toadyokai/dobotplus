"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[805],{2638:(n,r,e)=>{e.r(r),e.d(r,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=e(5723),i=e(3327);const s={},l="\u57fa\u7840\u8bed\u6cd5",a={id:"lua/grammer",title:"\u57fa\u7840\u8bed\u6cd5",description:"\u793a\u4f8b",source:"@site/docs/lua/01-grammer.md",sourceDirName:"lua",slug:"/lua/grammer",permalink:"/dobotplus/en/lua/grammer",draft:!1,unlisted:!1,editUrl:"http://192.168.0.11:20080/IndustrialProducts/TPGroup/FrontEndpluginCollection/dobotplus/dobotpluginsworktile/apps/website/docs/docs/lua/01-grammer.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"lua",next:{title:"\u8fd0\u7b97\u7b26",permalink:"/dobotplus/en/lua/operator"}},d={},c=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u6570\u5b57",id:"\u6570\u5b57",level:2},{value:"\u5e03\u5c14\u503c",id:"\u5e03\u5c14\u503c",level:2},{value:"\u5b57\u7b26\u4e32",id:"\u5b57\u7b26\u4e32",level:2},{value:"\u8868",id:"\u8868",level:2}];function h(n){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u57fa\u7840\u8bed\u6cd5",children:"\u57fa\u7840\u8bed\u6cd5"})}),"\n",(0,t.jsx)(r.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(r.p,{children:"\u4e0b\u65b9\u793a\u4f8b\u4e2d\uff0c\u4e24\u4e2a\u51cf\u53f7\uff08--\uff09\u540e\u9762\u7684\u5185\u5bb9\u4e3a\u5355\u884c\u6ce8\u91ca\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b1\u4e3b\u8981\u8bf4\u660e\u5c40\u90e8\u53d8\u91cf\u548c\u811a\u672c\u7ea7\u53d8\u91cf\u4f5c\u7528\u57df\u7684\u533a\u522b\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"function func()     -- \u5b9a\u4e49\u51fd\u6570\uff0c\u8fd0\u884c\u65f6\u6253\u5370a\uff0cb\n    local a = 1     -- \u5c40\u90e8\u53d8\u91cf\n    b = 2           -- \u811a\u672c\u7ea7\u53d8\u91cf\n    print(a)          \n    print(b)        \nend\n\nfunc()            -- \u6267\u884c\u51fd\u6570\uff0c\u6253\u5370a\u548cb\u7684\u503c\u5206\u522b\u4e3a1\u548c2\nprint(a)          --\x3e nil(\u5728\u53d8\u91cf\u4f5c\u7528\u57df\u5916\u8c03\u7528\uff0c\u6253\u5370\u4e3anil\uff0c\u4e0b\u540c)\nprint(b)          --\x3e 2\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b2\u4e3b\u8981\u8bf4\u660e\u5c40\u90e8\u53d8\u91cf\u53ef\u4ee5\u548c\u811a\u672c\u7ea7\u53d8\u91cf\u540c\u540d\uff0c\u4f46\u4ec5\u5728\u51fd\u6570\u5185\u751f\u6548\u3002do/end\u7b49\u6d41\u7a0b\u63a7\u5236\uff08\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\uff09\u7684\u4ee3\u7801\u5757\u4e5f\u5c5e\u4e8e\u51fd\u6570\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'a = "a"\n\nfor i=10,1,-1 do\ndo\n    local a = 6     -- \u5c40\u90e8\u53d8\u91cf\n    print(a)        --\x3e 6\uff0c\u8bed\u53e5\u5757\u5185\u8c03\u7528\u7684\u4e3a\u5c40\u90e8\u53d8\u91cfa\nend\n\nprint(a)        --\x3e a\uff0c\u8bed\u53e5\u5757\u5916\u8c03\u7528\u7684\u4e3a\u811a\u672c\u7ea7\u53d8\u91cfa\n\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b3\u4e3b\u8981\u8bf4\u660e\u5168\u5c40\u53d8\u91cf\u548c\u53e6\u4e24\u79cd\u53d8\u91cf\u4f5c\u7528\u57df\u7684\u533a\u522b\uff0c\u4ee5\u53ca\u5168\u5c40\u53d8\u91cf\u7684\u5168\u5c40\u4fdd\u6301\u529f\u80fd\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'-- \u5de5\u7a0b1\u7684src0.lua\u6587\u4ef6\n-- \u5047\u8bbe\u5df2\u5728\u5168\u5c40\u53d8\u91cf\u9875\u9762\u6dfb\u52a0\u4e86\u4e24\u4e2a\u5168\u5c40\u53d8\u91cfg1\u548cg2\n-- g1\u975e\u5168\u5c40\u4fdd\u6301\uff0c\u53d6\u503c\u4e3a10\n-- g2\u5168\u5c40\u4fdd\u6301\uff0c\u53d6\u503c\u4e3a20\n\nlocal a = 1\nb = 2\nprint(a)        --\x3e 1\nprint(b)        --\x3e 2\n\nprint(g1)           --\x3e 10\nprint(g2)           --\x3e 20\nSetGlobalVariable("g1",11)  -- \u5bf9\u975e\u5168\u5c40\u4fdd\u6301\u7684\u5168\u5c40\u53d8\u91cf\u8d4b\u503c\nSetGlobalVariable("g2",22)  -- \u5bf9\u5168\u5c40\u4fdd\u6301\u7684\u5168\u5c40\u53d8\u91cf\u8d4b\u503c\nprint(g1)           --\x3e 11\nprint(g2)           --\x3e 22\n\n-- \u5de5\u7a0b2\u7684src0.lua\u6587\u4ef6\n-- \u5de5\u7a0b2\u5728\u5de5\u7a0b1\u4e4b\u540e\u8fd0\u884c\n\nprint(a)        --\x3e nil\nprint(b)        --\x3e nil\nprint(g1)       --\x3e 10(\u975e\u5168\u5c40\u4fdd\u6301\u7684\u53d8\u91cf\u6062\u590d\u6210\u4e86\u5de5\u7a0b1\u4fee\u6539\u524d\u7684\u503c)\nprint(g2)       --\x3e 22(\u5168\u5c40\u4fdd\u6301\u7684\u53d8\u91cf\u53d8\u6210\u4e86\u5de5\u7a0b1\u4fee\u6539\u540e\u7684\u503c)\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u53d8\u91cf\u540d\u79f0\u53ef\u4ee5\u662f\u4efb\u610f\u975e\u6570\u5b57\u6253\u5934\u7684\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u548c\u6570\u5b57\u7ec4\u6210\u7684\u5b57\u7b26\u4e32\uff0cLua\u4fdd\u7559\u7684\u5173\u952e\u5b57\u9664\u5916\u3002"}),"\n",(0,t.jsx)(r.p,{children:"Lua \u53d8\u91cf\u4e0d\u9700\u8981\u7c7b\u578b\u5b9a\u4e49\uff0c\u53ea\u9700\u8981\u4e3a\u53d8\u91cf\u8d4b\u503c\uff0cLua\u4f1a\u6839\u636e\u503c\u81ea\u52a8\u5224\u65ad\u53d8\u91cf\u7684\u7c7b\u578b\u3002\u5728\u811a\u672c\u4e2d\u5bf9\u5df2\u8d4b\u503c\u7684\u53d8\u91cf\u8d4b\u4e88\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u4f1a\u6539\u53d8\u53d8\u91cf\u7684\u7c7b\u578b\uff1b\u4f46\u5728\u76d1\u63a7 > \u5168\u5c40\u53d8\u91cf\u9875\u9762\u8bbe\u7f6e\u7684\u53d8\u91cf\u4e0d\u53ef\u6539\u53d8\u7c7b\u578b\uff0c\u8d4b\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u548c\u521b\u5efa\u53d8\u91cf\u65f6\u9009\u62e9\u7684\u7c7b\u578b\u4e00\u81f4\uff0c\u5426\u5219\u63a7\u5236\u5668\u8fd0\u884c\u811a\u672c\u65f6\u4f1a\u62a5\u9519\u3002"}),"\n",(0,t.jsx)(r.p,{children:"Lua\u652f\u6301\u591a\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u8f83\u4e3a\u5e38\u89c1\u7684\u5305\u62ec\u6570\u5b57\uff08number\uff09\uff0c\u5e03\u5c14\u503c\uff08boolean\uff09\uff0c\u5b57\u7b26\u4e32\uff08string\uff09\u548c\u8868\uff08table\uff09\u3002Lua\u4e2d\u7684\u6570\u7ec4\u662ftable\u7684\u4e00\u79cd\u3002"}),"\n",(0,t.jsx)(r.p,{children:"Lua\u4e2d\u8fd8\u6709\u4e00\u79cd\u7279\u6b8a\u7684\u6570\u636e\u7c7b\u578b\u4e3anil\uff0cnil \u8868\u793a\u7a7a\uff08\u6ca1\u6709\u4efb\u4f55\u6709\u6548\u503c\uff09\uff0c\u4f8b\u5982\u6253\u5370\u4e00\u4e2a\u6ca1\u6709\u8d4b\u503c\u7684\u53d8\u91cf\uff0c\u4fbf\u4f1a\u8f93\u51fa\u4e00\u4e2a nil \u503c\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u6570\u5b57",children:"\u6570\u5b57"}),"\n",(0,t.jsx)(r.p,{children:"Lua\u4e2d\u7684number\u4e3a\u53cc\u7cbe\u5ea6\u7c7b\u578b\u7684\u5b9e\u6d6e\u70b9\u6570\uff0c\u652f\u6301\u5404\u79cd\u8fd0\u7b97\uff0c\u4ee5\u4e0b\u5199\u6cd5\u5747\u88ab\u89c6\u4e3anumber\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"2"}),"\n",(0,t.jsx)(r.li,{children:"2.2"}),"\n",(0,t.jsx)(r.li,{children:"0.2"}),"\n",(0,t.jsx)(r.li,{children:"2e+1"}),"\n",(0,t.jsx)(r.li,{children:"0.2e-1"}),"\n",(0,t.jsx)(r.li,{children:"7.8263692594256e-06"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"\u5e03\u5c14\u503c",children:"\u5e03\u5c14\u503c"}),"\n",(0,t.jsx)(r.p,{children:"boolean \u7c7b\u578b\u53ea\u6709\u4e24\u4e2a\u53ef\u9009\u503c\uff1atrue\uff08\u771f\uff09 \u548c false\uff08\u5047\uff09\uff0cLua \u628a false \u548c nil \u770b\u4f5c\u662f false\uff0c\u5176\u4ed6\u7684\u90fd\u4e3a true\uff0c\u6570\u5b57 0 \u4e5f\u662f true\u3002"}),"\n",(0,t.jsx)(r.h2,{id:"\u5b57\u7b26\u4e32",children:"\u5b57\u7b26\u4e32"}),"\n",(0,t.jsx)(r.p,{children:"string\u662f\u7531\u6570\u5b57\u3001\u5b57\u6bcd\u3001\u4e0b\u5212\u7ebf\u7ec4\u6210\u7684\u4e00\u4e32\u5b57\u7b26\u3002string\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4e09\u79cd\u65b9\u5f0f\u6765\u8868\u793a\uff1a"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"\u5355\u5f15\u53f7\u95f4\u7684\u4e00\u4e32\u5b57\u7b26\u3002"}),"\n",(0,t.jsx)(r.li,{children:"\u53cc\u5f15\u53f7\u95f4\u7684\u4e00\u4e32\u5b57\u7b26\u3002"}),"\n",(0,t.jsx)(r.li,{children:"[[ \u4e0e ]] \u95f4\u7684\u4e00\u4e32\u5b57\u7b26\u3002\n\u5728\u5bf9\u4e00\u4e2a\u6570\u5b57\u5b57\u7b26\u4e32\u4e0a\u8fdb\u884c\u7b97\u672f\u64cd\u4f5c\u65f6\uff0cLua \u4f1a\u5c1d\u8bd5\u5c06\u8fd9\u4e2a\u6570\u5b57\u5b57\u7b26\u4e32\u8f6c\u6210\u4e00\u4e2a\u6570\u5b57\u3002"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"Lua \u63d0\u4f9b\u4e86\u5f88\u591a\u7684\u65b9\u6cd5\u6765\u652f\u6301\u5b57\u7b26\u4e32\u7684\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u65b9\u6cd5"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.upper (argument)"}),(0,t.jsx)(r.td,{children:"\u5b57\u7b26\u4e32\u5168\u90e8\u8f6c\u4e3a\u5927\u5199\u5b57\u6bcd"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.lower (argument)"}),(0,t.jsx)(r.td,{children:"\u5b57\u7b26\u4e32\u5168\u90e8\u8f6c\u4e3a\u5c0f\u5199\u5b57\u6bcd"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.gsub(mainString, findString,replaceString,num)"}),(0,t.jsx)(r.td,{children:"\u5728\u5b57\u7b26\u4e32\u4e2d\u66ff\u6362\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.find (str, substr, [init, [end]])"}),(0,t.jsx)(r.td,{children:"\u5728\u4e00\u4e2a\u6307\u5b9a\u7684\u76ee\u6807\u5b57\u7b26\u4e32 str \u4e2d\u641c\u7d22\u6307\u5b9a\u7684\u5185\u5bb9 substr\uff0c\u5982\u679c\u627e\u5230\u4e86\u4e00\u4e2a\u5339\u914d\u7684\u5b50\u4e32\uff0c\u5c31\u4f1a\u8fd4\u56de\u8fd9\u4e2a\u5b50\u4e32\u7684\u8d77\u59cb\u7d22\u5f15\u548c\u7ed3\u675f\u7d22\u5f15\uff0c\u4e0d\u5b58\u5728\u5219\u8fd4\u56de nil\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.reverse(arg)"}),(0,t.jsx)(r.td,{children:"\u5b57\u7b26\u4e32\u53cd\u8f6c"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.format(...)"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u4e00\u4e2a\u7c7b\u4f3cprintf\u7684\u683c\u5f0f\u5316\u5b57\u7b26\u4e32"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.char(arg) \u548c string.byte(arg[,int])"}),(0,t.jsx)(r.td,{children:"char \u5c06\u6574\u578b\u6570\u5b57\u8f6c\u6210\u5b57\u7b26\u5e76\u8fde\u63a5\uff0c byte \u8f6c\u6362\u5b57\u7b26\u4e3a\u6574\u6570\u503c(\u53ef\u4ee5\u6307\u5b9a\u67d0\u4e2a\u5b57\u7b26\uff0c\u9ed8\u8ba4\u7b2c\u4e00\u4e2a\u5b57\u7b26)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.len(arg)"}),(0,t.jsx)(r.td,{children:"\u8ba1\u7b97\u5b57\u7b26\u4e32\u957f\u5ea6"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.rep(string, n)"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u5b57\u7b26\u4e32string\u7684n\u4e2a\u62f7\u8d1d"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:".."}),(0,t.jsx)(r.td,{children:"\u94fe\u63a5\u4e24\u4e2a\u5b57\u7b26\u4e32"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.gmatch(str, pattern)"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u51fd\u6570\uff0c\u6bcf\u4e00\u6b21\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u5728\u5b57\u7b26\u4e32 str \u627e\u5230\u7684\u4e0b\u4e00\u4e2a\u7b26\u5408 pattern \u63cf\u8ff0\u7684\u5b50\u4e32\u3002\u5982\u679c\u53c2\u6570 pattern \u63cf\u8ff0\u7684\u5b57\u7b26\u4e32\u6ca1\u6709\u627e\u5230\uff0c\u8fed\u4ee3\u51fd\u6570\u8fd4\u56denil"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.match(str, pattern, init)"}),(0,t.jsx)(r.td,{children:"string.match()\u53ea\u5bfb\u627e\u6e90\u5b57\u4e32str\u4e2d\u7684\u7b2c\u4e00\u4e2a\u914d\u5bf9. \u53c2\u6570init\u53ef\u9009, \u6307\u5b9a\u641c\u5bfb\u8fc7\u7a0b\u7684\u8d77\u70b9, \u9ed8\u8ba4\u4e3a1\u3002 \u5728\u6210\u529f\u914d\u5bf9\u65f6, \u51fd\u6570\u5c06\u8fd4\u56de\u914d\u5bf9\u8868\u8fbe\u5f0f\u4e2d\u7684\u6240\u6709\u6355\u83b7\u7ed3\u679c; \u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u6355\u83b7\u6807\u8bb0, \u5219\u8fd4\u56de\u6574\u4e2a\u914d\u5bf9\u5b57\u7b26\u4e32. \u5f53\u6ca1\u6709\u6210\u529f\u7684\u914d\u5bf9\u65f6, \u8fd4\u56denil"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"string.sub(s, i [, j])"}),(0,t.jsx)(r.td,{children:"\u7528\u4e8e\u622a\u53d6\u5b57\u7b26\u4e32\u3002s\u4e3a\u8981\u622a\u53d6\u7684\u5b57\u7b26\u4e32\uff0ci\u4e3a\u622a\u53d6\u5f00\u59cb\u4f4d\u7f6e\uff0cj\u4e3a\u622a\u53d6\u7ed3\u675f\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a-1\uff0c\u6700\u540e\u4e00\u4e2a\u5b57\u7b26\u3002"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u793a\u4f8b\uff1a"}),(0,t.jsx)(r.td,{})]})]})]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'str = "Lua"\nprint(string.upper(str))       --\u5b57\u7b26\u4e32\u5168\u90e8\u8f6c\u4e3a\u5927\u5199\u5b57\u6bcd\uff0c\u6253\u5370\u7ed3\u679c\uff1aLUA\nprint(string.lower(str))       --\u5b57\u7b26\u4e32\u5168\u90e8\u8f6c\u4e3a\u5c0f\u5199\u5b57\u6bcd\uff0c\u6253\u5370\u7ed3\u679c\uff1alua\nprint(string.reverse(str))    --\u5b57\u7b26\u4e32\u53cd\u8f6c\uff0c\u6253\u5370\u7ed3\u679c\uff1aaul\nprint(string.len("abc"))       --\u8ba1\u7b97\u5b57\u7b26\u4e32abc\u7684\u957f\u5ea6\uff0c\u6253\u5370\u7ed3\u679c\uff1a3\nprint(string.format("the value is: %d",4))     --\u6253\u5370\u7ed3\u679c\uff1athe value is:4\nprint(string.rep(str,2))       --\u5b57\u7b26\u4e32\u590d\u52362\u6b21\uff0c\u6253\u5370\u7ed3\u679c\uff1aLuaLua\nstring1 = "cn."\nstring2 = "dobot"\nstring3 = ".cc"\nprint("\u8fde\u63a5\u5b57\u7b26\u4e32",string1..string2..string3)  -- \u4f7f\u7528..\u8fdb\u884c\u5b57\u7b26\u4e32\u8fde\u63a5\uff0c\u6253\u5370\u7ed3\u679c\uff1acn.dobot.cc\n\nstring1 = [[aaaa]]\nprint(string.gsub(string1,"a","z",3))               --\u5728\u5b57\u7b26\u4e32\u4e2d\u66ff\u6362\uff0c\u6253\u5370\u7ed3\u679c\uff1azzza\n\nprint(string.find("Hello Lua user", "Lua", 1))        --\u5728\u5b57\u7b26\u4e32\u4e2d\u641c\u7d22Lua\uff0c\u8fd4\u56de\u5b50\u4e32\u7684\u8d77\u59cb\u7d22\u5f15\u548c\u7ed3\u675f\u7d22\u5f15\uff0c\u6253\u5370\u7ed3\u679c\uff1a7\uff0c9\n\nsourcestr = "prefix--runoobgoogletaobao--suffix"\nsub = string.sub(sourcestr, 1, 8)                   --\u53d6\u5b57\u7b26\u4e32\u524d\u7f00\uff0c\u7b2c1\u4e2a\u5230\u7b2c8\u4e2a\nprint("\\n\u622a\u53d6", string.format("%q", sub))            --\u6253\u5370\u7ed3\u679c\uff1a\u622a\u53d6 "prefix--"\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u8868",children:"\u8868"}),"\n",(0,t.jsx)(r.p,{children:"table\u662f\u4e00\u7ec4\u5e26\u7d22\u5f15\u7684\u6570\u636e\u3002"}),"\n",(0,t.jsxs)(r.p,{children:["\u6700\u7b80\u5355\u7684\u6784\u9020\u51fd\u6570\u662f","\uff0c\u7528\u6765\u521b\u5efa\u4e00\u4e2a\u7a7a\u8868\u3002\u53ef\u4ee5\u76f4\u63a5\u521d\u59cb\u5316\u8868\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"table\u5b9e\u9645\u4e3a\u5173\u8054\u578b\u6570\u7ec4\uff0c\u53ef\u4ee5\u7528\u4efb\u610f\u7c7b\u578b\u7684\u503c\u6765\u4f5c\u6570\u7ec4\u7684\u7d22\u5f15\uff0c\u4f46\u8fd9\u4e2a\u503c\u4e0d\u80fd\u662f nil\u3002"}),"\n",(0,t.jsx)(r.p,{children:"table\u662f\u4e0d\u56fa\u5b9a\u5927\u5c0f\u7684\uff0c\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u9700\u8981\u8fdb\u884c\u6269\u5bb9\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u901a\u8fc7#\u7b26\u53f7\u53ef\u4ee5\u83b7\u53d6\u8868\u7684\u957f\u5ea6\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'tbl = {[1] = 2, [2] = 6, [3] = 34, [4] =5}\nprint("tbl \u957f\u5ea6 ", #tbl)  -- \u6253\u5370\u7ed3\u679c\u4e3a4\n'})}),"\n",(0,t.jsx)(r.p,{children:"Lua \u63d0\u4f9b\u4e86\u5f88\u591a\u7684\u65b9\u6cd5\u6765\u652f\u6301\u8868\u7684\u64cd\u4f5c\uff1a"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"\u65b9\u6cd5"}),(0,t.jsx)(r.th,{children:"\u8bf4\u660e"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table.concat (table [, sep [, start [, end]]])"}),(0,t.jsx)(r.td,{children:"concat\u662fconcatenate(\u8fde\u9501, \u8fde\u63a5)\u7684\u7f29\u5199. table.concat()\u51fd\u6570\u5217\u51fa\u53c2\u6570\u4e2d\u6307\u5b9atable\u7684\u6570\u7ec4\u90e8\u5206\u4ecestart\u4f4d\u7f6e\u5230end\u4f4d\u7f6e\u7684\u6240\u6709\u5143\u7d20, \u5143\u7d20\u95f4\u4ee5\u6307\u5b9a\u7684\u5206\u9694\u7b26(sep)\u9694\u5f00"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table.insert (table, [pos,] value)"}),(0,t.jsx)(r.td,{children:"\u5728table\u7684\u6570\u7ec4\u90e8\u5206\u6307\u5b9a\u4f4d\u7f6e(pos)\u63d2\u5165\u503c\u4e3avalue\u7684\u4e00\u4e2a\u5143\u7d20. pos\u53c2\u6570\u53ef\u9009, \u9ed8\u8ba4\u4e3a\u8868\u7684\u672b\u5c3e"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table.remove (table [, pos])"}),(0,t.jsx)(r.td,{children:"\u8fd4\u56detable\u6570\u7ec4\u90e8\u5206\u4f4d\u4e8epos\u4f4d\u7f6e\u7684\u5143\u7d20. \u5176\u540e\u7684\u5143\u7d20\u4f1a\u88ab\u524d\u79fb. pos\u53c2\u6570\u53ef\u9009, \u9ed8\u8ba4\u4e3atable\u957f\u5ea6, \u5373\u4ece\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u5220\u8d77"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"table.sort (table [, comp])"}),(0,t.jsx)(r.td,{children:"\u5bf9\u7ed9\u5b9a\u7684table\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f"})]})]})]}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b1\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'fruits = {}        -- \u521d\u59cb\u5316\u8868\nfruits = {"banana","orange","apple"}  -- \u4e3a\u8868\u8d4b\u503c\n\nprint("\u8fde\u63a5\u540e\u7684\u5b57\u7b26\u4e32 ",table.concat(fruits,", ", 2,3))   -- \u6307\u5b9a\u7d22\u5f15\u6765\u8fde\u63a5table\uff0c\u8fde\u63a5\u540e\u7684\u5b57\u7b26\u4e32 orange, apple\n\n-- \u5728\u672b\u5c3e\u63d2\u5165\ntable.insert(fruits,"mango")\nprint("\u7d22\u5f15\u4e3a 4 \u7684\u5143\u7d20\u4e3a ",fruits[4])     --\u6253\u5370\u7ed3\u679c\uff1a\u7d22\u5f15\u4e3a4\u7684\u5143\u7d20\u4e3a mango\n\n-- \u5728\u7d22\u5f15\u4e3a 2 \u7684\u952e\u5904\u63d2\u5165\ntable.insert(fruits,2,"grapes")\nprint("\u7d22\u5f15\u4e3a 2 \u7684\u5143\u7d20\u4e3a ",fruits[2])     --\u6253\u5370\u7ed3\u679c\uff1a\u7d22\u5f15\u4e3a2\u7684\u5143\u7d20\u4e3a grapes\n\nprint("\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a ",fruits[5])        --\u6253\u5370\u7ed3\u679c\uff1a\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a mango\ntable.remove(fruits)\nprint("\u79fb\u9664\u540e\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a ",fruits[5])   --\u6253\u5370\u7ed3\u679c\uff1a\u79fb\u9664\u540e\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u4e3a nil\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b2\uff1a"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'fruits = {"banana","orange","apple","grapes"}\nprint("\u6392\u5e8f\u524d")\nfor k,v in ipairs(fruits) do\n    print(v)         --\u6253\u5370\u7ed3\u679c\uff1abanana orange apple grapes\nend\n--\u8fdb\u884c\u5347\u5e8f\u6392\u5e8f\ntable.sort(fruits)\nprint("\u6392\u5e8f\u540e")\nfor k,v in ipairs(fruits) do\n    print(v)         --\u6253\u5370\u7ed3\u679c\uff1aapple banana grapes orange\nend\n'})}),"\n",(0,t.jsx)(r.h1,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,t.jsx)(r.p,{children:"\u6570\u7ec4\uff0c\u5c31\u662f\u76f8\u540c\u6570\u636e\u7c7b\u578b\u7684\u5143\u7d20\u6309\u4e00\u5b9a\u987a\u5e8f\u6392\u5217\u7684\u96c6\u5408\uff0c\u53ef\u4ee5\u662f\u4e00\u7ef4\u6570\u7ec4\u548c\u591a\u7ef4\u6570\u7ec4\u3002Lua \u6570\u7ec4\u7684\u7d22\u5f15\u952e\u503c\u53ef\u4ee5\u4f7f\u7528\u6574\u6570\u8868\u793a\uff0c\u6570\u7ec4\u7684\u5927\u5c0f\u4e0d\u662f\u56fa\u5b9a\u7684\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u4e00\u7ef4\u6570\u7ec4\uff1a\u6700\u7b80\u5355\u7684\u6570\u7ec4\uff0c\u5176\u903b\u8f91\u7ed3\u6784\u662f\u7ebf\u6027\u8868\u3002\n\u591a\u7ef4\u6570\u7ec4\uff1a\u5373\u6570\u7ec4\u4e2d\u5305\u542b\u6570\u7ec4\u6216\u4e00\u7ef4\u6570\u7ec4\u7684\u7d22\u5f15\u952e\u5bf9\u5e94\u4e00\u4e2a\u6570\u7ec4\u3002"}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b1\uff1a\u4e00\u7ef4\u6570\u7ec4\u53ef\u4ee5\u7528for\u5faa\u73af\u51fa\u6570\u7ec4\u4e2d\u7684\u5143\u7d20\u3002\u4f7f\u7528\u6574\u6570\u7d22\u5f15\u6765\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20\uff0c\u5982\u679c\u7d22\u5f15\u6ca1\u6709\u503c\u5219\u8fd4\u56denil\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:'array = {"Lua", "Tutorial"}  --\u521b\u5efa\u4e00\u7ef4\u6570\u7ec4     \nfor i= 0, 2 do\n   print(array[i])           --\u6253\u5370\u7ed3\u679c\u5206\u522b\u4e3a\uff1anil Lua Tutorial\nend\n\u5728 Lua \u7d22\u5f15\u503c\u662f\u4ee5 1 \u4e3a\u8d77\u59cb\uff0c\u4f46\u4e5f\u53ef\u4ee5\u6307\u5b9a 0 \u5f00\u59cb\u3002\u9664\u6b64\u5916\u8fd8\u53ef\u4ee5\u4ee5\u8d1f\u6570\u4e3a\u6570\u7ec4\u7d22\u5f15\u503c\u3002\n\narray = {}\nfor i= -2, 2 do\n   array[i] = i*2+1           --\u4e3a\u4e00\u7ef4\u6570\u7ec4\u8d4b\u503c\nend\nfor i = -2,2 do\n   print(array[i])           --\u6253\u5370\u7ed3\u679c\u5206\u522b\u4e3a\uff1a-3 -1 1 3 5\nend\n'})}),"\n",(0,t.jsx)(r.p,{children:"\u793a\u4f8b2\uff1a\u4e00\u4e2a\u4e09\u884c\u4e09\u5217\u7684\u9635\u5217\u591a\u7ef4\u6570\u7ec4"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-lua",children:"-- \u521d\u59cb\u5316\u6570\u7ec4\narray = {}\nfor i=1,3 do\n array[i] = {}\n    for j=1,3 do\n      array[i][j] = i*j\n    end\nend\n\n-- \u8bbf\u95ee\u6570\u7ec4\nfor i=1,3 do\n  for j=1,3 do\n     print(array[i][j])     --\u6253\u5370\u7ed3\u679c\u5206\u522b\u4e3a\uff1a1 2 3 2 4 6 3 6 9\n  end\nend\n"})})]})}function o(n={}){const{wrapper:r}={...(0,i.R)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},3327:(n,r,e)=>{e.d(r,{R:()=>l,x:()=>a});var t=e(2155);const i={},s=t.createContext(i);function l(n){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof n?n(r):{...r,...n}}),[r,n])}function a(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),t.createElement(s.Provider,{value:r},n.children)}}}]);