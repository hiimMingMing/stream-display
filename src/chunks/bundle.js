System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/_rollupPluginModLoBabelHelpers.js",[],(function(e){"use strict";return{execute:function(){function r(e,r,i,t,n,o,u){try{var a=e[o](u),l=a.value}catch(e){return void i(e)}a.done?r(l):Promise.resolve(l).then(t,n)}function i(e,r){for(var i=0;i<r.length;i++){var t=r[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function t(r,i){return(t=e("setPrototypeOf",Object.setPrototypeOf||function(e,r){return e.__proto__=r,e}))(r,i)}e({applyDecoratedDescriptor:function(e,r,i,t,n){var o={};Object.keys(t).forEach((function(e){o[e]=t[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=i.slice().reverse().reduce((function(i,t){return t(e,r,i)||i}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},asyncToGenerator:function(e){return function(){var i=this,t=arguments;return new Promise((function(n,o){var u=e.apply(i,t);function a(e){r(u,n,o,a,l,"next",e)}function l(e){r(u,n,o,a,l,"throw",e)}a(void 0)}))}},createClass:function(e,r,t){r&&i(e.prototype,r);t&&i(e,t);return e},defineProperty:function(e,r,i){r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i;return e},inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)},initializerDefineProperty:function(e,r,i,t){if(!i)return;Object.defineProperty(e,r,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(t):void 0})},setPrototypeOf:t})}}}));

System.register("chunks:///_virtual/bind.js",["./_curry2.js","./_arity.js"],(function(t){"use strict";var n,u;return{setters:[function(t){n=t.default},function(t){u=t.default}],execute:function(){t("default",n((function(t,n){return u(t.length,(function(){return t.apply(n,arguments)}))})))}}}));

System.register("chunks:///_virtual/equals.js",["./_curry2.js","./_equals.js"],(function(t){"use strict";var u,e;return{setters:[function(t){u=t.default},function(t){e=t.default}],execute:function(){t("default",u((function(t,u){return e(t,u,[],[])})))}}}));

System.register("chunks:///_virtual/findIndex.js",["./_curry2.js","./_dispatchable.js","./_xfindIndex.js"],(function(t){"use strict";var n,e,u;return{setters:[function(t){n=t.default},function(t){e=t.default},function(t){u=t.default}],execute:function(){t("default",n(e([],u,(function(t,n){for(var e=0,u=n.length;e<u;){if(t(n[e]))return e;e+=1}return-1}))))}}}));

System.register("chunks:///_virtual/keys.js",["./_curry1.js","./_has.js","./_isArguments.js"],(function(t){"use strict";var e,r,n;return{setters:[function(t){e=t.default},function(t){r=t.default},function(t){n=t.default}],execute:function(){var u=!{toString:null}.propertyIsEnumerable("toString"),o=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],f=function(){return arguments.propertyIsEnumerable("length")}(),i=function(t,e){for(var r=0;r<t.length;){if(t[r]===e)return!0;r+=1}return!1};t("default","function"!=typeof Object.keys||f?e((function(t){if(Object(t)!==t)return[];var e,s,c=[],l=f&&n(t);for(e in t)!r(e,t)||l&&"length"===e||(c[c.length]=e);if(u)for(s=o.length-1;s>=0;)r(e=o[s],t)&&!i(c,e)&&(c[c.length]=e),s-=1;return c})):e((function(t){return Object(t)!==t?[]:Object.keys(t)})))}}}));

System.register("chunks:///_virtual/pipe.js",["./_arity.js","./reduce.js","./_pipe.js","./tail.js"],(function(t){"use strict";var e,n,u,r;return{setters:[function(t){e=t.default},function(t){n=t.default},function(t){u=t.default},function(t){r=t.default}],execute:function(){t("default",(function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return e(arguments[0].length,n(u,arguments[0],r(arguments)))}))}}}));

System.register("chunks:///_virtual/reduce.js",["./_curry3.js","./_reduce.js"],(function(e){"use strict";var t,u;return{setters:[function(e){t=e.default},function(e){u=e.default}],execute:function(){e("default",t(u))}}}));

