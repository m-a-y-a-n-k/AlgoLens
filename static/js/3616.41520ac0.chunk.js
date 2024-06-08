"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3616],{43616:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var i=r(72791),o=r(57884),s=r(80184);const n=o.ZP.div`
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
`,d=o.ZP.svg`
  width: 100%;
  height: 100%;
`,a=o.ZP.line`
  stroke: #ff6347;
  stroke-width: 2;
`,x=o.ZP.text`
  fill: #00796b;
  font-size: 14px;
`,l=e=>{let{sideA:t,sideB:r,hypotenuse:i}=e;const o=25,l=25,p=t*o+50,c=r*o+50;return(0,s.jsx)(n,{children:(0,s.jsxs)(d,{viewBox:`0 0 ${p} ${c}`,children:[(0,s.jsx)(a,{x1:l,y1:c-l,x2:l+t*o,y2:c-l})," ",(0,s.jsx)(a,{x1:l,y1:c-l,x2:l,y2:c-l-r*o})," ",(0,s.jsx)(a,{x1:l,y1:c-l-r*o,x2:l+t*o,y2:c-l})," ",(0,s.jsxs)(x,{x:l+t*o/2,y:c-l+15,children:["a: ",t]}),(0,s.jsxs)(x,{x:10,y:c-l-r*o/2,transform:`rotate(-90, 10, ${c-l-r*o/2})`,children:["b: ",r]}),(0,s.jsxs)(x,{x:l+t*o/2,y:c-l-r*o/2-5,transform:`rotate(${Math.atan(r/t)*(-180/Math.PI)}, ${l+t*o/2}, ${c-l-r*o/2-5})`,children:["c: ",i.toFixed(2)]})]})})},p=o.ZP.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;

  label {
    margin-bottom: 10px;
    font-size: 1.1em;
    color: #00796b;
  }
`,c=o.ZP.input`
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
`,u=o.ZP.button`
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
`,h=e=>{let{setSideA:t,setSideB:r}=e;return(0,s.jsxs)(p,{onSubmit:e=>{e.preventDefault();const i=e.target;t(Number(i.elements.sideA.value)),r(Number(i.elements.sideB.value))},children:[(0,s.jsxs)("label",{children:["Side A (0 to 25):"," ",(0,s.jsx)(c,{name:"sideA",type:"number",defaultValue:3,min:"0",max:"25"})]}),(0,s.jsxs)("label",{children:["Side B (0 to 25):"," ",(0,s.jsx)(c,{name:"sideB",type:"number",defaultValue:4,min:"0",max:"25"})]}),(0,s.jsx)(u,{type:"submit",children:"Calculate"})]})},b=o.ZP.div`
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
`,m=e=>{let{hypotenuse:t}=e;return(0,s.jsx)(b,{children:(0,s.jsxs)("h2",{children:["Hypotenuse: ",t.toFixed(2)]})})},f=o.ZP.div`
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
`;const g=function(){const[e,t]=i.useState(3),[r,o]=i.useState(4),[n,d]=i.useState(Math.sqrt(e**2+r**2)),a=i.useMemo((()=>Math.sqrt(e**2+r**2)),[e,r]);return i.useEffect((()=>{d(a)}),[a]),(0,s.jsxs)(f,{children:[(0,s.jsx)("h1",{children:"Pythagoras Theorem Visualizer"}),(0,s.jsx)(h,{setSideA:t,setSideB:o}),(0,s.jsx)(l,{sideA:e,sideB:r,hypotenuse:n}),(0,s.jsx)(m,{hypotenuse:n})]})}}}]);
//# sourceMappingURL=3616.41520ac0.chunk.js.map