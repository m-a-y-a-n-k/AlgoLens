"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7535],{7535:(e,t,l)=>{l.r(t),l.d(t,{default:()=>T});var n=l(2791),s=l(1288),a=l(5095),r=l(2377),i=l(1840),d=l(4594),o=l(4555),c=l(150),u=l(7788),p=l(5121),h=l(7595),x=l(6513),m=l(184);const g=n.memo((e=>{let{parent:t,alertId:l}=e;const[s,g]=(0,n.useState)(null);return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(u.Z,{expandIcon:(0,m.jsx)(h.Z,{}),children:"Insert Sorted Data"}),(0,m.jsxs)(p.Z,{style:{flexDirection:"column"},children:[t.alert&&t.alert.alertId===l&&(0,m.jsx)(a.Z,{color:t.alert.type,isOpen:!!t.alert.text,toggle:()=>{t.setAlert(null)},children:t.alert.text}),(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Value"})}),(0,m.jsx)(o.Z,{type:"number",onChange:e=>{g(e.target.value)},value:null!==s&&void 0!==s?s:""})]}),(0,m.jsx)(x.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{t.insert(s),g(null)},children:"Submit"})]})]})}));g.displayName="BinarySearch.Insert";const Z=g,j=n.memo((e=>{let{parent:t,alertId:l}=e;const[s,g]=(0,n.useState)(null),[Z,j]=(0,n.useState)(null);return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(u.Z,{expandIcon:(0,m.jsx)(h.Z,{}),children:"Update Value at Position"}),(0,m.jsxs)(p.Z,{style:{flexDirection:"column"},children:[t.alert&&t.alert.alertId===l&&(0,m.jsx)(a.Z,{color:t.alert.type,isOpen:!!t.alert.text,toggle:()=>{t.setAlert(null)},children:t.alert.text}),(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Position"})}),(0,m.jsx)(o.Z,{type:"number",placeholder:"Position (0-based)",onChange:e=>{j(e.target.value)},value:null!==Z&&void 0!==Z?Z:""})]}),(0,m.jsxs)(r.Z,{className:"mt-3",children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Value"})}),(0,m.jsx)(o.Z,{type:"number",placeholder:"Value",onChange:e=>{g(e.target.value)},value:null!==s&&void 0!==s?s:""})]}),(0,m.jsx)(x.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{t.update(parseFloat(Z),s),j(null),g(null)},children:"Submit"})]})]})}));j.displayName="BinarySearch.Update";const y=j,f=n.memo((e=>{let{parent:t,alertId:l}=e;const[s,g]=(0,n.useState)(null),[Z,j]=(0,n.useState)(null);return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(u.Z,{expandIcon:(0,m.jsx)(h.Z,{}),children:"Delete Position or Value"}),(0,m.jsxs)(p.Z,{style:{flexDirection:"column"},children:[t.alert&&t.alert.alertId===l&&(0,m.jsx)(a.Z,{color:t.alert.type,isOpen:!!t.alert.text,toggle:()=>{t.setAlert(null)},children:t.alert.text}),(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Position"})}),(0,m.jsx)(o.Z,{type:"number",placeholder:"Position (0-based)",onChange:e=>{j(e.target.value),g(null)},disabled:null!==s,value:null!==Z&&void 0!==Z?Z:""})]}),(0,m.jsxs)(r.Z,{className:"mt-3",children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Value"})}),(0,m.jsx)(o.Z,{type:"number",placeholder:"Value",onChange:e=>{g(e.target.value),j(null)},disabled:null!==Z,value:null!==s&&void 0!==s?s:""})]}),(0,m.jsx)(x.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{t.delete(s,parseFloat(Z)),g(null),j(null)},children:"Submit"})]})]})}));f.displayName="BinarySearch.Delete";const v=f,b=n.memo((e=>{let{parent:t,alertId:l}=e;const[s,g]=(0,n.useState)(null);return(0,m.jsxs)(c.Z,{children:[(0,m.jsx)(u.Z,{expandIcon:(0,m.jsx)(h.Z,{}),children:"Search a Value"}),(0,m.jsxs)(p.Z,{style:{flexDirection:"column"},children:[t.alert&&t.alert.alertId===l&&(0,m.jsx)(a.Z,{color:t.alert.type,isOpen:!!t.alert.text,toggle:()=>{t.setAlert(null)},children:t.alert.text}),(0,m.jsxs)(r.Z,{children:[(0,m.jsx)(i.Z,{addonType:"prepend",children:(0,m.jsx)(d.Z,{children:"Value"})}),(0,m.jsx)(o.Z,{type:"number",placeholder:"Value",onChange:e=>{g(e.target.value)},value:null!==s&&void 0!==s?s:""})]}),(0,m.jsx)(x.Z,{className:"mt-4",style:{backgroundColor:"#403d4a",color:"white"},onClick:()=>{t.search(s),g(null)},children:"Submit"})]})]})}));b.displayName="BinarySearch.Search";const N=b;var S=l(2338);const I=(0,n.lazy)((()=>l.e(267).then(l.bind(l,267)))),C=e=>{let{data:t,highlights:l}=e;return(0,m.jsx)(S.t7,{height:80,itemCount:t.length,itemSize:200,width:window.innerWidth||800,direction:"horizontal",children:e=>{let{index:n,style:a}=e;return(0,m.jsx)(s.Z,{item:!0,xs:12,style:a,children:(0,m.jsx)(I,{highlight:n>=l.start&&n<=l.end,data:{value:t[n],index:n},type:"array"})})}})},T=()=>{const[e,t]=(0,n.useState)([]),[l,a]=(0,n.useState)({start:0,end:-1}),[r,i]=(0,n.useState)(0),[d,o]=(0,n.useState)(null),c=l=>{if(l){const n=parseFloat(l);let s,r=e;for(s=0;s<r.length&&!(r[s]>=n);s++);return r.splice(s,0,n),t(r),a({start:0,end:-1}),i(0),o(null),s}return o({text:"Submission is empty",type:"danger",alertId:1}),null},u=(l,n)=>{let s=e;if(l){const e=parseFloat(l);let n=s.length;s=s.filter((t=>t!==e)),s&&0!==s.length||(s=[]),n!==s.length?(t(s),a({start:0,end:-1}),o(null)):o({text:"Data not found to delete",type:"danger",alertId:2})}else n>=0&&n<s.length?(s=e,s.splice(n,1),t(s),a({start:0,end:-1}),i(0),o(null)):o({text:"Unable to delete",type:"danger",alertId:2})},p=(e,t,l,n)=>{let s=Math.floor((t+l)/2);t>l||(n[s]===e?(a({start:s,end:s}),i((e=>e+1))):n[s]<e?(a((e=>({...e,start:s+1}))),i((e=>e+1)),setTimeout((()=>{p(e,s+1,l,n)}),750)):(a((e=>({...e,end:s-1}))),i((e=>e+1)),setTimeout((()=>{p(e,t,s-1,n)}),750)))};return(0,m.jsxs)(s.Z,{container:!0,children:[(0,m.jsxs)(s.Z,{container:!0,children:[(0,m.jsx)(s.Z,{item:!0,xs:12,className:"mt-2",children:(0,m.jsx)(Z,{parent:{insert:c,alert:d,setAlert:o},alertId:1})}),(0,m.jsx)(s.Z,{item:!0,xs:12,className:"mt-2",children:(0,m.jsx)(v,{parent:{deleteItem:u,alert:d,setAlert:o},alertId:2})}),(0,m.jsx)(s.Z,{item:!0,xs:12,className:"mt-2",children:(0,m.jsx)(y,{parent:{update:(t,l)=>{l&&t<e.length&&t>=0?(u(null,t),t=c(l),a({start:t,end:t}),i(0),o(null)):o({text:"Data or position not found to update",type:"danger",alertId:3})},alert:d,setAlert:o},alertId:3})}),(0,m.jsx)(s.Z,{item:!0,xs:12,className:"mt-2",children:(0,m.jsx)(N,{parent:{search:t=>{if(t&&e.length>0){const l=parseFloat(t),n=0,s=e.length-1;a({start:n,end:s}),i(0),setTimeout((()=>{p(l,n,s,e)}),750)}else o({text:"Empty Search",type:"danger",alertId:4})},alert:d,setAlert:o},alertId:4})})]}),(0,m.jsx)(s.Z,{container:!0,className:"mt-4 mb-4",children:(0,m.jsx)(n.Suspense,{fallback:(0,m.jsx)("div",{children:"Loading..."}),children:(0,m.jsx)(C,{data:e,highlights:l})})}),(0,m.jsxs)(s.Z,{item:!0,xs:12,className:"mt-4 mb-4",children:["Steps : ",r]})]})}},4555:(e,t,l)=>{l.d(t,{Z:()=>m});var n=l(7462),s=l(3366),a=l(7326),r=l(1721),i=l(2791),d=l(2007),o=l.n(d),c=l(1694),u=l.n(c),p=l(5489),h={children:o().node,type:o().string,size:o().oneOfType([o().number,o().string]),bsSize:o().string,valid:o().bool,invalid:o().bool,tag:p.iC,innerRef:o().oneOfType([o().object,o().func,o().string]),plaintext:o().bool,addon:o().bool,className:o().string,cssModule:o().object},x=function(e){function t(t){var l;return(l=e.call(this,t)||this).getRef=l.getRef.bind((0,a.Z)(l)),l.focus=l.focus.bind((0,a.Z)(l)),l}(0,r.Z)(t,e);var l=t.prototype;return l.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},l.focus=function(){this.ref&&this.ref.focus()},l.render=function(){var e=this.props,t=e.className,l=e.cssModule,a=e.type,r=e.bsSize,d=e.valid,o=e.invalid,c=e.tag,h=e.addon,x=e.plaintext,m=e.innerRef,g=(0,s.Z)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),Z=["radio","checkbox"].indexOf(a)>-1,j=new RegExp("\\D","g"),y=c||("select"===a||"textarea"===a?a:"input"),f="form-control";x?(f+="-plaintext",y=c||"input"):"file"===a?f+="-file":"range"===a?f+="-range":Z&&(f=h?null:"form-check-input"),g.size&&j.test(g.size)&&((0,p.O4)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=g.size,delete g.size);var v=(0,p.mx)(u()(t,o&&"is-invalid",d&&"is-valid",!!r&&"form-control-"+r,f),l);return("input"===y||c&&"function"===typeof c)&&(g.type=a),g.children&&!x&&"select"!==a&&"string"===typeof y&&"select"!==y&&((0,p.O4)('Input with a type of "'+a+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.createElement(y,(0,n.Z)({},g,{ref:m,className:v,"aria-invalid":o}))},t}(i.Component);x.propTypes=h,x.defaultProps={type:"text"};const m=x},2377:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(7462),s=l(3366),a=l(2791),r=l(2007),i=l.n(r),d=l(1694),o=l.n(d),c=l(5489),u={tag:c.iC,size:i().string,className:i().string,cssModule:i().object},p=function(e){var t=e.className,l=e.cssModule,r=e.tag,i=e.size,d=(0,s.Z)(e,["className","cssModule","tag","size"]),u=(0,c.mx)(o()(t,"input-group",i?"input-group-"+i:null),l);return a.createElement(r,(0,n.Z)({},d,{className:u}))};p.propTypes=u,p.defaultProps={tag:"div"};const h=p},1840:(e,t,l)=>{l.d(t,{Z:()=>x});var n=l(7462),s=l(3366),a=l(2791),r=l(2007),i=l.n(r),d=l(1694),o=l.n(d),c=l(5489),u=l(4594),p={tag:c.iC,addonType:i().oneOf(["prepend","append"]).isRequired,children:i().node,className:i().string,cssModule:i().object},h=function(e){var t=e.className,l=e.cssModule,r=e.tag,i=e.addonType,d=e.children,p=(0,s.Z)(e,["className","cssModule","tag","addonType","children"]),h=(0,c.mx)(o()(t,"input-group-"+i),l);return"string"===typeof d?a.createElement(r,(0,n.Z)({},p,{className:h}),a.createElement(u.Z,{children:d})):a.createElement(r,(0,n.Z)({},p,{className:h,children:d}))};h.propTypes=p,h.defaultProps={tag:"div"};const x=h},4594:(e,t,l)=>{l.d(t,{Z:()=>h});var n=l(7462),s=l(3366),a=l(2791),r=l(2007),i=l.n(r),d=l(1694),o=l.n(d),c=l(5489),u={tag:c.iC,className:i().string,cssModule:i().object},p=function(e){var t=e.className,l=e.cssModule,r=e.tag,i=(0,s.Z)(e,["className","cssModule","tag"]),d=(0,c.mx)(o()(t,"input-group-text"),l);return a.createElement(r,(0,n.Z)({},i,{className:d}))};p.propTypes=u,p.defaultProps={tag:"span"};const h=p}}]);
//# sourceMappingURL=7535.ef87b2ac.chunk.js.map