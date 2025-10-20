"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[8817],{8817:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p});var i=n(2791),r=n(7884),s=n(184);const a=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`,o=r.ZP.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,d=r.ZP.label`
  margin: 10px;
  font-size: 1.1em;

  input {
    margin-left: 10px;
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`,l=r.ZP.div`
  width: 300px;
  height: 300px;
  border: 2px dashed #ccc;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`,c=r.ZP.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: #3498db;
  border-radius: 50%;
  transition: transform 0.016s linear;
`,x=r.ZP.div`
  margin-top: 20px;
  text-align: center;

  h4 {
    padding: 8px;
    font-size: 1.5em;
  }

  p {
    margin: 5px 0;
    font-size: 1.1em;
  }
`,p=()=>{const[e,t]=(0,i.useState)(1),[n,r]=(0,i.useState)(100),[p,u]=(0,i.useState)(0);(0,i.useEffect)((()=>{const t=setInterval((()=>{u((t=>t+16*e/1e3))}),16);return()=>clearInterval(t)}),[e]);const h=n*e;return(0,s.jsxs)(a,{children:[(0,s.jsx)(x,{children:(0,s.jsx)("h4",{children:"Circular Motion"})}),(0,s.jsxs)(o,{children:[(0,s.jsxs)(d,{children:["Speed (0 to 16 rad/s):",(0,s.jsx)("input",{type:"number",value:e,onChange:e=>{const n=Number(e.target.value);n>=0&&n<=16&&t(n)}})]}),(0,s.jsxs)(d,{children:["Radius (0 to 120 pixels):",(0,s.jsx)("input",{type:"number",value:n,onChange:e=>{const t=Number(e.target.value);t>=0&&t<=120&&r(t)}})]})]}),(0,s.jsx)(l,{children:(0,s.jsx)(c,{style:{transform:`translate(${n*Math.cos(p)}px, ${n*Math.sin(p)}px)`}})}),(0,s.jsxs)(x,{children:[(0,s.jsxs)("p",{children:["Angular Momentum: ",h.toFixed(2)]}),(0,s.jsxs)("p",{children:["Number of Revolutions: ",(p/(2*Math.PI)).toFixed(2)]})]})]})}}}]);
//# sourceMappingURL=8817.a07c1a12.chunk.js.map