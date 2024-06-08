"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[130],{90130:(e,a,t)=>{t.r(a),t.d(a,{default:()=>f});var n=t(72791),l=t(80184);const s=(0,n.createContext)(),i=e=>{let{children:a}=e;const[t,i]=(0,n.useState)([{name:"Sun",radius:10,distance:0,speed:0,angle:0,fillColor:"orange"},{name:"Mercury",radius:4,distance:27,speed:1.59,angle:0,fillColor:"darkred"},{name:"Venus",radius:5,distance:36,speed:1.2,angle:0,fillColor:"forestgreen"},{name:"Earth",radius:8,distance:50,speed:1,angle:0,fillColor:"aqua"},{name:"Mars",radius:7,distance:75,speed:.8,angle:0,fillColor:"gold"},{name:"Jupiter",radius:10,distance:100,speed:.38,angle:0,fillColor:"pink"},{name:"Saturn",radius:9,distance:120,speed:.32,angle:0,fillColor:"wheat"},{name:"Uranus",radius:8,distance:150,speed:.23,angle:0,fillColor:"violet"},{name:"Neptune",radius:8,distance:180,speed:.18,angle:0,fillColor:"navy"}]);return(0,l.jsx)(s.Provider,{value:{planets:t,setPlanets:i},children:a})};var r=t(57884);const o=r.ZP.canvas`
  width: 100%;
  height: auto;
  max-width: 600px;
  border: 2px solid #fff;
  background-color: #000;
  display: block;
  margin: 0 auto;
`,d=r.ZP.div`
  color: #fff;
  text-align: center;
  margin: 10px;
  font-size: 1.2em;
`,c=()=>{const{planets:e,setPlanets:a}=(0,n.useContext)(s),t=(0,n.useRef)(null),[i,r]=(0,n.useState)(0);return(0,n.useEffect)((()=>{const n=t.current,l=n.getContext("2d");let s;const i=()=>{l.clearRect(0,0,n.width,n.height),e.forEach((e=>{l.beginPath(),l.arc(n.width/2,n.height/2,e.distance,0,2*Math.PI),l.strokeStyle="#FFFFFF",l.stroke(),l.closePath();const a=n.width/2+e.distance*Math.cos(e.angle),t=n.height/2+e.distance*Math.sin(e.angle);l.beginPath(),l.arc(a,t,e.radius,0,2*Math.PI),l.fillStyle=e.fillColor,l.fill(),l.closePath(),l.fillStyle="#FFFFFF",l.font="10px Arial",l.fillText(e.name,a+e.radius+2,t)})),setTimeout((()=>{a(e.map((e=>({...e,angle:e.angle+e.speed*Math.PI/180}))))}),50),r((e=>e+.083)),s=requestAnimationFrame(i)};return i(),()=>{cancelAnimationFrame(s)}}),[e,a]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{ref:t,width:400,height:400,className:"solar-system-canvas"}),(0,l.jsxs)(d,{children:["Time Elapsed: ",i.toFixed(0)," Earth days"]})]})},h=r.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #282c34;
  color: white;
`,u=r.ZP.h1`
  font-size: 2.5em;
  margin: 0;
  padding: 20px;
  text-align: center;
  color: #fbac61;
`,f=()=>(0,l.jsx)(i,{children:(0,l.jsxs)(h,{children:[(0,l.jsx)(u,{children:"Solar System Planetary Motion"}),(0,l.jsx)(c,{})]})})}}]);
//# sourceMappingURL=130.8846a519.chunk.js.map