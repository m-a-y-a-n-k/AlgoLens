"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9459],{9459:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var r=n(2791),a=n(1288),i=n(7462),o=n(5987),l=(n(2007),n(4164)),s=n(503),d=n(8875),u=n(9806),c=n(3364),p=n(812),m=n(6043);function f(e,t){var n=function(e,t){var n,r=t.getBoundingClientRect();if(t.fakeTransform)n=t.fakeTransform;else{var a=window.getComputedStyle(t);n=a.getPropertyValue("-webkit-transform")||a.getPropertyValue("transform")}var i=0,o=0;if(n&&"none"!==n&&"string"===typeof n){var l=n.split("(")[1].split(")")[0].split(",");i=parseInt(l[4],10),o=parseInt(l[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(").concat(i-r.left,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-i,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(").concat(o-r.top,"px)"):"translateY(-".concat(r.top+r.height-o,"px)")}(e,t);n&&(t.style.webkitTransform=n,t.style.transform=n)}var h={enter:p.x9.enteringScreen,exit:p.x9.leavingScreen};const b=r.forwardRef((function(e,t){var n=e.children,a=e.direction,p=void 0===a?"down":a,b=e.in,v=e.onEnter,g=e.onEntered,x=e.onEntering,Z=e.onExit,y=e.onExited,w=e.onExiting,E=e.style,C=e.timeout,k=void 0===C?h:C,j=e.TransitionComponent,T=void 0===j?d.ZP:j,N=(0,o.Z)(e,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),P=(0,c.Z)(),F=r.useRef(null),S=r.useCallback((function(e){F.current=l.findDOMNode(e)}),[]),R=(0,u.Z)(n.ref,S),q=(0,u.Z)(R,t),I=function(e){return function(t){e&&(void 0===t?e(F.current):e(F.current,t))}},L=I((function(e,t){f(p,e),(0,m.n)(e),v&&v(e,t)})),$=I((function(e,t){var n=(0,m.C)({timeout:k,style:E},{mode:"enter"});e.style.webkitTransition=P.transitions.create("-webkit-transform",(0,i.Z)({},n,{easing:P.transitions.easing.easeOut})),e.style.transition=P.transitions.create("transform",(0,i.Z)({},n,{easing:P.transitions.easing.easeOut})),e.style.webkitTransform="none",e.style.transform="none",x&&x(e,t)})),M=I(g),O=I(w),B=I((function(e){var t=(0,m.C)({timeout:k,style:E},{mode:"exit"});e.style.webkitTransition=P.transitions.create("-webkit-transform",(0,i.Z)({},t,{easing:P.transitions.easing.sharp})),e.style.transition=P.transitions.create("transform",(0,i.Z)({},t,{easing:P.transitions.easing.sharp})),f(p,e),Z&&Z(e)})),H=I((function(e){e.style.webkitTransition="",e.style.transition="",y&&y(e)})),W=r.useCallback((function(){F.current&&f(p,F.current)}),[p]);return r.useEffect((function(){if(!b&&"down"!==p&&"right"!==p){var e=(0,s.Z)((function(){F.current&&f(p,F.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[p,b]),r.useEffect((function(){b||W()}),[b,W]),r.createElement(T,(0,i.Z)({nodeRef:F,onEnter:L,onEntered:M,onEntering:$,onExit:B,onExited:H,onExiting:O,appear:!0,in:b,timeout:k},N),(function(e,t){return r.cloneElement(n,(0,i.Z)({ref:q,style:(0,i.Z)({visibility:"exited"!==e||b?void 0:"hidden"},E,n.props.style)},t))}))}));var v=n(9135),g=n(8596),x=n(3108),Z=n(283),y=n(4697),w=n(6513),E=n(3188),C=n(6828),k=n(184);const j=(0,g.Z)({root:{minWidth:180}}),T=(0,g.Z)((e=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:`${(0,x.U1)(e.palette.primary.main,.25)} 0 0 0 2px`,borderColor:e.palette.primary.main}},focused:{}})));function N(e){const t=T();return(0,k.jsx)(E.Z,{InputProps:{classes:t,disableUnderline:!0},...e})}const P=(0,g.Z)((e=>({root:{width:"100%",margin:e.spacing(1)}}))),F=(0,g.Z)((e=>({root:{margin:e.spacing(1)}}))),S=(0,g.Z)((e=>({root:{margin:e.spacing(1)}}))),R=e=>{const[t,n]=(0,r.useState)(null),[a,i]=(0,r.useState)(null),o=j(),l=F(),s=S(),d=P();return(0,k.jsxs)(Z.Z,{className:o.root,variant:"outlined",children:[(0,k.jsx)("h2",{className:"bg-success text-white p-2",children:" Exponentiation Of Number "}),(0,k.jsx)("h4",{className:"text-primary p-2",children:"Base and Power"}),(0,k.jsx)(y.Z,{children:(0,k.jsxs)(C.Z,{className:`pb-3 pr-0 pl-2 pt-1 ${d.root}`,children:[(0,k.jsx)(N,{label:"Base",className:l.root,variant:"filled",id:"reddit-input-base",onChange:e=>{n(e.target.value)},value:t||"",disabled:e.disabled}),(0,k.jsx)(N,{label:"Power",className:l.root,variant:"filled",id:"reddit-input-power",onChange:e=>{i(e.target.value)},value:a||"",disabled:e.disabled}),(0,k.jsx)(w.Z,{className:s.root,disabled:e.disabled,onClick:()=>{e.expo(parseFloat(t),parseInt(a)),setTimeout((()=>{n(null),i(null)}),100)},variant:"contained",color:"primary",size:"small",children:"Submit"})]})})]})},q=(0,r.lazy)((()=>n.e(267).then(n.bind(n,267)))),I=()=>{const[e,t]=(0,r.useState)({result:[],base:null,power:null,disabled:!1,ans:null}),n=(0,r.useCallback)((e=>{t((t=>{const n=[];for(let a=0;a<e-1;a+=2)n.push(t.result[a]*t.result[a+1]);e%2===1&&n.push(t.result[e-1]);const r=1===n.length;return{...t,result:n,disabled:!r,ans:r?n[0]:t.ans}}))}),[]);(0,r.useEffect)((()=>{if(e.disabled&&e.result.length>0){const t=setTimeout((()=>{n(Math.ceil(e.result.length))}),1200);return()=>clearTimeout(t)}}),[e.disabled,e.result,n]);const i=(0,r.useCallback)(((e,r)=>{if(0===r)return void t({result:[],base:e,power:r,disabled:!1,ans:1});const a=Array(r).fill(e);t({result:a,base:e,power:r,disabled:!0,ans:null}),setTimeout((()=>{n(r)}),500)}),[n]),{result:o,base:l,power:s,disabled:d,ans:u}=e;return(0,k.jsxs)(a.Z,{container:!0,children:[(0,k.jsx)(b,{direction:"right",in:!d,mountOnEnter:!0,unmountOnExit:!0,children:(0,k.jsx)(a.Z,{item:!0,xs:12,sm:6,className:"text-center m-4",children:(0,k.jsx)(R,{disabled:d,expo:i})})}),(0,k.jsx)(b,{direction:"left",in:d||null!==u,mountOnEnter:!0,unmountOnExit:!0,children:(0,k.jsxs)(a.Z,{item:!0,xs:12,sm:d?12:4,className:"text-center m-4",children:[null!==l&&null!==s&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(q,{highlight:!0,data:{value:`${l} ^ ${s}`},type:"array"}),(0,k.jsx)(v.vE7,{style:{margin:"auto 5px"}})]}),o.length>=1&&d&&o.map(((e,t)=>(0,k.jsxs)(r.Fragment,{children:[t>0&&(0,k.jsx)(v.aHS,{style:{margin:"auto 5px"}}),(0,k.jsx)(q,{highlight:1===o.length,data:{value:e},type:"array"},`val_${t}`)]},`res_mul_val_${t}`))),!d&&null!==u&&(0,k.jsx)(q,{highlight:!0,data:{value:u},type:"array"},"result")]})})]})}},3188:(e,t,n)=>{n.d(t,{Z:()=>Z});var r=n(7462),a=n(5987),i=n(2791),o=(n(2007),n(8182)),l=n(7104),s=n(7376),d=n(7692),u=n(5480),c=n(6828),p=n(4326),m=n(1024),f=n(8317),h=i.forwardRef((function(e,t){var n=e.children,l=e.classes,s=e.className,d=e.component,u=void 0===d?"p":d,c=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,(0,a.Z)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),f=(0,m.Z)(),h=(0,p.Z)({props:e,muiFormControl:f,states:["variant","margin","disabled","error","filled","focused","required"]});return i.createElement(u,(0,r.Z)({className:(0,o.Z)(l.root,("filled"===h.variant||"outlined"===h.variant)&&l.contained,s,h.disabled&&l.disabled,h.error&&l.error,h.filled&&l.filled,h.focused&&l.focused,h.required&&l.required,"dense"===h.margin&&l.marginDense),ref:t},c)," "===n?i.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):n)}));const b=(0,f.Z)((function(e){return{root:(0,r.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(h);var v=n(7394),g={standard:l.Z,filled:s.Z,outlined:d.Z},x=i.forwardRef((function(e,t){var n=e.autoComplete,l=e.autoFocus,s=void 0!==l&&l,d=e.children,p=e.classes,m=e.className,f=e.color,h=void 0===f?"primary":f,x=e.defaultValue,Z=e.disabled,y=void 0!==Z&&Z,w=e.error,E=void 0!==w&&w,C=e.FormHelperTextProps,k=e.fullWidth,j=void 0!==k&&k,T=e.helperText,N=e.hiddenLabel,P=e.id,F=e.InputLabelProps,S=e.inputProps,R=e.InputProps,q=e.inputRef,I=e.label,L=e.multiline,$=void 0!==L&&L,M=e.name,O=e.onBlur,B=e.onChange,H=e.onFocus,W=e.placeholder,_=e.required,V=void 0!==_&&_,z=e.rows,D=e.rowsMax,X=e.select,Y=void 0!==X&&X,A=e.SelectProps,U=e.type,G=e.value,J=e.variant,K=void 0===J?"standard":J,Q=(0,a.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===K&&(F&&"undefined"!==typeof F.shrink&&(ee.notched=F.shrink),I)){var te,ne=null!==(te=null===F||void 0===F?void 0:F.required)&&void 0!==te?te:V;ee.label=i.createElement(i.Fragment,null,I,ne&&"\xa0*")}Y&&(A&&A.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var re=T&&P?"".concat(P,"-helper-text"):void 0,ae=I&&P?"".concat(P,"-label"):void 0,ie=g[K],oe=i.createElement(ie,(0,r.Z)({"aria-describedby":re,autoComplete:n,autoFocus:s,defaultValue:x,fullWidth:j,multiline:$,name:M,rows:z,rowsMax:D,type:U,value:G,id:P,inputRef:q,onBlur:O,onChange:B,onFocus:H,placeholder:W,inputProps:S},ee,R));return i.createElement(c.Z,(0,r.Z)({className:(0,o.Z)(p.root,m),disabled:y,error:E,fullWidth:j,hiddenLabel:N,ref:t,required:V,color:h,variant:K},Q),I&&i.createElement(u.Z,(0,r.Z)({htmlFor:P,id:ae},F),I),Y?i.createElement(v.Z,(0,r.Z)({"aria-describedby":re,id:P,labelId:ae,value:G,input:oe},A),d):oe,T&&i.createElement(b,(0,r.Z)({id:re},C),T))}));const Z=(0,f.Z)({root:{}},{name:"MuiTextField"})(x)}}]);
//# sourceMappingURL=9459.9ab83713.chunk.js.map