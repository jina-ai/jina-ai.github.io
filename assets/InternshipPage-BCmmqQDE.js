import{u as K,e as X,a as z,Q as Z,b as E,d as $}from"./QItemLabel-Bg-Qb_wg.js";import{s as J,p as m,K as W,x as ee,k as q,w as V,W as te,F as ae,dv as O,dw as U,I as le,X as ie,j as oe,ag as ne,u as re,ao as se,dx as ce,dy as de,n as ue,a1 as pe,a2 as u,a3 as C,a4 as l,ac as d,a5 as t,aa as F,a7 as f,a9 as T,a8 as P,al as y,ad as b,a6 as x,aj as G,af as H,ak as me,cE as _e,q as fe}from"./index-DK55Z_Jx.js";import{a as be}from"./QExpansionItem-ClC4xxVz.js";import{Q as ge}from"./QPage-C5Otw0qr.js";import{u as he}from"./useMetaTags-Eq8SAq1J.js";import{T as ve}from"./TitleBlock-B7qHpyhU.js";import{H as we}from"./H2TitleBlock-Cz9qkyH-.js";import"./package-D9JPNs5w.js";import"./QBadge-CN6zSoiS.js";import"./QBtnDropdown-CogyUsQ5.js";import"./QMenu-DAB8Neqf.js";import"./position-engine-z-fzGM8Y.js";const ye=J({name:"QResponsive",props:K,setup(i,{slots:o}){const p=X(i);return()=>m("div",{class:"q-responsive"},[m("div",{class:"q-responsive__filler overflow-hidden"},[m("div",{style:p.value})]),m("div",{class:"q-responsive__content absolute-full fit"},W(o.default))])}});function M(i){let o=!1,p,e;function s(){e=arguments,o!==!0&&(o=!0,p=window.requestAnimationFrame(()=>{i.apply(this,e),e=void 0,o=!1}))}return s.cancel=()=>{window.cancelAnimationFrame(p),o=!1},s}const{passive:S}=ie,xe=J({name:"QParallax",props:{src:String,height:{type:Number,default:500},speed:{type:Number,default:1,validator:i=>i>=0&&i<=1},scrollTarget:ee,onScroll:Function},setup(i,{slots:o,emit:p}){const e=q(0),s=q(null),g=q(null),a=q(null);let n,r,R,k,h,_;V(()=>i.height,()=>{n===!0&&v()}),V(()=>i.scrollTarget,()=>{n===!0&&(L(),j())});let B=c=>{e.value=c,i.onScroll!==void 0&&p("scroll",c)};function v(){let c,w,N;_===window?(c=0,N=w=window.innerHeight):(c=O(_).top,w=U(_),N=c+w);const A=O(s.value).top,D=A+i.height;if(h!==void 0||D>c&&A<N){const Y=(N-A)/(i.height+w);I((R-i.height)*Y*i.speed),B(Y)}}let I=c=>{r.style.transform=`translate3d(-50%,${Math.round(c)}px,0)`};function Q(){R=r.naturalHeight||r.videoHeight||U(r),n===!0&&v()}function j(){n=!0,_=le(s.value,i.scrollTarget),_.addEventListener("scroll",v,S),window.addEventListener("resize",k,S),v()}function L(){n===!0&&(n=!1,_.removeEventListener("scroll",v,S),window.removeEventListener("resize",k,S),_=void 0,I.cancel(),B.cancel(),k.cancel())}return te(()=>{I=M(I),B=M(B),k=M(Q),r=o.media!==void 0?g.value.children[0]:a.value,r.onload=r.onloadstart=r.loadedmetadata=Q,Q(),r.style.display="initial",window.IntersectionObserver!==void 0?(h=new IntersectionObserver(c=>{(c[0].isIntersecting===!0?j:L)()}),h.observe(s.value)):j()}),ae(()=>{L(),h!==void 0&&h.disconnect(),r.onload=r.onloadstart=r.loadedmetadata=null}),()=>m("div",{ref:s,class:"q-parallax",style:{height:`${i.height}px`}},[m("div",{ref:g,class:"q-parallax__media absolute-full"},o.media!==void 0?o.media():[m("img",{ref:a,src:i.src})]),m("div",{class:"q-parallax__content absolute-full column flex-center"},o.content!==void 0?o.content({percentScrolled:e.value}):W(o.default))])}}),qe=oe({__name:"InternshipPage",setup(i,{expose:o}){o();const{t:p}=ne({useScope:"global"}),e=ue(),s=re(),{settings:g}=se(s),a=q([{name:"Rohan Jha",position:"researcher_intern",work:"intern_work7",videoYoutube:"https://www.youtube.com/embed/3HtYDJKjf2o?si=os2WMjmn-t2isfz2",videoBilibili:"//player.bilibili.com/player.html?isOutside=true&aid=113026392983444&bvid=BV1PTsje6E3f&cid=500001659686059&p=1"},{name:"Jonathan Geuter",position:"software_engineer_intern",work:"intern_work1",videoYoutube:"https://www.youtube.com/embed/pfG_d0gqdMk",videoBilibili:"//player.bilibili.com/player.html?aid=914360079&bvid=BV1Au4y1B7jj&cid=1222207665&page=1&autoplay=0"},{name:"Sebastian Weisshaar",position:"software_engineer_intern",work:"intern_work2",videoYoutube:"https://www.youtube.com/embed/_4-MGLJmtmM",videoBilibili:"//player.bilibili.com/player.html?aid=361760424&bvid=BV1P94y1C7AN&cid=1222233649&page=1&autoplay=0"},{name:"Louis Milliken",position:"software_engineer_intern",work:"intern_work3",videoYoutube:"https://www.youtube.com/embed/Eg4p7XewMN4",videoBilibili:"//player.bilibili.com/player.html?aid=531824933&bvid=BV1Gu411p7gg&cid=1222221884&page=1&autoplay=0"},{name:"Yuxi Lu",position:"recruiting_and_administrative_intern",work:"intern_work4",videoYoutube:"https://www.youtube.com/embed/NloMmcC4QmY",videoBilibili:"//player.bilibili.com/player.html?aid=702687166&bvid=BV1Gm4y1u74k&cid=1245243836&page=1&autoplay=0"},{name:"Kaipeng Huang",position:"software_engineer_intern",work:"intern_work5",videoYoutube:"https://www.youtube.com/embed/sLEu_mLl0zE",videoBilibili:"//player.bilibili.com/player.html?aid=490153891&bvid=BV1dN411B7jr&cid=1245231844&page=1&autoplay=0"},{name:"Wenjie Hua",position:"dev_rel_intern",work:"intern_work6",videoYoutube:"https://www.youtube.com/embed/PtJw0e7h4s8",videoBilibili:"//player.bilibili.com/player.html?aid=362647257&bvid=BV1h94y1z7DY&cid=1245246426&page=1&autoplay=0"}]);he({page:"internship_page",banner:"banner.png",url:"internship"});const n={t:p,$q:e,userStore:s,settings:g,interns:a,get ALUMNI_UNI(){return ce},get INTERNS_APPLICATION(){return de},TitleBlock:ve,H2TitleBlock:we};return Object.defineProperty(n,"__isScriptSetup",{enumerable:!1,value:!0}),n}}),ke={class:"col-12 col-md-11 q-py-xl q-mx-xs-xs q-mx-sm-sm q-mx-md-md q-mx-lg-lg q-mx-xl-xl q-ma-xl relative-position"},Be={class:"column justify-center q-py-xl"},Ie={class:"row justify-center"},Ne={class:"col-12 col-sm-10 col-md-8 row q-gutter-xl justify-center"},Te={class:"row justify-center q-py-xl",flat:"",square:""},Pe={class:"col-12 col-sm-11 col-md-10 col-xl-9"},Se=["src"],Qe=["src"],je={class:"row items-center justify-center q-py-xl"},Le={class:"col-11 col-sm-10 col-md-8 col-lg-7 col-xl-6 row"},Ae={class:"row justify-center q-py-xl"};function Ee(i,o,p,e,s,g){return u(),C(ge,null,{default:l(()=>[d("div",{class:F(["row justify-center items-center img-bg q-py-xl",e.$q.screen.lt.sm?"q-px-md":"q-px-xl"])},[d("div",ke,[t(e.TitleBlock,{title:e.t("internship_page.title"),tagline:e.t("internship_page.description"),"large-title":!0},null,8,["title","tagline"])])],2),d("div",Be,[t(e.H2TitleBlock,{title:"internship_page.alumni_network"}),d("div",Ie,[d("div",Ne,[(u(!0),f(P,null,T(e.ALUMNI_UNI,(a,n)=>(u(),C(Z,{key:n,src:a,fit:"contain",class:"col-auto q-ma-xl q-pa-xl",loading:"lazy"},null,8,["src"]))),128))])])]),d("div",Te,[t(e.H2TitleBlock,{title:"internship_page.explore_stories_from_our_interns"}),d("div",Pe,[t(z,{class:"row q-mt-lg justify-center"},{default:l(()=>[(u(!0),f(P,null,T(e.interns,(a,n)=>(u(),C(G,{class:"col-10 col-sm-6 col-md-4 q-pa-xs",key:a.name},{default:l(()=>[t(H,{flat:"",class:"q-ma-sm q-hoverable cursor-pointer full-width",square:""},{default:l(()=>[o[0]||(o[0]=d("span",{class:"q-focus-helper"},null,-1)),t(ye,{ratio:16/9},{default:l(()=>[e.settings.language!=="zh-CN"?(u(),f("iframe",{key:0,src:a.videoYoutube,title:"YouTube video player",frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Se)):(u(),f("iframe",{key:1,src:a.videoBilibili,scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"},null,8,Qe))]),_:2},1024),t(x,null,{default:l(()=>[t(G,null,{default:l(()=>[t(me,null,{default:l(()=>[t(E,{class:"q-pb-xl"},{default:l(()=>[t($,{square:"",label:e.t(`internship_page.${a.position}`),outline:"",size:"xs",style:{"border-radius":"0"}},null,8,["label"])]),_:2},1024),t(E,{class:F(["text-h5",`handwritten${n%3+1}`])},{default:l(()=>[y(b(a.name),1)]),_:2},1032,["class"]),t(E,{caption:"",lines:"2"},{default:l(()=>[y(b(e.t(`internship_page.${a.work}`)),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])]),d("div",je,[t(e.H2TitleBlock,{title:"internship_page.submit_application",subtitle:"internship_page.application_desc"}),d("div",Le,[(u(!0),f(P,null,T(e.INTERNS_APPLICATION,(a,n)=>(u(),f("div",{key:n,class:"col-12 col-md-6"},[t(H,{flat:"",square:"",class:"q-ma-sm"},{default:l(()=>[t(xe,{src:`/${a.background}`,height:300},{default:l(()=>[t(x,{class:"text-r-h3 lock-blur"},{default:l(()=>[y(b(e.t(`internship_page.${a.season}`))+" / "+b(a.year),1)]),_:2},1024)]),_:2},1032,["src"]),t(_e,null,{default:l(()=>[t(fe,{square:"",icon:"open_in_new",class:"apply-btn full-width",label:e.t("internship_page.apply"),href:a.url,padding:"md",outline:"",target:"_blank"},null,8,["label","href"])]),_:2},1024)]),_:2},1024)]))),128))])]),d("div",Ae,[t(x,{class:"text-r-h2 text-center q-my-xl col-12"},{default:l(()=>[y(b(e.t("contact_us_page.faq")),1)]),_:1}),t(x,{class:"col-12 col-sm-9 col-md-6"},{default:l(()=>[t(z,null,{default:l(()=>[(u(),f(P,null,T(11,a=>t(be,{key:a,group:"somegroup",popup:"",label:e.t(`internship_faq.question${a}`),"default-opened":a===0},{default:l(()=>[t(H,{flat:""},{default:l(()=>[t(x,null,{default:l(()=>[y(b(e.t(`internship_faq.answer${a}`)),1)]),_:2},1024)]),_:2},1024)]),_:2},1032,["label","default-opened"])),64))]),_:1})]),_:1})])]),_:1})}const We=pe(qe,[["render",Ee],["__scopeId","data-v-ea340a1c"],["__file","InternshipPage.vue"]]);export{We as default};