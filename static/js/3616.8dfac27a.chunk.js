"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[3616],{43616:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(72791),i=r(57884),s=r(80184);const n=i.ZP.div`
  width: 100%;
  max-width: 400px;
  height: 400px;
  position: relative;
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 2px solid #00796b;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`,d=i.ZP.svg`
  width: 100%;
  height: 100%;
`,a=i.ZP.line`
  stroke: #ff6347;
  stroke-width: 2;
`,l=i.ZP.text`
  fill: #00796b;
  font-size: 14px;
`,x=e=>{let{sideA:t,sideB:r,hypotenuse:o}=e;const i=25,x=25,c=t*i+50,p=r*i+50;return(0,s.jsx)(n,{children:(0,s.jsxs)(d,{viewBox:`0 0 ${c} ${p}`,children:[(0,s.jsx)(a,{x1:x,y1:p-x,x2:x+t*i,y2:p-x})," ",(0,s.jsx)(a,{x1:x,y1:p-x,x2:x,y2:p-x-r*i})," ",(0,s.jsx)(a,{x1:x,y1:p-x-r*i,x2:x+t*i,y2:p-x})," ",(0,s.jsxs)(l,{x:x+t*i/2,y:p-x+15,children:["a: ",t]}),(0,s.jsxs)(l,{x:10,y:p-x-r*i/2,transform:`rotate(-90, 10, ${p-x-r*i/2})`,children:["b: ",r]}),(0,s.jsxs)(l,{x:x+t*i/2,y:p-x-r*i/2-5,transform:`rotate(${Math.atan(r/t)*(-180/Math.PI)}, ${x+t*i/2}, ${p-x-r*i/2-5})`,children:["c: ",o.toFixed(2)]})]})})},c=i.ZP.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #00796b;
  }
`,p=i.ZP.input`
  margin: 10px 0;
  padding: 10px;
  border: 2px solid #00796b;
  border-radius: 4px;
  width: 200px;
  font-size: 1em;
  transition: border-color 0.3s;

  &:focus {
    border-color: #004d40;
    outline: none;
  }
`,u=i.ZP.button`
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #00796b;
  color: white;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #004d40;
  }
`,h=e=>{let{setSideA:t,setSideB:r}=e;return(0,s.jsxs)(c,{onSubmit:e=>{e.preventDefault();const o=e.target;t(Number(o.elements.sideA.value)),r(Number(o.elements.sideB.value))},children:[(0,s.jsxs)("label",{children:["Side A (0 to 25):"," ",(0,s.jsx)(p,{name:"sideA",type:"number",defaultValue:3,min:"0",max:"25"})]}),(0,s.jsxs)("label",{children:["Side B (0 to 25):"," ",(0,s.jsx)(p,{name:"sideB",type:"number",defaultValue:4,min:"0",max:"25"})]}),(0,s.jsx)(u,{type:"submit",children:"Calculate"})]})},b=i.ZP.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #ffffff;
  border: 2px solid #00796b;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h2 {
    color: #00796b;
    margin: 0;
  }
`,m=e=>{let{hypotenuse:t}=e;return(0,s.jsx)(b,{children:(0,s.jsxs)("h2",{children:["Hypotenuse: ",t.toFixed(2)]})})},f=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #e0f7fa;
  min-height: 100vh;
  font-family: "Arial, sans-serif";

  h1 {
    color: #00796b;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;const g=function(){const[e,t]=o.useState(3),[r,i]=o.useState(4),[n,d]=o.useState(Math.sqrt(e**2+r**2)),a=o.useMemo((()=>Math.sqrt(e**2+r**2)),[e,r]);return o.useEffect((()=>{d(a)}),[a]),(0,s.jsxs)(f,{children:[(0,s.jsx)("h1",{children:"Pythagoras Theorem Visualizer"}),(0,s.jsx)(h,{setSideA:t,setSideB:i}),(0,s.jsx)(x,{sideA:e,sideB:r,hypotenuse:n}),(0,s.jsx)(m,{hypotenuse:n})]})}}}]);
//# sourceMappingURL=3616.8dfac27a.chunk.js.map