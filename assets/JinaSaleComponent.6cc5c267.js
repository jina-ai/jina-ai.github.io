import{Q as Ee}from"./QImg.283a5bca.js";import{e as me,h as Y,a6 as be,a7 as S,a8 as t,ay as ne,bI as lt,a9 as f,aa as e,bk as Q,ad as z,ae as $,ag as m,ah as c,ai as o,bn as rt,bo as it,az as w,k as Qe,R as Le,S as De,i as He,D as Me,C as Ke,$ as ut,P as Te,aH as ct,bG as dt,bH as pt,u as Ve,am as mt,f as g,K as ue,w as Ne,ao as Oe,ab as P,bJ as ft,bK as gt,bL as Pe,aT as _t,ak as U,j as B,ac as oe,ap as pe,aB as J,bz as Ce,aj as M,af as re,Z as ce,bv as Je,ba as ve,bM as vt,a5 as ht,bN as bt,bB as yt,bt as wt}from"./index.949652b6.js";import{Q as b}from"./QItemLabel.50a41018.js";import{_ as kt}from"./NewsBadge.66eb892d.js";import{A as qt,Q as _e}from"./blogs.bad83352.js";import{_ as $t}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as F}from"./QTooltip.1797d903.js";import{Q as Ct,a as St}from"./QTabs.c9e3ce74.js";import{Q as de}from"./QSpace.77103f0b.js";import{a as Se}from"./QSelect.b68ef397.js";import{Q as je}from"./QList.e9be5481.js";import{Q as Ie}from"./QBtnDropdown.28ea4371.js";import{u as xt,b as Tt,c as Pt,d as Qt}from"./QCarousel.ed96f404.js";import{Q as At}from"./QToolbar.4b0db45c.js";import{Q as Rt,a as Be,b as jt}from"./QTable.eb32ad9a.js";import{C as xe}from"./ClosePopup.c00c3bff.js";import{c as Fe}from"./copy-to-clipboard.e05a9782.js";import{Q as he}from"./QChip.3b0a5f13.js";import{Q as It}from"./QForm.5674eda0.js";import{Q as Bt}from"./QBtnGroup.fe5bd342.js";const zt=n=>(rt("data-v-4867f981"),n=n(),it(),n),Ut=zt(()=>w("span",{class:"q-focus-helper"},null,-1)),Et=me({__name:"NewsroomCard",props:{info:{}},setup(n){const a=n,s=Y(()=>lt(a.info.publishedAt).format("MMMM DD, YYYY")),{t:d}=be({useScope:"global"}),i=p=>{window.open(p)};return(p,k)=>(f(),S(ne,{flat:"",square:"",onClick:k[0]||(k[0]=y=>i(`/news/${p.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[Ut,e(Q,{class:"q-pa-none"},{default:t(()=>[e(Ee,{src:p.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(Q,{style:{height:"250px"}},{default:t(()=>[e(z,null,{default:t(()=>[e(kt,{news:p.info},null,8,["news"])]),_:1}),e(z,null,{default:t(()=>[e($,{class:"text-h6 text-weight-light"},{default:t(()=>[e(b,{lines:"2"},{default:t(()=>[m(c(p.info.title),1)]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e($,null,{default:t(()=>[e(b,{lines:"3",caption:""},{default:t(()=>[m(c(p.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e(qt,{authors:p.info.authors},null,8,["authors"]),e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(p.info.authors.map(y=>y.name).join(", ")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(s.value)+" \u2022 "+c(p.info.readingTime)+" "+c(o(d)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Qa=$t(Et,[["__scopeId","data-v-4867f981"]]);const Lt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Dt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Ht=Qe({name:"QSkeleton",props:{...Le,tag:{type:String,default:"div"},type:{type:String,validator:n=>Lt.includes(n),default:"rect"},animation:{type:String,validator:n=>Dt.includes(n),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(n,{slots:a}){const s=Ke(),d=De(n,s.proxy.$q),i=Y(()=>{const k=n.size!==void 0?[n.size,n.size]:[n.width,n.height];return{"--q-skeleton-speed":`${n.animationSpeed}ms`,width:k[0],height:k[1]}}),p=Y(()=>`q-skeleton q-skeleton--${d.value===!0?"dark":"light"} q-skeleton--type-${n.type}`+(n.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${n.animation}`:"")+(n.square===!0?" q-skeleton--square":"")+(n.bordered===!0?" q-skeleton--bordered":""));return()=>He(n.tag,{class:p.value,style:i.value},Me(a.default))}}),ze=Qe({name:"QTabPanel",props:xt,setup(n,{slots:a}){return()=>He("div",{class:"q-tab-panel",role:"tabpanel"},Me(a.default))}}),Mt=Qe({name:"QTabPanels",props:{...Tt,...Le},emits:Pt,setup(n,{slots:a}){const s=Ke(),d=De(n,s.proxy.$q),{updatePanelsList:i,getPanelContent:p,panelDirectives:k}=Qt(),y=Y(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(a),ut("div",{class:y.value},p(),"pan",n.swipeable,()=>k.value))}});function Kt(n){const a=Object.assign({noopener:!0},n),s=[];for(const d in a){const i=a[d];i===!0?s.push(d):(dt(i)||typeof i=="string"&&i!=="")&&s.push(d+"="+i)}return s.join(",")}function Ue(n,a,s){let d=window.open;if(Te.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)d=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(n,{openExternal:!0})}const i=d(n,"_blank",Kt(s));if(i)return Te.is.desktop&&i.focus(),i;a&&a()}var Vt=(n,a,s)=>{if(Te.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(d=>{d?window.SafariViewController.show({url:n},ct,a):Ue(n,a,s)});return}return Ue(n,a,s)};const le="https://embeddings-dashboard-api.jina.ai";var Ye=(n=>(n.CONSUME="consume",n.PURCHASE="purchase",n.TRIAL="trial",n))(Ye||{});const Nt=pt("embedding",{state:()=>({apiKey:"",models:[],products:[]}),persist:{paths:["apiKey"]},getters:{},actions:{async getApiKey(){try{const n=await fetch(`${le}/api/v1/api_key`,{method:"POST"});if(!n.ok)throw new Error(`getApiKey error! Status: ${n.status}`);const a=await n.json();return this.apiKey=a.api_key,!0}catch(n){return console.error("getApiKey error:",n),!1}},async getTokens(n){try{const a=await fetch(`${le}/api/v1/api_key/user?api_key=${n}`);if(!a.ok)throw new Error(`getTokens error! Status: ${a.status}`);return(await a.json()).wallet.total_balance}catch(a){console.error("getTokens error:",a)}},async getModels(){try{const n=await fetch(`${le}/api/v1/models`);if(!n.ok)throw new Error(`getModels error! Status: ${n.status}`);const a=await n.json();this.models=a}catch(n){console.error("getModels error:",n)}},async getProducts(){try{const n=await fetch(`${le}/api/v1/product`);if(!n.ok)throw new Error(`getProducts error! Status: ${n.status}`);const a=await n.json();this.products=a}catch(n){console.error("getProducts error:",n)}},async getUsage(n){try{const a=await fetch(`${le}/api/v1/billing/transaction`,{headers:{Authorization:`Bearer ${n}`}});if(!a.ok)throw new Error(`getUsage error! Status: ${a.status}`);return await a.json()}catch(a){console.error("getUsage error:",a)}},async checkoutWithStripe(n,a){try{const s=await fetch(`${le}/api/v1/checkout_session`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a),mode:"cors",credentials:"include"});if(!s.ok)throw new Error(`checkoutWithStripe error! Status: ${s.status}`);return await s.json()}catch(s){console.error("checkoutWithStripe error:",s)}}}}),Ot={class:"full-width"},Jt={class:"row q-mb-md q-pa-none"},Ft={class:"full-width ellipsis q-pl-md"},Yt={class:"self-center full-width no-outline",tabindex:"0"},Wt={class:"self-center full-width no-outline",tabindex:"0"},Xt={class:"self-center full-width no-outline",tabindex:"0"},Zt={class:"full-width ellipsis q-pl-md"},Gt=w("span",{class:"q-focus-helper"},null,-1),ea={class:"text-h6"};var We=(n=>(n.CURL="curl",n.PYTHON="Python",n.JAVASCRIPT="JavaScript",n.RUBY="Ruby",n.PHP="PHP",n.JAVA="Java",n.NODEJS="Node.js",n.GO="Go",n.C_SHARP="C#",n.RUST="Rust",n))(We||{});const H="https://api.jina.ai/v1/embeddings",Aa=me({__name:"EmbeddingComponent",setup(n){const{t:a}=be({useScope:"global"}),s=Ve(),d=Nt(),{apiKey:i,models:p,products:k}=mt(d),y=g(!1),W=async l=>{if(N("event","embedding_refresh_api_key",{location:O.location.href,type:l}),y.value)return;y.value=!0,await d.getApiKey().finally(()=>{y.value=!1})?(T.value=i.value,_.value=!1):s.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};ue(()=>{navigator.userAgent.toLowerCase().includes("headless")||i.value||W("auto")});const E=g(!1),R=()=>{N("event","embedding_copy_api_key",{location:O.location.href}),!(!i.value||E.value)&&(Fe(i.value).then(()=>{s.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),E.value=!0}),setTimeout(()=>{E.value=!1},1800))},X=g(0),j=g(!1),K=g(!1),se=async l=>{j.value=!0,K.value=!1;const u=await d.getTokens(l);if(j.value=!1,u===void 0){K.value=!0;return}X.value=u,Z.value=X.value};ue(()=>{!i.value||se(i.value)}),Ne(i,l=>{!l||se(l)});const Z=g(0),I=g(!1),_=g(!1),x=async l=>{I.value=!0,_.value=!1;const u=await d.getTokens(l);if(I.value=!1,u===void 0){_.value=!0;return}Z.value=u,i.value=l},v=l=>new Intl.NumberFormat("en").format(l),G=[{name:0,label:"embedding.code",icon:"code",value:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"}],te=g(0),fe=l=>{N("event","embedding_change_tab",{location:O.location.href,tab:G[l].value}),l===1&&(T.value||(_.value=K.value,K.value||(T.value=i.value,Z.value=X.value)))},C=g(!1),V=g();ue(()=>{ye()});const ye=async()=>{C.value=!0,await d.getModels(),C.value=!1,p.value.length>0&&(V.value=p.value.find(l=>l.rank===1)||p.value[1])},we=l=>{N("event","embedding_choose_model",{location:O.location.href,model:l.name}),V.value=l},ge=l=>{N("event","embedding_view_model_detail",{location:O.location.href,model:l}),Vt(`https://huggingface.co/jinaai/${l}`,void 0,{})},Ae=l=>{N("event","embedding_choose_code_lang",{location:O.location.href,lang:l}),ie.value=l},ie=g("curl"),L=["Your text string goes here","You can send multiple texts"],D=`["${L[0]}", "${L[1]}"]`,Xe=Y(()=>{var h;const l=i.value||"$JINA_API_KEY",u=((h=V.value)==null?void 0:h.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${H} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${l}" \\
  -d '{
    "input": ${D},
    "model": "${u}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${H}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${l}'
}

data = {
  'input': ${D},
  'model': '${u}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${H}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${l}",
};

const data = {
  input: '${D}',
  model: '${u}',
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

uri = URI.parse("${H}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${l}'
}

data = {
  'input' => ${D},
  'model' => '${u}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${H}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${l}"
);

$data = array(
    "input" => array("${L[0]}", "${L[1]}"),
    "model" => "${u}"
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
        String url = "${H}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${l}");

        con.setDoOutput(true);
        String data = "{"input": ["${L[0]}", "${L[1]}"],"model": "${u}"}";

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

const url = "${H}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${l}',
  }
};

const data = {
  input: ${D},
  model: '${u}'
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
	url := "${H}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${l}",
	}

	data := \`{
		"input": ${D},
		"model": "${u}"
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
        string url = "${H}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${l}");

        string data = @"{
            ""input"": [""${L[0]}"", ""${L[1]}""],
            ""model"": ""${u}""
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

    let res = client.post("${H}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${l}")
        .body(r#"{
            "input": ${D},
            "model": "${u}"
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
    `}}),T=g(""),ee=Y(()=>!!T.value&&T.value.length===i.value.length&&!_.value),Ze=l=>{if(!(!l||typeof l=="number"||l.length!==i.value.length)){if(l===i.value){Z.value=X.value,_.value=K.value;return}x(l)}};ue(()=>{k.value.length||d.getProducts()});const ae=g(""),Ge=async l=>{if(!ee.value||I.value||ae.value)return;const u=window.location.href,h=u.includes("#")?u:u+"#enterprises";ae.value=l;const r={price_id:l,success_url:h,cancel_url:h},A=localStorage.getItem(vt);A&&(r.meta_data={sales_key:A});const q=await d.checkoutWithStripe(T.value,r);ae.value="",q&&(window.location.href=q.url)},ke=g(!1),et=()=>{!ee.value||I.value||(ke.value=!0)},tt=()=>{var l;(l=Re.value)==null||l.requestServerInteraction()},at=()=>{$e.value=[]},qe=g(!1),Re=g(null),$e=g([]),nt=g([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:l=>{if(typeof l=="string")return new Date(l).toLocaleString();if(l instanceof Date)return l.toLocaleString();if(l)return l.toDate().toLocaleString()}},{name:"amount",label:a("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:l=>l>0?`+${l}`:`${l}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),ot=async l=>{qe.value=!0;const u=await d.getUsage(T.value);qe.value=!1,!(!u||u.length===0)&&($e.value=u.map(h=>{const r=new Date(h.updated_at);let A=h.quantity,q=a(`embedding.usage_reason_${h.type}`);return h.type===Ye.CONSUME?(A=-A,h.metadata.model_name&&(q=q+": "+h.metadata.model_name)):(h.metadata.product_name&&(q=q+": "+h.metadata.product_name),h.metadata.order_quantity&&h.metadata.order_quantity>1&&(q=q+` (x ${h.metadata.order_quantity})`)),{createdAt:r,amount:A,reason:q}}),se(T.value))},N=window.gtag,O=window.document;return(l,u)=>{const h=Oe("q-markdown");return f(),P(U,null,[w("div",Ot,[e(Pe,{modelValue:o(i),"onUpdate:modelValue":u[1]||(u[1]=r=>gt(i)?i.value=r:null),label:o(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:y.value,disable:y.value,"input-style":"font-family: monospace;",hint:o(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},ft({prepend:t(()=>[e(B,{flat:"",round:"",icon:"refresh",onClick:u[0]||(u[0]=r=>W("manual"))},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[y.value?void 0:{name:"append",fn:t(()=>[e(B,{flat:"",round:"",icon:E.value?"done":"content_copy",color:E.value?"positive":"",onClick:R},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(ne,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(Ct,{modelValue:te.value,"onUpdate:modelValue":u[3]||(u[3]=r=>te.value=r),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(f(),P(U,null,oe(G,r=>e(St,{key:r.name,name:r.name,label:o(a)(r.label),icon:r.icon},null,8,["name","label","icon"])),64)),e(de),e(B,{stretch:"","no-wrap":"",label:o(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:o(s).screen.lt.sm?"12px":"md",onClick:u[2]||(u[2]=r=>o(N)("event","embedding_goto_faq",{location:o(O).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(pe),e(Mt,{modelValue:te.value,"onUpdate:modelValue":u[9]||(u[9]=r=>te.value=r),animated:"",onBeforeTransition:fe},{default:t(()=>[e(ze,{name:0},{default:t(()=>[w("div",Jt,[w("div",{class:J(["row",o(s).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(z,{class:J(o(s).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e($,{avatar:"",style:Ce(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(M,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e($,{class:J(o(s).screen.lt.sm?"items-center":"")},{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),K.value?re("",!0):(f(),S(b,{key:0},{default:t(()=>[m(c(v(X.value)),1)]),_:1}))]),_:1},8,["class"]),e(_e,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",onClick:u[4]||(u[4]=r=>se(o(i)))},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2),o(s).screen.lt.sm?re("",!0):(f(),S(de,{key:0})),w("div",{class:J(["row",o(s).screen.lt.sm?"col-12":""])},[e(Ie,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:C.value,"disable-dropdown":C.value,class:J(o(s).screen.lt.sm?"full-width q-py-md":""),onClick:u[5]||(u[5]=r=>o(N)("event","embedding_click_model_dropdown",{location:o(O).location.href}))},{label:t(()=>{var r;return[w("div",Ft,c((r=V.value)==null?void 0:r.name),1)]}),default:t(()=>[e(je,null,{default:t(()=>[(f(!0),P(U,null,oe(o(p),(r,A)=>{var q;return ce((f(),S(z,{key:A,clickable:"",active:r.name===((q=V.value)==null?void 0:q.name),onClick:st=>we(r),class:"q-pa-lg"},{default:t(()=>[e($,null,{default:t(()=>[e(b,{overline:"",caption:""},{default:t(()=>[m(c(r.name),1)]),_:2},1024),e(b,{class:"text-weight-bold"},{default:t(()=>[m(c(o(a)(`embedding.${r.name}_description`)),1)]),_:2},1024),e(b,{caption:"",class:"row"},{default:t(()=>[e(Se,{borderless:"",label:o(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Yt,c(o(a)(`embedding.${r.name}_length`)),1)]),_:2},1032,["label"]),e(Se,{borderless:"",label:o(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Wt,c(r.meta_data.size),1)]),_:2},1032,["label"]),e(Se,{borderless:"",label:o(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Xt,c(r.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(B,{flat:"",icon:"launch",onClick:Je(st=>ge(r.name),["stop"])},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[ve],[xe]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Ie,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:J(o(s).screen.lt.sm?"full-width q-py-md":""),onClick:u[6]||(u[6]=r=>o(N)("event","embedding_click_code_lang_dropdown",{location:o(O).location.href}))},{label:t(()=>[w("div",Zt,c(ie.value),1)]),default:t(()=>[e(je,null,{default:t(()=>[(f(),P(U,null,oe(We,(r,A)=>ce(e(z,{key:A,clickable:"",active:r===ie.value,"active-class":"text-primary bg-grey-10",onClick:q=>Ae(r)},{default:t(()=>[e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[ve],[xe]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(pe),e(h,{src:Xe.value[ie.value],"show-copy":"",class:J(["q-py-lg",o(s).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(a)("copy"),"copy-response-text":o(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(ze,{name:1},{default:t(()=>[e(Pe,{"input-style":"font-family: monospace",modelValue:T.value,"onUpdate:modelValue":[u[7]||(u[7]=r=>T.value=r),Ze],clearable:"",outlined:"",label:T.value?`${o(a)("embedding.key_to_top_up")}`:o(a)("embedding.key_enter_placeholder_to_topup"),error:!ee.value,"error-message":T.value?o(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),ee.value?(f(),P(U,{key:0},[e(At,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(z,{class:J(o(s).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e($,{avatar:"",style:Ce(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(M,{name:"help_outline",class:"cursor-pointer",size:o(s).screen.lt.sm?"xs":""},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e($,null,{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),_.value?re("",!0):(f(),S(b,{key:0},{default:t(()=>[m(c(v(Z.value)),1)]),_:1}))]),_:1}),e(_e,{showing:I.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",class:"q-ml-sm",disable:!ee.value||I.value,size:o(s).screen.lt.sm?"sm":"md",onClick:u[8]||(u[8]=r=>x(T.value))},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(de),e(B,{flat:"","no-caps":"",icon:"history",label:o(s).screen.lt.sm?"":o(a)("embedding.usage_history"),dense:o(s).screen.lt.sm,disable:!ee.value||I.value,onClick:et},null,8,["label","dense","disable"])]),_:1}),e(pe)],64)):re("",!0),e(ne,{flat:""},{default:t(()=>[e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e($,{avatar:"",side:""},{default:t(()=>[e(M,{name:"fab fa-stripe",size:"sm"}),e(M,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(o(a)("embedding.buy_more_quota")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(o(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(f(!0),P(U,null,oe(o(k),(r,A)=>(f(),P("div",{key:A,class:"col-12 col-md-6 col-lg-4"},[ce((f(),S(ne,{bordered:"",flat:"",class:J(["q-mr-md q-mb-md",ee.value&&!I.value&&!ae.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:Ce(ae.value===r.price_id?"cursor: wait !important;":""),onClick:q=>Ge(r.price_id)},{default:t(()=>[Gt,e(Q,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[m(c(o(a)(`embedding.${r.product_name.replace(".","_")}`)),1)]),_:2},1024),e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e($,null,{default:t(()=>[e(b,{class:"text-bold"},{default:t(()=>[m("$"+c(r.price),1)]),_:2},1024),e(b,{caption:""},{default:t(()=>[m("$"+c(Number((r.price/r.token_quantity*1e3).toFixed(6)))+" "+c(o(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(M,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(_e,{showing:ae.value===r.price_id,label:o(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[ve,ee.value&&!I.value&&!ae.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(_e,{class:"non-selectable lock-blur",showing:y.value},null,8,["showing"])]),_:1}),e(_t,{modelValue:ke.value,"onUpdate:modelValue":u[10]||(u[10]=r=>ke.value=r),onShow:tt,onHide:at},{default:t(()=>[e(ne,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(Q,{class:"row items-center q-pb-none"},{default:t(()=>[e(M,{name:"history",size:"md",class:"q-mr-md"}),w("div",ea,c(o(s).screen.lt.sm?"":o(a)("embedding.usage_history")),1),e(de),ce(e(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[xe]])]),_:1}),e(Q,null,{default:t(()=>[e(o(Rt),{ref_key:"usageTableRef",ref:Re,flat:"","row-key":"createdAt",rows:$e.value,columns:nt.value,loading:qe.value,"hide-pagination":!0,onRequest:ot},{"body-cell-icon":t(r=>[e(Be,{key:"icon",props:r},{default:t(()=>[r.row.amount>0?(f(),S(M,{key:0,name:"o_add_circle_outline",color:"primary"})):(f(),S(M,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(r=>[e(Be,{key:"amount",props:r},{default:t(()=>[m(c((r.row.amount>0?"+":"")+v(r.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var ta="/assets/paper_1.8ed04d7d.png",aa="/assets/paper_2.59e1399a.png";const na=w("span",{class:"q-focus-helper"},null,-1),oa={class:"q-mb-xl"},Ra=me({__name:"ResearchersComponent",setup(n){be({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:ta,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:aa,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(s,d)=>(f(),P(U,null,oe(a,(i,p)=>ce(e(ne,{key:p,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[na,e(jt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(Q,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(z,{href:i.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e($,null,{default:t(()=>[w("div",oa,[e(he,{label:i.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),i.conference?(f(),S(he,{key:0,label:i.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(f(),S(he,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(de),e(b,{class:"text-h6 q-mb-lg"},{default:t(()=>[m(c(i.title),1)]),_:2},1024),e(b,{caption:"",lines:"3"},{default:t(()=>[m(c(i.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(Ee,{src:i.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[ve]])),64))}});function sa(n){const a=g(null);return ue(()=>{a.value&&a.value(),a.value=n()}),ht(()=>{var s;(s=a.value)==null||s.call(a)}),{watchStopHandle:a}}const la=me({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(n,{emit:a}){const s=n;let d=g(""),i=0,p=null;const k=()=>{i=0,p&&(clearInterval(p),p=null)},y=()=>{p=window.setInterval(()=>{i<s.text.length?(d.value+=s.text[i],i++):(clearInterval(p),p=null,a("done"))},s.speedTime)};return sa(()=>Ne(s.text,W=>{if(d.value.length===W.length){k();return}!p&&i<W.length&&y()},{immediate:!0})),(W,E)=>{const R=Oe("q-markdown");return f(),S(R,{src:o(d),"no-line-numbers":""},null,8,["src"])}}});const ra={key:"result",class:"row justify-center q-mb-xl"},ia={class:"text-caption text-grey"},ua={class:"text-caption text-grey"},ja=me({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(n){const a=n,{t:s}=be({useScope:"global"}),d=Ve(),i=g(!1);function p([_,x]){return Array.from({length:x-_+1},(v,G)=>_+G)}function k(_){return _[Math.floor(Math.random()*_.length)]}const y=Y(()=>{const _=p([1,12]).map(x=>s(`impact_snapshots.project${x}`));return`${s("landing_page.how_to")} ${k(_).slice(0,-1).toLowerCase()}?`}),W=Y(()=>{const _=p([1,12]).map(x=>s(`embedding.faqs.question${x}`));return`${k(_).slice(0,-1).toLowerCase()}?`}),E=g(""),R=g(!1),X=g(null),j=g([]),K=async()=>{var G,te,fe;if(!await((G=X.value)==null?void 0:G.validate()))return Promise.reject();const _=E.value,x={parameters:{question:_}},v={query:_,stream:!0};R.value=!0,j.value=[];try{const C=await fetch(I(),{headers:{"content-type":"application/json"},body:JSON.stringify(a.isFAQ?v:x),method:"POST"});if(!C.ok)throw new Error(`HTTP error! status: ${C.status}`);if((te=C.headers.get("content-type"))!=null&&te.includes("text/event-stream")){if(C.body){const V=C.body.getReader(),ye=new TextDecoder;for(;;){const{done:we,value:ge}=await V.read();if(we)break;ge&&(R.value=!1,ye.decode(ge).split(`

`).forEach(L=>{const D=L.replace(/data: /g,"");D&&j.value.push(D)}))}}}else if((fe=C.headers.get("content-type"))!=null&&fe.includes("application/json")){const V=(await C.json()).data;j.value=[V]}else throw new Error("Unknown response type")}catch(C){d.notify({color:"negative",message:s("landing_page.error",{message:C}),icon:"report_problem"})}finally{R.value=!1}};function se(){return Fe(j.value.join("")).then(()=>{d.notify({message:s("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const Z=Y(()=>bt.value.filter(_=>j.value.join("").toLowerCase().includes(_.label.toLowerCase().replace("landing_page.",""))));function I(){return a.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${i.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(_,x)=>(f(),P(U,null,[e(It,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Je(K,["prevent","stop"])},{default:t(()=>[e(o(Pe),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:o(s)("landing_page.ask_how_your_question"),placeholder:n.isFAQ?W.value:y.value,modelValue:E.value,"onUpdate:modelValue":x[0]||(x[0]=v=>E.value=v),clearable:"",ref_key:"questionRef",ref:X,loading:R.value,disable:R.value,rules:[v=>!!v&&v.length>5||o(s)("landing_page.require_full_question")]},{prepend:t(()=>[e(M,{name:"img:/J.svg"})]),append:t(()=>[e(B,{flat:"",icon:"send",type:"submit",onClick:K})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1},8,["onSubmit"]),j.value.length||R.value?(f(),P("div",ra,[e(ne,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[R.value?(f(),S(Q,{key:0},{default:t(()=>[e(M,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(s)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),w("span",ia,c(n.isFAQ?o(s)("landing_page.finding_faq"):o(s)("landing_page.proposing_solution")),1),(f(),P(U,null,oe([0,1,2,3,4],v=>e(Ht,{key:v,class:"q-my-xs",width:v>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(f(),P(U,{key:1},[Z.value.length>0&&!n.isFAQ?(f(),S(Q,{key:0},{default:t(()=>[w("span",ua,c(o(s)("landing_page.mentioned_products")),1),(f(!0),P(U,null,oe(Z.value,v=>(f(),S(he,{size:"sm",key:v,label:o(s)(v.label),icon:v.icon?`img:${v.icon}`:"widgets",onClick:G=>o(yt)(v.link),clickable:""},{default:t(()=>[e(F,null,{default:t(()=>[m(c(o(s)(v.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):re("",!0),e(pe),e(Q,{class:"q-pa-xl"},{default:t(()=>[e(la,{text:j.value},null,8,["text"])]),_:1}),e(pe),e(wt,{align:"right"},{default:t(()=>[e(Bt,{square:""},{default:t(()=>[e(B,{square:"","no-caps":"",icon:"content_copy",onClick:se,label:o(s)("landing_page.copy")},null,8,["label"]),e(B,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:o(s)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):re("",!0)],64))}});export{Qa as N,Ht as Q,ja as _,Mt as a,ze as b,Aa as c,Ra as d};
