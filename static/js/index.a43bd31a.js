(function(e){function n(n){for(var t,a,u=n[0],c=n[1],d=n[2],s=0,f=[];s<u.length;s++)a=u[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(t in c)Object.prototype.hasOwnProperty.call(c,t)&&(e[t]=c[t]);l&&l(n);while(f.length)f.shift()();return r.push.apply(r,d||[]),o()}function o(){for(var e,n=0;n<r.length;n++){for(var o=r[n],t=!0,a=1;a<o.length;a++){var c=o[a];0!==i[c]&&(t=!1)}t&&(r.splice(n--,1),e=u(u.s=o[0]))}return e}var t={},i={index:0},r=[];function a(e){return u.p+"static/js/"+({"pages-index-index":"pages-index-index","pages-mindRecord-mindRecord":"pages-mindRecord-mindRecord","pages-videos-videos":"pages-videos-videos"}[e]||e)+"."+{"pages-index-index":"c69e1d87","pages-mindRecord-mindRecord":"c6d32807","pages-videos-videos":"95e64077"}[e]+".js"}function u(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var n=[],o=i[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise((function(n,t){o=i[e]=[n,t]}));n.push(o[2]=t);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=a(e);var d=new Error;r=function(n){c.onerror=c.onload=null,clearTimeout(s);var o=i[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,o[1](d)}i[e]=void 0}};var s=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(n)},u.m=e,u.c=t,u.d=function(e,n,o){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)u.d(o,t,function(n){return e[n]}.bind(null,t));return o},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=d;r.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("b3da")},"0085":function(e,n,o){"use strict";(function(e){var n=o("4ea4");o("13d5"),o("d3b7"),o("ac1f"),o("5319"),o("ddb0");var t=n(o("e143")),i={keys:function(){return[]}};e["____15DE7D7____"]=!0,delete e["____15DE7D7____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"小朋友专属网站",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8",navigationStyle:"custom"}},e.__uniConfig.compilerVersion="3.2.9",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,n){var o=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(n);return Object.assign(e[o]||(e[o]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=o.e,t.default.component("pages-index-index",(function(e){var n={component:o.e("pages-index-index").then(function(){return e(o("eb66"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-videos-videos",(function(e){var n={component:o.e("pages-videos-videos").then(function(){return e(o("fb89"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),t.default.component("pages-mindRecord-mindRecord",(function(e){var n={component:o.e("pages-mindRecord-mindRecord").then(function(){return e(o("5a6c"))}.bind(null,o)).catch(o.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"小朋友专属网站"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/pages/videos/videos",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-videos-videos",{slot:"page"})])}},meta:{name:"pages-videos-videos",isNVue:!1,maxWidth:0,pagePath:"pages/videos/videos",windowTop:0}},{path:"/pages/mindRecord/mindRecord",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-mindRecord-mindRecord",{slot:"page"})])}},meta:{name:"pages-mindRecord-mindRecord",isNVue:!1,maxWidth:0,pagePath:"pages/mindRecord/mindRecord",windowTop:0}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,o("c8ba"))},"0e7f":function(e,n,o){"use strict";var t;o.d(n,"b",(function(){return i})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return t}));var i=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},4746:function(e,n,o){"use strict";(function(e){o("d3b7"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=function(n){return new Promise((function(o,t){e.callFunction({name:"videos",data:n}).then((function(e){200===e.result.code?o(e.result):t(e.result)})).catch((function(e){return t(e)}))}))},i=function(n){return new Promise((function(o,t){e.callFunction({name:"getMindRecord",data:n}).then((function(e){200===e.result.code?o(e.result):t(e.result)})).catch((function(e){return t(e)}))}))},r=function(n){return new Promise((function(o,t){e.callFunction({name:"addMindRecord",data:n}).then((function(e){200===e.result.code?o(e.result):t(e.result)})).catch((function(e){return t(e)}))}))},a={get_videos:t,get_mindRecord:i,add_mindRecord:r};n.default=a}).call(this,o("a9ff")["default"])},6280:function(e,n,o){"use strict";var t=o("a81e"),i=o.n(t);i.a},7191:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=t},"7eac":function(e,n,o){"use strict";o.r(n);var t=o("0e7f"),i=o("8a8b");for(var r in i)"default"!==r&&function(e){o.d(n,e,(function(){return i[e]}))}(r);o("6280");var a,u=o("f0c5"),c=Object(u["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],a);n["default"]=c.exports},8718:function(e,n,o){var t=o("24fb");n=t(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.loading{img{-webkit-transform:scale(.8);transform:scale(.8)}}.dfr{display:flex;flex-direction:row;justify-content:center}.dfc{display:flex;flex-direction:column;justify-content:center}.content{max-width:750px;margin:0 auto;height:100%}uni-video{width:100%;height:100%}uni-page-body,\nuni-page-refresh{height:100%}.uni-input-input{color:#66655a!important}",""]),e.exports=n},"8a8b":function(e,n,o){"use strict";o.r(n);var t=o("7191"),i=o.n(t);for(var r in t)"default"!==r&&function(e){o.d(n,e,(function(){return t[e]}))}(r);n["default"]=i.a},"9e23":function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={appid:"__UNI__15DE7D7"};n.default=t},a81e:function(e,n,o){var t=o("8718");"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=o("4f06").default;i("5d64bfde",t,!0,{sourceMap:!1,shadowMode:!1})},b3da:function(e,n,o){"use strict";var t=o("4ea4"),i=t(o("5530"));o("e260"),o("e6cf"),o("cca6"),o("a79d"),o("0085"),o("1c31");var r=t(o("7eac")),a=t(o("e143")),u=t(o("4746"));a.default.prototype.$api=u.default,a.default.config.productionTip=!1,r.default.mpType="app";var c=new a.default((0,i.default)({},r.default));c.$mount()}});