import{Q as J}from"./QTooltip.ccde476a.js";import{k as _e,R as Pe,S as Qe,h as V,i as se,D as Le,C as Ae,$ as tt,m as at,s as nt,T as st,aV as ot,P as xe,aI as lt,bm as rt,bo as it,e as ye,a6 as Re,u as Ve,am as ut,f as p,K as ie,w as De,ao as He,ab as x,as as q,aa as e,bp as ct,a8 as a,ai as o,bq as dt,br as Te,ar as oe,aT as pt,ak as z,a9 as m,j,ag as v,ah as c,ac as te,ap as de,at as O,ad as ee,ae as Q,bj as Se,aj as E,a7 as T,af as le,Z as ue,bh as Ke,bc as L,b7 as ve,a5 as mt,bg as ft}from"./index.75537f2e.js";import{Q as gt,a as vt}from"./QTabs.aa33cf97.js";import{b as ce,Q as ze,a as ht}from"./QBtnDropdown.4c87f6a8.js";import{Q as C}from"./QItemLabel.7f912dc7.js";import{Q as Ie}from"./QList.82160a56.js";import{u as _t,a as yt,b as bt,c as wt}from"./use-panel.d8396b62.js";import{Q as kt,a as Be,b as qt}from"./QTable.0098ad72.js";import{C as Ce}from"./ClosePopup.d8d45b08.js";import{c as Me}from"./copy-to-clipboard.3c0d627f.js";import{Q as he}from"./QChip.c4b79b0a.js";import{Q as $t}from"./QImg.c38e579f.js";import{Q as St}from"./QForm.f2eccbca.js";import{Q as Ct}from"./QBtnGroup.5a060a8c.js";import{m as xt,r as Tt}from"./common.435253f6.js";const Pt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Qt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var At=_e({name:"QSkeleton",props:{...Pe,tag:{type:String,default:"div"},type:{type:String,validator:t=>Pt.includes(t),default:"rect"},animation:{type:String,validator:t=>Qt.includes(t),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(t,{slots:n}){const s=Ae(),d=Qe(t,s.proxy.$q),i=V(()=>{const b=t.size!==void 0?[t.size,t.size]:[t.width,t.height];return{"--q-skeleton-speed":`${t.animationSpeed}ms`,width:b[0],height:b[1]}}),f=V(()=>`q-skeleton q-skeleton--${d.value===!0?"dark":"light"} q-skeleton--type-${t.type}`+(t.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${t.animation}`:"")+(t.square===!0?" q-skeleton--square":"")+(t.bordered===!0?" q-skeleton--bordered":""));return()=>se(t.tag,{class:f.value,style:i.value},Le(n.default))}}),Ue=_e({name:"QTabPanel",props:_t,setup(t,{slots:n}){return()=>se("div",{class:"q-tab-panel",role:"tabpanel"},Le(n.default))}}),Rt=_e({name:"QTabPanels",props:{...yt,...Pe},emits:bt,setup(t,{slots:n}){const s=Ae(),d=Qe(t,s.proxy.$q),{updatePanelsList:i,getPanelContent:f,panelDirectives:b}=wt(),y=V(()=>"q-tab-panels q-panel-parent"+(d.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(n),tt("div",{class:y.value},f(),"pan",t.swipeable,()=>b.value))}}),ge=_e({name:"QInnerLoading",props:{...Pe,...at,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(t,{slots:n}){const s=Ae(),d=Qe(t,s.proxy.$q),{transitionProps:i,transitionStyle:f}=nt(t),b=V(()=>"q-inner-loading absolute-full column flex-center"+(d.value===!0?" q-inner-loading--dark":"")),y=V(()=>"q-inner-loading__label"+(t.labelClass!==void 0?` ${t.labelClass}`:""));function I(){const w=[se(ot,{size:t.size,color:t.color})];return t.label!==void 0&&w.push(se("div",{class:y.value,style:t.labelStyle},[t.label])),w}function P(){return t.showing===!0?se("div",{class:b.value,style:f.value},n.default!==void 0?n.default():I()):null}return()=>se(st,i.value,P)}});function jt(t){const n=Object.assign({noopener:!0},t),s=[];for(const d in n){const i=n[d];i===!0?s.push(d):(rt(i)||typeof i=="string"&&i!=="")&&s.push(d+"="+i)}return s.join(",")}function Ee(t,n,s){let d=window.open;if(xe.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)d=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(t,{openExternal:!0})}const i=d(t,"_blank",jt(s));if(i)return xe.is.desktop&&i.focus(),i;n&&n()}var zt=(t,n,s)=>{if(xe.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(d=>{d?window.SafariViewController.show({url:t},lt,n):Ee(t,n,s)});return}return Ee(t,n,s)};const ne="https://embeddings-dashboard-api.jina.ai";var Ne=(t=>(t.CONSUME="consume",t.PURCHASE="purchase",t.TRIAL="trial",t))(Ne||{});const It=it("embedding",{state:()=>({apiKey:"",models:[],products:[]}),persist:{paths:["apiKey"]},getters:{},actions:{async getApiKey(){try{const t=await fetch(`${ne}/api/v1/api_key`,{method:"POST"});if(!t.ok)throw new Error(`getApiKey error! Status: ${t.status}`);const n=await t.json();return this.apiKey=n.api_key,!0}catch(t){return console.error("getApiKey error:",t),!1}},async getTokens(t){try{const n=await fetch(`${ne}/api/v1/api_key/user?api_key=${t}`);if(!n.ok)throw new Error(`getTokens error! Status: ${n.status}`);return(await n.json()).wallet.total_balance}catch(n){console.error("getTokens error:",n)}},async getModels(){try{const t=await fetch(`${ne}/api/v1/models`);if(!t.ok)throw new Error(`getModels error! Status: ${t.status}`);const n=await t.json();this.models=n}catch(t){console.error("getModels error:",t)}},async getProducts(){try{const t=await fetch(`${ne}/api/v1/product`);if(!t.ok)throw new Error(`getProducts error! Status: ${t.status}`);const n=await t.json();this.products=n}catch(t){console.error("getProducts error:",t)}},async getUsage(t){try{const n=await fetch(`${ne}/api/v1/billing/transaction`,{headers:{Authorization:`Bearer ${t}`}});if(!n.ok)throw new Error(`getUsage error! Status: ${n.status}`);return await n.json()}catch(n){console.error("getUsage error:",n)}},async checkoutWithStripe(t,n){try{const s=await fetch(`${ne}/api/v1/checkout_session`,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"},method:"POST",body:JSON.stringify(n),mode:"cors",credentials:"include"});if(!s.ok)throw new Error(`checkoutWithStripe error! Status: ${s.status}`);return await s.json()}catch(s){console.error("checkoutWithStripe error:",s)}}}}),Bt={class:"full-width"},Ut={class:"row q-mb-md q-pa-none"},Et={class:"full-width ellipsis q-pl-md"},Lt={class:"full-width ellipsis q-pl-md"},Vt=q("span",{class:"q-focus-helper"},null,-1),Dt={class:"text-h6"};var Oe=(t=>(t.CURL="curl",t.PYTHON="Python",t.JAVASCRIPT="JavaScript",t.RUBY="Ruby",t.PHP="PHP",t.JAVA="Java",t.NODEJS="Node.js",t.GO="Go",t.C_SHARP="C#",t.RUST="Rust",t))(Oe||{});const U="https://api.jina.ai/v1/embeddings",pa=ye({__name:"EmbeddingComponent",setup(t){const{t:n}=Re({useScope:"global"}),s=Ve(),d=It(),{apiKey:i,models:f,products:b}=ut(d),y=p(!1),I=async()=>{if(y.value)return;y.value=!0,await d.getApiKey().finally(()=>{y.value=!1})?(S.value=i.value,g.value=!1):s.notify({message:n("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};ie(()=>{navigator.userAgent.toLowerCase().includes("headless")||i.value||I()});const P=p(!1),w=()=>{!i.value||P.value||(Me(i.value).then(()=>{s.notify({message:n("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),P.value=!0}),setTimeout(()=>{P.value=!1},1800))},F=p(0),A=p(!1),D=p(!1),ae=async l=>{A.value=!0,D.value=!1;const u=await d.getTokens(l);if(A.value=!1,u===void 0){D.value=!0;return}F.value=u,W.value=F.value};ie(()=>{!i.value||ae(i.value)}),De(i,l=>{!l||ae(l)});const W=p(0),R=p(!1),g=p(!1),$=async l=>{R.value=!0,g.value=!1;const u=await d.getTokens(l);if(R.value=!1,u===void 0){g.value=!0;return}W.value=u,i.value=l},h=l=>new Intl.NumberFormat("en").format(l),X=[{name:0,label:"embedding.code",icon:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart"}],Z=p(0),pe=l=>{l===1&&(S.value||(g.value=D.value,D.value||(S.value=i.value,W.value=F.value)))},k=p(!1),H=p();ie(()=>{be()});const be=async()=>{k.value=!0,await d.getModels(),k.value=!1,f.value.length>0&&(H.value=f.value.find(l=>l.rank===1)||f.value[1])},we=l=>{H.value=l},me=l=>{zt(`https://huggingface.co/jinaai/${l}`,void 0,{})},re=p("curl"),K=["Your text string goes here","You can send multiple texts"],M=`["${K[0]}", "${K[1]}"]`,fe=V(()=>{var _;const l=i.value||"$JINA_API_KEY",u=((_=H.value)==null?void 0:_.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${U} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${l}" \\
  -d '{
    "input": ${M},
    "model": "${u}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${U}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${l}'
}

data = {
  'input': ${M},
  'model': '${u}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${U}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${l}",
};

const data = {
  input: '${M}',
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

uri = URI.parse("${U}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${l}'
}

data = {
  'input' => ${M},
  'model' => '${u}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${U}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${l}"
);

$data = array(
    "input" => array("${K[0]}", "${K[1]}"),
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
        String url = "${U}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${l}");

        con.setDoOutput(true);
        String data = "{"input": ["${K[0]}", "${K[1]}"],"model": "${u}"}";

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

const url = "${U}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${l}',
  }
};

const data = {
  input: ${M},
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
	url := "${U}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${l}",
	}

	data := \`{
		"input": ${M},
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
        string url = "${U}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${l}");

        string data = @"{
            ""input"": [""${K[0]}"", ""${K[1]}""],
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

    let res = client.post("${U}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${l}")
        .body(r#"{
            "input": ${M},
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
    `}}),S=p(""),Y=V(()=>!!S.value&&S.value.length===i.value.length&&!g.value),Je=l=>{if(!(!l||typeof l=="number"||l.length!==i.value.length)){if(l===i.value){W.value=F.value,g.value=D.value;return}$(l)}};ie(()=>{b.value.length||d.getProducts()});const G=p(""),Fe=async l=>{if(!Y.value||R.value||G.value)return;const u=window.location.href,_=u.includes("#")?u:u+"#enterprises";G.value=l;const r=await d.checkoutWithStripe(S.value,{price_id:l,success_url:_,cancel_url:_});G.value="",r&&(window.location.href=r.url)},ke=p(!1),We=()=>{!Y.value||R.value||(ke.value=!0)},Ye=()=>{var l;(l=je.value)==null||l.requestServerInteraction()},Xe=()=>{$e.value=[]},qe=p(!1),je=p(null),$e=p([]),Ze=p([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:n("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:l=>{if(typeof l=="string")return new Date(l).toLocaleString();if(l instanceof Date)return l.toLocaleString();if(l)return l.toDate().toLocaleString()}},{name:"amount",label:n("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:l=>l>0?`+${l}`:`${l}`},{name:"reason",label:n("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),Ge=async l=>{qe.value=!0;const u=await d.getUsage(S.value);qe.value=!1,!(!u||u.length===0)&&($e.value=u.map(_=>{const r=new Date(_.updated_at);let N=_.quantity,B=n(`embedding.usage_reason_${_.type}`);return _.type===Ne.CONSUME?(N=-N,_.metadata.model_name&&(B=B+": "+_.metadata.model_name)):_.metadata.product_name&&(B=B+": "+_.metadata.product_name),{createdAt:r,amount:N,reason:B}}),ae(S.value))};return(l,u)=>{const _=He("q-markdown");return m(),x(z,null,[q("div",Bt,[e(Te,{modelValue:o(i),"onUpdate:modelValue":u[0]||(u[0]=r=>dt(i)?i.value=r:null),label:o(n)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:y.value,disable:y.value,"input-style":"font-family: monospace;",hint:o(n)("embedding.key_warn_v2"),"input-class":"ellipsis"},ct({prepend:a(()=>[e(j,{flat:"",round:"",icon:"refresh",onClick:I},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[y.value?void 0:{name:"append",fn:a(()=>[e(j,{flat:"",round:"",icon:P.value?"done":"content_copy",color:P.value?"positive":"",onClick:w},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(oe,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:a(()=>[e(gt,{modelValue:Z.value,"onUpdate:modelValue":u[1]||(u[1]=r=>Z.value=r),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:a(()=>[(m(),x(z,null,te(X,r=>e(vt,{key:r.name,name:r.name,label:o(n)(r.label),icon:r.icon},null,8,["name","label","icon"])),64)),e(ce),e(j,{stretch:"","no-wrap":"",label:o(n)("faq"),icon:"help_outline",href:"/embeddings#faq",size:o(s).screen.lt.sm?"12px":"md"},null,8,["label","size"])]),_:1},8,["modelValue"]),e(de),e(Rt,{modelValue:Z.value,"onUpdate:modelValue":u[5]||(u[5]=r=>Z.value=r),animated:"",onBeforeTransition:pe},{default:a(()=>[e(Ue,{name:0},{default:a(()=>[q("div",Ut,[q("div",{class:O(["row",o(s).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(ee,{class:O(o(s).screen.lt.sm?"col q-pr-none":"")},{default:a(()=>[e(Q,{avatar:"",style:Se(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:a(()=>[e(E,{name:"help_outline",class:"cursor-pointer"},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(Q,{class:O(o(s).screen.lt.sm?"items-center":"")},{default:a(()=>[e(C,{overline:"",class:"row items-center"},{default:a(()=>[v(c(o(n)("embedding.remaining")),1)]),_:1}),D.value?le("",!0):(m(),T(C,{key:0},{default:a(()=>[v(c(h(F.value)),1)]),_:1}))]),_:1},8,["class"]),e(ge,{showing:A.value},null,8,["showing"])]),_:1},8,["class"]),e(j,{flat:"",icon:"sync",onClick:u[2]||(u[2]=r=>ae(o(i)))},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.refresh_token_count")),1)]),_:1})]),_:1})],2),o(s).screen.lt.sm?le("",!0):(m(),T(ce,{key:0})),q("div",{class:O(["row",o(s).screen.lt.sm?"col-12":""])},[e(ze,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:k.value,"disable-dropdown":k.value,class:O(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:a(()=>{var r;return[q("div",Et,c((r=H.value)==null?void 0:r.name),1)]}),default:a(()=>[e(Ie,null,{default:a(()=>[(m(!0),x(z,null,te(o(f),(r,N)=>{var B;return ue((m(),T(ee,{key:N,clickable:"",active:r.name===((B=H.value)==null?void 0:B.name),onClick:et=>we(r),class:"q-pa-lg"},{default:a(()=>[e(Q,null,{default:a(()=>[e(C,null,{default:a(()=>[v(c(r.name),1)]),_:2},1024),e(C,{caption:"",class:"row justify-between"},{default:a(()=>[q("span",null,c(o(n)("embedding.size"))+": "+c(r.meta_data.size),1),q("span",null,c(o(n)("embedding.output_dim"))+": "+c(r.meta_data.output_dim),1)]),_:2},1024)]),_:2},1024),e(Q,{side:"",top:""},{default:a(()=>[e(j,{flat:"",size:"xs",icon:"launch",onClick:Ke(et=>me(r.name),["stop"])},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[ve],[Ce]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(ze,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:O(o(s).screen.lt.sm?"full-width q-py-md":"")},{label:a(()=>[q("div",Lt,c(re.value),1)]),default:a(()=>[e(Ie,null,{default:a(()=>[(m(),x(z,null,te(Oe,(r,N)=>ue(e(ee,{key:N,clickable:"",active:r===re.value,"active-class":"text-primary bg-grey-10",onClick:B=>re.value=r},{default:a(()=>[e(Q,null,{default:a(()=>[e(C,null,{default:a(()=>[v(c(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[ve],[Ce]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(de),e(_,{src:fe.value[re.value],"show-copy":"",class:O(["q-py-lg",o(s).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":o(n)("copy"),"copy-response-text":o(n)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Ue,{name:1},{default:a(()=>[e(Te,{"input-style":"font-family: monospace",modelValue:S.value,"onUpdate:modelValue":[u[3]||(u[3]=r=>S.value=r),Je],clearable:"",outlined:"",label:S.value?`${o(n)("embedding.key_to_top_up")}`:o(n)("embedding.key_enter_placeholder_to_topup"),error:!Y.value,"error-message":S.value?o(n)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),Y.value?(m(),x(z,{key:0},[e(ht,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:a(()=>[e(ee,{class:O(o(s).screen.lt.sm?"q-px-none":"")},{default:a(()=>[e(Q,{avatar:"",style:Se(o(s).screen.lt.sm?"min-width: auto !important;":"")},{default:a(()=>[e(E,{name:"help_outline",class:"cursor-pointer",size:o(s).screen.lt.sm?"xs":""},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(Q,null,{default:a(()=>[e(C,{overline:"",class:"row items-center"},{default:a(()=>[v(c(o(n)("embedding.remaining")),1)]),_:1}),g.value?le("",!0):(m(),T(C,{key:0},{default:a(()=>[v(c(h(W.value)),1)]),_:1}))]),_:1}),e(ge,{showing:R.value},null,8,["showing"])]),_:1},8,["class"]),e(j,{flat:"",icon:"sync",class:"q-ml-sm",disable:!Y.value||R.value,size:o(s).screen.lt.sm?"sm":"md",onClick:u[4]||(u[4]=r=>$(S.value))},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(n)("embedding.refresh_token_count")),1)]),_:1})]),_:1},8,["disable","size"]),e(ce),e(j,{flat:"","no-caps":"",icon:"history",label:o(s).screen.lt.sm?"":o(n)("embedding.usage_history"),dense:o(s).screen.lt.sm,disable:!Y.value||R.value,onClick:We},null,8,["label","dense","disable"])]),_:1}),e(de)],64)):le("",!0),e(oe,{flat:""},{default:a(()=>[e(L,null,{default:a(()=>[e(ee,null,{default:a(()=>[e(Q,{avatar:"",side:""},{default:a(()=>[e(E,{name:"fab fa-stripe",size:"sm"}),e(E,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(Q,null,{default:a(()=>[e(C,null,{default:a(()=>[v(c(o(n)("embedding.buy_more_quota")),1)]),_:1}),e(C,{caption:""},{default:a(()=>[v(c(o(n)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(L,{class:"row",style:{"margin-right":"-16px"}},{default:a(()=>[(m(!0),x(z,null,te(o(b),(r,N)=>(m(),x("div",{key:N,class:"col-12 col-md-6 col-lg-4"},[ue((m(),T(oe,{bordered:"",flat:"",class:O(["q-mr-md q-mb-md",Y.value&&!R.value&&!G.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:Se(G.value===r.price_id?"cursor: wait !important;":""),onClick:B=>Fe(r.price_id)},{default:a(()=>[Vt,e(L,{class:"column items-center non-selectable q-py-xl text-h6"},{default:a(()=>[v(c(o(n)(`embedding.${r.product_name.replace(".","_")}`)),1)]),_:2},1024),e(L,null,{default:a(()=>[e(ee,null,{default:a(()=>[e(Q,null,{default:a(()=>[e(C,{class:"text-bold"},{default:a(()=>[v("$"+c(r.price),1)]),_:2},1024),e(C,{caption:""},{default:a(()=>[v("$"+c(Number((r.price/r.token_quantity*1e3).toFixed(6)))+" "+c(o(n)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(Q,{side:""},{default:a(()=>[e(E,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(ge,{showing:G.value===r.price_id,label:o(n)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[ve,Y.value&&!R.value&&!G.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(ge,{class:"non-selectable lock-blur",showing:y.value},null,8,["showing"])]),_:1}),e(pt,{modelValue:ke.value,"onUpdate:modelValue":u[6]||(u[6]=r=>ke.value=r),onShow:Ye,onHide:Xe},{default:a(()=>[e(oe,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:a(()=>[e(L,{class:"row items-center q-pb-none"},{default:a(()=>[e(E,{name:"history",size:"md",class:"q-mr-md"}),q("div",Dt,c(o(s).screen.lt.sm?"":o(n)("embedding.usage_history")),1),e(ce),ue(e(j,{icon:"close",flat:"",round:"",dense:""},null,512),[[Ce]])]),_:1}),e(L,null,{default:a(()=>[e(o(kt),{ref_key:"usageTableRef",ref:je,flat:"","row-key":"createdAt",rows:$e.value,columns:Ze.value,loading:qe.value,"hide-pagination":!0,onRequest:Ge},{"body-cell-icon":a(r=>[e(Be,{key:"icon",props:r},{default:a(()=>[r.row.amount>0?(m(),T(E,{key:0,name:"o_add_circle_outline",color:"primary"})):(m(),T(E,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":a(r=>[e(Be,{key:"amount",props:r},{default:a(()=>[v(c((r.row.amount>0?"+":"")+h(r.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var Ht="/assets/paper_1.8ed04d7d.png",Kt="/assets/paper_2.59e1399a.png";const Mt=q("span",{class:"q-focus-helper"},null,-1),Nt={class:"q-mb-xl"},ma=ye({__name:"ResearchersComponent",setup(t){Re({useScope:"global"});const n=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:Ht,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:Kt,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(s,d)=>(m(),x(z,null,te(n,(i,f)=>ue(e(oe,{key:f,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:a(()=>[Mt,e(qt,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(L,{class:"q-pa-none",horizontal:""},{default:a(()=>[e(ee,{href:i.link,target:"_blank",class:"q-pa-lg col-9"},{default:a(()=>[e(Q,null,{default:a(()=>[q("div",Nt,[e(he,{label:i.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),i.conference?(m(),T(he,{key:0,label:i.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(m(),T(he,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(ce),e(C,{class:"text-h6 q-mb-lg"},{default:a(()=>[v(c(i.title),1)]),_:2},1024),e(C,{caption:"",lines:"3"},{default:a(()=>[v(c(i.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e($t,{src:i.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[ve]])),64))}});function Ot(t){const n=p(null);return ie(()=>{n.value&&n.value(),n.value=t()}),mt(()=>{var s;(s=n.value)==null||s.call(n)}),{watchStopHandle:n}}const Jt=ye({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(t,{emit:n}){const s=t;let d=p(""),i=0,f=null;const b=()=>{i=0,f&&(clearInterval(f),f=null)},y=()=>{f=window.setInterval(()=>{i<s.text.length?(d.value+=s.text[i],i++):(clearInterval(f),f=null,n("done"))},s.speedTime)};return Ot(()=>De(s.text,I=>{if(d.value.length===I.length){b();return}!f&&i<I.length&&y()},{immediate:!0})),(I,P)=>{const w=He("q-markdown");return m(),T(w,{src:o(d),"no-line-numbers":""},null,8,["src"])}}});const Ft={key:"result",class:"row justify-center q-mb-xl"},Wt={class:"text-caption text-grey"},Yt={class:"text-caption text-grey"},fa=ye({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(t){const n=t,{t:s}=Re({useScope:"global"}),d=Ve(),i=p(!1);function f([g,$]){return Array.from({length:$-g+1},(h,X)=>g+X)}function b(g){return g[Math.floor(Math.random()*g.length)]}const y=V(()=>{const g=f([1,12]).map($=>s(`impact_snapshots.project${$}`));return`${s("landing_page.how_to")} ${b(g).slice(0,-1).toLowerCase()}?`}),I=V(()=>{const g=f([1,12]).map($=>s(`embedding.faqs.question${$}`));return`${b(g).slice(0,-1).toLowerCase()}?`}),P=p(""),w=p(!1),F=p(null),A=p([]),D=async()=>{var X,Z,pe;if(!await((X=F.value)==null?void 0:X.validate()))return Promise.reject();const g=P.value,$={parameters:{question:g}},h={query:g,stream:!0};w.value=!0,A.value=[];try{const k=await fetch(R(),{headers:{"content-type":"application/json"},body:JSON.stringify(n.isFAQ?h:$),method:"POST"});if(!k.ok)throw new Error(`HTTP error! status: ${k.status}`);if((Z=k.headers.get("content-type"))!=null&&Z.includes("text/event-stream")){if(k.body){const H=k.body.getReader(),be=new TextDecoder;for(;;){const{done:we,value:me}=await H.read();if(we)break;me&&(w.value=!1,be.decode(me).split(`

`).forEach(M=>{const fe=M.replace(/data: /g,"");fe&&A.value.push(fe)}))}}}else if((pe=k.headers.get("content-type"))!=null&&pe.includes("application/json")){const H=(await k.json()).data;A.value=[H]}else throw new Error("Unknown response type")}catch(k){d.notify({color:"negative",message:s("landing_page.error",{message:k}),icon:"report_problem"})}finally{w.value=!1}};function ae(){return Me(A.value.join("")).then(()=>{d.notify({message:s("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const W=V(()=>xt.value.filter(g=>A.value.join("").toLowerCase().includes(g.label.toLowerCase().replace("landing_page.",""))));function R(){return n.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${i.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(g,$)=>(m(),x(z,null,[e(St,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Ke(D,["prevent","stop"])},{default:a(()=>[e(o(Te),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:o(s)("landing_page.ask_how_your_question"),placeholder:t.isFAQ?I.value:y.value,modelValue:P.value,"onUpdate:modelValue":$[0]||($[0]=h=>P.value=h),clearable:"",ref_key:"questionRef",ref:F,loading:w.value,disable:w.value,rules:[h=>!!h&&h.length>5||o(s)("landing_page.require_full_question")]},{prepend:a(()=>[e(E,{name:"img:/J.svg"})]),append:a(()=>[e(j,{flat:"",icon:"send",type:"submit",onClick:D})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1},8,["onSubmit"]),A.value.length||w.value?(m(),x("div",Ft,[e(oe,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:a(()=>[w.value?(m(),T(L,{key:0},{default:a(()=>[e(E,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(s)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),q("span",Wt,c(t.isFAQ?o(s)("landing_page.finding_faq"):o(s)("landing_page.proposing_solution")),1),(m(),x(z,null,te([0,1,2,3,4],h=>e(At,{key:h,class:"q-my-xs",width:h>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(m(),x(z,{key:1},[W.value.length>0&&!t.isFAQ?(m(),T(L,{key:0},{default:a(()=>[q("span",Yt,c(o(s)("landing_page.mentioned_products")),1),(m(!0),x(z,null,te(W.value,h=>(m(),T(he,{size:"sm",key:h,label:o(s)(h.label),icon:h.icon?`img:${h.icon}`:"widgets",onClick:X=>o(Tt)(h.link),clickable:""},{default:a(()=>[e(J,null,{default:a(()=>[v(c(o(s)(h.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):le("",!0),e(de),e(L,{class:"q-pa-xl"},{default:a(()=>[e(Jt,{text:A.value},null,8,["text"])]),_:1}),e(de),e(ft,{align:"right"},{default:a(()=>[e(Ct,{square:""},{default:a(()=>[e(j,{square:"","no-caps":"",icon:"content_copy",onClick:ae,label:o(s)("landing_page.copy")},null,8,["label"]),e(j,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:o(s)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):le("",!0)],64))}});export{At as Q,fa as _,Rt as a,Ue as b,pa as c,ma as d};
