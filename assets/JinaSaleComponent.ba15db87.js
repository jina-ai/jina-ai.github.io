import{Q as Le}from"./QImg.047918ef.js";import{e as pe,h as Y,a6 as be,a7 as S,a8 as t,ay as ne,bI as ot,a9 as f,aa as e,bl as A,ad as z,ae as C,ag as m,ah as d,ai as a,bo as rt,bp as it,az as q,k as Qe,R as He,S as Ne,i as De,D as Ve,C as Me,$ as ut,P as Te,aH as dt,bH as ct,u as Ke,am as pt,f as g,K as ie,w as Oe,ao as Je,ab as Q,bJ as mt,bK as ft,bL as Pe,aT as gt,ak as U,j as B,ac as se,ap as ce,aB as J,bA as Ce,aj as V,af as oe,Z as ue,bw as Fe,bb as ve,bM as _t,a5 as vt,bN as ht,bC as bt,bu as yt}from"./index.8975648a.js";import{Q as b}from"./QItemLabel.ce5852c8.js";import{_ as wt}from"./NewsBadge.85e3ca6a.js";import{A as kt,Q as _e}from"./blogs.271f0f64.js";import{_ as qt}from"./plugin-vue_export-helper.21dcd24c.js";import{Q as F}from"./QTooltip.5715717c.js";import{Q as $t,a as Ct}from"./QTabs.baca6467.js";import{Q as de}from"./QSpace.33906bad.js";import{a as xe}from"./QSelect.ab2f0a19.js";import{Q as Ie}from"./QList.a5fc0811.js";import{Q as Be}from"./QBtnDropdown.4de912eb.js";import{u as xt,b as St,c as Tt,d as Pt}from"./QCarousel.227b62fc.js";import{u as Qt,Q as At,T as Rt}from"./embedding.3d4f1872.js";import{Q as jt,a as ze,b as It}from"./QTable.870bb4fc.js";import{C as Se}from"./ClosePopup.922be7ac.js";import{c as Ye}from"./copy-to-clipboard.5c8c35fc.js";import{Q as he}from"./QChip.4b2bf3b8.js";import{Q as Bt}from"./QForm.9283187c.js";import{Q as zt}from"./QBtnGroup.4f234898.js";const Ut=l=>(rt("data-v-4867f981"),l=l(),it(),l),Et=Ut(()=>q("span",{class:"q-focus-helper"},null,-1)),Lt=pe({__name:"NewsroomCard",props:{info:{}},setup(l){const n=l,o=Y(()=>ot(n.info.publishedAt).format("MMMM DD, YYYY")),{t:p}=be({useScope:"global"}),u=c=>{window.open(c)};return(c,w)=>(f(),S(ne,{flat:"",square:"",onClick:w[0]||(w[0]=k=>u(`/news/${c.info.slug}`)),class:"cursor-pointer q-hoverable",style:{overflow:"hidden","text-decoration":"none !important"}},{default:t(()=>[Et,e(A,{class:"q-pa-none"},{default:t(()=>[e(Le,{src:c.info.featureImage,height:"200px"},null,8,["src"])]),_:1}),e(A,{style:{height:"250px"}},{default:t(()=>[e(z,null,{default:t(()=>[e(wt,{news:c.info},null,8,["news"])]),_:1}),e(z,null,{default:t(()=>[e(C,{class:"text-h6 text-weight-light"},{default:t(()=>[e(b,{lines:"2"},{default:t(()=>[m(d(c.info.title),1)]),_:1})]),_:1})]),_:1}),e(z,null,{default:t(()=>[e(C,null,{default:t(()=>[e(b,{lines:"3",caption:""},{default:t(()=>[m(d(c.info.excerpt),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(A,null,{default:t(()=>[e(z,null,{default:t(()=>[e(kt,{authors:c.info.authors},null,8,["authors"]),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[m(d(c.info.authors.map(k=>k.name).join(", ")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(d(o.value)+" \u2022 "+d(c.info.readingTime)+" "+d(a(p)("newsroom_page.minutes_read")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});var Qa=qt(Lt,[["__scopeId","data-v-4867f981"]]);const Ht=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],Nt=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var Dt=Qe({name:"QSkeleton",props:{...He,tag:{type:String,default:"div"},type:{type:String,validator:l=>Ht.includes(l),default:"rect"},animation:{type:String,validator:l=>Nt.includes(l),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(l,{slots:n}){const o=Me(),p=Ne(l,o.proxy.$q),u=Y(()=>{const w=l.size!==void 0?[l.size,l.size]:[l.width,l.height];return{"--q-skeleton-speed":`${l.animationSpeed}ms`,width:w[0],height:w[1]}}),c=Y(()=>`q-skeleton q-skeleton--${p.value===!0?"dark":"light"} q-skeleton--type-${l.type}`+(l.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${l.animation}`:"")+(l.square===!0?" q-skeleton--square":"")+(l.bordered===!0?" q-skeleton--bordered":""));return()=>De(l.tag,{class:c.value,style:u.value},Ve(n.default))}}),Ue=Qe({name:"QTabPanel",props:xt,setup(l,{slots:n}){return()=>De("div",{class:"q-tab-panel",role:"tabpanel"},Ve(n.default))}}),Vt=Qe({name:"QTabPanels",props:{...St,...He},emits:Tt,setup(l,{slots:n}){const o=Me(),p=Ne(l,o.proxy.$q),{updatePanelsList:u,getPanelContent:c,panelDirectives:w}=Pt(),k=Y(()=>"q-tab-panels q-panel-parent"+(p.value===!0?" q-tab-panels--dark q-dark":""));return()=>(u(n),ut("div",{class:k.value},c(),"pan",l.swipeable,()=>w.value))}});function Mt(l){const n=Object.assign({noopener:!0},l),o=[];for(const p in n){const u=n[p];u===!0?o.push(p):(ct(u)||typeof u=="string"&&u!=="")&&o.push(p+"="+u)}return o.join(",")}function Ee(l,n,o){let p=window.open;if(Te.is.cordova===!0){if(cordova!==void 0&&cordova.InAppBrowser!==void 0&&cordova.InAppBrowser.open!==void 0)p=cordova.InAppBrowser.open;else if(navigator!==void 0&&navigator.app!==void 0)return navigator.app.loadUrl(l,{openExternal:!0})}const u=p(l,"_blank",Mt(o));if(u)return Te.is.desktop&&u.focus(),u;n&&n()}var Kt=(l,n,o)=>{if(Te.is.ios===!0&&window.SafariViewController!==void 0){window.SafariViewController.isAvailable(p=>{p?window.SafariViewController.show({url:l},dt,n):Ee(l,n,o)});return}return Ee(l,n,o)};const Ot={class:"full-width"},Jt={class:"row q-mb-md q-pa-none"},Ft={class:"full-width ellipsis q-pl-md"},Yt={class:"self-center full-width no-outline",tabindex:"0"},Wt={class:"self-center full-width no-outline",tabindex:"0"},Xt={class:"self-center full-width no-outline",tabindex:"0"},Zt={class:"full-width ellipsis q-pl-md"},Gt=q("span",{class:"q-focus-helper"},null,-1),ea={class:"text-h6"};var We=(l=>(l.CURL="curl",l.PYTHON="Python",l.JAVASCRIPT="JavaScript",l.RUBY="Ruby",l.PHP="PHP",l.JAVA="Java",l.NODEJS="Node.js",l.GO="Go",l.C_SHARP="C#",l.RUST="Rust",l))(We||{});const D="https://api.jina.ai/v1/embeddings",Aa=pe({__name:"EmbeddingComponent",setup(l){const{t:n}=be({useScope:"global"}),o=Ke(),p=Qt(),{apiKey:u,models:c,products:w}=pt(p),k=g(!1),W=async s=>{if(N("event","embedding_refresh_api_key",{location:O.location.href,type:s}),k.value)return;k.value=!0,await p.getApiKey().finally(()=>{k.value=!1})?(P.value=u.value,_.value=!1):o.notify({message:n("embedding.generate_api_key_error"),textColor:"negative",icon:"error"})};ie(()=>{navigator.userAgent.toLowerCase().includes("headless")||u.value||W("auto")});const E=g(!1),R=()=>{N("event","embedding_copy_api_key",{location:O.location.href}),!(!u.value||E.value)&&(Ye(u.value).then(()=>{o.notify({message:n("copy_to_clipboard_success"),textColor:"positive",icon:"done"}),E.value=!0}),setTimeout(()=>{E.value=!1},1800))},X=g(0),j=g(!1),M=g(!1),le=async s=>{j.value=!0,M.value=!1;const i=await p.getTokens(s);if(j.value=!1,i===void 0){M.value=!0;return}X.value=i,Z.value=X.value};ie(()=>{!u.value||le(u.value)}),Oe(u,s=>{!s||le(s)});const Z=g(0),I=g(!1),_=g(!1),T=async s=>{I.value=!0,_.value=!1;const i=await p.getTokens(s);if(I.value=!1,i===void 0){_.value=!0;return}Z.value=i,u.value=s},v=s=>new Intl.NumberFormat("en").format(s),G=[{name:0,label:"embedding.code",icon:"code",value:"code"},{name:1,label:"embedding.manage_quota",icon:"shopping_cart",value:"manage_quota"}],te=g(0),me=s=>{N("event","embedding_change_tab",{location:O.location.href,tab:G[s].value}),s===1&&(P.value||(_.value=M.value,M.value||(P.value=u.value,Z.value=X.value)))},x=g(!1),K=g();ie(()=>{ye()});const ye=async()=>{x.value=!0,await p.getModels(),x.value=!1,c.value.length>0&&(K.value=c.value.find(s=>s.rank===1)||c.value[1])},we=s=>{N("event","embedding_choose_model",{location:O.location.href,model:s.name}),K.value=s},fe=s=>{N("event","embedding_view_model_detail",{location:O.location.href,model:s}),Kt(`https://huggingface.co/jinaai/${s}`,void 0,{})},Ae=s=>{N("event","embedding_choose_code_lang",{location:O.location.href,lang:s}),re.value=s},re=g("curl"),L=["Your text string goes here","You can send multiple texts"],H=`["${L[0]}", "${L[1]}"]`,Xe=Y(()=>{var h;const s=u.value||"$JINA_API_KEY",i=((h=K.value)==null?void 0:h.name)||"$MODEL_NAME";return{curl:`
\`\`\`bash
curl ${D} \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer ${s}" \\
  -d '{
    "input": ${H},
    "model": "${i}"
  }'
\`\`\`
    `,Python:`
\`\`\`python
import requests

url = '${D}'

headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ${s}'
}

data = {
  'input': ${H},
  'model': '${i}'
}

response = requests.post(url, headers=headers, json=data)
\`\`\`
    `,JavaScript:`
\`\`\`js
const url = "${D}";

const headers = {
  "Content-Type": "application/json",
  "Authorization": "Bearer ${s}",
};

const data = {
  input: '${H}',
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

uri = URI.parse("${D}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

headers = {
  'Content-Type' => 'application/json',
  'Authorization' => 'Bearer ${s}'
}

data = {
  'input' => ${H},
  'model' => '${i}'
}

response = http.post(uri.path, data.to_json, headers)
puts response.body
\`\`\`
    `,PHP:`
\`\`\`python
<?php
$url = "${D}";

$headers = array(
    "Content-Type: application/json",
    "Authorization: Bearer ${s}"
);

$data = array(
    "input" => array("${L[0]}", "${L[1]}"),
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
        String url = "${D}";
        URL obj = new URL(url);
        HttpURLConnection con = (HttpURLConnection) obj.openConnection();

        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");
        con.setRequestProperty("Authorization", "Bearer ${s}");

        con.setDoOutput(true);
        String data = "{"input": ["${L[0]}", "${L[1]}"],"model": "${i}"}";

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

const url = "${D}";
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ${s}',
  }
};

const data = {
  input: ${H},
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
	url := "${D}"
	headers := map[string]string{
		"Content-Type": "application/json",
		"Authorization": "Bearer ${s}",
	}

	data := \`{
		"input": ${H},
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
        string url = "${D}";
        HttpClient client = new HttpClient();

        client.DefaultRequestHeaders.Add("Content-Type", "application/json");
        client.DefaultRequestHeaders.Add("Authorization", "Bearer ${s}");

        string data = @"{
            ""input"": [""${L[0]}"", ""${L[1]}""],
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

    let res = client.post("${D}")
        .header("Content-Type", "application/json")
        .header("Authorization", "Bearer ${s}")
        .body(r#"{
            "input": ${H},
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
    `}}),P=g(""),ee=Y(()=>!!P.value&&P.value.length===u.value.length&&!_.value),Ze=s=>{if(!(!s||typeof s=="number"||s.length!==u.value.length)){if(s===u.value){Z.value=X.value,_.value=M.value;return}T(s)}};ie(()=>{w.value.length||p.getProducts()});const ae=g(""),Ge=async s=>{if(!ee.value||I.value||ae.value)return;const i=w.value.find(lt=>lt.price_id===s);let h,r;const y=new URL(window.location.href);y.pathname==="/"&&(y.hash="#enterprises"),y.searchParams.set("price_id",s),y.searchParams.set("session_id","{CHECKOUT_SESSION_ID}"),r=y.toString(),y.searchParams.set("purchase_status","success"),h=y.toString(),ae.value=s;const $={price_id:s,success_url:h,cancel_url:r},ge=localStorage.getItem(_t);ge&&($.meta_data={sales_key:ge}),i&&N("event","begin_checkout",{currency:i.currency,value:i.price,items:[{id:i.product_id,name:i.product_name}]});const je=await p.checkoutWithStripe(P.value,$);ae.value="",je&&(window.location.href=je.url)},ke=g(!1),et=()=>{!ee.value||I.value||(ke.value=!0)},tt=()=>{var s;(s=Re.value)==null||s.requestServerInteraction()},at=()=>{$e.value=[]},qe=g(!1),Re=g(null),$e=g([]),nt=g([{name:"icon",label:"",field:"amount",sortable:!1,align:"right"},{name:"createdAt",label:n("embedding.usage_time"),field:"createdAt",sortable:!1,align:"left",format:s=>{if(typeof s=="string")return new Date(s).toLocaleString();if(s instanceof Date)return s.toLocaleString();if(s)return s.toDate().toLocaleString()}},{name:"amount",label:n("embedding.usage_amount"),field:"amount",sortable:!1,align:"left",format:s=>s>0?`+${s}`:`${s}`},{name:"reason",label:n("embedding.usage_reason"),field:"reason",sortable:!1,align:"left"}]),st=async s=>{qe.value=!0;const i=await p.getUsage(P.value);qe.value=!1,!(!i||i.length===0)&&($e.value=i.map(h=>{const r=new Date(h.updated_at);let y=h.quantity,$=n(`embedding.usage_reason_${h.type}`);return h.type===Rt.CONSUME?(y=-y,h.metadata.model_name&&($=$+": "+h.metadata.model_name)):(h.metadata.product_name&&($=$+": "+h.metadata.product_name),h.metadata.order_quantity&&h.metadata.order_quantity>1&&($=$+` (x ${h.metadata.order_quantity})`)),{createdAt:r,amount:y,reason:$}}),le(P.value))},N=window.gtag,O=window.document;return(s,i)=>{const h=Je("q-markdown");return f(),Q(U,null,[q("div",Ot,[e(Pe,{modelValue:a(u),"onUpdate:modelValue":i[1]||(i[1]=r=>ft(u)?u.value=r:null),label:a(n)("embedding.key"),readonly:"",standout:"",class:"full-width",loading:k.value,disable:k.value,"input-style":"font-family: monospace;",hint:a(n)("embedding.key_warn_v2"),"input-class":"ellipsis"},mt({prepend:t(()=>[e(B,{flat:"",round:"",icon:"refresh",onClick:i[0]||(i[0]=r=>W("manual"))},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.refresh_key_tooltip")),1)]),_:1})]),_:1})]),_:2},[k.value?void 0:{name:"append",fn:t(()=>[e(B,{flat:"",round:"",icon:E.value?"done":"content_copy",color:E.value?"positive":"",onClick:R},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("copy")),1)]),_:1})]),_:1},8,["icon","color"])]),key:"0"}]),1032,["modelValue","label","loading","disable","hint"])]),e(ne,{flat:"",bordered:"",class:"full-width q-mt-xl"},{default:t(()=>[e($t,{modelValue:te.value,"onUpdate:modelValue":i[3]||(i[3]=r=>te.value=r),"inline-label":"","indicator-color":"primary","active-color":"primary",align:"left"},{default:t(()=>[(f(),Q(U,null,se(G,r=>e(Ct,{key:r.name,name:r.name,label:a(n)(r.label),icon:r.icon},null,8,["name","label","icon"])),64)),e(de),e(B,{stretch:"","no-wrap":"",label:a(n)("faq"),icon:"help_outline",href:"/embeddings#faq",size:a(o).screen.lt.sm?"12px":"md",onClick:i[2]||(i[2]=r=>a(N)("event","embedding_goto_faq",{location:a(O).location.href}))},null,8,["label","size"])]),_:1},8,["modelValue"]),e(ce),e(Vt,{modelValue:te.value,"onUpdate:modelValue":i[9]||(i[9]=r=>te.value=r),animated:"",onBeforeTransition:me},{default:t(()=>[e(Ue,{name:0},{default:t(()=>[q("div",Jt,[q("div",{class:J(["row",a(o).screen.lt.sm?"justify-between col-12":"q-gutter-sm"])},[e(z,{class:J(a(o).screen.lt.sm?"col q-pr-none":"")},{default:t(()=>[e(C,{avatar:"",style:Ce(a(o).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(V,{name:"help_outline",class:"cursor-pointer"},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1})]),_:1},8,["style"]),e(C,{class:J(a(o).screen.lt.sm?"items-center":"")},{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(d(a(n)("embedding.remaining")),1)]),_:1}),M.value?oe("",!0):(f(),S(b,{key:0},{default:t(()=>[m(d(v(X.value)),1)]),_:1}))]),_:1},8,["class"]),e(_e,{showing:j.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",onClick:i[4]||(i[4]=r=>le(a(u)))},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1})],2),a(o).screen.lt.sm?oe("",!0):(f(),S(de,{key:0})),q("div",{class:J(["row",a(o).screen.lt.sm?"col-12":""])},[e(Be,{"no-caps":"",flat:"",square:"",stretch:"",icon:"view_in_ar",loading:x.value,"disable-dropdown":x.value,class:J(a(o).screen.lt.sm?"full-width q-py-md":""),onClick:i[5]||(i[5]=r=>a(N)("event","embedding_click_model_dropdown",{location:a(O).location.href}))},{label:t(()=>{var r;return[q("div",Ft,d((r=K.value)==null?void 0:r.name),1)]}),default:t(()=>[e(Ie,null,{default:t(()=>[(f(!0),Q(U,null,se(a(c),(r,y)=>{var $;return ue((f(),S(z,{key:y,clickable:"",active:r.name===(($=K.value)==null?void 0:$.name),onClick:ge=>we(r),class:"q-pa-lg"},{default:t(()=>[e(C,null,{default:t(()=>[e(b,{overline:"",caption:""},{default:t(()=>[m(d(r.name),1)]),_:2},1024),e(b,{class:"text-weight-bold"},{default:t(()=>[m(d(a(n)(`embedding.${r.name}_description`)),1)]),_:2},1024),e(b,{caption:"",class:"row"},{default:t(()=>[e(xe,{borderless:"",label:a(n)("embedding.length"),"stack-label":"",class:"col"},{control:t(()=>[q("div",Yt,d(a(n)(`embedding.${r.name}_length`)),1)]),_:2},1032,["label"]),e(xe,{borderless:"",label:a(n)("embedding.size"),"stack-label":"",class:"col"},{control:t(()=>[q("div",Wt,d(r.meta_data.size),1)]),_:2},1032,["label"]),e(xe,{borderless:"",label:a(n)("embedding.output_dim"),"stack-label":"",class:"col"},{control:t(()=>[q("div",Xt,d(r.meta_data.output_dim),1)]),_:2},1032,["label"])]),_:2},1024)]),_:2},1024),e(C,{side:""},{default:t(()=>[e(B,{flat:"",icon:"launch",onClick:Fe(ge=>fe(r.name),["stop"])},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.view_details")),1)]),_:1})]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1032,["active","onClick"])),[[ve],[Se]])}),128))]),_:1})]),_:1},8,["loading","disable-dropdown","class"]),e(Be,{icon:"data_object","no-caps":"",flat:"",square:"",stretch:"",class:J(a(o).screen.lt.sm?"full-width q-py-md":""),onClick:i[6]||(i[6]=r=>a(N)("event","embedding_click_code_lang_dropdown",{location:a(O).location.href}))},{label:t(()=>[q("div",Zt,d(re.value),1)]),default:t(()=>[e(Ie,null,{default:t(()=>[(f(),Q(U,null,se(We,(r,y)=>ue(e(z,{key:y,clickable:"",active:r===re.value,"active-class":"text-primary bg-grey-10",onClick:$=>Ae(r)},{default:t(()=>[e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[m(d(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["active","onClick"]),[[ve],[Se]])),64))]),_:1})]),_:1},8,["class"])],2)]),e(ce),e(h,{src:Xe.value[re.value],"show-copy":"",class:J(["q-py-lg",a(o).screen.lt.sm?"q-px-none":"q-px-md"]),"no-line-numbers":"","copy-tooltip-text":a(n)("copy"),"copy-response-text":a(n)("copy_to_clipboard_success")},null,8,["src","class","copy-tooltip-text","copy-response-text"])]),_:1},8,["name"]),e(Ue,{name:1},{default:t(()=>[e(Pe,{"input-style":"font-family: monospace",modelValue:P.value,"onUpdate:modelValue":[i[7]||(i[7]=r=>P.value=r),Ze],clearable:"",outlined:"",label:P.value?`${a(n)("embedding.key_to_top_up")}`:a(n)("embedding.key_enter_placeholder_to_topup"),error:!ee.value,"error-message":P.value?a(n)("embedding.input_api_key_error"):"",class:"full-width","input-class":"ellipsis"},null,8,["modelValue","label","error","error-message"]),ee.value?(f(),Q(U,{key:0},[e(At,{class:"row q-mb-md q-pa-none q-gutter-sm"},{default:t(()=>[e(z,{class:J(a(o).screen.lt.sm?"q-px-none":"")},{default:t(()=>[e(C,{avatar:"",style:Ce(a(o).screen.lt.sm?"min-width: auto !important;":"")},{default:t(()=>[e(V,{name:"help_outline",class:"cursor-pointer",size:a(o).screen.lt.sm?"xs":""},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.what_is_a_token")),1)]),_:1})]),_:1},8,["size"])]),_:1},8,["style"]),e(C,null,{default:t(()=>[e(b,{overline:"",class:"row items-center"},{default:t(()=>[m(d(a(n)("embedding.remaining")),1)]),_:1}),_.value?oe("",!0):(f(),S(b,{key:0},{default:t(()=>[m(d(v(Z.value)),1)]),_:1}))]),_:1}),e(_e,{showing:I.value},null,8,["showing"])]),_:1},8,["class"]),e(B,{flat:"",icon:"sync",class:"q-ml-sm",disable:!ee.value||I.value,size:a(o).screen.lt.sm?"sm":"md",onClick:i[8]||(i[8]=r=>T(P.value))},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(n)("embedding.refresh_token_count1")),1)]),_:1})]),_:1},8,["disable","size"]),e(de),e(B,{flat:"","no-caps":"",icon:"history",label:a(o).screen.lt.sm?"":a(n)("embedding.usage_history"),dense:a(o).screen.lt.sm,disable:!ee.value||I.value,onClick:et},null,8,["label","dense","disable"])]),_:1}),e(ce)],64)):oe("",!0),e(ne,{flat:""},{default:t(()=>[e(A,null,{default:t(()=>[e(z,null,{default:t(()=>[e(C,{avatar:"",side:""},{default:t(()=>[e(V,{name:"fab fa-stripe",size:"sm"}),e(V,{name:"fab fa-cc-visa",size:"sm",class:"q-ml-sm"})]),_:1}),e(C,null,{default:t(()=>[e(b,null,{default:t(()=>[m(d(a(n)("embedding.buy_more_quota")),1)]),_:1}),e(b,{caption:""},{default:t(()=>[m(d(a(n)("embedding.token_example")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(A,{class:"row",style:{"margin-right":"-16px"}},{default:t(()=>[(f(!0),Q(U,null,se(a(w),(r,y)=>(f(),Q("div",{key:y,class:"col-12 col-md-6 col-lg-4"},[ue((f(),S(ne,{bordered:"",flat:"",class:J(["q-mr-md q-mb-md",ee.value&&!I.value&&!ae.value?"q-hoverable cursor-pointer":"cursor-not-allowed"]),square:"",style:Ce(ae.value===r.price_id?"cursor: wait !important;":""),onClick:$=>Ge(r.price_id)},{default:t(()=>[Gt,e(A,{class:"column items-center non-selectable q-py-xl text-h6"},{default:t(()=>[m(d(a(n)(`embedding.${r.product_name.replace(".","_")}`)),1)]),_:2},1024),e(A,null,{default:t(()=>[e(z,null,{default:t(()=>[e(C,null,{default:t(()=>[e(b,{class:"text-bold"},{default:t(()=>[m("$"+d(r.price),1)]),_:2},1024),e(b,{caption:""},{default:t(()=>[m("$"+d(Number((r.price/r.token_quantity*1e3).toFixed(6)))+" "+d(a(n)("embedding.per_k")),1)]),_:2},1024)]),_:2},1024),e(C,{side:""},{default:t(()=>[e(V,{name:"add_shopping_cart"})]),_:1})]),_:2},1024)]),_:2},1024),e(_e,{showing:ae.value===r.price_id,label:a(n)("embedding.wait_stripe"),"label-style":"font-size: 0.8em",size:"sm",class:"non-selectable lock-blur"},null,8,["showing","label"])]),_:2},1032,["class","style","onClick"])),[[ve,ee.value&&!I.value&&!ae.value]])]))),128))]),_:1})]),_:1})]),_:1},8,["name"])]),_:1},8,["modelValue"]),e(_e,{class:"non-selectable lock-blur",showing:k.value},null,8,["showing"])]),_:1}),e(gt,{modelValue:ke.value,"onUpdate:modelValue":i[10]||(i[10]=r=>ke.value=r),onShow:tt,onHide:at},{default:t(()=>[e(ne,{style:{width:"1000px","max-width":"80vw"},class:"bg-grey-10"},{default:t(()=>[e(A,{class:"row items-center q-pb-none"},{default:t(()=>[e(V,{name:"history",size:"md",class:"q-mr-md"}),q("div",ea,d(a(o).screen.lt.sm?"":a(n)("embedding.usage_history")),1),e(de),ue(e(B,{icon:"close",flat:"",round:"",dense:""},null,512),[[Se]])]),_:1}),e(A,null,{default:t(()=>[e(a(jt),{ref_key:"usageTableRef",ref:Re,flat:"","row-key":"createdAt",rows:$e.value,columns:nt.value,loading:qe.value,"hide-pagination":!0,onRequest:st},{"body-cell-icon":t(r=>[e(ze,{key:"icon",props:r},{default:t(()=>[r.row.amount>0?(f(),S(V,{key:0,name:"o_add_circle_outline",color:"primary"})):(f(),S(V,{key:1,name:"o_remove_circle_outline",color:"negative"}))]),_:2},1032,["props"])]),"body-cell-amount":t(r=>[e(ze,{key:"amount",props:r},{default:t(()=>[m(d((r.row.amount>0?"+":"")+v(r.row.amount)),1)]),_:2},1032,["props"])]),_:1},8,["rows","columns","loading"])]),_:1})]),_:1})]),_:1},8,["modelValue"])],64)}}});var ta="/assets/paper_1.8ed04d7d.png",aa="/assets/paper_2.59e1399a.png";const na=q("span",{class:"q-focus-helper"},null,-1),sa={class:"q-mb-xl"},Ra=pe({__name:"ResearchersComponent",setup(l){be({useScope:"global"});const n=[{title:"Jina Embeddings 2: 8192-Token General-Purpose Text Embeddings for Long Documents",summary:"Text embedding models have emerged as powerful tools for transforming sentences into fixed-sized feature vectors that encapsulate semantic information. While these models are essential for tasks like information retrieval, semantic clustering, and text re-ranking, most existing open-source models, especially those built on architectures like BERT, struggle to represent lengthy documents and often resort to truncation. One common approach to mitigate this challenge involves splitting documents into smaller paragraphs for embedding. However, this strategy results in a much larger set of vectors, consequently leading to increased memory consumption and computationally intensive vector searches with elevated latency.",paperImage:ta,link:"https://arxiv.org/abs/2310.19923",date:"2023.11"},{title:"Jina Embeddings: A Novel Set of High-Performance Sentence Embedding Models",summary:"Jina Embeddings constitutes a set of high-performance sentence embedding models adept at translating textual inputs into numerical representations, capturing the semantics of the text. These models excel in applications like dense retrieval and semantic textual similarity. This paper details the development of Jina Embeddings, starting with the creation of high-quality pairwise and triplet datasets. It underlines the crucial role of data cleaning in dataset preparation, offers in-depth insights into the model training process, and concludes with a comprehensive performance evaluation using the Massive Text Embedding Benchmark (MTEB).",paperImage:aa,link:"https://arxiv.org/abs/2307.11224",date:"2023.8",conference:"EMNLP 2023"}];return(o,p)=>(f(),Q(U,null,se(n,(u,c)=>ue(e(ne,{key:c,flat:"",class:"q-hoverable cursor-pointer q-mb-md"},{default:t(()=>[na,e(It,{value:100,size:"sm",color:"primary",class:"research-card__progress"}),e(A,{class:"q-pa-none",horizontal:""},{default:t(()=>[e(z,{href:u.link,target:"_blank",class:"q-pa-lg col-9"},{default:t(()=>[e(C,null,{default:t(()=>[q("div",sa,[e(he,{label:u.date,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"]),u.conference?(f(),S(he,{key:0,label:u.conference,outline:"",square:"",size:"xs",class:"non-selectable no-border-radius"},null,8,["label"])):(f(),S(he,{key:1,label:"arXiv",outline:"",square:"",size:"xs",icon:"img:/arxiv_logo.svg",class:"non-selectable no-border-radius"}))]),e(de),e(b,{class:"text-h6 q-mb-lg"},{default:t(()=>[m(d(u.title),1)]),_:2},1024),e(b,{caption:"",lines:"3"},{default:t(()=>[m(d(u.summary),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["href"]),e(Le,{src:u.paperImage,class:"research-card__img",fit:"cover"},null,8,["src"])]),_:2},1024)]),_:2},1024),[[ve]])),64))}});function la(l){const n=g(null);return ie(()=>{n.value&&n.value(),n.value=l()}),vt(()=>{var o;(o=n.value)==null||o.call(n)}),{watchStopHandle:n}}const oa=pe({__name:"TypingText",props:{text:{default:()=>[]},speedTime:{default:20},isAnimated:{type:Boolean,default:!0}},emits:["done"],setup(l,{emit:n}){const o=l;let p=g(""),u=0,c=null;const w=()=>{u=0,c&&(clearInterval(c),c=null)},k=()=>{c=window.setInterval(()=>{u<o.text.length?(p.value+=o.text[u],u++):(clearInterval(c),c=null,n("done"))},o.speedTime)};return la(()=>Oe(o.text,W=>{if(p.value.length===W.length){w();return}!c&&u<W.length&&k()},{immediate:!0})),(W,E)=>{const R=Je("q-markdown");return f(),S(R,{src:a(p),"no-line-numbers":""},null,8,["src"])}}});const ra={key:"result",class:"row justify-center q-mb-xl"},ia={class:"text-caption text-grey"},ua={class:"text-caption text-grey"},ja=pe({__name:"JinaSaleComponent",props:{isFAQ:Boolean},setup(l){const n=l,{t:o}=be({useScope:"global"}),p=Ke(),u=g(!1);function c([_,T]){return Array.from({length:T-_+1},(v,G)=>_+G)}function w(_){return _[Math.floor(Math.random()*_.length)]}const k=Y(()=>{const _=c([1,12]).map(T=>o(`impact_snapshots.project${T}`));return`${o("landing_page.how_to")} ${w(_).slice(0,-1).toLowerCase()}?`}),W=Y(()=>{const _=c([1,12]).map(T=>o(`embedding.faqs.question${T}`));return`${w(_).slice(0,-1).toLowerCase()}?`}),E=g(""),R=g(!1),X=g(null),j=g([]),M=async()=>{var G,te,me;if(!await((G=X.value)==null?void 0:G.validate()))return Promise.reject();const _=E.value,T={parameters:{question:_}},v={query:_,stream:!0};R.value=!0,j.value=[];try{const x=await fetch(I(),{headers:{"content-type":"application/json"},body:JSON.stringify(n.isFAQ?v:T),method:"POST"});if(!x.ok)throw new Error(`HTTP error! status: ${x.status}`);if((te=x.headers.get("content-type"))!=null&&te.includes("text/event-stream")){if(x.body){const K=x.body.getReader(),ye=new TextDecoder;for(;;){const{done:we,value:fe}=await K.read();if(we)break;fe&&(R.value=!1,ye.decode(fe).split(`

`).forEach(L=>{const H=L.replace(/data: /g,"");H&&j.value.push(H)}))}}}else if((me=x.headers.get("content-type"))!=null&&me.includes("application/json")){const K=(await x.json()).data;j.value=[K]}else throw new Error("Unknown response type")}catch(x){p.notify({color:"negative",message:o("landing_page.error",{message:x}),icon:"report_problem"})}finally{R.value=!1}};function le(){return Ye(j.value.join("")).then(()=>{p.notify({message:o("landing_page.copied_to_clipboard")}),window.gtag&&window.gtag("event","HOME_COPY_PP_SOLUTION")})}const Z=Y(()=>ht.value.filter(_=>j.value.join("").toLowerCase().includes(_.label.toLowerCase().replace("landing_page.",""))));function I(){return n.isFAQ?"https://api.promptperfect.jina.ai/db/iyDbpjpI8e3uEfjhKaxT/query":`https://api.promptperfect.jina.ai/${u.value?"rD7Q8Bx33EFrVmxovRPA":"EEBuotbLAugUDjr4mq1j"}`}return(_,T)=>(f(),Q(U,null,[e(Bt,{class:"row justify-center q-mb-xl",key:"form",onSubmit:Fe(M,["prevent","stop"])},{default:t(()=>[e(a(Pe),{class:"col-12 col-sm-10 col-md-8 col-lg-6",filled:"",square:"",label:a(o)("landing_page.ask_how_your_question"),placeholder:l.isFAQ?W.value:k.value,modelValue:E.value,"onUpdate:modelValue":T[0]||(T[0]=v=>E.value=v),clearable:"",ref_key:"questionRef",ref:X,loading:R.value,disable:R.value,rules:[v=>!!v&&v.length>5||a(o)("landing_page.require_full_question")]},{prepend:t(()=>[e(V,{name:"img:/J.svg"})]),append:t(()=>[e(B,{flat:"",icon:"send",type:"submit",onClick:M})]),_:1},8,["label","placeholder","modelValue","loading","disable","rules"])]),_:1},8,["onSubmit"]),j.value.length||R.value?(f(),Q("div",ra,[e(ne,{flat:"",class:"col-12 col-sm-10 col-md-8 col-lg-6"},{default:t(()=>[R.value?(f(),S(A,{key:0},{default:t(()=>[e(V,{name:"img:https://promptperfect.jina.ai/PromptPerfect-dark.svg",class:"q-mr-sm"},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(o)("landing_page.powered_by_promptperfect")),1)]),_:1})]),_:1}),q("span",ia,d(l.isFAQ?a(o)("landing_page.finding_faq"):a(o)("landing_page.proposing_solution")),1),(f(),Q(U,null,se([0,1,2,3,4],v=>e(Dt,{key:v,class:"q-my-xs",width:v>0?"":"100px",type:"text"},null,8,["width"])),64))]),_:1})):(f(),Q(U,{key:1},[Z.value.length>0&&!l.isFAQ?(f(),S(A,{key:0},{default:t(()=>[q("span",ua,d(a(o)("landing_page.mentioned_products")),1),(f(!0),Q(U,null,se(Z.value,v=>(f(),S(he,{size:"sm",key:v,label:a(o)(v.label),icon:v.icon?`img:${v.icon}`:"widgets",onClick:G=>a(bt)(v.link),clickable:""},{default:t(()=>[e(F,null,{default:t(()=>[m(d(a(o)(v.description)),1)]),_:2},1024)]),_:2},1032,["label","icon","onClick"]))),128))]),_:1})):oe("",!0),e(ce),e(A,{class:"q-pa-xl"},{default:t(()=>[e(oa,{text:j.value},null,8,["text"])]),_:1}),e(ce),e(yt,{align:"right"},{default:t(()=>[e(zt,{square:""},{default:t(()=>[e(B,{square:"","no-caps":"",icon:"content_copy",onClick:le,label:a(o)("landing_page.copy")},null,8,["label"]),e(B,{square:"",icon:"handshake","no-caps":"",to:"/contact-sales",label:a(o)("landing_page.contact_sales")},null,8,["label"])]),_:1})]),_:1})],64))]),_:1})])):oe("",!0)],64))}});export{Qa as N,Dt as Q,ja as _,Vt as a,Ue as b,Aa as c,Ra as d};
