"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[1336],{11336:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var i=r(72791),n=r(57884),a=r(80184);const o=n.ZP.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 360px;
    align-items: start;
  }
`,s=n.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`,d=n.ZP.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`,l=n.ZP.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,c=n.ZP.div`
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  pointer-events: none;
`,x=n.ZP.div`
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  backdrop-filter: blur(8px);
`,p=n.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  padding: 14px;
  color: rgba(255, 255, 255, 0.9);
`,h=n.ZP.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`,g=n.ZP.button`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: ${e=>e.primary?"linear-gradient(180deg, #7fe7ff, #2dd4ff)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.primary?"#041014":"rgba(255, 255, 255, 0.9)"};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
  min-width: 110px;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,u=n.ZP.label`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 10px 0 6px;
`,f=n.ZP.span`
  color: rgba(255, 255, 255, 0.65);
  font-variant-numeric: tabular-nums;
`,m=n.ZP.input`
  width: 100%;
`,b=n.ZP.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`,j=n.ZP.div`
  padding: 10px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
`,v=n.ZP.div`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.65);
`,w=n.ZP.div`
  margin-top: 4px;
  font-size: 16px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.92);
  font-variant-numeric: tabular-nums;
`;function P(e){return e.toLocaleString(void 0,{maximumFractionDigits:0})}function y(){const e=(0,i.useRef)(null),t=(0,i.useRef)(null),r=(0,i.useRef)(0),[n,y]=(0,i.useState)(!0),[M,C]=(0,i.useState)(800),[Z,R]=(0,i.useState)(1),[S,F]=(0,i.useState)(2),[z,T]=(0,i.useState)(!0),A=(0,i.useRef)({total:0,inside:0}),[E,I]=(0,i.useState)({total:0,inside:0}),L=(0,i.useMemo)((()=>{const{total:e,inside:t}=E;return e>0?4*t/e:0}),[E]);(0,i.useEffect)((()=>{const r=t.current,i=e.current;if(!r||!i)return;const n=new ResizeObserver((()=>{const e=r.getBoundingClientRect(),t=(n=window.devicePixelRatio||1,a=1,o=2,Math.max(a,Math.min(o,n)));var n,a,o;i.width=Math.max(1,Math.floor(e.width*t)),i.height=Math.max(1,Math.floor(e.height*t));const s=i.getContext("2d");s.setTransform(t,0,0,t,0,0),s.clearRect(0,0,e.width,e.height),k(s,e.width,e.height,z)}));return n.observe(r),()=>n.disconnect()}),[z]);return(0,i.useEffect)((()=>{const t=e.current;if(!t)return;const i=t.getContext("2d");let a=0;const o=()=>{if(r.current=requestAnimationFrame(o),!n)return;const e=t.getBoundingClientRect(),s=e.width,d=e.height;a++,z&&a%90===0&&(i.save(),i.globalAlpha=.12,k(i,s,d,!0),i.restore());const l=Math.floor(M*Z),c=.48*Math.min(s,d),x=s/2,p=d/2;let h=0;for(let t=0;t<l;t++){const e=2*Math.random()-1,t=2*Math.random()-1,r=e*e+t*t<=1;r&&h++;const n=x+e*c,a=p+t*c;i.fillStyle=r?"rgba(127,231,255,0.9)":"rgba(251,172,97,0.75)",i.fillRect(n,a,S,S)}A.current.total+=l,A.current.inside+=h,a%6===0&&I({...A.current})};return r.current=requestAnimationFrame(o),()=>cancelAnimationFrame(r.current)}),[M,S,n,z,Z]),(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:(0,a.jsxs)(d,{ref:t,children:[(0,a.jsx)(l,{ref:e}),(0,a.jsxs)(c,{children:[(0,a.jsx)(x,{children:n?"RUNNING":"PAUSED"}),(0,a.jsxs)(x,{children:["\u03c0 \u2248 ",L?L.toFixed(6):"\u2014"]})]})]})}),(0,a.jsxs)(p,{children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{primary:!0,onClick:()=>y((e=>!e)),children:n?"Pause":"Play"}),(0,a.jsx)(g,{onClick:()=>{A.current={total:0,inside:0},I({total:0,inside:0});const t=e.current;if(!t)return;const r=t.getContext("2d"),i=t.getBoundingClientRect();r.clearRect(0,0,i.width,i.height),k(r,i.width,i.height,z)},children:"Reset"}),(0,a.jsxs)(g,{onClick:()=>T((e=>!e)),children:["Guides: ",z?"On":"Off"]})]}),(0,a.jsxs)(u,{children:["Points per frame ",(0,a.jsx)(f,{children:P(M)})]}),(0,a.jsx)(m,{type:"range",min:"100",max:"5000",step:"50",value:M,onChange:e=>C(parseInt(e.target.value,10))}),(0,a.jsxs)(u,{children:["Speed ",(0,a.jsxs)(f,{children:[Z.toFixed(2),"\xd7"]})]}),(0,a.jsx)(m,{type:"range",min:"0.25",max:"3.0",step:"0.05",value:Z,onChange:e=>R(parseFloat(e.target.value))}),(0,a.jsxs)(u,{children:["Dot size ",(0,a.jsxs)(f,{children:[S,"px"]})]}),(0,a.jsx)(m,{type:"range",min:"1",max:"6",step:"1",value:S,onChange:e=>F(parseInt(e.target.value,10))}),(0,a.jsxs)(b,{children:[(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"Total points"}),(0,a.jsx)(w,{children:P(E.total)})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"Inside circle"}),(0,a.jsx)(w,{children:P(E.inside)})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"Estimate"}),(0,a.jsx)(w,{children:L?L.toFixed(6):"\u2014"})]}),(0,a.jsxs)(j,{children:[(0,a.jsx)(v,{children:"Error vs \u03c0"}),(0,a.jsx)(w,{children:E.total>0?Math.abs(Math.PI-L).toFixed(6):"\u2014"})]})]})]})]})}function k(e,t,r,i){if(!i)return;const n=.48*Math.min(t,r),a=t/2,o=r/2,s=e.createLinearGradient(0,0,0,r);s.addColorStop(0,"rgba(2,6,23,1)"),s.addColorStop(1,"rgba(0,0,0,1)"),e.fillStyle=s,e.fillRect(0,0,t,r),e.strokeStyle="rgba(255,255,255,0.25)",e.lineWidth=1,e.strokeRect(a-n,o-n,2*n,2*n),e.beginPath(),e.arc(a,o,n,0,2*Math.PI),e.strokeStyle="rgba(127,231,255,0.35)",e.lineWidth=2,e.stroke(),e.strokeStyle="rgba(255,255,255,0.10)",e.lineWidth=1,e.beginPath(),e.moveTo(a-n,o),e.lineTo(a+n,o),e.moveTo(a,o-n),e.lineTo(a,o+n),e.stroke()}const M=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: radial-gradient(
    circle at 20% 10%,
    #0b1020 0%,
    #05060b 55%,
    #000 100%
  );
  min-height: 100vh;
  color: #eef2ff;
`,C=n.ZP.h1`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #7fe7ff;
  margin: 0 0 10px 0;
  text-align: center;
  text-shadow: 0 0 14px rgba(127, 231, 255, 0.35);
`,Z=n.ZP.p`
  margin: 0 0 18px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.72);
  max-width: 900px;
  font-size: 0.95rem;
`;function R(){return(0,a.jsxs)(M,{children:[(0,a.jsx)(C,{children:"Monte Carlo Estimation of \u03c0"}),(0,a.jsx)(Z,{children:"Random points are thrown into a square. The ratio that land inside the inscribed circle approaches \\( \\pi/4 \\). Try adjusting batch size and speed for smoother/faster convergence."}),(0,a.jsx)(y,{})]})}}}]);
//# sourceMappingURL=1336.b874d0bc.chunk.js.map