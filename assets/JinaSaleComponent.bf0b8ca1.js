import{Q as ze}from"./QImg.3a075290.js";import{e as de,h as J,a6 as ve,a7 as x,a8 as t,ay as te,bI as nt,a9 as f,aa as e,bk as Q,ad as z,ae as $,ag as m,ah as c,ai as o,bn as st,bo as ot,az as w,k as Pe,R as Ue,S as Ee,i as Le,D as De,C as He,$ as lt,P as Ce,aH as rt,bG as it,bH as ut,u as Me,am as ct,f as g,K as re,w as Ve,ao as Ke,ab as P,bJ as dt,bK as pt,bL as Te,aT as mt,ak as U,j as B,ac as ae,ap as ce,aB as N,bz as $e,aj as D,af as oe,Z as ie,bv as Ne,ba as _e,bM as ft,a5 as gt,bN as _t,bB as ht,bt as vt}from"./index.49c704de.js";import{Q as b}from"./QItemLabel.6c87f3dd.js";import{_ as bt}from"./NewsBadge.e43b4e01.js";import{A as yt,Q as ge}from"./blogs.7889a81a.js";import{_ as wt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as O}from"./QTooltip.bab725b3.js";import{Q as kt,a as qt}from"./QTabs.d626377d.js";import{Q as ue}from"./QSpace.642aeb10.js";import{a as Se}from"./QSelect.1edafdf3.js";import{Q as Ae}from"./QList.65f25736.js";import{Q as Re}from"./QBtnDropdown.c8925f03.js";import{u as $t,b as St,c as xt,d as Ct}from"./QCarousel.88d286a3.js";import{Q as Tt}from"./QToolbar.d414b578.js";import{Q as Pt,a as je,b as Qt}from"./QTable.325d6f3c.js";import{C as xe}from"./ClosePopup.8ab5505e.js";import{c as Oe}from"./copy-to-clipboard.9b170e80.js";import{Q as he}from"./QChip.863a6e6e.js";import{Q as At}from"./QForm.e37b25c4.js";import{Q as Rt}from"./QBtnGroup.94142779.js";const jt=n=>(st("data-v-4867f981"),n=n(),ot(),n),It=jt(()=>w("span",{class:"q-focus-helper"},null,-1)),Bt=de({__name:"NewsroomCard",props:{info:{}},setup(n){const a=n,s=J(()=>nt(a.info.publishedAt).format("MMMM DD, YYYY")),{t:d}=ve({useScope:"global"}),i=p=>{window.open(p)};return(p,k)=>(f(),x(te,{flat:"",square:"",onClick:k[0]||(k[0]=y=>i(`/news/${p.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[It,e(Q,{class:"q-pa-none"},{default:t(()=>[e(ze,{src:p.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(Q,{style:{height:"250px"}},{default:t(()=>[e(z,null,{default:t(()=>[e(bt,{news:p.info},null,8,["news"])]),_:1}),e(z,null,{default:t(()=>[e($,{class:"text-h6 text-weight-light"},{default:t(()=>[e(b,{lines:"2"},{default:t(()=>[m(c(p.info.title),1)]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e($,null,{default:t(()=>[e(b,{lines:"3",caption:""},{default:t(()=>[m(c(p.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e(yt,{authors:p.info.authors},null,8,["authors"]),e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(p.info.authors.map(y=>y.name).join(", ")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(s.value)+" \u2022 "+c(p.info.readingTime)+" "+c(o(d)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Ca=wt(Bt,[["__scopeId","data-v-4867f981"]]);const zt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Ut=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Et=Pe({name:"QSkeleton",props:{...Ue,tag:{type:String,default:"div"},type:{type:String,validator:n=>zt.includes(n),default:"rect"},animation:{type:String,validator:n=>Ut.includes(n),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(n,{slots:a}){const s=He(),d=Ee(n,s.proxy.$q),i=J(()=>{const k=n.size!==void 0?[n.size,n.size]:[n.width,n.height];return{"--q-skeleton-speed":`${n.animationSpeed}ms`,width:k[0],height:k[1]}}),p=J(()=>`q-skeleton q-skeleton--${d.value===!0?"dark":"light"} q-skeleton--type-${n.type}`+(n.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${n.animation}`:"")+(n.square===!0?" q-skeleton--square":"")+(n.bordered===!0?" q-skeleton--bordered":""));return()=>Le(n.tag,{class:p.value,style:i.value},De(a.default))}}),Ie=Pe({name:"QTabPanel",props:$t,setup(n,{slots:a}){return()=>Le("div",{class:"q-tab-panel",role:"tabpanel"},De(a.default))}}),Lt=Pe({name:"QTabPanels",props:{...St,...Ue},emits:xt,setup(n,{slots:a}){const s=He(),d=Ee(n,s.proxy.$q),{updatePanelsList:i,getPanelContent:p,panelDirectives:k}=Ct(),y=J(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(a),lt("div",{class:y.value},p(),"pan",n.swipeable,()=>k.value))}});function Dt(n){const a=Object.assign({noopener:!0},n),s=[];for(const d in a){const i=a[d];i===!0?s.push(d):(it(i)||typeof i=="string"&&i!=="")&&s.push(d+"="+i)}return s.join(",")}function Be(n,a,s){let d=window.open;if(Ce.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)d=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(n,{openExternal:!0})}const i=d(n,"_blank",Dt(s));if(i)return Ce.is.desktop&&i.focus(),i;a&&a()}var Ht=(n,a,s)=>{if(Ce.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(d=>{d?window.SafariViewController.show({url:n},rt,a):Be(n,a,s)});return}return Be(n,a,s)};const se="https://embeddings-dashboard-api.jina.ai";var Je=(n=>(n.CONSUME="consume",n.PURCHASE="purchase",n.TRIAL="trial",n))(Je||{});const Mt=ut("embedding",{state:()=>({apiKey:"",models:[],products:[]}),persist:{paths:["apiKey"]},getters:{},actions:{async getApiKey(){try{const n=await fetch(`${se}/api/v1/api_key`,{method:"POST"});if(!n.ok)throw new Error(`getApiKey error! Status: ${n.status}`);const a=await n.json();return this.apiKey=a.api_key,!0}catch(n){return console.error("getApiKey error:",n),!1}},async getTokens(n){try{const a=await fetch(`${se}/api/v1/api_key/user?api_key=${n}`);if(!a.ok)throw new Error(`getTokens error! Status: ${a.status}`);return(await a.json()).wallet.total_balance}catch(a){console.error("getTokens error:",a)}},async getModels(){try{const n=await fetch(`${se}/api/v1/models`);if(!n.ok)throw new Error(`getModels error! Status: ${n.status}`);const a=await n.json();this.models=a}catch(n){console.error("getModels error:",n)}},async getProducts(){try{const n=await fetch(`${se}/api/v1/product`);if(!n.ok)throw new Error(`getProducts error! Status: ${n.status}`);const a=await n.json();this.products=a}catch(n){console.error("getProducts error:",n)}},async getUsage(n){try{const a=await fetch(`${se}/api/v1/billing/transaction`,{headers:{Authorization:`Bearer ${n}`}});if(!a.ok)throw new Error(`getUsage error! Status: ${a.status}`);return await a.json()}catch(a){console.error("getUsage error:",a)}},async checkoutWithStripe(n,a){try{const s=await fetch(`${se}/api/v1/checkout_session`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a),mode:"cors",credentials:"include"});if(!s.ok)throw new Error(`checkoutWithStripe error! Status: ${s.status}`);return await s.json()}catch(s){console.error("checkoutWithStripe error:",s)}}}}),Vt={class:"full-width"},Kt={class:"row q-mb-md q-pa-none"},Nt={class:"full-width ellipsis q-pl-md"},Ot={class:"self-center full-width no-outline",tabindex:"0"},Jt={class:"self-center full-width no-outline",tabindex:"0"},Ft={class:"self-center full-width no-outline",tabindex:"0"},Yt={class:"full-width ellipsis q-pl-md"},Wt=w("span",{class:"q-focus-helper"},null,-1),Xt={class:"text-h6"};var Fe=(n=>(n.CURL="curl",n.PYTHON="Python",n.JAVASCRIPT="JavaScript",n.RUBY="Ruby",n.PHP="PHP",n.JAVA="Java",n.NODEJS="Node.js",n.GO="Go",n.C_SHARP="C#",n.RUST="Rust",n))(Fe||{});const L="https://api.jina.ai/v1/embeddings",Ta=de({__name:"EmbeddingComponent",setup(n){const{t:a}=ve({useScope:"global"}),s=Me(),d=Mt(),{apiKey:i,models:p,products:k}=ct(d),y=g(!1),F=async()=>{if(y.value)return;y.value=!0,await d.getApiKey().finally(()=>{y.value=!1})?(T.value=i.value,_.value=!1):s.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};re(()=>{navigator.userAgent.toLowerCase().includes("headless")||i.value||F()});const E=g(!1),R=()=>{!i.value||E.value||(Oe(i.value).then(()=>{s.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),E.value=!0}),setTimeout(()=>{E.value=!1},1800))},Y=g(0),j=g(!1),H=g(!1),ne=async l=>{j.value=!0,H.value=!1;const u=await d.getTokens(l);if(j.value=!1,u===void 0){H.value=!0;return}Y.value=u,W.value=Y.value};re(()=>{!i.value||ne(i.value)}),Ve(i,l=>{!l||ne(l)});const W=g(0),I=g(!1),_=g(!1),C=async l=>{I.value=!0,_.value=!1;const u=await d.getTokens(l);if(I.value=!1,u===void 0){_.value=!0;return}W.value=u,i.value=l},h=l=>new Intl.NumberFormat("en").format(l),Z=[{name:0,label:"embedding.code",icon:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart"}],G=g(0),pe=l=>{l===1&&(T.value||(_.value=H.value,H.value||(T.value=i.value,W.value=Y.value)))},S=g(!1),M=g();re(()=>{be()});const be=async()=>{S.value=!0,await d.getModels(),S.value=!1,p.value.length>0&&(M.value=p.value.find(l=>l.rank===1)||p.value[1])},ye=l=>{M.value=l},me=l=>{Ht(`https://huggingface.co/jinaai/${l}`,void 0,{})},le=g("curl"),V=["Your text string goes here","You can send multiple texts"],K=`["${V[0]}", "${V[1]}"]`,fe=J(()=>{var v;const l=i.value||"$JINA_API_KEY",u=((v=M.value)==null?void 0:v.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${L} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${l}" \\
  -d '{
    "input": ${K},
    "model": "${u}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${L}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${l}'
}

data = {
  'input': ${K},
  'model': '${u}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${L}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${l}",
};

const data = {
  input: '${K}',
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

uri = URI.parse("${L}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${l}'
}

data = {
  'input' => ${K},
  'model' => '${u}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${L}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${l}"
);

$data = array(
    "input" => array("${V[0]}", "${V[1]}"),
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
        String url = "${L}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${l}");

        con.setDoOutput(true);
        String data = "{"input": ["${V[0]}", "${V[1]}"],"model": "${u}"}";

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

const url = "${L}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${l}',
  }
};

const data = {
  input: ${K},
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
	url := "${L}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${l}",
	}

	data := \`{
		"input": ${K},
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
        string url = "${L}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${l}");

        string data = @"{
            ""input"": [""${V[0]}"", ""${V[1]}""],
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

    let res = client.post("${L}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${l}")
        .body(r#"{
            "input": ${K},
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
    `}}),T=g(""),X=J(()=>!!T.value&&T.value.length===i.value.length&&!_.value),Ye=l=>{if(!(!l||typeof l=="number"||l.length!==i.value.length)){if(l===i.value){W.value=Y.value,_.value=H.value;return}C(l)}};re(()=>{k.value.length||d.getProducts()});const ee=g(""),We=async l=>{if(!X.value||I.value||ee.value)return;const u=window.location.href,v=u.includes("#")?u:u+"#enterprises";ee.value=l;const r={price_id:l,success_url:v,cancel_url:v},A=localStorage.getItem(ft);A&&(r.meta_data={sales_key:A});const q=await d.checkoutWithStripe(T.value,r);ee.value="",q&&(window.location.href=q.url)},we=g(!1),Xe=()=>{!X.value||I.value||(we.value=!0)},Ze=()=>{var l;(l=Qe.value)==null||l.requestServerInteraction()},Ge=()=>{qe.value=[]},ke=g(!1),Qe=g(null),qe=g([]),et=g([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:l=>{if(typeof l=="string")return new Date(l).toLocaleString();if(l instanceof Date)return l.toLocaleString();if(l)return l.toDate().toLocaleString()}},{name:"amount",label:a("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:l=>l>0?`+${l}`:`${l}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),tt=async l=>{ke.value=!0;const u=await d.getUsage(T.value);ke.value=!1,!(!u||u.length===0)&&(qe.value=u.map(v=>{const r=new Date(v.updated_at);let A=v.quantity,q=a(`embedding.usage_reason_${v.type}`);return v.type===Je.CONSUME?(A=-A,v.metadata.model_name&&(q=q+": "+v.metadata.model_name)):(v.metadata.product_name&&(q=q+": "+v.metadata.product_name),v.metadata.order_quantity&&v.metadata.order_quantity>1&&(q=q+` (x ${v.metadata.order_quantity})`)),{createdAt:r,amount:A,reason:q}}),ne(T.value))};return(l,u)=>{const v=Ke("q-markdown");return f(),P(U,null,[w("div",Vt,[e(Te,{modelValue:o(i),"onUpdate:modelValue":u[0]||(u[0]=r=>pt(i)?i.value=r:null),label:o(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:y.value,disable:y.value,"input-style":"font-family: monospace;",hint:o(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},dt({prepend:t(()=>[e(B,{flat:"",round:"",icon:"refresh",onClick:F},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[y.value?void 0:{name:"append",fn:t(()=>[e(B,{flat:"",round:"",icon:E.value?"done":"content_copy",color:E.value?"positive":"",onClick:R},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(te,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(kt,{modelValue:G.value,"onUpdate:modelValue":u[1]||(u[1]=r=>G.value=r),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(f(),P(U,null,ae(Z,r=>e(qt,{key:r.name,name:r.name,label:o(a)(r.label),icon:r.icon},null,8,["name","label","icon"])),64)),e(ue),e(B,{stretch:"","no-wrap":"",label:o(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:o(s).screen.lt.sm?"12px":"md"},null,8,["label","size"])]),_:1},8,["modelValue"]),e(ce),e(Lt,{modelValue:G.value,"onUpdate:modelValue":u[5]||(u[5]=r=>G.value=r),animated:"",onBeforeTransition:pe},{default:t(()=>[e(Ie,{name:0},{default:t(()=>[w("div",Kt,[w("div",{class:N(["row",o(s).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(z,{class:N(o(s).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e($,{avatar:"",style:$e(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(D,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e($,{class:N(o(s).screen.lt.sm?"items-center":"")},{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),H.value?oe("",!0):(f(),x(b,{key:0},{default:t(()=>[m(c(h(Y.value)),1)]),_:1}))]),_:1},8,["class"]),e(ge,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",onClick:u[2]||(u[2]=r=>ne(o(i)))},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count")),1)]),_:1})]),_:1})],2),o(s).screen.lt.sm?oe("",!0):(f(),x(ue,{key:0})),w("div",{class:N(["row",o(s).screen.lt.sm?"col-12":""])},[e(Re,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:S.value,"disable-dropdown":S.value,class:N(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:t(()=>{var r;return[w("div",Nt,c((r=M.value)==null?void 0:r.name),1)]}),default:t(()=>[e(Ae,null,{default:t(()=>[(f(!0),P(U,null,ae(o(p),(r,A)=>{var q;return ie((f(),x(z,{key:A,clickable:"",active:r.name===((q=M.value)==null?void 0:q.name),onClick:at=>ye(r),class:"q-pa-lg"},{default:t(()=>[e($,null,{default:t(()=>[e(b,{overline:"",caption:""},{default:t(()=>[m(c(r.name),1)]),_:2},1024),e(b,{class:"text-weight-bold"},{default:t(()=>[m(c(o(a)(`embedding.${r.name}_description`)),1)]),_:2},1024),e(b,{caption:"",class:"row"},{default:t(()=>[e(Se,{borderless:"",label:o(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Ot,c(o(a)(`embedding.${r.name}_length`)),1)]),_:2},1032,["label"]),e(Se,{borderless:"",label:o(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Jt,c(r.meta_data.size),1)]),_:2},1032,["label"]),e(Se,{borderless:"",label:o(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Ft,c(r.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(B,{flat:"",icon:"launch",onClick:Ne(at=>me(r.name),["stop"])},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[_e],[xe]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Re,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:N(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:t(()=>[w("div",Yt,c(le.value),1)]),default:t(()=>[e(Ae,null,{default:t(()=>[(f(),P(U,null,ae(Fe,(r,A)=>ie(e(z,{key:A,clickable:"",active:r===le.value,"active-class":"text-primary bg-grey-10",onClick:q=>le.value=r},{default:t(()=>[e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[_e],[xe]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(ce),e(v,{src:fe.value[le.value],"show-copy":"",class:N(["q-py-lg",o(s).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(a)("copy"),"copy-response-text":o(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Ie,{name:1},{default:t(()=>[e(Te,{"input-style":"font-family: monospace",modelValue:T.value,"onUpdate:modelValue":[u[3]||(u[3]=r=>T.value=r),Ye],clearable:"",outlined:"",label:T.value?`${o(a)("embedding.key_to_top_up")}`:o(a)("embedding.key_enter_placeholder_to_topup"),error:!X.value,"error-message":T.value?o(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),X.value?(f(),P(U,{key:0},[e(Tt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(z,{class:N(o(s).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e($,{avatar:"",style:$e(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(D,{name:"help_outline",class:"cursor-pointer",size:o(s).screen.lt.sm?"xs":""},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e($,null,{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),_.value?oe("",!0):(f(),x(b,{key:0},{default:t(()=>[m(c(h(W.value)),1)]),_:1}))]),_:1}),e(ge,{showing:I.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",class:"q-ml-sm",disable:!X.value||I.value,size:o(s).screen.lt.sm?"sm":"md",onClick:u[4]||(u[4]=r=>C(T.value))},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count")),1)]),_:1})]),_:1},8,["disable","size"]),e(ue),e(B,{flat:"","no-caps":"",icon:"history",label:o(s).screen.lt.sm?"":o(a)("embedding.usage_history"),dense:o(s).screen.lt.sm,disable:!X.value||I.value,onClick:Xe},null,8,["label","dense","disable"])]),_:1}),e(ce)],64)):oe("",!0),e(te,{flat:""},{default:t(()=>[e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e($,{avatar:"",side:""},{default:t(()=>[e(D,{name:"fab fa-stripe",size:"sm"}),e(D,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e($,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(o(a)("embedding.buy_more_quota")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(o(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(Q,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(f(!0),P(U,null,ae(o(k),(r,A)=>(f(),P("div",{key:A,class:"col-12 col-md-6 col-lg-4"},[ie((f(),x(te,{bordered:"",flat:"",class:N(["q-mr-md q-mb-md",X.value&&!I.value&&!ee.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:$e(ee.value===r.price_id?"cursor: wait !important;":""),onClick:q=>We(r.price_id)},{default:t(()=>[Wt,e(Q,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[m(c(o(a)(`embedding.${r.product_name.replace(".","_")}`)),1)]),_:2},1024),e(Q,null,{default:t(()=>[e(z,null,{default:t(()=>[e($,null,{default:t(()=>[e(b,{class:"text-bold"},{default:t(()=>[m("$"+c(r.price),1)]),_:2},1024),e(b,{caption:""},{default:t(()=>[m("$"+c(Number((r.price/r.token_quantity*1e3).toFixed(6)))+" "+c(o(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e($,{side:""},{default:t(()=>[e(D,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(ge,{showing:ee.value===r.price_id,label:o(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[_e,X.value&&!I.value&&!ee.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(ge,{class:"non-selectable lock-blur",showing:y.value},null,8,["showing"])]),_:1}),e(mt,{modelValue:we.value,"onUpdate:modelValue":u[6]||(u[6]=r=>we.value=r),onShow:Ze,onHide:Ge},{default:t(()=>[e(te,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(Q,{class:"row items-center q-pb-none"},{default:t(()=>[e(D,{name:"history",size:"md",class:"q-mr-md"}),w("div",Xt,c(o(s).screen.lt.sm?"":o(a)("embedding.usage_history")),1),e(ue),ie(e(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[xe]])]),_:1}),e(Q,null,{default:t(()=>[e(o(Pt),{ref_key:"usageTableRef",ref:Qe,flat:"","row-key":"createdAt",rows:qe.value,columns:et.value,loading:ke.value,"hide-pagination":!0,onRequest:tt},{"body-cell-icon":t(r=>[e(je,{key:"icon",props:r},{default:t(()=>[r.row.amount>0?(f(),x(D,{key:0,name:"o_add_circle_outline",color:"primary"})):(f(),x(D,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(r=>[e(je,{key:"amount",props:r},{default:t(()=>[m(c((r.row.amount>0?"+":"")+h(r.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var Zt="/assets/paper_1.8ed04d7d.png",Gt="/assets/paper_2.59e1399a.png";const ea=w("span",{class:"q-focus-helper"},null,-1),ta={class:"q-mb-xl"},Pa=de({__name:"ResearchersComponent",setup(n){ve({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:Zt,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:Gt,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(s,d)=>(f(),P(U,null,ae(a,(i,p)=>ie(e(te,{key:p,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[ea,e(Qt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(Q,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(z,{href:i.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e($,null,{default:t(()=>[w("div",ta,[e(he,{label:i.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),i.conference?(f(),x(he,{key:0,label:i.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(f(),x(he,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(ue),e(b,{class:"text-h6 q-mb-lg"},{default:t(()=>[m(c(i.title),1)]),_:2},1024),e(b,{caption:"",lines:"3"},{default:t(()=>[m(c(i.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(ze,{src:i.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[_e]])),64))}});function aa(n){const a=g(null);return re(()=>{a.value&&a.value(),a.value=n()}),gt(()=>{var s;(s=a.value)==null||s.call(a)}),{watchStopHandle:a}}const na=de({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(n,{emit:a}){const s=n;let d=g(""),i=0,p=null;const k=()=>{i=0,p&&(clearInterval(p),p=null)},y=()=>{p=window.setInterval(()=>{i<s.text.length?(d.value+=s.text[i],i++):(clearInterval(p),p=null,a("done"))},s.speedTime)};return aa(()=>Ve(s.text,F=>{if(d.value.length===F.length){k();return}!p&&i<F.length&&y()},{immediate:!0})),(F,E)=>{const R=Ke("q-markdown");return f(),x(R,{src:o(d),"no-line-numbers":""},null,8,["src"])}}});const sa={key:"result",class:"row justify-center q-mb-xl"},oa={class:"text-caption text-grey"},la={class:"text-caption text-grey"},Qa=de({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(n){const a=n,{t:s}=ve({useScope:"global"}),d=Me(),i=g(!1);function p([_,C]){return Array.from({length:C-_+1},(h,Z)=>_+Z)}function k(_){return _[Math.floor(Math.random()*_.length)]}const y=J(()=>{const _=p([1,12]).map(C=>s(`impact_snapshots.project${C}`));return`${s("landing_page.how_to")} ${k(_).slice(0,-1).toLowerCase()}?`}),F=J(()=>{const _=p([1,12]).map(C=>s(`embedding.faqs.question${C}`));return`${k(_).slice(0,-1).toLowerCase()}?`}),E=g(""),R=g(!1),Y=g(null),j=g([]),H=async()=>{var Z,G,pe;if(!await((Z=Y.value)==null?void 0:Z.validate()))return Promise.reject();const _=E.value,C={parameters:{question:_}},h={query:_,stream:!0};R.value=!0,j.value=[];try{const S=await fetch(I(),{headers:{"content-type":"application/json"},body:JSON.stringify(a.isFAQ?h:C),method:"POST"});if(!S.ok)throw new Error(`HTTP error! status: ${S.status}`);if((G=S.headers.get("content-type"))!=null&&G.includes("text/event-stream")){if(S.body){const M=S.body.getReader(),be=new TextDecoder;for(;;){const{done:ye,value:me}=await M.read();if(ye)break;me&&(R.value=!1,be.decode(me).split(`

`).forEach(K=>{const fe=K.replace(/data: /g,"");fe&&j.value.push(fe)}))}}}else if((pe=S.headers.get("content-type"))!=null&&pe.includes("application/json")){const M=(await S.json()).data;j.value=[M]}else throw new Error("Unknown response type")}catch(S){d.notify({color:"negative",message:s("landing_page.error",{message:S}),icon:"report_problem"})}finally{R.value=!1}};function ne(){return Oe(j.value.join("")).then(()=>{d.notify({message:s("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const W=J(()=>_t.value.filter(_=>j.value.join("").toLowerCase().includes(_.label.toLowerCase().replace("landing_page.",""))));function I(){return a.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${i.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(_,C)=>(f(),P(U,null,[e(At,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Ne(H,["prevent","stop"])},{default:t(()=>[e(o(Te),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:o(s)("landing_page.ask_how_your_question"),placeholder:n.isFAQ?F.value:y.value,modelValue:E.value,"onUpdate:modelValue":C[0]||(C[0]=h=>E.value=h),clearable:"",ref_key:"questionRef",ref:Y,loading:R.value,disable:R.value,rules:[h=>!!h&&h.length>5||o(s)("landing_page.require_full_question")]},{prepend:t(()=>[e(D,{name:"img:/J.svg"})]),append:t(()=>[e(B,{flat:"",icon:"send",type:"submit",onClick:H})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1},8,["onSubmit"]),j.value.length||R.value?(f(),P("div",sa,[e(te,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[R.value?(f(),x(Q,{key:0},{default:t(()=>[e(D,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(s)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),w("span",oa,c(n.isFAQ?o(s)("landing_page.finding_faq"):o(s)("landing_page.proposing_solution")),1),(f(),P(U,null,ae([0,1,2,3,4],h=>e(Et,{key:h,class:"q-my-xs",width:h>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(f(),P(U,{key:1},[W.value.length>0&&!n.isFAQ?(f(),x(Q,{key:0},{default:t(()=>[w("span",la,c(o(s)("landing_page.mentioned_products")),1),(f(!0),P(U,null,ae(W.value,h=>(f(),x(he,{size:"sm",key:h,label:o(s)(h.label),icon:h.icon?`img:${h.icon}`:"widgets",onClick:Z=>o(ht)(h.link),clickable:""},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(s)(h.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):oe("",!0),e(ce),e(Q,{class:"q-pa-xl"},{default:t(()=>[e(na,{text:j.value},null,8,["text"])]),_:1}),e(ce),e(vt,{align:"right"},{default:t(()=>[e(Rt,{square:""},{default:t(()=>[e(B,{square:"","no-caps":"",icon:"content_copy",onClick:ne,label:o(s)("landing_page.copy")},null,8,["label"]),e(B,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:o(s)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):oe("",!0)],64))}});export{Ca as N,Et as Q,Qa as _,Lt as a,Ie as b,Ta as c,Pa as d};
