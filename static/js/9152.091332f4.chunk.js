"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[9152],{9152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var i=n(2791),a=n(7884),s=n(184);const r=a.ZP.div`
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
`,d=a.ZP.canvas`
  width: 100%;
  height: 100%;
`,o=a.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
  background: white;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
`,c=a.ZP.div`
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
`,p=()=>{const e=(0,i.useRef)(null),[t,n]=(0,i.useState)(10),[a,p]=(0,i.useState)(25),[u,g]=(0,i.useState)(.75),[f,w]=(0,i.useState)(120),v=(0,i.useCallback)(((e,t,n,i)=>{if(e.lineWidth=n,e.beginPath(),e.moveTo(0,0),e.lineTo(0,-t),e.stroke(),t<4)return e.fillStyle="#22c55e",e.beginPath(),e.arc(0,-t,4,0,2*Math.PI),void e.fill();e.save(),e.translate(0,-t),e.rotate(i*Math.PI/180),v(e,t*u,.7*n,i),e.restore(),e.save(),e.translate(0,-t),e.rotate(-i*Math.PI/180),v(e,t*u,.7*n,i),e.restore()}),[u]),m=(0,i.useCallback)((()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");i.clearRect(0,0,n.width,n.height),i.strokeStyle="#4b2c20",i.lineCap="round",i.save(),i.translate(n.width/2,n.height-20),v(i,f,.8*t,a),i.restore()}),[t,a,u,f,v]);return(0,i.useEffect)((()=>{const t=e.current,n=()=>{t.width=t.offsetWidth*window.devicePixelRatio,t.height=t.offsetHeight*window.devicePixelRatio;t.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio),m()};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)}),[m]),(0,s.jsxs)(r,{children:[(0,s.jsx)(l,{children:(0,s.jsx)(d,{ref:e})}),(0,s.jsxs)(o,{children:[(0,s.jsxs)(c,{children:[(0,s.jsxs)(h,{children:["Recursion Depth: ",(0,s.jsx)("span",{children:t})]}),(0,s.jsx)(x,{type:"range",min:"1",max:"12",step:"1",value:t,onChange:e=>n(parseInt(e.target.value))})]}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(h,{children:["Branch Angle: ",(0,s.jsxs)("span",{children:[a,"\xb0"]})]}),(0,s.jsx)(x,{type:"range",min:"0",max:"90",step:"1",value:a,onChange:e=>p(parseInt(e.target.value))})]}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(h,{children:["Length Ratio: ",(0,s.jsx)("span",{children:u.toFixed(2)})]}),(0,s.jsx)(x,{type:"range",min:"0.5",max:"0.85",step:"0.01",value:u,onChange:e=>g(parseFloat(e.target.value))})]}),(0,s.jsxs)(c,{children:[(0,s.jsxs)(h,{children:["Base Length: ",(0,s.jsxs)("span",{children:[f,"px"]})]}),(0,s.jsx)(x,{type:"range",min:"50",max:"200",step:"1",value:f,onChange:e=>w(parseInt(e.target.value))})]})]})]})},u=a.ZP.div`
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
//# sourceMappingURL=9152.091332f4.chunk.js.map