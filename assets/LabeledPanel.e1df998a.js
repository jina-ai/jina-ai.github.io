import{Q as me}from"./QImg.27db20fc.js";import{e as ue,h as V,a6 as ge,a7 as q,a8 as t,ay as se,bF as ut,a9 as p,aa as e,bl as P,ad as N,ae as j,ag as _,ah as c,ai as n,bo as ct,bp as dt,az as b,k as Ae,R as He,S as Me,i as Ne,D as Ve,C as Ke,$ as pt,P as Pe,aH as mt,bD as ft,u as Oe,am as gt,f as h,K as de,w as Fe,ao as Je,ab as S,bG as vt,bH as _t,bI as Qe,aT as ht,ak as E,j as M,ac as W,ap as fe,aB as D,bE as ye,aj as Y,af as X,Z as ie,bw as Ye,bb as we,bJ as bt,a5 as yt,bK as wt,bL as We,bu as Xe,bM as ze,T as kt,b0 as qt}from"./index.ae19b4cb.js";import{Q as T}from"./QItemLabel.737cbb7d.js";import{_ as $t}from"./NewsBadge.85969a48.js";import{A as xt,Q as be}from"./blogs.0b845204.js";import{_ as Ct}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as ee}from"./QTooltip.5338ff56.js";import{Q as Tt,a as St}from"./QTabs.f5653f56.js";import{Q as pe}from"./QSpace.e72a2bc7.js";import{a as Te}from"./QSelect.ec7f4034.js";import{Q as Be}from"./QList.8bff8777.js";import{Q as Ee}from"./QBtnDropdown.8a71b3aa.js";import{u as Pt,b as Qt,c as At,d as Rt}from"./QCarousel.7c089181.js";import{u as jt,Q as It,T as zt}from"./embedding.507e019a.js";import{Q as Bt,a as Ue,b as Et}from"./QTable.ea86ce71.js";import{C as Se}from"./ClosePopup.84f03a4a.js";import{c as Ze}from"./copy-to-clipboard.58aec584.js";import{Q as re}from"./QChip.1a7b8095.js";import{Q as Ut}from"./QForm.c9044a42.js";import{Q as Lt}from"./QBtnGroup.d8d0cf5d.js";const Dt=l=>(ct("data-v-4867f981"),l=l(),dt(),l),Ht=Dt(()=>b("span",{class:"q-focus-helper"},null,-1)),Mt=ue({__name:"NewsroomCard",props:{info:{}},setup(l){const a=l,u=V(()=>ut(a.info.publishedAt).format("MMMM DD, YYYY")),{t:f}=ge({useScope:"global"}),r=g=>{window.open(g)};return(g,v)=>(p(),q(se,{flat:"",square:"",onClick:v[0]||(v[0]=x=>r(`/news/${g.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[Ht,e(P,{class:"q-pa-none"},{default:t(()=>[e(me,{src:g.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(P,{style:{height:"250px"}},{default:t(()=>[e(N,null,{default:t(()=>[e($t,{news:g.info},null,8,["news"])]),_:1}),e(N,null,{default:t(()=>[e(j,{class:"text-h6 text-weight-light"},{default:t(()=>[e(T,{lines:"2"},{default:t(()=>[_(c(g.info.title),1)]),_:1})]),_:1})]),_:1}),e(N,null,{default:t(()=>[e(j,null,{default:t(()=>[e(T,{lines:"3",caption:""},{default:t(()=>[_(c(g.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,null,{default:t(()=>[e(N,null,{default:t(()=>[e(xt,{authors:g.info.authors},null,8,["authors"]),e(j,null,{default:t(()=>[e(T,null,{default:t(()=>[_(c(g.info.authors.map(x=>x.name).join(", ")),1)]),_:1}),e(T,{caption:""},{default:t(()=>[_(c(u.value)+" \u2022 "+c(g.info.readingTime)+" "+c(n(f)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Da=Ct(Mt,[["__scopeId","data-v-4867f981"]]);const Nt=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Vt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Kt=Ae({name:"QSkeleton",props:{...He,tag:{type:String,default:"div"},type:{type:String,validator:l=>Nt.includes(l),default:"rect"},animation:{type:String,validator:l=>Vt.includes(l),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(l,{slots:a}){const u=Ke(),f=Me(l,u.proxy.$q),r=V(()=>{const v=l.size!==void 0?[l.size,l.size]:[l.width,l.height];return{"--q-skeleton-speed":`${l.animationSpeed}ms`,width:v[0],height:v[1]}}),g=V(()=>`q-skeleton q-skeleton--${f.value===!0?"dark":"light"} q-skeleton--type-${l.type}`+(l.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${l.animation}`:"")+(l.square===!0?" q-skeleton--square":"")+(l.bordered===!0?" q-skeleton--bordered":""));return()=>Ne(l.tag,{class:g.value,style:r.value},Ve(a.default))}}),Le=Ae({name:"QTabPanel",props:Pt,setup(l,{slots:a}){return()=>Ne("div",{class:"q-tab-panel",role:"tabpanel"},Ve(a.default))}}),Ot=Ae({name:"QTabPanels",props:{...Qt,...He},emits:At,setup(l,{slots:a}){const u=Ke(),f=Me(l,u.proxy.$q),{updatePanelsList:r,getPanelContent:g,panelDirectives:v}=Rt(),x=V(()=>"q-tab-panels q-panel-parent"+(f.value===!0?" q-tab-panels--dark q-dark":""));return()=>(r(a),pt("div",{class:x.value},g(),"pan",l.swipeable,()=>v.value))}});function Ft(l){const a=Object.assign({noopener:!0},l),u=[];for(const f in a){const r=a[f];r===!0?u.push(f):(ft(r)||typeof r=="string"&&r!=="")&&u.push(f+"="+r)}return u.join(",")}function De(l,a,u){let f=window.open;if(Pe.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)f=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(l,{openExternal:!0})}const r=f(l,"_blank",Ft(u));if(r)return Pe.is.desktop&&r.focus(),r;a&&a()}var Jt=(l,a,u)=>{if(Pe.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(f=>{f?window.SafariViewController.show({url:l},mt,a):De(l,a,u)});return}return De(l,a,u)};const Yt={class:"full-width"},Wt={class:"row q-mb-md q-pa-none"},Xt={class:"full-width ellipsis q-pl-md"},Zt={class:"self-center full-width no-outline",tabindex:"0"},Gt={class:"self-center full-width no-outline",tabindex:"0"},ea={class:"self-center full-width no-outline",tabindex:"0"},ta={class:"full-width ellipsis q-pl-md"},aa=b("span",{class:"q-focus-helper"},null,-1),na={class:"text-h6"};var Ge=(l=>(l.CURL="curl",l.PYTHON="Python",l.JAVASCRIPT="JavaScript",l.RUBY="Ruby",l.PHP="PHP",l.JAVA="Java",l.NODEJS="Node.js",l.GO="Go",l.C_SHARP="C#",l.RUST="Rust",l))(Ge||{});const J="https://api.jina.ai/v1/embeddings",Ha=ue({__name:"EmbeddingComponent",setup(l){const{t:a}=ge({useScope:"global"}),u=Oe(),f=jt(),{apiKey:r,models:g,products:v}=gt(f),x=h(!1),te=async s=>{if(F("event","embedding_refresh_api_key",{location:G.location.href,type:s}),x.value)return;x.value=!0,await f.getApiKey().finally(()=>{x.value=!1})?(L.value=r.value,y.value=!1):u.notify({message:a("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};de(()=>{navigator.userAgent.toLowerCase().includes("headless")||r.value||te("auto")});const A=h(!1),I=()=>{F("event","embedding_copy_api_key",{location:G.location.href}),!(!r.value||A.value)&&(Ze(r.value).then(()=>{u.notify({message:a("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),A.value=!0}),setTimeout(()=>{A.value=!1},1800))},H=h(0),d=h(!1),k=h(!1),m=async s=>{d.value=!0,k.value=!1;const i=await f.getTokens(s);if(d.value=!1,i===void 0){k.value=!0;return}H.value=i,z.value=H.value};de(()=>{!r.value||m(r.value)}),Fe(r,s=>{!s||m(s)});const z=h(0),C=h(!1),y=h(!1),U=async s=>{C.value=!0,y.value=!1;const i=await f.getTokens(s);if(C.value=!1,i===void 0){y.value=!0;return}z.value=i,r.value=s},w=s=>new Intl.NumberFormat("en").format(s),ae=[{name:0,label:"embedding.code",icon:"code",value:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"}],le=h(0),ve=s=>{F("event","embedding_change_tab",{location:G.location.href,tab:ae[s].value}),s===1&&(L.value||(y.value=k.value,k.value||(L.value=r.value,z.value=H.value)))},B=h(!1),Z=h();de(()=>{ke()});const ke=async()=>{B.value=!0,await f.getModels(),B.value=!1,g.value.length>0&&(Z.value=g.value.find(s=>s.rank===1)||g.value[1])},qe=s=>{F("event","embedding_choose_model",{location:G.location.href,model:s.name}),Z.value=s},_e=s=>{F("event","embedding_view_model_detail",{location:G.location.href,model:s}),Jt(`https://huggingface.co/jinaai/${s}`,void 0,{})},Re=s=>{F("event","embedding_choose_code_lang",{location:G.location.href,lang:s}),ce.value=s},ce=h("curl"),K=["Your text string goes here","You can send multiple texts"],O=`["${K[0]}", "${K[1]}"]`,et=V(()=>{var $;const s=r.value||"$JINA_API_KEY",i=(($=Z.value)==null?void 0:$.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${J} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${s}" \\
  -d '{
    "input": ${O},
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
  'input': ${O},
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
  input: '${O}',
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
  'input' => ${O},
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
    "input" => array("${K[0]}", "${K[1]}"),
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
        String data = "{"input": ["${K[0]}", "${K[1]}"],"model": "${i}"}";

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
  input: ${O},
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
		"input": ${O},
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
            ""input"": [""${K[0]}"", ""${K[1]}""],
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
            "input": ${O},
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
    `}}),L=h(""),ne=V(()=>!!L.value&&L.value.length===r.value.length&&!y.value),tt=s=>{if(!(!s||typeof s=="number"||s.length!==r.value.length)){if(s===r.value){z.value=H.value,y.value=k.value;return}U(s)}};de(()=>{v.value.length||f.getProducts()});const oe=h(""),at=async s=>{if(!ne.value||C.value||oe.value)return;const i=v.value.find(it=>it.price_id===s);let $,o;const Q=new URL(window.location.href);Q.pathname==="/"&&(Q.hash="#enterprises"),Q.searchParams.set("price_id",s),Q.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),o=Q.toString(),Q.searchParams.set("purchase_status","success"),$=Q.toString(),oe.value=s;const R={price_id:s,success_url:$,cancel_url:o},he=localStorage.getItem(bt);he&&(R.meta_data={sales_key:he}),i&&F("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const Ie=await f.checkoutWithStripe(L.value,R);oe.value="",Ie&&(window.location.href=Ie.url)},$e=h(!1),nt=()=>{!ne.value||C.value||($e.value=!0)},st=()=>{var s;(s=je.value)==null||s.requestServerInteraction()},lt=()=>{Ce.value=[]},xe=h(!1),je=h(null),Ce=h([]),ot=h([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:a("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:a("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:a("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),rt=async s=>{xe.value=!0;const i=await f.getUsage(L.value);xe.value=!1,!(!i||i.length===0)&&(Ce.value=i.map($=>{const o=new Date($.updated_at);let Q=$.quantity,R=a(`embedding.usage_reason_${$.type}`);return $.type===zt.CONSUME?(Q=-Q,$.metadata.model_name&&(R=R+": "+$.metadata.model_name)):($.metadata.product_name&&(R=R+": "+$.metadata.product_name),$.metadata.order_quantity&&$.metadata.order_quantity>1&&(R=R+` (x ${$.metadata.order_quantity})`)),{createdAt:o,amount:Q,reason:R}}),m(L.value))},F=window.gtag,G=window.document;return(s,i)=>{const $=Je("q-markdown");return p(),S(E,null,[b("div",Yt,[e(Qe,{modelValue:n(r),"onUpdate:modelValue":i[1]||(i[1]=o=>_t(r)?r.value=o:null),label:n(a)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:x.value,disable:x.value,"input-style":"font-family: monospace;",hint:n(a)("embedding.key_warn_v2"),"input-class":"ellipsis"},vt({prepend:t(()=>[e(M,{flat:"",round:"",icon:"refresh",onClick:i[0]||(i[0]=o=>te("manual"))},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[x.value?void 0:{name:"append",fn:t(()=>[e(M,{flat:"",round:"",icon:A.value?"done":"content_copy",color:A.value?"positive":"",onClick:I},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(se,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e(Tt,{modelValue:le.value,"onUpdate:modelValue":i[3]||(i[3]=o=>le.value=o),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(p(),S(E,null,W(ae,o=>e(St,{key:o.name,name:o.name,label:n(a)(o.label),icon:o.icon},null,8,["name","label","icon"])),64)),e(pe),e(M,{stretch:"","no-wrap":"",label:n(a)("faq"),icon:"help_outline",href:"/embeddings#faq",size:n(u).screen.lt.sm?"12px":"md",onClick:i[2]||(i[2]=o=>n(F)("event","embedding_goto_faq",{location:n(G).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(fe),e(Ot,{modelValue:le.value,"onUpdate:modelValue":i[9]||(i[9]=o=>le.value=o),animated:"",onBeforeTransition:ve},{default:t(()=>[e(Le,{name:0},{default:t(()=>[b("div",Wt,[b("div",{class:D(["row",n(u).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(N,{class:D(n(u).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e(j,{avatar:"",style:ye(n(u).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Y,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(j,{class:D(n(u).screen.lt.sm?"items-center":"")},{default:t(()=>[e(T,{overline:"",class:"row items-center"},{default:t(()=>[_(c(n(a)("embedding.remaining")),1)]),_:1}),k.value?X("",!0):(p(),q(T,{key:0},{default:t(()=>[_(c(w(H.value)),1)]),_:1}))]),_:1},8,["class"]),e(be,{showing:d.value},null,8,["showing"])]),_:1},8,["class"]),e(M,{flat:"",icon:"sync",onClick:i[4]||(i[4]=o=>m(n(r)))},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2),n(u).screen.lt.sm?X("",!0):(p(),q(pe,{key:0})),b("div",{class:D(["row",n(u).screen.lt.sm?"col-12":""])},[e(Ee,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:B.value,"disable-dropdown":B.value,class:D(n(u).screen.lt.sm?"full-width q-py-md":""),onClick:i[5]||(i[5]=o=>n(F)("event","embedding_click_model_dropdown",{location:n(G).location.href}))},{label:t(()=>{var o;return[b("div",Xt,c((o=Z.value)==null?void 0:o.name),1)]}),default:t(()=>[e(Be,null,{default:t(()=>[(p(!0),S(E,null,W(n(g),(o,Q)=>{var R;return ie((p(),q(N,{key:Q,clickable:"",active:o.name===((R=Z.value)==null?void 0:R.name),onClick:he=>qe(o),class:"q-pa-lg"},{default:t(()=>[e(j,null,{default:t(()=>[e(T,{overline:"",caption:""},{default:t(()=>[_(c(o.name),1)]),_:2},1024),e(T,{class:"text-weight-bold"},{default:t(()=>[_(c(n(a)(`embedding.${o.name}_description`)),1)]),_:2},1024),e(T,{caption:"",class:"row"},{default:t(()=>[e(Te,{borderless:"",label:n(a)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[b("div",Zt,c(o.meta_data.token_length),1)]),_:2},1032,["label"]),e(Te,{borderless:"",label:n(a)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[b("div",Gt,c(o.meta_data.size),1)]),_:2},1032,["label"]),e(Te,{borderless:"",label:n(a)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[b("div",ea,c(o.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(j,{side:""},{default:t(()=>[e(M,{flat:"",icon:"launch",onClick:Ye(he=>_e(o.name),["stop"])},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[we],[Se]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Ee,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:D(n(u).screen.lt.sm?"full-width q-py-md":""),onClick:i[6]||(i[6]=o=>n(F)("event","embedding_click_code_lang_dropdown",{location:n(G).location.href}))},{label:t(()=>[b("div",ta,c(ce.value),1)]),default:t(()=>[e(Be,null,{default:t(()=>[(p(),S(E,null,W(Ge,(o,Q)=>ie(e(N,{key:Q,clickable:"",active:o===ce.value,"active-class":"text-primary bg-grey-10",onClick:R=>Re(o)},{default:t(()=>[e(j,null,{default:t(()=>[e(T,null,{default:t(()=>[_(c(o),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[we],[Se]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(fe),e($,{src:et.value[ce.value],"show-copy":"",class:D(["q-py-lg",n(u).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":n(a)("copy"),"copy-response-text":n(a)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Le,{name:1},{default:t(()=>[e(Qe,{"input-style":"font-family: monospace",modelValue:L.value,"onUpdate:modelValue":[i[7]||(i[7]=o=>L.value=o),tt],clearable:"",outlined:"",label:L.value?`${n(a)("embedding.key_to_top_up")}`:n(a)("embedding.key_enter_placeholder_to_topup"),error:!ne.value,"error-message":L.value?n(a)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),ne.value?(p(),S(E,{key:0},[e(It,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(N,{class:D(n(u).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e(j,{avatar:"",style:ye(n(u).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(Y,{name:"help_outline",class:"cursor-pointer",size:n(u).screen.lt.sm?"xs":""},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(j,null,{default:t(()=>[e(T,{overline:"",class:"row items-center"},{default:t(()=>[_(c(n(a)("embedding.remaining")),1)]),_:1}),y.value?X("",!0):(p(),q(T,{key:0},{default:t(()=>[_(c(w(z.value)),1)]),_:1}))]),_:1}),e(be,{showing:C.value},null,8,["showing"])]),_:1},8,["class"]),e(M,{flat:"",icon:"sync",class:"q-ml-sm",disable:!ne.value||C.value,size:n(u).screen.lt.sm?"sm":"md",onClick:i[8]||(i[8]=o=>U(L.value))},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(pe),e(M,{flat:"","no-caps":"",icon:"history",label:n(u).screen.lt.sm?"":n(a)("embedding.usage_history"),dense:n(u).screen.lt.sm,disable:!ne.value||C.value,onClick:nt},null,8,["label","dense","disable"])]),_:1}),e(fe)],64)):X("",!0),e(se,{flat:""},{default:t(()=>[e(P,null,{default:t(()=>[e(N,null,{default:t(()=>[e(j,{avatar:"",side:""},{default:t(()=>[e(Y,{name:"fab fa-stripe",size:"sm"}),e(Y,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(j,null,{default:t(()=>[e(T,null,{default:t(()=>[_(c(n(a)("embedding.buy_more_quota")),1)]),_:1}),e(T,{caption:""},{default:t(()=>[_(c(n(a)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(p(!0),S(E,null,W(n(v),(o,Q)=>(p(),S("div",{key:Q,class:"col-12 col-md-6 col-lg-4"},[ie((p(),q(se,{bordered:"",flat:"",class:D(["q-mr-md q-mb-md",ne.value&&!C.value&&!oe.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:ye(oe.value===o.price_id?"cursor: wait !important;":""),onClick:R=>at(o.price_id)},{default:t(()=>[aa,e(P,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[_(c(n(a)(`embedding.${o.product_name.replace(".","_")}`)),1)]),_:2},1024),e(P,null,{default:t(()=>[e(N,null,{default:t(()=>[e(j,null,{default:t(()=>[e(T,{class:"text-bold"},{default:t(()=>[_("$"+c(o.price),1)]),_:2},1024),e(T,{caption:""},{default:t(()=>[_("$"+c(Number((o.price/o.token_quantity*1e3).toFixed(6)))+" "+c(n(a)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(j,{side:""},{default:t(()=>[e(Y,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(be,{showing:oe.value===o.price_id,label:n(a)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[we,ne.value&&!C.value&&!oe.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(be,{class:"non-selectable lock-blur",showing:x.value},null,8,["showing"])]),_:1}),e(ht,{modelValue:$e.value,"onUpdate:modelValue":i[10]||(i[10]=o=>$e.value=o),onShow:st,onHide:lt},{default:t(()=>[e(se,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(P,{class:"row items-center q-pb-none"},{default:t(()=>[e(Y,{name:"history",size:"md",class:"q-mr-md"}),b("div",na,c(n(u).screen.lt.sm?"":n(a)("embedding.usage_history")),1),e(pe),ie(e(M,{icon:"close",flat:"",round:"",dense:""},null,512),[[Se]])]),_:1}),e(P,null,{default:t(()=>[e(n(Bt),{ref_key:"usageTableRef",ref:je,flat:"","row-key":"createdAt",rows:Ce.value,columns:ot.value,loading:xe.value,"hide-pagination":!0,onRequest:rt},{"body-cell-icon":t(o=>[e(Ue,{key:"icon",props:o},{default:t(()=>[o.row.amount>0?(p(),q(Y,{key:0,name:"o_add_circle_outline",color:"primary"})):(p(),q(Y,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(o=>[e(Ue,{key:"amount",props:o},{default:t(()=>[_(c((o.row.amount>0?"+":"")+w(o.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var sa="/assets/paper_1.8ed04d7d.png",la="/assets/paper_2.59e1399a.png";const oa=b("span",{class:"q-focus-helper"},null,-1),ra={class:"q-mb-xl"},Ma=ue({__name:"ResearchersComponent",setup(l){ge({useScope:"global"});const a=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:sa,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:la,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(u,f)=>(p(),S(E,null,W(a,(r,g)=>ie(e(se,{key:g,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[oa,e(Et,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(P,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(N,{href:r.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e(j,null,{default:t(()=>[b("div",ra,[e(re,{label:r.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),r.conference?(p(),q(re,{key:0,label:r.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(p(),q(re,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(pe),e(T,{class:"text-h6 q-mb-lg"},{default:t(()=>[_(c(r.title),1)]),_:2},1024),e(T,{caption:"",lines:"3"},{default:t(()=>[_(c(r.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(me,{src:r.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[we]])),64))}});function ia(l){const a=h(null);return de(()=>{a.value&&a.value(),a.value=l()}),yt(()=>{var u;(u=a.value)==null||u.call(a)}),{watchStopHandle:a}}const ua=ue({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(l,{emit:a}){const u=a,f=l;let r=h(""),g=0,v=null;const x=()=>{g=0,v&&(clearInterval(v),v=null)},te=()=>{v=window.setInterval(()=>{g<f.text.length?(r.value+=f.text[g],g++):(clearInterval(v),v=null,u("done"))},f.speedTime)};return ia(()=>Fe(f.text,A=>{if(r.value.length===A.length){x();return}!v&&g<A.length&&te()},{immediate:!0})),(A,I)=>{const H=Je("q-markdown");return p(),q(H,{src:n(r),"no-line-numbers":""},null,8,["src"])}}});const ca={key:"result",class:"row justify-center q-mb-xl"},da={class:"text-caption text-grey"},pa={class:"text-caption text-grey"},Na=ue({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(l){const{t:a}=ge({useScope:"global"}),u=Oe(),f=h(!1),r=l;function g([y,U]){return Array.from({length:U-y+1},(w,ae)=>y+ae)}function v(y){return y[Math.floor(Math.random()*y.length)]}const x=V(()=>{const y=g([1,12]).map(U=>a(`impact_snapshots.project${U}`));return`${a("landing_page.how_to")} ${v(y).slice(0,-1).toLowerCase()}?`}),te=V(()=>{const y=g([1,12]).map(U=>a(`embedding.faqs.question${U}`));return`${v(y).slice(0,-1).toLowerCase()}?`}),A=h(""),I=h(!1),H=h(null),d=h([]),k=async()=>{var ae,le,ve;if(!await((ae=H.value)==null?void 0:ae.validate()))return Promise.reject();const y=A.value,U={parameters:{question:y}},w={query:y,stream:!0};I.value=!0,d.value=[];try{const B=await fetch(C(),{headers:{"content-type":"application/json"},body:JSON.stringify(r.isFAQ?w:U),method:"POST"});if(!B.ok)throw new Error(`HTTP error! status: ${B.status}`);if((le=B.headers.get("content-type"))!=null&&le.includes("text/event-stream")){if(B.body){const Z=B.body.getReader(),ke=new TextDecoder;for(;;){const{done:qe,value:_e}=await Z.read();if(qe)break;_e&&(I.value=!1,ke.decode(_e).split(`

`).forEach(K=>{const O=K.replace(/data: /g,"");O&&d.value.push(O)}))}}}else if((ve=B.headers.get("content-type"))!=null&&ve.includes("application/json")){const Z=(await B.json()).data;d.value=[Z]}else throw new Error("Unknown response type")}catch(B){u.notify({color:"negative",message:a("landing_page.error",{message:B}),icon:"report_problem"})}finally{I.value=!1}};function m(){return Ze(d.value.join("")).then(()=>{u.notify({message:a("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const z=V(()=>wt.value.filter(y=>d.value.join("").toLowerCase().includes(y.label.toLowerCase().replace("landing_page.",""))));function C(){return r.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${f.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(y,U)=>(p(),S(E,null,[e(Ut,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Ye(k,["prevent","stop"])},{default:t(()=>[e(n(Qe),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:n(a)("landing_page.ask_how_your_question"),placeholder:l.isFAQ?te.value:x.value,modelValue:A.value,"onUpdate:modelValue":U[0]||(U[0]=w=>A.value=w),clearable:"",ref_key:"questionRef",ref:H,loading:I.value,disable:I.value,rules:[w=>!!w&&w.length>5||n(a)("landing_page.require_full_question")]},{prepend:t(()=>[e(Y,{name:"img:/J.svg"})]),append:t(()=>[e(M,{flat:"",icon:"send",type:"submit",onClick:k})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1}),d.value.length||I.value?(p(),S("div",ca,[e(se,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[I.value?(p(),q(P,{key:0},{default:t(()=>[e(Y,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),b("span",da,c(l.isFAQ?n(a)("landing_page.finding_faq"):n(a)("landing_page.proposing_solution")),1),(p(),S(E,null,W([0,1,2,3,4],w=>e(Kt,{key:w,class:"q-my-xs",width:w>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(p(),S(E,{key:1},[z.value.length>0&&!l.isFAQ?(p(),q(P,{key:0},{default:t(()=>[b("span",pa,c(n(a)("landing_page.mentioned_products")),1),(p(!0),S(E,null,W(z.value,w=>(p(),q(re,{size:"sm",key:w,label:n(a)(w.label),icon:w.icon?`img:${w.icon}`:"widgets",onClick:ae=>n(We)(w.link),clickable:""},{default:t(()=>[e(ee,null,{default:t(()=>[_(c(n(a)(w.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):X("",!0),e(fe),e(P,{class:"q-pa-xl"},{default:t(()=>[e(ua,{text:d.value},null,8,["text"])]),_:1}),e(fe),e(Xe,{align:"right"},{default:t(()=>[e(Lt,{square:""},{default:t(()=>[e(M,{square:"","no-caps":"",icon:"content_copy",onClick:m,label:n(a)("landing_page.copy")},null,8,["label"]),e(M,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:n(a)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):X("",!0)],64))}});var ma="/assets/pattern-developers.4f94c0e3.svg";const fa={class:"row"},ga={class:"row items-center justify-start text-h2 text-white",href:"#developers",style:{"text-decoration":"none !important"}},va={class:"row text-grey-5 q-py-lg"},_a={class:"col-12 col-md-8"},ha={class:"row text-grey-5 q-py-lg relative-position"},ba={class:"col-12 col-md-8"},Va=ue({__name:"LabeledPanel",props:{title:{},description:{},products:{}},emits:["click-tag","click-card"],setup(l,{emit:a}){const{t:u}=ge({useScope:"global"}),f=l,r=a,g=V(()=>{const d=new Set;return f.products.forEach(k=>{k.tags.forEach(m=>d.add(m))}),Array.from(d)}),v=h([]),x=V(()=>f.products.filter(d=>v.value.length===0?!0:v.value.some(k=>d.tags.includes(k))).sort((d,k)=>d.order-k.order)),te=d=>{r("click-tag",d),!v.value.includes(d)&&v.value.push(d)},A=d=>{v.value=v.value.filter(k=>k!==d)},I=h(!1),H=d=>{r("click-card",d.label),We(d.homepage)};return(d,k)=>(p(),S("div",fa,[b("div",{class:D(["col-12 col-md-5 column justify-start",d.$q.screen.lt.md?"items-center":"items-start"])},[b("a",ga,c(d.title),1),b("div",va,[b("div",_a,c(d.description),1)]),b("div",ha,[b("div",ba,[(p(!0),S(E,null,W(g.value,m=>(p(),q(re,{key:m,label:n(u)(`project_status.${m}`),size:"md",outline:"",square:"",clickable:"",removable:v.value.includes(m),icon:n(ze)[m],color:"grey-3",class:"no-border-radius non-selectable cursor-pointer",onClick:z=>te(m),onRemove:z=>A(m)},null,8,["label","removable","icon","onClick","onRemove"]))),128))]),e(me,{src:ma,class:"absolute",style:{width:"100%",top:"100%",left:"-40%","z-index":"-1"},fit:"fill"})])],2),b("div",{class:D(["col-12 col-md-7 row",d.$q.screen.lt.md?"justify-center":"justify-start"])},[(p(!0),S(E,null,W(x.value,(m,z)=>(p(),S("div",{key:z,class:D(["q-pa-xs",{"col-6":d.$q.screen.gt.md&&m.tags.includes("core")||d.$q.screen.lt.md&&!m.tags.includes("core"),"col-8":d.$q.screen.md&&m.tags.includes("core"),"col-12":d.$q.screen.lt.md&&m.tags.includes("core"),"col-3":d.$q.screen.gt.md&&!m.tags.includes("core"),"col-4":d.$q.screen.md&&!m.tags.includes("core")}]),style:{maxHeight:"260px"}},[e(se,{flat:"",square:"",class:"q-px-sm q-py-lg text-white full-height relative-position cursor-pointer bg-dark-page overflow-hidden non-selectable",onMouseenter:C=>I.value=z,onMouseleave:k[0]||(k[0]=C=>I.value=!1),onClick:C=>H(m)},{default:t(()=>[e(kt,{appear:"","enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"},{default:t(()=>[ie(b("div",{class:"absolute-full",style:ye({backgroundImage:Math.random()>.5?`linear-gradient(
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
                      )`,zIndex:10})},[e(P,{class:"row items-center q-gutter-sm text-no-wrap no-wrap"},{default:t(()=>[m.icon?(p(),q(me,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):X("",!0),b("div",{class:D(m.label.length>10?"text-body":"text-h6")},c(m.label),3)]),_:2},1024),e(P,{class:"text-white"},{default:t(()=>[m.star?(p(),q(re,{key:0,label:m.star+" "+n(u)("github.stars"),icon:"fab fa-github",size:"xs",outline:"",square:"",color:"grey-3",class:"no-border-radius"},null,8,["label"])):X("",!0),(p(!0),S(E,null,W(m.tags,C=>(p(),q(re,{label:n(u)(`project_status.${C}`),size:"xs",outline:"",square:"",icon:n(ze)[C],color:"grey-3",key:C,class:"no-border-radius"},null,8,["label","icon"]))),128))]),_:2},1024),e(Xe,{align:"right"},{default:t(()=>[e(M,{flat:"",round:"",color:"white",icon:"arrow_right_alt"})]),_:1})],4),[[qt,I.value===z]])]),_:2},1024),e(P,{class:"row justify-center"},{default:t(()=>[m.icon?(p(),q(me,{key:0,fit:"contain",height:"40px",width:"40px",src:m.icon},null,8,["src"])):X("",!0)]),_:2},1024),e(P,{class:"row justify-center text-no-wrap text-h6 text-weight-light q-pa-none"},{default:t(()=>[_(c(m.label),1)]),_:2},1024),m.caption?(p(),q(P,{key:0,class:"text-caption q-px-xs text-center"},{default:t(()=>[_(c(m.caption),1)]),_:2},1024)):X("",!0)]),_:2},1032,["onMouseenter","onClick"])],2))),128))],2)]))}});export{Da as N,Kt as Q,Na as _,Ot as a,Le as b,Ha as c,Ma as d,Va as e};
