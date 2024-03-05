import{Q as ft}from"./QImg.7950e2fb.js";import{k as pe,R as Je,m as At,S as We,s as jt,h as O,i as b,T as vt,C as Te,b5 as zt,e as he,a6 as we,a8 as Q,a9 as a,ae as le,bL as Bt,aa as q,ab as e,ao as G,ag as ae,ai as C,aj as _,af as l,aq as _e,bv as Ot,bw as Mt,am as ne,D as Ne,$ as Nt,f as w,br as bt,J as ht,aU as Pt,j as L,P as Ke,aL as It,bK as Rt,as as qe,ar as Ft,w as Xe,K as Fe,aF as re,ac as Y,ad as xe,Z as ue,ah as te,bz as $t,al as Z,b1 as Oe,b9 as yt,bM as Vt,an as be,bN as _t,bO as wt,bP as kt,bQ as $e,bR as ot,ak as W,av as de,aX as et,U as Qe,V as Dt,W as Et,bS as St,aV as Ut,E as xt,N as Qt,aH as Ht,aP as Lt,aI as Kt,aK as Yt,aQ as Gt,bT as Zt,aJ as Jt,aT as st,I as Wt,a1 as Xt,bU as ze,a5 as ea,bV as it,bW as ta,u as aa,bX as na,bE as la,bY as oa,bF as sa,au as ia,bZ as ra,b_ as ua,bB as ca,ap as da}from"./index.870a10bb.js";import{Q as ee,b as me}from"./QBadge.a04eeee3.js";import{_ as ma}from"./NewsBadge.628a7ac2.js";import{_ as pa,A as ga}from"./blogs.48d2a6f1.js";import{_ as tt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as se}from"./QTooltip.f86da817.js";import{Q as fa,a as va}from"./QTabs.5d76a3c6.js";import{Q as fe}from"./QSpace.c5025033.js";import{u as Ce,B as He,Q as qt,T as ba}from"./embedding.b4dd29af.js";import{u as ha,b as ya,c as _a,d as wa}from"./QCarousel.1539bddc.js";import{Q as Ye}from"./QList.43b4c7f2.js";import{Q as Ge,a as ka}from"./QBtnDropdown.a9a2aa35.js";import{C as ye}from"./ClosePopup.0351eafd.js";import{c as Sa}from"./copy-to-clipboard.7ac9ca38.js";import{Q as at,a as ve}from"./QTable.90a5eed5.js";import{Q as xa}from"./QMenu.93d95bf0.js";import{Q as qa}from"./QLinearProgress.c7ead069.js";import{h as Ta}from"./format.afd66c59.js";import{R as Ca}from"./regexp.d033247d.js";var Ve=pe({name:"QInnerLoading",props:{...Je,...At,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(t,{slots:o}){const n=Te(),u=We(t,n.proxy.$q),{transitionProps:r,transitionStyle:f}=jt(t),m=O(()=>"q-inner-loading q--avoid-card-border absolute-full column flex-center"+(u.value===!0?" q-inner-loading--dark":"")),k=O(()=>"q-inner-loading__label"+(t.labelClass!==void 0?` ${t.labelClass}`:""));function R(){const z=[b(zt,{size:t.size,color:t.color})];return t.label!==void 0&&z.push(b("div",{class:k.value,style:t.labelStyle},[t.label])),z}function E(){return t.showing===!0?b("div",{class:m.value,style:f.value},o.default!==void 0?o.default():R()):null}return()=>b(vt,r.value,E)}});const Aa=t=>(Ot("data-v-51095b92"),t=t(),Mt(),t),ja=Aa(()=>ne("span",{class:"q-focus-helper"},null,-1)),za=he({__name:"NewsroomCard",props:{info:{}},setup(t){const o=t,n=O(()=>Bt(o.info.publishedAt).format("MMMM DD, YYYY")),{t:u}=we({useScope:"global"});return(r,f)=>(q(),Q(le,{to:`/news/${r.info.slug}`,class:"q-pa-none"},{default:a(()=>[e(_e,{flat:"",square:"",class:"cursor-pointer q-hoverable"},{default:a(()=>[ja,e(G,{class:"q-pa-none"},{default:a(()=>[e(ft,{src:r.info.featureImage,height:"200px",loading:"lazy",alt:r.info.featureImageAlt},{default:a(()=>[e(pa,{"alt-text":r.info.featureImageAlt},null,8,["alt-text"])]),_:1},8,["src","alt"])]),_:1}),e(G,{style:{height:"250px"}},{default:a(()=>[e(le,null,{default:a(()=>[e(ma,{news:r.info},null,8,["news"])]),_:1}),e(le,null,{default:a(()=>[e(ae,{class:"text-h6 text-weight-light"},{default:a(()=>[e(ee,{lines:"2"},{default:a(()=>[C(_(r.info.title),1)]),_:1})]),_:1})]),_:1}),e(le,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(ee,{lines:"3",caption:""},{default:a(()=>[C(_(r.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(G,null,{default:a(()=>[e(le,null,{default:a(()=>[e(ga,{authors:r.info.authors},null,8,["authors"]),e(ae,null,{default:a(()=>[e(ee,null,{default:a(()=>[C(_(r.info.authors.map(m=>m.name).join(", ")),1)]),_:1}),e(ee,{caption:""},{default:a(()=>[C(_(n.value)+" \u2022 "+_(r.info.readingTime)+" "+_(l(u)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["to"]))}});var Zn=tt(za,[["__scopeId","data-v-51095b92"]]),ge=pe({name:"QTabPanel",props:ha,setup(t,{slots:o}){return()=>b("div",{class:"q-tab-panel",role:"tabpanel"},Ne(o.default))}}),Ba=pe({name:"QTabPanels",props:{...ya,...Je},emits:_a,setup(t,{slots:o}){const n=Te(),u=We(t,n.proxy.$q),{updatePanelsList:r,getPanelContent:f,panelDirectives:m}=wa(),k=O(()=>"q-tab-panels q-panel-parent"+(u.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(o),Nt("div",{class:k.value},f(),"pan",t.swipeable,()=>m.value))}}),Oa="/assets/icon-MongoDB.982c1a31.svg",Ma="/assets/icon-Weaviate.7149e9ab.svg",Na="/assets/icon-Qdrant.934fd07b.svg",Pa="data:image/png;base64,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",Ia="/assets/icon-Chroma.2b9ab43a.svg",Ra="/assets/icon-Langchain.f2ee033d.png",Fa="/assets/icon-LlamaIndex.480689aa.png",$a="/assets/icon-Dify.8dc6e6d4.png",Va="/assets/icon-Haystack.c2968447.svg",Da="/assets/icon-SuperDuperDB.94465a4c.svg",Ea="/assets/icon-Epsilla.461331c8.png",Ua="/assets/icon-MyScale.5669eb9d.svg",Qa="/assets/icon-DashVector.3017419e.svg";const Ha=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:Oa},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:Na},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:Pa},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:Ia},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:Ma},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:Ea},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-ai-embedding",icon:Ua},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:Fa},{label:"Haystack",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:Va},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:Ra},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:$a},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/walkthrough/ai_apis/#jina",icon:Da},{label:"DashVector",tags:["vector_store"],homepage:"https://help.aliyun.com/document_detail/2668339.html",icon:Qa}];var Tt=pe({name:"QTr",props:{props:Object,noHover:Boolean},setup(t,{slots:o}){const n=O(()=>"q-tr"+(t.props===void 0||t.props.header===!0?"":" "+t.props.__trClass)+(t.noHover===!0?" q-tr--no-hover":""));return()=>b("tr",{class:n.value},Ne(o.default))}});function Me(t,o=new WeakMap){if(Object(t)!==t)return t;if(o.has(t))return o.get(t);const n=t instanceof Date?new Date(t):t instanceof RegExp?new RegExp(t.source,t.flags):t instanceof Set?new Set:t instanceof Map?new Map:typeof t.constructor!="function"?Object.create(null):t.prototype!==void 0&&typeof t.prototype.constructor=="function"?t:new t.constructor;if(typeof t.constructor=="function"&&typeof t.valueOf=="function"){const u=t.valueOf();if(Object(u)!==u){const r=new t.constructor(u);return o.set(t,r),r}}return o.set(t,n),t instanceof Set?t.forEach(u=>{n.add(Me(u,o))}):t instanceof Map&&t.forEach((u,r)=>{n.set(r,Me(u,o))}),Object.assign(n,...Object.keys(t).map(u=>({[u]:Me(t[u],o)})))}var rt=pe({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(t,{slots:o,emit:n}){const{proxy:u}=Te(),{$q:r}=u,f=w(null),m=w(""),k=w("");let R=!1;const E=O(()=>bt({initialValue:m.value,validate:t.validate,set:z,cancel:S,updatePosition:N},"value",()=>k.value,$=>{k.value=$}));function z(){t.validate(k.value)!==!1&&(P()===!0&&(n("save",k.value,m.value),n("update:modelValue",k.value)),F())}function S(){P()===!0&&n("cancel",k.value,m.value),F()}function N(){ht(()=>{f.value.updatePosition()})}function P(){return Pt(k.value,m.value)===!1}function F(){R=!0,f.value.hide()}function A(){R=!1,m.value=Me(t.modelValue),k.value=Me(t.modelValue),n("beforeShow")}function H(){n("show")}function M(){R===!1&&P()===!0&&(t.autoSave===!0&&t.validate(k.value)===!0?(n("save",k.value,m.value),n("update:modelValue",k.value)):n("cancel",k.value,m.value)),n("beforeHide")}function d(){n("hide")}function x(){const $=o.default!==void 0?[].concat(o.default(E.value)):[];return t.title&&$.unshift(b("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},t.title)),t.buttons===!0&&$.push(b("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[b(L,{flat:!0,color:t.color,label:t.labelCancel||r.lang.label.cancel,onClick:S}),b(L,{flat:!0,color:t.color,label:t.labelSet||r.lang.label.set,onClick:z})])),$}return Object.assign(u,{set:z,cancel:S,show($){f.value!==null&&f.value.show($)},hide($){f.value!==null&&f.value.hide($)},updatePosition:N}),()=>{if(t.disable!==!0)return b(xa,{ref:f,class:"q-popup-edit",cover:t.cover,onBeforeShow:A,onShow:H,onBeforeHide:M,onHide:d,onEscapeKey:S},x)}}});function La(t){const o=Object.assign({noopener:!0},t),n=[];for(const u in o){const r=o[u];r===!0?n.push(u):(Rt(r)||typeof r=="string"&&r!=="")&&n.push(u+"="+r)}return n.join(",")}function ut(t,o,n){let u=window.open;if(Ke.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)u=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(t,{openExternal:!0})}const r=u(t,"_blank",La(n));if(r)return Ke.is.desktop&&r.focus(),r;o&&o()}var Ka=(t,o,n)=>{if(Ke.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(u=>{u?window.SafariViewController.show({url:t},It,o):ut(t,o,n)});return}return ut(t,o,n)};const Ya={class:"full-width ellipsis q-pl-md"},Pe=he({__name:"ModelDropDown",props:{currentModel:{},indicator:{type:Boolean,default:!0},category:{default:"embedding"}},emits:["chooseModel"],setup(t,{emit:o}){const{t:n}=we({useScope:"global"}),u=Ce(),{models:r,baseDeModel:f,baseEnModel:m,baseZhModel:k,jinaRerankerV1:R}=qe(u),E=Ft(),{language:z}=qe(E),S=w(!1),N=t,P=o,F=()=>{var y;P("chooseModel",(y=k.value)!=null?y:m.value)},A=()=>{var y;P("chooseModel",(y=f.value)!=null?y:m.value)};Xe(z,y=>{y&&["zh-CN","zh-TW"].includes(y)?F():y==="de"&&A()}),Fe(async()=>{await H()});const H=async()=>{S.value=!0,await u.getModels(N.category),S.value=!1,N.category==="embedding"?r.value.length>0&&(z.value&&["zh-CN","zh-TW"].includes(z.value)?F():z.value==="de"?A():P("chooseModel",m.value)):N.category==="rank"&&P("chooseModel",R.value)},M=y=>{d("event","embedding_view_model_detail",{location:x.location.href,model:y}),Ka(`https://huggingface.co/jinaai/${y}`)},d=window.gtag,x=window.document,$=y=>y==="en"?"\u{1F1FA}\u{1F1F8}":y==="zh"?"\u{1F1E8}\u{1F1F3}\u{1F1FA}\u{1F1F8}":y==="de"?"\u{1F1E9}\u{1F1EA}\u{1F1FA}\u{1F1F8}":y==="es"?"\u{1F1EA}\u{1F1F8}\u{1F1FA}\u{1F1F8}":"\u{1F30D}";return(y,v)=>(q(),Q(Ge,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:S.value,class:re(["dynamic-text-btn",y.$q.screen.lt.sm?"full-width q-py-md":""]),"disable-dropdown":S.value},{label:a(()=>{var c;return[ne("div",Ya,_((c=y.currentModel)==null?void 0:c.name),1)]}),default:a(()=>[e(Ye,null,{default:a(()=>[(q(!0),Y(Z,null,xe(l(r),(c,s)=>{var i;return ue((q(),Q(le,{key:s,clickable:"",active:c.name===((i=y.currentModel)==null?void 0:i.name),onClick:g=>P("chooseModel",c),class:"q-pa-md"},{default:a(()=>[e(ae,null,{default:a(()=>[e(ee,{overline:"",caption:""},{default:a(()=>[C(_(c.name),1)]),_:2},1024),e(ee,{class:"text-weight-bold"},{default:a(()=>[C(_(l(n)(`embedding.${c.name}_description`)),1)]),_:2},1024),e(ee,{caption:"",class:"row"},{default:a(()=>{var g,I,j,V,D;return[e(me,{label:c.meta_data.token_length,square:"",color:c.name!==((g=y.currentModel)==null?void 0:g.name)?"grey-5":"",size:"xs",outline:"",icon:"notes",style:{"border-radius":"0"}},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.token_length_explain",{_tokenLength:c.meta_data.token_length})),1)]),_:2},1024)]),_:2},1032,["label","color"]),c.request_path==="embedding"?(q(),Q(me,{key:0,label:c.meta_data.output_dim,square:"",color:c.name!==((I=y.currentModel)==null?void 0:I.name)?"grey-5":"",size:"xs",outline:"",icon:"mdi-axis-arrow",style:{"border-radius":"0"}},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.output_dim_explain",{_outputDim:c.meta_data.output_dim})),1)]),_:2},1024)]),_:2},1032,["label","color"])):te("",!0),e(me,{label:c.meta_data.size,square:"",size:"xs",color:c.name!==((j=y.currentModel)==null?void 0:j.name)?"grey-5":"",outline:"",icon:"mdi-matrix",style:{"border-radius":"0"}},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.size_explain",{_size:c.meta_data.size})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(me,{label:$(c.meta_data.language),square:"",color:c.name!==((V=y.currentModel)==null?void 0:V.name)?"grey-5":"",size:"xs",outline:"",style:{"border-radius":"0"}},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.language_explain",{_language:$(c.meta_data.language)})),1)]),_:2},1024)]),_:2},1032,["label","color"]),e(me,{icon:"img:/huggingface_logo.svg",square:"",size:"xs",outline:"",color:c.name!==((D=y.currentModel)==null?void 0:D.name)?"grey-5":"",style:{"border-radius":"0"},onClick:$t(X=>M(c.name),["stop"]),clickable:"",label:l(n)("embedding.opensource")},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.opensource_explain")),1)]),_:1})]),_:2},1032,["color","onClick","label"])]}),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"])),[[Oe],[ye]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]))}});const Ga={class:"row full-width"},Za=he({__name:"TestTab",setup(t){const{t:o}=we({useScope:"global"}),n=w(!1),u=Ce(),r=w(),{testData:f}=qe(u),m=v=>{r.value=v,d(f.value).catch(c=>{console.error("calculateScores",c)})},k=[{name:"text1",field:"text1",label:o("embedding.text1"),required:!0,align:"left",sortable:!0},{name:"text2",field:"text1",label:o("embedding.text2"),required:!0,align:"left",sortable:!0},{name:"score",align:"right",label:o("embedding.cosine_similarity"),sortable:!0,field:v=>{var c;return v.scores[((c=r.value)==null?void 0:c.name)||""]||NaN}}],R=v=>{var c,s;return((s=v.scores)==null?void 0:s[((c=r.value)==null?void 0:c.name)||""])||NaN},E=w({page:1,rowsPerPage:10}),z=w([]),S=w(null),N=w(null),P=()=>{f.value=f.value.filter(v=>!z.value.includes(v)),z.value=[]},F=v=>{S.value=v},A=v=>{N.value=v},H=()=>{const v={id:f.value.length,text1:y[Math.floor(Math.random()*y.length)],text2:y[Math.floor(Math.random()*y.length)],scores:{},isNew:!0};f.value.unshift(v),d([v]).catch(c=>{console.error("calculateScores",c)}),E.value.page=1,ht(()=>{var c;(c=S.value)==null||c.show()})},M=(v,c,s)=>{var i;s[c]=v,s.scores={},s.isNew&&(c==="text1"?(i=N.value)==null||i.show():c==="text2"&&(s.isNew=!1)),d([s]).catch(g=>{console.error("calculateScores",g)})};async function d(v){if(!r.value)return;const c=r.value.name,s=v.filter(i=>i.text1&&i.text2).filter(i=>{var g;return!((g=i.scores)!=null&&g[c])});if(s.length!==0)try{n.value=!0;const i=100;for(let g=0;g<s.length;g+=i){const I=s.slice(g,g+i),j=await $(I,c);for(const V of I){const D=j[V.text1],X=j[V.text2];!D||!X||(V.scores=V.scores||{},V.scores[c]=_t(j[V.text1],j[V.text2]))}}}finally{n.value=!1}}const x={};async function $(v,c){x[c]||(x[c]={});const s="https://api.jina.ai/v1/embeddings",i={"Content-Type":"application/json",Authorization:`Bearer ${u.apiKey}`},g=v.map(I=>[I.text1,I.text2]).flat().filter(Boolean).filter(I=>!x[c][I]);if(g.length>0){const I={input:g,model:c},V=await(await fetch(s,{method:"POST",headers:i,body:JSON.stringify(I)})).json();for(const D of V.data)x[c][I.input[D.index]]=D.embedding}return x[c]}const y=["The only way to do great work is to love what you do.","The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don\u2019t change people; they merely amplify what is already there.","Your time is limited, don\u2019t waste it living someone else\u2019s life.","Not how long, but how well you have lived is the main thing.","If life were predictable it would cease to be life, and be without flavor.","The big lesson in life, baby, is never be scared of anyone or anything.","Sing like no one\u2019s listening, love like you\u2019ve never been hurt, dance like nobody\u2019s watching, and live like it\u2019s heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","Turn your wounds into wisdom.","The way to get started is to quit talking and begin doing.","The greatest glory in living lies not in never falling, but in rising every time we fall."];return(v,c)=>(q(),Q(at,{class:"my-sticky-column-table col key-value-table",flat:"",rows:l(f),columns:k,"row-key":"id","binary-state-sort":"",selection:"multiple",pagination:E.value,"onUpdate:pagination":c[0]||(c[0]=s=>E.value=s),selected:z.value,"onUpdate:selected":c[1]||(c[1]=s=>z.value=s),loading:n.value,"no-data-label":l(o)("embedding.no_data1"),separator:"cell"},{top:a(()=>[ne("div",Ga,[e(ka,{flat:"",square:""},{default:a(()=>[e(L,{square:"",icon:"add",label:l(o)("embedding.add_pair"),flat:"",padding:"md",onClick:H},null,8,["label"]),ue(e(L,{square:"",padding:"md",icon:"delete_forever",color:"negative",label:l(o)("embedding.delete_pair"),flat:"",onClick:P},null,8,["label"]),[[yt,z.value.length>0]])]),_:1}),e(fe),e(Pe,{currentModel:r.value,indicator:!1,onChooseModel:m},null,8,["currentModel"])])]),body:a(s=>[e(Tt,{props:s},{default:a(()=>[e(ve,{key:"selection"},{default:a(()=>[e(Vt,{modelValue:s.selected,"onUpdate:modelValue":i=>s.selected=i},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(ve,{key:"text1",props:s,class:"fixed-cell"},{default:a(()=>[C(_(s.row.text1)+" ",1),e(l(rt),{ref:i=>{s.row.isNew&&s.rowIndex===0&&F(i)},modelValue:s.row.text1,"onUpdate:modelValue":i=>s.row.text1=i,"auto-save":"",onSave:i=>M(i,"text1",s.row)},{default:a(i=>[e(be,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text1_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(ve,{key:"text2",props:s,class:"fixed-cell"},{default:a(()=>[C(_(s.row.text2)+" ",1),e(l(rt),{ref:i=>{s.row.isNew&&s.rowIndex===0&&A(i)},modelValue:s.row.text2,"onUpdate:modelValue":i=>s.row.text2=i,"auto-save":"",onSave:i=>M(i,"text2",s.row)},{default:a(i=>[e(be,{modelValue:i.value,"onUpdate:modelValue":g=>i.value=g,dense:"",autofocus:"",counter:"",label:l(o)("embedding.edit_text2_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(ve,{key:"score",props:s},{default:a(()=>[C(_(R(s.row).toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","selected","loading","no-data-label"]))}});var Ja=tt(Za,[["__scopeId","data-v-6d7c27d2"]]);const Wa=[b("g",{transform:"translate(20 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.6"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(50 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.8"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.1s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])]),b("g",{transform:"translate(80 50)"},[b("rect",{x:"-10",y:"-30",width:"20",height:"60",fill:"currentColor",opacity:"0.9"},[b("animateTransform",{attributeName:"transform",type:"scale",from:"2",to:"1",begin:"0.2s",repeatCount:"indefinite",dur:"1s",calcMode:"spline",keySplines:"0.1 0.9 0.4 1",keyTimes:"0;1",values:"2;1"})])])];var Xa=pe({name:"QSpinnerFacebook",props:wt,setup(t){const{cSize:o,classes:n}=kt(t);return()=>b("svg",{class:n.value,width:o.value,height:o.value,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},Wa)}});const en={class:"row full-width"},ct="https://api.jina.ai/v1/embeddings",tn=he({__name:"SearchTab",props:{asVisualizer:{type:Boolean,default:!1},maximizedWindow:{type:Boolean,default:!1}},setup(t){const o=Ce(),{t:n}=we({useScope:"global"}),u=w(""),r=w(),{userDocuments:f}=qe(o),m=w(null),k=j=>{r.value=j},R=w(""),E=w(""),z={"Content-Type":"application/json",Authorization:`Bearer ${o.apiKey}`},S=w([]),N=w([]),P=w(0),F=w(0),A=w(!0),H=w(!0),M=w(!1),d=w([]),x=w(""),$=w(!1),y=t,v=()=>{var j;x.value===""?i(f.value):(gtag("event","embedding_open_tensorboard",{model:(j=r.value)==null?void 0:j.name}),window.open(x.value,"_blank"))},c=async()=>{var ie,B;if(((ie=u.value)==null?void 0:ie.trim())==="")return;H.value=!1;const j={input:[(B=u.value)==null?void 0:B.trim()],model:r.value.name},V=await fetch(ct,{method:"POST",headers:z,body:JSON.stringify(j)}),{data:D}=await V.json(),X=D[0].embedding;d.value=N.value.map((U,J)=>({document:S.value[J],similarity:_t(X,U)})),d.value.sort((U,J)=>J.similarity-U.similarity),H.value=!0,gtag("event","embedding_search_done",{model:r.value.name})},s=()=>{S.value=[],F.value=0,A.value=!1,P.value=0,N.value=[],x.value=""},i=j=>{s(),S.value=j.split(`
`).filter(V=>V.trim()!==""),F.value=S.value.length,g(S.value)};async function g(j){var D;const V=Math.max(20,Math.min(50,j.length/10));for(let X=0;X<j.length;X+=V){M.value=!0;const ie=j.slice(X,X+V),B={input:ie,model:r.value.name};try{const J=await(await fetch(ct,{method:"POST",headers:z,body:JSON.stringify(B)})).json();for(const oe of J.data)N.value[X+oe.index]=oe.embedding;if(P.value+=ie.length,P.value>=F.value){if(A.value=!0,R.value="",E.value="",N.value.forEach((oe,ke)=>{R.value+=oe.join("	")+`
`,E.value+=S.value[ke].replaceAll("	"," ").trim()+`
`}),y.asVisualizer){$.value=!0;const oe={description:"Projector Data Files",public:!0,files:{"tensor.tsv":{content:R.value},"metadata.tsv":{content:E.value}}},Ie=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${ot}`,"Content-Type":"application/json"},body:JSON.stringify(oe)})).json(),De={tensorName:((D=r.value)==null?void 0:D.name)||"Jina Embeddings",tensorShape:[N.value.length,N.value[0].length],tensorPath:Ie.files["tensor.tsv"].raw_url,metadataPath:Ie.files["metadata.tsv"].raw_url},Ee={description:"Projector Meta Files",public:!0,files:{"project_config.json":{content:JSON.stringify({embeddings:[De]})}}},Ae=await(await fetch("https://api.github.com/gists",{method:"POST",headers:{Authorization:`Bearer ${ot}`,"Content-Type":"application/json"},body:JSON.stringify(Ee)})).json();x.value=`https://projector.tensorflow.org/?config=${Ae.files["project_config.json"].raw_url}`,$.value=!1}gtag("event","embedding_docs_done",{length:S.value.length,model:r.value.name})}}catch(U){console.error("An error occurred while embedding documents:",U)}finally{M.value=!1}}}const I=[{name:"document",field:"document",label:n("embedding.document"),required:!0,align:"left",sortable:!0},{name:"similarity",align:"right",label:n("embedding.cosine_similarity"),sortable:!0,field:"similarity"}];return(j,V)=>(q(),Y(Z,null,[ne("div",en,[!t.asVisualizer&&(S.value.length===0||M.value)?(q(),Q(L,{key:0,label:l(n)("embedding.start_embedding"),onClick:V[0]||(V[0]=D=>i(l(f))),icon:"play_arrow",disable:l(f)===""||M.value,padding:"md"},null,8,["label","disable"])):!t.asVisualizer&&!M.value?(q(),Q(l(be),{key:1,class:"col",clearable:"",modelValue:u.value,"onUpdate:modelValue":[V[1]||(V[1]=D=>u.value=D),c],debounce:"500",label:F.value===0?l(n)("embedding.please_fill_docs_first"):l(n)("embedding.query"),loading:!H.value,"hide-bottom-space":""},{prepend:a(()=>[e(W,{name:"search",class:"q-mx-md"})]),_:1},8,["modelValue","label","loading"])):t.asVisualizer?(q(),Q(L,{key:2,stretch:"",padding:"md",disable:l(f)===""||M.value,label:x.value?l(n)("embedding.open_tensorboard"):l(n)("embedding.visualize"),onClick:v,icon:x.value?"open_in_new":"play_arrow",loading:$.value},null,8,["disable","label","icon","loading"])):te("",!0),e(fe),e(Pe,{currentModel:r.value,indicator:!1,onChooseModel:k},null,8,["currentModel"])]),e(de),ue(e(qa,{value:P.value/F.value,indeterminate:$.value},null,8,["value","indeterminate"]),[[yt,F.value>0&&!A.value||$.value]]),d.value.length>0&&!!u.value?(q(),Q(at,{key:0,columns:I,class:"my-sticky-column-table col key-value-table",loading:!H.value,rows:d.value,pagination:{rowsPerPage:10}},{body:a(D=>[e(Tt,{props:D},{default:a(()=>[e(ve,{key:"document",props:D,class:"fixed-cell"},{default:a(()=>[C(_(D.row.document),1)]),_:2},1032,["props"]),e(ve,{key:"similarity",props:D},{default:a(()=>[C(_(D.row.similarity.toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["loading","rows"])):(q(),Q(l(be),{key:1,modelValue:l(f),"onUpdate:modelValue":[V[2]||(V[2]=D=>$e(f)?f.value=D:null),s],ref_key:"userInput",ref:m,label:l(n)("embedding.original_documents"),placeholder:l(n)("embedding.original_documents_hint"),filled:"",rows:"15",square:"","input-style":t.maximizedWindow?{height:"calc(100vh - 190px)"}:{},type:"textarea","bottom-slots":"",class:"q-mb-md"},{hint:a(()=>[F.value>0&&!A.value?(q(),Y(Z,{key:0},[e(Xa,{size:"20px"}),C(" "+_(l(n)("embedding.total_documents",{_Processed:P.value,_Count:F.value})),1)],64)):A.value&&F.value>0&&!t.asVisualizer?(q(),Y(Z,{key:1},[e(W,{name:"done"}),C(" "+_(l(n)("embedding.embedding_done",{_Count:F.value})),1)],64)):$.value?(q(),Y(Z,{key:2},[e(W,{name:"scatter_plot"}),C(" "+_(l(n)("embedding.generating_visualization")),1)],64)):x.value?(q(),Y(Z,{key:3},[e(W,{name:"open_in_new"}),C(" "+_(l(n)("embedding.visualize_done")),1)],64)):F.value<=1?(q(),Y(Z,{key:4},[e(W,{name:"info"}),C(" "+_(l(n)("embedding.more_than_two2")),1)],64)):te("",!0)]),_:1},8,["modelValue","label","placeholder","input-style"]))],64))}});var dt=tt(tn,[["__scopeId","data-v-79e181fe"]]);const an=he({__name:"EmbeddingDialog",setup(t){const o=w(null),n=()=>{var u;(u=o.value)==null||u.hide()};return(u,r)=>(q(),Q(l(et),{maximized:"",ref_key:"embeddingFSDialog",ref:o},{default:a(()=>[e(_e,{flat:""},{default:a(()=>[e(jn,{maximized:!0,onCloseDialog:n,"show-function":"all_maximized"})]),_:1})]),_:1},512))}});var Be=pe({name:"QTimelineEntry",props:{heading:Boolean,tag:{type:String,default:"h3"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},icon:String,avatar:String,color:String,title:String,subtitle:String,body:String},setup(t,{slots:o}){const n=Et(St,Qe);if(n===Qe)return console.error("QTimelineEntry needs to be child of QTimeline"),Qe;const u=O(()=>`q-timeline__entry q-timeline__entry--${t.side}`+(t.icon!==void 0||t.avatar!==void 0?" q-timeline__entry--icon":"")),r=O(()=>`q-timeline__dot text-${t.color||n.color}`),f=O(()=>n.layout==="comfortable"&&n.side==="left");return()=>{const m=Dt(o.default,[]);if(t.body!==void 0&&m.unshift(t.body),t.heading===!0){const E=[b("div"),b("div"),b(t.tag,{class:"q-timeline__heading-title"},m)];return b("div",{class:"q-timeline__heading"},f.value===!0?E.reverse():E)}let k;t.icon!==void 0?k=[b(W,{class:"row items-center justify-center",name:t.icon})]:t.avatar!==void 0&&(k=[b("img",{class:"q-timeline__dot-img",src:t.avatar})]);const R=[b("div",{class:"q-timeline__subtitle"},[b("span",{},Ne(o.subtitle,[t.subtitle]))]),b("div",{class:r.value},k),b("div",{class:"q-timeline__content"},[b("h6",{class:"q-timeline__title"},Ne(o.title,[t.title]))].concat(m))];return b("li",{class:u.value},f.value===!0?R.reverse():R)}}});function Se(t,o,n,u){const r=[];return t.forEach(f=>{u(f)===!0?r.push(f):o.push({failedPropValidation:n,file:f})}),r}function Re(t){t&&t.dataTransfer&&(t.dataTransfer.dropEffect="copy"),xt(t)}const nn={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},ln=["rejected"];function on({editable:t,dnd:o,getFileInput:n,addFilesToQueue:u}){const{props:r,emit:f,proxy:m}=Te(),k=w(null),R=O(()=>r.accept!==void 0?r.accept.split(",").map(d=>(d=d.trim(),d==="*"?"*/":(d.endsWith("/*")&&(d=d.slice(0,d.length-1)),d.toUpperCase()))):null),E=O(()=>parseInt(r.maxFiles,10)),z=O(()=>parseInt(r.maxTotalSize,10));function S(d){if(t.value)if(d!==Object(d)&&(d={target:null}),d.target!==null&&d.target.matches('input[type="file"]')===!0)d.clientX===0&&d.clientY===0&&Ut(d);else{const x=n();x&&x!==d.target&&x.click(d)}}function N(d){t.value&&d&&u(null,d)}function P(d,x,$,y){let v=Array.from(x||d.target.files);const c=[],s=()=>{c.length!==0&&f("rejected",c)};if(r.accept!==void 0&&R.value.indexOf("*/")===-1&&(v=Se(v,c,"accept",i=>R.value.some(g=>i.type.toUpperCase().startsWith(g)||i.name.toUpperCase().endsWith(g))),v.length===0))return s();if(r.maxFileSize!==void 0){const i=parseInt(r.maxFileSize,10);if(v=Se(v,c,"max-file-size",g=>g.size<=i),v.length===0)return s()}if(r.multiple!==!0&&v.length!==0&&(v=[v[0]]),v.forEach(i=>{i.__key=i.webkitRelativePath+i.lastModified+i.name+i.size}),y===!0){const i=$.map(g=>g.__key);v=Se(v,c,"duplicate",g=>i.includes(g.__key)===!1)}if(v.length===0)return s();if(r.maxTotalSize!==void 0){let i=y===!0?$.reduce((g,I)=>g+I.size,0):0;if(v=Se(v,c,"max-total-size",g=>(i+=g.size,i<=z.value)),v.length===0)return s()}if(typeof r.filter=="function"){const i=r.filter(v);v=Se(v,c,"filter",g=>i.includes(g))}if(r.maxFiles!==void 0){let i=y===!0?$.length:0;if(v=Se(v,c,"max-files",()=>(i++,i<=E.value)),v.length===0)return s()}if(s(),v.length!==0)return v}function F(d){Re(d),o.value!==!0&&(o.value=!0)}function A(d){xt(d),(d.relatedTarget!==null||Qt.is.safari!==!0?d.relatedTarget!==k.value:document.elementsFromPoint(d.clientX,d.clientY).includes(k.value)===!1)===!0&&(o.value=!1)}function H(d){Re(d);const x=d.dataTransfer.files;x.length!==0&&u(null,x),o.value=!1}function M(d){if(o.value===!0)return b("div",{ref:k,class:`q-${d}__dnd absolute-full`,onDragenter:Re,onDragover:Re,onDragleave:A,onDrop:H})}return Object.assign(m,{pickFiles:S,addFiles:N}),{pickFiles:S,addFiles:N,onDragover:F,onDragleave:A,processFiles:P,getDndNode:M,maxFilesNumber:E,maxTotalSizeNumber:z}}var sn=pe({name:"QFile",inheritAttrs:!1,props:{...Ht,...Lt,...nn,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Kt,...ln],setup(t,{slots:o,emit:n,attrs:u}){const{proxy:r}=Te(),f=Yt(),m=w(null),k=w(!1),R=Gt(t),{pickFiles:E,onDragover:z,onDragleave:S,processFiles:N,getDndNode:P}=on({editable:f.editable,dnd:k,getFileInput:j,addFilesToQueue:V}),F=Zt(t),A=O(()=>Object(t.modelValue)===t.modelValue?"length"in t.modelValue?Array.from(t.modelValue):[t.modelValue]:[]),H=O(()=>st(A.value)),M=O(()=>A.value.map(B=>B.name).join(", ")),d=O(()=>Ta(A.value.reduce((B,U)=>B+U.size,0))),x=O(()=>({totalSize:d.value,filesNumber:A.value.length,maxFiles:t.maxFiles})),$=O(()=>({tabindex:-1,type:"file",title:"",accept:t.accept,capture:t.capture,name:R.value,...u,id:f.targetUid.value,disabled:f.editable.value!==!0})),y=O(()=>"q-file q-field--auto-height"+(k.value===!0?" q-file--dnd":"")),v=O(()=>t.multiple===!0&&t.append===!0);function c(B){const U=A.value.slice();U.splice(B,1),i(U)}function s(B){const U=A.value.indexOf(B);U>-1&&c(U)}function i(B){n("update:modelValue",t.multiple===!0?B:B[0])}function g(B){B.keyCode===13&&Wt(B)}function I(B){(B.keyCode===13||B.keyCode===32)&&E(B)}function j(){return m.value}function V(B,U){const J=N(B,U,A.value,v.value),oe=j();oe!=null&&(oe.value=""),J!==void 0&&((t.multiple===!0?t.modelValue&&J.every(ke=>A.value.includes(ke)):t.modelValue===J[0])||i(v.value===!0?A.value.concat(J):J))}function D(){return[b("input",{class:[t.inputClass,"q-file__filler"],style:t.inputStyle})]}function X(){if(o.file!==void 0)return A.value.length===0?D():A.value.map((U,J)=>o.file({index:J,file:U,ref:this}));if(o.selected!==void 0)return A.value.length===0?D():o.selected({files:A.value,ref:this});if(t.useChips===!0)return A.value.length===0?D():A.value.map((U,J)=>b(me,{key:"file-"+J,removable:f.editable.value,dense:!0,textColor:t.color,tabindex:t.tabindex,onRemove:()=>{c(J)}},()=>b("span",{class:"ellipsis",textContent:U.name})));const B=t.displayValue!==void 0?t.displayValue:M.value;return B.length!==0?[b("div",{class:t.inputClass,style:t.inputStyle,textContent:B})]:D()}function ie(){const B={ref:m,...$.value,...F.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:V};return t.multiple===!0&&(B.multiple=!0),b("input",B)}return Object.assign(f,{fieldClass:y,emitValue:i,hasValue:H,inputRef:m,innerValue:A,floatingLabel:O(()=>H.value===!0||st(t.displayValue)),computedCounter:O(()=>{if(t.counterLabel!==void 0)return t.counterLabel(x.value);const B=t.maxFiles;return`${A.value.length}${B!==void 0?" / "+B:""} (${d.value})`}),getControlChild:()=>P("file"),getControl:()=>{const B={ref:f.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:t.tabindex};return f.editable.value===!0&&Object.assign(B,{onDragover:z,onDragleave:S,onKeydown:g,onKeyup:I}),b("div",B,[ie()].concat(X()))}}),Object.assign(r,{removeAtIndex:c,removeFile:s,getNativeElement:()=>m.value}),bt(r,"nativeEl",()=>m.value),Jt(f)}});const rn=[b("circle",{cx:"12.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"0s",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"52.5",r:"12.5","fill-opacity":".5"},[b("animate",{attributeName:"fill-opacity",begin:"100ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"300ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"600ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"12.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"800ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"52.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"400ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"12.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"700ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"52.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"500ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})]),b("circle",{cx:"92.5",cy:"92.5",r:"12.5"},[b("animate",{attributeName:"fill-opacity",begin:"200ms",dur:"1s",values:"1;.2;1",calcMode:"linear",repeatCount:"indefinite"})])];var un=pe({name:"QSpinnerGrid",props:wt,setup(t){const{cSize:o,classes:n}=kt(t);return()=>b("svg",{class:n.value,fill:"currentColor",width:o.value,height:o.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg"},rn)}}),cn=pe({name:"QTimeline",props:{...Je,color:{type:String,default:"primary"},side:{type:String,default:"right",validator:t=>["left","right"].includes(t)},layout:{type:String,default:"dense",validator:t=>["dense","comfortable","loose"].includes(t)}},setup(t,{slots:o}){const n=Te(),u=We(t,n.proxy.$q);Xt(St,t);const r=O(()=>`q-timeline q-timeline--${t.layout} q-timeline--${t.layout}--${t.side}`+(u.value===!0?" q-timeline--dark":""));return()=>b("ul",{class:r.value},Ne(o.default))}});const dn=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],mn=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],pn=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],gn=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],mt=(t,o,n)=>{let u=t;return typeof o=="string"||Array.isArray(o)?u=t.toLocaleString(o,n):(o===!0||n!==void 0)&&(u=t.toLocaleString(void 0,n)),u};function pt(t,o){if(!Number.isFinite(t))throw new TypeError(`Expected a finite number, got ${typeof t}: ${t}`);o={bits:!1,binary:!1,space:!0,...o};const n=o.bits?o.binary?gn:pn:o.binary?mn:dn,u=o.space?" ":"";if(o.signed&&t===0)return` 0${u}${n[0]}`;const r=t<0,f=r?"-":o.signed?"+":"";r&&(t=-t);let m;if(o.minimumFractionDigits!==void 0&&(m={minimumFractionDigits:o.minimumFractionDigits}),o.maximumFractionDigits!==void 0&&(m={maximumFractionDigits:o.maximumFractionDigits,...m}),t<1){const z=mt(t,o.locale,m);return f+z+u+n[0]}const k=Math.min(Math.floor(o.binary?Math.log(t)/Math.log(1024):Math.log10(t)/3),n.length-1);t/=(o.binary?1024:1e3)**k,m||(t=t.toPrecision(3));const R=mt(Number(t),o.locale,m),E=n[k];return f+R+u+E}const fn={class:"row justify-center items-center"},Le=200*1024*1024,vn=he({__name:"BulkTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["update:apiKey"],setup(t,{emit:o}){const{t:n,locale:u}=we({useScope:"global"}),r=Ce(),f=w(null),m=w(""),k=w(),R=M=>{k.value=M},E=o,z=t,S=O({get:()=>z.apiKey,set:M=>{E("update:apiKey",M)}}),N=([M])=>{const{failedPropValidation:d}=M;switch(d){case"max-file-size":ze.create({message:`Exceed max file size: ${pt(Le,{locale:u.value,binary:!0})}`,color:"negative"});break;case"accept":ze.create({message:n("embedding.file_type_not_supported"),color:"negative"});break}};Xe(()=>({file:f,currentModel:k}),()=>{F.value=""},{deep:!0});const P=w(!1),F=w(""),A=w(!1),H=async()=>{if(A.value=!0,!k.value){ze.create({message:n("embedding.model_required"),color:"negative"});return}if(!f.value){ze.create({message:n("embedding.file_required"),color:"negative"});return}let M;try{P.value=!0;const d=S.value,{id:x}=await r.bulkEmbedding(d,{email:m.value,model:k.value.name,file:f.value}),$=60;let y=0;F.value=await new Promise((v,c)=>{M=setInterval(async()=>{y++;const s=await r.checkBulk(d,x);if(console.log(s),y>$&&clearInterval(M),s.status===He.COMPLETED){const i=await r.getBulkResult(d,x);clearInterval(M),v(i)}else s.status===He.FAILED?(A.value=!1,clearInterval(M),c(new Error(n("embedding.bulk_embedding_failed")))):s.status===He.IN_PROGRESS&&(A.value=!0)},1e3*30)})}catch(d){A.value=!1,ze.create({message:d,color:"negative"})}finally{P.value=!1}ea(()=>{clearInterval(M)})};return(M,d)=>(q(),Q(cn,{class:"q-pa-lg"},{default:a(()=>[e(Be,{subtitle:l(n)("embedding.batch_upload_hint"),heading:!1},{default:a(()=>[ne("div",fn,[e(Pe,{currentModel:k.value,indicator:!1,onChooseModel:R},null,8,["currentModel"]),e(be,{"hide-bottom-space":"",filled:"",dense:"",loading:z.loadingTokens,square:"",modelValue:S.value,"onUpdate:modelValue":d[0]||(d[0]=x=>S.value=x),label:l(n)("embedding.key"),class:"col",error:z.availableTokens===void 0,"error-message":S.value?l(n)("embedding.input_api_key_error1"):""},{prepend:a(()=>[e(W,{name:"vpn_key"})]),_:1},8,["loading","modelValue","label","error","error-message"])])]),_:1},8,["subtitle"]),e(Be,{subtitle:l(n)("embedding.original_documents_hint"),color:k.value&&!!S.value?"":"bg-dark"},{default:a(()=>[e(sn,{"bottom-slots":"",filled:"",square:"",modelValue:f.value,"onUpdate:modelValue":d[1]||(d[1]=x=>f.value=x),label:l(n)("embedding.upload_file"),accept:"text/*",onRejected:N,"max-file-size":Le},{prepend:a(()=>[e(W,{name:"file_upload"})]),hint:a(()=>[C(_(l(n)("embedding.max_file_size",{_maxSize:l(pt)(Le,{locale:l(u),binary:!0})})),1)]),_:1},8,["modelValue","label"])]),_:1},8,["subtitle","color"]),e(Be,{subtitle:l(n)("embedding.write_email_here"),color:f.value&&k.value&&!!S.value?"":"bg-dark"},{default:a(()=>[e(be,{filled:"",square:"",label:l(n)("subscribe_system.email"),type:"email",modelValue:m.value,"onUpdate:modelValue":d[2]||(d[2]=x=>m.value=x),"lazy-rules":"",rules:[x=>!!x||l(n)("subscribe_system.email_required"),x=>l(Ca).test(x)||l(n)("subscribe_system.email_invalid")]},{prepend:a(()=>[e(W,{name:"email"})]),_:1},8,["label","modelValue","rules"])]),_:1},8,["subtitle","color"]),e(Be,{subtitle:l(n)("embedding.click_upload_btn_above"),color:m.value&&f.value&&k.value&&!!S.value?"":"bg-dark"},{default:a(()=>[e(L,{square:"",label:l(n)("embedding.start_batch"),icon:"send",onClick:H,padding:"md",disable:!f.value||!m.value||P.value},null,8,["label","disable"])]),_:1},8,["subtitle","color"]),A.value?(q(),Q(Be,{key:0,subtitle:l(n)("embedding.wait_for_processing")},{default:a(()=>[e(un,{class:"q-mr-sm"}),C(" "+_(l(n)("embedding.you_can_leave")),1)]),_:1},8,["subtitle"])):te("",!0)]),_:1}))}}),bn={class:"full-width q-px-md q-pt-md"},hn={class:"row q-pa-md"},yn=ne("span",{class:"q-focus-helper"},null,-1),_n={class:"text-h6"},wn=he({__name:"PurchaseTab",props:{loadingTokens:{type:Boolean},availableTokens:{},apiKey:{}},emits:["updateToken","update:apiKey"],setup(t,{emit:o}){const{t:n}=we({useScope:"global"}),u=Ce(),{products:r}=qe(u),f=o,m=t,k=s=>new Intl.NumberFormat("en").format(s),R=O(()=>m.availableTokens||0),E=O(()=>m.availableTokens===void 0),z=O(()=>m.loadingTokens),S=O({get:()=>m.apiKey,set:s=>{f("update:apiKey",s)}}),N=O(()=>!!S.value&&!E.value),P=w(""),F=async s=>{if(!N.value||z.value||P.value)return;const i=r.value.find(ie=>ie.price_id===s);let g,I;const j=new URL(window.location.href);j.pathname==="/"&&(j.hash="#enterprises"),j.searchParams.set("price_id",s),j.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),I=j.toString(),j.searchParams.set("purchase_status","success"),g=j.toString(),P.value=s;const V={price_id:s,success_url:g,cancel_url:I},D=localStorage.getItem(ta);D&&(V.meta_data={sales_key:D}),i&&gtag("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const X=await u.checkoutWithStripe(S.value,V);P.value="",X&&(window.location.href=X.url)},A=w(!1),H=()=>{!N.value||z.value||(A.value=!0)},M=()=>{var s;(s=$.value)==null||s.requestServerInteraction()},d=()=>{y.value=[]},x=w(!1),$=w(null),y=w([]),v=w([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:n("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:n("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:n("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),c=async()=>{x.value=!0;const s=await u.getUsage(S.value);x.value=!1,!(!s||s.length===0)&&(y.value=s.map(i=>{const g=new Date(i.updated_at);let I=i.quantity,j=n(`embedding.usage_reason_${i.type}`);return i.type===ba.CONSUME?(I=-I,i.metadata.model_name&&(j=j+": "+i.metadata.model_name)):(i.metadata.product_name&&(j=j+": "+i.metadata.product_name),i.metadata.order_quantity&&i.metadata.order_quantity>1&&(j=j+` (x ${i.metadata.order_quantity})`)),{createdAt:g,amount:I,reason:j}}))};return(s,i)=>(q(),Y(Z,null,[ne("div",bn,[e(be,{"input-style":"font-family: monospace",modelValue:S.value,"onUpdate:modelValue":i[0]||(i[0]=g=>S.value=g),clearable:"",filled:"",square:"",label:S.value?`${l(n)("embedding.key_to_top_up")}`:l(n)("embedding.key_enter_placeholder_to_topup"),error:!N.value,"error-message":S.value?l(n)("embedding.input_api_key_error1"):"","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"])]),N.value?(q(),Y(Z,{key:0},[e(qt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:a(()=>[e(le,null,{default:a(()=>[e(ae,{avatar:"",style:it(s.$q.screen.lt.sm?"min-width: auto !important;":"")},{default:a(()=>[e(W,{name:"help_outline",class:"cursor-pointer",size:s.$q.screen.lt.sm?"xs":""},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(ae,null,{default:a(()=>[e(ee,{overline:"",class:"row items-center"},{default:a(()=>[C(_(l(n)("embedding.remaining")),1)]),_:1}),E.value?te("",!0):(q(),Q(ee,{key:0},{default:a(()=>[C(_(k(R.value)),1)]),_:1}))]),_:1}),e(Ve,{showing:z.value},null,8,["showing"])]),_:1}),e(L,{flat:"",square:"",icon:"sync",class:"q-ml-sm",disable:!N.value||z.value,size:s.$q.screen.lt.sm?"sm":"md",padding:"md",onClick:i[1]||(i[1]=g=>f("updateToken",S.value))},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(fe),e(L,{square:"",flat:"","no-caps":"",icon:"history",label:s.$q.screen.lt.sm?"":l(n)("embedding.usage_history"),dense:s.$q.screen.lt.sm,padding:"md",disable:!N.value||z.value,onClick:H},null,8,["label","dense","disable"])]),_:1}),e(de)],64)):te("",!0),e(le,{class:"q-ma-md"},{default:a(()=>[e(ae,{avatar:"",side:""},{default:a(()=>[e(W,{name:"fab fa-stripe",size:"sm"}),e(W,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(ae,null,{default:a(()=>[e(ee,null,{default:a(()=>[C(_(l(n)("embedding.buy_more_quota")),1)]),_:1}),e(ee,{caption:""},{default:a(()=>[C(_(l(n)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1}),ne("div",hn,[(q(!0),Y(Z,null,xe(l(r),(g,I)=>(q(),Y("div",{key:I,class:"col-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer"},[ue((q(),Q(_e,{bordered:"",flat:"",class:re(["full-width full-height column justify-between",N.value&&!z.value&&!P.value?"q-hoverable ":"cursor-not-allowed"]),square:"",style:it(P.value===g.price_id?"cursor: wait !important;":""),onClick:j=>F(g.price_id)},{default:a(()=>[yn,e(G,{class:"column items-center non-selectable q-py-lg text-h6"},{default:a(()=>[C(_(l(n)(`embedding.${g.product_name.replace(".","_")}`)),1)]),_:2},1024),e(G,{class:"column items-center text-center non-selectable q-px-lg text-weight-light text-caption"},{default:a(()=>[C(_(l(n)(`embedding.${g.product_name.replace(".","_")}_intuition1`)),1)]),_:2},1024),e(G,null,{default:a(()=>[e(le,null,{default:a(()=>[e(ae,null,{default:a(()=>[e(ee,{class:"text-bold"},{default:a(()=>[C("$"+_(g.price),1)]),_:2},1024),e(ee,{caption:""},{default:a(()=>[C("$"+_(Number((g.price/g.token_quantity*1e6).toFixed(3)))+" "+_(l(n)("embedding.per_m")),1)]),_:2},1024)]),_:2},1024),e(ae,{side:""},{default:a(()=>[e(W,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(Ve,{showing:P.value===g.price_id,label:l(n)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[Oe,N.value&&!z.value&&!P.value]])]))),128))]),e(et,{modelValue:A.value,"onUpdate:modelValue":i[2]||(i[2]=g=>A.value=g),onShow:M,onHide:d},{default:a(()=>[e(_e,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:a(()=>[e(G,{class:"row items-center q-pb-none"},{default:a(()=>[e(W,{name:"history",size:"md",class:"q-mr-md"}),ne("div",_n,_(s.$q.screen.lt.sm?"":l(n)("embedding.usage_history")),1),e(fe),ue(e(L,{icon:"close",flat:"",round:"",dense:""},null,512),[[ye]])]),_:1}),e(G,null,{default:a(()=>[e(l(at),{ref_key:"usageTableRef",ref:$,flat:"","row-key":"createdAt",rows:y.value,columns:v.value,loading:x.value,"hide-pagination":!0,onRequest:c},{"body-cell-icon":a(g=>[e(ve,{key:"icon",props:g},{default:a(()=>[g.row.amount>0?(q(),Q(W,{key:0,name:"o_add_circle_outline",color:"primary"})):(q(),Q(W,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":a(g=>[e(ve,{key:"amount",props:g},{default:a(()=>[C(_((g.row.amount>0?"+":"")+k(g.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64))}}),kn={class:"row q-pa-none"},Sn={class:"full-width ellipsis q-pl-md"},xn={class:"row q-pa-none"},qn={class:"full-width ellipsis q-pl-md"},Tn=ne("span",{class:"q-focus-helper"},null,-1),Cn={class:"row"},An={class:"text-h6"};var Ze=(t=>(t.CURL="curl",t.PYTHON="Python",t.JAVASCRIPT="JavaScript",t.NODEJS="Node.js",t.RUST="Rust",t.JAVA="Java",t.GO="Go",t.C_SHARP="C#",t.RUBY="Ruby",t.PHP="PHP",t))(Ze||{});const ce="https://api.jina.ai/v1/embeddings",gt="https://api.jina.ai/v1/rerank",jn=he({__name:"EmbeddingComponent",props:{maximized:{type:Boolean,default:!1},showFunction:{default:"embedding"}},emits:["closeDialog"],setup(t,{emit:o}){const{t:n}=we({useScope:"global"}),u=aa(),r=w(!1),f=Ce(),{apiKey:m,products:k}=qe(f),R=w(!1),E=p=>new Intl.NumberFormat("en").format(p),z=w(1e6),S=t,N=w(!S.maximized),P=async p=>{if(Ae("event","embedding_refresh_api_key",{location:Ue.location.href,type:p}),R.value)return;R.value=!0,await f.getApiKey().finally(()=>{R.value=!1})||u.notify({message:n("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};Fe(()=>{navigator.userAgent.toLowerCase().includes("headless")||m.value||P("auto")});const F=w(!1),A=()=>{!m.value||F.value||(Sa(m.value).then(()=>{u.notify({message:n("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),F.value=!0,Ae("event","embedding_copy_api_key",{location:Ue.location.href})}),setTimeout(()=>{F.value=!1},1800))},H=w(0),M=w(!1),d=async p=>{M.value=!0;const h=await f.getTokens(p);M.value=!1,H.value=h};Fe(()=>{!m.value||d(m.value)}),Xe(m,p=>{!p||d(p)});const x=o,$=O(()=>{const p=y.value===0?na:la,h=y.value===1?oa:sa;return[{name:2,label:"embedding.manage_quota1",icon:"shopping_cart",showsOn:["embedding","reranker","all","all_maximized"]},{name:0,label:S.showFunction.startsWith("all")?"landing_page.embeddings":"embedding.usage",icon:S.showFunction.startsWith("all")?p:"code",showsOn:["embedding","all","all_maximized"],tag:"usage"},{name:1,label:S.showFunction.startsWith("all")?"landing_page.reranker":"embedding.usage",icon:S.showFunction.startsWith("all")?h:"code",showsOn:["reranker","all","all_maximized"],tag:"usage"},{name:6,label:"embedding.visualize",icon:"mdi-axis-arrow",showsOn:["embedding","all_maximized"]},{name:5,label:"embedding.search",icon:"search",showsOn:["embedding","all_maximized"]},{name:4,label:"embedding.pairwise_test",icon:"join_full",showsOn:["embedding","all_maximized"]},{name:7,label:"embedding.batch_job",icon:"schedule_send",showsOn:["embedding","all_maximized"]},{name:3,label:"embedding.integrate",icon:"extension",showsOn:["embedding","all_maximized"]}]}),y=w(S.showFunction==="reranker"?1:0),v=w(),c=w(),s=p=>{v.value=p},i=p=>{c.value=p},g=p=>{I.value=p},I=w("curl"),j=["Your text string goes here","You can send multiple texts"],V=["\u60A8\u7684\u67E5\u8BE2\u53EF\u4EE5\u662F\u4E2D\u6587","or in English only","\u6216\u662Fquery-doc\u4E2D\u82F1\u6DF7\u6742\u7684like this one."],D=["Heute ist ein wundersch\xF6ner Tag. Die Sonne scheint, und die V\xF6gel singen.","Today is a beautiful day. The sun is shining, and the birds are singing.","Today ist ein wundersch\xF6ner Tag. The sun scheint, und die birds are singing."],X=["El sol brilla intensamente hoy.","The sky is clear and blue.","I love going to the playa, it is so relaxing, \xBFno?"],ie=["Calculates the square of a number. Parameters: number (int or float) - The number to square. Returns: int or float - The square of the number.","This function calculates the square of a number you give it.","def square(number): return number ** 2"],B=O(()=>{var p,h,K,T;return((p=v.value)==null?void 0:p.name)==="jina-embeddings-v2-base-zh"?V:((h=v.value)==null?void 0:h.name)==="jina-embeddings-v2-base-de"?D:((K=v.value)==null?void 0:K.name)==="jina-embeddings-v2-base-code"?ie:((T=v.value)==null?void 0:T.name)==="jina-embeddings-v2-base-es"?X:j}),U=O(()=>`[${B.value.map(p=>`"${p}"`).join(", ")}]`),J=O(()=>`array(${B.value.map(p=>`"${p}"`).join(", ")})`),oe=O(()=>`[${B.value.map(p=>`""${p}""`).join(", ")}]`),ke=O(()=>`[${B.value.map(p=>`\\"${p}\\"`).join(", ")}]`),Ie=O(()=>{var T;const p=m.value||"$JINA_API_KEY",h=((T=c.value)==null?void 0:T.name)||"$MODEL_NAME",K=gt;return{curl:`
\`\`\`bash
curl ${gt} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${p}" \\
  -d '{
  "model": "${h}",
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
    "Authorization": f"Bearer ${p}"
}

data = {
    "model": "${h}",
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
const key = "${p}";

const headers = {
    "Content-Type": "application/json",
    "Authorization": "Bearer ${p}",
};

const data = {
    "model": "${h}",
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
  model: '${h}',
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
    'Authorization': 'Bearer ${p}'
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
    let api_key = "Bearer ${p}".to_string();
    let client = reqwest::Client::new();

    let mut data = HashMap::new();
    data.insert("model", "${h}");
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
        String apiKey = "${p}"; // Your API key
        try {
            URL url = new URL(urlString);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("POST");
            conn.setRequestProperty("Content-Type", "application/json; utf-8");
            conn.setRequestProperty("Authorization", "Bearer " + apiKey);
            conn.setDoOutput(true);

            String jsonInputString = "{"model": "${h}", "query": "Organic skincare products for sensitive skin", "documents": ["Eco-friendly kitchenware for modern homes", "Biodegradable cleaning supplies for eco-conscious consumers", "Organic cotton baby clothes for sensitive skin", "Natural organic skincare range for sensitive skin", "Tech gadgets for smart homes: 2024 edition", "Sustainable gardening tools and compost solutions", "Sensitive skin-friendly facial cleansers and toners", "Organic food wraps and storage solutions", "All-natural pet food for dogs with allergies", "Yoga mats made from recycled materials"], "top_n": 3}";

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
    apiKey := "${p}" // Your API key
    var jsonStr = []byte(\`{
        "model": "${h}",
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
        var apiKey = "${p}";
        var httpClient = new HttpClient();
        httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
        httpClient.DefaultRequestHeaders.Add("Content-Type", "application/json");

        var data = new StringContent(@"{
            ""model"": ""${h}"",
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
  model: "${h}",
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
  $key = "${p}"; // Your API key
  $model = "${h}";

  $headers = [
      "Content-Type: application/json",
      "Authorization: Bearer ${p}"
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
    `}}),De=O(()=>{var K;const p=m.value||"$JINA_API_KEY",h=((K=v.value)==null?void 0:K.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${ce} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${p}" \\
  -d '{
    "input": ${U.value},
    "model": "${h}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${ce}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${p}'
}

data = {
  'input': ${U.value},
  'model': '${h}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${ce}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${p}",
};

const data = {
  input: ${U.value},
  model: '${h}',
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
    'Authorization': 'Bearer ${p}',
  }
};

const data = {
  input: ${U.value},
  model: '${h}'
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
        .header("Authorization", "Bearer ${p}")
        .body(r#"{
            "input": ${U.value},
            "model": "${h}"
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
        con.setRequestProperty("Authorization", "Bearer ${p}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${ke.value},\\"model\\": \\"${h}\\"}";

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
		"Authorization": "Bearer ${p}",
	}

	data := \`{
		"input": ${U.value},
		"model": "${h}"
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
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${p}");

        string data = @"{
            ""input"": ${oe.value},
            ""model"": ""${h}""
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
  'Authorization' => 'Bearer ${p}'
}

data = {
  'input' => ${U.value},
  'model' => '${h}'
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
    "Authorization: Bearer ${p}"
);

$data = array(
    "input" => ${J.value},
    "model" => "${h}"
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
    `}}),Ee=O(()=>{var p;return`
\`\`\`json
{
  "model": "${(p=c.value)==null?void 0:p.name}",
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
`}),nt=O(()=>{var p;return`
\`\`\`json
{
  "model": "${(p=v.value)==null?void 0:p.name}",
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
`});Fe(()=>{k.value.length||f.getProducts()});const Ae=window.gtag,Ue=window.document,Ct=()=>{u.dialog({component:an})};return(p,h)=>{const K=ia("q-markdown");return q(),Y(Z,null,[e(vt,{appear:"","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"},{default:a(()=>[N.value?(q(),Q(be,{key:0,square:"",modelValue:l(m),"onUpdate:modelValue":h[1]||(h[1]=T=>$e(m)?m.value=T:null),label:l(n)("embedding.key"),readonly:"",standout:"",class:re(["full-width",N.value?"q-mb-xl":""]),loading:R.value,disable:R.value,"input-style":"font-family: monospace;",hint:l(n)("embedding.key_warn_v2"),"input-class":"ellipsis"},ra({prepend:a(()=>[e(L,{flat:"",square:"",stretch:"",icon:"refresh",onClick:h[0]||(h[0]=T=>r.value=!0)},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[R.value?void 0:{name:"append",fn:a(()=>[e(L,{flat:"",square:"",icon:F.value?"done":"content_copy",color:F.value?"positive":"",onClick:A},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","class","loading","disable","hint"])):te("",!0)]),_:1}),e(_e,{flat:"",square:"",bordered:"",class:re(["full-width",{"full-height":p.maximized}])},{default:a(()=>[e(qt,{class:"q-pa-none"},{default:a(()=>[p.maximized?(q(),Q(W,{key:0,name:"img:/Jina - Dark.svg",class:"q-mx-md",size:"xl"})):te("",!0),e(fa,{shrink:"",modelValue:y.value,"onUpdate:modelValue":h[2]||(h[2]=T=>y.value=T),"inline-label":!p.maximized,"indicator-color":"primary","active-color":"primary",align:"left"},{default:a(()=>[p.maximized?te("",!0):(q(),Q(L,{key:0,stretch:"",icon:"zoom_out_map",onClick:Ct},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.maximize_tooltip")),1)]),_:1})]),_:1})),(q(!0),Y(Z,null,xe($.value.filter(T=>T.showsOn.includes(p.showFunction)),T=>(q(),Q(va,{key:T.name,name:T.name,label:l(n)(T.label),icon:p.showFunction.startsWith("all")&&T.tag==="usage"?`img:${T.icon}`:T.icon},null,8,["name","label","icon"]))),128))]),_:1},8,["modelValue","inline-label"]),p.maximized?(q(),Y(Z,{key:2},[e(fe),e(ua,{class:"q-mr-sm",label:l(n)("embedding.show_api_key"),modelValue:N.value,"onUpdate:modelValue":h[4]||(h[4]=T=>N.value=T),icon:"vpn_key"},null,8,["label","modelValue"]),e(L,{stretch:"","no-wrap":"",flat:"","no-caps":"",icon:"close",onClick:h[5]||(h[5]=T=>x("closeDialog"))})],64)):(q(),Y(Z,{key:1},[p.showFunction==="embedding"?(q(),Y(Z,{key:0},[e(fe),e(L,{stretch:"","no-wrap":"",label:l(n)("faq"),icon:"help_outline",href:"/embeddings#faq",size:l(u).screen.lt.sm?"12px":"md",onClick:h[3]||(h[3]=T=>l(Ae)("event","embedding_goto_faq",{location:l(Ue).location.href}))},null,8,["label","size"])],64)):te("",!0)],64))]),_:1}),e(de),e(Ba,{modelValue:y.value,"onUpdate:modelValue":h[8]||(h[8]=T=>y.value=T),animated:""},{default:a(()=>[e(ge,{name:2,class:"q-pa-none"},{default:a(()=>[e(wn,{onUpdateToken:d,"loading-tokens":M.value,"available-tokens":H.value,"api-key":l(m),"onUpdate:apiKey":h[6]||(h[6]=T=>$e(m)?m.value=T:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),p.showFunction!=="reranker"?(q(),Q(ge,{key:0,name:0,class:"q-pa-none"},{default:a(()=>[ne("div",kn,[e(Pe,{currentModel:v.value,onChooseModel:s},null,8,["currentModel"]),e(Ge,{padding:"md",icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:re(l(u).screen.lt.sm?"full-width q-py-md":"")},{label:a(()=>[ne("div",Sn,_(I.value),1)]),default:a(()=>[e(Ye,null,{default:a(()=>[(q(),Y(Z,null,xe(Ze,(T,je)=>ue(e(le,{key:je,clickable:"",active:T===I.value,"active-class":"text-primary bg-grey-10",onClick:lt=>g(T)},{default:a(()=>[e(ae,null,{default:a(()=>[e(ee,null,{default:a(()=>[C(_(T),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Oe],[ye]])),64))]),_:1})]),_:1},8,["class"]),e(fe),e(L,{flat:"","no-caps":"",stretch:"",padding:"md",icon:"mdi-api",href:"https://api.jina.ai/redoc#tag/embeddings",target:"_blank",label:l(n)("embedding.read_api_docs")},null,8,["label"])]),e(de),e(G,{horizontal:l(u).screen.gt.sm,class:re(l(u).screen.gt.sm?"row":"col")},{default:a(()=>[e(G,{class:"col-12 col-md-6"},{default:a(()=>[e(me,{icon:"upload",square:"",size:"sm",label:l(n)("embedding.input"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:De.value[I.value],"show-copy":"",class:re(["q-py-lg",l(u).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(n)("copy"),"copy-response-text":l(n)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1}),e(de,{vertical:l(u).screen.gt.sm},null,8,["vertical"]),e(G,{class:"col-12 col-md-6"},{default:a(()=>[e(me,{icon:"download",square:"",size:"sm",label:l(n)("embedding.output"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:nt.value,"no-line-numbers":""},null,8,["src"])]),_:1})]),_:1},8,["horizontal","class"])]),_:1},8,["name"])):te("",!0),p.showFunction!=="embedding"?(q(),Q(ge,{key:1,name:1,class:"q-pa-none"},{default:a(()=>[ne("div",xn,[e(Pe,{currentModel:c.value,onChooseModel:i,category:"rank"},null,8,["currentModel"]),e(Ge,{icon:"data_object",padding:"md","no-caps":"",flat:"",square:"",stretch:"",class:re(l(u).screen.lt.sm?"full-width q-py-md":"")},{label:a(()=>[ne("div",qn,_(I.value),1)]),default:a(()=>[e(Ye,null,{default:a(()=>[(q(),Y(Z,null,xe(Ze,(T,je)=>ue(e(le,{key:je,clickable:"",active:T===I.value,"active-class":"text-primary bg-grey-10",onClick:lt=>g(T)},{default:a(()=>[e(ae,null,{default:a(()=>[e(ee,null,{default:a(()=>[C(_(T),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[Oe],[ye]])),64))]),_:1})]),_:1},8,["class"]),e(fe),e(L,{flat:"","no-caps":"",stretch:"",padding:"md",icon:"mdi-api",href:"https://api.jina.ai/redoc#tag/rerank",target:"_blank",label:l(n)("embedding.read_api_docs")},null,8,["label"])]),e(de),e(G,{horizontal:l(u).screen.gt.sm,class:re(l(u).screen.gt.sm?"row":"col")},{default:a(()=>[e(G,{class:"col-12 col-md-6"},{default:a(()=>[e(me,{icon:"upload",square:"",size:"sm",label:l(n)("embedding.input"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:Ie.value[I.value],"show-copy":"",class:re(["q-py-lg",l(u).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(n)("copy"),"copy-response-text":l(n)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1}),e(de,{vertical:l(u).screen.gt.sm},null,8,["vertical"]),e(G,{class:"col-12 col-md-6"},{default:a(()=>[e(me,{icon:"download",square:"",size:"sm",label:l(n)("embedding.output"),class:"text-grey-6 q-mr-sm",style:{"border-radius":"0"}},null,8,["label"]),e(K,{src:Ee.value,"no-line-numbers":""},null,8,["src"])]),_:1})]),_:1},8,["horizontal","class"])]),_:1},8,["name"])):te("",!0),e(ge,{name:6,class:"q-pa-none"},{default:a(()=>[e(dt,{"as-visualizer":!0,"maximized-window":p.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),e(ge,{name:5,class:"q-pa-none"},{default:a(()=>[e(dt,{"maximized-window":p.maximized},null,8,["maximized-window"])]),_:1},8,["name"]),e(ge,{name:4,class:"q-pa-none"},{default:a(()=>[e(Ja)]),_:1},8,["name"]),e(ge,{name:7,class:"q-pa-none"},{default:a(()=>[e(vn,{"loading-tokens":M.value,"available-tokens":H.value,"api-key":l(m),"onUpdate:apiKey":h[7]||(h[7]=T=>$e(m)?m.value=T:null)},null,8,["loading-tokens","available-tokens","api-key"])]),_:1},8,["name"]),e(ge,{name:3,class:"q-pa-none"},{default:a(()=>[e(le,{class:"q-ma-sm"},{default:a(()=>[e(ae,null,{default:a(()=>[C(_(l(n)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),e(G,{class:"row"},{default:a(()=>[(q(!0),Y(Z,null,xe(l(Ha),(T,je)=>(q(),Q(le,{key:je,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:a(()=>[ue((q(),Q(_e,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:lt=>l(ca)(T.homepage)},{default:a(()=>[Tn,e(G,{class:"column items-center non-selectable q-py-lg"},{default:a(()=>[T.icon?(q(),Q(ft,{key:0,fit:"contain",height:"40px",width:"40px",src:T.icon,loading:"lazy"},null,8,["src"])):te("",!0)]),_:2},1024),e(G,{class:"text-center non-selectable"},{default:a(()=>[C(_(T.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[Oe]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),y.value!==2?(q(),Y(Z,{key:0},[e(de),ne("div",Cn,[e(le,null,{default:a(()=>[e(ae,{side:""},{default:a(()=>[e(L,{flat:"",square:"",icon:"sync",onClick:h[9]||(h[9]=T=>d(l(m)))},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})]),_:1}),e(ae,{class:re(l(u).screen.lt.sm?"items-center":"")},{default:a(()=>[e(ee,{overline:"",class:"row items-center"},{default:a(()=>[C(_(l(n)("embedding.remaining")),1)]),_:1}),typeof H.value=="number"?(q(),Q(ee,{key:0},{default:a(()=>[C(_(E(H.value)),1)]),_:1})):te("",!0)]),_:1},8,["class"]),e(ae,{avatar:""},{default:a(()=>[e(W,{name:"help_outline",class:"cursor-pointer"},{default:a(()=>[e(se,null,{default:a(()=>[C(_(l(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1}),e(Ve,{showing:M.value},null,8,["showing"])]),_:1})]),e(Ve,{class:"non-selectable lock-blur",showing:R.value},null,8,["showing"])],64)):te("",!0)]),_:1},8,["class"]),e(et,{modelValue:r.value,"onUpdate:modelValue":h[12]||(h[12]=T=>r.value=T)},{default:a(()=>[e(_e,null,{default:a(()=>[e(G,null,{default:a(()=>[ne("div",An,_(l(n)("embedding.top_up_warning_title")),1)]),_:1}),e(de),typeof H.value=="number"?(q(),Q(G,{key:0},{default:a(()=>[C(_(l(n)("embedding.top_up_warning_message",{_remainedTokens:E(H.value),_freeTokens:E(z.value)})),1)]),_:1})):te("",!0),e(de),e(da,{align:"right"},{default:a(()=>[ue(e(L,{flat:"",square:"","no-caps":"",label:l(n)("embedding.cancel_button")},null,8,["label"]),[[ye]]),ue(e(L,{flat:"",square:"","no-caps":"",icon:"add_shopping_cart",label:l(n)("embedding.top_up_button"),color:"primary",onClick:h[10]||(h[10]=T=>y.value=2)},null,8,["label"]),[[ye]]),ue(e(L,{flat:"",square:"","no-caps":"",label:l(n)("embedding.get_new_key_button"),onClick:h[11]||(h[11]=T=>P("manual"))},null,8,["label"]),[[ye]])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});export{Zn as N,Ba as Q,jn as _,ge as a,Ve as b,Ha as v};
