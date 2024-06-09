"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7915],{27915:(e,t,l)=>{l.r(t),l.d(t,{default:()=>W});var a=l(72791),n=l(28182),s=l(38596),r=l(13108),i=l(9773),c=l(43486),d=l(17631),o=l(85247),h=l(63928),u=l(77690),g=l(38302),p=l(66828),x=l(95480),m=l(37692),b=l(75566),f=l(44279),j=l(67025),Z=l(94135),S=l(89526),C=l(66556),k=l(58528),v=l(57407),w=l(13880),y=l(2793),N=l(97640),P=l(80184);const D=(0,a.lazy)((()=>l.e(3483).then(l.bind(l,83483)))),F=(0,a.lazy)((()=>l.e(7233).then(l.bind(l,17233)))),R=(0,a.lazy)((()=>Promise.all([l.e(6881),l.e(7394),l.e(8241)]).then(l.bind(l,28241))));function T(e,t,l){return t[l]<e[l]?-1:t[l]>e[l]?1:0}function I(e,t){return"desc"===e?(e,l)=>T(e,l,t):(e,l)=>-T(e,l,t)}function A(e,t){const l=e.map(((e,t)=>[e,t]));return l.sort(((e,l)=>{const a=t(e[0],l[0]);return 0!==a?a:e[1]-l[1]})),l.map((e=>e[0]))}function H(e){const{classes:t,numSelected:l,order:a,orderBy:n,onSelectAllClick:s,onRequestSort:r,rowCount:u,headCells:g}=e;return(0,P.jsx)(i.Z,{className:t.tableHead,children:(0,P.jsxs)(c.Z,{children:[(0,P.jsx)(d.Z,{padding:"checkbox",children:(0,P.jsx)(o.Z,{indeterminate:l>0&&l<u,checked:u>0&&l===u,onChange:s,inputProps:{"aria-label":"select all enteries"}})}),g.map((e=>{return(0,P.jsx)(d.Z,{className:t.headCell,align:e.numeric?"right":"left",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&a,children:(0,P.jsxs)(h.Z,{active:n===e.id,direction:n===e.id?a:"asc",onClick:(l=e.id,e=>{r(e,l)}),children:[e.label,n===e.id?(0,P.jsx)("span",{className:t.visuallyHidden,children:"desc"===a?"sorted descending":"sorted ascending"}):null]})},e.id);var l}))]})})}const z=(0,s.Z)((e=>({root:{margin:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(1),flexDirection:"column"},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:(0,r.$n)(e.palette.secondary.light,.85),flexDirection:"row"}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark,flexDirection:"row"},title:{flex:"1 1 100%",margin:e.spacing(1)},searchField:{margin:e.spacing(2),width:"80%"},searchColumns:{margin:e.spacing(1),flexDirection:"row"}}))),B=e=>{let{numSelected:t,title:l,setSelected:a,deleteHandler:s,selected:r,searchState:i,setSearchState:c,performSearch:d,headCells:h}=e;const S=z(),C=(null===i||void 0===i?void 0:i.searchText)||"",k=(null===i||void 0===i?void 0:i.searchIds)||new Set;return(0,P.jsxs)(u.Z,{className:(0,n.default)(S.root,{[S.highlight]:t>0}),children:[t>0?(0,P.jsxs)(g.Z,{className:S.title,color:"inherit",variant:"subtitle1",component:"div",children:[t," selected"]}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(p.Z,{className:S.searchField,variant:"outlined",children:[(0,P.jsx)(x.Z,{htmlFor:"outlined-search-table",children:"Search In Table"}),(0,P.jsx)(m.Z,{autoComplete:"off",id:"outlined-search-table",type:"text",value:C,onChange:e=>{let{target:{value:t}}=e;c({searchText:t||"",searchIds:k})},endAdornment:(0,P.jsx)(b.ZP,{title:"Filter table",children:(0,P.jsx)(f.Z,{position:"end",children:(0,P.jsx)(j.Z,{"aria-label":"perform-search",onClick:()=>{d(i)},onMouseDown:e=>{e.preventDefault()},disabled:!C,edge:"end",children:C?(0,P.jsx)(w.Z,{}):(0,P.jsx)(y.Z,{})})})}),labelWidth:120})]}),C&&(0,P.jsx)(p.Z,{className:S.searchColumns,children:h.map((e=>{const{id:t,label:l}=e;return(0,P.jsx)(Z.Z,{control:(0,P.jsx)(o.Z,{checked:k.has(t),onChange:e=>{let{target:{checked:l}}=e;l?k.add(t):k.size>1&&k.delete(t),c({searchText:C,searchIds:k})},inputProps:{"aria-label":"select all enteries"}}),label:l},t)}))})]}),t>0?(0,P.jsx)(b.ZP,{title:"Delete",children:(0,P.jsx)(j.Z,{"aria-label":"delete",onClick:()=>{s(r),a([])},children:(0,P.jsx)(v.Z,{})})}):(0,P.jsx)(g.Z,{className:S.title,variant:"h6",id:"tableTitle",component:"div",children:l})]})},O=(0,s.Z)((e=>({root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{width:"100vw"},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1},tableHead:{background:"#A2DDFF"},headCell:{fontWeight:"bolder"},tableNote:{textAlign:"center",fontSize:16,fontWeight:"lighter",padding:"15px 0px",fontStyle:"italic"}})));function W(e){let{allRows:t,rows:l,headCells:n,deleteHandler:s,title:r,setFilteredRows:i}=e;const h=n&&Array.isArray(n)&&n.length>0&&n[0].id||"",u=O(),[p,x]=(0,a.useState)("asc"),[m,b]=(0,a.useState)(h),[f,j]=(0,a.useState)([]),[v,w]=(0,a.useState)(0),[y,T]=(0,a.useState)(!1),[z,W]=(0,a.useState)(5),[q,$]=(0,a.useState)({searchText:"",searchIds:new Set([h])}),E=(0,a.useCallback)((()=>{const{searchText:e,searchIds:l}=q,a=t.filter((t=>{let a=!1;for(let n of l)a||(a=t[n].includes(e));return a}));i(a),w(0)}),[q,i,t]);(0,a.useEffect)((()=>{E()}),[E]);const L=0===l.length;return(0,P.jsxs)("div",{className:u.root,children:[(0,P.jsxs)(S.Z,{className:u.paper,children:[(0,P.jsx)(B,{title:r,numSelected:f.length,selected:f,searchState:q,headCells:n,performSearch:()=>{E()},deleteHandler:s,setSelected:j,setSearchState:$}),(0,N.R)(F,{children:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(C.Z,{className:u.table,"aria-labelledby":"tableTitle",size:y?"small":"medium","aria-label":"enhanced table",children:[(0,P.jsx)(H,{classes:u,numSelected:f.length,order:p,orderBy:m,onSelectAllClick:e=>{if(e.target.checked){const e=l.map((e=>e[h]));j(e)}else j([])},onRequestSort:(e,t)=>{x(m===t&&"asc"===p?"desc":"asc"),b(t)},rowCount:l.length,headCells:n}),(0,N.R)(D,{children:A(l,I(p,m)).slice(v*z,v*z+z).map(((e,t)=>{const l=(a=e[h],-1!==f.indexOf(a));var a;const s=`enhanced-table-checkbox-${t}`;return(0,P.jsxs)(c.Z,{hover:!0,onClick:t=>((e,t)=>{const l=f.indexOf(t);let a=[];-1===l?a=a.concat(f,t):0===l?a=a.concat(f.slice(1)):l===f.length-1?a=a.concat(f.slice(0,-1)):l>0&&(a=a.concat(f.slice(0,l),f.slice(l+1))),j(a)})(0,e[h]),role:"checkbox","aria-checked":l,tabIndex:-1,selected:l,children:[(0,P.jsx)(d.Z,{padding:"checkbox",children:(0,P.jsx)(o.Z,{checked:l,inputProps:{"aria-labelledby":s}})}),n.map(((t,l)=>0===l?(0,P.jsx)(d.Z,{component:"th",id:s,scope:"row",padding:"none",children:e[t.id]},t.id):(0,P.jsx)(d.Z,{align:"left",children:e[t.id]},t.id)))]},e[h])}))})]}),L&&(0,P.jsx)(g.Z,{className:u.tableNote,children:q.searchText?"No search results found :( ":"No data found. Please add some entries using + button"})]})}),(0,N.R)(R,{rowsPerPageOptions:[5,10,25],component:"div",count:l.length,rowsPerPage:z,page:v,onChangePage:(e,t)=>{w(t)},onChangeRowsPerPage:e=>{W(parseInt(e.target.value,10)),w(0)}})]}),(0,P.jsx)(Z.Z,{control:(0,P.jsx)(k.Z,{checked:y,onChange:e=>{T(e.target.checked)}}),label:"Dense padding"})]})}}}]);
//# sourceMappingURL=7915.d0e392b5.chunk.js.map