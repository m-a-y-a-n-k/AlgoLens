"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[4558],{4558:(e,t,r)=>{r.r(t),r.d(t,{default:()=>g});var o=r(2791),i=r(7884),n=r(184);const d={nodes:[],edges:[]},s=(e,t)=>{switch(t.type){case"ADD_NODE":return{...e,nodes:[...e.nodes,t.payload]};case"ADD_EDGE":return{...e,edges:[...e.edges,t.payload]};case"CLEAR_GRAPH":return d;default:return e}},a=i.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,l=i.ZP.h4`
  color: #1b368d;
`,c=i.ZP.button`
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
`,h=i.ZP.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`,x=i.ZP.div`
  position: relative;
  width: 90%;
  height: 70vh;
  max-width: 800px;
  min-width: 300px;
  min-height: 300px;
  border: 1px solid #ccc;
  margin: 20px auto;
`,p=i.ZP.div`
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
`,u=i.F4`
  from {
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
  }
  to {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }
`,f=i.ZP.svg.attrs((e=>({children:(0,n.jsx)("line",{x1:e.x1,y1:e.y1,x2:e.x2,y2:e.y2,stroke:"black"})})))`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${u} 1s linear;
`,g=()=>{const[e,t]=(0,o.useReducer)(s,d),{nodes:r,edges:i}=e;return(0,n.jsxs)(a,{children:[(0,n.jsx)(l,{children:"Randomized Graph Visualizer"}),(0,n.jsxs)(h,{children:[(0,n.jsx)(c,{onClick:()=>{const e=r.length+1,o=50+200*Math.random(),i=50+200*Math.random();t({type:"ADD_NODE",payload:{id:e,x:o,y:i}})},children:"Add Node"}),(0,n.jsx)(c,{onClick:()=>{if(r.length<2)return;const e=r[Math.floor(Math.random()*r.length)].id;let o;do{o=r[Math.floor(Math.random()*r.length)].id}while(e===o);t({type:"ADD_EDGE",payload:{source:e,target:o}})},children:"Add Edge"}),(0,n.jsx)(c,{onClick:()=>{t({type:"CLEAR_GRAPH"})},children:"Clear Graph"})]})," ",(0,n.jsxs)(x,{children:[i.map(((e,t)=>(0,n.jsx)(f,{x1:r.find((t=>t.id===e.source)).x,y1:r.find((t=>t.id===e.source)).y,x2:r.find((t=>t.id===e.target)).x,y2:r.find((t=>t.id===e.target)).y},t))),r.map((e=>(0,n.jsx)(p,{x:e.x,y:e.y,children:e.id},e.id)))]})]})}}}]);
//# sourceMappingURL=4558.894fd3ed.chunk.js.map