"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2117,267],{267:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});t(2791);var n=t(184);const l=e=>{let{direction:r,label:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"link-label",children:t}),(0,n.jsx)("div",{className:"link",children:(e=>{switch(e.toLowerCase()){case"left":return(0,n.jsx)("i",{className:"ico left"});case"up":return(0,n.jsx)("i",{className:"ico up"});case"down":return(0,n.jsx)("i",{className:"ico down"});default:return(0,n.jsx)("i",{className:"ico right"})}})(r)})]})};var s=t(2541);const a=e=>{let{type:r,data:t,highlight:a,next:o,AllGreater:i,AllSmaller:c}=e,p=null,d={border:"1px solid white",background:"rgba(40,60,180,0.8)"};a&&(d.background="rgba(30,150,40,0.8)");const u=r.toLowerCase();switch(u){case"stack":p=[0===t.index&&(0,n.jsx)(s.Z,{p:1,textAlign:"center",children:"Top"},"Top"),(0,n.jsxs)(s.Z,{p:1,style:{...d,background:a?"rgba(30,150,40,0.8)":"rgba(40,40,160,0.8)"},children:[(0,n.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:t.value}),(0,n.jsx)(s.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:t.index})]},`${t.index}-${t.value}`)];break;case"array":case"linkedlist":case"queues":p=(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[("queues"===u||"linkedlist"===u)&&0===t.index&&(0,n.jsx)(s.Z,{color:"white",p:1,className:"bg-danger",textAlign:"center",fontSize:12,children:(0,n.jsxs)("typography",{children:["linkedlist"===u?"Head":"Front"," ",(0,n.jsx)("br",{})]})}),(0,n.jsxs)(s.Z,{p:1,style:{...d,background:a?"rgba(30,150,40,0.8)":"rgba(40,60,180,0.8)"},children:[(0,n.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:t.value}),t.index>=0&&(0,n.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:12,children:t.index})]}),("queues"===u||"linkedlist"===u)&&!1===o&&(0,n.jsx)(s.Z,{color:"white",p:1,className:"bg-danger",textAlign:"center",fontSize:12,children:(0,n.jsx)("typography",{children:"linkedlist"===u?"Tail":"Rear"})}),("linkedlist"===u||"queues"===u)&&o&&(0,n.jsx)(s.Z,{component:"span",children:(0,n.jsx)(l,{direction:"right"})},`${t.index}-${t.value}-nextlink`)]},`${t.value}-${t.index}`);break;case"sets":p=(0,n.jsx)(s.Z,{p:1,style:{...d,background:a?"rgba(30,150,40,0.8)":i?"rgba(242,19,23,0.8)":c?"rgba(250,183,0,0.8)":"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},children:(0,n.jsx)(s.Z,{p:0,color:"white",fontSize:18,children:(0,n.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:t.value})})},t.value)}return t&&p}},2117:(e,r,t)=>{t.r(r),t.d(r,{default:()=>C});var n=t(2791),l=t(267),s=t(1288),a=t(5095),o=t(2377),i=t(4555),c=t(7498),p=t(387),d=t(7135),u=t(2919),h=t(7595),x=t(150),m=t(7788),g=t(5121),f=t(6513),y=t(184);const j=e=>{let{array:r,updateState:t,alertId:l}=e;const[s,j]=(0,n.useState)(!1),[Z,b]=(0,n.useState)(null),[v,S]=(0,n.useState)("Start"),[k,C]=(0,n.useState)(null),w=(0,n.useCallback)((()=>{j((e=>!e))}),[]),I=(0,n.useCallback)((()=>{if(Z){const e=[...r];if("start"===v.toLowerCase())e.splice(0,0,Z);else e.splice(e.length,0,Z);C({text:"Inserted successfully",type:"success",alertId:1}),t({array:e,highlights:[]})}else C({text:"Submission is empty",type:"danger",alertId:1})}),[r,Z,v,t]);return(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(m.Z,{expandIcon:(0,y.jsx)(h.Z,{}),children:"Insert Element"}),(0,y.jsxs)(g.Z,{style:{flexDirection:"column"},children:[k&&k.alertId===l&&(0,y.jsx)(a.Z,{color:k.type,isOpen:!!k.text,toggle:()=>{C(null)},children:k.text}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(i.Z,{onChange:e=>b(e.target.value),value:null!==Z&&void 0!==Z?Z:""}),(0,y.jsxs)(c.Z,{addonType:"append",isOpen:s,toggle:w,children:[(0,y.jsx)(p.Z,{caret:!0,children:v}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(u.Z,{onClick:()=>S("Start"),children:"Start"}),(0,y.jsx)(u.Z,{divider:!0}),(0,y.jsx)(u.Z,{onClick:()=>S("End"),children:"End"})]})]})]}),(0,y.jsx)(f.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{I(),b(null)},children:"Submit"})]})]})};var Z=t(1840),b=t(4594);const v=e=>{let{array:r,updateState:t,alertId:l}=e;const[s,j]=(0,n.useState)(!1),[v,S]=(0,n.useState)(null),[k,C]=(0,n.useState)(0),[w,I]=(0,n.useState)(null),N=["Select","Start","End"],P=(0,n.useCallback)((()=>{j((e=>!e))}),[]),T=(0,n.useCallback)((()=>{let e,n=[...r],l=n.length>0;if(v)e=l&&!!n.find((e=>e===v)),n=n.filter((e=>e!==v));else switch(N[k].toLowerCase()){case"start":n.splice(0,1);break;case"end":n.splice(n.length-1,1);break;default:e=l=!1}I({text:e?"Deleted Successfully":l?"Value not present":"Delete operation is invalid",type:e?"success":l?"warning":"danger",alertId:2}),t({array:n,highlights:[]})}),[r,v,N,k,t]);return(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(m.Z,{expandIcon:(0,y.jsx)(h.Z,{}),children:"Delete Element (Position or Value)"}),(0,y.jsxs)(g.Z,{style:{flexDirection:"column"},children:[w&&w.alertId===l&&(0,y.jsx)(a.Z,{color:w.type,isOpen:!!w.text,toggle:()=>{I(null)},children:w.text}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(Z.Z,{addonType:"prepend",children:(0,y.jsx)(b.Z,{children:"Position"})}),(0,y.jsxs)(c.Z,{addonType:"append",isOpen:s,toggle:P,children:[(0,y.jsx)(p.Z,{caret:!0,children:N[k]}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(u.Z,{onClick:()=>C(0),children:"Select"}),(0,y.jsx)(u.Z,{divider:!0}),(0,y.jsx)(u.Z,{onClick:()=>C(1),children:"Start"}),(0,y.jsx)(u.Z,{divider:!0}),(0,y.jsx)(u.Z,{onClick:()=>C(2),children:"End"})]})]})]}),(0,y.jsx)("span",{className:"m-2",children:"Or"}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(Z.Z,{addonType:"prepend",children:(0,y.jsx)(b.Z,{children:"Value"})}),(0,y.jsx)(i.Z,{placeholder:"Value",onChange:e=>{S(e.target.value),C(0)},disabled:!!k,value:null!==v&&void 0!==v?v:""})]}),(0,y.jsx)(f.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{T(),S(null)},children:"Submit"})]})]})},S=e=>{let{array:r,updateState:t,alertId:l}=e;const[s,c]=(0,n.useState)(null),[p,d]=(0,n.useState)(null),[u,j]=(0,n.useState)(null),v=(0,n.useCallback)((()=>{const e=parseInt(p);if(e>=0&&e<r.length&&s){const n=[...r];n[e]=s,j({text:"Successfully updated check highlighted element",type:"success",alertId:3}),t({array:n,highlights:[e]})}else j({text:"Invalid update operation",type:"danger",alertId:3})}),[r,p,s,t]);return(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(m.Z,{expandIcon:(0,y.jsx)(h.Z,{}),children:"Update Element (Value at Position)"}),(0,y.jsxs)(g.Z,{style:{flexDirection:"column"},children:[u&&u.alertId===l&&(0,y.jsx)(a.Z,{color:u.type,isOpen:!!u.text,toggle:()=>{j(null)},children:u.text}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(Z.Z,{addonType:"prepend",children:(0,y.jsx)(b.Z,{children:"Position"})}),(0,y.jsx)(i.Z,{type:"number",placeholder:"Position",onChange:e=>d(e.target.value),value:null!==p&&void 0!==p?p:""})]}),(0,y.jsxs)(o.Z,{className:"mt-3",children:[(0,y.jsx)(Z.Z,{addonType:"prepend",children:(0,y.jsx)(b.Z,{children:"Value"})}),(0,y.jsx)(i.Z,{placeholder:"Value",onChange:e=>c(e.target.value),value:null!==s&&void 0!==s?s:""})]}),(0,y.jsx)(f.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{v(),d(null),c(null)},children:"Submit"})]})]})},k=e=>{let{array:r,updateState:t,alertId:l}=e;const[s,c]=(0,n.useState)(null),[p,d]=(0,n.useState)(null),u=(0,n.useCallback)((()=>{if(s){const e=r.map(((e,r)=>e===s?r:-1)).filter((e=>-1!==e)),n=e.length>0;d({text:n?"Searched values are highlighted":"No matches found",type:"success",alertId:4}),t({highlights:e})}else d({text:"Empty Search",type:"danger",alertId:4})}),[r,s,t]);return(0,y.jsxs)(x.Z,{children:[(0,y.jsx)(m.Z,{expandIcon:(0,y.jsx)(h.Z,{}),children:"Search Element (Value at Position)"}),(0,y.jsxs)(g.Z,{style:{flexDirection:"column"},children:[p&&p.alertId===l&&(0,y.jsx)(a.Z,{color:p.type,isOpen:!!p.text,toggle:()=>{d(null)},children:p.text}),(0,y.jsxs)(o.Z,{children:[(0,y.jsx)(Z.Z,{addonType:"prepend",children:(0,y.jsx)(b.Z,{children:"Value"})}),(0,y.jsx)(i.Z,{placeholder:"Value",onChange:e=>c(e.target.value),value:null!==s&&void 0!==s?s:""})]}),(0,y.jsx)(f.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{u(),c(null)},children:"Submit"})]})]})},C=()=>{const[e,r]=(0,n.useState)({array:[],highlights:[]}),t=(0,n.useCallback)((e=>{r((r=>({...r,...e})))}),[]);return(0,y.jsxs)(s.Z,{container:!0,children:[(0,y.jsxs)(s.Z,{container:!0,children:[(0,y.jsx)(s.Z,{item:!0,sm:12,className:"mt-2",children:(0,y.jsx)(j,{array:e.array,updateState:t,alertId:1})}),(0,y.jsx)(s.Z,{item:!0,sm:12,className:"mt-2",children:(0,y.jsx)(v,{array:e.array,updateState:t,alertId:2})}),(0,y.jsx)(s.Z,{item:!0,sm:12,className:"mt-2",children:(0,y.jsx)(S,{array:e.array,updateState:t,alertId:3})}),(0,y.jsx)(s.Z,{item:!0,sm:12,className:"mt-2",children:(0,y.jsx)(k,{array:e.array,updateState:t,alertId:4})})]}),(0,y.jsx)(s.Z,{container:!0,className:"mt-4 mb-4",children:e.array.map(((r,t)=>{const n=e.highlights.includes(t);return(0,y.jsx)(s.Z,{item:!0,sm:3,children:(0,y.jsx)(l.default,{highlight:n,data:{value:r,index:t},type:"array"})},`${r}-${t}`)}))})]})}},2541:(e,r,t)=>{t.d(r,{Z:()=>G});var n=t(3433),l=t(7462),s=(t(2007),t(7351));const a=function(e){var r=function(r){var t=e(r);return r.css?(0,l.Z)({},(0,s.Z)(t,e((0,l.Z)({theme:r.theme},r.css))),function(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}(r.css,[e.filterProps])):t};return r.propTypes={},r.filterProps=["css"].concat((0,n.Z)(e.filterProps)),r};const o=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=function(e){return r.reduce((function(r,t){var n=t(e);return n?(0,s.Z)(r,n):r}),{})};return n.propTypes={},n.filterProps=r.reduce((function(e,r){return e.concat(r.filterProps)}),[]),n};var i=t(4942),c=t(6086);function p(e,r){return r&&"string"===typeof r?r.split(".").reduce((function(e,r){return e&&e[r]?e[r]:null}),e):null}const d=function(e){var r=e.prop,t=e.cssProperty,n=void 0===t?e.prop:t,l=e.themeKey,s=e.transform,a=function(e){if(null==e[r])return null;var t=e[r],a=p(e.theme,l)||{};return(0,c.k)(e,t,(function(e){var r;return"function"===typeof a?r=a(e):Array.isArray(a)?r=a[e]||e:(r=p(a,e)||e,s&&(r=s(r))),!1===n?r:(0,i.Z)({},n,r)}))};return a.propTypes={},a.filterProps=[r],a};function u(e){return"number"!==typeof e?e:"".concat(e,"px solid")}const h=o(d({prop:"border",themeKey:"borders",transform:u}),d({prop:"borderTop",themeKey:"borders",transform:u}),d({prop:"borderRight",themeKey:"borders",transform:u}),d({prop:"borderBottom",themeKey:"borders",transform:u}),d({prop:"borderLeft",themeKey:"borders",transform:u}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"}));const x=o(d({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"}));const m=o(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"}));const g=o(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"}));const f=o(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"}));const y=o(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"}));const j=d({prop:"boxShadow",themeKey:"shadows"});function Z(e){return e<=1?"".concat(100*e,"%"):e}var b=d({prop:"width",transform:Z}),v=d({prop:"maxWidth",transform:Z}),S=d({prop:"minWidth",transform:Z}),k=d({prop:"height",transform:Z}),C=d({prop:"maxHeight",transform:Z}),w=d({prop:"minHeight",transform:Z});d({prop:"size",cssProperty:"width",transform:Z}),d({prop:"size",cssProperty:"height",transform:Z});const I=o(b,v,S,k,C,w,d({prop:"boxSizing"}));var N=t(9908);const P=o(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"}));var T=t(5987),A=t(2791),K=t(8182),z=t(2110),E=t.n(z),O=t(3401);function V(e,r){var t={};return Object.keys(e).forEach((function(n){-1===r.indexOf(n)&&(t[n]=e[n])})),t}var R=t(663);const D=function(e){var r=function(e){return function(r){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n.name,a=(0,T.Z)(n,["name"]),o=s,i="function"===typeof r?function(e){return{root:function(t){return r((0,l.Z)({theme:e},t))}}}:{root:r},c=(0,O.Z)(i,(0,l.Z)({Component:e,name:s||e.displayName,classNamePrefix:o},a));r.filterProps&&(t=r.filterProps,delete r.filterProps),r.propTypes&&(r.propTypes,delete r.propTypes);var p=A.forwardRef((function(r,n){var s=r.children,a=r.className,o=r.clone,i=r.component,p=(0,T.Z)(r,["children","className","clone","component"]),d=c(r),u=(0,K.Z)(d.root,a),h=p;if(t&&(h=V(h,t)),o)return A.cloneElement(s,(0,l.Z)({className:(0,K.Z)(s.props.className,u)},h));if("function"===typeof s)return s((0,l.Z)({className:u},h));var x=i||e;return A.createElement(x,(0,l.Z)({ref:n,className:u},h),s)}));return E()(p,e),p}}(e);return function(e,t){return r(e,(0,l.Z)({defaultTheme:R.Z},t))}};var $=a(o(h,x,m,g,f,y,j,I,N.Z,P));const G=D("div")($,{name:"MuiBox"})}}]);
//# sourceMappingURL=2117.2045aebf.chunk.js.map