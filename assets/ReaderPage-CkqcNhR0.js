import{d as ee,b as K,c as re,a as Te,Q as W}from"./QItemLabel-Bg-Qb_wg.js";import{j as se,ag as le,k as f,m as w,W as ge,V as ve,am as he,n as ye,aW as we,aM as Re,a1 as ie,a$ as ze,a2 as d,a3 as q,a4 as a,a5 as t,a6 as v,a7 as L,a8 as j,q as Q,as as z,ae as D,al as B,ad as p,ac as o,ab as O,a9 as X,af as be,ay as Qe,s as Ie,az as Le,p as V,aB as je,J as De,ao as Ae,bb as Pe,aV as Ue,aj as pe,ak as E,aS as He,aT as Me,aa as te}from"./index-DK55Z_Jx.js";import{Q as Ve}from"./QPage-C5Otw0qr.js";import{u as Ee}from"./useMetaTags-Eq8SAq1J.js";import{T as Ne}from"./TitleBlock-B7qHpyhU.js";import{F as Oe}from"./FAQComponent-CSRqFNL7.js";import{R as Fe,S as Ge}from"./SeFoComponent-fQTk2bpB.js";import{Q as N}from"./QTooltip-BIH0xeUK.js";import{T as We,Q as ae}from"./QSpinnerRings-CUlLDmow.js";import{a as ne}from"./QLinearProgress-Cw4VdM0S.js";import{f as Je,Q as Ke,a as Xe}from"./finetune-D8VRy5QP.js";import{c as Ye}from"./copy-to-clipboard-DvZ32Rmr.js";import{u as xe}from"./embedding-Du9tGBs-.js";import{b as Ze}from"./format-DyQxkAtJ.js";import{P as $e}from"./PricingComponent-CvWGuO3f.js";import{H as et}from"./H2TitleBlock-Cz9qkyH-.js";import{R as tt}from"./QForm-BxAW0exV.js";import"./package-D9JPNs5w.js";import"./QBadge-CN6zSoiS.js";import"./QBtnDropdown-CogyUsQ5.js";import"./QMenu-DAB8Neqf.js";import"./position-engine-z-fzGM8Y.js";import"./QExpansionItem-ClC4xxVz.js";import"./QTab-nPEJq8pM.js";import"./QTabs-CgOzYWtB.js";import"./QResizeObserver-Jihpc5Or.js";import"./QToolbar-D_axPI_k.js";import"./use-panel-DsXeIyRb.js";import"./touch-BjYP5sR0.js";import"./ClosePopup-MYjsVcsP.js";import"./KeysTable-CJDzHfb6.js";import"./blogs-BVjRmU5j.js";import"./PurchaseTab-DYxLf6M6.js";import"./orderBy-EEp98FjB.js";import"./TouchPan-DJXdq9EB.js";import"./use-dialog-plugin-component-CxMO5zjl.js";import"./PurchaseDialog-pFlvJh0u.js";import"./useRoute-z3VF6guC.js";const at=se({__name:"SearchDemoComponent",props:{originalURL:{type:String,default:""},disableQA:{type:Boolean,default:!1},disableOriginalURL:{type:Boolean,default:!1}},setup(r,{expose:s}){s();const{t:k}=le({useScope:"global"}),e=xe(),b=f(""),S=f(!1),i=f(!1),n=ye(),u=["When was Jina AI founded?","What did Elon Musk say about Open AI recently?","When will the next SpaceX launch be?","What is the market cap of Apple today?","Who will win 2024 US presidential election?","Who is playing in the US Open final?"],m=()=>u[Math.floor(Math.random()*u.length)],g=f(null);let h=null;const y=r,c=f(y.originalURL||m()),T=w(()=>`https://s.jina.ai/${encodeURIComponent(c.value)}`),P=f(null),A=f(""),I=f(""),F=f(!1),U=f(!1),H=f(!1),M=f(!1),l=async _=>{var ue,me,_e;if(!await((ue=P.value)==null?void 0:ue.validate()))return Promise.reject();const Z={parameters:{question:c.value,context:_?"":b.value.slice(0,3e3)}};_?(A.value="",F.value=!0,H.value=!0):(I.value="",U.value=!0,M.value=!0);const de="https://api.promptperfect.jina.ai/ERK3nqviaFRyfGbkBsXD";try{const R=await fetch(de,{headers:{"content-type":"application/json"},body:JSON.stringify(Z),method:"POST"});if(!R.ok)throw new Error(`HTTP error! status: ${R.status}`);if((me=R.headers.get("content-type"))!=null&&me.includes("text/event-stream")){if(R.body){const J=R.body.getReader(),Se=new TextDecoder;for(;;){const{done:Ce,value:fe}=await J.read();if(Ce){_?H.value=!1:M.value=!1;break}fe&&Se.decode(fe).split(`

`).forEach(Be=>{const $=Be.replace(/data: /g,"");$&&(_?A.value+=$:I.value+=$)})}}}else if((_e=R.headers.get("content-type"))!=null&&_e.includes("application/json")){const J=(await R.json()).data;_?A.value=J:I.value=J}else throw new Error("Unknown response type")}catch(R){I.value=R instanceof Error?R.message:String(R)}finally{_?F.value=!1:U.value=!1}},x=async()=>{i.value=!0,I.value="";try{const _=await fetch(T.value,{method:"GET",headers:{Authorization:`Bearer ${e.apiKey}`}});if(!_.ok){b.value=Je(await _.json());return}const G=await _.text();b.value=`\`\`\`plaintext
${G}
\`\`\``}catch(_){b.value=_ instanceof Error?_.message:String(_)}finally{i.value=!1}},C=async()=>{await Promise.all([x(),l(!0)]),await l(!1)},Y=()=>{var G;const _=((G=g.value)==null?void 0:G.$el)||g.value;_ instanceof HTMLElement?(h=new IntersectionObserver(Z=>{Z[0].isIntersecting&&(C().then(()=>{}),h==null||h.disconnect())},{root:null,threshold:.1}),h.observe(_)):console.error("Element is not an HTMLElement:",_)};ge(()=>{ve(()=>{setTimeout(()=>{Y()},100)})}),he(()=>{h&&h.disconnect()});const ce={t:k,embeddingStore:e,readerResult:b,isRawBusy:S,isReaderBusy:i,$q:n,randomURLs:u,randomURL:m,componentRef:g,get observer(){return h},set observer(_){h=_},props:y,originalURL:c,readerURL:T,questionRef:P,rawAnswerChunks:A,readerAnswerChunks:I,rawAnswerIsBusy:F,readerAnswerIsBusy:U,rawAnswerIsStreaming:H,readerAnswerIsStreaming:M,askQuestion:l,fetchReaderURL:x,fetchBothURL:C,initIntersectionObserver:Y,get copyToClipboard(){return Ye},get QInput(){return we},TypingText:We,get redirect(){return Re}};return Object.defineProperty(ce,"__isScriptSetup",{enumerable:!1,value:!0}),ce}}),rt={class:"text-caption text-bold text-dim"},nt={class:"text-caption text-bold text-dim"},ot={class:"text-caption text-bold text-dim"};function st(r,s,k,e,b,S){const i=ze("q-markdown");return d(),q(be,{bordered:"",flat:"",square:"",class:"col-12 col-md-10",ref:"componentRef"},{default:a(()=>[t(v,{horizontal:e.$q.screen.gt.sm},{default:a(()=>[k.disableOriginalURL?D("",!0):(d(),L(j,{key:0},[t(v,{class:"col"},{default:a(()=>[t(e.QInput,{modelValue:e.originalURL,"onUpdate:modelValue":s[1]||(s[1]=n=>e.originalURL=n),label:e.t("reader.demo.your_query"),type:"url",loading:e.isRawBusy,hint:e.t("reader.demo.your_query_hint"),ref:"questionRef"},{prepend:a(()=>[t(Q,{dense:"",square:"",flat:"",icon:"casino",onClick:s[0]||(s[0]=n=>e.originalURL=e.randomURL())})]),_:1},8,["modelValue","label","loading","hint"])]),_:1}),t(z,{vertical:e.$q.screen.gt.sm},null,8,["vertical"])],64)),t(v,{class:"col"},{default:a(()=>[t(e.QInput,{"model-value":`https://s.jina.ai/${e.originalURL}`,label:e.t("reader.demo.reader_url"),readonly:"",loading:e.isReaderBusy,"bottom-slots":""},{append:a(()=>[t(Q,{flat:"",dense:"",square:"",icon:"content_copy",onClick:s[2]||(s[2]=n=>e.copyToClipboard(e.readerURL))},{default:a(()=>[t(N,null,{default:a(()=>[B(p(e.t("copy")),1)]),_:1})]),_:1}),t(Q,{flat:"",dense:"",square:"",icon:"open_in_new",onClick:s[3]||(s[3]=n=>e.redirect(e.readerURL))},{default:a(()=>[t(N,null,{default:a(()=>[B(p(e.t("demo.open")),1)]),_:1})]),_:1})]),hint:a(()=>[B(p(e.t("reader.demo.reader_search_hint")),1)]),_:1},8,["model-value","label","loading"])]),_:1})]),_:1},8,["horizontal"]),t(z),t(Q,{square:"",label:e.t("reader.demo.ask_llm"),class:"full-width",icon:"contact_support",onClick:e.fetchBothURL,padding:"md"},null,8,["label"]),e.readerAnswerIsBusy||e.rawAnswerIsBusy||e.isReaderBusy||e.readerAnswerChunks||e.rawAnswerChunks?(d(),L(j,{key:0},[t(z),t(v,{horizontal:e.$q.screen.gt.sm,class:"q-pa-none"},{default:a(()=>[t(v,{class:"col answer-panel overflow-auto"},{default:a(()=>[o("span",rt,p(e.t("reader.demo.ask_llm_directly")),1),e.rawAnswerIsBusy&&!e.rawAnswerChunks?(d(),q(v,{key:0},{default:a(()=>[t(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:a(()=>[t(N,null,{default:a(()=>[B(p(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(d(),L(j,null,X([0,1,2,3],n=>t(ae,{key:n,class:"q-my-xs",width:n>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(d(),L(j,{key:1},[t(v,{class:"q-pa-lg"},{default:a(()=>[t(e.TypingText,{text:e.rawAnswerChunks,loading:e.rawAnswerIsStreaming,"show-copy":!1},null,8,["text","loading"])]),_:1}),e.rawAnswerIsStreaming?(d(),q(ne,{key:0,class:"absolute-bottom",indeterminate:""})):D("",!0)],64))]),_:1}),t(z,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),t(v,{class:"col answer-panel overflow-auto"},{default:a(()=>[o("span",nt,p(e.t("reader.demo.reader_response")),1),e.isReaderBusy?(d(),q(v,{key:0},{default:a(()=>[(d(),L(j,null,X([100,300,200,200],n=>t(ae,{type:"text",width:`${n}px`,key:n},null,8,["width"])),64))]),_:1})):(d(),q(i,{key:1,src:e.readerResult,"copy-icon":"content_copy","no-line-numbers":""},null,8,["src"]))]),_:1}),t(z,{vertical:e.$q.screen.gt.sm},null,8,["vertical"]),t(v,{class:"col relative-position answer-panel overflow-auto"},{default:a(()=>[o("span",ot,p(e.t("reader.demo.ask_llm_with_search_grounding")),1),t(Ke,{label:e.t("reader.demo.waiting_for_reader"),showing:e.isReaderBusy},null,8,["label","showing"]),e.readerAnswerIsBusy&&!e.readerAnswerChunks?(d(),q(v,{key:0},{default:a(()=>[t(O,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:a(()=>[t(N,null,{default:a(()=>[B(p(e.t("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),(d(),L(j,null,X([0,1,2,3],n=>t(ae,{key:n,class:"q-my-xs",width:n>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(d(),L(j,{key:1},[e.readerAnswerChunks?(d(),q(v,{key:0,class:"q-pa-lg"},{default:a(()=>[t(e.TypingText,{text:e.readerAnswerChunks,loading:e.readerAnswerIsStreaming,"show-copy":!1},null,8,["text","loading"])]),_:1})):D("",!0),e.readerAnswerIsStreaming?(d(),q(ne,{key:1,class:"absolute-bottom",indeterminate:""})):D("",!0)],64))]),_:1})]),_:1},8,["horizontal"])],64)):D("",!0),t(z),t(v,{class:"text-dim"},{default:a(()=>[t(O,{name:"info"}),B(" "+p(e.t("reader.demo.search_query_rewrite")),1)]),_:1})]),_:1},512)}const lt=ie(at,[["render",st],["__scopeId","data-v-d80bc8fb"],["__file","SearchDemoComponent.vue"]]),it={...Qe,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,rounded:Boolean,thickness:{type:Number,default:.2,validator:r=>r>=0&&r<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean},oe=50,ke=2*oe,qe=ke*Math.PI,ct=Math.round(qe*1e3)/1e3,dt=Ie({name:"QCircularProgress",props:{...it,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(r,{slots:s}){const{proxy:{$q:k}}=De(),e=Le(r),b=w(()=>{const c=(k.lang.rtl===!0?-1:1)*r.angle;return{transform:r.reverse!==(k.lang.rtl===!0)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-c}deg)`:`rotate3d(0, 0, 1, ${c-90}deg)`}}),S=w(()=>r.instantFeedback!==!0&&r.indeterminate!==!0?{transition:`stroke-dashoffset ${r.animationSpeed}ms ease 0s, stroke ${r.animationSpeed}ms ease`}:""),i=w(()=>ke/(1-r.thickness/2)),n=w(()=>`${i.value/2} ${i.value/2} ${i.value} ${i.value}`),u=w(()=>Ze(r.value,r.min,r.max)),m=w(()=>r.max-r.min),g=w(()=>r.thickness/2*i.value),h=w(()=>{const c=(r.max-u.value)/m.value,T=r.rounded===!0&&u.value<r.max&&c<.25?g.value/2*(1-c/.25):0;return qe*c+T});function y({thickness:c,offset:T,color:P,cls:A,rounded:I}){return V("circle",{class:"q-circular-progress__"+A+(P!==void 0?` text-${P}`:""),style:S.value,fill:"transparent",stroke:"currentColor","stroke-width":c,"stroke-dasharray":ct,"stroke-dashoffset":T,"stroke-linecap":I,cx:i.value,cy:i.value,r:oe})}return()=>{const c=[];r.centerColor!==void 0&&r.centerColor!=="transparent"&&c.push(V("circle",{class:`q-circular-progress__center text-${r.centerColor}`,fill:"currentColor",r:oe-g.value/2,cx:i.value,cy:i.value})),r.trackColor!==void 0&&r.trackColor!=="transparent"&&c.push(y({cls:"track",thickness:g.value,offset:0,color:r.trackColor})),c.push(y({cls:"circle",thickness:g.value,offset:h.value,color:r.color,rounded:r.rounded===!0?"round":void 0}));const T=[V("svg",{class:"q-circular-progress__svg",style:b.value,viewBox:n.value,"aria-hidden":"true"},c)];return r.showValue===!0&&T.push(V("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:r.fontSize}},s.default!==void 0?s.default():[V("div",u.value)])),V("div",{class:`q-circular-progress q-circular-progress--${r.indeterminate===!0?"in":""}determinate`,style:e.value,role:"progressbar","aria-valuemin":r.min,"aria-valuemax":r.max,"aria-valuenow":r.indeterminate===!0?void 0:u.value},je(s.internal,T))}}}),ut=se({__name:"GroundingDemoComponent",setup(r,{expose:s}){s();const k=xe(),{apiKey:e}=Ae(k),{t:b}=le({useScope:"global"}),S=f("In 2012, President Barack Hussein Obama repealed the Smith-Mundt act, which had been in place in 1948. The law prevented the government from putting its propaganda on TV and Radio."),i=f(!1),n=f(!0),u=f(0),m=f(null),g=f(null),h=f(null);let y=null;const c=w(()=>{var l;return(l=m.value)==null?void 0:l.data}),T=w(()=>{var l;return(l=c.value)!=null&&l.factuality?c.value.factuality*100:0}),P=w(()=>{var l;return((l=c.value)==null?void 0:l.references.filter(x=>x.isSupportive))||[]}),A=w(()=>{const l=Math.floor(u.value/1e3),x=Math.floor(u.value%1e3/100);return`${l}.${x} s`}),I=w(()=>{var l,x;return g.value!==null?((l=c.value)==null?void 0:l.references.filter(C=>C.isSupportive===g.value))||[]:((x=c.value)==null?void 0:x.references)||[]}),F=l=>{g.value===l?g.value=null:g.value=l},U=async()=>{if(!S.value)return;n.value=!0,m.value=null;const l=Date.now(),x=`https://g.jina.ai/${encodeURIComponent(S.value)}${i.value?"?deepdive=true":""}`;try{const C=await fetch(x,{method:"GET",headers:{Accept:"application/json",Authorization:`Bearer ${e.value}`}});u.value=Date.now()-l,m.value=await C.json()}catch(C){m.value={message:C instanceof Error?C.message:String(C)}}finally{n.value=!1}},H=()=>{var x;const l=((x=h.value)==null?void 0:x.$el)||h.value;l instanceof HTMLElement?(y=new IntersectionObserver(C=>{C[0].isIntersecting&&(U(),y==null||y.disconnect())},{root:null,threshold:.1}),y.observe(l)):console.error("Element is not an HTMLElement:",l)};ge(()=>{ve(()=>{setTimeout(()=>{H()},100)})}),he(()=>{y&&y.disconnect()});const M={embeddingStore:k,apiKey:e,t:b,query:S,isDeepDive:i,isBusy:n,responseTime:u,response:m,filters:g,componentRef:h,get observer(){return y},set observer(l){y=l},responseData:c,factuality:T,supportiveNum:P,responseTimeString:A,references:I,onFilter:F,sendQuery:U,initIntersectionObserver:H,ref:f,get formatNumber(){return Xe}};return Object.defineProperty(M,"__isScriptSetup",{enumerable:!1,value:!0}),M}}),mt={class:"text-negative"};function _t(r,s,k,e,b,S){return d(),q(be,{ref:"componentRef",flat:"",square:"",bordered:"",class:"col-12 col-md-10"},{default:a(()=>{var i;return[t(v,null,{default:a(()=>{var n,u;return[t(we,{square:"","bottom-slots":!!e.response,modelValue:e.query,"onUpdate:modelValue":s[1]||(s[1]=m=>e.query=m),readonly:e.isBusy,label:e.t("reader.demo.your_statement")},Pe({prepend:a(()=>[t(Ue,{modelValue:e.isDeepDive,"onUpdate:modelValue":s[0]||(s[0]=m=>e.isDeepDive=m),disable:e.isBusy,"checked-icon":"biotech","icon-color":"black","unchecked-icon":"bolt"},{default:a(()=>[t(N,null,{default:a(()=>[B(p(e.t("reader.demo.headers.deepdive")),1)]),_:1})]),_:1},8,["modelValue","disable"])]),append:a(()=>[t(Q,{square:"",flat:"",icon:"send",padding:"md",loading:e.isBusy,onClick:e.sendQuery},null,8,["loading"])]),_:2},[(n=e.response)!=null&&n.name||(u=e.response)!=null&&u.message?{name:"hint",fn:a(()=>[o("span",mt,[B(p(e.response.name||e.response.message)+" ",1),e.response.readableMessage?(d(),q(N,{key:0},{default:a(()=>[B(p(e.response.readableMessage),1)]),_:1})):D("",!0)])]),key:"0"}:e.response?{name:"hint",fn:a(()=>{var m;return[t(ee,{icon:"timer",label:`${e.responseTimeString}`,size:"sm",class:"text-dim"},null,8,["label"]),t(ee,{icon:"straighten",label:`${e.formatNumber(((m=e.responseData)==null?void 0:m.usage.tokens)||0)} ${e.t("embedding.tokens")}`,size:"sm",class:"text-dim"},null,8,["label"])]}),key:"1"}:void 0]),1032,["bottom-slots","modelValue","readonly","label"])]}),_:1}),e.isBusy?(d(),q(ne,{key:0,indeterminate:"",size:"1px"})):D("",!0),e.responseData?(d(),L(j,{key:1},[t(z),t(v,null,{default:a(()=>[t(pe,null,{default:a(()=>[t(E,{side:""},{default:a(()=>[t(dt,{"show-value":"",value:e.factuality,size:"60px",thickness:.1,color:e.factuality>50?"positive":"negative","track-color":"surface-mixed-200"},{default:a(()=>{var n,u;return[t(O,{name:(n=e.responseData)!=null&&n.result?"check":"close",color:(u=e.responseData)!=null&&u.result?"accent":"negative",size:"30px"},null,8,["name","color"])]}),_:1},8,["value","color"])]),_:1}),t(E,null,{default:a(()=>[t(K,{class:"text-bold"},{default:a(()=>[B(p(e.responseData.result?e.t("reader.demo.grounding_result_true"):e.t("reader.demo.grounding_result_false")),1)]),_:1}),t(K,{caption:""},{default:a(()=>{var n;return[B(p((n=e.responseData)==null?void 0:n.reason),1)]}),_:1})]),_:1}),t(E,{side:""},{default:a(()=>[t(re,{outline:"",square:""},{default:a(()=>{var n,u,m;return[t(Q,{label:(n=e.supportiveNum)==null?void 0:n.length,icon:"thumb_up",square:"",onClick:s[2]||(s[2]=g=>e.onFilter(!0)),outline:""},null,8,["label"]),t(z),t(Q,{label:(((u=e.responseData)==null?void 0:u.references.length)||0)-((m=e.supportiveNum)==null?void 0:m.length),icon:"thumb_down",square:"",onClick:s[3]||(s[3]=g=>e.onFilter(!1)),outline:""},null,8,["label"])]}),_:1})]),_:1})]),_:1})]),_:1})],64)):D("",!0),(i=e.responseData)!=null&&i.references.length?(d(),L(j,{key:2},[t(z),t(v,{class:"q-pa-none"},{default:a(()=>[t(Te,null,{default:a(()=>[t(He,{name:"list2"},{default:a(()=>[(d(!0),L(j,null,X(e.references,n=>(d(),q(pe,{clickable:"",key:n.url,href:n.url,target:"_blank",class:"card-details"},{default:a(()=>[t(E,{avatar:""},{default:a(()=>[t(O,{name:n.isSupportive?"thumb_up":"thumb_down",color:n.isSupportive?"positive":"negative"},null,8,["name","color"])]),_:2},1024),t(E,null,{default:a(()=>[t(K,{lines:"1",class:"text-italic"},{default:a(()=>[B("... "+p(n.keyQuote)+" ...",1)]),_:2},1024),t(K,{caption:""},{default:a(()=>[t(ee,{square:"",size:"sm",icon:`img:https://www.google.com/s2/favicons?sz=32&domain_url=${n.url}`,label:n.url,class:"text-caption q-mx-none bg-mixed-200",style:{"max-width":"60%"}},null,8,["icon","label"])]),_:2},1024)]),_:2},1024),t(E,{side:""},{default:a(()=>[t(O,{name:"open_in_new",size:"xs",class:"read-more-btn"})]),_:1})]),_:2},1032,["href"]))),128))]),_:1})]),_:1})]),_:1})],64)):D("",!0)]}),_:1},512)}const ft=ie(ut,[["render",_t],["__file","GroundingDemoComponent.vue"]]),pt=se({__name:"ReaderPage",setup(r,{expose:s}){s(),Ee({page:"reader",banner:"banner-reader-api.png",url:"reader"});const{t:k}=le({useScope:"global"}),e=ye(),b=[{label:"landing_page.get_api_now",icon:"code",anchor:"#apiform"},{label:"reader.demo.try_demo",icon:"play_arrow",anchor:"#demo",items:[{label:"reader.demo.basic_usage1",description:"reader.demo.how_to_use1",anchor:"#demo1",icon:"double_arrow"},{label:"reader.demo.basic_usage2",description:"reader.demo.how_to_use2",anchor:"#demo2",icon:"search"},{label:"reader.demo.basic_usage3",description:"reader.demo.how_to_use3",anchor:"#demo3",icon:"fact_check"}]},{label:"landing_page.pricing",anchor:"#pricing",icon:"attach_money"}],S=w(()=>{switch(e.screen.name){case"xl":return"lg";case"lg":return"lg";case"md":return"md";case"sm":return"md";case"xs":return"md";default:return"sm"}}),i={t:k,$q:e,titleButtons:b,adaptiveSize:S,get locateByHash(){return Me},TitleBlock:Ne,FAQComponent:Oe,ReaderDemoComponent:Fe,SearchDemoComponent:lt,GroundingDemoComponent:ft,PricingComponent:$e,SeFoComponent:Ge,H2TitleBlock:et,RateLimitComponent:tt};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),gt="/assets/explain-EQrFe5k3.svg",vt="/assets/explain3-CqNg2V0h.svg",ht="/assets/explain5-CKbWV5a5.svg",yt="/assets/explain2-BYDhf_rF.svg",wt="/assets/explain4-CPLfQrjf.png",bt={class:"col-12 col-md-11 q-py-xl q-mx-xs-xs q-mx-sm-sm q-mx-md-md q-mx-lg-lg q-mx-xl-xl q-ma-xl relative-position"},xt={class:"row justify-center"},kt={class:"col-12 col-sm-11 col-md-10 q-pb-xl"},qt={class:"row justify-center items-center"},St={class:"col-11 col-md-8"},Ct={class:"q-my-xl row justify-center items-center"},Bt={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Tt={class:"q-my-xl row justify-center items-center",id:"demo1"},Rt={class:"row justify-center items-center"},zt={class:"col-11 col-md-8"},Qt={class:"q-my-xl row justify-center items-center"},It={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Lt=["innerHTML"],jt={class:"q-my-xl row justify-center items-center",id:"demo2"},Dt={class:"row justify-center items-center"},At={class:"col-11 col-md-8"},Pt={class:"q-my-xl row justify-center items-center"},Ut={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Ht=["innerHTML"],Mt={class:"q-my-xl row justify-center items-center",id:"demo3"},Vt={class:"row justify-center items-center"},Et={class:"col-11 col-md-8"},Nt={class:"q-my-xl row justify-center items-center"},Ot={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Ft={class:"row q-py-xl justify-center items-center"},Gt={class:"col-11 col-md-8"},Wt={class:"q-my-xl row justify-center items-center"},Jt={class:"col-11 col-md-8 col-lg-6 text-subtitle1 q-pa-lg-xl q-my-lg",style:{"white-space":"pre-line"}},Kt=["innerHTML"],Xt={class:"q-my-xl row justify-center"},Yt={class:"q-my-xl row justify-center items-center",id:"rate-limit"},Zt={class:"col-11 col-md-8 text-subtitle1 q-my-lg",style:{"white-space":"pre-line"}},$t={class:"q-my-xl row justify-center items-center text-subtitle1"},ea={class:"q-my-xl row justify-center items-center text-subtitle1"};function ta(r,s,k,e,b,S){return d(),q(Ve,null,{default:a(()=>[o("div",{class:te(["row justify-center items-center img-bg q-py-xl",e.$q.screen.lt.sm?"q-px-md":"q-px-xl"])},[o("div",bt,[t(e.TitleBlock,{title:e.t("landing_page.reader"),tagline:e.t("reader.reader_description"),"large-title":!0,buttons:e.titleButtons},null,8,["title","tagline"])])],2),o("div",{class:te(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"apiform"},[t(e.H2TitleBlock,{title:"reader.title",subtitle:"reader.reader_description",anchor:"apiform"}),o("div",xt,[o("div",kt,[t(e.SeFoComponent,{"show-function":"reader","hide-others":!0})])])],2),o("div",{class:te(e.$q.screen.lt.sm?"q-pa-md":"q-pa-xl"),id:"what_reader"},[t(e.H2TitleBlock,{title:"reader.what_is1",anchor:"what_reader"}),o("div",qt,[o("div",St,[t(W,{src:gt})])]),o("div",Ct,[o("div",Bt,p(e.t("reader.what_is_answer_long")),1)]),o("div",Tt,[t(e.ReaderDemoComponent)]),t(e.H2TitleBlock,{title:"reader.reader_do_search",anchor:"search"}),o("div",Rt,[o("div",zt,[t(W,{src:vt})])]),o("div",Qt,[o("div",It,[o("span",{innerHTML:e.t("reader.reader_do_search_explain")},null,8,Lt)])]),o("div",jt,[t(e.SearchDemoComponent)]),t(e.H2TitleBlock,{title:"reader.reader_do_grounding",anchor:"grounding"}),o("div",Dt,[o("div",At,[t(W,{src:ht})])]),o("div",Pt,[o("div",Ut,[o("span",{innerHTML:e.t("reader.reader_do_grounding_explain")},null,8,Ht)])]),o("div",Mt,[t(e.GroundingDemoComponent)]),t(e.H2TitleBlock,{title:"reader.reader_reads_images",anchor:"read-image"}),o("div",Vt,[o("div",Et,[t(W,{src:yt})])]),o("div",Nt,[o("div",Ot,p(e.t("reader.reader_also_read_images")),1)]),t(e.H2TitleBlock,{title:"reader.reader_reads_pdf",anchor:"read-pdf"}),o("div",Ft,[o("div",Gt,[t(W,{src:wt})])]),o("div",Wt,[o("div",Jt,[o("span",{innerHTML:e.t("reader.reader_do_pdf_explain")},null,8,Kt)])]),o("div",Xt,[t(re,{flat:"",outline:"",square:""},{default:a(()=>[t(Q,{label:e.t("reader.original_pdf"),href:"https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"]),t(z),t(Q,{label:e.t("reader.reader_result"),href:"https://r.jina.ai/https://www.nasa.gov/wp-content/uploads/2023/01/55583main_vision_space_exploration2.pdf",outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",target:"_blank",icon:"open_in_new"},null,8,["label","size","padding"])]),_:1})]),t(e.H2TitleBlock,{title:"reader.is_free",subtitle:"reader.is_free_description"}),o("div",Yt,[o("div",Zt,[t(e.RateLimitComponent)])]),o("div",$t,p(e.t("reader.dont_panic_api_key_is_free")),1),o("div",ea,[t(re,{outline:"",square:""},{default:a(()=>[t(Q,{label:e.t("get_new_key"),onClick:s[0]||(s[0]=i=>e.locateByHash("#apiform")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"key"},null,8,["label","size","padding"]),t(z),t(Q,{label:e.t("reader.check_price_table"),onClick:s[1]||(s[1]=i=>e.locateByHash("#pricing")),outline:"",size:e.adaptiveSize,padding:e.adaptiveSize,square:"",icon:"attach_money"},null,8,["label","size","padding"])]),_:1})])],2),t(e.PricingComponent,{"hide-others":!0}),t(e.FAQComponent,{"faq-sources":["reader.faq_v1","api_general_faq","billing_general_faq"]})]),_:1})}const Ea=ie(pt,[["render",ta],["__scopeId","data-v-db6c5287"],["__file","ReaderPage.vue"]]);export{Ea as default};