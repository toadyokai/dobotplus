"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[4966],{32337:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var l=s(65723),r=s(43327);const i={},t="\u7a0b\u5e8f\u63a7\u5236",d={id:"lua/programControl",title:"\u7a0b\u5e8f\u63a7\u5236",description:"\u6307\u4ee4\u5217\u8868",source:"@site/docs/lua/11-programControl.md",sourceDirName:"lua",slug:"/lua/programControl",permalink:"/dobotplus/en/lua/programControl",draft:!1,unlisted:!1,editUrl:"http://192.168.0.11:20080/IndustrialProducts/TPGroup/FrontEndpluginCollection/dobotplus/dobotpluginsworktile/apps/website/docs/docs/lua/11-programControl.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"lua",previous:{title:"\u603b\u7ebf\u5bc4\u5b58\u5668",permalink:"/dobotplus/en/lua/busRegister"},next:{title:"\u6258\u76d8",permalink:"/dobotplus/en/lua/tray"}},a={},c=[{value:"\u6307\u4ee4\u5217\u8868",id:"\u6307\u4ee4\u5217\u8868",level:2},{value:"Print",id:"print",level:2},{value:"Log",id:"log",level:2},{value:"Wait",id:"wait",level:2},{value:"Pause",id:"pause",level:2},{value:"ResetElapsedTime",id:"resetelapsedtime",level:2},{value:"ElapsedTime",id:"elapsedtime",level:2},{value:"Systime",id:"systime",level:2},{value:"SetGlobalVariable",id:"setglobalvariable",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u7a0b\u5e8f\u63a7\u5236",children:"\u7a0b\u5e8f\u63a7\u5236"})}),"\n",(0,l.jsx)(n.h2,{id:"\u6307\u4ee4\u5217\u8868",children:"\u6307\u4ee4\u5217\u8868"}),"\n",(0,l.jsx)(n.p,{children:"\u7a0b\u5e8f\u63a7\u5236\u51fd\u6570\u4e3a\u7a0b\u5e8f\u8fd0\u884c\u63a7\u5236\u76f8\u5173\u7684\u901a\u7528\u51fd\u6570\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u6307\u4ee4\t\u529f\u80fd\nPrint\t\u6253\u5370\u8c03\u8bd5\u4fe1\u606f\u5230\u63a7\u5236\u53f0\nLog\t\u8f93\u51fa\u81ea\u5b9a\u4e49\u65e5\u5fd7\nWait\t\u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\u6216\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u540e\u518d\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6761\u547d\u4ee4\nPause\t\u6682\u505c\u811a\u672c\u8fd0\u884c\nResetElapsedTime\t\u5f00\u59cb\u8ba1\u65f6\nElapsedTime\t\u7ed3\u675f\u8ba1\u65f6\nSystime\t\u83b7\u53d6\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\nSetGlobalVariable\t\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf"}),"\n",(0,l.jsx)(n.h2,{id:"print",children:"Print"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"Print(value)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u6253\u5370\u8c03\u8bd5\u4fe1\u606f\u5230\u63a7\u5236\u53f0\uff08\u547d\u4ee4\u540d\u4e5f\u53ef\u5199\u6210print\uff09\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u8bf4\u660e\uff1a\n\u53d8\u91cf\u6253\u5370\u51fa\u6765\u7684\u683c\u5f0f\u548c\u672c\u6587\u6863\u4e2d\u63cf\u8ff0\u7684\u683c\u5f0f\u53ef\u80fd\u6709\u6240\u5dee\u5f02\uff0c\u4f46\u8868\u793a\u7684\u662f\u540c\u4e00\u79cd\u6570\u636e\u683c\u5f0f\uff0c\u53c2\u8003\u672c\u6587\u6863\u4e2d\u63cf\u8ff0\u7684\u683c\u5f0f\u7406\u89e3\u548c\u4f7f\u7528\u5373\u53ef\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u4f8b\u5982\uff0c\u53d8\u91cf\u7684\u683c\u5f0f\u4e3a {pose={x,y,z,rx,ry,rz}}\uff0c\u6253\u5370\u51fa\u6765\u7684\u683c\u5f0f\u5219\u7c7b\u4f3c\u4e8e\uff1a\ntable:0x123abc{\n  [pose] => table:0x123abc{\n  [1] => x\n  [2] => y\n  [3] => z\n  [4] => rx\n  [5] => ry\n  [6] => rz\n  }\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"value\uff1a\u5f85\u6253\u5370\u7684\u6570\u636e"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u6253\u5370\u5b57\u7b26\u4e32Success\u5230\u63a7\u5236\u53f0\u3002\nPrint('Success')\n"})}),"\n",(0,l.jsx)(n.h2,{id:"log",children:"Log"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"Log(value)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u8f93\u51fa\u81ea\u5b9a\u4e49\u7ea7\u522b\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u53ef\u5728\u63a7\u5236\u8f6f\u4ef6\u65e5\u5fd7\u9875\u9762\u4e2d\u67e5\u770b\u53ca\u5bfc\u51fa\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"value\uff1a\u65e5\u5fd7\u4fe1\u606f"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u8f93\u51fa\u5185\u5bb9\u4e3atest\u7684\u65e5\u5fd7\u4fe1\u606f\u3002\nLog('test')\n"})}),"\n",(0,l.jsx)(n.h2,{id:"wait",children:"Wait"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"Wait(time_ms)\nWait(check_str)\nWait(check_str, timeout_ms)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u673a\u68b0\u81c2\u5b8c\u6210\u4e0a\u4e00\u6761\u6307\u4ee4\u540e\uff0c\u7b49\u5f85\u6307\u5b9a\u65f6\u95f4\u6216\u6ee1\u8db3\u6307\u5b9a\u6761\u4ef6\u540e\u518d\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6761\u547d\u4ee4\u3002\u7b49\u5f85\u65f6\u95f4\u7684\u6700\u5927\u503c\u4e3a2147483647ms\uff0c\u8bbe\u7f6e\u7684\u53c2\u6570\u8d85\u8fc7\u6700\u5927\u503c\u4f1a\u5bfc\u81f4\u6307\u4ee4\u65e0\u6548\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"time_ms\uff1a\u53c2\u6570\u503c\u4e3ainteger\u7c7b\u578b\u65f6\uff0c\u8868\u793a\u6307\u5b9a\u7b49\u5f85\u65f6\u95f4\uff0c\u5c0f\u4e8e\u7b49\u4e8e0\u65f6\u8868\u793a\u4e0d\u7b49\u5f85\u3002\u5355\u4f4d\uff1ams\ncheck_str\uff1a\u53c2\u6570\u503c\u4e3astring\u7c7b\u578b\u65f6\uff0c\u8868\u793a\u5224\u65ad\u903b\u8f91\uff0c\u903b\u8f91\u4e3atrue\u540e\u518d\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6761\u6307\u4ee4\u3002\n\u53ef\u9009\u53c2\u6570\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"timeout_ms\uff1a\u8d85\u65f6\u65f6\u95f4\u3002\u5224\u65ad\u903b\u8f91\u4e00\u76f4\u4e3afalse\u4e14\u7b49\u5f85\u8d85\u8fc7\u8be5\u65f6\u95f4\u65f6\uff0c\u7cfb\u7edf\u4f1a\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u6761\u6307\u4ee4\u5e76\u8fd4\u56defalse\u3002\u5c0f\u4e8e\u7b49\u4e8e0\u65f6\u8868\u793a\u4e0d\u7b49\u5f85\uff0c\u7acb\u523b\u8d85\u65f6\u3002\u4e0d\u8bbe\u7f6e\u8be5\u53c2\u6570\u65f6\uff0c\u8868\u793a\u4e0d\u4f1a\u8d85\u65f6\uff0c\u4f1a\u4e00\u76f4\u7b49\u5f85\u76f4\u5230\u5224\u65ad\u903b\u8f91\u4e3atrue\u3002\u5355\u4f4d\uff1ams"}),"\n",(0,l.jsx)(n.p,{children:"\u8fd4\u56de\uff1a"}),"\n",(0,l.jsx)(n.p,{children:"\u6ee1\u8db3\u6761\u4ef6\u5e76\u7ee7\u7eed\u8fd0\u884c\u65f6\uff0c\u8fd4\u56detrue\uff1b\u4e0d\u6ee1\u8db3\u6761\u4ef6\uff0c\u56e0\u8d85\u65f6\u5bfc\u81f4\u7ee7\u7eed\u8fd0\u884c\u65f6\uff0c\u8fd4\u56defalse\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u7b49\u5f85300ms\u3002\nWait(300)\n-- DI1\u4e3aON\u65f6\u7ee7\u7eed\u8fd0\u884c\u3002\nWait("DI(1) == ON")\n-- DO1\u4e3aON\u4e14AI(1)\u5c0f\u4e8e7\u65f6\u7ee7\u7eed\u8fd0\u884c\u3002\nWait("GetDO(1) == ON and AI(1) < 7")\n-- \u6839\u636e1s\u5185DI1\u7684\u72b6\u6001\u6267\u884c\u4e0d\u540c\u7684\u4e1a\u52a1\u903b\u8f91\u3002\nif (Wait("DI(1) == ON", 1000)) \nthen\n    -- DI1\u72b6\u6001\u4e3aON\nelse\n    -- DI1\u72b6\u6001\u4e3aOFF\u4e14\u7b49\u5f85\u8d85\u8fc71s\nend\n'})}),"\n",(0,l.jsx)(n.h2,{id:"pause",children:"Pause"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"Pause()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u6682\u505c\u811a\u672c\u8fd0\u884c\u3002\u9700\u8981\u901a\u8fc7\u63a7\u5236\u8f6f\u4ef6\u6216\u8005\u8fdc\u7a0b\u63a7\u5236\u64cd\u4f5c\u624d\u53ef\u7ee7\u7eed\u8fd0\u884c\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u673a\u68b0\u81c2\u8fd0\u884c\u81f3P1\u70b9\u540e\u6682\u505c\u8fd0\u884c\uff0c\u901a\u8fc7\u5916\u90e8\u63a7\u5236\u7ee7\u7eed\u8fd0\u884c\u540e\u624d\u4f1a\u8fd0\u884c\u81f3P2\u70b9\u3002\nMovJ(P1)\nPause()\nMovJ(P2)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"resetelapsedtime",children:"ResetElapsedTime"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"ResetElapsedTime()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u5f85\u6b64\u6307\u4ee4\u524d\u6240\u6709\u6307\u4ee4\u6267\u884c\u5b8c\u6210\u540e\u5f00\u59cb\u8ba1\u65f6\uff0c\u9700\u914d\u5408ElapsedTime()\u4e00\u8d77\u4f7f\u7528\uff0c\u53ef\u7528\u4e8e\u8ba1\u7b97\u8fd0\u884c\u65f6\u95f4\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bf7\u53c2\u8003ElapsedTime\u7684\u793a\u4f8b\u3002"}),"\n",(0,l.jsx)(n.h2,{id:"elapsedtime",children:"ElapsedTime"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"ElapsedTime()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u7ed3\u675f\u8ba1\u65f6\uff0c\u8fd4\u56de\u65f6\u95f4\u5dee\uff0c\u9700\u914d\u5408ResetElapsedTime()\u4e00\u8d77\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u4ece\u5f00\u59cb\u8ba1\u65f6\u5230\u7ed3\u675f\u8ba1\u65f6\u7684\u65f6\u95f4\u5dee\uff0c\u5355\u4f4d\u6beb\u79d2\u3002\u6700\u5927\u53ef\u7edf\u8ba14294967295ms\uff08\u7ea649.7\u5929\uff09\uff0c\u8d85\u8fc7\u6b64\u65f6\u95f4\u540e\u4f1a\u4ece0\u5f00\u59cb\u91cd\u65b0\u8ba1\u6570\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u8ba1\u7b97\u673a\u68b0\u81c2\u5728P1\u548cP2\u95f4\u76f4\u7ebf\u8fd0\u52a8\u6765\u56de10\u6b21\u7684\u65f6\u95f4\uff0c\u6253\u5370\u81f3\u63a7\u5236\u53f0\u3002\nMovJ(P2)\nResetElapsedTime()\nfor i=1,10 do\n    MovL(P1)\n    MovL(P2)\nend\nprint (ElapsedTime())\n"})}),"\n",(0,l.jsx)(n.h2,{id:"systime",children:"Systime"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"Systime()\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u83b7\u53d6\u5f53\u524d\u7cfb\u7edf\u65f6\u95f4\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\u7684Unix\u65f6\u95f4\u6233\uff0c\u5355\u4f4d\u8f6c\u6362\u4e3a\u4e86\u6beb\u79d2\uff0c\u5373\u4ece\u683c\u6797\u5a01\u6cbb\u65f6\u95f41970\u5e741\u67081\u65e5\u96f6\u65f6\u5230\u5f53\u524d\u65f6\u95f4\u7684\u6beb\u79d2\u6570\uff0c\u4e00\u822c\u7528\u4e8e\u8ba1\u7b97\u65f6\u95f4\u5dee\u3002\u5982\u9700\u83b7\u53d6\u5f53\u5730\u65f6\u95f4\uff0c\u8bf7\u6839\u636e\u5f53\u5730\u65f6\u533a\u4f7f\u7528\u83b7\u53d6\u7684\u683c\u6797\u5a01\u6cbb\u65f6\u95f4\u6362\u7b97\u83b7\u5f97\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"-- \u83b7\u53d6\u7cfb\u7edf\u5f53\u524d\u65f6\u95f4\u3002\nlocal time1 = Systime() \nprint(time1)  -- > 1686304295963,\u6362\u7b97\u4e3a\u5317\u4eac\u65f6\u95f4\u4e3a2023-06-09 17:51:35\uff08\u52a0963\u6beb\u79d2\uff09\nlocal time2 = Systime() \nprint(time2)  -- > 1686304421968,\u6362\u7b97\u4e3a\u5317\u4eac\u65f6\u95f4\u4e3a2023-06-09 17:53:41\uff08\u52a0968\u6beb\u79d2\uff09\n\n-- \u8ba1\u7b97\u673a\u68b0\u81c2\u79fb\u52a8\u5230P1\u6240\u82b1\u8d39\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2\u3002\nlocal time1 = Systime()\nMovL(P1)\nlocal time2 = Systime()\nprint(time2-time1)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"setglobalvariable",children:"SetGlobalVariable"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"SetGlobalVariable(key,val)\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u63cf\u8ff0\uff1a"})}),"\n",(0,l.jsx)(n.p,{children:"\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf\u3002\u5982\u9700\u5bf9\u5168\u5c40\u53d8\u91cf\u8fdb\u884c\u8d4b\u503c\uff0c\u5efa\u8bae\u4f7f\u7528\u6b64\u51fd\u6570\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\u201d=\u201c\u3002"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,l.jsxs)(n.p,{children:["key\uff1a\u8981\u8bbe\u7f6e\u7684\u5168\u5c40\u53d8\u91cf\u7684\u540d\u79f0\u3002\nval\uff1a\u8981\u8bbe\u7f6e\u7684\u5168\u5c40\u53d8\u91cf\u7684\u503c\uff0c\u652f\u6301\u7684\u6570\u636e\u7c7b\u578b\u5305\u62ecbool\uff0ctable\uff0cstring\uff0cnumber\u3002\n",(0,l.jsx)(n.strong,{children:"\u793a\u4f8b\uff1a"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'-- \u8bbe\u7f6e\u5168\u5c40\u53d8\u91cfg1\u7684\u503c\u4e3a10\nSetGlobalVariable("g1",10)\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},43327:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>d});var l=s(22155);const r={},i=l.createContext(r);function t(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);