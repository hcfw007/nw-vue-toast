!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.toastPlugin=e():t.toastPlugin=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=4)}([function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(5).default)("4aa376af",o,!1,{})},function(t,e,n){"use strict";var o=n(0);n.n(o).a},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,".toast-body[data-v-3ebcf304] {\n  margin: auto;\n  border-radius: 15px;\n  font-size: 14px;\n  color: #fff;\n  background-color: #c0c0c0;\n  padding: 10px 20px;\n  position: absolute;\n  width: 20%;\n  text-align: center;\n  z-index: 999;\n}\n.toast-body.fade-in[data-v-3ebcf304] {\n  animation: fade-in-data-v-3ebcf304 1s;\n}\n.toast-body.fade-out[data-v-3ebcf304] {\n  animation: fade-out-data-v-3ebcf304 1s;\n}\n.toast-body.fly-in-left[data-v-3ebcf304] {\n  animation: fly-in-left-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-left[data-v-3ebcf304] {\n  animation: fly-out-left-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-right[data-v-3ebcf304] {\n  animation: fly-in-right-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-right[data-v-3ebcf304] {\n  animation: fly-out-right-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-top[data-v-3ebcf304] {\n  animation: fly-in-top-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-top[data-v-3ebcf304] {\n  animation: fly-out-top-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-bottom[data-v-3ebcf304] {\n  animation: fly-in-bottom-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-bottom[data-v-3ebcf304] {\n  animation: fly-out-bottom-data-v-3ebcf304 2s;\n}\n@-moz-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-webkit-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-o-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-moz-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-webkit-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-o-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-moz-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-webkit-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-o-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-moz-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-webkit-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-o-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-moz-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-webkit-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-o-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-moz-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-webkit-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-o-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-moz-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-webkit-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-o-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-moz-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-webkit-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-o-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-moz-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-webkit-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-o-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-moz-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@-o-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var a=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([a]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(o[i]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&o[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e);var o=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toast-body",class:this.classObj,style:this.styleObj,domProps:{innerHTML:this._s(this.content)}})};o._withStripped=!0;var a={data:()=>({timeoutCounter:null}),props:{position:{type:String,default:"bottom center"},content:{type:String,default:"toast"},time:{type:Number,default:3e3},showAnimation:{type:String,default:"fade-in"},removeAnimation:{type:String,default:"fade-out"},customCss:{type:Object,default:()=>({})},afterRemoved:{type:Function,default:void 0},displayMethod:{type:String,default:"default"},customClass:{type:String,default:""}},mounted(){for(let t in this.customCss)this.$el.style[t]=this.customCss[t];if(!this.customCss.top&&!this.customCss.bottom&&"default"==this.displayMethod){let t=".toast-body."+this.position.split(" ").join("."),e=document.querySelectorAll(t);for(let t=0;t<e.length;t++)e[t]!=this.$el&&parseInt(e[t].style.top)==parseInt(this.$el.style.top)&&(this.$el.style.top=parseInt(this.$el.style.top)+50+"px"),e[t]!=this.$el&&parseInt(e[t].style.bottom)==parseInt(this.$el.style.bottom)&&(this.$el.style.bottom=parseInt(this.$el.style.bottom)+50+"px")}this.show()},destroyed(){if(this.afterRemoved)try{this.afterRemoved()}catch(t){console.log(t)}},methods:{show(){if("none"!=this.showAnimation){this.$el.classList.add(this.showAnimation);let t=e=>{"animationend"==e.type&&(this.$el.removeEventListener("animationend",t,!1),this.$el.classList.remove(this.showAnimation),this.timeoutCounter=setTimeout(()=>{this.remove()},this.time))};this.$el.addEventListener("animationend",t,!1)}else this.$el.style.opacity=1,this.timeoutCounter=setTimeout(()=>{this.remove()},this.time)},remove(){let t=document.getElementById("nw-toast-container");"none"!=this.removeAnimation?(this.$el.classList.add(this.removeAnimation),this.$el.addEventListener("animationend",e=>{"animationend"==e.type&&(this.$destroy(this),t.removeChild(this.$el))})):(this.$destroy(this),t.removeChild(this.$el))},changeContent(t){this.content=t},cancelTimeout(){this.timeoutCounter&&clearTimeout(this.timeoutCounter)},setNewTime(t){this.cancelTimeout(),this.time=t,this.timeoutCounter=setTimeout(()=>{this.remove()},this.time)},shake(t=40){let e=parseInt(this.$el.style.top),n=parseInt(this.$el.style.left),o=parseInt(this.$el.style.bottom),a=i=>{if(i<=0)return NaN!=e?this.$el.style.top=e+"px":this.$el.style.bottom=o+"px",void(this.$el.style.left=n+"px");let s=Math.floor(21*Math.random())-10,r=Math.floor(11*Math.random())-5;NaN!=e?this.$el.style.top=e+r+"px":this.$el.style.bottom=o+r+"px",this.$el.style.left=n+s+"px",i--,setTimeout(()=>{a(i)},1e3/t)};a(t)}},computed:{classObj(){let t={top:this.position.indexOf("top")>-1,bottom:this.position.indexOf("bottom")>-1,center:this.position.indexOf("center")>-1,left:this.position.indexOf("left")>-1,right:this.position.indexOf("right")>-1,middle:this.position.indexOf("middle")>-1},e=this.customClass.split(" ");for(let n in e)t[e[n]]=!0;return t},styleObj(){let t={};return this.position.indexOf("top")>-1&&(t.top="100px"),this.position.indexOf("bottom")>-1&&(t.bottom="100px"),this.position.indexOf("middle")>-1&&(t.top="400px"),this.position.indexOf("left")>-1&&(t.left="0",t.right="60%"),this.position.indexOf("right")>-1&&(t.left="60%",t.right="0"),this.position.indexOf("center")>-1&&(t.left="0",t.right="0"),t}},name:"Toast"};n(1);var i=function(t,e,n,o,a,i,s,r){var f,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=f):a&&(f=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),f)if(l.functional){l._injectStyles=f;var d=l.render;l.render=function(t,e){return f.call(e),d(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,f):[f]}return{exports:t,options:l}}(a,o,[],!1,null,"3ebcf304",null);i.options.__file="src/Toast.vue";var s=i.exports;const r={position:"bottom center",time:3e3,showAnimation:"fade-in",removeAnimation:"fade-out"},f={install(t,e){let n=document.getElementById("nw-toast-container");n||((n=document.createElement("div")).id="nw-toast-container"),n.style.position="absolute",n.style.backgroundColor="transparent",n.style.alignItems="center",n.style.justifyContent="center",n.style.zIndex="999",n.style.pointerEvents="none",n.style.top=0,n.style.bottom=0,n.style.left=0,n.style.right=0,n.style.overflow="hidden",document.body.appendChild(n),this.container=n,this.config=r;for(let t in e)this.config[t]=e[t];t.prototype.$toast=(e,n,o)=>{n=n||{};for(let t in this.config)n[t]||(n[t]=this.config[t]);n.content=e;let a=document.createElement("div");return this.container.appendChild(a),new(t.extend(s))({el:a,propsData:n})}}};e.default=f},function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},a=0;a<e.length;a++){var i=e[a],s=i[0],r={id:t+":"+a,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(r):n.push(o[s]={id:s,parts:[r]})}return n}n.r(e),n.d(e,"default",function(){return m});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},s=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,f=0,l=!1,d=function(){},u=null,c="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(t,e,n,a){l=n,u=a||{};var s=o(t,e);return y(s),function(e){for(var n=[],a=0;a<s.length;a++){var r=s[a];(f=i[r.id]).refs--,n.push(f)}e?y(s=o(t,e)):s=[];for(a=0;a<n.length;a++){var f;if(0===(f=n[a]).refs){for(var l=0;l<f.parts.length;l++)f.parts[l]();delete i[f.id]}}}}function y(t){for(var e=0;e<t.length;e++){var n=t[e],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(b(n.parts[a]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(b(n.parts[a]));i[n.id]={id:n.id,refs:1,parts:s}}}}function h(){var t=document.createElement("style");return t.type="text/css",s.appendChild(t),t}function b(t){var e,n,o=document.querySelector("style["+c+'~="'+t.id+'"]');if(o){if(l)return d;o.parentNode.removeChild(o)}if(p){var a=f++;o=r||(r=h()),e=k.bind(null,o,a,!1),n=k.bind(null,o,a,!0)}else o=h(),e=function(t,e){var n=e.css,o=e.media,a=e.sourceMap;o&&t.setAttribute("media",o);u.ssrId&&t.setAttribute(c,e.id);a&&(n+="\n/*# sourceURL="+a.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var v,g=(v=[],function(t,e){return v[t]=e,v.filter(Boolean).join("\n")});function k(t,e,n,o){var a=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=g(e,a);else{var i=document.createTextNode(a),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}}])});