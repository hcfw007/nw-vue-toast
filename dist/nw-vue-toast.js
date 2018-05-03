!function(t){var n={};function e(o){if(n[o])return n[o].exports;var a=n[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e.w={},e(e.s=1)}([function(t,n,e){"use strict";function o(t,n,e,o){if(o||"undefined"==typeof __VUE_SSR_CONTEXT__||(o=__VUE_SSR_CONTEXT__),o){o.hasOwnProperty("styles")||(Object.defineProperty(o,"styles",{enumerable:!0,get:function(){return a(o._styles)}}),o._renderStyles=a);var i=o._styles||(o._styles={});n=function(t,n){for(var e=[],o={},a=0;a<n.length;a++){var i=n[a],s=i[0],f={id:t+":"+a,css:i[1],media:i[2],sourceMap:i[3]};o[s]?o[s].parts.push(f):e.push(o[s]={id:s,parts:[f]})}return e}(t,n),e?function(t,n){for(var e=0;e<n.length;e++)for(var o=n[e].parts,a=0;a<o.length;a++){var i=o[a],s=i.media||"default",f=t[s];f?f.ids.indexOf(i.id)<0&&(f.ids.push(i.id),f.css+="\n"+i.css):t[s]={ids:[i.id],css:i.css,media:i.media}}}(i,n):function(t,n){for(var e=0;e<n.length;e++)for(var o=n[e].parts,a=0;a<o.length;a++){var i=o[a];t[i.id]={ids:[i.id],css:i.css,media:i.media}}}(i,n)}}function a(t){var n="";for(var e in t){var o=t[e];n+='<style data-vue-ssr-id="'+o.ids.join(" ")+'"'+(o.media?' media="'+o.media+'"':"")+">"+o.css+"</style>"}return n}e.r(n),e.d(n,"default",function(){return o})},function(t,n,e){"use strict";e.r(n);var o={data:()=>({timeoutCounter:null}),props:{position:{type:String,default:"bottom center"},content:{type:String,default:"toast"},time:{type:Number,default:3e3},showAnimation:{type:String,default:"fade-in"},removeAnimation:{type:String,default:"fade-out"},customCss:{type:Object,default:()=>({})},afterRemoved:{type:Function,default:void 0},displayMethod:{type:String,default:"default"}},mounted(){for(let t in this.customCss)this.$el.style[t]=this.customCss[t];if(!this.customCss.top&&!this.customCss.bottom&&"default"==this.displayMethod){let t=".toast-body."+this.position.split(" ").join("."),n=document.querySelectorAll(t);for(let t=0;t<n.length;t++)n[t]!=this.$el&&parseInt(n[t].style.top)==parseInt(this.$el.style.top)&&(this.$el.style.top=parseInt(this.$el.style.top)+50+"px"),n[t]!=this.$el&&parseInt(n[t].style.bottom)==parseInt(this.$el.style.bottom)&&(this.$el.style.bottom=parseInt(this.$el.style.bottom)+50+"px")}this.show()},destroyed(){if(this.afterRemoved)try{this.afterRemoved()}catch(t){console.log(t)}},methods:{show(){if("none"!=this.showAnimation){this.$el.classList.add(this.showAnimation);let t=n=>{"animationend"==n.type&&(this.$el.removeEventListener("animationend",t,!1),this.$el.classList.remove(this.showAnimation),this.timeoutCounter=setTimeout(()=>{this.remove()},this.time))};this.$el.addEventListener("animationend",t,!1)}else this.$el.style.opacity=1,this.timeoutCounter=setTimeout(()=>{this.remove()},this.time)},remove(){let t=document.getElementById("nw-toast-container");"none"!=this.removeAnimation?(this.$el.classList.add(this.removeAnimation),this.$el.addEventListener("animationend",n=>{"animationend"==n.type&&(this.$destroy(this),t.removeChild(this.$el))})):(this.$destroy(this),t.removeChild(this.$el))},changeContent(t){this.content=t},cancelTimeout(){this.timeoutCounter&&clearTimeout(this.timeoutCounter)},setNewTime(t){this.cancelTimeout(),this.time=t,this.timeoutCounter=setTimeout(()=>{this.remove()},this.time)}},computed:{classObj(){return{top:this.position.indexOf("top")>-1,bottom:this.position.indexOf("bottom")>-1,center:this.position.indexOf("center")>-1,left:this.position.indexOf("left")>-1,right:this.position.indexOf("right")>-1,middle:this.position.indexOf("middle")>-1}},styleObj(){let t={};return this.position.indexOf("top")>-1&&(t.top="100px"),this.position.indexOf("bottom")>-1&&(t.bottom="100px"),this.position.indexOf("middle")>-1&&(t.top="400px"),this.position.indexOf("left")>-1&&(t.left="0",t.right="60%"),this.position.indexOf("right")>-1&&(t.left="60%",t.right="0"),this.position.indexOf("center")>-1&&(t.left="0",t.right="0"),t}},name:"Toast"},a=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"toast-body",class:this.classObj,style:this.styleObj,domProps:{innerHTML:this._s(this.content)}},[])};a._withStripped=!0;var i=function(t,n,e,o,a,i,s,f){var r=typeof(t=t||{}).default;"object"!==r&&"function"!==r||(t=t.default);var d,l="function"==typeof t?t.options:t;if(n&&(l.render=n,l.staticRenderFns=e,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId=i),s?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=d):a&&(d=f?function(){a.call(this,this.$root.$options.shadowRoot)}:a),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,n){return d.call(n),c(t,n)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}(o,a,[],!1,function(t){var n;(n=e(4)).__inject__&&n.__inject__(t)},"data-v-3ebcf304","774139a0");i.options.__file="src/Toast.vue";var s=i.exports;const f={position:"bottom center",time:3e3,showAnimation:"fade-in",removeAnimation:"fade-out"},r={install(t,n){let e=document.getElementById("nw-toast-container");e||((e=document.createElement("div")).id="nw-toast-container"),e.style.position="absolute",e.style.backgroundColor="transparent",e.style.alignItems="center",e.style.justifyContent="center",e.style.zIndex="-1",e.style.top=0,e.style.bottom=0,e.style.left=0,e.style.right=0,e.style.overflow="hidden",document.body.appendChild(e),this.container=e,this.config=f;for(let t in n)this.config[property]=n[property];t.prototype.$toast=((n,e,o)=>{e=e||{};for(let t in this.config)e[t]||(e[t]=this.config[t]);e.content=n;let a=document.createElement("div");this.container.appendChild(a);new(t.extend(s))({el:a,propsData:e})})}};n.default=r},function(t,n){t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var a=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(i).concat([a]).join("\n")}var s;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(o[i]=!0)}for(a=0;a<t.length;a++){var s=t[a];"number"==typeof s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){(t.exports=e(2)(!1)).push([t.i,"\n.toast-body[data-v-3ebcf304] {\n  margin: auto;\n  border-radius: 15px;\n  font-size: 14px;\n  color: #fff;\n  background-color: #c0c0c0;\n  padding: 10px 20px;\n  position: absolute;\n  width: 20%;\n  text-align: center;\n  z-index: 999;\n}\n.toast-body.fade-in[data-v-3ebcf304] {\n  animation: fade-in-data-v-3ebcf304 1s;\n}\n.toast-body.fade-out[data-v-3ebcf304] {\n  animation: fade-out-data-v-3ebcf304 1s;\n}\n.toast-body.fly-in-left[data-v-3ebcf304] {\n  animation: fly-in-left-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-left[data-v-3ebcf304] {\n  animation: fly-out-left-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-right[data-v-3ebcf304] {\n  animation: fly-in-right-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-right[data-v-3ebcf304] {\n  animation: fly-out-right-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-top[data-v-3ebcf304] {\n  animation: fly-in-top-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-top[data-v-3ebcf304] {\n  animation: fly-out-top-data-v-3ebcf304 2s;\n}\n.toast-body.fly-in-bottom[data-v-3ebcf304] {\n  animation: fly-in-bottom-data-v-3ebcf304 2s;\n}\n.toast-body.fly-out-bottom[data-v-3ebcf304] {\n  animation: fly-out-bottom-data-v-3ebcf304 2s;\n}\n@-moz-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-webkit-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-o-keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@keyframes fly-in-left-data-v-3ebcf304 {\n0% {\n    left: -150%;\n}\n100% {\n    left: default;\n}\n}\n@-moz-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-webkit-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-o-keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@keyframes fly-out-left-data-v-3ebcf304 {\n0% {\n    left: default;\n}\n100% {\n    left: -150%;\n}\n}\n@-moz-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-webkit-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-o-keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@keyframes fly-in-right-data-v-3ebcf304 {\n0% {\n    right: -150%;\n}\n100% {\n    right: default;\n}\n}\n@-moz-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-webkit-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-o-keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@keyframes fly-out-right-data-v-3ebcf304 {\n0% {\n    right: default;\n}\n100% {\n    right: -150%;\n}\n}\n@-moz-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-webkit-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-o-keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@keyframes fly-in-top-data-v-3ebcf304 {\n0% {\n    top: -150%;\n}\n100% {\n    top: default;\n}\n}\n@-moz-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-webkit-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-o-keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@keyframes fly-out-top-data-v-3ebcf304 {\n0% {\n    top: default;\n}\n100% {\n    top: -150%;\n}\n}\n@-moz-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-webkit-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-o-keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@keyframes fly-in-bottom-data-v-3ebcf304 {\n0% {\n    bottom: -150%;\n}\n100% {\n    bottom: default;\n}\n}\n@-moz-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-webkit-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-o-keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@keyframes fly-out-bottom-data-v-3ebcf304 {\n0% {\n    bottom: default;\n}\n100% {\n    bottom: -150%;\n}\n}\n@-moz-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-webkit-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-o-keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@keyframes fade-in-data-v-3ebcf304 {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: default;\n}\n}\n@-moz-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@-o-keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n@keyframes fade-out-data-v-3ebcf304 {\n0% {\n    opacity: default;\n}\n100% {\n    opacity: 0;\n}\n}\n",""])},function(t,n,e){var o=e(3);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=e(0).default;t.exports.__inject__=function(t){a("030d06fa",o,!1,t)}}]);