"use strict";(self.webpackChunkAlgoLens=self.webpackChunkAlgoLens||[]).push([[6681],{76681:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(72791),o=r(57884),a=r(80184);const i=o.ZP.div`
  width: 100%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 360px;
    align-items: start;
  }
`,s=o.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.06),
    rgba(255, 255, 255, 0.02)
  );
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.45);
  overflow: hidden;
`,l=o.ZP.div`
  width: 100%;
  aspect-ratio: 16 / 10;
  position: relative;
`,c=o.ZP.canvas`
  width: 100%;
  height: 100%;
  display: block;
`,x=o.ZP.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  background: rgba(0, 0, 0, 0.35);
  box-shadow: 0 14px 40px rgba(0, 0, 0, 0.35);
  padding: 14px;
  color: rgba(255, 255, 255, 0.9);
`,d=o.ZP.select`
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.35);
  color: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 10px;
  cursor: pointer;
`,h=o.ZP.label`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  margin: 12px 0 6px;
`,p=o.ZP.span`
  color: rgba(255, 255, 255, 0.65);
  font-variant-numeric: tabular-nums;
`,g=o.ZP.input`
  width: 100%;
`,u=o.ZP.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.75);
`,f=o.ZP.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: ${e=>e.color};
  box-shadow: 0 0 12px ${e=>e.color};
  margin-right: 6px;
`;function b(e){let t=1;for(let r=2;r<=e;r++)t*=r;return t}function m(e,t){const r=Math.pow(e,t);return Number.isFinite(r)?r:r>0?Number.MAX_VALUE:-Number.MAX_VALUE}function v(e,t){return"sin"===e?Math.sin(t):"cos"===e?Math.cos(t):"exp"===e?Math.exp(t):"ln1p"===e?Math.log(1+t):t}function w(e,t,r,n,o){let a=0;const i=t-r;for(let s=0;s<=n;s++)a+=o[s]*m(i,s)/b(s);return a}function M(){const e=(0,n.useRef)(null),t=(0,n.useRef)(null),[r,o]=(0,n.useState)("sin"),[M,k]=(0,n.useState)(5),[P,T]=(0,n.useState)(0),[C,S]=(0,n.useState)(8),[Z,A]=(0,n.useState)(!0);(0,n.useEffect)((()=>{const r=t.current,n=e.current;if(!r||!n)return;const o=new ResizeObserver((()=>{const e=r.getBoundingClientRect(),t=(o=window.devicePixelRatio||1,a=1,i=2,Math.max(a,Math.min(i,o)));var o,a,i;n.width=Math.max(1,Math.floor(e.width*t)),n.height=Math.max(1,Math.floor(e.height*t));n.getContext("2d").setTransform(t,0,0,t,0,0)}));return o.observe(r),()=>o.disconnect()}),[]);const F=(0,n.useMemo)((()=>function(e,t,r){const n=new Array(r+1);if("sin"===e){for(let e=0;e<=r;e++){const r=e%4;n[e]=0===r?Math.sin(t):1===r?Math.cos(t):2===r?-Math.sin(t):-Math.cos(t)}return n}if("cos"===e){for(let e=0;e<=r;e++){const r=e%4;n[e]=0===r?Math.cos(t):1===r?-Math.sin(t):2===r?-Math.cos(t):Math.sin(t)}return n}if("exp"===e){const e=Math.exp(t);for(let t=0;t<=r;t++)n[t]=e;return n}if("ln1p"===e){n[0]=Math.log(1+t);const e=1+t;for(let t=1;t<=r;t++)n[t]=Math.pow(-1,t-1)*b(t-1)/m(e,t);return n}for(let o=0;o<=r;o++)n[o]=0;return n}(r,P,M)),[r,P,M]),R=(0,n.useMemo)((()=>{const e=700,t=C/2,n=-t,o=t,a="ln1p"===r?Math.max(n,-.99):n,i=o,s=new Array(e),l=new Array(e),c=new Array(e);let x=1/0,d=-1/0;for(let p=0;p<e;p++){const e=a+(i-a)*(p/699),t=v(r,e),n=w(0,e,P,M,F);s[p]=e,l[p]=t,c[p]=n,x=Math.min(x,t,n),d=Math.max(d,t,n)}const h=.12*(d-x)||1;return{xs:s,ys:l,ts:c,xMin:a,xMax:i,yMin:x-h,yMax:d+h}}),[F,r,M,P,C]);return(0,n.useEffect)((()=>{const t=e.current;if(!t)return;const r=t.getContext("2d"),n=t.getBoundingClientRect(),o=n.width,a=n.height,i=r.createLinearGradient(0,0,0,a);i.addColorStop(0,"rgba(2,6,23,1)"),i.addColorStop(1,"rgba(0,0,0,1)"),r.fillStyle=i,r.fillRect(0,0,o,a);const s=44,l=18,c=o-s-16,x=a-l-36,d=R.xMin,h=R.xMax;let p=-4,g=4;Z&&(p=R.yMin,g=R.yMax);const u=e=>s+(e-d)/(h-d)*c,f=e=>l+(1-(e-p)/(g-p))*x;r.save(),r.strokeStyle="rgba(255,255,255,0.08)",r.lineWidth=1;for(let e=0;e<=8;e++){const t=s+c*e/8;r.beginPath(),r.moveTo(t,l),r.lineTo(t,l+x),r.stroke()}for(let e=0;e<=6;e++){const t=l+x*e/6;r.beginPath(),r.moveTo(s,t),r.lineTo(s+c,t),r.stroke()}if(r.restore(),r.save(),r.strokeStyle="rgba(255,255,255,0.22)",r.lineWidth=1.5,0>=d&&0<=h){const e=u(0);r.beginPath(),r.moveTo(e,l),r.lineTo(e,l+x),r.stroke()}if(0>=p&&0<=g){const e=f(0);r.beginPath(),r.moveTo(s,e),r.lineTo(s+c,e),r.stroke()}if(r.restore(),r.save(),r.strokeStyle="rgba(251,172,97,0.35)",r.setLineDash([6,6]),r.lineWidth=1.5,P>=d&&P<=h){const e=u(P);r.beginPath(),r.moveTo(e,l),r.lineTo(e,l+x),r.stroke()}r.restore(),y(r,R.xs,R.ys,u,f,{color:"rgba(127,231,255,0.95)",width:3,glow:"rgba(127,231,255,0.35)"}),y(r,R.xs,R.ts,u,f,{color:"rgba(251,172,97,0.95)",width:3,glow:"rgba(251,172,97,0.35)"}),r.save(),r.fillStyle="rgba(255,255,255,0.75)",r.font="12px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",r.fillText("f(x) vs Taylor\u2099(x)",s,14),r.fillText(`n=${M}   a=${P.toFixed(2)}`,s,a-10),r.restore()}),[R,M,P,Z]),(0,a.jsxs)(i,{children:[(0,a.jsx)(s,{children:(0,a.jsx)(l,{ref:t,children:(0,a.jsx)(c,{ref:e})})}),(0,a.jsxs)(x,{children:[(0,a.jsxs)(h,{children:["Function ",(0,a.jsx)(p,{children:j(r)})]}),(0,a.jsxs)(d,{value:r,onChange:e=>o(e.target.value),children:[(0,a.jsx)("option",{value:"sin",children:"sin(x)"}),(0,a.jsx)("option",{value:"cos",children:"cos(x)"}),(0,a.jsx)("option",{value:"exp",children:"e^x"}),(0,a.jsx)("option",{value:"ln1p",children:"ln(1 + x)"})]}),(0,a.jsxs)(h,{children:["Order n ",(0,a.jsx)(p,{children:M})]}),(0,a.jsx)(g,{type:"range",min:"0",max:"18",step:"1",value:M,onChange:e=>k(parseInt(e.target.value,10))}),(0,a.jsxs)(h,{children:["Center a ",(0,a.jsx)(p,{children:P.toFixed(2)})]}),(0,a.jsx)(g,{type:"range",min:"ln1p"===r?"-0.9":"-4",max:"4",step:"0.05",value:P,onChange:e=>T(parseFloat(e.target.value))}),(0,a.jsxs)(h,{children:["X range ",(0,a.jsx)(p,{children:C.toFixed(1)})]}),(0,a.jsx)(g,{type:"range",min:"2",max:"16",step:"0.5",value:C,onChange:e=>S(parseFloat(e.target.value))}),(0,a.jsxs)(h,{children:["Y scale ",(0,a.jsx)(p,{children:Z?"Auto":"Fixed"})]}),(0,a.jsx)(g,{type:"range",min:"0",max:"1",step:"1",value:Z?1:0,onChange:e=>A("1"===e.target.value)}),(0,a.jsxs)(u,{children:[(0,a.jsxs)("span",{children:[(0,a.jsx)(f,{color:"rgba(127,231,255,0.95)"}),"f(x)"]}),(0,a.jsxs)("span",{children:[(0,a.jsx)(f,{color:"rgba(251,172,97,0.95)"}),"Taylor\u2099(x)"]}),(0,a.jsxs)("span",{children:[(0,a.jsx)(f,{color:"rgba(251,172,97,0.45)"})," x = a"]})]})]})]})}function j(e){return"sin"===e?"sin(x)":"cos"===e?"cos(x)":"exp"===e?"e^x":"ln1p"===e?"ln(1+x)":e}function y(e,t,r,n,o,a){e.save(),e.lineWidth=a.width,e.strokeStyle=a.color,e.shadowBlur=10,e.shadowColor=a.glow,e.lineJoin="round",e.lineCap="round",e.beginPath();for(let i=0;i<t.length;i++){const a=n(t[i]),s=o(r[i]);0===i?e.moveTo(a,s):e.lineTo(a,s)}e.stroke(),e.restore()}const k=o.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: radial-gradient(
    circle at 30% 10%,
    #0f172a 0%,
    #0b1020 45%,
    #000 100%
  );
  min-height: 100vh;
  color: #eef2ff;
`,P=o.ZP.h1`
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  color: #fbac61;
  margin: 0 0 10px 0;
  text-align: center;
  text-shadow: 0 0 14px rgba(251, 172, 97, 0.35);
`,T=o.ZP.p`
  margin: 0 0 18px 0;
  text-align: center;
  color: rgba(255, 255, 255, 0.72);
  max-width: 900px;
  font-size: 0.95rem;
`;function C(){return(0,a.jsxs)(k,{children:[(0,a.jsx)(P,{children:"Taylor Series Explorer"}),(0,a.jsx)(T,{children:"Compare a function to its Taylor polynomial around a center point \\(a\\). Increase the order to see the approximation improve near \\(a\\)."}),(0,a.jsx)(M,{})]})}}}]);
//# sourceMappingURL=6681.88c8fdb3.chunk.js.map