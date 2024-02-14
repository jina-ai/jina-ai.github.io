import{Q as ye}from"./QImg.260d1b9f.js";import{e as we,h as J,a6 as ke,a7 as M,a8 as t,ap as ne,bM as yt,a9 as h,aa as e,an as B,ad as K,ae as $,ag as y,ah as d,ai as l,bv as _t,bw as wt,al as T,k as Be,i as fe,D as Ye,R as kt,S as xt,$ as qt,C as Ge,f as _,br as St,J as Ze,aV as Ct,j as U,P as Qe,aM as Tt,bI as At,ar as Re,aq as jt,w as Je,K as je,ab as H,aG as O,ak as ee,ac as le,Z as X,bz as Mt,b2 as qe,b9 as We,bN as Rt,am as Ie,u as It,au as Bt,aY as He,bO as Pt,bP as Dt,av as xe,ao as Xe,af as te,bQ as Me,aj as re,bB as et,bR as Vt,bS as Le,T as zt}from"./index.9e034dd5.js";import{Q as z,b as _e}from"./QBadge.df7c0451.js";import{_ as Nt}from"./NewsBadge.722ec4e0.js";import{_ as Qt,A as Ot}from"./blogs.687d0e44.js";import{_ as tt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as pe}from"./QTooltip.140175a1.js";import{Q as $t,a as Ut,b as Te}from"./QTabs.1ebc55f4.js";import{Q as be}from"./QSpace.66f5f376.js";import{Q as at}from"./QList.91135b13.js";import{Q as nt,a as Et}from"./QBtnDropdown.b6196e63.js";import{u as Ht,b as Lt,c as Kt,d as Ft}from"./QCarousel.26c59bd6.js";import{u as Oe,Q as Yt,T as Gt}from"./embedding.b8c9be39.js";import{Q as lt,a as he,b as Zt}from"./QTable.f57a5c07.js";import{C as ve}from"./ClosePopup.4a0c0e44.js";import{c as Jt}from"./copy-to-clipboard.3cb1b5bb.js";import{Q as Wt}from"./QMenu.c93af1b5.js";import{a as Ne}from"./QSelect.8f38dc45.js";var cn="/assets/pattern-sdk.fcc07f38.svg";const Xt=a=>(_t("data-v-1a22f6be"),a=a(),wt(),a),ea=Xt(()=>T("span",{class:"q-focus-helper"},null,-1)),ta=we({__name:"NewsroomCard",props:{info:{}},setup(a){const n=a,s=J(()=>yt(n.info.publishedAt).format("MMMM DD, YYYY")),{t:v}=ke({useScope:"global"}),c=u=>{window.open(u)};return(u,S)=>(h(),M(ne,{flat:"",square:"",onClick:S[0]||(S[0]=w=>c(`/news/${u.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[ea,e(B,{class:"q-pa-none"},{default:t(()=>[e(ye,{src:u.info.featureImage,height:"200px",loading:"lazy",alt:u.info.featureImageAlt},{default:t(()=>[e(Qt,{"alt-text":u.info.featureImageAlt},null,8,["alt-text"])]),_:1},8,["src","alt"])]),_:1}),e(B,{style:{height:"250px"}},{default:t(()=>[e(K,null,{default:t(()=>[e(Nt,{news:u.info},null,8,["news"])]),_:1}),e(K,null,{default:t(()=>[e($,{class:"text-h6 text-weight-light"},{default:t(()=>[e(z,{lines:"2"},{default:t(()=>[y(d(u.info.title),1)]),_:1})]),_:1})]),_:1}),e(K,null,{default:t(()=>[e($,null,{default:t(()=>[e(z,{lines:"3",caption:""},{default:t(()=>[y(d(u.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(K,null,{default:t(()=>[e(Ot,{authors:u.info.authors},null,8,["authors"]),e($,null,{default:t(()=>[e(z,null,{default:t(()=>[y(d(u.info.authors.map(w=>w.name).join(", ")),1)]),_:1}),e(z,{caption:""},{default:t(()=>[y(d(s.value)+" \u2022 "+d(u.info.readingTime)+" "+d(l(v)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var dn=tt(ta,[["__scopeId","data-v-1a22f6be"]]),Ae=Be({name:"QTabPanel",props:Ht,setup(a,{slots:n}){return()=>fe("div",{class:"q-tab-panel",role:"tabpanel"},Ye(n.default))}}),aa=Be({name:"QTabPanels",props:{...Lt,...kt},emits:Kt,setup(a,{slots:n}){const s=Ge(),v=xt(a,s.proxy.$q),{updatePanelsList:c,getPanelContent:u,panelDirectives:S}=Ft(),w=J(()=>"q-tab-panels q-panel-parent"+(v.value===!0?" q-tab-panels--dark q-dark":""));return()=>(c(n),qt("div",{class:w.value},u(),"pan",a.swipeable,()=>S.value))}}),na="/assets/icon-MongoDB.982c1a31.svg",la="/assets/icon-Weaviate.7149e9ab.svg",oa="/assets/icon-Qdrant.934fd07b.svg",sa="data:image/png;base64,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",ra="/assets/icon-Chroma.2b9ab43a.svg",ia="/assets/icon-Langchain.f2ee033d.png",ua="/assets/icon-LlamaIndex.480689aa.png",ca="/assets/icon-Dify.8dc6e6d4.png",da="/assets/icon-Haystack.c2968447.svg",pa="/assets/icon-SuperDuperDB.94465a4c.svg",fa="/assets/icon-Epsilla.461331c8.png",ma="/assets/icon-MyScale.5669eb9d.svg",ga="/assets/icon-DashVector.3017419e.svg";const va=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:na},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:oa},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:sa},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:ra},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:la},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:fa},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-ai-embedding",icon:ma},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:ua},{label:"Haystack",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:da},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:ia},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:ca},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/walkthrough/ai_apis/#jina",icon:pa},{label:"DashVector",tags:["vector_store"],homepage:"https://help.aliyun.com/document_detail/2668339.html",icon:ga}];var ba=Be({name:"QTr",props:{props:Object,noHover:Boolean},setup(a,{slots:n}){const s=J(()=>"q-tr"+(a.props===void 0||a.props.header===!0?"":" "+a.props.__trClass)+(a.noHover===!0?" q-tr--no-hover":""));return()=>fe("tr",{class:s.value},Ye(n.default))}});function Se(a,n=new WeakMap){if(Object(a)!==a)return a;if(n.has(a))return n.get(a);const s=a instanceof Date?new Date(a):a instanceof RegExp?new RegExp(a.source,a.flags):a instanceof Set?new Set:a instanceof Map?new Map:typeof a.constructor!="function"?Object.create(null):a.prototype!==void 0&&typeof a.prototype.constructor=="function"?a:new a.constructor;if(typeof a.constructor=="function"&&typeof a.valueOf=="function"){const v=a.valueOf();if(Object(v)!==v){const c=new a.constructor(v);return n.set(a,c),c}}return n.set(a,s),a instanceof Set?a.forEach(v=>{s.add(Se(v,n))}):a instanceof Map&&a.forEach((v,c)=>{s.set(c,Se(v,n))}),Object.assign(s,...Object.keys(a).map(v=>({[v]:Se(a[v],n)})))}var Ke=Be({name:"QPopupEdit",props:{modelValue:{required:!0},title:String,buttons:Boolean,labelSet:String,labelCancel:String,color:{type:String,default:"primary"},validate:{type:Function,default:()=>!0},autoSave:Boolean,cover:{type:Boolean,default:!0},disable:Boolean},emits:["update:modelValue","save","cancel","beforeShow","show","beforeHide","hide"],setup(a,{slots:n,emit:s}){const{proxy:v}=Ge(),{$q:c}=v,u=_(null),S=_(""),w=_("");let E=!1;const L=J(()=>St({initialValue:S.value,validate:a.validate,set:R,cancel:P,updatePosition:m},"value",()=>w.value,x=>{w.value=x}));function R(){a.validate(w.value)!==!1&&(C()===!0&&(s("save",w.value,S.value),s("update:modelValue",w.value)),g())}function P(){C()===!0&&s("cancel",w.value,S.value),g()}function m(){Ze(()=>{u.value.updatePosition()})}function C(){return Ct(w.value,S.value)===!1}function g(){E=!0,u.value.hide()}function D(){E=!1,S.value=Se(a.modelValue),w.value=Se(a.modelValue),s("beforeShow")}function V(){s("show")}function F(){E===!1&&C()===!0&&(a.autoSave===!0&&a.validate(w.value)===!0?(s("save",w.value,S.value),s("update:modelValue",w.value)):s("cancel",w.value,S.value)),s("beforeHide")}function k(){s("hide")}function N(){const x=n.default!==void 0?[].concat(n.default(L.value)):[];return a.title&&x.unshift(fe("div",{class:"q-dialog__title q-mt-sm q-mb-sm"},a.title)),a.buttons===!0&&x.push(fe("div",{class:"q-popup-edit__buttons row justify-center no-wrap"},[fe(U,{flat:!0,color:a.color,label:a.labelCancel||c.lang.label.cancel,onClick:P}),fe(U,{flat:!0,color:a.color,label:a.labelSet||c.lang.label.set,onClick:R})])),x}return Object.assign(v,{set:R,cancel:P,show(x){u.value!==null&&u.value.show(x)},hide(x){u.value!==null&&u.value.hide(x)},updatePosition:m}),()=>{if(a.disable!==!0)return fe(Wt,{ref:u,class:"q-popup-edit",cover:a.cover,onBeforeShow:D,onShow:V,onBeforeHide:F,onHide:k,onEscapeKey:P},N)}}});function ha(a){const n=Object.assign({noopener:!0},a),s=[];for(const v in n){const c=n[v];c===!0?s.push(v):(At(c)||typeof c=="string"&&c!=="")&&s.push(v+"="+c)}return s.join(",")}function Fe(a,n,s){let v=window.open;if(Qe.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)v=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(a,{openExternal:!0})}const c=v(a,"_blank",ha(s));if(c)return Qe.is.desktop&&c.focus(),c;n&&n()}var ya=(a,n,s)=>{if(Qe.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(v=>{v?window.SafariViewController.show({url:a},Tt,n):Fe(a,n,s)});return}return Fe(a,n,s)};const _a={class:"full-width ellipsis q-pl-md"},wa={class:"self-center full-width no-outline",tabindex:"0"},ka={class:"self-center full-width no-outline",tabindex:"0"},xa={class:"self-center full-width no-outline",tabindex:"0"},ot=we({__name:"ModelDropDown",props:{currentModel:{},indicator:{type:Boolean,default:!0}},emits:["chooseModel"],setup(a,{emit:n}){const{t:s}=ke({useScope:"global"}),v=Oe(),{models:c,baseDeModel:u,baseEnModel:S,baseZhModel:w}=Re(v),E=jt(),{language:L}=Re(E),R=_(!1),P=n,m=()=>{var k;P("chooseModel",(k=w.value)!=null?k:S.value)},C=()=>{var k;P("chooseModel",(k=u.value)!=null?k:S.value)};Je(L,k=>{k&&["zh-CN","zh-TW"].includes(k)?m():k==="de"&&C()}),je(async()=>{await g()});const g=async()=>{R.value=!0,await v.getModels(),R.value=!1,c.value.length>0&&(L.value&&["zh-CN","zh-TW"].includes(L.value)?m():L.value==="de"?C():P("chooseModel",S.value))},D=k=>{V("event","embedding_view_model_detail",{location:F.location.href,model:k}),ya(`https://huggingface.co/jinaai/${k}`)},V=window.gtag,F=window.document;return(k,N)=>(h(),H("div",{class:O(["row",k.$q.screen.lt.sm?"col-12":""])},[e(nt,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:R.value,class:O(["dynamic-text-btn",k.$q.screen.lt.sm?"full-width q-py-md":""]),"disable-dropdown":R.value,onClick:N[0]||(N[0]=x=>l(V)("event","embedding_click_model_dropdown",{location:l(F).location.href}))},{label:t(()=>{var x;return[T("div",_a,d((x=k.currentModel)==null?void 0:x.name),1)]}),default:t(()=>[e(at,null,{default:t(()=>[(h(!0),H(ee,null,le(l(c),(x,me)=>{var Y;return X((h(),M(K,{key:me,clickable:"",active:x.name===((Y=k.currentModel)==null?void 0:Y.name),onClick:q=>P("chooseModel",x),class:"q-pa-lg"},{default:t(()=>[e($,null,{default:t(()=>[e(z,{overline:"",caption:""},{default:t(()=>[y(d(x.name),1)]),_:2},1024),e(z,{class:"text-weight-bold"},{default:t(()=>[y(d(l(s)(`embedding.${x.name}_description`)),1)]),_:2},1024),e(z,{caption:"",class:"row"},{default:t(()=>[e(Ne,{borderless:"",label:l(s)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[T("div",wa,d(x.meta_data.token_length),1)]),_:2},1032,["label"]),e(Ne,{borderless:"",label:l(s)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[T("div",ka,d(x.meta_data.size),1)]),_:2},1032,["label"]),e(Ne,{borderless:"",label:l(s)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[T("div",xa,d(x.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(U,{flat:"",icon:"launch",onClick:Mt(q=>D(x.name),["stop"])},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(s)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[qe],[ve]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"])],2))}});const qa={class:"row full-width"},Sa=we({__name:"TestTab",setup(a){const{t:n}=ke({useScope:"global"}),s=_(!1),v=Oe(),c=_(),{testData:u}=Re(v),S=q=>{gtag("event","embedding_choose_model",{location:document.location.href,model:q.name}),c.value=q,N(u.value).catch(p=>{console.error("calculateScores",p)})},w=[{name:"text1",field:"text1",label:n("embedding.text1"),required:!0,align:"left",sortable:!0},{name:"text2",field:"text1",label:n("embedding.text2"),required:!0,align:"left",sortable:!0},{name:"score",align:"right",label:n("embedding.cosine_similarity"),sortable:!0,field:q=>{var p;return q.scores[((p=c.value)==null?void 0:p.name)||""]||NaN}}],E=q=>{var p,f;return((f=q.scores)==null?void 0:f[((p=c.value)==null?void 0:p.name)||""])||NaN},L=_({page:1,rowsPerPage:10}),R=_([]),P=_(null),m=_(null),C=()=>{u.value=u.value.filter(q=>!R.value.includes(q)),R.value=[]},g=q=>{P.value=q},D=q=>{m.value=q},V=()=>{const q={id:u.value.length,text1:Y[Math.floor(Math.random()*Y.length)],text2:Y[Math.floor(Math.random()*Y.length)],scores:{},isNew:!0};u.value.unshift(q),N([q]).catch(p=>{console.error("calculateScores",p)}),L.value.page=1,Ze(()=>{var p;(p=P.value)==null||p.show()})},F=(q,p,f)=>{var b;f[p]=q,f.scores={},f.isNew&&(p==="text1"?(b=m.value)==null||b.show():p==="text2"&&(f.isNew=!1)),f.isNew||N([f]).catch(A=>{console.error("calculateScores",A)})};function k(q,p){let f=0,b=0,A=0;for(let I=0;I<q.length;I++)f+=q[I]*p[I],b+=q[I]*q[I],A+=p[I]*p[I];return f/(Math.sqrt(b)*Math.sqrt(A))}async function N(q){if(!c.value)return;const p=c.value.name,f=q.filter(b=>b.text1&&b.text2).filter(b=>{var A;return!((A=b.scores)!=null&&A[p])});if(f.length!==0)try{s.value=!0;const b=100;for(let A=0;A<f.length;A+=b){const I=f.slice(A,A+b),ie=await me(I,p);for(const W of I){const ge=ie[W.text1],Pe=ie[W.text2];!ge||!Pe||(W.scores=W.scores||{},W.scores[p]=k(ie[W.text1],ie[W.text2]))}}}finally{s.value=!1}}const x={};async function me(q,p){x[p]||(x[p]={});const f="https://api.jina.ai/v1/embeddings",b={"Content-Type":"application/json",Authorization:`Bearer ${v.apiKey}`},A=q.map(I=>[I.text1,I.text2]).flat().filter(Boolean).filter(I=>!x[p][I]);if(A.length>0){const I={input:A,model:p},W=await(await fetch(f,{method:"POST",headers:b,body:JSON.stringify(I)})).json();for(const ge of W.data)x[p][I.input[ge.index]]=ge.embedding}return x[p]}const Y=["The only way to do great work is to love what you do.","The purpose of our lives is to be happy.","Life is what happens when you're busy making other plans.","Get busy living or get busy dying.","You only live once, but if you do it right, once is enough.","Many of life\u2019s failures are people who did not realize how close they were to success when they gave up.","If you want to live a happy life, tie it to a goal, not to people or things.","Never let the fear of striking out keep you from playing the game.","Money and success don\u2019t change people; they merely amplify what is already there.","Your time is limited, don\u2019t waste it living someone else\u2019s life.","Not how long, but how well you have lived is the main thing.","If life were predictable it would cease to be life, and be without flavor.","The big lesson in life, baby, is never be scared of anyone or anything.","Sing like no one\u2019s listening, love like you\u2019ve never been hurt, dance like nobody\u2019s watching, and live like it\u2019s heaven on earth.","Curiosity about life in all of its aspects, I think, is still the secret of great creative people.","Life is not a problem to be solved, but a reality to be experienced.","The unexamined life is not worth living.","Turn your wounds into wisdom.","The way to get started is to quit talking and begin doing.","The greatest glory in living lies not in never falling, but in rising every time we fall."];return(q,p)=>(h(),M(lt,{class:"my-sticky-column-table col key-value-table",flat:"",rows:l(u),columns:w,"row-key":"id","binary-state-sort":"",selection:"multiple",pagination:L.value,"onUpdate:pagination":p[0]||(p[0]=f=>L.value=f),selected:R.value,"onUpdate:selected":p[1]||(p[1]=f=>R.value=f),loading:s.value,"no-data-label":l(n)("embedding.no_data1")},{top:t(()=>[T("div",qa,[e(Et,{flat:"",square:""},{default:t(()=>[e(U,{square:"",icon:"add",label:l(n)("embedding.add_pair"),flat:"",padding:"md",onClick:V},null,8,["label"]),X(e(U,{square:"",padding:"md",icon:"delete_forever",color:"negative",label:l(n)("embedding.delete_pair"),flat:"",onClick:C},null,8,["label"]),[[We,R.value.length>0]])]),_:1}),e(be),e(ot,{currentModel:c.value,indicator:!1,onChooseModel:S},null,8,["currentModel"])])]),body:t(f=>[e(ba,{props:f},{default:t(()=>[e(he,{key:"selection"},{default:t(()=>[e(Rt,{modelValue:f.selected,"onUpdate:modelValue":b=>f.selected=b},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(he,{key:"text1",props:f,class:"fixed-cell"},{default:t(()=>[y(d(f.row.text1)+" ",1),e(l(Ke),{ref:b=>{f.row.isNew&&f.rowIndex===0&&g(b)},modelValue:f.row.text1,"onUpdate:modelValue":b=>f.row.text1=b,"auto-save":"",onSave:b=>F(b,"text1",f.row)},{default:t(b=>[e(Ie,{modelValue:b.value,"onUpdate:modelValue":A=>b.value=A,dense:"",autofocus:"",counter:"",label:l(n)("embedding.edit_text1_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(he,{key:"text2",props:f,class:"fixed-cell"},{default:t(()=>[y(d(f.row.text2)+" ",1),e(l(Ke),{ref:b=>{f.row.isNew&&f.rowIndex===0&&D(b)},modelValue:f.row.text2,"onUpdate:modelValue":b=>f.row.text2=b,"auto-save":"",onSave:b=>F(b,"text2",f.row)},{default:t(b=>[e(Ie,{modelValue:b.value,"onUpdate:modelValue":A=>b.value=A,dense:"",autofocus:"",counter:"",label:l(n)("embedding.edit_text2_text")},null,8,["modelValue","onUpdate:modelValue","label"])]),_:2},1032,["modelValue","onUpdate:modelValue","onSave"])]),_:2},1032,["props"]),e(he,{key:"score",props:f},{default:t(()=>[y(d(E(f.row).toFixed(8)),1)]),_:2},1032,["props"])]),_:2},1032,["props"])]),_:1},8,["rows","pagination","selected","loading","no-data-label"]))}});var Ca=tt(Sa,[["__scopeId","data-v-5f7a8d72"]]);const Ta={class:"full-width"},Aa={class:"text-h6"},ja={class:"row q-pa-none"},Ma={class:"full-width ellipsis q-pl-md"},Ra=T("span",{class:"q-focus-helper"},null,-1),Ia=T("span",{class:"q-focus-helper"},null,-1),Ba={class:"text-h6"};var st=(a=>(a.CURL="curl",a.PYTHON="Python",a.JAVASCRIPT="JavaScript",a.RUBY="Ruby",a.PHP="PHP",a.JAVA="Java",a.NODEJS="Node.js",a.GO="Go",a.C_SHARP="C#",a.RUST="Rust",a))(st||{});const ae="https://api.jina.ai/v1/embeddings",pn=we({__name:"EmbeddingComponent",setup(a){const{t:n}=ke({useScope:"global"}),s=It(),v=_(!1),c=Oe(),{apiKey:u,products:S}=Re(c),w=_(!1),E=o=>new Intl.NumberFormat("en").format(o),L=_(1e6),R=async o=>{if(se("event","embedding_refresh_api_key",{location:de.location.href,type:o}),w.value)return;w.value=!0,await c.getApiKey().finally(()=>{w.value=!1})?(G.value=u.value,N.value=!1):s.notify({message:n("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};je(()=>{navigator.userAgent.toLowerCase().includes("headless")||u.value||R("auto")});const P=_(!1),m=()=>{se("event","embedding_copy_api_key",{location:de.location.href}),!(!u.value||P.value)&&(Jt(u.value).then(()=>{s.notify({message:n("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),P.value=!0}),setTimeout(()=>{P.value=!1},1800))},C=_(0),g=_(!1),D=_(!1),V=async o=>{g.value=!0,D.value=!1;const r=await c.getTokens(o);if(g.value=!1,r===void 0){D.value=!0;return}C.value=r,F.value=C.value};je(()=>{!u.value||V(u.value)}),Je(u,o=>{!o||V(o)});const F=_(0),k=_(!1),N=_(!1),x=async o=>{k.value=!0,N.value=!1;const r=await c.getTokens(o);if(k.value=!1,r===void 0){N.value=!0;return}F.value=r,u.value=o},me=[{name:0,label:"embedding.usage",icon:"code",value:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"},{name:2,label:"embedding.integrate",icon:"extension",value:"integrations"},{name:3,label:"embedding.debugging",icon:"bug_report",value:"test"}],Y=_(0),q=o=>{se("event","embedding_change_tab",{location:de.location.href,tab:me[o].value}),o===1&&(G.value||(N.value=D.value,D.value||(G.value=u.value,F.value=C.value)))},p=_(),f=o=>{se("event","embedding_choose_model",{location:de.location.href,model:o.name}),p.value=o},b=o=>{se("event","embedding_choose_code_lang",{location:de.location.href,lang:o}),A.value=o},A=_("curl"),I=["Your text string goes here","You can send multiple texts"],ie=["\u60A8\u7684\u67E5\u8BE2\u53EF\u4EE5\u662F\u4E2D\u6587","or in English only","\u6216\u662Fquery-doc\u4E2D\u82F1\u6DF7\u6742\u7684like this one."],W=["Heute ist ein wundersch\xF6ner Tag. Die Sonne scheint, und die V\xF6gel singen.","Today is a beautiful day. The sun is shining, and the birds are singing.","Today ist ein wundersch\xF6ner Tag. The sun scheint, und die birds are singing."],ge=["El sol brilla intensamente hoy.","The sky is clear and blue.","I love going to the playa, it is so relaxing, \xBFno?"],Pe=["Calculates the square of a number. Parameters: number (int or float) - The number to square. Returns: int or float - The square of the number.","This function calculates the square of a number you give it.","def square(number): return number ** 2"],Ce=J(()=>{var o,r,j,i;return((o=p.value)==null?void 0:o.name)==="jina-embeddings-v2-base-zh"?ie:((r=p.value)==null?void 0:r.name)==="jina-embeddings-v2-base-de"?W:((j=p.value)==null?void 0:j.name)==="jina-embeddings-v2-base-code"?Pe:((i=p.value)==null?void 0:i.name)==="jina-embeddings-v2-base-es"?ge:I}),ue=J(()=>`[${Ce.value.map(o=>`"${o}"`).join(", ")}]`),rt=J(()=>`array(${Ce.value.map(o=>`"${o}"`).join(", ")})`),it=J(()=>`[${Ce.value.map(o=>`""${o}""`).join(", ")}]`),ut=J(()=>`[${Ce.value.map(o=>`\\"${o}\\"`).join(", ")}]`),ct=J(()=>{var j;const o=u.value||"$JINA_API_KEY",r=((j=p.value)==null?void 0:j.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${ae} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${o}" \\
  -d '{
    "input": ${ue.value},
    "model": "${r}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${ae}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${o}'
}

data = {
  'input': ${ue.value},
  'model': '${r}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${ae}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${o}",
};

const data = {
  input: ${ue.value},
  model: '${r}',
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

uri = URI.parse("${ae}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${o}'
}

data = {
  'input' => ${ue.value},
  'model' => '${r}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${ae}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${o}"
);

$data = array(
    "input" => ${rt.value},
    "model" => "${r}"
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
        String url = "${ae}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${o}");

        con.setDoOutput(true);
        String data = "{\\"input\\": ${ut.value},\\"model\\": \\"${r}\\"}";

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

const url = "${ae}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${o}',
  }
};

const data = {
  input: ${ue.value},
  model: '${r}'
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
	url := "${ae}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${o}",
	}

	data := \`{
		"input": ${ue.value},
		"model": "${r}"
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
        string url = "${ae}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${o}");

        string data = @"{
            ""input"": ${it.value},
            ""model"": ""${r}""
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

    let res = client.post("${ae}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${o}")
        .body(r#"{
            "input": ${ue.value},
            "model": "${r}"
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
    `}}),G=_(""),oe=J(()=>!!G.value&&G.value.length===u.value.length&&!N.value),dt=o=>{if(!(!o||typeof o=="number"||o.length!==u.value.length)){if(o===u.value){F.value=C.value,N.value=D.value;return}x(o)}};je(()=>{S.value.length||c.getProducts()});const ce=_(""),pt=async o=>{if(!oe.value||k.value||ce.value)return;const r=S.value.find(ht=>ht.price_id===o);let j,i;const Q=new URL(window.location.href);Q.pathname==="/"&&(Q.hash="#enterprises"),Q.searchParams.set("price_id",o),Q.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),i=Q.toString(),Q.searchParams.set("purchase_status","success"),j=Q.toString(),ce.value=o;const Z={price_id:o,success_url:j,cancel_url:i},Ue=localStorage.getItem(Vt);Ue&&(Z.meta_data={sales_key:Ue}),r&&se("event","begin_checkout",{currency:r.currency,value:r.price,items:[{id:r.product_id,name:r.product_name}]});const Ee=await c.checkoutWithStripe(G.value,Z);ce.value="",Ee&&(window.location.href=Ee.url)},De=_(!1),ft=()=>{!oe.value||k.value||(De.value=!0)},mt=()=>{var o;(o=$e.value)==null||o.requestServerInteraction()},gt=()=>{ze.value=[]},Ve=_(!1),$e=_(null),ze=_([]),vt=_([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:n("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:o=>{if(typeof o=="string")return new Date(o).toLocaleString();if(o instanceof Date)return o.toLocaleString();if(o)return o.toDate().toLocaleString()}},{name:"amount",label:n("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:o=>o>0?`+${o}`:`${o}`},{name:"reason",label:n("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),bt=async o=>{Ve.value=!0;const r=await c.getUsage(G.value);Ve.value=!1,!(!r||r.length===0)&&(ze.value=r.map(j=>{const i=new Date(j.updated_at);let Q=j.quantity,Z=n(`embedding.usage_reason_${j.type}`);return j.type===Gt.CONSUME?(Q=-Q,j.metadata.model_name&&(Z=Z+": "+j.metadata.model_name)):(j.metadata.product_name&&(Z=Z+": "+j.metadata.product_name),j.metadata.order_quantity&&j.metadata.order_quantity>1&&(Z=Z+` (x ${j.metadata.order_quantity})`)),{createdAt:i,amount:Q,reason:Z}}),V(G.value))},se=window.gtag,de=window.document;return(o,r)=>{const j=Bt("q-markdown");return h(),H(ee,null,[T("div",Ta,[e(He,{modelValue:v.value,"onUpdate:modelValue":r[2]||(r[2]=i=>v.value=i)},{default:t(()=>[e(ne,null,{default:t(()=>[e(B,null,{default:t(()=>[T("div",Aa,d(l(n)("embedding.top_up_warning_title")),1)]),_:1}),e(xe),e(B,null,{default:t(()=>[y(d(l(n)("embedding.top_up_warning_message",{_remainedTokens:E(C.value),_freeTokens:E(L.value)})),1)]),_:1}),e(xe),e(Xe,{align:"right"},{default:t(()=>[X(e(U,{flat:"",square:"","no-caps":"",label:l(n)("embedding.cancel_button")},null,8,["label"]),[[ve]]),X(e(U,{flat:"",square:"","no-caps":"",icon:"add_shopping_cart",label:l(n)("embedding.top_up_button"),color:"primary",onClick:r[0]||(r[0]=i=>Y.value=1)},null,8,["label"]),[[ve]]),X(e(U,{flat:"",square:"","no-caps":"",label:l(n)("embedding.get_new_key_button"),onClick:r[1]||(r[1]=i=>R("manual"))},null,8,["label"]),[[ve]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(Ie,{modelValue:l(u),"onUpdate:modelValue":r[4]||(r[4]=i=>Dt(u)?u.value=i:null),label:l(n)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:w.value,disable:w.value,"input-style":"font-family: monospace;",hint:l(n)("embedding.key_warn_v2"),"input-class":"ellipsis"},Pt({prepend:t(()=>[e(U,{flat:"",square:"",stretch:"",icon:"refresh",onClick:r[3]||(r[3]=i=>v.value=!0)},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[w.value?void 0:{name:"append",fn:t(()=>[e(U,{flat:"",square:"",icon:P.value?"done":"content_copy",color:P.value?"positive":"",onClick:m},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(ne,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e($t,{modelValue:Y.value,"onUpdate:modelValue":r[6]||(r[6]=i=>Y.value=i),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(h(),H(ee,null,le(me,i=>e(Ut,{key:i.name,name:i.name,label:l(n)(i.label),icon:i.icon},null,8,["name","label","icon"])),64)),e(be),e(U,{stretch:"","no-wrap":"",label:l(n)("faq"),icon:"help_outline",href:"/embeddings#faq",size:l(s).screen.lt.sm?"12px":"md",onClick:r[5]||(r[5]=i=>l(se)("event","embedding_goto_faq",{location:l(de).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(xe),e(aa,{modelValue:Y.value,"onUpdate:modelValue":r[11]||(r[11]=i=>Y.value=i),animated:"",onBeforeTransition:q},{default:t(()=>[e(Ae,{name:0,class:"q-pa-none"},{default:t(()=>[T("div",ja,[T("div",{class:O(["row",l(s).screen.lt.sm?"col-12":""])},[e(ot,{currentModel:p.value,onChooseModel:f},null,8,["currentModel"]),e(nt,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:O(l(s).screen.lt.sm?"full-width q-py-md":""),onClick:r[7]||(r[7]=i=>l(se)("event","embedding_click_code_lang_dropdown",{location:l(de).location.href}))},{label:t(()=>[T("div",Ma,d(A.value),1)]),default:t(()=>[e(at,null,{default:t(()=>[(h(),H(ee,null,le(st,(i,Q)=>X(e(K,{key:Q,clickable:"",active:i===A.value,"active-class":"text-primary bg-grey-10",onClick:Z=>b(i)},{default:t(()=>[e($,null,{default:t(()=>[e(z,null,{default:t(()=>[y(d(i),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[qe],[ve]])),64))]),_:1})]),_:1},8,["class"])],2),l(s).screen.lt.sm?te("",!0):(h(),M(be,{key:0})),T("div",{class:O(["row",l(s).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(K,{class:O(l(s).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e($,{avatar:"",style:Me(l(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(re,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e($,{class:O(l(s).screen.lt.sm?"items-center":"")},{default:t(()=>[e(z,{overline:"",class:"row items-center"},{default:t(()=>[y(d(l(n)("embedding.remaining")),1)]),_:1}),D.value?te("",!0):(h(),M(z,{key:0},{default:t(()=>[y(d(E(C.value)),1)]),_:1}))]),_:1},8,["class"]),e(Te,{showing:g.value},null,8,["showing"])]),_:1},8,["class"]),e(U,{flat:"",square:"",icon:"sync",onClick:r[8]||(r[8]=i=>V(l(u)))},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2)]),e(xe),e(j,{src:ct.value[A.value],"show-copy":"",class:O(["q-py-lg",l(s).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":l(n)("copy"),"copy-response-text":l(n)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Ae,{name:1,class:"q-pa-none"},{default:t(()=>[e(Ie,{"input-style":"font-family: monospace",modelValue:G.value,"onUpdate:modelValue":[r[9]||(r[9]=i=>G.value=i),dt],clearable:"",filled:"",square:"",label:G.value?`${l(n)("embedding.key_to_top_up")}`:l(n)("embedding.key_enter_placeholder_to_topup"),error:!oe.value,"error-message":G.value?l(n)("embedding.input_api_key_error"):"",class:"full-width q-pa-md","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),oe.value?(h(),H(ee,{key:0},[e(Yt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(K,{class:O(l(s).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e($,{avatar:"",style:Me(l(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(re,{name:"help_outline",class:"cursor-pointer",size:l(s).screen.lt.sm?"xs":""},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e($,null,{default:t(()=>[e(z,{overline:"",class:"row items-center"},{default:t(()=>[y(d(l(n)("embedding.remaining")),1)]),_:1}),N.value?te("",!0):(h(),M(z,{key:0},{default:t(()=>[y(d(E(F.value)),1)]),_:1}))]),_:1}),e(Te,{showing:k.value},null,8,["showing"])]),_:1},8,["class"]),e(U,{flat:"",square:"",icon:"sync",class:"q-ml-sm",disable:!oe.value||k.value,size:l(s).screen.lt.sm?"sm":"md",onClick:r[10]||(r[10]=i=>x(G.value))},{default:t(()=>[e(pe,null,{default:t(()=>[y(d(l(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(be),e(U,{flat:"","no-caps":"",icon:"history",label:l(s).screen.lt.sm?"":l(n)("embedding.usage_history"),dense:l(s).screen.lt.sm,disable:!oe.value||k.value,onClick:ft},null,8,["label","dense","disable"])]),_:1}),e(xe)],64)):te("",!0),e(ne,{flat:""},{default:t(()=>[e(B,null,{default:t(()=>[e(K,null,{default:t(()=>[e($,{avatar:"",side:""},{default:t(()=>[e(re,{name:"fab fa-stripe",size:"sm"}),e(re,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e($,null,{default:t(()=>[e(z,null,{default:t(()=>[y(d(l(n)("embedding.buy_more_quota")),1)]),_:1}),e(z,{caption:""},{default:t(()=>[y(d(l(n)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(B,{class:"row"},{default:t(()=>[(h(!0),H(ee,null,le(l(S),(i,Q)=>(h(),M(K,{key:Q,class:"col-12 col-sm-6 col-lg-4 q-pa-sm cursor-pointer"},{default:t(()=>[X((h(),M(ne,{bordered:"",flat:"",class:O(["full-width",oe.value&&!k.value&&!ce.value?"q-hoverable ":"cursor-not-allowed"]),square:"",style:Me(ce.value===i.price_id?"cursor: wait !important;":""),onClick:Z=>pt(i.price_id)},{default:t(()=>[Ra,e(B,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[y(d(l(n)(`embedding.${i.product_name.replace(".","_")}`)),1)]),_:2},1024),e(B,{class:"column items-center text-center non-selectable q-px-xl text-weight-light text-caption"},{default:t(()=>[y(d(l(n)(`embedding.${i.product_name.replace(".","_")}_intuition1`)),1)]),_:2},1024),e(B,null,{default:t(()=>[e(K,null,{default:t(()=>[e($,null,{default:t(()=>[e(z,{class:"text-bold"},{default:t(()=>[y("$"+d(i.price),1)]),_:2},1024),e(z,{caption:""},{default:t(()=>[y("$"+d(Number((i.price/i.token_quantity*1e6).toFixed(3)))+" "+d(l(n)("embedding.per_m")),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(re,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(Te,{showing:ce.value===i.price_id,label:l(n)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[qe,oe.value&&!k.value&&!ce.value]])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["name"]),e(Ae,{name:2,class:"q-pa-none"},{default:t(()=>[e(K,{class:"q-ma-sm"},{default:t(()=>[e($,null,{default:t(()=>[y(d(l(n)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),e(B,{class:"row"},{default:t(()=>[(h(!0),H(ee,null,le(l(va),(i,Q)=>(h(),M(K,{key:Q,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:t(()=>[X((h(),M(ne,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:Z=>l(et)(i.homepage)},{default:t(()=>[Ia,e(B,{class:"column items-center non-selectable q-py-lg"},{default:t(()=>[i.icon?(h(),M(ye,{key:0,fit:"contain",height:"40px",width:"40px",src:i.icon,loading:"lazy"},null,8,["src"])):te("",!0)]),_:2},1024),e(B,{class:"text-center non-selectable"},{default:t(()=>[y(d(i.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[qe]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"]),e(Ae,{name:3,class:"q-pa-none"},{default:t(()=>[e(Ca)]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(Te,{class:"non-selectable lock-blur",showing:w.value},null,8,["showing"])]),_:1}),e(He,{modelValue:De.value,"onUpdate:modelValue":r[12]||(r[12]=i=>De.value=i),onShow:mt,onHide:gt},{default:t(()=>[e(ne,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(B,{class:"row items-center q-pb-none"},{default:t(()=>[e(re,{name:"history",size:"md",class:"q-mr-md"}),T("div",Ba,d(l(s).screen.lt.sm?"":l(n)("embedding.usage_history")),1),e(be),X(e(U,{icon:"close",flat:"",round:"",dense:""},null,512),[[ve]])]),_:1}),e(B,null,{default:t(()=>[e(l(lt),{ref_key:"usageTableRef",ref:$e,flat:"","row-key":"createdAt",rows:ze.value,columns:vt.value,loading:Ve.value,"hide-pagination":!0,onRequest:bt},{"body-cell-icon":t(i=>[e(he,{key:"icon",props:i},{default:t(()=>[i.row.amount>0?(h(),M(re,{key:0,name:"o_add_circle_outline",color:"primary"})):(h(),M(re,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(i=>[e(he,{key:"amount",props:i},{default:t(()=>[y(d((i.row.amount>0?"+":"")+E(i.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var Pa="/assets/paper_1.8ed04d7d.png",Da="/assets/paper_2.59e1399a.png";const Va=T("span",{class:"q-focus-helper"},null,-1),za={class:"q-mb-xl"},fn=we({__name:"ResearchersComponent",props:{cardInLight:{type:Boolean,default:!1}},setup(a){ke({useScope:"global"});const n=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:Pa,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:Da,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(s,v)=>(h(),H(ee,null,le(n,(c,u)=>X(e(ne,{key:u,flat:"",class:O(["q-hoverable cursor-pointer q-mb-md",{"bg-dark-page":a.cardInLight}])},{default:t(()=>[Va,e(Zt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(B,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(K,{href:c.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e($,null,{default:t(()=>[T("div",za,[e(_e,{label:c.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),c.conference?(h(),M(_e,{key:0,label:c.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(h(),M(_e,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(be),e(z,{class:"text-h6 q-mb-lg"},{default:t(()=>[y(d(c.title),1)]),_:2},1024),e(z,{caption:"",lines:"3"},{default:t(()=>[y(d(c.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(ye,{src:c.paperImage,class:"research-card__img",fit:"cover",loading:"lazy"},null,8,["src"])]),_:2},1024)]),_:2},1032,["class"]),[[qe]])),64))}});var Na="/assets/pattern-developers.4f94c0e3.svg";const Qa={class:"row relative-position"},Oa={class:"row items-center justify-start text-h2 text-white",style:{"text-decoration":"none !important"}},$a={class:"row text-grey-5 q-py-lg"},Ua={class:"col-12 col-md-8"},Ea={class:"row text-grey-5 q-py-lg"},Ha={class:"col-12 col-md-8"},mn=we({__name:"LabeledPanel",props:{title:{},description:{},products:{},isCardDark:{type:Boolean},hideBackground:{type:Boolean},hideTitle:{type:Boolean}},emits:["click-tag","click-card"],setup(a,{emit:n}){const{t:s}=ke({useScope:"global"}),v=a,c=n,u=J(()=>{const m=new Set;return v.products.forEach(C=>{C.tags.forEach(g=>m.add(g))}),Array.from(m)}),S=_([]),w=J(()=>v.products.map((m,C)=>{var g;return{...m,order:(g=m.order)!=null?g:C}}).filter(m=>S.value.length===0?!0:S.value.some(C=>m.tags.includes(C))).sort((m,C)=>m.order-C.order)),E=m=>{c("click-tag",m),!S.value.includes(m)&&S.value.push(m)},L=m=>{S.value=S.value.filter(C=>C!==m)},R=_(!1),P=m=>{c("click-card",m.label),et(m.homepage)};return(m,C)=>(h(),H("div",Qa,[m.hideTitle?te("",!0):(h(),H("div",{key:0,class:O(["col-12 col-md-5 column justify-start",m.$q.screen.lt.md?"items-center":"items-start"])},[T("a",Oa,d(m.title),1),T("div",$a,[T("div",Ua,d(m.description),1)]),T("div",Ea,[T("div",Ha,[(h(!0),H(ee,null,le(u.value,g=>(h(),M(_e,{key:g,label:l(s)(`project_status.${g}`),size:"md",outline:"",square:"",clickable:"",removable:S.value.includes(g),icon:l(Le)[g],color:"grey-3",class:"no-border-radius non-selectable cursor-pointer",onClick:D=>E(g),onRemove:D=>L(g)},null,8,["label","removable","icon","onClick","onRemove"]))),128))])])],2)),m.hideBackground?te("",!0):(h(),M(ye,{key:1,src:Na,class:"absolute-top-left",style:{width:"50vw",left:"-40%",bottom:"-40%","z-index":"-1"},fit:"fill",loading:"lazy"})),T("div",{class:O(["col-12 col-md-7 row",m.$q.screen.lt.md?"justify-center":"justify-start"])},[(h(!0),H(ee,null,le(w.value,(g,D)=>(h(),H("div",{key:D,class:O(["q-pa-xs",{"col-6":m.$q.screen.gt.md&&g.tags.includes("core")||m.$q.screen.lt.md&&!g.tags.includes("core"),"col-8":m.$q.screen.md&&g.tags.includes("core"),"col-12":m.$q.screen.lt.md&&g.tags.includes("core"),"col-3":m.$q.screen.gt.md&&!g.tags.includes("core"),"col-4":m.$q.screen.md&&!g.tags.includes("core")}]),style:{maxHeight:"260px"}},[e(ne,{flat:"",square:"",class:O(["q-px-sm q-py-lg text-white full-height relative-position cursor-pointer overflow-hidden non-selectable",m.isCardDark?"bg-dark":"bg-dark-page"]),onMouseenter:V=>R.value=D,onMouseleave:C[0]||(C[0]=V=>R.value=!1),onClick:V=>P(g)},{default:t(()=>[e(zt,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:t(()=>[X(T("div",{class:"absolute-full",style:Me({backgroundImage:Math.random()>.5?`linear-gradient(
                        -135deg,
                        #34A4B3,
                        #7553FE,
                        #F4AA52,
                        #FFC47A
                      )`:`linear-gradient(
                        -135deg,
                        #6b49ffcc,
                        #ff7393,
                        #f2bf84
                      )`,zIndex:10})},[e(B,{class:"row items-center q-gutter-sm text-no-wrap no-wrap"},{default:t(()=>[g.icon?(h(),M(ye,{key:0,fit:"contain",height:"40px",width:"40px",src:g.icon,loading:"lazy"},null,8,["src"])):te("",!0),T("div",{class:O(g.label.length>10?"text-body":"text-h6")},d(g.label),3)]),_:2},1024),e(B,{class:"text-white"},{default:t(()=>[g.star?(h(),M(_e,{key:0,label:g.star+" "+l(s)("github.stars"),icon:"fab fa-github",size:"xs",outline:"",square:"",color:"grey-3",class:"no-border-radius"},null,8,["label"])):te("",!0),(h(!0),H(ee,null,le(g.tags,V=>(h(),M(_e,{label:l(s)(`project_status.${V}`),size:"xs",outline:"",square:"",icon:l(Le)[V],color:"grey-3",key:V,class:"no-border-radius"},null,8,["label","icon"]))),128))]),_:2},1024),e(Xe,{align:"right"},{default:t(()=>[e(U,{flat:"",round:"",color:"white",icon:"arrow_right_alt"})]),_:1})],4),[[We,R.value===D]])]),_:2},1024),e(B,{class:"row justify-center"},{default:t(()=>[g.icon?(h(),M(ye,{key:0,fit:"contain",height:"40px",width:"40px",src:g.icon,loading:"lazy"},null,8,["src"])):te("",!0)]),_:2},1024),e(B,{class:O(["row justify-center text-no-wrap text-weight-light q-pa-none",g.label.length>10?"text-body":"text-h6"])},{default:t(()=>[y(d(g.label),1)]),_:2},1032,["class"]),g.caption?(h(),M(B,{key:0,class:"text-caption q-px-xs text-center"},{default:t(()=>[y(d(g.caption),1)]),_:2},1024)):te("",!0)]),_:2},1032,["class","onMouseenter","onClick"])],2))),128))],2)]))}});export{dn as N,aa as Q,pn as _,Ae as a,fn as b,cn as c,mn as d,va as v};
