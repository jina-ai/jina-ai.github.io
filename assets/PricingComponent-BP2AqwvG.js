import{P as s}from"./PurchaseTab-fMGlkMSr.js";import{H as r}from"./H2TitleBlock-DTXRkrgs.js";import{j as d,a1 as l,a2 as i,a7 as _,ac as o,a3 as n,a5 as m}from"./index-TXJ3b7wn.js";const p=d({__name:"PricingComponent",props:{hideUsage:{type:Boolean,default:!0},defaultOpenedItem:{default:"api"},hideOthers:{type:Boolean,default:!1}},setup(c,{expose:a}){a();const e={PurchaseTab:s,H2TitleBlock:r};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),u={class:"row justify-center",id:"pricing"},h={class:"col-11 col-md-10 col-xl-9 q-mt-xl q-py-xl justify-center"},f={class:"col-11 col-md-10 col-xl-9"};function g(c,a,e,t,b,y){return i(),_("div",u,[o("div",h,[e.hideOthers?(i(),n(t.H2TitleBlock,{key:0,title:"embedding.pricing",subtitle:"embedding.pricing_desc",anchor:"pricing"})):(i(),n(t.H2TitleBlock,{key:1,title:"embedding.three_ways",subtitle:"embedding.three_ways_desc",anchor:"pricing"}))]),o("div",f,[m(t.PurchaseTab,{"hide-usage":e.hideUsage,"default-opened-item":e.defaultOpenedItem,"hide-others":e.hideOthers},null,8,["hide-usage","default-opened-item","hide-others"])])])}const P=l(p,[["render",g],["__file","PricingComponent.vue"]]);export{P};