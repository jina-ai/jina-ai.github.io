import{s as T,av as D,aw as P,m as b,p as g,K as y,J as N,j as I,af as V,a0 as R,a1 as z,a2 as H,a3 as u,a4 as s,ae as L,ab as Q,ak as S,ac as k,a5 as $,ai as O,aj as w,aa as J,aI as K,q as W,aW as E,bh as F,k as q,w as M,V as G,aV as U,bv as X,bw as Y}from"./index-DK8hpuzO.js";import{a as B}from"./QItemLabel-BZOURyw4.js";import{C as Z}from"./ClosePopup-CRnoHGy6.js";import{u as ee}from"./use-dialog-plugin-component-X8rI7KDh.js";const fe=T({name:"QBanner",props:{...D,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:o}){const{proxy:{$q:n}}=N(),a=P(e,n),t=b(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(a.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),d=b(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const i=[g("div",{class:"q-banner__avatar col-auto row items-center self-start"},y(o.avatar)),g("div",{class:"q-banner__content col text-body2"},y(o.default))],m=y(o.action);return m!==void 0&&i.push(g("div",{class:d.value},m)),g("div",{class:t.value+(e.inlineActions===!1&&m!==void 0?" q-banner--top-padding":""),role:"alert"},i)}}}),te=I({__name:"VideoDialog",props:{videoSrc:String,title:String,description:String,icon:String},setup(e,{expose:o}){o();const{t:n}=V({useScope:"global"}),{dialogRef:a}=ee(),t={t:n,dialogRef:a};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),ae={controls:"",style:{width:"100%",height:"auto"},autoplay:""},ne=["src"];function oe(e,o,n,a,t,d){return z(),H(E,{ref:"dialogRef"},{default:u(()=>[s(L,{square:"",flat:"",class:"bg-mixed-300"},{default:u(()=>[Q("video",ae,[Q("source",{src:n.videoSrc,type:"video/mp4"},null,8,ne),S(" "+k(a.t("video_not_supported")),1)]),s($,null,{default:u(()=>[s(O,null,{default:u(()=>[s(w,{side:""},{default:u(()=>[s(J,{name:n.icon},null,8,["name"])]),_:1}),s(w,null,{default:u(()=>[s(B,{caption:""},{default:u(()=>[S(k(a.t(n.description)),1)]),_:1}),s(B,{class:"text-weight-bold"},{default:u(()=>[S(k(a.t(n.title)),1)]),_:1})]),_:1}),s(w,{side:""},{default:u(()=>[K(s(W,{flat:"",round:"",icon:"close"},null,512),[[Z]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)}const ge=R(te,[["render",oe],["__file","VideoDialog.vue"]]),ie=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],se=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],ve=T({name:"QSkeleton",props:{...D,tag:{type:String,default:"div"},type:{type:String,validator:e=>ie.includes(e),default:"rect"},animation:{type:String,validator:e=>se.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:o}){const n=N(),a=P(e,n.proxy.$q),t=b(()=>{const i=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:i[0],height:i[1]}}),d=b(()=>`q-skeleton q-skeleton--${a.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>g(e.tag,{class:d.value,style:t.value},y(o.default))}}),re=I({__name:"TypingText",props:{text:{default:""},typeDelay:{default:2e3},fps:{default:24},minSpeed:{default:10},supportHTML:{type:Boolean},loading:{type:Boolean},isMarkdown:{type:Boolean,default:!0},showCopy:{type:Boolean,default:!1}},emits:["done"],setup(e,{expose:o,emit:n}){const a=n,t=e,{t:d}=V({useScope:"global"}),{text:i,typeDelay:m}=F(t),p=q(0),r=q("");let l=null;const f=()=>{if(l&&(clearTimeout(l),l=null),r.value.length>=i.value.length){t.loading||a("done");return}if(!t.loading){r.value=i.value,a("done");return}r.value=i.value.substring(0,r.value.length+p.value),l=setTimeout(f,Math.floor(1e3/Math.abs(t.fps)))},x=()=>{r.value="",p.value=0,l&&(clearTimeout(l),l=null);const c=t.text.length-r.value.length;if(c<=0)return;const _=Math.ceil(t.typeDelay*t.fps/1e3);if(!_){p.value=c,f();return}const v=Math.ceil(c/_),h=Math.ceil(t.minSpeed*t.fps/1e3);p.value=Math.max(v,h),f()};M([i,m],([c,_])=>{const v=c.length-r.value.length;if(v<=0)return;const h=Math.ceil(_*t.fps/1e3);if(!h){p.value=v,f();return}const j=Math.ceil(v/h),A=Math.ceil(t.minSpeed*t.fps/1e3);p.value=Math.max(j,A),f()},{immediate:!0}),M(()=>t.loading,c=>{r.value.length>=i.value.length&&!c&&a("done")}),G(()=>{x()}),o({resetPrint:x});const C={emit:a,props:t,t:d,text:i,typeDelay:m,charPerTurn:p,displayText:r,get timeoutHdl(){return l},set timeoutHdl(c){l=c},updateDisplayTextRoutine:f,resetPrint:x};return Object.defineProperty(C,"__isScriptSetup",{enumerable:!1,value:!0}),C}});function le(e,o,n,a,t,d){const i=U("q-markdown");return z(),H(i,{src:a.displayText,"no-html":!n.supportHTML,"no-line-numbers":"","copy-icon":"content_copy","content-class":"innerMarkdown",class:"overflow-auto","copy-tooltip-text":a.t("copy"),"show-copy":n.showCopy&&!!a.displayText,"copy-response-text":a.t("copy_to_clipboard_success")},null,8,["src","no-html","copy-tooltip-text","show-copy","copy-response-text"])}const _e=R(re,[["render",le],["__scopeId","data-v-707eb0e8"],["__file","TypingText.vue"]]),ce='<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',he=T({name:"QSpinnerRings",props:X,setup(e){const{cSize:o,classes:n}=Y(e);return()=>g("svg",{class:n.value,stroke:"currentColor",width:o.value,height:o.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",innerHTML:ce})}});export{ve as Q,_e as T,ge as V,fe as a,he as b};