(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"03cd":function(t,e,n){var a=n("b8a6");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("ffaf419a",a,!0,{sourceMap:!1,shadowMode:!1})},"0ad6":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[t.is?n("v-uni-view",{staticClass:"else"},[n("v-uni-view",{staticClass:"elseBox"},[n("p",[t._v("憨憨还没想好首页怎么弄好看QAQ~")]),n("v-uni-view",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPage.apply(void 0,arguments)}}},[t._v("点击先去看七夕视频叭~")])],1)],1):n("v-uni-view",{staticClass:"is "},[n("v-uni-view",{staticClass:"bbBox",attrs:{animation:t.animationData}},[n("v-uni-image",{attrs:{src:"https://vkceyugu.cdn.bspapp.com/VKCEYUGU-60004943-3b54-43db-9991-7dde54d9e222/ce7bab27-51dd-48a0-9eee-2001ee88e302.jpg"}})],1),n("v-uni-view",{staticClass:"why"},[n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-form-item uni-column dfc",attrs:{animation:t.animationData2}},[n("v-uni-view",{staticClass:"title"},[t._v("你是我宝宝吗？")]),n("v-uni-input",{staticClass:"uni-input",attrs:{"confirm-type":"yes",focus:!0,placeholder:"请输入指令"},model:{value:t.inputV,callback:function(e){t.inputV=e},expression:"inputV"}}),""!==t.inputV?n("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.yesF.apply(void 0,arguments)}}},[t._v("是本仙女")]):t._e()],1)],1)],1)],1)],1)},r=[]},"0ccb":function(t,e,n){var a=n("50c4"),i=n("1148"),r=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var c,u,l=String(r(e)),f=l.length,d=void 0===s?" ":String(s),p=a(n);return p<=f||""==d?l:(c=p-f,u=i.call(d,o(c/d.length)),u.length>c&&(u=u.slice(0,c)),t?l+u:u+l)}};t.exports={start:s(!1),end:s(!0)}},1148:function(t,e,n){"use strict";var a=n("a691"),i=n("1d80");t.exports="".repeat||function(t){var e=String(i(this)),n="",r=a(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n}},"4d90":function(t,e,n){"use strict";var a=n("23e7"),i=n("0ccb").start,r=n("9a0c");a({target:"String",proto:!0,forced:r},{padStart:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"55a3":function(t,e,n){"use strict";function a(t,e){if(0===arguments.length||!t)return null;var n,a=e||"{y}-{m}-{d} {h}:{i}:{s}";"object"===typeof t?n=t:("string"===typeof t&&(t=/^[0-9]+$/.test(t)?parseInt(t):t.replace(new RegExp(/-/gm),"/")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),n=new Date(t));var i={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},r=a.replace(/{([ymdhisa])+}/g,(function(t,e){var n=i[e];return"a"===e?["日","一","二","三","四","五","六"][n]:n.toString().padStart(2,"0")}));return r}function i(t,e){t=10===(""+t).length?1e3*parseInt(t):+t;var n=new Date(t),i=Date.now(),r=(i-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":e?a(t,e):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function r(t){t=null==t?window.location.href:t;var e=t.substring(t.lastIndexOf("?")+1),n={},a=/([^?&=]+)=([^?&=]*)/g;return e.replace(a,(function(t,e,a){var i=decodeURIComponent(e),r=decodeURIComponent(a);return r=String(r),n[i]=r,t})),n}function o(t){for(var e=t.length,n=t.length-1;n>=0;n--){var a=t.charCodeAt(n);a>127&&a<=2047?e++:a>2047&&a<=65535&&(e+=2),a>=56320&&a<=57343&&n--}return e}function s(t){for(var e=[],n=0;n<t.length;n++)t[n]&&e.push(t[n]);return e}function c(t){return t?s(Object.keys(t).map((function(e){return void 0===t[e]?"":encodeURIComponent(e)+"="+encodeURIComponent(t[e])}))).join("&"):""}function u(t){var e=decodeURIComponent(t.split("?")[1]).replace(/\+/g," ");if(!e)return{};var n={},a=e.split("&");return a.forEach((function(t){var e=t.indexOf("=");if(-1!==e){var a=t.substring(0,e),i=t.substring(e+1,t.length);n[a]=i}})),n}function l(t){var e=document.createElement("div");return e.innerHTML=t,e.textContent||e.innerText}function f(t,e){return"object"!==typeof t&&(t={}),Array.isArray(e)?e.slice():(Object.keys(e).forEach((function(n){var a=e[n];t[n]="object"===typeof a?f(t[n],a):a})),t)}function d(t,e){if(t&&e){var n=t.className,a=n.indexOf(e);-1===a?n+=""+e:n=n.substr(0,a)+n.substr(a+e.length),t.className=n}}function p(t){return"start"===t?(new Date).getTime()-7776e6:new Date((new Date).toDateString())}function g(t,e,n){var a,i,r,o,s,c=function c(){var u=+new Date-o;u<e&&u>0?a=setTimeout(c,e-u):(a=null,n||(s=t.apply(r,i),a||(r=i=null)))};return function(){for(var i=arguments.length,u=new Array(i),l=0;l<i;l++)u[l]=arguments[l];r=this,o=+new Date;var f=n&&!a;return a||(a=setTimeout(c,e)),f&&(s=t.apply(r,u),r=u=null),s}}function v(t){if(!t&&"object"!==typeof t)throw new Error("error arguments","deepClone");var e=t.constructor===Array?[]:{};return Object.keys(t).forEach((function(n){t[n]&&"object"===typeof t[n]?e[n]=v(t[n]):e[n]=t[n]})),e}function m(t){return Array.from(new Set(t))}function h(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function b(t,e){return!!t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))}function x(t,e){b(t,e)||(t.className+=" "+e)}function w(t,e){if(b(t,e)){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ")}}function y(t){if(null==t)return"";var e="YYYY-mm-dd HH:MM:SS";t=new Date(t);var n={"Y+":t.getFullYear().toString(),"m+":(t.getMonth()+1).toString(),"d+":t.getDate().toString(),"H+":t.getHours().toString(),"M+":t.getMinutes().toString(),"S+":t.getSeconds().toString()};return Object.keys(n).forEach((function(t){var a=new RegExp("(".concat(t,")")).exec(e);a&&(e=e.replace(a[1],1===a[1].length?n[t]:n[t].padStart(a[1].length,"0")))})),e}function S(t){return t?isNaN(t)?void alert("金额中含有不能识别的字符"):(t="string"==typeof t?parseFloat(t):t,t=t.toFixed(2),console.log(t),t=parseFloat(t),t=t.toLocaleString(),-1===t.indexOf(".")?t+=".00元":console.log(t.split(".")[1].length),t):null}function C(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:30,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"/",i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie=t+"="+e+";expires="+i.toGMTString()+";path="+a+";"}function k(t){for(var e=t+"=",n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a].trim();if(0==i.indexOf(e))return i.substring(e.length,i.length)}}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",n=new Date;n.setTime(n.getTime()-1e3);var a=k(t);null!=a&&(document.cookie=t+"="+a+";expires="+n.toGMTString()+";path="+e+";")}n("4160"),n("a630"),n("c975"),n("baa5"),n("d81d"),n("fb6a"),n("b64b"),n("d3b7"),n("acd8"),n("e25e"),n("4d63"),n("ac1f"),n("25f0"),n("6062"),n("3ca3"),n("466d"),n("4d90"),n("5319"),n("1276"),n("498a"),n("159b"),n("ddb0"),Object.defineProperty(e,"__esModule",{value:!0}),e.parseTime=a,e.formatTime=i,e.getQueryObject=r,e.byteLength=o,e.cleanArray=s,e.param=c,e.param2Obj=u,e.html2Text=l,e.objectMerge=f,e.toggleClass=d,e.getTime=p,e.debounce=g,e.deepClone=v,e.uniqueArr=m,e.createUniqueString=h,e.hasClass=b,e.addClass=x,e.removeClass=w,e.dateChangeFormat=y,e.toMoney=S,e.setCookie=C,e.getCookie=k,e.delCookie=D},6062:function(t,e,n){"use strict";var a=n("6d61"),i=n("6566");t.exports=a("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},"89ec":function(t,e,n){"use strict";var a=n("03cd"),i=n.n(a);i.a},"8ac3":function(t,e,n){"use strict";n.r(e);var a=n("e4e8"),i=n.n(a);for(var r in a)"default"!==r&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"9a0c":function(t,e,n){var a=n("342f");t.exports=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(a)},b8a6:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".content .is[data-v-13ca6ea2]{height:100%}.content .is .bbBox[data-v-13ca6ea2]{width:150px;height:190px;background-color:#fff;-webkit-transform:scale(0) rotate(-25deg);transform:scale(0) rotate(-25deg);margin:20% auto;box-shadow:2px 2px 2px 2px silver;box-shadow:5px;position:relative}.content .is .bbBox uni-image[data-v-13ca6ea2]{width:140px;height:140px;display:block;position:absolute;top:20px;left:5px}.content .is .why .uni-common-mt .title[data-v-13ca6ea2]{text-align:center;-webkit-transform:translateX(-100px);transform:translateX(-100px)}.content .is .why .uni-common-mt .uni-input[data-v-13ca6ea2]{-webkit-transform:translateX(-100px);transform:translateX(-100px);text-align:center;margin:5px 0}.content .is .why .uni-common-mt uni-button[data-v-13ca6ea2]{-webkit-transform:translateX(-100px);transform:translateX(-100px)}.elseBox[data-v-13ca6ea2]{margin:20% auto;text-align:center}",""]),t.exports=e},e4e8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n("55a3"),i={data:function(){return{inputV:"",is:!1,animationData:{},animationData2:{}}},onShow:function(){this.animationInit(),this.is=(0,a.getCookie)("is")},methods:{goPage:function(){uni.navigateTo({url:"../videos/videos"})},animationInit:function(){var t=uni.createAnimation({duration:1e3,timingFunction:"ease"});t.scale(1).rotate(0).step(),this.animationData=t.export();var e=uni.createAnimation({duration:1e3,timingFunction:"ease"});e.translateX(100).step(),this.animationData2=e.export()},yesF:function(){"hxb爱老虎油"==this.inputV?(uni.showToast({title:"欢迎宝宝！",image:"https://hxb815.oss-cn-hangzhou.aliyuncs.com/img/%E6%AD%A3%E7%A1%AE.png",duration:850}),(0,a.setCookie)("is",!0,1,""),this.is=!this.is):uni.showToast({title:"你不是我宝宝！",image:"https://hxb815.oss-cn-hangzhou.aliyuncs.com/img/%E9%94%99%E8%AF%AF.png",duration:850}),this.inputV=""}}};e.default=i},eb66:function(t,e,n){"use strict";n.r(e);var a=n("0ad6"),i=n("8ac3");for(var r in i)"default"!==r&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("89ec");var o,s=n("f0c5"),c=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"13ca6ea2",null,!1,a["a"],o);e["default"]=c.exports}}]);