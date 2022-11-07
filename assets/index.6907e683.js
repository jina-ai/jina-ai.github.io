import{k as fe,c as R,w as Nn,V as Ze,ae as Tn,aZ as zn,r as st,N as Mn,ba as Ln,a$ as Wt,bb as Rn,b1 as jn,aM as Fn,aA as Dn,v as Ae,ai as Yn,ak as Bn,aU as Hn,aj as Un,M as Wn,z as N,A as $t,B as A,G as h,F as x,D as M,J as lt,L as V,I as ft,a4 as xt,K as et,b5 as $n,aH as Vn,aI as Gn}from"./index.22feb940.js";import{v as Xn,a as Kn}from"./vue-social-sharing.9ef7d978.js";import{E as qn}from"./divider.4c955592.js";function Se(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Se(Object(n),!0).forEach(function(a){P(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Mt(t){return Mt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Mt(t)}function Jn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Oe(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function Zn(t,e,n){return e&&Oe(t.prototype,e),n&&Oe(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function P(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t,e){return ta(t)||na(t,e)||Qe(t,e)||ra()}function yt(t){return Qn(t)||ea(t)||Qe(t)||aa()}function Qn(t){if(Array.isArray(t))return qt(t)}function ta(t){if(Array.isArray(t))return t}function ea(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function na(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Qe(t,e){if(!!t){if(typeof t=="string")return qt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return qt(t,e)}}function qt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function aa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ra(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ee=function(){},ue={},tn={},en=null,nn={mark:Ee,measure:Ee};try{typeof window!="undefined"&&(ue=window),typeof document!="undefined"&&(tn=document),typeof MutationObserver!="undefined"&&(en=MutationObserver),typeof performance!="undefined"&&(nn=performance)}catch{}var ia=ue.navigator||{},Pe=ia.userAgent,Ce=Pe===void 0?"":Pe,X=ue,w=tn,Ie=en,_t=nn;X.document;var W=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",an=~Ce.indexOf("MSIE")||~Ce.indexOf("Trident/"),At,St,Ot,Et,Pt,B="___FONT_AWESOME___",Jt=16,rn="fa",on="svg-inline--fa",Q="data-fa-i2svg",Zt="data-fa-pseudo-element",oa="data-fa-pseudo-element-pending",me="data-prefix",de="data-icon",Ne="fontawesome-i2svg",sa="async",la=["HTML","HEAD","STYLE","SCRIPT"],sn=function(){try{return!0}catch{return!1}}(),k="classic",S="sharp",ve=[k,S];function kt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var vt=kt((At={},P(At,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),P(At,S,{fa:"solid",fass:"solid","fa-solid":"solid"}),At)),gt=kt((St={},P(St,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),P(St,S,{solid:"fass"}),St)),pt=kt((Ot={},P(Ot,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),P(Ot,S,{fass:"fa-solid"}),Ot)),fa=kt((Et={},P(Et,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),P(Et,S,{"fa-solid":"fass"}),Et)),ca=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,ln="fa-layers-text",ua=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ma=kt((Pt={},P(Pt,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),P(Pt,S,{900:"fass"}),Pt)),fn=[1,2,3,4,5,6,7,8,9,10],da=fn.concat([11,12,13,14,15,16,17,18,19,20]),va=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],J={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bt=new Set;Object.keys(gt[k]).map(bt.add.bind(bt));Object.keys(gt[S]).map(bt.add.bind(bt));var ga=[].concat(ve,yt(bt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",J.GROUP,J.SWAP_OPACITY,J.PRIMARY,J.SECONDARY]).concat(fn.map(function(t){return"".concat(t,"x")})).concat(da.map(function(t){return"w-".concat(t)})),ut=X.FontAwesomeConfig||{};function pa(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ba(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var ha=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];ha.forEach(function(t){var e=ce(t,2),n=e[0],a=e[1],r=ba(pa(n));r!=null&&(ut[a]=r)})}var cn={styleDefault:"solid",familyDefault:"classic",cssPrefix:rn,replacementClass:on,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ut.familyPrefix&&(ut.cssPrefix=ut.familyPrefix);var it=d(d({},cn),ut);it.autoReplaceSvg||(it.observeMutations=!1);var v={};Object.keys(cn).forEach(function(t){Object.defineProperty(v,t,{enumerable:!0,set:function(n){it[t]=n,mt.forEach(function(a){return a(v)})},get:function(){return it[t]}})});Object.defineProperty(v,"familyPrefix",{enumerable:!0,set:function(e){it.cssPrefix=e,mt.forEach(function(n){return n(v)})},get:function(){return it.cssPrefix}});X.FontAwesomeConfig=v;var mt=[];function ya(t){return mt.push(t),function(){mt.splice(mt.indexOf(t),1)}}var G=Jt,Y={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ka(t){if(!(!t||!W)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=w.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(e,a),t}}var wa="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ht(){for(var t=12,e="";t-- >0;)e+=wa[Math.random()*62|0];return e}function ot(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ge(t){return t.classList?ot(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function un(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xa(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(un(t[n]),'" ')},"").trim()}function Dt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function pe(t){return t.size!==Y.size||t.x!==Y.x||t.y!==Y.y||t.rotate!==Y.rotate||t.flipX||t.flipY}function _a(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function Aa(t){var e=t.transform,n=t.width,a=n===void 0?Jt:n,r=t.height,i=r===void 0?Jt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&an?l+="translate(".concat(e.x/G-a/2,"em, ").concat(e.y/G-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/G,"em), calc(-50% + ").concat(e.y/G,"em)) "):l+="translate(".concat(e.x/G,"em, ").concat(e.y/G,"em) "),l+="scale(".concat(e.size/G*(e.flipX?-1:1),", ").concat(e.size/G*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Sa=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mn(){var t=rn,e=on,n=v.cssPrefix,a=v.replacementClass,r=Sa;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Te=!1;function Vt(){v.autoAddCss&&!Te&&(ka(mn()),Te=!0)}var Oa={mixout:function(){return{dom:{css:mn,insertCss:Vt}}},hooks:function(){return{beforeDOMElementCreation:function(){Vt()},beforeI2svg:function(){Vt()}}}},H=X||{};H[B]||(H[B]={});H[B].styles||(H[B].styles={});H[B].hooks||(H[B].hooks={});H[B].shims||(H[B].shims=[]);var F=H[B],dn=[],Ea=function t(){w.removeEventListener("DOMContentLoaded",t),Lt=1,dn.map(function(e){return e()})},Lt=!1;W&&(Lt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Lt||w.addEventListener("DOMContentLoaded",Ea));function Pa(t){!W||(Lt?setTimeout(t,0):dn.push(t))}function wt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?un(t):"<".concat(e," ").concat(xa(a),">").concat(i.map(wt).join(""),"</").concat(e,">")}function ze(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Ca=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Gt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Ca(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function Ia(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Qt(t){var e=Ia(t);return e.length===1?e[0].toString(16):null}function Na(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function te(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Me(e);typeof F.hooks.addPack=="function"&&!r?F.hooks.addPack(t,Me(e)):F.styles[t]=d(d({},F.styles[t]||{}),i),t==="fas"&&te("fa",e)}var Ct,It,Nt,nt=F.styles,Ta=F.shims,za=(Ct={},P(Ct,k,Object.values(pt[k])),P(Ct,S,Object.values(pt[S])),Ct),be=null,vn={},gn={},pn={},bn={},hn={},Ma=(It={},P(It,k,Object.keys(vt[k])),P(It,S,Object.keys(vt[S])),It);function La(t){return~ga.indexOf(t)}function Ra(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!La(r)?r:null}var yn=function(){var e=function(i){return Gt(nt,function(o,s,l){return o[l]=Gt(s,i,{}),o},{})};vn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),gn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),hn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in nt||v.autoFetchSvg,a=Gt(Ta,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});pn=a.names,bn=a.unicodes,be=Yt(v.styleDefault,{family:v.familyDefault})};ya(function(t){be=Yt(t.styleDefault,{family:v.familyDefault})});yn();function he(t,e){return(vn[t]||{})[e]}function ja(t,e){return(gn[t]||{})[e]}function Z(t,e){return(hn[t]||{})[e]}function kn(t){return pn[t]||{prefix:null,iconName:null}}function Fa(t){var e=bn[t],n=he("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function K(){return be}var ye=function(){return{prefix:null,iconName:null,rest:[]}};function Yt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=vt[a][t],i=gt[a][t]||gt[a][r],o=t in F.styles?t:null;return i||o||null}var Le=(Nt={},P(Nt,k,Object.keys(pt[k])),P(Nt,S,Object.keys(pt[S])),Nt);function Bt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},P(e,k,"".concat(v.cssPrefix,"-").concat(k)),P(e,S,"".concat(v.cssPrefix,"-").concat(S)),e),o=null,s=k;(t.includes(i[k])||t.some(function(c){return Le[k].includes(c)}))&&(s=k),(t.includes(i[S])||t.some(function(c){return Le[S].includes(c)}))&&(s=S);var l=t.reduce(function(c,f){var m=Ra(v.cssPrefix,f);if(nt[f]?(f=za[s].includes(f)?fa[s][f]:f,o=f,c.prefix=f):Ma[s].indexOf(f)>-1?(o=f,c.prefix=Yt(f,{family:s})):m?c.iconName=m:f!==v.replacementClass&&f!==i[k]&&f!==i[S]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var p=o==="fa"?kn(c.iconName):{},b=Z(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||b||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!nt.far&&nt.fas&&!v.autoFetchSvg&&(c.prefix="fas")}return c},ye());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===S&&(nt.fass||v.autoFetchSvg)&&(l.prefix="fass",l.iconName=Z(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=K()||"fas"),l}var Da=function(){function t(){Jn(this,t),this.definitions={}}return Zn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=d(d({},n.definitions[s]||{}),o[s]),te(s,o[s]);var l=pt[k][s];l&&te(l,o[s]),yn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Re=[],at={},rt={},Ya=Object.keys(rt);function Ba(t,e){var n=e.mixoutsTo;return Re=t,at={},Object.keys(rt).forEach(function(a){Ya.indexOf(a)===-1&&delete rt[a]}),Re.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Mt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){at[o]||(at[o]=[]),at[o].push(i[o])})}a.provides&&a.provides(rt)}),n}function ee(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=at[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function tt(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=at[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rt[t]?rt[t].apply(null,e):void 0}function ne(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||K();if(!!e)return e=Z(n,e)||e,ze(wn.definitions,n,e)||ze(F.styles,n,e)}var wn=new Da,Ha=function(){v.autoReplaceSvg=!1,v.observeMutations=!1,tt("noAuto")},Ua={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(tt("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;v.autoReplaceSvg===!1&&(v.autoReplaceSvg=!0),v.observeMutations=!0,Pa(function(){$a({autoReplaceSvgRoot:n}),tt("watch",e)})}},Wa={icon:function(e){if(e===null)return null;if(Mt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Z(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Yt(e[0]);return{prefix:a,iconName:Z(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(v.cssPrefix,"-"))>-1||e.match(ca))){var r=Bt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||K(),iconName:Z(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=K();return{prefix:i,iconName:Z(i,e)||e}}}},z={noAuto:Ha,config:v,dom:Ua,parse:Wa,library:wn,findIconDefinition:ne,toHtml:wt},$a=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?w:n;(Object.keys(F.styles).length>0||v.autoFetchSvg)&&W&&v.autoReplaceSvg&&z.dom.i2svg({node:a})};function Ht(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return wt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!W){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Va(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(pe(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Dt(d(d({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Ga(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(v.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d(d({},r),{},{id:o}),children:a}]}]}function ke(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,m=t.extra,p=t.watchable,b=p===void 0?!1:p,_=a.found?a:n,C=_.width,I=_.height,u=r==="fak",g=[v.replacementClass,i?"".concat(v.cssPrefix,"-").concat(i):""].filter(function($){return m.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(m.classes).join(" "),y={children:[],attributes:d(d({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(I)})},O=u&&!~m.classes.indexOf("fa-fw")?{width:"".concat(C/I*16*.0625,"em")}:{};b&&(y.attributes[Q]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||ht())},children:[l]}),delete y.attributes.title);var E=d(d({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:d(d({},O),m.styles)}),D=a.found&&n.found?U("generateAbstractMask",E)||{children:[],attributes:{}}:U("generateAbstractIcon",E)||{children:[],attributes:{}},L=D.children,Ut=D.attributes;return E.children=L,E.attributes=Ut,s?Ga(E):Va(E)}function je(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=d(d(d({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Q]="");var f=d({},o.styles);pe(r)&&(f.transform=Aa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var m=Dt(f);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Xa(t){var e=t.content,n=t.title,a=t.extra,r=d(d(d({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Dt(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Xt=F.styles;function ae(t){var e=t[0],n=t[1],a=t.slice(4),r=ce(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.GROUP)},children:[{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(v.cssPrefix,"-").concat(J.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ka={found:!1,width:512,height:512};function qa(t,e){!sn&&!v.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function re(t,e){var n=e;return e==="fa"&&v.styleDefault!==null&&(e=K()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=kn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Xt[e]&&Xt[e][t]){var o=Xt[e][t];return a(ae(o))}qa(t,e),a(d(d({},Ka),{},{icon:v.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var Fe=function(){},ie=v.measurePerformance&&_t&&_t.mark&&_t.measure?_t:{mark:Fe,measure:Fe},ct='FA "6.2.0"',Ja=function(e){return ie.mark("".concat(ct," ").concat(e," begins")),function(){return xn(e)}},xn=function(e){ie.mark("".concat(ct," ").concat(e," ends")),ie.measure("".concat(ct," ").concat(e),"".concat(ct," ").concat(e," begins"),"".concat(ct," ").concat(e," ends"))},we={begin:Ja,end:xn},Tt=function(){};function De(t){var e=t.getAttribute?t.getAttribute(Q):null;return typeof e=="string"}function Za(t){var e=t.getAttribute?t.getAttribute(me):null,n=t.getAttribute?t.getAttribute(de):null;return e&&n}function Qa(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(v.replacementClass)}function tr(){if(v.autoReplaceSvg===!0)return zt.replace;var t=zt[v.autoReplaceSvg];return t||zt.replace}function er(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function nr(t){return w.createElement(t)}function _n(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?er:nr:n;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(_n(o,{ceFn:a}))}),r}function ar(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var zt={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(_n(r),n)}),n.getAttribute(Q)===null&&v.keepOriginalSource){var a=w.createComment(ar(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ge(n).indexOf(v.replacementClass))return zt.replace(e);var r=new RegExp("".concat(v.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===v.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return wt(s)}).join(`
`);n.setAttribute(Q,""),n.innerHTML=o}};function Ye(t){t()}function An(t,e){var n=typeof e=="function"?e:Tt;if(t.length===0)n();else{var a=Ye;v.mutateApproach===sa&&(a=X.requestAnimationFrame||Ye),a(function(){var r=tr(),i=we.begin("mutate");t.map(r),i(),n()})}}var xe=!1;function Sn(){xe=!0}function oe(){xe=!1}var Rt=null;function Be(t){if(!!Ie&&!!v.observeMutations){var e=t.treeCallback,n=e===void 0?Tt:e,a=t.nodeCallback,r=a===void 0?Tt:a,i=t.pseudoElementsCallback,o=i===void 0?Tt:i,s=t.observeMutationsRoot,l=s===void 0?w:s;Rt=new Ie(function(c){if(!xe){var f=K();ot(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!De(m.addedNodes[0])&&(v.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&v.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&De(m.target)&&~va.indexOf(m.attributeName))if(m.attributeName==="class"&&Za(m.target)){var p=Bt(ge(m.target)),b=p.prefix,_=p.iconName;m.target.setAttribute(me,b||f),_&&m.target.setAttribute(de,_)}else Qa(m.target)&&r(m.target)})}}),W&&Rt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function rr(){!Rt||Rt.disconnect()}function ir(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function or(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Bt(ge(t));return r.prefix||(r.prefix=K()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ja(r.prefix,t.innerText)||he(r.prefix,Qt(t.innerText))),!r.iconName&&v.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function sr(t){var e=ot(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return v.autoA11y&&(n?e["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(a||ht()):(e["aria-hidden"]="true",e.focusable="false")),e}function lr(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Y,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function He(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=or(t),a=n.iconName,r=n.prefix,i=n.rest,o=sr(t),s=ee("parseNodeAttributes",{},t),l=e.styleParser?ir(t):[];return d({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:Y,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fr=F.styles;function On(t){var e=v.autoReplaceSvg==="nest"?He(t,{styleParser:!1}):He(t);return~e.extra.classes.indexOf(ln)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var q=new Set;ve.map(function(t){q.add("fa-".concat(t))});Object.keys(vt[k]).map(q.add.bind(q));Object.keys(vt[S]).map(q.add.bind(q));q=yt(q);function Ue(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var n=w.documentElement.classList,a=function(m){return n.add("".concat(Ne,"-").concat(m))},r=function(m){return n.remove("".concat(Ne,"-").concat(m))},i=v.autoFetchSvg?q:ve.map(function(f){return"fa-".concat(f)}).concat(Object.keys(fr));i.includes("fa")||i.push("fa");var o=[".".concat(ln,":not([").concat(Q,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Q,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=ot(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=we.begin("onTree"),c=s.reduce(function(f,m){try{var p=On(m);p&&f.push(p)}catch(b){sn||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(p){An(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),m(p)})})}function cr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;On(t).then(function(n){n&&An([n],e)})}function ur(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ne(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ne(r||{})),t(a,d(d({},n),{},{mask:r}))}}var mr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?Y:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,p=m===void 0?null:m,b=n.titleId,_=b===void 0?null:b,C=n.classes,I=C===void 0?[]:C,u=n.attributes,g=u===void 0?{}:u,y=n.styles,O=y===void 0?{}:y;if(!!e){var E=e.prefix,D=e.iconName,L=e.icon;return Ht(d({type:"icon"},e),function(){return tt("beforeDOMElementCreation",{iconDefinition:e,params:n}),v.autoA11y&&(p?g["aria-labelledby"]="".concat(v.replacementClass,"-title-").concat(_||ht()):(g["aria-hidden"]="true",g.focusable="false")),ke({icons:{main:ae(L),mask:l?ae(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:D,transform:d(d({},Y),r),symbol:o,title:p,maskId:f,titleId:_,extra:{attributes:g,styles:O,classes:I}})})}},dr={mixout:function(){return{icon:ur(mr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ue,n.nodeCallback=cr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?w:a,i=n.callback,o=i===void 0?function(){}:i;return Ue(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,m=a.maskId,p=a.extra;return new Promise(function(b,_){Promise.all([re(r,s),f.iconName?re(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var I=ce(C,2),u=I[0],g=I[1];b([n,ke({icons:{main:u,mask:g},prefix:s,iconName:r,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(_)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Dt(s);l.length>0&&(r.style=l);var c;return pe(o)&&(c=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},vr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Ht({type:"layer"},function(){tt("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(v.cssPrefix,"-layers")].concat(yt(i)).join(" ")},children:o}]})}}}},gr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,m=f===void 0?{}:f;return Ht({type:"counter",content:n},function(){return tt("beforeDOMElementCreation",{content:n,params:a}),Xa({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(v.cssPrefix,"-layers-counter")].concat(yt(s))}})})}}}},pr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?Y:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,m=f===void 0?{}:f,p=a.styles,b=p===void 0?{}:p;return Ht({type:"text",content:n},function(){return tt("beforeDOMElementCreation",{content:n,params:a}),je({content:n,transform:d(d({},Y),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(v.cssPrefix,"-layers-text")].concat(yt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(an){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return v.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,je({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},br=new RegExp('"',"ug"),We=[1105920,1112319];function hr(t){var e=t.replace(br,""),n=Na(e,0),a=n>=We[0]&&n<=We[1],r=e.length===2?e[0]===e[1]:!1;return{value:Qt(r?e[0]:e),isSecondary:a||r}}function $e(t,e){var n="".concat(oa).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=ot(t.children),o=i.filter(function(L){return L.getAttribute(Zt)===e})[0],s=X.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(ua),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?S:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?gt[p][l[2].toLowerCase()]:ma[p][c],_=hr(m),C=_.value,I=_.isSecondary,u=l[0].startsWith("FontAwesome"),g=he(b,C),y=g;if(u){var O=Fa(C);O.iconName&&O.prefix&&(g=O.iconName,b=O.prefix)}if(g&&!I&&(!o||o.getAttribute(me)!==b||o.getAttribute(de)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var E=lr(),D=E.extra;D.attributes[Zt]=e,re(g,b).then(function(L){var Ut=ke(d(d({},E),{},{icons:{main:L,mask:ye()},prefix:b,iconName:y,extra:D,watchable:!0})),$=w.createElement("svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=Ut.map(function(In){return wt(In)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function yr(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function kr(t){return t.parentNode!==document.head&&!~la.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Zt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ve(t){if(!!W)return new Promise(function(e,n){var a=ot(t.querySelectorAll("*")).filter(kr).map(yr),r=we.begin("searchPseudoElements");Sn(),Promise.all(a).then(function(){r(),oe(),e()}).catch(function(){r(),oe(),n()})})}var wr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ve,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?w:a;v.searchPseudoElements&&Ve(r)}}},Ge=!1,xr={mixout:function(){return{dom:{unwatch:function(){Sn(),Ge=!0}}}},hooks:function(){return{bootstrap:function(){Be(ee("mutationObserverCallbacks",{}))},noAuto:function(){rr()},watch:function(n){var a=n.observeMutationsRoot;Ge?oe():Be(ee("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Xe=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},_r={mixout:function(){return{parse:{transform:function(n){return Xe(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Xe(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:d({},b.outer),children:[{tag:"g",attributes:d({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:d(d({},a.icon.attributes),b.path)}]}]}}}},Kt={x:0,y:0,width:"100%",height:"100%"};function Ke(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ar(t){return t.tag==="g"?t.children:[t]}var Sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Bt(r.split(" ").map(function(o){return o.trim()})):ye();return i.prefix||(i.prefix=K()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,m=o.width,p=o.icon,b=_a({transform:l,containerWidth:m,iconWidth:c}),_={tag:"rect",attributes:d(d({},Kt),{},{fill:"white"})},C=f.children?{children:f.children.map(Ke)}:{},I={tag:"g",attributes:d({},b.inner),children:[Ke(d({tag:f.tag,attributes:d(d({},f.attributes),b.path)},C))]},u={tag:"g",attributes:d({},b.outer),children:[I]},g="mask-".concat(s||ht()),y="clip-".concat(s||ht()),O={tag:"mask",attributes:d(d({},Kt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[_,u]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Ar(p)},O]};return a.push(E,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},Kt)}),{children:a,attributes:r}}}},Or={provides:function(e){var n=!1;X.matchMedia&&(n=X.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:d(d({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=d(d({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:d(d({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:d(d({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:d(d({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:d(d({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:d(d({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:d(d({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:d(d({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Er={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Pr=[Oa,dr,vr,gr,pr,wr,xr,_r,Sr,Or,Er];Ba(Pr,{mixoutsTo:z});z.noAuto;var En=z.config,Cr=z.library;z.dom;var jt=z.parse;z.findIconDefinition;z.toHtml;var Ir=z.icon;z.layer;var Nr=z.text;z.counter;function qe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?qe(Object(n),!0).forEach(function(a){T(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Ft(t){return Ft=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ft(t)}function T(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function zr(t,e){if(t==null)return{};var n=Tr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(n[a]=t[a]))}return n}function se(t){return Mr(t)||Lr(t)||Rr(t)||jr()}function Mr(t){if(Array.isArray(t))return le(t)}function Lr(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rr(t,e){if(!!t){if(typeof t=="string")return le(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return le(t,e)}}function le(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function jr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Fr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Pn={exports:{}};(function(t){(function(e){var n=function(u,g,y){if(!c(g)||m(g)||p(g)||b(g)||l(g))return g;var O,E=0,D=0;if(f(g))for(O=[],D=g.length;E<D;E++)O.push(n(u,g[E],y));else{O={};for(var L in g)Object.prototype.hasOwnProperty.call(g,L)&&(O[u(L,y)]=n(u,g[L],y))}return O},a=function(u,g){g=g||{};var y=g.separator||"_",O=g.split||/(?=[A-Z])/;return u.split(O).join(y)},r=function(u){return _(u)?u:(u=u.replace(/[\-_\s]+(.)?/g,function(g,y){return y?y.toUpperCase():""}),u.substr(0,1).toLowerCase()+u.substr(1))},i=function(u){var g=r(u);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(u,g){return a(u,g).toLowerCase()},s=Object.prototype.toString,l=function(u){return typeof u=="function"},c=function(u){return u===Object(u)},f=function(u){return s.call(u)=="[object Array]"},m=function(u){return s.call(u)=="[object Date]"},p=function(u){return s.call(u)=="[object RegExp]"},b=function(u){return s.call(u)=="[object Boolean]"},_=function(u){return u=u-0,u===u},C=function(u,g){var y=g&&"process"in g?g.process:g;return typeof y!="function"?u:function(O,E){return y(O,u,E)}},I={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(u,g){return n(C(r,g),u)},decamelizeKeys:function(u,g){return n(C(o,g),u,g)},pascalizeKeys:function(u,g){return n(C(i,g),u)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=I:e.humps=I})(Fr)})(Pn);var Dr=Pn.exports,Yr=["class","style"];function Br(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Dr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Hr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function _e(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return _e(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=Hr(f);break;case"style":l.style=Br(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=zr(n,Yr);return Ze(t.tag,j(j(j({},e),{},{class:r.class,style:j(j({},r.style),o)},r.attrs),s),a)}var Cn=!1;try{Cn=!0}catch{}function Ur(){if(!Cn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function dt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?T({},t,e):{}}function Wr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},T(e,"fa-".concat(t.size),t.size!==null),T(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),T(e,"fa-pull-".concat(t.pull),t.pull!==null),T(e,"fa-swap-opacity",t.swapOpacity),T(e,"fa-bounce",t.bounce),T(e,"fa-shake",t.shake),T(e,"fa-beat",t.beat),T(e,"fa-fade",t.fade),T(e,"fa-beat-fade",t.beatFade),T(e,"fa-flash",t.flash),T(e,"fa-spin-pulse",t.spinPulse),T(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function Je(t){if(t&&Ft(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(jt.icon)return jt.icon(t);if(t===null)return null;if(Ft(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var $r=fe({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=R(function(){return Je(e.icon)}),i=R(function(){return dt("classes",Wr(e))}),o=R(function(){return dt("transform",typeof e.transform=="string"?jt.transform(e.transform):e.transform)}),s=R(function(){return dt("mask",Je(e.mask))}),l=R(function(){return Ir(r.value,j(j(j(j({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});Nn(l,function(f){if(!f)return Ur("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=R(function(){return l.value?_e(l.value.abstract[0],{},a):null});return function(){return c.value}}});fe({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=En.familyPrefix,i=R(function(){return["".concat(r,"-layers")].concat(se(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Ze("div",{class:i.value},a.default?a.default():[])}}});fe({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=En.familyPrefix,i=R(function(){return dt("classes",[].concat(se(e.counter?["".concat(r,"-layers-counter")]:[]),se(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=R(function(){return dt("transform",typeof e.transform=="string"?jt.transform(e.transform):e.transform)}),s=R(function(){var c=Nr(e.value.toString(),j(j({},o.value),i.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=R(function(){return _e(s.value,{},a)});return function(){return l.value}}});var Vr={prefix:"fab",iconName:"hacker-news",icon:[448,512,[],"f1d4","M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"]},Gr={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},Xr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Kr={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},qr={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},Jr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},Zr={prefix:"fab",iconName:"slack",icon:[448,512,[62447,"slack-hash"],"f198","M94.12 315.1c0 25.9-21.16 47.06-47.06 47.06S0 341 0 315.1c0-25.9 21.16-47.06 47.06-47.06h47.06v47.06zm23.72 0c0-25.9 21.16-47.06 47.06-47.06s47.06 21.16 47.06 47.06v117.84c0 25.9-21.16 47.06-47.06 47.06s-47.06-21.16-47.06-47.06V315.1zm47.06-188.98c-25.9 0-47.06-21.16-47.06-47.06S139 32 164.9 32s47.06 21.16 47.06 47.06v47.06H164.9zm0 23.72c25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06H47.06C21.16 243.96 0 222.8 0 196.9s21.16-47.06 47.06-47.06H164.9zm188.98 47.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06s-21.16 47.06-47.06 47.06h-47.06V196.9zm-23.72 0c0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06V79.06c0-25.9 21.16-47.06 47.06-47.06 25.9 0 47.06 21.16 47.06 47.06V196.9zM283.1 385.88c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06-25.9 0-47.06-21.16-47.06-47.06v-47.06h47.06zm0-23.72c-25.9 0-47.06-21.16-47.06-47.06 0-25.9 21.16-47.06 47.06-47.06h117.84c25.9 0 47.06 21.16 47.06 47.06 0 25.9-21.16 47.06-47.06 47.06H283.1z"]};Cr.add(Jr,Xr,Kr,Vr,Gr,Zr,qr);const Qr={components:{ShareNetwork:Xn.exports.ShareNetwork,FontAwesomeIcon:$r},metaInfo(){return this.metadata},setup(){const t=zn(),e=st({}),n=st({}),a=st([]),r=st(!1),i=st({}),o=window.location.href;return Mn(async()=>{var s,l,c;if(a.value=[],t.params.slug){if(r.value=!0,e.value=await Ln(t.params.slug),r.value=!1,e.value.tags.length){const f=await Wt({limit:2,filter:`tag:${e.value.primary_tag.slug}+id:-${(s=e.value)==null?void 0:s.id}`});if(a.value=f.posts,a.value.length<2){const p=(await Wt({limit:"all",filter:`tag:-${e.value.primary_tag.slug}+id:-${(l=e.value)==null?void 0:l.id}`})).posts,b=Math.floor(Math.random()*(p.length-1));a.value=[...a.value,...p.slice(b,b+2)].slice(0,2)}}else{const f=await Wt({limit:2,filter:`id:-${(c=e.value)==null?void 0:c.id}`});a.value=f.posts}n.value={bio:"You love opensource and AI engineering. So join Jina AI today! Let's lead the future of Multimodal AI. \u{1F680}",name:"... and You!",cover_image:"/assets/images/author-you-cover.png",profile_image:"/assets/images/author-default-photo.png",default_cover:"/assets/images/author-cover-default.png"},i.value={...i.value,title:e.value.meta_title||e.value.title,description:e.value.meta_description||e.value.excerpt,og:{title:{property:"og:title",content:e.value.og_title||e.value.title,vmid:"og:title"},image:{property:"og:image",content:e.value.og_image||e.value.feature_image,vmid:"og:image"},description:{property:"og:description",content:e.value.og_description||e.value.excerpt,vmid:"og:description"}},twitter:{title:{property:"twitter:title",content:e.value.twitter_title||e.value.title,vmid:"twitter:title"},image:{property:"twitter:image",content:e.value.twitter_image||e.value.feature_image,vmid:"twitter:image"},description:{property:"twitter:description",content:e.value.twitter_description||e.value.excerpt,vmid:"twitter:description"}},script:[{src:"https://jina-ai-gmbh.ghost.io/public/cards.min.js",async:!0}]},Rn.highlightAll()}}),{blog:e,loading:r,suggestedBlogs:a,url:o,metadata:i,formatDate:jn,author_you:n}}},ti=t=>(Vn("data-v-b8da52a0"),t=t(),Gn(),t),ei={class:"c-dynamicShadowImage"},ni={class:"tags mt_80"},ai={class:"mt_20"},ri={class:"info header-info mt_16"},ii={class:"author"},oi=["href"],si={class:"article-byline-meta"},li=["innerHTML"],fi={key:0,class:"author-sep"},ci={class:"byline-meta-content"},ui={class:"publishAt"},mi={class:"byline-reading-time"},di=ti(()=>x("span",{class:"bull"}," \u2022 ",-1)),vi={key:0,class:"bottom"},gi={class:"social-media"},pi={class:"article"},bi=["innerHTML"],hi={class:"button-link",href:"https://github.com/jina-ai"},yi={class:"button-link",href:"/slack"},ki={class:"mt_32 mb_16"},wi={class:"author-bio mb_16"},xi=["href"],_i={class:"mt_32 mb_16"},Ai={class:"author-bio mb_16"},Si={class:"button-link",href:"/about-us"},Oi={key:0};function Ei(t,e,n,a,r,i){const o=Fn,s=Dn,l=Ae("font-awesome-icon"),c=Ae("ShareNetwork"),f=Yn,m=Bn,p=qn,b=Hn,_=Un,C=$n,I=Kn;return Wn((N(),$t(m,{class:"blog-detail container",justify:"center"},{default:A(()=>[h(_,{xs:24,sm:20,md:18,lg:18,xl:18},{default:A(()=>[x("div",ei,[h(o,{class:"feature-image feature-image--object",src:a.blog.feature_image,fit:"contain"},null,8,["src"]),h(o,{class:"feature-image feature-image--shadow",src:a.blog.feature_image,fit:"contain"},null,8,["src"])]),x("div",ni,[(N(!0),M(ft,null,lt(a.blog.tags,u=>(N(),M("span",{class:"tag",key:u.id},V(u.name),1))),128))]),x("h1",ai,V(a.blog.title),1),x("div",ri,[x("div",ii,[(N(!0),M(ft,null,lt(a.blog.authors,(u,g)=>(N(),M("a",{href:"#author-"+u.id,key:u},[h(s,{class:"avatar",size:48,src:u.profile_image,"z-index":10-g},null,8,["src","z-index"])],8,oi))),128)),x("div",si,[(N(!0),M(ft,null,lt(a.blog.authors,(u,g)=>(N(),M("span",{key:u},[x("span",{class:"author-name",innerHTML:u.name},null,8,li),g+1<a.blog.authors.length?(N(),M("span",fi,",")):xt("",!0)]))),128)),x("div",ci,[x("span",ui,V(a.formatDate(a.blog.published_at)),1),x("span",mi,[di,et(V(a.blog.reading_time)+" min read",1)])])])]),a.loading?xt("",!0):(N(),M("div",vi,[x("div",gi,[h(c,{network:"HackerNews",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:A(()=>[h(l,{icon:"fa-brands fa-hacker-news"})]),_:1},8,["url","title","description"]),h(c,{network:"Twitter",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:A(()=>[h(l,{icon:"fa-brands fa-twitter"})]),_:1},8,["url","title","description"]),h(c,{network:"LinkedIn",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:A(()=>[h(l,{icon:"fa-brands fa-linkedin"})]),_:1},8,["url","title","description"]),h(c,{network:"Facebook",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:A(()=>[h(l,{icon:"fa-brands fa-facebook"})]),_:1},8,["url","title","description"]),h(c,{network:"Reddit",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:A(()=>[h(l,{icon:"fa-brands fa-reddit"})]),_:1},8,["url","title","description"])])]))]),x("article",pi,[x("section",{class:"gh-content",innerHTML:a.blog.html},null,8,bi)]),h(m,{justify:"center"},{default:A(()=>[x("a",hi,[h(f,{class:"large-btn",type:"default",size:"large"},{default:A(()=>[h(l,{icon:"fa-brands fa-github"}),et("\xA0Follow us on Github ")]),_:1})]),x("a",yi,[h(f,{class:"large-btn",type:"default",size:"large"},{default:A(()=>[h(l,{icon:"fa-brands fa-slack"}),et("\xA0Join our community ")]),_:1})])]),_:1}),h(m,{class:"container mt_120 mb_32 author-section"},{default:A(()=>[h(p,{"content-position":"center"},{default:A(()=>[et("About the authors")]),_:1})]),_:1}),h(m,{justify:"center"},{default:A(()=>[(N(!0),M(ft,null,lt(a.blog.authors,u=>(N(),$t(_,{key:u,span:8,xs:16,id:"author-"+u.id},{default:A(()=>[h(b,{"body-style":{"text-align":"center",height:"300px"},shadow:"never",class:"author-card"},{default:A(()=>[h(o,{class:"author-cover-image",src:u.cover_image?u.cover_image:a.author_you.default_cover,fit:"cover"},null,8,["src"]),h(s,{src:u.profile_image,size:"large",class:"author-avatar"},null,8,["src"]),x("div",ki,[x("h4",null,V(u.name),1)]),x("div",wi,V(u.bio),1),u.twitter?(N(),M("a",{key:0,href:"https://twitter.com/"+u.twitter,target:"_blank"},[h(l,{icon:"fa-brands fa-twitter"})],8,xi)):xt("",!0)]),_:2},1024)]),_:2},1032,["id"]))),128)),h(_,{span:8,xs:16},{default:A(()=>[h(b,{"body-style":{"text-align":"center",height:"300px"},shadow:"never",class:"author-card"},{default:A(()=>[h(o,{class:"author-cover-image",src:a.author_you.cover_image,fit:"cover"},null,8,["src"]),h(s,{src:a.author_you.profile_image,size:"large",class:"author-avatar"},null,8,["src"]),x("div",_i,[x("h4",null,V(a.author_you.name),1)]),x("div",Ai,V(a.author_you.bio),1),x("a",Si,[h(f,{size:"large",round:""},{default:A(()=>[et("View all jobs")]),_:1})])]),_:1})]),_:1})]),_:1}),h(m,{class:"container mt_32 mb_32"},{default:A(()=>[h(p,{"content-position":"center"},{default:A(()=>[et("You may also like")]),_:1})]),_:1}),!a.loading&&a.suggestedBlogs.length?(N(),M("div",Oi,[h(m,{gutter:30,justify:"center"},{default:A(()=>[(N(!0),M(ft,null,lt(a.suggestedBlogs,u=>(N(),$t(_,{class:"blog-item",xs:24,sm:12,md:12,lg:12,xl:12,key:u.id,style:{"margin-bottom":"1em"}},{default:A(()=>[h(C,{blog:u},null,8,["blog"])]),_:2},1024))),128))]),_:1})])):xt("",!0)]),_:1})]),_:1})),[[I,a.loading]])}var Ni=Tn(Qr,[["render",Ei],["__scopeId","data-v-b8da52a0"]]);export{Ni as default};
