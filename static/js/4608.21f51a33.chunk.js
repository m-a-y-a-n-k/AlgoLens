"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[4608],{24608:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(72791),r=n(57884),o=n(80184);const s=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`,l=r.ZP.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  cursor: crosshair;
`,d=r.ZP.svg`
  width: 100%;
  height: 100%;
  touch-action: none;
`,c=r.ZP.div`
  display: flex;
  gap: 20px;
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
`,x=r.ZP.button`
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: ${e=>e.active?"#3b82f6":"#f1f5f9"};
  color: ${e=>e.active?"white":"#475569"};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${e=>e.active?"#2563eb":"#e2e8f0"};
  }
`,a=()=>{const[e,t]=(0,i.useState)([{x:100,y:400},{x:300,y:100},{x:600,y:100},{x:800,y:400}]),[n,r]=(0,i.useState)(null),a=(0,i.useRef)(null),h=(0,i.useCallback)((e=>{if(null===n)return;const i=(e=>{const t=a.current,n=t.getBoundingClientRect(),i=t.viewBox.baseVal.width/n.width,r=t.viewBox.baseVal.height/n.height,o=e.clientX||e.touches&&e.touches[0].clientX,s=e.clientY||e.touches&&e.touches[0].clientY;return{x:(o-n.left)*i,y:(s-n.top)*r}})(e);t((e=>{const t=[...e];return t[n]=i,t}))}),[n]),u=(0,i.useCallback)((()=>{r(null)}),[]);(0,i.useEffect)((()=>(window.addEventListener("pointermove",h),window.addEventListener("pointerup",u),()=>{window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",u)})),[h,u]);return(0,o.jsxs)(s,{children:[(0,o.jsx)(l,{children:(0,o.jsxs)(d,{ref:a,viewBox:"0 0 900 500",children:[(0,o.jsx)("polyline",{points:e.map((e=>`${e.x},${e.y}`)).join(" "),fill:"none",stroke:"#cbd5e1",strokeWidth:"1",strokeDasharray:"5,5"}),(0,o.jsx)("path",{d:(()=>{if(e.length<2)return"";let t=`M ${e[0].x} ${e[0].y}`;return 2===e.length?t+=` L ${e[1].x} ${e[1].y}`:3===e.length?t+=` Q ${e[1].x} ${e[1].y}, ${e[2].x} ${e[2].y}`:4===e.length&&(t+=` C ${e[1].x} ${e[1].y}, ${e[2].x} ${e[2].y}, ${e[3].x} ${e[3].y}`),t})(),fill:"none",stroke:"#3b82f6",strokeWidth:"4",strokeLinecap:"round"}),e.map(((t,n)=>{return(0,o.jsxs)("g",{onPointerDown:(i=n,e=>{e.stopPropagation(),r(i)}),children:[(0,o.jsx)("circle",{cx:t.x,cy:t.y,r:"12",fill:0===n||n===e.length-1?"#3b82f6":"#f59e0b",style:{cursor:"move"}}),(0,o.jsxs)("text",{x:t.x,y:t.y-20,textAnchor:"middle",fontSize:"12",fill:"#64748b",fontWeight:"bold",children:["P",n]})]},n);var i}))]})}),(0,o.jsxs)(c,{children:[(0,o.jsx)(x,{onClick:()=>{if(e.length>=4)return;const n=e[e.length-1];t([...e,{x:n.x+50,y:n.y}])},disabled:e.length>=4,children:"Add Point"}),(0,o.jsx)(x,{onClick:()=>{e.length<=2||t(e.slice(0,-1))},disabled:e.length<=2,children:"Remove Point"}),(0,o.jsx)(x,{onClick:()=>t([{x:100,y:400},{x:300,y:100},{x:600,y:100},{x:800,y:400}]),children:"Reset"})]})]})},h=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8fafc;
  min-height: 100vh;
`,u=r.ZP.h1`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;
`;const p=function(){return(0,o.jsxs)(h,{children:[(0,o.jsx)(u,{children:"Bezier Curves Visualizer"}),(0,o.jsx)(a,{})]})}}}]);
//# sourceMappingURL=4608.21f51a33.chunk.js.map