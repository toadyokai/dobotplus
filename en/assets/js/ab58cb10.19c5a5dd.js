"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[7633],{20828:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var l=s(65723),i=s(43327);const r={},t="IO \u63a7\u5236\u6848\u4f8b",c={id:"tutorials/Examples/io",title:"IO \u63a7\u5236\u6848\u4f8b",description:"\u8be5\u6559\u7a0b\u4f1a\u5b9e\u73b0\u63a7\u5236\u5438\u76d8\u5438\u53d6\u548c\u91ca\u653e\u7684\u63d2\u4ef6\u3002",source:"@site/docs/tutorials/Examples/01-io.md",sourceDirName:"tutorials/Examples",slug:"/tutorials/Examples/io",permalink:"/dobotplus/en/tutorials/Examples/io",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorials",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/dobotplus/en/tutorials/quickstart"},next:{title:"\u4f7f\u7528\u5feb\u6377\u952e\u63a7\u5236\u8bbe\u5907 IO",permalink:"/dobotplus/en/tutorials/Examples/hotkey"}},d={},o=[{value:"\u521b\u5efa\u63d2\u4ef6",id:"\u521b\u5efa\u63d2\u4ef6",level:2},{value:"\u673a\u68b0\u81c2&amp;\u672b\u7aef\u63a7\u5236",id:"\u673a\u68b0\u81c2\u672b\u7aef\u63a7\u5236",level:2},{value:"\u63a7\u5236\u754c\u9762",id:"\u63a7\u5236\u754c\u9762",level:2},{value:"\u8c03\u8bd5\u548c\u9a8c\u8bc1",id:"\u8c03\u8bd5\u548c\u9a8c\u8bc1",level:2},{value:"\u6784\u5efa\u63d2\u4ef6",id:"\u6784\u5efa\u63d2\u4ef6",level:2},{value:"\u26a0\ufe0f \u6ce8\u610f\u4e8b\u9879",id:"\ufe0f-\u6ce8\u610f\u4e8b\u9879",level:2}];function a(n){const e={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.header,{children:(0,l.jsx)(e.h1,{id:"io-\u63a7\u5236\u6848\u4f8b",children:"IO \u63a7\u5236\u6848\u4f8b"})}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u8be5\u6559\u7a0b\u4f1a\u5b9e\u73b0\u63a7\u5236\u5438\u76d8\u5438\u53d6\u548c\u91ca\u653e\u7684\u63d2\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u8be5\u63d2\u4ef6\u7684\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,l.jsx)(e.mermaid,{value:"graph LR\nA[\u5438\u53d6\u6309\u94ae]--\x3e|\u70b9\u51fb|B(\u53d1\u9001\u5438\u53d6http\u8bf7\u6c42)--\x3e|\u63a7\u5236\u5668\u8c03\u53d6|C[httpApi\u6a21\u5757\u7684\u65b9\u6cd5]--\x3e|\u53c2\u6570\u5904\u7406\u3001\u5f15\u7528|D[control.lua \u6a21\u5757\u7684\u65b9\u6cd5]\nA1[\u91ca\u653e\u6309\u94ae]--\x3e|\u70b9\u51fb|B1(\u53d1\u9001\u5438\u53d6http\u8bf7\u6c42)--\x3e|\u63a7\u5236\u5668\u8c03\u53d6|C[httpApi\u6a21\u5757\u7684\u65b9\u6cd5]\nA2[\u811a\u672c\u7f16\u7a0b]--\x3e|\u6dfb\u52a0\u811a\u672c|B2(\u4fdd\u5b58\u811a\u672c)--\x3e|\u63a7\u5236\u5668\u6267\u884c\u811a\u672c|C1[userApi \u6a21\u5757 OnRegist \u4e2d\u6ce8\u518c\u7684\u65b9\u6cd5]--\u53c2\u6570\u5904\u7406\u3001\u5f15\u7528--\x3eD\nA3[\u79ef\u6728\u7f16\u7a0b]--\x3e|\u6dfb\u52a0\u79ef\u6728|B3(\u4fdd\u5b58\u79ef\u6728)--\x3e|\u63a7\u5236\u5668\u5c06\u79ef\u6728\u8f6c\u4e3a\u4ee3\u7801|C1[userApi \u6a21\u5757 OnRegist \u4e2d\u6ce8\u518c\u7684\u65b9\u6cd5]\nD --\x3e|Modbus \u534f\u8bae|E[\u672b\u7aef]"}),"\n",(0,l.jsx)(e.h2,{id:"\u521b\u5efa\u63d2\u4ef6",children:"\u521b\u5efa\u63d2\u4ef6"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"# \u9700\u8981\u4f7f\u7528 node v20 \u53ca\u4ee5\u4e0a\u7248\u672c\ndpt create\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u65f6\uff0c\u9700\u8981\u63d0\u4f9b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u63d2\u4ef6\u7684\u540d\u5b57\uff0c\u5fc5\u586b\uff0c\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u4e0d\u5f97\u6709\u540c\u540d\u6587\u4ef6\u5939"}),"\n",(0,l.jsx)(e.li,{children:"\u63d2\u4ef6\u7684\u63cf\u8ff0\uff0c\u975e\u5fc5\u586b\uff0c\u53ef\u4ee5\u540e\u7eed\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u8fdb\u884c\u4fee\u6539"}),"\n",(0,l.jsxs)(e.li,{children:["\u63d2\u4ef6\u7684\u7248\u672c\u53f7\uff0c\u9ed8\u8ba4\u662f ",(0,l.jsx)(e.code,{children:"1-0-0-test"})]}),"\n",(0,l.jsxs)(e.li,{children:["\u673a\u68b0\u81c2\u63a7\u5236\u5668\u7684IP\u5730\u5740\uff0c\u9ed8\u8ba4\u662f ",(0,l.jsx)(e.code,{children:"192.168.5.1"}),"\uff0c\u53ef\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u4fee\u6539"]}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ dpt create\n? Please input plugin name: io\n? Please input plugin description: A plugin demo for io control\n? Please input plugin version: 1-0-0\n? Please input device IP: 192.168.5.1\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5b8c\u6210\u57fa\u7840\u4fe1\u606f\u7684\u914d\u7f6e\u548c\u586b\u5199\u540e\uff0c\u7a0b\u5e8f\u4f1a\u81ea\u52a8\u6267\u884c\u5b89\u88c5\u7a0b\u5e8f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"Packages: +587\nDownloading antd@5.20.3: 9.80 MB/9.80 MB, done\nProgress: resolved 588, reused 582, downloaded 5, added 587, done\n\ndependencies:\n+ @dobot-plus/components 0.0.0\n+ antd 5.20.3\n+ axios 1.7.5\n+ i18next 23.14.0\n+ pubsub-js 1.9.4\n+ react 18.3.1\n+ react-dom 18.3.1\n+ react-i18next 15.0.1\n+ react-redux 9.1.2\n+ redux 5.0.1\n\ndevDependencies:\n+ @types/node 20.16.1 (22.5.0 is available)\n+ @types/pubsub-js 1.8.6\n+ @types/react 18.3.4\n+ @types/react-dom 18.3.0\n+ @types/react-redux 7.1.33\n+ @typescript-eslint/eslint-plugin 7.18.0 (8.3.0 is available)\n+ @typescript-eslint/parser 7.18.0 (8.3.0 is available)\n+ add 2.0.6\n+ css-loader 7.1.2\n+ eslint 8.57.0 (9.9.1 is available)\n+ eslint-plugin-react-hooks 4.6.2\n+ eslint-plugin-react-refresh 0.4.11\n+ postcss-loader 8.1.1\n+ sass 1.77.8\n+ sass-loader 16.0.1\n+ style-loader 4.0.0\n+ ts-loader 9.5.1\n+ typescript 5.5.4\n+ url-loader 4.1.1\n+ webpack 5.94.0\n\nDone in 39.7s\n\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u26a0\ufe0f\u6ce8\u610f\uff1a \u5728\u63d2\u4ef6\u6587\u4ef6\u5939\u521d\u59cb\u5316\u5b8c\u6210\u540e\uff0cvscode \u4f1a\u6839\u636e\u914d\u7f6e\u8fdb\u884c\u4e00\u4e9b\u63d2\u4ef6\u7684\u5b89\u88c5\uff0c\u8bf7\u5141\u8bb8\u8be5\u5b89\u88c5\u8fc7\u7a0b\uff0c\u5e76\u786e\u4fdd\u8be5\u8fc7\u7a0b\u987a\u5229\uff0c\u5426\u5219\u4f1a\u5f71\u54cd\u540e\u7eed\u7684Lua\u811a\u672c\u8c03\u8bd5\u3002"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u547d\u4ee4\u884c\u8f93\u51fa\u7c7b\u4f3c\u4e0a\u9762\u7684\u5185\u5bb9\u540e\uff0c\u8868\u793a\u4e00\u4e2a\u63d2\u4ef6\u9879\u76ee\u7684\u6587\u4ef6\u5939\u5df2\u7ecf\u521b\u5efa\u5b8c\u6bd5\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"io\n\u251c\u2500\u2500 Resources\n\u2502   \u251c\u2500\u2500 document\n\u2502   \u2502   \u2514\u2500\u2500 config.json\n\u2502   \u251c\u2500\u2500 i18n\n\u2502   \u2502   \u251c\u2500\u2500 client\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 de.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 en.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 es.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 hk.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ja.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ko.json\n\u2502   \u2502   \u2502   \u251c\u2500\u2500 ru.json\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 zh.json\n\u2502   \u2502   \u2514\u2500\u2500 plugin\n\u2502   \u2502       \u251c\u2500\u2500 de.json\n\u2502   \u2502       \u251c\u2500\u2500 en.json\n\u2502   \u2502       \u251c\u2500\u2500 es.json\n\u2502   \u2502       \u251c\u2500\u2500 hk.json\n\u2502   \u2502       \u251c\u2500\u2500 ja.json\n\u2502   \u2502       \u251c\u2500\u2500 ko.json\n\u2502   \u2502       \u251c\u2500\u2500 ru.json\n\u2502   \u2502       \u2514\u2500\u2500 zh.json\n\u2502   \u2514\u2500\u2500 images\n\u2502       \u2514\u2500\u2500 pallet.svg\n\u251c\u2500\u2500 configs\n\u2502   \u251c\u2500\u2500 Blocks.json\n\u2502   \u251c\u2500\u2500 Main.json\n\u2502   \u251c\u2500\u2500 Scripts.json\n\u2502   \u2514\u2500\u2500 Toolbar.json\n\u251c\u2500\u2500 dpt.json\n\u251c\u2500\u2500 lua\n\u2502   \u251c\u2500\u2500 daemon.lua\n\u2502   \u251c\u2500\u2500 control.lua\n\u2502   \u251c\u2500\u2500 httpAPI.lua\n\u2502   \u251c\u2500\u2500 userAPI.lua\n\u2502   \u2514\u2500\u2500 utils\n\u2502       \u251c\u2500\u2500 await485.lua\n\u2502       \u251c\u2500\u2500 mqtt.lua\n\u2502       \u251c\u2500\u2500 num_convert.lua\n\u2502       \u251c\u2500\u2500 util.lua\n\u2502       \u2514\u2500\u2500 variables.lua\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 ui\n    \u251c\u2500\u2500 Blocks.tsx\n    \u251c\u2500\u2500 Main.tsx\n    \u2514\u2500\u2500 Toolbar.tsx\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u673a\u68b0\u81c2\u672b\u7aef\u63a7\u5236",children:"\u673a\u68b0\u81c2&\u672b\u7aef\u63a7\u5236"}),"\n",(0,l.jsxs)(e.p,{children:["\u673a\u68b0\u81c2\u548c\u672b\u7aef\u7684\u63a7\u5236\u903b\u8f91\u4e3b\u8981\u5728 ",(0,l.jsx)(e.code,{children:"control.lua"})," \u6587\u4ef6\u4e2d\u8fdb\u884c\u7f16\u5199\u3002\n\u9488\u5bf9\u8be5\u63d2\u4ef6\u7684\u573a\u666f\uff0c\u5b9e\u9645\u9700\u8981\u5bf9\u5916\u63d0\u4f9b\u4e09\u4e2a\u51fd\u6570\uff1a"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5438\u53d6\u51fd\u6570"}),"\n",(0,l.jsx)(e.li,{children:"\u91ca\u653e\u51fd\u6570"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u9488\u5bf9\u8fd9\u4e09\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u9700\u8981\u4f9d\u6b21\u7f16\u5199 ",(0,l.jsx)(e.code,{children:"control.lua"}),"\u3001",(0,l.jsx)(e.code,{children:"httpApi.lua"}),"\u548c\u5bf9\u5e94\u7684 UI \u6587\u4ef6\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u7f16\u8f91 ",(0,l.jsx)(e.code,{children:"control.lua"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:"local control = {}\n-- \u5b9a\u4e49\u51fd\u6570grip\u7528\u4e8e\u63a7\u5236\u5438\u53d6\u64cd\u4f5c\nfunction control.grip()\n    -- \u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7aef\u5b50\u7684\u8f93\u5165\u4fe1\u53f7\u4e3a ON\n    ToolDO(1, 1)\nend\n\n-- \u5b9a\u4e49\u51fd\u6570release\u7528\u4e8e\u91ca\u653e\u64cd\u4f5c\nfunction control.release()\n    -- \u8bbe\u7f6e\u7b2c\u4e00\u4e2a\u7aef\u5b50\u7684\u8f93\u5165\u4fe1\u53f7\u4e3a OFF\n    ToolDO(1, 0)\nend\n\nreturn control\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u9f20\u6807\u60ac\u505c\u5230\u51fd\u6570\u4e0a\u65f6\uff0c\u4f1a\u51fa\u73b0\u51fd\u6570\u7684\u8bf4\u660e\u3001\u53c2\u6570\u7c7b\u578b\u548c\u8fd4\u56de\u503c"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:s(50752).A+"",width:"1920",height:"1080"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u7f16\u5199 ",(0,l.jsx)(e.code,{children:"httpAPI.lua"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-lua",children:"local control = require('control')\nlocal httpModule = {}\n\n-- \u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a grip \u7684 http post \u8bf7\u6c42\u7684\u5904\u7406\u51fd\u6570\n httpModule.grip = function()\n   control.grip()    \n    return {\n        success = true\n    }\nend\n\n-- \u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a release \u7684 http post \u8bf7\u6c42\u7684\u5904\u7406\u51fd\u6570\n httpModule.release = function()\n   control.release() \n    return {\n        success = true\n    }\nend\n\nreturn httpModule\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Lua \u9884\u8c03\u8bd5"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u5728\u5f53\u524d\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c ",(0,l.jsx)(e.code,{children:"dpt lua"})]}),"\n",(0,l.jsx)(e.li,{children:"\u6839\u636e\u63d0\u793a\u9009\u62e9\u8981\u5728\u672c\u5730\u6267\u884c\u7684 lua \u811a\u672c"}),"\n",(0,l.jsx)(e.li,{children:"\u5f00\u53d1\u8005\u53ef\u81ea\u884c\u6253\u5370\u65e5\u5fd7\uff0c\u67e5\u770b\u8c03\u8bd5\u7684 lua \u811a\u672c\u7684\u6a21\u5757\u5f15\u5165\u3001\u8bed\u6cd5\u3001\u903b\u8f91\u7b49\u662f\u5426\u5b58\u5728\u95ee\u9898"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u63a7\u5236\u754c\u9762",children:"\u63a7\u5236\u754c\u9762"}),"\n",(0,l.jsxs)(e.p,{children:["\u7f16\u5199\u63d2\u4ef6\u7684\u63a7\u5236\u754c\u9762 ",(0,l.jsx)(e.code,{children:"ui/Main.tsx"})]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-jsx",children:"import { Button } from '@dobot-plus/components'\nimport { useTranslation } from 'react-i18next'\nimport { http, DobotPlusApp } from '@dobot/index'\n\nfunction App() {\n    const { t } = useTranslation()\n\n    function handleButton1Click() { http.grip() }\n\n    function handleButton2Click() { http.release() }\n\n    return (\n        <div className=\"app\">\n            <DobotPlusApp>\n                <h1>{t('testKey')}</h1>\n                <Button type=\"primary\" onClick={handleButton1Click}>Grip</Button>\n                <Button type=\"primary\" onClick={handleButton2Click}>Release</Button>\n            </DobotPlusApp>\n        </div>)\n}\n\nexport default App\n\n"})}),"\n",(0,l.jsx)(e.h2,{id:"\u8c03\u8bd5\u548c\u9a8c\u8bc1",children:"\u8c03\u8bd5\u548c\u9a8c\u8bc1"}),"\n",(0,l.jsx)(e.p,{children:"\u8c03\u8bd5\u63d2\u4ef6\u6307\u4ee4\u53ef\u8fdb\u884c\u4ee5\u4e0b\u4e24\u79cd\u60c5\u5f62\u7684\u5f00\u53d1\u5de5\u4f5c\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4ec5\u8c03\u8bd5\u9875\u9762"}),"\n",(0,l.jsx)(e.li,{children:"\u8fde\u63a5\u771f\u673a\u8fdb\u884c\u8c03\u8bd5"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt dev\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6267\u884c\u4e0a\u8ff0\u547d\u4ee4\u65f6\uff0c\u547d\u4ee4\u884c\u4f1a\u63d0\u793a\u5f00\u53d1\u8005\u662f\u5426\u8fde\u63a5\u771f\u673a\u8fdb\u884c\u6d4b\u8bd5"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"$ dpt dev\n? Debug lua on real device? Yes\n? Please check the device IP: 192.168.5.1 (y/n)\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u53d1\u8005\u9700\u8981\u786e\u5b9a\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\u63a7\u5236\u5668\u7684\u771f\u5b9eIP\u662f\u5426\u6b63\u786e\uff0c\u9ed8\u8ba4\u662f ",(0,l.jsx)(e.code,{children:"192.168.5.1"})]}),"\n",(0,l.jsx)(e.li,{children:"SFTP \u670d\u52a1\u76f8\u5173\u914d\u7f6e\u662f\u5426\u6b63\u786e"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e0a\u8ff0\u914d\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\u8bf7\u67e5\u770b ",(0,l.jsx)(e.code,{children:"dpt.json"})," \u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n  "ip": "192.168.5.1",                              // \u63a7\u5236\u5668 IP\n  "pluginPort": 22100                               // \u63d2\u4ef6\u7aef\u53e3\u53f7\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u8fde\u63a5\u771f\u673a\u8fdb\u884c\u8c03\u8bd5\u65f6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u63d2\u4ef6\u8fde\u63a5\u4e0a\u63a7\u5236\u5668\u3001\u5e76\u81ea\u52a8\u5b89\u88c5\u6210\u529f\u540e\uff0c\u4f1a\u81ea\u52a8\u66f4\u65b0\u63d2\u4ef6\u7aef\u53e3\u53f7"}),"\n",(0,l.jsx)(e.li,{children:"\u4fdd\u5b58lua\u6587\u4ef6\u4f1a\u81ea\u52a8\u540c\u6b65\u81f3\u63a7\u5236\u5668\uff0c\u5f00\u53d1\u8005\u53ef\u5728\u6d4f\u89c8\u5668\u7684\u754c\u9762\u4ea4\u4e92\u4e2d\u5bf9\u673a\u68b0\u8868\u672b\u7aef\u8fdb\u884c\u63a7\u5236\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u6784\u5efa\u63d2\u4ef6",children:"\u6784\u5efa\u63d2\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5b8c\u6210\u63d2\u4ef6\u7684\u5f00\u53d1\u3001\u8c03\u8bd5\u3001\u4f18\u5316\u540e\uff0c\u53ef\u6267\u884c\u6700\u7ec8\u7684\u6784\u5efa\u5de5\u4f5c\uff0c\u6267\u884c"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"dpt build\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u7a0b\u5e8f\u987a\u5229\u6267\u884c\u5b8c\u6bd5\u540e\uff0c\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u4f1a\u51fa\u73b0 ",(0,l.jsx)(e.code,{children:"dist"})," \u6587\u4ef6\u5939\u548c ",(0,l.jsx)(e.code,{children:"output"})," \u6587\u4ef6\u5939\u3002"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"dist"})," \u6587\u4ef6\u5939\u4e2d\u5b58\u653e\u7740\u672c\u6b21\u6784\u5efa\u540e\u7684\u63d2\u4ef6\u4ee3\u7801\uff0c\u7528\u4e8e\u5f00\u53d1\u8005\u68c0\u67e5\u6784\u5efa\u7ed3\u679c"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"output"})," \u6587\u4ef6\u5939\u5b58\u653e\u7740\u538b\u7f29\u540e\u7684 ",(0,l.jsx)(e.code,{children:"zip"})," \u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u683c\u5f0f\u4e3a ",(0,l.jsx)(e.code,{children:"<\u63d2\u4ef6\u540d>-<\u7248\u672c\u53f7>.zip"}),"\uff0c\u8be5\u6587\u4ef6\u4e3a\u5b9e\u9645\u5728\u5ba2\u6237\u7aef\u5bfc\u5165\u4f7f\u7528\u7684\u7684\u63d2\u4ef6\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\ufe0f-\u6ce8\u610f\u4e8b\u9879",children:"\u26a0\ufe0f \u6ce8\u610f\u4e8b\u9879"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u63d2\u4ef6\u5de5\u7a0b\u4f1a\u6839\u636e\u5f00\u53d1\u8005\u5728 ",(0,l.jsx)(e.code,{children:"lua/httpAPI.lua"})," \u6a21\u5757\u4e2d\u7f16\u5199\u7684\u65b9\u6cd5\uff0c\u81ea\u52a8\u7684\u751f\u6210\u4e00\u4e2a\u524d\u7aef\u8bf7\u6c42\u6587\u4ef6\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f\u5f15\u5165\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"import { http } from '@dobot/index'\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5f15\u5165\u5b8c\u6bd5\u540e\uff0c\u4f7f\u7528 ",(0,l.jsx)(e.code,{children:"lua/httpAPI.lua"})," \u540c\u540d\u51fd\u6570\u7684\u5f62\u5f0f\u5c31\u53ef\u4ee5\u53d1\u8d77 http \u8bf7\u6c42\u3002"]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"\u793a\u4f8b"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728 ",(0,l.jsx)(e.code,{children:"UI"})," \u6587\u4ef6\u5939\u4e0b\u7684 ",(0,l.jsx)(e.code,{children:"ts"}),"\uff0c",(0,l.jsx)(e.code,{children:"tsx"})," \u6587\u4ef6\u4e2d"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"\n// \u53d1\u8d77 http \u8bf7\u6c42\uff0c\u63a7\u5236\u5668\u6536\u5230\u8bf7\u6c42\u540e\u8c03\u7528 httpAPI.lua \u4e2d\u7684 grip \u51fd\u6570\nhttp.grip()\n\n// \u53d1\u8d77 http \u8bf7\u6c42\uff0c\u63a7\u5236\u5668\u6536\u5230\u8bf7\u6c42\u540e\u8c03\u7528 httpAPI.lua \u4e2d\u7684 release \u51fd\u6570\nhttp.release()\n"})}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u63d2\u4ef6\u4f1a\u6839\u636e ",(0,l.jsx)(e.code,{children:"lua/httpAPI.lua"})," \u81ea\u52a8\u751f\u6210\u754c\u9762\u9700\u8981\u7684 http \u914d\u7f6e\u6587\u4ef6\uff0c\u5f00\u53d1\u8005\u4f7f\u7528\u540c\u540d\u51fd\u6570\u5373\u53ef\u8c03\u7528\u3002\u5982\u679c\u7528\u6237\u60f3\u81ea\u884c\u7f16\u5199\u8bf7\u6c42\u914d\u7f6e\uff0c\u53ef\u7f16\u5199 ",(0,l.jsx)(e.code,{children:".dobot/http/api.json"})," \u6587\u4ef6\uff0c\u76ee\u524d\u8bf7\u6c42\u4ec5\u652f\u6301 post \u65b9\u6cd5\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'{\n    "requestGrip": {\n        "url": "grip"\n    },\n    "requestRelease": {\n        "url": "release"\n    }\n}\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u8c03\u7528\u65f6\uff0c\u4f7f\u7528\u5982\u4e0b\u65b9\u5f0f"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-javascript",children:"import { http } from '@dobot/index'\n\nhttp.requestGrip()\n\nhttp.requestRelease()\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u8bf7\u6c42\u53c2\u6570\u4e2dURL\u90e8\u5206\u9700\u8981\u548c ",(0,l.jsx)(e.code,{children:"httpAPI.lua"})," \u6a21\u5757\u4e2d\u7684\u51fd\u6570\u540d\u79f0\u5bf9\u5e94\uff0c\u8868\u793a\u63a7\u5236\u5668\u9700\u8981\u8c03\u7528\u7684\u662f ",(0,l.jsx)(e.code,{children:"httpAPI.lua"})," \u6a21\u5757\u4e2d\u5bf9\u5e94\u7684\u65b9\u6cd5"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"DobotPlusApp"})," \u662f\u4e00\u4e2a react \u7684\u9ad8\u9636\u7ec4\u4ef6\uff0c\u5185\u90e8\u6267\u884c\u4e86 Websocket \u7684\u5efa\u7acb\u548c\u63d2\u4ef6\u7aef\u53e3\u7684\u83b7\u53d6\u64cd\u4f5c"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"useMqtt\uff1a\u662f\u5426\u4f7f\u7528 mqtt \u534f\u8bae\u63a5\u6536\u63a7\u5236\u5668\u53d1\u9001\u7684\u6d88\u606f\uff0c\u9ed8\u8ba4\u4e3a false"}),"\n",(0,l.jsx)(e.li,{children:"onMessage\uff1a\u5728\u4f7f\u7528 mqtt \u534f\u8bae\u63a5\u6536\u63a7\u5236\u5668\u7684\u6d88\u606f\u65f6\uff0c\u5904\u7406\u6d88\u606f\u7684\u65b9\u6cd5"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5728\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\uff0c",(0,l.jsx)(e.code,{children:"ui"})," \u8def\u5f84\u4e0b\u7684\u7b2c\u4e00\u5c42\u7684 ",(0,l.jsx)(e.code,{children:".tsx"})," \u6587\u4ef6\u4f1a\u88ab\u6784\u5efa\u6210\u5bf9\u5e94\u7684\u9875\u9762"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Main.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u4e3b\u9875\u9762"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Toolbar.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u5bfc\u822a\u680f\u680f"]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"Blocks.tsx"})," \u5bf9\u5e94\u63d2\u4ef6\u7684\u79ef\u6728\u5f39\u7a97\u9875\u9762"]}),"\n",(0,l.jsxs)(e.li,{children:["\u5176\u4ed6\u4e00\u7ea7\u81ea\u5b9a\u4e49\u9875\u9762\u4e5f\u4f1a\u8fdb\u884c\u540c\u7c7b\u578b\u6784\u5efa\uff0c\u6240\u4ee5\u8bf7\u5f00\u53d1\u8005\u6ce8\u610f ",(0,l.jsx)(e.code,{children:"ui"})," \u6587\u4ef6\u5939\u4e0b\u4e00\u7ea7\u76ee\u5f55\u4e2d ",(0,l.jsx)(e.code,{children:".tsx"})," \u6587\u4ef6\u7684\u547d\u540d"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(a,{...n})}):a(n)}},50752:(n,e,s)=>{s.d(e,{A:()=>l});const l=s.p+"assets/images/code-tip-69e099b658b06fda6897425b9e494a96.png"},43327:(n,e,s)=>{s.d(e,{R:()=>t,x:()=>c});var l=s(22155);const i={},r=l.createContext(i);function t(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);