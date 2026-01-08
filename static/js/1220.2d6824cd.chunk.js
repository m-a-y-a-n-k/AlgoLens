"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[1220],{1217:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var r=i(2791),n=i(7884),a=i(184);const o=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 1000px;
`,s=n.ZP.div`
  width: 100%;
  aspect-ratio: 2 / 1;
  background: #1e293b;
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  border: 1px solid #334155;
`,l=n.ZP.canvas`
  width: 100%;
  height: 100%;
`,d=n.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  width: 100%;
  background: #1e293b;
  padding: 30px;
  border-radius: 16px;
  border: 1px solid #334155;
`,c=n.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,h=n.ZP.label`
  font-weight: 600;
  color: #94a3b8;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`,u=n.ZP.input`
  width: 100%;
  cursor: pointer;
`,x=n.ZP.select`
  padding: 10px;
  background: #0f172a;
  color: white;
  border: 1px solid #334155;
  border-radius: 8px;
  cursor: pointer;
`,p=()=>{const e=(0,r.useRef)(null),[t,i]=(0,r.useState)(5),[n,p]=(0,r.useState)(.02),[g,f]=(0,r.useState)("square"),m=(0,r.useRef)({time:0,wave:[]}),w=(0,r.useCallback)((()=>{const i=e.current;if(!i)return;const r=i.getContext("2d"),{time:a,wave:o}=m.current;r.clearRect(0,0,i.width,i.height);let s=200,l=i.height/2;r.strokeStyle="rgba(148, 163, 184, 0.4)",r.lineWidth=1;for(let e=0;e<t;e++){let t,i,n=s,o=l;"square"===g?(t=2*e+1,i=4/(t*Math.PI)*100):"sawtooth"===g&&(t=e+1,i=2/(t*Math.PI)*100*(e%2===0?1:-1)),s+=i*Math.cos(t*a),l+=i*Math.sin(t*a),r.beginPath(),r.arc(n,o,Math.abs(i),0,2*Math.PI),r.stroke(),r.strokeStyle="rgba(59, 130, 246, 0.8)",r.lineWidth=2,r.beginPath(),r.moveTo(n,o),r.lineTo(s,l),r.stroke(),r.strokeStyle="rgba(148, 163, 184, 0.4)",r.lineWidth=1}o.unshift(l),o.length>500&&o.pop(),r.strokeStyle="#facc15",r.beginPath(),r.moveTo(s,l),r.lineTo(400,o[0]),r.stroke(),r.strokeStyle="#3b82f6",r.lineWidth=3,r.beginPath(),r.moveTo(400,o[0]);for(let e=1;e<o.length;e++)r.lineTo(400+e,o[e]);r.stroke(),m.current.time+=n}),[t,g,n]);return(0,r.useEffect)((()=>{const t=e.current,i=()=>{t.width=t.offsetWidth*window.devicePixelRatio,t.height=t.offsetHeight*window.devicePixelRatio;t.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)};let r;i(),window.addEventListener("resize",i);const n=()=>{w(),r=requestAnimationFrame(n)};return r=requestAnimationFrame(n),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",i)}}),[w]),(0,a.jsxs)(o,{children:[(0,a.jsx)(s,{children:(0,a.jsx)(l,{ref:e})}),(0,a.jsxs)(d,{children:[(0,a.jsxs)(c,{children:[(0,a.jsxs)(h,{children:["Number of Terms: ",(0,a.jsx)("span",{children:t})]}),(0,a.jsx)(u,{type:"range",min:"1",max:"50",value:t,onChange:e=>i(parseInt(e.target.value))})]}),(0,a.jsxs)(c,{children:[(0,a.jsxs)(h,{children:["Speed: ",(0,a.jsxs)("span",{children:[(100*n).toFixed(1),"%"]})]}),(0,a.jsx)(u,{type:"range",min:"0.005",max:"0.1",step:"0.005",value:n,onChange:e=>p(parseFloat(e.target.value))})]}),(0,a.jsxs)(c,{children:[(0,a.jsx)(h,{children:"Wave Target"}),(0,a.jsxs)(x,{value:g,onChange:e=>{f(e.target.value),m.current.wave=[]},children:[(0,a.jsx)("option",{value:"square",children:"Square Wave"}),(0,a.jsx)("option",{value:"sawtooth",children:"Sawtooth Wave"})]})]})]})]})},g=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #0f172a;
  min-height: 100vh;
  color: white;
`,f=n.ZP.h1`
  font-size: 2.5rem;
  color: #f8fafc;
  margin-bottom: 20px;
`;const m=function(){return(0,a.jsxs)(g,{children:[(0,a.jsx)(f,{children:"Fourier Series Visualizer"}),(0,a.jsx)(p,{})]})}}}]);
//# sourceMappingURL=1220.2d6824cd.chunk.js.map