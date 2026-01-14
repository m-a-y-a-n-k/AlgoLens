"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[8589],{28589:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var n=t(72791),o=t(57884),a=t(80184);const i=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1e293b;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-width: 900px;
  width: 100%;
`,s=o.ZP.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  background: black;
  border-radius: 12px;
  overflow: hidden;
  cursor: crosshair;
  border: 1px solid #334155;
`,c=o.ZP.canvas`
  width: 100%;
  height: 100%;
  image-rendering: pixelated;
`,l=o.ZP.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  flex-wrap: wrap;
  justify-content: center;
`,u=o.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #94a3b8;
  font-size: 0.9rem;
`,d=o.ZP.input`
  width: 150px;
`,p=o.ZP.p`
  color: #64748b;
  margin-top: 15px;
  font-size: 0.9rem;
  text-align: center;
`,x=()=>{const e=(0,n.useRef)(null),[r,t]=(0,n.useState)(.98),[o,x]=(0,n.useState)(200),h=(0,n.useRef)({cols:0,rows:0,current:[],previous:[],animationId:null}),g=(0,n.useCallback)((()=>{const r=o,t=o;h.current.cols=r,h.current.rows=t,h.current.current=new Float32Array(r*t).fill(0),h.current.previous=new Float32Array(r*t).fill(0);const n=e.current;n&&(n.width=r,n.height=t)}),[o]);(0,n.useEffect)((()=>{g()}),[g]);const f=(0,n.useCallback)((()=>{const{cols:t,rows:n,current:o,previous:a}=h.current,i=e.current;if(!i)return;const s=i.getContext("2d"),c=s.createImageData(t,n);for(let e=1;e<t-1;e++)for(let i=1;i<n-1;i++){const n=e+i*t,s=a[n-1]+a[n+1]+a[n-t]+a[n+t];o[n]=s/2-o[n],o[n]*=r;const l=4*n,u=o[n],d=Math.max(0,Math.min(255,128+2*u));c.data[l]=.1*d,c.data[l+1]=.6*d,c.data[l+2]=d,c.data[l+3]=255}s.putImageData(c,0,0);const l=h.current.previous;h.current.previous=h.current.current,h.current.current=l}),[r]);(0,n.useEffect)((()=>{const e=()=>{f(),h.current.animationId=requestAnimationFrame(e)};return h.current.animationId=requestAnimationFrame(e),()=>cancelAnimationFrame(h.current.animationId)}),[f]);const m=r=>{const t=e.current.getBoundingClientRect(),n=Math.floor((r.clientX-t.left)/t.width*h.current.cols),o=Math.floor((r.clientY-t.top)/t.height*h.current.rows);n>0&&n<h.current.cols-1&&o>0&&o<h.current.rows-1&&(h.current.previous[n+o*h.current.cols]=512)};return(0,a.jsxs)(i,{children:[(0,a.jsx)(s,{onMouseMove:e=>1===e.buttons&&m(e),onMouseDown:m,children:(0,a.jsx)(c,{ref:e})}),(0,a.jsxs)(l,{children:[(0,a.jsxs)(u,{children:[(0,a.jsxs)("label",{children:["Damping: ",r.toFixed(3)]}),(0,a.jsx)(d,{type:"range",min:"0.9",max:"0.999",step:"0.001",value:r,onChange:e=>t(parseFloat(e.target.value))})]}),(0,a.jsxs)(u,{children:[(0,a.jsxs)("label",{children:["Resolution: ",o]}),(0,a.jsx)(d,{type:"range",min:"100",max:"400",step:"50",value:o,onChange:e=>x(parseInt(e.target.value))})]})]}),(0,a.jsx)(p,{children:"Click or drag on the water to create ripples. Adjust damping to change how long ripples last."})]})},h=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0f172a;
  min-height: 100vh;
  color: white;
`,g=o.ZP.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
`;const f=function(){return(0,a.jsxs)(h,{children:[(0,a.jsx)(g,{children:"Fluid Ripple Simulation"}),(0,a.jsx)(x,{})]})}}}]);
//# sourceMappingURL=8589.411b0575.chunk.js.map