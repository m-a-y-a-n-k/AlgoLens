"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[2672],{42672:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var a=r(72791),n=r(57884),o=r(80184);const i=n.ZP.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 340px;
    align-items: start;
  }
`,s=n.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`,l=n.ZP.div`
  width: 100%;
  aspect-ratio: 1;
  position: relative;
`,c=n.ZP.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,d=n.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  padding: 14px;
  color: rgba(255, 255, 255, 0.9);
`,h=n.ZP.label`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin-bottom: 6px;
`,u=n.ZP.span`
  color: rgba(255, 255, 255, 0.65);
  font-variant-numeric: tabular-nums;
`,g=n.ZP.input`
  width: 100%;
`,x=n.ZP.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`,p=n.ZP.button`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: ${e=>e.primary?"linear-gradient(180deg, #7fe7ff, #2dd4ff)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.primary?"#041014":"rgba(255, 255, 255, 0.9)"};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease;
  min-width: 110px;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,m=n.ZP.div`
  margin-top: 10px;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.35;
`;function f(e,t,r){return Math.max(t,Math.min(r,e))}function b(e){const t=(e+1)/2;if(t<.5){const e=t/.5;return[Math.floor(20+40*e),Math.floor(80+120*e),Math.floor(120+135*e)]}const r=(t-.5)/.5;return[Math.floor(35+220*r),Math.floor(35+140*r),Math.floor(40+60*r)]}function v(){const e=(0,a.useRef)(null),t=(0,a.useRef)(null),r=(0,a.useRef)(0),n=(0,a.useRef)(0),[v,w]=(0,a.useState)(!0),[j,M]=(0,a.useState)(.45),[y,P]=(0,a.useState)(.12),[C,k]=(0,a.useState)(1),[Z,R]=(0,a.useState)(!0),[S,F]=(0,a.useState)(220),[I,A]=(0,a.useState)(1.25),D=(0,a.useRef)({w:0,h:0,imageData:null,data:null});(0,a.useEffect)((()=>{const r=t.current,a=e.current;if(!r||!a)return;const n=new ResizeObserver((()=>{const e=r.getBoundingClientRect(),t=f(window.devicePixelRatio||1,1,2);a.width=Math.max(1,Math.floor(e.width*t)),a.height=Math.max(1,Math.floor(e.height*t));const n=a.getContext("2d");n.setTransform(t,0,0,t,0,0);const o=Math.max(60,Math.floor(S)),i=Math.max(60,Math.floor(S));D.current.w=o,D.current.h=i,D.current.imageData=n.createImageData(o,i),D.current.data=D.current.imageData.data}));return n.observe(r),()=>n.disconnect()}),[S]);const z=(0,a.useMemo)((()=>[{x:.5-j/2,y:.5},{x:.5+j/2,y:.5}]),[j]);return(0,a.useEffect)((()=>{const t=e.current;if(!t)return;const a=t.getContext("2d"),o=()=>{if(r.current=requestAnimationFrame(o),!D.current.imageData)return;const e=t.getBoundingClientRect(),i=e.width,s=e.height;v&&(n.current+=.016*C);const l=n.current,c=D.current.w,d=D.current.h,h=D.current.data,u=2*Math.PI/Math.max(1e-4,y),g=.35*u;let x=0;for(let t=0;t<d;t++){const e=t/(d-1);for(let t=0;t<c;t++){const r=t/(c-1);let a=0;for(let t=0;t<z.length;t++){const n=r-z[t].x,o=e-z[t].y,i=Math.sqrt(n*n+o*o),s=u*i-g*l;a+=Math.sin(s)*(Z?1/(1+12*i):1)}let n=f(a/1.6,-1,1);n=Math.sign(n)*Math.pow(Math.abs(n),1/I);const[o,i,s]=b(n);h[x++]=o,h[x++]=i,h[x++]=s,h[x++]=255}}a.save(),a.imageSmoothingEnabled=!0,a.clearRect(0,0,i,s),a.putImageData(D.current.imageData,0,0),a.globalCompositeOperation="source-over",a.drawImage(t,0,0,c,d,0,0,i,s),a.globalCompositeOperation="lighter",z.forEach(((e,t)=>{const r=e.x*i,n=e.y*s;a.beginPath(),a.arc(r,n,6,0,2*Math.PI),a.fillStyle=0===t?"rgba(127,231,255,0.85)":"rgba(251,172,97,0.85)",a.fill(),a.beginPath(),a.arc(r,n,12,0,2*Math.PI),a.strokeStyle="rgba(255,255,255,0.35)",a.lineWidth=1,a.stroke()})),a.restore()};return r.current=requestAnimationFrame(o),()=>cancelAnimationFrame(r.current)}),[Z,I,v,z,C,y]),(0,o.jsxs)(i,{children:[(0,o.jsx)(s,{children:(0,o.jsx)(l,{ref:t,children:(0,o.jsx)(c,{ref:e})})}),(0,o.jsxs)(d,{children:[(0,o.jsxs)(x,{children:[(0,o.jsx)(p,{primary:!0,onClick:()=>w((e=>!e)),children:v?"Pause":"Play"}),(0,o.jsx)(p,{onClick:()=>{n.current=0},children:"Reset Time"})]}),(0,o.jsxs)(h,{children:["Source separation ",(0,o.jsx)(u,{children:j.toFixed(2)})]}),(0,o.jsx)(g,{type:"range",min:"0.10",max:"0.80",step:"0.01",value:j,onChange:e=>M(parseFloat(e.target.value))}),(0,o.jsxs)(h,{children:["Wavelength ",(0,o.jsx)(u,{children:y.toFixed(2)})]}),(0,o.jsx)(g,{type:"range",min:"0.05",max:"0.25",step:"0.005",value:y,onChange:e=>P(parseFloat(e.target.value))}),(0,o.jsxs)(h,{children:["Speed ",(0,o.jsxs)(u,{children:[C.toFixed(2),"\xd7"]})]}),(0,o.jsx)(g,{type:"range",min:"0.2",max:"3.0",step:"0.05",value:C,onChange:e=>k(parseFloat(e.target.value))}),(0,o.jsxs)(h,{children:["Contrast ",(0,o.jsx)(u,{children:I.toFixed(2)})]}),(0,o.jsx)(g,{type:"range",min:"0.8",max:"2.0",step:"0.05",value:I,onChange:e=>A(parseFloat(e.target.value))}),(0,o.jsxs)(h,{children:["Render resolution ",(0,o.jsxs)(u,{children:[S,"px"]})]}),(0,o.jsx)(g,{type:"range",min:"120",max:"340",step:"10",value:S,onChange:e=>F(parseInt(e.target.value,10))}),(0,o.jsx)(x,{style:{marginTop:12},children:(0,o.jsxs)(p,{onClick:()=>R((e=>!e)),children:["Attenuation: ",Z?"On":"Off"]})}),(0,o.jsxs)(m,{children:["- Blue/orange regions indicate opposite phase.",(0,o.jsx)("br",{}),"- High contrast makes nodes (quiet bands) easier to see.",(0,o.jsx)("br",{}),"- Lower resolution improves performance on mobile."]})]})]})}const w=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #05060b;
  min-height: 100vh;
  color: white;
`,j=n.ZP.h1`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #7fe7ff;
  margin-bottom: 14px;
  text-align: center;
  text-shadow: 0 0 14px rgba(127, 231, 255, 0.35);
`,M=n.ZP.p`
  margin: 0 0 18px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.72);
  max-width: 900px;
  font-size: 0.95rem;
`;function y(){return(0,o.jsxs)(w,{children:[(0,o.jsx)(j,{children:"Wave Interference"}),(0,o.jsx)(M,{children:"Two sources emit waves and create an interference pattern. Adjust source separation, wavelength, and speed to see constructive/destructive regions."}),(0,o.jsx)(v,{})]})}}}]);
//# sourceMappingURL=2672.71e96627.chunk.js.map