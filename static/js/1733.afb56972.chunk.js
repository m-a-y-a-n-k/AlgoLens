"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1733],{267:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});n(2791);var a=n(184);const o=e=>{let{direction:t,label:n}=e;return(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"link-label",children:n}),(0,a.jsx)("div",{className:"link",children:(e=>{switch(e.toLowerCase()){case"left":return(0,a.jsx)("i",{className:"ico left"});case"up":return(0,a.jsx)("i",{className:"ico up"});case"down":return(0,a.jsx)("i",{className:"ico down"});default:return(0,a.jsx)("i",{className:"ico right"})}})(t)})]})};var s=n(2541);const i=e=>{let{type:t,data:n,highlight:i,next:r,AllGreater:l,AllSmaller:c}=e,d=null,u={border:"1px solid white",background:"rgba(40,60,180,0.8)"};switch(i&&(u.background="rgba(30,150,40,0.8)"),t.toLowerCase()){case"stack":d=[0===n.index&&(0,a.jsx)(s.Z,{p:1,textAlign:"center",children:"Top"},"Top"),(0,a.jsxs)(s.Z,{p:1,style:{...u,background:i?"rgba(30,150,40,0.8)":"rgba(40,40,160,0.8)"},children:[(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:n.value}),(0,a.jsx)(s.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:n.index})]},"".concat(n.index,"-").concat(n.value))];break;case"array":case"linkedlist":case"queues":d=(0,a.jsxs)("div",{children:[(0,a.jsxs)(s.Z,{p:1,style:{...u,background:i?"rgba(30,150,40,0.8)":"rgba(40,60,180,0.8)"},children:[(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:n.value}),n.index>=0&&(0,a.jsx)(s.Z,{p:1,color:"white",textAlign:"center",fontSize:12,children:n.index})]}),"queues"===t&&(0,a.jsxs)(s.Z,{color:"white",p:1,className:0===n.index||!1===r?"bg-danger":"",textAlign:"center",fontSize:12,children:[0===n.index&&(0,a.jsxs)("typography",{children:["Front ",(0,a.jsx)("br",{})]}),!1===r&&(0,a.jsx)("typography",{children:"Rear"})]})]},"".concat(n.value,"-").concat(n.index)),("linkedlist"===t||"queues"===t&&r)&&d.push((0,a.jsx)(s.Z,{component:"span",children:(0,a.jsx)(o,{direction:"right"})},"".concat(n.index,"-").concat(n.value,"-nextlink")));break;case"sets":d=(0,a.jsx)(s.Z,{p:1,style:{...u,background:i?"rgba(30,150,40,0.8)":l?"rgba(242,19,23,0.8)":c?"rgba(250,183,0,0.8)":"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},children:(0,a.jsx)(s.Z,{p:0,color:"white",fontSize:18,children:(0,a.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:n.value})})},n.value)}return n&&d}},1733:(e,t,n)=>{n.r(t),n.d(t,{default:()=>$});var a=n(2791),o=n(267),s=n(2541),i=n(1288),r=n(8596),l=n(3108),c=n(283),d=n(4697),u=n(6513),p=n(3188),m=n(6828),g=n(184);const h=(0,r.Z)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),x=(0,r.Z)((e=>({root:{border:"1px solid #e2e2e1",overflow:"hidden",borderRadius:4,backgroundColor:"#fcfcfb",transition:e.transitions.create(["border-color","box-shadow"]),"&:hover":{backgroundColor:"#fff"},"&$focused":{backgroundColor:"#fff",boxShadow:"".concat((0,l.U1)(e.palette.primary.main,.25)," 0 0 0 2px"),borderColor:e.palette.primary.main}},focused:{}})));function b(e){const t=x();return(0,g.jsx)(p.Z,{InputProps:{classes:t,disableUnderline:!0},...e})}const f=(0,r.Z)((e=>({root:{display:"flex",flexWrap:"wrap"},margin:{margin:e.spacing(1)}})));function v(e){let[t,n]=(0,a.useState)(null);const o=h(),s=f();return e.open?(0,g.jsxs)(c.Z,{className:o.root,variant:"outlined container",children:[(0,g.jsx)("h2",{className:"bg-primary text-white  p-2",children:" Push "}),(0,g.jsx)(d.Z,{children:(0,g.jsxs)(m.Z,{className:"pb-3 pr-0 pl-2 pt-1",children:[(0,g.jsx)(b,{label:"Insert",className:[s.margin,s.root],variant:"filled",id:"reddit-input",onChange:e=>{n(e.target.value)},value:t||""}),(0,g.jsx)(u.Z,{className:"ml-2 mr-2 ",onClick:()=>{e.push(t),n(null)},variant:"outlined",color:"primary",size:"large",children:"Submit"})]})})]}):(0,g.jsx)("div",{})}const Z=(0,r.Z)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),j=(0,r.Z)((e=>({margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}})));function k(e){const t=Z(),n=j();return e.open?(0,g.jsxs)(c.Z,{className:t.root,variant:"outlined",children:[(0,g.jsx)("h2",{className:"bg-primary text-white p-2",children:" Pop "}),(0,g.jsx)(d.Z,{children:(0,g.jsx)(m.Z,{className:[n.root,"pb-3 w-100 pt-1"],noValidate:!0,children:(0,g.jsx)(u.Z,{className:"ml-2 mr-2",onClick:()=>{e.pop()},variant:"outlined",color:"primary",size:"large",children:"Submit"})})})]}):(0,g.jsx)("div",{})}var y=n(8302),N=n(5480),w=n(5471),C=n(7394);const S=(0,r.Z)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),I=(0,r.Z)((e=>({margin:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}))),z=(0,r.Z)((e=>({formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}})));function A(e){const t=S(),n=I(),o=z(),[s,i]=a.useState(""),r=a.useRef([]),[l,h]=a.useState(0);a.useEffect((()=>{h(r.current.offsetWidth)}),[]);const x=t=>{e.modifywhere(t.target.value),i(t.target.value)};return e.open?(0,g.jsx)(c.Z,{className:t.root,variant:"outlined",children:e.array1.length>0?(0,g.jsxs)(a.Fragment,{children:[(0,g.jsx)("h2",{className:"bg-primary text-white  p-2",children:" Get "}),(0,g.jsxs)(d.Z,{children:[(0,g.jsxs)(m.Z,{variant:"outlined",className:o.formControl,children:[(0,g.jsx)(N.Z,{ref:r,id:"demo-simple-select-outlined-label",children:"Position"}),(0,g.jsxs)(C.Z,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:s,onChange:x,labelWidth:l,children:[(0,g.jsx)(w.Z,{value:"top",children:"Top"}),(0,g.jsx)(w.Z,{value:"bottom",children:"Bottom"})]})]}),(0,g.jsxs)(m.Z,{className:[n.root,"p-2"],noValidate:!0,children:[e.result1&&(0,g.jsx)(p.Z,{disabled:!0,id:"standard-disabled",label:e.result1}),(0,g.jsx)(u.Z,{className:"mt-2",onClick:()=>{e.get()},variant:"outlined",color:"primary",size:"large",children:"Submit"})]})]})]}):(0,g.jsx)(y.Z,{className:"bg-primary text-white text-center p-2",variant:"h4",component:"h2",children:"Empty Stack"})}):(0,g.jsx)("div",{})}var P=n(2953),R=n(9526),E=n(8182),G=n(8912),L=n(2475),T=n(4135),V=n(83);const W=(0,r.Z)((e=>({root:{flexGrow:1},paper:{padding:e.spacing(2),color:e.palette.text.secondary,margin:e.spacing(2)},control:{padding:e.spacing(2)}}))),B=(0,r.Z)({root:{"&:hover":{backgroundColor:"transparent"}},icon:{borderRadius:"50%",width:16,height:16,boxShadow:"inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",backgroundColor:"#f5f8fa",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))","$root.Mui-focusVisible &":{outline:"2px auto rgba(19,124,189,.6)",outlineOffset:2},"input:hover ~ &":{backgroundColor:"#ebf1f5"},"input:disabled ~ &":{boxShadow:"none",background:"rgba(206,217,224,.5)"}},checkedIcon:{backgroundColor:"#137cbd",backgroundImage:"linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))","&:before":{display:"block",width:16,height:16,backgroundImage:"radial-gradient(#fff,#fff 28%,transparent 32%)",content:'""'},"input:hover ~ &":{backgroundColor:"#106ba3"}}});function F(e){const t=B();return(0,g.jsx)(G.Z,{className:t.root,disableRipple:!0,color:"default",checkedIcon:(0,g.jsx)("span",{className:(0,E.Z)(t.icon,t.checkedIcon)}),icon:(0,g.jsx)("span",{className:t.icon}),...e})}function $(){const e=W();let[t,n]=(0,a.useState)([]),[r,l]=(0,a.useState)(null),[d,u]=(0,a.useState)("Top"),[p,h]=(0,a.useState)(null),[x,b]=(0,a.useState)(!1),f=e=>{let t=e.target.value;b(t)};return(0,g.jsx)("div",{className:e.root,children:(0,g.jsxs)(i.Z,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-end",children:[(0,g.jsxs)(R.Z,{className:e.paper,children:[(0,g.jsx)(i.Z,{item:!0,xs:12,sm:12,m:4,children:(0,g.jsxs)(c.Z,{children:[(0,g.jsx)("h2",{className:"bg-primary text-white p-3",children:"Operations"}),(0,g.jsx)(P.Z,{className:"pl-0 pr-0 pt-0 text-left",children:(0,g.jsxs)(m.Z,{className:"pl-3",component:"fieldset",children:[(0,g.jsx)(V.Z,{component:"legend"}),(0,g.jsxs)(L.Z,{"aria-label":"gender",name:"customized-radios",children:[(0,g.jsx)(T.Z,{value:"Push",onChange:f,control:(0,g.jsx)(F,{}),label:"Push"}),(0,g.jsx)(T.Z,{value:"Pop",onChange:f,control:(0,g.jsx)(F,{}),label:"Pop"}),(0,g.jsx)(T.Z,{value:"Get",onChange:f,control:(0,g.jsx)(F,{}),label:"Get"})]})]})})]})}),(0,g.jsxs)(i.Z,{item:!0,className:"mt-3",xs:12,sm:12,children:[(0,g.jsx)(v,{open:"Push"===x,push:e=>{(e=>{if(e){let a=t;a.splice(0,0,e),n(a),l([0]),h(null)}else alert("Nothing to Push")})(e)}}),(0,g.jsx)(k,{open:"Pop"===x,pop:()=>{(()=>{let e=t;e.splice(0,1),n(e),l([]),h(null)})()}}),(0,g.jsx)(A,{open:"Get"===x,modifywhere:e=>{u(e)},result1:p,array1:t,get:()=>{(()=>{let e=t;switch(d.toLowerCase()){case"top":return l([0]),void h(e[0]);case"bottom":l([e.length-1]),h(e[e.length-1])}})()}})]})]}),(0,g.jsxs)(i.Z,{item:!0,xs:8,sm:6,className:"ml-4",children:[(0,g.jsx)(s.Z,{display:"flex",flexWrap:"wrap",flexDirection:"column",p:1,m:1,bgcolor:"background.paper",css:{border:"1px solid black",borderTop:"none"},className:"col-sm-12",children:t.map(((e,t)=>{let n=!1;return r.includes(t)&&(n=!0),(0,g.jsx)(o.default,{highlight:n,data:{value:e,index:t},type:"stack"},"".concat(e,"-").concat(t))}))}),(0,g.jsx)(s.Z,{textAlign:"center",className:"col-sm-12",children:"Stack Container"})]})]})})}},5471:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(5987),o=n(4942),s=n(7462),i=n(2791),r=(n(2007),n(8182)),l=n(8317),c=n(6706),d=n(3375),u=n(9806),p=n(4496),m=n(4164),g="undefined"===typeof window?i.useEffect:i.useLayoutEffect,h=i.forwardRef((function(e,t){var n=e.alignItems,o=void 0===n?"center":n,l=e.autoFocus,h=void 0!==l&&l,x=e.button,b=void 0!==x&&x,f=e.children,v=e.classes,Z=e.className,j=e.component,k=e.ContainerComponent,y=void 0===k?"li":k,N=e.ContainerProps,w=(N=void 0===N?{}:N).className,C=(0,a.Z)(N,["className"]),S=e.dense,I=void 0!==S&&S,z=e.disabled,A=void 0!==z&&z,P=e.disableGutters,R=void 0!==P&&P,E=e.divider,G=void 0!==E&&E,L=e.focusVisibleClassName,T=e.selected,V=void 0!==T&&T,W=(0,a.Z)(e,["alignItems","autoFocus","button","children","classes","className","component","ContainerComponent","ContainerProps","dense","disabled","disableGutters","divider","focusVisibleClassName","selected"]),B=i.useContext(p.Z),F={dense:I||B.dense||!1,alignItems:o},$=i.useRef(null);g((function(){h&&$.current&&$.current.focus()}),[h]);var M=i.Children.toArray(f),D=M.length&&(0,d.Z)(M[M.length-1],["ListItemSecondaryAction"]),H=i.useCallback((function(e){$.current=m.findDOMNode(e)}),[]),q=(0,u.Z)(H,t),O=(0,s.Z)({className:(0,r.Z)(v.root,Z,F.dense&&v.dense,!R&&v.gutters,G&&v.divider,A&&v.disabled,b&&v.button,"center"!==o&&v.alignItemsFlexStart,D&&v.secondaryAction,V&&v.selected),disabled:A},W),U=j||"li";return b&&(O.component=j||"div",O.focusVisibleClassName=(0,r.Z)(v.focusVisible,L),U=c.Z),D?(U=O.component||j?U:"div","li"===y&&("li"===U?U="div":"li"===O.component&&(O.component="div")),i.createElement(p.Z.Provider,{value:F},i.createElement(y,(0,s.Z)({className:(0,r.Z)(v.container,w),ref:q},C),i.createElement(U,O,M),M.pop()))):i.createElement(p.Z.Provider,{value:F},i.createElement(U,(0,s.Z)({ref:q},O),M))}));const x=(0,l.Z)((function(e){return{root:{display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,"&$focusVisible":{backgroundColor:e.palette.action.selected},"&$selected, &$selected:hover":{backgroundColor:e.palette.action.selected},"&$disabled":{opacity:.5}},container:{position:"relative"},focusVisible:{},dense:{paddingTop:4,paddingBottom:4},alignItemsFlexStart:{alignItems:"flex-start"},disabled:{},divider:{borderBottom:"1px solid ".concat(e.palette.divider),backgroundClip:"padding-box"},gutters:{paddingLeft:16,paddingRight:16},button:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:e.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},secondaryAction:{paddingRight:48},selected:{}}}),{name:"MuiListItem"})(h);var b=i.forwardRef((function(e,t){var n,o=e.classes,l=e.className,c=e.component,d=void 0===c?"li":c,u=e.disableGutters,p=void 0!==u&&u,m=e.ListItemClasses,g=e.role,h=void 0===g?"menuitem":g,b=e.selected,f=e.tabIndex,v=(0,a.Z)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==f?f:-1),i.createElement(x,(0,s.Z)({button:!0,role:h,tabIndex:n,component:d,selected:b,disableGutters:p,classes:(0,s.Z)({dense:o.dense},m),className:(0,r.Z)(o.root,l,b&&o.selected,!p&&o.gutters),ref:t},v))}));const f=(0,l.Z)((function(e){return{root:(0,s.Z)({},e.typography.body1,(0,o.Z)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",overflow:"hidden",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:(0,s.Z)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(b)}}]);
//# sourceMappingURL=1733.afb56972.chunk.js.map