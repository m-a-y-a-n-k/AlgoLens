"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[2840],{2840:(e,t,i)=>{i.r(t),i.d(t,{default:()=>y});var n=i(2791),s=i(7884),o=i(5095),r=i(184);const l=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`,x=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  width: 100%;
  gap: 15px;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`,d=s.ZP.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: #555;
`,a=s.ZP.input`
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 150px;
  text-align: center;
  font-size: 1rem;
`,c=s.ZP.div`
  margin-bottom: 20px;
  width: 100%;
`,h=s.ZP.div`
  margin-top: 10px;
  text-align: center;
  width: 100%;
  font-size: 1rem;
`,p=s.ZP.svg`
  width: 100%;
  max-width: 500px;
  height: auto;
`,m=s.ZP.path`
  stroke: blue;
  fill: none;
`,u=s.ZP.line`
  stroke: black;
  stroke-width: 2;
`,g=s.ZP.text`
  font-family: Arial;
  font-size: 12px;
  text-anchor: middle;
`,f=()=>{const[e,t]=(0,n.useState)(45),[i,s]=(0,n.useState)(50),[f,j]=(0,n.useState)([]),b=(0,n.useCallback)((()=>{const t=e*Math.PI/180,n=2*i*Math.sin(t)/9.81,s=[];for(let e=0;e<=n;e+=.1){const n=i*e*Math.cos(t),o=i*e*Math.sin(t)-4.905*e*e;if(!(o>=0))break;s.push({x:n,y:o})}j(s)}),[e,i]);(0,n.useEffect)((()=>{b()}),[e,i,b]);const y=(0,n.useMemo)((()=>f.length>0?f[f.length-1].x:0),[f]),w=(0,n.useMemo)((()=>Math.max(...f.map((e=>e.y)),0)),[f]);return(0,r.jsxs)(l,{children:[(0,r.jsxs)(x,{children:[(0,r.jsxs)(d,{children:["Angle (degrees):",(0,r.jsx)(a,{type:"number",value:e,onChange:e=>{const i=Number(e.target.value);i>=0&&i<=90&&t(i)}})]}),(0,r.jsxs)(d,{children:["Speed (m/s):",(0,r.jsx)(a,{type:"number",value:i,onChange:e=>{const t=Number(e.target.value);t>=0&&t<=1e3&&s(t)}})]})]}),(0,r.jsx)(o.Z,{color:"info",style:{width:"100%"},children:"Angle should be from 0 to 90"}),(0,r.jsx)(o.Z,{color:"info",style:{width:"100%"},children:"Speed should be from 0 to 1000"}),(0,r.jsx)(c,{children:(0,r.jsxs)(p,{viewBox:"0 0 500 500",children:[(0,r.jsx)(m,{d:`M 0 500 ${f.map((e=>`${10*e.x} ${500-10*e.y}`)).join(" L ")}`}),(0,r.jsx)(u,{x1:"0",y1:"500",x2:"500",y2:"500"}),(0,r.jsxs)("g",{children:[(0,r.jsx)(u,{x1:"0",y1:"490",x2:"0",y2:"500"}),(0,r.jsx)(g,{x:"5",y:"490",children:"0"}),(0,r.jsx)(u,{x1:"500",y1:"490",x2:"500",y2:"500"}),(0,r.jsx)(g,{x:"490",y:"490",children:"50"})]})]})}),(0,r.jsxs)(h,{children:[(0,r.jsxs)("p",{children:["Total Distance: ",y.toFixed(2)," meters"]}),(0,r.jsxs)("p",{children:["Maximum Height: ",w.toFixed(2)," meters"]})]})]})},j=s.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f2f5;
  min-height: 100vh;
`,b=s.ZP.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;const y=function(){return(0,r.jsxs)(j,{children:[(0,r.jsx)(b,{children:"Projectile Motion Visualizer"}),(0,r.jsx)(f,{})]})}}}]);
//# sourceMappingURL=2840.e1dea321.chunk.js.map