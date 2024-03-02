import{Q as gt}from"./QImg.cdb0931b.js";import{k as me,R as Je,m as Tt,S as We,s as Ct,h as O,i as b,T as ft,C as Te,b5 as At,e as he,a6 as we,a8 as Q,a9 as n,aq as _e,bL as jt,aa as q,ab as e,ao as Z,ae as oe,ag as ae,ai as T,aj as y,af as l,bv as zt,bw as Bt,am as ne,D as Pe,$ as Ot,f as k,br as vt,J as bt,aU as Nt,j as L,P as Ke,aL as Pt,bK as It,as as qe,ar as Mt,w as Xe,K as Re,aF as pe,ac as Y,ad as xe,Z as re,bz as Ft,al as J,b1 as Oe,b9 as ht,bM as Rt,an as be,bN as yt,bO as _t,bP as wt,ah as le,bQ as Ve,bR as lt,ak as X,av as ce,aX as et,U as Qe,V as Vt,W as Dt,bS as kt,aV as $t,E as St,N as Et,aH as Ut,aP as Qt,aI as Ht,aK as Lt,aQ as Kt,bT as Yt,aJ as Gt,aT as ot,I as Zt,a1 as Jt,bU as ze,a5 as Wt,bV as st,bW as Xt,u as ea,bX as ta,bE as aa,bY as na,bF as la,au as oa,bZ as sa,b_ as ia,bB as ra,ap as ua}from"./index.df640602.js";import{Q as te,b as de}from"./QBadge.9ffc277c.js";import{_ as ca}from"./NewsBadge.ba997035.js";import{_ as da,A as ma}from"./blogs.6dc37740.js";import{_ as tt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ie}from"./QTooltip.7576e02a.js";import{Q as pa,a as ga}from"./QTabs.dc9f2ddd.js";import{Q as fe}from"./QSpace.514bc6a7.js";import{u as Ce,B as He,Q as xt,T as fa}from"./embedding.050a4359.js";import{u as va,b as ba,c as ha,d as ya}from"./QCarousel.102019c5.js";import{Q as Ye}from"./QList.5715286f.js";import{Q as Ge,a as _a}from"./QBtnDropdown.6e5d86ab.js";import{C as ye}from"./ClosePopup.81ca4db3.js";import{c as wa}from"./copy-to-clipboard.c6a946e2.js";import{Q as at,a as ve}from"./QTable.d983cee1.js";import{Q as ka}from"./QMenu.3bc963bc.js";import{Q as Sa}from"./QLinearProgress.5d35e796.js";import{h as xa}from"./format.afd66c59.js";import{R as qa}from"./regexp.d033247d.js";var De=me({name:"QInnerLoading",props:{...Je,...Tt,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(t,{slots:o}){const a=Te(),r=We(t,a.proxy.$q),{transitionProps:u,transitionStyle:c}=Ct(t),p=O(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(r.value===!0?" q-inner-loading--dark":"")),_=O(()=>"q-inner-loading__label"+(t.labelClass!==void 0?` ${t.labelClass}`:""));function I(){const z=[b(At,{size:t.size,color:t.color})];return t.label!==void 0&&z.push(b("div",{class:_.value,style:t.labelStyle},[t.label])),z}function M(){return t.showing===!0?b("div",{class:p.value,style:c.value},o.default!==void 0?o.default():I()):null}return()=>b(ft,u.value,M)}});const Ta=t=>(zt("data-v-5445f441"),t=t(),Bt(),t),Ca=Ta(()=>ne("span",{class:"q-focus-helper"},null,-1)),Aa=he({__name:"NewsroomCard",props:{info:{}},setup(t){const o=t,a=O(()=>jt(o.info.publishedAt).format("MMMM DD, YYYY")),{t:r}=we({useScope:"global"}),u=c=>{window.open(c)};return(c,p)=>(q(),Q(_e,{flat:"",square:"",onClick:p[0]||(p[0]=_=>u(`/news/${c.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:n(()=>[Ca,e(Z,{class:"q-pa-none"},{default:n(()=>[e(gt,{src:c.info.featureImage,height:"200px",loading:"lazy",alt:c.info.featureImageAlt},{default:n(()=>[e(da,{"alt-text":c.info.featureImageAlt},null,8,["alt-text"])]),_:1},8,["src","alt"])]),_:1}),e(Z,{style:{height:"250px"}},{default:n(()=>[e(oe,null,{default:n(()=>[e(ca,{news:c.info},null,8,["news"])]),_:1}),e(oe,null,{default:n(()=>[e(ae,{class:"text-h6 text-weight-light"},{default:n(()=>[e(te,{lines:"2"},{default:n(()=>[T(y(c.info.title),1)]),_:1})]),_:1})]),_:1}),e(oe,null,{default:n(()=>[e(ae,null,{default:n(()=>[e(te,{lines:"3",caption:""},{default:n(()=>[T(y(c.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Z,null,{default:n(()=>[e(oe,null,{default:n(()=>[e(ma,{authors:c.info.authors},null,8,["authors"]),e(ae,null,{default:n(()=>[e(te,null,{default:n(()=>[T(y(c.info.authors.map(_=>_.name).join(", ")),1)]),_:1}),e(te,{caption:""},{default:n(()=>[T(y(a.value)+" \u2022 "+y(c.info.readingTime)+" "+y(l(r)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Yn=tt(Aa,[["__scopeId","data-v-5445f441"]]),ge=me({name:"QTabPanel",props:va,setup(t,{slots:o}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},Pe(o.default))}}),ja=me({name:"QTabPanels",props:{...ba,...Je},emits:ha,setup(t,{slots:o}){const a=Te(),r=We(t,a.proxy.$q),{updatePanelsList:u,getPanelContent:c,panelDirectives:p}=ya(),_=O(()=>"q-tab-panels q-panel-parent"+(r.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(o),Ot("div",{class:_.value},c(),"pan",t.swipeable,()=>p.value))}}),za="/assets/icon-MongoDB.982c1a31.svg",Ba="/assets/icon-Weaviate.7149e9ab.svg",Oa="/assets/icon-Qdrant.934fd07b.svg",Na="data:image/png;base64,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",Pa="/assets/icon-Chroma.2b9ab43a.svg",Ia="/assets/icon-Langchain.f2ee033d.png",Ma="/assets/icon-LlamaIndex.480689aa.png",Fa="/assets/icon-Dify.8dc6e6d4.png",Ra="/assets/icon-Haystack.c2968447.svg",Va="/assets/icon-SuperDuperDB.94465a4c.svg",Da="/assets/icon-Epsilla.461331c8.png",$a="/assets/icon-MyScale.5669eb9d.svg",Ea="/assets/icon-DashVector.3017419e.svg";const Ua=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:za},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:Oa},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:Na},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:Pa},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:Ba},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:Da},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-ai-embedding",icon:$a},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:Ma},{label:"Haystack",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:Ra},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:Ia},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:Fa},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/walkthrough/ai_apis/#jina",icon:Va},{label:"DashVector",tags:["vector_store"],homepage:"https://help.aliyun.com/document_detail/2668339.html",icon:Ea}];var qt=me({name:"QTr",props:{props:Object,noHover:Boolean},setup(t,{slots:o}){const a=O(()=>"q-tr"+(t.props===void 0||t.props.header===!0?"":" "+t.props.__trClass)+(t.noHover===!0?" q-tr--no-hover":""));return()=>b("tr",{class:a.value},Pe(o.default))}});function Ne(t,o=new WeakMap){if(Object(t)!==t)return t;if(o.has(t))return o.get(t);const a=t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t instanceof Set?new Set:t instanceof Map?new Map:typeof t.constructor!="function"?Object.create(null):t.prototype!==void 0&&typeof t.prototype.constructor=="function"?t:new t.constructor;if(typeof t.constructor=="function"&&typeof t.valueOf=="function"){const r=t.valueOf();if(Object(r)!==r){const u=new t.constructor(r);return o.set(t,u),u}}return o.set(t,a),t instanceof Set?t.forEach(r=>{a.add(Ne(r,o))}):t instanceof Map&&t.forEach((r,u)=>{a.set(u,Ne(r,o))}),Object.assign(a,...Object.keys(t).map(r=>({[r]:Ne(t[r],o)})))}var it=me({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(t,{slots:o,emit:a}){const{proxy:r}=Te(),{$q:u}=r,c=k(null),p=k(""),_=k("");let I=!1;const M=O(()=>vt({initialValue:p.value,validate:t.validate,set:z,cancel:S,updatePosition:P},"value",()=>_.value,F=>{_.value=F}));function z(){t.validate(_.value)!==!1&&(R()===!0&&(a("save",_.value,p.value),a("update:modelValue",_.value)),V())}function S(){R()===!0&&a("cancel",_.value,p.value),V()}function P(){bt(()=>{c.value.updatePosition()})}function R(){return Nt(_.value,p.value)===!1}function V(){I=!0,c.value.hide()}function C(){I=!1,p.value=Ne(t.modelValue),_.value=Ne(t.modelValue),a("beforeShow")}function U(){a("show")}function B(){I===!1&&R()===!0&&(t.autoSave===!0&&t.validate(_.value)===!0?(a("save",_.value,p.value),a("update:modelValue",_.value)):a("cancel",_.value,p.value)),a("beforeHide")}function d(){a("hide")}function m(){const F=o.default!==void 0?[].concat(o.default(M.value)):[];return t.title&&F.unshift(b("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},t.title)),t.buttons===!0&&F.push(b("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[b(L,{flat:!0,color:t.color,label:t.labelCancel||u.lang.label.cancel,onClick:S}),b(L,{flat:!0,color:t.color,label:t.labelSet||u.lang.label.set,onClick:z})])),F}return Object.assign(r,{set:z,cancel:S,show(F){c.value!==null&&c.value.show(F)},hide(F){c.value!==null&&c.value.hide(F)},updatePosition:P}),()=>{if(t.disable!==!0)return b(ka,{ref:c,class:"q-popup-edit",cover:t.cover,onBeforeShow:C,onShow:U,onBeforeHide:B,onHide:d,onEscapeKey:S},m)}}});function Qa(t){const o=Object.assign({noopener:!0},t),a=[];for(const r in o){const u=o[r];u===!0?a.push(r):(It(u)||typeof u=="string"&&u!=="")&&a.push(r+"="+u)}return a.join(",")}function rt(t,o,a){let r=window.open;if(Ke.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)r=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(t,{openExternal:!0})}const u=r(t,"_blank",Qa(a));if(u)return Ke.is.desktop&&u.focus(),u;o&&o()}var Ha=(t,o,a)=>{if(Ke.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(r=>{r?window.SafariViewController.show({url:t},Pt,o):rt(t,o,a)});return}return rt(t,o,a)};const La={class:"full-width ellipsis q-pl-md"},$e=he({__name:"ModelDropDown",props:{currentModel:{},indicator:{type:Boolean,default:!0}},emits:["chooseModel"],setup(t,{emit:o}){const{t:a}=we({useScope:"global"}),r=Ce(),{models:u,baseDeModel:c,baseEnModel:p,baseZhModel:_}=qe(r),I=Mt(),{language:M}=qe(I),z=k(!1),S=o,P=()=>{var m;S("chooseModel",(m=_.value)!=null?m:p.value)},R=()=>{var m;S("chooseModel",(m=c.value)!=null?m:p.value)};Xe(M,m=>{m&&["zh-CN","zh-TW"].includes(m)?P():m==="de"&&R()}),Re(async()=>{await V()});const V=async()=>{z.value=!0,await r.getModels(),z.value=!1,u.value.length>0&&(M.value&&["zh-CN","zh-TW"].includes(M.value)?P():M.value==="de"?R():S("chooseModel",p.value))},C=m=>{U("event","embedding_view_model_detail",{location:B.location.href,model:m}),Ha(`https://huggingface.co/jinaai/${m}`)},U=window.gtag,B=window.document,d=m=>m==="en"?"\u{1F1FA}\u{1F1F8}":m==="zh"?"\u{1F1E8}\u{1F1F3}\u{1F1FA}\u{1F1F8}":m==="de"?"\u{1F1E9}\u{1F1EA}\u{1F1FA}\u{1F1F8}":m==="es"?"\u{1F1EA}\u{1F1F8}\u{1F1FA}\u{1F1F8}":"\u{1F30D}";return(m,F)=>(q(),Q(Ge,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:z.value,class:pe(["dynamic-text-btn",m.$q.screen.lt.sm?"full-width q-py-md":""]),"disable-dropdown":z.value,onClick:F[0]||(F[0]=w=>l(U)("event","embedding_click_model_dropdown",{location:l(B).location.href}))},{label:n(()=>{var w;return[ne("div",La,y((w=m.currentModel)==null?void 0:w.name),1)]}),default:n(()=>[e(Ye,null,{default:n(()=>[(q(!0),Y(J,null,xe(l(u),(w,g)=>{var h;return re((q(),Q(oe,{key:g,clickable:"",active:w.name===((h=m.currentModel)==null?void 0:h.name),onClick:i=>S("chooseModel",w),class:"q-pa-md"},{default:n(()=>[e(ae,null,{default:n(()=>[e(te,{overline:"",caption:""},{default:n(()=>[T(y(w.name),1)]),_:2},1024),e(te,{class:"text-weight-bold"},{default:n(()=>[T(y(l(a)(`embedding.${w.name}_description`)),1)]),_:2},1024),e(te,{caption:"",class:"row"},{default:n(()=>{var i,s,f,$,A;return[e(de,{label:w.meta_data.token_length,square:"",color:w.name!==((i=m.currentModel)==null?void 0:i.name)?"grey-5":"",size:"xs",outline:"",icon:"notes",style:{"border-radius":"0"}},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.token_length_explain",{_tokenLength:w.meta_data.token_length})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(de,{label:w.meta_data.output_dim,square:"",color:w.name!==((s=m.currentModel)==null?void 0:s.name)?"grey-5":"",size:"xs",outline:"",icon:"mdi-axis-arrow",style:{"border-radius":"0"}},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.output_dim_explain",{_outputDim:w.meta_data.output_dim})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(de,{label:w.meta_data.size,square:"",size:"xs",color:w.name!==((f=m.currentModel)==null?void 0:f.name)?"grey-5":"",outline:"",icon:"mdi-matrix",style:{"border-radius":"0"}},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.size_explain",{_size:w.meta_data.size})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(de,{label:d(w.meta_data.language),square:"",color:w.name!==(($=m.currentModel)==null?void 0:$.name)?"grey-5":"",size:"xs",outline:"",style:{"border-radius":"0"}},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.language_explain",{_language:d(w.meta_data.language)})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(de,{icon:"img:/huggingface_logo.svg",square:"",size:"xs",outline:"",color:w.name!==((A=m.currentModel)==null?void 0:A.name)?"grey-5":"",style:{"border-radius":"0"},onClick:Ft(D=>C(w.name),["stop"]),clickable:"",label:l(a)("embedding.opensource")},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.opensource_explain")),1)]),_:1})]),_:2},1032,["color","onClick","label"])]}),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[Oe],[ye]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]))}});const Ka={class:"row full-width"},Ya=he({__name:"TestTab",setup(t){const{t:o}=we({useScope:"global"}),a=k(!1),r=Ce(),u=k(),{testData:c}=qe(r),p=g=>{u.value=g,d(c.value).catch(h=>{console.error("calculateScores",h)})},_=[{name:"text1",field:"text1",label:o("embedding.text1"),required:!0,align:"left",sortable:!0},{name:"text2",field:"text1",label:o("embedding.text2"),required:!0,align:"left",sortable:!0},{name:"score",align:"right",label:o("embedding.cosine_similarity"),sortable:!0,field:g=>{var h;return g.scores[((h=u.value)==null?void 0:h.name)||""]||NaN}}],I=g=>{var h,i;return((i=g.scores)==null?void 0:i[((h=u.value)==null?void 0:h.name)||""])||NaN},M=k({page:1,rowsPerPage:10}),z=k([]),S=k(null),P=k(null),R=()=>{c.value=c.value.filter(g=>!z.value.includes(g)),z.value=[]},V=g=>{S.value=g},C=g=>{P.value=g},U=()=>{const g={id:c.value.length,text1:w[Math.floor(Math.random()*w.length)],text2:w[Math.floor(Math.random()*w.length)],scores:{},isNew:!0};c.value.unshift(g),d([g]).catch(h=>{console.error("calculateScores",h)}),M.value.page=1,bt(()=>{var h;(h=S.value)==null||h.show()})},B=(g,h,i)=>{var s;i[h]=g,i.scores={},i.isNew&&(h==="text1"?(s=P.value)==null||s.show():h==="text2"&&(i.isNew=!1)),d([i]).catch(f=>{console.error("calculateScores",f)})};async function d(g){if(!u.value)return;const h=u.value.name,i=g.filter(s=>s.text1&&s.text2).filter(s=>{var f;return!((f=s.scores)!=null&&f[h])});if(i.length!==0)try{a.value=!0;const s=100;for(let f=0;f<i.length;f+=s){const $=i.slice(f,f+s),A=await F($,h);for(const D of $){const E=A[D.text1],G=A[D.text2];!E||!G||(D.scores=D.scores||{},D.scores[h]=yt(A[D.text1],A[D.text2]))}}}finally{a.value=!1}}const m={};async function F(g,h){m[h]||(m[h]={});const i="https://api.jina.ai/v1/embeddings",s={"Content-Type":"application/json",Authorization:`Bearer ${r.apiKey}`},f=g.map($=>[$.text1,$.text2]).flat().filter(Boolean).filter($=>!m[h][$]);if(f.length>0){const $={input:f,model:h},D=await(await fetch(i,{method:"POST",headers:s,body:JSON.stringify($)})).json();for(const E of D.data)m[h][$.input[E.index]]=E.embedding}return m[h]}const w=["The only way to do great work is to love what you do.","The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don\u2019t change people; they merely amplify what is already there.","Your time is limited, don\u2019t waste it living someone else\u2019s life.","Not how long, but how well you have lived is the main thing.","If life were predictable it would cease to be life, and be without flavor.","The big lesson in life, baby, is never be scared of anyone or anything.","Sing like no one\u2019s listening, love like you\u2019ve never been hurt, dance like nobody\u2019s watching, and live like it\u2019s heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","Turn your wounds into wisdom.","The way to get started is to quit talking and begin doing.","The greatest glory in living lies not in never falling, but in rising every time we fall."];return(g,h)=>(q(),Q(at,{class:"my-sticky-column-table col key-value-table",flat:"",rows:l(c),columns:_,"row-key":"id","binary-state-sort":"",selection:"multiple",pagination:M.value,"onUpdate:pagination":h[0]||(h[0]=i=>M.value=i),selected:z.value,"onUpdate:selected":h[1]||(h[1]=i=>z.value=i),loading:a.value,"no-data-label":l(o)("embedding.no_data1"),separator:"cell"},{top:n(()=>[ne("div",Ka,[e(_a,{flat:"",square:""},{default:n(()=>[e(L,{square:"",icon:"add",label:l(o)("embedding.add_pair"),flat:"",padding:"md",onClick:U},null,8,["label"]),re(e(L,{square:"",padding:"md",icon:"delete_forever",color:"negative",label:l(o)("embedding.delete_pair"),flat:"",onClick:R},null,8,["label"]),[[ht,z.value.length>0]])]),_:1}),e(fe),e($e,{currentModel:u.value,indicator:!1,onChooseModel:p},null,8,["currentModel"])])]),body:n(i=>[e(qt,{props:i},{default:n(()=>[e(ve,{key:"selection"},{default:n(()=>[e(Rt,{modelValue:i.selected,"onUpdate:modelValue":s=>i.selected=s},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(ve,{key:"text1",props:i,class:"fixed-cell"},{default:n(()=>[T(y(i.row.text1)+" ",1),e(l(it),{ref:s=>{i.row.isNew&&i.rowIndex===0&&V(s)},modelValue:i.row.text1,"onUpdate:modelValue":s=>i.row.text1=s,"auto-save":"",onSave:s=>B(s,"text1",i.row)},{default:n(s=>[e(be,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text1_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(ve,{key:"text2",props:i,class:"fixed-cell"},{default:n(()=>[T(y(i.row.text2)+" ",1),e(l(it),{ref:s=>{i.row.isNew&&i.rowIndex===0&&C(s)},modelValue:i.row.text2,"onUpdate:modelValue":s=>i.row.text2=s,"auto-save":"",onSave:s=>B(s,"text2",i.row)},{default:n(s=>[e(be,{modelValue:s.value,"onUpdate:modelValue":f=>s.value=f,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text2_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(ve,{key:"score",props:i},{default:n(()=>[T(y(I(i.row).toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","selected","loading","no-data-label"]))}});var Ga=tt(Ya,[["__scopeId","data-v-6d7c27d2"]]);const Za=[b("g",{transform:"translate(20 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(50 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(80 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Ja=me({name:"QSpinnerFacebook",props:_t,setup(t){const{cSize:o,classes:a}=wt(t);return()=>b("svg",{class:a.value,width:o.value,height:o.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Za)}});const Wa={class:"row full-width"},ut="https://api.jina.ai/v1/embeddings",Xa=he({__name:"SearchTab",props:{asVisualizer:{type:Boolean,default:!1},maximizedWindow:{type:Boolean,default:!1}},setup(t){const o=Ce(),{t:a}=we({useScope:"global"}),r=k(""),u=k(),{userDocuments:c}=qe(o),p=k(null),_=A=>{u.value=A},I=k(""),M=k(""),z={"Content-Type":"application/json",Authorization:`Bearer ${o.apiKey}`},S=k([]),P=k([]),R=k(0),V=k(0),C=k(!0),U=k(!0),B=k(!1),d=k([]),m=k(""),F=k(!1),w=t,g=()=>{var A;m.value===""?s(c.value):(gtag("event","embedding_open_tensorboard",{model:(A=u.value)==null?void 0:A.name}),window.open(m.value,"_blank"))},h=async()=>{var ee,N;if(((ee=r.value)==null?void 0:ee.trim())==="")return;U.value=!1;const A={input:[(N=r.value)==null?void 0:N.trim()],model:u.value.name},D=await fetch(ut,{method:"POST",headers:z,body:JSON.stringify(A)}),{data:E}=await D.json(),G=E[0].embedding;d.value=P.value.map((H,W)=>({document:S.value[W],similarity:yt(G,H)})),d.value.sort((H,W)=>W.similarity-H.similarity),U.value=!0,gtag("event","embedding_search_done",{model:u.value.name})},i=()=>{S.value=[],V.value=0,C.value=!1,R.value=0,P.value=[],m.value=""},s=A=>{i(),S.value=A.split(`
`).filter(D=>D.trim()!==""),V.value=S.value.length,f(S.value)};async function f(A){var E;const D=Math.max(20,Math.min(50,A.length/10));for(let G=0;G<A.length;G+=D){B.value=!0;const ee=A.slice(G,G+D),N={input:ee,model:u.value.name};try{const W=await(await fetch(ut,{method:"POST",headers:z,body:JSON.stringify(N)})).json();for(const se of W.data)P.value[G+se.index]=se.embedding;if(R.value+=ee.length,R.value>=V.value){if(C.value=!0,I.value="",M.value="",P.value.forEach((se,ke)=>{I.value+=se.join("	")+`
`,M.value+=S.value[ke].replaceAll("	"," ").trim()+`
`}),w.asVisualizer){F.value=!0;const se={description:"Projector Data Files",public:!0,files:{"tensor.tsv":{content:I.value},"metadata.tsv":{content:M.value}}},Ie=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${lt}`,"Content-Type":"application/json"},body:JSON.stringify(se)})).json(),Ee={tensorName:((E=u.value)==null?void 0:E.name)||"Jina Embeddings",tensorShape:[P.value.length,P.value[0].length],tensorPath:Ie.files["tensor.tsv"].raw_url,metadataPath:Ie.files["metadata.tsv"].raw_url},Ae={description:"Projector Meta Files",public:!0,files:{"project_config.json":{content:JSON.stringify({embeddings:[Ee]})}}},Ue=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${lt}`,"Content-Type":"application/json"},body:JSON.stringify(Ae)})).json();m.value=`https://projector.tensorflow.org/?config=${Ue.files["project_config.json"].raw_url}`,F.value=!1}gtag("event","embedding_docs_done",{length:S.value.length,model:u.value.name})}}catch(H){console.error("An error occurred while embedding documents:",H)}finally{B.value=!1}}}const $=[{name:"document",field:"document",label:a("embedding.document"),required:!0,align:"left",sortable:!0},{name:"similarity",align:"right",label:a("embedding.cosine_similarity"),sortable:!0,field:"similarity"}];return(A,D)=>(q(),Y(J,null,[ne("div",Wa,[!t.asVisualizer&&(S.value.length===0||B.value)?(q(),Q(L,{key:0,label:l(a)("embedding.start_embedding"),onClick:D[0]||(D[0]=E=>s(l(c))),icon:"play_arrow",disable:l(c)===""||B.value,padding:"md"},null,8,["label","disable"])):!t.asVisualizer&&!B.value?(q(),Q(l(be),{key:1,class:"col",clearable:"",modelValue:r.value,"onUpdate:modelValue":[D[1]||(D[1]=E=>r.value=E),h],debounce:"500",label:V.value===0?l(a)("embedding.please_fill_docs_first"):l(a)("embedding.query"),loading:!U.value,"hide-bottom-space":""},{prepend:n(()=>[e(X,{name:"search",class:"q-mx-md"})]),_:1},8,["modelValue","label","loading"])):t.asVisualizer?(q(),Q(L,{key:2,stretch:"",padding:"md",disable:l(c)===""||B.value,label:m.value?l(a)("embedding.open_tensorboard"):l(a)("embedding.visualize"),onClick:g,icon:m.value?"open_in_new":"play_arrow",loading:F.value},null,8,["disable","label","icon","loading"])):le("",!0),e(fe),e($e,{currentModel:u.value,indicator:!1,onChooseModel:_},null,8,["currentModel"])]),e(ce),re(e(Sa,{value:R.value/V.value,indeterminate:F.value},null,8,["value","indeterminate"]),[[ht,V.value>0&&!C.value||F.value]]),d.value.length>0&&!!r.value?(q(),Q(at,{key:0,columns:$,class:"my-sticky-column-table col key-value-table",loading:!U.value,rows:d.value,pagination:{rowsPerPage:10}},{body:n(E=>[e(qt,{props:E},{default:n(()=>[e(ve,{key:"document",props:E,class:"fixed-cell"},{default:n(()=>[T(y(E.row.document),1)]),_:2},1032,["props"]),e(ve,{key:"similarity",props:E},{default:n(()=>[T(y(E.row.similarity.toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])):(q(),Q(l(be),{key:1,modelValue:l(c),"onUpdate:modelValue":[D[2]||(D[2]=E=>Ve(c)?c.value=E:null),i],ref_key:"userInput",ref:p,label:l(a)("embedding.original_documents"),placeholder:l(a)("embedding.original_documents_hint"),filled:"",rows:"15",square:"","input-style":t.maximizedWindow?{height:"calc(100vh - 190px)"}:{},type:"textarea","bottom-slots":"",class:"q-mb-md"},{hint:n(()=>[V.value>0&&!C.value?(q(),Y(J,{key:0},[e(Ja,{size:"20px"}),T(" "+y(l(a)("embedding.total_documents",{_Processed:R.value,_Count:V.value})),1)],64)):C.value&&V.value>0&&!t.asVisualizer?(q(),Y(J,{key:1},[e(X,{name:"done"}),T(" "+y(l(a)("embedding.embedding_done",{_Count:V.value})),1)],64)):F.value?(q(),Y(J,{key:2},[e(X,{name:"scatter_plot"}),T(" "+y(l(a)("embedding.generating_visualization")),1)],64)):m.value?(q(),Y(J,{key:3},[e(X,{name:"open_in_new"}),T(" "+y(l(a)("embedding.visualize_done")),1)],64)):V.value<=1?(q(),Y(J,{key:4},[e(X,{name:"info"}),T(" "+y(l(a)("embedding.more_than_two2")),1)],64)):le("",!0)]),_:1},8,["modelValue","label","placeholder","input-style"]))],64))}});var ct=tt(Xa,[["__scopeId","data-v-79e181fe"]]);const en=he({__name:"EmbeddingDialog",setup(t){const o=k(null),a=()=>{var r;(r=o.value)==null||r.hide()};return(r,u)=>(q(),Q(l(et),{maximized:"",ref_key:"embeddingFSDialog",ref:o},{default:n(()=>[e(_e,{flat:""},{default:n(()=>[e(Cn,{maximized:!0,onCloseDialog:a,"show-function":"all_maximized"})]),_:1})]),_:1},512))}});var Be=me({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(t,{slots:o}){const a=Dt(kt,Qe);if(a===Qe)return console.error("QTimelineEntry needs to be child of QTimeline"),Qe;const r=O(()=>`q-timeline__entry q-timeline__entry--${t.side}`+(t.icon!==void 0||t.avatar!==void 0?" q-timeline__entry--icon":"")),u=O(()=>`q-timeline__dot text-${t.color||a.color}`),c=O(()=>a.layout==="comfortable"&&a.side==="left");return()=>{const p=Vt(o.default,[]);if(t.body!==void 0&&p.unshift(t.body),t.heading===!0){const M=[b("div"),b("div"),b(t.tag,{class:"q-timeline__heading-title"},p)];return b("div",{class:"q-timeline__heading"},c.value===!0?M.reverse():M)}let _;t.icon!==void 0?_=[b(X,{class:"row items-center justify-center",name:t.icon})]:t.avatar!==void 0&&(_=[b("img",{class:"q-timeline__dot-img",src:t.avatar})]);const I=[b("div",{class:"q-timeline__subtitle"},[b("span",{},Pe(o.subtitle,[t.subtitle]))]),b("div",{class:u.value},_),b("div",{class:"q-timeline__content"},[b("h6",{class:"q-timeline__title"},Pe(o.title,[t.title]))].concat(p))];return b("li",{class:r.value},c.value===!0?I.reverse():I)}}});function Se(t,o,a,r){const u=[];return t.forEach(c=>{r(c)===!0?u.push(c):o.push({failedPropValidation:a,file:c})}),u}function Fe(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),St(t)}const tn={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},an=["rejected"];function nn({editable:t,dnd:o,getFileInput:a,addFilesToQueue:r}){const{props:u,emit:c,proxy:p}=Te(),_=k(null),I=O(()=>u.accept!==void 0?u.accept.split(",").map(d=>(d=d.trim(),d==="*"?"*/":(d.endsWith("/*")&&(d=d.slice(0,d.length-1)),d.toUpperCase()))):null),M=O(()=>parseInt(u.maxFiles,10)),z=O(()=>parseInt(u.maxTotalSize,10));function S(d){if(t.value)if(d!==Object(d)&&(d={target:null}),d.target!==null&&d.target.matches('input[type="file"]')===!0)d.clientX===0&&d.clientY===0&&$t(d);else{const m=a();m&&m!==d.target&&m.click(d)}}function P(d){t.value&&d&&r(null,d)}function R(d,m,F,w){let g=Array.from(m||d.target.files);const h=[],i=()=>{h.length!==0&&c("rejected",h)};if(u.accept!==void 0&&I.value.indexOf("*/")===-1&&(g=Se(g,h,"accept",s=>I.value.some(f=>s.type.toUpperCase().startsWith(f)||s.name.toUpperCase().endsWith(f))),g.length===0))return i();if(u.maxFileSize!==void 0){const s=parseInt(u.maxFileSize,10);if(g=Se(g,h,"max-file-size",f=>f.size<=s),g.length===0)return i()}if(u.multiple!==!0&&g.length!==0&&(g=[g[0]]),g.forEach(s=>{s.__key=s.webkitRelativePath+s.lastModified+s.name+s.size}),w===!0){const s=F.map(f=>f.__key);g=Se(g,h,"duplicate",f=>s.includes(f.__key)===!1)}if(g.length===0)return i();if(u.maxTotalSize!==void 0){let s=w===!0?F.reduce((f,$)=>f+$.size,0):0;if(g=Se(g,h,"max-total-size",f=>(s+=f.size,s<=z.value)),g.length===0)return i()}if(typeof u.filter=="function"){const s=u.filter(g);g=Se(g,h,"filter",f=>s.includes(f))}if(u.maxFiles!==void 0){let s=w===!0?F.length:0;if(g=Se(g,h,"max-files",()=>(s++,s<=M.value)),g.length===0)return i()}if(i(),g.length!==0)return g}function V(d){Fe(d),o.value!==!0&&(o.value=!0)}function C(d){St(d),(d.relatedTarget!==null||Et.is.safari!==!0?d.relatedTarget!==_.value:document.elementsFromPoint(d.clientX,d.clientY).includes(_.value)===!1)===!0&&(o.value=!1)}function U(d){Fe(d);const m=d.dataTransfer.files;m.length!==0&&r(null,m),o.value=!1}function B(d){if(o.value===!0)return b("div",{ref:_,class:`q-${d}__dnd absolute-full`,onDragenter:Fe,onDragover:Fe,onDragleave:C,onDrop:U})}return Object.assign(p,{pickFiles:S,addFiles:P}),{pickFiles:S,addFiles:P,onDragover:V,onDragleave:C,processFiles:R,getDndNode:B,maxFilesNumber:M,maxTotalSizeNumber:z}}var ln=me({name:"QFile",inheritAttrs:!1,props:{...Ut,...Qt,...tn,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ht,...an],setup(t,{slots:o,emit:a,attrs:r}){const{proxy:u}=Te(),c=Lt(),p=k(null),_=k(!1),I=Kt(t),{pickFiles:M,onDragover:z,onDragleave:S,processFiles:P,getDndNode:R}=nn({editable:c.editable,dnd:_,getFileInput:A,addFilesToQueue:D}),V=Yt(t),C=O(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),U=O(()=>ot(C.value)),B=O(()=>C.value.map(N=>N.name).join(", ")),d=O(()=>xa(C.value.reduce((N,H)=>N+H.size,0))),m=O(()=>({totalSize:d.value,filesNumber:C.value.length,maxFiles:t.maxFiles})),F=O(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:I.value,...r,id:c.targetUid.value,disabled:c.editable.value!==!0})),w=O(()=>"q-file q-field--auto-height"+(_.value===!0?" q-file--dnd":"")),g=O(()=>t.multiple===!0&&t.append===!0);function h(N){const H=C.value.slice();H.splice(N,1),s(H)}function i(N){const H=C.value.indexOf(N);H>-1&&h(H)}function s(N){a("update:modelValue",t.multiple===!0?N:N[0])}function f(N){N.keyCode===13&&Zt(N)}function $(N){(N.keyCode===13||N.keyCode===32)&&M(N)}function A(){return p.value}function D(N,H){const W=P(N,H,C.value,g.value),se=A();se!=null&&(se.value=""),W!==void 0&&((t.multiple===!0?t.modelValue&&W.every(ke=>C.value.includes(ke)):t.modelValue===W[0])||s(g.value===!0?C.value.concat(W):W))}function E(){return[b("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function G(){if(o.file!==void 0)return C.value.length===0?E():C.value.map((H,W)=>o.file({index:W,file:H,ref:this}));if(o.selected!==void 0)return C.value.length===0?E():o.selected({files:C.value,ref:this});if(t.useChips===!0)return C.value.length===0?E():C.value.map((H,W)=>b(de,{key:"file-"+W,removable:c.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{h(W)}},()=>b("span",{class:"ellipsis",textContent:H.name})));const N=t.displayValue!==void 0?t.displayValue:B.value;return N.length!==0?[b("div",{class:t.inputClass,style:t.inputStyle,textContent:N})]:E()}function ee(){const N={ref:p,...F.value,...V.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:D};return t.multiple===!0&&(N.multiple=!0),b("input",N)}return Object.assign(c,{fieldClass:w,emitValue:s,hasValue:U,inputRef:p,innerValue:C,floatingLabel:O(()=>U.value===!0||ot(t.displayValue)),computedCounter:O(()=>{if(t.counterLabel!==void 0)return t.counterLabel(m.value);const N=t.maxFiles;return`${C.value.length}${N!==void 0?" / "+N:""} (${d.value})`}),getControlChild:()=>R("file"),getControl:()=>{const N={ref:c.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return c.editable.value===!0&&Object.assign(N,{onDragover:z,onDragleave:S,onKeydown:f,onKeyup:$}),b("div",N,[ee()].concat(G()))}}),Object.assign(u,{removeAtIndex:h,removeFile:i,getNativeElement:()=>p.value}),vt(u,"nativeEl",()=>p.value),Gt(c)}});const on=[b("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[b("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];var sn=me({name:"QSpinnerGrid",props:_t,setup(t){const{cSize:o,classes:a}=wt(t);return()=>b("svg",{class:a.value,fill:"currentColor",width:o.value,height:o.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},on)}}),rn=me({name:"QTimeline",props:{...Je,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},layout:{type:String,default:"dense",validator:t=>["dense","comfortable","loose"].includes(t)}},setup(t,{slots:o}){const a=Te(),r=We(t,a.proxy.$q);Jt(kt,t);const u=O(()=>`q-timeline q-timeline--${t.layout} q-timeline--${t.layout}--${t.side}`+(r.value===!0?" q-timeline--dark":""));return()=>b("ul",{class:u.value},Pe(o.default))}});const un=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],cn=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],dn=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],mn=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],dt=(t,o,a)=>{let r=t;return typeof o=="string"||Array.isArray(o)?r=t.toLocaleString(o,a):(o===!0||a!==void 0)&&(r=t.toLocaleString(void 0,a)),r};function mt(t,o){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);o={bits:!1,binary:!1,space:!0,...o};const a=o.bits?o.binary?mn:dn:o.binary?cn:un,r=o.space?" ":"";if(o.signed&&t===0)return` 0${r}${a[0]}`;const u=t<0,c=u?"-":o.signed?"+":"";u&&(t=-t);let p;if(o.minimumFractionDigits!==void 0&&(p={minimumFractionDigits:o.minimumFractionDigits}),o.maximumFractionDigits!==void 0&&(p={maximumFractionDigits:o.maximumFractionDigits,...p}),t<1){const z=dt(t,o.locale,p);return c+z+r+a[0]}const _=Math.min(Math.floor(o.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),a.length-1);t/=(o.binary?1024:1e3)**_,p||(t=t.toPrecision(3));const I=dt(Number(t),o.locale,p),M=a[_];return c+I+r+M}const pn={class:"row justify-center items-center"},Le=200*1024*1024,gn=he({__name:"BulkTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["update:apiKey"],setup(t,{emit:o}){const{t:a,locale:r}=we({useScope:"global"}),u=Ce(),c=k(null),p=k(""),_=k(),I=B=>{_.value=B},M=o,z=t,S=O({get:()=>z.apiKey,set:B=>{M("update:apiKey",B)}}),P=([B])=>{const{failedPropValidation:d}=B;switch(d){case"max-file-size":ze.create({message:`Exceed max file size: ${mt(Le,{locale:r.value,binary:!0})}`,color:"negative"});break;case"accept":ze.create({message:a("embedding.file_type_not_supported"),color:"negative"});break}};Xe(()=>({file:c,currentModel:_}),()=>{V.value=""},{deep:!0});const R=k(!1),V=k(""),C=k(!1),U=async()=>{if(C.value=!0,!_.value){ze.create({message:a("embedding.model_required"),color:"negative"});return}if(!c.value){ze.create({message:a("embedding.file_required"),color:"negative"});return}let B;try{R.value=!0;const d=S.value,{id:m}=await u.bulkEmbedding(d,{email:p.value,model:_.value.name,file:c.value}),F=60;let w=0;V.value=await new Promise((g,h)=>{B=setInterval(async()=>{w++;const i=await u.checkBulk(d,m);if(console.log(i),w>F&&clearInterval(B),i.status===He.COMPLETED){const s=await u.getBulkResult(d,m);clearInterval(B),g(s)}else i.status===He.FAILED?(C.value=!1,clearInterval(B),h(new Error(a("embedding.bulk_embedding_failed")))):i.status===He.IN_PROGRESS&&(C.value=!0)},1e3*30)})}catch(d){C.value=!1,ze.create({message:d,color:"negative"})}finally{R.value=!1}Wt(()=>{clearInterval(B)})};return(B,d)=>(q(),Q(rn,{class:"q-pa-lg"},{default:n(()=>[e(Be,{subtitle:l(a)("embedding.batch_upload_hint"),heading:!1},{default:n(()=>[ne("div",pn,[e($e,{currentModel:_.value,indicator:!1,onChooseModel:I},null,8,["currentModel"]),e(be,{"hide-bottom-space":"",filled:"",dense:"",loading:z.loadingTokens,square:"",modelValue:S.value,"onUpdate:modelValue":d[0]||(d[0]=m=>S.value=m),label:l(a)("embedding.key"),class:"col",error:z.availableTokens===void 0,"error-message":S.value?l(a)("embedding.input_api_key_error1"):""},{prepend:n(()=>[e(X,{name:"vpn_key"})]),_:1},8,["loading","modelValue","label","error","error-message"])])]),_:1},8,["subtitle"]),e(Be,{subtitle:l(a)("embedding.original_documents_hint"),color:_.value&&!!S.value?"":"bg-dark"},{default:n(()=>[e(ln,{"bottom-slots":"",filled:"",square:"",modelValue:c.value,"onUpdate:modelValue":d[1]||(d[1]=m=>c.value=m),label:l(a)("embedding.upload_file"),accept:"text/*",onRejected:P,"max-file-size":Le},{prepend:n(()=>[e(X,{name:"file_upload"})]),hint:n(()=>[T(y(l(a)("embedding.max_file_size",{_maxSize:l(mt)(Le,{locale:l(r),binary:!0})})),1)]),_:1},8,["modelValue","label"])]),_:1},8,["subtitle","color"]),e(Be,{subtitle:l(a)("embedding.write_email_here"),color:c.value&&_.value&&!!S.value?"":"bg-dark"},{default:n(()=>[e(be,{filled:"",square:"",label:l(a)("subscribe_system.email"),type:"email",modelValue:p.value,"onUpdate:modelValue":d[2]||(d[2]=m=>p.value=m),"lazy-rules":"",rules:[m=>!!m||l(a)("subscribe_system.email_required"),m=>l(qa).test(m)||l(a)("subscribe_system.email_invalid")]},{prepend:n(()=>[e(X,{name:"email"})]),_:1},8,["label","modelValue","rules"])]),_:1},8,["subtitle","color"]),e(Be,{subtitle:l(a)("embedding.click_upload_btn_above"),color:p.value&&c.value&&_.value&&!!S.value?"":"bg-dark"},{default:n(()=>[e(L,{square:"",label:l(a)("embedding.start_batch"),icon:"send",onClick:U,padding:"md",disable:!c.value||!p.value||R.value},null,8,["label","disable"])]),_:1},8,["subtitle","color"]),C.value?(q(),Q(Be,{key:0,subtitle:l(a)("embedding.wait_for_processing")},{default:n(()=>[e(sn,{class:"q-mr-sm"}),T(" "+y(l(a)("embedding.you_can_leave")),1)]),_:1},8,["subtitle"])):le("",!0)]),_:1}))}}),fn={class:"full-width q-px-md q-pt-md"},vn={class:"row q-pa-md"},bn=ne("span",{class:"q-focus-helper"},null,-1),hn={class:"text-h6"},yn=he({__name:"PurchaseTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["updateToken","update:apiKey"],setup(t,{emit:o}){const{t:a}=we({useScope:"global"}),r=Ce(),{products:u}=qe(r),c=o,p=t,_=i=>new Intl.NumberFormat("en").format(i),I=O(()=>p.availableTokens||0),M=O(()=>p.availableTokens===void 0),z=O(()=>p.loadingTokens),S=O({get:()=>p.apiKey,set:i=>{c("update:apiKey",i)}}),P=O(()=>!!S.value&&!M.value),R=k(""),V=async i=>{if(!P.value||z.value||R.value)return;const s=u.value.find(ee=>ee.price_id===i);let f,$;const A=new URL(window.location.href);A.pathname==="/"&&(A.hash="#enterprises"),A.searchParams.set("price_id",i),A.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),$=A.toString(),A.searchParams.set("purchase_status","success"),f=A.toString(),R.value=i;const D={price_id:i,success_url:f,cancel_url:$},E=localStorage.getItem(Xt);E&&(D.meta_data={sales_key:E}),s&&gtag("event","begin_checkout",{currency:s.currency,value:s.price,items:[{id:s.product_id,name:s.product_name}]});const G=await r.checkoutWithStripe(S.value,D);R.value="",G&&(window.location.href=G.url)},C=k(!1),U=()=>{!P.value||z.value||(C.value=!0)},B=()=>{var i;(i=F.value)==null||i.requestServerInteraction()},d=()=>{w.value=[]},m=k(!1),F=k(null),w=k([]),g=k([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:i=>{if(typeof i=="string")return new Date(i).toLocaleString();if(i instanceof Date)return i.toLocaleString();if(i)return i.toDate().toLocaleString()}},{name:"amount",label:a("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:i=>i>0?`+${i}`:`${i}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),h=async()=>{m.value=!0;const i=await r.getUsage(S.value);m.value=!1,!(!i||i.length===0)&&(w.value=i.map(s=>{const f=new Date(s.updated_at);let $=s.quantity,A=a(`embedding.usage_reason_${s.type}`);return s.type===fa.CONSUME?($=-$,s.metadata.model_name&&(A=A+": "+s.metadata.model_name)):(s.metadata.product_name&&(A=A+": "+s.metadata.product_name),s.metadata.order_quantity&&s.metadata.order_quantity>1&&(A=A+` (x ${s.metadata.order_quantity})`)),{createdAt:f,amount:$,reason:A}}))};return(i,s)=>(q(),Y(J,null,[ne("div",fn,[e(be,{"input-style":"font-family: monospace",modelValue:S.value,"onUpdate:modelValue":s[0]||(s[0]=f=>S.value=f),clearable:"",filled:"",square:"",label:S.value?`${l(a)("embedding.key_to_top_up")}`:l(a)("embedding.key_enter_placeholder_to_topup"),error:!P.value,"error-message":S.value?l(a)("embedding.input_api_key_error1"):"","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"])]),P.value?(q(),Y(J,{key:0},[e(xt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:n(()=>[e(oe,null,{default:n(()=>[e(ae,{avatar:"",style:st(i.$q.screen.lt.sm?"min-width: auto !important;":"")},{default:n(()=>[e(X,{name:"help_outline",class:"cursor-pointer",size:i.$q.screen.lt.sm?"xs":""},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(ae,null,{default:n(()=>[e(te,{overline:"",class:"row items-center"},{default:n(()=>[T(y(l(a)("embedding.remaining")),1)]),_:1}),M.value?le("",!0):(q(),Q(te,{key:0},{default:n(()=>[T(y(_(I.value)),1)]),_:1}))]),_:1}),e(De,{showing:z.value},null,8,["showing"])]),_:1}),e(L,{flat:"",square:"",icon:"sync",class:"q-ml-sm",disable:!P.value||z.value,size:i.$q.screen.lt.sm?"sm":"md",padding:"md",onClick:s[1]||(s[1]=f=>c("updateToken",S.value))},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(fe),e(L,{square:"",flat:"","no-caps":"",icon:"history",label:i.$q.screen.lt.sm?"":l(a)("embedding.usage_history"),dense:i.$q.screen.lt.sm,padding:"md",disable:!P.value||z.value,onClick:U},null,8,["label","dense","disable"])]),_:1}),e(ce)],64)):le("",!0),e(oe,{class:"q-ma-md"},{default:n(()=>[e(ae,{avatar:"",side:""},{default:n(()=>[e(X,{name:"fab fa-stripe",size:"sm"}),e(X,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(ae,null,{default:n(()=>[e(te,null,{default:n(()=>[T(y(l(a)("embedding.buy_more_quota")),1)]),_:1}),e(te,{caption:""},{default:n(()=>[T(y(l(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1}),ne("div",vn,[(q(!0),Y(J,null,xe(l(u),(f,$)=>(q(),Y("div",{key:$,class:"col-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer"},[re((q(),Q(_e,{bordered:"",flat:"",class:pe(["full-width full-height column justify-between",P.value&&!z.value&&!R.value?"q-hoverable ":"cursor-not-allowed"]),square:"",style:st(R.value===f.price_id?"cursor: wait !important;":""),onClick:A=>V(f.price_id)},{default:n(()=>[bn,e(Z,{class:"column items-center non-selectable q-py-lg text-h6"},{default:n(()=>[T(y(l(a)(`embedding.${f.product_name.replace(".","_")}`)),1)]),_:2},1024),e(Z,{class:"column items-center text-center non-selectable q-px-lg text-weight-light text-caption"},{default:n(()=>[T(y(l(a)(`embedding.${f.product_name.replace(".","_")}_intuition1`)),1)]),_:2},1024),e(Z,null,{default:n(()=>[e(oe,null,{default:n(()=>[e(ae,null,{default:n(()=>[e(te,{class:"text-bold"},{default:n(()=>[T("$"+y(f.price),1)]),_:2},1024),e(te,{caption:""},{default:n(()=>[T("$"+y(Number((f.price/f.token_quantity*1e6).toFixed(3)))+" "+y(l(a)("embedding.per_m")),1)]),_:2},1024)]),_:2},1024),e(ae,{side:""},{default:n(()=>[e(X,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(De,{showing:R.value===f.price_id,label:l(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[Oe,P.value&&!z.value&&!R.value]])]))),128))]),e(et,{modelValue:C.value,"onUpdate:modelValue":s[2]||(s[2]=f=>C.value=f),onShow:B,onHide:d},{default:n(()=>[e(_e,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:n(()=>[e(Z,{class:"row items-center q-pb-none"},{default:n(()=>[e(X,{name:"history",size:"md",class:"q-mr-md"}),ne("div",hn,y(i.$q.screen.lt.sm?"":l(a)("embedding.usage_history")),1),e(fe),re(e(L,{icon:"close",flat:"",round:"",dense:""},null,512),[[ye]])]),_:1}),e(Z,null,{default:n(()=>[e(l(at),{ref_key:"usageTableRef",ref:F,flat:"","row-key":"createdAt",rows:w.value,columns:g.value,loading:m.value,"hide-pagination":!0,onRequest:h},{"body-cell-icon":n(f=>[e(ve,{key:"icon",props:f},{default:n(()=>[f.row.amount>0?(q(),Q(X,{key:0,name:"o_add_circle_outline",color:"primary"})):(q(),Q(X,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":n(f=>[e(ve,{key:"amount",props:f},{default:n(()=>[T(y((f.row.amount>0?"+":"")+_(f.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),_n={class:"row q-pa-none"},wn={class:"full-width ellipsis q-pl-md"},kn={class:"row q-pa-none"},Sn={class:"full-width ellipsis q-pl-md"},xn=ne("span",{class:"q-focus-helper"},null,-1),qn={class:"row"},Tn={class:"text-h6"};var Ze=(t=>(t.CURL="curl",t.PYTHON="Python",t.JAVASCRIPT="JavaScript",t.NODEJS="Node.js",t.RUST="Rust",t.JAVA="Java",t.GO="Go",t.C_SHARP="C#",t.RUBY="Ruby",t.PHP="PHP",t))(Ze||{});const ue="https://api.jina.ai/v1/embeddings",pt="https://api.jina.ai/v1/rerank",Cn=he({__name:"EmbeddingComponent",props:{maximized:{type:Boolean,default:!1},showFunction:{default:"embedding"}},emits:["closeDialog"],setup(t,{emit:o}){const{t:a}=we({useScope:"global"}),r=ea(),u=k(!1),c=Ce(),{apiKey:p,products:_}=qe(c),I=k(!1),M=v=>new Intl.NumberFormat("en").format(v),z=k(1e6),S=t,P=k(!S.maximized),R=async v=>{if(Ae("event","embedding_refresh_api_key",{location:Me.location.href,type:v}),I.value)return;I.value=!0,await c.getApiKey().finally(()=>{I.value=!1})||r.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};Re(()=>{navigator.userAgent.toLowerCase().includes("headless")||p.value||R("auto")});const V=k(!1),C=()=>{!p.value||V.value||(wa(p.value).then(()=>{r.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),V.value=!0,Ae("event","embedding_copy_api_key",{location:Me.location.href})}),setTimeout(()=>{V.value=!1},1800))},U=k(0),B=k(!1),d=async v=>{B.value=!0;const x=await c.getTokens(v);B.value=!1,U.value=x};Re(()=>{!p.value||d(p.value)}),Xe(p,v=>{!v||d(v)});const m=o,F=O(()=>{const v=w.value===0?ta:aa,x=w.value===1?na:la;return[{name:2,label:"embedding.manage_quota1",icon:"shopping_cart",showsOn:["embedding","reranker","all","all_maximized"]},{name:0,label:S.showFunction.startsWith("all")?"landing_page.embeddings":"embedding.usage",icon:S.showFunction.startsWith("all")?v:"code",showsOn:["embedding","all","all_maximized"],tag:"usage"},{name:1,label:S.showFunction.startsWith("all")?"landing_page.reranker":"embedding.usage",icon:S.showFunction.startsWith("all")?x:"code",showsOn:["reranker","all","all_maximized"],tag:"usage"},{name:6,label:"embedding.visualize",icon:"mdi-axis-arrow",showsOn:["embedding","all_maximized"]},{name:5,label:"embedding.search",icon:"search",showsOn:["embedding","all_maximized"]},{name:4,label:"embedding.pairwise_test",icon:"join_full",showsOn:["embedding","all_maximized"]},{name:7,label:"embedding.batch_job",icon:"schedule_send",showsOn:["embedding","all_maximized"]},{name:3,label:"embedding.integrate",icon:"extension",showsOn:["embedding","all_maximized"]}]}),w=k(S.showFunction==="reranker"?1:0),g=k(),h=v=>{g.value=v},i=v=>{s.value=v},s=k("curl"),f=["Your text string goes here","You can send multiple texts"],$=["\u60A8\u7684\u67E5\u8BE2\u53EF\u4EE5\u662F\u4E2D\u6587","or in English only","\u6216\u662Fquery-doc\u4E2D\u82F1\u6DF7\u6742\u7684like this one."],A=["Heute ist ein wundersch\xF6ner Tag. Die Sonne scheint, und die V\xF6gel singen.","Today is a beautiful day. The sun is shining, and the birds are singing.","Today ist ein wundersch\xF6ner Tag. The sun scheint, und die birds are singing."],D=["El sol brilla intensamente hoy.","The sky is clear and blue.","I love going to the playa, it is so relaxing, \xBFno?"],E=["Calculates the square of a number. Parameters: number (int or float) - The number to square. Returns: int or float - The square of the number.","This function calculates the square of a number you give it.","def square(number): return number ** 2"],G=O(()=>{var v,x,K,j;return((v=g.value)==null?void 0:v.name)==="jina-embeddings-v2-base-zh"?$:((x=g.value)==null?void 0:x.name)==="jina-embeddings-v2-base-de"?A:((K=g.value)==null?void 0:K.name)==="jina-embeddings-v2-base-code"?E:((j=g.value)==null?void 0:j.name)==="jina-embeddings-v2-base-es"?D:f}),ee=O(()=>`[${G.value.map(v=>`"${v}"`).join(", ")}]`),N=O(()=>`array(${G.value.map(v=>`"${v}"`).join(", ")})`),H=O(()=>`[${G.value.map(v=>`""${v}""`).join(", ")}]`),W=O(()=>`[${G.value.map(v=>`\\"${v}\\"`).join(", ")}]`),se=O(()=>{const v=p.value||"$JINA_API_KEY",x="jina-reranker-v1-base-en",K=pt;return{curl:`
\`\`\`bash
curl ${pt} \\
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

url = f"${K}"

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

const url = "${K}";
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
  hostname: '${K}',
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
    let url = "${K}".to_string();
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
        String urlString = "${K}";
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
    url := "${K}"
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
        var url = "${K}";
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

url = URI.parse("${K}")
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
$url = "${K}";
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
    `}}),ke=O(()=>{var K;const v=p.value||"$JINA_API_KEY",x=((K=g.value)==null?void 0:K.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${ue} \\
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

url = '${ue}'

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
const url = "${ue}";

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

const url = "${ue}";
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

    let res = client.post("${ue}")
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
        String url = "${ue}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${v}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${W.value},\\"model\\": \\"${x}\\"}";

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
	url := "${ue}"
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
        string url = "${ue}";
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

uri = URI.parse("${ue}")
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
$url = "${ue}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${v}"
);

$data = array(
    "input" => ${N.value},
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
    `}}),Ie=O(()=>`
\`\`\`json
{
  "model": "jina-reranker-v1-base-en",
  "usage": {
    "total_tokens": 38,
    "prompt_tokens": 38
  },
  "results": [
    {
      "index": 3,
      "document": {
        "text": "Natural organic skincare range for sensitive skin"
      },
      "relevance_score": 0.8292155861854553
    },
    {
      "index": 2,
      "document": {
        "text": "Organic cotton baby clothes for sensitive skin"
      },
      "relevance_score": 0.14426936209201813
    },
    {
      "index": 6,
      "document": {
        "text": "Sensitive skin-friendly facial cleansers and toners"
      },
      "relevance_score": 0.13857832551002502
    }
  ]
}
\`\`\`
`),Ee=O(()=>{var v;return`
\`\`\`json
{
  "model": "${(v=g.value)==null?void 0:v.name}",
  "object": "list",
  "usage": {
    "total_tokens": 14,
    "prompt_tokens": 14
  },
  "data": [
    {
      "object": "embedding",
      "index": 0,
      "embedding": [
        -0.14528547,
        -1.0152762,
        ...
      ]
    },
    {
      "object": "embedding",
      "index": 1,
      "embedding": [
        -0.109809875,
        -0.76077706,
        ...
      ]
    }
  ]
}
\`\`\`
`});Re(()=>{_.value.length||c.getProducts()});const Ae=window.gtag,Me=window.document,Ue=()=>{r.dialog({component:en})};return(v,x)=>{const K=oa("q-markdown");return q(),Y(J,null,[e(ft,{appear:"","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"},{default:n(()=>[P.value?(q(),Q(be,{key:0,square:"",modelValue:l(p),"onUpdate:modelValue":x[1]||(x[1]=j=>Ve(p)?p.value=j:null),label:l(a)("embedding.key"),readonly:"",standout:"",class:pe(["full-width",P.value?"q-mb-xl":""]),loading:I.value,disable:I.value,"input-style":"font-family: monospace;",hint:l(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},sa({prepend:n(()=>[e(L,{flat:"",square:"",stretch:"",icon:"refresh",onClick:x[0]||(x[0]=j=>u.value=!0)},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[I.value?void 0:{name:"append",fn:n(()=>[e(L,{flat:"",square:"",icon:V.value?"done":"content_copy",color:V.value?"positive":"",onClick:C},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","class","loading","disable","hint"])):le("",!0)]),_:1}),e(_e,{flat:"",square:"",bordered:"",class:pe(["full-width",{"full-height":v.maximized}])},{default:n(()=>[e(xt,{class:"q-pa-none"},{default:n(()=>[v.maximized?(q(),Q(X,{key:0,name:"img:/Jina - Dark.svg",class:"q-mx-md",size:"xl"})):le("",!0),e(pa,{shrink:"",modelValue:w.value,"onUpdate:modelValue":x[2]||(x[2]=j=>w.value=j),"inline-label":!v.maximized,"indicator-color":"primary","active-color":"primary",align:"left"},{default:n(()=>[v.maximized?le("",!0):(q(),Q(L,{key:0,stretch:"",icon:"zoom_out_map",onClick:Ue},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.maximize_tooltip")),1)]),_:1})]),_:1})),(q(!0),Y(J,null,xe(F.value.filter(j=>j.showsOn.includes(v.showFunction)),j=>(q(),Q(ga,{key:j.name,name:j.name,label:l(a)(j.label),icon:v.showFunction.startsWith("all")&&j.tag==="usage"?`img:${j.icon}`:j.icon},null,8,["name","label","icon"]))),128))]),_:1},8,["modelValue","inline-label"]),v.maximized?(q(),Y(J,{key:2},[e(fe),e(ia,{class:"q-mr-sm",label:l(a)("embedding.show_api_key"),modelValue:P.value,"onUpdate:modelValue":x[4]||(x[4]=j=>P.value=j),icon:"vpn_key"},null,8,["label","modelValue"]),e(L,{stretch:"","no-wrap":"",flat:"","no-caps":"",icon:"close",onClick:x[5]||(x[5]=j=>m("closeDialog"))})],64)):(q(),Y(J,{key:1},[v.showFunction==="embedding"?(q(),Y(J,{key:0},[e(fe),e(L,{stretch:"","no-wrap":"",label:l(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:l(r).screen.lt.sm?"12px":"md",onClick:x[3]||(x[3]=j=>l(Ae)("event","embedding_goto_faq",{location:l(Me).location.href}))},null,8,["label","size"])],64)):le("",!0)],64))]),_:1}),e(ce),e(ja,{modelValue:w.value,"onUpdate:modelValue":x[8]||(x[8]=j=>w.value=j),animated:""},{default:n(()=>[e(ge,{name:2,class:"q-pa-none"},{default:n(()=>[e(yn,{onUpdateToken:d,"loading-tokens":B.value,"available-tokens":U.value,"api-key":l(p),"onUpdate:apiKey":x[6]||(x[6]=j=>Ve(p)?p.value=j:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),v.showFunction!=="reranker"?(q(),Q(ge,{key:0,name:0,class:"q-pa-none"},{default:n(()=>[ne("div",_n,[e($e,{currentModel:g.value,onChooseModel:h},null,8,["currentModel"]),e(Ge,{padding:"md",icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:pe(l(r).screen.lt.sm?"full-width q-py-md":"")},{label:n(()=>[ne("div",wn,y(s.value),1)]),default:n(()=>[e(Ye,null,{default:n(()=>[(q(),Y(J,null,xe(Ze,(j,je)=>re(e(oe,{key:je,clickable:"",active:j===s.value,"active-class":"text-primary bg-grey-10",onClick:nt=>i(j)},{default:n(()=>[e(ae,null,{default:n(()=>[e(te,null,{default:n(()=>[T(y(j),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Oe],[ye]])),64))]),_:1})]),_:1},8,["class"]),e(fe),e(L,{flat:"","no-caps":"",stretch:"",padding:"md",icon:"mdi-api",href:"https://api.jina.ai/redoc#tag/embeddings",target:"_blank",label:l(a)("embedding.read_api_docs")},null,8,["label"])]),e(ce),e(Z,{horizontal:l(r).screen.gt.sm,class:"row"},{default:n(()=>[e(Z,{class:"col-12 col-md-6"},{default:n(()=>[e(de,{icon:"upload",square:"",size:"sm",label:l(a)("embedding.input"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:ke.value[s.value],"show-copy":"",class:pe(["q-py-lg",l(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(a)("copy"),"copy-response-text":l(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1}),e(ce,{vertical:l(r).screen.gt.sm},null,8,["vertical"]),e(Z,{class:"col-12 col-md-6"},{default:n(()=>[e(de,{icon:"download",square:"",size:"sm",label:l(a)("embedding.output"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:Ee.value,"no-line-numbers":""},null,8,["src"])]),_:1})]),_:1},8,["horizontal"])]),_:1},8,["name"])):le("",!0),v.showFunction!=="embedding"?(q(),Q(ge,{key:1,name:1,class:"q-pa-none"},{default:n(()=>[ne("div",kn,[e(Ge,{icon:"data_object",padding:"md","no-caps":"",flat:"",square:"",stretch:"",class:pe(l(r).screen.lt.sm?"full-width q-py-md":"")},{label:n(()=>[ne("div",Sn,y(s.value),1)]),default:n(()=>[e(Ye,null,{default:n(()=>[(q(),Y(J,null,xe(Ze,(j,je)=>re(e(oe,{key:je,clickable:"",active:j===s.value,"active-class":"text-primary bg-grey-10",onClick:nt=>i(j)},{default:n(()=>[e(ae,null,{default:n(()=>[e(te,null,{default:n(()=>[T(y(j),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Oe],[ye]])),64))]),_:1})]),_:1},8,["class"]),e(fe),e(L,{flat:"","no-caps":"",stretch:"",padding:"md",icon:"mdi-api",href:"https://api.jina.ai/redoc#tag/rerank",target:"_blank",label:l(a)("embedding.read_api_docs")},null,8,["label"])]),e(ce),e(Z,{horizontal:l(r).screen.gt.sm,class:"row"},{default:n(()=>[e(Z,{class:"col-12 col-md-6"},{default:n(()=>[e(de,{icon:"upload",square:"",size:"sm",label:l(a)("embedding.input"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:se.value[s.value],"show-copy":"",class:pe(["q-py-lg",l(r).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(a)("copy"),"copy-response-text":l(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1}),e(ce,{vertical:l(r).screen.gt.sm},null,8,["vertical"]),e(Z,{class:"col-12 col-md-6"},{default:n(()=>[e(de,{icon:"download",square:"",size:"sm",label:l(a)("embedding.output"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:Ie.value,"no-line-numbers":""},null,8,["src"])]),_:1})]),_:1},8,["horizontal"])]),_:1},8,["name"])):le("",!0),e(ge,{name:6,class:"q-pa-none"},{default:n(()=>[e(ct,{"as-visualizer":!0,"maximized-window":v.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),e(ge,{name:5,class:"q-pa-none"},{default:n(()=>[e(ct,{"maximized-window":v.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),e(ge,{name:4,class:"q-pa-none"},{default:n(()=>[e(Ga)]),_:1},8,["name"]),e(ge,{name:7,class:"q-pa-none"},{default:n(()=>[e(gn,{"loading-tokens":B.value,"available-tokens":U.value,"api-key":l(p),"onUpdate:apiKey":x[7]||(x[7]=j=>Ve(p)?p.value=j:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),e(ge,{name:3,class:"q-pa-none"},{default:n(()=>[e(oe,{class:"q-ma-sm"},{default:n(()=>[e(ae,null,{default:n(()=>[T(y(l(a)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),e(Z,{class:"row"},{default:n(()=>[(q(!0),Y(J,null,xe(l(Ua),(j,je)=>(q(),Q(oe,{key:je,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:n(()=>[re((q(),Q(_e,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:nt=>l(ra)(j.homepage)},{default:n(()=>[xn,e(Z,{class:"column items-center non-selectable q-py-lg"},{default:n(()=>[j.icon?(q(),Q(gt,{key:0,fit:"contain",height:"40px",width:"40px",src:j.icon,loading:"lazy"},null,8,["src"])):le("",!0)]),_:2},1024),e(Z,{class:"text-center non-selectable"},{default:n(()=>[T(y(j.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Oe]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),w.value!==2?(q(),Y(J,{key:0},[e(ce),ne("div",qn,[e(oe,null,{default:n(()=>[e(ae,{side:""},{default:n(()=>[e(L,{flat:"",square:"",icon:"sync",onClick:x[9]||(x[9]=j=>d(l(p)))},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})]),_:1}),e(ae,{class:pe(l(r).screen.lt.sm?"items-center":"")},{default:n(()=>[e(te,{overline:"",class:"row items-center"},{default:n(()=>[T(y(l(a)("embedding.remaining")),1)]),_:1}),typeof U.value=="number"?(q(),Q(te,{key:0},{default:n(()=>[T(y(M(U.value)),1)]),_:1})):le("",!0)]),_:1},8,["class"]),e(ae,{avatar:""},{default:n(()=>[e(X,{name:"help_outline",class:"cursor-pointer"},{default:n(()=>[e(ie,null,{default:n(()=>[T(y(l(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1}),e(De,{showing:B.value},null,8,["showing"])]),_:1})]),e(De,{class:"non-selectable lock-blur",showing:I.value},null,8,["showing"])],64)):le("",!0)]),_:1},8,["class"]),e(et,{modelValue:u.value,"onUpdate:modelValue":x[12]||(x[12]=j=>u.value=j)},{default:n(()=>[e(_e,null,{default:n(()=>[e(Z,null,{default:n(()=>[ne("div",Tn,y(l(a)("embedding.top_up_warning_title")),1)]),_:1}),e(ce),typeof U.value=="number"?(q(),Q(Z,{key:0},{default:n(()=>[T(y(l(a)("embedding.top_up_warning_message",{_remainedTokens:M(U.value),_freeTokens:M(z.value)})),1)]),_:1})):le("",!0),e(ce),e(ua,{align:"right"},{default:n(()=>[re(e(L,{flat:"",square:"","no-caps":"",label:l(a)("embedding.cancel_button")},null,8,["label"]),[[ye]]),re(e(L,{flat:"",square:"","no-caps":"",icon:"add_shopping_cart",label:l(a)("embedding.top_up_button"),color:"primary",onClick:x[10]||(x[10]=j=>w.value=2)},null,8,["label"]),[[ye]]),re(e(L,{flat:"",square:"","no-caps":"",label:l(a)("embedding.get_new_key_button"),onClick:x[11]||(x[11]=j=>R("manual"))},null,8,["label"]),[[ye]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Yn as N,ja as Q,Cn as _,ge as a,De as b,Ua as v};
