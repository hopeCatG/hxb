(function(n){function e(e){for(var t,a,u=e[0],c=e[1],d=e[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(n[t]=c[t]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,d||[]),o()}function o(){for(var n,e=0;e<i.length;e++){for(var o=i[e],t=!0,a=1;a<o.length;a++){var c=o[a];0!==r[c]&&(t=!1)}t&&(i.splice(e--,1),n=u(u.s=o[0]))}return n}var t={},r={index:0},i=[];function a(n){return u.p+"static/js/"+({"pages-admin-admin":"pages-admin-admin","pages-error-error":"pages-error-error","pages-index-index":"pages-index-index","pages-mindRecord-mindRecord":"pages-mindRecord-mindRecord","pages-videos-videos":"pages-videos-videos"}[n]||n)+"."+{"pages-admin-admin":"b3d1c634","pages-error-error":"2da656ca","pages-index-index":"0c7deb66","pages-mindRecord-mindRecord":"036cb92a","pages-videos-videos":"0a1a5887"}[n]+".js"}function u(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(n){var e=[],o=r[n];if(0!==o)if(o)e.push(o[2]);else{var t=new Promise((function(e,t){o=r[n]=[e,t]}));e.push(o[2]=t);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(n);var d=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(s);var o=r[n];if(0!==o){if(o){var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;d.message="Loading chunk "+n+" failed.\n("+t+": "+i+")",d.name="ChunkLoadError",d.type=t,d.request=i,o[1](d)}r[n]=void 0}};var s=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},u.m=n,u.c=t,u.d=function(n,e,o){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var t in n)u.d(o,t,function(e){return n[e]}.bind(null,t));return o},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=d;i.push([0,"chunk-vendors"]),o()})({0:function(n,e,o){n.exports=o("b3da")},"0085":function(n,e,o){"use strict";(function(n){var e=o("4ea4");o("13d5"),o("d3b7"),o("ac1f"),o("5319"),o("ddb0");var t=e(o("e143")),r={keys:function(){return[]}};n["____15DE7D7____"]=!0,delete n["____15DE7D7____"],n.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"❤小朋友专属网站❤",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"}},n.__uniConfig.compilerVersion="3.2.9",n.__uniConfig.router={mode:"hash",base:"/"},n.__uniConfig.publicPath="/",n.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},n.__uniConfig.debug=!1,n.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},n.__uniConfig.sdkConfigs={},n.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",n.__uniConfig.locale="",n.__uniConfig.fallbackLocale=void 0,n.__uniConfig.locales=r.keys().reduce((function(n,e){var o=e.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=r(e);return Object.assign(n[o]||(n[o]={}),t.common||t),n}),{}),n.__uniConfig.nvue={"flex-direction":"column"},n.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-index-index",(function(n){var e={component:o.e("pages-index-index").then(function(){return n(o("eb66"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-videos-videos",(function(n){var e={component:o.e("pages-videos-videos").then(function(){return n(o("fb89"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-mindRecord-mindRecord",(function(n){var e={component:o.e("pages-mindRecord-mindRecord").then(function(){return n(o("5a6c"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-admin-admin",(function(n){var e={component:o.e("pages-admin-admin").then(function(){return n(o("4492"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),t.default.component("pages-error-error",(function(n){var e={component:o.e("pages-error-error").then(function(){return n(o("6de7"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(e.loading={name:"SystemAsyncLoading",render:function(n){return n(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(e.error={name:"SystemAsyncError",render:function(n){return n(__uniConfig["async"]["error"])}}),e})),n.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(n){return n("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"❤小朋友专属网站❤"})},[n("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/videos/videos",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"视频记录❤",enablePullDownRefresh:!1})},[n("pages-videos-videos",{slot:"page"})])}},meta:{name:"pages-videos-videos",isNVue:!1,maxWidth:0,pagePath:"pages/videos/videos",windowTop:0}},{path:"/pages/mindRecord/mindRecord",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"俺想对你说❤",enablePullDownRefresh:!1})},[n("pages-mindRecord-mindRecord",{slot:"page"})])}},meta:{name:"pages-mindRecord-mindRecord",isNVue:!1,maxWidth:0,pagePath:"pages/mindRecord/mindRecord",windowTop:0}},{path:"/pages/admin/admin",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-admin-admin",{slot:"page"})])}},meta:{name:"pages-admin-admin",isNVue:!1,maxWidth:0,pagePath:"pages/admin/admin",windowTop:0}},{path:"/pages/error/error",component:{render:function(n){return n("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[n("pages-error-error",{slot:"page"})])}},meta:{name:"pages-error-error",isNVue:!1,maxWidth:0,pagePath:"pages/error/error",windowTop:0}},{path:"/preview-image",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(n){return n("Page",{props:{navigationStyle:"custom"}},[n("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],n.UniApp&&new n.UniApp}).call(this,o("c8ba"))},"0d67":function(n,e,o){"use strict";var t;o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){return t}));var r=function(){var n=this,e=n.$createElement,o=n._self._c||e;return o("App",{attrs:{keepAliveInclude:n.keepAliveInclude}})},i=[]},4746:function(n,e,o){"use strict";(function(n){o("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=function(e){return new Promise((function(o,t){n.callFunction({name:"videos",data:e}).then((function(n){200===n.result.code?o(n.result):t(n.result)})).catch((function(n){return t(n)}))}))},r=function(e){return new Promise((function(o,t){n.callFunction({name:"getMindRecord",data:e}).then((function(n){200===n.result.code?o(n.result):t(n.result)})).catch((function(n){return t(n)}))}))},i=function(e){return new Promise((function(o,t){n.callFunction({name:"addMindRecord",data:e}).then((function(n){200===n.result.code?o(n.result):t(n.result)})).catch((function(n){return t(n)}))}))},a=function(e){return new Promise((function(o,t){n.callFunction({name:"AddLoginIP",data:e}).then((function(n){200===n.result.code?o(n.result):t(n.result)})).catch((function(n){return t(n)}))}))},u={get_videos:t,get_mindRecord:r,add_mindRecord:i,add_LoginIP:a};e.default=u}).call(this,o("a9ff")["default"])},6280:function(n,e,o){"use strict";var t=o("a81e"),r=o.n(t);r.a},7191:function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={onPageNotFound:[function(n){uni.redirectTo({url:"pages/error/error"})}]};e.default=t},"7eac":function(n,e,o){"use strict";o.r(e);var t=o("0d67"),r=o("8a8b");for(var i in r)"default"!==i&&function(n){o.d(e,n,(function(){return r[n]}))}(i);o("6280");var a,u=o("f0c5"),c=Object(u["a"])(r["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],a);e["default"]=c.exports},8718:function(n,e,o){var t=o("24fb");e=t(!1),e.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.loading{img{-webkit-transform:scale(.8);transform:scale(.8)}}.dfr{display:flex;flex-direction:row;justify-content:center}.dfc{display:flex;flex-direction:column;justify-content:center}.content{max-width:750px;margin:0 auto;height:100%}uni-video{width:100%;height:100%}uni-page-body,\nuni-page-refresh{height:100%}.uni-input-input{color:#66655a!important}",""]),n.exports=e},"8a8b":function(n,e,o){"use strict";o.r(e);var t=o("7191"),r=o.n(t);for(var i in t)"default"!==i&&function(n){o.d(e,n,(function(){return t[n]}))}(i);e["default"]=r.a},"9e23":function(n,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={appid:"__UNI__15DE7D7"};e.default=t},a81e:function(n,e,o){var t=o("8718");"string"===typeof t&&(t=[[n.i,t,""]]),t.locals&&(n.exports=t.locals);var r=o("4f06").default;r("5d64bfde",t,!0,{sourceMap:!1,shadowMode:!1})},b3da:function(n,e,o){"use strict";var t=o("4ea4"),r=t(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0085"),o("1c31");var i=t(o("7eac")),a=t(o("e143")),u=t(o("4746"));a.default.prototype.$api=u.default,a.default.config.productionTip=!1,i.default.mpType="app";var c=new a.default((0,r.default)({},i.default));c.$mount()}});