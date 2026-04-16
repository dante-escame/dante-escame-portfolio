import{r as x,j as e}from"./index-DxW8L_Vc.js";function w({label:i,min:t=0,max:o=100,step:c=1,defaultValue:d=50,value:s,onChange:r,formatValue:b=n=>n.toString().padStart(3,"0"),className:u=""}){const[n,m]=x.useState(d),a=s??n,h=p=>{const l=parseInt(p.target.value,10);s===void 0&&m(l),r==null||r(l)};return e.jsxs("div",{className:`space-y-3 ${u}`,children:[e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsx("label",{className:"text-[10px] uppercase tracking-[0.25em] text-(--color-accent) font-black",children:i}),e.jsx("span",{className:"text-xs font-black text-(--color-cyan) border-b border-(--color-cyan)/30 px-2",children:b(a)})]}),e.jsxs("div",{className:"relative h-6 flex items-center",children:[e.jsx("div",{className:"absolute inset-x-0 h-1 bg-(--color-bg-elevated) border border-(--color-border)"}),e.jsx("div",{className:"absolute left-0 h-1 bg-gradient-to-r from-(--color-accent) to-(--color-cyan) shadow-[0_0_10px_rgba(13,205,205,0.4)]",style:{width:`${(a-t)/(o-t)*100}%`}}),e.jsx("input",{type:"range",min:t,max:o,step:c,value:a,onChange:h,className:`absolute inset-x-0 w-full h-6 appearance-none bg-transparent cursor-pointer z-10 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:w-3 
            [&::-webkit-slider-thumb]:h-6 
            [&::-webkit-slider-thumb]:bg-(--color-pink) 
            [&::-webkit-slider-thumb]:border-x-2 
            [&::-webkit-slider-thumb]:border-white 
            [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(223,2,74,0.6)]
            [&::-moz-range-thumb]:appearance-none 
            [&::-moz-range-thumb]:w-3 
            [&::-moz-range-thumb]:h-6 
            [&::-moz-range-thumb]:bg-(--color-pink) 
            [&::-moz-range-thumb]:border-x-2 
            [&::-moz-range-thumb]:border-white
            [&::-moz-range-thumb]:border-none
            focus:outline-none`})]})]})}const f={title:"UI/CyberSlider"},j=()=>e.jsx(w,{defaultValue:75,label:"Signal Strength"});typeof window<"u"&&window.document&&window.document.createElement&&document.documentElement.setAttribute("data-storyloaded","");export{j as Default,f as default};
