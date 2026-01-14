"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[6958],{26958:(t,e,n)=>{n.r(e),n.d(e,{default:()=>u});var o=n(72791),i=n(57884),a=n(80184);const s=i.ZP.div`
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
`,r=i.ZP.label`
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  color: #333;
`,l=i.ZP.input`
  padding: 5px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 60%;
  font-size: 1rem;
`,h=i.ZP.select`
  padding: 5px;
  border: 2px solid #ddd;
  border-radius: 5px;
  width: 65%;
  font-size: 1rem;
`,d=i.ZP.button`
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
`,c=t=>{let{angle:e,setAngle:n,initialPosition:o,setInitialPosition:i}=t;return(0,a.jsxs)(s,{children:[(0,a.jsxs)(r,{children:["Angle (0 to 90 degrees):",(0,a.jsx)(l,{type:"number",value:e,onChange:t=>{const e=Number(t.target.value);e>=0&&e<=90&&n(e)}})]}),(0,a.jsxs)(r,{children:["Initial Position:",(0,a.jsxs)(h,{value:o,onChange:t=>i(t.target.value),children:[(0,a.jsx)("option",{value:"onGround",children:"Left"}),(0,a.jsx)("option",{value:"onPlane",children:"Right"})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{onClick:()=>n(30),children:"Reset Angle"}),(0,a.jsx)(d,{onClick:()=>i("onPlane"),children:"Reset Position"})]})]})},M=i.ZP.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #000;
`,P=100,x=t=>{let{angle:e,initialPosition:n}=t;const i=(0,o.useRef)(null);return(0,o.useEffect)((()=>{const t=i.current,o=t.getContext("2d"),a=t.width,s=t.height,r=()=>{o.clearRect(0,0,a,s),o.save(),o.translate(a/2,s/2),o.rotate(-e*Math.PI/180),o.beginPath(),o.moveTo(-100,0),o.lineTo(P,0),o.lineWidth=4,o.strokeStyle="#000",o.stroke(),o.restore()},l=(t,e,n)=>{o.save(),o.translate(t,e),o.rotate(n),o.beginPath(),o.arc(0,0,15,0,2*Math.PI),o.fillStyle=(t=>{const e=o.createLinearGradient(-t,0,t,0);return e.addColorStop(0,"royalblue"),e.addColorStop(1,"#FFFFFF"),e})(15),o.fill(),o.lineWidth=2,o.strokeStyle="#000",o.stroke(),o.restore()};r(),(()=>{let t="onGround"===n?1:-1;const i=a/2-t*P*Math.cos(e*Math.PI/180),h=s/2+t*P*Math.sin(e*Math.PI/180),d=a/2+t*P*Math.cos(e*Math.PI/180);let c,M=0,x=i,g=h-20;const u=()=>{r(),l(x,g,M),((t,i)=>{o.save(),o.strokeStyle="red",o.lineWidth=2,o.beginPath(),o.moveTo(t,i),o.lineTo(t,i+40),o.stroke(),o.beginPath(),o.moveTo(t-5,i+35),o.lineTo(t,i+40),o.lineTo(t+5,i+35),o.stroke(),o.fillText("Gravity",t+10,i+45),o.strokeStyle="green",o.beginPath(),o.moveTo(t,i),o.lineTo(t-40*Math.sin(e*Math.PI/180),i-40*Math.cos(e*Math.PI/180)),o.stroke(),o.beginPath(),o.moveTo(t-35*Math.sin(e*Math.PI/180)-5*Math.cos(e*Math.PI/180),i-35*Math.cos(e*Math.PI/180)+5*Math.sin(e*Math.PI/180)),o.lineTo(t-40*Math.sin(e*Math.PI/180),i-40*Math.cos(e*Math.PI/180)),o.lineTo(t-35*Math.sin(e*Math.PI/180)+5*Math.cos(e*Math.PI/180),i-35*Math.cos(e*Math.PI/180)-5*Math.sin(e*Math.PI/180)),o.stroke(),o.fillText("Normal",t-50*Math.sin(e*Math.PI/180),i-50*Math.cos(e*Math.PI/180));const a="onGround"===n?1:-1;o.strokeStyle="orange",o.beginPath(),o.moveTo(t,i),o.lineTo(t-40*a*Math.cos(e*Math.PI/180),i+40*a*Math.sin(e*Math.PI/180)),o.stroke(),o.beginPath(),o.moveTo(t-35*a*Math.cos(e*Math.PI/180)-5*a*Math.sin(e*Math.PI/180),i+35*a*Math.sin(e*Math.PI/180)+5*a*Math.cos(e*Math.PI/180)),o.lineTo(t-40*a*Math.cos(e*Math.PI/180),i+40*a*Math.sin(e*Math.PI/180)),o.lineTo(t-35*a*Math.cos(e*Math.PI/180)+5*a*Math.sin(e*Math.PI/180),i+35*a*Math.sin(e*Math.PI/180)-5*a*Math.cos(e*Math.PI/180)),o.stroke(),o.fillText("Friction",t-50*a*Math.cos(e*Math.PI/180),i+50*a*Math.sin(e*Math.PI/180)),o.restore()})(x,g),x+=t*Math.cos(e*Math.PI/180),g-=t*Math.sin(e*Math.PI/180),M+=.1*t,1===t&&x>=d||-1===t&&x<=d?cancelAnimationFrame(c):c=requestAnimationFrame(u)};c=requestAnimationFrame(u)})()}),[e,n]),(0,a.jsx)(M,{children:(0,a.jsx)("canvas",{ref:i,width:400,height:400})})},g=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`,u=()=>{const[t,e]=(0,o.useState)(30),[n,i]=(0,o.useState)("onPlane");return(0,a.jsxs)(g,{children:[(0,a.jsx)("h1",{children:"Rolling Motion \u2699\ufe0f on Inclined Plane \ud83d\udee4\ufe0f"}),(0,a.jsx)(c,{angle:t,setAngle:e,initialPosition:n,setInitialPosition:i}),(0,a.jsx)(x,{angle:t,initialPosition:n})]})}}}]);
//# sourceMappingURL=6958.2639c561.chunk.js.map