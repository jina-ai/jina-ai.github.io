import{b_ as Lt,k as T,m as d,w as me,b$ as Rt,l as Ht,aS as Dt,aT as $t,F as mt,V as G,p as b,J as Ke,s as je,c0 as Qe,c1 as St,c2 as gt,c3 as ht,c4 as Pt,c5 as Nt,c6 as Kt,c7 as jt,U as $e,ao as Qt,bQ as pe,R as Ut,bo as fe,bP as Wt,L as ve,aC as Xt,c8 as it,ae as Yt,ad as Gt,b6 as yt,c9 as Jt,as as Zt,at as el,au as tl,av as ll}from"./index-BYwTizUb.js";import{c as ul,a as nl}from"./QItemLabel-rq6zHz4x.js";import{Q as al}from"./QMenu-B1QiXKwT.js";let Be=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const u=document.createElement("div");Object.assign(u.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(u),e.scrollLeft=-1e3,Be=e.scrollLeft>=0,e.remove()}const N=1e3,ol=["start","center","end","start-force","center-force","end-force"],bt=Array.prototype.filter,il=window.getComputedStyle(document.body).overflowAnchor===void 0?Lt:function(e,u){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const n=e.children||[];bt.call(n,C=>C.dataset&&C.dataset.qVsAnchor!==void 0).forEach(C=>{delete C.dataset.qVsAnchor});const c=n[u];c&&c.dataset&&(c.dataset.qVsAnchor="")}))};function Se(e,u){return e+u}function Pe(e,u,n,c,C,r,I,h){const g=e===window?document.scrollingElement||document.documentElement:e,M=C===!0?"offsetWidth":"offsetHeight",s={scrollStart:0,scrollViewSize:-I-h,scrollMaxSize:0,offsetStart:-I,offsetEnd:-h};if(C===!0?(e===window?(s.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,s.scrollViewSize+=document.documentElement.clientWidth):(s.scrollStart=g.scrollLeft,s.scrollViewSize+=g.clientWidth),s.scrollMaxSize=g.scrollWidth,r===!0&&(s.scrollStart=(Be===!0?s.scrollMaxSize-s.scrollViewSize:0)-s.scrollStart)):(e===window?(s.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,s.scrollViewSize+=document.documentElement.clientHeight):(s.scrollStart=g.scrollTop,s.scrollViewSize+=g.clientHeight),s.scrollMaxSize=g.scrollHeight),n!==null)for(let w=n.previousElementSibling;w!==null;w=w.previousElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetStart+=w[M]);if(c!==null)for(let w=c.nextElementSibling;w!==null;w=w.nextElementSibling)w.classList.contains("q-virtual-scroll--skip")===!1&&(s.offsetEnd+=w[M]);if(u!==e){const w=g.getBoundingClientRect(),V=u.getBoundingClientRect();C===!0?(s.offsetStart+=V.left-w.left,s.offsetEnd-=V.width):(s.offsetStart+=V.top-w.top,s.offsetEnd-=V.height),e!==window&&(s.offsetStart+=s.scrollStart),s.offsetEnd+=s.scrollMaxSize-s.offsetStart}return s}function rt(e,u,n,c){u==="end"&&(u=(e===window?document.body:e)[n===!0?"scrollWidth":"scrollHeight"]),e===window?n===!0?(c===!0&&(u=(Be===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-u),window.scrollTo(u,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,u):n===!0?(c===!0&&(u=(Be===!0?e.scrollWidth-e.offsetWidth:0)-u),e.scrollLeft=u):e.scrollTop=u}function ke(e,u,n,c){if(n>=c)return 0;const C=u.length,r=Math.floor(n/N),I=Math.floor((c-1)/N)+1;let h=e.slice(r,I).reduce(Se,0);return n%N!==0&&(h-=u.slice(r*N,n).reduce(Se,0)),c%N!==0&&c!==C&&(h-=u.slice(c,I*N).reduce(Se,0)),h}const wt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},gl=Object.keys(wt),st={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...wt};function rl({virtualScrollLength:e,getVirtualScrollTarget:u,getVirtualScrollEl:n,virtualScrollItemSizeComputed:c}){const C=Ke(),{props:r,emit:I,proxy:h}=C,{$q:g}=h;let M,s,w,V=[],k;const A=T(0),H=T(0),O=T({}),U=T(null),W=T(null),R=T(null),_=T({from:0,to:0}),xe=d(()=>r.tableColspan!==void 0?r.tableColspan:100);c===void 0&&(c=d(()=>r.virtualScrollItemSize));const F=d(()=>c.value+";"+r.virtualScrollHorizontal),X=d(()=>F.value+";"+r.virtualScrollSliceRatioBefore+";"+r.virtualScrollSliceRatioAfter);me(X,()=>{K()}),me(F,J);function J(){ne(s,!0)}function ge(l){ne(l===void 0?s:l)}function Z(l,i){const v=u();if(v==null||v.nodeType===8)return;const z=Pe(v,n(),U.value,W.value,r.virtualScrollHorizontal,g.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd);w!==z.scrollViewSize&&K(z.scrollViewSize),D(v,z,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,ol.indexOf(i)!==-1?i:s!==-1&&l>s?"end":"start")}function ze(){const l=u();if(l==null||l.nodeType===8)return;const i=Pe(l,n(),U.value,W.value,r.virtualScrollHorizontal,g.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd),v=e.value-1,z=i.scrollMaxSize-i.offsetStart-i.offsetEnd-H.value;if(M===i.scrollStart)return;if(i.scrollMaxSize<=0){D(l,i,0,0);return}w!==i.scrollViewSize&&K(i.scrollViewSize),he(_.value.from);const B=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(k[v],i.scrollViewSize/2));if(B>0&&Math.ceil(i.scrollStart)>=B){D(l,i,v,i.scrollMaxSize-i.offsetEnd-V.reduce(Se,0));return}let y=0,S=i.scrollStart-i.offsetStart,E=S;if(S<=z&&S+i.scrollViewSize>=A.value)S-=A.value,y=_.value.from,E=S;else for(let m=0;S>=V[m]&&y<v;m++)S-=V[m],y+=N;for(;S>0&&y<v;)S-=k[y],S>-i.scrollViewSize?(y++,E=S):E=k[y]+S;D(l,i,y,E)}function D(l,i,v,z,B){const y=typeof B=="string"&&B.indexOf("-force")!==-1,S=y===!0?B.replace("-force",""):B,E=S!==void 0?S:"start";let m=Math.max(0,v-O.value[E]),$=m+O.value.total;$>e.value&&($=e.value,m=Math.max(0,$-O.value.total)),M=i.scrollStart;const Y=m!==_.value.from||$!==_.value.to;if(Y===!1&&S===void 0){ye(v);return}const{activeElement:qe}=document,j=R.value;Y===!0&&j!==null&&j!==qe&&j.contains(qe)===!0&&(j.addEventListener("focusout",Ae),setTimeout(()=>{j!==null&&j.removeEventListener("focusout",Ae)})),il(j,v-m);const Ie=S!==void 0?k.slice(m,v).reduce(Se,0):0;if(Y===!0){const ee=$>=_.value.from&&m<=_.value.to?_.value.to:$;_.value={from:m,to:ee},A.value=ke(V,k,0,m),H.value=ke(V,k,$,e.value),requestAnimationFrame(()=>{_.value.to!==$&&M===i.scrollStart&&(_.value={from:_.value.from,to:$},H.value=ke(V,k,$,e.value))})}requestAnimationFrame(()=>{if(M!==i.scrollStart)return;Y===!0&&he(m);const ee=k.slice(m,v).reduce(Se,0),te=ee+i.offsetStart+A.value,_e=te+k[v];let we=te+z;if(S!==void 0){const Te=ee-Ie,Ve=i.scrollStart+Te;we=y!==!0&&Ve<te&&_e<Ve+i.scrollViewSize?Ve:S==="end"?_e-i.scrollViewSize:te-(S==="start"?0:Math.round((i.scrollViewSize-k[v])/2))}M=we,rt(l,we,r.virtualScrollHorizontal,g.lang.rtl),ye(v)})}function he(l){const i=R.value;if(i){const v=bt.call(i.children,m=>m.classList&&m.classList.contains("q-virtual-scroll--skip")===!1),z=v.length,B=r.virtualScrollHorizontal===!0?m=>m.getBoundingClientRect().width:m=>m.offsetHeight;let y=l,S,E;for(let m=0;m<z;){for(S=B(v[m]),m++;m<z&&v[m].classList.contains("q-virtual-scroll--with-prev")===!0;)S+=B(v[m]),m++;E=S-k[y],E!==0&&(k[y]+=E,V[Math.floor(y/N)]+=E),y++}}}function Ae(){R.value!==null&&R.value!==void 0&&R.value.focus()}function ne(l,i){const v=1*c.value;(i===!0||Array.isArray(k)===!1)&&(k=[]);const z=k.length;k.length=e.value;for(let y=e.value-1;y>=z;y--)k[y]=v;const B=Math.floor((e.value-1)/N);V=[];for(let y=0;y<=B;y++){let S=0;const E=Math.min((y+1)*N,e.value);for(let m=y*N;m<E;m++)S+=k[m];V.push(S)}s=-1,M=void 0,A.value=ke(V,k,0,_.value.from),H.value=ke(V,k,_.value.to,e.value),l>=0?(he(_.value.from),G(()=>{Z(l)})):ae()}function K(l){if(l===void 0&&typeof window!="undefined"){const S=u();S!=null&&S.nodeType!==8&&(l=Pe(S,n(),U.value,W.value,r.virtualScrollHorizontal,g.lang.rtl,r.virtualScrollStickySizeStart,r.virtualScrollStickySizeEnd).scrollViewSize)}w=l;const i=parseFloat(r.virtualScrollSliceRatioBefore)||0,v=parseFloat(r.virtualScrollSliceRatioAfter)||0,z=1+i+v,B=l===void 0||l<=0?1:Math.ceil(l/c.value),y=Math.max(1,B,Math.ceil((r.virtualScrollSliceSize>0?r.virtualScrollSliceSize:10)/z));O.value={total:Math.ceil(y*z),start:Math.ceil(y*i),center:Math.ceil(y*(.5+i)),end:Math.ceil(y*(1+i)),view:B}}function Ee(l,i){const v=r.virtualScrollHorizontal===!0?"width":"height",z={["--q-virtual-scroll-item-"+v]:c.value+"px"};return[l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"before",ref:U},[b("tr",[b("td",{style:{[v]:`${A.value}px`,...z},colspan:xe.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"before",ref:U,style:{[v]:`${A.value}px`,...z}}),b(l,{class:"q-virtual-scroll__content",key:"content",ref:R,tabindex:-1},i.flat()),l==="tbody"?b(l,{class:"q-virtual-scroll__padding",key:"after",ref:W},[b("tr",[b("td",{style:{[v]:`${H.value}px`,...z},colspan:xe.value})])]):b(l,{class:"q-virtual-scroll__padding",key:"after",ref:W,style:{[v]:`${H.value}px`,...z}})]}function ye(l){s!==l&&(r.onVirtualScroll!==void 0&&I("virtualScroll",{index:l,from:_.value.from,to:_.value.to-1,direction:l<s?"decrease":"increase",ref:h}),s=l)}K();const ae=Rt(ze,g.platform.is.ios===!0?120:35);Ht(()=>{K()});let be=!1;return Dt(()=>{be=!0}),$t(()=>{if(be!==!0)return;const l=u();M!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?rt(l,M,r.virtualScrollHorizontal,g.lang.rtl):Z(s)}),mt(()=>{ae.cancel()}),Object.assign(h,{scrollTo:Z,reset:J,refresh:ge}),{virtualScrollSliceRange:_,virtualScrollSliceSizeComputed:O,setVirtualScrollSize:K,onVirtualScrollEvt:ae,localResetVirtualScroll:ne,padVirtualScroll:Ee,scrollTo:Z,reset:J,refresh:ge}}const sl=je({name:"QField",inheritAttrs:!1,props:{...Qe,tag:{type:String,default:"label"}},emits:St,setup(){return gt(ht({tagProp:!0}))}}),ct=["B","KB","MB","GB","TB","PB"];function hl(e,u=1){let n=0;for(;parseInt(e,10)>=1024&&n<ct.length-1;)e/=1024,++n;return`${e.toFixed(u)}${ct[n]}`}function yl(e){return e.charAt(0).toUpperCase()+e.slice(1)}function bl(e,u,n){return n<=u?u:Math.min(n,Math.max(u,e))}function dt(e,u,n){if(n<=u)return u;const c=n-u+1;let C=u+(e-u)%c;return C<u&&(C=c+C),C===0?0:C}function wl(e,u=2,n="0"){if(e==null)return e;const c=""+e;return c.length>=u?c:new Array(u-c.length+1).join(n)+c}const ft=e=>["add","add-unique","toggle"].includes(e),cl=".*+?^${}()|[]\\",dl=Object.keys(Qe);function Ne(e,u){if(typeof e=="function")return e;const n=e!==void 0?e:u;return c=>c!==null&&typeof c=="object"&&n in c?c[n]:c}const Vl=je({name:"QSelect",inheritAttrs:!1,props:{...st,...Pt,...Qe,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:ft},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:st.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...St,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:u,emit:n}){const{proxy:c}=Ke(),{$q:C}=c,r=T(!1),I=T(!1),h=T(-1),g=T(""),M=T(!1),s=T(!1);let w=null,V=null,k,A,H,O=null,U,W,R,_;const xe=T(null),F=T(null),X=T(null),J=T(null),ge=T(null),Z=Nt(e),ze=Jt(lt),D=d(()=>e.options.length),he=d(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:Ae,virtualScrollSliceSizeComputed:ne,localResetVirtualScroll:K,padVirtualScroll:Ee,onVirtualScrollEvt:ye,scrollTo:ae,setVirtualScrollSize:be}=rl({virtualScrollLength:D,getVirtualScrollTarget:kt,getVirtualScrollEl:et,virtualScrollItemSizeComputed:he}),l=ht(),i=d(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,a=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0){const o=e.mapOptions===!0&&k!==void 0?k:[],f=a.map(x=>pt(x,o));return e.modelValue===null&&t===!0?f.filter(x=>x!==null):f}return a}),v=d(()=>{const t={};return dl.forEach(a=>{const o=e[a];o!==void 0&&(t[a]=o)}),t}),z=d(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),B=d(()=>it(i.value)),y=d(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),S=d(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),E=d(()=>D.value===0),m=d(()=>i.value.map(t=>P.value(t)).join(", ")),$=d(()=>e.displayValue!==void 0?e.displayValue:m.value),Y=d(()=>e.optionsHtml===!0?()=>!0:t=>t!=null&&t.html===!0),qe=d(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(Y.value))),j=d(()=>l.focused.value===!0?e.tabindex:-1),Ie=d(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":r.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return h.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${h.value}`),t}),ee=d(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),te=d(()=>i.value.map((t,a)=>({index:a,opt:t,html:Y.value(t),selected:!0,removeAtIndex:Ct,toggleOption:le,tabindex:j.value}))),_e=d(()=>{if(D.value===0)return[];const{from:t,to:a}=Ae.value;return e.options.slice(t,a).map((o,f)=>{const x=oe.value(o)===!0,p=Re(o)===!0,L=t+f,q={clickable:!0,active:p,activeClass:Ve.value,manualFocus:!0,focused:!1,disable:x,tabindex:-1,dense:e.optionsDense,dark:z.value,role:"option","aria-selected":p===!0?"true":"false",id:`${l.targetUid.value}_${L}`,onClick:()=>{le(o)}};return x!==!0&&(h.value===L&&(q.focused=!0),C.platform.is.desktop===!0&&(q.onMousemove=()=>{r.value===!0&&ie(L)})),{index:L,opt:o,html:Y.value(o),label:P.value(o),selected:q.active,focused:q.focused,toggleOption:le,setOptionIndex:ie,itemProps:q}})}),we=d(()=>e.dropdownIcon!==void 0?e.dropdownIcon:C.iconSet.arrow.dropdown),Te=d(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),Ve=d(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),Q=d(()=>Ne(e.optionValue,"value")),P=d(()=>Ne(e.optionLabel,"label")),oe=d(()=>Ne(e.optionDisable,"disable")),Fe=d(()=>i.value.map(Q.value)),Vt=d(()=>{const t={onInput:lt,onChange:ze,onKeydown:Ze,onKeyup:Ge,onKeypress:Je,onFocus:Xe,onClick(a){A===!0&&fe(a)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=ze,t});me(i,t=>{k=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(I.value!==!0&&r.value!==!0||B.value!==!0)&&(H!==!0&&de(),(I.value===!0||r.value===!0)&&re(""))},{immediate:!0}),me(()=>e.fillInput,de),me(r,He),me(D,Tt);function Ue(t){return e.emitValue===!0?Q.value(t):t}function Le(t){if(t!==-1&&t<i.value.length)if(e.multiple===!0){const a=e.modelValue.slice();n("remove",{index:t,value:a.splice(t,1)[0]}),n("update:modelValue",a)}else n("update:modelValue",null)}function Ct(t){Le(t),l.focus()}function We(t,a){const o=Ue(t);if(e.multiple!==!0){e.fillInput===!0&&Ce(P.value(t),!0,!0),n("update:modelValue",o);return}if(i.value.length===0){n("add",{index:0,value:o}),n("update:modelValue",e.multiple===!0?[o]:o);return}if(a===!0&&Re(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const f=e.modelValue.slice();n("add",{index:f.length,value:o}),f.push(o),n("update:modelValue",f)}function le(t,a){if(l.editable.value!==!0||t===void 0||oe.value(t)===!0)return;const o=Q.value(t);if(e.multiple!==!0){a!==!0&&(Ce(e.fillInput===!0?P.value(t):"",!0,!0),ue()),F.value!==null&&F.value.focus(),(i.value.length===0||pe(Q.value(i.value[0]),o)!==!0)&&n("update:modelValue",e.emitValue===!0?o:t);return}if((A!==!0||M.value===!0)&&l.focus(),Xe(),i.value.length===0){const p=e.emitValue===!0?o:t;n("add",{index:0,value:p}),n("update:modelValue",e.multiple===!0?[p]:p);return}const f=e.modelValue.slice(),x=Fe.value.findIndex(p=>pe(p,o));if(x!==-1)n("remove",{index:x,value:f.splice(x,1)[0]});else{if(e.maxValues!==void 0&&f.length>=e.maxValues)return;const p=e.emitValue===!0?o:t;n("add",{index:f.length,value:p}),f.push(p)}n("update:modelValue",f)}function ie(t){if(C.platform.is.desktop!==!0)return;const a=t!==-1&&t<D.value?t:-1;h.value!==a&&(h.value=a)}function Me(t=1,a){if(r.value===!0){let o=h.value;do o=dt(o+t,-1,D.value-1);while(o!==-1&&o!==h.value&&oe.value(e.options[o])===!0);h.value!==o&&(ie(o),ae(o),a!==!0&&e.useInput===!0&&e.fillInput===!0&&Oe(o>=0?P.value(e.options[o]):U,!0))}}function pt(t,a){const o=f=>pe(Q.value(f),t);return e.options.find(o)||a.find(o)||t}function Re(t){const a=Q.value(t);return Fe.value.find(o=>pe(o,a))!==void 0}function Xe(t){e.useInput===!0&&F.value!==null&&(t===void 0||F.value===t.target&&t.target.value===m.value)&&F.value.select()}function Ye(t){Ut(t,27)===!0&&r.value===!0&&(fe(t),ue(),de()),n("keyup",t)}function Ge(t){const{value:a}=t.target;if(t.keyCode!==void 0){Ye(t);return}if(t.target.value="",w!==null&&(clearTimeout(w),w=null),V!==null&&(clearTimeout(V),V=null),de(),typeof a=="string"&&a.length!==0){const o=a.toLocaleLowerCase(),f=p=>{const L=e.options.find(q=>p.value(q).toLocaleLowerCase()===o);return L===void 0?!1:(i.value.indexOf(L)===-1?le(L):ue(),!0)},x=p=>{f(Q)!==!0&&(f(P)===!0||p===!0||re(a,!0,()=>x(!0)))};x()}else l.clearValue(t)}function Je(t){n("keypress",t)}function Ze(t){if(n("keydown",t),Wt(t)===!0)return;const a=g.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),o=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(h.value!==-1||a===!0);if(t.keyCode===27){$e(t);return}if(t.keyCode===9&&o===!1){se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&r.value===!1){ve(t),ce();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&g.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?Le(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&n("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof g.value!="string"||g.value.length===0)&&(ve(t),h.value=-1,Me(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ne.value!==void 0&&(ve(t),h.value=Math.max(-1,Math.min(D.value,h.value+(t.keyCode===33?-1:1)*ne.value.view)),Me(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(ve(t),Me(t.keyCode===38?-1:1,e.multiple));const f=D.value;if((R===void 0||_<Date.now())&&(R=""),f>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||R.length!==0)){r.value!==!0&&ce(t);const x=t.key.toLocaleLowerCase(),p=R.length===1&&R[0]===x;_=Date.now()+1500,p===!1&&(ve(t),R+=x);const L=new RegExp("^"+R.split("").map(De=>cl.indexOf(De)!==-1?"\\"+De:De).join(".*"),"i");let q=h.value;if(p===!0||q<0||L.test(P.value(e.options[q]))!==!0)do q=dt(q+1,-1,f-1);while(q!==h.value&&(oe.value(e.options[q])===!0||L.test(P.value(e.options[q]))!==!0));h.value!==q&&G(()=>{ie(q),ae(q),q>=0&&e.useInput===!0&&e.fillInput===!0&&Oe(P.value(e.options[q]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||R!=="")&&(t.keyCode!==9||o===!1))){if(t.keyCode!==9&&ve(t),h.value!==-1&&h.value<f){le(e.options[h.value]);return}if(a===!0){const x=(p,L)=>{if(L){if(ft(L)!==!0)return}else L=e.newValueMode;if(Ce("",e.multiple!==!0,!0),p==null)return;(L==="toggle"?le:We)(p,L==="add-unique"),e.multiple!==!0&&(F.value!==null&&F.value.focus(),ue())};if(e.onNewValue!==void 0?n("newValue",g.value,x):x(g.value),e.multiple!==!0)return}r.value===!0?se():l.innerLoading.value!==!0&&ce()}}function et(){return A===!0?ge.value:X.value!==null&&X.value.contentEl!==null?X.value.contentEl:void 0}function kt(){return et()}function xt(){return e.hideSelected===!0?[]:u["selected-item"]!==void 0?te.value.map(t=>u["selected-item"](t)).slice():u.selected!==void 0?[].concat(u.selected()):e.useChips===!0?te.value.map((t,a)=>b(ul,{key:"option-"+a,removable:l.editable.value===!0&&oe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:j.value,onRemove(){t.removeAtIndex(a)}},()=>b("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:P.value(t.opt)}))):[b("span",{[qe.value===!0?"innerHTML":"textContent"]:$.value})]}function tt(){if(E.value===!0)return u["no-option"]!==void 0?u["no-option"]({inputValue:g.value}):void 0;const t=u.option!==void 0?u.option:o=>b(Gt,{key:o.index,...o.itemProps},()=>b(Yt,()=>b(nl,()=>b("span",{[o.html===!0?"innerHTML":"textContent"]:o.label}))));let a=Ee("div",_e.value.map(t));return u["before-options"]!==void 0&&(a=u["before-options"]().concat(a)),yt(u["after-options"],a)}function zt(t,a){const o=a===!0?{...Ie.value,...l.splitAttrs.attributes.value}:void 0,f={ref:a===!0?F:void 0,key:"i_t",class:y.value,style:e.inputStyle,value:g.value!==void 0?g.value:"",type:"search",...o,id:a===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...Vt.value};return t!==!0&&A===!0&&(Array.isArray(f.class)===!0?f.class=[...f.class,"no-pointer-events"]:f.class+=" no-pointer-events"),b("input",f)}function lt(t){w!==null&&(clearTimeout(w),w=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Oe(t.target.value||""),H=!0,U=g.value,l.focused.value!==!0&&(A!==!0||M.value===!0)&&l.focus(),e.onFilter!==void 0&&(w=setTimeout(()=>{w=null,re(g.value)},e.inputDebounce)))}function Oe(t,a){g.value!==t&&(g.value=t,a===!0||e.inputDebounce===0||e.inputDebounce==="0"?n("inputValue",t):V=setTimeout(()=>{V=null,n("inputValue",t)},e.inputDebounce))}function Ce(t,a,o){H=o!==!0,e.useInput===!0&&(Oe(t,!0),(a===!0||o!==!0)&&(U=t),a!==!0&&re(t))}function re(t,a,o){if(e.onFilter===void 0||a!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?n("filterAbort"):(l.innerLoading.value=!0,s.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&H!==!0&&t===P.value(i.value[0])&&(t="");const f=setTimeout(()=>{r.value===!0&&(r.value=!1)},10);O!==null&&clearTimeout(O),O=f,n("filter",t,(x,p)=>{(a===!0||l.focused.value===!0)&&O===f&&(clearTimeout(O),typeof x=="function"&&x(),s.value=!1,G(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(a===!0?r.value===!0&&ue():r.value===!0?He(!0):r.value=!0),typeof p=="function"&&G(()=>{p(c)}),typeof o=="function"&&G(()=>{o(c)})}))},()=>{l.focused.value===!0&&O===f&&(clearTimeout(O),l.innerLoading.value=!1,s.value=!1),r.value===!0&&(r.value=!1)})}function At(){return b(al,{ref:X,class:S.value,style:e.popupContentStyle,modelValue:r.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&E.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:z.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Te.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ee.value,onScrollPassive:ye,onBeforeShow:nt,onBeforeHide:qt,onShow:It},tt)}function qt(t){at(t),se()}function It(){be()}function _t(t){fe(t),F.value!==null&&F.value.focus(),M.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Ft(t){fe(t),G(()=>{M.value=!1})}function Mt(){const t=[b(sl,{class:`col-auto ${l.fieldClass.value}`,...v.value,for:l.targetUid.value,dark:z.value,square:!0,loading:s.value,itemAligned:!1,filled:!0,stackLabel:g.value.length!==0,...l.splitAttrs.listeners.value,onFocus:_t,onBlur:Ft},{...u,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return r.value===!0&&t.push(b("div",{ref:ge,class:S.value+" scroll",style:e.popupContentStyle,...ee.value,onClick:$e,onScrollPassive:ye},tt())),b(Xt,{ref:J,modelValue:I.value,position:e.useInput===!0?"top":void 0,transitionShow:W,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:nt,onBeforeHide:Ot,onHide:Bt,onShow:Et},()=>b("div",{class:"q-select__dialog"+(z.value===!0?" q-select__dialog--dark q-dark":"")+(M.value===!0?" q-select__dialog--focused":"")},t))}function Ot(t){at(t),J.value!==null&&J.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Bt(t){ue(),l.focused.value===!1&&n("blur",t),de()}function Et(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&F.value!==null&&F.value!==t&&F.value.focus(),be()}function se(){I.value!==!0&&(h.value=-1,r.value===!0&&(r.value=!1),l.focused.value===!1&&(O!==null&&(clearTimeout(O),O=null),l.innerLoading.value===!0&&(n("filterAbort"),l.innerLoading.value=!1,s.value=!1)))}function ce(t){l.editable.value===!0&&(A===!0?(l.onControlFocusin(t),I.value=!0,G(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?re(g.value):(E.value!==!0||u["no-option"]!==void 0)&&(r.value=!0))}function ue(){I.value=!1,se()}function de(){e.useInput===!0&&Ce(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&P.value(i.value[0])||"",!0,!0)}function He(t){let a=-1;if(t===!0){if(i.value.length!==0){const o=Q.value(i.value[0]);a=e.options.findIndex(f=>pe(Q.value(f),o))}K(a)}ie(a)}function Tt(t,a){r.value===!0&&l.innerLoading.value===!1&&(K(-1,!0),G(()=>{r.value===!0&&l.innerLoading.value===!1&&(t>a?K():He(!0))}))}function ut(){I.value===!1&&X.value!==null&&X.value.updatePosition()}function nt(t){t!==void 0&&fe(t),n("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function at(t){t!==void 0&&fe(t),n("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function ot(){A=C.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?u["no-option"]!==void 0||e.onFilter!==void 0||E.value===!1:!0),W=C.platform.is.ios===!0&&A===!0&&e.useInput===!0?"fade":e.transitionShow}return Kt(ot),jt(ut),ot(),mt(()=>{w!==null&&clearTimeout(w),V!==null&&clearTimeout(V)}),Object.assign(c,{showPopup:ce,hidePopup:ue,removeAtIndex:Le,add:We,toggleOption:le,getOptionIndex:()=>h.value,setOptionIndex:ie,moveOptionSelection:Me,filter:re,updateMenuPosition:ut,updateInputValue:Ce,isOptionSelected:Re,getEmittingOptionValue:Ue,isOptionDisabled:(...t)=>oe.value.apply(null,t)===!0,getOptionValue:(...t)=>Q.value.apply(null,t),getOptionLabel:(...t)=>P.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:d(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:xe,targetRef:F,hasValue:B,showPopup:ce,floatingLabel:d(()=>e.hideSelected!==!0&&B.value===!0||typeof g.value=="number"||g.value.length!==0||it(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(I.value===!0||E.value!==!0||u["no-option"]!==void 0))return A===!0?Mt():At();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{de(),se()})},onClick(t){if($e(t),A!==!0&&r.value===!0){se(),F.value!==null&&F.value.focus();return}ce(t)}},getControl:t=>{const a=xt(),o=t===!0||I.value!==!0||A!==!0;if(e.useInput===!0)a.push(zt(t,o));else if(l.editable.value===!0){const x=o===!0?Ie.value:void 0;a.push(b("input",{ref:o===!0?F:void 0,key:"d_t",class:"q-select__focus-target",id:o===!0?l.targetUid.value:void 0,value:$.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...x,onKeydown:Ze,onKeyup:Ye,onKeypress:Je})),o===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&a.push(b("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ge}))}if(Z.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const x=Fe.value.map(p=>b("option",{value:p,selected:!0}));a.push(b("select",{class:"hidden",name:Z.value,multiple:e.multiple},x))}const f=e.useInput===!0||o!==!0?void 0:l.splitAttrs.attributes.value;return b("div",{class:"q-field__native row items-center",...f,...l.splitAttrs.listeners.value},a)},getInnerAppend:()=>e.loading!==!0&&s.value!==!0&&e.hideDropdownIcon!==!0?[b(Qt,{class:"q-select__dropdown-icon"+(r.value===!0?" rotate-180":""),name:we.value})]:null}),gt(l)}}),fl={xs:2,sm:4,md:6,lg:10,xl:14};function vt(e,u,n){return{transform:u===!0?`translateX(${n.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}const Cl=je({name:"QLinearProgress",props:{...Zt,...el,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:u}){const{proxy:n}=Ke(),c=tl(e,n.$q),C=ll(e,fl),r=d(()=>e.indeterminate===!0||e.query===!0),I=d(()=>e.reverse!==e.query),h=d(()=>({...C.value!==null?C.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),g=d(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),M=d(()=>vt(e.buffer!==void 0?e.buffer:1,I.value,n.$q)),s=d(()=>`with${e.instantFeedback===!0?"out":""}-transition`),w=d(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${c.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),V=d(()=>vt(r.value===!0?1:e.value,I.value,n.$q)),k=d(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${r.value===!0?"in":""}determinate`),A=d(()=>({width:`${e.value*100}%`})),H=d(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${s.value}`);return()=>{const O=[b("div",{class:w.value,style:M.value}),b("div",{class:k.value,style:V.value})];return e.stripe===!0&&r.value===!1&&O.push(b("div",{class:H.value,style:A.value})),b("div",{class:g.value,style:h.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},yt(u.default,O))}}});export{Vl as Q,Cl as a,bl as b,rl as c,gl as d,yl as e,hl as h,wl as p,Be as r,st as u};