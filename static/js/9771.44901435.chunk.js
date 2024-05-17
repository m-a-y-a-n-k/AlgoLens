/*! For license information please see 9771.44901435.chunk.js.LICENSE.txt */
(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9771],{267:(e,t,s)=>{"use strict";s.d(t,{Z:()=>o});var r=s(2791),n=s(184);class a extends r.Component{render(){let e=null;switch(this.props.direction.toLowerCase()){case"left":e=(0,n.jsx)("i",{className:"ico left"});break;case"up":e=(0,n.jsx)("i",{className:"ico up"});break;case"down":e=(0,n.jsx)("i",{className:"ico down"});break;default:e=(0,n.jsx)("i",{className:"ico right"})}return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"link-label",children:this.props.label}),(0,n.jsx)("div",{className:"link",children:e})]})}}var i=s(2541);class o extends r.Component{render(){let e,t=null;switch(this.props.type.toLowerCase()){case"stack":t=[],0===this.props.data.index&&t.push((0,n.jsx)(i.Z,{p:1,textAlign:"center",children:"Top"},"Top")),e={border:"1px solid white",background:"rgba(40,40,160,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t.push((0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.index,"-").concat(this.props.data.value)));break;case"array":e={border:"1px solid white",background:"rgba(40,40,120,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=(0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},this.props.data.index);break;case"linkedlist":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsxs)(i.Z,{p:1,style:e,children:[(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value}),(0,n.jsx)(i.Z,{color:"white",p:1,textAlign:"center",fontSize:12,children:this.props.data.index})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,n.jsx)(i.Z,{component:"span",children:(0,n.jsx)(a,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextlink")));break;case"queues":e={border:"1px solid white",background:"rgba(40,60,180,0.8)"},this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsxs)("div",{children:[(0,n.jsx)(i.Z,{p:1,style:e,children:(0,n.jsx)(i.Z,{p:1,color:"white",textAlign:"center",fontSize:18,children:this.props.data.value})}),(0,n.jsxs)(i.Z,{color:"white",p:1,className:0===this.props.data.index||!1===this.props.next?"bg-danger":"",textAlign:"center",fontSize:12,children:[0===this.props.data.index?(0,n.jsxs)("typography",{children:["Front ",(0,n.jsx)("br",{})," "]}):(0,n.jsx)("div",{}),!1===this.props.next?(0,n.jsx)("typography",{children:"Rear"}):(0,n.jsx)("div",{})]})]},"".concat(this.props.data.value,"-").concat(this.props.data.index))],this.props.next&&t.push((0,n.jsx)(i.Z,{component:"span",children:(0,n.jsx)(a,{direction:"right"})},"".concat(this.props.data.index,"-").concat(this.props.data.value,"-nextLink")));break;case"sets":e={border:"1px solid black",background:"rgba(40,60,180,0.8)",borderRadius:"50%",minHeight:"100px",minWidth:"100px",margin:"20px"},this.props.AllGreater&&(e.background="rgba(242,19,23,0.8)"),this.props.AllSmaller&&(e.background="rgba(250,183,0,0.8)"),this.props.highlight&&(e.background="rgba(30,150,40,0.8)"),t=[(0,n.jsx)(i.Z,{p:1,style:e,children:(0,n.jsx)(i.Z,{p:0,color:"white",fontSize:18,children:(0,n.jsx)("div",{style:{position:"relative",top:"45%",textAlign:"center"},children:this.props.data.value})})},this.props.data.value)]}return this.props.data&&t}}},9771:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>k});var r=s(2791),n=s(267),a=s(2357),i=s(3638),o=s(8284),l=s(6187),d=s(2377),c=s(4555),p=s(7498),h=s(387),u=s(7135),g=s(2919),x=s(1815),f=s(1840),b=s(4594),j=s(743),m=s(6153),y=s(7988),Z=s(184);class v extends r.Component{constructor(e){super(e),this.toggleDropDown=this.toggleDropDown.bind(this),this.state={dropdownOpen:!1,data:null,where:"Start"}}toggleDropDown(){let e=this.state.dropdownOpen;this.setState({dropdownOpen:!e})}render(){return(0,Z.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(i.Z,{children:"Insert"}),(0,Z.jsxs)(o.Z,{className:"text-center",children:[(0,Z.jsx)(l.Z,{children:"Enter data"}),(0,Z.jsx)("br",{}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(c.Z,{disabled:this.props.parent.state.disabled,onChange:e=>{this.setState({data:e.target.value})},value:this.state.data?this.state.data:""}),(0,Z.jsxs)(p.Z,{addonType:"append",isOpen:this.state.dropdownOpen,toggle:this.toggleDropDown,children:[(0,Z.jsx)(h.Z,{caret:!0,children:this.state.where}),(0,Z.jsxs)(u.Z,{children:[(0,Z.jsx)(g.Z,{onClick:()=>{this.setState({where:"Start"})},children:"Start"}),(0,Z.jsx)(g.Z,{divider:!0}),(0,Z.jsxs)(g.Z,{onClick:()=>{this.setState({where:"End"})},children:[" ","End"]})]})]})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)(x.Z,{disabled:this.props.parent.state.disabled,onClick:()=>{this.props.parent.insert(this.state.data,this.state.where),this.setState({data:null})},children:"Submit"})]})]})}}class w extends r.Component{constructor(e){super(e),this.state={data:null,position:null}}render(){return(0,Z.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(i.Z,{children:"Delete"}),(0,Z.jsxs)(o.Z,{className:"text-center",children:[(0,Z.jsx)(l.Z,{children:"Position or Value"}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(f.Z,{addonType:"prepend",children:(0,Z.jsx)(b.Z,{children:"Position"})}),(0,Z.jsx)(c.Z,{disabled:this.props.parent.state.disabled,placeholder:"Position",onChange:e=>{this.setState({position:e.target.value,data:null})},value:this.state.position?this.state.position:""})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)("span",{children:"Or"}),(0,Z.jsx)("br",{}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(f.Z,{addonType:"prepend",children:(0,Z.jsx)(b.Z,{children:"Value"})}),(0,Z.jsx)(c.Z,{disabled:this.props.parent.state.disabled,placeholder:"Value",onChange:e=>{this.setState({data:e.target.value,position:null})},value:this.state.data?this.state.data:""})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)(x.Z,{disabled:this.props.parent.state.disabled,onClick:()=>{this.props.parent.delete(this.state.data,this.state.position),this.setState({data:null,position:null})},children:"Submit"})]})]})}}class S extends r.Component{constructor(e){super(e),this.toggleDropDown=this.toggleDropDown.bind(this),this.state={dropdownOpen:!1,data:null,position:null}}toggleDropDown(){let e=this.state.dropdownOpen;this.setState({dropdownOpen:!e})}render(){return(0,Z.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(i.Z,{children:"Update"}),(0,Z.jsxs)(o.Z,{className:"text-center",children:[(0,Z.jsx)(l.Z,{children:"Value at Position"}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(f.Z,{addonType:"prepend",children:(0,Z.jsx)(b.Z,{children:"Position"})}),(0,Z.jsx)(c.Z,{disabled:this.props.parent.state.disabled,type:"number",placeholder:"Position",onChange:e=>{this.setState({position:e.target.value})},value:this.state.position?this.state.position:""})]}),(0,Z.jsx)("br",{}),(0,Z.jsxs)(d.Z,{children:[(0,Z.jsx)(f.Z,{addonType:"prepend",children:(0,Z.jsx)(b.Z,{children:"Value"})}),(0,Z.jsx)(c.Z,{disabled:this.props.parent.state.disabled,placeholder:"Value",onChange:e=>{this.setState({data:e.target.value})},value:this.state.data?this.state.data:""})]}),(0,Z.jsx)("br",{}),(0,Z.jsx)(x.Z,{disabled:this.props.parent.state.disabled,onClick:()=>{this.props.parent.update(this.state.position,this.state.data),this.setState({position:null,data:null})},children:"Submit"})]})]})}}class N extends r.Component{constructor(){super(...arguments),this.state={shuffle:!1}}render(){return(0,Z.jsxs)(a.Z,{style:{border:"1px solid rgba(22,45,167,0.9)"},children:[(0,Z.jsx)(i.Z,{children:"Knuths Shuffle"}),(0,Z.jsxs)(o.Z,{className:"text-center",children:[(0,Z.jsx)(l.Z,{children:"Shuffle (or Unshuffle) Array Randomly and Uniformly"}),(0,Z.jsx)("br",{}),(0,Z.jsx)(x.Z,{disabled:this.props.parent.state.disabled,onClick:()=>{this.props.parent.shuffle(),this.setState({shuffle:!0})},children:"Shuffle"}),this.state.shuffle&&(0,Z.jsx)(x.Z,{disabled:this.props.parent.state.disabled,onClick:()=>{this.props.parent.unshuffle(),this.setState({shuffle:!1})},children:"Reset"})]})]})}}class k extends r.Component{constructor(){super(...arguments),this.state={original:[],array:[],highlights:[],disabled:!1}}insert(e,t){if(e){let s=this.state.array;if("start"===t.toLowerCase())s.splice(0,0,e);else s.splice(s.length,0,e);this.setState({array:s,highlights:[],original:s})}else alert("Submission is empty")}delete(e,t){let s=this.state.array;if(t=parseInt(t),e){let t=s.length;s=s.filter((t=>t!==e)),s&&0!==s.length||(s=[]),t!==s.length?this.setState({array:s,highlights:[],original:s}):alert("Data not found to delete")}else t>=0&&t<s.length?(s=this.state.array,s.splice(t,1),this.setState({array:s,highlights:[],original:s})):alert("Unable to delete")}update(e,t){if(e&&t&&parseInt(e)<=this.state.array.length-1&&parseInt(e)>=0){let s=this.state.array,r=[];s[e]=t,r.push(parseInt(e)),this.setState({array:s,highlights:r,original:s})}else alert("Cannot update")}shuffle(e){if(void 0!==e&&null!==e){if(e===this.state.array.length)return void this.setState({highlights:[],disabled:!1});this.setState((t=>{let s,r=Math.floor(Math.random()*e),n=r===e?[r]:[r,e],a=[...t.array];return s=a[r],a[r]=a[e],a[e]=s,{highlights:n,array:a,disabled:!0}}),(()=>{setTimeout((()=>{this.shuffle(e+1)}),1e3)}))}else!e&&this.state.array.length>0?this.shuffle(0):alert("Can not Shuffle empty array")}unshuffle(){this.state.array.length>0?this.setState({array:[...this.state.original]}):alert("Array is empty")}render(){return(0,Z.jsxs)(j.Z,{children:[(0,Z.jsxs)(m.Z,{children:[(0,Z.jsx)(y.Z,{sm:3,children:(0,Z.jsx)(v,{parent:this})}),(0,Z.jsx)(y.Z,{sm:3,children:(0,Z.jsx)(w,{parent:this})}),(0,Z.jsx)(y.Z,{sm:3,children:(0,Z.jsx)(S,{parent:this})}),(0,Z.jsx)(y.Z,{sm:3,children:(0,Z.jsx)(N,{parent:this})})]}),(0,Z.jsx)(m.Z,{className:"mt-4 mb-4",children:this.state.array.map(((e,t)=>{let s=!1;return this.state.highlights.includes(t)&&(s=!0),(0,Z.jsx)(n.Z,{highlight:s,data:{value:e,index:t},type:"array"},"".concat(e,"-").concat(t))}))})]})}}},1694:(e,t)=>{var s;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var s=arguments[t];if(s){var a=typeof s;if("string"===a||"number"===a)e.push(s);else if(Array.isArray(s)){if(s.length){var i=n.apply(null,s);i&&e.push(i)}}else if("object"===a)if(s.toString===Object.prototype.toString)for(var o in s)r.call(s,o)&&s[o]&&e.push(o);else e.push(s.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(s=function(){return n}.apply(t,[]))||(e.exports=s)}()},2357:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p={tag:c.iC,inverse:o().bool,color:o().string,body:o().bool,outline:o().bool,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},h=function(e){var t=e.className,s=e.cssModule,i=e.color,o=e.body,l=e.inverse,p=e.outline,h=e.tag,u=e.innerRef,g=(0,n.Z)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),x=(0,c.mx)(d()(t,"card",!!l&&"text-white",!!o&&"card-body",!!i&&(p?"border":"bg")+"-"+i),s);return a.createElement(h,(0,r.Z)({},g,{className:x,ref:u}))};h.propTypes=p,h.defaultProps={tag:"div"};const u=h},8284:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p={tag:c.iC,className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func])},h=function(e){var t=e.className,s=e.cssModule,i=e.innerRef,o=e.tag,l=(0,n.Z)(e,["className","cssModule","innerRef","tag"]),p=(0,c.mx)(d()(t,"card-body"),s);return a.createElement(o,(0,r.Z)({},l,{className:p,ref:i}))};h.propTypes=p,h.defaultProps={tag:"div"};const u=h},3638:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p={tag:c.iC,className:o().string,cssModule:o().object},h=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=(0,n.Z)(e,["className","cssModule","tag"]),l=(0,c.mx)(d()(t,"card-header"),s);return a.createElement(i,(0,r.Z)({},o,{className:l}))};h.propTypes=p,h.defaultProps={tag:"div"};const u=h},6187:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p={tag:c.iC,className:o().string,cssModule:o().object},h=function(e){var t=e.className,s=e.cssModule,i=e.tag,o=(0,n.Z)(e,["className","cssModule","tag"]),l=(0,c.mx)(d()(t,"card-title"),s);return a.createElement(i,(0,r.Z)({},o,{className:l}))};h.propTypes=p,h.defaultProps={tag:"div"};const u=h},7988:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p=o().oneOfType([o().number,o().string]),h=o().oneOfType([o().bool,o().number,o().string,o().shape({size:o().oneOfType([o().bool,o().number,o().string]),order:p,offset:p})]),u={tag:c.iC,xs:h,sm:h,md:h,lg:h,xl:h,className:o().string,cssModule:o().object,widths:o().array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},x=function(e,t,s){return!0===s||""===s?e?"col":"col-"+t:"auto"===s?e?"col-auto":"col-"+t+"-auto":e?"col-"+s:"col-"+t+"-"+s},f=function(e){var t=e.className,s=e.cssModule,i=e.widths,o=e.tag,l=(0,n.Z)(e,["className","cssModule","widths","tag"]),p=[];i.forEach((function(t,r){var n=e[t];if(delete l[t],n||""===n){var a=!r;if((0,c.Kn)(n)){var i,o=a?"-":"-"+t+"-",h=x(a,t,n.size);p.push((0,c.mx)(d()(((i={})[h]=n.size||""===n.size,i["order"+o+n.order]=n.order||0===n.order,i["offset"+o+n.offset]=n.offset||0===n.offset,i)),s))}else{var u=x(a,t,n);p.push(u)}}})),p.length||p.push("col");var h=(0,c.mx)(d()(t,p),s);return a.createElement(o,(0,r.Z)({},l,{className:h}))};f.propTypes=u,f.defaultProps=g;const b=f},743:(e,t,s)=>{"use strict";s.d(t,{Z:()=>u});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p={tag:c.iC,fluid:o().oneOfType([o().bool,o().string]),className:o().string,cssModule:o().object},h=function(e){var t=e.className,s=e.cssModule,i=e.fluid,o=e.tag,l=(0,n.Z)(e,["className","cssModule","fluid","tag"]),p="container";!0===i?p="container-fluid":i&&(p="container-"+i);var h=(0,c.mx)(d()(t,p),s);return a.createElement(o,(0,r.Z)({},l,{className:h}))};h.propTypes=p,h.defaultProps={tag:"div"};const u=h},6153:(e,t,s)=>{"use strict";s.d(t,{Z:()=>x});var r=s(7462),n=s(3366),a=s(2791),i=s(2007),o=s.n(i),l=s(1694),d=s.n(l),c=s(5489),p=o().oneOfType([o().number,o().string]),h={tag:c.iC,noGutters:o().bool,className:o().string,cssModule:o().object,form:o().bool,xs:p,sm:p,md:p,lg:p,xl:p},u={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var t=e.className,s=e.cssModule,i=e.noGutters,o=e.tag,l=e.form,p=e.widths,h=(0,n.Z)(e,["className","cssModule","noGutters","tag","form","widths"]),u=[];p.forEach((function(t,s){var r=e[t];if(delete h[t],r){var n=!s;u.push(n?"row-cols-"+r:"row-cols-"+t+"-"+r)}}));var g=(0,c.mx)(d()(t,i?"no-gutters":null,l?"form-row":"row",u),s);return a.createElement(o,(0,r.Z)({},h,{className:g}))};g.propTypes=h,g.defaultProps=u;const x=g},5489:(e,t,s)=>{"use strict";s.d(t,{CE:()=>o,Do:()=>f,Kn:()=>m,O4:()=>c,U9:()=>v,ei:()=>l,iC:()=>u,mx:()=>i,qW:()=>h,rb:()=>x,wF:()=>g});var r,n=s(2007),a=s.n(n);function i(e,t){return void 0===e&&(e=""),void 0===t&&(t=r),t?e.split(" ").map((function(e){return t[e]||e})).join(" "):e}function o(e,t){var s={};return Object.keys(e).forEach((function(r){-1===t.indexOf(r)&&(s[r]=e[r])})),s}function l(e,t){for(var s,r=Array.isArray(t)?t:[t],n=r.length,a={};n>0;)a[s=r[n-=1]]=e[s];return a}var d={};function c(e){d[e]||("undefined"!==typeof console&&console.error(e),d[e]=!0)}var p="object"===typeof window&&window.Element||function(){};var h=a().oneOfType([a().string,a().func,function(e,t,s){if(!(e[t]instanceof p))return new Error("Invalid prop `"+t+"` supplied to `"+s+"`. Expected prop to be an instance of Element. Validation failed.")},a().shape({current:a().any})]),u=a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func}),a().arrayOf(a().oneOfType([a().func,a().string,a().shape({$$typeof:a().symbol,render:a().func})]))]),g={Fade:150,Collapse:350,Modal:300,Carousel:600},x=["in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","onEnter","onEntering","onEntered","onExit","onExiting","onExited"],f={esc:27,space:32,enter:13,tab:9,up:38,down:40,home:36,end:35,n:78,p:80},b=!("undefined"===typeof window||!window.document||!window.document.createElement);function j(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}function m(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}function y(e){if(function(e){return!(!e||"object"!==typeof e)&&"current"in e}(e))return e.current;if(function(e){if(!m(e))return!1;var t=j(e);return"[object Function]"===t||"[object AsyncFunction]"===t||"[object GeneratorFunction]"===t||"[object Proxy]"===t}(e))return e();if("string"===typeof e&&b){var t=document.querySelectorAll(e);if(t.length||(t=document.querySelectorAll("#"+e)),!t.length)throw new Error("The target '"+e+"' could not be identified in the dom, tip: check spelling");return t}return e}function Z(e){return null!==e&&(Array.isArray(e)||b&&"number"===typeof e.length)}function v(e,t){var s=y(e);return t?Z(s)?s:null===s?[]:[s]:Z(s)?s[0]:s}}}]);
//# sourceMappingURL=9771.44901435.chunk.js.map