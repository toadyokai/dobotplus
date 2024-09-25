"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[2342],{86105:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=s(65723),t=s(43327);const l={},i="\u5206\u5e03\u5f0f\u9501",d={id:"lua/lock",title:"\u5206\u5e03\u5f0f\u9501",description:"\u8bf4\u660e",source:"@site/docs/lua/13-lock.md",sourceDirName:"lua",slug:"/lua/lock",permalink:"/dobotplus/lua/lock",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{},sidebar:"lua",previous:{title:"\u6258\u76d8",permalink:"/dobotplus/lua/tray"}},c={},h=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",level:2},{value:"\u63a5\u53e3",id:"\u63a5\u53e3",level:2}];function x(e){const n={br:"br",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u5206\u5e03\u5f0f\u9501",children:"\u5206\u5e03\u5f0f\u9501"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8bf4\u660e",children:"\u8bf4\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u5206\u5e03\u5f0f\u9501\u6a21\u5757\u7684\u5f15\u5165\u4e3b\u8981\u662f\u4e3a\u4e86\u89e3\u51b3\u591a\u6a21\u5757\u4f7f\u7528\u76f8\u540c\u8d44\u6e90\u4ea7\u751f\u7684\u6570\u636e\u51b2\u7a81\u7684\u95ee\u9898\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e00\u4e2a\u5178\u578b\u7684\u5e94\u7528\u573a\u666f\u5c31\u662f\uff1a \u5939\u722a\u548c\u76f8\u673a\u540c\u65f6\u4f7f\u7528\u672b\u7aef\u7684485\u6765\u8fdb\u884c\u901a\u8baf\uff0c\u53cc\u65b9\u7684\u63d2\u4ef6\u4ee5\u53ca \u7528\u6237\u811a\u672c\u5206\u522b\u90fd\u9700\u8981\u548c\u672b\u7aef\u7684485 \u8fdb\u884c\u901a\u8baf\uff0c\u800c485 \u6a21\u5757\u65e0\u6cd5\u51b3\u5b9a\u67d0\u4e00\u65f6\u95f4\u201c\u72ec\u5c5e\u4e8e\u201d\u67d0\u4e00\u4e2a\u901a\u8baf\u53cc\u65b9 \uff0c\u56e0\u800c\u9700\u8981\u5f15\u5165\u4e00\u4e2a\u989d\u5916\u7684\u5de5\u5177\u6765\u5904\u7406\u8d44\u6e90\u4e4b\u95f4\u7684\u72ec\u5360\u5173\u7cfb\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4e3e\u4f8b\u8bf4\u660e\u8d85\u65f6\u9501\u7684\u4f5c\u7528\uff1a"}),"\n",(0,r.jsx)(n.p,{children:"\u5047\u5b9a\u6709\u4e00\u4e2a\u6253\u5370\u673a\uff0c\u53ef\u4ee5\u7acb\u5373\u6253\u5370\u51fa\u6765\u6536\u5230\u7684\u6253\u5370\u7684\u8bf7\u6c42\u3002 \u6709A,B,C \u4e09\u4e2a\u7528\u6237\u6709\u6253\u5370\u9700\u6c42\uff0c\u4ed6\u4eec\u9700\u8981\u7684\u6253\u5370\u4efb\u52a1\u5206\u522b\u662f A1,A2,A3... A10 \uff0cB1,B2...B10,C1...C10 , \u5982\u679c\u4ed6\u4eec\u4e4b\u95f4\u65e0\u6c9f\u901a \u4e14\u90fd\u662f\u5728\u81ea\u5df1\u9700\u8981\u7684\u65f6\u5019\u8fdb\u884c\u6253\u5370\uff0c\u6b64\u65f6\u7684\u8f93\u51fa\u53ef\u80fd\u662f A1,B1,A2,C1, \u7b49\u6742\u4e71\u7684\u60c5\u5f62\uff0c\u6b64\u65f6\u6253\u5370\u51fa\u6765\u7684\u5185\u5bb9 \u4e0d\u7b26\u5408\u4efb\u4f55\u4e00\u4e2a\u7528\u6237\u7684\u9700\u6c42\uff0c\u7528\u6237\u9700\u8981\u590d\u6742\u7684\u903b\u8f91\u53bb\u5c06\u81ea\u5df1\u7684\u6570\u636e\u6574\u7406\u51fa\u6765\uff0c\u751a\u81f3\u6709\u7684\u65f6\u5019\u53ef\u80fd\u62ff\u5230\u7684\u6570\u636e\u5c31\u662f\u9519\u8bef\u7684\u3002 \u6b64\u65f6\u65b0\u589e\u4e00\u4f4d\u201d\u7ba1\u7406\u5458\u201c\uff0c\u4e13\u95e8\u8d1f\u8d23\u7ba1\u7406\u201c\u6253\u5370\u673a\u201d \u7684\u4f7f\u7528\uff0c\u5047\u5b9a A\u6700\u65e9\u53d1\u73b0\u4e86\u81ea\u5df1\u7684\u6253\u5370\u9700\u6c42\uff0c\u5e76\u4e14A\u53ca\u65f6\u7684\u5c06\u6253\u5370\u7684\u9700\u6c42\u4e0a\u62a5\u7ed9\u7ba1\u7406\u5458\uff0c\u6b64\u65f6\u7ba1\u7406\u5458\u4f1a\u8bb0\u5f55\u201c\u6253\u5370\u673a\u72ec\u5c5e\u201d \u4e8eA 2min , A\u53ef\u4ee5\u5728\u63a5\u4e0b\u6765\u7684\u4e24\u5206\u949f\u5185\u6253\u5370\u81ea\u5df1\u9700\u8981\u7684\u5185\u5bb9\u3002 \u800cB \u548c C\u5728\u8fd9\u671f\u95f4\u5c1d\u8bd5\u5c06\u81ea\u5df1\u7684\u9700\u6c42\u4e0a\u62a5\u7ed9\u7ba1\u7406\u5458\uff0c\u7ba1\u7406\u5458\u4f1a\u8ba9B\u548cC\u7b49\u5f85\u3002\u76f4\u5230A\u76842\u5206\u949f\u7528\u5b8c\uff0c\u6216\u8005\u662f A\u63d0\u524d\u7528\u5b8c\uff0c\u7ba1\u7406\u5458\u624d\u4f1a\u544a\u77e5B\u548cC \u6253\u5370\u673a\u53ef\u4ee5\u7528\u4e86\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u603b\u7684\u65f6\u95f4\u56fe\u5927\u6982\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(77493).A+"",width:"984",height:"509"})}),"\n",(0,r.jsxs)(n.p,{children:["\u2460 \u6b64\u65f6 \u8d44\u6e90 \u201c\u6253\u5370\u673a\u201d\u7a7a\u95f2\uff0cA\u7528\u6237\u5c1d\u8bd5\u7533\u8bf7\u4f7f\u7528\u6743\u9650\uff0c\u7acb\u5373\u83b7\u6279\uff0c\u83b7\u6279\u540eA\u7ed9\u51fa\u4e86\u5927\u6982\u7684\u7533\u8bf7\u4f7f\u7528\u65f6\u95f4\uff08\u6b64\u65f6\u95f4\u4e0d\u4f1a\u65e0\u9650\u591a\uff0c\u76ee\u524d\u8bbe\u8ba1\u4e2d\u6700\u5927\u4e3a 10\u79d2\uff09\u3002",(0,r.jsx)(n.br,{}),"\n","\u2461 \u8d44\u6e90 \u201c\u6253\u5370\u673a\u201d \u5f00\u59cb\u88ab\u4f7f\u7528",(0,r.jsx)(n.br,{}),"\n","\u2462 B \u7533\u8bf7\u4f7f\u7528 \u8d44\u6e90\uff0c\u7ba1\u7406\u5458\u77e5\u9053\u6b64\u65f6\u8d44\u6e90\u8fd8\u5728A\u624b\u4e2d\uff0c\u6240\u4ee5\u62d2\u7eddB\u7684\u7533\u8bf7\u3002\u8ba9B \u518d\u7b49\u7b49\u3002\n\u2463 B\u518d\u6b21\u7533\u8bf7\uff0c\u518d\u6b21\u88ab\u62d2\u7edd\u3002",(0,r.jsx)(n.br,{}),"\n","\u2464 C\u5f00\u59cb\u7533\u8bf7 \u8d44\u6e90 \u201c\u6253\u5370\u673a\u201d\uff0c\u7ba1\u7406\u5458\u62d2\u7edd\u4e86C\u7684\u8bf7\u6c42\u3002",(0,r.jsx)(n.br,{}),"\n","\u2465 A\u4e3b\u52a8\u544a\u8bc9\u7ba1\u7406\u5458\uff0c\u8d44\u6e90 \u201c\u6253\u5370\u673a\u201d \u7684\u4f7f\u7528\u7ed3\u675f\u4e86\u3002",(0,r.jsx)(n.br,{}),"\n","\u2466 B \u5728A \u7ed3\u675f\u7684\u4f7f\u7528\u7ed3\u675f\u540e\u4e00\u6bb5\u65f6\u95f4 \u7533\u8bf7\u4e86 \u8d44\u6e90 \u201c\u6253\u5370\u673a\u201d \uff0c\u7ba1\u7406\u5458\u544a\u77e5B\u53ef\u4ee5\u4f7f\u7528\u4e86\u3002",(0,r.jsx)(n.br,{}),"\n","\u2467 C\u5728B \u4e3b\u52a8\u7ed3\u675f\u4f7f\u7528\u6253\u5370\u673a\u540e\uff0c\u901a\u8fc7\u5411\u7ba1\u7406\u5458\u7533\u8bf7 \u83b7\u5f97\u4e86\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u3002",(0,r.jsx)(n.br,{}),"\n","\u2468 C \u5f00\u59cb\u4f7f\u7528\u8d44\u6e90\u3002",(0,r.jsx)(n.br,{}),"\n","\u2469 C\u53d1\u73b0\u7b2c\u4e00\u6b21\u548c\u7ba1\u7406\u5458\u8bf4\u660e\u7684\u4f7f\u7528\u65f6\u95f4\u4e0d\u592a\u591f\uff0c\u9700\u8981\u66f4\u591a\u7684\u65f6\u95f4\uff0c\u4e8e\u662fC \u5728\u7533\u8bf7\u65f6\u95f4\u672a\u7ed3\u675f\u7684\u65f6\u5019\u5411\u7ba1\u7406\u5458\u518d\u6b21\u7533\u8bf7\u4e86\u8d44\u6e90,\u6b64\u65f6\u8d44\u6e90\u8fd8\u5728C\u54ea\u91cc\u88ab\u4f7f\u7528\uff0c\u7ba1\u7406\u5458\u540c\u610fC\u7684\u7eed\u79df\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u63a5\u53e3",children:"\u63a5\u53e3"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Lock(name,TimeOut,WaitTime)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4f5c\u7528\uff1a \u7533\u8bf7\u9501\u5b9a\u8d44\u6e90\uff0c\u4ec5\u80fd\u7533\u8bf7"}),"\n",(0,r.jsx)(n.li,{children:"\u53c2\u6570\u8bf4\u660e\uff1a"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u53c2\u6570"}),(0,r.jsx)(n.th,{children:"\u8303\u56f4"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"\u4e0d\u5305\u542b\u7a7a\u683c\u7684\u5b57\u7b26\u4e32"}),(0,r.jsx)(n.td,{children:"\u6682\u65f6\u672a\u8bbe\u7f6e\u957f\u5ea6\u4e0a\u9650\uff0c\u4f46\u662f\u5efa\u8bae\u4e0d\u8981\u8d85\u8fc7128\u5b57\u8282"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TimeOut"}),(0,r.jsx)(n.td,{children:"[10,10000]"}),(0,r.jsx)(n.td,{children:"\u7533\u8bf7\u72ec\u5360\u8d44\u6e90\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u6beb\u79d2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"WaitTime"}),(0,r.jsx)(n.td,{children:"[0,0x7FFFFFFF]"}),(0,r.jsx)(n.td,{children:"\u53ef\u9009\u53c2\u6570\uff0c\u7b49\u5f85\u7684\u8d85\u65f6\u65f6\u95f4\uff0c0\u4e3a\u4e0d\u7b49\u5f85\u7acb\u5373\u8fd4\u56de\uff0c\u5927\u4e8e0 \u4e3a\u7b49\u5f85\u7684\u6700\u5927\u65f6\u95f4\u3002 \u5185\u90e8\u4f7f\u7528u32\u7c7b\u578b\u3002"})]})]})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8fd4\u56de\u503c\u4ecb\u7ecd\uff1a"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u8303\u56f4"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"err"}),(0,r.jsx)(n.td,{children:"true/false"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u6210\u529f \uff0c\u6210\u529f\u4e3atrue ,\u5931\u8d25\u4e3afalse"})]})})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"UnLock(name)"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u51fd\u6570\u7684\u4f5c\u7528\uff1a \u4e3b\u52a8\u91ca\u653e\u8d44\u6e90\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u53c2\u6570\u7684\u4ecb\u7ecd\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"name: \u8981\u91ca\u653e\u7684\u8d44\u6e90\u7684\u540d\u5b57\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u8303\u56f4\uff0c\u5185\u5bb9\u4ee5\u53ca\u5efa\u8bae\u540c TimeOutLock"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"\u8fd4\u56de\u503c\u4ecb\u7ecd\uff1a"}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u8fd4\u56de\u503c"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"err"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u5220\u9664\u662f\u5426\u6709\u9519\u8bef\uff0ctrue\uff1a\u65e0\u9519\u8bef\uff0c false:\u6709\u9519\u8bef"})]})})]})]})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(x,{...e})}):x(e)}},77493:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/images/lock-2cacc8485fb9bac15ceed9156baf15ad.svg"},43327:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(22155);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);