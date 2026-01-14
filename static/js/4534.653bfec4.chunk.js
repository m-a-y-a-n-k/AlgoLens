"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[4534],{54534:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var r=n(72791),i=n(57884),o=n(80184);const a=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,s=i.ZP.div`
  width: 50px;
  height: 50px;
  background-color: #3498db;
  border-radius: 5px;
  position: relative;
  animation: ${e=>{let{amplitude:t}=e;return(e=>i.F4`
  0% { transform: translateX(${e}px); }
  50% { transform: translateX(-${e}px); }
  100% { transform: translateX(${e}px); }
`)(t)}}
    ${e=>{let{period:t}=e;return t}}s linear infinite;
`,d=i.ZP.div`
  margin-top: 20px;
  font-size: 18px;
  color: #333;
  text-align: center;
`,l=e=>{let{mass:t,springLength:n}=e;const[i,l]=(0,r.useState)(0),p=n,c=2*Math.PI/Math.sqrt(.5/t),x=(0,r.useRef)();return(0,r.useEffect)((()=>{const e=Date.now(),t=()=>{l((Date.now()-e)/1e3),x.current=requestAnimationFrame(t)};return x.current=requestAnimationFrame(t),()=>cancelAnimationFrame(x.current)}),[]),(0,o.jsxs)(a,{children:[(0,o.jsx)(s,{amplitude:p,period:c}),(0,o.jsxs)(d,{children:["Time Elapsed: ",i.toFixed(2),"s"]})]})},p=i.ZP.header`
  width: 100%;
  padding: 20px;
  background-color: #4caf50;
  color: #fff;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 4px solid #388e3c;
  margin-bottom: 16px;
`,c=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #e8f5e9;
  padding: 20px;
`,x=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`,u=i.ZP.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
`,g=i.ZP.label`
  font-size: 18px;
  margin-top: 10px;
  color: #555;
`,m=()=>{const[e,t]=(0,r.useState)(1),[n,i]=(0,r.useState)(100);return(0,o.jsxs)(c,{children:[(0,o.jsx)(p,{children:"Simple Harmonic Motion"}),(0,o.jsxs)(x,{children:[(0,o.jsx)(g,{htmlFor:"mass",children:"Mass (0 to 10 kg):"}),(0,o.jsx)(u,{id:"mass",type:"number",value:e,onChange:e=>{const n=Number(e.target.value);n>=0&&n<=10&&t(n)}}),(0,o.jsx)(g,{htmlFor:"springLength",children:"Spring Length (0 to 150 px):"}),(0,o.jsx)(u,{id:"springLength",type:"number",value:n,onChange:e=>{const t=Number(e.target.value);t>=0&&t<=150&&i(t)}})]}),(0,o.jsx)(l,{mass:e,springLength:n})]})}}}]);
//# sourceMappingURL=4534.653bfec4.chunk.js.map