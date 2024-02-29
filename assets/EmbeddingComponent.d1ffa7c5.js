import{Q as it}from"./QImg.2ab6a3ca.js";import{k as de,R as Ke,m as St,S as Ye,s as xt,h as R,i as v,T as rt,C as Te,b5 as qt,e as ge,a6 as _e,a8 as Q,a9 as n,aq as ye,bJ as Ct,aa as C,ab as t,ao as se,ae as ie,ag as ae,ai as S,aj as _,af as l,bv as Tt,bw as At,am as ee,D as $e,$ as jt,f as k,br as ut,J as ct,aU as zt,j as K,P as He,aL as Bt,bI as Mt,as as Ce,ar as Pt,w as Ge,K as Ne,aF as ne,ac as W,ad as Be,Z as ce,bz as $t,al as te,b1 as Ie,b9 as dt,bK as Rt,an as fe,bL as mt,bM as pt,bN as ft,ah as le,bO as Fe,bP as Xe,ak as Z,av as be,aX as Je,U as Ee,V as Nt,W as Ft,bQ as gt,aV as It,E as vt,N as Dt,aH as Vt,aP as Ot,aI as Ut,aK as Et,aQ as Qt,bR as Lt,aJ as Ht,aT as et,I as Kt,a1 as Yt,bS as je,a5 as Gt,bT as De,bU as Jt,u as Zt,au as Wt,bV as Xt,bW as ea,bB as ta,ap as aa}from"./index.b96d4bb5.js";import{Q as X,b as xe}from"./QBadge.03ae6f58.js";import{_ as na}from"./NewsBadge.25dc55a4.js";import{_ as la,A as oa}from"./blogs.5509636a.js";import{_ as Ze}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as oe}from"./QTooltip.6fde5c51.js";import{Q as sa,a as ia}from"./QTabs.3bd4d7d0.js";import{Q as he}from"./QSpace.23f3f165.js";import{u as Ae,B as Qe,Q as bt,T as ra}from"./embedding.d5ecbd1d.js";import{u as ua,b as ca,c as da,d as ma}from"./QCarousel.b42f51d1.js";import{Q as yt}from"./QList.54ca9db8.js";import{Q as ht,a as pa}from"./QBtnDropdown.fdd329c2.js";import{C as qe}from"./ClosePopup.ed4e2e45.js";import{c as fa}from"./copy-to-clipboard.0db95191.js";import{Q as We,a as pe}from"./QTable.1761830e.js";import{Q as ga}from"./QMenu.37cd04ed.js";import{Q as va}from"./QLinearProgress.9ddede5f.js";import{h as ba}from"./format.afd66c59.js";import{R as ya}from"./regexp.d033247d.js";var Me=de({name:"QInnerLoading",props:{...Ke,...St,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:o}){const a=Te(),r=Ye(e,a.proxy.$q),{transitionProps:u,transitionStyle:c}=xt(e),p=R(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),w=R(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function N(){const j=[v(qt,{size:e.size,color:e.color})];return e.label!==void 0&&j.push(v("div",{class:w.value,style:e.labelStyle},[e.label])),j}function P(){return e.showing===!0?v("div",{class:p.value,style:c.value},o.default!==void 0?o.default():N()):null}return()=>v(rt,u.value,P)}});const ha=e=>(Tt("data-v-5445f441"),e=e(),At(),e),_a=ha(()=>ee("span",{class:"q-focus-helper"},null,-1)),wa=ge({__name:"NewsroomCard",props:{info:{}},setup(e){const o=e,a=R(()=>Ct(o.info.publishedAt).format("MMMM DD, YYYY")),{t:r}=_e({useScope:"global"}),u=c=>{window.open(c)};return(c,p)=>(C(),Q(ye,{flat:"",square:"",onClick:p[0]||(p[0]=w=>u(`/news/${c.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:n(()=>[_a,t(se,{class:"q-pa-none"},{default:n(()=>[t(it,{src:c.info.featureImage,height:"200px",loading:"lazy",alt:c.info.featureImageAlt},{default:n(()=>[t(la,{"alt-text":c.info.featureImageAlt},null,8,["alt-text"])]),_:1},8,["src","alt"])]),_:1}),t(se,{style:{height:"250px"}},{default:n(()=>[t(ie,null,{default:n(()=>[t(na,{news:c.info},null,8,["news"])]),_:1}),t(ie,null,{default:n(()=>[t(ae,{class:"text-h6 text-weight-light"},{default:n(()=>[t(X,{lines:"2"},{default:n(()=>[S(_(c.info.title),1)]),_:1})]),_:1})]),_:1}),t(ie,null,{default:n(()=>[t(ae,null,{default:n(()=>[t(X,{lines:"3",caption:""},{default:n(()=>[S(_(c.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(se,null,{default:n(()=>[t(ie,null,{default:n(()=>[t(oa,{authors:c.info.authors},null,8,["authors"]),t(ae,null,{default:n(()=>[t(X,null,{default:n(()=>[S(_(c.info.authors.map(w=>w.name).join(", ")),1)]),_:1}),t(X,{caption:""},{default:n(()=>[S(_(a.value)+" \u2022 "+_(c.info.readingTime)+" "+_(l(r)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Vn=Ze(wa,[["__scopeId","data-v-5445f441"]]),me=de({name:"QTabPanel",props:ua,setup(e,{slots:o}){return()=>v("div",{class:"q-tab-panel",role:"tabpanel"},$e(o.default))}}),ka=de({name:"QTabPanels",props:{...ca,...Ke},emits:da,setup(e,{slots:o}){const a=Te(),r=Ye(e,a.proxy.$q),{updatePanelsList:u,getPanelContent:c,panelDirectives:p}=ma(),w=R(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(o),jt("div",{class:w.value},c(),"pan",e.swipeable,()=>p.value))}}),Sa="/assets/icon-MongoDB.982c1a31.svg",xa="/assets/icon-Weaviate.7149e9ab.svg",qa="/assets/icon-Qdrant.934fd07b.svg",Ca="data:image/png;base64,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",Ta="/assets/icon-Chroma.2b9ab43a.svg",Aa="/assets/icon-Langchain.f2ee033d.png",ja="/assets/icon-LlamaIndex.480689aa.png",za="/assets/icon-Dify.8dc6e6d4.png",Ba="/assets/icon-Haystack.c2968447.svg",Ma="/assets/icon-SuperDuperDB.94465a4c.svg",Pa="/assets/icon-Epsilla.461331c8.png",$a="/assets/icon-MyScale.5669eb9d.svg",Ra="/assets/icon-DashVector.3017419e.svg";const Na=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:Sa},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:qa},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:Ca},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:Ta},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:xa},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:Pa},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-ai-embedding",icon:$a},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:ja},{label:"Haystack",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:Ba},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:Aa},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:za},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/walkthrough/ai_apis/#jina",icon:Ma},{label:"DashVector",tags:["vector_store"],homepage:"https://help.aliyun.com/document_detail/2668339.html",icon:Ra}];var _t=de({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:o}){const a=R(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>v("tr",{class:a.value},$e(o.default))}});function Pe(e,o=new WeakMap){if(Object(e)!==e)return e;if(o.has(e))return o.get(e);const a=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const r=e.valueOf();if(Object(r)!==r){const u=new e.constructor(r);return o.set(e,u),u}}return o.set(e,a),e instanceof Set?e.forEach(r=>{a.add(Pe(r,o))}):e instanceof Map&&e.forEach((r,u)=>{a.set(u,Pe(r,o))}),Object.assign(a,...Object.keys(e).map(r=>({[r]:Pe(e[r],o)})))}var tt=de({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:o,emit:a}){const{proxy:r}=Te(),{$q:u}=r,c=k(null),p=k(""),w=k("");let N=!1;const P=R(()=>ut({initialValue:p.value,validate:e.validate,set:j,cancel:q,updatePosition:$},"value",()=>w.value,F=>{w.value=F}));function j(){e.validate(w.value)!==!1&&(I()===!0&&(a("save",w.value,p.value),a("update:modelValue",w.value)),D())}function q(){I()===!0&&a("cancel",w.value,p.value),D()}function $(){ct(()=>{c.value.updatePosition()})}function I(){return zt(w.value,p.value)===!1}function D(){N=!0,c.value.hide()}function T(){N=!1,p.value=Pe(e.modelValue),w.value=Pe(e.modelValue),a("beforeShow")}function O(){a("show")}function z(){N===!1&&I()===!0&&(e.autoSave===!0&&e.validate(w.value)===!0?(a("save",w.value,p.value),a("update:modelValue",w.value)):a("cancel",w.value,p.value)),a("beforeHide")}function d(){a("hide")}function m(){const F=o.default!==void 0?[].concat(o.default(P.value)):[];return e.title&&F.unshift(v("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&F.push(v("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[v(K,{flat:!0,color:e.color,label:e.labelCancel||u.lang.label.cancel,onClick:q}),v(K,{flat:!0,color:e.color,label:e.labelSet||u.lang.label.set,onClick:j})])),F}return Object.assign(r,{set:j,cancel:q,show(F){c.value!==null&&c.value.show(F)},hide(F){c.value!==null&&c.value.hide(F)},updatePosition:$}),()=>{if(e.disable!==!0)return v(ga,{ref:c,class:"q-popup-edit",cover:e.cover,onBeforeShow:T,onShow:O,onBeforeHide:z,onHide:d,onEscapeKey:q},m)}}});function Fa(e){const o=Object.assign({noopener:!0},e),a=[];for(const r in o){const u=o[r];u===!0?a.push(r):(Mt(u)||typeof u=="string"&&u!=="")&&a.push(r+"="+u)}return a.join(",")}function at(e,o,a){let r=window.open;if(He.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)r=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const u=r(e,"_blank",Fa(a));if(u)return He.is.desktop&&u.focus(),u;o&&o()}var Ia=(e,o,a)=>{if(He.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(r=>{r?window.SafariViewController.show({url:e},Bt,o):at(e,o,a)});return}return at(e,o,a)};const Da={class:"full-width ellipsis q-pl-md"},Ve=ge({__name:"ModelDropDown",props:{currentModel:{},indicator:{type:Boolean,default:!0}},emits:["chooseModel"],setup(e,{emit:o}){const{t:a}=_e({useScope:"global"}),r=Ae(),{models:u,baseDeModel:c,baseEnModel:p,baseZhModel:w}=Ce(r),N=Pt(),{language:P}=Ce(N),j=k(!1),q=o,$=()=>{var m;q("chooseModel",(m=w.value)!=null?m:p.value)},I=()=>{var m;q("chooseModel",(m=c.value)!=null?m:p.value)};Ge(P,m=>{m&&["zh-CN","zh-TW"].includes(m)?$():m==="de"&&I()}),Ne(async()=>{await D()});const D=async()=>{j.value=!0,await r.getModels(),j.value=!1,u.value.length>0&&(P.value&&["zh-CN","zh-TW"].includes(P.value)?$():P.value==="de"?I():q("chooseModel",p.value))},T=m=>{O("event","embedding_view_model_detail",{location:z.location.href,model:m}),Ia(`https://huggingface.co/jinaai/${m}`)},O=window.gtag,z=window.document,d=m=>m==="en"?"\u{1F1FA}\u{1F1F8}":m==="zh"?"\u{1F1E8}\u{1F1F3}\u{1F1FA}\u{1F1F8}":m==="de"?"\u{1F1E9}\u{1F1EA}\u{1F1FA}\u{1F1F8}":m==="es"?"\u{1F1EA}\u{1F1F8}\u{1F1FA}\u{1F1F8}":"\u{1F30D}";return(m,F)=>(C(),Q(ht,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:j.value,class:ne(["dynamic-text-btn",m.$q.screen.lt.sm?"full-width q-py-md":""]),"disable-dropdown":j.value,onClick:F[0]||(F[0]=x=>l(O)("event","embedding_click_model_dropdown",{location:l(z).location.href}))},{label:n(()=>{var x;return[ee("div",Da,_((x=m.currentModel)==null?void 0:x.name),1)]}),default:n(()=>[t(yt,null,{default:n(()=>[(C(!0),W(te,null,Be(l(u),(x,f)=>{var h;return ce((C(),Q(ie,{key:f,clickable:"",active:x.name===((h=m.currentModel)==null?void 0:h.name),onClick:s=>q("chooseModel",x),class:"q-pa-md"},{default:n(()=>[t(ae,null,{default:n(()=>[t(X,{overline:"",caption:""},{default:n(()=>[S(_(x.name),1)]),_:2},1024),t(X,{class:"text-weight-bold"},{default:n(()=>[S(_(l(a)(`embedding.${x.name}_description`)),1)]),_:2},1024),t(X,{caption:"",class:"row"},{default:n(()=>{var s,i,g,U,A;return[t(xe,{label:x.meta_data.token_length,square:"",color:x.name!==((s=m.currentModel)==null?void 0:s.name)?"grey-5":"",size:"xs",outline:"",icon:"notes",style:{"border-radius":"0"}},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.token_length_explain",{_tokenLength:x.meta_data.token_length})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(xe,{label:x.meta_data.output_dim,square:"",color:x.name!==((i=m.currentModel)==null?void 0:i.name)?"grey-5":"",size:"xs",outline:"",icon:"mdi-axis-arrow",style:{"border-radius":"0"}},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.output_dim_explain",{_outputDim:x.meta_data.output_dim})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(xe,{label:x.meta_data.size,square:"",size:"xs",color:x.name!==((g=m.currentModel)==null?void 0:g.name)?"grey-5":"",outline:"",icon:"mdi-matrix",style:{"border-radius":"0"}},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.size_explain",{_size:x.meta_data.size})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(xe,{label:d(x.meta_data.language),square:"",color:x.name!==((U=m.currentModel)==null?void 0:U.name)?"grey-5":"",size:"xs",outline:"",style:{"border-radius":"0"}},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.language_explain",{_language:d(x.meta_data.language)})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(xe,{icon:"img:/huggingface_logo.svg",square:"",size:"xs",outline:"",color:x.name!==((A=m.currentModel)==null?void 0:A.name)?"grey-5":"",style:{"border-radius":"0"},onClick:$t(V=>T(x.name),["stop"]),clickable:"",label:l(a)("embedding.opensource")},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.opensource_explain")),1)]),_:1})]),_:2},1032,["color","onClick","label"])]}),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[Ie],[qe]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]))}});const Va={class:"row full-width"},Oa=ge({__name:"TestTab",setup(e){const{t:o}=_e({useScope:"global"}),a=k(!1),r=Ae(),u=k(),{testData:c}=Ce(r),p=f=>{u.value=f,d(c.value).catch(h=>{console.error("calculateScores",h)})},w=[{name:"text1",field:"text1",label:o("embedding.text1"),required:!0,align:"left",sortable:!0},{name:"text2",field:"text1",label:o("embedding.text2"),required:!0,align:"left",sortable:!0},{name:"score",align:"right",label:o("embedding.cosine_similarity"),sortable:!0,field:f=>{var h;return f.scores[((h=u.value)==null?void 0:h.name)||""]||NaN}}],N=f=>{var h,s;return((s=f.scores)==null?void 0:s[((h=u.value)==null?void 0:h.name)||""])||NaN},P=k({page:1,rowsPerPage:10}),j=k([]),q=k(null),$=k(null),I=()=>{c.value=c.value.filter(f=>!j.value.includes(f)),j.value=[]},D=f=>{q.value=f},T=f=>{$.value=f},O=()=>{const f={id:c.value.length,text1:x[Math.floor(Math.random()*x.length)],text2:x[Math.floor(Math.random()*x.length)],scores:{},isNew:!0};c.value.unshift(f),d([f]).catch(h=>{console.error("calculateScores",h)}),P.value.page=1,ct(()=>{var h;(h=q.value)==null||h.show()})},z=(f,h,s)=>{var i;s[h]=f,s.scores={},s.isNew&&(h==="text1"?(i=$.value)==null||i.show():h==="text2"&&(s.isNew=!1)),d([s]).catch(g=>{console.error("calculateScores",g)})};async function d(f){if(!u.value)return;const h=u.value.name,s=f.filter(i=>i.text1&&i.text2).filter(i=>{var g;return!((g=i.scores)!=null&&g[h])});if(s.length!==0)try{a.value=!0;const i=100;for(let g=0;g<s.length;g+=i){const U=s.slice(g,g+i),A=await F(U,h);for(const V of U){const E=A[V.text1],Y=A[V.text2];!E||!Y||(V.scores=V.scores||{},V.scores[h]=mt(A[V.text1],A[V.text2]))}}}finally{a.value=!1}}const m={};async function F(f,h){m[h]||(m[h]={});const s="https://api.jina.ai/v1/embeddings",i={"Content-Type":"application/json",Authorization:`Bearer ${r.apiKey}`},g=f.map(U=>[U.text1,U.text2]).flat().filter(Boolean).filter(U=>!m[h][U]);if(g.length>0){const U={input:g,model:h},V=await(await fetch(s,{method:"POST",headers:i,body:JSON.stringify(U)})).json();for(const E of V.data)m[h][U.input[E.index]]=E.embedding}return m[h]}const x=["The only way to do great work is to love what you do.","The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don\u2019t change people; they merely amplify what is already there.","Your time is limited, don\u2019t waste it living someone else\u2019s life.","Not how long, but how well you have lived is the main thing.","If life were predictable it would cease to be life, and be without flavor.","The big lesson in life, baby, is never be scared of anyone or anything.","Sing like no one\u2019s listening, love like you\u2019ve never been hurt, dance like nobody\u2019s watching, and live like it\u2019s heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","Turn your wounds into wisdom.","The way to get started is to quit talking and begin doing.","The greatest glory in living lies not in never falling, but in rising every time we fall."];return(f,h)=>(C(),Q(We,{class:"my-sticky-column-table col key-value-table",flat:"",rows:l(c),columns:w,"row-key":"id","binary-state-sort":"",selection:"multiple",pagination:P.value,"onUpdate:pagination":h[0]||(h[0]=s=>P.value=s),selected:j.value,"onUpdate:selected":h[1]||(h[1]=s=>j.value=s),loading:a.value,"no-data-label":l(o)("embedding.no_data1"),separator:"cell"},{top:n(()=>[ee("div",Va,[t(pa,{flat:"",square:""},{default:n(()=>[t(K,{square:"",icon:"add",label:l(o)("embedding.add_pair"),flat:"",padding:"md",onClick:O},null,8,["label"]),ce(t(K,{square:"",padding:"md",icon:"delete_forever",color:"negative",label:l(o)("embedding.delete_pair"),flat:"",onClick:I},null,8,["label"]),[[dt,j.value.length>0]])]),_:1}),t(he),t(Ve,{currentModel:u.value,indicator:!1,onChooseModel:p},null,8,["currentModel"])])]),body:n(s=>[t(_t,{props:s},{default:n(()=>[t(pe,{key:"selection"},{default:n(()=>[t(Rt,{modelValue:s.selected,"onUpdate:modelValue":i=>s.selected=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(pe,{key:"text1",props:s,class:"fixed-cell"},{default:n(()=>[S(_(s.row.text1)+" ",1),t(l(tt),{ref:i=>{s.row.isNew&&s.rowIndex===0&&D(i)},modelValue:s.row.text1,"onUpdate:modelValue":i=>s.row.text1=i,"auto-save":"",onSave:i=>z(i,"text1",s.row)},{default:n(i=>[t(fe,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text1_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),t(pe,{key:"text2",props:s,class:"fixed-cell"},{default:n(()=>[S(_(s.row.text2)+" ",1),t(l(tt),{ref:i=>{s.row.isNew&&s.rowIndex===0&&T(i)},modelValue:s.row.text2,"onUpdate:modelValue":i=>s.row.text2=i,"auto-save":"",onSave:i=>z(i,"text2",s.row)},{default:n(i=>[t(fe,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text2_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),t(pe,{key:"score",props:s},{default:n(()=>[S(_(N(s.row).toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","selected","loading","no-data-label"]))}});var Ua=Ze(Oa,[["__scopeId","data-v-6d7c27d2"]]);const Ea=[v("g",{transform:"translate(20 50)"},[v("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),v("g",{transform:"translate(50 50)"},[v("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),v("g",{transform:"translate(80 50)"},[v("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[v("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Qa=de({name:"QSpinnerFacebook",props:pt,setup(e){const{cSize:o,classes:a}=ft(e);return()=>v("svg",{class:a.value,width:o.value,height:o.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Ea)}});const La={class:"row full-width"},nt="https://api.jina.ai/v1/embeddings",Ha=ge({__name:"SearchTab",props:{asVisualizer:{type:Boolean,default:!1},maximizedWindow:{type:Boolean,default:!1}},setup(e){const o=Ae(),{t:a}=_e({useScope:"global"}),r=k(""),u=k(),{userDocuments:c}=Ce(o),p=k(null),w=A=>{u.value=A},N=k(""),P=k(""),j={"Content-Type":"application/json",Authorization:`Bearer ${o.apiKey}`},q=k([]),$=k([]),I=k(0),D=k(0),T=k(!0),O=k(!0),z=k(!1),d=k([]),m=k(""),F=k(!1),x=e,f=()=>{var A;m.value===""?i(c.value):(gtag("event","embedding_open_tensorboard",{model:(A=u.value)==null?void 0:A.name}),window.open(m.value,"_blank"))},h=async()=>{var L,M;if(((L=r.value)==null?void 0:L.trim())==="")return;O.value=!1;const A={input:[(M=r.value)==null?void 0:M.trim()],model:u.value.name},V=await fetch(nt,{method:"POST",headers:j,body:JSON.stringify(A)}),{data:E}=await V.json(),Y=E[0].embedding;d.value=$.value.map((H,G)=>({document:q.value[G],similarity:mt(Y,H)})),d.value.sort((H,G)=>G.similarity-H.similarity),O.value=!0,gtag("event","embedding_search_done",{model:u.value.name})},s=()=>{q.value=[],D.value=0,T.value=!1,I.value=0,$.value=[],m.value=""},i=A=>{s(),q.value=A.split(`
`).filter(V=>V.trim()!==""),D.value=q.value.length,g(q.value)};async function g(A){var E;const V=Math.max(20,Math.min(50,A.length/10));for(let Y=0;Y<A.length;Y+=V){z.value=!0;const L=A.slice(Y,Y+V),M={input:L,model:u.value.name};try{const G=await(await fetch(nt,{method:"POST",headers:j,body:JSON.stringify(M)})).json();for(const re of G.data)$.value[Y+re.index]=re.embedding;if(I.value+=L.length,I.value>=D.value){if(T.value=!0,N.value="",P.value="",$.value.forEach((re,we)=>{N.value+=re.join("	")+`
`,P.value+=q.value[we].replaceAll("	"," ").trim()+`
`}),x.asVisualizer){F.value=!0;const re={description:"Projector Data Files",public:!0,files:{"tensor.tsv":{content:N.value},"metadata.tsv":{content:P.value}}},ve=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${Xe}`,"Content-Type":"application/json"},body:JSON.stringify(re)})).json(),ke={tensorName:((E=u.value)==null?void 0:E.name)||"Jina Embeddings",tensorShape:[$.value.length,$.value[0].length],tensorPath:ve.files["tensor.tsv"].raw_url,metadataPath:ve.files["metadata.tsv"].raw_url},Oe={description:"Projector Meta Files",public:!0,files:{"project_config.json":{content:JSON.stringify({embeddings:[ke]})}}},b=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${Xe}`,"Content-Type":"application/json"},body:JSON.stringify(Oe)})).json();m.value=`https://projector.tensorflow.org/?config=${b.files["project_config.json"].raw_url}`,F.value=!1}gtag("event","embedding_docs_done",{length:q.value.length,model:u.value.name})}}catch(H){console.error("An error occurred while embedding documents:",H)}finally{z.value=!1}}}const U=[{name:"document",field:"document",label:a("embedding.document"),required:!0,align:"left",sortable:!0},{name:"similarity",align:"right",label:a("embedding.cosine_similarity"),sortable:!0,field:"similarity"}];return(A,V)=>(C(),W(te,null,[ee("div",La,[!e.asVisualizer&&(q.value.length===0||z.value)?(C(),Q(K,{key:0,label:l(a)("embedding.start_embedding"),onClick:V[0]||(V[0]=E=>i(l(c))),icon:"play_arrow",disable:l(c)===""||z.value,padding:"md"},null,8,["label","disable"])):!e.asVisualizer&&!z.value?(C(),Q(l(fe),{key:1,class:"col",clearable:"",modelValue:r.value,"onUpdate:modelValue":[V[1]||(V[1]=E=>r.value=E),h],debounce:"500",label:D.value===0?l(a)("embedding.please_fill_docs_first"):l(a)("embedding.query"),loading:!O.value,"hide-bottom-space":""},{prepend:n(()=>[t(Z,{name:"search",class:"q-mx-md"})]),_:1},8,["modelValue","label","loading"])):e.asVisualizer?(C(),Q(K,{key:2,stretch:"",padding:"md",disable:l(c)===""||z.value,label:m.value?l(a)("embedding.open_tensorboard"):l(a)("embedding.visualize"),onClick:f,icon:m.value?"open_in_new":"play_arrow",loading:F.value},null,8,["disable","label","icon","loading"])):le("",!0),t(he),t(Ve,{currentModel:u.value,indicator:!1,onChooseModel:w},null,8,["currentModel"])]),t(be),ce(t(va,{value:I.value/D.value,indeterminate:F.value},null,8,["value","indeterminate"]),[[dt,D.value>0&&!T.value||F.value]]),d.value.length>0&&!!r.value?(C(),Q(We,{key:0,columns:U,class:"my-sticky-column-table col key-value-table",loading:!O.value,rows:d.value,pagination:{rowsPerPage:10}},{body:n(E=>[t(_t,{props:E},{default:n(()=>[t(pe,{key:"document",props:E,class:"fixed-cell"},{default:n(()=>[S(_(E.row.document),1)]),_:2},1032,["props"]),t(pe,{key:"similarity",props:E},{default:n(()=>[S(_(E.row.similarity.toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])):(C(),Q(l(fe),{key:1,modelValue:l(c),"onUpdate:modelValue":[V[2]||(V[2]=E=>Fe(c)?c.value=E:null),s],ref_key:"userInput",ref:p,label:l(a)("embedding.original_documents"),placeholder:l(a)("embedding.original_documents_hint"),filled:"",rows:"15",square:"","input-style":e.maximizedWindow?{height:"calc(100vh - 190px)"}:{},type:"textarea","bottom-slots":"",class:"q-mb-md"},{hint:n(()=>[D.value>0&&!T.value?(C(),W(te,{key:0},[t(Qa,{size:"20px"}),S(" "+_(l(a)("embedding.total_documents",{_Processed:I.value,_Count:D.value})),1)],64)):T.value&&D.value>0&&!e.asVisualizer?(C(),W(te,{key:1},[t(Z,{name:"done"}),S(" "+_(l(a)("embedding.embedding_done",{_Count:D.value})),1)],64)):F.value?(C(),W(te,{key:2},[t(Z,{name:"scatter_plot"}),S(" "+_(l(a)("embedding.generating_visualization")),1)],64)):m.value?(C(),W(te,{key:3},[t(Z,{name:"open_in_new"}),S(" "+_(l(a)("embedding.visualize_done")),1)],64)):D.value<=1?(C(),W(te,{key:4},[t(Z,{name:"info"}),S(" "+_(l(a)("embedding.more_than_two2")),1)],64)):le("",!0)]),_:1},8,["modelValue","label","placeholder","input-style"]))],64))}});var lt=Ze(Ha,[["__scopeId","data-v-79e181fe"]]);const Ka=ge({__name:"EmbeddingDialog",setup(e){const o=k(null),a=()=>{var r;(r=o.value)==null||r.hide()};return(r,u)=>(C(),Q(l(Je),{maximized:"",ref_key:"embeddingFSDialog",ref:o},{default:n(()=>[t(ye,{flat:""},{default:n(()=>[t(hn,{maximized:!0,onCloseDialog:a})]),_:1})]),_:1},512))}});var ze=de({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:o}){const a=Ft(gt,Ee);if(a===Ee)return console.error("QTimelineEntry needs to be child of QTimeline"),Ee;const r=R(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),u=R(()=>`q-timeline__dot text-${e.color||a.color}`),c=R(()=>a.layout==="comfortable"&&a.side==="left");return()=>{const p=Nt(o.default,[]);if(e.body!==void 0&&p.unshift(e.body),e.heading===!0){const P=[v("div"),v("div"),v(e.tag,{class:"q-timeline__heading-title"},p)];return v("div",{class:"q-timeline__heading"},c.value===!0?P.reverse():P)}let w;e.icon!==void 0?w=[v(Z,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(w=[v("img",{class:"q-timeline__dot-img",src:e.avatar})]);const N=[v("div",{class:"q-timeline__subtitle"},[v("span",{},$e(o.subtitle,[e.subtitle]))]),v("div",{class:u.value},w),v("div",{class:"q-timeline__content"},[v("h6",{class:"q-timeline__title"},$e(o.title,[e.title]))].concat(p))];return v("li",{class:r.value},c.value===!0?N.reverse():N)}}});function Se(e,o,a,r){const u=[];return e.forEach(c=>{r(c)===!0?u.push(c):o.push({failedPropValidation:a,file:c})}),u}function Re(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),vt(e)}const Ya={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Ga=["rejected"];function Ja({editable:e,dnd:o,getFileInput:a,addFilesToQueue:r}){const{props:u,emit:c,proxy:p}=Te(),w=k(null),N=R(()=>u.accept!==void 0?u.accept.split(",").map(d=>(d=d.trim(),d==="*"?"*/":(d.endsWith("/*")&&(d=d.slice(0,d.length-1)),d.toUpperCase()))):null),P=R(()=>parseInt(u.maxFiles,10)),j=R(()=>parseInt(u.maxTotalSize,10));function q(d){if(e.value)if(d!==Object(d)&&(d={target:null}),d.target!==null&&d.target.matches('input[type="file"]')===!0)d.clientX===0&&d.clientY===0&&It(d);else{const m=a();m&&m!==d.target&&m.click(d)}}function $(d){e.value&&d&&r(null,d)}function I(d,m,F,x){let f=Array.from(m||d.target.files);const h=[],s=()=>{h.length!==0&&c("rejected",h)};if(u.accept!==void 0&&N.value.indexOf("*/")===-1&&(f=Se(f,h,"accept",i=>N.value.some(g=>i.type.toUpperCase().startsWith(g)||i.name.toUpperCase().endsWith(g))),f.length===0))return s();if(u.maxFileSize!==void 0){const i=parseInt(u.maxFileSize,10);if(f=Se(f,h,"max-file-size",g=>g.size<=i),f.length===0)return s()}if(u.multiple!==!0&&f.length!==0&&(f=[f[0]]),f.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),x===!0){const i=F.map(g=>g.__key);f=Se(f,h,"duplicate",g=>i.includes(g.__key)===!1)}if(f.length===0)return s();if(u.maxTotalSize!==void 0){let i=x===!0?F.reduce((g,U)=>g+U.size,0):0;if(f=Se(f,h,"max-total-size",g=>(i+=g.size,i<=j.value)),f.length===0)return s()}if(typeof u.filter=="function"){const i=u.filter(f);f=Se(f,h,"filter",g=>i.includes(g))}if(u.maxFiles!==void 0){let i=x===!0?F.length:0;if(f=Se(f,h,"max-files",()=>(i++,i<=P.value)),f.length===0)return s()}if(s(),f.length!==0)return f}function D(d){Re(d),o.value!==!0&&(o.value=!0)}function T(d){vt(d),(d.relatedTarget!==null||Dt.is.safari!==!0?d.relatedTarget!==w.value:document.elementsFromPoint(d.clientX,d.clientY).includes(w.value)===!1)===!0&&(o.value=!1)}function O(d){Re(d);const m=d.dataTransfer.files;m.length!==0&&r(null,m),o.value=!1}function z(d){if(o.value===!0)return v("div",{ref:w,class:`q-${d}__dnd absolute-full`,onDragenter:Re,onDragover:Re,onDragleave:T,onDrop:O})}return Object.assign(p,{pickFiles:q,addFiles:$}),{pickFiles:q,addFiles:$,onDragover:D,onDragleave:T,processFiles:I,getDndNode:z,maxFilesNumber:P,maxTotalSizeNumber:j}}var Za=de({name:"QFile",inheritAttrs:!1,props:{...Vt,...Ot,...Ya,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ut,...Ga],setup(e,{slots:o,emit:a,attrs:r}){const{proxy:u}=Te(),c=Et(),p=k(null),w=k(!1),N=Qt(e),{pickFiles:P,onDragover:j,onDragleave:q,processFiles:$,getDndNode:I}=Ja({editable:c.editable,dnd:w,getFileInput:A,addFilesToQueue:V}),D=Lt(e),T=R(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),O=R(()=>et(T.value)),z=R(()=>T.value.map(M=>M.name).join(", ")),d=R(()=>ba(T.value.reduce((M,H)=>M+H.size,0))),m=R(()=>({totalSize:d.value,filesNumber:T.value.length,maxFiles:e.maxFiles})),F=R(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:N.value,...r,id:c.targetUid.value,disabled:c.editable.value!==!0})),x=R(()=>"q-file q-field--auto-height"+(w.value===!0?" q-file--dnd":"")),f=R(()=>e.multiple===!0&&e.append===!0);function h(M){const H=T.value.slice();H.splice(M,1),i(H)}function s(M){const H=T.value.indexOf(M);H>-1&&h(H)}function i(M){a("update:modelValue",e.multiple===!0?M:M[0])}function g(M){M.keyCode===13&&Kt(M)}function U(M){(M.keyCode===13||M.keyCode===32)&&P(M)}function A(){return p.value}function V(M,H){const G=$(M,H,T.value,f.value),re=A();re!=null&&(re.value=""),G!==void 0&&((e.multiple===!0?e.modelValue&&G.every(we=>T.value.includes(we)):e.modelValue===G[0])||i(f.value===!0?T.value.concat(G):G))}function E(){return[v("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function Y(){if(o.file!==void 0)return T.value.length===0?E():T.value.map((H,G)=>o.file({index:G,file:H,ref:this}));if(o.selected!==void 0)return T.value.length===0?E():o.selected({files:T.value,ref:this});if(e.useChips===!0)return T.value.length===0?E():T.value.map((H,G)=>v(xe,{key:"file-"+G,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{h(G)}},()=>v("span",{class:"ellipsis",textContent:H.name})));const M=e.displayValue!==void 0?e.displayValue:z.value;return M.length!==0?[v("div",{class:e.inputClass,style:e.inputStyle,textContent:M})]:E()}function L(){const M={ref:p,...F.value,...D.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:V};return e.multiple===!0&&(M.multiple=!0),v("input",M)}return Object.assign(c,{fieldClass:x,emitValue:i,hasValue:O,inputRef:p,innerValue:T,floatingLabel:R(()=>O.value===!0||et(e.displayValue)),computedCounter:R(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const M=e.maxFiles;return`${T.value.length}${M!==void 0?" / "+M:""} (${d.value})`}),getControlChild:()=>I("file"),getControl:()=>{const M={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(M,{onDragover:j,onDragleave:q,onKeydown:g,onKeyup:U}),v("div",M,[L()].concat(Y()))}}),Object.assign(u,{removeAtIndex:h,removeFile:s,getNativeElement:()=>p.value}),ut(u,"nativeEl",()=>p.value),Ht(c)}});const Wa=[v("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[v("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),v("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[v("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];var Xa=de({name:"QSpinnerGrid",props:pt,setup(e){const{cSize:o,classes:a}=ft(e);return()=>v("svg",{class:a.value,fill:"currentColor",width:o.value,height:o.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},Wa)}}),en=de({name:"QTimeline",props:{...Ke,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:o}){const a=Te(),r=Ye(e,a.proxy.$q);Yt(gt,e);const u=R(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(r.value===!0?" q-timeline--dark":""));return()=>v("ul",{class:u.value},$e(o.default))}});const tn=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],an=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],nn=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],ln=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],ot=(e,o,a)=>{let r=e;return typeof o=="string"||Array.isArray(o)?r=e.toLocaleString(o,a):(o===!0||a!==void 0)&&(r=e.toLocaleString(void 0,a)),r};function st(e,o){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);o={bits:!1,binary:!1,space:!0,...o};const a=o.bits?o.binary?ln:nn:o.binary?an:tn,r=o.space?" ":"";if(o.signed&&e===0)return` 0${r}${a[0]}`;const u=e<0,c=u?"-":o.signed?"+":"";u&&(e=-e);let p;if(o.minimumFractionDigits!==void 0&&(p={minimumFractionDigits:o.minimumFractionDigits}),o.maximumFractionDigits!==void 0&&(p={maximumFractionDigits:o.maximumFractionDigits,...p}),e<1){const j=ot(e,o.locale,p);return c+j+r+a[0]}const w=Math.min(Math.floor(o.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),a.length-1);e/=(o.binary?1024:1e3)**w,p||(e=e.toPrecision(3));const N=ot(Number(e),o.locale,p),P=a[w];return c+N+r+P}const on={class:"row justify-center items-center"},Le=200*1024*1024,sn=ge({__name:"BulkTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["update:apiKey"],setup(e,{emit:o}){const{t:a,locale:r}=_e({useScope:"global"}),u=Ae(),c=k(null),p=k(""),w=k(),N=z=>{w.value=z},P=o,j=e,q=R({get:()=>j.apiKey,set:z=>{P("update:apiKey",z)}}),$=([z])=>{const{failedPropValidation:d}=z;switch(d){case"max-file-size":je.create({message:`Exceed max file size: ${st(Le,{locale:r.value,binary:!0})}`,color:"negative"});break;case"accept":je.create({message:a("embedding.file_type_not_supported"),color:"negative"});break}};Ge(()=>({file:c,currentModel:w}),()=>{D.value=""},{deep:!0});const I=k(!1),D=k(""),T=k(!1),O=async()=>{if(T.value=!0,!w.value){je.create({message:a("embedding.model_required"),color:"negative"});return}if(!c.value){je.create({message:a("embedding.file_required"),color:"negative"});return}let z;try{I.value=!0;const d=q.value,{id:m}=await u.bulkEmbedding(d,{email:p.value,model:w.value.name,file:c.value}),F=60;let x=0;D.value=await new Promise((f,h)=>{z=setInterval(async()=>{x++;const s=await u.checkBulk(d,m);if(console.log(s),x>F&&clearInterval(z),s.status===Qe.COMPLETED){const i=await u.getBulkResult(d,m);clearInterval(z),f(i)}else s.status===Qe.FAILED?(T.value=!1,clearInterval(z),h(new Error(a("embedding.bulk_embedding_failed")))):s.status===Qe.IN_PROGRESS&&(T.value=!0)},1e3*30)})}catch(d){T.value=!1,je.create({message:d,color:"negative"})}finally{I.value=!1}Gt(()=>{clearInterval(z)})};return(z,d)=>(C(),Q(en,{class:"q-pa-lg"},{default:n(()=>[t(ze,{subtitle:l(a)("embedding.batch_upload_hint"),heading:!1},{default:n(()=>[ee("div",on,[t(Ve,{currentModel:w.value,indicator:!1,onChooseModel:N},null,8,["currentModel"]),t(fe,{"hide-bottom-space":"",filled:"",dense:"",loading:j.loadingTokens,square:"",modelValue:q.value,"onUpdate:modelValue":d[0]||(d[0]=m=>q.value=m),label:l(a)("embedding.key"),class:"col",error:j.availableTokens===void 0,"error-message":q.value?l(a)("embedding.input_api_key_error1"):""},{prepend:n(()=>[t(Z,{name:"vpn_key"})]),_:1},8,["loading","modelValue","label","error","error-message"])])]),_:1},8,["subtitle"]),t(ze,{subtitle:l(a)("embedding.original_documents_hint"),color:w.value&&!!q.value?"":"bg-dark"},{default:n(()=>[t(Za,{"bottom-slots":"",filled:"",square:"",modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=m=>c.value=m),label:l(a)("embedding.upload_file"),accept:"text/*",onRejected:$,"max-file-size":Le},{prepend:n(()=>[t(Z,{name:"file_upload"})]),hint:n(()=>[S(_(l(a)("embedding.max_file_size",{_maxSize:l(st)(Le,{locale:l(r),binary:!0})})),1)]),_:1},8,["modelValue","label"])]),_:1},8,["subtitle","color"]),t(ze,{subtitle:l(a)("embedding.write_email_here"),color:c.value&&w.value&&!!q.value?"":"bg-dark"},{default:n(()=>[t(fe,{filled:"",square:"",label:l(a)("subscribe_system.email"),type:"email",modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=m=>p.value=m),"lazy-rules":"",rules:[m=>!!m||l(a)("subscribe_system.email_required"),m=>l(ya).test(m)||l(a)("subscribe_system.email_invalid")]},{prepend:n(()=>[t(Z,{name:"email"})]),_:1},8,["label","modelValue","rules"])]),_:1},8,["subtitle","color"]),t(ze,{subtitle:l(a)("embedding.click_upload_btn_above"),color:p.value&&c.value&&w.value&&!!q.value?"":"bg-dark"},{default:n(()=>[t(K,{square:"",label:l(a)("embedding.start_batch"),icon:"send",onClick:O,padding:"md",disable:!c.value||!p.value||I.value},null,8,["label","disable"])]),_:1},8,["subtitle","color"]),T.value?(C(),Q(ze,{key:0,subtitle:l(a)("embedding.wait_for_processing")},{default:n(()=>[t(Xa,{class:"q-mr-sm"}),S(" "+_(l(a)("embedding.you_can_leave")),1)]),_:1},8,["subtitle"])):le("",!0)]),_:1}))}}),rn={class:"full-width q-px-md q-pt-md"},un={class:"row q-pa-md"},cn=ee("span",{class:"q-focus-helper"},null,-1),dn={class:"text-h6"},mn=ge({__name:"PurchaseTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["updateToken","update:apiKey"],setup(e,{emit:o}){const{t:a}=_e({useScope:"global"}),r=Ae(),{products:u}=Ce(r),c=o,p=e,w=s=>new Intl.NumberFormat("en").format(s),N=R(()=>p.availableTokens||0),P=R(()=>p.availableTokens===void 0),j=R(()=>p.loadingTokens),q=R({get:()=>p.apiKey,set:s=>{c("update:apiKey",s)}}),$=R(()=>!!q.value&&!P.value),I=k(""),D=async s=>{if(!$.value||j.value||I.value)return;const i=u.value.find(L=>L.price_id===s);let g,U;const A=new URL(window.location.href);A.pathname==="/"&&(A.hash="#enterprises"),A.searchParams.set("price_id",s),A.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),U=A.toString(),A.searchParams.set("purchase_status","success"),g=A.toString(),I.value=s;const V={price_id:s,success_url:g,cancel_url:U},E=localStorage.getItem(Jt);E&&(V.meta_data={sales_key:E}),i&&gtag("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const Y=await r.checkoutWithStripe(q.value,V);I.value="",Y&&(window.location.href=Y.url)},T=k(!1),O=()=>{!$.value||j.value||(T.value=!0)},z=()=>{var s;(s=F.value)==null||s.requestServerInteraction()},d=()=>{x.value=[]},m=k(!1),F=k(null),x=k([]),f=k([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:a("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),h=async()=>{m.value=!0;const s=await r.getUsage(q.value);m.value=!1,!(!s||s.length===0)&&(x.value=s.map(i=>{const g=new Date(i.updated_at);let U=i.quantity,A=a(`embedding.usage_reason_${i.type}`);return i.type===ra.CONSUME?(U=-U,i.metadata.model_name&&(A=A+": "+i.metadata.model_name)):(i.metadata.product_name&&(A=A+": "+i.metadata.product_name),i.metadata.order_quantity&&i.metadata.order_quantity>1&&(A=A+` (x ${i.metadata.order_quantity})`)),{createdAt:g,amount:U,reason:A}}))};return(s,i)=>(C(),W(te,null,[ee("div",rn,[t(fe,{"input-style":"font-family: monospace",modelValue:q.value,"onUpdate:modelValue":i[0]||(i[0]=g=>q.value=g),clearable:"",filled:"",square:"",label:q.value?`${l(a)("embedding.key_to_top_up")}`:l(a)("embedding.key_enter_placeholder_to_topup"),error:!$.value,"error-message":q.value?l(a)("embedding.input_api_key_error1"):"","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"])]),$.value?(C(),W(te,{key:0},[t(bt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:n(()=>[t(ie,{class:ne(s.$q.screen.lt.sm?"q-px-none":"")},{default:n(()=>[t(ae,{avatar:"",style:De(s.$q.screen.lt.sm?"min-width: auto !important;":"")},{default:n(()=>[t(Z,{name:"help_outline",class:"cursor-pointer",size:s.$q.screen.lt.sm?"xs":""},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),t(ae,null,{default:n(()=>[t(X,{overline:"",class:"row items-center"},{default:n(()=>[S(_(l(a)("embedding.remaining")),1)]),_:1}),P.value?le("",!0):(C(),Q(X,{key:0},{default:n(()=>[S(_(w(N.value)),1)]),_:1}))]),_:1}),t(Me,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),t(K,{flat:"",square:"",icon:"sync",class:"q-ml-sm",disable:!$.value||j.value,size:s.$q.screen.lt.sm?"sm":"md",onClick:i[1]||(i[1]=g=>c("updateToken",q.value))},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),t(he),t(K,{flat:"","no-caps":"",icon:"history",label:s.$q.screen.lt.sm?"":l(a)("embedding.usage_history"),dense:s.$q.screen.lt.sm,disable:!$.value||j.value,onClick:O},null,8,["label","dense","disable"])]),_:1}),t(be)],64)):le("",!0),t(ie,{class:"q-ma-md"},{default:n(()=>[t(ae,{avatar:"",side:""},{default:n(()=>[t(Z,{name:"fab fa-stripe",size:"sm"}),t(Z,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),t(ae,null,{default:n(()=>[t(X,null,{default:n(()=>[S(_(l(a)("embedding.buy_more_quota")),1)]),_:1}),t(X,{caption:""},{default:n(()=>[S(_(l(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1}),ee("div",un,[(C(!0),W(te,null,Be(l(u),(g,U)=>(C(),W("div",{key:U,class:"col-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer"},[ce((C(),Q(ye,{bordered:"",flat:"",class:ne(["full-width full-height column justify-between",$.value&&!j.value&&!I.value?"q-hoverable ":"cursor-not-allowed"]),square:"",style:De(I.value===g.price_id?"cursor: wait !important;":""),onClick:A=>D(g.price_id)},{default:n(()=>[cn,t(se,{class:"column items-center non-selectable q-py-lg text-h6"},{default:n(()=>[S(_(l(a)(`embedding.${g.product_name.replace(".","_")}`)),1)]),_:2},1024),t(se,{class:"column items-center text-center non-selectable q-px-lg text-weight-light text-caption"},{default:n(()=>[S(_(l(a)(`embedding.${g.product_name.replace(".","_")}_intuition1`)),1)]),_:2},1024),t(se,null,{default:n(()=>[t(ie,null,{default:n(()=>[t(ae,null,{default:n(()=>[t(X,{class:"text-bold"},{default:n(()=>[S("$"+_(g.price),1)]),_:2},1024),t(X,{caption:""},{default:n(()=>[S("$"+_(Number((g.price/g.token_quantity*1e6).toFixed(3)))+" "+_(l(a)("embedding.per_m")),1)]),_:2},1024)]),_:2},1024),t(ae,{side:""},{default:n(()=>[t(Z,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),t(Me,{showing:I.value===g.price_id,label:l(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[Ie,$.value&&!j.value&&!I.value]])]))),128))]),t(Je,{modelValue:T.value,"onUpdate:modelValue":i[2]||(i[2]=g=>T.value=g),onShow:z,onHide:d},{default:n(()=>[t(ye,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:n(()=>[t(se,{class:"row items-center q-pb-none"},{default:n(()=>[t(Z,{name:"history",size:"md",class:"q-mr-md"}),ee("div",dn,_(s.$q.screen.lt.sm?"":l(a)("embedding.usage_history")),1),t(he),ce(t(K,{icon:"close",flat:"",round:"",dense:""},null,512),[[qe]])]),_:1}),t(se,null,{default:n(()=>[t(l(We),{ref_key:"usageTableRef",ref:F,flat:"","row-key":"createdAt",rows:x.value,columns:f.value,loading:m.value,"hide-pagination":!0,onRequest:h},{"body-cell-icon":n(g=>[t(pe,{key:"icon",props:g},{default:n(()=>[g.row.amount>0?(C(),Q(Z,{key:0,name:"o_add_circle_outline",color:"primary"})):(C(),Q(Z,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":n(g=>[t(pe,{key:"amount",props:g},{default:n(()=>[S(_((g.row.amount>0?"+":"")+w(g.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),pn={class:"row q-pa-none"},fn={class:"full-width ellipsis q-pl-md"},gn={class:"row q-pa-none"},vn=ee("span",{class:"q-focus-helper"},null,-1),bn={class:"text-h6"};var wt=(e=>(e.CURL="curl",e.PYTHON="Python",e.JAVASCRIPT="JavaScript",e.RUBY="Ruby",e.PHP="PHP",e.JAVA="Java",e.NODEJS="Node.js",e.GO="Go",e.C_SHARP="C#",e.RUST="Rust",e))(wt||{});const J="https://api.jina.ai/v1/embeddings",yn="https://api.jina.ai/v1/rerank",hn=ge({__name:"EmbeddingComponent",props:{maximized:{type:Boolean,default:!1},showFunction:{default:"embedding"}},emits:["closeDialog"],setup(e,{emit:o}){const{t:a}=_e({useScope:"global"}),r=Zt(),u=k(!1),c=Ae(),{apiKey:p,products:w}=Ce(c),N=k(!1),P=y=>new Intl.NumberFormat("en").format(y),j=k(1e6),q=e,$=k(!q.maximized),I=async y=>{if(ve("event","embedding_refresh_api_key",{location:ke.location.href,type:y}),N.value)return;N.value=!0,await c.getApiKey().finally(()=>{N.value=!1})||r.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};Ne(()=>{navigator.userAgent.toLowerCase().includes("headless")||p.value||I("auto")});const D=k(!1),T=()=>{!p.value||D.value||(fa(p.value).then(()=>{r.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),D.value=!0,ve("event","embedding_copy_api_key",{location:ke.location.href})}),setTimeout(()=>{D.value=!1},1800))},O=k(0),z=k(!1),d=async y=>{z.value=!0;const b=await c.getTokens(y);z.value=!1,O.value=b};Ne(()=>{!p.value||d(p.value)}),Ge(p,y=>{!y||d(y)});const m=o,F=[{name:2,label:"embedding.manage_quota1",icon:"shopping_cart",showsOn:["embedding","reranker"]},{name:0,label:"embedding.usage",icon:"code",showsOn:["embedding"]},{name:1,label:"embedding.usage_rerank",icon:"code",showsOn:["reranker"]},{name:6,label:"embedding.visualize",icon:"mdi-axis-arrow",showsOn:["embedding"]},{name:5,label:"embedding.search",icon:"search",showsOn:["embedding"]},{name:4,label:"embedding.pairwise_test",icon:"join_full",showsOn:["embedding"]},{name:7,label:"embedding.batch_job",icon:"schedule_send",showsOn:["embedding"]},{name:3,label:"embedding.integrate",icon:"extension",showsOn:["embedding"]}],x=k(q.showFunction==="reranker"?1:0),f=k(),h=y=>{f.value=y},s=y=>{i.value=y},i=k("curl"),g=["Your text string goes here","You can send multiple texts"],U=["\u60A8\u7684\u67E5\u8BE2\u53EF\u4EE5\u662F\u4E2D\u6587","or in English only","\u6216\u662Fquery-doc\u4E2D\u82F1\u6DF7\u6742\u7684like this one."],A=["Heute ist ein wundersch\xF6ner Tag. Die Sonne scheint, und die V\xF6gel singen.","Today is a beautiful day. The sun is shining, and the birds are singing.","Today ist ein wundersch\xF6ner Tag. The sun scheint, und die birds are singing."],V=["El sol brilla intensamente hoy.","The sky is clear and blue.","I love going to the playa, it is so relaxing, \xBFno?"],E=["Calculates the square of a number. Parameters: number (int or float) - The number to square. Returns: int or float - The square of the number.","This function calculates the square of a number you give it.","def square(number): return number ** 2"],Y=R(()=>{var y,b,ue,B;return((y=f.value)==null?void 0:y.name)==="jina-embeddings-v2-base-zh"?U:((b=f.value)==null?void 0:b.name)==="jina-embeddings-v2-base-de"?A:((ue=f.value)==null?void 0:ue.name)==="jina-embeddings-v2-base-code"?E:((B=f.value)==null?void 0:B.name)==="jina-embeddings-v2-base-es"?V:g}),L=R(()=>`[${Y.value.map(y=>`"${y}"`).join(", ")}]`),M=R(()=>`array(${Y.value.map(y=>`"${y}"`).join(", ")})`),H=R(()=>`[${Y.value.map(y=>`""${y}""`).join(", ")}]`),G=R(()=>`[${Y.value.map(y=>`\\"${y}\\"`).join(", ")}]`),re=R(()=>{var ue;const y=p.value||"$JINA_API_KEY",b=((ue=f.value)==null?void 0:ue.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${yn} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${y}" \\
  -d '{
  "model": "jina-reranker-v1-base-en",
  "query": "Organic skincare products for sensitive skin",
  "documents": [
    "Eco-friendly kitchenware for modern homes",
    "Biodegradable cleaning supplies for eco-conscious consumers",
    "Organic cotton baby clothes for sensitive skin",
    "Natural organic skincare range for sensitive skin",
    "Tech gadgets for smart homes: 2024 edition",
    "Sustainable gardening tools and compost solutions",
    "Sensitive skin-friendly facial cleansers and toners",
    "Organic food wraps and storage solutions",
    "All-natural pet food for dogs with allergies",
    "Yoga mats made from recycled materials"
  ],
  "top_n": 3
}'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${J}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${y}'
}

data = {
  'input': ${L.value},
  'model': '${b}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${J}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${y}",
};

const data = {
  input: ${L.value},
  model: '${b}',
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

uri = URI.parse("${J}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${y}'
}

data = {
  'input' => ${L.value},
  'model' => '${b}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${J}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${y}"
);

$data = array(
    "input" => ${M.value},
    "model" => "${b}"
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
        String url = "${J}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${y}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${G.value},\\"model\\": \\"${b}\\"}";

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

const url = "${J}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${y}',
  }
};

const data = {
  input: ${L.value},
  model: '${b}'
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
	url := "${J}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${y}",
	}

	data := \`{
		"input": ${L.value},
		"model": "${b}"
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
        string url = "${J}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${y}");

        string data = @"{
            ""input"": ${H.value},
            ""model"": ""${b}""
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

    let res = client.post("${J}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${y}")
        .body(r#"{
            "input": ${L.value},
            "model": "${b}"
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
    `}}),we=R(()=>{var ue;const y=p.value||"$JINA_API_KEY",b=((ue=f.value)==null?void 0:ue.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${J} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${y}" \\
  -d '{
    "input": ${L.value},
    "model": "${b}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${J}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${y}'
}

data = {
  'input': ${L.value},
  'model': '${b}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${J}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${y}",
};

const data = {
  input: ${L.value},
  model: '${b}',
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

uri = URI.parse("${J}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${y}'
}

data = {
  'input' => ${L.value},
  'model' => '${b}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${J}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${y}"
);

$data = array(
    "input" => ${M.value},
    "model" => "${b}"
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
        String url = "${J}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${y}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${G.value},\\"model\\": \\"${b}\\"}";

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

const url = "${J}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${y}',
  }
};

const data = {
  input: ${L.value},
  model: '${b}'
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
	url := "${J}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${y}",
	}

	data := \`{
		"input": ${L.value},
		"model": "${b}"
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
        string url = "${J}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${y}");

        string data = @"{
            ""input"": ${H.value},
            ""model"": ""${b}""
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

    let res = client.post("${J}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${y}")
        .body(r#"{
            "input": ${L.value},
            "model": "${b}"
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
    `}});Ne(()=>{w.value.length||c.getProducts()});const ve=window.gtag,ke=window.document,Oe=()=>{r.dialog({component:Ka})};return(y,b)=>{const ue=Wt("q-markdown");return C(),W(te,null,[t(rt,{appear:"","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"},{default:n(()=>[$.value?(C(),Q(fe,{key:0,square:"",modelValue:l(p),"onUpdate:modelValue":b[1]||(b[1]=B=>Fe(p)?p.value=B:null),label:l(a)("embedding.key"),readonly:"",standout:"",class:ne(["full-width",$.value?"q-mb-xl":""]),loading:N.value,disable:N.value,"input-style":"font-family: monospace;",hint:l(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},Xt({prepend:n(()=>[t(K,{flat:"",square:"",stretch:"",icon:"refresh",onClick:b[0]||(b[0]=B=>u.value=!0)},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[N.value?void 0:{name:"append",fn:n(()=>[t(K,{flat:"",square:"",icon:D.value?"done":"content_copy",color:D.value?"positive":"",onClick:T},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","class","loading","disable","hint"])):le("",!0)]),_:1}),t(ye,{flat:"",square:"",bordered:"",class:ne(["full-width",{"full-height":y.maximized}])},{default:n(()=>[t(bt,{class:"q-pa-none"},{default:n(()=>[y.maximized?(C(),Q(Z,{key:0,name:"img:/Jina - Dark.svg",class:"q-mx-md",size:"xl"})):le("",!0),t(sa,{shrink:"",modelValue:x.value,"onUpdate:modelValue":b[2]||(b[2]=B=>x.value=B),"inline-label":!y.maximized,"indicator-color":"primary","active-color":"primary",align:"left"},{default:n(()=>[!y.maximized&&y.showFunction==="embedding"?(C(),Q(K,{key:0,stretch:"",icon:"zoom_out_map",onClick:Oe},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.maximize_tooltip")),1)]),_:1})]),_:1})):le("",!0),(C(!0),W(te,null,Be(F.filter(B=>B.showsOn.includes(y.showFunction)),B=>(C(),Q(ia,{key:B.name,name:B.name,label:l(a)(B.label),icon:B.icon},null,8,["name","label","icon"]))),128))]),_:1},8,["modelValue","inline-label"]),y.maximized?(C(),W(te,{key:2},[t(he),t(ea,{class:"q-mr-sm",label:l(a)("embedding.show_api_key"),modelValue:$.value,"onUpdate:modelValue":b[4]||(b[4]=B=>$.value=B),icon:"vpn_key"},null,8,["label","modelValue"]),t(K,{stretch:"","no-wrap":"",flat:"","no-caps":"",icon:"close",onClick:b[5]||(b[5]=B=>m("closeDialog"))})],64)):(C(),W(te,{key:1},[y.showFunction==="embedding"?(C(),W(te,{key:0},[t(he),t(K,{stretch:"","no-wrap":"",label:l(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:l(r).screen.lt.sm?"12px":"md",onClick:b[3]||(b[3]=B=>l(ve)("event","embedding_goto_faq",{location:l(ke).location.href}))},null,8,["label","size"])],64)):le("",!0)],64))]),_:1}),t(be),t(ka,{modelValue:x.value,"onUpdate:modelValue":b[11]||(b[11]=B=>x.value=B),animated:""},{default:n(()=>[t(me,{name:2,class:"q-pa-none"},{default:n(()=>[t(mn,{onUpdateToken:d,"loading-tokens":z.value,"available-tokens":O.value,"api-key":l(p),"onUpdate:apiKey":b[6]||(b[6]=B=>Fe(p)?p.value=B:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),t(me,{name:0,class:"q-pa-none"},{default:n(()=>[ee("div",pn,[ee("div",{class:ne(["row",l(r).screen.lt.sm?"col-12":""])},[t(Ve,{currentModel:f.value,onChooseModel:h},null,8,["currentModel"]),t(ht,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:ne(l(r).screen.lt.sm?"full-width q-py-md":""),onClick:b[7]||(b[7]=B=>l(ve)("event","embedding_click_code_lang_dropdown",{location:l(ke).location.href}))},{label:n(()=>[ee("div",fn,_(i.value),1)]),default:n(()=>[t(yt,null,{default:n(()=>[(C(),W(te,null,Be(wt,(B,Ue)=>ce(t(ie,{key:Ue,clickable:"",active:B===i.value,"active-class":"text-primary bg-grey-10",onClick:kt=>s(B)},{default:n(()=>[t(ae,null,{default:n(()=>[t(X,null,{default:n(()=>[S(_(B),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Ie],[qe]])),64))]),_:1})]),_:1},8,["class"])],2),l(r).screen.lt.sm?le("",!0):(C(),Q(he,{key:0})),ee("div",{class:ne(["row",l(r).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[t(ie,{class:ne(l(r).screen.lt.sm?"col q-pr-none":"")},{default:n(()=>[t(ae,{avatar:"",style:De(l(r).screen.lt.sm?"min-width: auto !important;":"")},{default:n(()=>[t(Z,{name:"help_outline",class:"cursor-pointer"},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),t(ae,{class:ne(l(r).screen.lt.sm?"items-center":"")},{default:n(()=>[t(X,{overline:"",class:"row items-center"},{default:n(()=>[S(_(l(a)("embedding.remaining")),1)]),_:1}),typeof O.value=="number"?(C(),Q(X,{key:0},{default:n(()=>[S(_(P(O.value)),1)]),_:1})):le("",!0)]),_:1},8,["class"]),t(Me,{showing:z.value},null,8,["showing"])]),_:1},8,["class"]),t(K,{flat:"",square:"",icon:"sync",onClick:b[8]||(b[8]=B=>d(l(p)))},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2)]),t(be),t(ue,{src:we.value[i.value],"show-copy":"",class:ne(["q-py-lg",l(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(a)("copy"),"copy-response-text":l(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),t(me,{name:1,class:"q-pa-none"},{default:n(()=>[ee("div",gn,[ee("div",{class:ne(["row",l(r).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[t(ie,{class:ne(l(r).screen.lt.sm?"col q-pr-none":"")},{default:n(()=>[t(ae,{avatar:"",style:De(l(r).screen.lt.sm?"min-width: auto !important;":"")},{default:n(()=>[t(Z,{name:"help_outline",class:"cursor-pointer"},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),t(ae,{class:ne(l(r).screen.lt.sm?"items-center":"")},{default:n(()=>[t(X,{overline:"",class:"row items-center"},{default:n(()=>[S(_(l(a)("embedding.remaining")),1)]),_:1}),typeof O.value=="number"?(C(),Q(X,{key:0},{default:n(()=>[S(_(P(O.value)),1)]),_:1})):le("",!0)]),_:1},8,["class"]),t(Me,{showing:z.value},null,8,["showing"])]),_:1},8,["class"]),t(K,{flat:"",square:"",icon:"sync",onClick:b[9]||(b[9]=B=>d(l(p)))},{default:n(()=>[t(oe,null,{default:n(()=>[S(_(l(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2)]),t(be),t(ue,{src:re.value[i.value],"show-copy":"",class:ne(["q-py-lg",l(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(a)("copy"),"copy-response-text":l(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),t(me,{name:6,class:"q-pa-none"},{default:n(()=>[t(lt,{"as-visualizer":!0,"maximized-window":y.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),t(me,{name:5,class:"q-pa-none"},{default:n(()=>[t(lt,{"maximized-window":y.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),t(me,{name:4,class:"q-pa-none"},{default:n(()=>[t(Ua)]),_:1},8,["name"]),t(me,{name:7,class:"q-pa-none"},{default:n(()=>[t(sn,{"loading-tokens":z.value,"available-tokens":O.value,"api-key":l(p),"onUpdate:apiKey":b[10]||(b[10]=B=>Fe(p)?p.value=B:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),t(me,{name:3,class:"q-pa-none"},{default:n(()=>[t(ie,{class:"q-ma-sm"},{default:n(()=>[t(ae,null,{default:n(()=>[S(_(l(a)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),t(se,{class:"row"},{default:n(()=>[(C(!0),W(te,null,Be(l(Na),(B,Ue)=>(C(),Q(ie,{key:Ue,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:n(()=>[ce((C(),Q(ye,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:kt=>l(ta)(B.homepage)},{default:n(()=>[vn,t(se,{class:"column items-center non-selectable q-py-lg"},{default:n(()=>[B.icon?(C(),Q(it,{key:0,fit:"contain",height:"40px",width:"40px",src:B.icon,loading:"lazy"},null,8,["src"])):le("",!0)]),_:2},1024),t(se,{class:"text-center non-selectable"},{default:n(()=>[S(_(B.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Ie]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),t(Me,{class:"non-selectable lock-blur",showing:N.value},null,8,["showing"])]),_:1},8,["class"]),t(Je,{modelValue:u.value,"onUpdate:modelValue":b[14]||(b[14]=B=>u.value=B)},{default:n(()=>[t(ye,null,{default:n(()=>[t(se,null,{default:n(()=>[ee("div",bn,_(l(a)("embedding.top_up_warning_title")),1)]),_:1}),t(be),typeof O.value=="number"?(C(),Q(se,{key:0},{default:n(()=>[S(_(l(a)("embedding.top_up_warning_message",{_remainedTokens:P(O.value),_freeTokens:P(j.value)})),1)]),_:1})):le("",!0),t(be),t(aa,{align:"right"},{default:n(()=>[ce(t(K,{flat:"",square:"","no-caps":"",label:l(a)("embedding.cancel_button")},null,8,["label"]),[[qe]]),ce(t(K,{flat:"",square:"","no-caps":"",icon:"add_shopping_cart",label:l(a)("embedding.top_up_button"),color:"primary",onClick:b[12]||(b[12]=B=>x.value=2)},null,8,["label"]),[[qe]]),ce(t(K,{flat:"",square:"","no-caps":"",label:l(a)("embedding.get_new_key_button"),onClick:b[13]||(b[13]=B=>I("manual"))},null,8,["label"]),[[qe]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Vn as N,ka as Q,hn as _,me as a,Me as b,Na as v};
