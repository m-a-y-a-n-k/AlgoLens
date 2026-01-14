"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[2035],{42035:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var n=a(72791),r=a(57884),i=a(80184);const s=r.ZP.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 340px;
    align-items: start;
  }
`,o=r.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`,l=r.ZP.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
`,d=r.ZP.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,c=r.ZP.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  pointer-events: none;
`,h=r.ZP.div`
  pointer-events: none;
  padding: 8px 10px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: rgba(255, 255, 255, 0.92);
  font-size: 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
    "Liberation Mono", "Courier New", monospace;
  backdrop-filter: blur(8px);
`,x=r.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  padding: 14px;
`,p=r.ZP.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`,g=r.ZP.button`
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: ${e=>e.primary?"linear-gradient(180deg, #fbac61, #e98c2f)":"rgba(255, 255, 255, 0.06)"};
  color: ${e=>e.primary?"#111827":"rgba(255, 255, 255, 0.9)"};
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.15s ease;
  min-width: 110px;

  &:hover {
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,u=r.ZP.div`
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,m=r.ZP.label`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.88);
  font-size: 0.9rem;
  margin-bottom: 6px;
`,f=r.ZP.span`
  color: rgba(255, 255, 255, 0.68);
  font-variant-numeric: tabular-nums;
`,b=r.ZP.input`
  width: 100%;
`;function j(e,t,a){return Math.max(t,Math.min(a,e))}function v(e,t,a){const n=a(e),r=a(e.map(((e,a)=>e+t/2*n[a]))),i=a(e.map(((e,a)=>e+t/2*r[a]))),s=a(e.map(((e,a)=>e+t*i[a])));return e.map(((e,a)=>e+t/6*(n[a]+2*r[a]+2*i[a]+s[a])))}function y(){const e=(0,n.useRef)(null),t=(0,n.useRef)(null),a=(0,n.useRef)(0),r=(0,n.useRef)(0),y=(0,n.useRef)([]),[M,P]=(0,n.useState)(!0),[w,C]=(0,n.useState)(!0),[S,k]=(0,n.useState)(1),[F,R]=(0,n.useState)(1),[Z,I]=(0,n.useState)(1.2),[T,A]=(0,n.useState)(1),[L,z]=(0,n.useState)(9.81),[D,G]=(0,n.useState)(.01),[N,O]=(0,n.useState)(1),[U,E]=(0,n.useState)(600),W=(0,n.useRef)({state:[Math.PI/2,0,Math.PI/2+.2,0]}),q=(0,n.useMemo)((()=>e=>{const t=e[0],a=e[1],n=e[2],r=e[3],i=t-n,s=2*S+F-F*Math.cos(2*i),o=a,l=r,d=(-L*(2*S+F)*Math.sin(t)-F*L*Math.sin(t-2*n)-2*Math.sin(i)*F*(r*r*T+a*a*Z*Math.cos(i)))/(Z*s),c=2*Math.sin(i)*(a*a*Z*(S+F)+L*(S+F)*Math.cos(t)+r*r*T*F*Math.cos(i))/(T*s);return[o,d-D*a,l,c-D*r]}),[S,F,Z,T,L,D]);(0,n.useEffect)((()=>{const a=t.current,n=e.current;if(!a||!n)return;const r=new ResizeObserver((()=>{const e=a.getBoundingClientRect(),t=j(window.devicePixelRatio||1,1,2);n.width=Math.max(1,Math.floor(e.width*t)),n.height=Math.max(1,Math.floor(e.height*t));n.getContext("2d").setTransform(t,0,0,t,0,0)}));return r.observe(a),()=>r.disconnect()}),[]);const B=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];W.current.state=e?[(1.4*Math.random()+.2)*Math.PI,0,(1.4*Math.random()+.2)*Math.PI,0]:[Math.PI/2,0,Math.PI/2+.2,0],y.current=[]};return(0,n.useEffect)((()=>{const t=e.current;if(!t)return;const n=t.getContext("2d"),i=e=>{a.current=requestAnimationFrame(i);const s=r.current||e;r.current=e;const o=j((e-s)/1e3,0,.033)*N,l=t.getBoundingClientRect(),d=l.width,c=l.height;n.clearRect(0,0,d,c);const h=n.createLinearGradient(0,0,0,c);if(h.addColorStop(0,"#020617"),h.addColorStop(1,"#000000"),n.fillStyle=h,n.fillRect(0,0,d,c),M){const e=o>0?Math.ceil(o/.008):1,t=o/e;for(let a=0;a<e;a++)W.current.state=v(W.current.state,t,q)}const[x,,p]=W.current.state,g={x:d/2,y:.18*c},u=.38*Math.min(d,c)/(Z+T),m=g.x+Z*u*Math.sin(x),f=g.y+Z*u*Math.cos(x),b=m+T*u*Math.sin(p),P=f+T*u*Math.cos(p);if(w){const e=y.current;e.push({x:b,y:P}),e.length>U&&e.splice(0,e.length-U),n.save(),n.globalCompositeOperation="lighter",n.lineWidth=2,n.beginPath();for(let a=0;a<e.length;a++){const t=e[a];0===a?n.moveTo(t.x,t.y):n.lineTo(t.x,t.y)}const t=n.createLinearGradient(0,0,d,c);t.addColorStop(0,"rgba(59,130,246,0.0)"),t.addColorStop(.5,"rgba(59,130,246,0.35)"),t.addColorStop(1,"rgba(251,172,97,0.55)"),n.strokeStyle=t,n.stroke(),n.restore()}n.lineWidth=3,n.strokeStyle="rgba(255,255,255,0.75)",n.beginPath(),n.moveTo(g.x,g.y),n.lineTo(m,f),n.lineTo(b,P),n.stroke();const C=8+4*S,k=8+4*F;n.fillStyle="#60a5fa",n.beginPath(),n.arc(m,f,C,0,2*Math.PI),n.fill(),n.fillStyle="#fbac61",n.beginPath(),n.arc(b,P,k,0,2*Math.PI),n.fill(),n.fillStyle="rgba(255,255,255,0.85)",n.beginPath(),n.arc(g.x,g.y,4,0,2*Math.PI),n.fill()};return a.current=requestAnimationFrame(i),()=>cancelAnimationFrame(a.current)}),[q,Z,T,S,F,M,w,N,U]),(0,i.jsxs)(s,{children:[(0,i.jsx)(o,{children:(0,i.jsxs)(l,{ref:t,children:[(0,i.jsx)(d,{ref:e}),(0,i.jsxs)(c,{children:[(0,i.jsx)(h,{children:M?"RUNNING":"PAUSED"}),(0,i.jsx)(h,{children:"Drag not enabled \u2022 Use controls"})]})]})}),(0,i.jsxs)(x,{children:[(0,i.jsxs)(p,{children:[(0,i.jsx)(g,{primary:!0,onClick:()=>P((e=>!e)),children:M?"Pause":"Play"}),(0,i.jsx)(g,{onClick:()=>B(!1),children:"Reset"}),(0,i.jsx)(g,{onClick:()=>B(!0),children:"Randomize"})]}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(m,{children:["Mass 1 ",(0,i.jsx)(f,{children:S.toFixed(2)})]}),(0,i.jsx)(b,{type:"range",min:"0.4",max:"3.0",step:"0.05",value:S,onChange:e=>k(parseFloat(e.target.value))}),(0,i.jsxs)(m,{children:["Mass 2 ",(0,i.jsx)(f,{children:F.toFixed(2)})]}),(0,i.jsx)(b,{type:"range",min:"0.4",max:"3.0",step:"0.05",value:F,onChange:e=>R(parseFloat(e.target.value))})]}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(m,{children:["Length 1 ",(0,i.jsxs)(f,{children:[Z.toFixed(2)," m"]})]}),(0,i.jsx)(b,{type:"range",min:"0.5",max:"2.2",step:"0.05",value:Z,onChange:e=>I(parseFloat(e.target.value))}),(0,i.jsxs)(m,{children:["Length 2 ",(0,i.jsxs)(f,{children:[T.toFixed(2)," m"]})]}),(0,i.jsx)(b,{type:"range",min:"0.5",max:"2.2",step:"0.05",value:T,onChange:e=>A(parseFloat(e.target.value))})]}),(0,i.jsxs)(u,{children:[(0,i.jsxs)(m,{children:["Gravity ",(0,i.jsxs)(f,{children:[L.toFixed(2)," m/s\xb2"]})]}),(0,i.jsx)(b,{type:"range",min:"0.0",max:"20.0",step:"0.1",value:L,onChange:e=>z(parseFloat(e.target.value))}),(0,i.jsxs)(m,{children:["Damping ",(0,i.jsx)(f,{children:D.toFixed(3)})]}),(0,i.jsx)(b,{type:"range",min:"0.0",max:"0.08",step:"0.001",value:D,onChange:e=>G(parseFloat(e.target.value))}),(0,i.jsxs)(m,{children:["Speed ",(0,i.jsxs)(f,{children:[N.toFixed(2),"\xd7"]})]}),(0,i.jsx)(b,{type:"range",min:"0.2",max:"3.0",step:"0.05",value:N,onChange:e=>O(parseFloat(e.target.value))})]}),(0,i.jsxs)(u,{children:[(0,i.jsx)(p,{children:(0,i.jsxs)(g,{onClick:()=>C((e=>!e)),style:{minWidth:140},children:["Trail: ",w?"On":"Off"]})}),(0,i.jsxs)(m,{children:["Trail length ",(0,i.jsx)(f,{children:U})]}),(0,i.jsx)(b,{type:"range",min:"50",max:"1400",step:"10",value:U,onChange:e=>E(parseInt(e.target.value,10))})]})]})]})}const M=r.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: radial-gradient(
    circle at 20% 10%,
    #0b1020 0%,
    #05060b 55%,
    #000 100%
  );
  min-height: 100vh;
  color: #eef2ff;
`,P=r.ZP.h1`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #fbac61;
  margin: 0 0 14px 0;
  text-align: center;
  text-shadow: 0 0 14px rgba(251, 172, 97, 0.35);
`,w=r.ZP.p`
  margin: 0 0 18px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.72);
  max-width: 900px;
  font-size: 0.95rem;
`;function C(){return(0,i.jsxs)(M,{children:[(0,i.jsx)(P,{children:"Double Pendulum"}),(0,i.jsx)(w,{children:"A chaotic system: tiny changes in initial conditions can lead to wildly different motion. Use the controls to tweak parameters and reset."}),(0,i.jsx)(y,{})]})}}}]);
//# sourceMappingURL=2035.4521fedd.chunk.js.map