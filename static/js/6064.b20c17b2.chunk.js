"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6064],{6064:(t,e,n)=>{n.r(e),n.d(e,{default:()=>w});var r=n(72791),s=n(57884),a=n(59962),o=n.n(a),d=n(80184);const i=s.ZP.div`
  width: 100%;
  height: 80vh;
  background: #f0f0f0;
  position: relative;
  overflow: hidden;
`,l=s.ZP.div`
  width: 10px;
  height: 100px;
  background: #000;
  position: absolute;
`,h=s.ZP.div`
  width: 10px;
  height: 100px;
  background: rgba(0, 0, 255, 0.5);
  position: absolute;
`,c=s.ZP.div`
  position: absolute;
  width: 5px;
  background: yellow;
  height: ${t=>t.length}px;
  transform: rotate(${t=>t.angle}deg);
  transform-origin: top left;
`,x=s.ZP.div`
  width: 100%;
  height: 20vh;
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`,u=s.ZP.button`
  background: #fff;
  color: #333;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin: 5px;
`,p=()=>(0,d.jsx)(l,{}),g=()=>(0,d.jsx)(h,{}),f=t=>{let{startX:e,startY:n,endX:r,endY:s}=t;const a=Math.sqrt((r-e)**2+(s-n)**2),o=Math.atan2(s-n,r-e)*(180/Math.PI);return(0,d.jsx)(c,{style:{top:n,left:e},angle:o,length:a})},y=(t,e,n)=>{const{x:r,y:s}=t,{x:a,y:o}=e,{x:d,y:i,width:l,height:h}=n,c=(r-a)*(i-i+h)-(s-o)*(d-d+l);if(0===c)return null;const x=((r-d)*(i-i+h)-(s-i)*(d-d+l))/c,u=((r-a)*(s-i)-(s-o)*(r-d))/c;return x>=0&&x<=1&&u>=0&&u<=1?{x:r+x*(a-r),y:s+x*(o-s)}:null},X=(t,e)=>{const{width:n,height:r}=e,{startX:s,startY:a,endX:o,endY:d}=t,i={x:0===r?1:0,y:0===n?1:0},l=Math.atan2(d-a,o-s),h=l-Math.atan2(i.y,i.x),c="mirror"===e.type?l-2*h:l+2*h,x=t.length,u=s+x*Math.cos(c),p=a+x*Math.sin(c);return{...t,endX:u,endY:p}},Y=(t,e)=>{const n=window.innerWidth,r=window.innerHeight;return t<0||t>n||e<0||e>r},j=t=>{let{elements:e,rays:n,onDragElement:r,onDragRay:s}=t;return(0,d.jsxs)(i,{children:[e.map(((t,e)=>(0,d.jsx)(o(),{defaultPosition:{x:t.x,y:t.y},onStop:(t,n)=>r(e,n.x,n.y),children:(0,d.jsx)("div",{style:{position:"absolute",top:0,left:0},children:"mirror"===t.type?(0,d.jsx)(p,{}):(0,d.jsx)(g,{})})},e))),n.map(((t,n)=>{const r=((t,e)=>{let n={...t},r=n.startX,s=n.startY;for(let a=0;a<1e3;a++){const a={x:r,y:s};if(e.forEach((t=>{y({x:n.startX,y:n.startY},a,t)&&(n=X(n,t),r=n.endX,s=n.endY)})),n.length=Math.sqrt((n.endX-n.startX)**2+(n.endY-n.startY)**2),n.length>=t.length||Y(n.endX,n.endY))break}return n})(t,e);return(0,d.jsx)(o(),{defaultPosition:{x:r.startX,y:r.startY},onStop:(t,e)=>s(n,e.x,e.y),children:(0,d.jsx)("div",{style:{position:"absolute",top:0,left:0},children:(0,d.jsx)(f,{startX:r.startX,startY:r.startY,endX:r.endX,endY:r.endY})})},n)}))]})},m=t=>{let{addElement:e,addRay:n}=t;return(0,d.jsxs)(x,{children:[(0,d.jsx)(u,{onClick:()=>e("mirror"),children:"Add Mirror"}),(0,d.jsx)(u,{onClick:()=>e("lens"),children:"Add Lens"}),(0,d.jsx)(u,{onClick:n,children:"Add Ray"})]})},b=s.ZP.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;const w=function(){const[t,e]=(0,r.useState)([]),[n,s]=(0,r.useState)([]);return(0,d.jsxs)(b,{children:[(0,d.jsx)(j,{elements:t,onDragElement:(n,r,s)=>{const a=[...t];a[n]={...a[n],x:r,y:s},e(a)},rays:n,onDragRay:(t,e,r)=>{const a=[...n],o=a[t];if(o){const n=e-o.startX,d=r-o.startY;a[t]={...o,startX:e,startY:r,endX:o.endX+n,endY:o.endY+d},s(a)}}}),(0,d.jsx)(m,{addElement:n=>{e([...t,{type:n,x:100,y:100}])},addRay:()=>{s([...n,{startX:200,startY:100,endX:200,endY:300}])}})]})}}}]);
//# sourceMappingURL=6064.b20c17b2.chunk.js.map