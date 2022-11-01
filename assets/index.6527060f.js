import{k as le,c as z,w as In,V as Je,ae as Tn,aZ as Mn,r as bt,N as zn,ba as Ln,a$ as Ht,bb as Rn,b1 as Fn,aM as jn,aA as Dn,v as _e,aj as Yn,ak as Bn,M as Hn,z as T,A as Ut,B as D,G as P,F as E,D as Y,J as ht,L as yt,I as kt,a4 as $t,K as Un,b5 as $n,aH as Wn,aI as Vn}from"./index.a85e5676.js";import{v as Gn,a as Xn}from"./vue-social-sharing.37438a4a.js";function Ae(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ae(Object(n),!0).forEach(function(a){O(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ae(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tt(t){return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function Kn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function qn(t,e,n){return e&&Se(t.prototype,e),n&&Se(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function O(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fe(t,e){return Zn(t)||ta(t,e)||Ze(t,e)||na()}function vt(t){return Jn(t)||Qn(t)||Ze(t)||ea()}function Jn(t){if(Array.isArray(t))return Kt(t)}function Zn(t){if(Array.isArray(t))return t}function Qn(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ta(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(a.push(o.value),!(e&&a.length===e));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function Ze(t,e){if(!!t){if(typeof t=="string")return Kt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Kt(t,e)}}function Kt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function ea(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function na(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Oe=function(){},ce={},Qe={},tn=null,en={mark:Oe,measure:Oe};try{typeof window!="undefined"&&(ce=window),typeof document!="undefined"&&(Qe=document),typeof MutationObserver!="undefined"&&(tn=MutationObserver),typeof performance!="undefined"&&(en=performance)}catch{}var aa=ce.navigator||{},Pe=aa.userAgent,Ee=Pe===void 0?"":Pe,G=ce,w=Qe,Ce=tn,wt=en;G.document;var $=!!w.documentElement&&!!w.head&&typeof w.addEventListener=="function"&&typeof w.createElement=="function",nn=~Ee.indexOf("MSIE")||~Ee.indexOf("Trident/"),xt,_t,At,St,Ot,B="___FONT_AWESOME___",qt=16,an="fa",rn="svg-inline--fa",Z="data-fa-i2svg",Jt="data-fa-pseudo-element",ra="data-fa-pseudo-element-pending",ue="data-prefix",me="data-icon",Ne="fontawesome-i2svg",ia="async",oa=["HTML","HEAD","STYLE","SCRIPT"],on=function(){try{return!0}catch{return!1}}(),k="classic",x="sharp",de=[k,x];function gt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[k]}})}var ft=gt((xt={},O(xt,k,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(xt,x,{fa:"solid",fass:"solid","fa-solid":"solid"}),xt)),ct=gt((_t={},O(_t,k,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(_t,x,{solid:"fass"}),_t)),ut=gt((At={},O(At,k,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(At,x,{fass:"fa-solid"}),At)),sa=gt((St={},O(St,k,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(St,x,{"fa-solid":"fass"}),St)),la=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,sn="fa-layers-text",fa=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ca=gt((Ot={},O(Ot,k,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(Ot,x,{900:"fass"}),Ot)),ln=[1,2,3,4,5,6,7,8,9,10],ua=ln.concat([11,12,13,14,15,16,17,18,19,20]),ma=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mt=new Set;Object.keys(ct[k]).map(mt.add.bind(mt));Object.keys(ct[x]).map(mt.add.bind(mt));var da=[].concat(de,vt(mt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(ln.map(function(t){return"".concat(t,"x")})).concat(ua.map(function(t){return"w-".concat(t)})),ot=G.FontAwesomeConfig||{};function va(t){var e=w.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ga(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(w&&typeof w.querySelector=="function"){var pa=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];pa.forEach(function(t){var e=fe(t,2),n=e[0],a=e[1],r=ga(va(n));r!=null&&(ot[a]=r)})}var fn={styleDefault:"solid",familyDefault:"classic",cssPrefix:an,replacementClass:rn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ot.familyPrefix&&(ot.cssPrefix=ot.familyPrefix);var at=u(u({},fn),ot);at.autoReplaceSvg||(at.observeMutations=!1);var d={};Object.keys(fn).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){at[t]=n,st.forEach(function(a){return a(d)})},get:function(){return at[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){at.cssPrefix=e,st.forEach(function(n){return n(d)})},get:function(){return at.cssPrefix}});G.FontAwesomeConfig=d;var st=[];function ba(t){return st.push(t),function(){st.splice(st.indexOf(t),1)}}var V=qt,j={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ha(t){if(!(!t||!$)){var e=w.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=w.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return w.head.insertBefore(e,a),t}}var ya="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function dt(){for(var t=12,e="";t-- >0;)e+=ya[Math.random()*62|0];return e}function rt(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ve(t){return t.classList?rt(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function cn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ka(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(cn(t[n]),'" ')},"").trim()}function Ft(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ge(t){return t.size!==j.size||t.x!==j.x||t.y!==j.y||t.rotate!==j.rotate||t.flipX||t.flipY}function wa(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:c}}function xa(t){var e=t.transform,n=t.width,a=n===void 0?qt:n,r=t.height,i=r===void 0?qt:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&nn?l+="translate(".concat(e.x/V-a/2,"em, ").concat(e.y/V-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/V,"em), calc(-50% + ").concat(e.y/V,"em)) "):l+="translate(".concat(e.x/V,"em, ").concat(e.y/V,"em) "),l+="scale(".concat(e.size/V*(e.flipX?-1:1),", ").concat(e.size/V*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var _a=`:root, :host {
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
}`;function un(){var t=an,e=rn,n=d.cssPrefix,a=d.replacementClass,r=_a;if(n!==t||a!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ie=!1;function Wt(){d.autoAddCss&&!Ie&&(ha(un()),Ie=!0)}var Aa={mixout:function(){return{dom:{css:un,insertCss:Wt}}},hooks:function(){return{beforeDOMElementCreation:function(){Wt()},beforeI2svg:function(){Wt()}}}},H=G||{};H[B]||(H[B]={});H[B].styles||(H[B].styles={});H[B].hooks||(H[B].hooks={});H[B].shims||(H[B].shims=[]);var R=H[B],mn=[],Sa=function t(){w.removeEventListener("DOMContentLoaded",t),Mt=1,mn.map(function(e){return e()})},Mt=!1;$&&(Mt=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState),Mt||w.addEventListener("DOMContentLoaded",Sa));function Oa(t){!$||(Mt?setTimeout(t,0):mn.push(t))}function pt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,i=r===void 0?[]:r;return typeof t=="string"?cn(t):"<".concat(e," ").concat(ka(a),">").concat(i.map(pt).join(""),"</").concat(e,">")}function Te(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Pa=function(e,n){return function(a,r,i,o){return e.call(n,a,r,i,o)}},Vt=function(e,n,a,r){var i=Object.keys(e),o=i.length,s=r!==void 0?Pa(n,r):n,l,c,f;for(a===void 0?(l=1,f=e[i[0]]):(l=0,f=a);l<o;l++)c=i[l],f=s(f,e[c],c,e);return f};function Ea(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((r&1023)<<10)+(i&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Zt(t){var e=Ea(t);return e.length===1?e[0].toString(16):null}function Ca(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Me(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function Qt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Me(e);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(t,Me(e)):R.styles[t]=u(u({},R.styles[t]||{}),i),t==="fas"&&Qt("fa",e)}var Pt,Et,Ct,tt=R.styles,Na=R.shims,Ia=(Pt={},O(Pt,k,Object.values(ut[k])),O(Pt,x,Object.values(ut[x])),Pt),pe=null,dn={},vn={},gn={},pn={},bn={},Ta=(Et={},O(Et,k,Object.keys(ft[k])),O(Et,x,Object.keys(ft[x])),Et);function Ma(t){return~da.indexOf(t)}function za(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!Ma(r)?r:null}var hn=function(){var e=function(i){return Vt(tt,function(o,s,l){return o[l]=Vt(s,i,{}),o},{})};dn=e(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),vn=e(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),bn=e(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in tt||d.autoFetchSvg,a=Vt(Na,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});gn=a.names,pn=a.unicodes,pe=jt(d.styleDefault,{family:d.familyDefault})};ba(function(t){pe=jt(t.styleDefault,{family:d.familyDefault})});hn();function be(t,e){return(dn[t]||{})[e]}function La(t,e){return(vn[t]||{})[e]}function J(t,e){return(bn[t]||{})[e]}function yn(t){return gn[t]||{prefix:null,iconName:null}}function Ra(t){var e=pn[t],n=be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function X(){return pe}var he=function(){return{prefix:null,iconName:null,rest:[]}};function jt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?k:n,r=ft[a][t],i=ct[a][t]||ct[a][r],o=t in R.styles?t:null;return i||o||null}var ze=(Ct={},O(Ct,k,Object.keys(ut[k])),O(Ct,x,Object.keys(ut[x])),Ct);function Dt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(e={},O(e,k,"".concat(d.cssPrefix,"-").concat(k)),O(e,x,"".concat(d.cssPrefix,"-").concat(x)),e),o=null,s=k;(t.includes(i[k])||t.some(function(c){return ze[k].includes(c)}))&&(s=k),(t.includes(i[x])||t.some(function(c){return ze[x].includes(c)}))&&(s=x);var l=t.reduce(function(c,f){var m=za(d.cssPrefix,f);if(tt[f]?(f=Ia[s].includes(f)?sa[s][f]:f,o=f,c.prefix=f):Ta[s].indexOf(f)>-1?(o=f,c.prefix=jt(f,{family:s})):m?c.iconName=m:f!==d.replacementClass&&f!==i[k]&&f!==i[x]&&c.rest.push(f),!r&&c.prefix&&c.iconName){var p=o==="fa"?yn(c.iconName):{},b=J(c.prefix,c.iconName);p.prefix&&(o=null),c.iconName=p.iconName||b||c.iconName,c.prefix=p.prefix||c.prefix,c.prefix==="far"&&!tt.far&&tt.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},he());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===x&&(tt.fass||d.autoFetchSvg)&&(l.prefix="fass",l.iconName=J(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=X()||"fas"),l}var Fa=function(){function t(){Kn(this,t),this.definitions={}}return qn(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),o[s]),Qt(s,o[s]);var l=ut[k][s];l&&Qt(l,o[s]),hn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,c=o.icon,f=c[2];n[s]||(n[s]={}),f.length>0&&f.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),Le=[],et={},nt={},ja=Object.keys(nt);function Da(t,e){var n=e.mixoutsTo;return Le=t,et={},Object.keys(nt).forEach(function(a){ja.indexOf(a)===-1&&delete nt[a]}),Le.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),Tt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){et[o]||(et[o]=[]),et[o].push(i[o])})}a.provides&&a.provides(nt)}),n}function te(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=et[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(a))}),e}function Q(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=et[t]||[];r.forEach(function(i){i.apply(null,n)})}function U(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return nt[t]?nt[t].apply(null,e):void 0}function ee(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||X();if(!!e)return e=J(n,e)||e,Te(kn.definitions,n,e)||Te(R.styles,n,e)}var kn=new Fa,Ya=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Q("noAuto")},Ba={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return $?(Q("beforeI2svg",e),U("pseudoElements2svg",e),U("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Oa(function(){Ua({autoReplaceSvgRoot:n}),Q("watch",e)})}},Ha={icon:function(e){if(e===null)return null;if(Tt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:J(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=jt(e[0]);return{prefix:a,iconName:J(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(la))){var r=Dt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:J(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var i=X();return{prefix:i,iconName:J(i,e)||e}}}},I={noAuto:Ya,config:d,dom:Ba,parse:Ha,library:kn,findIconDefinition:ee,toHtml:pt},Ua=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?w:n;(Object.keys(R.styles).length>0||d.autoFetchSvg)&&$&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function Yt(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return pt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!$){var a=w.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function $a(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,i=t.styles,o=t.transform;if(ge(o)&&n.found&&!a.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};r.style=Ft(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Wa(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:a}]}]}function ye(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,f=t.titleId,m=t.extra,p=t.watchable,b=p===void 0?!1:p,h=a.found?a:n,_=h.width,C=h.height,v=r==="fak",g=[d.replacementClass,i?"".concat(d.cssPrefix,"-").concat(i):""].filter(function(W){return m.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(m.classes).join(" "),y={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":i,class:g,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(C)})},A=v&&!~m.classes.indexOf("fa-fw")?{width:"".concat(_/C*16*.0625,"em")}:{};b&&(y.attributes[Z]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(f||dt())},children:[l]}),delete y.attributes.title);var S=u(u({},y),{},{prefix:r,iconName:i,main:n,mask:a,maskId:c,transform:o,symbol:s,styles:u(u({},A),m.styles)}),F=a.found&&n.found?U("generateAbstractMask",S)||{children:[],attributes:{}}:U("generateAbstractIcon",S)||{children:[],attributes:{}},M=F.children,Bt=F.attributes;return S.children=M,S.attributes=Bt,s?Wa(S):$a(S)}function Re(t){var e=t.content,n=t.width,a=t.height,r=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[Z]="");var f=u({},o.styles);ge(r)&&(f.transform=xa({transform:r,startCentered:!0,width:n,height:a}),f["-webkit-transform"]=f.transform);var m=Ft(f);m.length>0&&(c.style=m);var p=[];return p.push({tag:"span",attributes:c,children:[e]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Va(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ft(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Gt=R.styles;function ne(t){var e=t[0],n=t[1],a=t.slice(4),r=fe(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var Ga={found:!1,width:512,height:512};function Xa(t,e){!on&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function ae(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=X()),new Promise(function(a,r){if(U("missingIconAbstract"),n==="fa"){var i=yn(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&Gt[e]&&Gt[e][t]){var o=Gt[e][t];return a(ne(o))}Xa(t,e),a(u(u({},Ga),{},{icon:d.showMissingIcons&&t?U("missingIconAbstract")||{}:{}}))})}var Fe=function(){},re=d.measurePerformance&&wt&&wt.mark&&wt.measure?wt:{mark:Fe,measure:Fe},it='FA "6.2.0"',Ka=function(e){return re.mark("".concat(it," ").concat(e," begins")),function(){return wn(e)}},wn=function(e){re.mark("".concat(it," ").concat(e," ends")),re.measure("".concat(it," ").concat(e),"".concat(it," ").concat(e," begins"),"".concat(it," ").concat(e," ends"))},ke={begin:Ka,end:wn},Nt=function(){};function je(t){var e=t.getAttribute?t.getAttribute(Z):null;return typeof e=="string"}function qa(t){var e=t.getAttribute?t.getAttribute(ue):null,n=t.getAttribute?t.getAttribute(me):null;return e&&n}function Ja(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Za(){if(d.autoReplaceSvg===!0)return It.replace;var t=It[d.autoReplaceSvg];return t||It.replace}function Qa(t){return w.createElementNS("http://www.w3.org/2000/svg",t)}function tr(t){return w.createElement(t)}function xn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Qa:tr:n;if(typeof t=="string")return w.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){r.appendChild(xn(o,{ceFn:a}))}),r}function er(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var It={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(xn(r),n)}),n.getAttribute(Z)===null&&d.keepOriginalSource){var a=w.createComment(er(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~ve(n).indexOf(d.replacementClass))return It.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===d.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return pt(s)}).join(`
`);n.setAttribute(Z,""),n.innerHTML=o}};function De(t){t()}function _n(t,e){var n=typeof e=="function"?e:Nt;if(t.length===0)n();else{var a=De;d.mutateApproach===ia&&(a=G.requestAnimationFrame||De),a(function(){var r=Za(),i=ke.begin("mutate");t.map(r),i(),n()})}}var we=!1;function An(){we=!0}function ie(){we=!1}var zt=null;function Ye(t){if(!!Ce&&!!d.observeMutations){var e=t.treeCallback,n=e===void 0?Nt:e,a=t.nodeCallback,r=a===void 0?Nt:a,i=t.pseudoElementsCallback,o=i===void 0?Nt:i,s=t.observeMutationsRoot,l=s===void 0?w:s;zt=new Ce(function(c){if(!we){var f=X();rt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!je(m.addedNodes[0])&&(d.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&je(m.target)&&~ma.indexOf(m.attributeName))if(m.attributeName==="class"&&qa(m.target)){var p=Dt(ve(m.target)),b=p.prefix,h=p.iconName;m.target.setAttribute(ue,b||f),h&&m.target.setAttribute(me,h)}else Ja(m.target)&&r(m.target)})}}),$&&zt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function nr(){!zt||zt.disconnect()}function ar(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function rr(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Dt(ve(t));return r.prefix||(r.prefix=X()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=La(r.prefix,t.innerText)||be(r.prefix,Zt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function ir(t){var e=rt(t.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||dt()):(e["aria-hidden"]="true",e.focusable="false")),e}function or(){return{iconName:null,title:null,titleId:null,prefix:null,transform:j,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Be(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=rr(t),a=n.iconName,r=n.prefix,i=n.rest,o=ir(t),s=te("parseNodeAttributes",{},t),l=e.styleParser?ar(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:j,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var sr=R.styles;function Sn(t){var e=d.autoReplaceSvg==="nest"?Be(t,{styleParser:!1}):Be(t);return~e.extra.classes.indexOf(sn)?U("generateLayersText",t,e):U("generateSvgReplacementMutation",t,e)}var K=new Set;de.map(function(t){K.add("fa-".concat(t))});Object.keys(ft[k]).map(K.add.bind(K));Object.keys(ft[x]).map(K.add.bind(K));K=vt(K);function He(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!$)return Promise.resolve();var n=w.documentElement.classList,a=function(m){return n.add("".concat(Ne,"-").concat(m))},r=function(m){return n.remove("".concat(Ne,"-").concat(m))},i=d.autoFetchSvg?K:de.map(function(f){return"fa-".concat(f)}).concat(Object.keys(sr));i.includes("fa")||i.push("fa");var o=[".".concat(sn,":not([").concat(Z,"])")].concat(i.map(function(f){return".".concat(f,":not([").concat(Z,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=rt(t.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=ke.begin("onTree"),c=s.reduce(function(f,m){try{var p=Sn(m);p&&f.push(p)}catch(b){on||b.name==="MissingIcon"&&console.error(b)}return f},[]);return new Promise(function(f,m){Promise.all(c).then(function(p){_n(p,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),l(),f()})}).catch(function(p){l(),m(p)})})}function lr(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Sn(t).then(function(n){n&&_n([n],e)})}function fr(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:ee(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:ee(r||{})),t(a,u(u({},n),{},{mask:r}))}}var cr=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?j:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,f=c===void 0?null:c,m=n.title,p=m===void 0?null:m,b=n.titleId,h=b===void 0?null:b,_=n.classes,C=_===void 0?[]:_,v=n.attributes,g=v===void 0?{}:v,y=n.styles,A=y===void 0?{}:y;if(!!e){var S=e.prefix,F=e.iconName,M=e.icon;return Yt(u({type:"icon"},e),function(){return Q("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(p?g["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||dt()):(g["aria-hidden"]="true",g.focusable="false")),ye({icons:{main:ne(M),mask:l?ne(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:F,transform:u(u({},j),r),symbol:o,title:p,maskId:f,titleId:h,extra:{attributes:g,styles:A,classes:C}})})}},ur={mixout:function(){return{icon:fr(cr)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=He,n.nodeCallback=lr,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?w:a,i=n.callback,o=i===void 0?function(){}:i;return He(r,o)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,c=a.symbol,f=a.mask,m=a.maskId,p=a.extra;return new Promise(function(b,h){Promise.all([ae(r,s),f.iconName?ae(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var C=fe(_,2),v=C[0],g=C[1];b([n,ye({icons:{main:v,mask:g},prefix:s,iconName:r,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:p,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ft(s);l.length>0&&(r.style=l);var c;return ge(o)&&(c=U("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(c||i.icon),{children:a,attributes:r}}}},mr={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Yt({type:"layer"},function(){Q("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(vt(i)).join(" ")},children:o}]})}}}},dr={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,c=l===void 0?{}:l,f=a.styles,m=f===void 0?{}:f;return Yt({type:"counter",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Va({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(vt(s))}})})}}}},vr={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?j:r,o=a.title,s=o===void 0?null:o,l=a.classes,c=l===void 0?[]:l,f=a.attributes,m=f===void 0?{}:f,p=a.styles,b=p===void 0?{}:p;return Yt({type:"text",content:n},function(){return Q("beforeDOMElementCreation",{content:n,params:a}),Re({content:n,transform:u(u({},j),i),title:s,extra:{attributes:m,styles:b,classes:["".concat(d.cssPrefix,"-layers-text")].concat(vt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(nn){var c=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();s=f.width/c,l=f.height/c}return d.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Re({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},gr=new RegExp('"',"ug"),Ue=[1105920,1112319];function pr(t){var e=t.replace(gr,""),n=Ca(e,0),a=n>=Ue[0]&&n<=Ue[1],r=e.length===2?e[0]===e[1]:!1;return{value:Zt(r?e[0]:e),isSecondary:a||r}}function $e(t,e){var n="".concat(ra).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var i=rt(t.children),o=i.filter(function(M){return M.getAttribute(Jt)===e})[0],s=G.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(fa),c=s.getPropertyValue("font-weight"),f=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),a();if(l&&f!=="none"&&f!==""){var m=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?x:k,b=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ct[p][l[2].toLowerCase()]:ca[p][c],h=pr(m),_=h.value,C=h.isSecondary,v=l[0].startsWith("FontAwesome"),g=be(b,_),y=g;if(v){var A=Ra(_);A.iconName&&A.prefix&&(g=A.iconName,b=A.prefix)}if(g&&!C&&(!o||o.getAttribute(ue)!==b||o.getAttribute(me)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var S=or(),F=S.extra;F.attributes[Jt]=e,ae(g,b).then(function(M){var Bt=ye(u(u({},S),{},{icons:{main:M,mask:he()},prefix:b,iconName:y,extra:F,watchable:!0})),W=w.createElement("svg");e==="::before"?t.insertBefore(W,t.firstChild):t.appendChild(W),W.outerHTML=Bt.map(function(Nn){return pt(Nn)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function br(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function hr(t){return t.parentNode!==document.head&&!~oa.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Jt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function We(t){if(!!$)return new Promise(function(e,n){var a=rt(t.querySelectorAll("*")).filter(hr).map(br),r=ke.begin("searchPseudoElements");An(),Promise.all(a).then(function(){r(),ie(),e()}).catch(function(){r(),ie(),n()})})}var yr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=We,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?w:a;d.searchPseudoElements&&We(r)}}},Ve=!1,kr={mixout:function(){return{dom:{unwatch:function(){An(),Ve=!0}}}},hooks:function(){return{bootstrap:function(){Ye(te("mutationObserverCallbacks",{}))},noAuto:function(){nr()},watch:function(n){var a=n.observeMutationsRoot;Ve?ie():Ye(te("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ge=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},wr={mixout:function(){return{parse:{transform:function(n){return Ge(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ge(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),f="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(f)},p={transform:"translate(".concat(o/2*-1," -256)")},b={outer:s,inner:m,path:p};return{tag:"g",attributes:u({},b.outer),children:[{tag:"g",attributes:u({},b.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),b.path)}]}]}}}},Xt={x:0,y:0,width:"100%",height:"100%"};function Xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function xr(t){return t.tag==="g"?t.children:[t]}var _r={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Dt(r.split(" ").map(function(o){return o.trim()})):he();return i.prefix||(i.prefix=X()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,f=i.icon,m=o.width,p=o.icon,b=wa({transform:l,containerWidth:m,iconWidth:c}),h={tag:"rect",attributes:u(u({},Xt),{},{fill:"white"})},_=f.children?{children:f.children.map(Xe)}:{},C={tag:"g",attributes:u({},b.inner),children:[Xe(u({tag:f.tag,attributes:u(u({},f.attributes),b.path)},_))]},v={tag:"g",attributes:u({},b.outer),children:[C]},g="mask-".concat(s||dt()),y="clip-".concat(s||dt()),A={tag:"mask",attributes:u(u({},Xt),{},{id:g,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,v]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:xr(p)},A]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(g,")")},Xt)}),{children:a,attributes:r}}}},Ar={provides:function(e){var n=!1;G.matchMedia&&(n=G.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Sr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Or=[Aa,ur,mr,dr,vr,yr,kr,wr,_r,Ar,Sr];Da(Or,{mixoutsTo:I});I.noAuto;var On=I.config,Pr=I.library;I.dom;var Lt=I.parse;I.findIconDefinition;I.toHtml;var Er=I.icon;I.layer;var Cr=I.text;I.counter;function Ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function L(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ke(Object(n),!0).forEach(function(a){N(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Rt(t){return Rt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Rt(t)}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,i;for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Ir(t,e){if(t==null)return{};var n=Nr(t,e),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(n[a]=t[a]))}return n}function oe(t){return Tr(t)||Mr(t)||zr(t)||Lr()}function Tr(t){if(Array.isArray(t))return se(t)}function Mr(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function zr(t,e){if(!!t){if(typeof t=="string")return se(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return se(t,e)}}function se(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Lr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Rr=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Pn={exports:{}};(function(t){(function(e){var n=function(v,g,y){if(!c(g)||m(g)||p(g)||b(g)||l(g))return g;var A,S=0,F=0;if(f(g))for(A=[],F=g.length;S<F;S++)A.push(n(v,g[S],y));else{A={};for(var M in g)Object.prototype.hasOwnProperty.call(g,M)&&(A[v(M,y)]=n(v,g[M],y))}return A},a=function(v,g){g=g||{};var y=g.separator||"_",A=g.split||/(?=[A-Z])/;return v.split(A).join(y)},r=function(v){return h(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(g,y){return y?y.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var g=r(v);return g.substr(0,1).toUpperCase()+g.substr(1)},o=function(v,g){return a(v,g).toLowerCase()},s=Object.prototype.toString,l=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},f=function(v){return s.call(v)=="[object Array]"},m=function(v){return s.call(v)=="[object Date]"},p=function(v){return s.call(v)=="[object RegExp]"},b=function(v){return s.call(v)=="[object Boolean]"},h=function(v){return v=v-0,v===v},_=function(v,g){var y=g&&"process"in g?g.process:g;return typeof y!="function"?v:function(A,S){return y(A,v,S)}},C={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,g){return n(_(r,g),v)},decamelizeKeys:function(v,g){return n(_(o,g),v,g)},pascalizeKeys:function(v,g){return n(_(i,g),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=C:e.humps=C})(Rr)})(Pn);var Fr=Pn.exports,jr=["class","style"];function Dr(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=Fr.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return e[r]=i,e},{})}function Yr(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return xe(l)}),r=Object.keys(t.attributes||{}).reduce(function(l,c){var f=t.attributes[c];switch(c){case"class":l.class=Yr(f);break;case"style":l.style=Dr(f);break;default:l.attrs[c]=f}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ir(n,jr);return Je(t.tag,L(L(L({},e),{},{class:r.class,style:L(L({},r.style),o)},r.attrs),s),a)}var En=!1;try{En=!0}catch{}function Br(){if(!En&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function lt(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?N({},t,e):{}}function Hr(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},N(e,"fa-".concat(t.size),t.size!==null),N(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),N(e,"fa-pull-".concat(t.pull),t.pull!==null),N(e,"fa-swap-opacity",t.swapOpacity),N(e,"fa-bounce",t.bounce),N(e,"fa-shake",t.shake),N(e,"fa-beat",t.beat),N(e,"fa-fade",t.fade),N(e,"fa-beat-fade",t.beatFade),N(e,"fa-flash",t.flash),N(e,"fa-spin-pulse",t.spinPulse),N(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function qe(t){if(t&&Rt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Lt.icon)return Lt.icon(t);if(t===null)return null;if(Rt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Ur=le({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var a=n.attrs,r=z(function(){return qe(e.icon)}),i=z(function(){return lt("classes",Hr(e))}),o=z(function(){return lt("transform",typeof e.transform=="string"?Lt.transform(e.transform):e.transform)}),s=z(function(){return lt("mask",qe(e.mask))}),l=z(function(){return Er(r.value,L(L(L(L({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});In(l,function(f){if(!f)return Br("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=z(function(){return l.value?xe(l.value.abstract[0],{},a):null});return function(){return c.value}}});le({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var a=n.slots,r=On.familyPrefix,i=z(function(){return["".concat(r,"-layers")].concat(oe(e.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return Je("div",{class:i.value},a.default?a.default():[])}}});le({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var a=n.attrs,r=On.familyPrefix,i=z(function(){return lt("classes",[].concat(oe(e.counter?["".concat(r,"-layers-counter")]:[]),oe(e.position?["".concat(r,"-layers-").concat(e.position)]:[])))}),o=z(function(){return lt("transform",typeof e.transform=="string"?Lt.transform(e.transform):e.transform)}),s=z(function(){var c=Cr(e.value.toString(),L(L({},o.value),i.value)),f=c.abstract;return e.counter&&(f[0].attributes.class=f[0].attributes.class.replace("fa-layers-text","")),f[0]}),l=z(function(){return xe(s.value,{},a)});return function(){return l.value}}});var $r={prefix:"fab",iconName:"hacker-news",icon:[448,512,[],"f1d4","M0 32v448h448V32H0zm21.2 197.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z"]},Wr={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},Vr={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},Gr={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Xr={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};Pr.add(Xr,Vr,Gr,$r,Wr);const Kr={components:{ShareNetwork:Gn.exports.ShareNetwork,FontAwesomeIcon:Ur},metaInfo(){return this.metadata},setup(){const t=Mn(),e=bt({}),n=bt([]),a=bt(!1),r=bt({}),i=window.location.href;return zn(async()=>{var o,s,l;if(n.value=[],t.params.slug){if(a.value=!0,e.value=await Ln(t.params.slug),a.value=!1,e.value.tags.length){const c=await Ht({limit:2,filter:`tag:${e.value.primary_tag.slug}+id:-${(o=e.value)==null?void 0:o.id}`});if(n.value=c.posts,n.value.length<2){const m=(await Ht({limit:"all",filter:`tag:-${e.value.primary_tag.slug}+id:-${(s=e.value)==null?void 0:s.id}`})).posts,p=Math.floor(Math.random()*(m.length-1));n.value=[...n.value,...m.slice(p,p+2)].slice(0,2)}}else{const c=await Ht({limit:2,filter:`id:-${(l=e.value)==null?void 0:l.id}`});n.value=c.posts}r.value={...r.value,title:e.value.meta_title||e.value.title,description:e.value.meta_description||e.value.excerpt,og:{title:{property:"og:title",content:e.value.og_title||e.value.title,vmid:"og:title"},image:{property:"og:image",content:e.value.og_image||e.value.feature_image,vmid:"og:image"},description:{property:"og:description",content:e.value.og_description||e.value.excerpt,vmid:"og:description"}},twitter:{title:{property:"twitter:title",content:e.value.twitter_title||e.value.title,vmid:"twitter:title"},image:{property:"twitter:image",content:e.value.twitter_image||e.value.feature_image,vmid:"twitter:image"},description:{property:"twitter:description",content:e.value.twitter_description||e.value.excerpt,vmid:"twitter:description"}},script:[{src:"https://jina-ai-gmbh.ghost.io/public/cards.min.js",async:!0}]},Rn.highlightAll()}}),{blog:e,loading:a,suggestedBlogs:n,url:i,metadata:r,formatDate:Fn}}},Cn=t=>(Wn("data-v-0d5bb4cc"),t=t(),Vn(),t),qr={class:"c-dynamicShadowImage"},Jr={class:"tags mt_80"},Zr={class:"mt_20"},Qr={class:"info mt_16"},ti={class:"author"},ei={class:"article-byline-meta"},ni=["innerHTML"],ai={key:0,class:"author-sep"},ri={class:"byline-meta-content"},ii={class:"publishAt"},oi={class:"byline-reading-time"},si=Cn(()=>E("span",{class:"bull"},"\u2022",-1)),li={key:0,class:"bottom"},fi={class:"social-media"},ci={class:"article"},ui=["innerHTML"],mi={key:0,class:"mt_120"},di=Cn(()=>E("p",{class:"mb_16"},"You may also like",-1));function vi(t,e,n,a,r,i){const o=jn,s=Dn,l=_e("font-awesome-icon"),c=_e("ShareNetwork"),f=$n,m=Yn,p=Bn,b=Xn;return Hn((T(),Ut(p,{class:"blog-detail container",justify:"center"},{default:D(()=>[P(m,{xs:24,sm:20,md:18,lg:18,xl:18},{default:D(()=>[E("div",qr,[P(o,{class:"feature-image feature-image--object",src:a.blog.feature_image,fit:"contain"},null,8,["src"]),P(o,{class:"feature-image feature-image--shadow",src:a.blog.feature_image,fit:"contain"},null,8,["src"])]),E("div",Jr,[(T(!0),Y(kt,null,ht(a.blog.tags,h=>(T(),Y("span",{class:"tag",key:h.id},yt(h.name),1))),128))]),E("h1",Zr,yt(a.blog.title),1),E("div",Qr,[E("div",ti,[(T(!0),Y(kt,null,ht(a.blog.authors,(h,_)=>(T(),Ut(s,{class:"avatar",size:48,src:h.profile_image,key:h,"z-index":10-_},null,8,["src","z-index"]))),128)),E("div",ei,[(T(!0),Y(kt,null,ht(a.blog.authors,(h,_)=>(T(),Y("span",{key:h},[E("span",{class:"author-name",innerHTML:h.name},null,8,ni),_+1<a.blog.authors.length?(T(),Y("span",ai,",")):$t("",!0)]))),128)),E("div",ri,[E("span",ii,yt(a.formatDate(a.blog.published_at)),1),E("span",oi,[si,Un(" "+yt(a.blog.reading_time)+" min read",1)])])])]),a.loading?$t("",!0):(T(),Y("div",li,[E("div",fi,[P(c,{network:"HackerNews",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:D(()=>[P(l,{icon:"fa-brands fa-hacker-news"})]),_:1},8,["url","title","description"]),P(c,{network:"Twitter",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:D(()=>[P(l,{icon:"fa-brands fa-twitter"})]),_:1},8,["url","title","description"]),P(c,{network:"LinkedIn",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:D(()=>[P(l,{icon:"fa-brands fa-linkedin"})]),_:1},8,["url","title","description"]),P(c,{network:"Facebook",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:D(()=>[P(l,{icon:"fa-brands fa-facebook"})]),_:1},8,["url","title","description"]),P(c,{network:"Reddit",url:a.url,title:a.blog.title||"undefined",description:a.blog.excerpt},{default:D(()=>[P(l,{icon:"fa-brands fa-reddit"})]),_:1},8,["url","title","description"])])]))]),E("article",ci,[E("section",{class:"gh-content",innerHTML:a.blog.html},null,8,ui)]),!a.loading&&a.suggestedBlogs.length?(T(),Y("div",mi,[di,P(p,{gutter:30},{default:D(()=>[(T(!0),Y(kt,null,ht(a.suggestedBlogs,h=>(T(),Ut(m,{class:"blog-item",xs:24,sm:12,md:12,lg:12,xl:12,key:h.id},{default:D(()=>[P(f,{blog:h},null,8,["blog"])]),_:2},1024))),128))]),_:1})])):$t("",!0)]),_:1})]),_:1})),[[b,a.loading]])}var bi=Tn(Kr,[["render",vi],["__scopeId","data-v-0d5bb4cc"]]);export{bi as default};