System.register("chunks:///_virtual/slice.js",["./_curry3.js","./_checkForMethod.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.default},function(t){r=t.default}],execute:function(){t("default",e(r("slice",(function(t,e,r){return Array.prototype.slice.call(r,t,e)}))))}}}));

System.register("chunks:///_virtual/tail.js",["./_curry1.js","./_checkForMethod.js","./slice.js"],(function(t){"use strict";var e,u,c;return{setters:[function(t){e=t.default},function(t){u=t.default},function(t){c=t.default}],execute:function(){t("default",e(u("tail",c(1,1/0))))}}}));

System.register("chunks:///_virtual/type.js",["./_curry1.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.default}],execute:function(){t("default",e((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)})))}}}));

System.register("chunks:///_virtual/values.js",["./_curry1.js","./keys.js"],(function(t){"use strict";var e,u;return{setters:[function(t){e=t.default},function(t){u=t.default}],execute:function(){t("default",e((function(t){for(var e=u(t),n=e.length,r=[],s=0;s<n;)r[s]=t[e[s]],s+=1;return r})))}}}));

System.register("chunks:///_virtual/_curry1.js",["./_isPlaceholder.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.default}],execute:function(){t("default",(function(t){return function n(r){return 0===arguments.length||e(r)?n:t.apply(this,arguments)}}))}}}));

System.register("chunks:///_virtual/_curry2.js",["./_isPlaceholder.js","./_curry1.js"],(function(t){"use strict";var n,r;return{setters:[function(t){n=t.default},function(t){r=t.default}],execute:function(){t("default",(function(t){return function u(e,c){switch(arguments.length){case 0:return u;case 1:return n(e)?u:r((function(n){return t(e,n)}));default:return n(e)&&n(c)?u:n(e)?r((function(n){return t(n,c)})):n(c)?r((function(n){return t(e,n)})):t(e,c)}}}))}}}));

System.register("chunks:///_virtual/_dispatchable.js",["./_isArray.js","./_isTransformer.js"],(function(t){"use strict";var r,e;return{setters:[function(t){r=t.default},function(t){e=t.default}],execute:function(){t("default",(function(t,n,u){return function(){if(0===arguments.length)return u();var i=arguments[arguments.length-1];if(!r(i)){for(var a=0;a<t.length;){if("function"==typeof i[t[a]])return i[t[a]].apply(i,Array.prototype.slice.call(arguments,0,-1));a+=1}if(e(i)){var l=n.apply(null,Array.prototype.slice.call(arguments,0,-1));return l(i)}}return u.apply(this,arguments)}}))}}}));

System.register("chunks:///_virtual/_curry3.js",["./_isPlaceholder.js","./_curry1.js","./_curry2.js"],(function(n){"use strict";var t,r,u;return{setters:[function(n){t=n.default},function(n){r=n.default},function(n){u=n.default}],execute:function(){n("default",(function(n){return function e(c,f,i){switch(arguments.length){case 0:return e;case 1:return t(c)?e:u((function(t,r){return n(c,t,r)}));case 2:return t(c)&&t(f)?e:t(c)?u((function(t,r){return n(t,f,r)})):t(f)?u((function(t,r){return n(c,t,r)})):r((function(t){return n(c,f,t)}));default:return t(c)&&t(f)&&t(i)?e:t(c)&&t(f)?u((function(t,r){return n(t,r,i)})):t(c)&&t(i)?u((function(t,r){return n(t,f,r)})):t(f)&&t(i)?u((function(t,r){return n(c,t,r)})):t(c)?r((function(t){return n(t,f,i)})):t(f)?r((function(t){return n(c,t,i)})):t(i)?r((function(t){return n(c,f,t)})):n(c,f,i)}}}))}}}));

System.register("chunks:///_virtual/_reduce.js",["./_isArrayLike.js","./_xwrap.js","./bind.js"],(function(e){"use strict";var r,t,n;return{setters:[function(e){r=e.default},function(e){t=e.default},function(e){n=e.default}],execute:function(){function u(e,r,t){for(var n=t.next();!n.done;){if((r=e["@@transducer/step"](r,n.value))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}n=t.next()}return e["@@transducer/result"](r)}function a(e,r,t,u){return e["@@transducer/result"](t[u](n(e["@@transducer/step"],e),r))}e("default",(function(e,n,f){"function"==typeof e&&(e=t(e));if(r(f))return function(e,r,t){var n=0,u=t.length;for(;n<u;){if((r=e["@@transducer/step"](r,t[n]))&&r["@@transducer/reduced"]){r=r["@@transducer/value"];break}n+=1}return e["@@transducer/result"](r)}(e,n,f);if("function"==typeof f["fantasy-land/reduce"])return a(e,n,f,"fantasy-land/reduce");if(null!=f[c])return u(e,n,f[c]());if("function"==typeof f.next)return u(e,n,f);if("function"==typeof f.reduce)return a(e,n,f,"reduce");throw new TypeError("reduce: list must be array or iterable")}));var c="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator"}}}));

System.register("chunks:///_virtual/_isArray.js",[],(function(t){"use strict";return{execute:function(){t("default",Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)})}}}));

System.register("chunks:///_virtual/_has.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t,e){return Object.prototype.hasOwnProperty.call(e,t)}))}}}));

System.register("chunks:///_virtual/_arity.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,i){return n.apply(this,arguments)};case 6:return function(t,r,e,u,i,a){return n.apply(this,arguments)};case 7:return function(t,r,e,u,i,a,s){return n.apply(this,arguments)};case 8:return function(t,r,e,u,i,a,s,c){return n.apply(this,arguments)};case 9:return function(t,r,e,u,i,a,s,c,p){return n.apply(this,arguments)};case 10:return function(t,r,e,u,i,a,s,c,p,o){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}))}}}));

System.register("chunks:///_virtual/_isString.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t){return"[object String]"===Object.prototype.toString.call(t)}))}}}));

System.register("chunks:///_virtual/_includesWith.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t,e,n){var r=0,u=n.length;for(;r<u;){if(t(e,n[r]))return!0;r+=1}return!1}))}}}));

System.register("chunks:///_virtual/_isArguments.js",["./_has.js"],(function(t){"use strict";var e;return{setters:[function(t){e=t.default}],execute:function(){var n=Object.prototype.toString;t("default",function(){return"[object Arguments]"===n.call(arguments)?function(t){return"[object Arguments]"===n.call(t)}:function(t){return e("callee",t)}}())}}}));

System.register("chunks:///_virtual/_equals.js",["./_has.js","./keys.js","./type.js","./_arrayFromIterator.js","./_includesWith.js","./_functionName.js","./_objectIs.js"],(function(e){"use strict";var a,t,n,r,s,u,c;return{setters:[function(e){a=e.default},function(e){t=e.default},function(e){n=e.default},function(e){r=e.default},function(e){s=e.default},function(e){u=e.default},function(e){c=e.default}],execute:function(){function f(e,a,t,n){var u=r(e),c=r(a);function f(e,a){return i(e,a,t.slice(),n.slice())}return!s((function(e,a){return!s(f,a,e)}),c,u)}function i(e,r,s,o){if(c(e,r))return!0;var l=n(e);if(l!==n(r))return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof r["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](r)&&"function"==typeof r["fantasy-land/equals"]&&r["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof r.equals)return"function"==typeof e.equals&&e.equals(r)&&"function"==typeof r.equals&&r.equals(e);switch(l){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===u(e.constructor))return e===r;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof r||!c(e.valueOf(),r.valueOf()))return!1;break;case"Date":if(!c(e.valueOf(),r.valueOf()))return!1;break;case"Error":return e.name===r.name&&e.message===r.message;case"RegExp":if(e.source!==r.source||e.global!==r.global||e.ignoreCase!==r.ignoreCase||e.multiline!==r.multiline||e.sticky!==r.sticky||e.unicode!==r.unicode)return!1}for(var y=s.length-1;y>=0;){if(s[y]===e)return o[y]===r;y-=1}switch(l){case"Map":return e.size===r.size&&f(e.entries(),r.entries(),s.concat([e]),o.concat([r]));case"Set":return e.size===r.size&&f(e.values(),r.values(),s.concat([e]),o.concat([r]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var d=t(e);if(d.length!==t(r).length)return!1;var g=s.concat([e]),p=o.concat([r]);for(y=d.length-1;y>=0;){var m=d[y];if(!a(m,r)||!i(r[m],e[m],g,p))return!1;y-=1}return!0}e("default",i)}}}));

System.register("chunks:///_virtual/_xfindIndex.js",["./_curry2.js","./_reduced.js","./_xfBase.js"],(function(t){"use strict";var n,e,r;return{setters:[function(t){n=t.default},function(t){e=t.default},function(t){r=t.default}],execute:function(){var u=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.found=!1}return t.prototype["@@transducer/init"]=r.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.found=!0,t=e(this.xf["@@transducer/step"](t,this.idx))),t},t}();t("default",n((function(t,n){return new u(t,n)})))}}}));

System.register("chunks:///_virtual/_checkForMethod.js",["./_isArray.js"],(function(t){"use strict";var r;return{setters:[function(t){r=t.default}],execute:function(){t("default",(function(t,e){return function(){var n=arguments.length;if(0===n)return e();var u=arguments[n-1];return r(u)||"function"!=typeof u[t]?e.apply(this,arguments):u[t].apply(u,Array.prototype.slice.call(arguments,0,n-1))}}))}}}));

System.register("chunks:///_virtual/_objectIs.js",[],(function(t){"use strict";return{execute:function(){t("default","function"==typeof Object.is?Object.is:function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e})}}}));

System.register("chunks:///_virtual/_isTransformer.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t){return null!=t&&"function"==typeof t["@@transducer/step"]}))}}}));

System.register("chunks:///_virtual/_pipe.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t,e){return function(){return e.call(this,t.apply(this,arguments))}}))}}}));

System.register("chunks:///_virtual/_reduced.js",[],(function(e){"use strict";return{execute:function(){e("default",(function(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}))}}}));

System.register("chunks:///_virtual/_xwrap.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t){return new n(t)}));var n=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}()}}}));

System.register("chunks:///_virtual/_isPlaceholder.js",[],(function(e){"use strict";return{execute:function(){e("default",(function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}))}}}));

System.register("chunks:///_virtual/_xfBase.js",[],(function(t){"use strict";return{execute:function(){t("default",{init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}})}}}));

System.register("chunks:///_virtual/_isArrayLike.js",["./_curry1.js","./_isArray.js","./_isString.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.default},function(t){n=t.default},function(t){r=t.default}],execute:function(){t("default",e((function(t){return!!n(t)||!!t&&("object"==typeof t&&(!r(t)&&(0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})))}}}));

System.register("chunks:///_virtual/_arrayFromIterator.js",[],(function(r){"use strict";return{execute:function(){r("default",(function(r){var t,e=[];for(;!(t=r.next()).done;)e.push(t.value);return e}))}}}));

System.register("chunks:///_virtual/_functionName.js",[],(function(t){"use strict";return{execute:function(){t("default",(function(t){var n=String(t).match(/^function (\w*)/);return null==n?"":n[1]}))}}}));

} }; });