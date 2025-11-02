"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[6940],{6940:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var i=n(2791),r=n(7884),s=n(184);const o=r.F4`
  0% { transform: rotate(-45deg); }
  50% { transform: rotate(45deg); }
  100% { transform: rotate(-45deg); }
`,a=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #f0f0f0;
`,d=r.ZP.div`
  position: relative;
  height: 300px;
`,l=r.ZP.div`
  width: 2px;
  height: ${e=>e.length}px;
  background: #333;
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: top;
  animation: ${o} ${e=>e.speed}s infinite ease-in-out;
`,p=r.ZP.div`
  width: 30px;
  height: 30px;
  background: #3498db;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`,x=r.ZP.div`
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
`,c=e=>{let{speed:t,length:n}=e;const[r,o]=(0,i.useState)(0),c=(0,i.useRef)(null);return(0,i.useEffect)((()=>(c.current=setInterval((()=>{o((e=>e+1))}),1e3),()=>clearInterval(c.current))),[]),(0,s.jsxs)(a,{children:[(0,s.jsx)(d,{children:(0,s.jsx)(l,{length:n,speed:t,children:(0,s.jsx)(p,{})})}),(0,s.jsxs)(x,{children:["Time Elapsed: ",r," s"]})]})},h=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: #e0e0e0;
  min-height: 100vh;
  box-sizing: border-box;
`,u=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`,g=r.ZP.label`
  margin: 10px 0;
  font-size: 1rem;
  width: 100%;
`,m=r.ZP.input`
  padding: 10px;
  font-size: 1rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`,f=r.ZP.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  color: #333;
`,b=()=>{const[e,t]=(0,i.useState)(2),[n,r]=(0,i.useState)(200);return(0,s.jsxs)(h,{children:[(0,s.jsx)(f,{children:"Simple Pendulum Simulation"}),(0,s.jsxs)(u,{children:[(0,s.jsxs)(g,{children:["Speed (0 to 10 seconds per cycle):",(0,s.jsx)(m,{type:"number",value:e,onChange:e=>{const n=parseFloat(e.target.value||0);n>=0&&n<=10&&t(n)},min:"0.1",step:"0.1",max:"10"})]}),(0,s.jsxs)(g,{children:["Rod Length (0 to 250 pixels):",(0,s.jsx)(m,{type:"number",value:n,onChange:e=>{const t=parseInt(e.target.value||0,10);t>=0&&t<=250&&r(t)},min:"50",max:"250"})]})]}),(0,s.jsx)(c,{speed:e,length:n})]})}}}]);
//# sourceMappingURL=6940.4d930470.chunk.js.map