"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[6492],{26492:(e,o,t)=>{t.d(o,{Ay:()=>T});var r=t(22155),n=t(30395),i=t.n(n),l=t(88127),a=t(65811),d=t(86903),c=t(9718),s=t(7085);const u=r.createContext(null),b=u.Provider,p=u,g=r.createContext(null),h=g.Provider;var f=t(63534),C=t(37233),v=t(42569),m=t(55672),k=t(56855),S=t(95413),y=t(79444),$=t(55553),w=t(20493),x=t(56064);const E=e=>{const{componentCls:o,antCls:t}=e,r=`${o}-group`;return{[r]:Object.assign(Object.assign({},(0,$.dF)(e)),{display:"inline-block",fontSize:0,[`&${r}-rtl`]:{direction:"rtl"},[`${t}-badge ${t}-badge-count`]:{zIndex:1},[`> ${t}-badge:not(:first-child) > ${t}-button-wrapper`]:{borderInlineStart:"none"}})}},O=e=>{const{componentCls:o,wrapperMarginInlineEnd:t,colorPrimary:r,radioSize:n,motionDurationSlow:i,motionDurationMid:l,motionEaseInOutCirc:a,colorBgContainer:d,colorBorder:c,lineWidth:s,colorBgContainerDisabled:u,colorTextDisabled:b,paddingXS:p,dotColorDisabled:g,lineType:h,radioColor:f,radioBgColor:C,calc:v}=e,m=`${o}-inner`,k=v(n).sub(v(4).mul(2)),S=v(1).mul(n).equal({unit:!0});return{[`${o}-wrapper`]:Object.assign(Object.assign({},(0,$.dF)(e)),{display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:t,cursor:"pointer",[`&${o}-wrapper-rtl`]:{direction:"rtl"},"&-disabled":{cursor:"not-allowed",color:e.colorTextDisabled},"&::after":{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'},[`${o}-checked::after`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:`${(0,y.zA)(s)} ${h} ${r}`,borderRadius:"50%",visibility:"hidden",opacity:0,content:'""'},[o]:Object.assign(Object.assign({},(0,$.dF)(e)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center",borderRadius:"50%"}),[`${o}-wrapper:hover &,\n        &:hover ${m}`]:{borderColor:r},[`${o}-input:focus-visible + ${m}`]:Object.assign({},(0,$.jk)(e)),[`${o}:hover::after, ${o}-wrapper:hover &::after`]:{visibility:"visible"},[`${o}-inner`]:{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:S,height:S,marginBlockStart:v(1).mul(n).div(-2).equal({unit:!0}),marginInlineStart:v(1).mul(n).div(-2).equal({unit:!0}),backgroundColor:f,borderBlockStart:0,borderInlineStart:0,borderRadius:S,transform:"scale(0)",opacity:0,transition:`all ${i} ${a}`,content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:S,height:S,backgroundColor:d,borderColor:c,borderStyle:"solid",borderWidth:s,borderRadius:"50%",transition:`all ${l}`},[`${o}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0},[`${o}-checked`]:{[m]:{borderColor:r,backgroundColor:C,"&::after":{transform:`scale(${e.calc(e.dotSize).div(n).equal()})`,opacity:1,transition:`all ${i} ${a}`}}},[`${o}-disabled`]:{cursor:"not-allowed",[m]:{backgroundColor:u,borderColor:c,cursor:"not-allowed","&::after":{backgroundColor:g}},[`${o}-input`]:{cursor:"not-allowed"},[`${o}-disabled + span`]:{color:b,cursor:"not-allowed"},[`&${o}-checked`]:{[m]:{"&::after":{transform:`scale(${v(k).div(n).equal()})`}}}},[`span${o} + *`]:{paddingInlineStart:p,paddingInlineEnd:p}})}},B=e=>{const{buttonColor:o,controlHeight:t,componentCls:r,lineWidth:n,lineType:i,colorBorder:l,motionDurationSlow:a,motionDurationMid:d,buttonPaddingInline:c,fontSize:s,buttonBg:u,fontSizeLG:b,controlHeightLG:p,controlHeightSM:g,paddingXS:h,borderRadius:f,borderRadiusSM:C,borderRadiusLG:v,buttonCheckedBg:m,buttonSolidCheckedColor:k,colorTextDisabled:S,colorBgContainerDisabled:w,buttonCheckedBgDisabled:x,buttonCheckedColorDisabled:E,colorPrimary:O,colorPrimaryHover:B,colorPrimaryActive:I,buttonSolidCheckedBg:A,buttonSolidCheckedHoverBg:R,buttonSolidCheckedActiveBg:z,calc:j}=e;return{[`${r}-button-wrapper`]:{position:"relative",display:"inline-block",height:t,margin:0,paddingInline:c,paddingBlock:0,color:o,fontSize:s,lineHeight:(0,y.zA)(j(t).sub(j(n).mul(2)).equal()),background:u,border:`${(0,y.zA)(n)} ${i} ${l}`,borderBlockStartWidth:j(n).add(.02).equal(),borderInlineStartWidth:0,borderInlineEndWidth:n,cursor:"pointer",transition:[`color ${d}`,`background ${d}`,`box-shadow ${d}`].join(","),a:{color:o},[`> ${r}-button`]:{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"},"&:not(:first-child)":{"&::before":{position:"absolute",insetBlockStart:j(n).mul(-1).equal(),insetInlineStart:j(n).mul(-1).equal(),display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:n,paddingInline:0,backgroundColor:l,transition:`background-color ${a}`,content:'""'}},"&:first-child":{borderInlineStart:`${(0,y.zA)(n)} ${i} ${l}`,borderStartStartRadius:f,borderEndStartRadius:f},"&:last-child":{borderStartEndRadius:f,borderEndEndRadius:f},"&:first-child:last-child":{borderRadius:f},[`${r}-group-large &`]:{height:p,fontSize:b,lineHeight:(0,y.zA)(j(p).sub(j(n).mul(2)).equal()),"&:first-child":{borderStartStartRadius:v,borderEndStartRadius:v},"&:last-child":{borderStartEndRadius:v,borderEndEndRadius:v}},[`${r}-group-small &`]:{height:g,paddingInline:j(h).sub(n).equal(),paddingBlock:0,lineHeight:(0,y.zA)(j(g).sub(j(n).mul(2)).equal()),"&:first-child":{borderStartStartRadius:C,borderEndStartRadius:C},"&:last-child":{borderStartEndRadius:C,borderEndEndRadius:C}},"&:hover":{position:"relative",color:O},"&:has(:focus-visible)":Object.assign({},(0,$.jk)(e)),[`${r}-inner, input[type='checkbox'], input[type='radio']`]:{width:0,height:0,opacity:0,pointerEvents:"none"},[`&-checked:not(${r}-button-wrapper-disabled)`]:{zIndex:1,color:O,background:m,borderColor:O,"&::before":{backgroundColor:O},"&:first-child":{borderColor:O},"&:hover":{color:B,borderColor:B,"&::before":{backgroundColor:B}},"&:active":{color:I,borderColor:I,"&::before":{backgroundColor:I}}},[`${r}-group-solid &-checked:not(${r}-button-wrapper-disabled)`]:{color:k,background:A,borderColor:A,"&:hover":{color:k,background:R,borderColor:R},"&:active":{color:k,background:z,borderColor:z}},"&-disabled":{color:S,backgroundColor:w,borderColor:l,cursor:"not-allowed","&:first-child, &:hover":{color:S,backgroundColor:w,borderColor:l}},[`&-disabled${r}-button-wrapper-checked`]:{color:E,backgroundColor:x,borderColor:l,boxShadow:"none"}}}},I=(0,w.OF)("Radio",(e=>{const{controlOutline:o,controlOutlineWidth:t}=e,r=`0 0 0 ${(0,y.zA)(t)} ${o}`,n=r,i=(0,x.h1)(e,{radioFocusShadow:r,radioButtonFocusShadow:n});return[E(i),O(i),B(i)]}),(e=>{const{wireframe:o,padding:t,marginXS:r,lineWidth:n,fontSizeLG:i,colorText:l,colorBgContainer:a,colorTextDisabled:d,controlItemBgActiveDisabled:c,colorTextLightSolid:s,colorPrimary:u,colorPrimaryHover:b,colorPrimaryActive:p,colorWhite:g}=e;return{radioSize:i,dotSize:o?i-8:i-2*(4+n),dotColorDisabled:d,buttonSolidCheckedColor:s,buttonSolidCheckedBg:u,buttonSolidCheckedHoverBg:b,buttonSolidCheckedActiveBg:p,buttonBg:a,buttonCheckedBg:a,buttonColor:l,buttonCheckedBgDisabled:c,buttonCheckedColorDisabled:d,buttonPaddingInline:t-n,wrapperMarginInlineEnd:r,radioColor:o?u:g,radioBgColor:o?a:u}}),{unitless:{radioSize:!0,dotSize:!0}});var A=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};const R=(e,o)=>{var t,n;const l=r.useContext(p),a=r.useContext(g),{getPrefixCls:s,direction:u,radio:b}=r.useContext(d.QO),h=r.useRef(null),y=(0,C.K4)(o,h),{isFormItemInput:$}=r.useContext(S.$W);const w=o=>{var t,r;null===(t=e.onChange)||void 0===t||t.call(e,o),null===(r=null==l?void 0:l.onChange)||void 0===r||r.call(l,o)},{prefixCls:x,className:E,rootClassName:O,children:B,style:R,title:z}=e,j=A(e,["prefixCls","className","rootClassName","children","style","title"]),P=s("radio",x),D="button"===((null==l?void 0:l.optionType)||a),N=D?`${P}-button`:P,q=(0,c.A)(P),[M,T,H]=I(P,q),W=Object.assign({},j),F=r.useContext(k.A);l&&(W.name=l.name,W.onChange=w,W.checked=e.value===l.value,W.disabled=null!==(t=W.disabled)&&void 0!==t?t:l.disabled),W.disabled=null!==(n=W.disabled)&&void 0!==n?n:F;const L=i()(`${N}-wrapper`,{[`${N}-wrapper-checked`]:W.checked,[`${N}-wrapper-disabled`]:W.disabled,[`${N}-wrapper-rtl`]:"rtl"===u,[`${N}-wrapper-in-form-item`]:$},null==b?void 0:b.className,E,O,T,H,q);return M(r.createElement(v.A,{component:"Radio",disabled:W.disabled},r.createElement("label",{className:L,style:Object.assign(Object.assign({},null==b?void 0:b.style),R),onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,title:z},r.createElement(f.A,Object.assign({},W,{className:i()(W.className,{[m.D]:!D}),type:"radio",prefixCls:N,ref:y})),void 0!==B?r.createElement("span",null,B):null)))};const z=r.forwardRef(R),j=r.forwardRef(((e,o)=>{const{getPrefixCls:t,direction:n}=r.useContext(d.QO),[u,p]=(0,l.A)(e.defaultValue,{value:e.value}),{prefixCls:g,className:h,rootClassName:f,options:C,buttonStyle:v="outline",disabled:m,children:k,size:S,style:y,id:$,onMouseEnter:w,onMouseLeave:x,onFocus:E,onBlur:O}=e,B=t("radio",g),A=`${B}-group`,R=(0,c.A)(B),[j,P,D]=I(B,R);let N=k;C&&C.length>0&&(N=C.map((e=>"string"==typeof e||"number"==typeof e?r.createElement(z,{key:e.toString(),prefixCls:B,disabled:m,value:e,checked:u===e},e):r.createElement(z,{key:`radio-group-value-options-${e.value}`,prefixCls:B,disabled:e.disabled||m,value:e.value,checked:u===e.value,title:e.title,style:e.style,id:e.id,required:e.required},e.label))));const q=(0,s.A)(S),M=i()(A,`${A}-${v}`,{[`${A}-${q}`]:q,[`${A}-rtl`]:"rtl"===n},h,f,P,D,R);return j(r.createElement("div",Object.assign({},(0,a.A)(e,{aria:!0,data:!0}),{className:M,style:y,onMouseEnter:w,onMouseLeave:x,onFocus:E,onBlur:O,id:$,ref:o}),r.createElement(b,{value:{onChange:o=>{const t=u,r=o.target.value;"value"in e||p(r);const{onChange:n}=e;n&&r!==t&&n(o)},value:u,disabled:e.disabled,name:e.name,optionType:e.optionType}},N)))})),P=r.memo(j);var D=function(e,o){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&o.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)o.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(t[r[n]]=e[r[n]])}return t};const N=(e,o)=>{const{getPrefixCls:t}=r.useContext(d.QO),{prefixCls:n}=e,i=D(e,["prefixCls"]),l=t("radio",n);return r.createElement(h,{value:"button"},r.createElement(z,Object.assign({prefixCls:l},i,{type:"radio",ref:o})))},q=r.forwardRef(N),M=z;M.Button=q,M.Group=P,M.__ANT_RADIO=!0;const T=M},63534:(e,o,t)=>{t.d(o,{A:()=>p});var r=t(30207),n=t(52132),i=t(38898),l=t(99276),a=t(34354),d=t(30395),c=t.n(d),s=t(88127),u=t(22155),b=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"];const p=(0,u.forwardRef)((function(e,o){var t=e.prefixCls,d=void 0===t?"rc-checkbox":t,p=e.className,g=e.style,h=e.checked,f=e.disabled,C=e.defaultChecked,v=void 0!==C&&C,m=e.type,k=void 0===m?"checkbox":m,S=e.title,y=e.onChange,$=(0,a.A)(e,b),w=(0,u.useRef)(null),x=(0,u.useRef)(null),E=(0,s.A)(v,{value:h}),O=(0,l.A)(E,2),B=O[0],I=O[1];(0,u.useImperativeHandle)(o,(function(){return{focus:function(e){var o;null===(o=w.current)||void 0===o||o.focus(e)},blur:function(){var e;null===(e=w.current)||void 0===e||e.blur()},input:w.current,nativeElement:x.current}}));var A=c()(d,p,(0,i.A)((0,i.A)({},"".concat(d,"-checked"),B),"".concat(d,"-disabled"),f));return u.createElement("span",{className:A,title:S,style:g,ref:x},u.createElement("input",(0,r.A)({},$,{className:"".concat(d,"-input"),ref:w,onChange:function(o){f||("checked"in e||I(o.target.checked),null==y||y({target:(0,n.A)((0,n.A)({},e),{},{type:k,checked:o.target.checked}),stopPropagation:function(){o.stopPropagation()},preventDefault:function(){o.preventDefault()},nativeEvent:o.nativeEvent}))},disabled:f,checked:!!B,type:k})),u.createElement("span",{className:"".concat(d,"-inner")}))}))}}]);