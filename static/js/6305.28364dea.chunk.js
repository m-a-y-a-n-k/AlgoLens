"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6305],{6305:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});var a=t(2791),n=t(184);const l=()=>{const[e,s]=(0,a.useState)(1),[t,l]=(0,a.useState)(100),[r,c]=(0,a.useState)(0);(0,a.useEffect)((()=>{const s=setInterval((()=>{c((s=>s+16*e/1e3))}),16);return()=>clearInterval(s)}),[e]);const i=t*e;return(0,n.jsxs)("div",{className:"circular-motion-container",children:[(0,n.jsxs)("div",{className:"controls",children:[(0,n.jsxs)("label",{children:["Speed (0 to 20 rad/s) :",(0,n.jsx)("input",{type:"number",value:e,onChange:e=>{const t=Number(e.target.value);t>=0&&t<=20&&s(t)}})]}),(0,n.jsxs)("label",{children:["Radius (0 to 120 pixels):",(0,n.jsx)("input",{type:"number",value:t,onChange:e=>{const s=Number(e.target.value);s>=0&&s<=120&&l(s)}})]})]}),(0,n.jsx)("div",{className:"visualizer",children:(0,n.jsx)("div",{className:"circle",style:{transform:`translate(${t*Math.cos(r)}px, ${t*Math.sin(r)}px)`}})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsxs)("p",{children:["Angular Momentum: ",i.toFixed(2)]}),(0,n.jsxs)("p",{children:["Number of Revolutions: ",(r/(2*Math.PI)).toFixed(2)]})]})]})}}}]);
//# sourceMappingURL=6305.28364dea.chunk.js.map