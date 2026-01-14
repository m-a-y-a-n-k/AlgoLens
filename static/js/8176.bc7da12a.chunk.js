"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[8176],{38176:(e,r,a)=>{a.r(r),a.d(r,{default:()=>b});var o=a(72791),n=a(57884),s=a(80184);const t=n.ZP.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`,i=n.ZP.div`
  margin: 5px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-size: 1.2em;
  color: #333;
  animation: fadeIn 0.5s ease-in-out;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ddd;
    transform: scale(1.1);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 600px) {
    font-size: 1em;
    padding: 8px;
  }
`,d=n.ZP.div`
  margin-top: 20px;
  font-size: 1.5em;
  color: #61dafb;
`,l=e=>{let{number:r,base:a}=e;return(0,s.jsxs)("div",{children:[(0,s.jsx)(t,{children:(o=r,o?o.split("").map(((e,r)=>(0,s.jsx)(i,{title:`Position: ${o.length-r-1}, Value: ${e}`,children:e},r))):[])}),r&&(0,s.jsx)(d,{children:`Base: ${a} (${{2:"Binary",8:"Octal",10:"Decimal",16:"Hexadecimal"}[a]||"Custom Base"})`})]});var o},c=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,p=n.ZP.h1`
  color: #333;
  font-size: 2em;
  margin-bottom: 20px;
`,u=n.ZP.label`
  color: #555;
  font-size: 1.2em;
  margin-bottom: 10px;
`,x=n.ZP.input`
  margin: 10px;
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid #61dafb;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #21a1f1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 161, 241, 0.5);
  }
`,m=n.ZP.select`
  margin: 10px;
  padding: 10px;
  font-size: 1.2em;
  border: 2px solid #61dafb;
  border-radius: 5px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #21a1f1;
    outline: none;
    box-shadow: 0 0 0 3px rgba(33, 161, 241, 0.5);
  }
`,b=()=>{const[e,r]=(0,o.useState)(""),[a,n]=(0,o.useState)(10),[t,i]=(0,o.useState)(10),[d,b]=(0,o.useState)("");return(0,o.useEffect)((()=>{(()=>{if(""===e)return"";try{const r=parseInt(e,a);b(r.toString(t))}catch(r){b("Invalid Number")}})()}),[e,a,t]),(0,s.jsxs)(c,{children:[(0,s.jsx)(p,{children:"Number System Visualizer"}),(0,s.jsxs)(u,{children:["Input Number:",(0,s.jsx)(x,{type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"Enter number"})]}),(0,s.jsxs)(u,{children:["Source Base:",(0,s.jsx)(m,{value:a,onChange:e=>n(parseInt(e.target.value)),children:[...Array(15).keys()].map((e=>(0,s.jsx)("option",{value:e+2,children:e+2},e+2)))})]}),(0,s.jsxs)(u,{children:["Target Base:",(0,s.jsx)(m,{value:t,onChange:e=>i(parseInt(e.target.value)),children:[...Array(15).keys()].map((e=>(0,s.jsx)("option",{value:e+2,children:e+2},e+2)))})]}),(0,s.jsx)(u,{children:"Converted Number:"}),(0,s.jsx)(l,{number:d,base:t})]})}}}]);
//# sourceMappingURL=8176.bc7da12a.chunk.js.map