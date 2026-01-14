"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[130],{90130:(e,a,n)=>{n.r(a),n.d(a,{default:()=>S});var t=n(72791),r=n(80184);const s=(0,t.createContext)(),i=e=>{let{children:a}=e;const[n,i]=(0,t.useState)([{name:"Sun",radius:25,distance:0,speed:0,angle:0,fillColor:"#FFB300"},{name:"Mercury",radius:4,distance:35,speed:1.59,angle:Math.random()*Math.PI*2,fillColor:"#B9B2AA"},{name:"Venus",radius:7,distance:45,speed:1.2,angle:Math.random()*Math.PI*2,fillColor:"#E8C07A"},{name:"Earth",radius:8,distance:60,speed:1,angle:Math.random()*Math.PI*2,fillColor:"#2E7DFF"},{name:"Mars",radius:6,distance:75,speed:.8,angle:Math.random()*Math.PI*2,fillColor:"#FF6A3D"},{name:"Jupiter",radius:18,distance:100,speed:.38,angle:Math.random()*Math.PI*2,fillColor:"#D6A07A"},{name:"Saturn",radius:15,distance:130,speed:.32,angle:Math.random()*Math.PI*2,fillColor:"#E0C27B",hasRings:!0},{name:"Uranus",radius:12,distance:155,speed:.23,angle:Math.random()*Math.PI*2,fillColor:"#7FE7FF"},{name:"Neptune",radius:11,distance:175,speed:.18,angle:Math.random()*Math.PI*2,fillColor:"#3D62FF"}]);return(0,r.jsx)(s.Provider,{value:{planets:n,setPlanets:i},children:a})};var o=n(81456),l=n(35892),d=n(63157),c=n(38334),h=n(56752),p=n(26015),u=n(17760),m=n(57884);const g=m.ZP.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  background: linear-gradient(
    135deg,
    rgba(10, 16, 28, 0.85),
    rgba(6, 8, 12, 0.75)
  );
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45);
  color: rgba(255, 255, 255, 0.92);
  pointer-events: none;
  font-family: "Courier New", Courier, monospace;
  backdrop-filter: blur(8px);
`,x=e=>{let{planet:a}=e;const n=(0,t.useRef)(),s=(0,t.useRef)(),i=(0,t.useMemo)((()=>{const e=[];for(let n=0;n<=128;n++){const t=n/128*Math.PI*2;e.push(new u.Vector3(Math.cos(t)*a.distance*.4,0,Math.sin(t)*a.distance*.4))}return e}),[a.distance]);return(0,o.C)(((e,t)=>{const r=e.clock.getElapsedTime();if("Sun"!==a.name){const e=r*a.speed*.1+(a.angle||0),n=Math.cos(e)*a.distance*.4,t=Math.sin(e)*a.distance*.4;s.current&&s.current.position.set(n,0,t)}n.current&&(n.current.rotation.y+=.5*t)})),(0,r.jsxs)("group",{children:[a.distance>0&&(0,r.jsx)(d.x,{points:i,color:a.fillColor,lineWidth:.5,transparent:!0,opacity:.2}),(0,r.jsxs)("group",{ref:s,children:[(0,r.jsxs)("mesh",{ref:n,children:[(0,r.jsx)("sphereGeometry",{args:[.15*a.radius,32,32]}),(0,r.jsx)("meshStandardMaterial",{color:a.fillColor,emissive:(a.name,a.fillColor),emissiveIntensity:"Sun"===a.name?1.3:.12,roughness:"Sun"===a.name?.35:.55,metalness:"Sun"===a.name?0:.25}),"Sun"===a.name&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("pointLight",{intensity:4.5,distance:400,decay:2}),(0,r.jsxs)("mesh",{children:[(0,r.jsx)("sphereGeometry",{args:[.16*a.radius,32,32]}),(0,r.jsx)("meshBasicMaterial",{color:a.fillColor,transparent:!0,opacity:.22,blending:u.AdditiveBlending,depthWrite:!1})]})]}),a.hasRings&&(0,r.jsxs)("mesh",{rotation:[Math.PI/2,0,0],children:[(0,r.jsx)("ringGeometry",{args:[.2*a.radius,.35*a.radius,64]}),(0,r.jsx)("meshStandardMaterial",{color:"#C5AB6E",transparent:!0,opacity:.6,side:u.DoubleSide})]})]}),(0,r.jsx)(t.Suspense,{fallback:null,children:(0,r.jsx)(c.x,{position:[0,.15*a.radius+1.2,0],fontSize:.6,color:"white",anchorX:"center",anchorY:"middle",outlineWidth:.05,outlineColor:"#000000",children:a.name})})]})]})},f=()=>{const{planets:e}=(0,t.useContext)(s);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(l.Xz,{dpr:[1,1.5],camera:{position:[50,50,80],fov:45},gl:{antialias:!0,powerPreference:"high-performance"},onCreated:e=>{let{gl:a}=e;a.outputColorSpace=u.SRGBColorSpace,a.toneMapping=u.ACESFilmicToneMapping,a.toneMappingExposure=1.25},children:[(0,r.jsx)("color",{attach:"background",args:["#030305"]}),(0,r.jsx)("fog",{attach:"fog",args:["#03060f",60,240]}),(0,r.jsx)("ambientLight",{intensity:.1}),(0,r.jsx)("hemisphereLight",{intensity:.22,color:"#d9e8ff",groundColor:"#0a0d14"}),(0,r.jsx)(h.t,{radius:200,depth:50,count:4500,factor:4,saturation:0,fade:!0,speed:1.2}),(0,r.jsx)("group",{rotation:[.05*Math.PI,0,0],children:e.map((e=>(0,r.jsx)(x,{planet:e},e.name)))}),(0,r.jsx)(p.z,{makeDefault:!0,minDistance:5,maxDistance:250,enableDamping:!0,dampingFactor:.05})]}),(0,r.jsxs)(g,{children:[(0,r.jsx)("div",{style:{color:"#fbac61",fontWeight:"bold",marginBottom:"5px"},children:"SYSTEM STATUS: ONLINE"}),(0,r.jsx)("div",{children:"Real-time Orbital Mechanics"}),(0,r.jsx)("div",{style:{fontSize:"0.8em",marginTop:"10px",color:"#888"},children:"DRAG TO ROTATE \u2022 SCROLL TO ZOOM \u2022 RIGHT CLICK TO PAN"})]})]})},j=m.ZP.div`
  width: 100vw;
  height: 100vh;
  background-color: #050505;
  color: white;
  position: relative;
  overflow: hidden;
`,M=m.ZP.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  pointer-events: none;
`,C=m.ZP.h1`
  font-size: 2em;
  margin: 0;
  color: #fbac61;
  text-shadow: 0 0 10px rgba(251, 172, 97, 0.5);
`,b=m.ZP.p`
  margin: 5px 0 0;
  opacity: 0.7;
  font-size: 0.9em;
`,S=()=>(0,r.jsx)(i,{children:(0,r.jsxs)(j,{children:[(0,r.jsxs)(M,{children:[(0,r.jsx)(C,{children:"Planetary Motion"}),(0,r.jsx)(b,{children:"3D Solar System Simulation"})]}),(0,r.jsx)(f,{})]})})}}]);
//# sourceMappingURL=130.b6860cfb.chunk.js.map