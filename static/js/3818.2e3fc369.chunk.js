"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3818],{1452:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var o=t(2791),r=t(1288),n=t(5095),i=t(283),l=t(6950),d=t(2953),s=t(3188),c=t(6513),p=t(184);const u=o.memo((e=>{let{handleRangeSubmit:a}=e;const[t,r]=(0,o.useState)(null),[n,u]=(0,o.useState)(null);return(0,p.jsxs)(i.Z,{children:[(0,p.jsx)(l.Z,{title:"Primes in Range",titleTypographyProps:{variant:"h5",color:"primary"},subheader:"Find primes from start to end number in range",subheaderTypographyProps:{variant:"subtitle1",color:"secondary"}}),(0,p.jsxs)(d.Z,{style:{display:"flex",flexDirection:"column"},children:[(0,p.jsx)(s.Z,{type:"number",label:"Start of Range",color:"secondary",onChange:e=>r(e.target.value),value:null!==t&&void 0!==t?t:""}),(0,p.jsx)(s.Z,{type:"number",label:"End of Range",color:"secondary",className:"mt-2",onChange:e=>u(e.target.value),value:null!==n&&void 0!==n?n:""}),(0,p.jsx)(c.Z,{style:{marginTop:12,backgroundColor:"#403d4a",color:"white"},type:"submit",onClick:()=>{a(parseInt(t),parseInt(n)),r(null),u(null)},children:"Submit"})]})]})}));u.displayName="Range";const m=u;var h=t(2338);const b=(0,o.lazy)((()=>t.e(267).then(t.bind(t,267)))),g=e=>{let{start:a,end:t,sieve:n}=e;const[i,l]=(0,o.useState)([]),[d,s]=(0,o.useState)([]);return(0,o.useEffect)((()=>{l(Array.from({length:t-a+1}).map(((e,t)=>t+a))),s(n(a,t))}),[a,t]),(0,p.jsx)(h.t7,{height:120,itemCount:i.length,itemSize:200,width:window.innerWidth||800,direction:"horizontal",children:e=>{let{index:a,style:t}=e;return(0,p.jsx)(r.Z,{item:!0,xs:12,style:t,children:(0,p.jsx)(b,{highlight:d[a],data:{value:i[a],index:a},type:"array"})})}})},f=()=>{const[e,a]=(0,o.useState)(null),[t,i]=(0,o.useState)(0),[l,d]=(0,o.useState)(-1),s=(0,o.useCallback)(((e,a)=>{i(e),d(a)}),[]),c=(0,o.useCallback)(((e,t)=>{if(t-e>=1e6||t>1e8)return a({text:"Range is too big and not supported yet",type:"danger"}),[];if(e>t)return[];const o=Array(t-e+1).fill(!0);if(e<=1)for(let a=0;a<=Math.min(t,1)-e;a++)o[a]=!1;for(let a=2;a*a<=t;a++){let r=Math.max(a*a,Math.ceil(e/a)*a);if(!(r>t))for(let n=r;n<=t;n+=a)o[n-e]=!1}return a({text:"The prime ones are highlighted in green",type:"success"}),o}),[]);return(0,p.jsxs)(p.Fragment,{children:[e&&(0,p.jsx)(n.Z,{color:e.type,isOpen:!!e.text,toggle:()=>a(null),children:e.text}),(0,p.jsxs)(r.Z,{container:!0,children:[(0,p.jsx)(r.Z,{container:!0,className:"text-center",children:(0,p.jsx)(r.Z,{item:!0,xs:12,children:(0,p.jsx)(m,{handleRangeSubmit:s})})}),(0,p.jsx)(r.Z,{container:!0,className:"mt-4 mb-4 text-center",children:(0,p.jsx)(o.Suspense,{fallback:(0,p.jsx)("div",{children:"Loading..."}),children:(0,p.jsx)(g,{start:t,end:l,sieve:c})})})]})]})}},6513:(e,a,t)=>{t.d(a,{Z:()=>u});var o=t(5987),r=t(7462),n=t(2791),i=(t(2007),t(8182)),l=t(8317),d=t(3108),s=t(6706),c=t(1122),p=n.forwardRef((function(e,a){var t=e.children,l=e.classes,d=e.className,p=e.color,u=void 0===p?"default":p,m=e.component,h=void 0===m?"button":m,b=e.disabled,g=void 0!==b&&b,f=e.disableElevation,y=void 0!==f&&f,v=e.disableFocusRipple,x=void 0!==v&&v,Z=e.endIcon,S=e.focusVisibleClassName,C=e.fullWidth,w=void 0!==C&&C,k=e.size,R=void 0===k?"medium":k,z=e.startIcon,T=e.type,N=void 0===T?"button":T,E=e.variant,P=void 0===E?"text":E,j=(0,o.Z)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),I=z&&n.createElement("span",{className:(0,i.Z)(l.startIcon,l["iconSize".concat((0,c.Z)(R))])},z),F=Z&&n.createElement("span",{className:(0,i.Z)(l.endIcon,l["iconSize".concat((0,c.Z)(R))])},Z);return n.createElement(s.Z,(0,r.Z)({className:(0,i.Z)(l.root,l[P],d,"inherit"===u?l.colorInherit:"default"!==u&&l["".concat(P).concat((0,c.Z)(u))],"medium"!==R&&[l["".concat(P,"Size").concat((0,c.Z)(R))],l["size".concat((0,c.Z)(R))]],y&&l.disableElevation,g&&l.disabled,w&&l.fullWidth),component:h,disabled:g,focusRipple:!x,focusVisibleClassName:(0,i.Z)(l.focusVisible,S),ref:a,type:N},j),n.createElement("span",{className:l.label},I,t,F))}));const u=(0,l.Z)((function(e){return{root:(0,r.Z)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:(0,d.U1)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:(0,d.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:(0,d.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat((0,d.U1)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:(0,d.U1)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat((0,d.U1)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:(0,d.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},2953:(e,a,t)=>{t.d(a,{Z:()=>s});var o=t(7462),r=t(5987),n=t(2791),i=(t(2007),t(8182)),l=t(8317),d=n.forwardRef((function(e,a){var t=e.classes,l=e.className,d=e.component,s=void 0===d?"div":d,c=(0,r.Z)(e,["classes","className","component"]);return n.createElement(s,(0,o.Z)({className:(0,i.Z)(t.root,l),ref:a},c))}));const s=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(d)},6950:(e,a,t)=>{t.d(a,{Z:()=>c});var o=t(7462),r=t(5987),n=t(2791),i=(t(2007),t(8182)),l=t(8317),d=t(8302),s=n.forwardRef((function(e,a){var t=e.action,l=e.avatar,s=e.classes,c=e.className,p=e.component,u=void 0===p?"div":p,m=e.disableTypography,h=void 0!==m&&m,b=e.subheader,g=e.subheaderTypographyProps,f=e.title,y=e.titleTypographyProps,v=(0,r.Z)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),x=f;null==x||x.type===d.Z||h||(x=n.createElement(d.Z,(0,o.Z)({variant:l?"body2":"h5",className:s.title,component:"span",display:"block"},y),x));var Z=b;return null==Z||Z.type===d.Z||h||(Z=n.createElement(d.Z,(0,o.Z)({variant:l?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},g),Z)),n.createElement(u,(0,o.Z)({className:(0,i.Z)(s.root,c),ref:a},v),l&&n.createElement("div",{className:s.avatar},l),n.createElement("div",{className:s.content},x,Z),t&&n.createElement("div",{className:s.action},t))}));const c=(0,l.Z)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},3188:(e,a,t)=>{t.d(a,{Z:()=>x});var o=t(7462),r=t(5987),n=t(2791),i=(t(2007),t(8182)),l=t(7104),d=t(7376),s=t(7692),c=t(5480),p=t(6828),u=t(4326),m=t(1024),h=t(8317),b=n.forwardRef((function(e,a){var t=e.children,l=e.classes,d=e.className,s=e.component,c=void 0===s?"p":s,p=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,(0,r.Z)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),h=(0,m.Z)(),b=(0,u.Z)({props:e,muiFormControl:h,states:["variant","margin","disabled","error","filled","focused","required"]});return n.createElement(c,(0,o.Z)({className:(0,i.Z)(l.root,("filled"===b.variant||"outlined"===b.variant)&&l.contained,d,b.disabled&&l.disabled,b.error&&l.error,b.filled&&l.filled,b.focused&&l.focused,b.required&&l.required,"dense"===b.margin&&l.marginDense),ref:a},p)," "===t?n.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):t)}));const g=(0,h.Z)((function(e){return{root:(0,o.Z)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(b);var f=t(7394),y={standard:l.Z,filled:d.Z,outlined:s.Z},v=n.forwardRef((function(e,a){var t=e.autoComplete,l=e.autoFocus,d=void 0!==l&&l,s=e.children,u=e.classes,m=e.className,h=e.color,b=void 0===h?"primary":h,v=e.defaultValue,x=e.disabled,Z=void 0!==x&&x,S=e.error,C=void 0!==S&&S,w=e.FormHelperTextProps,k=e.fullWidth,R=void 0!==k&&k,z=e.helperText,T=e.hiddenLabel,N=e.id,E=e.InputLabelProps,P=e.inputProps,j=e.InputProps,I=e.inputRef,F=e.label,L=e.multiline,M=void 0!==L&&L,$=e.name,V=e.onBlur,q=e.onChange,W=e.onFocus,B=e.placeholder,A=e.required,O=void 0!==A&&A,U=e.rows,D=e.rowsMax,H=e.select,_=void 0!==H&&H,G=e.SelectProps,J=e.type,K=e.value,Q=e.variant,X=void 0===Q?"standard":Q,Y=(0,r.Z)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===X&&(E&&"undefined"!==typeof E.shrink&&(ee.notched=E.shrink),F)){var ae,te=null!==(ae=null===E||void 0===E?void 0:E.required)&&void 0!==ae?ae:O;ee.label=n.createElement(n.Fragment,null,F,te&&"\xa0*")}_&&(G&&G.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var oe=z&&N?"".concat(N,"-helper-text"):void 0,re=F&&N?"".concat(N,"-label"):void 0,ne=y[X],ie=n.createElement(ne,(0,o.Z)({"aria-describedby":oe,autoComplete:t,autoFocus:d,defaultValue:v,fullWidth:R,multiline:M,name:$,rows:U,rowsMax:D,type:J,value:K,id:N,inputRef:I,onBlur:V,onChange:q,onFocus:W,placeholder:B,inputProps:P},ee,j));return n.createElement(p.Z,(0,o.Z)({className:(0,i.Z)(u.root,m),disabled:Z,error:C,fullWidth:R,hiddenLabel:T,ref:a,required:O,color:b,variant:X},Y),F&&n.createElement(c.Z,(0,o.Z)({htmlFor:N,id:re},E),F),_?n.createElement(f.Z,(0,o.Z)({"aria-describedby":oe,id:N,labelId:re,value:K,input:ie},G),s):ie,z&&n.createElement(g,(0,o.Z)({id:oe},w),z))}));const x=(0,h.Z)({root:{}},{name:"MuiTextField"})(v)},7545:(e,a,t)=>{function o(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.reduce((function(e,a){return null==a?e:function(){for(var t=arguments.length,o=new Array(t),r=0;r<t;r++)o[r]=arguments[r];e.apply(this,o),a.apply(this,o)}}),(function(){}))}t.d(a,{Z:()=>o})},503:(e,a,t)=>{function o(e){var a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];var i=this,l=function(){e.apply(i,r)};clearTimeout(a),a=setTimeout(l,t)}return o.clear=function(){clearTimeout(a)},o}t.d(a,{Z:()=>o})},3375:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(2791);function r(e,a){return o.isValidElement(e)&&-1!==a.indexOf(e.type.muiName)}},4667:(e,a,t)=>{function o(e){return e&&e.ownerDocument||document}t.d(a,{Z:()=>o})},7636:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(4667);function r(e){return(0,o.Z)(e).defaultView||window}},2497:(e,a,t)=>{t.d(a,{Z:()=>r});var o=t(2791);function r(e){var a=e.controlled,t=e.default,r=(e.name,e.state,o.useRef(void 0!==a).current),n=o.useState(t),i=n[0],l=n[1];return[r?a:i,o.useCallback((function(e){r||l(e)}),[])]}}}]);
//# sourceMappingURL=3818.2e3fc369.chunk.js.map