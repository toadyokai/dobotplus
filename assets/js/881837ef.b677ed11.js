"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[1767],{67457:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>r,toc:()=>h});var i=s(65723),l=s(43327);const c={},d="\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO",r={id:"tutorials/Examples/hotkey",title:"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO",description:"\u5728\u5b8c\u6210 IO \u63a7\u5236\u6848\u4f8b \u540e\uff0c\u7ecf\u8c03\u8bd5\uff0cIO \u53ef\u7b26\u5408\u9884\u671f\u7684\u5de5\u4f5c\uff0c\u6b64\u65f6\u53ef\u4ee5\u9488\u5bf9\u8be5\u63d2\u4ef6\u8fdb\u884c\u66f4\u52a0\u4e30\u5bcc\u7684\u914d\u7f6e\u3002",source:"@site/docs/tutorials/Examples/02-hotkey.md",sourceDirName:"tutorials/Examples",slug:"/tutorials/Examples/hotkey",permalink:"/dobotplus/tutorials/Examples/hotkey",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorials",previous:{title:"IO \u63a7\u5236\u6848\u4f8b",permalink:"/dobotplus/tutorials/Examples/io"},next:{title:"TCP/IP \u63a7\u5236\u5916\u90e8\u8bbe\u5907",permalink:"/dobotplus/tutorials/Examples/tcpip"}},t={},h=[{value:"\u6ce8\u518c\u5feb\u6377\u952e\u65b9\u6cd5",id:"\u6ce8\u518c\u5feb\u6377\u952e\u65b9\u6cd5",level:2},{value:"\u56fd\u9645\u5316\u7ffb\u8bd1",id:"\u56fd\u9645\u5316\u7ffb\u8bd1",level:2},{value:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",id:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",level:2},{value:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e",id:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907-io",children:"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5728\u5b8c\u6210 ",(0,i.jsx)(n.a,{href:"/dobotplus/tutorials/Examples/io",children:"IO \u63a7\u5236\u6848\u4f8b"})," \u540e\uff0c\u7ecf\u8c03\u8bd5\uff0cIO \u53ef\u7b26\u5408\u9884\u671f\u7684\u5de5\u4f5c\uff0c\u6b64\u65f6\u53ef\u4ee5\u9488\u5bf9\u8be5\u63d2\u4ef6\u8fdb\u884c\u66f4\u52a0\u4e30\u5bcc\u7684\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6ce8\u518c\u5feb\u6377\u952e\u65b9\u6cd5",children:"\u6ce8\u518c\u5feb\u6377\u952e\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"httpAPI.lua"})," \u7684\u7528\u9014\u5728\u4e8e\u63d0\u4f9b\u5bf9\u5916\u7684\u63a5\u53e3\uff0c\u5305\u62ec\u5feb\u6377\u952e\u3001UI\u754c\u9762\uff0c\u7528\u6237\u4e8e\u673a\u5668\u7684\u4ea4\u4e92\u884c\u4e3a\u4f1a\u96c6\u4e2d\u8fdb\u5165\u5230 ",(0,i.jsx)(n.code,{children:"httpAPI.lua"})," \u6a21\u5757\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7f16\u5199 ",(0,i.jsx)(n.code,{children:"httpAPI.lua"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'-- \u6ce8\u518c\u53ef\u4f9b\u7269\u7406\u5feb\u6377\u952e\u4f7f\u7528\u7684\u65b9\u6cd5\u540d\u79f0\uff0c"grip" \u63a7\u5236\u5438\u53d6, "release" \u63a7\u5236\u91ca\u653e\n  httpModule.OnRegistHotKey = function() \n     return {\n        -- \u6309\u4e0b\u5feb\u6377\u952e\u53ef\u4ee5\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u81ea\u884c\u51b3\u5b9a\u54ea\u4e9b\u884c\u4e3a\u53ef\u4ee5\u6ce8\u518c\u5230\u5feb\u6377\u952e\u4e0a\uff0c\u6570\u91cf\u4e0d\u9650\n        press = { "grip", "release" } \n        -- \u957f\u6309\u5feb\u6377\u952e\u53ef\u4ee5\u6267\u884c\u7684\u64cd\u4f5c\uff0c\u6570\u91cf\u4e0d\u9650\n        -- longPress = {} \n    }\n  end    \n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u914d\u7f6e\u5feb\u6377\u952e"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u53ef\u5728",(0,i.jsx)(n.code,{children:"Dobot+"})," \u83dc\u5355\u4e2d\u9009\u62e9 ",(0,i.jsx)(n.code,{children:"\u672b\u7aef\u5feb\u6377\u952e"})," \u83dc\u5355"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5577).A+"",width:"1920",height:"1032"})}),"\n",(0,i.jsx)(n.p,{children:"\u5728\u63d2\u4ef6\u5217\u8868\u4e2d\u9009\u62e9\u5f53\u524d\u7684\u63d2\u4ef6"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(26806).A+"",width:"1920",height:"1032"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u5bf9\u5e94\u5feb\u6377\u952e\u7684\u4e0b\u6765\u83dc\u5355\u4e2d\u9009\u62e9\u5bf9\u5e94\u7684 ",(0,i.jsx)(n.code,{children:"httpAPI.lua"})," \u7684\u65b9\u6cd5"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u56fd\u9645\u5316\u7ffb\u8bd1",children:"\u56fd\u9645\u5316\u7ffb\u8bd1"}),"\n",(0,i.jsx)(n.p,{children:"\u56fd\u9645\u5316\u7ffb\u8bd1\u7684\u914d\u7f6e\u76ee\u524d\u652f\u6301\u4e09\u79cd\u65b9\u5f0f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["vscode \u63d2\u4ef6\uff1a\u8be5\u64cd\u4f5c\u4f9d\u8d56\u4e8e ",(0,i.jsx)(n.code,{children:"lokalise.i18n-ally"})," \u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u5de5\u4f5c\u5df2\u5728\u521d\u59cb\u5316\u65f6\u5b8c\u6210\uff0c\u63d2\u4ef6\u521b\u5efa\u540e\u4e5f\u4f1a\u6709\u5b89\u88c5\u63d0\u793a\uff0c\u5982\u679c\u51fa\u73b0\u95ee\u9898\uff0c\u8bf7\u5f00\u53d1\u8005\u5728 vscode \u63d2\u4ef6\u67e5\u770b\u5177\u4f53\u95ee\u9898\u539f\u56e0\u3002\u8be5\u63d2\u4ef6\u652f\u6301\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u7ffb\u8bd1\u6587\u6848\u7684\u9884\u89c8"}),"\n",(0,i.jsx)(n.li,{children:"\u591a\u8bed\u8a00\u5207\u6362\u5c55\u793a"}),"\n",(0,i.jsx)(n.li,{children:"\u53ef\u89c6\u5316\u7684\u7f16\u8f91\u5185\u5bb9\u5de5\u5177"}),"\n",(0,i.jsx)(n.li,{children:"\u8fde\u63a5\u7f51\u7edc\u65f6\u652f\u6301\u81ea\u52a8\u4e00\u952e\u7ffb\u8bd1"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Wep app \u7ba1\u7406\u5de5\u5177\uff1a\u8fd9\u662f\u4e00\u4e2a\u57fa\u4e8e\u6d4f\u89c8\u5668\u7684GUI\u5de5\u5177\uff0c\u7528\u9014\u7ed9\u5f00\u53d1\u8005\u63d0\u4f9b\u4e00\u4e2a\u7ffb\u8bd1\u8d44\u6e90\u7684\u7ba1\u7406\u754c\u9762\uff0c\u652f\u6301\u7ffb\u8bd1\u5185\u5bb9\u7684\u589e\u5220\u67e5\u6539\uff0c\u5f00\u53d1\u8005\u53ef\u9488\u5bf9\u6027\u7684\u5728\u6b64\u8fdb\u884c\u7ffb\u8bd1\u8d44\u6e90\u7684\u53d8\u66f4"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u7528\u6237\u624b\u5de5\u7ef4\u62a4\uff1a\u5bf9\u4e8e\u4e60\u60ef\u81ea\u5df1\u7ef4\u62a4\u7ffb\u8bd1\u8d44\u6e90\u7684\u5f00\u53d1\u8005\uff0c\u53ef\u76f4\u63a5\u5728 ",(0,i.jsx)(n.code,{children:"Resources/i18n"})," \u548c ",(0,i.jsx)(n.code,{children:"ui/locals"})," \u6587\u4ef6\u5939\u4e0b\u4fee\u6539\u5bf9\u5e94\u8bed\u8a00\u7684\u7ffb\u8bd1\uff0c\u76ee\u524d\u652f\u6301\u5fb7(DE)\u3001\u65e5(JA)\u3001\u97e9(KO)\u3001\u4fc4(RU)\u3001\u897f\u73ed\u7259(ES)\u3001\u82f1(EN)\u3001\u4e2d(ZH)\u3001\u7e41\u4f53(HK)\u516b\u4e2a\u5730\u533a\u7684\u8bed\u8a00\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5f53\u524d\u7684\u56fd\u9645\u5316\u8d44\u6e90\u652f\u6301\u7ffb\u8bd1\u7684\u9884\u89c8"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(11053).A+"",width:"1920",height:"1080"})}),"\n",(0,i.jsx)(n.p,{children:"\u793a\u4f8b\u4ee3\u7801\u4e2d\u7684 \u201c\u6d4b\u8bd5\u201d \u5b57\u6837\u662f\u4e00\u4e2a\u5173\u952e\u5b57\u7684\u7ffb\u8bd1\uff0c\u70b9\u51fb\u53f3\u4e0b\u89d2\u7684\u5207\u6362\u5c55\u793a\u8bed\u8a00\u7684\u6309\u94ae\uff0c\u9009\u62e9\u8981\u9884\u89c8\u7684\u8bed\u8a00\uff0c\u5373\u53ef\u67e5\u770b\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5f53\u9700\u8981\u5bf9\u7ffb\u8bd1\u8d44\u6e90\u8fdb\u884c\u7f16\u8f91\u65f6\uff0c\u53ef\u4ee5\u70b9\u51fbvscode\u4fa7\u8fb9\u680f\u7684\u7ffb\u8bd1\u529f\u80fd\u6309\u94ae\u6216\u8005\u9f20\u6807\u53cc\u51fb\u8981\u7f16\u8f91\u7684\u7ffb\u8bd1\u5b57\u6bb5\uff0c\u60ac\u505c\u5728\u5173\u952e\u5b57\u4e0a\u7247\u523b\uff0c\u53ef\u51fa\u73b0\u5bf9\u5e94\u7684\u7f16\u8f91\u6846\uff0c\u5f00\u53d1\u8005\u53ef\u81ea\u7531\u7f16\u8f91\u7ffb\u8bd1\u8d44\u6e90"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(7194).A+"",width:"1920",height:"1080"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u914d\u7f6e\u6587\u4ef6\u7ffb\u8bd1\u8d44\u6e90\u7684\u7f16\u8f91\u4e2d\u5fc3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(47923).A+"",width:"1920",height:"929"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e",children:"\u811a\u672c\u7f16\u7a0b\u914d\u7f6e"}),"\n",(0,i.jsx)(n.p,{children:"\u5f53\u524d\u7684\u5f00\u53d1\u8005\u5de5\u5177\u63d0\u4f9b\u4e86\u4e00\u4e2a\u53ef\u914d\u7f6e\u7684 Web GUI \u5de5\u5177\uff0c\u8fd0\u884c\u5982\u4e0b\u6307\u4ee4"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"dpt gui\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5bf9\u5e94\u7684\u5730\u5740 ",(0,i.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  \u25b2 Next.js 14.2.5\n  - Local:        http://localhost:3000\n\n \u2713 Starting...\n \u2713 Ready in 958ms\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u51fd\u6570\u7f16\u7a0b\u7684\u914d\u7f6e\u6587\u4ef6\u7ba1\u7406\u4e2d\u5fc3"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(19862).A+"",width:"1920",height:"929"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8be5\u9875\u9762\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u67e5\u770b\u548c\u7f16\u8f91 ",(0,i.jsx)(n.code,{children:"userAPI.lua"})," \u6a21\u5757\u7684\u6e90\u7801"]}),"\n",(0,i.jsx)(n.li,{children:"\u67e5\u770b\u5f53\u524d\u9879\u76ee\u5bf9\u5916\u63d0\u4f9b\u7684\u51fd\u6570\u7f16\u7a0b\u914d\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"\u65b0\u589e\u3001\u7f16\u8f91\u3001\u67e5\u770b\u3001\u5220\u9664\u5f53\u524d\u9879\u76ee\u7684\u51fd\u6570\u7f16\u7a0b\u914d\u7f6e"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e",children:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u79ef\u6728\u7f16\u7a0b\u914d\u7f6e\u6587\u4ef6\u7684\u7ba1\u7406\u4e2d\u5fc3"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(44669).A+"",width:"1920",height:"929"})}),"\n",(0,i.jsx)(n.p,{children:"\u5f00\u53d1\u8005\u53ef\u4ee5\u5728\u8be5\u9875\u9762\u4e2d\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5bf9\u79ef\u6728\u914d\u7f6e\u7684\u6548\u679c\u8fdb\u884c\u9884\u89c8"}),"\n",(0,i.jsx)(n.li,{children:"\u65b0\u589e\u3001\u7f16\u8f91\u3001\u67e5\u770b\u3001\u5220\u9664\u79ef\u6728\u914d\u7f6e\u4fe1\u606f"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u8be5 GUI \u5de5\u5177\u4e2d\u7684\u6240\u6709\u8d44\u6e90\u652f\u6301\u589e\u5220\u67e5\u6539\uff0c\u6539\u52a8\u4f1a\u540c\u6b65\u5230\u63d2\u4ef6\u9879\u76ee\uff0c\u7528\u6237\u4e5f\u53ef\u4ee5\u4e0d\u4f7f\u7528\u8be5\u5de5\u5177\uff0c\u81ea\u884c\u524d\u5f80\u63d2\u4ef6\u6587\u4ef6\u5939 ",(0,i.jsx)(n.code,{children:"config"})," \u4e0b\u4fee\u6539\uff0c\u8be5\u6587\u4ef6\u5939\u4e0b\u7684\u5747\u5df2\u652f\u6301\u683c\u5f0f\u6b63\u786e\u6027\u7684\u68c0\u9a8c\u548c\u53ef\u9009\u5185\u5bb9\u7684\u63d0\u793a\uff0c\u5982\u679c\u51fa\u73b0\u544a\u8b66\uff0c\u5219\u9884\u793a\u914d\u7f6e\u6587\u4ef6\u5f02\u5e38\uff0c\u4f1a\u5f71\u54cd\u771f\u5b9e\u7684\u4f7f\u7528\u548c\u8c03\u8bd5\uff0c\u8bf7\u52ff\u5ffd\u7565\u544a\u8b66\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"io # \u9879\u76ee\u6839\u76ee\u5f55\n\u2514\u2500\u2500 configs\n   \u251c\u2500\u2500 Blocks.json  # \u79ef\u6728\u914d\u7f6e\n   \u251c\u2500\u2500 Main.json    # \u63d2\u4ef6\u4fe1\u606f\u914d\u7f6e\n   \u251c\u2500\u2500 Scripts.json # \u811a\u672c\u7f16\u7a0b\u914d\u7f6e\n   \u2514\u2500\u2500 Toolbar.json # \u5de5\u5177\u680f\u914d\u7f6e\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},44669:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/blocks-d3796bd994c33e9dd71401a54e9cf700.png"},19862:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/script-75e8face6b91968e0ea6f05989f488ca.png"},26806:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/shortcut-guide-04c29a7ecbb7bc4bf817f378e2f14e2e.png"},5577:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/shortcut-3a62cf30b519109a9b935aa3d70551b8.png"},7194:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tanslate-edit-eb3f3ace7628f63a9f5c9f9ee740bbb7.png"},47923:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/translate-gui-f67a44c5ac5babd644e228afa26ad8ae.png"},11053:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/translate-8a5d1dddd367ad19ce6183de9337e564.png"},43327:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>r});var i=s(22155);const l={},c=i.createContext(l);function d(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);