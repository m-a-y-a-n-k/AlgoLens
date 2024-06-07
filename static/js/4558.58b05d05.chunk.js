"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4558],{74558:(e,t,r)=>{r.r(t),r.d(t,{default:()=>y});var i=r(72791),o=r(57884),d=r(80184);const n={nodes:[],edges:[]},a=(e,t)=>{switch(t.type){case"ADD_NODE":return{...e,nodes:[...e.nodes,t.payload]};case"ADD_EDGE":return{...e,edges:[...e.edges,t.payload]};case"CLEAR_GRAPH":return n;default:return e}},s=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,l=o.ZP.h4`
  color: #1b368d;
`,c=o.ZP.button`
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`,h=o.ZP.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`,p=o.ZP.div`
  position: relative;
  width: 90%;
  height: 70vh;
  max-width: 800px;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid #ccc;
  margin: 20px auto;
`,x=o.ZP.div`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  left: ${e=>e.x}px;
  top: ${e=>e.y}px;
`,u=o.F4`
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
`,f=o.ZP.svg.attrs((e=>({children:(0,d.jsx)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"black"})})))`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${u} 1s linear;
`,y=()=>{const[e,t]=(0,i.useReducer)(a,n),{nodes:r,edges:o}=e;return(0,d.jsxs)(s,{children:[(0,d.jsx)(l,{children:"Randomized Graph Visualiser"}),(0,d.jsxs)(h,{children:[(0,d.jsx)(c,{onClick:()=>{const e=r.length+1,i=50+200*Math.random(),o=50+200*Math.random();t({type:"ADD_NODE",payload:{id:e,x:i,y:o}})},children:"Add Node"}),(0,d.jsx)(c,{onClick:()=>{if(r.length<2)return;const e=r[Math.floor(Math.random()*r.length)].id;let i;do{i=r[Math.floor(Math.random()*r.length)].id}while(e===i);t({type:"ADD_EDGE",payload:{source:e,target:i}})},children:"Add Edge"}),(0,d.jsx)(c,{onClick:()=>{t({type:"CLEAR_GRAPH"})},children:"Clear Graph"})]})," ",(0,d.jsxs)(p,{children:[o.map(((e,t)=>(0,d.jsx)(f,{x1:r.find((t=>t.id===e.source)).x,y1:r.find((t=>t.id===e.source)).y,x2:r.find((t=>t.id===e.target)).x,y2:r.find((t=>t.id===e.target)).y},t))),r.map((e=>(0,d.jsx)(x,{x:e.x,y:e.y,children:e.id},e.id)))]})]})}}}]);
//# sourceMappingURL=4558.58b05d05.chunk.js.map