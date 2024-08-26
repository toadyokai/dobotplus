"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[2246],{3573:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>t,frontMatter:()=>d,metadata:()=>c,toc:()=>x});var r=s(5723),l=s(3327);const d={},i="IO",c={id:"lua/io",title:"IO",description:"IO\u6307\u4ee4\u7528\u4e8e\u8fdb\u884c\u673a\u68b0\u81c2\u7cfb\u7edfIO\u7684\u8bfb\u5199\u548c\u76f8\u5173\u53c2\u6570\u7684\u8bbe\u7f6e\u3002",source:"@site/docs/lua/07-io.md",sourceDirName:"lua",slug:"/lua/io",permalink:"/dobotplus/lua/io",draft:!1,unlisted:!1,editUrl:"http://192.168.0.11:20080/IndustrialProducts/TPGroup/FrontEndpluginCollection/dobotplus/dobotpluginsworktile/apps/website/docs/docs/lua/07-io.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"lua",previous:{title:"\u672b\u7aef\u5de5\u5177",permalink:"/dobotplus/lua/tool"},next:{title:"\u8fd0\u52a8\u6307\u4ee4",permalink:"/dobotplus/lua/motion"}},h={},x=[{value:"\u6307\u4ee4\u529f\u80fd\u8868",id:"\u6307\u4ee4\u529f\u80fd\u8868",level:2},{value:"DI",id:"di",level:2},{value:"DIGroup",id:"digroup",level:2},{value:"DO",id:"do",level:2},{value:"DOGroup",id:"dogroup",level:2},{value:"GetDO",id:"getdo",level:2},{value:"GetDOGroup",id:"getdogroup",level:2},{value:"AI",id:"ai",level:2},{value:"AO",id:"ao",level:2},{value:"GetAO",id:"getao",level:2}];function j(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.header,{children:(0,r.jsx)(e.h1,{id:"io",children:"IO"})}),"\n",(0,r.jsx)(e.p,{children:"IO\u6307\u4ee4\u7528\u4e8e\u8fdb\u884c\u673a\u68b0\u81c2\u7cfb\u7edfIO\u7684\u8bfb\u5199\u548c\u76f8\u5173\u53c2\u6570\u7684\u8bbe\u7f6e\u3002"}),"\n",(0,r.jsx)(e.h2,{id:"\u6307\u4ee4\u529f\u80fd\u8868",children:"\u6307\u4ee4\u529f\u80fd\u8868"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u6307\u4ee4"}),(0,r.jsx)(e.th,{children:"\u529f\u80fd"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"DI"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6DI\u7aef\u53e3\u7684\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"DIGroup"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6\u591a\u4e2aDI\u7aef\u53e3\u7684\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"DO"})}),(0,r.jsx)(e.td,{children:"\u8bbe\u7f6e\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"DOGroup"})}),(0,r.jsx)(e.td,{children:"\u8bbe\u7f6e\u591a\u4e2a\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"GetDO"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"GetDOGroup"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u72b6\u6001"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"AI"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6AI\u7aef\u53e3\u7684\u503c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"AO"})}),(0,r.jsx)(e.td,{children:"\u8bbe\u7f6e\u6a21\u62df\u8f93\u51fa\u7aef\u53e3\u7684\u503c"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:(0,r.jsx)(e.strong,{children:"GetAO"})}),(0,r.jsx)(e.td,{children:"\u83b7\u53d6\u6a21\u62df\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u7684\u503c"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"di",children:"DI"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"DI(index)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bfb\u53d6\u6570\u5b57\u8f93\u5165\u7aef\u53e3\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDI\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684DI\u7aef\u5b50\u7684\u72b6\u6001\uff08ON/OFF\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- DI1\u4e3aON\u65f6\u673a\u68b0\u81c2\u4ee5\u76f4\u7ebf\u8fd0\u52a8\u65b9\u5f0f\u8fd0\u52a8\u81f3P1\u70b9\u3002\nif (DI(1)==ON) \nthen\n    MovL(P1)\nend\n"})}),"\n",(0,r.jsx)(e.h2,{id:"digroup",children:"DIGroup"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"DIGroup(index1,...,indexN)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bfb\u53d6\u591a\u4e2a\u6570\u5b57\u8f93\u5165\u7aef\u53e3\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDI\u7aef\u5b50\u7684\u7f16\u53f7\uff0c\u53ef\u8f93\u5165\u591a\u4e2a\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684DI\u7aef\u5b50\u7684\u72b6\u6001\uff08ON/OFF\uff09\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u5f53DI1\u548cDI2\u90fd\u4e3aON\u65f6\u673a\u68b0\u81c2\u4ee5\u76f4\u7ebf\u8fd0\u52a8\u65b9\u5f0f\u8fd0\u52a8\u81f3P1\u70b9\u3002\nlocal digroup = DIGroup(1,2)\nif (digroup[1]&digroup[2]==ON) \nthen\n    MovL(P1)\nend\n"})}),"\n",(0,r.jsx)(e.h2,{id:"do",children:"DO"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"DO(index,ON|OFF,time_ms)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bbe\u7f6e\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDO\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ON|OFF"}),"\uff1a\u8981\u8bbe\u7f6e\u7684DO\u7aef\u53e3\u72b6\u6001\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u53ef\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"time_ms"}),"\uff1a \u6301\u7eed\u8f93\u51fa\u65f6\u95f4\uff0c\u5355\u4f4dms\uff0c\u53d6\u503c\u8303\u56f4\uff1a[25, 60000]\u3002\u5982\u679c\u8bbe\u7f6e\u4e86\u8be5\u53c2\u6570\uff0c\u7cfb\u7edf\u4f1a\u5728\u6307\u5b9a\u65f6\u95f4\u540e\u5bf9DO\u81ea\u52a8\u53d6\u53cd\u3002\u53d6\u53cd\u4e3a\u5f02\u6b65\u52a8\u4f5c\uff0c\u4e0d\u4f1a\u963b\u585e\u6307\u4ee4\u961f\u5217\uff0c\u7cfb\u7edf\u6267\u884c\u4e86DO\u8f93\u51fa\u540e\u5c31\u4f1a\u6267\u884c\u4e0b\u4e00\u6761\u6307\u4ee4\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u5c06DO1\u8bbe\u7f6e\u4e3aON\u3002\nDO(1,ON)\n-- \u5c06DO1\u8bbe\u7f6e\u4e3aON,\u5e76\u572850ms\u540e\u518d\u81ea\u52a8\u8bbe\u7f6e\u4e3aOFF\u3002\nDO(1,ON,50)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"dogroup",children:"DOGroup"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"DOGroup({index1,ON|OFF},..,{indexN,ON|OFF})\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bbe\u7f6e\u591a\u4e2a\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDO\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"ON|OFF"}),"\uff1a\u8981\u8bbe\u7f6e\u7684DO\u7aef\u53e3\u72b6\u6001\u3002",(0,r.jsx)(e.br,{}),"\n","\u53ef\u8bbe\u7f6e\u591a\u7ec4\uff0c\u6bcf\u7ec4\u4ee5\u5927\u62ec\u53f7\u5305\u88f9\uff0c\u7ec4\u95f4\u4ee5\u9017\u53f7\u9694\u5f00\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u5c06DO1\u548cDO2\u8bbe\u7f6e\u4e3aON\u3002\nDOGroup({1,ON},{2,ON})\n"})}),"\n",(0,r.jsx)(e.h2,{id:"getdo",children:"GetDO"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"GetDO(index)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u83b7\u53d6\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDO\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684DI\u7aef\u5b50\u7684\u72b6\u6001\uff08ON/OFF\uff09\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u83b7\u53d6DO1\u7684\u5f53\u524d\u72b6\u6001\u3002\nGetDO(1)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"getdogroup",children:"GetDOGroup"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"GetDOGroup(index1,...,indexN)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u83b7\u53d6\u591a\u4e2a\u6570\u5b57\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aDO\u7aef\u5b50\u7684\u7f16\u53f7\uff0c\u53ef\u8f93\u5165\u591a\u4e2a\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684DO\u7aef\u5b50\u7684\u72b6\u6001\uff08ON/OFF\uff09\uff0c\u4ee5\u6570\u7ec4\u5f62\u5f0f\u8fd4\u56de\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u83b7\u53d6DO1\u548cDO2\u7684\u5f53\u524d\u72b6\u6001\u3002\nGetDOGroup(1,2)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"ai",children:"AI"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"AI(index)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bfb\u53d6\u6a21\u62df\u8f93\u5165\u7aef\u53e3\u7684\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aAI\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684AI\u7aef\u5b50\u7684\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u8bfb\u53d6AI1\u7684\u503c\u5e76\u8d4b\u503c\u7ed9\u53d8\u91cftest\u3002\ntest = AI(1)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"ao",children:"AO"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"AO(index,value)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u8bbe\u7f6e\u6a21\u62df\u8f93\u51fa\u7aef\u53e3\u7684\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aAO\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"value"}),"\uff1a\u8981\u8bbe\u7f6e\u7684\u503c\uff0c\u7535\u538b\u53d6\u503c\u8303\u56f4\uff1a[0,10]\uff0c\u5355\u4f4d\uff1aV\uff1b\u7535\u6d41\u53d6\u503c\u8303\u56f4\uff1a[4,20]\uff0c\u5355\u4f4d\uff1amA\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u5c06AO1\u7684\u8f93\u51fa\u503c\u8bbe\u7f6e\u4e3a2\u3002\nAO(1,2)\n"})}),"\n",(0,r.jsx)(e.h2,{id:"getao",children:"GetAO"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u539f\u578b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"GetAO(index)\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u63cf\u8ff0:"})}),"\n",(0,r.jsx)(e.p,{children:"\u83b7\u53d6\u6a21\u62df\u8f93\u51fa\u7aef\u53e3\u5f53\u524d\u7684\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u5fc5\u9009\u53c2\u6570\uff1a"})}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.code,{children:"index"}),"\uff1aAO\u7aef\u5b50\u7684\u7f16\u53f7\u3002"]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u8fd4\u56de\uff1a"})}),"\n",(0,r.jsx)(e.p,{children:"\u5bf9\u5e94\u7684AO\u7aef\u5b50\u7684\u503c\u3002"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u793a\u4f8b\uff1a"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-lua",children:"-- \u83b7\u53d6AO1\u7684\u5f53\u524d\u72b6\u6001\u3002\nGetAO(1)\n"})}),"\n",(0,r.jsx)(e.hr,{}),"\n",(0,r.jsx)(e.p,{children:"\u8fd9\u6bb5\u5185\u5bb9\u5df2\u7ecf\u8f6c\u4e3a Markdown \u683c\u5f0f\uff0c\u5305\u542b\u4e86\u6807\u9898\u3001\u8868\u683c\u548c\u4ee3\u7801\u5757\uff0c\u9002\u5408\u5728\u652f\u6301 Markdown \u7684\u7f16\u8f91\u5668\u6216\u5e73\u53f0\u4e2d\u663e\u793a\u3002"})]})}function t(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},3327:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>c});var r=s(2155);const l={},d=r.createContext(l);function i(n){const e=r.useContext(d);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(d.Provider,{value:e},n.children)}}}]);