import{m as a,s as B,k as h,B as z,ap as O,W as V,p as n,T as H,K as I,aq as K,w as E,ar as x,J as N,as as F,at as G,au as W,av as J,aw as U,ao as L,ax as X,ay as Y,L as Z}from"./index-BYwTizUb.js";const p={ratio:[String,Number]};function ee(e,o){return a(()=>{const i=Number(e.ratio||(o!==void 0?o.value:void 0));return isNaN(i)!==!0&&i>0?{paddingBottom:`${100/i}%`}:null})}const te=1.7778,ae=B({name:"QImg",props:{...p,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},loadingShowDelay:{type:[Number,String],default:0},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:te},placeholderSrc:String,errorSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:o,emit:i}){const r=h(e.initialRatio),s=ee(e,r),f=N(),{registerTimeout:k,removeTimeout:b}=z(),{registerTimeout:w,removeTimeout:g}=z(),S=a(()=>e.placeholderSrc!==void 0?{src:e.placeholderSrc}:null),q=a(()=>e.errorSrc!==void 0?{src:e.errorSrc,__qerror:!0}:null),c=[h(null),h(S.value)],u=h(0),d=h(!1),m=h(!1),l=a(()=>`q-img q-img--${e.noNativeMenu===!0?"no-":""}menu`),y=a(()=>({width:e.width,height:e.height})),Q=a(()=>`q-img__image ${e.imgClass!==void 0?e.imgClass+" ":""}q-img__image--with${e.noTransition===!0?"out":""}-transition q-img__image--`),$=a(()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position}));function D(){if(g(),e.loadingShowDelay===0){d.value=!0;return}w(()=>{d.value=!0},e.loadingShowDelay)}function C(){g(),d.value=!1}function j({target:t}){x(f)===!1&&(b(),r.value=t.naturalHeight===0?.5:t.naturalWidth/t.naturalHeight,R(t,1))}function R(t,v){v===1e3||x(f)===!0||(t.complete===!0?P(t):k(()=>{R(t,v+1)},50))}function P(t){x(f)!==!0&&(u.value=u.value^1,c[u.value].value=null,C(),t.getAttribute("__qerror")!=="true"&&(m.value=!1),i("load",t.currentSrc||t.src))}function A(t){b(),C(),m.value=!0,c[u.value].value=q.value,c[u.value^1].value=S.value,i("error",t)}function T(t){const v=c[t].value,_={key:"img_"+t,class:Q.value,style:$.value,alt:e.alt,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...v};return u.value===t?Object.assign(_,{class:_.class+"current",onLoad:j,onError:A}):_.class+="loaded",n("div",{class:"q-img__container absolute-full",key:"img"+t},n("img",_))}function M(){return d.value===!1?n("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},I(o[m.value===!0?"error":"default"])):n("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},o.loading!==void 0?o.loading():e.noSpinner===!0?void 0:[n(K,{color:e.spinnerColor,size:e.spinnerSize})])}{let t=function(){E(()=>e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null,v=>{b(),m.value=!1,v===null?(C(),c[u.value^1].value=S.value):D(),c[u.value].value=v},{immediate:!0})};O.value===!0?V(t):t()}return()=>{const t=[];return s.value!==null&&t.push(n("div",{key:"filler",style:s.value})),c[0].value!==null&&t.push(T(0)),c[1].value!==null&&t.push(T(1)),t.push(n(H,{name:"q-transition--fade"},M)),n("div",{key:"main",class:l.value,style:y.value,role:"img","aria-label":e.alt},t)}}}),ne=B({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,square:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:o}){const i=a(()=>{const r=["unelevated","outline","flat","rounded","square","push","stretch","glossy"].filter(s=>e[s]===!0).map(s=>`q-btn-group--${s}`).join(" ");return`q-btn-group row no-wrap${r.length!==0?" "+r:""}`+(e.spread===!0?" q-btn-group--spread":" inline")});return()=>n("div",{class:i.value},I(o.default))}}),le={xs:8,sm:10,md:14,lg:20,xl:24},oe=B({name:"QChip",props:{...F,...G,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:o,emit:i}){const{proxy:{$q:r}}=N(),s=W(e,r),f=J(e,le),k=a(()=>e.selected===!0||e.icon!==void 0),b=a(()=>e.selected===!0?e.iconSelected||r.iconSet.chip.selected:e.icon),w=a(()=>e.iconRemove||r.iconSet.chip.remove),g=a(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),S=a(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(g.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(s.value===!0?" q-chip--dark q-dark":"")}),q=a(()=>{const l=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},y={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||r.lang.label.remove};return{chip:l,remove:y}});function c(l){l.keyCode===13&&u(l)}function u(l){e.disable||(i("update:selected",!e.selected),i("click",l))}function d(l){(l.keyCode===void 0||l.keyCode===13)&&(Z(l),e.disable===!1&&(i("update:modelValue",!1),i("remove")))}function m(){const l=[];g.value===!0&&l.push(n("div",{class:"q-focus-helper"})),k.value===!0&&l.push(n(L,{class:"q-chip__icon q-chip__icon--left",name:b.value}));const y=e.label!==void 0?[n("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(n("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},X(o.default,y))),e.iconRight&&l.push(n(L,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(n(L,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:w.value,...q.value.remove,onClick:d,onKeyup:d})),l}return()=>{if(e.modelValue===!1)return;const l={class:S.value,style:f.value};return g.value===!0&&Object.assign(l,q.value.chip,{onClick:u,onKeyup:c}),U("div",l,m(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Y,e.ripple]])}}}),re=B({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:o}){const i=a(()=>parseInt(e.lines,10)),r=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(i.value===1?" ellipsis":"")),s=a(()=>e.lines!==void 0&&i.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":i.value}:null);return()=>n("div",{style:s.value,class:r.value},I(o.default))}});export{ae as Q,re as a,ne as b,oe as c,ee as d,p as u};