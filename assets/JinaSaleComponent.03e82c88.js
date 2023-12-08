import{Q as Ue}from"./QImg.de746562.js";import{e as de,h as J,a6 as ve,a7 as x,a8 as t,ar as te,bp as nt,a9 as f,aa as e,bb as P,ad as B,ae as q,ag as m,ah as c,ai as o,bc as st,bd as ot,as as w,k as Pe,R as ze,S as Ee,i as Le,D as De,C as Ve,$ as lt,P as Ce,ay as rt,bn as it,bo as ut,u as Me,am as ct,f as g,K as re,w as He,ao as Ke,ab as T,bq as dt,br as pt,bs as Te,aK as mt,ak as U,j as I,ac as ae,ap as ce,at as N,bi as $e,aj as L,af as oe,Z as ie,bg as Ne,b1 as _e,a5 as ft,bf as gt}from"./index.aa6b9a9c.js";import{Q as b}from"./QItemLabel.c58536a0.js";import{_ as _t}from"./NewsBadge.bb60c892.js";import{A as ht,Q as ge}from"./blogs.da90100b.js";import{_ as vt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as O}from"./QTooltip.7b2c1798.js";import{Q as bt,a as yt}from"./QTabs.fc1e7e94.js";import{Q as ue}from"./QSpace.bcf623c1.js";import{a as xe}from"./QSelect.89410a7d.js";import{Q as Ae}from"./QList.fa834a49.js";import{Q as Re}from"./QBtnDropdown.6d18a1db.js";import{u as wt,b as kt,c as qt,d as $t}from"./QCarousel.084607fb.js";import{Q as xt}from"./QToolbar.257b503f.js";import{Q as St,a as je,b as Ct}from"./QTable.3dc6b96b.js";import{C as Se}from"./ClosePopup.7a46b0cf.js";import{c as Oe}from"./copy-to-clipboard.b83de015.js";import{Q as he}from"./QChip.10dfb440.js";import{Q as Tt}from"./QForm.6ddfd732.js";import{Q as Pt}from"./QBtnGroup.ae488fbe.js";import{m as Qt,r as At}from"./common.cbf70eda.js";const Rt=n=>(st("data-v-4867f981"),n=n(),ot(),n),jt=Rt(()=>w("span",{class:"q-focus-helper"},null,-1)),It=de({__name:"NewsroomCard",props:{info:{}},setup(n){const a=n,s=J(()=>nt(a.info.publishedAt).format("MMMM DD, YYYY")),{t:d}=ve({useScope:"global"}),i=p=>{window.open(p)};return(p,k)=>(f(),x(te,{flat:"",square:"",onClick:k[0]||(k[0]=y=>i(`/news/${p.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[jt,e(P,{class:"q-pa-none"},{default:t(()=>[e(Ue,{src:p.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(P,{style:{height:"250px"}},{default:t(()=>[e(B,null,{default:t(()=>[e(_t,{news:p.info},null,8,["news"])]),_:1}),e(B,null,{default:t(()=>[e(q,{class:"text-h6 text-weight-light"},{default:t(()=>[e(b,{lines:"2"},{default:t(()=>[m(c(p.info.title),1)]),_:1})]),_:1})]),_:1}),e(B,null,{default:t(()=>[e(q,null,{default:t(()=>[e(b,{lines:"3",caption:""},{default:t(()=>[m(c(p.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(B,null,{default:t(()=>[e(ht,{authors:p.info.authors},null,8,["authors"]),e(q,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(p.info.authors.map(y=>y.name).join(", ")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(s.value)+" \u2022 "+c(p.info.readingTime)+" "+c(o(d)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Ca=vt(It,[["__scopeId","data-v-4867f981"]]);const Bt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Ut=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var zt=Pe({name:"QSkeleton",props:{...ze,tag:{type:String,default:"div"},type:{type:String,validator:n=>Bt.includes(n),default:"rect"},animation:{type:String,validator:n=>Ut.includes(n),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(n,{slots:a}){const s=Ve(),d=Ee(n,s.proxy.$q),i=J(()=>{const k=n.size!==void 0?[n.size,n.size]:[n.width,n.height];return{"--q-skeleton-speed":`${n.animationSpeed}ms`,width:k[0],height:k[1]}}),p=J(()=>`q-skeleton q-skeleton--${d.value===!0?"dark":"light"} q-skeleton--type-${n.type}`+(n.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${n.animation}`:"")+(n.square===!0?" q-skeleton--square":"")+(n.bordered===!0?" q-skeleton--bordered":""));return()=>Le(n.tag,{class:p.value,style:i.value},De(a.default))}}),Ie=Pe({name:"QTabPanel",props:wt,setup(n,{slots:a}){return()=>Le("div",{class:"q-tab-panel",role:"tabpanel"},De(a.default))}}),Et=Pe({name:"QTabPanels",props:{...kt,...ze},emits:qt,setup(n,{slots:a}){const s=Ve(),d=Ee(n,s.proxy.$q),{updatePanelsList:i,getPanelContent:p,panelDirectives:k}=$t(),y=J(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(a),lt("div",{class:y.value},p(),"pan",n.swipeable,()=>k.value))}});function Lt(n){const a=Object.assign({noopener:!0},n),s=[];for(const d in a){const i=a[d];i===!0?s.push(d):(it(i)||typeof i=="string"&&i!=="")&&s.push(d+"="+i)}return s.join(",")}function Be(n,a,s){let d=window.open;if(Ce.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)d=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(n,{openExternal:!0})}const i=d(n,"_blank",Lt(s));if(i)return Ce.is.desktop&&i.focus(),i;a&&a()}var Dt=(n,a,s)=>{if(Ce.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(d=>{d?window.SafariViewController.show({url:n},rt,a):Be(n,a,s)});return}return Be(n,a,s)};const se="https://embeddings-dashboard-api.jina.ai";var Je=(n=>(n.CONSUME="consume",n.PURCHASE="purchase",n.TRIAL="trial",n))(Je||{});const Vt=ut("embedding",{state:()=>({apiKey:"",models:[],products:[]}),persist:{paths:["apiKey"]},getters:{},actions:{async getApiKey(){try{const n=await fetch(`${se}/api/v1/api_key`,{method:"POST"});if(!n.ok)throw new Error(`getApiKey error! Status: ${n.status}`);const a=await n.json();return this.apiKey=a.api_key,!0}catch(n){return console.error("getApiKey error:",n),!1}},async getTokens(n){try{const a=await fetch(`${se}/api/v1/api_key/user?api_key=${n}`);if(!a.ok)throw new Error(`getTokens error! Status: ${a.status}`);return(await a.json()).wallet.total_balance}catch(a){console.error("getTokens error:",a)}},async getModels(){try{const n=await fetch(`${se}/api/v1/models`);if(!n.ok)throw new Error(`getModels error! Status: ${n.status}`);const a=await n.json();this.models=a}catch(n){console.error("getModels error:",n)}},async getProducts(){try{const n=await fetch(`${se}/api/v1/product`);if(!n.ok)throw new Error(`getProducts error! Status: ${n.status}`);const a=await n.json();this.products=a}catch(n){console.error("getProducts error:",n)}},async getUsage(n){try{const a=await fetch(`${se}/api/v1/billing/transaction`,{headers:{Authorization:`Bearer ${n}`}});if(!a.ok)throw new Error(`getUsage error! Status: ${a.status}`);return await a.json()}catch(a){console.error("getUsage error:",a)}},async checkoutWithStripe(n,a){try{const s=await fetch(`${se}/api/v1/checkout_session`,{headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(a),mode:"cors",credentials:"include"});if(!s.ok)throw new Error(`checkoutWithStripe error! Status: ${s.status}`);return await s.json()}catch(s){console.error("checkoutWithStripe error:",s)}}}}),Mt={class:"full-width"},Ht={class:"row q-mb-md q-pa-none"},Kt={class:"full-width ellipsis q-pl-md"},Nt={class:"self-center full-width no-outline",tabindex:"0"},Ot={class:"self-center full-width no-outline",tabindex:"0"},Jt={class:"self-center full-width no-outline",tabindex:"0"},Ft={class:"full-width ellipsis q-pl-md"},Yt=w("span",{class:"q-focus-helper"},null,-1),Wt={class:"text-h6"};var Fe=(n=>(n.CURL="curl",n.PYTHON="Python",n.JAVASCRIPT="JavaScript",n.RUBY="Ruby",n.PHP="PHP",n.JAVA="Java",n.NODEJS="Node.js",n.GO="Go",n.C_SHARP="C#",n.RUST="Rust",n))(Fe||{});const E="https://api.jina.ai/v1/embeddings",Ta=de({__name:"EmbeddingComponent",setup(n){const{t:a}=ve({useScope:"global"}),s=Me(),d=Vt(),{apiKey:i,models:p,products:k}=ct(d),y=g(!1),F=async()=>{if(y.value)return;y.value=!0,await d.getApiKey().finally(()=>{y.value=!1})?(C.value=i.value,_.value=!1):s.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};re(()=>{navigator.userAgent.toLowerCase().includes("headless")||i.value||F()});const z=g(!1),A=()=>{!i.value||z.value||(Oe(i.value).then(()=>{s.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),z.value=!0}),setTimeout(()=>{z.value=!1},1800))},Y=g(0),R=g(!1),D=g(!1),ne=async l=>{R.value=!0,D.value=!1;const u=await d.getTokens(l);if(R.value=!1,u===void 0){D.value=!0;return}Y.value=u,W.value=Y.value};re(()=>{!i.value||ne(i.value)}),He(i,l=>{!l||ne(l)});const W=g(0),j=g(!1),_=g(!1),S=async l=>{j.value=!0,_.value=!1;const u=await d.getTokens(l);if(j.value=!1,u===void 0){_.value=!0;return}W.value=u,i.value=l},h=l=>new Intl.NumberFormat("en").format(l),Z=[{name:0,label:"embedding.code",icon:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart"}],G=g(0),pe=l=>{l===1&&(C.value||(_.value=D.value,D.value||(C.value=i.value,W.value=Y.value)))},$=g(!1),V=g();re(()=>{be()});const be=async()=>{$.value=!0,await d.getModels(),$.value=!1,p.value.length>0&&(V.value=p.value.find(l=>l.rank===1)||p.value[1])},ye=l=>{V.value=l},me=l=>{Dt(`https://huggingface.co/jinaai/${l}`,void 0,{})},le=g("curl"),M=["Your text string goes here","You can send multiple texts"],H=`["${M[0]}", "${M[1]}"]`,fe=J(()=>{var v;const l=i.value||"$JINA_API_KEY",u=((v=V.value)==null?void 0:v.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${E} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${l}" \\
  -d '{
    "input": ${H},
    "model": "${u}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${E}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${l}'
}

data = {
  'input': ${H},
  'model': '${u}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${E}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${l}",
};

const data = {
  input: '${H}',
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

uri = URI.parse("${E}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${l}'
}

data = {
  'input' => ${H},
  'model' => '${u}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${E}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${l}"
);

$data = array(
    "input" => array("${M[0]}", "${M[1]}"),
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
        String url = "${E}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${l}");

        con.setDoOutput(true);
        String data = "{"input": ["${M[0]}", "${M[1]}"],"model": "${u}"}";

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

const url = "${E}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${l}',
  }
};

const data = {
  input: ${H},
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
	url := "${E}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${l}",
	}

	data := \`{
		"input": ${H},
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
        string url = "${E}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${l}");

        string data = @"{
            ""input"": [""${M[0]}"", ""${M[1]}""],
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

    let res = client.post("${E}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${l}")
        .body(r#"{
            "input": ${H},
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
    `}}),C=g(""),X=J(()=>!!C.value&&C.value.length===i.value.length&&!_.value),Ye=l=>{if(!(!l||typeof l=="number"||l.length!==i.value.length)){if(l===i.value){W.value=Y.value,_.value=D.value;return}S(l)}};re(()=>{k.value.length||d.getProducts()});const ee=g(""),We=async l=>{if(!X.value||j.value||ee.value)return;const u=window.location.href,v=u.includes("#")?u:u+"#enterprises";ee.value=l;const r=await d.checkoutWithStripe(C.value,{price_id:l,success_url:v,cancel_url:v});ee.value="",r&&(window.location.href=r.url)},we=g(!1),Xe=()=>{!X.value||j.value||(we.value=!0)},Ze=()=>{var l;(l=Qe.value)==null||l.requestServerInteraction()},Ge=()=>{qe.value=[]},ke=g(!1),Qe=g(null),qe=g([]),et=g([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:l=>{if(typeof l=="string")return new Date(l).toLocaleString();if(l instanceof Date)return l.toLocaleString();if(l)return l.toDate().toLocaleString()}},{name:"amount",label:a("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:l=>l>0?`+${l}`:`${l}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),tt=async l=>{ke.value=!0;const u=await d.getUsage(C.value);ke.value=!1,!(!u||u.length===0)&&(qe.value=u.map(v=>{const r=new Date(v.updated_at);let K=v.quantity,Q=a(`embedding.usage_reason_${v.type}`);return v.type===Je.CONSUME?(K=-K,v.metadata.model_name&&(Q=Q+": "+v.metadata.model_name)):(v.metadata.product_name&&(Q=Q+": "+v.metadata.product_name),v.metadata.order_quantity&&v.metadata.order_quantity>1&&(Q=Q+` (x ${v.metadata.order_quantity})`)),{createdAt:r,amount:K,reason:Q}}),ne(C.value))};return(l,u)=>{const v=Ke("q-markdown");return f(),T(U,null,[w("div",Mt,[e(Te,{modelValue:o(i),"onUpdate:modelValue":u[0]||(u[0]=r=>pt(i)?i.value=r:null),label:o(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:y.value,disable:y.value,"input-style":"font-family: monospace;",hint:o(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},dt({prepend:t(()=>[e(I,{flat:"",round:"",icon:"refresh",onClick:F},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[y.value?void 0:{name:"append",fn:t(()=>[e(I,{flat:"",round:"",icon:z.value?"done":"content_copy",color:z.value?"positive":"",onClick:A},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(te,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(bt,{modelValue:G.value,"onUpdate:modelValue":u[1]||(u[1]=r=>G.value=r),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(f(),T(U,null,ae(Z,r=>e(yt,{key:r.name,name:r.name,label:o(a)(r.label),icon:r.icon},null,8,["name","label","icon"])),64)),e(ue),e(I,{stretch:"","no-wrap":"",label:o(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:o(s).screen.lt.sm?"12px":"md"},null,8,["label","size"])]),_:1},8,["modelValue"]),e(ce),e(Et,{modelValue:G.value,"onUpdate:modelValue":u[5]||(u[5]=r=>G.value=r),animated:"",onBeforeTransition:pe},{default:t(()=>[e(Ie,{name:0},{default:t(()=>[w("div",Ht,[w("div",{class:N(["row",o(s).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(B,{class:N(o(s).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e(q,{avatar:"",style:$e(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(L,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(q,{class:N(o(s).screen.lt.sm?"items-center":"")},{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),D.value?oe("",!0):(f(),x(b,{key:0},{default:t(()=>[m(c(h(Y.value)),1)]),_:1}))]),_:1},8,["class"]),e(ge,{showing:R.value},null,8,["showing"])]),_:1},8,["class"]),e(I,{flat:"",icon:"sync",onClick:u[2]||(u[2]=r=>ne(o(i)))},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count")),1)]),_:1})]),_:1})],2),o(s).screen.lt.sm?oe("",!0):(f(),x(ue,{key:0})),w("div",{class:N(["row",o(s).screen.lt.sm?"col-12":""])},[e(Re,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:$.value,"disable-dropdown":$.value,class:N(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:t(()=>{var r;return[w("div",Kt,c((r=V.value)==null?void 0:r.name),1)]}),default:t(()=>[e(Ae,null,{default:t(()=>[(f(!0),T(U,null,ae(o(p),(r,K)=>{var Q;return ie((f(),x(B,{key:K,clickable:"",active:r.name===((Q=V.value)==null?void 0:Q.name),onClick:at=>ye(r),class:"q-pa-lg"},{default:t(()=>[e(q,null,{default:t(()=>[e(b,{overline:"",caption:""},{default:t(()=>[m(c(r.name),1)]),_:2},1024),e(b,{class:"text-weight-bold"},{default:t(()=>[m(c(o(a)(`embedding.${r.name}_description`)),1)]),_:2},1024),e(b,{caption:"",class:"row"},{default:t(()=>[e(xe,{borderless:"",label:o(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Nt,c(o(a)(`embedding.${r.name}_length`)),1)]),_:2},1032,["label"]),e(xe,{borderless:"",label:o(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Ot,c(r.meta_data.size),1)]),_:2},1032,["label"]),e(xe,{borderless:"",label:o(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[w("div",Jt,c(r.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(q,{side:""},{default:t(()=>[e(I,{flat:"",icon:"launch",onClick:Ne(at=>me(r.name),["stop"])},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[_e],[Se]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Re,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:N(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:t(()=>[w("div",Ft,c(le.value),1)]),default:t(()=>[e(Ae,null,{default:t(()=>[(f(),T(U,null,ae(Fe,(r,K)=>ie(e(B,{key:K,clickable:"",active:r===le.value,"active-class":"text-primary bg-grey-10",onClick:Q=>le.value=r},{default:t(()=>[e(q,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[_e],[Se]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(ce),e(v,{src:fe.value[le.value],"show-copy":"",class:N(["q-py-lg",o(s).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(a)("copy"),"copy-response-text":o(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Ie,{name:1},{default:t(()=>[e(Te,{"input-style":"font-family: monospace",modelValue:C.value,"onUpdate:modelValue":[u[3]||(u[3]=r=>C.value=r),Ye],clearable:"",outlined:"",label:C.value?`${o(a)("embedding.key_to_top_up")}`:o(a)("embedding.key_enter_placeholder_to_topup"),error:!X.value,"error-message":C.value?o(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),X.value?(f(),T(U,{key:0},[e(xt,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(B,{class:N(o(s).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e(q,{avatar:"",style:$e(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(L,{name:"help_outline",class:"cursor-pointer",size:o(s).screen.lt.sm?"xs":""},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(q,null,{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(c(o(a)("embedding.remaining")),1)]),_:1}),_.value?oe("",!0):(f(),x(b,{key:0},{default:t(()=>[m(c(h(W.value)),1)]),_:1}))]),_:1}),e(ge,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),e(I,{flat:"",icon:"sync",class:"q-ml-sm",disable:!X.value||j.value,size:o(s).screen.lt.sm?"sm":"md",onClick:u[4]||(u[4]=r=>S(C.value))},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(a)("embedding.refresh_token_count")),1)]),_:1})]),_:1},8,["disable","size"]),e(ue),e(I,{flat:"","no-caps":"",icon:"history",label:o(s).screen.lt.sm?"":o(a)("embedding.usage_history"),dense:o(s).screen.lt.sm,disable:!X.value||j.value,onClick:Xe},null,8,["label","dense","disable"])]),_:1}),e(ce)],64)):oe("",!0),e(te,{flat:""},{default:t(()=>[e(P,null,{default:t(()=>[e(B,null,{default:t(()=>[e(q,{avatar:"",side:""},{default:t(()=>[e(L,{name:"fab fa-stripe",size:"sm"}),e(L,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(q,null,{default:t(()=>[e(b,null,{default:t(()=>[m(c(o(a)("embedding.buy_more_quota")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(c(o(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(f(!0),T(U,null,ae(o(k),(r,K)=>(f(),T("div",{key:K,class:"col-12 col-md-6 col-lg-4"},[ie((f(),x(te,{bordered:"",flat:"",class:N(["q-mr-md q-mb-md",X.value&&!j.value&&!ee.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:$e(ee.value===r.price_id?"cursor: wait !important;":""),onClick:Q=>We(r.price_id)},{default:t(()=>[Yt,e(P,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[m(c(o(a)(`embedding.${r.product_name.replace(".","_")}`)),1)]),_:2},1024),e(P,null,{default:t(()=>[e(B,null,{default:t(()=>[e(q,null,{default:t(()=>[e(b,{class:"text-bold"},{default:t(()=>[m("$"+c(r.price),1)]),_:2},1024),e(b,{caption:""},{default:t(()=>[m("$"+c(Number((r.price/r.token_quantity*1e3).toFixed(6)))+" "+c(o(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(q,{side:""},{default:t(()=>[e(L,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(ge,{showing:ee.value===r.price_id,label:o(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[_e,X.value&&!j.value&&!ee.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(ge,{class:"non-selectable lock-blur",showing:y.value},null,8,["showing"])]),_:1}),e(mt,{modelValue:we.value,"onUpdate:modelValue":u[6]||(u[6]=r=>we.value=r),onShow:Ze,onHide:Ge},{default:t(()=>[e(te,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(P,{class:"row items-center q-pb-none"},{default:t(()=>[e(L,{name:"history",size:"md",class:"q-mr-md"}),w("div",Wt,c(o(s).screen.lt.sm?"":o(a)("embedding.usage_history")),1),e(ue),ie(e(I,{icon:"close",flat:"",round:"",dense:""},null,512),[[Se]])]),_:1}),e(P,null,{default:t(()=>[e(o(St),{ref_key:"usageTableRef",ref:Qe,flat:"","row-key":"createdAt",rows:qe.value,columns:et.value,loading:ke.value,"hide-pagination":!0,onRequest:tt},{"body-cell-icon":t(r=>[e(je,{key:"icon",props:r},{default:t(()=>[r.row.amount>0?(f(),x(L,{key:0,name:"o_add_circle_outline",color:"primary"})):(f(),x(L,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(r=>[e(je,{key:"amount",props:r},{default:t(()=>[m(c((r.row.amount>0?"+":"")+h(r.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var Xt="/assets/paper_1.8ed04d7d.png",Zt="/assets/paper_2.59e1399a.png";const Gt=w("span",{class:"q-focus-helper"},null,-1),ea={class:"q-mb-xl"},Pa=de({__name:"ResearchersComponent",setup(n){ve({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:Xt,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:Zt,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(s,d)=>(f(),T(U,null,ae(a,(i,p)=>ie(e(te,{key:p,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[Gt,e(Ct,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(P,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(B,{href:i.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e(q,null,{default:t(()=>[w("div",ea,[e(he,{label:i.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),i.conference?(f(),x(he,{key:0,label:i.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(f(),x(he,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(ue),e(b,{class:"text-h6 q-mb-lg"},{default:t(()=>[m(c(i.title),1)]),_:2},1024),e(b,{caption:"",lines:"3"},{default:t(()=>[m(c(i.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(Ue,{src:i.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[_e]])),64))}});function ta(n){const a=g(null);return re(()=>{a.value&&a.value(),a.value=n()}),ft(()=>{var s;(s=a.value)==null||s.call(a)}),{watchStopHandle:a}}const aa=de({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(n,{emit:a}){const s=n;let d=g(""),i=0,p=null;const k=()=>{i=0,p&&(clearInterval(p),p=null)},y=()=>{p=window.setInterval(()=>{i<s.text.length?(d.value+=s.text[i],i++):(clearInterval(p),p=null,a("done"))},s.speedTime)};return ta(()=>He(s.text,F=>{if(d.value.length===F.length){k();return}!p&&i<F.length&&y()},{immediate:!0})),(F,z)=>{const A=Ke("q-markdown");return f(),x(A,{src:o(d),"no-line-numbers":""},null,8,["src"])}}});const na={key:"result",class:"row justify-center q-mb-xl"},sa={class:"text-caption text-grey"},oa={class:"text-caption text-grey"},Qa=de({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(n){const a=n,{t:s}=ve({useScope:"global"}),d=Me(),i=g(!1);function p([_,S]){return Array.from({length:S-_+1},(h,Z)=>_+Z)}function k(_){return _[Math.floor(Math.random()*_.length)]}const y=J(()=>{const _=p([1,12]).map(S=>s(`impact_snapshots.project${S}`));return`${s("landing_page.how_to")} ${k(_).slice(0,-1).toLowerCase()}?`}),F=J(()=>{const _=p([1,12]).map(S=>s(`embedding.faqs.question${S}`));return`${k(_).slice(0,-1).toLowerCase()}?`}),z=g(""),A=g(!1),Y=g(null),R=g([]),D=async()=>{var Z,G,pe;if(!await((Z=Y.value)==null?void 0:Z.validate()))return Promise.reject();const _=z.value,S={parameters:{question:_}},h={query:_,stream:!0};A.value=!0,R.value=[];try{const $=await fetch(j(),{headers:{"content-type":"application/json"},body:JSON.stringify(a.isFAQ?h:S),method:"POST"});if(!$.ok)throw new Error(`HTTP error! status: ${$.status}`);if((G=$.headers.get("content-type"))!=null&&G.includes("text/event-stream")){if($.body){const V=$.body.getReader(),be=new TextDecoder;for(;;){const{done:ye,value:me}=await V.read();if(ye)break;me&&(A.value=!1,be.decode(me).split(`

`).forEach(H=>{const fe=H.replace(/data: /g,"");fe&&R.value.push(fe)}))}}}else if((pe=$.headers.get("content-type"))!=null&&pe.includes("application/json")){const V=(await $.json()).data;R.value=[V]}else throw new Error("Unknown response type")}catch($){d.notify({color:"negative",message:s("landing_page.error",{message:$}),icon:"report_problem"})}finally{A.value=!1}};function ne(){return Oe(R.value.join("")).then(()=>{d.notify({message:s("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const W=J(()=>Qt.value.filter(_=>R.value.join("").toLowerCase().includes(_.label.toLowerCase().replace("landing_page.",""))));function j(){return a.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${i.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(_,S)=>(f(),T(U,null,[e(Tt,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Ne(D,["prevent","stop"])},{default:t(()=>[e(o(Te),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:o(s)("landing_page.ask_how_your_question"),placeholder:n.isFAQ?F.value:y.value,modelValue:z.value,"onUpdate:modelValue":S[0]||(S[0]=h=>z.value=h),clearable:"",ref_key:"questionRef",ref:Y,loading:A.value,disable:A.value,rules:[h=>!!h&&h.length>5||o(s)("landing_page.require_full_question")]},{prepend:t(()=>[e(L,{name:"img:/J.svg"})]),append:t(()=>[e(I,{flat:"",icon:"send",type:"submit",onClick:D})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1},8,["onSubmit"]),R.value.length||A.value?(f(),T("div",na,[e(te,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[A.value?(f(),x(P,{key:0},{default:t(()=>[e(L,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(s)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),w("span",sa,c(n.isFAQ?o(s)("landing_page.finding_faq"):o(s)("landing_page.proposing_solution")),1),(f(),T(U,null,ae([0,1,2,3,4],h=>e(zt,{key:h,class:"q-my-xs",width:h>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(f(),T(U,{key:1},[W.value.length>0&&!n.isFAQ?(f(),x(P,{key:0},{default:t(()=>[w("span",oa,c(o(s)("landing_page.mentioned_products")),1),(f(!0),T(U,null,ae(W.value,h=>(f(),x(he,{size:"sm",key:h,label:o(s)(h.label),icon:h.icon?`img:${h.icon}`:"widgets",onClick:Z=>o(At)(h.link),clickable:""},{default:t(()=>[e(O,null,{default:t(()=>[m(c(o(s)(h.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):oe("",!0),e(ce),e(P,{class:"q-pa-xl"},{default:t(()=>[e(aa,{text:R.value},null,8,["text"])]),_:1}),e(ce),e(gt,{align:"right"},{default:t(()=>[e(Pt,{square:""},{default:t(()=>[e(I,{square:"","no-caps":"",icon:"content_copy",onClick:ne,label:o(s)("landing_page.copy")},null,8,["label"]),e(I,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:o(s)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):oe("",!0)],64))}});export{Ca as N,zt as Q,Qa as _,Et as a,Ie as b,Ta as c,Pa as d};
