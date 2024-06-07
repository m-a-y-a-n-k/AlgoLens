(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8852],{59115:(e,r,i)=>{"use strict";i.r(r),i.d(r,{default:()=>x});var n=i(72791),t=i(57884),o=i(80184);const l=t.ZP.button`
  background: ${e=>e.bgColor};
  border: none;
  color: white;
  padding: 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  margin: 2px;
  transition: background-color 0.4s ease;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    filter: brightness(85%);
  }

  &:active {
    filter: brightness(75%);
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`,a=e=>{let{label:r,onClick:i,bgColor:n}=e;return(0,o.jsx)(l,{onClick:i,bgColor:n,children:r})},s=t.ZP.div`
  background: #333;
  color: white;
  text-align: right;
  padding: 20px;
  font-size: 2em;
  border-radius: 4px;
  margin-bottom: 20px;
  overflow-x: auto;
`,d=e=>{let{value:r}=e;return(0,o.jsx)(s,{children:r})};var g=i(80481),c=i(8005);const p=()=>{const[e,r]=(0,n.useState)("");return{display:e,handleButtonClick:i=>{if("C"===i)r("");else if("="===i)try{const i=(0,g.ku)(e);r((0,c.WUZ)(i,{precision:14}))}catch(n){r("Error")}else r(e+i)}}},b=t.ZP.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,u=t.ZP.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
  background: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`,h=t.ZP.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
`,x=()=>{const{display:e,handleButtonClick:r}=p(),i={7:"midnightblue",8:"midnightblue",9:"midnightblue"," / ":"orange","sqrt(":"forestgreen",4:"midnightblue",5:"midnightblue",6:"midnightblue"," * ":"orange","pow(":"forestgreen",1:"midnightblue",2:"midnightblue",3:"midnightblue"," - ":"orange","sin(":"forestgreen",0:"midnightblue",".":"firebrick","=":"firebrick"," + ":"orange","cos(":"forestgreen",",":"firebrick","(":"firebrick",")":"firebrick",e:"purple",pi:"purple",C:"springgreen"};return(0,o.jsxs)(u,{children:[(0,o.jsx)(b,{children:"Advanced Calculator"}),(0,o.jsx)(d,{value:e}),(0,o.jsx)(h,{children:["7","8","9"," / ","sqrt(","4","5","6"," * ","pow(","1","2","3"," - ","sin(","0",".","="," + ","cos(",",","(",")","e","pi","C"].map((e=>(0,o.jsx)(a,{label:e,bgColor:i[e],onClick:()=>r(e)},e)))})]})}},75042:()=>{}}]);
//# sourceMappingURL=8852.52530530.chunk.js.map