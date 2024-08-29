"use strict";(self.webpackChunk_dobot_plus_website=self.webpackChunk_dobot_plus_website||[]).push([[1656],{61652:(e,t,n)=>{n.d(t,{A:()=>oe});var o=n(34050),r=n(76254),i=n(65692),a=n(22155),c=n.t(a,2),l=n(70316),u=n(19352),s=(n(36216),n(37233));const f=a.createContext(null);var d=n(91740),p=n(28367),v=[];var m=n(52897),h=n(26989);var g="rc-util-locker-".concat(Date.now()),E=0;function A(e){var t=!!e,n=a.useState((function(){return E+=1,"".concat(g,"_").concat(E)})),o=(0,r.A)(n,1)[0];(0,p.A)((function(){if(t){var e=(0,h.V)(document.body).width,n=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,m.BD)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(n?"width: calc(100% - ".concat(e,"px);"):"","\n}"),o)}else(0,m.m6)(o);return function(){(0,m.m6)(o)}}),[t,o])}var y=!1;var b=function(e){return!1!==e&&((0,u.A)()&&e?"string"==typeof e?document.querySelector(e):"function"==typeof e?e():e:null)};const w=a.forwardRef((function(e,t){var n=e.open,o=e.autoLock,i=e.getContainer,c=(e.debug,e.autoDestroy),m=void 0===c||c,h=e.children,g=a.useState(n),E=(0,r.A)(g,2),w=E[0],M=E[1],N=w||n;a.useEffect((function(){(m||n)&&M(n)}),[n,m]);var C=a.useState((function(){return b(i)})),x=(0,r.A)(C,2),S=x[0],P=x[1];a.useEffect((function(){var e=b(i);P(null!=e?e:null)}));var k=function(e){var t=a.useState((function(){return(0,u.A)()?document.createElement("div"):null})),n=(0,r.A)(t,1)[0],o=a.useRef(!1),i=a.useContext(f),c=a.useState(v),l=(0,r.A)(c,2),s=l[0],m=l[1],h=i||(o.current?void 0:function(e){m((function(t){return[e].concat((0,d.A)(t))}))});function g(){n.parentElement||document.body.appendChild(n),o.current=!0}function E(){var e;null===(e=n.parentElement)||void 0===e||e.removeChild(n),o.current=!1}return(0,p.A)((function(){return e?i?i(g):g():E(),E}),[e]),(0,p.A)((function(){s.length&&(s.forEach((function(e){return e()})),m(v))}),[s]),[n,h]}(N&&!S),R=(0,r.A)(k,2),_=R[0],T=R[1],O=null!=S?S:_;A(o&&n&&(0,u.A)()&&(O===_||O===document.body));var L=null;h&&(0,s.f3)(h)&&t&&(L=h.ref);var I=(0,s.xK)(L,t);if(!N||!(0,u.A)()||void 0===S)return null;var U,D=!1===O||("boolean"==typeof U&&(y=U),y),H=h;return t&&(H=a.cloneElement(h,{ref:I})),a.createElement(f.Provider,{value:T},D?H:(0,l.createPortal)(H,O))}));var M=n(30395),N=n.n(M),C=n(81279),x=n(62634),S=n(21843),P=n(41186);var k=0;var R=(0,o.A)({},c).useId;const _=R?function(e){var t=R();return e||t}:function(e){var t=a.useState("ssr-id"),n=(0,r.A)(t,2),o=n[0],i=n[1];return a.useEffect((function(){var e=k;k+=1,i("rc_unique_".concat(e))}),[]),e||o};var T=n(84080),O=n(45913),L=n(59597);function I(e){var t=e.prefixCls,n=e.align,o=e.arrow,r=e.arrowPos,i=o||{},c=i.className,l=i.content,u=r.x,s=void 0===u?0:u,f=r.y,d=void 0===f?0:f,p=a.useRef();if(!n||!n.points)return null;var v={position:"absolute"};if(!1!==n.autoArrow){var m=n.points[0],h=n.points[1],g=m[0],E=m[1],A=h[0],y=h[1];g!==A&&["t","b"].includes(g)?"t"===g?v.top=0:v.bottom=0:v.top=d,E!==y&&["l","r"].includes(E)?"l"===E?v.left=0:v.right=0:v.left=s}return a.createElement("div",{ref:p,className:N()("".concat(t,"-arrow"),c),style:v},l)}function U(e){var t=e.prefixCls,n=e.open,o=e.zIndex,r=e.mask,i=e.motion;return r?a.createElement(L.Ay,(0,O.A)({},i,{motionAppear:!0,visible:n,removeOnLeave:!0}),(function(e){var n=e.className;return a.createElement("div",{style:{zIndex:o},className:N()("".concat(t,"-mask"),n)})})):null}const D=a.memo((function(e){return e.children}),(function(e,t){return t.cache}));var H=a.forwardRef((function(e,t){var n=e.popup,i=e.className,c=e.prefixCls,l=e.style,u=e.target,f=e.onVisibleChanged,d=e.open,v=e.keepDom,m=e.fresh,h=e.onClick,g=e.mask,E=e.arrow,A=e.arrowPos,y=e.align,b=e.motion,w=e.maskMotion,M=e.forceRender,x=e.getPopupContainer,S=e.autoDestroy,P=e.portal,k=e.zIndex,R=e.onMouseEnter,_=e.onMouseLeave,T=e.onPointerEnter,H=e.ready,F=e.offsetX,W=e.offsetY,K=e.offsetR,B=e.offsetB,z=e.onAlign,Y=e.onPrepare,V=e.stretch,X=e.targetWidth,$=e.targetHeight,j="function"==typeof n?n():n,G=d||v,Q=(null==x?void 0:x.length)>0,q=a.useState(!x||!Q),Z=(0,r.A)(q,2),J=Z[0],ee=Z[1];if((0,p.A)((function(){!J&&Q&&u&&ee(!0)}),[J,Q,u]),!J)return null;var te="auto",ne={left:"-1000vw",top:"-1000vh",right:te,bottom:te};if(H||!d){var oe,re=y.points,ie=y.dynamicInset||(null===(oe=y._experimental)||void 0===oe?void 0:oe.dynamicInset),ae=ie&&"r"===re[0][1],ce=ie&&"b"===re[0][0];ae?(ne.right=K,ne.left=te):(ne.left=F,ne.right=te),ce?(ne.bottom=B,ne.top=te):(ne.top=W,ne.bottom=te)}var le={};return V&&(V.includes("height")&&$?le.height=$:V.includes("minHeight")&&$&&(le.minHeight=$),V.includes("width")&&X?le.width=X:V.includes("minWidth")&&X&&(le.minWidth=X)),d||(le.pointerEvents="none"),a.createElement(P,{open:M||G,getContainer:x&&function(){return x(u)},autoDestroy:S},a.createElement(U,{prefixCls:c,open:d,zIndex:k,mask:g,motion:w}),a.createElement(C.A,{onResize:z,disabled:!d},(function(e){return a.createElement(L.Ay,(0,O.A)({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:M,leavedClassName:"".concat(c,"-hidden")},b,{onAppearPrepare:Y,onEnterPrepare:Y,visible:d,onVisibleChanged:function(e){var t;null==b||null===(t=b.onVisibleChanged)||void 0===t||t.call(b,e),f(e)}}),(function(n,r){var u=n.className,f=n.style,p=N()(c,u,i);return a.createElement("div",{ref:(0,s.K4)(e,t,r),className:p,style:(0,o.A)((0,o.A)((0,o.A)((0,o.A)({"--arrow-x":"".concat(A.x||0,"px"),"--arrow-y":"".concat(A.y||0,"px")},ne),le),f),{},{boxSizing:"border-box",zIndex:k},l),onMouseEnter:R,onMouseLeave:_,onPointerEnter:T,onClick:h},E&&a.createElement(I,{prefixCls:c,arrow:E,arrowPos:A,align:y}),a.createElement(D,{cache:!d&&!m},j))}))})))}));const F=H;const W=a.forwardRef((function(e,t){var n=e.children,o=e.getTriggerDOMNode,r=(0,s.f3)(n),i=a.useCallback((function(e){(0,s.Xf)(t,o?o(e):e)}),[o]),c=(0,s.xK)(i,n.ref);return r?a.cloneElement(n,{ref:c}):n}));const K=a.createContext(null);function B(e){return e?Array.isArray(e)?e:[e]:[]}var z=n(49677);function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return(arguments.length>2?arguments[2]:void 0)?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function V(e,t,n,o){return t||(n?{motionName:"".concat(e,"-").concat(n)}:o?{motionName:o}:null)}function X(e){return e.ownerDocument.defaultView}function $(e){for(var t=[],n=null==e?void 0:e.parentElement,o=["hidden","scroll","clip","auto"];n;){var r=X(n).getComputedStyle(n);[r.overflowX,r.overflowY,r.overflow].some((function(e){return o.includes(e)}))&&t.push(n),n=n.parentElement}return t}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number.isNaN(e)?t:e}function G(e){return j(parseFloat(e),0)}function Q(e,t){var n=(0,o.A)({},e);return(t||[]).forEach((function(e){if(!(e instanceof HTMLBodyElement||e instanceof HTMLHtmlElement)){var t=X(e).getComputedStyle(e),o=t.overflow,r=t.overflowClipMargin,i=t.borderTopWidth,a=t.borderBottomWidth,c=t.borderLeftWidth,l=t.borderRightWidth,u=e.getBoundingClientRect(),s=e.offsetHeight,f=e.clientHeight,d=e.offsetWidth,p=e.clientWidth,v=G(i),m=G(a),h=G(c),g=G(l),E=j(Math.round(u.width/d*1e3)/1e3),A=j(Math.round(u.height/s*1e3)/1e3),y=(d-p-h-g)*E,b=(s-f-v-m)*A,w=v*A,M=m*A,N=h*E,C=g*E,x=0,S=0;if("clip"===o){var P=G(r);x=P*E,S=P*A}var k=u.x+N-x,R=u.y+w-S,_=k+u.width+2*x-N-C-y,T=R+u.height+2*S-w-M-b;n.left=Math.max(n.left,k),n.top=Math.max(n.top,R),n.right=Math.min(n.right,_),n.bottom=Math.min(n.bottom,T)}})),n}function q(e){var t="".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:0),n=t.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(t)}function Z(e,t){var n=t||[],o=(0,r.A)(n,2),i=o[0],a=o[1];return[q(e.width,i),q(e.height,a)]}function J(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return[e[0],e[1]]}function ee(e,t){var n,o=t[0],r=t[1];return n="t"===o?e.y:"b"===o?e.y+e.height:e.y+e.height/2,{x:"l"===r?e.x:"r"===r?e.x+e.width:e.x+e.width/2,y:n}}function te(e,t){var n={t:"b",b:"t",l:"r",r:"l"};return e.map((function(e,o){return o===t?n[e]||"c":e})).join("")}var ne=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];const oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;return a.forwardRef((function(t,n){var c=t.prefixCls,l=void 0===c?"rc-trigger-popup":c,u=t.children,s=t.action,f=void 0===s?"hover":s,v=t.showAction,m=t.hideAction,h=t.popupVisible,g=t.defaultPopupVisible,E=t.onPopupVisibleChange,A=t.afterPopupVisibleChange,y=t.mouseEnterDelay,b=t.mouseLeaveDelay,w=void 0===b?.1:b,M=t.focusDelay,k=t.blurDelay,R=t.mask,O=t.maskClosable,L=void 0===O||O,I=t.getPopupContainer,U=t.forceRender,D=t.autoDestroy,H=t.destroyPopupOnHide,G=t.popup,q=t.popupClassName,oe=t.popupStyle,re=t.popupPlacement,ie=t.builtinPlacements,ae=void 0===ie?{}:ie,ce=t.popupAlign,le=t.zIndex,ue=t.stretch,se=t.getPopupClassNameFromAlign,fe=t.fresh,de=t.alignPoint,pe=t.onPopupClick,ve=t.onPopupAlign,me=t.arrow,he=t.popupMotion,ge=t.maskMotion,Ee=t.popupTransitionName,Ae=t.popupAnimation,ye=t.maskTransitionName,be=t.maskAnimation,we=t.className,Me=t.getTriggerDOMNode,Ne=(0,i.A)(t,ne),Ce=D||H||!1,xe=a.useState(!1),Se=(0,r.A)(xe,2),Pe=Se[0],ke=Se[1];(0,p.A)((function(){ke((0,T.A)())}),[]);var Re=a.useRef({}),_e=a.useContext(K),Te=a.useMemo((function(){return{registerSubPopup:function(e,t){Re.current[e]=t,null==_e||_e.registerSubPopup(e,t)}}}),[_e]),Oe=_(),Le=a.useState(null),Ie=(0,r.A)(Le,2),Ue=Ie[0],De=Ie[1],He=a.useRef(null),Fe=(0,P.A)((function(e){He.current=e,(0,x.fk)(e)&&Ue!==e&&De(e),null==_e||_e.registerSubPopup(Oe,e)})),We=a.useState(null),Ke=(0,r.A)(We,2),Be=Ke[0],ze=Ke[1],Ye=a.useRef(null),Ve=(0,P.A)((function(e){(0,x.fk)(e)&&Be!==e&&(ze(e),Ye.current=e)})),Xe=a.Children.only(u),$e=(null==Xe?void 0:Xe.props)||{},je={},Ge=(0,P.A)((function(e){var t,n,o=Be;return(null==o?void 0:o.contains(e))||(null===(t=(0,S.j)(o))||void 0===t?void 0:t.host)===e||e===o||(null==Ue?void 0:Ue.contains(e))||(null===(n=(0,S.j)(Ue))||void 0===n?void 0:n.host)===e||e===Ue||Object.values(Re.current).some((function(t){return(null==t?void 0:t.contains(e))||e===t}))})),Qe=V(l,he,Ae,Ee),qe=V(l,ge,be,ye),Ze=a.useState(g||!1),Je=(0,r.A)(Ze,2),et=Je[0],tt=Je[1],nt=null!=h?h:et,ot=(0,P.A)((function(e){void 0===h&&tt(e)}));(0,p.A)((function(){tt(h||!1)}),[h]);var rt=a.useRef(nt);rt.current=nt;var it=a.useRef([]);it.current=[];var at=(0,P.A)((function(e){var t;ot(e),(null!==(t=it.current[it.current.length-1])&&void 0!==t?t:nt)!==e&&(it.current.push(e),null==E||E(e))})),ct=a.useRef(),lt=function(){clearTimeout(ct.current)},ut=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;lt(),0===t?at(e):ct.current=setTimeout((function(){at(e)}),1e3*t)};a.useEffect((function(){return lt}),[]);var st=a.useState(!1),ft=(0,r.A)(st,2),dt=ft[0],pt=ft[1];(0,p.A)((function(e){e&&!nt||pt(!0)}),[nt]);var vt=a.useState(null),mt=(0,r.A)(vt,2),ht=mt[0],gt=mt[1],Et=a.useState([0,0]),At=(0,r.A)(Et,2),yt=At[0],bt=At[1],wt=function(e){bt([e.clientX,e.clientY])},Mt=function(e,t,n,i,c,l,u){var s=a.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:c[i]||{}}),f=(0,r.A)(s,2),d=f[0],v=f[1],m=a.useRef(0),h=a.useMemo((function(){return t?$(t):[]}),[t]),g=a.useRef({});e||(g.current={});var E=(0,P.A)((function(){if(t&&n&&e){var a,s,f,d=t,p=d.ownerDocument,m=X(d).getComputedStyle(d),E=m.width,A=m.height,y=m.position,b=d.style.left,w=d.style.top,M=d.style.right,N=d.style.bottom,C=d.style.overflow,S=(0,o.A)((0,o.A)({},c[i]),l),P=p.createElement("div");if(null===(a=d.parentElement)||void 0===a||a.appendChild(P),P.style.left="".concat(d.offsetLeft,"px"),P.style.top="".concat(d.offsetTop,"px"),P.style.position=y,P.style.height="".concat(d.offsetHeight,"px"),P.style.width="".concat(d.offsetWidth,"px"),d.style.left="0",d.style.top="0",d.style.right="auto",d.style.bottom="auto",d.style.overflow="hidden",Array.isArray(n))f={x:n[0],y:n[1],width:0,height:0};else{var k=n.getBoundingClientRect();f={x:k.x,y:k.y,width:k.width,height:k.height}}var R=d.getBoundingClientRect(),_=p.documentElement,T=_.clientWidth,O=_.clientHeight,L=_.scrollWidth,I=_.scrollHeight,U=_.scrollTop,D=_.scrollLeft,H=R.height,F=R.width,W=f.height,K=f.width,B={left:0,top:0,right:T,bottom:O},Y={left:-D,top:-U,right:L-D,bottom:I-U},V=S.htmlRegion,$="visible",G="visibleFirst";"scroll"!==V&&V!==G&&(V=$);var q=V===G,ne=Q(Y,h),oe=Q(B,h),re=V===$?oe:ne,ie=q?oe:re;d.style.left="auto",d.style.top="auto",d.style.right="0",d.style.bottom="0";var ae=d.getBoundingClientRect();d.style.left=b,d.style.top=w,d.style.right=M,d.style.bottom=N,d.style.overflow=C,null===(s=d.parentElement)||void 0===s||s.removeChild(P);var ce=j(Math.round(F/parseFloat(E)*1e3)/1e3),le=j(Math.round(H/parseFloat(A)*1e3)/1e3);if(0===ce||0===le||(0,x.fk)(n)&&!(0,z.A)(n))return;var ue=S.offset,se=S.targetOffset,fe=Z(R,ue),de=(0,r.A)(fe,2),pe=de[0],ve=de[1],me=Z(f,se),he=(0,r.A)(me,2),ge=he[0],Ee=he[1];f.x-=ge,f.y-=Ee;var Ae=S.points||[],ye=(0,r.A)(Ae,2),be=ye[0],we=J(ye[1]),Me=J(be),Ne=ee(f,we),Ce=ee(R,Me),xe=(0,o.A)({},S),Se=Ne.x-Ce.x+pe,Pe=Ne.y-Ce.y+ve;function bt(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:re,o=R.x+e,r=R.y+t,i=o+F,a=r+H,c=Math.max(o,n.left),l=Math.max(r,n.top),u=Math.min(i,n.right),s=Math.min(a,n.bottom);return Math.max(0,(u-c)*(s-l))}var ke,Re,_e,Te,Oe=bt(Se,Pe),Le=bt(Se,Pe,oe),Ie=ee(f,["t","l"]),Ue=ee(R,["t","l"]),De=ee(f,["b","r"]),He=ee(R,["b","r"]),Fe=S.overflow||{},We=Fe.adjustX,Ke=Fe.adjustY,Be=Fe.shiftX,ze=Fe.shiftY,Ye=function(e){return"boolean"==typeof e?e:e>=0};function wt(){ke=R.y+Pe,Re=ke+H,_e=R.x+Se,Te=_e+F}wt();var Ve=Ye(Ke),Xe=Me[0]===we[0];if(Ve&&"t"===Me[0]&&(Re>ie.bottom||g.current.bt)){var $e=Pe;Xe?$e-=H-W:$e=Ie.y-He.y-ve;var je=bt(Se,$e),Ge=bt(Se,$e,oe);je>Oe||je===Oe&&(!q||Ge>=Le)?(g.current.bt=!0,Pe=$e,ve=-ve,xe.points=[te(Me,0),te(we,0)]):g.current.bt=!1}if(Ve&&"b"===Me[0]&&(ke<ie.top||g.current.tb)){var Qe=Pe;Xe?Qe+=H-W:Qe=De.y-Ue.y-ve;var qe=bt(Se,Qe),Ze=bt(Se,Qe,oe);qe>Oe||qe===Oe&&(!q||Ze>=Le)?(g.current.tb=!0,Pe=Qe,ve=-ve,xe.points=[te(Me,0),te(we,0)]):g.current.tb=!1}var Je=Ye(We),et=Me[1]===we[1];if(Je&&"l"===Me[1]&&(Te>ie.right||g.current.rl)){var tt=Se;et?tt-=F-K:tt=Ie.x-He.x-pe;var nt=bt(tt,Pe),ot=bt(tt,Pe,oe);nt>Oe||nt===Oe&&(!q||ot>=Le)?(g.current.rl=!0,Se=tt,pe=-pe,xe.points=[te(Me,1),te(we,1)]):g.current.rl=!1}if(Je&&"r"===Me[1]&&(_e<ie.left||g.current.lr)){var rt=Se;et?rt+=F-K:rt=De.x-Ue.x-pe;var it=bt(rt,Pe),at=bt(rt,Pe,oe);it>Oe||it===Oe&&(!q||at>=Le)?(g.current.lr=!0,Se=rt,pe=-pe,xe.points=[te(Me,1),te(we,1)]):g.current.lr=!1}wt();var ct=!0===Be?0:Be;"number"==typeof ct&&(_e<oe.left&&(Se-=_e-oe.left-pe,f.x+K<oe.left+ct&&(Se+=f.x-oe.left+K-ct)),Te>oe.right&&(Se-=Te-oe.right-pe,f.x>oe.right-ct&&(Se+=f.x-oe.right+ct)));var lt=!0===ze?0:ze;"number"==typeof lt&&(ke<oe.top&&(Pe-=ke-oe.top-ve,f.y+W<oe.top+lt&&(Pe+=f.y-oe.top+W-lt)),Re>oe.bottom&&(Pe-=Re-oe.bottom-ve,f.y>oe.bottom-lt&&(Pe+=f.y-oe.bottom+lt)));var ut=R.x+Se,st=ut+F,ft=R.y+Pe,dt=ft+H,pt=f.x,vt=pt+K,mt=f.y,ht=mt+W,gt=(Math.max(ut,pt)+Math.min(st,vt))/2-ut,Et=(Math.max(ft,mt)+Math.min(dt,ht))/2-ft;null==u||u(t,xe);var At=ae.right-R.x-(Se+R.width),yt=ae.bottom-R.y-(Pe+R.height);1===ce&&(Se=Math.round(Se),At=Math.round(At)),1===le&&(Pe=Math.round(Pe),yt=Math.round(yt)),v({ready:!0,offsetX:Se/ce,offsetY:Pe/le,offsetR:At/ce,offsetB:yt/le,arrowX:gt/ce,arrowY:Et/le,scaleX:ce,scaleY:le,align:xe})}})),A=function(){v((function(e){return(0,o.A)((0,o.A)({},e),{},{ready:!1})}))};return(0,p.A)(A,[i]),(0,p.A)((function(){e||A()}),[e]),[d.ready,d.offsetX,d.offsetY,d.offsetR,d.offsetB,d.arrowX,d.arrowY,d.scaleX,d.scaleY,d.align,function(){m.current+=1;var e=m.current;Promise.resolve().then((function(){m.current===e&&E()}))}]}(nt,Ue,de?yt:Be,re,ae,ce,ve),Nt=(0,r.A)(Mt,11),Ct=Nt[0],xt=Nt[1],St=Nt[2],Pt=Nt[3],kt=Nt[4],Rt=Nt[5],_t=Nt[6],Tt=Nt[7],Ot=Nt[8],Lt=Nt[9],It=Nt[10],Ut=function(e,t,n,o){return a.useMemo((function(){var r=B(null!=n?n:t),i=B(null!=o?o:t),a=new Set(r),c=new Set(i);return e&&(a.has("hover")&&(a.delete("hover"),a.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[a,c]}),[e,t,n,o])}(Pe,f,v,m),Dt=(0,r.A)(Ut,2),Ht=Dt[0],Ft=Dt[1],Wt=Ht.has("click"),Kt=Ft.has("click")||Ft.has("contextMenu"),Bt=(0,P.A)((function(){dt||It()}));!function(e,t,n,o,r){(0,p.A)((function(){if(e&&t&&n){var i=n,a=$(t),c=$(i),l=X(i),u=new Set([l].concat((0,d.A)(a),(0,d.A)(c)));function s(){o(),r()}return u.forEach((function(e){e.addEventListener("scroll",s,{passive:!0})})),l.addEventListener("resize",s,{passive:!0}),o(),function(){u.forEach((function(e){e.removeEventListener("scroll",s),l.removeEventListener("resize",s)}))}}}),[e,t,n])}(nt,Be,Ue,Bt,(function(){rt.current&&de&&Kt&&ut(!1)})),(0,p.A)((function(){Bt()}),[yt,re]),(0,p.A)((function(){!nt||null!=ae&&ae[re]||Bt()}),[JSON.stringify(ce)]);var zt=a.useMemo((function(){var e=function(e,t,n,o){for(var r=n.points,i=Object.keys(e),a=0;a<i.length;a+=1){var c,l=i[a];if(Y(null===(c=e[l])||void 0===c?void 0:c.points,r,o))return"".concat(t,"-placement-").concat(l)}return""}(ae,l,Lt,de);return N()(e,null==se?void 0:se(Lt))}),[Lt,se,ae,l,de]);a.useImperativeHandle(n,(function(){return{nativeElement:Ye.current,popupElement:He.current,forceAlign:Bt}}));var Yt=a.useState(0),Vt=(0,r.A)(Yt,2),Xt=Vt[0],$t=Vt[1],jt=a.useState(0),Gt=(0,r.A)(jt,2),Qt=Gt[0],qt=Gt[1],Zt=function(){if(ue&&Be){var e=Be.getBoundingClientRect();$t(e.width),qt(e.height)}};function Jt(e,t,n,o){je[e]=function(r){var i;null==o||o(r),ut(t,n);for(var a=arguments.length,c=new Array(a>1?a-1:0),l=1;l<a;l++)c[l-1]=arguments[l];null===(i=$e[e])||void 0===i||i.call.apply(i,[$e,r].concat(c))}}(0,p.A)((function(){ht&&(It(),ht(),gt(null))}),[ht]),(Wt||Kt)&&(je.onClick=function(e){var t;rt.current&&Kt?ut(!1):!rt.current&&Wt&&(wt(e),ut(!0));for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=$e.onClick)||void 0===t||t.call.apply(t,[$e,e].concat(o))}),function(e,t,n,o,r,i,c,l){var u=a.useRef(e);u.current=e,a.useEffect((function(){if(t&&o&&(!r||i)){var e=function(e){var t;u.current&&!c((null===(t=e.composedPath)||void 0===t||null===(t=t.call(e))||void 0===t?void 0:t[0])||e.target)&&l(!1)},a=X(o);a.addEventListener("mousedown",e,!0),a.addEventListener("contextmenu",e,!0);var s=(0,S.j)(n);return s&&(s.addEventListener("mousedown",e,!0),s.addEventListener("contextmenu",e,!0)),function(){a.removeEventListener("mousedown",e,!0),a.removeEventListener("contextmenu",e,!0),s&&(s.removeEventListener("mousedown",e,!0),s.removeEventListener("contextmenu",e,!0))}}}),[t,n,o,r,i])}(nt,Kt,Be,Ue,R,L,Ge,ut);var en,tn,nn=Ht.has("hover"),on=Ft.has("hover");nn&&(Jt("onMouseEnter",!0,y,(function(e){wt(e)})),Jt("onPointerEnter",!0,y,(function(e){wt(e)})),en=function(e){(nt||dt)&&null!=Ue&&Ue.contains(e.target)&&ut(!0,y)},de&&(je.onMouseMove=function(e){var t;null===(t=$e.onMouseMove)||void 0===t||t.call($e,e)})),on&&(Jt("onMouseLeave",!1,w),Jt("onPointerLeave",!1,w),tn=function(){ut(!1,w)}),Ht.has("focus")&&Jt("onFocus",!0,M),Ft.has("focus")&&Jt("onBlur",!1,k),Ht.has("contextMenu")&&(je.onContextMenu=function(e){var t;rt.current&&Ft.has("contextMenu")?ut(!1):(wt(e),ut(!0)),e.preventDefault();for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];null===(t=$e.onContextMenu)||void 0===t||t.call.apply(t,[$e,e].concat(o))}),we&&(je.className=N()($e.className,we));var rn=(0,o.A)((0,o.A)({},$e),je),an={};["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"].forEach((function(e){Ne[e]&&(an[e]=function(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null===(t=rn[e])||void 0===t||t.call.apply(t,[rn].concat(o)),Ne[e].apply(Ne,o)})}));var cn=a.cloneElement(Xe,(0,o.A)((0,o.A)({},rn),an)),ln={x:Rt,y:_t},un=me?(0,o.A)({},!0!==me?me:{}):null;return a.createElement(a.Fragment,null,a.createElement(C.A,{disabled:!nt,ref:Ve,onResize:function(){Zt(),Bt()}},a.createElement(W,{getTriggerDOMNode:Me},cn)),a.createElement(K.Provider,{value:Te},a.createElement(F,{portal:e,ref:Fe,prefixCls:l,popup:G,className:N()(q,zt),style:oe,target:Be,onMouseEnter:en,onMouseLeave:tn,onPointerEnter:en,zIndex:le,open:nt,keepDom:dt,fresh:fe,onClick:pe,mask:R,motion:Qe,maskMotion:qe,onVisibleChanged:function(e){pt(!1),It(),null==A||A(e)},onPrepare:function(){return new Promise((function(e){Zt(),gt((function(){return e}))}))},forceRender:U,autoDestroy:Ce,getPopupContainer:I,align:Lt,arrow:un,arrowPos:ln,ready:Ct,offsetX:xt,offsetY:St,offsetR:Pt,offsetB:kt,onAlign:Bt,stretch:ue,targetWidth:Xt/Tt,targetHeight:Qt/Ot})))}))}(w)},21301:(e,t,n)=>{n.d(t,{YK:()=>s,jH:()=>c});var o=n(22155),r=n(55972),i=n(1766);const a=100,c=1e3,l={Modal:a,Drawer:a,Popover:a,Popconfirm:a,Tooltip:a,Tour:a},u={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function s(e,t){const[,n]=(0,r.Ay)(),a=o.useContext(i.A),c=e in l;let s;if(void 0!==t)s=[t,t];else{let o=null!=a?a:0;o+=c?(a?0:n.zIndexPopupBase)+l[e]:u[e],s=[void 0===a?t:o,o]}return s}},62813:(e,t,n)=>{n.d(t,{A:()=>l,b:()=>c});const o=()=>({height:0,opacity:0}),r=e=>{const{scrollHeight:t}=e;return{height:t,opacity:1}},i=e=>({height:e?e.offsetHeight:0}),a=(e,t)=>!0===(null==t?void 0:t.deadline)||"height"===t.propertyName,c=(e,t,n)=>void 0!==n?n:`${e}-${t}`,l=function(){return{motionName:`${arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ant"}-motion-collapse`,onAppearStart:o,onEnterStart:o,onAppearActive:r,onEnterActive:r,onLeaveStart:i,onLeaveActive:o,onAppearEnd:a,onEnterEnd:a,onLeaveEnd:a,motionDeadline:500}}},1531:(e,t,n)=>{n.d(t,{_n:()=>i,rJ:()=>a});var o=n(22155);n(36216);function r(){}const i=o.createContext({}),a=()=>{const e=()=>{};return e.deprecated=r,e}},1766:(e,t,n)=>{n.d(t,{A:()=>o});const o=n(22155).createContext(void 0)},93546:(e,t,n)=>{n.d(t,{b:()=>i});const o=e=>({animationDuration:e,animationFillMode:"both"}),r=e=>({animationDuration:e,animationFillMode:"both"}),i=function(e,t,n,i){const a=arguments.length>4&&void 0!==arguments[4]&&arguments[4]?"&":"";return{[`\n      ${a}${e}-enter,\n      ${a}${e}-appear\n    `]:Object.assign(Object.assign({},o(i)),{animationPlayState:"paused"}),[`${a}${e}-leave`]:Object.assign(Object.assign({},r(i)),{animationPlayState:"paused"}),[`\n      ${a}${e}-enter${e}-enter-active,\n      ${a}${e}-appear${e}-appear-active\n    `]:{animationName:t,animationPlayState:"running"},[`${a}${e}-leave${e}-leave-active`]:{animationName:n,animationPlayState:"running",pointerEvents:"none"}}}},81966:(e,t,n)=>{n.d(t,{A:()=>r});var o={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=o.F1&&t<=o.F12)return!1;switch(t){case o.ALT:case o.CAPS_LOCK:case o.CONTEXT_MENU:case o.CTRL:case o.DOWN:case o.END:case o.ESC:case o.HOME:case o.INSERT:case o.LEFT:case o.MAC_FF_META:case o.META:case o.NUMLOCK:case o.NUM_CENTER:case o.PAGE_DOWN:case o.PAGE_UP:case o.PAUSE:case o.PRINT_SCREEN:case o.RIGHT:case o.SHIFT:case o.UP:case o.WIN_KEY:case o.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=o.ZERO&&e<=o.NINE)return!0;if(e>=o.NUM_ZERO&&e<=o.NUM_MULTIPLY)return!0;if(e>=o.A&&e<=o.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case o.SPACE:case o.QUESTION_MARK:case o.NUM_PLUS:case o.NUM_MINUS:case o.NUM_PERIOD:case o.NUM_DIVISION:case o.SEMICOLON:case o.DASH:case o.EQUALS:case o.COMMA:case o.PERIOD:case o.SLASH:case o.APOSTROPHE:case o.SINGLE_QUOTE:case o.OPEN_SQUARE_BRACKET:case o.BACKSLASH:case o.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};const r=o},26989:(e,t,n)=>{n.d(t,{A:()=>a,V:()=>c});var o,r=n(52897);function i(e){var t="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),n=document.createElement("div");n.id=t;var o,i,a=n.style;if(a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll",e){var c=getComputedStyle(e);a.scrollbarColor=c.scrollbarColor,a.scrollbarWidth=c.scrollbarWidth;var l=getComputedStyle(e,"::-webkit-scrollbar"),u=parseInt(l.width,10),s=parseInt(l.height,10);try{var f=u?"width: ".concat(l.width,";"):"",d=s?"height: ".concat(l.height,";"):"";(0,r.BD)("\n#".concat(t,"::-webkit-scrollbar {\n").concat(f,"\n").concat(d,"\n}"),t)}catch(m){console.error(m),o=u,i=s}}document.body.appendChild(n);var p=e&&o&&!isNaN(o)?o:n.offsetWidth-n.clientWidth,v=e&&i&&!isNaN(i)?i:n.offsetHeight-n.clientHeight;return document.body.removeChild(n),(0,r.m6)(t),{width:p,height:v}}function a(e){return"undefined"==typeof document?0:((e||void 0===o)&&(o=i()),o.width)}function c(e){return"undefined"!=typeof document&&e&&e instanceof Element?i(e):{width:0,height:0}}},84080:(e,t,n)=>{n.d(t,{A:()=>o});const o=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==e?void 0:e.substr(0,4))}}}]);