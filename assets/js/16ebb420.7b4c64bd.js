"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[7871],{25413:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var l=r(65723),t=r(43327);const i={},d="\u6d41\u7a0b\u63a7\u5236",a={id:"lua/flow",title:"\u6d41\u7a0b\u63a7\u5236",description:"|\u6307\u4ee4\u7b26\u53f7\t|\u8bf4\u660e|",source:"@site/docs/lua/03-flow.md",sourceDirName:"lua",slug:"/lua/flow",permalink:"/dobotplus/lua/flow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"lua",previous:{title:"\u8fd0\u7b97\u7b26",permalink:"/dobotplus/lua/operator"},next:{title:"Modbus",permalink:"/dobotplus/lua/modbus"}},s={},c=[{value:"if\u6761\u4ef6\u5224\u65ad\u6307\u4ee4",id:"if\u6761\u4ef6\u5224\u65ad\u6307\u4ee4",level:2},{value:"while\u5faa\u73af\u63a7\u5236\u6307\u4ee4",id:"while\u5faa\u73af\u63a7\u5236\u6307\u4ee4",level:2},{value:"for\u5faa\u73af\u63a7\u5236\u6307\u4ee4",id:"for\u5faa\u73af\u63a7\u5236\u6307\u4ee4",level:2},{value:"repeat\u5faa\u73af\u63a7\u5236\u6307\u4ee4",id:"repeat\u5faa\u73af\u63a7\u5236\u6307\u4ee4",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",mermaid:"mermaid",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"\u6d41\u7a0b\u63a7\u5236",children:"\u6d41\u7a0b\u63a7\u5236"})}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u6307\u4ee4\u7b26\u53f7"}),(0,l.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"if\u2026then\u2026else\u2026end"}),(0,l.jsx)(n.td,{children:"if\u6761\u4ef6\u5224\u65ad\u6307\u4ee4\u3002\u4ece\u4e0a\u5230\u4e0b\u4f9d\u6b21\u5224\u65ad\u6761\u4ef6\u662f\u5426\u6210\u7acb\uff0c\u5982\u679c\u67d0\u4e2a\u5224\u65ad\u4e3atrue\uff0c\u6267\u884c\u5b8c\u5bf9\u5e94\u7684\u4ee3\u7801\u5757\uff0c\u540e\u9762\u7684\u6761\u4ef6\u5224\u65ad\u76f4\u63a5\u5ffd\u7565\uff0c\u4e0d\u518d\u6267\u884c"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"while\u2026do\u2026end"}),(0,l.jsx)(n.td,{children:"while\u5faa\u73af\u63a7\u5236\u6307\u4ee4\u3002\u5728\u6761\u4ef6\u4e3a true \u65f6\uff0c\u8ba9\u7a0b\u5e8f\u91cd\u590d\u5730\u6267\u884c\u67d0\u4e9b\u8bed\u53e5\u3002\u6267\u884c\u8bed"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"for\u2026do\u2026end"}),(0,l.jsx)(n.td,{children:"for\u5faa\u73af\u63a7\u5236\u6307\u4ee4\uff0c\u91cd\u590d\u6267\u884c\u6307\u5b9a\u8bed\u53e5\uff0c\u91cd\u590d\u6b21\u6570\u53ef\u5728 for \u8bed\u53e5\u4e2d\u63a7\u5236"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"repeat\u2026 until()"}),(0,l.jsx)(n.td,{children:"repeat\u5faa\u73af\u63a7\u5236\u6307\u4ee4\u3002\u91cd\u590d\u6267\u884c\u5faa\u73af\uff0c\u76f4\u5230 \u6307\u5b9a\u7684\u6761\u4ef6\u4e3a\u771f\u65f6\u4e3a\u6b62"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"\u793a\u4f8b\uff1a"}),(0,l.jsx)(n.td,{})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"if\u6761\u4ef6\u5224\u65ad\u6307\u4ee4",children:"if\u6761\u4ef6\u5224\u65ad\u6307\u4ee4"}),"\n",(0,l.jsx)(n.p,{children:"if\u540e\u7684\u62ec\u53f7\u5185\u4e3a\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u8868\u8fbe\u5f0f\u7684\u7ed3\u679c\u53ef\u4ee5\u662f\u4efb\u4f55\u503c\uff0cLua \u628a false \u548c nil \u770b\u4f5c\u662f\u5047\uff0c\u5176\u4ed6\u7684\u90fd\u4e3a\u771f\uff0c\u6570\u5b57 0 \u4e5f\u662f\u771f\u3002\u8868\u8fbe\u5f0f\u4e3a\u771f\u65f6\uff0c\u6267\u884cthen\u8bed\u53e5\u5757\uff1b\u8868\u8fbe\u5f0f\u4e3a\u5047\u65f6\uff0c\u5982\u679c\u6709else\u8bed\u53e5\u5757\uff0c\u6267\u884celse\u8bed\u53e5\u5757\uff0c\u5426\u5219\u76f4\u63a5\u6267\u884cend\u4e4b\u540e\u7684\u8bed\u53e5\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD;\n    A(\u5f00\u59cb)--\x3eB{if\u6761\u4ef6}--\u6761\u4ef6\u4e3a\u771f--\x3eC[then\u8bed\u53e5\u5757]--\x3eD(\u7ed3\u675f);\n    B--\u6761\u4ef6\u4e3a\u5047--\x3eE[else\u8bed\u53e5\u5757]--\x3eD"}),"\n",(0,l.jsx)(n.p,{children:"if\u8bed\u53e5\u53ef\u5d4c\u5957\u4f7f\u7528\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u5178\u578b\u793a\u4f8b\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'a = 100;\nb = 200;\n--[ \u68c0\u67e5\u6761\u4ef6 --]\nif(a == 100)\nthen\n    --[if\u6761\u4ef6\u4e3atrue\u65f6\u6267\u884c\u4ee5\u4e0bif\u6761\u4ef6\u5224\u65ad--]\n    if(b == 200)\n    then\n        --[if\u6761\u4ef6\u4e3atrue\u65f6\u6267\u884c\u8be5\u8bed\u53e5\u5757--]\n        print("a \u7684\u503c\u4e3a:", a )  -- a \u7684\u503c\u4e3a:100\n        print("b \u7684\u503c\u4e3a:", b )  -- b \u7684\u503c\u4e3a:200\n    end\nelse\n    --[\u7b2c\u4e00\u4e2aif\u6761\u4ef6\u4e3afalse\u65f6\u6267\u884c\u4ee5\u4e0b\u8bed\u53e5\u5757--]\n    print("a\u4e0d\u7b49\u4e8e100")\nend\n'})}),"\n",(0,l.jsx)(n.h2,{id:"while\u5faa\u73af\u63a7\u5236\u6307\u4ee4",children:"while\u5faa\u73af\u63a7\u5236\u6307\u4ee4"}),"\n",(0,l.jsx)(n.p,{children:"while\u540e\u7684\u62ec\u53f7\u5185\u4e3a\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u4e3a\u771f\u65f6\u6267\u884cdo\u8bed\u53e5\u5757\uff0c\u7136\u540e\u91cd\u65b0\u5224\u65ad\u6761\u4ef6\uff1b\u4e3a\u5047\u65f6\u76f4\u63a5\u6267\u884cend\u4e4b\u540e\u7684\u8bed\u53e5\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TB\nA(\u5f00\u59cb) --\x3e B{while\u6761\u4ef6} --\u6761\u4ef6\u4e3a\u771f--\x3e C[do\u4ee3\u7801\u5757] --\x3e B\nB --\u6761\u4ef6\u4e3a\u5047--\x3e D(\u7ed3\u675f)"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'a=10\nwhile( a < 20 )\ndo\n    print("a \u7684\u503c\u4e3a:", a)  -- \u6267\u884c10\u6b21\uff0c\u8f93\u51fa\u503c\u4e3a10\u523019\n    a = a+1\nend\n'})}),"\n",(0,l.jsx)(n.h2,{id:"for\u5faa\u73af\u63a7\u5236\u6307\u4ee4",children:"for\u5faa\u73af\u63a7\u5236\u6307\u4ee4"}),"\n",(0,l.jsx)(n.p,{children:"for\u5faa\u73af\u7684\u8bed\u6cd5\u683c\u5f0f\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"for var=exp1,exp2,exp3 do  \n    <\u6267\u884c\u4f53>  \nend\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53d8\u91cfvar\u7684\u8d77\u59cb\u503c\u4e3aexp1\uff0c\u6bcf\u6b21\u6267\u884c\u4e00\u6b21<\u6267\u884c\u4f53>\u540evar\u9012\u589eexp3\uff08exp3\u7684\u503c\u53ef\u4ee5\u4e3a\u8d1f\uff0c\u4e5f\u53ef\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u503c\u4e3a1\uff09\uff0c\u76f4\u81f3var\u5927\u4e8eexp2\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD\n    A(\u5f00\u59cb) --\x3e B{var <= exp2}\n    B -- \u6761\u4ef6\u4e3a\u771f --\x3e C[\u6267\u884c\u4f53]\n    C --\x3e D[var = var + exp3]\n    D --\x3e B\n    B -- \u6761\u4ef6\u4e3a\u5047 --\x3e E(\u7ed3\u675f)"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"for i=10,1,-1 do\n    print(i) -- \u6267\u884c10\u6b21\uff0c\u8f93\u51fa\u503c\u4e3a10\u52301\nend\n"})}),"\n",(0,l.jsx)(n.h2,{id:"repeat\u5faa\u73af\u63a7\u5236\u6307\u4ee4",children:"repeat\u5faa\u73af\u63a7\u5236\u6307\u4ee4"}),"\n",(0,l.jsx)(n.p,{children:"repeat\u5faa\u73af\u4e0ewhile\u5faa\u73af\u7c7b\u4f3c\uff0c\u4e3b\u8981\u533a\u522b\u5728\u4e8ewhile\u662f\u6267\u884c\u8981\u5faa\u73af\u7684\u8bed\u53e5\u524d\u5148\u5224\u65ad\u6761\u4ef6\uff0c\u6761\u4ef6\u4e3a\u771f\u65f6\u8fdb\u884c\u5faa\u73af\uff1brepeat\u662f\u5728\u6267\u884c\u5b8c\u8981\u5faa\u73af\u7684\u8bed\u53e5\u540e\u518d\u5224\u65ad\u6761\u4ef6\uff0c\u6761\u4ef6\u4e3a\u5047\u65f6\u8fdb\u884c\u5faa\u73af\u3002"}),"\n",(0,l.jsx)(n.mermaid,{value:"graph TD\n  A(\u5f00\u59cb) --\x3e B[repeat\u8bed\u53e5\u5757]\n  B --\x3e C{until \u6761\u4ef6}\n  C --\u6761\u4ef6\u4e3a\u771f--\x3e D(\u7ed3\u675f)\n  C --\u6761\u4ef6\u4e3a\u5047--\x3eB"}),"\n",(0,l.jsx)(n.p,{children:"\u793a\u4f8b\uff1a"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'a = 10\nrepeat\n    print("a\u7684\u503c\u4e3a:", a) -- \u6267\u884c5\u6b21\uff0c\u8f93\u51fa\u503c\u4e3a10\u523015\n    a = a + 1\nuntil(a > 15)\n'})})]})}function o(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},43327:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>a});var l=r(22155);const t={},i=l.createContext(t);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);