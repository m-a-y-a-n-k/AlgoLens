"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[1156],{1156:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var i=r(2791),n=r(7884),s=r(184);const a=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`,o=n.ZP.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  width: 100%;
  margin-bottom: 30px;
  background: #f8fafc;
  padding: 20px;
  border-radius: 12px;
`,l=n.ZP.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=n.ZP.label`
  font-weight: 600;
  color: #475569;
  font-size: 0.9rem;
`,d=n.ZP.input`
  padding: 10px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s;
  &:focus {
    border-color: #3b82f6;
    outline: none;
  }
`,x=n.ZP.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #0f172a;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 20px;
`,h=n.ZP.canvas`
  width: 100%;
  height: 100%;
`,p=n.ZP.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`,u=n.ZP.button`
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  background: ${e=>e.primary?"#3b82f6":"#e2e8f0"};
  color: ${e=>e.primary?"white":"#475569"};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
    background: ${e=>e.primary?"#2563eb":"#cbd5e1"};
  }
`,m=n.ZP.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  width: 100%;
  background: #f1f5f9;
  padding: 15px;
  border-radius: 10px;
`,g=n.ZP.div`
  text-align: center;
  p {
    margin: 5px 0;
    color: #334155;
    font-size: 0.95rem;
  }
  span {
    font-weight: bold;
    color: #0f172a;
  }
`,f=()=>{const e=(0,i.useRef)(null),[t,r]=(0,i.useState)(2),[n,f]=(0,i.useState)(5),[b,v]=(0,i.useState)(3),[j,w]=(0,i.useState)(-2),[y,k]=(0,i.useState)(!1),P=(0,i.useRef)({p1:{x:200,v:3,m:2,r:20},p2:{x:600,v:-2,m:5,r:35},lastUpdateTime:0}),T=(0,i.useCallback)((()=>{const r=e.current;r&&(P.current={p1:{x:.25*r.width,v:Number(b),m:Number(t),r:15+8*Math.sqrt(t)},p2:{x:.75*r.width,v:Number(j),m:Number(n),r:15+8*Math.sqrt(n)},lastUpdateTime:performance.now()},k(!1),S())}),[t,n,b,j]),S=(0,i.useCallback)((()=>{const t=e.current;if(!t)return;const r=t.getContext("2d"),{p1:i,p2:n}=P.current;r.clearRect(0,0,t.width,t.height),r.strokeStyle="#334155",r.lineWidth=2,r.beginPath(),r.moveTo(0,t.height-50),r.lineTo(t.width,t.height-50),r.stroke(),r.fillStyle="#3b82f6",r.beginPath(),r.arc(i.x,t.height-50-i.r,i.r,0,2*Math.PI),r.fill(),r.fillStyle="white",r.textAlign="center",r.fillText(`${i.m}kg`,i.x,t.height-50-i.r+5),r.fillStyle="#ef4444",r.beginPath(),r.arc(n.x,t.height-50-n.r,n.r,0,2*Math.PI),r.fill(),r.fillStyle="white",r.textAlign="center",r.fillText(`${n.m}kg`,n.x,t.height-50-n.r+5);const s=(e,t,i,n)=>{if(Math.abs(i)<.1)return;const s=20*i;r.strokeStyle=n,r.lineWidth=3,r.beginPath(),r.moveTo(e,t),r.lineTo(e+s,t),r.stroke(),r.beginPath();const a=i>0?1:-1;r.moveTo(e+s,t),r.lineTo(e+s-8*a,t-4),r.lineTo(e+s-8*a,t+4),r.closePath(),r.fill()};s(i.x,t.height-50-i.r-20,i.v,"#3b82f6"),s(n.x,t.height-50-n.r-20,n.v,"#ef4444")}),[]);return(0,i.useEffect)((()=>{const t=e.current;t.width=t.offsetWidth,t.height=t.offsetHeight,T()}),[T]),(0,i.useEffect)((()=>{if(!y)return;let t;const r=i=>{const n=(i-P.current.lastUpdateTime)/16;P.current.lastUpdateTime=i;const{p1:s,p2:a}=P.current;s.x+=s.v*n,a.x+=a.v*n,s.x-s.r<0&&(s.x=s.r,s.v*=-1),a.x+a.r>e.current.width&&(a.x=e.current.width-a.r,a.v*=-1);const o=Math.abs(s.x-a.x);if(o<s.r+a.r){const e=s.r+a.r-o;s.x<a.x?(s.x-=e/2,a.x+=e/2):(s.x+=e/2,a.x-=e/2);const t=s.v,r=a.v,i=s.m,n=a.m;s.v=(t*(i-n)+2*n*r)/(i+n),a.v=(r*(n-i)+2*i*t)/(i+n)}S(),t=requestAnimationFrame(r)};return P.current.lastUpdateTime=performance.now(),t=requestAnimationFrame(r),()=>cancelAnimationFrame(t)}),[y,S]),(0,s.jsxs)(a,{children:[(0,s.jsxs)(o,{children:[(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:"Mass 1 (kg)"}),(0,s.jsx)(d,{type:"number",value:t,onChange:e=>r(e.target.value)})]}),(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:"Velocity 1 (m/s)"}),(0,s.jsx)(d,{type:"number",value:b,onChange:e=>v(e.target.value)})]}),(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:"Mass 2 (kg)"}),(0,s.jsx)(d,{type:"number",value:n,onChange:e=>f(e.target.value)})]}),(0,s.jsxs)(l,{children:[(0,s.jsx)(c,{children:"Velocity 2 (m/s)"}),(0,s.jsx)(d,{type:"number",value:j,onChange:e=>w(e.target.value)})]})]}),(0,s.jsxs)(p,{children:[(0,s.jsx)(u,{primary:!0,onClick:()=>k(!y),children:y?"Pause":"Start Simulation"}),(0,s.jsx)(u,{onClick:T,children:"Reset"})]}),(0,s.jsx)(x,{children:(0,s.jsx)(h,{ref:e})}),(0,s.jsxs)(m,{children:[(0,s.jsxs)(g,{children:[(0,s.jsxs)("p",{children:["Object 1 Momentum:"," ",(0,s.jsx)("span",{children:(P.current.p1.m*P.current.p1.v).toFixed(2)})]}),(0,s.jsxs)("p",{children:["Object 1 Energy:"," ",(0,s.jsx)("span",{children:(.5*P.current.p1.m*P.current.p1.v**2).toFixed(2)})]})]}),(0,s.jsxs)(g,{children:[(0,s.jsxs)("p",{children:["Object 2 Momentum:"," ",(0,s.jsx)("span",{children:(P.current.p2.m*P.current.p2.v).toFixed(2)})]}),(0,s.jsxs)("p",{children:["Object 2 Energy:"," ",(0,s.jsx)("span",{children:(.5*P.current.p2.m*P.current.p2.v**2).toFixed(2)})]})]})]})]})},b=n.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`,v=n.ZP.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;const j=function(){return(0,s.jsxs)(b,{children:[(0,s.jsx)(v,{children:"Elastic Collisions Visualizer"}),(0,s.jsx)(f,{})]})}}}]);
//# sourceMappingURL=1156.e8b139b4.chunk.js.map