import{Q as mt}from"./QImg.6f34dd3a.js";import{k as de,R as Ge,m as xt,S as Ze,s as qt,h as P,i as b,T as pt,C as Ce,b5 as Tt,e as ve,a6 as ye,a8 as Q,a9 as n,aq as he,bL as Ct,aa as q,ab as t,ao as oe,ae as le,ag as ae,ai as T,aj as y,af as o,bv as At,bw as jt,am as W,D as Me,$ as Bt,f as w,br as ft,J as gt,aU as Ot,j as Y,P as He,aL as zt,bK as Nt,as as qe,ar as Pt,w as Je,K as Fe,aF as re,ac as L,ad as xe,Z as ue,bz as Mt,al as G,b1 as Ne,b9 as vt,bM as It,an as ge,bN as bt,bO as ht,bP as yt,ah as ne,bQ as Re,bR as at,ak as X,av as pe,aX as We,U as Ee,V as Ft,W as Rt,bS as _t,aV as Vt,E as wt,N as Dt,aH as $t,aP as Et,aI as Ut,aK as Qt,aQ as Ht,bT as Lt,aJ as Kt,aT as nt,I as Yt,a1 as Gt,bU as Oe,a5 as Zt,bV as ot,bW as Jt,bE as Wt,bF as Xt,u as ea,au as ta,bX as aa,bY as na,bB as oa,ap as la}from"./index.ddba8469.js";import{Q as te,b as Se}from"./QBadge.f987323a.js";import{_ as sa}from"./NewsBadge.6c1fdd46.js";import{_ as ia,A as ra}from"./blogs.9d240814.js";import{_ as Xe}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ie}from"./QTooltip.9632bb71.js";import{Q as ua,a as ca}from"./QTabs.1b225d9d.js";import{Q as Te}from"./QSpace.4c66938e.js";import{u as Ae,B as Ue,Q as kt,T as da}from"./embedding.ad5d2ab4.js";import{u as ma,b as pa,c as fa,d as ga}from"./QCarousel.79bdbf02.js";import{Q as Le}from"./QList.b7691eed.js";import{Q as Ke,a as va}from"./QBtnDropdown.cccf0a81.js";import{C as be}from"./ClosePopup.3a6b4db3.js";import{c as ba}from"./copy-to-clipboard.ae1e1168.js";import{Q as et,a as fe}from"./QTable.1a6f4560.js";import{Q as ha}from"./QMenu.16221f99.js";import{Q as ya}from"./QLinearProgress.e132e9ff.js";import{h as _a}from"./format.afd66c59.js";import{R as wa}from"./regexp.d033247d.js";var Ve=de({name:"QInnerLoading",props:{...Ge,...xt,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(e,{slots:l}){const a=Ce(),r=Ze(e,a.proxy.$q),{transitionProps:u,transitionStyle:c}=qt(e),p=P(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),_=P(()=>"q-inner-loading__label"+(e.labelClass!==void 0?` ${e.labelClass}`:""));function M(){const B=[b(Tt,{size:e.size,color:e.color})];return e.label!==void 0&&B.push(b("div",{class:_.value,style:e.labelStyle},[e.label])),B}function I(){return e.showing===!0?b("div",{class:p.value,style:c.value},l.default!==void 0?l.default():M()):null}return()=>b(pt,u.value,I)}});const ka=e=>(At("data-v-5445f441"),e=e(),jt(),e),Sa=ka(()=>W("span",{class:"q-focus-helper"},null,-1)),xa=ve({__name:"NewsroomCard",props:{info:{}},setup(e){const l=e,a=P(()=>Ct(l.info.publishedAt).format("MMMM DD, YYYY")),{t:r}=ye({useScope:"global"}),u=c=>{window.open(c)};return(c,p)=>(q(),Q(he,{flat:"",square:"",onClick:p[0]||(p[0]=_=>u(`/news/${c.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:n(()=>[Sa,t(oe,{class:"q-pa-none"},{default:n(()=>[t(mt,{src:c.info.featureImage,height:"200px",loading:"lazy",alt:c.info.featureImageAlt},{default:n(()=>[t(ia,{"alt-text":c.info.featureImageAlt},null,8,["alt-text"])]),_:1},8,["src","alt"])]),_:1}),t(oe,{style:{height:"250px"}},{default:n(()=>[t(le,null,{default:n(()=>[t(sa,{news:c.info},null,8,["news"])]),_:1}),t(le,null,{default:n(()=>[t(ae,{class:"text-h6 text-weight-light"},{default:n(()=>[t(te,{lines:"2"},{default:n(()=>[T(y(c.info.title),1)]),_:1})]),_:1})]),_:1}),t(le,null,{default:n(()=>[t(ae,null,{default:n(()=>[t(te,{lines:"3",caption:""},{default:n(()=>[T(y(c.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(oe,null,{default:n(()=>[t(le,null,{default:n(()=>[t(ra,{authors:c.info.authors},null,8,["authors"]),t(ae,null,{default:n(()=>[t(te,null,{default:n(()=>[T(y(c.info.authors.map(_=>_.name).join(", ")),1)]),_:1}),t(te,{caption:""},{default:n(()=>[T(y(a.value)+" \u2022 "+y(c.info.readingTime)+" "+y(o(r)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Qn=Xe(xa,[["__scopeId","data-v-5445f441"]]),me=de({name:"QTabPanel",props:ma,setup(e,{slots:l}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},Me(l.default))}}),qa=de({name:"QTabPanels",props:{...pa,...Ge},emits:fa,setup(e,{slots:l}){const a=Ce(),r=Ze(e,a.proxy.$q),{updatePanelsList:u,getPanelContent:c,panelDirectives:p}=ga(),_=P(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(l),Bt("div",{class:_.value},c(),"pan",e.swipeable,()=>p.value))}}),Ta="/assets/icon-MongoDB.982c1a31.svg",Ca="/assets/icon-Weaviate.7149e9ab.svg",Aa="/assets/icon-Qdrant.934fd07b.svg",ja="data:image/png;base64,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",Ba="/assets/icon-Chroma.2b9ab43a.svg",Oa="/assets/icon-Langchain.f2ee033d.png",za="/assets/icon-LlamaIndex.480689aa.png",Na="/assets/icon-Dify.8dc6e6d4.png",Pa="/assets/icon-Haystack.c2968447.svg",Ma="/assets/icon-SuperDuperDB.94465a4c.svg",Ia="/assets/icon-Epsilla.461331c8.png",Fa="/assets/icon-MyScale.5669eb9d.svg",Ra="/assets/icon-DashVector.3017419e.svg";const Va=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:Ta},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:Aa},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:ja},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:Ba},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:Ca},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:Ia},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-ai-embedding",icon:Fa},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:za},{label:"Haystack",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:Pa},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:Oa},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:Na},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/walkthrough/ai_apis/#jina",icon:Ma},{label:"DashVector",tags:["vector_store"],homepage:"https://help.aliyun.com/document_detail/2668339.html",icon:Ra}];var St=de({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:l}){const a=P(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>b("tr",{class:a.value},Me(l.default))}});function Pe(e,l=new WeakMap){if(Object(e)!==e)return e;if(l.has(e))return l.get(e);const a=e instanceof Date?new Date(e):e instanceof RegExp?new RegExp(e.source,e.flags):e instanceof Set?new Set:e instanceof Map?new Map:typeof e.constructor!="function"?Object.create(null):e.prototype!==void 0&&typeof e.prototype.constructor=="function"?e:new e.constructor;if(typeof e.constructor=="function"&&typeof e.valueOf=="function"){const r=e.valueOf();if(Object(r)!==r){const u=new e.constructor(r);return l.set(e,u),u}}return l.set(e,a),e instanceof Set?e.forEach(r=>{a.add(Pe(r,l))}):e instanceof Map&&e.forEach((r,u)=>{a.set(u,Pe(r,l))}),Object.assign(a,...Object.keys(e).map(r=>({[r]:Pe(e[r],l)})))}var lt=de({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(e,{slots:l,emit:a}){const{proxy:r}=Ce(),{$q:u}=r,c=w(null),p=w(""),_=w("");let M=!1;const I=P(()=>ft({initialValue:p.value,validate:e.validate,set:B,cancel:k,updatePosition:N},"value",()=>_.value,F=>{_.value=F}));function B(){e.validate(_.value)!==!1&&(R()===!0&&(a("save",_.value,p.value),a("update:modelValue",_.value)),V())}function k(){R()===!0&&a("cancel",_.value,p.value),V()}function N(){gt(()=>{c.value.updatePosition()})}function R(){return Ot(_.value,p.value)===!1}function V(){M=!0,c.value.hide()}function C(){M=!1,p.value=Pe(e.modelValue),_.value=Pe(e.modelValue),a("beforeShow")}function U(){a("show")}function O(){M===!1&&R()===!0&&(e.autoSave===!0&&e.validate(_.value)===!0?(a("save",_.value,p.value),a("update:modelValue",_.value)):a("cancel",_.value,p.value)),a("beforeHide")}function d(){a("hide")}function m(){const F=l.default!==void 0?[].concat(l.default(I.value)):[];return e.title&&F.unshift(b("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},e.title)),e.buttons===!0&&F.push(b("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[b(Y,{flat:!0,color:e.color,label:e.labelCancel||u.lang.label.cancel,onClick:k}),b(Y,{flat:!0,color:e.color,label:e.labelSet||u.lang.label.set,onClick:B})])),F}return Object.assign(r,{set:B,cancel:k,show(F){c.value!==null&&c.value.show(F)},hide(F){c.value!==null&&c.value.hide(F)},updatePosition:N}),()=>{if(e.disable!==!0)return b(ha,{ref:c,class:"q-popup-edit",cover:e.cover,onBeforeShow:C,onShow:U,onBeforeHide:O,onHide:d,onEscapeKey:k},m)}}});function Da(e){const l=Object.assign({noopener:!0},e),a=[];for(const r in l){const u=l[r];u===!0?a.push(r):(Nt(u)||typeof u=="string"&&u!=="")&&a.push(r+"="+u)}return a.join(",")}function st(e,l,a){let r=window.open;if(He.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)r=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(e,{openExternal:!0})}const u=r(e,"_blank",Da(a));if(u)return He.is.desktop&&u.focus(),u;l&&l()}var $a=(e,l,a)=>{if(He.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(r=>{r?window.SafariViewController.show({url:e},zt,l):st(e,l,a)});return}return st(e,l,a)};const Ea={class:"full-width ellipsis q-pl-md"},De=ve({__name:"ModelDropDown",props:{currentModel:{},indicator:{type:Boolean,default:!0}},emits:["chooseModel"],setup(e,{emit:l}){const{t:a}=ye({useScope:"global"}),r=Ae(),{models:u,baseDeModel:c,baseEnModel:p,baseZhModel:_}=qe(r),M=Pt(),{language:I}=qe(M),B=w(!1),k=l,N=()=>{var m;k("chooseModel",(m=_.value)!=null?m:p.value)},R=()=>{var m;k("chooseModel",(m=c.value)!=null?m:p.value)};Je(I,m=>{m&&["zh-CN","zh-TW"].includes(m)?N():m==="de"&&R()}),Fe(async()=>{await V()});const V=async()=>{B.value=!0,await r.getModels(),B.value=!1,u.value.length>0&&(I.value&&["zh-CN","zh-TW"].includes(I.value)?N():I.value==="de"?R():k("chooseModel",p.value))},C=m=>{U("event","embedding_view_model_detail",{location:O.location.href,model:m}),$a(`https://huggingface.co/jinaai/${m}`)},U=window.gtag,O=window.document,d=m=>m==="en"?"\u{1F1FA}\u{1F1F8}":m==="zh"?"\u{1F1E8}\u{1F1F3}\u{1F1FA}\u{1F1F8}":m==="de"?"\u{1F1E9}\u{1F1EA}\u{1F1FA}\u{1F1F8}":m==="es"?"\u{1F1EA}\u{1F1F8}\u{1F1FA}\u{1F1F8}":"\u{1F30D}";return(m,F)=>(q(),Q(Ke,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:B.value,class:re(["dynamic-text-btn",m.$q.screen.lt.sm?"full-width q-py-md":""]),"disable-dropdown":B.value,onClick:F[0]||(F[0]=S=>o(U)("event","embedding_click_model_dropdown",{location:o(O).location.href}))},{label:n(()=>{var S;return[W("div",Ea,y((S=m.currentModel)==null?void 0:S.name),1)]}),default:n(()=>[t(Le,null,{default:n(()=>[(q(!0),L(G,null,xe(o(u),(S,g)=>{var h;return ue((q(),Q(le,{key:g,clickable:"",active:S.name===((h=m.currentModel)==null?void 0:h.name),onClick:i=>k("chooseModel",S),class:"q-pa-md"},{default:n(()=>[t(ae,null,{default:n(()=>[t(te,{overline:"",caption:""},{default:n(()=>[T(y(S.name),1)]),_:2},1024),t(te,{class:"text-weight-bold"},{default:n(()=>[T(y(o(a)(`embedding.${S.name}_description`)),1)]),_:2},1024),t(te,{caption:"",class:"row"},{default:n(()=>{var i,s,f,$,A;return[t(Se,{label:S.meta_data.token_length,square:"",color:S.name!==((i=m.currentModel)==null?void 0:i.name)?"grey-5":"",size:"xs",outline:"",icon:"notes",style:{"border-radius":"0"}},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.token_length_explain",{_tokenLength:S.meta_data.token_length})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(Se,{label:S.meta_data.output_dim,square:"",color:S.name!==((s=m.currentModel)==null?void 0:s.name)?"grey-5":"",size:"xs",outline:"",icon:"mdi-axis-arrow",style:{"border-radius":"0"}},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.output_dim_explain",{_outputDim:S.meta_data.output_dim})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(Se,{label:S.meta_data.size,square:"",size:"xs",color:S.name!==((f=m.currentModel)==null?void 0:f.name)?"grey-5":"",outline:"",icon:"mdi-matrix",style:{"border-radius":"0"}},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.size_explain",{_size:S.meta_data.size})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(Se,{label:d(S.meta_data.language),square:"",color:S.name!==(($=m.currentModel)==null?void 0:$.name)?"grey-5":"",size:"xs",outline:"",style:{"border-radius":"0"}},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.language_explain",{_language:d(S.meta_data.language)})),1)]),_:2},1024)]),_:2},1032,["label","color"]),t(Se,{icon:"img:/huggingface_logo.svg",square:"",size:"xs",outline:"",color:S.name!==((A=m.currentModel)==null?void 0:A.name)?"grey-5":"",style:{"border-radius":"0"},onClick:Mt(D=>C(S.name),["stop"]),clickable:"",label:o(a)("embedding.opensource")},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.opensource_explain")),1)]),_:1})]),_:2},1032,["color","onClick","label"])]}),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[Ne],[be]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]))}});const Ua={class:"row full-width"},Qa=ve({__name:"TestTab",setup(e){const{t:l}=ye({useScope:"global"}),a=w(!1),r=Ae(),u=w(),{testData:c}=qe(r),p=g=>{u.value=g,d(c.value).catch(h=>{console.error("calculateScores",h)})},_=[{name:"text1",field:"text1",label:l("embedding.text1"),required:!0,align:"left",sortable:!0},{name:"text2",field:"text1",label:l("embedding.text2"),required:!0,align:"left",sortable:!0},{name:"score",align:"right",label:l("embedding.cosine_similarity"),sortable:!0,field:g=>{var h;return g.scores[((h=u.value)==null?void 0:h.name)||""]||NaN}}],M=g=>{var h,i;return((i=g.scores)==null?void 0:i[((h=u.value)==null?void 0:h.name)||""])||NaN},I=w({page:1,rowsPerPage:10}),B=w([]),k=w(null),N=w(null),R=()=>{c.value=c.value.filter(g=>!B.value.includes(g)),B.value=[]},V=g=>{k.value=g},C=g=>{N.value=g},U=()=>{const g={id:c.value.length,text1:S[Math.floor(Math.random()*S.length)],text2:S[Math.floor(Math.random()*S.length)],scores:{},isNew:!0};c.value.unshift(g),d([g]).catch(h=>{console.error("calculateScores",h)}),I.value.page=1,gt(()=>{var h;(h=k.value)==null||h.show()})},O=(g,h,i)=>{var s;i[h]=g,i.scores={},i.isNew&&(h==="text1"?(s=N.value)==null||s.show():h==="text2"&&(i.isNew=!1)),d([i]).catch(f=>{console.error("calculateScores",f)})};async function d(g){if(!u.value)return;const h=u.value.name,i=g.filter(s=>s.text1&&s.text2).filter(s=>{var f;return!((f=s.scores)!=null&&f[h])});if(i.length!==0)try{a.value=!0;const s=100;for(let f=0;f<i.length;f+=s){const $=i.slice(f,f+s),A=await F($,h);for(const D of $){const E=A[D.text1],K=A[D.text2];!E||!K||(D.scores=D.scores||{},D.scores[h]=bt(A[D.text1],A[D.text2]))}}}finally{a.value=!1}}const m={};async function F(g,h){m[h]||(m[h]={});const i="https://api.jina.ai/v1/embeddings",s={"Content-Type":"application/json",Authorization:`Bearer ${r.apiKey}`},f=g.map($=>[$.text1,$.text2]).flat().filter(Boolean).filter($=>!m[h][$]);if(f.length>0){const $={input:f,model:h},D=await(await fetch(i,{method:"POST",headers:s,body:JSON.stringify($)})).json();for(const E of D.data)m[h][$.input[E.index]]=E.embedding}return m[h]}const S=["The only way to do great work is to love what you do.","The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don\u2019t change people; they merely amplify what is already there.","Your time is limited, don\u2019t waste it living someone else\u2019s life.","Not how long, but how well you have lived is the main thing.","If life were predictable it would cease to be life, and be without flavor.","The big lesson in life, baby, is never be scared of anyone or anything.","Sing like no one\u2019s listening, love like you\u2019ve never been hurt, dance like nobody\u2019s watching, and live like it\u2019s heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","Turn your wounds into wisdom.","The way to get started is to quit talking and begin doing.","The greatest glory in living lies not in never falling, but in rising every time we fall."];return(g,h)=>(q(),Q(et,{class:"my-sticky-column-table col key-value-table",flat:"",rows:o(c),columns:_,"row-key":"id","binary-state-sort":"",selection:"multiple",pagination:I.value,"onUpdate:pagination":h[0]||(h[0]=i=>I.value=i),selected:B.value,"onUpdate:selected":h[1]||(h[1]=i=>B.value=i),loading:a.value,"no-data-label":o(l)("embedding.no_data1"),separator:"cell"},{top:n(()=>[W("div",Ua,[t(va,{flat:"",square:""},{default:n(()=>[t(Y,{square:"",icon:"add",label:o(l)("embedding.add_pair"),flat:"",padding:"md",onClick:U},null,8,["label"]),ue(t(Y,{square:"",padding:"md",icon:"delete_forever",color:"negative",label:o(l)("embedding.delete_pair"),flat:"",onClick:R},null,8,["label"]),[[vt,B.value.length>0]])]),_:1}),t(Te),t(De,{currentModel:u.value,indicator:!1,onChooseModel:p},null,8,["currentModel"])])]),body:n(i=>[t(St,{props:i},{default:n(()=>[t(fe,{key:"selection"},{default:n(()=>[t(It,{modelValue:i.selected,"onUpdate:modelValue":s=>i.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(fe,{key:"text1",props:i,class:"fixed-cell"},{default:n(()=>[T(y(i.row.text1)+" ",1),t(o(lt),{ref:s=>{i.row.isNew&&i.rowIndex===0&&V(s)},modelValue:i.row.text1,"onUpdate:modelValue":s=>i.row.text1=s,"auto-save":"",onSave:s=>O(s,"text1",i.row)},{default:n(s=>[t(ge,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,dense:"",autofocus:"",counter:"",label:o(l)("embedding.edit_text1_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),t(fe,{key:"text2",props:i,class:"fixed-cell"},{default:n(()=>[T(y(i.row.text2)+" ",1),t(o(lt),{ref:s=>{i.row.isNew&&i.rowIndex===0&&C(s)},modelValue:i.row.text2,"onUpdate:modelValue":s=>i.row.text2=s,"auto-save":"",onSave:s=>O(s,"text2",i.row)},{default:n(s=>[t(ge,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,dense:"",autofocus:"",counter:"",label:o(l)("embedding.edit_text2_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),t(fe,{key:"score",props:i},{default:n(()=>[T(y(M(i.row).toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","selected","loading","no-data-label"]))}});var Ha=Xe(Qa,[["__scopeId","data-v-6d7c27d2"]]);const La=[b("g",{transform:"translate(20 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(50 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(80 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Ka=de({name:"QSpinnerFacebook",props:ht,setup(e){const{cSize:l,classes:a}=yt(e);return()=>b("svg",{class:a.value,width:l.value,height:l.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},La)}});const Ya={class:"row full-width"},it="https://api.jina.ai/v1/embeddings",Ga=ve({__name:"SearchTab",props:{asVisualizer:{type:Boolean,default:!1},maximizedWindow:{type:Boolean,default:!1}},setup(e){const l=Ae(),{t:a}=ye({useScope:"global"}),r=w(""),u=w(),{userDocuments:c}=qe(l),p=w(null),_=A=>{u.value=A},M=w(""),I=w(""),B={"Content-Type":"application/json",Authorization:`Bearer ${l.apiKey}`},k=w([]),N=w([]),R=w(0),V=w(0),C=w(!0),U=w(!0),O=w(!1),d=w([]),m=w(""),F=w(!1),S=e,g=()=>{var A;m.value===""?s(c.value):(gtag("event","embedding_open_tensorboard",{model:(A=u.value)==null?void 0:A.name}),window.open(m.value,"_blank"))},h=async()=>{var ee,z;if(((ee=r.value)==null?void 0:ee.trim())==="")return;U.value=!1;const A={input:[(z=r.value)==null?void 0:z.trim()],model:u.value.name},D=await fetch(it,{method:"POST",headers:B,body:JSON.stringify(A)}),{data:E}=await D.json(),K=E[0].embedding;d.value=N.value.map((H,Z)=>({document:k.value[Z],similarity:bt(K,H)})),d.value.sort((H,Z)=>Z.similarity-H.similarity),U.value=!0,gtag("event","embedding_search_done",{model:u.value.name})},i=()=>{k.value=[],V.value=0,C.value=!1,R.value=0,N.value=[],m.value=""},s=A=>{i(),k.value=A.split(`
`).filter(D=>D.trim()!==""),V.value=k.value.length,f(k.value)};async function f(A){var E;const D=Math.max(20,Math.min(50,A.length/10));for(let K=0;K<A.length;K+=D){O.value=!0;const ee=A.slice(K,K+D),z={input:ee,model:u.value.name};try{const Z=await(await fetch(it,{method:"POST",headers:B,body:JSON.stringify(z)})).json();for(const se of Z.data)N.value[K+se.index]=se.embedding;if(R.value+=ee.length,R.value>=V.value){if(C.value=!0,M.value="",I.value="",N.value.forEach((se,_e)=>{M.value+=se.join("	")+`
`,I.value+=k.value[_e].replaceAll("	"," ").trim()+`
`}),S.asVisualizer){F.value=!0;const se={description:"Projector Data Files",public:!0,files:{"tensor.tsv":{content:M.value},"metadata.tsv":{content:I.value}}},we=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${at}`,"Content-Type":"application/json"},body:JSON.stringify(se)})).json(),je={tensorName:((E=u.value)==null?void 0:E.name)||"Jina Embeddings",tensorShape:[N.value.length,N.value[0].length],tensorPath:we.files["tensor.tsv"].raw_url,metadataPath:we.files["metadata.tsv"].raw_url},$e={description:"Projector Meta Files",public:!0,files:{"project_config.json":{content:JSON.stringify({embeddings:[je]})}}},x=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${at}`,"Content-Type":"application/json"},body:JSON.stringify($e)})).json();m.value=`https://projector.tensorflow.org/?config=${x.files["project_config.json"].raw_url}`,F.value=!1}gtag("event","embedding_docs_done",{length:k.value.length,model:u.value.name})}}catch(H){console.error("An error occurred while embedding documents:",H)}finally{O.value=!1}}}const $=[{name:"document",field:"document",label:a("embedding.document"),required:!0,align:"left",sortable:!0},{name:"similarity",align:"right",label:a("embedding.cosine_similarity"),sortable:!0,field:"similarity"}];return(A,D)=>(q(),L(G,null,[W("div",Ya,[!e.asVisualizer&&(k.value.length===0||O.value)?(q(),Q(Y,{key:0,label:o(a)("embedding.start_embedding"),onClick:D[0]||(D[0]=E=>s(o(c))),icon:"play_arrow",disable:o(c)===""||O.value,padding:"md"},null,8,["label","disable"])):!e.asVisualizer&&!O.value?(q(),Q(o(ge),{key:1,class:"col",clearable:"",modelValue:r.value,"onUpdate:modelValue":[D[1]||(D[1]=E=>r.value=E),h],debounce:"500",label:V.value===0?o(a)("embedding.please_fill_docs_first"):o(a)("embedding.query"),loading:!U.value,"hide-bottom-space":""},{prepend:n(()=>[t(X,{name:"search",class:"q-mx-md"})]),_:1},8,["modelValue","label","loading"])):e.asVisualizer?(q(),Q(Y,{key:2,stretch:"",padding:"md",disable:o(c)===""||O.value,label:m.value?o(a)("embedding.open_tensorboard"):o(a)("embedding.visualize"),onClick:g,icon:m.value?"open_in_new":"play_arrow",loading:F.value},null,8,["disable","label","icon","loading"])):ne("",!0),t(Te),t(De,{currentModel:u.value,indicator:!1,onChooseModel:_},null,8,["currentModel"])]),t(pe),ue(t(ya,{value:R.value/V.value,indeterminate:F.value},null,8,["value","indeterminate"]),[[vt,V.value>0&&!C.value||F.value]]),d.value.length>0&&!!r.value?(q(),Q(et,{key:0,columns:$,class:"my-sticky-column-table col key-value-table",loading:!U.value,rows:d.value,pagination:{rowsPerPage:10}},{body:n(E=>[t(St,{props:E},{default:n(()=>[t(fe,{key:"document",props:E,class:"fixed-cell"},{default:n(()=>[T(y(E.row.document),1)]),_:2},1032,["props"]),t(fe,{key:"similarity",props:E},{default:n(()=>[T(y(E.row.similarity.toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])):(q(),Q(o(ge),{key:1,modelValue:o(c),"onUpdate:modelValue":[D[2]||(D[2]=E=>Re(c)?c.value=E:null),i],ref_key:"userInput",ref:p,label:o(a)("embedding.original_documents"),placeholder:o(a)("embedding.original_documents_hint"),filled:"",rows:"15",square:"","input-style":e.maximizedWindow?{height:"calc(100vh - 190px)"}:{},type:"textarea","bottom-slots":"",class:"q-mb-md"},{hint:n(()=>[V.value>0&&!C.value?(q(),L(G,{key:0},[t(Ka,{size:"20px"}),T(" "+y(o(a)("embedding.total_documents",{_Processed:R.value,_Count:V.value})),1)],64)):C.value&&V.value>0&&!e.asVisualizer?(q(),L(G,{key:1},[t(X,{name:"done"}),T(" "+y(o(a)("embedding.embedding_done",{_Count:V.value})),1)],64)):F.value?(q(),L(G,{key:2},[t(X,{name:"scatter_plot"}),T(" "+y(o(a)("embedding.generating_visualization")),1)],64)):m.value?(q(),L(G,{key:3},[t(X,{name:"open_in_new"}),T(" "+y(o(a)("embedding.visualize_done")),1)],64)):V.value<=1?(q(),L(G,{key:4},[t(X,{name:"info"}),T(" "+y(o(a)("embedding.more_than_two2")),1)],64)):ne("",!0)]),_:1},8,["modelValue","label","placeholder","input-style"]))],64))}});var rt=Xe(Ga,[["__scopeId","data-v-79e181fe"]]);const Za=ve({__name:"EmbeddingDialog",setup(e){const l=w(null),a=()=>{var r;(r=l.value)==null||r.hide()};return(r,u)=>(q(),Q(o(We),{maximized:"",ref_key:"embeddingFSDialog",ref:l},{default:n(()=>[t(he,{flat:""},{default:n(()=>[t(Sn,{maximized:!0,onCloseDialog:a,"show-function":"all"})]),_:1})]),_:1},512))}});var ze=de({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(e,{slots:l}){const a=Rt(_t,Ee);if(a===Ee)return console.error("QTimelineEntry needs to be child of QTimeline"),Ee;const r=P(()=>`q-timeline__entry q-timeline__entry--${e.side}`+(e.icon!==void 0||e.avatar!==void 0?" q-timeline__entry--icon":"")),u=P(()=>`q-timeline__dot text-${e.color||a.color}`),c=P(()=>a.layout==="comfortable"&&a.side==="left");return()=>{const p=Ft(l.default,[]);if(e.body!==void 0&&p.unshift(e.body),e.heading===!0){const I=[b("div"),b("div"),b(e.tag,{class:"q-timeline__heading-title"},p)];return b("div",{class:"q-timeline__heading"},c.value===!0?I.reverse():I)}let _;e.icon!==void 0?_=[b(X,{class:"row items-center justify-center",name:e.icon})]:e.avatar!==void 0&&(_=[b("img",{class:"q-timeline__dot-img",src:e.avatar})]);const M=[b("div",{class:"q-timeline__subtitle"},[b("span",{},Me(l.subtitle,[e.subtitle]))]),b("div",{class:u.value},_),b("div",{class:"q-timeline__content"},[b("h6",{class:"q-timeline__title"},Me(l.title,[e.title]))].concat(p))];return b("li",{class:r.value},c.value===!0?M.reverse():M)}}});function ke(e,l,a,r){const u=[];return e.forEach(c=>{r(c)===!0?u.push(c):l.push({failedPropValidation:a,file:c})}),u}function Ie(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),wt(e)}const Ja={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Wa=["rejected"];function Xa({editable:e,dnd:l,getFileInput:a,addFilesToQueue:r}){const{props:u,emit:c,proxy:p}=Ce(),_=w(null),M=P(()=>u.accept!==void 0?u.accept.split(",").map(d=>(d=d.trim(),d==="*"?"*/":(d.endsWith("/*")&&(d=d.slice(0,d.length-1)),d.toUpperCase()))):null),I=P(()=>parseInt(u.maxFiles,10)),B=P(()=>parseInt(u.maxTotalSize,10));function k(d){if(e.value)if(d!==Object(d)&&(d={target:null}),d.target!==null&&d.target.matches('input[type="file"]')===!0)d.clientX===0&&d.clientY===0&&Vt(d);else{const m=a();m&&m!==d.target&&m.click(d)}}function N(d){e.value&&d&&r(null,d)}function R(d,m,F,S){let g=Array.from(m||d.target.files);const h=[],i=()=>{h.length!==0&&c("rejected",h)};if(u.accept!==void 0&&M.value.indexOf("*/")===-1&&(g=ke(g,h,"accept",s=>M.value.some(f=>s.type.toUpperCase().startsWith(f)||s.name.toUpperCase().endsWith(f))),g.length===0))return i();if(u.maxFileSize!==void 0){const s=parseInt(u.maxFileSize,10);if(g=ke(g,h,"max-file-size",f=>f.size<=s),g.length===0)return i()}if(u.multiple!==!0&&g.length!==0&&(g=[g[0]]),g.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),S===!0){const s=F.map(f=>f.__key);g=ke(g,h,"duplicate",f=>s.includes(f.__key)===!1)}if(g.length===0)return i();if(u.maxTotalSize!==void 0){let s=S===!0?F.reduce((f,$)=>f+$.size,0):0;if(g=ke(g,h,"max-total-size",f=>(s+=f.size,s<=B.value)),g.length===0)return i()}if(typeof u.filter=="function"){const s=u.filter(g);g=ke(g,h,"filter",f=>s.includes(f))}if(u.maxFiles!==void 0){let s=S===!0?F.length:0;if(g=ke(g,h,"max-files",()=>(s++,s<=I.value)),g.length===0)return i()}if(i(),g.length!==0)return g}function V(d){Ie(d),l.value!==!0&&(l.value=!0)}function C(d){wt(d),(d.relatedTarget!==null||Dt.is.safari!==!0?d.relatedTarget!==_.value:document.elementsFromPoint(d.clientX,d.clientY).includes(_.value)===!1)===!0&&(l.value=!1)}function U(d){Ie(d);const m=d.dataTransfer.files;m.length!==0&&r(null,m),l.value=!1}function O(d){if(l.value===!0)return b("div",{ref:_,class:`q-${d}__dnd absolute-full`,onDragenter:Ie,onDragover:Ie,onDragleave:C,onDrop:U})}return Object.assign(p,{pickFiles:k,addFiles:N}),{pickFiles:k,addFiles:N,onDragover:V,onDragleave:C,processFiles:R,getDndNode:O,maxFilesNumber:I,maxTotalSizeNumber:B}}var en=de({name:"QFile",inheritAttrs:!1,props:{...$t,...Et,...Ja,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ut,...Wa],setup(e,{slots:l,emit:a,attrs:r}){const{proxy:u}=Ce(),c=Qt(),p=w(null),_=w(!1),M=Ht(e),{pickFiles:I,onDragover:B,onDragleave:k,processFiles:N,getDndNode:R}=Xa({editable:c.editable,dnd:_,getFileInput:A,addFilesToQueue:D}),V=Lt(e),C=P(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),U=P(()=>nt(C.value)),O=P(()=>C.value.map(z=>z.name).join(", ")),d=P(()=>_a(C.value.reduce((z,H)=>z+H.size,0))),m=P(()=>({totalSize:d.value,filesNumber:C.value.length,maxFiles:e.maxFiles})),F=P(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:M.value,...r,id:c.targetUid.value,disabled:c.editable.value!==!0})),S=P(()=>"q-file q-field--auto-height"+(_.value===!0?" q-file--dnd":"")),g=P(()=>e.multiple===!0&&e.append===!0);function h(z){const H=C.value.slice();H.splice(z,1),s(H)}function i(z){const H=C.value.indexOf(z);H>-1&&h(H)}function s(z){a("update:modelValue",e.multiple===!0?z:z[0])}function f(z){z.keyCode===13&&Yt(z)}function $(z){(z.keyCode===13||z.keyCode===32)&&I(z)}function A(){return p.value}function D(z,H){const Z=N(z,H,C.value,g.value),se=A();se!=null&&(se.value=""),Z!==void 0&&((e.multiple===!0?e.modelValue&&Z.every(_e=>C.value.includes(_e)):e.modelValue===Z[0])||s(g.value===!0?C.value.concat(Z):Z))}function E(){return[b("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function K(){if(l.file!==void 0)return C.value.length===0?E():C.value.map((H,Z)=>l.file({index:Z,file:H,ref:this}));if(l.selected!==void 0)return C.value.length===0?E():l.selected({files:C.value,ref:this});if(e.useChips===!0)return C.value.length===0?E():C.value.map((H,Z)=>b(Se,{key:"file-"+Z,removable:c.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{h(Z)}},()=>b("span",{class:"ellipsis",textContent:H.name})));const z=e.displayValue!==void 0?e.displayValue:O.value;return z.length!==0?[b("div",{class:e.inputClass,style:e.inputStyle,textContent:z})]:E()}function ee(){const z={ref:p,...F.value,...V.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:D};return e.multiple===!0&&(z.multiple=!0),b("input",z)}return Object.assign(c,{fieldClass:S,emitValue:s,hasValue:U,inputRef:p,innerValue:C,floatingLabel:P(()=>U.value===!0||nt(e.displayValue)),computedCounter:P(()=>{if(e.counterLabel!==void 0)return e.counterLabel(m.value);const z=e.maxFiles;return`${C.value.length}${z!==void 0?" / "+z:""} (${d.value})`}),getControlChild:()=>R("file"),getControl:()=>{const z={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return c.editable.value===!0&&Object.assign(z,{onDragover:B,onDragleave:k,onKeydown:f,onKeyup:$}),b("div",z,[ee()].concat(K()))}}),Object.assign(u,{removeAtIndex:h,removeFile:i,getNativeElement:()=>p.value}),ft(u,"nativeEl",()=>p.value),Kt(c)}});const tn=[b("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[b("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];var an=de({name:"QSpinnerGrid",props:ht,setup(e){const{cSize:l,classes:a}=yt(e);return()=>b("svg",{class:a.value,fill:"currentColor",width:l.value,height:l.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},tn)}}),nn=de({name:"QTimeline",props:{...Ge,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:e=>["left","right"].includes(e)},layout:{type:String,default:"dense",validator:e=>["dense","comfortable","loose"].includes(e)}},setup(e,{slots:l}){const a=Ce(),r=Ze(e,a.proxy.$q);Gt(_t,e);const u=P(()=>`q-timeline q-timeline--${e.layout} q-timeline--${e.layout}--${e.side}`+(r.value===!0?" q-timeline--dark":""));return()=>b("ul",{class:u.value},Me(l.default))}});const on=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],ln=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],sn=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],rn=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],ut=(e,l,a)=>{let r=e;return typeof l=="string"||Array.isArray(l)?r=e.toLocaleString(l,a):(l===!0||a!==void 0)&&(r=e.toLocaleString(void 0,a)),r};function ct(e,l){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);l={bits:!1,binary:!1,space:!0,...l};const a=l.bits?l.binary?rn:sn:l.binary?ln:on,r=l.space?" ":"";if(l.signed&&e===0)return` 0${r}${a[0]}`;const u=e<0,c=u?"-":l.signed?"+":"";u&&(e=-e);let p;if(l.minimumFractionDigits!==void 0&&(p={minimumFractionDigits:l.minimumFractionDigits}),l.maximumFractionDigits!==void 0&&(p={maximumFractionDigits:l.maximumFractionDigits,...p}),e<1){const B=ut(e,l.locale,p);return c+B+r+a[0]}const _=Math.min(Math.floor(l.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),a.length-1);e/=(l.binary?1024:1e3)**_,p||(e=e.toPrecision(3));const M=ut(Number(e),l.locale,p),I=a[_];return c+M+r+I}const un={class:"row justify-center items-center"},Qe=200*1024*1024,cn=ve({__name:"BulkTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["update:apiKey"],setup(e,{emit:l}){const{t:a,locale:r}=ye({useScope:"global"}),u=Ae(),c=w(null),p=w(""),_=w(),M=O=>{_.value=O},I=l,B=e,k=P({get:()=>B.apiKey,set:O=>{I("update:apiKey",O)}}),N=([O])=>{const{failedPropValidation:d}=O;switch(d){case"max-file-size":Oe.create({message:`Exceed max file size: ${ct(Qe,{locale:r.value,binary:!0})}`,color:"negative"});break;case"accept":Oe.create({message:a("embedding.file_type_not_supported"),color:"negative"});break}};Je(()=>({file:c,currentModel:_}),()=>{V.value=""},{deep:!0});const R=w(!1),V=w(""),C=w(!1),U=async()=>{if(C.value=!0,!_.value){Oe.create({message:a("embedding.model_required"),color:"negative"});return}if(!c.value){Oe.create({message:a("embedding.file_required"),color:"negative"});return}let O;try{R.value=!0;const d=k.value,{id:m}=await u.bulkEmbedding(d,{email:p.value,model:_.value.name,file:c.value}),F=60;let S=0;V.value=await new Promise((g,h)=>{O=setInterval(async()=>{S++;const i=await u.checkBulk(d,m);if(console.log(i),S>F&&clearInterval(O),i.status===Ue.COMPLETED){const s=await u.getBulkResult(d,m);clearInterval(O),g(s)}else i.status===Ue.FAILED?(C.value=!1,clearInterval(O),h(new Error(a("embedding.bulk_embedding_failed")))):i.status===Ue.IN_PROGRESS&&(C.value=!0)},1e3*30)})}catch(d){C.value=!1,Oe.create({message:d,color:"negative"})}finally{R.value=!1}Zt(()=>{clearInterval(O)})};return(O,d)=>(q(),Q(nn,{class:"q-pa-lg"},{default:n(()=>[t(ze,{subtitle:o(a)("embedding.batch_upload_hint"),heading:!1},{default:n(()=>[W("div",un,[t(De,{currentModel:_.value,indicator:!1,onChooseModel:M},null,8,["currentModel"]),t(ge,{"hide-bottom-space":"",filled:"",dense:"",loading:B.loadingTokens,square:"",modelValue:k.value,"onUpdate:modelValue":d[0]||(d[0]=m=>k.value=m),label:o(a)("embedding.key"),class:"col",error:B.availableTokens===void 0,"error-message":k.value?o(a)("embedding.input_api_key_error1"):""},{prepend:n(()=>[t(X,{name:"vpn_key"})]),_:1},8,["loading","modelValue","label","error","error-message"])])]),_:1},8,["subtitle"]),t(ze,{subtitle:o(a)("embedding.original_documents_hint"),color:_.value&&!!k.value?"":"bg-dark"},{default:n(()=>[t(en,{"bottom-slots":"",filled:"",square:"",modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=m=>c.value=m),label:o(a)("embedding.upload_file"),accept:"text/*",onRejected:N,"max-file-size":Qe},{prepend:n(()=>[t(X,{name:"file_upload"})]),hint:n(()=>[T(y(o(a)("embedding.max_file_size",{_maxSize:o(ct)(Qe,{locale:o(r),binary:!0})})),1)]),_:1},8,["modelValue","label"])]),_:1},8,["subtitle","color"]),t(ze,{subtitle:o(a)("embedding.write_email_here"),color:c.value&&_.value&&!!k.value?"":"bg-dark"},{default:n(()=>[t(ge,{filled:"",square:"",label:o(a)("subscribe_system.email"),type:"email",modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=m=>p.value=m),"lazy-rules":"",rules:[m=>!!m||o(a)("subscribe_system.email_required"),m=>o(wa).test(m)||o(a)("subscribe_system.email_invalid")]},{prepend:n(()=>[t(X,{name:"email"})]),_:1},8,["label","modelValue","rules"])]),_:1},8,["subtitle","color"]),t(ze,{subtitle:o(a)("embedding.click_upload_btn_above"),color:p.value&&c.value&&_.value&&!!k.value?"":"bg-dark"},{default:n(()=>[t(Y,{square:"",label:o(a)("embedding.start_batch"),icon:"send",onClick:U,padding:"md",disable:!c.value||!p.value||R.value},null,8,["label","disable"])]),_:1},8,["subtitle","color"]),C.value?(q(),Q(ze,{key:0,subtitle:o(a)("embedding.wait_for_processing")},{default:n(()=>[t(an,{class:"q-mr-sm"}),T(" "+y(o(a)("embedding.you_can_leave")),1)]),_:1},8,["subtitle"])):ne("",!0)]),_:1}))}}),dn={class:"full-width q-px-md q-pt-md"},mn={class:"row q-pa-md"},pn=W("span",{class:"q-focus-helper"},null,-1),fn={class:"text-h6"},gn=ve({__name:"PurchaseTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["updateToken","update:apiKey"],setup(e,{emit:l}){const{t:a}=ye({useScope:"global"}),r=Ae(),{products:u}=qe(r),c=l,p=e,_=i=>new Intl.NumberFormat("en").format(i),M=P(()=>p.availableTokens||0),I=P(()=>p.availableTokens===void 0),B=P(()=>p.loadingTokens),k=P({get:()=>p.apiKey,set:i=>{c("update:apiKey",i)}}),N=P(()=>!!k.value&&!I.value),R=w(""),V=async i=>{if(!N.value||B.value||R.value)return;const s=u.value.find(ee=>ee.price_id===i);let f,$;const A=new URL(window.location.href);A.pathname==="/"&&(A.hash="#enterprises"),A.searchParams.set("price_id",i),A.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),$=A.toString(),A.searchParams.set("purchase_status","success"),f=A.toString(),R.value=i;const D={price_id:i,success_url:f,cancel_url:$},E=localStorage.getItem(Jt);E&&(D.meta_data={sales_key:E}),s&&gtag("event","begin_checkout",{currency:s.currency,value:s.price,items:[{id:s.product_id,name:s.product_name}]});const K=await r.checkoutWithStripe(k.value,D);R.value="",K&&(window.location.href=K.url)},C=w(!1),U=()=>{!N.value||B.value||(C.value=!0)},O=()=>{var i;(i=F.value)==null||i.requestServerInteraction()},d=()=>{S.value=[]},m=w(!1),F=w(null),S=w([]),g=w([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:i=>{if(typeof i=="string")return new Date(i).toLocaleString();if(i instanceof Date)return i.toLocaleString();if(i)return i.toDate().toLocaleString()}},{name:"amount",label:a("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:i=>i>0?`+${i}`:`${i}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),h=async()=>{m.value=!0;const i=await r.getUsage(k.value);m.value=!1,!(!i||i.length===0)&&(S.value=i.map(s=>{const f=new Date(s.updated_at);let $=s.quantity,A=a(`embedding.usage_reason_${s.type}`);return s.type===da.CONSUME?($=-$,s.metadata.model_name&&(A=A+": "+s.metadata.model_name)):(s.metadata.product_name&&(A=A+": "+s.metadata.product_name),s.metadata.order_quantity&&s.metadata.order_quantity>1&&(A=A+` (x ${s.metadata.order_quantity})`)),{createdAt:f,amount:$,reason:A}}))};return(i,s)=>(q(),L(G,null,[W("div",dn,[t(ge,{"input-style":"font-family: monospace",modelValue:k.value,"onUpdate:modelValue":s[0]||(s[0]=f=>k.value=f),clearable:"",filled:"",square:"",label:k.value?`${o(a)("embedding.key_to_top_up")}`:o(a)("embedding.key_enter_placeholder_to_topup"),error:!N.value,"error-message":k.value?o(a)("embedding.input_api_key_error1"):"","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"])]),N.value?(q(),L(G,{key:0},[t(kt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:n(()=>[t(le,null,{default:n(()=>[t(ae,{avatar:"",style:ot(i.$q.screen.lt.sm?"min-width: auto !important;":"")},{default:n(()=>[t(X,{name:"help_outline",class:"cursor-pointer",size:i.$q.screen.lt.sm?"xs":""},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),t(ae,null,{default:n(()=>[t(te,{overline:"",class:"row items-center"},{default:n(()=>[T(y(o(a)("embedding.remaining")),1)]),_:1}),I.value?ne("",!0):(q(),Q(te,{key:0},{default:n(()=>[T(y(_(M.value)),1)]),_:1}))]),_:1}),t(Ve,{showing:B.value},null,8,["showing"])]),_:1}),t(Y,{flat:"",square:"",icon:"sync",class:"q-ml-sm",disable:!N.value||B.value,size:i.$q.screen.lt.sm?"sm":"md",padding:"md",onClick:s[1]||(s[1]=f=>c("updateToken",k.value))},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),t(Te),t(Y,{square:"",flat:"","no-caps":"",icon:"history",label:i.$q.screen.lt.sm?"":o(a)("embedding.usage_history"),dense:i.$q.screen.lt.sm,padding:"md",disable:!N.value||B.value,onClick:U},null,8,["label","dense","disable"])]),_:1}),t(pe)],64)):ne("",!0),t(le,{class:"q-ma-md"},{default:n(()=>[t(ae,{avatar:"",side:""},{default:n(()=>[t(X,{name:"fab fa-stripe",size:"sm"}),t(X,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),t(ae,null,{default:n(()=>[t(te,null,{default:n(()=>[T(y(o(a)("embedding.buy_more_quota")),1)]),_:1}),t(te,{caption:""},{default:n(()=>[T(y(o(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1}),W("div",mn,[(q(!0),L(G,null,xe(o(u),(f,$)=>(q(),L("div",{key:$,class:"col-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer"},[ue((q(),Q(he,{bordered:"",flat:"",class:re(["full-width full-height column justify-between",N.value&&!B.value&&!R.value?"q-hoverable ":"cursor-not-allowed"]),square:"",style:ot(R.value===f.price_id?"cursor: wait !important;":""),onClick:A=>V(f.price_id)},{default:n(()=>[pn,t(oe,{class:"column items-center non-selectable q-py-lg text-h6"},{default:n(()=>[T(y(o(a)(`embedding.${f.product_name.replace(".","_")}`)),1)]),_:2},1024),t(oe,{class:"column items-center text-center non-selectable q-px-lg text-weight-light text-caption"},{default:n(()=>[T(y(o(a)(`embedding.${f.product_name.replace(".","_")}_intuition1`)),1)]),_:2},1024),t(oe,null,{default:n(()=>[t(le,null,{default:n(()=>[t(ae,null,{default:n(()=>[t(te,{class:"text-bold"},{default:n(()=>[T("$"+y(f.price),1)]),_:2},1024),t(te,{caption:""},{default:n(()=>[T("$"+y(Number((f.price/f.token_quantity*1e6).toFixed(3)))+" "+y(o(a)("embedding.per_m")),1)]),_:2},1024)]),_:2},1024),t(ae,{side:""},{default:n(()=>[t(X,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),t(Ve,{showing:R.value===f.price_id,label:o(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[Ne,N.value&&!B.value&&!R.value]])]))),128))]),t(We,{modelValue:C.value,"onUpdate:modelValue":s[2]||(s[2]=f=>C.value=f),onShow:O,onHide:d},{default:n(()=>[t(he,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:n(()=>[t(oe,{class:"row items-center q-pb-none"},{default:n(()=>[t(X,{name:"history",size:"md",class:"q-mr-md"}),W("div",fn,y(i.$q.screen.lt.sm?"":o(a)("embedding.usage_history")),1),t(Te),ue(t(Y,{icon:"close",flat:"",round:"",dense:""},null,512),[[be]])]),_:1}),t(oe,null,{default:n(()=>[t(o(et),{ref_key:"usageTableRef",ref:F,flat:"","row-key":"createdAt",rows:S.value,columns:g.value,loading:m.value,"hide-pagination":!0,onRequest:h},{"body-cell-icon":n(f=>[t(fe,{key:"icon",props:f},{default:n(()=>[f.row.amount>0?(q(),Q(X,{key:0,name:"o_add_circle_outline",color:"primary"})):(q(),Q(X,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":n(f=>[t(fe,{key:"amount",props:f},{default:n(()=>[T(y((f.row.amount>0?"+":"")+_(f.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),vn={class:"row q-pa-none"},bn={class:"full-width ellipsis q-pl-md"},hn={class:"row q-pa-none"},yn={class:"full-width ellipsis q-pl-md"},_n=W("span",{class:"q-focus-helper"},null,-1),wn={class:"row"},kn={class:"text-h6"};var Ye=(e=>(e.CURL="curl",e.PYTHON="Python",e.JAVASCRIPT="JavaScript",e.NODEJS="Node.js",e.RUST="Rust",e.JAVA="Java",e.GO="Go",e.C_SHARP="C#",e.RUBY="Ruby",e.PHP="PHP",e))(Ye||{});const ce="https://api.jina.ai/v1/embeddings",dt="https://api.jina.ai/v1/rerank",Sn=ve({__name:"EmbeddingComponent",props:{maximized:{type:Boolean,default:!1},showFunction:{default:"embedding"}},emits:["closeDialog"],setup(e,{emit:l}){const{t:a}=ye({useScope:"global"}),r=ea(),u=w(!1),c=Ae(),{apiKey:p,products:_}=qe(c),M=w(!1),I=v=>new Intl.NumberFormat("en").format(v),B=w(1e6),k=e,N=w(!k.maximized),R=async v=>{if(we("event","embedding_refresh_api_key",{location:je.location.href,type:v}),M.value)return;M.value=!0,await c.getApiKey().finally(()=>{M.value=!1})||r.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};Fe(()=>{navigator.userAgent.toLowerCase().includes("headless")||p.value||R("auto")});const V=w(!1),C=()=>{!p.value||V.value||(ba(p.value).then(()=>{r.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),V.value=!0,we("event","embedding_copy_api_key",{location:je.location.href})}),setTimeout(()=>{V.value=!1},1800))},U=w(0),O=w(!1),d=async v=>{O.value=!0;const x=await c.getTokens(v);O.value=!1,U.value=x};Fe(()=>{!p.value||d(p.value)}),Je(p,v=>{!v||d(v)});const m=l,F=w([{name:2,label:"embedding.manage_quota1",icon:"shopping_cart",showsOn:["embedding","reranker","all"]},{name:0,label:k.showFunction==="all"?"landing_page.embeddings":"embedding.usage",icon:k.showFunction==="all"?Wt:"code",showsOn:["embedding","all"],tag:"usage"},{name:1,label:k.showFunction==="all"?"landing_page.reranker":"embedding.usage",icon:k.showFunction==="all"?Xt:"code",showsOn:["reranker","all"],tag:"usage"},{name:6,label:"embedding.visualize",icon:"mdi-axis-arrow",showsOn:["embedding","all"]},{name:5,label:"embedding.search",icon:"search",showsOn:["embedding","all"]},{name:4,label:"embedding.pairwise_test",icon:"join_full",showsOn:["embedding","all"]},{name:7,label:"embedding.batch_job",icon:"schedule_send",showsOn:["embedding","all"]},{name:3,label:"embedding.integrate",icon:"extension",showsOn:["embedding","all"]}]),S=w(k.showFunction==="reranker"?1:0),g=w(),h=v=>{g.value=v},i=v=>{s.value=v},s=w("curl"),f=["Your text string goes here","You can send multiple texts"],$=["\u60A8\u7684\u67E5\u8BE2\u53EF\u4EE5\u662F\u4E2D\u6587","or in English only","\u6216\u662Fquery-doc\u4E2D\u82F1\u6DF7\u6742\u7684like this one."],A=["Heute ist ein wundersch\xF6ner Tag. Die Sonne scheint, und die V\xF6gel singen.","Today is a beautiful day. The sun is shining, and the birds are singing.","Today ist ein wundersch\xF6ner Tag. The sun scheint, und die birds are singing."],D=["El sol brilla intensamente hoy.","The sky is clear and blue.","I love going to the playa, it is so relaxing, \xBFno?"],E=["Calculates the square of a number. Parameters: number (int or float) - The number to square. Returns: int or float - The square of the number.","This function calculates the square of a number you give it.","def square(number): return number ** 2"],K=P(()=>{var v,x,J,j;return((v=g.value)==null?void 0:v.name)==="jina-embeddings-v2-base-zh"?$:((x=g.value)==null?void 0:x.name)==="jina-embeddings-v2-base-de"?A:((J=g.value)==null?void 0:J.name)==="jina-embeddings-v2-base-code"?E:((j=g.value)==null?void 0:j.name)==="jina-embeddings-v2-base-es"?D:f}),ee=P(()=>`[${K.value.map(v=>`"${v}"`).join(", ")}]`),z=P(()=>`array(${K.value.map(v=>`"${v}"`).join(", ")})`),H=P(()=>`[${K.value.map(v=>`""${v}""`).join(", ")}]`),Z=P(()=>`[${K.value.map(v=>`\\"${v}\\"`).join(", ")}]`),se=P(()=>{const v=p.value||"$JINA_API_KEY",x="jina-reranker-v1-base-en",J=dt;return{curl:`
\`\`\`shell
curl ${dt} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${v}" \\
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

url = f"${J}"

headers = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer ${v}"
}

data = {
    "model": model,
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
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
\`\`\`
    `,JavaScript:`
\`\`\`javascript
const fetch = require('node-fetch');

const url = "${J}";
const key = "${v}";
const model = "${x}";

const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${v}",
};

const data = {
    "model": model,
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
};

fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => console.log(data));
\`\`\`
    `,["Node.js"]:`
\`\`\`javascript
const https = require('https');

const data = JSON.stringify({
  model: 'jina-reranker-v1-base-en',
  query: 'Organic skincare products for sensitive skin',
  documents: [
    'Eco-friendly kitchenware for modern homes',
    'Biodegradable cleaning supplies for eco-conscious consumers',
    'Organic cotton baby clothes for sensitive skin',
    'Natural organic skincare range for sensitive skin',
    'Tech gadgets for smart homes: 2024 edition',
    'Sustainable gardening tools and compost solutions',
    'Sensitive skin-friendly facial cleansers and toners',
    'Organic food wraps and storage solutions',
    'All-natural pet food for dogs with allergies',
    'Yoga mats made from recycled materials'
  ],
  top_n: 3
});

const options = {
  hostname: '${J}',
  path: '/rerank',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${v}'
  }
};

const req = https.request(options, (res) => {
  console.log(\`StatusCode: \${res.statusCode}\`);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});

req.write(data);
req.end();
\`\`\`
    `,Rust:`
\`\`\`rust
use reqwest::header::{AUTHORIZATION, CONTENT_TYPE};
use std::collections::HashMap;

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let url = "${J}".to_string();
    let api_key = "Bearer ${v}".to_string();
    let client = reqwest::Client::new();

    let mut data = HashMap::new();
    data.insert("model", "jina-reranker-v1-base-en");
    data.insert("query", "Organic skincare products for sensitive skin");
    data.insert("documents", serde_json::json!([
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
    ]));
    data.insert("top_n", 3);

    let response = client.post(&url)
        .header(CONTENT_TYPE, "application/json")
        .header(AUTHORIZATION, api_key)
        .json(&data)
        .send()
        .await?;

    println!("Status: {}", response.status());
    let response_text = response.text().await?;
    println!("Response: {}", response_text);

    Ok(())
}
\`\`\`
    `,Java:`
\`\`\`java
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class JinaRerankerRequest {
    public static void main(String[] args) {
        String urlString = "${J}";
        String apiKey = "${v}"; // Your API key
        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json; utf-8");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setDoOutput(true);

            String jsonInputString = "{"model": "jina-reranker-v1-base-en", "query": "Organic skincare products for sensitive skin", "documents": ["Eco-friendly kitchenware for modern homes", "Biodegradable cleaning supplies for eco-conscious consumers", "Organic cotton baby clothes for sensitive skin", "Natural organic skincare range for sensitive skin", "Tech gadgets for smart homes: 2024 edition", "Sustainable gardening tools and compost solutions", "Sensitive skin-friendly facial cleansers and toners", "Organic food wraps and storage solutions", "All-natural pet food for dogs with allergies", "Yoga mats made from recycled materials"], "top_n": 3}";

            try(OutputStream os = conn.getOutputStream()) {
                byte[] input = jsonInputString.getBytes("utf-8");
                os.write(input, 0, input.length);
            }

            int responseCode = conn.getResponseCode();
            System.out.println("Response Code : " + responseCode);
            // Further processing here

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
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
    apiKey := "${v}" // Your API key
    var jsonStr = []byte(\`{
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
    }\`)

    req, err := http.NewRequest("POST", url, bytes.NewBuffer(jsonStr))
    req.Header.Set("Content-Type", "application/json")
    req.Header.Set("Authorization", "Bearer " + apiKey)

    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    fmt.Println("response Status:", resp.Status)
    // Further processing here
}
\`\`\`
    `,["C#"]:`
\`\`\`csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        var url = "${J}";
        var apiKey = "${v}";
        var httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");

        var data = new StringContent(@"{
            ""model"": ""jina-reranker-v1-base-en"",
            ""query"": ""Organic skincare products for sensitive skin"",
            ""documents"": [
                ""Eco-friendly kitchenware for modern homes"",
                ""Biodegradable cleaning supplies for eco-conscious consumers"",
                ""Organic cotton baby clothes for sensitive skin"",
                ""Natural organic skincare range for sensitive skin"",
                ""Tech gadgets for smart homes: 2024 edition"",
                ""Sustainable gardening tools and compost solutions"",
                ""Sensitive skin-friendly facial cleansers and toners"",
                ""Organic food wraps and storage solutions"",
                ""All-natural pet food for dogs with allergies"",
                ""Yoga mats made from recycled materials""
            ],
            ""top_n"": 3
        }", Encoding.UTF8, "application/json");

        var response = await httpClient.PostAsync(url, data);
        var responseString = await response.Content.ReadAsStringAsync();
        Console.WriteLine(responseString);
    }
}
\`\`\`
    `,Ruby:`
\`\`\`ruby
require 'net/http'
require 'json'
require 'uri'

url = URI.parse("${J}")
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true if url.scheme == 'https'

headers = {
  "Content-Type" => "application/json",
  "Authorization" => "Bearer #{key}"
}

data = {
  model: "jina-reranker-v1-base-en",
  query: "Organic skincare products for sensitive skin",
  documents: [
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
  top_n: 3
}

response = http.post(url, data.to_json, headers)
puts response.body
\`\`\`

    `,PHP:`
\`\`\`php
<?php
$url = "${J}";
$key = "${v}"; // Your API key
$model = "jina-reranker-v1-base-en";

$headers = [
    "Content-Type: application/json",
    "Authorization: Bearer ${v}"
];

$data = [
    "model" => $model,
    "query" => "Organic skincare products for sensitive skin",
    "documents" => [
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
    "top_n" => 3
];

$options = [
    'http' => [
        'method'  => 'POST',
        'header'  => implode("\r
", $headers),
        'content' => json_encode($data),
        'ignore_errors' => true
    ]
];

$context = stream_context_create($options);
$response = file_get_contents($url, false, $context);

echo $response;
?>
\`\`\`
    `}}),_e=P(()=>{var J;const v=p.value||"$JINA_API_KEY",x=((J=g.value)==null?void 0:J.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${ce} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${v}" \\
  -d '{
    "input": ${ee.value},
    "model": "${x}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${ce}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${v}'
}

data = {
  'input': ${ee.value},
  'model': '${x}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${ce}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${v}",
};

const data = {
  input: ${ee.value},
  model: '${x}',
};

fetch(url, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => console.log(data));
\`\`\`
    `,["Node.js"]:`
\`\`\`js
const https = require('https');

const url = "${ce}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${v}',
  }
};

const data = {
  input: ${ee.value},
  model: '${x}'
};

const req = https.request(url, options, (res) => {
  res.on('data', (chunk) => {
    console.log(\`BODY: \${chunk}\`);
  });
});

req.write(JSON.stringify(data));
req.end();
\`\`\`
    `,Rust:`
\`\`\`rust
use reqwest;

fn main() -> Result<(), reqwest::Error> {
    let client = reqwest::blocking::Client::new();

    let res = client.post("${ce}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${v}")
        .body(r#"{
            "input": ${ee.value},
            "model": "${x}"
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
    `,Java:`
\`\`\`java
import java.net.HttpURLConnection;
import java.net.URL;
import java.io.OutputStream;

public class JinaAPIRequest {
    public static void main(String[] args) throws Exception {
        String url = "${ce}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${v}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${Z.value},\\"model\\": \\"${x}\\"}";

        try(OutputStream os = con.getOutputStream()) {
            byte[] input = data.getBytes("utf-8");
            os.write(input, 0, input.length);
        }

        int responseCode = con.getResponseCode();
        System.out.println("Response Code: " + responseCode);
    }
}
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
	url := "${ce}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${v}",
	}

	data := \`{
		"input": ${ee.value},
		"model": "${x}"
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
        string url = "${ce}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${v}");

        string data = @"{
            ""input"": ${H.value},
            ""model"": ""${x}""
        }";

        var response = client.PostAsync(url, new StringContent(data, Encoding.UTF8, "application/json")).Result;
        Console.WriteLine(response.Content.ReadAsStringAsync().Result);
    }
}
\`\`\`
    `,Ruby:`
\`\`\`rb
require 'net/http'
require 'json'
require 'uri'

uri = URI.parse("${ce}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${v}'
}

data = {
  'input' => ${ee.value},
  'model' => '${x}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${ce}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${v}"
);

$data = array(
    "input" => ${z.value},
    "model" => "${x}"
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
    `}});Fe(()=>{_.value.length||c.getProducts()});const we=window.gtag,je=window.document,$e=()=>{r.dialog({component:Za})};return(v,x)=>{const J=ta("q-markdown");return q(),L(G,null,[t(pt,{appear:"","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"},{default:n(()=>[N.value?(q(),Q(ge,{key:0,square:"",modelValue:o(p),"onUpdate:modelValue":x[1]||(x[1]=j=>Re(p)?p.value=j:null),label:o(a)("embedding.key"),readonly:"",standout:"",class:re(["full-width",N.value?"q-mb-xl":""]),loading:M.value,disable:M.value,"input-style":"font-family: monospace;",hint:o(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},aa({prepend:n(()=>[t(Y,{flat:"",square:"",stretch:"",icon:"refresh",onClick:x[0]||(x[0]=j=>u.value=!0)},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[M.value?void 0:{name:"append",fn:n(()=>[t(Y,{flat:"",square:"",icon:V.value?"done":"content_copy",color:V.value?"positive":"",onClick:C},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","class","loading","disable","hint"])):ne("",!0)]),_:1}),t(he,{flat:"",square:"",bordered:"",class:re(["full-width",{"full-height":v.maximized}])},{default:n(()=>[t(kt,{class:"q-pa-none"},{default:n(()=>[v.maximized?(q(),Q(X,{key:0,name:"img:/Jina - Dark.svg",class:"q-mx-md",size:"xl"})):ne("",!0),t(ua,{shrink:"",modelValue:S.value,"onUpdate:modelValue":x[2]||(x[2]=j=>S.value=j),"inline-label":!v.maximized,"indicator-color":"primary","active-color":"primary",align:"left"},{default:n(()=>[v.maximized?ne("",!0):(q(),Q(Y,{key:0,stretch:"",icon:"zoom_out_map",onClick:$e},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.maximize_tooltip")),1)]),_:1})]),_:1})),(q(!0),L(G,null,xe(F.value.filter(j=>j.showsOn.includes(v.showFunction)),j=>(q(),Q(ca,{key:j.name,name:j.name,label:o(a)(j.label),icon:v.showFunction==="all"&&j.tag==="usage"?`img:${j.icon}`:j.icon},null,8,["name","label","icon"]))),128))]),_:1},8,["modelValue","inline-label"]),v.maximized?(q(),L(G,{key:2},[t(Te),t(na,{class:"q-mr-sm",label:o(a)("embedding.show_api_key"),modelValue:N.value,"onUpdate:modelValue":x[4]||(x[4]=j=>N.value=j),icon:"vpn_key"},null,8,["label","modelValue"]),t(Y,{stretch:"","no-wrap":"",flat:"","no-caps":"",icon:"close",onClick:x[5]||(x[5]=j=>m("closeDialog"))})],64)):(q(),L(G,{key:1},[v.showFunction==="embedding"?(q(),L(G,{key:0},[t(Te),t(Y,{stretch:"","no-wrap":"",label:o(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:o(r).screen.lt.sm?"12px":"md",onClick:x[3]||(x[3]=j=>o(we)("event","embedding_goto_faq",{location:o(je).location.href}))},null,8,["label","size"])],64)):ne("",!0)],64))]),_:1}),t(pe),t(qa,{modelValue:S.value,"onUpdate:modelValue":x[8]||(x[8]=j=>S.value=j),animated:""},{default:n(()=>[t(me,{name:2,class:"q-pa-none"},{default:n(()=>[t(gn,{onUpdateToken:d,"loading-tokens":O.value,"available-tokens":U.value,"api-key":o(p),"onUpdate:apiKey":x[6]||(x[6]=j=>Re(p)?p.value=j:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),v.showFunction!=="reranker"?(q(),Q(me,{key:0,name:0,class:"q-pa-none"},{default:n(()=>[W("div",vn,[W("div",{class:re(["row",o(r).screen.lt.sm?"col-12":""])},[t(De,{currentModel:g.value,onChooseModel:h},null,8,["currentModel"]),t(Ke,{padding:"md",icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:re(o(r).screen.lt.sm?"full-width q-py-md":"")},{label:n(()=>[W("div",bn,y(s.value),1)]),default:n(()=>[t(Le,null,{default:n(()=>[(q(),L(G,null,xe(Ye,(j,Be)=>ue(t(le,{key:Be,clickable:"",active:j===s.value,"active-class":"text-primary bg-grey-10",onClick:tt=>i(j)},{default:n(()=>[t(ae,null,{default:n(()=>[t(te,null,{default:n(()=>[T(y(j),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Ne],[be]])),64))]),_:1})]),_:1},8,["class"])],2)]),t(pe),t(J,{src:_e.value[s.value],"show-copy":"",class:re(["q-py-lg",o(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(a)("copy"),"copy-response-text":o(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"])):ne("",!0),v.showFunction!=="embedding"?(q(),Q(me,{key:1,name:1,class:"q-pa-none"},{default:n(()=>[W("div",hn,[W("div",{class:re(["row",o(r).screen.lt.sm?"col-12":""])},[t(Ke,{icon:"data_object",padding:"md","no-caps":"",flat:"",square:"",stretch:"",class:re(o(r).screen.lt.sm?"full-width q-py-md":"")},{label:n(()=>[W("div",yn,y(s.value),1)]),default:n(()=>[t(Le,null,{default:n(()=>[(q(),L(G,null,xe(Ye,(j,Be)=>ue(t(le,{key:Be,clickable:"",active:j===s.value,"active-class":"text-primary bg-grey-10",onClick:tt=>i(j)},{default:n(()=>[t(ae,null,{default:n(()=>[t(te,null,{default:n(()=>[T(y(j),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Ne],[be]])),64))]),_:1})]),_:1},8,["class"])],2)]),t(pe),t(J,{src:se.value[s.value],"show-copy":"",class:re(["q-py-lg",o(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(a)("copy"),"copy-response-text":o(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"])):ne("",!0),t(me,{name:6,class:"q-pa-none"},{default:n(()=>[t(rt,{"as-visualizer":!0,"maximized-window":v.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),t(me,{name:5,class:"q-pa-none"},{default:n(()=>[t(rt,{"maximized-window":v.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),t(me,{name:4,class:"q-pa-none"},{default:n(()=>[t(Ha)]),_:1},8,["name"]),t(me,{name:7,class:"q-pa-none"},{default:n(()=>[t(cn,{"loading-tokens":O.value,"available-tokens":U.value,"api-key":o(p),"onUpdate:apiKey":x[7]||(x[7]=j=>Re(p)?p.value=j:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),t(me,{name:3,class:"q-pa-none"},{default:n(()=>[t(le,{class:"q-ma-sm"},{default:n(()=>[t(ae,null,{default:n(()=>[T(y(o(a)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),t(oe,{class:"row"},{default:n(()=>[(q(!0),L(G,null,xe(o(Va),(j,Be)=>(q(),Q(le,{key:Be,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:n(()=>[ue((q(),Q(he,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:tt=>o(oa)(j.homepage)},{default:n(()=>[_n,t(oe,{class:"column items-center non-selectable q-py-lg"},{default:n(()=>[j.icon?(q(),Q(mt,{key:0,fit:"contain",height:"40px",width:"40px",src:j.icon,loading:"lazy"},null,8,["src"])):ne("",!0)]),_:2},1024),t(oe,{class:"text-center non-selectable"},{default:n(()=>[T(y(j.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Ne]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),S.value!==2?(q(),L(G,{key:0},[t(pe),W("div",wn,[t(le,null,{default:n(()=>[t(ae,{side:""},{default:n(()=>[t(Y,{flat:"",square:"",icon:"sync",onClick:x[9]||(x[9]=j=>d(o(p)))},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})]),_:1}),t(ae,{class:re(o(r).screen.lt.sm?"items-center":"")},{default:n(()=>[t(te,{overline:"",class:"row items-center"},{default:n(()=>[T(y(o(a)("embedding.remaining")),1)]),_:1}),typeof U.value=="number"?(q(),Q(te,{key:0},{default:n(()=>[T(y(I(U.value)),1)]),_:1})):ne("",!0)]),_:1},8,["class"]),t(ae,{avatar:""},{default:n(()=>[t(X,{name:"help_outline",class:"cursor-pointer"},{default:n(()=>[t(ie,null,{default:n(()=>[T(y(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1}),t(Ve,{showing:O.value},null,8,["showing"])]),_:1})]),t(Ve,{class:"non-selectable lock-blur",showing:M.value},null,8,["showing"])],64)):ne("",!0)]),_:1},8,["class"]),t(We,{modelValue:u.value,"onUpdate:modelValue":x[12]||(x[12]=j=>u.value=j)},{default:n(()=>[t(he,null,{default:n(()=>[t(oe,null,{default:n(()=>[W("div",kn,y(o(a)("embedding.top_up_warning_title")),1)]),_:1}),t(pe),typeof U.value=="number"?(q(),Q(oe,{key:0},{default:n(()=>[T(y(o(a)("embedding.top_up_warning_message",{_remainedTokens:I(U.value),_freeTokens:I(B.value)})),1)]),_:1})):ne("",!0),t(pe),t(la,{align:"right"},{default:n(()=>[ue(t(Y,{flat:"",square:"","no-caps":"",label:o(a)("embedding.cancel_button")},null,8,["label"]),[[be]]),ue(t(Y,{flat:"",square:"","no-caps":"",icon:"add_shopping_cart",label:o(a)("embedding.top_up_button"),color:"primary",onClick:x[10]||(x[10]=j=>S.value=2)},null,8,["label"]),[[be]]),ue(t(Y,{flat:"",square:"","no-caps":"",label:o(a)("embedding.get_new_key_button"),onClick:x[11]||(x[11]=j=>R("manual"))},null,8,["label"]),[[be]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Qn as N,qa as Q,Sn as _,me as a,Ve as b,Va as v};
