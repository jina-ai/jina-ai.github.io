import{k as m,d1 as p,w as c,l as v,W as Z,F as x,J as g,d2 as M}from"./index-TXJ3b7wn.js";let s=0;const w={fullscreen:Boolean,noRouteFullscreenExit:Boolean},y=["update:fullscreen","fullscreen"];function F(){const f=g(),{props:r,emit:d,proxy:e}=f;let n,u,L;const l=m(!1);p(f)===!0&&c(()=>e.$route.fullPath,()=>{r.noRouteFullscreenExit!==!0&&t()}),c(()=>r.fullscreen,o=>{l.value!==o&&i()}),c(l,o=>{d("update:fullscreen",o),d("fullscreen",o)});function i(){l.value===!0?t():a()}function a(){l.value!==!0&&(l.value=!0,L=e.$el.parentNode,L.replaceChild(u,e.$el),document.body.appendChild(e.$el),s++,s===1&&document.body.classList.add("q-body--fullscreen-mixin"),n={handler:t},M.add(n))}function t(){l.value===!0&&(n!==void 0&&(M.remove(n),n=void 0),L.replaceChild(e.$el,u),l.value=!1,s=Math.max(0,s-1),s===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),e.$el.scrollIntoView!==void 0&&setTimeout(()=>{e.$el.scrollIntoView()})))}return v(()=>{u=document.createElement("span")}),Z(()=>{r.fullscreen===!0&&a()}),x(t),Object.assign(e,{toggleFullscreen:i,setFullscreen:a,exitFullscreen:t}),{inFullscreen:l,toggleFullscreen:i}}const b="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20width='320'%20zoomAndPan='magnify'%20viewBox='0%200%20240%20239.999995'%20height='320'%20preserveAspectRatio='xMidYMid%20meet'%20version='1.0'%3e%3cpath%20fill='%23ffffff'%20d='M%20164.820312%2048%20L%20195%2048%20L%20195%2078.179688%20L%20164.820312%2078.179688%20Z%20M%20164.820312%2085.726562%20L%20195%2085.726562%20L%20195%20115.90625%20L%20164.820312%20115.90625%20Z%20M%20195%20123.449219%20L%20164.820312%20123.449219%20L%20164.820312%20153.632812%20L%20195%20153.632812%20Z%20M%20164.820312%20161.175781%20L%20195%20161.175781%20L%20195%20191.359375%20L%20164.820312%20191.359375%20Z%20M%2076.792969%2053.28125%20L%2067.707031%2063.375%20L%2077.796875%2072.460938%20L%2086.886719%2062.367188%20Z%20M%2067.707031%20101.101562%20L%2076.792969%2091.007812%20L%2086.886719%20100.09375%20L%2077.796875%20110.1875%20Z%20M%2076.792969%20128.734375%20L%2067.707031%20138.824219%20L%2077.796875%20147.914062%20L%2086.886719%20137.820312%20Z%20M%2067.707031%20176.550781%20L%2076.792969%20166.460938%20L%2086.886719%20175.546875%20L%2077.796875%20185.640625%20Z%20M%2048.96875%2057.054688%20L%2045%2065.191406%20L%2053.136719%2069.160156%20L%2057.105469%2061.023438%20Z%20M%2045%20102.917969%20L%2048.96875%2094.78125%20L%2057.105469%2098.75%20L%2053.136719%20106.886719%20Z%20M%2048.96875%20132.507812%20L%2045%20140.644531%20L%2053.136719%20144.613281%20L%2057.105469%20136.476562%20Z%20M%2045%20178.371094%20L%2048.96875%20170.230469%20L%2057.105469%20174.199219%20L%2053.136719%20182.339844%20Z%20M%20113.113281%2050.261719%20L%2097.757812%2059.859375%20L%20107.355469%2075.214844%20L%20122.710938%2065.621094%20Z%20M%2097.757812%2097.585938%20L%20113.113281%2087.988281%20L%20122.710938%20103.347656%20L%20107.355469%20112.941406%20Z%20M%20113.113281%20125.714844%20L%2097.757812%20135.3125%20L%20107.355469%20150.667969%20L%20122.710938%20141.070312%20Z%20M%2097.757812%20173.035156%20L%20113.113281%20163.441406%20L%20122.710938%20178.796875%20L%20107.355469%20188.394531%20Z%20M%20152.050781%2048%20L%20128.839844%2054.65625%20L%20135.496094%2077.863281%20L%20158.703125%2071.210938%20Z%20M%20128.839844%2092.378906%20L%20152.050781%2085.726562%20L%20158.703125%20108.933594%20L%20135.496094%20115.589844%20Z%20M%20152.050781%20123.449219%20L%20128.839844%20130.105469%20L%20135.496094%20153.316406%20L%20158.703125%20146.660156%20Z%20M%20128.839844%20167.832031%20L%20152.050781%20161.175781%20L%20158.703125%20184.386719%20L%20135.496094%20191.042969%20Z%20M%20128.839844%20167.832031%20'%20fill-opacity='1'%20fill-rule='evenodd'/%3e%3c/svg%3e";export{y as a,F as b,b as t,w as u};