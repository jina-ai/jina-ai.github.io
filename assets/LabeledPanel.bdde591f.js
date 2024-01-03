import{Q as ce}from"./QImg.b8cb26b7.js";import{e as de,h as V,a6 as he,a7 as _,a8 as t,ay as te,bF as dt,a9 as d,aa as e,bl as k,ad as O,ae as B,ag as g,ah as c,ai as n,bo as pt,bp as mt,az as y,k as Ie,R as Ue,S as He,i as Ve,D as Ke,C as Fe,$ as ft,P as Pe,aH as gt,bB as vt,u as Ge,am as ht,f as b,K as me,w as Ye,bG as oe,ao as Je,ab as S,bH as bt,bI as _t,bJ as Be,aT as yt,ak as R,j as H,ac as K,ap as ve,aB as N,bC as ke,aj as Z,af as E,Z as ie,bw as Ze,bb as fe,bK as Re,bL as wt,a5 as kt,bM as qt,bu as We,bN as Oe,T as xt,b0 as Ct}from"./index.03afe8ec.js";import{Q as j}from"./QItemLabel.4b03e365.js";import{_ as At}from"./NewsBadge.468376d2.js";import{A as St,Q as we}from"./blogs.83c80d92.js";import{_ as Tt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ee}from"./QTooltip.a4d87942.js";import{Q as Qt,a as jt}from"./QTabs.a9cae01d.js";import{Q as ge}from"./QSpace.7db00ea2.js";import{a as Te}from"./QSelect.414ea2d9.js";import{Q as Ne}from"./QList.7a2e6b45.js";import{Q as Me}from"./QBtnDropdown.a8acd47a.js";import{u as Pt,b as Bt,c as It,d as Rt}from"./QCarousel.def26a01.js";import{u as Dt,Q as $t,T as zt}from"./embedding.6d62bd21.js";import{Q as Ot,a as Le,b as Nt}from"./QTable.cc94d89f.js";import{C as Qe}from"./ClosePopup.95497051.js";import{c as Xe}from"./copy-to-clipboard.6d123cb9.js";import{Q as ue}from"./QChip.8adc0f67.js";import{Q as Mt}from"./QForm.6a4a43f4.js";import{Q as Lt}from"./QBtnGroup.cca10ae4.js";const Et=l=>(pt("data-v-4867f981"),l=l(),mt(),l),Ut=Et(()=>y("span",{class:"q-focus-helper"},null,-1)),Ht=de({__name:"NewsroomCard",props:{info:{}},setup(l){const a=l,u=V(()=>dt(a.info.publishedAt).format("MMMM DD, YYYY")),{t:f}=he({useScope:"global"}),r=v=>{window.open(v)};return(v,h)=>(d(),_(te,{flat:"",square:"",onClick:h[0]||(h[0]=T=>r(`/news/${v.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[Ut,e(k,{class:"q-pa-none"},{default:t(()=>[e(ce,{src:v.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(k,{style:{height:"250px"}},{default:t(()=>[e(O,null,{default:t(()=>[e(At,{news:v.info},null,8,["news"])]),_:1}),e(O,null,{default:t(()=>[e(B,{class:"text-h6 text-weight-light"},{default:t(()=>[e(j,{lines:"2"},{default:t(()=>[g(c(v.info.title),1)]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[e(j,{lines:"3",caption:""},{default:t(()=>[g(c(v.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(k,null,{default:t(()=>[e(O,null,{default:t(()=>[e(St,{authors:v.info.authors},null,8,["authors"]),e(B,null,{default:t(()=>[e(j,null,{default:t(()=>[g(c(v.info.authors.map(T=>T.name).join(", ")),1)]),_:1}),e(j,{caption:""},{default:t(()=>[g(c(u.value)+" \u2022 "+c(v.info.readingTime)+" "+c(n(f)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var en=Tt(Ht,[["__scopeId","data-v-4867f981"]]);const Vt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Kt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Ft=Ie({name:"QSkeleton",props:{...Ue,tag:{type:String,default:"div"},type:{type:String,validator:l=>Vt.includes(l),default:"rect"},animation:{type:String,validator:l=>Kt.includes(l),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(l,{slots:a}){const u=Fe(),f=He(l,u.proxy.$q),r=V(()=>{const h=l.size!==void 0?[l.size,l.size]:[l.width,l.height];return{"--q-skeleton-speed":`${l.animationSpeed}ms`,width:h[0],height:h[1]}}),v=V(()=>`q-skeleton q-skeleton--${f.value===!0?"dark":"light"} q-skeleton--type-${l.type}`+(l.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${l.animation}`:"")+(l.square===!0?" q-skeleton--square":"")+(l.bordered===!0?" q-skeleton--bordered":""));return()=>Ve(l.tag,{class:v.value,style:r.value},Ke(a.default))}}),je=Ie({name:"QTabPanel",props:Pt,setup(l,{slots:a}){return()=>Ve("div",{class:"q-tab-panel",role:"tabpanel"},Ke(a.default))}}),Gt=Ie({name:"QTabPanels",props:{...Bt,...Ue},emits:It,setup(l,{slots:a}){const u=Fe(),f=He(l,u.proxy.$q),{updatePanelsList:r,getPanelContent:v,panelDirectives:h}=Rt(),T=V(()=>"q-tab-panels q-panel-parent"+(f.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(a),ft("div",{class:T.value},v(),"pan",l.swipeable,()=>h.value))}});function Yt(l){const a=Object.assign({noopener:!0},l),u=[];for(const f in a){const r=a[f];r===!0?u.push(f):(vt(r)||typeof r=="string"&&r!=="")&&u.push(f+"="+r)}return u.join(",")}function Ee(l,a,u){let f=window.open;if(Pe.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)f=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(l,{openExternal:!0})}const r=f(l,"_blank",Yt(u));if(r)return Pe.is.desktop&&r.focus(),r;a&&a()}var Jt=(l,a,u)=>{if(Pe.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(f=>{f?window.SafariViewController.show({url:l},gt,a):Ee(l,a,u)});return}return Ee(l,a,u)},Zt="/assets/icon-MongoDB.982c1a31.svg",Wt="/assets/icon-Weaviate.7149e9ab.svg",Xt="/assets/icon-Qdrant.934fd07b.svg",ea="data:image/png;base64,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",ta="/assets/icon-Chroma.2b9ab43a.svg",aa="/assets/icon-Langchain.f2ee033d.png",na="/assets/icon-LlamaIndex.480689aa.png",sa="/assets/icon-Dify.8dc6e6d4.png",oa="/assets/icon-deepset.d499330a.svg",la="/assets/icon-SuperDuperDB.94465a4c.svg",ra="/assets/icon-Epsilla.461331c8.png";const ia={class:"full-width"},ua={class:"row q-mb-md q-pa-none"},ca={class:"full-width ellipsis q-pl-md"},da={class:"self-center full-width no-outline",tabindex:"0"},pa={class:"self-center full-width no-outline",tabindex:"0"},ma={class:"self-center full-width no-outline",tabindex:"0"},fa={class:"full-width ellipsis q-pl-md"},ga=y("span",{class:"q-focus-helper"},null,-1),va=y("span",{class:"q-focus-helper"},null,-1),ha={class:"text-h6"};var et=(l=>(l.CURL="curl",l.PYTHON="Python",l.JAVASCRIPT="JavaScript",l.RUBY="Ruby",l.PHP="PHP",l.JAVA="Java",l.NODEJS="Node.js",l.GO="Go",l.C_SHARP="C#",l.RUST="Rust",l))(et||{});const J="https://api.jina.ai/v1/embeddings",tn=de({__name:"EmbeddingComponent",setup(l){const{t:a}=he({useScope:"global"}),u=Ge(),f=Dt(),{apiKey:r,models:v,products:h}=ht(f),T=b(!1),ae=async s=>{if(Y("event","embedding_refresh_api_key",{location:X.location.href,type:s}),T.value)return;T.value=!0,await f.getApiKey().finally(()=>{T.value=!1})?(L.value=r.value,w.value=!1):u.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};me(()=>{navigator.userAgent.toLowerCase().includes("headless")||r.value||ae("auto")});const I=b(!1),D=()=>{Y("event","embedding_copy_api_key",{location:X.location.href}),!(!r.value||I.value)&&(Xe(r.value).then(()=>{u.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),I.value=!0}),setTimeout(()=>{I.value=!1},1800))},U=b(0),p=b(!1),x=b(!1),m=async s=>{p.value=!0,x.value=!1;const i=await f.getTokens(s);if(p.value=!1,i===void 0){x.value=!0;return}U.value=i,$.value=U.value};me(()=>{!r.value||m(r.value)}),Ye(r,s=>{!s||m(s)});const $=b(0),Q=b(!1),w=b(!1),M=async s=>{Q.value=!0,w.value=!1;const i=await f.getTokens(s);if(Q.value=!1,i===void 0){w.value=!0;return}$.value=i,r.value=s},q=s=>new Intl.NumberFormat("en").format(s),ne=[{name:oe.CODE,label:"embedding.usage",icon:"code",value:"code"},{name:oe.MANAGE_QUOTA,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"},{name:oe.INTEGRATIONS,label:"embedding.vector_database_integration1",icon:"settings_suggest",value:"integrations"}],le=b(oe.CODE),be=s=>{Y("event","embedding_change_tab",{location:X.location.href,tab:ne[s].value}),s===oe.MANAGE_QUOTA&&(L.value||(w.value=x.value,x.value||(L.value=r.value,$.value=U.value)))},z=b(!1),W=b();me(()=>{qe()});const qe=async()=>{z.value=!0,await f.getModels(),z.value=!1,v.value.length>0&&(W.value=v.value.find(s=>s.rank===1)||v.value[1])},xe=s=>{Y("event","embedding_choose_model",{location:X.location.href,model:s.name}),W.value=s},_e=s=>{Y("event","embedding_view_model_detail",{location:X.location.href,model:s}),Jt(`https://huggingface.co/jinaai/${s}`,void 0,{})},De=s=>{Y("event","embedding_choose_code_lang",{location:X.location.href,lang:s}),pe.value=s},pe=b("curl"),F=["Your text string goes here","You can send multiple texts"],G=`["${F[0]}", "${F[1]}"]`,tt=V(()=>{var C;const s=r.value||"$JINA_API_KEY",i=((C=W.value)==null?void 0:C.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${J} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${s}" \\
  -d '{
    "input": ${G},
    "model": "${i}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${J}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${s}'
}

data = {
  'input': ${G},
  'model': '${i}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${J}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${s}",
};

const data = {
  input: '${G}',
  model: '${i}',
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
  'Authorization' => 'Bearer ${s}'
}

data = {
  'input' => ${G},
  'model' => '${i}'
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
    "Authorization: Bearer ${s}"
);

$data = array(
    "input" => array("${F[0]}", "${F[1]}"),
    "model" => "${i}"
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
        con.setRequestProperty("Authorization", "Bearer ${s}");

        con.setDoOutput(true);
        String data = "{"input": ["${F[0]}", "${F[1]}"],"model": "${i}"}";

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
    'Authorization': 'Bearer ${s}',
  }
};

const data = {
  input: ${G},
  model: '${i}'
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
		"Authorization": "Bearer ${s}",
	}

	data := \`{
		"input": ${G},
		"model": "${i}"
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
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${s}");

        string data = @"{
            ""input"": [""${F[0]}"", ""${F[1]}""],
            ""model"": ""${i}""
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
        .header("Authorization", "Bearer ${s}")
        .body(r#"{
            "input": ${G},
            "model": "${i}"
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
    `}}),L=b(""),se=V(()=>!!L.value&&L.value.length===r.value.length&&!w.value),at=s=>{if(!(!s||typeof s=="number"||s.length!==r.value.length)){if(s===r.value){$.value=U.value,w.value=x.value;return}M(s)}};me(()=>{h.value.length||f.getProducts()});const re=b(""),nt=async s=>{if(!se.value||Q.value||re.value)return;const i=h.value.find(ct=>ct.price_id===s);let C,o;const A=new URL(window.location.href);A.pathname==="/"&&(A.hash="#enterprises"),A.searchParams.set("price_id",s),A.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),o=A.toString(),A.searchParams.set("purchase_status","success"),C=A.toString(),re.value=s;const P={price_id:s,success_url:C,cancel_url:o},ye=localStorage.getItem(wt);ye&&(P.meta_data={sales_key:ye}),i&&Y("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const ze=await f.checkoutWithStripe(L.value,P);re.value="",ze&&(window.location.href=ze.url)},Ce=b(!1),st=()=>{!se.value||Q.value||(Ce.value=!0)},ot=()=>{var s;(s=$e.value)==null||s.requestServerInteraction()},lt=()=>{Se.value=[]},Ae=b(!1),$e=b(null),Se=b([]),rt=b([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:a("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),it=async s=>{Ae.value=!0;const i=await f.getUsage(L.value);Ae.value=!1,!(!i||i.length===0)&&(Se.value=i.map(C=>{const o=new Date(C.updated_at);let A=C.quantity,P=a(`embedding.usage_reason_${C.type}`);return C.type===zt.CONSUME?(A=-A,C.metadata.model_name&&(P=P+": "+C.metadata.model_name)):(C.metadata.product_name&&(P=P+": "+C.metadata.product_name),C.metadata.order_quantity&&C.metadata.order_quantity>1&&(P=P+` (x ${C.metadata.order_quantity})`)),{createdAt:o,amount:A,reason:P}}),m(L.value))},Y=window.gtag,X=window.document,ut=V(()=>[{label:"MongoDB",order:1,tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:Zt},{label:"Weaviate",order:2,tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:Wt},{label:"Qdrant",order:3,tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:Xt},{label:"Pinecone",order:4,tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:ea},{label:"Chroma",order:5,tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:ta},{label:"Langchain",order:6,tags:["llm"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:aa},{label:"LlamaIndex",order:7,tags:["llm","rag"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:na},{label:"Dify",order:8,tags:["llm","rag"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:sa},{label:"Haystack",order:9,tags:["rag"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:oa},{label:"SuperDuperDB",order:10,tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/ai_integrations/jina",icon:la},{label:"Epsilla",order:11,tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:ra}]);return(s,i)=>{const C=Je("q-markdown");return d(),S(R,null,[y("div",ia,[e(Be,{modelValue:n(r),"onUpdate:modelValue":i[1]||(i[1]=o=>_t(r)?r.value=o:null),label:n(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:T.value,disable:T.value,"input-style":"font-family: monospace;",hint:n(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},bt({prepend:t(()=>[e(H,{flat:"",round:"",icon:"refresh",onClick:i[0]||(i[0]=o=>ae("manual"))},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[T.value?void 0:{name:"append",fn:t(()=>[e(H,{flat:"",round:"",icon:I.value?"done":"content_copy",color:I.value?"positive":"",onClick:D},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(te,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(Qt,{modelValue:le.value,"onUpdate:modelValue":i[3]||(i[3]=o=>le.value=o),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(d(),S(R,null,K(ne,o=>e(jt,{key:o.name,name:o.name,label:n(a)(o.label),icon:o.icon},null,8,["name","label","icon"])),64)),e(ge),e(H,{stretch:"","no-wrap":"",label:n(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:n(u).screen.lt.sm?"12px":"md",onClick:i[2]||(i[2]=o=>n(Y)("event","embedding_goto_faq",{location:n(X).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(ve),e(Gt,{modelValue:le.value,"onUpdate:modelValue":i[9]||(i[9]=o=>le.value=o),animated:"",onBeforeTransition:be},{default:t(()=>[e(je,{name:n(oe).CODE},{default:t(()=>[y("div",ua,[y("div",{class:N(["row",n(u).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(O,{class:N(n(u).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e(B,{avatar:"",style:ke(n(u).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Z,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(B,{class:N(n(u).screen.lt.sm?"items-center":"")},{default:t(()=>[e(j,{overline:"",class:"row items-center"},{default:t(()=>[g(c(n(a)("embedding.remaining")),1)]),_:1}),x.value?E("",!0):(d(),_(j,{key:0},{default:t(()=>[g(c(q(U.value)),1)]),_:1}))]),_:1},8,["class"]),e(we,{showing:p.value},null,8,["showing"])]),_:1},8,["class"]),e(H,{flat:"",icon:"sync",onClick:i[4]||(i[4]=o=>m(n(r)))},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2),n(u).screen.lt.sm?E("",!0):(d(),_(ge,{key:0})),y("div",{class:N(["row",n(u).screen.lt.sm?"col-12":""])},[e(Me,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:z.value,"disable-dropdown":z.value,class:N(n(u).screen.lt.sm?"full-width q-py-md":""),onClick:i[5]||(i[5]=o=>n(Y)("event","embedding_click_model_dropdown",{location:n(X).location.href}))},{label:t(()=>{var o;return[y("div",ca,c((o=W.value)==null?void 0:o.name),1)]}),default:t(()=>[e(Ne,null,{default:t(()=>[(d(!0),S(R,null,K(n(v),(o,A)=>{var P;return ie((d(),_(O,{key:A,clickable:"",active:o.name===((P=W.value)==null?void 0:P.name),onClick:ye=>xe(o),class:"q-pa-lg"},{default:t(()=>[e(B,null,{default:t(()=>[e(j,{overline:"",caption:""},{default:t(()=>[g(c(o.name),1)]),_:2},1024),e(j,{class:"text-weight-bold"},{default:t(()=>[g(c(n(a)(`embedding.${o.name}_description`)),1)]),_:2},1024),e(j,{caption:"",class:"row"},{default:t(()=>[e(Te,{borderless:"",label:n(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[y("div",da,c(o.meta_data.token_length),1)]),_:2},1032,["label"]),e(Te,{borderless:"",label:n(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[y("div",pa,c(o.meta_data.size),1)]),_:2},1032,["label"]),e(Te,{borderless:"",label:n(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[y("div",ma,c(o.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(B,{side:""},{default:t(()=>[e(H,{flat:"",icon:"launch",onClick:Ze(ye=>_e(o.name),["stop"])},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[fe],[Qe]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Me,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:N(n(u).screen.lt.sm?"full-width q-py-md":""),onClick:i[6]||(i[6]=o=>n(Y)("event","embedding_click_code_lang_dropdown",{location:n(X).location.href}))},{label:t(()=>[y("div",fa,c(pe.value),1)]),default:t(()=>[e(Ne,null,{default:t(()=>[(d(),S(R,null,K(et,(o,A)=>ie(e(O,{key:A,clickable:"",active:o===pe.value,"active-class":"text-primary bg-grey-10",onClick:P=>De(o)},{default:t(()=>[e(B,null,{default:t(()=>[e(j,null,{default:t(()=>[g(c(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[fe],[Qe]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(ve),e(C,{src:tt.value[pe.value],"show-copy":"",class:N(["q-py-lg",n(u).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":n(a)("copy"),"copy-response-text":n(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(je,{name:n(oe).MANAGE_QUOTA},{default:t(()=>[e(Be,{"input-style":"font-family: monospace",modelValue:L.value,"onUpdate:modelValue":[i[7]||(i[7]=o=>L.value=o),at],clearable:"",outlined:"",label:L.value?`${n(a)("embedding.key_to_top_up")}`:n(a)("embedding.key_enter_placeholder_to_topup"),error:!se.value,"error-message":L.value?n(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),se.value?(d(),S(R,{key:0},[e($t,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(O,{class:N(n(u).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e(B,{avatar:"",style:ke(n(u).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Z,{name:"help_outline",class:"cursor-pointer",size:n(u).screen.lt.sm?"xs":""},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(B,null,{default:t(()=>[e(j,{overline:"",class:"row items-center"},{default:t(()=>[g(c(n(a)("embedding.remaining")),1)]),_:1}),w.value?E("",!0):(d(),_(j,{key:0},{default:t(()=>[g(c(q($.value)),1)]),_:1}))]),_:1}),e(we,{showing:Q.value},null,8,["showing"])]),_:1},8,["class"]),e(H,{flat:"",icon:"sync",class:"q-ml-sm",disable:!se.value||Q.value,size:n(u).screen.lt.sm?"sm":"md",onClick:i[8]||(i[8]=o=>M(L.value))},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(ge),e(H,{flat:"","no-caps":"",icon:"history",label:n(u).screen.lt.sm?"":n(a)("embedding.usage_history"),dense:n(u).screen.lt.sm,disable:!se.value||Q.value,onClick:st},null,8,["label","dense","disable"])]),_:1}),e(ve)],64)):E("",!0),e(te,{flat:""},{default:t(()=>[e(k,null,{default:t(()=>[e(O,null,{default:t(()=>[e(B,{avatar:"",side:""},{default:t(()=>[e(Z,{name:"fab fa-stripe",size:"sm"}),e(Z,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(B,null,{default:t(()=>[e(j,null,{default:t(()=>[g(c(n(a)("embedding.buy_more_quota")),1)]),_:1}),e(j,{caption:""},{default:t(()=>[g(c(n(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(k,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(d(!0),S(R,null,K(n(h),(o,A)=>(d(),_(O,{key:A,class:"col-12 col-sm-6 col-lg-4 q-pa-sm"},{default:t(()=>[ie((d(),_(te,{bordered:"",flat:"",class:N(["full-width",se.value&&!Q.value&&!re.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:ke(re.value===o.price_id?"cursor: wait !important;":""),onClick:P=>nt(o.price_id)},{default:t(()=>[ga,e(k,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[g(c(n(a)(`embedding.${o.product_name.replace(".","_")}`)),1)]),_:2},1024),e(k,{class:"column items-center text-center non-selectable q-px-xl text-weight-light text-caption"},{default:t(()=>[g(c(n(a)(`embedding.${o.product_name.replace(".","_")}_intuition`)),1)]),_:2},1024),e(k,null,{default:t(()=>[e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[e(j,{class:"text-bold"},{default:t(()=>[g("$"+c(o.price),1)]),_:2},1024),e(j,{caption:""},{default:t(()=>[g("$"+c(Number((o.price/o.token_quantity*1e3).toFixed(6)))+" "+c(n(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(B,{side:""},{default:t(()=>[e(Z,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(we,{showing:re.value===o.price_id,label:n(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[fe,se.value&&!Q.value&&!re.value]])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["name"]),e(je,{name:n(oe).INTEGRATIONS},{default:t(()=>[e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[g(c(n(a)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),e(k,{class:"row"},{default:t(()=>[(d(!0),S(R,null,K(ut.value,(o,A)=>(d(),_(O,{key:A,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:t(()=>[ie((d(),_(te,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:P=>n(Re)(o.homepage)},{default:t(()=>[va,e(k,{class:"column items-center non-selectable q-py-lg"},{default:t(()=>[o.icon?(d(),_(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:o.icon},null,8,["src"])):E("",!0)]),_:2},1024),e(k,{class:"text-center non-selectable"},{default:t(()=>[g(c(o.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[fe]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(we,{class:"non-selectable lock-blur",showing:T.value},null,8,["showing"])]),_:1}),e(yt,{modelValue:Ce.value,"onUpdate:modelValue":i[10]||(i[10]=o=>Ce.value=o),onShow:ot,onHide:lt},{default:t(()=>[e(te,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(k,{class:"row items-center q-pb-none"},{default:t(()=>[e(Z,{name:"history",size:"md",class:"q-mr-md"}),y("div",ha,c(n(u).screen.lt.sm?"":n(a)("embedding.usage_history")),1),e(ge),ie(e(H,{icon:"close",flat:"",round:"",dense:""},null,512),[[Qe]])]),_:1}),e(k,null,{default:t(()=>[e(n(Ot),{ref_key:"usageTableRef",ref:$e,flat:"","row-key":"createdAt",rows:Se.value,columns:rt.value,loading:Ae.value,"hide-pagination":!0,onRequest:it},{"body-cell-icon":t(o=>[e(Le,{key:"icon",props:o},{default:t(()=>[o.row.amount>0?(d(),_(Z,{key:0,name:"o_add_circle_outline",color:"primary"})):(d(),_(Z,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(o=>[e(Le,{key:"amount",props:o},{default:t(()=>[g(c((o.row.amount>0?"+":"")+q(o.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var ba="/assets/paper_1.8ed04d7d.png",_a="/assets/paper_2.59e1399a.png";const ya=y("span",{class:"q-focus-helper"},null,-1),wa={class:"q-mb-xl"},an=de({__name:"ResearchersComponent",setup(l){he({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:ba,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:_a,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(u,f)=>(d(),S(R,null,K(a,(r,v)=>ie(e(te,{key:v,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[ya,e(Nt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(k,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(O,{href:r.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e(B,null,{default:t(()=>[y("div",wa,[e(ue,{label:r.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),r.conference?(d(),_(ue,{key:0,label:r.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(d(),_(ue,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(ge),e(j,{class:"text-h6 q-mb-lg"},{default:t(()=>[g(c(r.title),1)]),_:2},1024),e(j,{caption:"",lines:"3"},{default:t(()=>[g(c(r.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(ce,{src:r.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[fe]])),64))}});function ka(l){const a=b(null);return me(()=>{a.value&&a.value(),a.value=l()}),kt(()=>{var u;(u=a.value)==null||u.call(a)}),{watchStopHandle:a}}const qa=de({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(l,{emit:a}){const u=a,f=l;let r=b(""),v=0,h=null;const T=()=>{v=0,h&&(clearInterval(h),h=null)},ae=()=>{h=window.setInterval(()=>{v<f.text.length?(r.value+=f.text[v],v++):(clearInterval(h),h=null,u("done"))},f.speedTime)};return ka(()=>Ye(f.text,I=>{if(r.value.length===I.length){T();return}!h&&v<I.length&&ae()},{immediate:!0})),(I,D)=>{const U=Je("q-markdown");return d(),_(U,{src:n(r),"no-line-numbers":""},null,8,["src"])}}});const xa={key:"result",class:"row justify-center q-mb-xl"},Ca={class:"text-caption text-grey"},Aa={class:"text-caption text-grey"},nn=de({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(l){const{t:a}=he({useScope:"global"}),u=Ge(),f=b(!1),r=l;function v([w,M]){return Array.from({length:M-w+1},(q,ne)=>w+ne)}function h(w){return w[Math.floor(Math.random()*w.length)]}const T=V(()=>{const w=v([1,12]).map(M=>a(`impact_snapshots.project${M}`));return`${a("landing_page.how_to")} ${h(w).slice(0,-1).toLowerCase()}?`}),ae=V(()=>{const w=v([1,12]).map(M=>a(`embedding.faqs.question${M}`));return`${h(w).slice(0,-1).toLowerCase()}?`}),I=b(""),D=b(!1),U=b(null),p=b([]),x=async()=>{var ne,le,be;if(!await((ne=U.value)==null?void 0:ne.validate()))return Promise.reject();const w=I.value,M={parameters:{question:w}},q={query:w,stream:!0};D.value=!0,p.value=[];try{const z=await fetch(Q(),{headers:{"content-type":"application/json"},body:JSON.stringify(r.isFAQ?q:M),method:"POST"});if(!z.ok)throw new Error(`HTTP error! status: ${z.status}`);if((le=z.headers.get("content-type"))!=null&&le.includes("text/event-stream")){if(z.body){const W=z.body.getReader(),qe=new TextDecoder;for(;;){const{done:xe,value:_e}=await W.read();if(xe)break;_e&&(D.value=!1,qe.decode(_e).split(`

`).forEach(F=>{const G=F.replace(/data: /g,"");G&&p.value.push(G)}))}}}else if((be=z.headers.get("content-type"))!=null&&be.includes("application/json")){const W=(await z.json()).data;p.value=[W]}else throw new Error("Unknown response type")}catch(z){u.notify({color:"negative",message:a("landing_page.error",{message:z}),icon:"report_problem"})}finally{D.value=!1}};function m(){return Xe(p.value.join("")).then(()=>{u.notify({message:a("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const $=V(()=>qt.value.filter(w=>p.value.join("").toLowerCase().includes(w.label.toLowerCase().replace("landing_page.",""))));function Q(){return r.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${f.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(w,M)=>(d(),S(R,null,[e(Mt,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Ze(x,["prevent","stop"])},{default:t(()=>[e(n(Be),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:n(a)("landing_page.ask_how_your_question"),placeholder:l.isFAQ?ae.value:T.value,modelValue:I.value,"onUpdate:modelValue":M[0]||(M[0]=q=>I.value=q),clearable:"",ref_key:"questionRef",ref:U,loading:D.value,disable:D.value,rules:[q=>!!q&&q.length>5||n(a)("landing_page.require_full_question")]},{prepend:t(()=>[e(Z,{name:"img:/J.svg"})]),append:t(()=>[e(H,{flat:"",icon:"send",type:"submit",onClick:x})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1}),p.value.length||D.value?(d(),S("div",xa,[e(te,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[D.value?(d(),_(k,{key:0},{default:t(()=>[e(Z,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),y("span",Ca,c(l.isFAQ?n(a)("landing_page.finding_faq"):n(a)("landing_page.proposing_solution")),1),(d(),S(R,null,K([0,1,2,3,4],q=>e(Ft,{key:q,class:"q-my-xs",width:q>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(d(),S(R,{key:1},[$.value.length>0&&!l.isFAQ?(d(),_(k,{key:0},{default:t(()=>[y("span",Aa,c(n(a)("landing_page.mentioned_products")),1),(d(!0),S(R,null,K($.value,q=>(d(),_(ue,{size:"sm",key:q,label:n(a)(q.label),icon:q.icon?`img:${q.icon}`:"widgets",onClick:ne=>n(Re)(q.link),clickable:""},{default:t(()=>[e(ee,null,{default:t(()=>[g(c(n(a)(q.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):E("",!0),e(ve),e(k,{class:"q-pa-xl"},{default:t(()=>[e(qa,{text:p.value},null,8,["text"])]),_:1}),e(ve),e(We,{align:"right"},{default:t(()=>[e(Lt,{square:""},{default:t(()=>[e(H,{square:"","no-caps":"",icon:"content_copy",onClick:m,label:n(a)("landing_page.copy")},null,8,["label"]),e(H,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:n(a)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):E("",!0)],64))}});var Sa="/assets/pattern-developers.4f94c0e3.svg";const Ta={class:"row"},Qa={class:"row items-center justify-start text-h2 text-white",style:{"text-decoration":"none !important"}},ja={class:"row text-grey-5 q-py-lg"},Pa={class:"col-12 col-md-8"},Ba={class:"row text-grey-5 q-py-lg relative-position"},Ia={class:"col-12 col-md-8"},sn=de({__name:"LabeledPanel",props:{title:{},description:{},products:{},isCardDark:{type:Boolean},hideBackground:{type:Boolean},hideTitle:{type:Boolean}},emits:["click-tag","click-card"],setup(l,{emit:a}){const{t:u}=he({useScope:"global"}),f=l,r=a,v=V(()=>{const p=new Set;return f.products.forEach(x=>{x.tags.forEach(m=>p.add(m))}),Array.from(p)}),h=b([]),T=V(()=>f.products.filter(p=>h.value.length===0?!0:h.value.some(x=>p.tags.includes(x))).sort((p,x)=>p.order-x.order)),ae=p=>{r("click-tag",p),!h.value.includes(p)&&h.value.push(p)},I=p=>{h.value=h.value.filter(x=>x!==p)},D=b(!1),U=p=>{r("click-card",p.label),Re(p.homepage)};return(p,x)=>(d(),S("div",Ta,[p.hideTitle?E("",!0):(d(),S("div",{key:0,class:N(["col-12 col-md-5 column justify-start",p.$q.screen.lt.md?"items-center":"items-start"])},[y("a",Qa,c(p.title),1),y("div",ja,[y("div",Pa,c(p.description),1)]),y("div",Ba,[y("div",Ia,[(d(!0),S(R,null,K(v.value,m=>(d(),_(ue,{key:m,label:n(u)(`project_status.${m}`),size:"md",outline:"",square:"",clickable:"",removable:h.value.includes(m),icon:n(Oe)[m],color:"grey-3",class:"no-border-radius non-selectable cursor-pointer",onClick:$=>ae(m),onRemove:$=>I(m)},null,8,["label","removable","icon","onClick","onRemove"]))),128))]),p.hideBackground?E("",!0):(d(),_(ce,{key:0,src:Sa,class:"absolute",style:{width:"50vw",top:"50%",left:"-50%","z-index":"-1"},fit:"fill"}))])],2)),y("div",{class:N(["col-12 col-md-7 row",p.$q.screen.lt.md?"justify-center":"justify-start"])},[(d(!0),S(R,null,K(T.value,(m,$)=>(d(),S("div",{key:$,class:N(["q-pa-xs",{"col-6":p.$q.screen.gt.md&&m.tags.includes("core")||p.$q.screen.lt.md&&!m.tags.includes("core"),"col-8":p.$q.screen.md&&m.tags.includes("core"),"col-12":p.$q.screen.lt.md&&m.tags.includes("core"),"col-3":p.$q.screen.gt.md&&!m.tags.includes("core"),"col-4":p.$q.screen.md&&!m.tags.includes("core")}]),style:{maxHeight:"260px"}},[e(te,{flat:"",square:"",class:N(["q-px-sm q-py-lg text-white full-height relative-position cursor-pointer overflow-hidden non-selectable",p.isCardDark?"bg-dark":"bg-dark-page"]),onMouseenter:Q=>D.value=$,onMouseleave:x[0]||(x[0]=Q=>D.value=!1),onClick:Q=>U(m)},{default:t(()=>[e(xt,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:t(()=>[ie(y("div",{class:"absolute-full",style:ke({backgroundImage:Math.random()>.5?`linear-gradient(
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
                      )`,zIndex:10})},[e(k,{class:"row items-center q-gutter-sm text-no-wrap no-wrap"},{default:t(()=>[m.icon?(d(),_(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):E("",!0),y("div",{class:N(m.label.length>10?"text-body":"text-h6")},c(m.label),3)]),_:2},1024),e(k,{class:"text-white"},{default:t(()=>[m.star?(d(),_(ue,{key:0,label:m.star+" "+n(u)("github.stars"),icon:"fab fa-github",size:"xs",outline:"",square:"",color:"grey-3",class:"no-border-radius"},null,8,["label"])):E("",!0),(d(!0),S(R,null,K(m.tags,Q=>(d(),_(ue,{label:n(u)(`project_status.${Q}`),size:"xs",outline:"",square:"",icon:n(Oe)[Q],color:"grey-3",key:Q,class:"no-border-radius"},null,8,["label","icon"]))),128))]),_:2},1024),e(We,{align:"right"},{default:t(()=>[e(H,{flat:"",round:"",color:"white",icon:"arrow_right_alt"})]),_:1})],4),[[Ct,D.value===$]])]),_:2},1024),e(k,{class:"row justify-center"},{default:t(()=>[m.icon?(d(),_(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):E("",!0)]),_:2},1024),e(k,{class:"row justify-center text-no-wrap text-h6 text-weight-light q-pa-none"},{default:t(()=>[g(c(m.label),1)]),_:2},1024),m.caption?(d(),_(k,{key:0,class:"text-caption q-px-xs text-center"},{default:t(()=>[g(c(m.caption),1)]),_:2},1024)):E("",!0)]),_:2},1032,["class","onMouseenter","onClick"])],2))),128))],2)]))}});export{en as N,Ft as Q,nn as _,Gt as a,je as b,tn as c,an as d,sn as e,Wt as f,Xt as g,ea as h,ta as i,aa as j,na as k,Zt as l,sa as m,oa as n,la as o,ra as p};
