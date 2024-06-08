"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6958],{26958:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});var i=t(72791),o=t(57884),r=t(80184);const s=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
`,a=o.ZP.label`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #333;
`,l=o.ZP.input`
  padding: 5px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 60%;
  font-size: 1rem;
`,d=o.ZP.select`
  padding: 5px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 65%;
  font-size: 1rem;
`,c=o.ZP.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`,h=e=>{let{angle:n,setAngle:t,initialPosition:i,setInitialPosition:o}=e;return(0,r.jsxs)(s,{children:[(0,r.jsxs)(a,{children:["Angle (0 to 90 degrees):",(0,r.jsx)(l,{type:"number",value:n,onChange:e=>{const n=Number(e.target.value);n>=0&&n<=90&&t(n)}})]}),(0,r.jsxs)(a,{children:["Initial Position:",(0,r.jsxs)(d,{value:i,onChange:e=>o(e.target.value),children:[(0,r.jsx)("option",{value:"onGround",children:"Left"}),(0,r.jsx)("option",{value:"onPlane",children:"Right"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c,{onClick:()=>t(30),children:"Reset Angle"}),(0,r.jsx)(c,{onClick:()=>o("onPlane"),children:"Reset Position"})]})]})},u=o.ZP.div`
  position: relative;
  width: 600px;
  height: 400px;
  border: 1px solid #000;
`,x=200,p=e=>{let{angle:n,initialPosition:t}=e;const o=(0,i.useRef)(null);return(0,i.useEffect)((()=>{const e=o.current,i=e.getContext("2d"),r=e.width,s=e.height,a=()=>{i.clearRect(0,0,r,s),i.save(),i.translate(r/2,s/2),i.rotate(-n*Math.PI/180),i.beginPath(),i.moveTo(-200,0),i.lineTo(x,0),i.lineWidth=4,i.strokeStyle="#000",i.stroke(),i.restore()};a(),(()=>{const e=r/2+("onGround"===t?-1:1)*x*Math.cos(n*Math.PI/180),o=s/2+("onGround"===t?1:-1)*x*Math.sin(n*Math.PI/180),l=r/2+("onGround"===t?1:-1)*x*Math.cos(n*Math.PI/180);let d,c=e,h=o-20,u="onGround"===t?1:-1;const p=()=>{var e,t;a(),e=c,t=h,i.beginPath(),i.arc(e,t,15,0,2*Math.PI),i.fillStyle="red",i.fill(),i.lineWidth=2,i.strokeStyle="#000",i.stroke(),c+=u*Math.cos(n*Math.PI/180),h-=u*Math.sin(n*Math.PI/180),1===u&&c>l||-1===u&&c<l?cancelAnimationFrame(d):d=requestAnimationFrame(p)};d=requestAnimationFrame(p)})()}),[n,t]),(0,r.jsx)(u,{children:(0,r.jsx)("canvas",{ref:o,width:600,height:400})})},g=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`,f=()=>{const[e,n]=(0,i.useState)(30),[t,o]=(0,i.useState)("onPlane");return(0,r.jsxs)(g,{children:[(0,r.jsx)("h1",{children:"Rolling Motion \u2699\ufe0f on Inclined Plane \ud83d\udee4\ufe0f"}),(0,r.jsx)(h,{angle:e,setAngle:n,initialPosition:t,setInitialPosition:o}),(0,r.jsx)(p,{angle:e,initialPosition:t})]})}}}]);
//# sourceMappingURL=6958.bcb1e02b.chunk.js.map