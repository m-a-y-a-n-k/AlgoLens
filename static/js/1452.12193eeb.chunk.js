"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1452],{1452:(e,a,r)=>{r.r(a),r.d(a,{default:()=>g});var t=r(2791),l=r(1288),n=r(5095),o=r(283),i=r(6950),s=r(2953),d=r(3188),c=r(6513),u=r(184);const p=t.memo((e=>{let{handleRangeSubmit:a}=e;const[r,l]=(0,t.useState)(null),[n,p]=(0,t.useState)(null);return(0,u.jsxs)(o.Z,{children:[(0,u.jsx)(i.Z,{title:"Primes in Range",titleTypographyProps:{variant:"h5",color:"primary"},subheader:"Find primes from start to end number in range",subheaderTypographyProps:{variant:"subtitle1",color:"secondary"}}),(0,u.jsxs)(s.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,u.jsx)(d.Z,{type:"number",label:"Start of Range",color:"secondary",onChange:e=>l(e.target.value),value:null!==r&&void 0!==r?r:""}),(0,u.jsx)(d.Z,{type:"number",label:"End of Range",color:"secondary",className:"mt-2",onChange:e=>p(e.target.value),value:null!==n&&void 0!==n?n:""}),(0,u.jsx)(c.Z,{style:{marginTop:12,backgroundColor:"#403d4a",color:"white"},type:"submit",onClick:()=>{a(parseInt(r),parseInt(n)),l(null),p(null)},children:"Submit"})]})]})}));p.displayName="Range";const m=p;var h=r(2338);const v=(0,t.lazy)((()=>r.e(267).then(r.bind(r,267)))),f=e=>{let{start:a,end:r,sieve:n}=e;const o=(0,t.useMemo)((()=>n(a,r)),[a,r]);return(0,u.jsx)(h.t7,{height:400,itemCount:o.length,itemSize:100,width:"100%",children:e=>{let{index:a,style:r}=e;return(0,u.jsx)(l.Z,{item:!0,xs:12,style:r,children:(0,u.jsx)(v,{highlight:o[a].prime,data:{value:o[a].value,index:a},type:"array"})})}})},g=()=>{const[e,a]=(0,t.useState)(null),[r,o]=(0,t.useState)(0),[i,s]=(0,t.useState)(-1),d=(0,t.useCallback)(((e,a)=>{o(e),s(a)}),[]),c=(0,t.useCallback)(((e,r)=>{if(r-e>=1e3||r>1e8)return a({text:"Too big range not supported yet",type:"danger"}),[];if(e>r)return[];let t=[],l=new Set,n=new Set;for(let a=e;a<=r;a++)t.push({value:a,prime:a>=2});for(let a=2;a*a<=r;a++)if(!n.has(a)){l.add(a);for(let e=2*a;e<=r;e+=a)n.add(e)}return l.forEach((a=>{let l=(e+a-1)%a;for(;l<r-e;l+=a)t[l].prime=!1})),a({text:"The prime ones are highlighted in green",type:"success"}),t}),[]);return(0,u.jsxs)(u.Fragment,{children:[e&&(0,u.jsx)(n.Z,{color:e.type,isOpen:!!e.text,toggle:()=>a(null),children:e.text}),(0,u.jsxs)(l.Z,{container:!0,children:[(0,u.jsx)(l.Z,{container:!0,className:"text-center",children:(0,u.jsx)(l.Z,{item:!0,xs:12,children:(0,u.jsx)(m,{handleRangeSubmit:d})})}),(0,u.jsx)(l.Z,{container:!0,className:"mt-4 mb-4 text-center",children:(0,u.jsx)(t.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(f,{start:r,end:i,sieve:c})})})]})]})}},2953:(e,a,r)=>{r.d(a,{Z:()=>d});var t=r(7462),l=r(5987),n=r(2791),o=(r(2007),r(8182)),i=r(8317),s=n.forwardRef((function(e,a){var r=e.classes,i=e.className,s=e.component,d=void 0===s?"div":s,c=(0,l.Z)(e,["classes","className","component"]);return n.createElement(d,(0,t.Z)({className:(0,o.Z)(r.root,i),ref:a},c))}));const d=(0,i.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(s)},6950:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(7462),l=r(5987),n=r(2791),o=(r(2007),r(8182)),i=r(8317),s=r(8302),d=n.forwardRef((function(e,a){var r=e.action,i=e.avatar,d=e.classes,c=e.className,u=e.component,p=void 0===u?"div":u,m=e.disableTypography,h=void 0!==m&&m,v=e.subheader,f=e.subheaderTypographyProps,g=e.title,b=e.titleTypographyProps,y=(0,l.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=g;null==x||x.type===s.Z||h||(x=n.createElement(s.Z,(0,t.Z)({variant:i?"body2":"h5",className:d.title,component:"span",display:"block"},b),x));var Z=v;return null==Z||Z.type===s.Z||h||(Z=n.createElement(s.Z,(0,t.Z)({variant:i?"body2":"body1",className:d.subheader,color:"textSecondary",component:"span",display:"block"},f),Z)),n.createElement(p,(0,t.Z)({className:(0,o.Z)(d.root,c),ref:a},y),i&&n.createElement("div",{className:d.avatar},i),n.createElement("div",{className:d.content},x,Z),r&&n.createElement("div",{className:d.action},r))}));const c=(0,i.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(d)},3188:(e,a,r)=>{r.d(a,{Z:()=>x});var t=r(7462),l=r(5987),n=r(2791),o=(r(2007),r(8182)),i=r(7104),s=r(7376),d=r(7692),c=r(5480),u=r(6828),p=r(4326),m=r(1024),h=r(8317),v=n.forwardRef((function(e,a){var r=e.children,i=e.classes,s=e.className,d=e.component,c=void 0===d?"p":d,u=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,(0,l.Z)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),h=(0,m.Z)(),v=(0,p.Z)({props:e,muiFormControl:h,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(c,(0,t.Z)({className:(0,o.Z)(i.root,("filled"===v.variant||"outlined"===v.variant)&&i.contained,s,v.disabled&&i.disabled,v.error&&i.error,v.filled&&i.filled,v.focused&&i.focused,v.required&&i.required,"dense"===v.margin&&i.marginDense),ref:a},u)," "===r?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):r)}));const f=(0,h.Z)((function(e){return{root:(0,t.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(v);var g=r(7394),b={standard:i.Z,filled:s.Z,outlined:d.Z},y=n.forwardRef((function(e,a){var r=e.autoComplete,i=e.autoFocus,s=void 0!==i&&i,d=e.children,p=e.classes,m=e.className,h=e.color,v=void 0===h?"primary":h,y=e.defaultValue,x=e.disabled,Z=void 0!==x&&x,N=e.error,T=void 0!==N&&N,j=e.FormHelperTextProps,C=e.fullWidth,P=void 0!==C&&C,S=e.helperText,E=e.hiddenLabel,w=e.id,R=e.InputLabelProps,F=e.inputProps,k=e.InputProps,q=e.inputRef,I=e.label,M=e.multiline,L=void 0!==M&&M,H=e.name,B=e.onBlur,W=e.onChange,D=e.onFocus,V=e.placeholder,z=e.required,$=void 0!==z&&z,_=e.rows,A=e.rowsMax,O=e.select,G=void 0!==O&&O,J=e.SelectProps,K=e.type,Q=e.value,U=e.variant,X=void 0===U?"standard":U,Y=(0,l.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===X&&(R&&"undefined"!==typeof R.shrink&&(ee.notched=R.shrink),I)){var ae,re=null!==(ae=null===R||void 0===R?void 0:R.required)&&void 0!==ae?ae:$;ee.label=n.createElement(n.Fragment,null,I,re&&"\xa0*")}G&&(J&&J.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var te=S&&w?"".concat(w,"-helper-text"):void 0,le=I&&w?"".concat(w,"-label"):void 0,ne=b[X],oe=n.createElement(ne,(0,t.Z)({"aria-describedby":te,autoComplete:r,autoFocus:s,defaultValue:y,fullWidth:P,multiline:L,name:H,rows:_,rowsMax:A,type:K,value:Q,id:w,inputRef:q,onBlur:B,onChange:W,onFocus:D,placeholder:V,inputProps:F},ee,k));return n.createElement(u.Z,(0,t.Z)({className:(0,o.Z)(p.root,m),disabled:Z,error:T,fullWidth:P,hiddenLabel:E,ref:a,required:$,color:v,variant:X},Y),I&&n.createElement(c.Z,(0,t.Z)({htmlFor:w,id:le},R),I),G?n.createElement(g.Z,(0,t.Z)({"aria-describedby":te,id:w,labelId:le,value:Q,input:oe},J),d):oe,S&&n.createElement(f,(0,t.Z)({id:te},j),S))}));const x=(0,h.Z)({root:{}},{name:"MuiTextField"})(y)}}]);
//# sourceMappingURL=1452.12193eeb.chunk.js.map