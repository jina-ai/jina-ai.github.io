import{j as M,a0 as q,a2 as B,a3 as D,a4 as P,a5 as u,a6 as s,a7 as z,a8 as k,af as v,ag as y,a9 as H,ad as j,ae as b,ao as L,aB as A,q as O,aC as $,s as N,as as J,au as K,m as w,p as I,K as W,J as E,bh as F,k as T,w as C,W as G,b8 as U,bi as X,bj as Y}from"./index-BYwTizUb.js";import{a as Q}from"./QItemLabel-rq6zHz4x.js";import{C as Z}from"./ClosePopup-B4-Om6Mi.js";import{u as ee}from"./use-dialog-plugin-component-a7sAC56E.js";const te=M({__name:"VideoDialog",props:{videoSrc:String,title:String,description:String,icon:String},setup(e,{expose:i}){i();const{t:n}=q({useScope:"global"}),{dialogRef:a}=ee(),t={t:n,dialogRef:a};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),ae={controls:"",style:{width:"100%",height:"auto"},autoplay:""},ne=["src"];function oe(e,i,n,a,t,m){return D(),P($,{ref:"dialogRef"},{default:u(()=>[s(z,{square:"",flat:"",class:"bg-mixed-300"},{default:u(()=>[k("video",ae,[k("source",{src:n.videoSrc,type:"video/mp4"},null,8,ne),v(" "+y(a.t("video_not_supported")),1)]),s(H,null,{default:u(()=>[s(j,null,{default:u(()=>[s(b,{side:""},{default:u(()=>[s(L,{name:n.icon},null,8,["name"])]),_:1}),s(b,null,{default:u(()=>[s(Q,{caption:""},{default:u(()=>[v(y(a.t(n.description)),1)]),_:1}),s(Q,{class:"text-weight-bold"},{default:u(()=>[v(y(a.t(n.title)),1)]),_:1})]),_:1}),s(b,{side:""},{default:u(()=>[A(s(O,{flat:"",round:"",icon:"close"},null,512),[[Z]])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},512)}const fe=B(te,[["render",oe],["__file","VideoDialog.vue"]]),ie=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],se=["wave","pulse","pulse-x","pulse-y","fade","blink","none"],ge=N({name:"QSkeleton",props:{...J,tag:{type:String,default:"div"},type:{type:String,validator:e=>ie.includes(e),default:"rect"},animation:{type:String,validator:e=>se.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:i}){const n=E(),a=K(e,n.proxy.$q),t=w(()=>{const o=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:o[0],height:o[1]}}),m=w(()=>`q-skeleton q-skeleton--${a.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>I(e.tag,{class:m.value,style:t.value},W(i.default))}}),le=M({__name:"TypingText",props:{text:{default:""},typeDelay:{default:2e3},fps:{default:24},minSpeed:{default:10},supportHTML:{type:Boolean},loading:{type:Boolean},isMarkdown:{type:Boolean,default:!0},showCopy:{type:Boolean,default:!1}},emits:["done"],setup(e,{expose:i,emit:n}){const a=n,t=e,{t:m}=q({useScope:"global"}),{text:o,typeDelay:S}=F(t),d=T(0),l=T("");let r=null;const p=()=>{if(r&&(clearTimeout(r),r=null),l.value.length>=o.value.length){t.loading||a("done");return}if(!t.loading){l.value=o.value,a("done");return}l.value=o.value.substring(0,l.value.length+d.value),r=setTimeout(p,Math.floor(1e3/Math.abs(t.fps)))},_=()=>{l.value="",d.value=0,r&&(clearTimeout(r),r=null);const c=t.text.length-l.value.length;if(c<=0)return;const g=Math.ceil(t.typeDelay*t.fps/1e3);if(!g){d.value=c,p();return}const f=Math.ceil(c/g),h=Math.ceil(t.minSpeed*t.fps/1e3);d.value=Math.max(f,h),p()};C([o,S],([c,g])=>{const f=c.length-l.value.length;if(f<=0)return;const h=Math.ceil(g*t.fps/1e3);if(!h){d.value=f,p();return}const R=Math.ceil(f/h),V=Math.ceil(t.minSpeed*t.fps/1e3);d.value=Math.max(R,V),p()},{immediate:!0}),C(()=>t.loading,c=>{l.value.length>=o.value.length&&!c&&a("done")}),G(()=>{_()}),i({resetPrint:_});const x={emit:a,props:t,t:m,text:o,typeDelay:S,charPerTurn:d,displayText:l,get timeoutHdl(){return r},set timeoutHdl(c){r=c},updateDisplayTextRoutine:p,resetPrint:_};return Object.defineProperty(x,"__isScriptSetup",{enumerable:!1,value:!0}),x}});function re(e,i,n,a,t,m){const o=U("q-markdown");return D(),P(o,{src:a.displayText,"no-html":!n.supportHTML,"no-line-numbers":"","copy-icon":"content_copy","content-class":"innerMarkdown",class:"overflow-auto","copy-tooltip-text":a.t("copy"),"show-copy":n.showCopy&&!!a.displayText,"copy-response-text":a.t("copy_to_clipboard_success")},null,8,["src","no-html","copy-tooltip-text","show-copy","copy-response-text"])}const he=B(le,[["render",re],["__scopeId","data-v-707eb0e8"],["__file","TypingText.vue"]]),ce='<g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="6"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"></animate><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="8"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"></animate></circle></g>',_e=N({name:"QSpinnerRings",props:X,setup(e){const{cSize:i,classes:n}=Y(e);return()=>I("svg",{class:n.value,stroke:"currentColor",width:i.value,height:i.value,viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",innerHTML:ce})}});export{ge as Q,he as T,fe as V,_e as a};