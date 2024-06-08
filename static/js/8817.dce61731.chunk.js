"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8817],{68817:(e,t,i)=>{i.r(t),i.d(t,{default:()=>x});var n=i(72791),r=i(57884),s=i(80184);const a=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`,d=r.ZP.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,o=r.ZP.label`
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
`,p=r.ZP.div`
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
`,x=()=>{const[e,t]=(0,n.useState)(1),[i,r]=(0,n.useState)(100),[x,u]=(0,n.useState)(0);(0,n.useEffect)((()=>{const t=setInterval((()=>{u((t=>t+16*e/1e3))}),16);return()=>clearInterval(t)}),[e]);const h=i*e;return(0,s.jsxs)(a,{children:[(0,s.jsx)(p,{children:(0,s.jsx)("h4",{children:"Circular Motion"})}),(0,s.jsxs)(d,{children:[(0,s.jsxs)(o,{children:["Speed (0 to 16 rad/s):",(0,s.jsx)("input",{type:"number",value:e,onChange:e=>{const i=Number(e.target.value);i>=0&&i<=16&&t(i)}})]}),(0,s.jsxs)(o,{children:["Radius (0 to 120 pixels):",(0,s.jsx)("input",{type:"number",value:i,onChange:e=>{const t=Number(e.target.value);t>=0&&t<=120&&r(t)}})]})]}),(0,s.jsx)(l,{children:(0,s.jsx)(c,{style:{transform:`translate(${i*Math.cos(x)}px, ${i*Math.sin(x)}px)`}})}),(0,s.jsxs)(p,{children:[(0,s.jsxs)("p",{children:["Angular Momentum: ",h.toFixed(2)]}),(0,s.jsxs)("p",{children:["Number of Revolutions: ",(x/(2*Math.PI)).toFixed(2)]})]})]})}}}]);
//# sourceMappingURL=8817.dce61731.chunk.js.map