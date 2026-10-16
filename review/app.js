"use strict";(()=>{var Ba=Object.defineProperty;var Fa=(t,e,n)=>e in t?Ba(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>Fa(t,typeof e!="symbol"?e+"":e,n);var Ki=()=>{};var Ji=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ha=function(t){let e=[],n=0,r=0;for(;n<t.length;){let i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4,d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ji(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ha(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){let s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;let u=i<t.length?n[t.charAt(i)]:64;++i;let h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new nr;let d=s<<2|a>>4;if(r.push(d),u!==64){let f=a<<4&240|u>>2;if(r.push(f),h!==64){let w=u<<6&192|h;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},nr=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Va=function(t){let e=Ji(t);return Xi.encodeByteArray(e,!0)},ir=function(t){return Va(t).replace(/\./g,"")},qt=function(t){try{return Xi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Wa(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var qa=()=>Wa().__FIREBASE_DEFAULTS__,ja=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$a=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&qt(t[1]);return e&&JSON.parse(e)},sr=()=>{try{return Ki()||qa()||ja()||$a()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},or=t=>sr()?.emulatorHosts?.[t],Zi=t=>{let e=or(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ar=()=>sr()?.config,cr=t=>sr()?.[`_${t}`];var Wt=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Qi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function es(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ts(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ns(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rs(){let t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function is(){try{return typeof indexedDB=="object"}catch{return!1}}function ss(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}var za="FirebaseError",X=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=za,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fe.prototype.create)}},fe=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Ga(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new X(i,a,r)}};function Ga(t,e){return t.replace(Ka,(n,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Ka=/\{\$([^}]+)}/g;function os(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function we(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let i of n){if(!r.includes(i))return!1;let s=t[i],o=e[i];if(Yi(s)&&Yi(o)){if(!we(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function Yi(t){return t!==null&&typeof t=="object"}function Je(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xe(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ze(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function as(t,e){let n=new rr(t,e);return n.subscribe.bind(n)}var rr=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ya(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=tr),i.error===void 0&&(i.error=tr),i.complete===void 0&&(i.complete=tr);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Ya(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function tr(){}var xh=4*60*60*1e3;function G(t){return t&&t._delegate?t._delegate:t}function De(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function jt(t){return(await fetch(t,{credentials:"include"})).ok}var ee=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var Le="[DEFAULT]";var ur=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new Wt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){let n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xa(e))try{this.getOrInitializeService({instanceIdentifier:Le})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Le){return this.instances.has(e)}getOptions(e=Le){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ja(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Le){return this.component?this.component.multipleInstances?e:Le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ja(t){return t===Le?void 0:t}function Xa(t){return t.instantiationMode==="EAGER"}var $t=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new ur(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var Za=[],O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));var Qa={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},ec=O.INFO,tc={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},nc=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),i=tc[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Qe=class{constructor(e){this.name=e,this._logLevel=ec,this._logHandler=nc,this._userLogHandler=null,Za.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Qa[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}};var rc=(t,e)=>e.some(n=>t instanceof n),cs,us;function ic(){return cs||(cs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function sc(){return us||(us=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var ls=new WeakMap,dr=new WeakMap,ds=new WeakMap,lr=new WeakMap,fr=new WeakMap;function oc(t){let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(oe(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ls.set(n,t)}).catch(()=>{}),fr.set(e,t),e}function ac(t){if(dr.has(t))return;let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dr.set(t,e)}var hr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ds.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hs(t){hr=t(hr)}function cc(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(zt(this),e,...n);return ds.set(r,e.sort?e.sort():[e]),oe(r)}:sc().includes(t)?function(...e){return t.apply(zt(this),e),oe(ls.get(this))}:function(...e){return oe(t.apply(zt(this),e))}}function uc(t){return typeof t=="function"?cc(t):(t instanceof IDBTransaction&&ac(t),rc(t,ic())?new Proxy(t,hr):t)}function oe(t){if(t instanceof IDBRequest)return oc(t);if(lr.has(t))return lr.get(t);let e=uc(t);return e!==t&&(lr.set(t,e),fr.set(e,t)),e}var zt=t=>fr.get(t);function ps(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,e),a=oe(o);return r&&o.addEventListener("upgradeneeded",c=>{r(oe(o.result),c.oldVersion,c.newVersion,oe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var lc=["get","getKey","getAll","getAllKeys","count"],dc=["put","add","delete","clear"],pr=new Map;function fs(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pr.get(e))return pr.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=dc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||lc.includes(n)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return pr.set(e,s),s}hs(t=>({...t,get:(e,n,r)=>fs(e,n)||t.get(e,n,r),has:(e,n)=>!!fs(e,n)||t.has(e,n)}));var gr=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hc(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function hc(t){return t.getComponent()?.type==="VERSION"}var yr="@firebase/app",ms="0.14.11";var pe=new Qe("@firebase/app"),fc="@firebase/app-compat",pc="@firebase/analytics-compat",mc="@firebase/analytics",gc="@firebase/app-check-compat",yc="@firebase/app-check",bc="@firebase/auth",wc="@firebase/auth-compat",Ec="@firebase/database",_c="@firebase/data-connect",Ic="@firebase/database-compat",vc="@firebase/functions",Tc="@firebase/functions-compat",Ac="@firebase/installations",Sc="@firebase/installations-compat",kc="@firebase/messaging",xc="@firebase/messaging-compat",Rc="@firebase/performance",Oc="@firebase/performance-compat",Cc="@firebase/remote-config",Nc="@firebase/remote-config-compat",Pc="@firebase/storage",Dc="@firebase/storage-compat",Lc="@firebase/firestore",Mc="@firebase/ai",Uc="@firebase/firestore-compat",Bc="firebase",Fc="12.12.0";var br="[DEFAULT]",Hc={[yr]:"fire-core",[fc]:"fire-core-compat",[mc]:"fire-analytics",[pc]:"fire-analytics-compat",[yc]:"fire-app-check",[gc]:"fire-app-check-compat",[bc]:"fire-auth",[wc]:"fire-auth-compat",[Ec]:"fire-rtdb",[_c]:"fire-data-connect",[Ic]:"fire-rtdb-compat",[vc]:"fire-fn",[Tc]:"fire-fn-compat",[Ac]:"fire-iid",[Sc]:"fire-iid-compat",[kc]:"fire-fcm",[xc]:"fire-fcm-compat",[Rc]:"fire-perf",[Oc]:"fire-perf-compat",[Cc]:"fire-rc",[Nc]:"fire-rc-compat",[Pc]:"fire-gcs",[Dc]:"fire-gcs-compat",[Lc]:"fire-fst",[Uc]:"fire-fst-compat",[Mc]:"fire-vertex","fire-js":"fire-js",[Bc]:"fire-js-all"};var Gt=new Map,Vc=new Map,wr=new Map;function gs(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){let e=t.name;if(wr.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;wr.set(e,t);for(let n of Gt.values())gs(n,t);for(let n of Vc.values())gs(n,t);return!0}function ft(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Z(t){return t==null?!1:t.settings!==void 0}var Wc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new fe("app","Firebase",Wc);var Er=class{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ee("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}};var et=Fc;function vr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r={name:br,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ee.create("bad-app-name",{appName:String(i)});if(n||(n=ar()),!n)throw Ee.create("no-options");let s=Gt.get(i);if(s){if(we(n,s.options)&&we(r,s.config))return s;throw Ee.create("duplicate-app",{appName:i})}let o=new $t(i);for(let c of wr.values())o.addComponent(c);let a=new Er(n,r,o);return Gt.set(i,a),a}function Kt(t=br){let e=Gt.get(t);if(!e&&t===br&&ar())return vr();if(!e)throw Ee.create("no-app",{appName:t});return e}function ne(t,e,n){let r=Hc[t]??t;n&&(r+=`-${n}`);let i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){let o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(o.join(" "));return}_e(new ee(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var qc="firebase-heartbeat-database",jc=1,ht="firebase-heartbeat-store",mr=null;function Es(){return mr||(mr=ps(qc,jc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ht)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),mr}async function $c(t){try{let n=(await Es()).transaction(ht),r=await n.objectStore(ht).get(_s(t));return await n.done,r}catch(e){if(e instanceof X)pe.warn(e.message);else{let n=Ee.create("idb-get",{originalErrorMessage:e?.message});pe.warn(n.message)}}}async function ys(t,e){try{let r=(await Es()).transaction(ht,"readwrite");await r.objectStore(ht).put(e,_s(t)),await r.done}catch(n){if(n instanceof X)pe.warn(n.message);else{let r=Ee.create("idb-set",{originalErrorMessage:n?.message});pe.warn(r.message)}}}function _s(t){return`${t.name}!${t.options.appId}`}var zc=1024,Gc=30,_r=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Ir(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bs();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>Gc){let i=Yc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=bs(),{heartbeatsToSend:n,unsentEntries:r}=Kc(this._heartbeatsCache.heartbeats),i=ir(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return pe.warn(e),""}}};function bs(){return new Date().toISOString().substring(0,10)}function Kc(t,e=zc){let n=[],r=t.slice();for(let i of t){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ws(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ws(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Ir=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return is()?ss().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await $c(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return ys(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return ys(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function ws(t){return ir(JSON.stringify({version:2,heartbeats:t})).length}function Yc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}function Jc(t){_e(new ee("platform-logger",e=>new gr(e),"PRIVATE")),_e(new ee("heartbeat",e=>new _r(e),"PRIVATE")),ne(yr,ms,t),ne(yr,ms,"esm2020"),ne("fire-js","")}Jc("");var Xc="firebase",Zc="12.12.1";ne(Xc,Zc,"app");function Hs(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Vs=Hs,Ws=new fe("auth","Firebase",Hs());var tn=new Qe("@firebase/auth");function Qc(t,...e){tn.logLevel<=O.WARN&&tn.warn(`Auth (${et}): ${t}`,...e)}function Jt(t,...e){tn.logLevel<=O.ERROR&&tn.error(`Auth (${et}): ${t}`,...e)}function re(t,...e){throw Kr(t,...e)}function ce(t,...e){return Kr(t,...e)}function qs(t,e,n){let r={...Vs(),[e]:n};return new fe("auth","Firebase",r).create(e,{appName:t.name})}function Te(t){return qs(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Kr(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ws.create(t,...e)}function y(t,e,...n){if(!t)throw Kr(e,...n)}function ae(t){let e="INTERNAL ASSERTION FAILED: "+t;throw Jt(e),new Error(e)}function ge(t,e){t||ae(e)}function Rr(){return typeof self<"u"&&self.location?.href||""}function eu(){return Is()==="http:"||Is()==="https:"}function Is(){return typeof self<"u"&&self.location?.protocol||null}function tu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eu()||ts()||"connection"in navigator)?navigator.onLine:!0}function nu(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var Me=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,ge(n>e,"Short delay should be less than long delay!"),this.isMobile=Qi()||ns()}get(){return tu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Yr(t,e){ge(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var nn=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ae("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ae("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ae("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var ru={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var iu=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],su=new Me(3e4,6e4);function V(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function z(t,e,n,r,i={}){return js(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let a=Je({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);let u={method:e,headers:c,...s};return es()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&De(t.emulatorConfig.host)&&(u.credentials="include"),nn.fetch()(await $s(t,t.config.apiHost,n,a),u)})}async function js(t,e,n){t._canInitEmulator=!1;let r={...ru,...e};try{let i=new Or(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw mt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mt(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mt(t,"user-disabled",o);let l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qs(t,l,u);re(t,l)}}catch(i){if(i instanceof X)throw i;re(t,"network-request-failed",{message:String(i)})}}async function Ae(t,e,n,r,i={}){let s=await z(t,e,n,r,i);return"mfaPendingCredential"in s&&re(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function $s(t,e,n,r){let i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Yr(t.config,i):`${t.config.apiScheme}://${i}`;return iu.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ou(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var Or=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),su.get())})}};function mt(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=ce(t,e,r);return i.customData._tokenResponse=n,i}function vs(t){return t!==void 0&&t.enterprise!==void 0}var rn=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ou(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function zs(t,e){return z(t,"GET","/v2/recaptchaConfig",V(t,e))}async function au(t,e){return z(t,"POST","/v1/accounts:delete",e)}async function sn(t,e){return z(t,"POST","/v1/accounts:lookup",e)}function gt(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gs(t,e=!1){let n=G(t),r=await n.getIdToken(e),i=Jr(r);y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:gt(Tr(i.auth_time)),issuedAtTime:gt(Tr(i.iat)),expirationTime:gt(Tr(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Tr(t){return Number(t)*1e3}function Jr(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Jt("JWT malformed, contained fewer than 3 sections"),null;try{let i=qt(n);return i?JSON.parse(i):(Jt("Failed to decode base64 JWT payload"),null)}catch(i){return Jt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ts(t){let e=Jr(t);return y(e,"internal-error"),y(typeof e.exp<"u","internal-error"),y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function Et(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof X&&cu(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function cu({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}var Cr=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;let r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var _t=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=gt(this.lastLoginAt),this.creationTime=gt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function on(t){let e=t.auth,n=await t.getIdToken(),r=await Et(t,sn(e,{idToken:n}));y(r?.users.length,e,"internal-error");let i=r.users[0];t._notifyReloadListener(i);let s=i.providerUserInfo?.length?Ys(i.providerUserInfo):[],o=uu(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=a?c:!1,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new _t(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function Ks(t){let e=G(t);await on(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uu(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ys(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function lu(t,e){let n=await js(t,{},async()=>{let r=Je({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await $s(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:a,body:r};return t.emulatorConfig&&De(t.emulatorConfig.host)&&(c.credentials="include"),nn.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function du(t,e){return z(t,"POST","/v2/accounts:revokeToken",V(t,e))}var yt=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){y(e.idToken,"internal-error"),y(typeof e.idToken<"u","internal-error"),y(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ts(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){y(e.length!==0,"internal-error");let n=Ts(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:i,expiresIn:s}=await lu(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new t;return r&&(y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return ae("not implemented")}};function Ie(t,e){y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var ve=class t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Cr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _t(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Gs(this,e)}reload(){return Ks(this)}_assign(e){this!==e&&(y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await on(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Z(this.auth.app))return Promise.reject(Te(this.auth));let e=await this.getIdToken();return await Et(this,au(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){let r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:w,stsTokenManager:I}=n;y(h&&I,e,"internal-error");let v=yt.fromJSON(this.name,I);y(typeof h=="string",e,"internal-error"),Ie(r,e.name),Ie(i,e.name),y(typeof d=="boolean",e,"internal-error"),y(typeof f=="boolean",e,"internal-error"),Ie(s,e.name),Ie(o,e.name),Ie(a,e.name),Ie(c,e.name),Ie(u,e.name),Ie(l,e.name);let R=new t({uid:h,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:v,createdAt:u,lastLoginAt:l});return w&&Array.isArray(w)&&(R.providerData=w.map(S=>({...S}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,n,r=!1){let i=new yt;i.updateFromServerResponse(n);let s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await on(s),s}static async _fromGetAccountInfoResponse(e,n,r){let i=n.users[0];y(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?Ys(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new yt;a.updateFromIdToken(r);let c=new t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _t(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(c,u),c}};var As=new Map;function me(t){ge(t instanceof Function,"Expected a class definition");let e=As.get(t);return e?(ge(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,As.set(t,e),e)}var an=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};an.type="NONE";var Nr=an;function Xt(t,e,n){return`firebase:${t}:${e}:${n}`}var cn=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Xt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Xt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let n=await sn(this.auth,{idToken:e}).catch(()=>{});return n?ve._fromGetAccountInfoResponse(this.auth,n,e):null}return ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new t(me(Nr),e,r);let i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),s=i[0]||me(Nr),o=Xt(r,e.config.apiKey,e.name),a=null;for(let u of n)try{let l=await u._get(o);if(l){let h;if(typeof l=="string"){let d=await sn(e,{idToken:l}).catch(()=>{});if(!d)break;h=await ve._fromGetAccountInfoResponse(e,d,l)}else h=ve._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}let c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new t(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new t(s,e,r))}};function Ss(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Qs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Js(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(to(e))return"Blackberry";if(no(e))return"Webos";if(Xs(e))return"Safari";if((e.includes("chrome/")||Zs(e))&&!e.includes("edge/"))return"Chrome";if(eo(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Js(t=$()){return/firefox\//i.test(t)}function Xs(t=$()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zs(t=$()){return/crios\//i.test(t)}function Qs(t=$()){return/iemobile/i.test(t)}function eo(t=$()){return/android/i.test(t)}function to(t=$()){return/blackberry/i.test(t)}function no(t=$()){return/webos/i.test(t)}function Xr(t=$()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hu(t=$()){return Xr(t)&&!!window.navigator?.standalone}function fu(){return rs()&&document.documentMode===10}function ro(t=$()){return Xr(t)||eo(t)||no(t)||to(t)||/windows phone/i.test(t)||Qs(t)}function io(t,e=[]){let n;switch(t){case"Browser":n=Ss($());break;case"Worker":n=`${Ss($())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${et}/${r}`}var Pr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function pu(t,e={}){return z(t,"GET","/v2/passwordPolicy",V(t,e))}var mu=6,Dr=class{constructor(e){let n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??mu,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Lr=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new un(this),this.idTokenSubscription=new un(this),this.beforeStateQueue=new Pr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ws,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=me(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await cn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let n=await sn(this,{idToken:e}),r=await ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Z(this.app)){let s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await on(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Z(this.app))return Promise.reject(Te(this));let n=e?G(e):null;return n&&y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Z(this.app)?Promise.reject(Te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Z(this.app)?Promise.reject(Te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(me(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await pu(this),n=new Dr(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fe("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await du(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&me(e)||this._popupRedirectResolver;y(n,this,"argument-error"),this.redirectPersistenceManager=await cn.create(this,[me(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};let s=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){let c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{let c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=io(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Qc(`Error while retrieving App Check token: ${e.error}`),e?.token}};function Ve(t){return G(t)}var un=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=as(n=>this.observer=n)}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var kn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function gu(t){kn=t}function so(t){return kn.loadJS(t)}function yu(){return kn.recaptchaEnterpriseScript}function bu(){return kn.gapiScript}function oo(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var Mr=class{constructor(){this.enterprise=new Ur}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}},Ur=class{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}};var wu="recaptcha-enterprise",bt="NO_RECAPTCHA",ln=class{constructor(e){this.type=wu,this.auth=Ve(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{zs(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let u=new rn(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){let c=window.grecaptcha;vs(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(bt)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Mr().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&vs(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=yu();c.length!==0&&(c+=a),so(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}};async function pt(t,e,n,r=!1,i=!1){let s=new ln(t),o;if(i)o=bt;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}let a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function wt(t,e,n,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await pt(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await pt(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let s=await pt(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);let a=await pt(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{let s=await pt(t,e,n,!1,!0);return r(t,s)}else return Promise.reject(i+" provider is not supported.")}async function Eu(t){let e=Ve(t),n=await zs(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new rn(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new ln(e).verify()}function ao(t,e){let n=ft(t,"auth");if(n.isInitialized()){let i=n.getImmediate(),s=n.getOptions();if(we(s,e??{}))return i;re(i,"already-initialized")}return n.initialize({options:e})}function _u(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(me);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function co(t,e,n){let r=Ve(t);y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!n?.disableWarnings,s=uo(e),{host:o,port:a}=Iu(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){y(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),y(we(u,r.config.emulator)&&we(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,De(o)?jt(`${s}//${o}${c}`):i||vu()}function uo(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Iu(t){let e=uo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:ks(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:ks(o)}}}function ks(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function vu(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var Ue=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ae("not implemented")}_getIdTokenResponse(e){return ae("not implemented")}_linkToIdToken(e,n){return ae("not implemented")}_getReauthenticationResolver(e){return ae("not implemented")}};async function Tu(t,e){return z(t,"POST","/v1/accounts:signUp",e)}async function Au(t,e){return Ae(t,"POST","/v1/accounts:signInWithPassword",V(t,e))}async function Su(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",V(t,e))}async function ku(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",V(t,e))}var It=class t extends Ue{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,n,"signInWithPassword",Au,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Su(e,{email:this._email,oobCode:this._password});default:re(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wt(e,r,"signUpPassword",Tu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return ku(e,{idToken:n,email:this._email,oobCode:this._password});default:re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function tt(t,e){return Ae(t,"POST","/v1/accounts:signInWithIdp",V(t,e))}var xu="http://localhost",Be=class t extends Ue{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):re("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;let o=new t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return tt(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,tt(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,tt(e,n)}buildRequest(){let e={requestUri:xu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Je(n)}return e}};async function xs(t,e){return z(t,"POST","/v1/accounts:sendVerificationCode",V(t,e))}async function Ru(t,e){return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,e))}async function Ou(t,e){let n=await Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,e));if(n.temporaryProof)throw mt(t,"account-exists-with-different-credential",n);return n}var Cu={USER_NOT_FOUND:"user-not-found"};async function Nu(t,e){let n={...e,operation:"REAUTH"};return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,n),Cu)}var vt=class t extends Ue{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Ru(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ou(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Nu(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new t({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Pu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Du(t){let e=Xe(Ze(t)).link,n=e?Xe(Ze(e)).deep_link_id:null,r=Xe(Ze(t)).deep_link_id;return(r?Xe(Ze(r)).link:null)||r||n||e||t}var dn=class t{constructor(e){let n=Xe(Ze(e)),r=n.apiKey??null,i=n.oobCode??null,s=Pu(n.mode??null);y(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){let n=Du(e);try{return new t(n)}catch{return null}}};var nt=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return It._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=dn.parseLink(n);return y(r,"argument-error"),It._fromEmailAndCode(e,r.code,r.tenantId)}};nt.PROVIDER_ID="password";nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var hn=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Fe=class extends hn{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var Tt=class t extends Fe{constructor(){super("facebook.com")}static credential(e){return Be._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};Tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tt.PROVIDER_ID="facebook.com";var At=class t extends Fe{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Be._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};At.GOOGLE_SIGN_IN_METHOD="google.com";At.PROVIDER_ID="google.com";var St=class t extends Fe{constructor(){super("github.com")}static credential(e){return Be._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};St.GITHUB_SIGN_IN_METHOD="github.com";St.PROVIDER_ID="github.com";var kt=class t extends Fe{constructor(){super("twitter.com")}static credential(e,n){return Be._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";var rt=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){let s=await ve._fromIdTokenResponse(e,r,i),o=Rs(r);return new t({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let i=Rs(r);return new t({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function Rs(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var Br=class t extends X{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new t(e,n,r,i)}};function lo(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Br._fromErrorAndOperation(t,s,e,r):s})}async function Lu(t,e,n=!1){let r=await Et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rt._forOperation(t,"link",r)}async function Mu(t,e,n=!1){let{auth:r}=t;if(Z(r.app))return Promise.reject(Te(r));let i="reauthenticate";try{let s=await Et(t,lo(r,i,e,t),n);y(s.idToken,r,"internal-error");let o=Jr(s.idToken);y(o,r,"internal-error");let{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),rt._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&re(r,"user-mismatch"),s}}async function Uu(t,e,n=!1){if(Z(t.app))return Promise.reject(Te(t));let r="signIn",i=await lo(t,r,e),s=await rt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bu(t,e){return Ae(t,"POST","/v1/accounts:signInWithCustomToken",V(t,e))}async function Zr(t,e){if(Z(t.app))return Promise.reject(Te(t));let n=Ve(t),r=await Bu(n,{token:e,returnSecureToken:!0}),i=await rt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function Qr(t,e){return G(t).setPersistence(e)}function ho(t,e,n,r){return G(t).onIdTokenChanged(e,n,r)}function fo(t,e,n){return G(t).beforeAuthStateChanged(e,n)}function ei(t,e,n,r){return G(t).onAuthStateChanged(e,n,r)}function ti(t){return G(t).signOut()}function Os(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:start",V(t,e))}function Fu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:finalize",V(t,e))}function Hu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:start",V(t,e))}function Vu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:finalize",V(t,e))}var fn="__sak";var pn=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(fn,"1"),this.storage.removeItem(fn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Wu=1e3,qu=10,mn=class extends pn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ro(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;n?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);fu()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qu):i()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Wu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};mn.type="LOCAL";var xn=mn;var ju=1e3;function Ar(t){let e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Sr(t){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}var Fr=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;let n=Sr(e);return window.cookieStore?(await window.cookieStore.get(n))?.value:Ar(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Sr(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;let r=Sr(e);if(window.cookieStore){let a=u=>{let l=u.changed.find(d=>d.name===r);l&&n(l.value),u.deleted.find(d=>d.name===r)&&n(null)},c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(n,c),window.cookieStore.addEventListener("change",a)}let i=Ar(r),s=setInterval(()=>{let a=Ar(r);a!==i&&(n(a),i=a)},ju),o=()=>clearInterval(s);this.listenerUnsubscribes.set(n,o)}_removeListener(e,n){let r=this.listenerUnsubscribes.get(n);r&&(r(),this.listenerUnsubscribes.delete(n))}};Fr.type="COOKIE";var gn=class extends pn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};gn.type="SESSION";var ni=gn;function $u(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var yn=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let a=Array.from(o).map(async u=>u(n.origin,s)),c=await $u(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};yn.receivers=[];function ri(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Hr=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let u=ri("",20);i.port1.start();let l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){let d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function ue(){return window}function zu(t){ue().location.href=t}function po(){return typeof ue().WorkerGlobalScope<"u"&&typeof ue().importScripts=="function"}async function Gu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ku(){return navigator?.serviceWorker?.controller||null}function Yu(){return po()?self:null}var mo="firebaseLocalStorageDb",Ju=1,bn="firebaseLocalStorage",go="fbase_key",He=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function Rn(t,e){return t.transaction([bn],e?"readwrite":"readonly").objectStore(bn)}function Xu(){let t=indexedDB.deleteDatabase(mo);return new He(t).toPromise()}function Vr(){let t=indexedDB.open(mo,Ju);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(bn,{keyPath:go})}catch(i){n(i)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(bn)?e(r):(r.close(),await Xu(),e(await Vr()))})})}async function Cs(t,e,n){let r=Rn(t,!0).put({[go]:e,value:n});return new He(r).toPromise()}async function Zu(t,e){let n=Rn(t,!1).get(e),r=await new He(n).toPromise();return r===void 0?null:r.value}function Ns(t,e){let n=Rn(t,!0).delete(e);return new He(n).toPromise()}var Qu=800,el=3,wn=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vr(),this.db)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>el)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return po()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yn._getInstance(Yu()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Gu(),!this.activeServiceWorker)return;this.sender=new Hr(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ku()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Vr();return await Cs(e,fn,"1"),await Ns(e,fn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>Zu(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ns(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Rn(i,!1).getAll();return new He(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};wn.type="LOCAL";var yo=wn;function Ps(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:start",V(t,e))}function tl(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:finalize",V(t,e))}function nl(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:finalize",V(t,e))}var ef=oo("rcb"),tf=new Me(3e4,6e4);var Zt="recaptcha";async function rl(t,e,n){if(!t._getRecaptchaConfig())try{await Eu(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let i=r.session;if("phoneNumber"in r){y(i.type==="enroll",t,"internal-error");let s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await wt(t,s,"mfaSmsEnrollment",async(u,l)=>{if(l.phoneEnrollmentInfo.captchaResponse===bt){y(n?.type===Zt,u,"argument-error");let h=await kr(u,l,n);return Os(u,h)}return Os(u,l)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{y(i.type==="signin",t,"internal-error");let s=r.multiFactorHint?.uid||r.multiFactorUid;y(s,t,"missing-multi-factor-info");let o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await wt(t,o,"mfaSmsSignIn",async(l,h)=>{if(h.phoneSignInInfo.captchaResponse===bt){y(n?.type===Zt,l,"argument-error");let d=await kr(l,h,n);return Ps(l,d)}return Ps(l,h)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).phoneResponseInfo.sessionInfo}}else{let i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await wt(t,i,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===bt){y(n?.type===Zt,c,"argument-error");let l=await kr(c,u,n);return xs(c,l)}return xs(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n?._reset()}}async function kr(t,e,n){y(n.type===Zt,t,"argument-error");let r=await n.verify();y(typeof r=="string",t,"argument-error");let i={...e};if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var xt=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=Ve(e)}verifyPhoneNumber(e,n){return rl(this.auth,e,G(n))}static credential(e,n){return vt._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?vt._fromTokenResponse(n,r):null}};xt.PROVIDER_ID="phone";xt.PHONE_SIGN_IN_METHOD="phone";function il(t,e){return e?me(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var Rt=class extends Ue{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return tt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return tt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return tt(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function sl(t){return Uu(t.auth,new Rt(t),t.bypassAuthState)}function ol(t){let{auth:e,user:n}=t;return y(n,e,"internal-error"),Mu(n,new Rt(t),t.bypassAuthState)}async function al(t){let{auth:e,user:n}=t;return y(n,e,"internal-error"),Lu(n,new Rt(t),t.bypassAuthState)}var En=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sl;case"linkViaPopup":case"linkViaRedirect":return al;case"reauthViaPopup":case"reauthViaRedirect":return ol;default:re(this.auth,"internal-error")}}resolve(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ge(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var cl=new Me(2e3,1e4);var Wr=class t extends En{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return y(e,this.auth,"internal-error"),e}async onExecution(){ge(this.filter.length===1,"Popup operations only handle one event");let e=ri();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cl.get())};e()}};Wr.currentPopupAction=null;var ul="pendingRedirect",Qt=new Map,qr=class extends En{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{let r=await ll(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function ll(t,e){let n=fl(e),r=hl(t);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function dl(t,e){Qt.set(t._key(),e)}function hl(t){return me(t._redirectPersistence)}function fl(t){return Xt(ul,t.config.apiKey,t.name)}async function pl(t,e,n=!1){if(Z(t.app))return Promise.reject(Te(t));let r=Ve(t),i=il(r,e),o=await new qr(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var ml=10*60*1e3,jr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gl(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!bo(e)){let r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ce(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ml&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ds(e))}saveEventToCache(e){this.cachedEventUids.add(Ds(e)),this.lastProcessedEventTime=Date.now()}};function Ds(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function bo({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function gl(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return bo(t);default:return!1}}async function yl(t,e={}){return z(t,"GET","/v1/projects",e)}var bl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wl=/^https?/;async function El(t){if(t.config.emulator)return;let{authorizedDomains:e}=await yl(t);for(let n of e)try{if(_l(n))return}catch{}re(t,"unauthorized-domain")}function _l(t){let e=Rr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wl.test(n))return!1;if(bl.test(t))return r===t;let i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var Il=new Me(3e4,6e4);function Ls(){let t=ue().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vl(t){return new Promise((e,n)=>{function r(){Ls(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ls(),n(ce(t,"network-request-failed"))},timeout:Il.get()})}if(ue().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ue().gapi?.load)r();else{let i=oo("iframefcb");return ue()[i]=()=>{gapi.load?r():n(ce(t,"network-request-failed"))},so(`${bu()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw en=null,e})}var en=null;function Tl(t){return en=en||vl(t),en}var Al=new Me(5e3,15e3),Sl="__/auth/iframe",kl="emulator/auth/iframe",xl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ol(t){let e=t.config;y(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?Yr(e,kl):`https://${t.config.authDomain}/${Sl}`,r={apiKey:e.apiKey,appName:t.name,v:et},i=Rl.get(t.config.apiHost);i&&(r.eid=i);let s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Je(r).slice(1)}`}async function Cl(t){let e=await Tl(t),n=ue().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:Ol(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=ce(t,"network-request-failed"),a=ue().setTimeout(()=>{s(o)},Al.get());function c(){ue().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}var Nl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pl=500,Dl=600,Ll="_blank",Ml="http://localhost",_n=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Ul(t,e,n,r=Pl,i=Dl){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c={...Nl,width:r.toString(),height:i.toString(),top:s,left:o},u=$().toLowerCase();n&&(a=Zs(u)?Ll:n),Js(u)&&(e=e||Ml,c.scrollbars="yes");let l=Object.entries(c).reduce((d,[f,w])=>`${d}${f}=${w},`,"");if(hu(u)&&a!=="_self")return Bl(e||"",a),new _n(null);let h=window.open(e||"",a,l);y(h,t,"popup-blocked");try{h.focus()}catch{}return new _n(h)}function Bl(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var Fl="__/auth/handler",Hl="emulator/auth/handler",Vl=encodeURIComponent("fac");async function Ms(t,e,n,r,i,s){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:et,eventId:i};if(e instanceof hn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",os(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Fe){let l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let l of Object.keys(a))a[l]===void 0&&delete a[l];let c=await t._getAppCheckToken(),u=c?`#${Vl}=${encodeURIComponent(c)}`:"";return`${Wl(t)}?${Je(a).slice(1)}${u}`}function Wl({config:t}){return t.emulator?Yr(t,Hl):`https://${t.authDomain}/${Fl}`}var xr="webStorageSupport",$r=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ni,this._completeRedirectFn=pl,this._overrideRedirectResult=dl}async _openPopup(e,n,r,i){ge(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let s=await Ms(e,n,r,Rr(),i);return Ul(e,s,ri())}async _openRedirect(e,n,r,i){await this._originValidation(e);let s=await Ms(e,n,r,Rr(),i);return zu(s),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(ge(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await Cl(e),r=new jr(e);return n.register("authEvent",i=>(y(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xr,{type:xr},i=>{let s=i?.[0]?.[xr];s!==void 0&&n(!!s),re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=El(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ro()||Xs()||Xr()}},wo=$r,In=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ae("unexpected MultiFactorSessionType")}}},zr=class t extends In{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return Fu(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return tl(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},vn=class{constructor(){}static assertion(e){return zr._fromCredential(e)}};vn.FACTOR_ID="phone";var Tn=class{static assertionForEnrollment(e,n){return An._fromSecret(e,n)}static assertionForSignIn(e,n){return An._fromEnrollmentId(e,n)}static async generateSecret(e){let n=e;y(typeof n.user?.auth<"u","internal-error");let r=await Hu(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Sn._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}};Tn.FACTOR_ID="totp";var An=class t extends In{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return y(typeof this.secret<"u",e,"argument-error"),Vu(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){y(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return nl(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},Sn=class t{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){let r=!1;return(Yt(e)||Yt(n))&&(r=!0),r&&(Yt(e)&&(e=this.auth.currentUser?.email||"unknownuser"),Yt(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function Yt(t){return typeof t>"u"||t?.length===0}var Us="@firebase/auth",Bs="1.13.0";var Gr=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function ql(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jl(t){_e(new ee("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:io(t)},u=new Lr(r,i,s,c);return _u(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_e(new ee("auth-internal",e=>{let n=Ve(e.getProvider("auth").getImmediate());return(r=>new Gr(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ne(Us,Bs,ql(t)),ne(Us,Bs,"esm2020")}var $l=5*60,zl=cr("authIdTokenMaxAge")||$l,Fs=null,Gl=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>zl)return;let i=n?.token;Fs!==i&&(Fs=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ii(t=Kt()){let e=ft(t,"auth");if(e.isInitialized())return e.getImmediate();let n=ao(t,{popupRedirectResolver:wo,persistence:[yo,xn,ni]}),r=cr("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=Gl(s.toString());fo(n,o,()=>o(n.currentUser)),ho(n,a=>o(a))}}let i=or("auth");return i&&co(n,`http://${i}`),n}function Kl(){return document.getElementsByTagName("head")?.[0]??document}gu({loadJS(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{let s=ce("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Kl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jl("Browser");var Yl="type.googleapis.com/google.protobuf.Int64Value",Jl="type.googleapis.com/google.protobuf.UInt64Value";function vo(t,e){let n={};for(let r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function On(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>On(e));if(typeof t=="function"||typeof t=="object")return vo(t,e=>On(e));throw new Error("Data cannot be encoded in JSON: "+t)}function it(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Yl:case Jl:{let e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>it(e)):typeof t=="function"||typeof t=="object"?vo(t,e=>it(e)):t}var ci="functions";var Eo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},Y=class t extends X{constructor(e,n,r){super(`${ci}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,t.prototype)}};function Xl(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function Cn(t,e){let n=Xl(t),r=n,i;try{let s=e&&e.error;if(s){let o=s.status;if(typeof o=="string"){if(!Eo[o])return new Y("internal","internal");n=Eo[o],r=o}let a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=it(i))}}catch{}return n==="ok"?null:new Y(n,r,i)}var si=class{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Z(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i?.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){let n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){let n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}};var oi="us-central1",Zl=/^data: (.*?)(?:\n|$)/;function Ql(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Y("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}var ai=class{constructor(e,n,r,i,s=oi,o=(...a)=>fetch(...a)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new si(e,n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{let a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=oi}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){let n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}};function ed(t,e,n){let r=De(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&jt(t.emulatorOrigin+"/backends")}function td(t,e,n){let r=i=>rd(t,e,i,n||{});return r.stream=(i,s)=>sd(t,e,i,s),r}function To(t){return t.emulatorOrigin&&De(t.emulatorOrigin)?"include":void 0}async function nd(t,e,n,r,i){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:To(i)})}catch{return{status:0,json:null}}let o=null;try{o=await s.json()}catch{}return{status:s.status,json:o}}async function Ao(t,e){let n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function rd(t,e,n,r){let i=t._url(e);return id(t,i,n,r)}async function id(t,e,n,r){n=On(n);let i={data:n},s=await Ao(t,r),o=r.timeout||7e4,a=Ql(o),c=await Promise.race([nd(e,i,s,t.fetchImpl,t),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new Y("cancelled","Firebase Functions instance was deleted.");let u=Cn(c.status,c.json);if(u)throw u;if(!c.json)throw new Y("internal","Response is not valid JSON object.");let l=c.json.data;if(typeof l>"u"&&(l=c.json.result),typeof l>"u")throw new Y("internal","Response is missing data field.");return{data:it(l)}}function sd(t,e,n,r){let i=t._url(e);return od(t,i,n,r||{})}async function od(t,e,n,r){n=On(n);let i={data:n},s=await Ao(t,r);s["Content-Type"]="application/json",s.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:s,signal:r?.signal,credentials:To(t)})}catch(d){if(d instanceof Error&&d.name==="AbortError"){let w=new Y("cancelled","Request was cancelled.");return{data:Promise.reject(w),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(w)}}}}}}let f=Cn(0,null);return{data:Promise.reject(f),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(f)}}}}}}let a,c,u=new Promise((d,f)=>{a=d,c=f});r?.signal?.addEventListener("abort",()=>{let d=new Y("cancelled","Request was cancelled.");c(d)});let l=o.body.getReader(),h=ad(l,a,c,r?.signal);return{stream:{[Symbol.asyncIterator](){let d=h.getReader();return{async next(){let{value:f,done:w}=await d.read();return{value:f,done:w}},async return(){return await d.cancel(),{done:!0,value:void 0}}}}},data:u}}function ad(t,e,n,r){let i=(o,a)=>{let c=o.match(Zl);if(!c)return;let u=c[1];try{let l=JSON.parse(u);if("result"in l){e(it(l.result));return}if("message"in l){a.enqueue(it(l.message));return}if("error"in l){let h=Cn(0,l);a.error(h),n(h);return}}catch(l){if(l instanceof Y){a.error(l),n(l);return}}},s=new TextDecoder;return new ReadableStream({start(o){let a="";return c();async function c(){if(r?.aborted){let u=new Y("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{let{value:u,done:l}=await t.read();if(l){a.trim()&&i(a.trim(),o),o.close();return}if(r?.aborted){let d=new Y("cancelled","Request was cancelled");o.error(d),n(d),await t.cancel();return}a+=s.decode(u,{stream:!0});let h=a.split(`
`);a=h.pop()||"";for(let d of h)d.trim()&&i(d.trim(),o);return c()}catch(u){let l=u instanceof Y?u:Cn(0,null);o.error(l),n(l)}}},cancel(){return t.cancel()}})}var _o="@firebase/functions",Io="0.13.3";var cd="auth-internal",ud="app-check-internal",ld="messaging-internal";function dd(t){let e=(n,{instanceIdentifier:r})=>{let i=n.getProvider("app").getImmediate(),s=n.getProvider(cd),o=n.getProvider(ld),a=n.getProvider(ud);return new ai(i,s,o,a,r)};_e(new ee(ci,e,"PUBLIC").setMultipleInstances(!0)),ne(_o,Io,t),ne(_o,Io,"esm2020")}function So(t=Kt(),e=oi){let r=ft(G(t),ci).getImmediate({identifier:e}),i=Zi("functions");return i&&hd(r,...i),r}function hd(t,e,n){ed(G(t),e,n)}function ui(t,e,n){return td(G(t),e,n)}dd();var Nn=BigInt(4294967295),ko=BigInt(32);function fd(t,e=!1){return e?{h:Number(t&Nn),l:Number(t>>ko&Nn)}:{h:Number(t>>ko&Nn)|0,l:Number(t&Nn)|0}}function xo(t,e=!1){let n=t.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let s=0;s<n;s++){let{h:o,l:a}=fd(t[s],e);[r[s],i[s]]=[o,a]}return[r,i]}var pd=t=>t/2**32|0,md=t=>t>>>0;function Ro(t,e,n,r){let i=pd(n),s=md(n);t.setUint32(e,r?s:i,r),t.setUint32(e+4,r?i:s,r)}var li=(t,e,n)=>t>>>n,di=(t,e,n)=>t<<32-n|e>>>n,We=(t,e,n)=>t>>>n|e<<32-n,qe=(t,e,n)=>t<<32-n|e>>>n,Ot=(t,e,n)=>t<<64-n|e>>>n-32,Ct=(t,e,n)=>t>>>n-32|e<<64-n;function le(t,e,n,r){let i=(e>>>0)+(r>>>0);return{h:t+n+(i/2**32|0)|0,l:i|0}}var Oo=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),Co=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,No=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Po=(t,e,n,r,i)=>e+n+r+i+(t/2**32|0)|0,Do=(t,e,n,r,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(i>>>0),Lo=(t,e,n,r,i,s)=>e+n+r+i+s+(t/2**32|0)|0;function Pn(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in t&&t.BYTES_PER_ELEMENT===1}var hi=t=>t?`"${t}" `:"";function de(t,e=""){if(typeof t!="number")throw new TypeError(hi(e)+"expected number, got "+typeof t);if(!Number.isSafeInteger(t)||t<0)throw new RangeError(hi(e)+"expected integer >= 0, got "+t);return t}function j(t,e,n=""){if(Pn(t)&&(e===void 0||t.length===e))return t;e!==void 0&&de(e,"length");let r=Pn(t),i=e!==void 0?` of length ${e}`:"",s=r?`length=${t.length}`:`type=${typeof t}`,o=hi(n)+"expected Uint8Array"+i+", got "+s;throw r?new RangeError(o):new TypeError(o)}function Nt(t){if(typeof t!="function"||typeof t.create!="function")throw new TypeError("expected hash wrapped by utils.createHasher");if(de(t.outputLen),de(t.blockLen),t.outputLen<1||t.blockLen<1)throw new Error("hash blockLen / outputLen must be >= 1")}var yd=(t,e)=>{if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof t)},Mo=(t,e)=>{yd(t,e);let n=Object.getPrototypeOf(t);if(n!==Object.prototype&&n!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(t,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function st(t,e=!0){if(t.destroyed)throw new Error("hash was destroyed");if(e&&t.finished)throw new Error("digest() was already called")}function Dn(t,e){j(t,void 0,"output");let n=e.outputLen;if(!(t.length>=n))throw new RangeError('"output" expected length >= '+n)}function te(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Ln(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function ie(t,e){return t<<32-e|t>>>e}var Bo=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",bd=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Mn(t){if(j(t),Bo)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=bd[t[n]];return e}function Uo(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:void 0}function Un(t){if(typeof t!="string")throw new TypeError("hex string expected, got "+typeof t);if(Bo)try{return Uint8Array.fromHex(t)}catch(i){throw i instanceof SyntaxError?new RangeError(i.message):i}let e=t.length,n=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(n);for(let i=0,s=0;i<n;i++,s+=2){let o=Uo(t.charCodeAt(s)),a=Uo(t.charCodeAt(s+1));if(o===void 0||a===void 0){let c=t[s]+t[s+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+s)}r[i]=o*16+a}return r}function fi(...t){let e=0;for(let r=0;r<t.length;r++){let i=t[r];j(i),e+=i.length}let n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){let s=t[r];n.set(s,i),i+=s.length}return n}function wd(t,e,n="opts"){return Mo(t,"defaults"),e!==void 0&&Mo(e,n),Object.assign(Object.create(null),t,e)}function pi(t,e={}){if(typeof t!="function")throw new TypeError('"hashCons" expected function, got type='+typeof t);e=wd({},e,"info");let n=(i,s)=>t(s).update(i).digest(),r=t(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=i=>t(i),Object.assign(n,e),Object.freeze(n)}function mi(t=32){de(t,"bytesLength");let e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(t>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${t}`);return e.getRandomValues(new Uint8Array(t))}var gi=t=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,t])});function Fo(t,e,n){return t&e^~t&n}function Ho(t,e,n){return t&e^t&n^e&n}var Pt=class{constructor(e,n,r,i){m(this,"blockLen");m(this,"outputLen");m(this,"canXOF",!1);m(this,"padOffset");m(this,"isLE");m(this,"buffer");m(this,"view");m(this,"finished",!1);m(this,"length",0);m(this,"pos",0);m(this,"destroyed",!1);this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.buffer=new Uint8Array(e),this.view=Ln(this.buffer)}update(e){st(this),j(e);let{view:n,buffer:r,blockLen:i}=this,s=e.length,o=!1;for(let a=0;a<s;){let c=Math.min(i-this.pos,s-a);if(c===i){let u=Ln(e);for(;i<=s-a;a+=i)this.process(u,a);o=!0;continue}r.set(a===0&&c===s?e:e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===i&&(this.process(n,0),this.pos=0,o=!0)}return this.length+=e.length,o&&this.roundClean(),this}digestInto(e){st(this),Dn(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:i,isLE:s}=this,{pos:o}=this;n[o++]=128,n.fill(0,o),this.padOffset>i-o&&(this.process(r,0),n.fill(0)),Ro(r,i-8,this.length*8,s),this.process(r,0),this.roundClean();let a=e===n?r:Ln(e),c=this.outputLen,u=c/4,l=this.get();if(c%4||u>l.length)throw new Error("invalid outputLen");for(let h=0;h<u;h++)a.setUint32(4*h,l[h],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneIntoMeta(e){let{buffer:n,length:r,finished:i,destroyed:s,pos:o}=this;return e.destroyed=s,e.finished=i,e.length=r,e.pos=o,o&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Vo=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var Wo=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]);var Ed=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Se=new Uint32Array(64),yi=class extends Pt{constructor(n,r){super(64,n,8,!1);m(this,"A",0);m(this,"B",0);m(this,"C",0);m(this,"D",0);m(this,"E",0);m(this,"F",0);m(this,"G",0);m(this,"H",0);this.A=r[0]|0,this.B=r[1]|0,this.C=r[2]|0,this.D=r[3]|0,this.E=r[4]|0,this.F=r[5]|0,this.G=r[6]|0,this.H=r[7]|0}get(){let{A:n,B:r,C:i,D:s,E:o,F:a,G:c,H:u}=this;return[n,r,i,s,o,a,c,u]}set(n,r,i,s,o,a,c,u){this.A=n|0,this.B=r|0,this.C=i|0,this.D=s|0,this.E=o|0,this.F=a|0,this.G=c|0,this.H=u|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let d=0;d<16;d++,r+=4)Se[d]=n.getUint32(r,!1);for(let d=16;d<64;d++){let f=Se[d-15],w=Se[d-2],I=ie(f,7)^ie(f,18)^f>>>3,v=ie(w,17)^ie(w,19)^w>>>10;Se[d]=v+Se[d-7]+I+Se[d-16]|0}let{A:i,B:s,C:o,D:a,E:c,F:u,G:l,H:h}=this;for(let d=0;d<64;d++){let f=ie(c,6)^ie(c,11)^ie(c,25),w=h+f+Fo(c,u,l)+Ed[d]+Se[d]|0,v=(ie(i,2)^ie(i,13)^ie(i,22))+Ho(i,s,o)|0;h=l,l=u,u=c,c=a+w|0,a=o,o=s,s=i,i=w+v|0}i=i+this.A|0,s=s+this.B|0,o=o+this.C|0,a=a+this.D|0,c=c+this.E|0,u=u+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(i,s,o,a,c,u,l,h)}roundClean(){te(Se)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),te(this.buffer)}},bi=class extends yi{constructor(){super(32,Vo)}};var qo=xo(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),_d=qo[0],Id=qo[1],ke=new Uint32Array(80),xe=new Uint32Array(80),wi=class extends Pt{constructor(n,r){super(128,n,16,!1);m(this,"Ah",0);m(this,"Al",0);m(this,"Bh",0);m(this,"Bl",0);m(this,"Ch",0);m(this,"Cl",0);m(this,"Dh",0);m(this,"Dl",0);m(this,"Eh",0);m(this,"El",0);m(this,"Fh",0);m(this,"Fl",0);m(this,"Gh",0);m(this,"Gl",0);m(this,"Hh",0);m(this,"Hl",0);this.Ah=r[0]|0,this.Al=r[1]|0,this.Bh=r[2]|0,this.Bl=r[3]|0,this.Ch=r[4]|0,this.Cl=r[5]|0,this.Dh=r[6]|0,this.Dl=r[7]|0,this.Eh=r[8]|0,this.El=r[9]|0,this.Fh=r[10]|0,this.Fl=r[11]|0,this.Gh=r[12]|0,this.Gl=r[13]|0,this.Hh=r[14]|0,this.Hl=r[15]|0}get(){let{Ah:n,Al:r,Bh:i,Bl:s,Ch:o,Cl:a,Dh:c,Dl:u,Eh:l,El:h,Fh:d,Fl:f,Gh:w,Gl:I,Hh:v,Hl:R}=this;return[n,r,i,s,o,a,c,u,l,h,d,f,w,I,v,R]}set(n,r,i,s,o,a,c,u,l,h,d,f,w,I,v,R){this.Ah=n|0,this.Al=r|0,this.Bh=i|0,this.Bl=s|0,this.Ch=o|0,this.Cl=a|0,this.Dh=c|0,this.Dl=u|0,this.Eh=l|0,this.El=h|0,this.Fh=d|0,this.Fl=f|0,this.Gh=w|0,this.Gl=I|0,this.Hh=v|0,this.Hl=R|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let p=0;p<16;p++,r+=4)ke[p]=n.getUint32(r),xe[p]=n.getUint32(r+=4);for(let p=16;p<80;p++){let _=ke[p-15]|0,E=xe[p-15]|0,D=We(_,E,1)^We(_,E,8)^li(_,E,7),L=qe(_,E,1)^qe(_,E,8)^di(_,E,7),T=ke[p-2]|0,x=xe[p-2]|0,U=We(T,x,19)^Ot(T,x,61)^li(T,x,6),H=qe(T,x,19)^Ct(T,x,61)^di(T,x,6),M=No(L,H,xe[p-7],xe[p-16]),b=Po(M,D,U,ke[p-7],ke[p-16]);ke[p]=b|0,xe[p]=M|0}let{Ah:i,Al:s,Bh:o,Bl:a,Ch:c,Cl:u,Dh:l,Dl:h,Eh:d,El:f,Fh:w,Fl:I,Gh:v,Gl:R,Hh:S,Hl:N}=this;for(let p=0;p<80;p++){let _=We(d,f,14)^We(d,f,18)^Ot(d,f,41),E=qe(d,f,14)^qe(d,f,18)^Ct(d,f,41),D=d&w^~d&v,L=f&I^~f&R,T=Do(N,E,L,Id[p],xe[p]),x=Lo(T,S,_,D,_d[p],ke[p]),U=T|0,H=We(i,s,28)^Ot(i,s,34)^Ot(i,s,39),M=qe(i,s,28)^Ct(i,s,34)^Ct(i,s,39),b=i&o^i&c^o&c,A=s&a^s&u^a&u;S=v|0,N=R|0,v=w|0,R=I|0,w=d|0,I=f|0,{h:d,l:f}=le(l|0,h|0,x|0,U|0),l=c|0,h=u|0,c=o|0,u=a|0,o=i|0,a=s|0;let k=Oo(U,M,A);i=Co(k,x,H,b),s=k|0}({h:i,l:s}=le(this.Ah|0,this.Al|0,i|0,s|0)),{h:o,l:a}=le(this.Bh|0,this.Bl|0,o|0,a|0),{h:c,l:u}=le(this.Ch|0,this.Cl|0,c|0,u|0),{h:l,l:h}=le(this.Dh|0,this.Dl|0,l|0,h|0),{h:d,l:f}=le(this.Eh|0,this.El|0,d|0,f|0),{h:w,l:I}=le(this.Fh|0,this.Fl|0,w|0,I|0),{h:v,l:R}=le(this.Gh|0,this.Gl|0,v|0,R|0),{h:S,l:N}=le(this.Hh|0,this.Hl|0,S|0,N|0),this.set(i,s,o,a,c,u,l,h,d,f,w,I,v,R,S,N)}roundClean(){te(ke,xe)}destroy(){this.destroyed=!0,te(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},Ei=class extends wi{constructor(){super(64,Wo)}};var Bn=pi(()=>new bi,gi(1));var Fn=pi(()=>new Ei,gi(3));function Vn(t,e,n=()=>{}){if(!Array.isArray(t))throw new TypeError(`"${e}" expected array, got type=${typeof t}`);for(let r=0;r<t.length;r++)n(t[r],`${e}[${r}]`);return t}var J=(t,e,n)=>j(t,e,n),_i=de;function Re(t,e="object"){if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof t}`);return t}function je(t,e){if(typeof t!="function")throw new TypeError(`"${e}" is invalid: expected function, got ${typeof t}`);return t}var $o=Mn,Ii=(...t)=>fi(...t),zo=t=>Un(t),Dt=Pn,vi=t=>mi(t),Hn=BigInt(0),jo=BigInt(1),vd=t=>t?`"${t}" `:"";function ye(t,e=""){if(typeof t!="boolean")throw new TypeError(vd(e)+"expected boolean, got type="+typeof t);return t}function Td(t){if(typeof t=="bigint"){if(!Oe(t))throw new RangeError("positive bigint expected, got "+t)}else _i(t);return t}function ot(t,e=""){if(typeof t!="number"){let n=e&&`"${e}" `;throw new TypeError(n+"expected number, got type="+typeof t)}if(!Number.isSafeInteger(t)){let n=e&&`"${e}" `;throw new RangeError(n+"expected safe integer, got "+t)}}function Go(t){if(typeof t!="string")throw new TypeError("hex string expected, got "+typeof t);return t===""?Hn:BigInt("0x"+t)}function Wn(t){return Go(Mn(t))}function at(t){return Go(Mn(Lt(j(t)).reverse()))}function Ti(t,e){if(de(e),e===0)throw new Error("zero output length is invalid");t=Td(t);let n=e*2,r=t.toString(16);if(r.length>n)throw new RangeError("number is too large");return Un(r.padStart(n,"0"))}function Ko(t,e){return Ti(t,e).reverse()}function Lt(t){return Uint8Array.from(J(t))}function Oe(t){return typeof t=="bigint"&&Hn<=t}function Ai(t,e,n){return Oe(t)&&Oe(e)&&Oe(n)&&e<=t&&t<n}function Si(t,e,n,r){if(!Ai(e,n,r))throw new RangeError("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function ki(t){if(t<Hn)throw new Error("expected non-negative bigint, got "+t);return t===Hn?0:t.toString(2).length}var Yo=t=>(ot(t,"n"),(jo<<BigInt(t))-jo);function Ce(t,e={},n={},r="object"){Re(t,r),Re(e,"fields"),Re(n,"optFields");function i(o,a,c){let u=r==="object"?`param "${String(o)}"`:`"${r}.${String(o)}"`,l=t[o];if(!Object.hasOwn(t,o)&&(c?l!==void 0:a!=="function"))throw new TypeError(`${u} is invalid: expected own property`);if(c&&l===void 0)return;let h=typeof l;if(h!==a||l===null)throw new TypeError(`${u} is invalid: expected ${a}, got ${h}`)}let s=(o,a)=>Object.entries(o).forEach(([c,u])=>i(c,u,a));s(e,!1),s(n,!0)}var W=BigInt(0),P=BigInt(1),$e=BigInt(2),Zo=BigInt(3),xi=BigInt(4),Qo=BigInt(5),Ad=BigInt(7),ea=BigInt(8),Sd=BigInt(9),kd=BigInt(15),ta=BigInt(16),xd=BigInt("0x10000000000000000");function F(t,e){if(e<=W)throw new Error("mod: expected positive modulus, got "+e);let n=t%e;return n>=W?n:e+n}function Rd(t,e,n){if(n<=P)throw new Error("pow: expected modulus > 1, got "+n);if(typeof e!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof e);if(e<W)throw new Error("invalid exponent, negatives unsupported");if(e===W)return P;if(e===P)return t;let r=t%n;if(r<W&&(r+=n),e<xd){let a=P;for(;e>W;)e&P&&(a=a*r%n),r=r*r%n,e>>=P;return a}let i=[];for(;e>W;)i.push(Number(e&kd)),e>>=xi;let s=new Array(16);s[0]=P,s[1]=r;for(let a=2;a<16;a++)s[a]=s[a-1]*r%n;let o=s[i[i.length-1]];for(let a=i.length-2;a>=0;a--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let c=i[a];c!==0&&(o=o*s[c]%n)}return o}function se(t,e,n){if(n<=P)throw new Error("pow2: expected modulus > 1, got "+n);if(e<W)throw new Error("pow2: expected non-negative exponent, got "+e);let r=t;for(;e-- >W;)r*=r,r%=n;return r}function Jo(t,e){if(t===W)throw new Error("invert: expected non-zero number");if(e<=P)throw new Error("invert: expected modulus > 1, got "+e);let n=F(t,e),r=e,i=W,s=P;for(;n!==W;){let a=r/n,c=r-n*a,u=i-s*a;r=n,n=c,i=s,s=u}if(r!==P)throw new Error("invert: does not exist");return F(i,e)}function Ri(t,e,n){let r=t;if(!r.eql(r.sqr(e),n))throw new Error("Cannot find square root")}function Oi(t,e){if((t&P)===W)throw new Error(e+": expected odd modulus, got "+t)}function na(t,e){let n=t,r=(n.ORDER+P)/xi,i=n.pow(e,r);return Ri(n,i,e),i}function Od(t,e){let n=t,r=(n.ORDER-Qo)/ea,i=n.mul(e,$e),s=n.pow(i,r),o=n.mul(e,s),a=n.mul(n.mul(o,$e),s),c=n.mul(o,n.sub(a,n.ONE));return Ri(n,c,e),c}function Cd(t){let e=$n(t),n=ra(t),r=n(e,e.neg(e.ONE)),i=n(e,r),s=n(e,e.neg(r)),o=(t+Ad)/ta;return(a,c)=>{let u=a,l=u.pow(c,o),h=u.mul(l,r),d=u.mul(l,i),f=u.mul(l,s),w=u.eql(u.sqr(h),c),I=u.eql(u.sqr(d),c);l=u.cmov(l,h,w),h=u.cmov(f,d,I);let v=u.eql(u.sqr(h),c),R=u.cmov(l,h,v);return Ri(u,R,c),R}}function ra(t){if(t<Zo)throw new Error("sqrt is not defined for small field");Oi(t,"tonelliShanks");let e=t-P,n=0;for(;e%$e===W;)e/=$e,n++;let r=$e,i=$n(t);for(;Mt(i,r)===1;)if(r++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return na;let s=i.pow(r,e),o=(e+P)/$e;return function(c,u){let l=c;if(l.is0(u))return u;if(Mt(l,u)!==1)throw new Error("Cannot find square root");let h=n,d=l.mul(l.ONE,s),f=l.pow(u,e),w=l.pow(u,o);for(;!l.eql(f,l.ONE);){if(l.is0(f))throw new Error("Cannot find square root: probably non-prime P");let I=1,v=l.sqr(f);for(;!l.eql(v,l.ONE);)if(I++,v=l.sqr(v),I===h)throw new Error("Cannot find square root");let R=P<<BigInt(h-I-1),S=l.pow(d,R);h=I,d=l.sqr(S),f=l.mul(f,d),w=l.mul(w,S)}return w}}function Nd(t){return Oi(t,"Fp.sqrt"),t%xi===Zo?na:t%ea===Qo?Od:t%ta===Sd?Cd(t):ra(t)}var ia=(t,e)=>(F(t,e)&P)===P,Pd=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ct(t){if(Re(t,"field"),typeof t.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof t.ORDER);ot(t.BYTES,"BYTES"),ot(t.BITS,"BITS");for(let e of Pd)je(t[e],"field."+e);if(t.BYTES<1||t.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(t.ORDER<=P)throw new Error("invalid field: expected ORDER > 1, got "+t.ORDER);return t}function jn(t,e,n=!1){ct(t),Vn(e,"nums"),ye(n,"passZero");let r=t,i=new Array(e.length).fill(n?r.ZERO:void 0),s=e.reduce((a,c,u)=>r.is0(c)?a:(i[u]=a,r.mul(a,c)),r.ONE),o=r.inv(s);return e.reduceRight((a,c,u)=>r.is0(c)?a:(i[u]=r.mul(a,i[u]),r.mul(a,c)),o),i}function Mt(t,e){ct(t);let n=t;Oi(n.ORDER,"FpLegendre");let r=(n.ORDER-P)/$e,i=n.pow(e,r),s=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),a=n.eql(i,n.neg(n.ONE));if(!s&&!o&&!a)throw new Error("invalid Legendre symbol result");return s?1:o?0:-1}function Dd(t,e){if(e!==void 0&&_i(e),t<=W)throw new Error("invalid n length: expected positive n, got "+t);if(e!==void 0&&e<1)throw new Error("invalid n length: expected positive bit length, got "+e);let n=ki(t);if(e!==void 0&&e<n)throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${n})`);let r=e!==void 0?e:n,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}var Xo=new WeakMap,qn=class{constructor(e,n={}){m(this,"ORDER");m(this,"BITS");m(this,"BYTES");m(this,"isLE");m(this,"ZERO",W);m(this,"ONE",P);m(this,"_lengths");m(this,"_mod");if(e<=P)throw new Error("invalid field: expected ORDER > 1, got "+e);let r;this.isLE=!1,n!=null&&typeof n=="object"&&(typeof n.BITS=="number"&&(r=n.BITS),typeof n.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:n.sqrt,enumerable:!0}),typeof n.isLE=="boolean"&&(this.isLE=n.isLE),n.allowedLengths&&(this._lengths=Object.freeze(n.allowedLengths.slice())),typeof n.modFromBytes=="boolean"&&(this._mod=n.modFromBytes));let{nBitLength:i,nByteLength:s}=Dd(e,r);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=e,this.BITS=i,this.BYTES=s,Object.freeze(this)}create(e){return F(e,this.ORDER)}isValid(e){if(typeof e!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof e);return W<=e&&e<this.ORDER}is0(e){return e===W}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&P)===P}neg(e){return F(-e,this.ORDER)}eql(e,n){return e===n}sqr(e){return F(e*e,this.ORDER)}add(e,n){return F(e+n,this.ORDER)}sub(e,n){return F(e-n,this.ORDER)}mul(e,n){return F(e*n,this.ORDER)}pow(e,n){return Rd(e,n,this.ORDER)}div(e,n){return F(e*Jo(n,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,n){return e+n}subN(e,n){return e-n}mulN(e,n){return e*n}inv(e){return Jo(e,this.ORDER)}sqrt(e){let n=Xo.get(this);return n||Xo.set(this,n=Nd(this.ORDER)),n(this,e)}toBytes(e){return this.isLE?Ko(e,this.BYTES):Ti(e,this.BYTES)}fromBytes(e,n=!1){J(e);let{_lengths:r,BYTES:i,isLE:s,ORDER:o,_mod:a}=this;if(r){if(e.length<1||!r.includes(e.length)||e.length>i)throw new Error("Field.fromBytes: expected "+r+" bytes, got "+e.length);let u=new Uint8Array(i);u.set(e,s?0:u.length-e.length),e=u}if(e.length!==i)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+e.length);let c=s?at(e):Wn(e);if(a&&(c=F(c,o)),!n&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(e){return jn(this,e,!0)}cmov(e,n,r){return ye(r,"condition"),r?n:e}};function $n(t,e={}){return Object.freeze(qn.prototype),new qn(t,e)}var Pi=BigInt(0),Ut=BigInt(1),Ld=BigInt(4),Ci=16,sa=128,Md=5,oa=2**31;function Bt(t){let e=t;if(typeof e!="function")throw new TypeError('"Point" expected constructor, got type='+typeof t);je(e.fromAffine,"Point.fromAffine"),je(e.fromBytes,"Point.fromBytes"),je(e.fromHex,"Point.fromHex"),Re(e.BASE,"Point.BASE"),Re(e.ZERO,"Point.ZERO"),ct(e.Fp),ct(e.Fn)}function ca(t,e){Bt(t),ua(e,t);let n=jn(t.Fp,e.map(r=>r.Z));return e.map((r,i)=>t.fromAffine(r.toAffine(n[i])))}function Ud(t,e,n=1){if(!Number.isSafeInteger(t)||t<n||t>e)throw new Error("invalid window size, expected ["+n+".."+e+"], got W="+t)}function Bd(t,e){let n=t*(4*e+128);if(n>oa)throw new Error("invalid window size: table would need ~"+Math.ceil(n/2**20)+" MiB, max "+oa/2**20+" MiB")}function Fd(t,e){if(t!==void 0){je(t,"randomBytes");try{let n=t(e);if(!Dt(n)||n.length!==e)return}catch{return}return t}}function ua(t,e){Vn(t,"points"),t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function Hd(t,e,n){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!(n===void 0?e.isValid(r):Oe(r)&&r<n))throw new Error("invalid scalar at index "+i)})}var la=new WeakMap;function Ni(t){return la.get(t)||1}function Vd(t,e){let n=t.double(),r=[t];for(let i=1;i<e;i++)r.push(r[i-1].add(n));return r}function Wd(t,e){let n=2**e,r=n/2,i=BigInt(n-1),s=[];for(;t>Pi;){let o=0;t&Ut&&(o=Number(t&i),o>=r&&(o-=n),t-=BigInt(o)),s.push(o),t>>=Ut}return s}function qd(t,e,n){let r=2**e,i=r/2,s=BigInt(r-1),o=BigInt(e),a=[];for(let c=0;c<n;c++){let u=Number(t&s);t>>=o,u>i&&(u-=r,t+=Ut),a.push(u)}if(t!==Pi)throw new Error("invalid wnaf");return a}function jd(t,e,n){let r=0;for(let s of n)r=Math.max(r,s.length);let i=t;for(let s=r-1;s>=0;s--){s!==r-1&&(i=i.double());for(let o=0;o<n.length;o++){let a=n[o][s];if(a){let c=e[o][Math.abs(a)-1>>1];i=i.add(a<0?c.negate():c)}}}return i}var zn=class{constructor(e,n){m(this,"Point");m(this,"BASE");m(this,"ZERO");m(this,"randomBytes");m(this,"wnafPrecomputes",new WeakMap);m(this,"baseCanBeBlinded");m(this,"bits");Bt(e),this.randomBytes=Fd(n,Ci),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,n,r){let i=Math.ceil(r/n)+1,s=2**(n-1),o=[],a=e;for(let c=0;c<i;c++){let u=a;for(let l=0;l<s;l++)o.push(u),u=u.add(a);a=o[o.length-1].double()}return{W:n,bits:r,windows:i,comp:o}}wnafCachedCT(e,n){let{W:r,windows:i,comp:s}=e,o=2**(r-1),a=qd(n,r,i),c=this.ZERO,u=this.BASE;for(let l=0;l<i;l++){let h=a[l],d=l*o,f=Math.abs(h)-1,w=s[d];for(let v=1;v<o;v++)w=v===f?s[d+v]:w;let I=w.negate();h===0?u=u.add(s[d]):c=c.add(h<0?I:w)}return{p:c,f:u}}getWnafPrecomputes(e,n,r,i){let s=this.wnafPrecomputes.get(n),o=s?.find(a=>a.W===e&&a.bits===r);return o||(o=this.buildWnafTable(n,e,r),typeof i=="function"&&(o={...o,comp:i(o.comp)}),s||(s=[],this.wnafPrecomputes.set(n,s)),s.push(o)),o}assertPoint(e){if(!(e instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof e)}validateMulInput(e,n){if(this.assertPoint(e),!Ai(n,Ut,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(e,n,r,i){let s=Ni(e);return s===1?this.fixedWindowCT(e,n,r):this.wnafCachedCT(this.getWnafPrecomputes(s,e,r,i),n)}mulCT(e,n,r){return this.validateMulInput(e,n),this.runCT(e,n,this.bits,r)}mulCTBlinded(e,n,r){if(this.validateMulInput(e,n),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");let i=this.Point.Fn.BITS+sa,s=this.randomBytes(Ci);if(!Dt(s)||s.length!==Ci)throw new Error("randomBytes returned invalid byte array");s[0]=s[0]&63|128;let o=n+Wn(s)*this.Point.Fn.ORDER;return this.runCT(e,o,i,r)}fixedWindowCT(e,n,r){let i=Md,s=1<<i,o=Yo(i),a=new Array(s);a[0]=this.ZERO;for(let l=1;l<s;l++)a[l]=a[l-1].add(e);let c=Math.ceil(r/i),u=this.ZERO;for(let l=c-1;l>=0;l--){if(l!==c-1)for(let f=0;f<i;f++)u=u.double();let h=Number(n>>BigInt(l*i)&o),d=a[0];for(let f=1;f<s;f++)d=f===h?a[f]:d;u=u.add(d)}return{p:u,f:u}}shouldBlind(e,n){return this.randomBytes===void 0?!1:n===Ut?!0:e!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,n,r,i){return this.shouldBlind(e,r)?this.mulCTBlinded(e,n,i):this.mulCT(e,n,i)}mulUnsafe(e,n,r){if(this.assertPoint(e),!Oe(n))throw new Error("invalid scalar");let i=Ni(e);if(i===1||n>=this.Point.Fn.ORDER)return $d(this.Point,[e],[n],!0);let s=this.getWnafPrecomputes(i,e,this.bits,r);return this.wnafCachedCT(s,n).p}setWindowSize(e,n){this.assertPoint(e),Ud(n,this.bits);let r=Math.ceil((this.bits+sa)/n)+1;Bd(r*2**(n-1),this.Point.Fp.BYTES),la.set(e,n),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return Ni(e)!==1}};function $d(t,e,n,r=!1){if(Bt(t),ua(e,t),ye(r,"allowOversized"),Hd(n,t.Fn,r?t.Fn.ORDER**Ld:void 0),e.length!==n.length)throw new Error("arrays of points and scalars must have equal length");let i=e.map(o=>Vd(o,4)),s=n.map(o=>Wd(o,4));return jd(t.ZERO,i,s)}function aa(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return ct(e),e}else return $n(t,{isLE:n})}function da(t,e,n={},r){if(t!=="weierstrass"&&t!=="edwards")throw new Error('expected curve type "weierstrass" or "edwards"');if(r===void 0&&(r=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);Ce(n);for(let c of["p","n","h"]){let u=e[c];if(!(Oe(u)&&u!==Pi))throw new Error(`CURVE.${c} must be positive bigint`)}let i=aa(e.p,n.Fp,r),s=aa(e.n,n.Fn,r),a=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(let c of a)if(!i.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:i,Fn:s}}function ha(t,e){return function(r){let i=t(r);return{secretKey:i,publicKey:e(i)}}}var Gn=BigInt(0),Kn=BigInt(1),Yn=BigInt(2),zd=BigInt(4),fa=BigInt(8);function Gd(t,e,n,r){let i=t.sqr(n),s=t.sqr(r),o=t.add(t.mul(e.a,i),s),a=t.add(t.ONE,t.mul(e.d,t.mul(i,s)));return t.eql(o,a)}function pa(t,e={}){Ce(e,{},{},"extraOpts");let n=e,r=da("edwards",t,n,n.FpFnLE),{Fp:i,Fn:s}=r,o=r.CURVE,{h:a}=o;if(Mt(i,o.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(Mt(i,o.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");Ce(n,{},{uvRatio:"function",randomBytes:"function"});let c=n.randomBytes===void 0?vi:n.randomBytes,u=Yn<<BigInt(i.BYTES*8)-Kn;function l(N){if(!i.isOdd)throw new Error("Field does not have .isOdd()");return i.isOdd(N)}let h=n.uvRatio===void 0?(N,p)=>{try{return{isValid:!0,value:i.sqrt(i.div(N,p))}}catch{return{isValid:!1,value:Gn}}}:n.uvRatio;if(!Gd(i,o,o.Gx,o.Gy))throw new Error("bad curve params: generator point");let d=i.eql(o.a,i.neg(i.ONE))?N=>i.neg(N):i.eql(o.a,i.ONE)?N=>N:N=>i.mul(o.a,N);function f(N,p,_=!1){let E=_?Kn:Gn;return Si("coordinate "+N,p,E,u),p}function w(N){if(!(N instanceof I))throw new Error("EdwardsPoint expected")}let S=class S{constructor(p,_,E,D){m(this,"X");m(this,"Y");m(this,"Z");m(this,"T");this.X=f("x",p),this.Y=f("y",_),this.Z=f("z",E,!0),this.T=f("t",D),Object.freeze(this)}static CURVE(){return o}static fromAffine(p){if(p instanceof S)throw new Error("extended point not allowed");let{x:_,y:E}=p||{};return f("x",_),f("y",E),new S(_,E,i.ONE,i.mul(_,E))}static fromBytes(p,_=!1){let E=i.BYTES,{a:D,d:L}=o;p=Lt(J(p,E,"point")),ye(_,"zip215");let T=Lt(p),x=p[E-1];T[E-1]=x&-129;let U=at(T),H=_?u:i.ORDER;Si("point.y",U,Gn,H);let M=i.sqr(U),b=i.sub(M,i.ONE),A=i.sub(i.mulN(L,M),D),{isValid:k,value:C}=h(b,A);if(!k)throw new Error("bad point: invalid y coordinate");let q=l(C),B=(x&128)!==0;if(!_&&i.is0(C)&&B)throw new Error("bad point: x=0 and x_0=1");return B!==q&&(C=i.neg(C)),S.fromAffine({x:C,y:U})}static fromHex(p,_=!1){return S.fromBytes(zo(p),_)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(p=6,_=!0){return R.setWindowSize(this,p),_||this.multiply(Yn),this}assertValidity(){let p=this,{a:_,d:E}=o;if(p.is0())throw new Error("bad point: ZERO");let{X:D,Y:L,Z:T,T:x}=p,U=i.sqr(D),H=i.sqr(L),M=i.sqr(T),b=i.sqr(M),A=i.mul(U,_),k=i.mul(i.add(A,H),M),C=i.add(b,i.mul(E,i.mul(U,H)));if(!i.eql(k,C))throw new Error("bad point: equation left != right (1)");let q=i.mul(D,L),B=i.mul(T,x);if(!i.eql(q,B))throw new Error("bad point: equation left != right (2)")}equals(p){w(p);let{X:_,Y:E,Z:D}=this,{X:L,Y:T,Z:x}=p,U=i.mul(_,x),H=i.mul(L,D),M=i.mul(E,x),b=i.mul(T,D);return i.eql(U,H)&&i.eql(M,b)}is0(){return this.equals(S.ZERO)}negate(){return new S(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:p,Y:_,Z:E}=this,D=i.sqr(p),L=i.sqr(_),T=i.mul(i.sqr(E),Yn),x=d(D),U=i.addN(p,_),H=i.sub(i.subN(i.sqr(U),D),L),M=i.addN(x,L),b=i.subN(M,T),A=i.subN(x,L),k=i.mul(H,b),C=i.mul(M,A),q=i.mul(H,A),B=i.mul(b,M);return new S(k,C,B,q)}add(p){w(p);let{d:_}=o,{X:E,Y:D,Z:L,T}=this,{X:x,Y:U,Z:H,T:M}=p,b=i.mul(E,x),A=i.mul(D,U),k=i.mul(i.mulN(T,_),M),C=i.mul(L,H),q=i.sub(i.subN(i.mulN(i.addN(E,D),i.addN(x,U)),b),A),B=i.subN(C,k),he=i.addN(C,k),be=i.sub(A,d(b)),Ke=i.mul(q,B),Ye=i.mul(he,be),Pe=i.mul(q,be),Vt=i.mul(B,he);return new S(Ke,Ye,Vt,Pe)}subtract(p){return w(p),this.add(p.negate())}multiply(p){if(!s.isValidNot0(p))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");let{p:_,f:E}=R.mulSecret(this,p,a,v);return v([_,E])[0]}multiplyUnsafe(p){if(!s.isValid(p))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return p===Gn?S.ZERO:this.is0()||p===Kn?this:R.mulUnsafe(this,p,v)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return R.mulUnsafe(this,o.n).is0()}toAffine(p){let _=this,E=p;if(E!=null&&typeof E!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof E);let{X:D,Y:L,Z:T}=_,x=_.is0();E==null&&(E=x?i.create(fa):i.inv(T));let U=i.mul(D,E),H=i.mul(L,E),M=i.mul(T,E);if(x)return{x:i.ZERO,y:i.ONE};if(!i.eql(M,i.ONE))throw new Error("invZ was invalid");return{x:U,y:H}}clearCofactor(){return a===Kn?this:a===Yn?this.double():a===zd?this.double().double():a===fa?this.double().double().double():this.multiplyUnsafe(a)}toBytes(){let{x:p,y:_}=this.toAffine(),E=i.toBytes(_);return E[E.length-1]|=l(p)?128:0,E}toHex(){return $o(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};m(S,"BASE",new S(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy))),m(S,"ZERO",new S(i.ZERO,i.ONE,i.ONE,i.ZERO)),m(S,"Fp",i),m(S,"Fn",s);let I=S,v=N=>ca(I,N),R=new zn(I,c);return R.bits>=6&&I.BASE.precompute(6),Object.freeze(I.prototype),Object.freeze(I),I}function ma(t,e,n={}){if(Bt(t),typeof e!="function")throw new Error('"hash" function param is required');let r=e,i=n;Ce(i,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});let{prehash:s}=i,{BASE:o,Fp:a,Fn:c}=t,u=r.outputLen,l=2*a.BYTES;if(u!==void 0&&(ot(u,"hash.outputLen"),u!==l))throw new Error(`hash.outputLen must be ${l}, got ${u}`);let h=i.randomBytes===void 0?vi:i.randomBytes,d=i.toMontgomery,f=i.toMontgomerySecret,w=i.adjustScalarBytes===void 0?b=>b:i.adjustScalarBytes,I=i.domain===void 0?(b,A,k)=>{if(ye(k,"phflag"),A.length||k)throw new Error("Contexts/pre-hash are not supported");return b}:i.domain;function v(b){return c.create(at(b))}function R(b){let A=T.secretKey;J(b,T.secretKey,"secretKey");let k=J(r(b),2*A,"hashedSecretKey"),C=w(k.slice(0,A)),q=k.slice(A,2*A),B=v(C);return{head:C,prefix:q,scalar:B}}function S(b){let{head:A,prefix:k,scalar:C}=R(b),q=o.multiply(C),B=q.toBytes();return{head:A,prefix:k,scalar:C,point:q,pointBytes:B}}function N(b){return S(b).pointBytes}function p(b=Uint8Array.of(),...A){let k=Ii(...A);return v(r(I(k,J(b,void 0,"context"),!!s)))}function _(b,A,k={}){Ce(k,{},{},"options"),b=Lt(J(b,void 0,"message")),s&&(b=s(b));let{prefix:C,scalar:q,pointBytes:B}=S(A),he=p(k.context,C,b),be=o.multiply(he).toBytes(),Ke=p(k.context,be,B,b),Ye=c.create(he+Ke*q);if(!c.isValid(Ye))throw new Error("sign failed: invalid s");let Pe=Ii(be,c.toBytes(Ye));return J(Pe,T.signature,"result")}let E={zip215:i.zip215};function D(b,A,k,C=E){Ce(C);let{context:q}=C,B=C.zip215===void 0?!!E.zip215:C.zip215,he=T.signature;b=J(b,he,"signature"),A=J(A,void 0,"message"),k=J(k,T.publicKey,"publicKey"),B!==void 0&&ye(B,"zip215"),s&&(A=s(A));let be=he/2,Ke=b.subarray(0,be),Ye=at(b.subarray(be,he)),Pe,Vt,Gi;try{Pe=t.fromBytes(k,B),Vt=t.fromBytes(Ke,B),Gi=o.multiplyUnsafe(Ye)}catch{return!1}if(!B&&Pe.isSmallOrder())return!1;let Ua=p(q,Ke,k,A);return Vt.add(Pe.multiplyUnsafe(Ua)).subtract(Gi).clearCofactor().is0()}let L=a.BYTES,T={secretKey:L,publicKey:L,signature:2*L,seed:L};function x(b){return b=b===void 0?h(T.seed):b,J(b,T.seed,"seed")}function U(b){return Dt(b)&&b.length===T.secretKey}function H(b,A){try{return!!t.fromBytes(b,A===void 0?E.zip215:A)}catch{return!1}}let M={getExtendedPublicKey:S,randomSecretKey:x,isValidSecretKey:U,isValidPublicKey:H,toMontgomery(b){if(d===void 0)throw new Error("Montgomery conversion is not supported for this curve");return d(t.fromBytes(b))},toMontgomerySecret(b){if(f===void 0)throw new Error("Montgomery conversion is not supported for this curve");return f(b)}};return Object.freeze(T),Object.freeze(M),Object.freeze({keygen:ha(x,N),getPublicKey:N,sign:_,verify:D,utils:M,Point:t,lengths:T})}var Di=BigInt(1),ga=BigInt(2);var Kd=BigInt(5),Yd=BigInt(8),Li=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),Jd={p:Li,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Yd,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function Xd(t){let e=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),s=Li,a=t*t%s*t%s,c=se(a,ga,s)*a%s,u=se(c,Di,s)*t%s,l=se(u,Kd,s)*u%s,h=se(l,e,s)*l%s,d=se(h,n,s)*h%s,f=se(d,r,s)*d%s,w=se(f,i,s)*f%s,I=se(w,i,s)*f%s,v=se(I,e,s)*l%s;return{pow_p_5_8:se(v,ga,s)*t%s,b2:a}}function wa(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}var ya=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function Zd(t,e){let n=Li,r=F(e*e*e,n),i=F(r*r*e,n),s=Xd(t*i).pow_p_5_8,o=F(t*r*s,n),a=F(e*o*o,n),c=o,u=F(o*ya,n),l=a===t,h=a===F(-t,n),d=a===F(-t*ya,n);return l&&(o=c),(h||d)&&(o=u),ia(o,n)&&(o=F(-o,n)),{isValid:l||h,value:o}}var Mi=pa(Jd,{uvRatio:Zd}),ba=Mi.Fp;function Qd(t){let{y:e}=t;return ba.toBytes(ba.div(Di+e,Di-e))}function eh(t){let e=Mi.Fp.BYTES;return j(t,e),wa(Fn(t.subarray(0,e))).subarray(0,e)}function th(t){return ma(Mi,Fn,Object.assign({adjustScalarBytes:wa,toMontgomery:Qd,toMontgomerySecret:eh,zip215:!0},t))}var Ui=th({});var Jn=class{constructor(e,n){m(this,"oHash");m(this,"iHash");m(this,"blockLen");m(this,"outputLen");m(this,"canXOF",!1);m(this,"finished",!1);m(this,"destroyed",!1);if(Nt(e),j(n,void 0,"key"),this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("expected Hash instance");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=e.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),te(i)}update(e){return st(this),this.iHash.update(e),this}digestInto(e){st(this),Dn(e,this),this.finished=!0;let n=e.subarray(0,this.outputLen);this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a,canXOF:c}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.canXOF=c,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Bi=(()=>{let t=(e,n,r)=>new Jn(e,n).update(r).digest();return t.create=(e,n)=>new Jn(e,n),t})();var Ft=Uint8Array.of(0),nh=Uint8Array.of();function rh(t,e,n,r=32,i){Nt(t),de(r,"length"),j(e,void 0,"prk");let s=t.outputLen;if(e.length<s)throw new Error('"prk" must be at least HashLen octets');if(r>255*s)throw new Error("Length must be <= 255*HashLen");let o=Math.ceil(r/s);if(n===void 0?n=nh:j(n,void 0,"info"),!o)return i&&te(e),new Uint8Array;let a=i&&o===1?e:new Uint8Array(o*s),{iHash:c,oHash:u}=Bi.create(t,e),l=i?e:new Uint8Array(s),h=o>1?i?.iHash||t.create():void 0;for(let f=0;f<o-1;f++){Ft[0]=f+1;let w=c._cloneInto(h);f&&w.update(l),w.update(n).update(Ft).digestInto(l),u._cloneInto(h).update(l).digestInto(l),a.set(l,s*f)}if(Ft[0]=o,o>1&&c.update(l),c.update(n).update(Ft).digestInto(l),u.update(l).digestInto(l),a.set(l,s*(o-1)),c.destroy(),u.destroy(),h?.destroy(),l!==a&&te(l),te(Ft),r===a.length)return a;let d=a.slice(0,r);return te(a),d}var Ea=(t,e,n,r,i)=>{Nt(t),n===void 0&&(n=new Uint8Array(t.outputLen));let s=Bi.create(t,n).update(e);return rh(t,s.digest(),r,i,s)};function _a(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(n>=55296&&n<=56319){if(e+1>=t.length)return!1;let r=t.charCodeAt(++e);if(r<56320||r>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function ih(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);if(!_a(t))throw new TypeError("expected well-formed Unicode string");return t.normalize("NFKD")}function sh(t){let e=ih(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function oh(t){if(j(t),![16,20,24,28,32].includes(t.length))throw new RangeError("invalid entropy length")}var ah=t=>{let e=8-t.length/4;return Bn(t)[0]>>e<<e};function ch(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new TypeError("Wordlist: expected array of 2048 strings");t.forEach(e=>{if(typeof e!="string")throw new TypeError("wordlist: non-string element: "+e);if(!_a(e))throw new TypeError("wordlist: expected well-formed Unicode string")})}function uh(t,e){ch(e);let n=t.length/3*4,r=new Uint8Array(n+1),i=0,s=0,o=0;for(let c of t){let u=e.indexOf(c);if(u===-1)throw new Error("Unknown word: "+c);for(i=i<<11|u,s+=11;s>=8;)s-=8,r[o++]=i>>>s&255;i&=(1<<s)-1}s>0&&(r[o]=i<<8-s);let a=r.subarray(0,n);if(r[n]!==ah(a))throw new Error("Invalid checksum");return Uint8Array.from(a)}function Fi(t,e){let{words:n}=sh(t),r=uh(n,e);return oh(r),r}function Ia(t,e){try{Fi(t,e)}catch{return!1}return!0}var Hi=Object.freeze(`abandon
ability
able
about
above
absent
absorb
abstract
absurd
abuse
access
accident
account
accuse
achieve
acid
acoustic
acquire
across
act
action
actor
actress
actual
adapt
add
addict
address
adjust
admit
adult
advance
advice
aerobic
affair
afford
afraid
again
age
agent
agree
ahead
aim
air
airport
aisle
alarm
album
alcohol
alert
alien
all
alley
allow
almost
alone
alpha
already
also
alter
always
amateur
amazing
among
amount
amused
analyst
anchor
ancient
anger
angle
angry
animal
ankle
announce
annual
another
answer
antenna
antique
anxiety
any
apart
apology
appear
apple
approve
april
arch
arctic
area
arena
argue
arm
armed
armor
army
around
arrange
arrest
arrive
arrow
art
artefact
artist
artwork
ask
aspect
assault
asset
assist
assume
asthma
athlete
atom
attack
attend
attitude
attract
auction
audit
august
aunt
author
auto
autumn
average
avocado
avoid
awake
aware
away
awesome
awful
awkward
axis
baby
bachelor
bacon
badge
bag
balance
balcony
ball
bamboo
banana
banner
bar
barely
bargain
barrel
base
basic
basket
battle
beach
bean
beauty
because
become
beef
before
begin
behave
behind
believe
below
belt
bench
benefit
best
betray
better
between
beyond
bicycle
bid
bike
bind
biology
bird
birth
bitter
black
blade
blame
blanket
blast
bleak
bless
blind
blood
blossom
blouse
blue
blur
blush
board
boat
body
boil
bomb
bone
bonus
book
boost
border
boring
borrow
boss
bottom
bounce
box
boy
bracket
brain
brand
brass
brave
bread
breeze
brick
bridge
brief
bright
bring
brisk
broccoli
broken
bronze
broom
brother
brown
brush
bubble
buddy
budget
buffalo
build
bulb
bulk
bullet
bundle
bunker
burden
burger
burst
bus
business
busy
butter
buyer
buzz
cabbage
cabin
cable
cactus
cage
cake
call
calm
camera
camp
can
canal
cancel
candy
cannon
canoe
canvas
canyon
capable
capital
captain
car
carbon
card
cargo
carpet
carry
cart
case
cash
casino
castle
casual
cat
catalog
catch
category
cattle
caught
cause
caution
cave
ceiling
celery
cement
census
century
cereal
certain
chair
chalk
champion
change
chaos
chapter
charge
chase
chat
cheap
check
cheese
chef
cherry
chest
chicken
chief
child
chimney
choice
choose
chronic
chuckle
chunk
churn
cigar
cinnamon
circle
citizen
city
civil
claim
clap
clarify
claw
clay
clean
clerk
clever
click
client
cliff
climb
clinic
clip
clock
clog
close
cloth
cloud
clown
club
clump
cluster
clutch
coach
coast
coconut
code
coffee
coil
coin
collect
color
column
combine
come
comfort
comic
common
company
concert
conduct
confirm
congress
connect
consider
control
convince
cook
cool
copper
copy
coral
core
corn
correct
cost
cotton
couch
country
couple
course
cousin
cover
coyote
crack
cradle
craft
cram
crane
crash
crater
crawl
crazy
cream
credit
creek
crew
cricket
crime
crisp
critic
crop
cross
crouch
crowd
crucial
cruel
cruise
crumble
crunch
crush
cry
crystal
cube
culture
cup
cupboard
curious
current
curtain
curve
cushion
custom
cute
cycle
dad
damage
damp
dance
danger
daring
dash
daughter
dawn
day
deal
debate
debris
decade
december
decide
decline
decorate
decrease
deer
defense
define
defy
degree
delay
deliver
demand
demise
denial
dentist
deny
depart
depend
deposit
depth
deputy
derive
describe
desert
design
desk
despair
destroy
detail
detect
develop
device
devote
diagram
dial
diamond
diary
dice
diesel
diet
differ
digital
dignity
dilemma
dinner
dinosaur
direct
dirt
disagree
discover
disease
dish
dismiss
disorder
display
distance
divert
divide
divorce
dizzy
doctor
document
dog
doll
dolphin
domain
donate
donkey
donor
door
dose
double
dove
draft
dragon
drama
drastic
draw
dream
dress
drift
drill
drink
drip
drive
drop
drum
dry
duck
dumb
dune
during
dust
dutch
duty
dwarf
dynamic
eager
eagle
early
earn
earth
easily
east
easy
echo
ecology
economy
edge
edit
educate
effort
egg
eight
either
elbow
elder
electric
elegant
element
elephant
elevator
elite
else
embark
embody
embrace
emerge
emotion
employ
empower
empty
enable
enact
end
endless
endorse
enemy
energy
enforce
engage
engine
enhance
enjoy
enlist
enough
enrich
enroll
ensure
enter
entire
entry
envelope
episode
equal
equip
era
erase
erode
erosion
error
erupt
escape
essay
essence
estate
eternal
ethics
evidence
evil
evoke
evolve
exact
example
excess
exchange
excite
exclude
excuse
execute
exercise
exhaust
exhibit
exile
exist
exit
exotic
expand
expect
expire
explain
expose
express
extend
extra
eye
eyebrow
fabric
face
faculty
fade
faint
faith
fall
false
fame
family
famous
fan
fancy
fantasy
farm
fashion
fat
fatal
father
fatigue
fault
favorite
feature
february
federal
fee
feed
feel
female
fence
festival
fetch
fever
few
fiber
fiction
field
figure
file
film
filter
final
find
fine
finger
finish
fire
firm
first
fiscal
fish
fit
fitness
fix
flag
flame
flash
flat
flavor
flee
flight
flip
float
flock
floor
flower
fluid
flush
fly
foam
focus
fog
foil
fold
follow
food
foot
force
forest
forget
fork
fortune
forum
forward
fossil
foster
found
fox
fragile
frame
frequent
fresh
friend
fringe
frog
front
frost
frown
frozen
fruit
fuel
fun
funny
furnace
fury
future
gadget
gain
galaxy
gallery
game
gap
garage
garbage
garden
garlic
garment
gas
gasp
gate
gather
gauge
gaze
general
genius
genre
gentle
genuine
gesture
ghost
giant
gift
giggle
ginger
giraffe
girl
give
glad
glance
glare
glass
glide
glimpse
globe
gloom
glory
glove
glow
glue
goat
goddess
gold
good
goose
gorilla
gospel
gossip
govern
gown
grab
grace
grain
grant
grape
grass
gravity
great
green
grid
grief
grit
grocery
group
grow
grunt
guard
guess
guide
guilt
guitar
gun
gym
habit
hair
half
hammer
hamster
hand
happy
harbor
hard
harsh
harvest
hat
have
hawk
hazard
head
health
heart
heavy
hedgehog
height
hello
helmet
help
hen
hero
hidden
high
hill
hint
hip
hire
history
hobby
hockey
hold
hole
holiday
hollow
home
honey
hood
hope
horn
horror
horse
hospital
host
hotel
hour
hover
hub
huge
human
humble
humor
hundred
hungry
hunt
hurdle
hurry
hurt
husband
hybrid
ice
icon
idea
identify
idle
ignore
ill
illegal
illness
image
imitate
immense
immune
impact
impose
improve
impulse
inch
include
income
increase
index
indicate
indoor
industry
infant
inflict
inform
inhale
inherit
initial
inject
injury
inmate
inner
innocent
input
inquiry
insane
insect
inside
inspire
install
intact
interest
into
invest
invite
involve
iron
island
isolate
issue
item
ivory
jacket
jaguar
jar
jazz
jealous
jeans
jelly
jewel
job
join
joke
journey
joy
judge
juice
jump
jungle
junior
junk
just
kangaroo
keen
keep
ketchup
key
kick
kid
kidney
kind
kingdom
kiss
kit
kitchen
kite
kitten
kiwi
knee
knife
knock
know
lab
label
labor
ladder
lady
lake
lamp
language
laptop
large
later
latin
laugh
laundry
lava
law
lawn
lawsuit
layer
lazy
leader
leaf
learn
leave
lecture
left
leg
legal
legend
leisure
lemon
lend
length
lens
leopard
lesson
letter
level
liar
liberty
library
license
life
lift
light
like
limb
limit
link
lion
liquid
list
little
live
lizard
load
loan
lobster
local
lock
logic
lonely
long
loop
lottery
loud
lounge
love
loyal
lucky
luggage
lumber
lunar
lunch
luxury
lyrics
machine
mad
magic
magnet
maid
mail
main
major
make
mammal
man
manage
mandate
mango
mansion
manual
maple
marble
march
margin
marine
market
marriage
mask
mass
master
match
material
math
matrix
matter
maximum
maze
meadow
mean
measure
meat
mechanic
medal
media
melody
melt
member
memory
mention
menu
mercy
merge
merit
merry
mesh
message
metal
method
middle
midnight
milk
million
mimic
mind
minimum
minor
minute
miracle
mirror
misery
miss
mistake
mix
mixed
mixture
mobile
model
modify
mom
moment
monitor
monkey
monster
month
moon
moral
more
morning
mosquito
mother
motion
motor
mountain
mouse
move
movie
much
muffin
mule
multiply
muscle
museum
mushroom
music
must
mutual
myself
mystery
myth
naive
name
napkin
narrow
nasty
nation
nature
near
neck
need
negative
neglect
neither
nephew
nerve
nest
net
network
neutral
never
news
next
nice
night
noble
noise
nominee
noodle
normal
north
nose
notable
note
nothing
notice
novel
now
nuclear
number
nurse
nut
oak
obey
object
oblige
obscure
observe
obtain
obvious
occur
ocean
october
odor
off
offer
office
often
oil
okay
old
olive
olympic
omit
once
one
onion
online
only
open
opera
opinion
oppose
option
orange
orbit
orchard
order
ordinary
organ
orient
original
orphan
ostrich
other
outdoor
outer
output
outside
oval
oven
over
own
owner
oxygen
oyster
ozone
pact
paddle
page
pair
palace
palm
panda
panel
panic
panther
paper
parade
parent
park
parrot
party
pass
patch
path
patient
patrol
pattern
pause
pave
payment
peace
peanut
pear
peasant
pelican
pen
penalty
pencil
people
pepper
perfect
permit
person
pet
phone
photo
phrase
physical
piano
picnic
picture
piece
pig
pigeon
pill
pilot
pink
pioneer
pipe
pistol
pitch
pizza
place
planet
plastic
plate
play
please
pledge
pluck
plug
plunge
poem
poet
point
polar
pole
police
pond
pony
pool
popular
portion
position
possible
post
potato
pottery
poverty
powder
power
practice
praise
predict
prefer
prepare
present
pretty
prevent
price
pride
primary
print
priority
prison
private
prize
problem
process
produce
profit
program
project
promote
proof
property
prosper
protect
proud
provide
public
pudding
pull
pulp
pulse
pumpkin
punch
pupil
puppy
purchase
purity
purpose
purse
push
put
puzzle
pyramid
quality
quantum
quarter
question
quick
quit
quiz
quote
rabbit
raccoon
race
rack
radar
radio
rail
rain
raise
rally
ramp
ranch
random
range
rapid
rare
rate
rather
raven
raw
razor
ready
real
reason
rebel
rebuild
recall
receive
recipe
record
recycle
reduce
reflect
reform
refuse
region
regret
regular
reject
relax
release
relief
rely
remain
remember
remind
remove
render
renew
rent
reopen
repair
repeat
replace
report
require
rescue
resemble
resist
resource
response
result
retire
retreat
return
reunion
reveal
review
reward
rhythm
rib
ribbon
rice
rich
ride
ridge
rifle
right
rigid
ring
riot
ripple
risk
ritual
rival
river
road
roast
robot
robust
rocket
romance
roof
rookie
room
rose
rotate
rough
round
route
royal
rubber
rude
rug
rule
run
runway
rural
sad
saddle
sadness
safe
sail
salad
salmon
salon
salt
salute
same
sample
sand
satisfy
satoshi
sauce
sausage
save
say
scale
scan
scare
scatter
scene
scheme
school
science
scissors
scorpion
scout
scrap
screen
script
scrub
sea
search
season
seat
second
secret
section
security
seed
seek
segment
select
sell
seminar
senior
sense
sentence
series
service
session
settle
setup
seven
shadow
shaft
shallow
share
shed
shell
sheriff
shield
shift
shine
ship
shiver
shock
shoe
shoot
shop
short
shoulder
shove
shrimp
shrug
shuffle
shy
sibling
sick
side
siege
sight
sign
silent
silk
silly
silver
similar
simple
since
sing
siren
sister
situate
six
size
skate
sketch
ski
skill
skin
skirt
skull
slab
slam
sleep
slender
slice
slide
slight
slim
slogan
slot
slow
slush
small
smart
smile
smoke
smooth
snack
snake
snap
sniff
snow
soap
soccer
social
sock
soda
soft
solar
soldier
solid
solution
solve
someone
song
soon
sorry
sort
soul
sound
soup
source
south
space
spare
spatial
spawn
speak
special
speed
spell
spend
sphere
spice
spider
spike
spin
spirit
split
spoil
sponsor
spoon
sport
spot
spray
spread
spring
spy
square
squeeze
squirrel
stable
stadium
staff
stage
stairs
stamp
stand
start
state
stay
steak
steel
stem
step
stereo
stick
still
sting
stock
stomach
stone
stool
story
stove
strategy
street
strike
strong
struggle
student
stuff
stumble
style
subject
submit
subway
success
such
sudden
suffer
sugar
suggest
suit
summer
sun
sunny
sunset
super
supply
supreme
sure
surface
surge
surprise
surround
survey
suspect
sustain
swallow
swamp
swap
swarm
swear
sweet
swift
swim
swing
switch
sword
symbol
symptom
syrup
system
table
tackle
tag
tail
talent
talk
tank
tape
target
task
taste
tattoo
taxi
teach
team
tell
ten
tenant
tennis
tent
term
test
text
thank
that
theme
then
theory
there
they
thing
this
thought
three
thrive
throw
thumb
thunder
ticket
tide
tiger
tilt
timber
time
tiny
tip
tired
tissue
title
toast
tobacco
today
toddler
toe
together
toilet
token
tomato
tomorrow
tone
tongue
tonight
tool
tooth
top
topic
topple
torch
tornado
tortoise
toss
total
tourist
toward
tower
town
toy
track
trade
traffic
tragic
train
transfer
trap
trash
travel
tray
treat
tree
trend
trial
tribe
trick
trigger
trim
trip
trophy
trouble
truck
true
truly
trumpet
trust
truth
try
tube
tuition
tumble
tuna
tunnel
turkey
turn
turtle
twelve
twenty
twice
twin
twist
two
type
typical
ugly
umbrella
unable
unaware
uncle
uncover
under
undo
unfair
unfold
unhappy
uniform
unique
unit
universe
unknown
unlock
until
unusual
unveil
update
upgrade
uphold
upon
upper
upset
urban
urge
usage
use
used
useful
useless
usual
utility
vacant
vacuum
vague
valid
valley
valve
van
vanish
vapor
various
vast
vault
vehicle
velvet
vendor
venture
venue
verb
verify
version
very
vessel
veteran
viable
vibrant
vicious
victory
video
view
village
vintage
violin
virtual
virus
visa
visit
visual
vital
vivid
vocal
voice
void
volcano
volume
vote
voyage
wage
wagon
wait
walk
wall
walnut
want
warfare
warm
warrior
wash
wasp
waste
water
wave
way
wealth
weapon
wear
weasel
weather
web
wedding
weekend
weird
welcome
west
wet
whale
what
wheat
wheel
when
where
whip
whisper
wide
width
wife
wild
will
win
window
wine
wing
wink
winner
winter
wire
wisdom
wise
wish
witness
wolf
woman
wonder
wood
wool
word
work
world
worry
worth
wrap
wreck
wrestle
wrist
write
wrong
yard
year
yellow
you
young
youth
zebra
zero
zone
zoo`.split(`
`));var cm=Uint8Array.from([115,101,101,100,109,101,45,118,111,105,99,101,45,110,111,116,101,45,118,49]),Vi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xn=Uint8Array.from(Vi,t=>t.charCodeAt(0)),um=(()=>{let t=new Uint8Array(128);for(let e=0;e<Vi.length;e++)t[Vi.charCodeAt(e)]=e;return t})(),va=61,Ta=8192;function Wi(t){let e=new Uint8Array(Math.ceil(t.length/3)*4),n=0;for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length?t[i+1]:0,a=i+2<t.length?t[i+2]:0,c=s<<16|o<<8|a;e[n++]=Xn[c>>18&63],e[n++]=Xn[c>>12&63],e[n++]=i+1<t.length?Xn[c>>6&63]:va,e[n++]=i+2<t.length?Xn[c&63]:va}let r=[];for(let i=0;i<e.length;i+=Ta)r.push(String.fromCharCode.apply(null,e.subarray(i,i+Ta)));return r.join("")}var lh=32,Zn=t=>Uint8Array.from(t,e=>e.charCodeAt(0)),dh=Zn("seedme-login-v1"),wm=Zn("seedme-body-v1"),Em=Zn("seedme-wrap-v1");function Aa(t){let e=t.toLowerCase().replace(/\d+[.)]/g," ").trim().split(/\s+/).join(" ");return e.split(" ").length!==12||!Ia(e,Hi)?null:Fi(e,Hi)}function hh(t){let e=Ea(Bn,t,new Uint8Array(0),dh,lh);return{priv:e,pub:Ui.getPublicKey(e)}}function fh(t,e){return`seedme-login-v1|${t}|${e}`}function Sa(t,e){let{priv:n,pub:r}=hh(t),i=Wi(r),s=Ui.sign(Zn(fh(i,e)),n);return{pub:i,at:e,sig:Wi(s)}}var xa=vr({apiKey:"AIzaSyCH3Km8eDjH1PMjXcMaxsWL2YljDTN84Ck",authDomain:"njm-health.firebaseapp.com",projectId:"njm-health",appId:"1:786773823198:web:b4e6ea51c456f3a778fc4f"}),Qn=ii(xa),Ra=So(xa,"us-central1"),ph=ui(Ra,"keyLogin"),Ht=ui(Ra,"review"),g=t=>document.getElementById(t),ut=t=>{for(let e of["signin","loading","deck","done","denied"])g(e).hidden=e!==t},K=t=>{let e=g("toast");e.textContent=t,e.hidden=!1,window.clearTimeout(Number(e.dataset.timer)),e.dataset.timer=String(window.setTimeout(()=>e.hidden=!0,2600))},dt=t=>{let e=t?.code??"";return e.endsWith("permission-denied")?"This page is for SeedMe beta testers.":e.endsWith("not-found")?"No SeedMe account has these words.":e.endsWith("unavailable")||e.endsWith("internal")?"No connection. Try again.":t?.message||"Something went wrong. Try again."},Q=null,Ge=null;g("signin-form").addEventListener("submit",async t=>{t.preventDefault();let e=g("words"),n=Aa(e.value);if(!n){K("These are not 12 SeedMe words. Check each word and its order.");return}let r=g("signin-go");r.disabled=!0;try{let{data:i}=await ph(Sa(n,Date.now()));n.fill(0),e.value="",await Qr(Qn,xn),await Zr(Qn,i.token)}catch(i){K(dt(i))}finally{r.disabled=!1}});g("signout").addEventListener("click",()=>ti(Qn));var Oa=()=>g("pic-box").classList.remove("wait");g("picture").addEventListener("load",Oa);g("picture").addEventListener("error",Oa);ei(Qn,t=>{if(g("signout").hidden=!t,!t)return Ge=null,g("undo").hidden=!0,ut("signin");qi()});async function qi(){ut("loading");try{ji((await Ht({action:"next",skip:[...lt]})).data)}catch(t){if(t?.code?.endsWith("permission-denied"))return ut("denied");K(dt(t)),ut("done")}}function ji(t){Q=t.card;let e=t.counts;if(g("counts").textContent=`${e.waiting} waiting for you \xB7 ${e.settled} settled${e.rethink?` \xB7 ${e.rethink} being rethought`:""}`,!Q)return ut("done");let n=Q,r=g("picture"),i=g("pic-box");i.hidden=!n.picture,n.picture&&r.getAttribute("src")!==n.picture?(i.classList.add("wait"),r.src=n.picture):n.picture||r.removeAttribute("src"),g("sugg-box").hidden=!!n.picture,g("more").hidden=!!n.picture,ka(g("question"),n.question,n.picture?[]:n.names??[]),ka(g("suggestion"),n.suggestion.text,n.names??[]),g("will").textContent=n.picture?"":n.suggestion.will??"Will: working out what this does\u2026",g("will").hidden=!!n.picture,g("sugg-why").textContent=n.suggestion.why?`Changed because: ${n.suggestion.why}`:"",g("sugg-why").hidden=!n.suggestion.why,yh(n.picture?null:mh(n)??gh(n)),g("approvals").textContent=n.approvals>0?`${n.approvals} of ${n.needed} approvals so far`:`${n.needed} approvals settle it`;let s=[],o=n.subject;o?.local&&s.push(`Original name: ${o.local}`),o?.parent&&s.push(`Family: ${o.parent}`),o?.was?.length&&s.push(`Logged as: ${o.was.map(u=>`\u201C${u}\u201D`).join(", ")}`),o?.people&&o.people>1&&s.push(`Logged by ${o.people} people`),o?.note&&s.push(o.note),s.push(...n.context);let a=g("facts");a.replaceChildren(...s.map(u=>Object.assign(document.createElement("li"),{textContent:u}))),a.hidden=s.length===0,g("before").replaceChildren(...n.before.map(u=>{let l=document.createElement("li");return l.textContent=`\u201C${u.text}\u201D${u.why.length?` Turned down: ${u.why.join(" / ")}`:""}`,l})),g("before-box").hidden=n.before.length===0,g("more").open=!1,$i(),ut("deck"),window.scrollTo({top:0})}function mh(t){let e=t.subject?.name;return!e||!t.kinds?.length?null:{parent:e,kids:t.kinds,fresh:"parent"}}function gh(t){let e=t.suggestion.text.trim();if(/^split\b/i.test(e))return null;let n=t.subject?.name??"",r=a=>!a||/^it$/i.test(a)?n:a.trim(),i=a=>a.replace(/\s*\(in the atlas\)\s*$/i,"").trim(),s=(a,c)=>({parent:i(a),kids:[c],fresh:"kids"}),o=e.match(/^Add (.+?) as a cooked form of (.+?)(?:,|\.|$)/i);return o||(o=e.match(/^(?:Add|Put|Approve as) (.+?),? under ([^.,;]+)/i),o)?s(o[2],r(o[1])):(o=e.match(/,\s*under ([^.,;]+)\.?$/i),o&&n?s(o[1],n):null)}function yh(t){let e=g("tree");if(e.hidden=!t,!t)return;(t.fresh==="parent"?g("question"):g("suggestion")).after(e);let n=g("tree-parent");n.textContent=t.parent,n.className=`node ${t.fresh==="parent"?"new":"old"}`,g("tree-kids").replaceChildren(...t.kids.map(r=>Object.assign(document.createElement("span"),{className:`node ${t.fresh==="kids"?"new":"old"}`,textContent:r})))}function ka(t,e,n){t.replaceChildren();let r=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=n.filter(Boolean);if(!i.length)return void(t.textContent=e);let s=new RegExp(`(^|[^\\p{L}])(${i.map(r).join("|")})(?=$|[^\\p{L}])`,"giu"),o=0;for(let a of e.matchAll(s)){let c=a.index+a[1].length;c>o&&t.append(e.slice(o,c)),t.append(Object.assign(document.createElement("mark"),{className:"name",textContent:a[2]})),o=c+a[2].length}t.append(e.slice(o))}async function Ca(t,e,n){if(!Q)return;let r=Q;Ne(!0);try{let{data:i}=await Ht({action:"judge",card:Q.id,v:Q.suggestion.v,verdict:t,why:e,via:n,skip:[...lt]});Ge=i.undo?{card:r,token:i.undo}:null,g("undo").hidden=!Ge,K(t==="approve"?i.status==="settled"?"Settled.":"Approved.":"Sent back. A new suggestion follows."),await wh(t),ji(i),Eh()}catch(i){K(dt(i)),qi()}finally{Ne(!1)}}async function bh(t,e){if(Q){Ne(!0);try{await Ht({action:"note",card:Q.id,v:Q.suggestion.v,text:t,via:e}),K("Feedback sent."),$i()}catch(n){K(dt(n))}finally{Ne(!1)}}}var Na=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Pa=()=>document.querySelector("#deck .card");async function wh(t){let e=Pa();if(!e||Na())return;let n=t==="approve"?1:-1,r=t==="approve"?"var(--yes)":"var(--no)";e.style.borderColor=r,await e.animate([{transform:"none",opacity:1},{transform:`translateX(${n*24}px) rotate(${n*1.5}deg)`,opacity:1,offset:.35},{transform:`translateX(${n*110}%) rotate(${n*10}deg)`,opacity:0}],{duration:380,easing:"cubic-bezier(0.5, 0, 0.75, 0)"}).finished.catch(()=>{}),e.style.borderColor=""}function Eh(){let t=Pa();!t||Na()||g("deck").hidden||t.animate([{transform:"translateY(24px) scale(0.97)",opacity:0},{transform:"none",opacity:1}],{duration:300,easing:"cubic-bezier(0.2, 0.8, 0.2, 1)"})}function Ne(t){for(let e of["approve","reject","feedback","skip","undo","why-send","record"])g(e).disabled=t}g("approve").addEventListener("click",()=>Ca("approve"));g("reject").addEventListener("click",()=>Ca("reject"));g("feedback").addEventListener("click",()=>{g("why-box").hidden=!1,g("verdict-row").hidden=!0,g("why").focus()});g("why-cancel").addEventListener("click",()=>$i());g("why-send").addEventListener("click",()=>{let t=g("why").value.trim();if(!t)return K("Say or type your feedback.");bh(t,g("why").dataset.via==="voice"?"voice":"text")});var lt=new Set;g("skip").addEventListener("click",()=>{Q&&(Ge={card:Q,skipped:!0},g("undo").hidden=!1,lt.add(Q.id)),qi()});g("undo").addEventListener("click",async()=>{if(!Ge)return;let t=Ge;Ne(!0);try{lt.delete(t.card.id);let{data:e}=await Ht(t.skipped?{action:"next",skip:[...lt]}:{action:"undo",token:t.token,skip:[...lt]});Ge=null,g("undo").hidden=!0,ji({...e,card:t.card}),K("Undone.")}catch(e){K(dt(e))}finally{Ne(!1)}});function $i(){zi(!1),g("why-box").hidden=!0,g("verdict-row").hidden=!1;let t=g("why");t.value="",delete t.dataset.via}var _h=6e4,ze=null,er=[],Da=0,La=0;g("record").addEventListener("click",async()=>{if(ze)return zi(!0);let t;try{t=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{return K("The microphone is off for this page. Type the reason instead.")}let e=["audio/mp4","audio/webm;codecs=opus","audio/webm"].find(n=>MediaRecorder.isTypeSupported(n))||"";ze=new MediaRecorder(t,e?{mimeType:e}:void 0),er=[],ze.ondataavailable=n=>n.data.size&&er.push(n.data),ze.onstop=()=>t.getTracks().forEach(n=>n.stop()),ze.start(),La=Date.now(),g("record").textContent="Stop",g("record").classList.add("live"),Ma()});function Ma(){let t=Math.max(0,_h-(Date.now()-La));if(g("rec-clock").textContent=`0:${String(Math.ceil(t/1e3)).padStart(2,"0")} left`,g("rec-clock").hidden=!1,t<=0)return zi(!0);Da=window.setTimeout(Ma,250)}function zi(t){window.clearTimeout(Da),g("rec-clock").hidden=!0,g("record").textContent="Record",g("record").classList.remove("live");let e=ze;if(ze=null,!!e){if(!t){e.onstop=()=>e.stream.getTracks().forEach(n=>n.stop()),e.stop();return}e.addEventListener("stop",async()=>{let n=new Blob(er,{type:e.mimeType||"audio/webm"});if(er=[],n.size<1e3)return K("Nothing was recorded.");Ne(!0),K("Writing down what you said\u2026");try{let r=await Ih(n),{data:i}=await Ht({action:"transcribe",audio:r,mime:n.type}),s=i.text;if(!s)return K("No words were heard. Try again or type.");let o=g("why");o.value=o.value.trim()?`${o.value.trim()} ${s}`:s,o.dataset.via="voice"}catch(r){K(dt(r))}finally{Ne(!1)}},{once:!0}),e.stop()}}function Ih(t){return new Promise((e,n)=>{let r=new FileReader;r.onload=()=>e(String(r.result).split(",")[1]||""),r.onerror=()=>n(r.error),r.readAsDataURL(t)})}})();
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm/index-568d0403.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/functions/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/functions/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@noble/curves/utils.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/modular.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/curve.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/abstract/edwards.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/ed25519.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/bip39/index.js:
  (*! scure-bip39 - MIT License (c) 2022 Patricio Palladino, Paul Miller (paulmillr.com) *)
*/
