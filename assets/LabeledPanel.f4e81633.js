import{Q as ce}from"./QImg.0381a508.js";import{e as ue,h as E,a6 as ve,a7 as y,a8 as t,ay as te,bF as ct,a9 as p,aa as e,bl as q,ad as O,ae as B,ag as f,ah as u,ai as n,bo as ut,bp as dt,az as _,k as Be,R as Le,S as Ue,i as Ve,D as Ke,C as Ee,$ as pt,P as Qe,aH as mt,bB as gt,u as Fe,am as ft,f as b,K as pe,w as Ye,ao as Ge,ab as A,bG as vt,bH as ht,bI as Pe,aT as bt,ak as $,j as V,ac as K,ap as fe,aB as R,bC as we,aj as Z,af as L,Z as re,bw as Je,bb as me,bJ as Ie,bK as yt,a5 as _t,bL as wt,bu as Ze,bM as De,T as kt,b0 as qt}from"./index.5314b7bc.js";import{Q}from"./QItemLabel.38c0e85d.js";import{_ as xt}from"./NewsBadge.559ee957.js";import{A as Ct,Q as _e}from"./blogs.fa7edd86.js";import{_ as St}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ee}from"./QTooltip.2c879ac5.js";import{Q as At,a as Tt}from"./QTabs.cd89c4f7.js";import{Q as ge}from"./QSpace.acd1b9ce.js";import{a as Ae}from"./QSelect.4aa5e877.js";import{Q as Me}from"./QList.c929cdf9.js";import{Q as Oe}from"./QBtnDropdown.1538df2b.js";import{u as jt,b as Qt,c as Pt,d as Bt}from"./QCarousel.387285d7.js";import{u as It,Q as Rt,T as $t}from"./embedding.ead4122b.js";import{Q as zt,a as Ne,b as Dt}from"./QTable.54faf2da.js";import{C as Te}from"./ClosePopup.ab381c97.js";import{c as We}from"./copy-to-clipboard.81024278.js";import{Q as ie}from"./QChip.18442290.js";import{Q as Mt}from"./QForm.1b30d353.js";import{Q as Ot}from"./QBtnGroup.dee62083.js";const Nt=o=>(ut("data-v-4867f981"),o=o(),dt(),o),Ht=Nt(()=>_("span",{class:"q-focus-helper"},null,-1)),Lt=ue({__name:"NewsroomCard",props:{info:{}},setup(o){const a=o,c=E(()=>ct(a.info.publishedAt).format("MMMM DD, YYYY")),{t:g}=ve({useScope:"global"}),r=v=>{window.open(v)};return(v,h)=>(p(),y(te,{flat:"",square:"",onClick:h[0]||(h[0]=T=>r(`/news/${v.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[Ht,e(q,{class:"q-pa-none"},{default:t(()=>[e(ce,{src:v.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(q,{style:{height:"250px"}},{default:t(()=>[e(O,null,{default:t(()=>[e(xt,{news:v.info},null,8,["news"])]),_:1}),e(O,null,{default:t(()=>[e(B,{class:"text-h6 text-weight-light"},{default:t(()=>[e(Q,{lines:"2"},{default:t(()=>[f(u(v.info.title),1)]),_:1})]),_:1})]),_:1}),e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[e(Q,{lines:"3",caption:""},{default:t(()=>[f(u(v.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(q,null,{default:t(()=>[e(O,null,{default:t(()=>[e(Ct,{authors:v.info.authors},null,8,["authors"]),e(B,null,{default:t(()=>[e(Q,null,{default:t(()=>[f(u(v.info.authors.map(T=>T.name).join(", ")),1)]),_:1}),e(Q,{caption:""},{default:t(()=>[f(u(c.value)+" \u2022 "+u(v.info.readingTime)+" "+u(n(g)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var en=St(Lt,[["__scopeId","data-v-4867f981"]]);const Ut=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Vt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Kt=Be({name:"QSkeleton",props:{...Le,tag:{type:String,default:"div"},type:{type:String,validator:o=>Ut.includes(o),default:"rect"},animation:{type:String,validator:o=>Vt.includes(o),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(o,{slots:a}){const c=Ee(),g=Ue(o,c.proxy.$q),r=E(()=>{const h=o.size!==void 0?[o.size,o.size]:[o.width,o.height];return{"--q-skeleton-speed":`${o.animationSpeed}ms`,width:h[0],height:h[1]}}),v=E(()=>`q-skeleton q-skeleton--${g.value===!0?"dark":"light"} q-skeleton--type-${o.type}`+(o.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${o.animation}`:"")+(o.square===!0?" q-skeleton--square":"")+(o.bordered===!0?" q-skeleton--bordered":""));return()=>Ve(o.tag,{class:v.value,style:r.value},Ke(a.default))}}),je=Be({name:"QTabPanel",props:jt,setup(o,{slots:a}){return()=>Ve("div",{class:"q-tab-panel",role:"tabpanel"},Ke(a.default))}}),Et=Be({name:"QTabPanels",props:{...Qt,...Le},emits:Pt,setup(o,{slots:a}){const c=Ee(),g=Ue(o,c.proxy.$q),{updatePanelsList:r,getPanelContent:v,panelDirectives:h}=Bt(),T=E(()=>"q-tab-panels q-panel-parent"+(g.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(a),pt("div",{class:T.value},v(),"pan",o.swipeable,()=>h.value))}});function Ft(o){const a=Object.assign({noopener:!0},o),c=[];for(const g in a){const r=a[g];r===!0?c.push(g):(gt(r)||typeof r=="string"&&r!=="")&&c.push(g+"="+r)}return c.join(",")}function He(o,a,c){let g=window.open;if(Qe.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)g=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(o,{openExternal:!0})}const r=g(o,"_blank",Ft(c));if(r)return Qe.is.desktop&&r.focus(),r;a&&a()}var Yt=(o,a,c)=>{if(Qe.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(g=>{g?window.SafariViewController.show({url:o},mt,a):He(o,a,c)});return}return He(o,a,c)},Gt="/assets/icon-MongoDB.982c1a31.svg",Jt="/assets/icon-Weaviate.7149e9ab.svg",Zt="/assets/icon-Qdrant.934fd07b.svg",Wt="data:image/png;base64,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",Xt="/assets/icon-Chroma.2b9ab43a.svg",ea="/assets/icon-Langchain.f2ee033d.png",ta="/assets/icon-LlamaIndex.480689aa.png",aa="/assets/icon-Dify.8dc6e6d4.png",na="/assets/icon-Haystack.c2968447.svg",sa="/assets/icon-SuperDuperDB.94465a4c.svg",la="/assets/icon-Epsilla.461331c8.png",oa="/assets/icon-MyScale.5669eb9d.svg";const ra=[{label:"MongoDB",tags:["vector_store"],homepage:"https://www.mongodb.com/developer/products/atlas/jina-ai-semantic-search/",icon:Gt},{label:"Qdrant",tags:["vector_store"],homepage:"https://qdrant.tech/documentation/integrations/jina-embeddings/",icon:Zt},{label:"Pinecone",tags:["vector_store"],homepage:"https://www.pinecone.io/models/jina-embeddings-v2-base-en/",icon:Wt},{label:"Chroma",tags:["vector_store"],homepage:"https://docs.trychroma.com/embeddings/jinaai",icon:Xt},{label:"Weaviate",tags:["vector_store"],homepage:"https://weaviate.io/developers/weaviate/modules/retriever-vectorizer-modules/text2vec-jinaai",icon:Jt},{label:"Epsilla",tags:["vector_store"],homepage:"https://epsilla-inc.gitbook.io/epsilladb/vector-database/embeddings#jina-ai-embedding",icon:la},{label:"MyScale",tags:["vector_store"],homepage:"https://myscale.com/docs/en/functions/ai-functions/embedding-functions/#jina-embedding",icon:oa},{label:"LlamaIndex",tags:["llm1","rag1"],homepage:"https://docs.llamaindex.ai/en/stable/examples/embeddings/jinaai_embeddings.html",icon:ta},{label:"Haystack (by deepset)",tags:["rag1"],homepage:"https://haystack.deepset.ai/integrations/jina",icon:na},{label:"Langchain",tags:["llm1"],homepage:"https://python.langchain.com/docs/integrations/text_embedding/jina",icon:ea},{label:"Dify",tags:["llm1","rag1"],homepage:"https://dify.ai/blog/integrating-jina-embeddings-v2-dify-enhancing-rag-applications",icon:aa},{label:"SuperDuperDB",tags:["vector_store"],homepage:"https://docs.superduperdb.com/docs/docs/ai_integrations/jina",icon:sa}],ia={class:"full-width"},ca={class:"row q-mb-md q-pa-none"},ua={class:"full-width ellipsis q-pl-md"},da={class:"self-center full-width no-outline",tabindex:"0"},pa={class:"self-center full-width no-outline",tabindex:"0"},ma={class:"self-center full-width no-outline",tabindex:"0"},ga={class:"full-width ellipsis q-pl-md"},fa=_("span",{class:"q-focus-helper"},null,-1),va=_("span",{class:"q-focus-helper"},null,-1),ha={class:"text-h6"};var Xe=(o=>(o.CURL="curl",o.PYTHON="Python",o.JAVASCRIPT="JavaScript",o.RUBY="Ruby",o.PHP="PHP",o.JAVA="Java",o.NODEJS="Node.js",o.GO="Go",o.C_SHARP="C#",o.RUST="Rust",o))(Xe||{});const J="https://api.jina.ai/v1/embeddings",tn=ue({__name:"EmbeddingComponent",setup(o){const{t:a}=ve({useScope:"global"}),c=Fe(),g=It(),{apiKey:r,models:v,products:h}=ft(g),T=b(!1),ae=async s=>{if(G("event","embedding_refresh_api_key",{location:X.location.href,type:s}),T.value)return;T.value=!0,await g.getApiKey().finally(()=>{T.value=!1})?(H.value=r.value,w.value=!1):c.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};pe(()=>{navigator.userAgent.toLowerCase().includes("headless")||r.value||ae("auto")});const I=b(!1),z=()=>{G("event","embedding_copy_api_key",{location:X.location.href}),!(!r.value||I.value)&&(We(r.value).then(()=>{c.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),I.value=!0}),setTimeout(()=>{I.value=!1},1800))},U=b(0),d=b(!1),k=b(!1),m=async s=>{d.value=!0,k.value=!1;const i=await g.getTokens(s);if(d.value=!1,i===void 0){k.value=!0;return}U.value=i,D.value=U.value};pe(()=>{!r.value||m(r.value)}),Ye(r,s=>{!s||m(s)});const D=b(0),j=b(!1),w=b(!1),N=async s=>{j.value=!0,w.value=!1;const i=await g.getTokens(s);if(j.value=!1,i===void 0){w.value=!0;return}D.value=i,r.value=s},x=s=>new Intl.NumberFormat("en").format(s),ne=[{name:0,label:"embedding.usage",icon:"code",value:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"},{name:2,label:"embedding.vector_database_integration1",icon:"settings_suggest",value:"integrations"}],le=b(0),he=s=>{G("event","embedding_change_tab",{location:X.location.href,tab:ne[s].value}),s===1&&(H.value||(w.value=k.value,k.value||(H.value=r.value,D.value=U.value)))},M=b(!1),W=b();pe(()=>{ke()});const ke=async()=>{M.value=!0,await g.getModels(),M.value=!1,v.value.length>0&&(W.value=v.value.find(s=>s.rank===1)||v.value[1])},qe=s=>{G("event","embedding_choose_model",{location:X.location.href,model:s.name}),W.value=s},be=s=>{G("event","embedding_view_model_detail",{location:X.location.href,model:s}),Yt(`https://huggingface.co/jinaai/${s}`,void 0,{})},Re=s=>{G("event","embedding_choose_code_lang",{location:X.location.href,lang:s}),de.value=s},de=b("curl"),F=["Your text string goes here","You can send multiple texts"],Y=`["${F[0]}", "${F[1]}"]`,et=E(()=>{var C;const s=r.value||"$JINA_API_KEY",i=((C=W.value)==null?void 0:C.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${J} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${s}" \\
  -d '{
    "input": ${Y},
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
  'input': ${Y},
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
  input: '${Y}',
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
  'input' => ${Y},
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
  input: ${Y},
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
		"input": ${Y},
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
            "input": ${Y},
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
    `}}),H=b(""),se=E(()=>!!H.value&&H.value.length===r.value.length&&!w.value),tt=s=>{if(!(!s||typeof s=="number"||s.length!==r.value.length)){if(s===r.value){D.value=U.value,w.value=k.value;return}N(s)}};pe(()=>{h.value.length||g.getProducts()});const oe=b(""),at=async s=>{if(!se.value||j.value||oe.value)return;const i=h.value.find(it=>it.price_id===s);let C,l;const S=new URL(window.location.href);S.pathname==="/"&&(S.hash="#enterprises"),S.searchParams.set("price_id",s),S.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),l=S.toString(),S.searchParams.set("purchase_status","success"),C=S.toString(),oe.value=s;const P={price_id:s,success_url:C,cancel_url:l},ye=localStorage.getItem(yt);ye&&(P.meta_data={sales_key:ye}),i&&G("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const ze=await g.checkoutWithStripe(H.value,P);oe.value="",ze&&(window.location.href=ze.url)},xe=b(!1),nt=()=>{!se.value||j.value||(xe.value=!0)},st=()=>{var s;(s=$e.value)==null||s.requestServerInteraction()},lt=()=>{Se.value=[]},Ce=b(!1),$e=b(null),Se=b([]),ot=b([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:a("embedding.tokens"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),rt=async s=>{Ce.value=!0;const i=await g.getUsage(H.value);Ce.value=!1,!(!i||i.length===0)&&(Se.value=i.map(C=>{const l=new Date(C.updated_at);let S=C.quantity,P=a(`embedding.usage_reason_${C.type}`);return C.type===$t.CONSUME?(S=-S,C.metadata.model_name&&(P=P+": "+C.metadata.model_name)):(C.metadata.product_name&&(P=P+": "+C.metadata.product_name),C.metadata.order_quantity&&C.metadata.order_quantity>1&&(P=P+` (x ${C.metadata.order_quantity})`)),{createdAt:l,amount:S,reason:P}}),m(H.value))},G=window.gtag,X=window.document;return(s,i)=>{const C=Ge("q-markdown");return p(),A($,null,[_("div",ia,[e(Pe,{modelValue:n(r),"onUpdate:modelValue":i[1]||(i[1]=l=>ht(r)?r.value=l:null),label:n(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:T.value,disable:T.value,"input-style":"font-family: monospace;",hint:n(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},vt({prepend:t(()=>[e(V,{flat:"",round:"",icon:"refresh",onClick:i[0]||(i[0]=l=>ae("manual"))},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[T.value?void 0:{name:"append",fn:t(()=>[e(V,{flat:"",round:"",icon:I.value?"done":"content_copy",color:I.value?"positive":"",onClick:z},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(te,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(At,{modelValue:le.value,"onUpdate:modelValue":i[3]||(i[3]=l=>le.value=l),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(p(),A($,null,K(ne,l=>e(Tt,{key:l.name,name:l.name,label:n(a)(l.label),icon:l.icon},null,8,["name","label","icon"])),64)),e(ge),e(V,{stretch:"","no-wrap":"",label:n(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:n(c).screen.lt.sm?"12px":"md",onClick:i[2]||(i[2]=l=>n(G)("event","embedding_goto_faq",{location:n(X).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(fe),e(Et,{modelValue:le.value,"onUpdate:modelValue":i[9]||(i[9]=l=>le.value=l),animated:"",onBeforeTransition:he},{default:t(()=>[e(je,{name:0},{default:t(()=>[_("div",ca,[_("div",{class:R(["row",n(c).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(O,{class:R(n(c).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e(B,{avatar:"",style:we(n(c).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Z,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(B,{class:R(n(c).screen.lt.sm?"items-center":"")},{default:t(()=>[e(Q,{overline:"",class:"row items-center"},{default:t(()=>[f(u(n(a)("embedding.remaining")),1)]),_:1}),k.value?L("",!0):(p(),y(Q,{key:0},{default:t(()=>[f(u(x(U.value)),1)]),_:1}))]),_:1},8,["class"]),e(_e,{showing:d.value},null,8,["showing"])]),_:1},8,["class"]),e(V,{flat:"",icon:"sync",onClick:i[4]||(i[4]=l=>m(n(r)))},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2),n(c).screen.lt.sm?L("",!0):(p(),y(ge,{key:0})),_("div",{class:R(["row",n(c).screen.lt.sm?"col-12":""])},[e(Oe,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:M.value,"disable-dropdown":M.value,class:R(n(c).screen.lt.sm?"full-width q-py-md":""),onClick:i[5]||(i[5]=l=>n(G)("event","embedding_click_model_dropdown",{location:n(X).location.href}))},{label:t(()=>{var l;return[_("div",ua,u((l=W.value)==null?void 0:l.name),1)]}),default:t(()=>[e(Me,null,{default:t(()=>[(p(!0),A($,null,K(n(v),(l,S)=>{var P;return re((p(),y(O,{key:S,clickable:"",active:l.name===((P=W.value)==null?void 0:P.name),onClick:ye=>qe(l),class:"q-pa-lg"},{default:t(()=>[e(B,null,{default:t(()=>[e(Q,{overline:"",caption:""},{default:t(()=>[f(u(l.name),1)]),_:2},1024),e(Q,{class:"text-weight-bold"},{default:t(()=>[f(u(n(a)(`embedding.${l.name}_description`)),1)]),_:2},1024),e(Q,{caption:"",class:"row"},{default:t(()=>[e(Ae,{borderless:"",label:n(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[_("div",da,u(l.meta_data.token_length),1)]),_:2},1032,["label"]),e(Ae,{borderless:"",label:n(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[_("div",pa,u(l.meta_data.size),1)]),_:2},1032,["label"]),e(Ae,{borderless:"",label:n(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[_("div",ma,u(l.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(B,{side:""},{default:t(()=>[e(V,{flat:"",icon:"launch",onClick:Je(ye=>be(l.name),["stop"])},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[me],[Te]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Oe,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:R(n(c).screen.lt.sm?"full-width q-py-md":""),onClick:i[6]||(i[6]=l=>n(G)("event","embedding_click_code_lang_dropdown",{location:n(X).location.href}))},{label:t(()=>[_("div",ga,u(de.value),1)]),default:t(()=>[e(Me,null,{default:t(()=>[(p(),A($,null,K(Xe,(l,S)=>re(e(O,{key:S,clickable:"",active:l===de.value,"active-class":"text-primary bg-grey-10",onClick:P=>Re(l)},{default:t(()=>[e(B,null,{default:t(()=>[e(Q,null,{default:t(()=>[f(u(l),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[me],[Te]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(fe),e(C,{src:et.value[de.value],"show-copy":"",class:R(["q-py-lg",n(c).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":n(a)("copy"),"copy-response-text":n(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(je,{name:1},{default:t(()=>[e(Pe,{"input-style":"font-family: monospace",modelValue:H.value,"onUpdate:modelValue":[i[7]||(i[7]=l=>H.value=l),tt],clearable:"",outlined:"",label:H.value?`${n(a)("embedding.key_to_top_up")}`:n(a)("embedding.key_enter_placeholder_to_topup"),error:!se.value,"error-message":H.value?n(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),se.value?(p(),A($,{key:0},[e(Rt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(O,{class:R(n(c).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e(B,{avatar:"",style:we(n(c).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Z,{name:"help_outline",class:"cursor-pointer",size:n(c).screen.lt.sm?"xs":""},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(B,null,{default:t(()=>[e(Q,{overline:"",class:"row items-center"},{default:t(()=>[f(u(n(a)("embedding.remaining")),1)]),_:1}),w.value?L("",!0):(p(),y(Q,{key:0},{default:t(()=>[f(u(x(D.value)),1)]),_:1}))]),_:1}),e(_e,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),e(V,{flat:"",icon:"sync",class:"q-ml-sm",disable:!se.value||j.value,size:n(c).screen.lt.sm?"sm":"md",onClick:i[8]||(i[8]=l=>N(H.value))},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(ge),e(V,{flat:"","no-caps":"",icon:"history",label:n(c).screen.lt.sm?"":n(a)("embedding.usage_history"),dense:n(c).screen.lt.sm,disable:!se.value||j.value,onClick:nt},null,8,["label","dense","disable"])]),_:1}),e(fe)],64)):L("",!0),e(te,{flat:""},{default:t(()=>[e(q,null,{default:t(()=>[e(O,null,{default:t(()=>[e(B,{avatar:"",side:""},{default:t(()=>[e(Z,{name:"fab fa-stripe",size:"sm"}),e(Z,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(B,null,{default:t(()=>[e(Q,null,{default:t(()=>[f(u(n(a)("embedding.buy_more_quota")),1)]),_:1}),e(Q,{caption:""},{default:t(()=>[f(u(n(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(q,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(p(!0),A($,null,K(n(h),(l,S)=>(p(),y(O,{key:S,class:"col-12 col-sm-6 col-lg-4 q-pa-sm"},{default:t(()=>[re((p(),y(te,{bordered:"",flat:"",class:R(["full-width",se.value&&!j.value&&!oe.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:we(oe.value===l.price_id?"cursor: wait !important;":""),onClick:P=>at(l.price_id)},{default:t(()=>[fa,e(q,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[f(u(n(a)(`embedding.${l.product_name.replace(".","_")}`)),1)]),_:2},1024),e(q,{class:"column items-center text-center non-selectable q-px-xl text-weight-light text-caption"},{default:t(()=>[f(u(n(a)(`embedding.${l.product_name.replace(".","_")}_intuition`)),1)]),_:2},1024),e(q,null,{default:t(()=>[e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[e(Q,{class:"text-bold"},{default:t(()=>[f("$"+u(l.price),1)]),_:2},1024),e(Q,{caption:""},{default:t(()=>[f("$"+u(Number((l.price/l.token_quantity*1e3).toFixed(6)))+" "+u(n(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(B,{side:""},{default:t(()=>[e(Z,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(_e,{showing:oe.value===l.price_id,label:n(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[me,se.value&&!j.value&&!oe.value]])]),_:2},1024))),128))]),_:1})]),_:1})]),_:1},8,["name"]),e(je,{name:2},{default:t(()=>[e(O,null,{default:t(()=>[e(B,null,{default:t(()=>[f(u(n(a)("embedding.vector_database_integration2")),1)]),_:1})]),_:1}),e(q,{class:"row"},{default:t(()=>[(p(!0),A($,null,K(n(ra),(l,S)=>(p(),y(O,{key:S,class:"col-6 col-md-4 col-lg-3 col-xl-2 q-pa-sm"},{default:t(()=>[re((p(),y(te,{bordered:"",flat:"",class:"q-hoverable cursor-pointer full-width",square:"",onClick:P=>n(Ie)(l.homepage)},{default:t(()=>[va,e(q,{class:"column items-center non-selectable q-py-lg"},{default:t(()=>[l.icon?(p(),y(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:l.icon},null,8,["src"])):L("",!0)]),_:2},1024),e(q,{class:"text-center non-selectable"},{default:t(()=>[f(u(l.label),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[me]])]),_:2},1024))),128))]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(_e,{class:"non-selectable lock-blur",showing:T.value},null,8,["showing"])]),_:1}),e(bt,{modelValue:xe.value,"onUpdate:modelValue":i[10]||(i[10]=l=>xe.value=l),onShow:st,onHide:lt},{default:t(()=>[e(te,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(q,{class:"row items-center q-pb-none"},{default:t(()=>[e(Z,{name:"history",size:"md",class:"q-mr-md"}),_("div",ha,u(n(c).screen.lt.sm?"":n(a)("embedding.usage_history")),1),e(ge),re(e(V,{icon:"close",flat:"",round:"",dense:""},null,512),[[Te]])]),_:1}),e(q,null,{default:t(()=>[e(n(zt),{ref_key:"usageTableRef",ref:$e,flat:"","row-key":"createdAt",rows:Se.value,columns:ot.value,loading:Ce.value,"hide-pagination":!0,onRequest:rt},{"body-cell-icon":t(l=>[e(Ne,{key:"icon",props:l},{default:t(()=>[l.row.amount>0?(p(),y(Z,{key:0,name:"o_add_circle_outline",color:"primary"})):(p(),y(Z,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(l=>[e(Ne,{key:"amount",props:l},{default:t(()=>[f(u((l.row.amount>0?"+":"")+x(l.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var ba="/assets/paper_1.8ed04d7d.png",ya="/assets/paper_2.59e1399a.png";const _a=_("span",{class:"q-focus-helper"},null,-1),wa={class:"q-mb-xl"},an=ue({__name:"ResearchersComponent",setup(o){ve({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:ba,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:ya,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(c,g)=>(p(),A($,null,K(a,(r,v)=>re(e(te,{key:v,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[_a,e(Dt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(q,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(O,{href:r.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e(B,null,{default:t(()=>[_("div",wa,[e(ie,{label:r.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),r.conference?(p(),y(ie,{key:0,label:r.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(p(),y(ie,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(ge),e(Q,{class:"text-h6 q-mb-lg"},{default:t(()=>[f(u(r.title),1)]),_:2},1024),e(Q,{caption:"",lines:"3"},{default:t(()=>[f(u(r.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(ce,{src:r.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[me]])),64))}});function ka(o){const a=b(null);return pe(()=>{a.value&&a.value(),a.value=o()}),_t(()=>{var c;(c=a.value)==null||c.call(a)}),{watchStopHandle:a}}const qa=ue({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(o,{emit:a}){const c=a,g=o;let r=b(""),v=0,h=null;const T=()=>{v=0,h&&(clearInterval(h),h=null)},ae=()=>{h=window.setInterval(()=>{v<g.text.length?(r.value+=g.text[v],v++):(clearInterval(h),h=null,c("done"))},g.speedTime)};return ka(()=>Ye(g.text,I=>{if(r.value.length===I.length){T();return}!h&&v<I.length&&ae()},{immediate:!0})),(I,z)=>{const U=Ge("q-markdown");return p(),y(U,{src:n(r),"no-line-numbers":""},null,8,["src"])}}});const xa={key:"result",class:"row justify-center q-mb-xl"},Ca={class:"text-caption text-grey"},Sa={class:"text-caption text-grey"},nn=ue({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(o){const{t:a}=ve({useScope:"global"}),c=Fe(),g=b(!1),r=o;function v([w,N]){return Array.from({length:N-w+1},(x,ne)=>w+ne)}function h(w){return w[Math.floor(Math.random()*w.length)]}const T=E(()=>{const w=v([1,12]).map(N=>a(`impact_snapshots.project${N}`));return`${a("landing_page.how_to")} ${h(w).slice(0,-1).toLowerCase()}?`}),ae=E(()=>{const w=v([1,12]).map(N=>a(`embedding.faqs.question${N}`));return`${h(w).slice(0,-1).toLowerCase()}?`}),I=b(""),z=b(!1),U=b(null),d=b([]),k=async()=>{var ne,le,he;if(!await((ne=U.value)==null?void 0:ne.validate()))return Promise.reject();const w=I.value,N={parameters:{question:w}},x={query:w,stream:!0};z.value=!0,d.value=[];try{const M=await fetch(j(),{headers:{"content-type":"application/json"},body:JSON.stringify(r.isFAQ?x:N),method:"POST"});if(!M.ok)throw new Error(`HTTP error! status: ${M.status}`);if((le=M.headers.get("content-type"))!=null&&le.includes("text/event-stream")){if(M.body){const W=M.body.getReader(),ke=new TextDecoder;for(;;){const{done:qe,value:be}=await W.read();if(qe)break;be&&(z.value=!1,ke.decode(be).split(`

`).forEach(F=>{const Y=F.replace(/data: /g,"");Y&&d.value.push(Y)}))}}}else if((he=M.headers.get("content-type"))!=null&&he.includes("application/json")){const W=(await M.json()).data;d.value=[W]}else throw new Error("Unknown response type")}catch(M){c.notify({color:"negative",message:a("landing_page.error",{message:M}),icon:"report_problem"})}finally{z.value=!1}};function m(){return We(d.value.join("")).then(()=>{c.notify({message:a("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const D=E(()=>wt.value.filter(w=>d.value.join("").toLowerCase().includes(w.label.toLowerCase().replace("landing_page.",""))));function j(){return r.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${g.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(w,N)=>(p(),A($,null,[e(Mt,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Je(k,["prevent","stop"])},{default:t(()=>[e(n(Pe),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:n(a)("landing_page.ask_how_your_question"),placeholder:o.isFAQ?ae.value:T.value,modelValue:I.value,"onUpdate:modelValue":N[0]||(N[0]=x=>I.value=x),clearable:"",ref_key:"questionRef",ref:U,loading:z.value,disable:z.value,rules:[x=>!!x&&x.length>5||n(a)("landing_page.require_full_question")]},{prepend:t(()=>[e(Z,{name:"img:/J.svg"})]),append:t(()=>[e(V,{flat:"",icon:"send",type:"submit",onClick:k})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1}),d.value.length||z.value?(p(),A("div",xa,[e(te,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[z.value?(p(),y(q,{key:0},{default:t(()=>[e(Z,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),_("span",Ca,u(o.isFAQ?n(a)("landing_page.finding_faq"):n(a)("landing_page.proposing_solution")),1),(p(),A($,null,K([0,1,2,3,4],x=>e(Kt,{key:x,class:"q-my-xs",width:x>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(p(),A($,{key:1},[D.value.length>0&&!o.isFAQ?(p(),y(q,{key:0},{default:t(()=>[_("span",Sa,u(n(a)("landing_page.mentioned_products")),1),(p(!0),A($,null,K(D.value,x=>(p(),y(ie,{size:"sm",key:x,label:n(a)(x.label),icon:x.icon?`img:${x.icon}`:"widgets",onClick:ne=>n(Ie)(x.link),clickable:""},{default:t(()=>[e(ee,null,{default:t(()=>[f(u(n(a)(x.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):L("",!0),e(fe),e(q,{class:"q-pa-xl"},{default:t(()=>[e(qa,{text:d.value},null,8,["text"])]),_:1}),e(fe),e(Ze,{align:"right"},{default:t(()=>[e(Ot,{square:""},{default:t(()=>[e(V,{square:"","no-caps":"",icon:"content_copy",onClick:m,label:n(a)("landing_page.copy")},null,8,["label"]),e(V,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:n(a)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):L("",!0)],64))}});var Aa="/assets/pattern-developers.4f94c0e3.svg";const Ta={class:"row"},ja={class:"row items-center justify-start text-h2 text-white",style:{"text-decoration":"none !important"}},Qa={class:"row text-grey-5 q-py-lg"},Pa={class:"col-12 col-md-8"},Ba={class:"row text-grey-5 q-py-lg relative-position"},Ia={class:"col-12 col-md-8"},sn=ue({__name:"LabeledPanel",props:{title:{},description:{},products:{},isCardDark:{type:Boolean},hideBackground:{type:Boolean},hideTitle:{type:Boolean}},emits:["click-tag","click-card"],setup(o,{emit:a}){const{t:c}=ve({useScope:"global"}),g=o,r=a,v=E(()=>{const d=new Set;return g.products.forEach(k=>{k.tags.forEach(m=>d.add(m))}),Array.from(d)}),h=b([]),T=E(()=>g.products.map((d,k)=>{var m;return{...d,order:(m=d.order)!=null?m:k}}).filter(d=>h.value.length===0?!0:h.value.some(k=>d.tags.includes(k))).sort((d,k)=>d.order-k.order)),ae=d=>{r("click-tag",d),!h.value.includes(d)&&h.value.push(d)},I=d=>{h.value=h.value.filter(k=>k!==d)},z=b(!1),U=d=>{r("click-card",d.label),Ie(d.homepage)};return(d,k)=>(p(),A("div",Ta,[d.hideTitle?L("",!0):(p(),A("div",{key:0,class:R(["col-12 col-md-5 column justify-start",d.$q.screen.lt.md?"items-center":"items-start"])},[_("a",ja,u(d.title),1),_("div",Qa,[_("div",Pa,u(d.description),1)]),_("div",Ba,[_("div",Ia,[(p(!0),A($,null,K(v.value,m=>(p(),y(ie,{key:m,label:n(c)(`project_status.${m}`),size:"md",outline:"",square:"",clickable:"",removable:h.value.includes(m),icon:n(De)[m],color:"grey-3",class:"no-border-radius non-selectable cursor-pointer",onClick:D=>ae(m),onRemove:D=>I(m)},null,8,["label","removable","icon","onClick","onRemove"]))),128))]),d.hideBackground?L("",!0):(p(),y(ce,{key:0,src:Aa,class:"absolute",style:{width:"50vw",top:"50%",left:"-50%","z-index":"-1"},fit:"fill"}))])],2)),_("div",{class:R(["col-12 col-md-7 row",d.$q.screen.lt.md?"justify-center":"justify-start"])},[(p(!0),A($,null,K(T.value,(m,D)=>(p(),A("div",{key:D,class:R(["q-pa-xs",{"col-6":d.$q.screen.gt.md&&m.tags.includes("core")||d.$q.screen.lt.md&&!m.tags.includes("core"),"col-8":d.$q.screen.md&&m.tags.includes("core"),"col-12":d.$q.screen.lt.md&&m.tags.includes("core"),"col-3":d.$q.screen.gt.md&&!m.tags.includes("core"),"col-4":d.$q.screen.md&&!m.tags.includes("core")}]),style:{maxHeight:"260px"}},[e(te,{flat:"",square:"",class:R(["q-px-sm q-py-lg text-white full-height relative-position cursor-pointer overflow-hidden non-selectable",d.isCardDark?"bg-dark":"bg-dark-page"]),onMouseenter:j=>z.value=D,onMouseleave:k[0]||(k[0]=j=>z.value=!1),onClick:j=>U(m)},{default:t(()=>[e(kt,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:t(()=>[re(_("div",{class:"absolute-full",style:we({backgroundImage:Math.random()>.5?`linear-gradient(
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
                      )`,zIndex:10})},[e(q,{class:"row items-center q-gutter-sm text-no-wrap no-wrap"},{default:t(()=>[m.icon?(p(),y(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):L("",!0),_("div",{class:R(m.label.length>10?"text-body":"text-h6")},u(m.label),3)]),_:2},1024),e(q,{class:"text-white"},{default:t(()=>[m.star?(p(),y(ie,{key:0,label:m.star+" "+n(c)("github.stars"),icon:"fab fa-github",size:"xs",outline:"",square:"",color:"grey-3",class:"no-border-radius"},null,8,["label"])):L("",!0),(p(!0),A($,null,K(m.tags,j=>(p(),y(ie,{label:n(c)(`project_status.${j}`),size:"xs",outline:"",square:"",icon:n(De)[j],color:"grey-3",key:j,class:"no-border-radius"},null,8,["label","icon"]))),128))]),_:2},1024),e(Ze,{align:"right"},{default:t(()=>[e(V,{flat:"",round:"",color:"white",icon:"arrow_right_alt"})]),_:1})],4),[[qt,z.value===D]])]),_:2},1024),e(q,{class:"row justify-center"},{default:t(()=>[m.icon?(p(),y(ce,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):L("",!0)]),_:2},1024),e(q,{class:R(["row justify-center text-no-wrap text-weight-light q-pa-none",m.label.length>10?"text-body":"text-h6"])},{default:t(()=>[f(u(m.label),1)]),_:2},1032,["class"]),m.caption?(p(),y(q,{key:0,class:"text-caption q-px-xs text-center"},{default:t(()=>[f(u(m.caption),1)]),_:2},1024)):L("",!0)]),_:2},1032,["class","onMouseenter","onClick"])],2))),128))],2)]))}});export{en as N,Kt as Q,nn as _,Et as a,je as b,tn as c,an as d,sn as e,ra as v};
