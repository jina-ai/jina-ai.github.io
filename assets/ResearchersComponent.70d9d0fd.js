import{Q as de}from"./QTooltip.515d23c9.js";import{k as oe,i,D as Pe,R as Ve,S as Qe,h as g,$ as Xt,C as pe,m as Zt,s as Gt,T as ea,aY as ta,P as ot,aI as aa,bo as We,W as la,aj as te,f as B,w as be,o as na,K as Be,aL as oa,aK as ra,x as sa,B as ia,L as ft,a4 as kt,b4 as ua,b5 as ca,bq as gt,br as da,J as Ct,bs as va,bh as tt,bt as xe,j as X,ap as Ke,bu as fa,e as Pt,a6 as $t,u as ga,am as ma,ao as ba,ab as ie,as as me,aa as n,bv as pa,a8 as r,ai as $,bw as ha,bg as mt,ar as Ae,aT as ya,ak as ve,a9 as z,ag as L,ah as x,ac as je,ad as fe,ae as Y,a7 as ue,af as at,Z as Oe,bf as _a,bc as ge,b7 as Je,at as Sa,bl as wa}from"./index.e9992bea.js";import{Q as qa,a as ka}from"./QTabs.a8aeded6.js";import{b as Le,a as bt,Q as pt}from"./QBtnDropdown.aa3c1df6.js";import{Q as K}from"./QItemLabel.1caa1896.js";import{Q as rt}from"./QList.8c1a599b.js";import{Q as Ca}from"./QBtnGroup.10d26b2f.js";import{u as Pa,a as $a,d as Ta,e as Ra,b as xa,c as Ba,f as Aa}from"./use-fullscreen.6b18ea34.js";import{u as ja,b as Oa,c as Tt,a as La,C as lt}from"./ClosePopup.cb029143.js";import{c as Va}from"./copy-to-clipboard.1f406062.js";import{Q as nt}from"./QChip.f6b21eb1.js";import{Q as Qa}from"./QImg.1eee62f3.js";var ht=oe({name:"QTabPanel",props:Pa,setup(e,{slots:t}){return()=>i("div",{class:"q-tab-panel",role:"tabpanel"},Pe(t.default))}}),Da=oe({name:"QTabPanels",props:{...$a,...Ve},emits:Ta,setup(e,{slots:t}){const o=pe(),u=Qe(e,o.proxy.$q),{updatePanelsList:l,getPanelContent:m,panelDirectives:c}=Ra(),f=g(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(l(t),Xt("div",{class:f.value},m(),"pan",e.swipeable,()=>c.value))}}),Ne=oe({name:"QInnerLoading",props:{...Ve,...Zt,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:t}){const o=pe(),u=Qe(e,o.proxy.$q),{transitionProps:l,transitionStyle:m}=Gt(e),c=g(()=>"q-inner-loading absolute-full column flex-center"+(u.value===!0?" q-inner-loading--dark":"")),f=g(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function b(){const s=[i(ta,{size:e.size,color:e.color})];return e.label!==void 0&&s.push(i("div",{class:f.value,style:e.labelStyle},[e.label])),s}function S(){return e.showing===!0?i("div",{class:c.value,style:m.value},t.default!==void 0?t.default():b()):null}return()=>i(ea,l.value,S)}}),yt=oe({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const o=pe(),u=g(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return i("td",{class:u.value},Pe(t.default));const l=o.vnode.key,m=(e.props.colsMap!==void 0?e.props.colsMap[l]:null)||e.props.col;if(m===void 0)return;const{row:c}=e.props;return i("td",{class:u.value+m.__tdClass(c),style:m.__tdStyle(c)},Pe(t.default))}}});function Ma(e){const t=Object.assign({noopener:!0},e),o=[];for(const u in t){const l=t[u];l===!0?o.push(u):(We(l)||typeof l=="string"&&l!=="")&&o.push(u+"="+l)}return o.join(",")}function _t(e,t,o){let u=window.open;if(ot.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)u=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const l=u(e,"_blank",Ma(o));if(l)return ot.is.desktop&&l.focus(),l;t&&t()}var Ua=(e,t,o)=>{if(ot.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(u=>{u?window.SafariViewController.show({url:e},aa,t):_t(e,t,o)});return}return _t(e,t,o)},za=oe({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:t,emit:o}){const u=pe(),{proxy:{$q:l}}=u,m=c=>{o("click",c)};return()=>{if(e.props===void 0)return i("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:m},Pe(t.default));let c,f;const b=u.vnode.key;if(b){if(c=e.props.colsMap[b],c===void 0)return}else c=e.props.col;if(c.sortable===!0){const s=c.align==="right"?"unshift":"push";f=la(t.default,[]),f[s](i(te,{class:c.__iconClass,name:l.iconSet.table.arrowUp}))}else f=Pe(t.default);const S={class:c.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:c.headerStyle,onClick:s=>{c.sortable===!0&&e.props.sort(c),m(s)}};return i("th",S,f)}}});const Ea=["horizontal","vertical","cell","none"];var Ha=oe({name:"QMarkupTable",props:{...Ve,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Ea.includes(e)}},setup(e,{slots:t}){const o=pe(),u=Qe(e,o.proxy.$q),l=g(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(u.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>i("div",{class:l.value},[i("table",{class:"q-table"},Pe(t.default))])}});function Rt(e,t){return i("div",e,[i("table",{class:"q-table"},t)])}const Ia={list:rt,table:Ha},Na=["list","table","__qtable"];var Fa=oe({name:"QVirtualScroll",props:{...ja,type:{type:String,default:"list",validator:e=>Na.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:t,attrs:o}){let u;const l=B(null),m=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:c,localResetVirtualScroll:f,padVirtualScroll:b,onVirtualScrollEvt:S}=Oa({virtualScrollLength:m,getVirtualScrollTarget:R,getVirtualScrollEl:P}),s=g(()=>{if(m.value===0)return[];const E=(H,j)=>({index:c.value.from+j,item:H});return e.itemsFn===void 0?e.items.slice(c.value.from,c.value.to).map(E):e.itemsFn(c.value.from,c.value.to-c.value.from).map(E)}),w=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),T=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});be(m,()=>{f()}),be(()=>e.scrollTarget,()=>{h(),k()});function P(){return l.value.$el||l.value}function R(){return u}function k(){u=ia(P(),e.scrollTarget),u.addEventListener("scroll",S,ft.passive)}function h(){u!==void 0&&(u.removeEventListener("scroll",S,ft.passive),u=void 0)}function V(){let E=b(e.type==="list"?"div":"tbody",s.value.map(t.default));return t.before!==void 0&&(E=t.before().concat(E)),kt(t.after,E)}return na(()=>{f()}),Be(()=>{k()}),oa(()=>{k()}),ra(()=>{h()}),sa(()=>{h()}),()=>{if(t.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Rt({ref:l,class:"q-table__middle "+w.value},V()):i(Ia[e.type],{...o,ref:l,class:[o.class,w.value],...T.value},V)}}});const Ka={xs:2,sm:4,md:6,lg:10,xl:14};function St(e,t,o){return{transform:t===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var xt=oe({name:"QLinearProgress",props:{...Ve,...ua,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:t}){const{proxy:o}=pe(),u=Qe(e,o.$q),l=ca(e,Ka),m=g(()=>e.indeterminate===!0||e.query===!0),c=g(()=>e.reverse!==e.query),f=g(()=>({...l.value!==null?l.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),b=g(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),S=g(()=>St(e.buffer!==void 0?e.buffer:1,c.value,o.$q)),s=g(()=>`with${e.instantFeedback===!0?"out":""}-transition`),w=g(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${s.value} q-linear-progress__track--${u.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),T=g(()=>St(m.value===!0?1:e.value,c.value,o.$q)),P=g(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${s.value} q-linear-progress__model--${m.value===!0?"in":""}determinate`),R=g(()=>({width:`${e.value*100}%`})),k=g(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${s.value}`);return()=>{const h=[i("div",{class:w.value,style:S.value}),i("div",{class:P.value,style:T.value})];return e.stripe===!0&&m.value===!1&&h.push(i("div",{class:k.value,style:R.value})),i("div",{class:b.value,style:f.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},kt(t.default,h))}}});function Ja(e,t){return new Date(e)-new Date(t)}const Wa={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Ya(e,t,o,u){const l=g(()=>{const{sortBy:f}=t.value;return f&&o.value.find(b=>b.name===f)||null}),m=g(()=>e.sortMethod!==void 0?e.sortMethod:(f,b,S)=>{const s=o.value.find(P=>P.name===b);if(s===void 0||s.field===void 0)return f;const w=S===!0?-1:1,T=typeof s.field=="function"?P=>s.field(P):P=>P[s.field];return f.sort((P,R)=>{let k=T(P),h=T(R);return k==null?-1*w:h==null?1*w:s.sort!==void 0?s.sort(k,h,P,R)*w:We(k)===!0&&We(h)===!0?(k-h)*w:gt(k)===!0&&gt(h)===!0?Ja(k,h)*w:typeof k=="boolean"&&typeof h=="boolean"?(k-h)*w:([k,h]=[k,h].map(V=>(V+"").toLocaleString().toLowerCase()),k<h?-1*w:k===h?0:w)})});function c(f){let b=e.columnSortOrder;if(da(f)===!0)f.sortOrder&&(b=f.sortOrder),f=f.name;else{const w=o.value.find(T=>T.name===f);w!==void 0&&w.sortOrder&&(b=w.sortOrder)}let{sortBy:S,descending:s}=t.value;S!==f?(S=f,s=b==="da"):e.binaryStateSort===!0?s=!s:s===!0?b==="ad"?S=null:s=!1:b==="ad"?s=!0:S=null,u({sortBy:S,descending:s,page:1})}return{columnToSort:l,computedSortMethod:m,sort:c}}const Xa={filter:[String,Object],filterMethod:Function};function Za(e,t){const o=g(()=>e.filterMethod!==void 0?e.filterMethod:(u,l,m,c)=>{const f=l?l.toLowerCase():"";return u.filter(b=>m.some(S=>{const s=c(S,b)+"";return(s==="undefined"||s==="null"?"":s.toLowerCase()).indexOf(f)!==-1}))});return be(()=>e.filter,()=>{Ct(()=>{t({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function Ga(e,t){for(const o in t)if(t[o]!==e[o])return!1;return!0}function wt(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const el={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function tl(e,t){const{props:o,emit:u}=e,l=B(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length>0?o.rowsPerPageOptions[0]:5},o.pagination)),m=g(()=>{const s=o["onUpdate:pagination"]!==void 0?{...l.value,...o.pagination}:l.value;return wt(s)}),c=g(()=>m.value.rowsNumber!==void 0);function f(s){b({pagination:s,filter:o.filter})}function b(s={}){Ct(()=>{u("request",{pagination:s.pagination||m.value,filter:s.filter||o.filter,getCellValue:t})})}function S(s,w){const T=wt({...m.value,...s});if(Ga(m.value,T)===!0){c.value===!0&&w===!0&&f(T);return}if(c.value===!0){f(T);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?u("update:pagination",T):l.value=T}return{innerPagination:l,computedPagination:m,isServerSide:c,requestServerInteraction:b,setPagination:S}}function al(e,t,o,u,l,m){const{props:c,emit:f,proxy:{$q:b}}=e,S=g(()=>u.value===!0?o.value.rowsNumber||0:m.value),s=g(()=>{const{page:j,rowsPerPage:D}=o.value;return(j-1)*D}),w=g(()=>{const{page:j,rowsPerPage:D}=o.value;return j*D}),T=g(()=>o.value.page===1),P=g(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/o.value.rowsPerPage))),R=g(()=>w.value===0?!0:o.value.page>=P.value),k=g(()=>(c.rowsPerPageOptions.includes(t.value.rowsPerPage)?c.rowsPerPageOptions:[t.value.rowsPerPage].concat(c.rowsPerPageOptions)).map(D=>({label:D===0?b.lang.table.allRows:""+D,value:D})));be(P,(j,D)=>{if(j===D)return;const he=o.value.page;j&&!he?l({page:1}):j<he&&l({page:j})});function h(){l({page:1})}function V(){const{page:j}=o.value;j>1&&l({page:j-1})}function E(){const{page:j,rowsPerPage:D}=o.value;w.value>0&&j*D<S.value&&l({page:j+1})}function H(){l({page:P.value})}return c["onUpdate:pagination"]!==void 0&&f("update:pagination",{...o.value}),{firstRowIndex:s,lastRowIndex:w,isFirstPage:T,isLastPage:R,pagesNumber:P,computedRowsPerPageOptions:k,computedRowsNumber:S,firstPage:h,prevPage:V,nextPage:E,lastPage:H}}const ll={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},nl=["update:selected","selection"];function ol(e,t,o,u){const l=g(()=>{const R={};return e.selected.map(u.value).forEach(k=>{R[k]=!0}),R}),m=g(()=>e.selection!=="none"),c=g(()=>e.selection==="single"),f=g(()=>e.selection==="multiple"),b=g(()=>o.value.length>0&&o.value.every(R=>l.value[u.value(R)]===!0)),S=g(()=>b.value!==!0&&o.value.some(R=>l.value[u.value(R)]===!0)),s=g(()=>e.selected.length);function w(R){return l.value[R]===!0}function T(){t("update:selected",[])}function P(R,k,h,V){t("selection",{rows:k,added:h,keys:R,evt:V});const E=c.value===!0?h===!0?k:[]:h===!0?e.selected.concat(k):e.selected.filter(H=>R.includes(u.value(H))===!1);t("update:selected",E)}return{hasSelectionMode:m,singleSelection:c,multipleSelection:f,allRowsSelected:b,someRowsSelected:S,rowsSelectedNumber:s,isRowSelected:w,clearSelection:T,updateSelection:P}}function qt(e){return Array.isArray(e)?e.slice():[]}const rl={expanded:Array},sl=["update:expanded"];function il(e,t){const o=B(qt(e.expanded));be(()=>e.expanded,c=>{o.value=qt(c)});function u(c){return o.value.includes(c)}function l(c){e.expanded!==void 0?t("update:expanded",c):o.value=c}function m(c,f){const b=o.value.slice(),S=b.indexOf(c);f===!0?S===-1&&(b.push(c),l(b)):S!==-1&&(b.splice(S,1),l(b))}return{isRowExpanded:u,setExpanded:l,updateExpanded:m}}const ul={visibleColumns:Array};function cl(e,t,o){const u=g(()=>{if(e.columns!==void 0)return e.columns;const f=e.rows[0];return f!==void 0?Object.keys(f).map(b=>({name:b,label:b.toUpperCase(),field:b,align:We(f[b])?"right":"left",sortable:!0})):[]}),l=g(()=>{const{sortBy:f,descending:b}=t.value;return(e.visibleColumns!==void 0?u.value.filter(s=>s.required===!0||e.visibleColumns.includes(s.name)===!0):u.value).map(s=>{const w=s.align||"right",T=`text-${w}`;return{...s,align:w,__iconClass:`q-table__sort-icon q-table__sort-icon--${w}`,__thClass:T+(s.headerClasses!==void 0?" "+s.headerClasses:"")+(s.sortable===!0?" sortable":"")+(s.name===f?` sorted ${b===!0?"sort-desc":""}`:""),__tdStyle:s.style!==void 0?typeof s.style!="function"?()=>s.style:s.style:()=>null,__tdClass:s.classes!==void 0?typeof s.classes!="function"?()=>T+" "+s.classes:P=>T+" "+s.classes(P):()=>T}})}),m=g(()=>{const f={};return l.value.forEach(b=>{f[b.name]=b}),f}),c=g(()=>e.tableColspan!==void 0?e.tableColspan:l.value.length+(o.value===!0?1:0));return{colList:u,computedCols:l,computedColsMap:m,computedColspan:c}}const Fe="q-table__bottom row items-center",Bt={};Tt.forEach(e=>{Bt[e]={}});var dl=oe({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Bt,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...Ve,...xa,...ul,...Xa,...el,...rl,...ll,...Wa},emits:["request","virtualScroll",...Ba,...sl,...nl],setup(e,{slots:t,emit:o}){const u=pe(),{proxy:{$q:l}}=u,m=Qe(e,l),{inFullscreen:c,toggleFullscreen:f}=Aa(),b=g(()=>typeof e.rowKey=="function"?e.rowKey:a=>a[e.rowKey]),S=B(null),s=B(null),w=g(()=>e.grid!==!0&&e.virtualScroll===!0),T=g(()=>" q-table__card"+(m.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":T.value)+(m.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(c.value===!0?" fullscreen scroll":"")),R=g(()=>P.value+(e.loading===!0?" q-table--loading":""));be(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{w.value===!0&&s.value!==null&&s.value.reset()});const{innerPagination:k,computedPagination:h,isServerSide:V,requestServerInteraction:E,setPagination:H}=tl(u,qe),{computedFilterMethod:j}=Za(e,H),{isRowExpanded:D,setExpanded:he,updateExpanded:ye}=il(e,o),ae=g(()=>{let a=e.rows;if(V.value===!0||a.length===0)return a;const{sortBy:d,descending:_}=h.value;return e.filter&&(a=j.value(a,e.filter,F.value,qe)),Ze.value!==null&&(a=$e.value(e.rows===a?a.slice():a,d,_)),a}),De=g(()=>ae.value.length),G=g(()=>{let a=ae.value;if(V.value===!0)return a;const{rowsPerPage:d}=h.value;return d!==0&&(se.value===0&&e.rows!==a?a.length>we.value&&(a=a.slice(0,we.value)):a=a.slice(se.value,we.value)),a}),{hasSelectionMode:re,singleSelection:_e,multipleSelection:Z,allRowsSelected:le,someRowsSelected:Me,rowsSelectedNumber:U,isRowSelected:J,clearSelection:Ye,updateSelection:W}=ol(e,o,G,b),{colList:Xe,computedCols:F,computedColsMap:Ue,computedColspan:ze}=cl(e,h,re),{columnToSort:Ze,computedSortMethod:$e,sort:Se}=Ya(e,h,Xe,H),{firstRowIndex:se,lastRowIndex:we,isFirstPage:Te,isLastPage:v,pagesNumber:p,computedRowsPerPageOptions:M,computedRowsNumber:y,firstPage:Q,prevPage:I,nextPage:ce,lastPage:Re}=al(u,k,h,V,H,De),Ot=g(()=>G.value.length===0),Lt=g(()=>{const a={};return Tt.forEach(d=>{a[d]=e[d]}),a.virtualScrollItemSize===void 0&&(a.virtualScrollItemSize=e.dense===!0?28:48),a});function Vt(){w.value===!0&&s.value.reset()}function Qt(){if(e.grid===!0)return Wt();const a=e.hideHeader!==!0?dt:null;if(w.value===!0){const _=t["top-row"],q=t["bottom-row"],C={default:O=>it(O.item,t.body,O.index)};if(_!==void 0){const O=i("tbody",_({cols:F.value}));C.before=a===null?()=>O:()=>[a()].concat(O)}else a!==null&&(C.before=a);return q!==void 0&&(C.after=()=>i("tbody",q({cols:F.value}))),i(Fa,{ref:s,class:e.tableClass,style:e.tableStyle,...Lt.value,scrollTarget:e.virtualScrollTarget,items:G.value,type:"__qtable",tableColspan:ze.value,onVirtualScroll:Mt},C)}const d=[Ut()];return a!==null&&d.unshift(a()),Rt({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},d)}function Dt(a,d){if(s.value!==null){s.value.scrollTo(a,d);return}a=parseInt(a,10);const _=S.value.querySelector(`tbody tr:nth-of-type(${a+1})`);if(_!==null){const q=S.value.querySelector(".q-table__middle.scroll"),C=_.offsetTop-e.virtualScrollStickySizeStart,O=C<q.scrollTop?"decrease":"increase";q.scrollTop=C,o("virtualScroll",{index:a,from:0,to:k.value.rowsPerPage-1,direction:O})}}function Mt(a){o("virtualScroll",a)}function st(){return[i(xt,{class:"q-table__linear-progress",color:e.color,dark:m.value,indeterminate:!0,trackColor:"transparent"})]}function it(a,d,_){const q=b.value(a),C=J(q);if(d!==void 0)return d(ut({key:q,row:a,pageIndex:_,__trClass:C?"selected":""}));const O=t["body-cell"],A=F.value.map(N=>{const He=t[`body-cell-${N.name}`],Ie=He!==void 0?He:O;return Ie!==void 0?Ie(zt({key:q,row:a,pageIndex:_,col:N})):i("td",{class:N.__tdClass(a),style:N.__tdStyle(a)},qe(N,a))});if(re.value===!0){const N=t["body-selection"],He=N!==void 0?N(Et({key:q,row:a,pageIndex:_})):[i(tt,{modelValue:C,color:e.color,dark:m.value,dense:e.dense,"onUpdate:modelValue":(Ie,Yt)=>{W([q],[a],Ie,Yt)}})];A.unshift(i("td",{class:"q-table--col-auto-width"},He))}const ne={key:q,class:{selected:C}};return e.onRowClick!==void 0&&(ne.class["cursor-pointer"]=!0,ne.onClick=N=>{o("RowClick",N,a,_)}),e.onRowDblclick!==void 0&&(ne.class["cursor-pointer"]=!0,ne.onDblclick=N=>{o("RowDblclick",N,a,_)}),e.onRowContextmenu!==void 0&&(ne.class["cursor-pointer"]=!0,ne.onContextmenu=N=>{o("RowContextmenu",N,a,_)}),i("tr",ne,A)}function Ut(){const a=t.body,d=t["top-row"],_=t["bottom-row"];let q=G.value.map((C,O)=>it(C,a,O));return d!==void 0&&(q=d({cols:F.value}).concat(q)),_!==void 0&&(q=q.concat(_({cols:F.value}))),i("tbody",q)}function ut(a){return Ge(a),a.cols=a.cols.map(d=>xe({...d},"value",()=>qe(d,a.row))),a}function zt(a){return Ge(a),xe(a,"value",()=>qe(a.col,a.row)),a}function Et(a){return Ge(a),a}function Ge(a){Object.assign(a,{cols:F.value,colsMap:Ue.value,sort:Se,rowIndex:se.value+a.pageIndex,color:e.color,dark:m.value,dense:e.dense}),re.value===!0&&xe(a,"selected",()=>J(a.key),(d,_)=>{W([a.key],[a.row],d,_)}),xe(a,"expand",()=>D(a.key),d=>{ye(a.key,d)})}function qe(a,d){const _=typeof a.field=="function"?a.field(d):d[a.field];return a.format!==void 0?a.format(_,d):_}const ke=g(()=>({pagination:h.value,pagesNumber:p.value,isFirstPage:Te.value,isLastPage:v.value,firstPage:Q,prevPage:I,nextPage:ce,lastPage:Re,inFullscreen:c.value,toggleFullscreen:f}));function Ht(){const a=t.top,d=t["top-left"],_=t["top-right"],q=t["top-selection"],C=re.value===!0&&q!==void 0&&U.value>0,O="q-table__top relative-position row items-center";if(a!==void 0)return i("div",{class:O},[a(ke.value)]);let A;if(C===!0?A=q(ke.value).slice():(A=[],d!==void 0?A.push(i("div",{class:"q-table-control"},[d(ke.value)])):e.title&&A.push(i("div",{class:"q-table__control"},[i("div",{class:["q-table__title",e.titleClass]},e.title)]))),_!==void 0&&(A.push(i("div",{class:"q-table__separator col"})),A.push(i("div",{class:"q-table__control"},[_(ke.value)]))),A.length!==0)return i("div",{class:O},A)}const ct=g(()=>Me.value===!0?null:le.value);function dt(){const a=It();return e.loading===!0&&t.loading===void 0&&a.push(i("tr",{class:"q-table__progress"},[i("th",{class:"relative-position",colspan:ze.value},st())])),i("thead",a)}function It(){const a=t.header,d=t["header-cell"];if(a!==void 0)return a(et({header:!0})).slice();const _=F.value.map(q=>{const C=t[`header-cell-${q.name}`],O=C!==void 0?C:d,A=et({col:q});return O!==void 0?O(A):i(za,{key:q.name,props:A},()=>q.label)});if(_e.value===!0&&e.grid!==!0)_.unshift(i("th",{class:"q-table--col-auto-width"}," "));else if(Z.value===!0){const q=t["header-selection"],C=q!==void 0?q(et({})):[i(tt,{color:e.color,modelValue:ct.value,dark:m.value,dense:e.dense,"onUpdate:modelValue":vt})];_.unshift(i("th",{class:"q-table--col-auto-width"},C))}return[i("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},_)]}function et(a){return Object.assign(a,{cols:F.value,sort:Se,colsMap:Ue.value,color:e.color,dark:m.value,dense:e.dense}),Z.value===!0&&xe(a,"selected",()=>ct.value,vt),a}function vt(a){Me.value===!0&&(a=!1),W(G.value.map(b.value),G.value,a)}const Ee=g(()=>{const a=[e.iconFirstPage||l.iconSet.table.firstPage,e.iconPrevPage||l.iconSet.table.prevPage,e.iconNextPage||l.iconSet.table.nextPage,e.iconLastPage||l.iconSet.table.lastPage];return l.lang.rtl===!0?a.reverse():a});function Nt(){if(e.hideBottom===!0)return;if(Ot.value===!0){if(e.hideNoData===!0)return;const _=e.loading===!0?e.loadingLabel||l.lang.table.loading:e.filter?e.noResultsLabel||l.lang.table.noResults:e.noDataLabel||l.lang.table.noData,q=t["no-data"],C=q!==void 0?[q({message:_,icon:l.iconSet.table.warning,filter:e.filter})]:[i(te,{class:"q-table__bottom-nodata-icon",name:l.iconSet.table.warning}),_];return i("div",{class:Fe+" q-table__bottom--nodata"},C)}const a=t.bottom;if(a!==void 0)return i("div",{class:Fe},[a(ke.value)]);const d=e.hideSelectedBanner!==!0&&re.value===!0&&U.value>0?[i("div",{class:"q-table__control"},[i("div",[(e.selectedRowsLabel||l.lang.table.selectedRecords)(U.value)])])]:[];if(e.hidePagination!==!0)return i("div",{class:Fe+" justify-end"},Kt(d));if(d.length>0)return i("div",{class:Fe},d)}function Ft(a){H({page:1,rowsPerPage:a.value})}function Kt(a){let d;const{rowsPerPage:_}=h.value,q=e.paginationLabel||l.lang.table.pagination,C=t.pagination,O=e.rowsPerPageOptions.length>1;if(a.push(i("div",{class:"q-table__separator col"})),O===!0&&a.push(i("div",{class:"q-table__control"},[i("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||l.lang.table.recordsPerPage]),i(La,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:_,options:M.value,displayValue:_===0?l.lang.table.allRows:_,dark:m.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":Ft})])),C!==void 0)d=C(ke.value);else if(d=[i("span",_!==0?{class:"q-table__bottom-item"}:{},[_?q(se.value+1,Math.min(we.value,y.value),y.value):q(1,De.value,y.value)])],_!==0&&p.value>1){const A={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(A.size="sm"),p.value>2&&d.push(i(X,{key:"pgFirst",...A,icon:Ee.value[0],disable:Te.value,onClick:Q})),d.push(i(X,{key:"pgPrev",...A,icon:Ee.value[1],disable:Te.value,onClick:I}),i(X,{key:"pgNext",...A,icon:Ee.value[2],disable:v.value,onClick:ce})),p.value>2&&d.push(i(X,{key:"pgLast",...A,icon:Ee.value[3],disable:v.value,onClick:Re}))}return a.push(i("div",{class:"q-table__control"},d)),a}function Jt(){const a=e.gridHeader===!0?[i("table",{class:"q-table"},[dt()])]:e.loading===!0&&t.loading===void 0?st():void 0;return i("div",{class:"q-table__middle"},a)}function Wt(){const a=t.item!==void 0?t.item:d=>{const _=d.cols.map(C=>i("div",{class:"q-table__grid-item-row"},[i("div",{class:"q-table__grid-item-title"},[C.label]),i("div",{class:"q-table__grid-item-value"},[C.value])]));if(re.value===!0){const C=t["body-selection"],O=C!==void 0?C(d):[i(tt,{modelValue:d.selected,color:e.color,dark:m.value,dense:e.dense,"onUpdate:modelValue":(A,ne)=>{W([d.key],[d.row],A,ne)}})];_.unshift(i("div",{class:"q-table__grid-item-row"},O),i(Ke,{dark:m.value}))}const q={class:["q-table__grid-item-card"+T.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(q.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(q.onClick=C=>{o("RowClick",C,d.row,d.pageIndex)}),e.onRowDblclick!==void 0&&(q.onDblclick=C=>{o("RowDblclick",C,d.row,d.pageIndex)})),i("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(d.selected===!0?" q-table__grid-item--selected":"")},[i("div",q,_)])};return i("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},G.value.map((d,_)=>a(ut({key:b.value(d),row:d,pageIndex:_}))))}return Object.assign(u.proxy,{requestServerInteraction:E,setPagination:H,firstPage:Q,prevPage:I,nextPage:ce,lastPage:Re,isRowSelected:J,clearSelection:Ye,isRowExpanded:D,setExpanded:he,sort:Se,resetVirtualScroll:Vt,scrollTo:Dt,getCellValue:qe}),va(u.proxy,{filteredSortedRows:()=>ae.value,computedRows:()=>G.value,computedRowsNumber:()=>y.value}),()=>{const a=[Ht()],d={ref:S,class:R.value};return e.grid===!0?a.push(Jt()):Object.assign(d,{class:[d.class,e.cardClass],style:e.cardStyle}),a.push(Qt(),Nt()),e.loading===!0&&t.loading!==void 0&&a.push(t.loading()),i("div",d,a)}}});const Ce="https://embeddings-dashboard-api.jina.ai";var At=(e=>(e.CONSUME="consume",e.PURCHASE="purchase",e.TRIAL="trial",e))(At||{});const vl=fa("embedding",{state:()=>({apiKey:"",models:[],products:[]}),persist:{paths:["apiKey"]},getters:{},actions:{async getApiKey(){try{const e=await fetch(`${Ce}/api/v1/api_key`,{method:"POST"});if(!e.ok)throw new Error(`getApiKey error! Status: ${e.status}`);const t=await e.json();return this.apiKey=t.api_key,!0}catch(e){return console.error("getApiKey error:",e),!1}},async getTokens(e){try{const t=await fetch(`${Ce}/api/v1/api_key/user?api_key=${e}`);if(!t.ok)throw new Error(`getTokens error! Status: ${t.status}`);return(await t.json()).wallet.total_balance}catch(t){console.error("getTokens error:",t)}},async getModels(){try{const e=await fetch(`${Ce}/api/v1/models`);if(!e.ok)throw new Error(`getModels error! Status: ${e.status}`);const t=await e.json();this.models=t}catch(e){console.error("getModels error:",e)}},async getProducts(){try{const e=await fetch(`${Ce}/api/v1/product`);if(!e.ok)throw new Error(`getProducts error! Status: ${e.status}`);const t=await e.json();this.products=t}catch(e){console.error("getProducts error:",e)}},async getUsage(e){try{const t=await fetch(`${Ce}/api/v1/billing/transaction`,{headers:{Authorization:`Bearer ${e}`}});if(!t.ok)throw new Error(`getUsage error! Status: ${t.status}`);return await t.json()}catch(t){console.error("getUsage error:",t)}},async checkoutWithStripe(e,t){try{const o=await fetch(`${Ce}/api/v1/checkout_session`,{headers:{Authorization:`Bearer ${e}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t),mode:"cors",credentials:"include"});if(!o.ok)throw new Error(`checkoutWithStripe error! Status: ${o.status}`);return await o.json()}catch(o){console.error("checkoutWithStripe error:",o)}}}}),fl={class:"full-width"},gl=me("span",{class:"q-focus-helper"},null,-1),ml={class:"text-h6"};var jt=(e=>(e.CURL="curl",e.PYTHON="Python",e.JAVASCRIPT="JavaScript",e.RUBY="Ruby",e.PHP="PHP",e.JAVA="Java",e.NODEJS="Node.js",e.GO="Go",e.C_SHARP="C#",e.RUST="Rust",e))(jt||{});const ee="https://api.jina.ai/v1/embeddings",Al=Pt({__name:"EmbeddingComponent",setup(e){const{t}=$t({useScope:"global"}),o=ga(),u=vl(),{apiKey:l,models:m,products:c}=ma(u),f=B(!1),b=async()=>{if(f.value)return;f.value=!0;const v=await u.getApiKey();f.value=!1,v?(U.value=l.value,V.value=!1):o.notify({message:t("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};Be(()=>{l.value||b()});const S=B(!1),s=()=>{!l.value||S.value||(Va(l.value).then(()=>{o.notify({message:t("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),S.value=!0}),setTimeout(()=>{S.value=!1},1800))},w=B(0),T=B(!1),P=B(!1),R=async v=>{T.value=!0,P.value=!1;const p=await u.getTokens(v);if(T.value=!1,p===void 0){P.value=!0;return}w.value=p,k.value=w.value};Be(()=>{!l.value||R(l.value)}),be(l,v=>{!v||R(v)});const k=B(0),h=B(!1),V=B(!1),E=async v=>{h.value=!0,V.value=!1;const p=await u.getTokens(v);if(h.value=!1,p===void 0){V.value=!0;return}k.value=p,l.value=v},H=v=>new Intl.NumberFormat("en").format(v),j=[{name:0,label:"embedding.code",icon:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart"}],D=B(0),he=v=>{v===1&&(U.value||(V.value=P.value,P.value||(U.value=l.value,k.value=w.value)))},ye=B(!1),ae=B();Be(()=>{De()});const De=async()=>{ye.value=!0,await u.getModels(),ye.value=!1,m.value.length>0&&(ae.value=m.value.find(v=>v.rank===1)||m.value[1])},G=v=>{ae.value=v},re=v=>{Ua(`https://huggingface.co/jinaai/${v}`,void 0,{})},_e=B("curl"),Z=["Your text string goes here","You can send multiple texts"],le=`["${Z[0]}", "${Z[1]}"]`,Me=g(()=>{var M;const v=l.value||"$JINA_API_KEY",p=((M=ae.value)==null?void 0:M.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${ee} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${v}" \\
  -d '{
    "input": ${le},
    "model": "${p}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${ee}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${v}'
}

data = {
  'input': ${le},
  'model': '${p}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${ee}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${v}",
};

const data = {
  input: '${le}',
  model: '${p}',
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
\`\`\`
    `,Ruby:`
\`\`\`rb
require 'net/http'
require 'json'
require 'uri'

uri = URI.parse("${ee}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${v}'
}

data = {
  'input' => ${le},
  'model' => '${p}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${ee}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${v}"
);

$data = array(
    "input" => array("${Z[0]}", "${Z[1]}"),
    "model" => "${p}"
);

$options = array(
    'http' => array(
        'method'  => 'POST',
        'header'  => $headers,
        'content' => json_encode($data)
    )
);

$context  = stream_context_create($options);
$response = file_get_contents($url, false, $context);

echo $response;
?>
\`\`\`
    `,Java:`
\`\`\`java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;

public class JinaAPIRequest {
    public static void main(String[] args) throws Exception {
        String url = "${ee}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${v}");

        con.setDoOutput(true);
        String data = "{"input": ["${Z[0]}", "${Z[1]}"],"model": "${p}"}";

        try(OutputStream os = con.getOutputStream()) {
            byte[] input = data.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        int responseCode = con.getResponseCode();
        System.out.println("Response Code: " + responseCode);
    }
}
\`\`\`
    `,["Node.js"]:`
\`\`\`js
const https = require('https');

const url = "${ee}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${v}',
  }
};

const data = {
  input: ${le},
  model: '${p}'
};

const req = https.request(url, options, (res) => {
  res.on('data', (chunk) => {
    console.log(\`BODY: \${chunk}\`);
  });
});

req.write(JSON.stringify(data));
req.end();
\`\`\`
    `,Go:`
\`\`\`go
package main

import (
	"bytes"
	"fmt"
	"net/http"
)

func main() {
	url := "${ee}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${v}",
	}

	data := \`{
		"input": ${le},
		"model": "${p}"
	}\`

	resp, err := makeRequest(url, headers, data)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}
	fmt.Println("Response:", resp)
}

func makeRequest(url string, headers map[string]string, data string) (string, error) {
	client := &http.Client{}
	req, err := http.NewRequest("POST", url, bytes.NewBuffer([]byte(data)))
	if err != nil {
		return "", err
	}

	for key, value := range headers {
		req.Header.Set(key, value)
	}

	resp, err := client.Do(req)
	if err != nil {
		return "", err
	}
	defer resp.Body.Close()

	buf := new(bytes.Buffer)
	buf.ReadFrom(resp.Body)
	return buf.String(), nil
}
\`\`\`
    `,["C#"]:`
\`\`\`csharp
using System;
using System.Net.Http;
using System.Text;

class Program
{
    static void Main()
    {
        string url = "${ee}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${v}");

        string data = @"{
            ""input"": [""${Z[0]}"", ""${Z[1]}""],
            ""model"": ""${p}""
        }";

        var response = client.PostAsync(url, new StringContent(data, Encoding.UTF8, "application/json")).Result;
        Console.WriteLine(response.Content.ReadAsStringAsync().Result);
    }
}
\`\`\`
    `,Rust:`
\`\`\`rust
use reqwest;

fn main() -> Result<(), reqwest::Error> {
    let client = reqwest::blocking::Client::new();

    let res = client.post("${ee}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${v}")
        .body(r#"{
            "input": ${le},
            "model": "${p}"
        }"#)
        .send()?;

    if res.status().is_success() {
        println!("{}", res.text()?);
    } else {
        eprintln!("Failed: {}", res.status());
    }

    Ok(())
}
\`\`\`
    `}}),U=B(""),J=g(()=>!!U.value&&U.value.length===l.value.length&&!V.value),Ye=v=>{if(!(!v||typeof v=="number"||v.length!==l.value.length)){if(v===l.value){k.value=w.value,V.value=P.value;return}E(v)}};Be(()=>{c.value.length||u.getProducts()});const W=B(""),Xe=async v=>{if(!J.value||h.value||W.value)return;const p=window.location.href,M=p.includes("#")?p:p+"#enterprises";W.value=v;const y=await u.checkoutWithStripe(U.value,{price_id:v,success_url:M,cancel_url:M});W.value="",y&&(window.location.href=y.url)},F=B(!1),Ue=()=>{!J.value||h.value||(F.value=!0)},ze=()=>{var v;(v=Se.value)==null||v.requestServerInteraction()},Ze=()=>{se.value=[]},$e=B(!1),Se=B(null),se=B([]),we=B([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:t("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:v=>{if(typeof v=="string")return new Date(v).toLocaleString();if(v instanceof Date)return v.toLocaleString();if(v)return v.toDate().toLocaleString()}},{name:"amount",label:t("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:v=>v>0?`+${v}`:`${v}`},{name:"reason",label:t("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),Te=async v=>{$e.value=!0;const p=await u.getUsage(U.value);$e.value=!1,!(!p||p.length===0)&&(se.value=p.map(M=>{const y=new Date(M.updated_at);let Q=M.quantity,I=t(`embedding.usage_reason_${M.type}`);return M.type===At.CONSUME?(Q=-Q,M.metadata.model_name&&(I=I+": "+M.metadata.model_name)):M.metadata.product_name&&(I=I+": "+M.metadata.product_name),{createdAt:y,amount:Q,reason:I}}),R(U.value))};return(v,p)=>{const M=ba("q-markdown");return z(),ie(ve,null,[me("div",fl,[n(mt,{modelValue:$(l),"onUpdate:modelValue":p[0]||(p[0]=y=>ha(l)?l.value=y:null),label:$(t)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:f.value,disable:f.value,"input-style":"font-family: monospace;",hint:$(t)("embedding.key_warn_v2")},pa({prepend:r(()=>[n(X,{flat:"",round:"",icon:"refresh",onClick:b},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[f.value?void 0:{name:"append",fn:r(()=>[n(X,{flat:"",round:"",icon:S.value?"done":"content_copy",color:S.value?"positive":"",onClick:s},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),n(Ae,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:r(()=>[n(qa,{modelValue:D.value,"onUpdate:modelValue":p[1]||(p[1]=y=>D.value=y),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:r(()=>[(z(),ie(ve,null,je(j,y=>n(ka,{key:y.name,name:y.name,label:$(t)(y.label),icon:y.icon},null,8,["name","label","icon"])),64)),n(Le),n(X,{label:$(t)("faq"),icon:"help_outline",href:"embeddings#faq",stretch:""},null,8,["label"])]),_:1},8,["modelValue"]),n(Ke),n(Da,{modelValue:D.value,"onUpdate:modelValue":p[5]||(p[5]=y=>D.value=y),animated:"",onBeforeTransition:he},{default:r(()=>[n(ht,{name:0},{default:r(()=>[n(bt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:r(()=>[n(fe,null,{default:r(()=>[n(Y,{avatar:""},{default:r(()=>[n(te,{name:"help_outline",class:"cursor-pointer"},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1}),n(Y,null,{default:r(()=>[n(K,{overline:"",class:"row items-center"},{default:r(()=>[L(x($(t)("embedding.remaining")),1)]),_:1}),P.value?at("",!0):(z(),ue(K,{key:0},{default:r(()=>[L(x(H(w.value)),1)]),_:1}))]),_:1}),n(Ne,{showing:T.value},null,8,["showing"])]),_:1}),n(X,{flat:"",icon:"sync",class:"q-ml-sm",onClick:p[2]||(p[2]=y=>R($(l)))},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.refresh_token_count")),1)]),_:1})]),_:1}),n(Le),n(Ca,{flat:"",square:"",stretch:""},{default:r(()=>{var y;return[n(pt,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",label:(y=ae.value)==null?void 0:y.name,loading:ye.value,"disable-dropdown":ye.value},{default:r(()=>[n(rt,null,{default:r(()=>[(z(!0),ie(ve,null,je($(m),(Q,I)=>{var ce;return Oe((z(),ue(fe,{key:I,clickable:"",active:Q.name===((ce=ae.value)==null?void 0:ce.name),onClick:Re=>G(Q),class:"q-pa-lg"},{default:r(()=>[n(Y,null,{default:r(()=>[n(K,null,{default:r(()=>[L(x(Q.name),1)]),_:2},1024),n(K,{caption:"",class:"row justify-between"},{default:r(()=>[me("span",null,x($(t)("embedding.size"))+": "+x(Q.meta_data.size),1),me("span",null,x($(t)("embedding.output_dim"))+": "+x(Q.meta_data.output_dim),1)]),_:2},1024)]),_:2},1024),n(Y,{side:"",top:""},{default:r(()=>[n(X,{flat:"",size:"xs",icon:"launch",onClick:_a(Re=>re(Q.name),["stop"])},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[Je],[lt]])}),128))]),_:1})]),_:1},8,["label","loading","disable-dropdown"]),n(pt,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",label:_e.value},{default:r(()=>[n(rt,null,{default:r(()=>[(z(),ie(ve,null,je(jt,(Q,I)=>Oe(n(fe,{key:I,clickable:"",active:Q===_e.value,"active-class":"text-primary bg-grey-10",onClick:ce=>_e.value=Q},{default:r(()=>[n(Y,null,{default:r(()=>[n(K,null,{default:r(()=>[L(x(Q),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Je],[lt]])),64))]),_:1})]),_:1},8,["label"])]}),_:1})]),_:1}),n(Ke),n(M,{src:Me.value[_e.value],"show-copy":"",class:"q-pa-lg","no-line-numbers":"","copy-tooltip-text":$(t)("copy"),"copy-response-text":$(t)("copy_to_clipboard_success")},null,8,["src","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),n(ht,{name:1},{default:r(()=>[n(mt,{"input-style":"font-family: monospace",modelValue:U.value,"onUpdate:modelValue":[p[3]||(p[3]=y=>U.value=y),Ye],clearable:"",outlined:"",label:U.value?`${$(t)("embedding.key_to_top_up")}`:$(t)("embedding.key_enter_placeholder_to_topup"),error:!J.value,"error-message":U.value?$(t)("embedding.input_api_key_error"):"",class:"full-width"},null,8,["modelValue","label","error","error-message"]),J.value?(z(),ie(ve,{key:0},[n(bt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:r(()=>[n(fe,null,{default:r(()=>[n(Y,{avatar:""},{default:r(()=>[n(te,{name:"help_outline",class:"cursor-pointer"},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1}),n(Y,null,{default:r(()=>[n(K,{overline:"",class:"row items-center"},{default:r(()=>[L(x($(t)("embedding.remaining")),1)]),_:1}),V.value?at("",!0):(z(),ue(K,{key:0},{default:r(()=>[L(x(H(k.value)),1)]),_:1}))]),_:1}),n(Ne,{showing:h.value},null,8,["showing"])]),_:1}),n(X,{flat:"",icon:"sync",class:"q-ml-sm",disable:!J.value||h.value,onClick:p[4]||(p[4]=y=>E(U.value))},{default:r(()=>[n(de,null,{default:r(()=>[L(x($(t)("embedding.refresh_token_count")),1)]),_:1})]),_:1},8,["disable"]),n(Le),n(X,{flat:"","no-caps":"",icon:"history",label:$(t)("embedding.usage_history"),disable:!J.value||h.value,onClick:Ue},null,8,["label","disable"])]),_:1}),n(Ke)],64)):at("",!0),n(Ae,{flat:""},{default:r(()=>[n(ge,null,{default:r(()=>[n(fe,null,{default:r(()=>[n(Y,{avatar:"",side:""},{default:r(()=>[n(te,{name:"fab fa-stripe",size:"sm"}),n(te,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),n(Y,null,{default:r(()=>[n(K,null,{default:r(()=>[L(x($(t)("embedding.buy_more_quota")),1)]),_:1}),n(K,{caption:""},{default:r(()=>[L(x($(t)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),n(ge,{class:"row",style:{"margin-right":"-16px"}},{default:r(()=>[(z(!0),ie(ve,null,je($(c),(y,Q)=>(z(),ie("div",{key:Q,class:"col-12 col-md-6 col-lg-4"},[Oe((z(),ue(Ae,{bordered:"",flat:"",class:Sa(["q-mr-md q-mb-md",J.value&&!h.value&&!W.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:wa(W.value===y.price_id?"cursor: wait !important;":""),onClick:I=>Xe(y.price_id)},{default:r(()=>[gl,n(ge,{class:"column items-center non-selectable q-py-xl text-h6"},{default:r(()=>[L(x($(t)(`embedding.${y.product_name.replace(".","_")}`)),1)]),_:2},1024),n(ge,null,{default:r(()=>[n(fe,null,{default:r(()=>[n(Y,null,{default:r(()=>[n(K,{class:"text-bold"},{default:r(()=>[L("$"+x(y.price),1)]),_:2},1024),n(K,{caption:""},{default:r(()=>[L("$"+x(Number((y.price/y.token_quantity*1e3).toFixed(6)))+" "+x($(t)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),n(Y,{side:""},{default:r(()=>[n(te,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),n(Ne,{showing:W.value===y.price_id,label:$(t)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[Je,J.value&&!h.value&&!W.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),n(Ne,{class:"non-selectable lock-blur",showing:f.value},null,8,["showing"])]),_:1}),n(ya,{modelValue:F.value,"onUpdate:modelValue":p[6]||(p[6]=y=>F.value=y),onShow:ze,onHide:Ze},{default:r(()=>[n(Ae,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:r(()=>[n(ge,{class:"row items-center q-pb-none"},{default:r(()=>[n(te,{name:"history",size:"md",class:"q-mr-md"}),me("div",ml,x($(t)("embedding.usage_history")),1),n(Le),Oe(n(X,{icon:"close",flat:"",round:"",dense:""},null,512),[[lt]])]),_:1}),n(ge,null,{default:r(()=>[n($(dl),{ref_key:"usageTableRef",ref:Se,flat:"","row-key":"createdAt",rows:se.value,columns:we.value,loading:$e.value,"hide-pagination":!0,onRequest:Te},{"body-cell-icon":r(y=>[n(yt,{key:"icon",props:y},{default:r(()=>[y.row.amount>0?(z(),ue(te,{key:0,name:"o_add_circle_outline",color:"primary"})):(z(),ue(te,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":r(y=>[n(yt,{key:"amount",props:y},{default:r(()=>[L(x((y.row.amount>0?"+":"")+H(y.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var bl="/assets/paper_1.8ed04d7d.png",pl="/assets/paper_2.59e1399a.png";const hl=me("span",{class:"q-focus-helper"},null,-1),yl={class:"q-mb-xl"},jl=Pt({__name:"ResearchersComponent",setup(e){$t({useScope:"global"});const t=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:bl,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:pl,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(o,u)=>(z(),ie(ve,null,je(t,(l,m)=>Oe(n(Ae,{key:m,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:r(()=>[hl,n(xt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),n(ge,{class:"q-pa-none",horizontal:""},{default:r(()=>[n(fe,{href:l.link,target:"_blank",class:"q-pa-lg col-9"},{default:r(()=>[n(Y,null,{default:r(()=>[me("div",yl,[n(nt,{label:l.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),l.conference?(z(),ue(nt,{key:0,label:l.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(z(),ue(nt,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),n(Le),n(K,{class:"text-h6 q-mb-lg"},{default:r(()=>[L(x(l.title),1)]),_:2},1024),n(K,{caption:"",lines:"3"},{default:r(()=>[L(x(l.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),n(Qa,{src:l.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[Je]])),64))}});export{Da as Q,Al as _,ht as a,jl as b};
