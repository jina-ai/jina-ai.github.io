import{s as ee,m as w,p as de,K as fe,ds as _e,dz as pe,w as R,j as z,ag as ae,a1 as O,aQ as N,aC as F,a2 as n,a3 as l,a4 as a,a5 as t,ak as c,ab as v,al as _,ad as d,aj as D,a7 as Q,ac as u,ai as ye,u as ve,ao as q,k as M,W as ge,n as be,ap as he,aq as ke,dI as Se,cF as xe,cP as Te,cQ as De,q as x,aU as Y,a9 as P,a8 as B,ae as y,aS as we,af as Qe,a6 as J,aa as W,T as X,an as Ce,a$ as Ke}from"./index-DK55Z_Jx.js";import{Q as Le}from"./QToolbar-D_axPI_k.js";import{u as Me,a as Ae,b as Ie,Q as Ee}from"./QTabs-CgOzYWtB.js";import{P as qe,d as Pe,Q as Be,a as Re,b as Ne,c as Fe}from"./PurchaseSuccessDialog-CCtfoH4k.js";import{b as I,a as Z}from"./QItemLabel-Bg-Qb_wg.js";import{Q as ze}from"./QMenu-DAB8Neqf.js";import{Q as T}from"./QTooltip-BIH0xeUK.js";import{Q as Oe}from"./QBadge-CN6zSoiS.js";import{c as Ue}from"./copy-to-clipboard-DvZ32Rmr.js";import{a as Ge,b as Ve}from"./finetune-D8VRy5QP.js";import{S as $,E as A,L as je,P as He}from"./PurchaseDialog-pFlvJh0u.js";import{u as Ye}from"./embedding-Du9tGBs-.js";import{u as Je}from"./QForm-BxAW0exV.js";import"./QResizeObserver-Jihpc5Or.js";import"./QLinearProgress-Cw4VdM0S.js";import"./format-DyQxkAtJ.js";import"./TouchPan-DJXdq9EB.js";import"./touch-BjYP5sR0.js";import"./position-engine-z-fzGM8Y.js";import"./use-dialog-plugin-component-CxMO5zjl.js";import"./package-D9JPNs5w.js";import"./QExpansionItem-ClC4xxVz.js";import"./ClosePopup-MYjsVcsP.js";const We=ee({name:"QToolbarTitle",props:{shrink:Boolean},setup(m,{slots:s}){const r=w(()=>"q-toolbar__title ellipsis"+(m.shrink===!0?" col-shrink":""));return()=>de("div",{class:r.value},fe(s.default))}}),Xe=ee({name:"QRouteTab",props:{..._e,...Me},emits:Ae,setup(m,{slots:s,emit:r}){const e=pe({useDisableForRouterLinkProps:!1}),{renderTab:g,$tabs:p}=Ie(m,s,r,{exact:w(()=>m.exact),...e});return R(()=>`${m.name} | ${m.exact} | ${(e.resolvedLink.value||{}).href}`,p.verifyRouteModel),()=>g(e.linkTag.value,e.linkAttrs.value)}}),Ze=z({__name:"DrawerItemComponent",props:{item:{type:Object,required:!0},isActive:{type:Boolean,default:!1}},setup(m,{expose:s}){s();const{t:r}=ae({useScope:"global"}),e={t:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}});function $e(m,s,r,e,g,p){return N((n(),l(D,{to:{name:"api",params:{tab:r.item.name}},"active-class":"text-primary",clickable:""},{default:a(()=>[t(c,{avatar:""},{default:a(()=>[t(v,{name:r.item.iconType==="svg"||r.item.icon.includes(".svg")?`img:${r.isActive?r.item.activeIcon:r.item.icon}`:r.item.icon},null,8,["name"])]),_:1}),t(c,null,{default:a(()=>[t(I,{lines:"1"},{default:a(()=>[_(d(e.t(r.item.label)),1)]),_:1})]),_:1})]),_:1},8,["to"])),[[F]])}const ea=O(Ze,[["render",$e],["__file","DrawerItemComponent.vue"]]),aa=z({__name:"AnimatedLogo",props:{miniState:Boolean},setup(m,{expose:s}){s();const r={};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),ta={style:{height:"56px"},class:"row items-center absolute-top"},oa={style:{"padding-left":"20px"}},sa={viewBox:"0 0 232 100",style:{width:"56px",height:"56px",transition:"all 0.2s ease-in-out"}},ra={fill:"#FFFFFF"};function na(m,s,r,e,g,p){return n(),Q("div",ta,[u("div",oa,[(n(),Q("svg",sa,[u("g",ra,[s[1]||(s[1]=u("circle",{id:"j-dot",cx:"15",cy:"84.5",r:"15"},null,-1)),s[2]||(s[2]=u("path",{id:"letter-j",d:"M61.5 36.35c2 0 3.6 1.6 3.6 3.6v29.3c0 16.7-13.5 30.3-30 30.5V69.3l-.1-29.4c0-2 1.6-3.6 3.6-3.6h23.3z"},null,-1)),u("g",{style:ye({opacity:r.miniState?0:1,transition:"opacity 0.2s ease-in-out"})},s[0]||(s[0]=[u("circle",{id:"top-dot",cx:"96",cy:"15",r:"15"},null,-1),u("path",{id:"letter-i",d:"M81 40c0-2 1.5-3.6 3.6-3.6h23.4c2 0 3.6 1.6 3.6 3.6v41c0 2-1.6 3.6-3.6 3.6H84.6c-2 0-3.6-1.6-3.6-3.6V40z"},null,-1),u("path",{id:"letter-n",d:"M128.5 39.8c0-2 1.6-3.6 3.6-3.6h13.3l.5.1c15 .2 27.2 12.3 27.6 27.3v17.3c0 2-1.6 3.6-3.6 3.6h-37.8c-2 0-3.6-1.6-3.6-3.6V39.8z"},null,-1),u("path",{id:"letter-a",d:"M207.2 84h-.2c-12.6-.7-22.5-11.2-22.5-24 0-13.3 10.8-24.1 24.1-24.1 12.8 0 23.3 10 24 22.6h.1V80.4c0 2-1.6 3.6-3.6 3.6h-21.9z"},null,-1)]),4)])]))])])}const la=O(aa,[["render",na],["__file","AnimatedLogo.vue"]]),ia=z({__name:"SeFoLayout",setup(m,{expose:s}){s();const{t:r}=ae({useScope:"global"}),e=be(),g=he(),p=ke(),C=ve(),{user:o}=q(C),f=Ye(),{apiKeyTokens:te,isPremiumPaidUser:oe,isPaidUser:se}=q(f),b=Je(),{keys:E,keysInfoCache:U}=q(b),re=M(!0),G=M(!0),K=M(),ne=$.filter(i=>i.tooling),le=w(()=>{let i=[],k={};return $.forEach(h=>{h.name===A.KEY_MANAGER?k=h:h.showsOn.includes("menu")&&i.push(h)}),o.value.uid&&i.unshift(k),i}),ie=i=>{K.value&&clearTimeout(K.value),K.value=setTimeout(()=>{G.value=!i},100)},ue=()=>{o.value.uid?g.push({params:{tab:A.KEY_MANAGER}}):(Te(De,"click_login_button"),e.dialog({component:je,componentProps:{user:o},persistent:!0}))},ce=w(()=>o.value.uid?o.value.displayName||o.value.email||o.value.uid:r("key_manager.login")),me=w(()=>{var i,k;if(o.value.uid){const h=(k=(i=o.value.providerData)==null?void 0:i[0])==null?void 0:k.providerId;let S="";switch(h){case"google.com":S="Google";break;case"github.com":S="GitHub";break;case"password":S=r("key_manager.email");break}return S?r("key_manager.login_via",{_provider:S}):""}return""});function V(){if(p.query.purchase_status==="success"){const i=new Date(parseInt(p.query.session_id)).toLocaleString();Se.create({component:qe,componentProps:{purchasedTime:i,hideActions:!0}})}}const j=async()=>{await b.fetchKeys(p.params.tab===A.KEY_MANAGER),E.value.length===0?(await b.addKey(f.apiKey),b.setPrimaryKey(f.apiKey)):b.checkPrimaryKey()};ge(async()=>{V()}),R(()=>f.apiKey,i=>{i&&f.getCurrentKeyInfo()}),R(()=>o.value.uid,async i=>{i?j():(E.value=[],U.value={},f.getCurrentKeyInfo())},{immediate:!0});const L=M(!1),H={t:r,$q:e,router:g,route:p,userStore:C,user:o,embeddingStore:f,apiKeyTokens:te,isPremiumPaidUser:oe,isPaidUser:se,apiKeyStore:b,keys:E,keysInfoCache:U,drawer:re,miniState:G,timeout:K,seFoMoreRoutes:ne,seFoRoutes:le,handleMouseMove:ie,login:ue,userDisplayName:ce,userLoginType:me,checkPurchaseStatus:V,init:j,isApiKeyCopyDone:L,copyApiKey:()=>{!f.apiKey||L.value||(Ue(f.apiKey).then(()=>{e.notify({message:r("copy_to_clipboard_success"),icon:"done"}),L.value=!0,gtag==null||gtag("event","embedding_copy_api_key",{location:document.location.href})}),setTimeout(()=>{L.value=!1},1800))},onBuy:()=>{e.dialog({component:He,componentProps:{purchaseKey:f.apiKey}})},get formatNumber(){return Ge},get formatNumberShort(){return Ve},get EMBEDDING_TABS(){return A},DrawerItemComponent:ea,AnimatedLogo:la,get formatKey(){return xe}};return Object.defineProperty(H,"__isScriptSetup",{enumerable:!1,value:!0}),H}}),ua=["src","alt"],ca={class:"absolute-bottom"},ma={style:{"font-family":"monospace"}},da=["src","alt"],fa={class:"ellipsis"};function _a(m,s,r,e,g,p){const C=Ke("router-view");return n(),l(Pe,{view:"lHh Lpr lff",class:"main-layout"},{default:a(()=>[e.$q.screen.gt.sm?y("",!0):(n(),l(Be,{key:0,bordered:"",reveal:"",class:"bg-mixed-200 text-white","height-hint":"98"},{default:a(()=>[t(Le,{class:"q-pa-none"},{default:a(()=>[t(x,{icon:"img:/Jina - Dark.svg",to:"/",stretch:"",size:"xl",dense:"",flat:"",class:"q-px-md q-pa-none",key:"logo"}),t(We,{class:"my-font non-selectable"}),t(x,{flat:"",stretch:"",square:"",onClick:e.userStore.logout},{default:a(()=>[e.user.photoURL?(n(),l(Y,{key:0,size:"sm",round:"",class:"bordered-avatar"},{default:a(()=>[u("img",{src:e.user.photoURL,referrerpolicy:"no-referrer",alt:e.userDisplayName},null,8,ua)]),_:1})):(n(),l(v,{key:1,size:"sm",round:"",name:"person"})),t(v,{name:"logout",class:"q-ml-md"})]),_:1},8,["onClick"])]),_:1}),e.user&&e.$q.screen.lt.md?(n(),l(Ee,{key:0,shrink:"","mobile-arrows":"",align:"left"},{default:a(()=>[(n(!0),Q(B,null,P([...e.seFoRoutes,...e.seFoMoreRoutes],o=>(n(),l(Xe,{key:o.name,to:{name:"api",params:{tab:o.name}},label:o.label?e.t(o.label):"",icon:o.tag==="usage"?`img:${o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)?o.activeIcon:o.icon}`:o.icon,"active-class":"text-primary","no-caps":"",exact:"",replace:""},null,8,["to","label","icon"]))),128))]),_:1})):y("",!0)]),_:1})),e.$q.screen.gt.sm?(n(),l(Re,{key:1,modelValue:e.drawer,"onUpdate:modelValue":s[1]||(s[1]=o=>e.drawer=o),"show-if-above":"",mini:e.miniState,onMouseover:s[2]||(s[2]=o=>e.handleMouseMove(!0)),onMouseout:s[3]||(s[3]=o=>e.handleMouseMove(!1)),"mini-to-overlay":"",width:250,breakpoint:500,bordered:"",class:"bg-mixed-200"},{default:a(()=>[u("div",{class:"row items-center absolute-top cursor-pointer",onClick:s[0]||(s[0]=o=>e.router.push({name:"landing"}))},[t(e.AnimatedLogo,{"mini-state":e.miniState},null,8,["mini-state"])]),t(Ne,{class:"fit",style:{"max-height":"calc(100% - 112px)","margin-top":"56px"},"horizontal-thumb-style":{opacity:"0"}},{default:a(()=>[t(Z,null,{default:a(()=>[t(we,{"enter-to-class":"list-enter-from","enter-active-class":"animated bounceIn","leave-active-class":"animated backOutRight","leave-from-class":"list-leave-to","move-class":"list-move","enter-from-class":"list-enter-from","leave-to-class":"list-leave-to"},{default:a(()=>[(n(!0),Q(B,null,P(e.seFoRoutes,o=>(n(),l(e.DrawerItemComponent,{item:o,key:o==null?void 0:o.label,"is-active":o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)},null,8,["item","is-active"]))),128)),N((n(),l(D,{clickable:"","active-class":"text-primary",key:"tools"},{default:a(()=>[t(c,{avatar:""},{default:a(()=>[t(v,{name:"service_toolbox"})]),_:1}),t(c,null,{default:a(()=>[t(I,{lines:"1"},{default:a(()=>[_(d(e.t("embedding.tools")),1)]),_:1})]),_:1}),t(ze,{class:"bg-mixed-300 lock-blur","auto-close":""},{default:a(()=>[t(Z,{class:"cursor-pointer",style:{width:"250px"}},{default:a(()=>[(n(!0),Q(B,null,P(e.seFoMoreRoutes,o=>(n(),l(e.DrawerItemComponent,{item:o,key:o==null?void 0:o.label,"is-active":o.name===(e.route.params.tab||e.EMBEDDING_TABS.CODE)},null,8,["item","is-active"]))),128))]),_:1})]),_:1})]),_:1})),[[F]])]),_:1})]),_:1})]),_:1}),u("div",ca,[t(X,{appear:"","enter-active-class":"animated faster fadeInLeft","leave-active-class":"animated faster fadeOutLeft"},{default:a(()=>[e.miniState?y("",!0):(n(),l(Qe,{key:0,flat:"",square:"",class:"bg-mixed-300"},{default:a(()=>[t(J,{class:"q-pb-none text-dim"},{default:a(()=>[_(d(e.t("key_manager.available_resources")),1)]),_:1}),t(J,{class:"q-pa-none"},{default:a(()=>[t(D,null,{default:a(()=>[t(c,{side:""},{default:a(()=>[t(v,{name:"o_data_usage"})]),_:1}),t(c,null,{default:a(()=>[u("span",{class:W(["text-h5",{"text-negative":e.apiKeyTokens<=0}])},d(e.formatNumberShort(e.apiKeyTokens)),3),t(T,null,{default:a(()=>[_(d(e.t("key_manager.balance_primary_key")+": "+e.formatNumber(e.apiKeyTokens)),1)]),_:1})]),_:1}),t(c,{side:""},{default:a(()=>[t(x,{icon:"add_shopping_cart",flat:"",square:"",onClick:e.onBuy},{default:a(()=>[t(T,null,{default:a(()=>[_(d(e.t("embedding.buy_more_quota")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(D,null,{default:a(()=>[t(c,{side:"",class:"relative-position"},{default:a(()=>[t(v,{name:"o_key"}),e.keys.length>0?(n(),l(Oe,{key:0,floating:"",rounded:"",label:e.keys.length,class:"bg-mixed-400"},{default:a(()=>[t(T,null,{default:a(()=>[_(d(e.t("key_manager.total_keys")+": "+e.keys.length),1)]),_:1})]),_:1},8,["label"])):y("",!0)]),_:1}),t(c,null,{default:a(()=>[u("span",ma,d(e.formatKey(e.embeddingStore.apiKey,{tailOnly:!0})),1),t(T,null,{default:a(()=>[_(d(e.t("key_manager.is_primary")),1)]),_:1})]),_:1}),t(c,{side:""},{default:a(()=>[t(x,{icon:"content_copy",flat:"",square:"",onClick:e.copyApiKey})]),_:1})]),_:1})]),_:1})]),_:1}))]),_:1}),N((n(),l(D,{clickable:"",style:{height:"56px"},onClick:e.login},{default:a(()=>[t(c,{avatar:"",class:"q-my-sm q-pr-none user-avatar"},{default:a(()=>[e.user.photoURL?(n(),l(Y,{key:0,size:"sm",round:"",class:"bordered-avatar"},{default:a(()=>[u("img",{src:e.user.photoURL,referrerpolicy:"no-referrer",alt:e.userDisplayName},null,8,da)]),_:1})):(n(),l(v,{key:1,size:"sm",round:"",name:"person"}))]),_:1}),t(c,null,{default:a(()=>[t(I,{lines:"1",class:"row items-center"},{default:a(()=>[u("span",fa,[e.isPaidUser?(n(),l(v,{key:0,name:"verified",class:W([{"golden-foil":e.isPremiumPaidUser,"silver-foil":e.isPaidUser},"q-mr-xs"])},null,8,["class"])):y("",!0),_(" "+d(e.userDisplayName),1)]),e.user.email?(n(),l(T,{key:0},{default:a(()=>[_(d(e.user.email),1)]),_:1})):y("",!0)]),_:1}),e.userLoginType?(n(),l(I,{key:0,caption:"",class:"text-dim",lines:"1",style:{"font-size":"0.4rem"}},{default:a(()=>[_(d(e.userLoginType),1)]),_:1})):y("",!0)]),_:1}),t(X,{appear:"","enter-active-class":"animated slower fadeIn","leave-active-class":"animated faster fadeOut"},{default:a(()=>[e.user.uid&&!e.miniState?(n(),l(c,{key:0,side:""},{default:a(()=>[t(x,{flat:"",square:"",id:"more_menu",icon:"logout",onClick:Ce(e.userStore.logout,["stop"])},null,8,["onClick"])]),_:1})):y("",!0)]),_:1})]),_:1})),[[F]])])]),_:1},8,["modelValue","mini"])):y("",!0),t(Fe,null,{default:a(()=>[t(C)]),_:1})]),_:1})}const Fa=O(ia,[["render",_a],["__file","SeFoLayout.vue"]]);export{Fa as default};