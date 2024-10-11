"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[4045],{20621:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>k,contentTitle:()=>v,default:()=>B,frontMatter:()=>A,metadata:()=>g,toc:()=>b});var t=o(65723),r=o(43327),s=o(8047);const c="message_fVdJ",a="success_OUjt",i="error_nnjv",l="warning_SxQY",d=n=>{s.Ay.open({type:"success",content:n,className:`${c} ${a}`})},u=n=>{s.Ay.open({type:"error",content:n,className:`${c} ${i}`})},m=n=>{s.Ay.open({type:"info",content:n,className:`${c}`})},p=n=>{s.Ay.open({type:"warning",content:n,className:`${c} ${l}`})};var h=o(87118);function f(){return(0,t.jsx)("div",{className:"demo-container",children:(0,t.jsxs)("div",{className:"demo-row",children:[(0,t.jsx)(h.A,{onClick:()=>u("Error"),"data-color":"error",children:"Error"}),(0,t.jsx)(h.A,{onClick:()=>d("Success"),"data-color":"success",children:"Success"}),(0,t.jsx)(h.A,{onClick:()=>p("Warning"),"data-color":"warning",children:"Warning"}),(0,t.jsx)(h.A,{onClick:()=>m("Info"),"data-color":"info",children:"Info"})]})})}const x="import { error, success, warning, info } from './'\nimport Button from '../button'\n\nexport default function AlertDemo() {\n  return (\n    <div className=\"demo-container\">\n      <div className=\"demo-row\">\n        <Button onClick={() => error('Error')} data-color=\"error\">\n          Error\n        </Button>\n        <Button onClick={() => success('Success')} data-color=\"success\">\n          Success\n        </Button>\n        <Button onClick={() => warning('Warning')} data-color=\"warning\">\n          Warning\n        </Button>\n        <Button onClick={() => info('Info')} data-color=\"info\">\n          Info\n        </Button>\n      </div>\n    </div>\n  )\n}\n";var j=o(1837);const A={},v="Alert",g={id:"components/Alert",title:"Alert",description:"\u793a\u4f8b",source:"@site/docs/components/Alert.mdx",sourceDirName:"components",slug:"/components/Alert",permalink:"/dobotplus/components/Alert",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",next:{title:"Button",permalink:"/dobotplus/components/Button"}},k={},b=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2}];function w(n){const e={h1:"h1",h2:"h2",header:"header",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"alert",children:"Alert"})}),"\n",(0,t.jsx)(e.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,t.jsx)(f,{}),"\n",(0,t.jsx)(e.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,t.jsx)(j.A,{language:"jsx",children:x})]})}function B(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(w,{...n})}):w(n)}},87118:(n,e,o)=>{o.d(e,{A:()=>c});var t=o(14037);const r={button:"button_vK6i"};var s=o(65723);function c(n){return(0,s.jsx)(t.Ay,{...n,className:r.button,children:n?.children})}}}]);