"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[9152],{79152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(72791),a=n(57884),s=n(80184);const i=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 900px;
`,l=a.ZP.div`
  width: 100%;
  aspect-ratio: 1;
  background: white;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(20, 83, 45, 0.1);
  overflow: hidden;
  border: 1px solid #dcfce7;
  display: flex;
  justify-content: center;
  align-items: center;
`,o=a.ZP.canvas`
  width: 100%;
  height: 100%;
`,c=a.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,d=a.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,h=a.ZP.label`
  font-weight: 600;
  color: #166534;
  font-size: 0.9rem;
  display: flex;
  justify-content: space-between;
`,x=a.ZP.input`
  width: 100%;
  accent-color: #22c55e;
`,p=()=>{const e=(0,r.useRef)(null),t=(0,r.useRef)({w:0,h:0,dpr:1}),[n,a]=(0,r.useState)(10),[p,u]=(0,r.useState)(25),[g,f]=(0,r.useState)(.75),[m,j]=(0,r.useState)(120),v=(0,r.useCallback)(((e,t,n,r)=>{if(e.lineWidth=n,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-t),e.stroke(),t<4)return e.fillStyle="#22c55e",e.beginPath(),e.arc(0,-t,4,0,2*Math.PI),void e.fill();e.save(),e.translate(0,-t),e.rotate(r*Math.PI/180),v(e,t*g,.7*n,r),e.restore(),e.save(),e.translate(0,-t),e.rotate(-r*Math.PI/180),v(e,t*g,.7*n,r),e.restore()}),[g]),w=(0,r.useCallback)((()=>{const r=e.current;if(!r)return;const a=r.getContext("2d"),{w:s,h:i}=t.current;if(!s||!i)return;a.clearRect(0,0,s,i),a.strokeStyle="#4b2c20",a.lineCap="round",a.save(),a.translate(s/2,i-20);const l=Math.min(m,.42*i);v(a,l,.8*n,p),a.restore()}),[n,p,g,m,v]);return(0,r.useEffect)((()=>{const n=e.current;if(!n)return;const r=new ResizeObserver((()=>{const e=n.getBoundingClientRect(),r=Math.max(1,Math.min(window.devicePixelRatio||1,2));t.current={w:e.width,h:e.height,dpr:r},n.width=Math.max(1,Math.floor(e.width*r)),n.height=Math.max(1,Math.floor(e.height*r));n.getContext("2d").setTransform(r,0,0,r,0,0),w()}));return r.observe(n),()=>r.disconnect()}),[w]),(0,s.jsxs)(i,{children:[(0,s.jsx)(l,{children:(0,s.jsx)(o,{ref:e})}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(d,{children:[(0,s.jsxs)(h,{children:["Recursion Depth: ",(0,s.jsx)("span",{children:n})]}),(0,s.jsx)(x,{type:"range",min:"1",max:"12",step:"1",value:n,onChange:e=>a(parseInt(e.target.value))})]}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(h,{children:["Branch Angle: ",(0,s.jsxs)("span",{children:[p,"\xb0"]})]}),(0,s.jsx)(x,{type:"range",min:"0",max:"90",step:"1",value:p,onChange:e=>u(parseInt(e.target.value))})]}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(h,{children:["Length Ratio: ",(0,s.jsx)("span",{children:g.toFixed(2)})]}),(0,s.jsx)(x,{type:"range",min:"0.5",max:"0.85",step:"0.01",value:g,onChange:e=>f(parseFloat(e.target.value))})]}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(h,{children:["Base Length: ",(0,s.jsxs)("span",{children:[m,"px"]})]}),(0,s.jsx)(x,{type:"range",min:"50",max:"200",step:"1",value:m,onChange:e=>j(parseInt(e.target.value))})]})]})]})},u=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0fdf4;
  min-height: 100vh;
`,g=a.ZP.h1`
  font-size: 2.5rem;
  color: #14532d;
  margin-bottom: 20px;
`;const f=function(){return(0,s.jsxs)(u,{children:[(0,s.jsx)(g,{children:"Fractal Tree Generator"}),(0,s.jsx)(p,{})]})}}}]);
//# sourceMappingURL=9152.94658dbd.chunk.js.map