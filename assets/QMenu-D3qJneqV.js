import{s as ae,t as ne,aw as se,v as ue,x as le,y as ie,k as w,m as u,ax as ce,z as re,B as fe,C as de,D as ve,E as ge,w as M,M as he,c1 as me,N as ye,c2 as D,I as Pe,p as A,K as Te,T as ke,F as xe,J as Ce,c3 as Se,c4 as Oe,c5 as qe,L as be,c6 as Be}from"./index-D2FRU7hH.js";import{f as Ee,v as R,a as Fe,b as we,c as Me,r as K,s as De,p as H,e as Ae}from"./position-engine-Bk9cyQ15.js";const He=ae({name:"QMenu",inheritAttrs:!1,props:{...Ee,...ne,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:R},self:{type:String,validator:R},offset:{type:Array,validator:Fe},scrollTarget:le,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ie,"click","escapeKey"],setup(t,{slots:Q,emit:r,attrs:d}){let n=null,f,l,v;const T=Ce(),{proxy:g}=T,{$q:o}=g,a=w(null),s=w(!1),W=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),I=ce(t,o),{registerTick:L,removeTick:_}=re(),{registerTimeout:k}=fe(),{transitionProps:j,transitionStyle:z}=de(t),{localScrollTarget:x,changeScrollEvent:J,unconfigureScrollTarget:N}=we(t,E),{anchorEl:i,canShow:U}=Me({showing:s}),{hide:C}=ve({showing:s,canShow:U,handleShow:Y,handleHide:Z,hideOnRouteChange:W,processOnMount:!0}),{showPortal:S,hidePortal:O,renderPortal:$}=ge(T,a,ee,"menu"),h={anchorEl:i,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return C(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&be(e),!0}},q=u(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),G=u(()=>t.cover===!0?q.value:H(t.self||"top start",o.lang.rtl)),V=u(()=>(t.square===!0?" q-menu--square":"")+(I.value===!0?" q-menu--dark q-dark":"")),X=u(()=>t.autoClose===!0?{onClick:p}:{}),b=u(()=>s.value===!0&&t.persistent!==!0);M(b,e=>{e===!0?(Se(y),Ae(h)):(D(y),K(h))});function m(){Oe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,he(F),S(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=me(e);if(P.left!==void 0){const{top:te,left:oe}=i.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}l===void 0&&(l=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,c)),t.noFocus!==!0&&document.activeElement.blur(),L(()=>{c(),t.noFocus!==!0&&m()}),k(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),c(),S(!0),r("show",e)},t.transitionDuration)}function Z(e){_(),O(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),k(()=>{O(!0),r("hide",e)},t.transitionDuration)}function B(e){f=void 0,l!==void 0&&(l(),l=void 0),(e===!0||s.value===!0)&&(ye(F),N(),K(h),D(y)),e!==!0&&(n=null)}function E(){(i.value!==null||t.scrollTarget!==void 0)&&(x.value=Pe(i.value,t.scrollTarget),J(x.value,c))}function p(e){v!==!0?(qe(g,e),r("click",e)):v=!1}function F(e){b.value===!0&&t.noFocus!==!0&&Be(a.value,e.target)!==!0&&m()}function y(e){r("escapeKey"),C(e)}function c(){De({targetEl:a.value,offset:t.offset,anchorEl:i.value,anchorOrigin:q.value,selfOrigin:G.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(ke,j.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,d.class],style:[d.style,z.value],...X.value},Te(Q.default)):null)}return xe(B),Object.assign(g,{focus:m,updatePosition:c}),$}});export{He as Q};