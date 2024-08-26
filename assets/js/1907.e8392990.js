"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[1907],{6509:(e,t,a)=>{a.d(t,{A:()=>s});var o=a(5913),r=a(2155);const n={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z"}}]},name:"close-circle",theme:"filled"};var l=a(2841),c=function(e,t){return r.createElement(l.A,(0,o.A)({},e,{ref:t,icon:n}))};const s=r.forwardRef(c)},790:(e,t,a)=>{a.d(t,{A:()=>s});var o=a(5913),r=a(2155);const n={icon:{tag:"svg",attrs:{"fill-rule":"evenodd",viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z"}}]},name:"close",theme:"outlined"};var l=a(2841),c=function(e,t){return r.createElement(l.A,(0,o.A)({},e,{ref:t,icon:n}))};const s=r.forwardRef(c)},6680:(e,t,a)=>{a.d(t,{A:()=>r});var o=a(5972);const r=e=>{const[,,,,t]=(0,o.Ay)();return t?`${e}-css-var`:""}},6263:(e,t,a)=>{a.d(t,{Ay:()=>G,cr:()=>U});var o=a(2155),r=a.t(o,2),n=a(9444),l=a(1153),c=a(4518),s=a(1718),i=a(1531);const d=(0,o.createContext)(void 0);var u=a(9166);let m=Object.assign({},u.A.Modal),p=[];const g=()=>p.reduce(((e,t)=>Object.assign(Object.assign({},e),t)),u.A.Modal);var h=a(7819);const b=e=>{const{locale:t={},children:a,_ANT_MARK__:r}=e;o.useEffect((()=>{const e=function(e){if(e){const t=Object.assign({},e);return p.push(t),m=g(),()=>{p=p.filter((e=>e!==t)),m=g()}}m=Object.assign({},u.A.Modal)}(null==t?void 0:t.Modal);return e}),[t]);const n=o.useMemo((()=>Object.assign(Object.assign({},t),{exist:!0})),[t]);return o.createElement(h.A.Provider,{value:n},a)};var v=a(779),f=a(2613),y=a(4717),C=a(4084),x=a(2006),P=a(9352),O=a(2897);const S=`-ant-${Date.now()}-${Math.random()}`;function k(e,t){const a=function(e,t){const a={},o=(e,t)=>{let a=e.clone();return a=(null==t?void 0:t(a))||a,a.toRgbString()},r=(e,t)=>{const r=new x.q(e),n=(0,C.cM)(r.toRgbString());a[`${t}-color`]=o(r),a[`${t}-color-disabled`]=n[1],a[`${t}-color-hover`]=n[4],a[`${t}-color-active`]=n[6],a[`${t}-color-outline`]=r.clone().setAlpha(.2).toRgbString(),a[`${t}-color-deprecated-bg`]=n[0],a[`${t}-color-deprecated-border`]=n[2]};if(t.primaryColor){r(t.primaryColor,"primary");const e=new x.q(t.primaryColor),n=(0,C.cM)(e.toRgbString());n.forEach(((e,t)=>{a[`primary-${t+1}`]=e})),a["primary-color-deprecated-l-35"]=o(e,(e=>e.lighten(35))),a["primary-color-deprecated-l-20"]=o(e,(e=>e.lighten(20))),a["primary-color-deprecated-t-20"]=o(e,(e=>e.tint(20))),a["primary-color-deprecated-t-50"]=o(e,(e=>e.tint(50))),a["primary-color-deprecated-f-12"]=o(e,(e=>e.setAlpha(.12*e.getAlpha())));const l=new x.q(n[0]);a["primary-color-active-deprecated-f-30"]=o(l,(e=>e.setAlpha(.3*e.getAlpha()))),a["primary-color-active-deprecated-d-02"]=o(l,(e=>e.darken(2)))}return t.successColor&&r(t.successColor,"success"),t.warningColor&&r(t.warningColor,"warning"),t.errorColor&&r(t.errorColor,"error"),t.infoColor&&r(t.infoColor,"info"),`\n  :root {\n    ${Object.keys(a).map((t=>`--${e}-${t}: ${a[t]};`)).join("\n")}\n  }\n  `.trim()}(e,t);(0,P.A)()&&(0,O.BD)(a,`${S}-dynamic-theme`)}var w=a(3949),A=a(7382);const $=function(){return{componentDisabled:(0,o.useContext)(w.A),componentSize:(0,o.useContext)(A.A)}};var j=a(8216);const E=Object.assign({},r),{useId:M}=E,T=void 0===M?()=>"":M;var D=a(9597),_=a(5972);function L(e){const{children:t}=e,[,a]=(0,_.Ay)(),{motion:r}=a,n=o.useRef(!1);return n.current=n.current||!1===r,n.current?o.createElement(D.Kq,{motion:r},t):t}const R=()=>null;var F=a(2664),N=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const V=["getTargetContainer","getPopupContainer","renderEmpty","input","pagination","form","select","button"];let I,Y,z,q;function K(){return I||y.yH}function B(){return Y||y.pM}const U=()=>({getPrefixCls:(e,t)=>t||(e?`${K()}-${e}`:K()),getIconPrefixCls:B,getRootPrefixCls:()=>I||K(),getTheme:()=>z,holderRender:q}),W=e=>{const{children:t,csp:a,autoInsertSpaceInButton:r,alert:m,anchor:p,form:g,locale:h,componentSize:C,direction:x,space:P,virtual:O,dropdownMatchSelectWidth:S,popupMatchSelectWidth:k,popupOverflow:$,legacyLocale:E,parentContext:M,iconPrefixCls:D,theme:_,componentDisabled:I,segmented:Y,statistic:z,spin:q,calendar:K,carousel:B,cascader:U,collapse:W,typography:Q,checkbox:G,descriptions:H,divider:J,drawer:X,skeleton:Z,steps:ee,image:te,layout:ae,list:oe,mentions:re,modal:ne,progress:le,result:ce,slider:se,breadcrumb:ie,menu:de,pagination:ue,input:me,textArea:pe,empty:ge,badge:he,radio:be,rate:ve,switch:fe,transfer:ye,avatar:Ce,message:xe,tag:Pe,table:Oe,card:Se,tabs:ke,timeline:we,timePicker:Ae,upload:$e,notification:je,tree:Ee,colorPicker:Me,datePicker:Te,rangePicker:De,flex:_e,wave:Le,dropdown:Re,warning:Fe,tour:Ne,floatButtonGroup:Ve,variant:Ie,inputNumber:Ye,treeSelect:ze}=e,qe=o.useCallback(((t,a)=>{const{prefixCls:o}=e;if(a)return a;const r=o||M.getPrefixCls("");return t?`${r}-${t}`:r}),[M.getPrefixCls,e.prefixCls]),Ke=D||M.iconPrefixCls||y.pM,Be=a||M.csp;(0,F.A)(Ke,Be);const Ue=function(e,t,a){var o;(0,i.rJ)("ConfigProvider");const r=e||{},n=!1!==r.inherit&&t?t:Object.assign(Object.assign({},v.sb),{hashed:null!==(o=null==t?void 0:t.hashed)&&void 0!==o?o:v.sb.hashed,cssVar:null==t?void 0:t.cssVar}),l=T();return(0,c.A)((()=>{var o,c;if(!e)return t;const s=Object.assign({},n.components);Object.keys(e.components||{}).forEach((t=>{s[t]=Object.assign(Object.assign({},s[t]),e.components[t])}));const i=`css-var-${l.replace(/:/g,"")}`,d=(null!==(o=r.cssVar)&&void 0!==o?o:n.cssVar)&&Object.assign(Object.assign(Object.assign({prefix:null==a?void 0:a.prefixCls},"object"==typeof n.cssVar?n.cssVar:{}),"object"==typeof r.cssVar?r.cssVar:{}),{key:"object"==typeof r.cssVar&&(null===(c=r.cssVar)||void 0===c?void 0:c.key)||i});return Object.assign(Object.assign(Object.assign({},n),r),{token:Object.assign(Object.assign({},n.token),r.token),components:s,cssVar:d})}),[r,n],((e,t)=>e.some(((e,a)=>{const o=t[a];return!(0,j.A)(e,o,!0)}))))}(_,M.theme,{prefixCls:qe("")});const We={csp:Be,autoInsertSpaceInButton:r,alert:m,anchor:p,locale:h||E,direction:x,space:P,virtual:O,popupMatchSelectWidth:null!=k?k:S,popupOverflow:$,getPrefixCls:qe,iconPrefixCls:Ke,theme:Ue,segmented:Y,statistic:z,spin:q,calendar:K,carousel:B,cascader:U,collapse:W,typography:Q,checkbox:G,descriptions:H,divider:J,drawer:X,skeleton:Z,steps:ee,image:te,input:me,textArea:pe,layout:ae,list:oe,mentions:re,modal:ne,progress:le,result:ce,slider:se,breadcrumb:ie,menu:de,pagination:ue,empty:ge,badge:he,radio:be,rate:ve,switch:fe,transfer:ye,avatar:Ce,message:xe,tag:Pe,table:Oe,card:Se,tabs:ke,timeline:we,timePicker:Ae,upload:$e,notification:je,tree:Ee,colorPicker:Me,datePicker:Te,rangePicker:De,flex:_e,wave:Le,dropdown:Re,warning:Fe,tour:Ne,floatButtonGroup:Ve,variant:Ie,inputNumber:Ye,treeSelect:ze};const Qe=Object.assign({},M);Object.keys(We).forEach((e=>{void 0!==We[e]&&(Qe[e]=We[e])})),V.forEach((t=>{const a=e[t];a&&(Qe[t]=a)})),void 0!==r&&(Qe.button=Object.assign({autoInsertSpace:r},Qe.button));const Ge=(0,c.A)((()=>Qe),Qe,((e,t)=>{const a=Object.keys(e),o=Object.keys(t);return a.length!==o.length||a.some((a=>e[a]!==t[a]))})),He=o.useMemo((()=>({prefixCls:Ke,csp:Be})),[Ke,Be]);let Je=o.createElement(o.Fragment,null,o.createElement(R,{dropdownMatchSelectWidth:S}),t);const Xe=o.useMemo((()=>{var e,t,a,o;return(0,s.h)((null===(e=u.A.Form)||void 0===e?void 0:e.defaultValidateMessages)||{},(null===(a=null===(t=Ge.locale)||void 0===t?void 0:t.Form)||void 0===a?void 0:a.defaultValidateMessages)||{},(null===(o=Ge.form)||void 0===o?void 0:o.validateMessages)||{},(null==g?void 0:g.validateMessages)||{})}),[Ge,null==g?void 0:g.validateMessages]);Object.keys(Xe).length>0&&(Je=o.createElement(d.Provider,{value:Xe},Je)),h&&(Je=o.createElement(b,{locale:h,_ANT_MARK__:"internalMark"},Je)),(Ke||Be)&&(Je=o.createElement(l.A.Provider,{value:He},Je)),C&&(Je=o.createElement(A.c,{size:C},Je)),Je=o.createElement(L,null,Je);const Ze=o.useMemo((()=>{const e=Ue||{},{algorithm:t,token:a,components:o,cssVar:r}=e,l=N(e,["algorithm","token","components","cssVar"]),c=t&&(!Array.isArray(t)||t.length>0)?(0,n.an)(t):v.zQ,s={};Object.entries(o||{}).forEach((e=>{let[t,a]=e;const o=Object.assign({},a);"algorithm"in o&&(!0===o.algorithm?o.theme=c:(Array.isArray(o.algorithm)||"function"==typeof o.algorithm)&&(o.theme=(0,n.an)(o.algorithm)),delete o.algorithm),s[t]=o}));const i=Object.assign(Object.assign({},f.A),a);return Object.assign(Object.assign({},l),{theme:c,token:i,components:s,override:Object.assign({override:i},s),cssVar:r})}),[Ue]);return _&&(Je=o.createElement(v.vG.Provider,{value:Ze},Je)),Ge.warning&&(Je=o.createElement(i._n.Provider,{value:Ge.warning},Je)),void 0!==I&&(Je=o.createElement(w.X,{disabled:I},Je)),o.createElement(y.QO.Provider,{value:Ge},Je)},Q=e=>{const t=o.useContext(y.QO),a=o.useContext(h.A);return o.createElement(W,Object.assign({parentContext:t,legacyLocale:a},e))};Q.ConfigContext=y.QO,Q.SizeContext=A.A,Q.config=e=>{const{prefixCls:t,iconPrefixCls:a,theme:o,holderRender:r}=e;void 0!==t&&(I=t),void 0!==a&&(Y=a),"holderRender"in e&&(q=r),o&&(!function(e){return Object.keys(e).some((e=>e.endsWith("Color")))}(o)?z=o:k(K(),o))},Q.useConfig=$,Object.defineProperty(Q,"SizeContext",{get:()=>A.A});const G=Q},7819:(e,t,a)=>{a.d(t,{A:()=>o});const o=(0,a(2155).createContext)(void 0)},9166:(e,t,a)=>{a.d(t,{A:()=>d});var o=a(6341),r=a(4050);const n=(0,r.A)((0,r.A)({},{yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0}),{},{locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",dateFormat:"M/D/YYYY",dateTimeFormat:"M/D/YYYY HH:mm:ss",previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"}),l={placeholder:"Select time",rangePlaceholder:["Start time","End time"]},c={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},n),timePickerLocale:Object.assign({},l)},s=c,i="${label} is not a valid ${type}",d={locale:"en",Pagination:o.A,DatePicker:c,TimePicker:l,Calendar:s,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",deselectAll:"Deselect all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand",collapse:"Collapse"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:i,method:i,array:i,object:i,number:i,date:i,boolean:i,integer:i,float:i,regexp:i,email:i,url:i,hex:i},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}}},6341:(e,t,a)=>{a.d(t,{A:()=>o});const o={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},5811:(e,t,a)=>{a.d(t,{A:()=>s});var o=a(4050),r="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),n="aria-",l="data-";function c(e,t){return 0===e.indexOf(t)}function s(e){var t,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===a?{aria:!0,data:!0,attr:!0}:!0===a?{aria:!0}:(0,o.A)({},a);var s={};return Object.keys(e).forEach((function(a){(t.aria&&("role"===a||c(a,n))||t.data&&c(a,l)||t.attr&&r.includes(a))&&(s[a]=e[a])})),s}}}]);