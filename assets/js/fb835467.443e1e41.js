"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[6058],{3706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>x,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>h});var i=s(5723),l=s(3327),t=s(774);const r={slider:"slider_wiCn"};function a(e){return(0,i.jsx)(t.A,{className:r.slider,...e})}function d(){const e={0:{style:{marginTop:"5px",marginLeft:"15px"},label:(0,i.jsx)(i.Fragment,{children:"0%"})},30:"",60:"",100:{style:{marginTop:"5px",marginLeft:"-20px"},label:(0,i.jsx)(i.Fragment,{children:"100%"})}};return(0,i.jsxs)("div",{className:"demo-container",children:[(0,i.jsx)("div",{className:"demo-row",children:(0,i.jsx)(a,{style:{width:300},min:0,max:100,defaultValue:30,disabled:!0,marks:e})}),(0,i.jsx)("div",{className:"demo-row",children:(0,i.jsx)(a,{style:{width:300},marks:e,min:0,max:100,defaultValue:30})}),(0,i.jsx)("div",{className:"demo-row",children:(0,i.jsx)(a,{style:{width:300},min:0,max:100,defaultValue:30})}),(0,i.jsx)("div",{className:"demo-row",children:(0,i.jsx)(a,{style:{width:300},min:0,max:100,defaultValue:30})})]})}const o="import { SliderMarks } from 'antd/es/slider'\nimport Slider from '.'\n\nexport default function SliderDemo() {\n  const forceMarks: SliderMarks = {\n    0: {\n      style: {\n        marginTop: '5px',\n        marginLeft: '15px',\n      },\n      label: <>0%</>,\n    },\n    30: '',\n    60: '',\n    100: {\n      style: {\n        marginTop: '5px',\n        marginLeft: '-20px',\n      },\n      label: <>100%</>,\n    },\n  }\n  return (\n    <div className=\"demo-container\">\n      <div className=\"demo-row\">\n        <Slider\n          style={{ width: 300 }}\n          min={0}\n          max={100}\n          defaultValue={30}\n          disabled\n          marks={forceMarks}\n        />\n      </div>\n      <div className=\"demo-row\">\n        <Slider\n          style={{ width: 300 }}\n          marks={forceMarks}\n          min={0}\n          max={100}\n          defaultValue={30}\n        />\n      </div>\n      <div className=\"demo-row\">\n        <Slider style={{ width: 300 }} min={0} max={100} defaultValue={30} />\n      </div>\n      <div className=\"demo-row\">\n        <Slider style={{ width: 300 }} min={0} max={100} defaultValue={30} />\n      </div>\n    </div>\n  )\n}\n";var m=s(1837);const c={},u="Slider",p={id:"components/Slider",title:"Slider",description:"\u793a\u4f8b",source:"@site/docs/components/Slider.mdx",sourceDirName:"components",slug:"/components/Slider",permalink:"/dobotplus/components/Slider",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"components",previous:{title:"Select",permalink:"/dobotplus/components/Select"},next:{title:"Status",permalink:"/dobotplus/components/Status"}},x={},h=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:2},{value:"API",id:"api",level:2}];function f(e){const n={h1:"h1",h2:"h2",header:"header",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"slider",children:"Slider"})}),"\n",(0,i.jsx)(n.h2,{id:"\u793a\u4f8b",children:"\u793a\u4f8b"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h2,{id:"\u4ee3\u7801",children:"\u4ee3\u7801"}),"\n",(0,i.jsx)(m.A,{language:"jsx",children:o}),"\n",(0,i.jsx)(n.h2,{id:"api",children:"API"})]})}function v(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(f,{...e})}):f(e)}}}]);