"use strict";(()=>{var Ua=Object.defineProperty;var Ba=(t,e,n)=>e in t?Ua(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var m=(t,e,n)=>Ba(t,typeof e!="symbol"?e+"":e,n);var $i=()=>{};var Gi=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fa=function(t){let e=[],n=0,r=0;for(;n<t.length;){let i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){let s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{let s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Ki={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(s&3)<<4|a>>4,d=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(d=64)),r.push(n[l],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gi(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fa(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){let s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;let u=i<t.length?n[t.charAt(i)]:64;++i;let h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new er;let d=s<<2|a>>4;if(r.push(d),u!==64){let f=a<<4&240|u>>2;if(r.push(f),h!==64){let b=u<<6&192|h;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},er=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},Ha=function(t){let e=Gi(t);return Ki.encodeByteArray(e,!0)},nr=function(t){return Ha(t).replace(/\./g,"")},Ht=function(t){try{return Ki.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Va(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var Wa=()=>Va().__FIREBASE_DEFAULTS__,ja=()=>{if(typeof process>"u"||typeof process.env>"u")return;let t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qa=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let e=t&&Ht(t[1]);return e&&JSON.parse(e)},rr=()=>{try{return $i()||Wa()||ja()||qa()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ir=t=>rr()?.emulatorHosts?.[t],Yi=t=>{let e=ir(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},sr=()=>rr()?.config,or=t=>rr()?.[`_${t}`];var Ft=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ji(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function Xi(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Zi(){let t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qi(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function es(){let t=$();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ts(){try{return typeof indexedDB=="object"}catch{return!1}}function ns(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(n){e(n)}})}var $a="FirebaseError",X=class t extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$a,Object.setPrototypeOf(this,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,he.prototype.create)}},he=class{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){let r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?za(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new X(i,a,r)}};function za(t,e){return t.replace(Ga,(n,r)=>{let i=e[r];return i!=null?String(i):`<${r}?>`})}var Ga=/\{\$([^}]+)}/g;function rs(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function we(t,e){if(t===e)return!0;let n=Object.keys(t),r=Object.keys(e);for(let i of n){if(!r.includes(i))return!1;let s=t[i],o=e[i];if(zi(s)&&zi(o)){if(!we(s,o))return!1}else if(s!==o)return!1}for(let i of r)if(!n.includes(i))return!1;return!0}function zi(t){return t!==null&&typeof t=="object"}function Ke(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ye(t){let e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){let[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Je(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function is(t,e){let n=new tr(t,e);return n.subscribe.bind(n)}var tr=class{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ka(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qn),i.error===void 0&&(i.error=Qn),i.complete===void 0&&(i.complete=Qn);let s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function Ka(t,e){if(typeof t!="object"||t===null)return!1;for(let n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qn(){}var Th=4*60*60*1e3;function G(t){return t&&t._delegate?t._delegate:t}function Pe(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Vt(t){return(await fetch(t,{credentials:"include"})).ok}var Q=class{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};var De="[DEFAULT]";var ar=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){let n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){let r=new Ft;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){let n=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ja(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(let[n,r]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(n);try{let s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){let e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){let{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(let[s,o]of this.instancesDeferred.entries()){let a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){let r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){let r=this.onInitCallbacks.get(n);if(r)for(let i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ya(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ya(t){return t===De?void 0:t}function Ja(t){return t.instantiationMode==="EAGER"}var Wt=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){let n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);let n=new ar(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};var Xa=[],O;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(O||(O={}));var Za={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},Qa=O.INFO,ec={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},tc=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),i=ec[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)},Xe=class{constructor(e){this.name=e,this._logLevel=Qa,this._logHandler=tc,this._userLogHandler=null,Xa.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Za[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}};var nc=(t,e)=>e.some(n=>t instanceof n),ss,os;function rc(){return ss||(ss=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ic(){return os||(os=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var as=new WeakMap,ur=new WeakMap,cs=new WeakMap,cr=new WeakMap,dr=new WeakMap;function sc(t){let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(se(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&as.set(n,t)}).catch(()=>{}),dr.set(e,t),e}function oc(t){if(ur.has(t))return;let e=new Promise((n,r)=>{let i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});ur.set(t,e)}var lr={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ur.get(t);if(e==="objectStoreNames")return t.objectStoreNames||cs.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return se(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function us(t){lr=t(lr)}function ac(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){let r=t.call(jt(this),e,...n);return cs.set(r,e.sort?e.sort():[e]),se(r)}:ic().includes(t)?function(...e){return t.apply(jt(this),e),se(as.get(this))}:function(...e){return se(t.apply(jt(this),e))}}function cc(t){return typeof t=="function"?ac(t):(t instanceof IDBTransaction&&oc(t),nc(t,rc())?new Proxy(t,lr):t)}function se(t){if(t instanceof IDBRequest)return sc(t);if(cr.has(t))return cr.get(t);let e=cc(t);return e!==t&&(cr.set(t,e),dr.set(e,t)),e}var jt=t=>dr.get(t);function ds(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,e),a=se(o);return r&&o.addEventListener("upgradeneeded",c=>{r(se(o.result),c.oldVersion,c.newVersion,se(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}var uc=["get","getKey","getAll","getAllKeys","count"],lc=["put","add","delete","clear"],hr=new Map;function ls(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(hr.get(e))return hr.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=lc.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uc.includes(n)))return;let s=async function(o,...a){let c=this.transaction(o,i?"readwrite":"readonly"),u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&c.done]))[0]};return hr.set(e,s),s}us(t=>({...t,get:(e,n,r)=>ls(e,n)||t.get(e,n,r),has:(e,n)=>!!ls(e,n)||t.has(e,n)}));var pr=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dc(n)){let r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}};function dc(t){return t.getComponent()?.type==="VERSION"}var mr="@firebase/app",hs="0.14.11";var fe=new Xe("@firebase/app"),hc="@firebase/app-compat",fc="@firebase/analytics-compat",pc="@firebase/analytics",mc="@firebase/app-check-compat",gc="@firebase/app-check",yc="@firebase/auth",bc="@firebase/auth-compat",wc="@firebase/database",Ec="@firebase/data-connect",_c="@firebase/database-compat",Ic="@firebase/functions",vc="@firebase/functions-compat",Tc="@firebase/installations",Ac="@firebase/installations-compat",Sc="@firebase/messaging",kc="@firebase/messaging-compat",xc="@firebase/performance",Rc="@firebase/performance-compat",Oc="@firebase/remote-config",Cc="@firebase/remote-config-compat",Nc="@firebase/storage",Pc="@firebase/storage-compat",Dc="@firebase/firestore",Lc="@firebase/ai",Mc="@firebase/firestore-compat",Uc="firebase",Bc="12.12.0";var gr="[DEFAULT]",Fc={[mr]:"fire-core",[hc]:"fire-core-compat",[pc]:"fire-analytics",[fc]:"fire-analytics-compat",[gc]:"fire-app-check",[mc]:"fire-app-check-compat",[yc]:"fire-auth",[bc]:"fire-auth-compat",[wc]:"fire-rtdb",[Ec]:"fire-data-connect",[_c]:"fire-rtdb-compat",[Ic]:"fire-fn",[vc]:"fire-fn-compat",[Tc]:"fire-iid",[Ac]:"fire-iid-compat",[Sc]:"fire-fcm",[kc]:"fire-fcm-compat",[xc]:"fire-perf",[Rc]:"fire-perf-compat",[Oc]:"fire-rc",[Cc]:"fire-rc-compat",[Nc]:"fire-gcs",[Pc]:"fire-gcs-compat",[Dc]:"fire-fst",[Mc]:"fire-fst-compat",[Lc]:"fire-vertex","fire-js":"fire-js",[Uc]:"fire-js-all"};var qt=new Map,Hc=new Map,yr=new Map;function fs(t,e){try{t.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _e(t){let e=t.name;if(yr.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;yr.set(e,t);for(let n of qt.values())fs(n,t);for(let n of Hc.values())fs(n,t);return!0}function lt(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Z(t){return t==null?!1:t.settings!==void 0}var Vc={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ee=new he("app","Firebase",Vc);var br=class{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Q("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}};var Ze=Bc;function _r(t,e={}){let n=t;typeof e!="object"&&(e={name:e});let r={name:gr,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Ee.create("bad-app-name",{appName:String(i)});if(n||(n=sr()),!n)throw Ee.create("no-options");let s=qt.get(i);if(s){if(we(n,s.options)&&we(r,s.config))return s;throw Ee.create("duplicate-app",{appName:i})}let o=new Wt(i);for(let c of yr.values())o.addComponent(c);let a=new br(n,r,o);return qt.set(i,a),a}function $t(t=gr){let e=qt.get(t);if(!e&&t===gr&&sr())return _r();if(!e)throw Ee.create("no-app",{appName:t});return e}function te(t,e,n){let r=Fc[t]??t;n&&(r+=`-${n}`);let i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){let o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(o.join(" "));return}_e(new Q(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}var Wc="firebase-heartbeat-database",jc=1,ut="firebase-heartbeat-store",fr=null;function ys(){return fr||(fr=ds(Wc,jc,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ut)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),fr}async function qc(t){try{let n=(await ys()).transaction(ut),r=await n.objectStore(ut).get(bs(t));return await n.done,r}catch(e){if(e instanceof X)fe.warn(e.message);else{let n=Ee.create("idb-get",{originalErrorMessage:e?.message});fe.warn(n.message)}}}async function ps(t,e){try{let r=(await ys()).transaction(ut,"readwrite");await r.objectStore(ut).put(e,bs(t)),await r.done}catch(n){if(n instanceof X)fe.warn(n.message);else{let r=Ee.create("idb-set",{originalErrorMessage:n?.message});fe.warn(r.message)}}}function bs(t){return`${t.name}!${t.options.appId}`}var $c=1024,zc=30,wr=class{constructor(e){this.container=e,this._heartbeatsCache=null;let n=this.container.getProvider("app").getImmediate();this._storage=new Er(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{let n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ms();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>zc){let i=Kc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){fe.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let e=ms(),{heartbeatsToSend:n,unsentEntries:r}=Gc(this._heartbeatsCache.heartbeats),i=nr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return fe.warn(e),""}}};function ms(){return new Date().toISOString().substring(0,10)}function Gc(t,e=$c){let n=[],r=t.slice();for(let i of t){let s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gs(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gs(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}var Er=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ts()?ns().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let n=await qc(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){let r=await this.read();return ps(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}};function gs(t){return nr(JSON.stringify({version:2,heartbeats:t})).length}function Kc(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}function Yc(t){_e(new Q("platform-logger",e=>new pr(e),"PRIVATE")),_e(new Q("heartbeat",e=>new wr(e),"PRIVATE")),te(mr,hs,t),te(mr,hs,"esm2020"),te("fire-js","")}Yc("");var Jc="firebase",Xc="12.12.1";te(Jc,Xc,"app");function Us(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}var Bs=Us,Fs=new he("auth","Firebase",Us());var Zt=new Xe("@firebase/auth");function Zc(t,...e){Zt.logLevel<=O.WARN&&Zt.warn(`Auth (${Ze}): ${t}`,...e)}function Gt(t,...e){Zt.logLevel<=O.ERROR&&Zt.error(`Auth (${Ze}): ${t}`,...e)}function ne(t,...e){throw zr(t,...e)}function ae(t,...e){return zr(t,...e)}function Hs(t,e,n){let r={...Bs(),[e]:n};return new he("auth","Firebase",r).create(e,{appName:t.name})}function Te(t){return Hs(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function zr(t,...e){if(typeof t!="string"){let n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fs.create(t,...e)}function g(t,e,...n){if(!t)throw zr(e,...n)}function oe(t){let e="INTERNAL ASSERTION FAILED: "+t;throw Gt(e),new Error(e)}function me(t,e){t||oe(e)}function kr(){return typeof self<"u"&&self.location?.href||""}function Qc(){return ws()==="http:"||ws()==="https:"}function ws(){return typeof self<"u"&&self.location?.protocol||null}function eu(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qc()||Zi()||"connection"in navigator)?navigator.onLine:!0}function tu(){if(typeof navigator>"u")return null;let t=navigator;return t.languages&&t.languages[0]||t.language||null}var Le=class{constructor(e,n){this.shortDelay=e,this.longDelay=n,me(n>e,"Short delay should be less than long delay!"),this.isMobile=Ji()||Qi()}get(){return eu()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};function Gr(t,e){me(t.emulator,"Emulator should always be set here");let{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}var Qt=class{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;oe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;oe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;oe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};var nu={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};var ru=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iu=new Le(3e4,6e4);function V(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function z(t,e,n,r,i={}){return Vs(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});let a=Ke({key:t.config.apiKey,...o}).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);let u={method:e,headers:c,...s};return Xi()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(u.credentials="include"),Qt.fetch()(await Ws(t,t.config.apiHost,n,a),u)})}async function Vs(t,e,n){t._canInitEmulator=!1;let r={...nu,...e};try{let i=new xr(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();let o=await s.json();if("needConfirmation"in o)throw ht(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{let a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ht(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ht(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw ht(t,"user-disabled",o);let l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Hs(t,l,u);ne(t,l)}}catch(i){if(i instanceof X)throw i;ne(t,"network-request-failed",{message:String(i)})}}async function Ae(t,e,n,r,i={}){let s=await z(t,e,n,r,i);return"mfaPendingCredential"in s&&ne(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function Ws(t,e,n,r){let i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Gr(t.config,i):`${t.config.apiScheme}://${i}`;return ru.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function su(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}var xr=class{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ae(this.auth,"network-request-failed")),iu.get())})}};function ht(t,e,n){let r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);let i=ae(t,e,r);return i.customData._tokenResponse=n,i}function Es(t){return t!==void 0&&t.enterprise!==void 0}var en=class{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(let n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return su(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}};async function js(t,e){return z(t,"GET","/v2/recaptchaConfig",V(t,e))}async function ou(t,e){return z(t,"POST","/v1/accounts:delete",e)}async function tn(t,e){return z(t,"POST","/v1/accounts:lookup",e)}function ft(t){if(t)try{let e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qs(t,e=!1){let n=G(t),r=await n.getIdToken(e),i=Kr(r);g(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");let s=typeof i.firebase=="object"?i.firebase:void 0,o=s?.sign_in_provider;return{claims:i,token:r,authTime:ft(Ir(i.auth_time)),issuedAtTime:ft(Ir(i.iat)),expirationTime:ft(Ir(i.exp)),signInProvider:o||null,signInSecondFactor:s?.sign_in_second_factor||null}}function Ir(t){return Number(t)*1e3}function Kr(t){let[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Gt("JWT malformed, contained fewer than 3 sections"),null;try{let i=Ht(n);return i?JSON.parse(i):(Gt("Failed to decode base64 JWT payload"),null)}catch(i){return Gt("Caught error parsing JWT payload as JSON",i?.toString()),null}}function _s(t){let e=Kr(t);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}async function yt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof X&&au(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function au({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}var Rr=class{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){let n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;let r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;let n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};var bt=class{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};async function nn(t){let e=t.auth,n=await t.getIdToken(),r=await yt(t,tn(e,{idToken:n}));g(r?.users.length,e,"internal-error");let i=r.users[0];t._notifyReloadListener(i);let s=i.providerUserInfo?.length?zs(i.providerUserInfo):[],o=cu(t.providerData,s),a=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!o?.length,u=a?c:!1,l={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new bt(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,l)}async function $s(t){let e=G(t);await nn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cu(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zs(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}async function uu(t,e){let n=await Vs(t,{},async()=>{let r=Ke({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await Ws(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";let c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Pe(t.emulatorConfig.host)&&(c.credentials="include"),Qt.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lu(t,e){return z(t,"POST","/v2/accounts:revokeToken",V(t,e))}var pt=class t{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");let n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_s(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){g(e.length!==0,"internal-error");let n=_s(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){let{accessToken:r,refreshToken:i,expiresIn:s}=await uu(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){let{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new t;return r&&(g(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(g(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(g(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new t,this.toJSON())}_performRefresh(){return oe("not implemented")}};function Ie(t,e){g(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}var ve=class t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Rr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bt(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){let n=await yt(this,this.stsTokenManager.getToken(this.auth,e));return g(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qs(this,e)}reload(){return $s(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){let n=new t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await nn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Z(this.auth.app))return Promise.reject(Te(this.auth));let e=await this.getIdToken();return await yt(this,ou(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){let r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,a=n.tenantId??void 0,c=n._redirectEventId??void 0,u=n.createdAt??void 0,l=n.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:f,providerData:b,stsTokenManager:I}=n;g(h&&I,e,"internal-error");let v=pt.fromJSON(this.name,I);g(typeof h=="string",e,"internal-error"),Ie(r,e.name),Ie(i,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof f=="boolean",e,"internal-error"),Ie(s,e.name),Ie(o,e.name),Ie(a,e.name),Ie(c,e.name),Ie(u,e.name),Ie(l,e.name);let R=new t({uid:h,auth:e,email:i,emailVerified:d,displayName:r,isAnonymous:f,photoURL:o,phoneNumber:s,tenantId:a,stsTokenManager:v,createdAt:u,lastLoginAt:l});return b&&Array.isArray(b)&&(R.providerData=b.map(S=>({...S}))),c&&(R._redirectEventId=c),R}static async _fromIdTokenResponse(e,n,r=!1){let i=new pt;i.updateFromServerResponse(n);let s=new t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await nn(s),s}static async _fromGetAccountInfoResponse(e,n,r){let i=n.users[0];g(i.localId!==void 0,"internal-error");let s=i.providerUserInfo!==void 0?zs(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!s?.length,a=new pt;a.updateFromIdToken(r);let c=new t({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new bt(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!s?.length};return Object.assign(c,u),c}};var Is=new Map;function pe(t){me(t instanceof Function,"Expected a class definition");let e=Is.get(t);return e?(me(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Is.set(t,e),e)}var rn=class{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){let n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}};rn.type="NONE";var Or=rn;function Kt(t,e,n){return`firebase:${t}:${e}:${n}`}var sn=class t{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;let{config:i,name:s}=this.auth;this.fullUserKey=Kt(this.userKey,i.apiKey,s),this.fullPersistenceKey=Kt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){let e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){let n=await tn(this.auth,{idToken:e}).catch(()=>{});return n?ve._fromGetAccountInfoResponse(this.auth,n,e):null}return ve._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;let n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new t(pe(Or),e,r);let i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u),s=i[0]||pe(Or),o=Kt(r,e.config.apiKey,e.name),a=null;for(let u of n)try{let l=await u._get(o);if(l){let h;if(typeof l=="string"){let d=await tn(e,{idToken:l}).catch(()=>{});if(!d)break;h=await ve._fromGetAccountInfoResponse(e,d,l)}else h=ve._fromJSON(e,l);u!==s&&(a=h),s=u;break}}catch{}let c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new t(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new t(s,e,r))}};function vs(t){let e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Js(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zs(e))return"Blackberry";if(Qs(e))return"Webos";if(Ks(e))return"Safari";if((e.includes("chrome/")||Ys(e))&&!e.includes("edge/"))return"Chrome";if(Xs(e))return"Android";{let n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Gs(t=$()){return/firefox\//i.test(t)}function Ks(t=$()){let e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ys(t=$()){return/crios\//i.test(t)}function Js(t=$()){return/iemobile/i.test(t)}function Xs(t=$()){return/android/i.test(t)}function Zs(t=$()){return/blackberry/i.test(t)}function Qs(t=$()){return/webos/i.test(t)}function Yr(t=$()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function du(t=$()){return Yr(t)&&!!window.navigator?.standalone}function hu(){return es()&&document.documentMode===10}function eo(t=$()){return Yr(t)||Xs(t)||Qs(t)||Zs(t)||/windows phone/i.test(t)||Js(t)}function to(t,e=[]){let n;switch(t){case"Browser":n=vs($());break;case"Worker":n=`${vs($())}-${t}`;break;default:n=t}let r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ze}/${r}`}var Cr=class{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){let r=s=>new Promise((o,a)=>{try{let c=e(s);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);let i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;let n=[];try{for(let r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(let i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}};async function fu(t,e={}){return z(t,"GET","/v2/passwordPolicy",V(t,e))}var pu=6,Nr=class{constructor(e){let n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??pu,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){let n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){let r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}};var Pr=class{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new on(this),this.idTokenSubscription=new on(this),this.beforeStateQueue=new Cr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fs,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pe(n)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await sn.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{let n=await tn(this,{idToken:e}),r=await ve._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Z(this.app)){let s=this.app.settings.authIdToken;return s?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(o,o))}):this.directlySetCurrentUser(null)}let n=await this.assertedPersistence.getCurrentUser(),r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let s=this.redirectUser?._redirectEventId,o=r?._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===o)&&a?.user&&(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await nn(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=tu()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Z(this.app))return Promise.reject(Te(this));let n=e?G(e):null;return n&&g(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Z(this.app)?Promise.reject(Te(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Z(this.app)?Promise.reject(Te(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();let n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){let e=await fu(this),n=new Nr(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new he("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{let r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){let n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lu(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,n){let r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){let n=e&&pe(e)||this._popupRedirectResolver;g(n,this,"argument-error"),this.redirectPersistenceManager=await sn.create(this,[pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};let s=typeof n=="function"?n:n.next.bind(n),o=!1,a=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){let c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{let c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=to(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){let e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);let n=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();n&&(e["X-Firebase-Client"]=n);let r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Z(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;let e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&Zc(`Error while retrieving App Check token: ${e.error}`),e?.token}};function He(t){return G(t)}var on=class{constructor(e){this.auth=e,this.observer=null,this.addObserver=is(n=>this.observer=n)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};var Tn={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mu(t){Tn=t}function no(t){return Tn.loadJS(t)}function gu(){return Tn.recaptchaEnterpriseScript}function yu(){return Tn.gapiScript}function ro(t){return`__${t}${Math.floor(Math.random()*1e6)}`}var Dr=class{constructor(){this.enterprise=new Lr}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}},Lr=class{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}};var bu="recaptcha-enterprise",mt="NO_RECAPTCHA",an=class{constructor(e){this.type=bu,this.auth=He(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{js(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{let u=new en(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{a(c)})})}function i(s,o,a){let c=window.grecaptcha;Es(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(mt)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Dr().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Es(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=gu();c.length!==0&&(c+=a),no(c).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}};async function dt(t,e,n,r=!1,i=!1){let s=new an(t),o;if(i)o=mt;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}let a={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){let c=a.phoneEnrollmentInfo.phoneNumber,u=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){let c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function gt(t,e,n,r,i){if(i==="EMAIL_PASSWORD_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){let s=await dt(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);let o=await dt(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)});else if(i==="PHONE_PROVIDER")if(t._getRecaptchaConfig()?.isProviderEnabled("PHONE_PROVIDER")){let s=await dt(t,e,n);return r(t,s).catch(async o=>{if(t._getRecaptchaConfig()?.getProviderEnforcementState("PHONE_PROVIDER")==="AUDIT"&&(o.code==="auth/missing-recaptcha-token"||o.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);let a=await dt(t,e,n,!1,!0);return r(t,a)}return Promise.reject(o)})}else{let s=await dt(t,e,n,!1,!0);return r(t,s)}else return Promise.reject(i+" provider is not supported.")}async function wu(t){let e=He(t),n=await js(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),r=new en(n);e.tenantId==null?e._agentRecaptchaConfig=r:e._tenantRecaptchaConfigs[e.tenantId]=r,r.isAnyProviderEnabled()&&new an(e).verify()}function io(t,e){let n=lt(t,"auth");if(n.isInitialized()){let i=n.getImmediate(),s=n.getOptions();if(we(s,e??{}))return i;ne(i,"already-initialized")}return n.initialize({options:e})}function Eu(t,e){let n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(pe);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function so(t,e,n){let r=He(t);g(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");let i=!!n?.disableWarnings,s=oo(e),{host:o,port:a}=_u(e),c=a===null?"":`:${a}`,u={url:`${s}//${o}${c}/`},l=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){g(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),g(we(u,r.config.emulator)&&we(l,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=l,r.settings.appVerificationDisabledForTesting=!0,Pe(o)?Vt(`${s}//${o}${c}`):i||Iu()}function oo(t){let e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _u(t){let e=oo(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};let r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){let s=i[1];return{host:s,port:Ts(r.substr(s.length+1))}}else{let[s,o]=r.split(":");return{host:s,port:Ts(o)}}}function Ts(t){if(!t)return null;let e=Number(t);return isNaN(e)?null:e}function Iu(){function t(){let e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}var Me=class{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return oe("not implemented")}_getIdTokenResponse(e){return oe("not implemented")}_linkToIdToken(e,n){return oe("not implemented")}_getReauthenticationResolver(e){return oe("not implemented")}};async function vu(t,e){return z(t,"POST","/v1/accounts:signUp",e)}async function Tu(t,e){return Ae(t,"POST","/v1/accounts:signInWithPassword",V(t,e))}async function Au(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",V(t,e))}async function Su(t,e){return Ae(t,"POST","/v1/accounts:signInWithEmailLink",V(t,e))}var wt=class t extends Me{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new t(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new t(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":let n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gt(e,n,"signInWithPassword",Tu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Au(e,{email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":let r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gt(e,r,"signUpPassword",vu,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Su(e,{idToken:n,email:this._email,oobCode:this._password});default:ne(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}};async function Qe(t,e){return Ae(t,"POST","/v1/accounts:signInWithIdp",V(t,e))}var ku="http://localhost",Ue=class t extends Me{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){let n=new t(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ne("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){let n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;let o=new t(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){let n=this.buildRequest();return Qe(e,n)}_linkToIdToken(e,n){let r=this.buildRequest();return r.idToken=n,Qe(e,r)}_getReauthenticationResolver(e){let n=this.buildRequest();return n.autoCreate=!1,Qe(e,n)}buildRequest(){let e={requestUri:ku,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{let n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ke(n)}return e}};async function As(t,e){return z(t,"POST","/v1/accounts:sendVerificationCode",V(t,e))}async function xu(t,e){return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,e))}async function Ru(t,e){let n=await Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,e));if(n.temporaryProof)throw ht(t,"account-exists-with-different-credential",n);return n}var Ou={USER_NOT_FOUND:"user-not-found"};async function Cu(t,e){let n={...e,operation:"REAUTH"};return Ae(t,"POST","/v1/accounts:signInWithPhoneNumber",V(t,n),Ou)}var Et=class t extends Me{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new t({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new t({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return xu(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Ru(e,{idToken:n,...this._makeVerificationRequest()})}_getReauthenticationResolver(e){return Cu(e,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){let e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));let{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new t({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}};function Nu(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pu(t){let e=Ye(Je(t)).link,n=e?Ye(Je(e)).deep_link_id:null,r=Ye(Je(t)).deep_link_id;return(r?Ye(Je(r)).link:null)||r||n||e||t}var cn=class t{constructor(e){let n=Ye(Je(e)),r=n.apiKey??null,i=n.oobCode??null,s=Nu(n.mode??null);g(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){let n=Pu(e);try{return new t(n)}catch{return null}}};var et=class t{constructor(){this.providerId=t.PROVIDER_ID}static credential(e,n){return wt._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){let r=cn.parseLink(n);return g(r,"argument-error"),wt._fromEmailAndCode(e,r.code,r.tenantId)}};et.PROVIDER_ID="password";et.EMAIL_PASSWORD_SIGN_IN_METHOD="password";et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";var un=class{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}};var Be=class extends un{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}};var _t=class t extends Be{constructor(){super("facebook.com")}static credential(e){return Ue._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";var It=class t extends Be{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ue._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return t.credential(n,r)}catch{return null}}};It.GOOGLE_SIGN_IN_METHOD="google.com";It.PROVIDER_ID="google.com";var vt=class t extends Be{constructor(){super("github.com")}static credential(e){return Ue._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return t.credential(e.oauthAccessToken)}catch{return null}}};vt.GITHUB_SIGN_IN_METHOD="github.com";vt.PROVIDER_ID="github.com";var Tt=class t extends Be{constructor(){super("twitter.com")}static credential(e,n){return Ue._fromParams({providerId:t.PROVIDER_ID,signInMethod:t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return t.credentialFromTaggedObject(e)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return t.credential(n,r)}catch{return null}}};Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";var tt=class t{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){let s=await ve._fromIdTokenResponse(e,r,i),o=Ss(r);return new t({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);let i=Ss(r);return new t({user:e,providerId:i,_tokenResponse:r,operationType:n})}};function Ss(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}var Mr=class t extends X{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,t.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new t(e,n,r,i)}};function ao(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mr._fromErrorAndOperation(t,s,e,r):s})}async function Du(t,e,n=!1){let r=await yt(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tt._forOperation(t,"link",r)}async function Lu(t,e,n=!1){let{auth:r}=t;if(Z(r.app))return Promise.reject(Te(r));let i="reauthenticate";try{let s=await yt(t,ao(r,i,e,t),n);g(s.idToken,r,"internal-error");let o=Kr(s.idToken);g(o,r,"internal-error");let{sub:a}=o;return g(t.uid===a,r,"user-mismatch"),tt._forOperation(t,i,s)}catch(s){throw s?.code==="auth/user-not-found"&&ne(r,"user-mismatch"),s}}async function Mu(t,e,n=!1){if(Z(t.app))return Promise.reject(Te(t));let r="signIn",i=await ao(t,r,e),s=await tt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Uu(t,e){return Ae(t,"POST","/v1/accounts:signInWithCustomToken",V(t,e))}async function Jr(t,e){if(Z(t.app))return Promise.reject(Te(t));let n=He(t),r=await Uu(n,{token:e,returnSecureToken:!0}),i=await tt._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}function Xr(t,e){return G(t).setPersistence(e)}function co(t,e,n,r){return G(t).onIdTokenChanged(e,n,r)}function uo(t,e,n){return G(t).beforeAuthStateChanged(e,n)}function Zr(t,e,n,r){return G(t).onAuthStateChanged(e,n,r)}function Qr(t){return G(t).signOut()}function ks(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:start",V(t,e))}function Bu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:finalize",V(t,e))}function Fu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:start",V(t,e))}function Hu(t,e){return z(t,"POST","/v2/accounts/mfaEnrollment:finalize",V(t,e))}var ln="__sak";var dn=class{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ln,"1"),this.storage.removeItem(ln),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){let n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}};var Vu=1e3,Wu=10,hn=class extends dn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=eo(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(let n of Object.keys(this.listeners)){let r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}let r=e.key;n?this.detachListener():this.stopPolling();let i=()=>{let o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hu()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Wu):i()}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Vu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){let n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}};hn.type="LOCAL";var An=hn;var ju=1e3;function vr(t){let e=t.replace(/[\\^$.*+?()[\]{}|]/g,"\\$&"),n=RegExp(`${e}=([^;]+)`);return document.cookie.match(n)?.[1]??null}function Tr(t){return`${window.location.protocol==="http:"?"__dev_":"__HOST-"}FIREBASE_${t.split(":")[3]}`}var Ur=class{constructor(){this.type="COOKIE",this.listenerUnsubscribes=new Map}_getFinalTarget(e){if(typeof window===void 0)return e;let n=new URL(`${window.location.origin}/__cookies__`);return n.searchParams.set("finalTarget",e),n}async _isAvailable(){return typeof isSecureContext=="boolean"&&!isSecureContext||typeof navigator>"u"||typeof document>"u"?!1:navigator.cookieEnabled??!0}async _set(e,n){}async _get(e){if(!this._isAvailable())return null;let n=Tr(e);return window.cookieStore?(await window.cookieStore.get(n))?.value:vr(n)}async _remove(e){if(!this._isAvailable()||!await this._get(e))return;let r=Tr(e);document.cookie=`${r}=;Max-Age=34560000;Partitioned;Secure;SameSite=Strict;Path=/;Priority=High`,await fetch("/__cookies__",{method:"DELETE"}).catch(()=>{})}_addListener(e,n){if(!this._isAvailable())return;let r=Tr(e);if(window.cookieStore){let a=u=>{let l=u.changed.find(d=>d.name===r);l&&n(l.value),u.deleted.find(d=>d.name===r)&&n(null)},c=()=>window.cookieStore.removeEventListener("change",a);return this.listenerUnsubscribes.set(n,c),window.cookieStore.addEventListener("change",a)}let i=vr(r),s=setInterval(()=>{let a=vr(r);a!==i&&(n(a),i=a)},ju),o=()=>clearInterval(s);this.listenerUnsubscribes.set(n,o)}_removeListener(e,n){let r=this.listenerUnsubscribes.get(n);r&&(r(),this.listenerUnsubscribes.delete(n))}};Ur.type="COOKIE";var fn=class extends dn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}};fn.type="SESSION";var ei=fn;function qu(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}var pn=class t{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){let n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;let r=new t(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){let n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});let a=Array.from(o).map(async u=>u(n.origin,s)),c=await qu(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};pn.receivers=[];function ti(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}var Br=class{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){let i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{let u=ti("",20);i.port1.start();let l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){let d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}};function ce(){return window}function $u(t){ce().location.href=t}function lo(){return typeof ce().WorkerGlobalScope<"u"&&typeof ce().importScripts=="function"}async function zu(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Gu(){return navigator?.serviceWorker?.controller||null}function Ku(){return lo()?self:null}var ho="firebaseLocalStorageDb",Yu=1,mn="firebaseLocalStorage",fo="fbase_key",Fe=class{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}};function Sn(t,e){return t.transaction([mn],e?"readwrite":"readonly").objectStore(mn)}function Ju(){let t=indexedDB.deleteDatabase(ho);return new Fe(t).toPromise()}function Fr(){let t=indexedDB.open(ho,Yu);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{let r=t.result;try{r.createObjectStore(mn,{keyPath:fo})}catch(i){n(i)}}),t.addEventListener("success",async()=>{let r=t.result;r.objectStoreNames.contains(mn)?e(r):(r.close(),await Ju(),e(await Fr()))})})}async function xs(t,e,n){let r=Sn(t,!0).put({[fo]:e,value:n});return new Fe(r).toPromise()}async function Xu(t,e){let n=Sn(t,!1).get(e),r=await new Fe(n).toPromise();return r===void 0?null:r.value}function Rs(t,e){let n=Sn(t,!0).delete(e);return new Fe(n).toPromise()}var Zu=800,Qu=3,gn=class{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fr(),this.db)}async _withRetries(e){let n=0;for(;;)try{let r=await this._openDb();return await e(r)}catch(r){if(n++>Qu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lo()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pn._getInstance(Ku()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await zu(),!this.activeServiceWorker)return;this.sender=new Br(this.activeServiceWorker);let e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Gu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;let e=await Fr();return await xs(e,ln,"1"),await Rs(e,ln),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xs(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){let n=await this._withRetries(r=>Xu(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rs(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){let e=await this._withRetries(i=>{let s=Sn(i,!1).getAll();return new Fe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];let n=[],r=new Set;if(e.length!==0)for(let{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(let i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;let r=this.listeners[e];if(r)for(let i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}};gn.type="LOCAL";var po=gn;function Os(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:start",V(t,e))}function el(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:finalize",V(t,e))}function tl(t,e){return z(t,"POST","/v2/accounts/mfaSignIn:finalize",V(t,e))}var Jh=ro("rcb"),Xh=new Le(3e4,6e4);var Yt="recaptcha";async function nl(t,e,n){if(!t._getRecaptchaConfig())try{await wu(t)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let r;if(typeof e=="string"?r={phoneNumber:e}:r=e,"session"in r){let i=r.session;if("phoneNumber"in r){g(i.type==="enroll",t,"internal-error");let s={idToken:i.credential,phoneEnrollmentInfo:{phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await gt(t,s,"mfaSmsEnrollment",async(u,l)=>{if(l.phoneEnrollmentInfo.captchaResponse===mt){g(n?.type===Yt,u,"argument-error");let h=await Ar(u,l,n);return ks(u,h)}return ks(u,l)},"PHONE_PROVIDER").catch(u=>Promise.reject(u))).phoneSessionInfo.sessionInfo}else{g(i.type==="signin",t,"internal-error");let s=r.multiFactorHint?.uid||r.multiFactorUid;g(s,t,"missing-multi-factor-info");let o={mfaPendingCredential:i.credential,mfaEnrollmentId:s,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await gt(t,o,"mfaSmsSignIn",async(l,h)=>{if(h.phoneSignInInfo.captchaResponse===mt){g(n?.type===Yt,l,"argument-error");let d=await Ar(l,h,n);return Os(l,d)}return Os(l,h)},"PHONE_PROVIDER").catch(l=>Promise.reject(l))).phoneResponseInfo.sessionInfo}}else{let i={phoneNumber:r.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await gt(t,i,"sendVerificationCode",async(c,u)=>{if(u.captchaResponse===mt){g(n?.type===Yt,c,"argument-error");let l=await Ar(c,u,n);return As(c,l)}return As(c,u)},"PHONE_PROVIDER").catch(c=>Promise.reject(c))).sessionInfo}}finally{n?._reset()}}async function Ar(t,e,n){g(n.type===Yt,t,"argument-error");let r=await n.verify();g(typeof r=="string",t,"argument-error");let i={...e};if("phoneEnrollmentInfo"in i){let s=i.phoneEnrollmentInfo.phoneNumber,o=i.phoneEnrollmentInfo.captchaResponse,a=i.phoneEnrollmentInfo.clientType,c=i.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(i,{phoneEnrollmentInfo:{phoneNumber:s,recaptchaToken:r,captchaResponse:o,clientType:a,recaptchaVersion:c}}),i}else if("phoneSignInInfo"in i){let s=i.phoneSignInInfo.captchaResponse,o=i.phoneSignInInfo.clientType,a=i.phoneSignInInfo.recaptchaVersion;return Object.assign(i,{phoneSignInInfo:{recaptchaToken:r,captchaResponse:s,clientType:o,recaptchaVersion:a}}),i}else return Object.assign(i,{recaptchaToken:r}),i}var At=class t{constructor(e){this.providerId=t.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,n){return nl(this.auth,e,G(n))}static credential(e,n){return Et._fromVerification(e,n)}static credentialFromResult(e){let n=e;return t.credentialFromTaggedObject(n)}static credentialFromError(e){return t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;let{phoneNumber:n,temporaryProof:r}=e;return n&&r?Et._fromTokenResponse(n,r):null}};At.PROVIDER_ID="phone";At.PHONE_SIGN_IN_METHOD="phone";function rl(t,e){return e?pe(e):(g(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}var St=class extends Me{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Qe(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Qe(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Qe(e,this._buildIdpRequest())}_buildIdpRequest(e){let n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}};function il(t){return Mu(t.auth,new St(t),t.bypassAuthState)}function sl(t){let{auth:e,user:n}=t;return g(n,e,"internal-error"),Lu(n,new St(t),t.bypassAuthState)}async function ol(t){let{auth:e,user:n}=t;return g(n,e,"internal-error"),Du(n,new St(t),t.bypassAuthState)}var yn=class{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){let{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}let c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return il;case"linkViaPopup":case"linkViaRedirect":return ol;case"reauthViaPopup":case"reauthViaRedirect":return sl;default:ne(this.auth,"internal-error")}}resolve(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){me(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};var al=new Le(2e3,1e4);var Hr=class t extends yn{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,t.currentPopupAction&&t.currentPopupAction.cancel(),t.currentPopupAction=this}async executeNotNull(){let e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){me(this.filter.length===1,"Popup operations only handle one event");let e=ti();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ae(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(ae(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t.currentPopupAction=null}pollUserCancellation(){let e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ae(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,al.get())};e()}};Hr.currentPopupAction=null;var cl="pendingRedirect",Jt=new Map,Vr=class extends yn{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jt.get(this.auth._key());if(!e){try{let r=await ul(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jt.set(this.auth._key(),e)}return this.bypassAuthState||Jt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){let n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function ul(t,e){let n=hl(e),r=dl(t);if(!await r._isAvailable())return!1;let i=await r._get(n)==="true";return await r._remove(n),i}function ll(t,e){Jt.set(t._key(),e)}function dl(t){return pe(t._redirectPersistence)}function hl(t){return Kt(cl,t.config.apiKey,t.name)}async function fl(t,e,n=!1){if(Z(t.app))return Promise.reject(Te(t));let r=He(t),i=rl(r,e),o=await new Vr(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}var pl=10*60*1e3,Wr=class{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ml(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){if(e.error&&!mo(e)){let r=e.error.code?.split("auth/")[1]||"internal-error";n.onError(ae(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){let r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pl&&this.cachedEventUids.clear(),this.cachedEventUids.has(Cs(e))}saveEventToCache(e){this.cachedEventUids.add(Cs(e)),this.lastProcessedEventTime=Date.now()}};function Cs(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function mo({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function ml(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mo(t);default:return!1}}async function gl(t,e={}){return z(t,"GET","/v1/projects",e)}var yl=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bl=/^https?/;async function wl(t){if(t.config.emulator)return;let{authorizedDomains:e}=await gl(t);for(let n of e)try{if(El(n))return}catch{}ne(t,"unauthorized-domain")}function El(t){let e=kr(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){let o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!bl.test(n))return!1;if(yl.test(t))return r===t;let i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}var _l=new Le(3e4,6e4);function Ns(){let t=ce().___jsl;if(t?.H){for(let e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Il(t){return new Promise((e,n)=>{function r(){Ns(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ns(),n(ae(t,"network-request-failed"))},timeout:_l.get()})}if(ce().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(ce().gapi?.load)r();else{let i=ro("iframefcb");return ce()[i]=()=>{gapi.load?r():n(ae(t,"network-request-failed"))},no(`${yu()}?onload=${i}`).catch(s=>n(s))}}).catch(e=>{throw Xt=null,e})}var Xt=null;function vl(t){return Xt=Xt||Il(t),Xt}var Tl=new Le(5e3,15e3),Al="__/auth/iframe",Sl="emulator/auth/iframe",kl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xl=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Rl(t){let e=t.config;g(e.authDomain,t,"auth-domain-config-required");let n=e.emulator?Gr(e,Sl):`https://${t.config.authDomain}/${Al}`,r={apiKey:e.apiKey,appName:t.name,v:Ze},i=xl.get(t.config.apiHost);i&&(r.eid=i);let s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ke(r).slice(1)}`}async function Ol(t){let e=await vl(t),n=ce().gapi;return g(n,t,"internal-error"),e.open({where:document.body,url:Rl(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kl,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});let o=ae(t,"network-request-failed"),a=ce().setTimeout(()=>{s(o)},Tl.get());function c(){ce().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}var Cl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nl=500,Pl=600,Dl="_blank",Ll="http://localhost",bn=class{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}};function Ml(t,e,n,r=Nl,i=Pl){let s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString(),a="",c={...Cl,width:r.toString(),height:i.toString(),top:s,left:o},u=$().toLowerCase();n&&(a=Ys(u)?Dl:n),Gs(u)&&(e=e||Ll,c.scrollbars="yes");let l=Object.entries(c).reduce((d,[f,b])=>`${d}${f}=${b},`,"");if(du(u)&&a!=="_self")return Ul(e||"",a),new bn(null);let h=window.open(e||"",a,l);g(h,t,"popup-blocked");try{h.focus()}catch{}return new bn(h)}function Ul(t,e){let n=document.createElement("a");n.href=t,n.target=e;let r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}var Bl="__/auth/handler",Fl="emulator/auth/handler",Hl=encodeURIComponent("fac");async function Ps(t,e,n,r,i,s){g(t.config.authDomain,t,"auth-domain-config-required"),g(t.config.apiKey,t,"invalid-api-key");let o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ze,eventId:i};if(e instanceof un){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rs(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(let[l,h]of Object.entries(s||{}))o[l]=h}if(e instanceof Be){let l=e.getScopes().filter(h=>h!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);let a=o;for(let l of Object.keys(a))a[l]===void 0&&delete a[l];let c=await t._getAppCheckToken(),u=c?`#${Hl}=${encodeURIComponent(c)}`:"";return`${Vl(t)}?${Ke(a).slice(1)}${u}`}function Vl({config:t}){return t.emulator?Gr(t,Fl):`https://${t.authDomain}/${Bl}`}var Sr="webStorageSupport",jr=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ei,this._completeRedirectFn=fl,this._overrideRedirectResult=ll}async _openPopup(e,n,r,i){me(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");let s=await Ps(e,n,r,kr(),i);return Ml(e,s,ti())}async _openRedirect(e,n,r,i){await this._originValidation(e);let s=await Ps(e,n,r,kr(),i);return $u(s),new Promise(()=>{})}_initialize(e){let n=e._key();if(this.eventManagers[n]){let{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(me(s,"If manager is not set, promise should be"),s)}let r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){let n=await Ol(e),r=new Wr(e);return n.register("authEvent",i=>(g(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Sr,{type:Sr},i=>{let s=i?.[0]?.[Sr];s!==void 0&&n(!!s),ne(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){let n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wl(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return eo()||Ks()||Yr()}},go=jr,wn=class{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return oe("unexpected MultiFactorSessionType")}}},qr=class t extends wn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new t(e)}_finalizeEnroll(e,n,r){return Bu(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return el(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},En=class{constructor(){}static assertion(e){return qr._fromCredential(e)}};En.FACTOR_ID="phone";var _n=class{static assertionForEnrollment(e,n){return In._fromSecret(e,n)}static assertionForSignIn(e,n){return In._fromEnrollmentId(e,n)}static async generateSecret(e){let n=e;g(typeof n.user?.auth<"u","internal-error");let r=await Fu(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return vn._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}};_n.FACTOR_ID="totp";var In=class t extends wn{constructor(e,n,r){super("totp"),this.otp=e,this.enrollmentId=n,this.secret=r}static _fromSecret(e,n){return new t(n,void 0,e)}static _fromEnrollmentId(e,n){return new t(n,e)}async _finalizeEnroll(e,n,r){return g(typeof this.secret<"u",e,"argument-error"),Hu(e,{idToken:n,displayName:r,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,n){g(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");let r={verificationCode:this.otp};return tl(e,{mfaPendingCredential:n,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:r})}},vn=class t{constructor(e,n,r,i,s,o,a){this.sessionInfo=o,this.auth=a,this.secretKey=e,this.hashingAlgorithm=n,this.codeLength=r,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=s}static _fromStartTotpMfaEnrollmentResponse(e,n){return new t(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,n)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,n){let r=!1;return(zt(e)||zt(n))&&(r=!0),r&&(zt(e)&&(e=this.auth.currentUser?.email||"unknownuser"),zt(n)&&(n=this.auth.name)),`otpauth://totp/${n}:${e}?secret=${this.secretKey}&issuer=${n}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function zt(t){return typeof t>"u"||t?.length===0}var Ds="@firebase/auth",Ls="1.13.0";var $r=class{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;let n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();let n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};function Wl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jl(t){_e(new Q("auth",(e,{options:n})=>{let r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;g(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});let c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:to(t)},u=new Pr(r,i,s,c);return Eu(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_e(new Q("auth-internal",e=>{let n=He(e.getProvider("auth").getImmediate());return(r=>new $r(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),te(Ds,Ls,Wl(t)),te(Ds,Ls,"esm2020")}var ql=5*60,$l=or("authIdTokenMaxAge")||ql,Ms=null,zl=t=>async e=>{let n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$l)return;let i=n?.token;Ms!==i&&(Ms=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ni(t=$t()){let e=lt(t,"auth");if(e.isInitialized())return e.getImmediate();let n=io(t,{popupRedirectResolver:go,persistence:[po,An,ei]}),r=or("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){let s=new URL(r,location.origin);if(location.origin===s.origin){let o=zl(s.toString());uo(n,o,()=>o(n.currentUser)),co(n,a=>o(a))}}let i=ir("auth");return i&&so(n,`http://${i}`),n}function Gl(){return document.getElementsByTagName("head")?.[0]??document}mu({loadJS(t){return new Promise((e,n)=>{let r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{let s=ae("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Gl().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jl("Browser");var Kl="type.googleapis.com/google.protobuf.Int64Value",Yl="type.googleapis.com/google.protobuf.UInt64Value";function Eo(t,e){let n={};for(let r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function kn(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>kn(e));if(typeof t=="function"||typeof t=="object")return Eo(t,e=>kn(e));throw new Error("Data cannot be encoded in JSON: "+t)}function nt(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case Kl:case Yl:{let e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>nt(e)):typeof t=="function"||typeof t=="object"?Eo(t,e=>nt(e)):t}var oi="functions";var yo={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},K=class t extends X{constructor(e,n,r){super(`${oi}/${e}`,n||""),this.details=r,Object.setPrototypeOf(this,t.prototype)}};function Jl(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function xn(t,e){let n=Jl(t),r=n,i;try{let s=e&&e.error;if(s){let o=s.status;if(typeof o=="string"){if(!yo[o])return new K("internal","internal");n=yo[o],r=o}let a=s.message;typeof a=="string"&&(r=a),i=s.details,i!==void 0&&(i=nt(i))}}catch{}return n==="ok"?null:new K(n,r,i)}var ri=class{constructor(e,n,r,i){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Z(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(s=>this.auth=s,()=>{}),this.messaging||r.get().then(s=>this.messaging=s,()=>{}),this.appCheck||i?.get().then(s=>this.appCheck=s,()=>{})}async getAuthToken(){if(this.auth)try{return(await this.auth.getToken())?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){let n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){let n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}};var ii="us-central1",Xl=/^data: (.*?)(?:\n|$)/;function Zl(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new K("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}var si=class{constructor(e,n,r,i,s=ii,o=(...a)=>fetch(...a)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ri(e,n,r,i),this.cancelAllRequests=new Promise(a=>{this.deleteService=()=>Promise.resolve(a())});try{let a=new URL(s);this.customDomain=a.origin+(a.pathname==="/"?"":a.pathname),this.region=ii}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){let n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}};function Ql(t,e,n){let r=Pe(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&Vt(t.emulatorOrigin+"/backends")}function ed(t,e,n){let r=i=>nd(t,e,i,n||{});return r.stream=(i,s)=>id(t,e,i,s),r}function _o(t){return t.emulatorOrigin&&Pe(t.emulatorOrigin)?"include":void 0}async function td(t,e,n,r,i){n["Content-Type"]="application/json";let s;try{s=await r(t,{method:"POST",body:JSON.stringify(e),headers:n,credentials:_o(i)})}catch{return{status:0,json:null}}let o=null;try{o=await s.json()}catch{}return{status:s.status,json:o}}async function Io(t,e){let n={},r=await t.contextProvider.getContext(e.limitedUseAppCheckTokens);return r.authToken&&(n.Authorization="Bearer "+r.authToken),r.messagingToken&&(n["Firebase-Instance-ID-Token"]=r.messagingToken),r.appCheckToken!==null&&(n["X-Firebase-AppCheck"]=r.appCheckToken),n}function nd(t,e,n,r){let i=t._url(e);return rd(t,i,n,r)}async function rd(t,e,n,r){n=kn(n);let i={data:n},s=await Io(t,r),o=r.timeout||7e4,a=Zl(o),c=await Promise.race([td(e,i,s,t.fetchImpl,t),a.promise,t.cancelAllRequests]);if(a.cancel(),!c)throw new K("cancelled","Firebase Functions instance was deleted.");let u=xn(c.status,c.json);if(u)throw u;if(!c.json)throw new K("internal","Response is not valid JSON object.");let l=c.json.data;if(typeof l>"u"&&(l=c.json.result),typeof l>"u")throw new K("internal","Response is missing data field.");return{data:nt(l)}}function id(t,e,n,r){let i=t._url(e);return sd(t,i,n,r||{})}async function sd(t,e,n,r){n=kn(n);let i={data:n},s=await Io(t,r);s["Content-Type"]="application/json",s.Accept="text/event-stream";let o;try{o=await t.fetchImpl(e,{method:"POST",body:JSON.stringify(i),headers:s,signal:r?.signal,credentials:_o(t)})}catch(d){if(d instanceof Error&&d.name==="AbortError"){let b=new K("cancelled","Request was cancelled.");return{data:Promise.reject(b),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(b)}}}}}}let f=xn(0,null);return{data:Promise.reject(f),stream:{[Symbol.asyncIterator](){return{next(){return Promise.reject(f)}}}}}}let a,c,u=new Promise((d,f)=>{a=d,c=f});r?.signal?.addEventListener("abort",()=>{let d=new K("cancelled","Request was cancelled.");c(d)});let l=o.body.getReader(),h=od(l,a,c,r?.signal);return{stream:{[Symbol.asyncIterator](){let d=h.getReader();return{async next(){let{value:f,done:b}=await d.read();return{value:f,done:b}},async return(){return await d.cancel(),{done:!0,value:void 0}}}}},data:u}}function od(t,e,n,r){let i=(o,a)=>{let c=o.match(Xl);if(!c)return;let u=c[1];try{let l=JSON.parse(u);if("result"in l){e(nt(l.result));return}if("message"in l){a.enqueue(nt(l.message));return}if("error"in l){let h=xn(0,l);a.error(h),n(h);return}}catch(l){if(l instanceof K){a.error(l),n(l);return}}},s=new TextDecoder;return new ReadableStream({start(o){let a="";return c();async function c(){if(r?.aborted){let u=new K("cancelled","Request was cancelled");return o.error(u),n(u),Promise.resolve()}try{let{value:u,done:l}=await t.read();if(l){a.trim()&&i(a.trim(),o),o.close();return}if(r?.aborted){let d=new K("cancelled","Request was cancelled");o.error(d),n(d),await t.cancel();return}a+=s.decode(u,{stream:!0});let h=a.split(`
`);a=h.pop()||"";for(let d of h)d.trim()&&i(d.trim(),o);return c()}catch(u){let l=u instanceof K?u:xn(0,null);o.error(l),n(l)}}},cancel(){return t.cancel()}})}var bo="@firebase/functions",wo="0.13.3";var ad="auth-internal",cd="app-check-internal",ud="messaging-internal";function ld(t){let e=(n,{instanceIdentifier:r})=>{let i=n.getProvider("app").getImmediate(),s=n.getProvider(ad),o=n.getProvider(ud),a=n.getProvider(cd);return new si(i,s,o,a,r)};_e(new Q(oi,e,"PUBLIC").setMultipleInstances(!0)),te(bo,wo,t),te(bo,wo,"esm2020")}function vo(t=$t(),e=ii){let r=lt(G(t),oi).getImmediate({identifier:e}),i=Yi("functions");return i&&dd(r,...i),r}function dd(t,e,n){Ql(G(t),e,n)}function ai(t,e,n){return ed(G(t),e,n)}ld();var Rn=BigInt(4294967295),To=BigInt(32);function hd(t,e=!1){return e?{h:Number(t&Rn),l:Number(t>>To&Rn)}:{h:Number(t>>To&Rn)|0,l:Number(t&Rn)|0}}function Ao(t,e=!1){let n=t.length,r=new Uint32Array(n),i=new Uint32Array(n);for(let s=0;s<n;s++){let{h:o,l:a}=hd(t[s],e);[r[s],i[s]]=[o,a]}return[r,i]}var fd=t=>t/2**32|0,pd=t=>t>>>0;function So(t,e,n,r){let i=fd(n),s=pd(n);t.setUint32(e,r?s:i,r),t.setUint32(e+4,r?i:s,r)}var ci=(t,e,n)=>t>>>n,ui=(t,e,n)=>t<<32-n|e>>>n,Ve=(t,e,n)=>t>>>n|e<<32-n,We=(t,e,n)=>t<<32-n|e>>>n,kt=(t,e,n)=>t<<64-n|e>>>n-32,xt=(t,e,n)=>t>>>n-32|e<<64-n;function ue(t,e,n,r){let i=(e>>>0)+(r>>>0);return{h:t+n+(i/2**32|0)|0,l:i|0}}var ko=(t,e,n)=>(t>>>0)+(e>>>0)+(n>>>0),xo=(t,e,n,r)=>e+n+r+(t/2**32|0)|0,Ro=(t,e,n,r)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0),Oo=(t,e,n,r,i)=>e+n+r+i+(t/2**32|0)|0,Co=(t,e,n,r,i)=>(t>>>0)+(e>>>0)+(n>>>0)+(r>>>0)+(i>>>0),No=(t,e,n,r,i,s)=>e+n+r+i+s+(t/2**32|0)|0;function On(t){return t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&"BYTES_PER_ELEMENT"in t&&t.BYTES_PER_ELEMENT===1}var li=t=>t?`"${t}" `:"";function le(t,e=""){if(typeof t!="number")throw new TypeError(li(e)+"expected number, got "+typeof t);if(!Number.isSafeInteger(t)||t<0)throw new RangeError(li(e)+"expected integer >= 0, got "+t);return t}function q(t,e,n=""){if(On(t)&&(e===void 0||t.length===e))return t;e!==void 0&&le(e,"length");let r=On(t),i=e!==void 0?` of length ${e}`:"",s=r?`length=${t.length}`:`type=${typeof t}`,o=li(n)+"expected Uint8Array"+i+", got "+s;throw r?new RangeError(o):new TypeError(o)}function Rt(t){if(typeof t!="function"||typeof t.create!="function")throw new TypeError("expected hash wrapped by utils.createHasher");if(le(t.outputLen),le(t.blockLen),t.outputLen<1||t.blockLen<1)throw new Error("hash blockLen / outputLen must be >= 1")}var gd=(t,e)=>{if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError((e==="object"?"":`"${e}" `)+"expected object, got type="+typeof t)},Po=(t,e)=>{gd(t,e);let n=Object.getPrototypeOf(t);if(n!==Object.prototype&&n!==null)throw new TypeError(`"${e}" expected plain object`);if(Object.hasOwn(t,"__proto__"))throw new TypeError(`"${e}.__proto__" is not allowed`)};function rt(t,e=!0){if(t.destroyed)throw new Error("hash was destroyed");if(e&&t.finished)throw new Error("digest() was already called")}function Cn(t,e){q(t,void 0,"output");let n=e.outputLen;if(!(t.length>=n))throw new RangeError('"output" expected length >= '+n)}function ee(...t){for(let e=0;e<t.length;e++)t[e].fill(0)}function Nn(t){return new DataView(t.buffer,t.byteOffset,t.byteLength)}function re(t,e){return t<<32-e|t>>>e}var Lo=typeof Uint8Array.from([]).toHex=="function"&&typeof Uint8Array.fromHex=="function",yd=Array.from({length:256},(t,e)=>e.toString(16).padStart(2,"0"));function Pn(t){if(q(t),Lo)return t.toHex();let e="";for(let n=0;n<t.length;n++)e+=yd[t[n]];return e}function Do(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:void 0}function Dn(t){if(typeof t!="string")throw new TypeError("hex string expected, got "+typeof t);if(Lo)try{return Uint8Array.fromHex(t)}catch(i){throw i instanceof SyntaxError?new RangeError(i.message):i}let e=t.length,n=e/2;if(e%2)throw new RangeError("hex string expected, got unpadded hex of length "+e);let r=new Uint8Array(n);for(let i=0,s=0;i<n;i++,s+=2){let o=Do(t.charCodeAt(s)),a=Do(t.charCodeAt(s+1));if(o===void 0||a===void 0){let c=t[s]+t[s+1];throw new RangeError('hex string expected, got non-hex character "'+c+'" at index '+s)}r[i]=o*16+a}return r}function di(...t){let e=0;for(let r=0;r<t.length;r++){let i=t[r];q(i),e+=i.length}let n=new Uint8Array(e);for(let r=0,i=0;r<t.length;r++){let s=t[r];n.set(s,i),i+=s.length}return n}function bd(t,e,n="opts"){return Po(t,"defaults"),e!==void 0&&Po(e,n),Object.assign(Object.create(null),t,e)}function hi(t,e={}){if(typeof t!="function")throw new TypeError('"hashCons" expected function, got type='+typeof t);e=bd({},e,"info");let n=(i,s)=>t(s).update(i).digest(),r=t(void 0);return n.outputLen=r.outputLen,n.blockLen=r.blockLen,n.canXOF=r.canXOF,n.create=i=>t(i),Object.assign(n,e),Object.freeze(n)}function fi(t=32){le(t,"bytesLength");let e=typeof globalThis=="object"?globalThis.crypto:null;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined");if(t>65536)throw new RangeError(`"bytesLength" expected <= 65536, got ${t}`);return e.getRandomValues(new Uint8Array(t))}var pi=t=>({oid:Uint8Array.from([6,9,96,134,72,1,101,3,4,2,t])});function Mo(t,e,n){return t&e^~t&n}function Uo(t,e,n){return t&e^t&n^e&n}var Ot=class{constructor(e,n,r,i){m(this,"blockLen");m(this,"outputLen");m(this,"canXOF",!1);m(this,"padOffset");m(this,"isLE");m(this,"buffer");m(this,"view");m(this,"finished",!1);m(this,"length",0);m(this,"pos",0);m(this,"destroyed",!1);this.blockLen=e,this.outputLen=n,this.padOffset=r,this.isLE=i,this.buffer=new Uint8Array(e),this.view=Nn(this.buffer)}update(e){rt(this),q(e);let{view:n,buffer:r,blockLen:i}=this,s=e.length,o=!1;for(let a=0;a<s;){let c=Math.min(i-this.pos,s-a);if(c===i){let u=Nn(e);for(;i<=s-a;a+=i)this.process(u,a);o=!0;continue}r.set(a===0&&c===s?e:e.subarray(a,a+c),this.pos),this.pos+=c,a+=c,this.pos===i&&(this.process(n,0),this.pos=0,o=!0)}return this.length+=e.length,o&&this.roundClean(),this}digestInto(e){rt(this),Cn(e,this),this.finished=!0;let{buffer:n,view:r,blockLen:i,isLE:s}=this,{pos:o}=this;n[o++]=128,n.fill(0,o),this.padOffset>i-o&&(this.process(r,0),n.fill(0)),So(r,i-8,this.length*8,s),this.process(r,0),this.roundClean();let a=e===n?r:Nn(e),c=this.outputLen,u=c/4,l=this.get();if(c%4||u>l.length)throw new Error("invalid outputLen");for(let h=0;h<u;h++)a.setUint32(4*h,l[h],s)}digest(){let{buffer:e,outputLen:n}=this;this.digestInto(e);let r=e.slice(0,n);return this.destroy(),r}_cloneIntoMeta(e){let{buffer:n,length:r,finished:i,destroyed:s,pos:o}=this;return e.destroyed=s,e.finished=i,e.length=r,e.pos=o,o&&e.buffer.set(n),e}clone(){return this._cloneInto()}},Bo=Uint32Array.from([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]);var Fo=Uint32Array.from([1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209]);var wd=Uint32Array.from([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),Se=new Uint32Array(64),mi=class extends Ot{constructor(n,r){super(64,n,8,!1);m(this,"A",0);m(this,"B",0);m(this,"C",0);m(this,"D",0);m(this,"E",0);m(this,"F",0);m(this,"G",0);m(this,"H",0);this.A=r[0]|0,this.B=r[1]|0,this.C=r[2]|0,this.D=r[3]|0,this.E=r[4]|0,this.F=r[5]|0,this.G=r[6]|0,this.H=r[7]|0}get(){let{A:n,B:r,C:i,D:s,E:o,F:a,G:c,H:u}=this;return[n,r,i,s,o,a,c,u]}set(n,r,i,s,o,a,c,u){this.A=n|0,this.B=r|0,this.C=i|0,this.D=s|0,this.E=o|0,this.F=a|0,this.G=c|0,this.H=u|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let d=0;d<16;d++,r+=4)Se[d]=n.getUint32(r,!1);for(let d=16;d<64;d++){let f=Se[d-15],b=Se[d-2],I=re(f,7)^re(f,18)^f>>>3,v=re(b,17)^re(b,19)^b>>>10;Se[d]=v+Se[d-7]+I+Se[d-16]|0}let{A:i,B:s,C:o,D:a,E:c,F:u,G:l,H:h}=this;for(let d=0;d<64;d++){let f=re(c,6)^re(c,11)^re(c,25),b=h+f+Mo(c,u,l)+wd[d]+Se[d]|0,v=(re(i,2)^re(i,13)^re(i,22))+Uo(i,s,o)|0;h=l,l=u,u=c,c=a+b|0,a=o,o=s,s=i,i=b+v|0}i=i+this.A|0,s=s+this.B|0,o=o+this.C|0,a=a+this.D|0,c=c+this.E|0,u=u+this.F|0,l=l+this.G|0,h=h+this.H|0,this.set(i,s,o,a,c,u,l,h)}roundClean(){ee(Se)}destroy(){this.destroyed=!0,this.set(0,0,0,0,0,0,0,0),ee(this.buffer)}},gi=class extends mi{constructor(){super(32,Bo)}};var Ho=Ao(["0x428a2f98d728ae22","0x7137449123ef65cd","0xb5c0fbcfec4d3b2f","0xe9b5dba58189dbbc","0x3956c25bf348b538","0x59f111f1b605d019","0x923f82a4af194f9b","0xab1c5ed5da6d8118","0xd807aa98a3030242","0x12835b0145706fbe","0x243185be4ee4b28c","0x550c7dc3d5ffb4e2","0x72be5d74f27b896f","0x80deb1fe3b1696b1","0x9bdc06a725c71235","0xc19bf174cf692694","0xe49b69c19ef14ad2","0xefbe4786384f25e3","0x0fc19dc68b8cd5b5","0x240ca1cc77ac9c65","0x2de92c6f592b0275","0x4a7484aa6ea6e483","0x5cb0a9dcbd41fbd4","0x76f988da831153b5","0x983e5152ee66dfab","0xa831c66d2db43210","0xb00327c898fb213f","0xbf597fc7beef0ee4","0xc6e00bf33da88fc2","0xd5a79147930aa725","0x06ca6351e003826f","0x142929670a0e6e70","0x27b70a8546d22ffc","0x2e1b21385c26c926","0x4d2c6dfc5ac42aed","0x53380d139d95b3df","0x650a73548baf63de","0x766a0abb3c77b2a8","0x81c2c92e47edaee6","0x92722c851482353b","0xa2bfe8a14cf10364","0xa81a664bbc423001","0xc24b8b70d0f89791","0xc76c51a30654be30","0xd192e819d6ef5218","0xd69906245565a910","0xf40e35855771202a","0x106aa07032bbd1b8","0x19a4c116b8d2d0c8","0x1e376c085141ab53","0x2748774cdf8eeb99","0x34b0bcb5e19b48a8","0x391c0cb3c5c95a63","0x4ed8aa4ae3418acb","0x5b9cca4f7763e373","0x682e6ff3d6b2b8a3","0x748f82ee5defb2fc","0x78a5636f43172f60","0x84c87814a1f0ab72","0x8cc702081a6439ec","0x90befffa23631e28","0xa4506cebde82bde9","0xbef9a3f7b2c67915","0xc67178f2e372532b","0xca273eceea26619c","0xd186b8c721c0c207","0xeada7dd6cde0eb1e","0xf57d4f7fee6ed178","0x06f067aa72176fba","0x0a637dc5a2c898a6","0x113f9804bef90dae","0x1b710b35131c471b","0x28db77f523047d84","0x32caab7b40c72493","0x3c9ebe0a15c9bebc","0x431d67c49c100d4c","0x4cc5d4becb3e42b6","0x597f299cfc657e2a","0x5fcb6fab3ad6faec","0x6c44198c4a475817"].map(t=>BigInt(t))),Ed=Ho[0],_d=Ho[1],ke=new Uint32Array(80),xe=new Uint32Array(80),yi=class extends Ot{constructor(n,r){super(128,n,16,!1);m(this,"Ah",0);m(this,"Al",0);m(this,"Bh",0);m(this,"Bl",0);m(this,"Ch",0);m(this,"Cl",0);m(this,"Dh",0);m(this,"Dl",0);m(this,"Eh",0);m(this,"El",0);m(this,"Fh",0);m(this,"Fl",0);m(this,"Gh",0);m(this,"Gl",0);m(this,"Hh",0);m(this,"Hl",0);this.Ah=r[0]|0,this.Al=r[1]|0,this.Bh=r[2]|0,this.Bl=r[3]|0,this.Ch=r[4]|0,this.Cl=r[5]|0,this.Dh=r[6]|0,this.Dl=r[7]|0,this.Eh=r[8]|0,this.El=r[9]|0,this.Fh=r[10]|0,this.Fl=r[11]|0,this.Gh=r[12]|0,this.Gl=r[13]|0,this.Hh=r[14]|0,this.Hl=r[15]|0}get(){let{Ah:n,Al:r,Bh:i,Bl:s,Ch:o,Cl:a,Dh:c,Dl:u,Eh:l,El:h,Fh:d,Fl:f,Gh:b,Gl:I,Hh:v,Hl:R}=this;return[n,r,i,s,o,a,c,u,l,h,d,f,b,I,v,R]}set(n,r,i,s,o,a,c,u,l,h,d,f,b,I,v,R){this.Ah=n|0,this.Al=r|0,this.Bh=i|0,this.Bl=s|0,this.Ch=o|0,this.Cl=a|0,this.Dh=c|0,this.Dl=u|0,this.Eh=l|0,this.El=h|0,this.Fh=d|0,this.Fl=f|0,this.Gh=b|0,this.Gl=I|0,this.Hh=v|0,this.Hl=R|0}_cloneInto(n){return(n||(n=new this.constructor)).set(...this.get()),this._cloneIntoMeta(n)}process(n,r){for(let p=0;p<16;p++,r+=4)ke[p]=n.getUint32(r),xe[p]=n.getUint32(r+=4);for(let p=16;p<80;p++){let _=ke[p-15]|0,w=xe[p-15]|0,D=Ve(_,w,1)^Ve(_,w,8)^ci(_,w,7),L=We(_,w,1)^We(_,w,8)^ui(_,w,7),T=ke[p-2]|0,x=xe[p-2]|0,U=Ve(T,x,19)^kt(T,x,61)^ci(T,x,6),H=We(T,x,19)^xt(T,x,61)^ui(T,x,6),M=Ro(L,H,xe[p-7],xe[p-16]),y=Oo(M,D,U,ke[p-7],ke[p-16]);ke[p]=y|0,xe[p]=M|0}let{Ah:i,Al:s,Bh:o,Bl:a,Ch:c,Cl:u,Dh:l,Dl:h,Eh:d,El:f,Fh:b,Fl:I,Gh:v,Gl:R,Hh:S,Hl:N}=this;for(let p=0;p<80;p++){let _=Ve(d,f,14)^Ve(d,f,18)^kt(d,f,41),w=We(d,f,14)^We(d,f,18)^xt(d,f,41),D=d&b^~d&v,L=f&I^~f&R,T=Co(N,w,L,_d[p],xe[p]),x=No(T,S,_,D,Ed[p],ke[p]),U=T|0,H=Ve(i,s,28)^kt(i,s,34)^kt(i,s,39),M=We(i,s,28)^xt(i,s,34)^xt(i,s,39),y=i&o^i&c^o&c,A=s&a^s&u^a&u;S=v|0,N=R|0,v=b|0,R=I|0,b=d|0,I=f|0,{h:d,l:f}=ue(l|0,h|0,x|0,U|0),l=c|0,h=u|0,c=o|0,u=a|0,o=i|0,a=s|0;let k=ko(U,M,A);i=xo(k,x,H,y),s=k|0}({h:i,l:s}=ue(this.Ah|0,this.Al|0,i|0,s|0)),{h:o,l:a}=ue(this.Bh|0,this.Bl|0,o|0,a|0),{h:c,l:u}=ue(this.Ch|0,this.Cl|0,c|0,u|0),{h:l,l:h}=ue(this.Dh|0,this.Dl|0,l|0,h|0),{h:d,l:f}=ue(this.Eh|0,this.El|0,d|0,f|0),{h:b,l:I}=ue(this.Fh|0,this.Fl|0,b|0,I|0),{h:v,l:R}=ue(this.Gh|0,this.Gl|0,v|0,R|0),{h:S,l:N}=ue(this.Hh|0,this.Hl|0,S|0,N|0),this.set(i,s,o,a,c,u,l,h,d,f,b,I,v,R,S,N)}roundClean(){ee(ke,xe)}destroy(){this.destroyed=!0,ee(this.buffer),this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0)}},bi=class extends yi{constructor(){super(64,Fo)}};var Ln=hi(()=>new gi,pi(1));var Mn=hi(()=>new bi,pi(3));function Bn(t,e,n=()=>{}){if(!Array.isArray(t))throw new TypeError(`"${e}" expected array, got type=${typeof t}`);for(let r=0;r<t.length;r++)n(t[r],`${e}[${r}]`);return t}var Y=(t,e,n)=>q(t,e,n),wi=le;function Re(t,e="object"){if(t===null||typeof t!="object"||Array.isArray(t))throw new TypeError(e==="object"?"expected valid options object":`"${e}" expected object, got type=${typeof t}`);return t}function je(t,e){if(typeof t!="function")throw new TypeError(`"${e}" is invalid: expected function, got ${typeof t}`);return t}var Wo=Pn,Ei=(...t)=>di(...t),jo=t=>Dn(t),Ct=On,_i=t=>fi(t),Un=BigInt(0),Vo=BigInt(1),Id=t=>t?`"${t}" `:"";function ge(t,e=""){if(typeof t!="boolean")throw new TypeError(Id(e)+"expected boolean, got type="+typeof t);return t}function vd(t){if(typeof t=="bigint"){if(!Oe(t))throw new RangeError("positive bigint expected, got "+t)}else wi(t);return t}function it(t,e=""){if(typeof t!="number"){let n=e&&`"${e}" `;throw new TypeError(n+"expected number, got type="+typeof t)}if(!Number.isSafeInteger(t)){let n=e&&`"${e}" `;throw new RangeError(n+"expected safe integer, got "+t)}}function qo(t){if(typeof t!="string")throw new TypeError("hex string expected, got "+typeof t);return t===""?Un:BigInt("0x"+t)}function Fn(t){return qo(Pn(t))}function st(t){return qo(Pn(Nt(q(t)).reverse()))}function Ii(t,e){if(le(e),e===0)throw new Error("zero output length is invalid");t=vd(t);let n=e*2,r=t.toString(16);if(r.length>n)throw new RangeError("number is too large");return Dn(r.padStart(n,"0"))}function $o(t,e){return Ii(t,e).reverse()}function Nt(t){return Uint8Array.from(Y(t))}function Oe(t){return typeof t=="bigint"&&Un<=t}function vi(t,e,n){return Oe(t)&&Oe(e)&&Oe(n)&&e<=t&&t<n}function Ti(t,e,n,r){if(!vi(e,n,r))throw new RangeError("expected valid "+t+": "+n+" <= n < "+r+", got "+e)}function Ai(t){if(t<Un)throw new Error("expected non-negative bigint, got "+t);return t===Un?0:t.toString(2).length}var zo=t=>(it(t,"n"),(Vo<<BigInt(t))-Vo);function Ce(t,e={},n={},r="object"){Re(t,r),Re(e,"fields"),Re(n,"optFields");function i(o,a,c){let u=r==="object"?`param "${String(o)}"`:`"${r}.${String(o)}"`,l=t[o];if(!Object.hasOwn(t,o)&&(c?l!==void 0:a!=="function"))throw new TypeError(`${u} is invalid: expected own property`);if(c&&l===void 0)return;let h=typeof l;if(h!==a||l===null)throw new TypeError(`${u} is invalid: expected ${a}, got ${h}`)}let s=(o,a)=>Object.entries(o).forEach(([c,u])=>i(c,u,a));s(e,!1),s(n,!0)}var W=BigInt(0),P=BigInt(1),qe=BigInt(2),Yo=BigInt(3),Si=BigInt(4),Jo=BigInt(5),Td=BigInt(7),Xo=BigInt(8),Ad=BigInt(9),Sd=BigInt(15),Zo=BigInt(16),kd=BigInt("0x10000000000000000");function F(t,e){if(e<=W)throw new Error("mod: expected positive modulus, got "+e);let n=t%e;return n>=W?n:e+n}function xd(t,e,n){if(n<=P)throw new Error("pow: expected modulus > 1, got "+n);if(typeof e!="bigint")throw new TypeError("invalid exponent: expected bigint, got "+typeof e);if(e<W)throw new Error("invalid exponent, negatives unsupported");if(e===W)return P;if(e===P)return t;let r=t%n;if(r<W&&(r+=n),e<kd){let a=P;for(;e>W;)e&P&&(a=a*r%n),r=r*r%n,e>>=P;return a}let i=[];for(;e>W;)i.push(Number(e&Sd)),e>>=Si;let s=new Array(16);s[0]=P,s[1]=r;for(let a=2;a<16;a++)s[a]=s[a-1]*r%n;let o=s[i[i.length-1]];for(let a=i.length-2;a>=0;a--){o=o*o%n,o=o*o%n,o=o*o%n,o=o*o%n;let c=i[a];c!==0&&(o=o*s[c]%n)}return o}function ie(t,e,n){if(n<=P)throw new Error("pow2: expected modulus > 1, got "+n);if(e<W)throw new Error("pow2: expected non-negative exponent, got "+e);let r=t;for(;e-- >W;)r*=r,r%=n;return r}function Go(t,e){if(t===W)throw new Error("invert: expected non-zero number");if(e<=P)throw new Error("invert: expected modulus > 1, got "+e);let n=F(t,e),r=e,i=W,s=P;for(;n!==W;){let a=r/n,c=r-n*a,u=i-s*a;r=n,n=c,i=s,s=u}if(r!==P)throw new Error("invert: does not exist");return F(i,e)}function ki(t,e,n){let r=t;if(!r.eql(r.sqr(e),n))throw new Error("Cannot find square root")}function xi(t,e){if((t&P)===W)throw new Error(e+": expected odd modulus, got "+t)}function Qo(t,e){let n=t,r=(n.ORDER+P)/Si,i=n.pow(e,r);return ki(n,i,e),i}function Rd(t,e){let n=t,r=(n.ORDER-Jo)/Xo,i=n.mul(e,qe),s=n.pow(i,r),o=n.mul(e,s),a=n.mul(n.mul(o,qe),s),c=n.mul(o,n.sub(a,n.ONE));return ki(n,c,e),c}function Od(t){let e=Wn(t),n=ea(t),r=n(e,e.neg(e.ONE)),i=n(e,r),s=n(e,e.neg(r)),o=(t+Td)/Zo;return(a,c)=>{let u=a,l=u.pow(c,o),h=u.mul(l,r),d=u.mul(l,i),f=u.mul(l,s),b=u.eql(u.sqr(h),c),I=u.eql(u.sqr(d),c);l=u.cmov(l,h,b),h=u.cmov(f,d,I);let v=u.eql(u.sqr(h),c),R=u.cmov(l,h,v);return ki(u,R,c),R}}function ea(t){if(t<Yo)throw new Error("sqrt is not defined for small field");xi(t,"tonelliShanks");let e=t-P,n=0;for(;e%qe===W;)e/=qe,n++;let r=qe,i=Wn(t);for(;Pt(i,r)===1;)if(r++>1e3)throw new Error("Cannot find square root: probably non-prime P");if(n===1)return Qo;let s=i.pow(r,e),o=(e+P)/qe;return function(c,u){let l=c;if(l.is0(u))return u;if(Pt(l,u)!==1)throw new Error("Cannot find square root");let h=n,d=l.mul(l.ONE,s),f=l.pow(u,e),b=l.pow(u,o);for(;!l.eql(f,l.ONE);){if(l.is0(f))throw new Error("Cannot find square root: probably non-prime P");let I=1,v=l.sqr(f);for(;!l.eql(v,l.ONE);)if(I++,v=l.sqr(v),I===h)throw new Error("Cannot find square root");let R=P<<BigInt(h-I-1),S=l.pow(d,R);h=I,d=l.sqr(S),f=l.mul(f,d),b=l.mul(b,S)}return b}}function Cd(t){return xi(t,"Fp.sqrt"),t%Si===Yo?Qo:t%Xo===Jo?Rd:t%Zo===Ad?Od(t):ea(t)}var ta=(t,e)=>(F(t,e)&P)===P,Nd=["create","isValid","is0","neg","inv","sqrt","sqr","eql","add","sub","mul","pow","div","addN","subN","mulN","sqrN"];function ot(t){if(Re(t,"field"),typeof t.ORDER!="bigint")throw new TypeError('param "ORDER" is invalid: expected bigint, got '+typeof t.ORDER);it(t.BYTES,"BYTES"),it(t.BITS,"BITS");for(let e of Nd)je(t[e],"field."+e);if(t.BYTES<1||t.BITS<1)throw new Error("invalid field: expected BYTES/BITS > 0");if(t.ORDER<=P)throw new Error("invalid field: expected ORDER > 1, got "+t.ORDER);return t}function Vn(t,e,n=!1){ot(t),Bn(e,"nums"),ge(n,"passZero");let r=t,i=new Array(e.length).fill(n?r.ZERO:void 0),s=e.reduce((a,c,u)=>r.is0(c)?a:(i[u]=a,r.mul(a,c)),r.ONE),o=r.inv(s);return e.reduceRight((a,c,u)=>r.is0(c)?a:(i[u]=r.mul(a,i[u]),r.mul(a,c)),o),i}function Pt(t,e){ot(t);let n=t;xi(n.ORDER,"FpLegendre");let r=(n.ORDER-P)/qe,i=n.pow(e,r),s=n.eql(i,n.ONE),o=n.eql(i,n.ZERO),a=n.eql(i,n.neg(n.ONE));if(!s&&!o&&!a)throw new Error("invalid Legendre symbol result");return s?1:o?0:-1}function Pd(t,e){if(e!==void 0&&wi(e),t<=W)throw new Error("invalid n length: expected positive n, got "+t);if(e!==void 0&&e<1)throw new Error("invalid n length: expected positive bit length, got "+e);let n=Ai(t);if(e!==void 0&&e<n)throw new Error(`invalid n length: expected nBitLength (${e}) >= bitLen(n) (${n})`);let r=e!==void 0?e:n,i=Math.ceil(r/8);return{nBitLength:r,nByteLength:i}}var Ko=new WeakMap,Hn=class{constructor(e,n={}){m(this,"ORDER");m(this,"BITS");m(this,"BYTES");m(this,"isLE");m(this,"ZERO",W);m(this,"ONE",P);m(this,"_lengths");m(this,"_mod");if(e<=P)throw new Error("invalid field: expected ORDER > 1, got "+e);let r;this.isLE=!1,n!=null&&typeof n=="object"&&(typeof n.BITS=="number"&&(r=n.BITS),typeof n.sqrt=="function"&&Object.defineProperty(this,"sqrt",{value:n.sqrt,enumerable:!0}),typeof n.isLE=="boolean"&&(this.isLE=n.isLE),n.allowedLengths&&(this._lengths=Object.freeze(n.allowedLengths.slice())),typeof n.modFromBytes=="boolean"&&(this._mod=n.modFromBytes));let{nBitLength:i,nByteLength:s}=Pd(e,r);if(s>2048)throw new Error("invalid field: expected ORDER of <= 2048 bytes");this.ORDER=e,this.BITS=i,this.BYTES=s,Object.freeze(this)}create(e){return F(e,this.ORDER)}isValid(e){if(typeof e!="bigint")throw new TypeError("invalid field element: expected bigint, got "+typeof e);return W<=e&&e<this.ORDER}is0(e){return e===W}isValidNot0(e){return!this.is0(e)&&this.isValid(e)}isOdd(e){return(e&P)===P}neg(e){return F(-e,this.ORDER)}eql(e,n){return e===n}sqr(e){return F(e*e,this.ORDER)}add(e,n){return F(e+n,this.ORDER)}sub(e,n){return F(e-n,this.ORDER)}mul(e,n){return F(e*n,this.ORDER)}pow(e,n){return xd(e,n,this.ORDER)}div(e,n){return F(e*Go(n,this.ORDER),this.ORDER)}sqrN(e){return e*e}addN(e,n){return e+n}subN(e,n){return e-n}mulN(e,n){return e*n}inv(e){return Go(e,this.ORDER)}sqrt(e){let n=Ko.get(this);return n||Ko.set(this,n=Cd(this.ORDER)),n(this,e)}toBytes(e){return this.isLE?$o(e,this.BYTES):Ii(e,this.BYTES)}fromBytes(e,n=!1){Y(e);let{_lengths:r,BYTES:i,isLE:s,ORDER:o,_mod:a}=this;if(r){if(e.length<1||!r.includes(e.length)||e.length>i)throw new Error("Field.fromBytes: expected "+r+" bytes, got "+e.length);let u=new Uint8Array(i);u.set(e,s?0:u.length-e.length),e=u}if(e.length!==i)throw new Error("Field.fromBytes: expected "+i+" bytes, got "+e.length);let c=s?st(e):Fn(e);if(a&&(c=F(c,o)),!n&&!this.isValid(c))throw new Error("invalid field element: outside of range 0..ORDER");return c}invertBatch(e){return Vn(this,e,!0)}cmov(e,n,r){return ge(r,"condition"),r?n:e}};function Wn(t,e={}){return Object.freeze(Hn.prototype),new Hn(t,e)}var Ci=BigInt(0),Dt=BigInt(1),Dd=BigInt(4),Ri=16,na=128,Ld=5,ra=2**31;function Lt(t){let e=t;if(typeof e!="function")throw new TypeError('"Point" expected constructor, got type='+typeof t);je(e.fromAffine,"Point.fromAffine"),je(e.fromBytes,"Point.fromBytes"),je(e.fromHex,"Point.fromHex"),Re(e.BASE,"Point.BASE"),Re(e.ZERO,"Point.ZERO"),ot(e.Fp),ot(e.Fn)}function sa(t,e){Lt(t),oa(e,t);let n=Vn(t.Fp,e.map(r=>r.Z));return e.map((r,i)=>t.fromAffine(r.toAffine(n[i])))}function Md(t,e,n=1){if(!Number.isSafeInteger(t)||t<n||t>e)throw new Error("invalid window size, expected ["+n+".."+e+"], got W="+t)}function Ud(t,e){let n=t*(4*e+128);if(n>ra)throw new Error("invalid window size: table would need ~"+Math.ceil(n/2**20)+" MiB, max "+ra/2**20+" MiB")}function Bd(t,e){if(t!==void 0){je(t,"randomBytes");try{let n=t(e);if(!Ct(n)||n.length!==e)return}catch{return}return t}}function oa(t,e){Bn(t,"points"),t.forEach((n,r)=>{if(!(n instanceof e))throw new Error("invalid point at index "+r)})}function Fd(t,e,n){if(!Array.isArray(t))throw new Error("array of scalars expected");t.forEach((r,i)=>{if(!(n===void 0?e.isValid(r):Oe(r)&&r<n))throw new Error("invalid scalar at index "+i)})}var aa=new WeakMap;function Oi(t){return aa.get(t)||1}function Hd(t,e){let n=t.double(),r=[t];for(let i=1;i<e;i++)r.push(r[i-1].add(n));return r}function Vd(t,e){let n=2**e,r=n/2,i=BigInt(n-1),s=[];for(;t>Ci;){let o=0;t&Dt&&(o=Number(t&i),o>=r&&(o-=n),t-=BigInt(o)),s.push(o),t>>=Dt}return s}function Wd(t,e,n){let r=2**e,i=r/2,s=BigInt(r-1),o=BigInt(e),a=[];for(let c=0;c<n;c++){let u=Number(t&s);t>>=o,u>i&&(u-=r,t+=Dt),a.push(u)}if(t!==Ci)throw new Error("invalid wnaf");return a}function jd(t,e,n){let r=0;for(let s of n)r=Math.max(r,s.length);let i=t;for(let s=r-1;s>=0;s--){s!==r-1&&(i=i.double());for(let o=0;o<n.length;o++){let a=n[o][s];if(a){let c=e[o][Math.abs(a)-1>>1];i=i.add(a<0?c.negate():c)}}}return i}var jn=class{constructor(e,n){m(this,"Point");m(this,"BASE");m(this,"ZERO");m(this,"randomBytes");m(this,"wnafPrecomputes",new WeakMap);m(this,"baseCanBeBlinded");m(this,"bits");Lt(e),this.randomBytes=Bd(n,Ri),this.Point=e,this.BASE=e.BASE,this.ZERO=e.ZERO,this.bits=e.Fn.BITS}buildWnafTable(e,n,r){let i=Math.ceil(r/n)+1,s=2**(n-1),o=[],a=e;for(let c=0;c<i;c++){let u=a;for(let l=0;l<s;l++)o.push(u),u=u.add(a);a=o[o.length-1].double()}return{W:n,bits:r,windows:i,comp:o}}wnafCachedCT(e,n){let{W:r,windows:i,comp:s}=e,o=2**(r-1),a=Wd(n,r,i),c=this.ZERO,u=this.BASE;for(let l=0;l<i;l++){let h=a[l],d=l*o,f=Math.abs(h)-1,b=s[d];for(let v=1;v<o;v++)b=v===f?s[d+v]:b;let I=b.negate();h===0?u=u.add(s[d]):c=c.add(h<0?I:b)}return{p:c,f:u}}getWnafPrecomputes(e,n,r,i){let s=this.wnafPrecomputes.get(n),o=s?.find(a=>a.W===e&&a.bits===r);return o||(o=this.buildWnafTable(n,e,r),typeof i=="function"&&(o={...o,comp:i(o.comp)}),s||(s=[],this.wnafPrecomputes.set(n,s)),s.push(o)),o}assertPoint(e){if(!(e instanceof this.Point))throw new TypeError('"point" expected Point instance, got type='+typeof e)}validateMulInput(e,n){if(this.assertPoint(e),!vi(n,Dt,this.Point.Fn.ORDER))throw new Error("invalid scalar")}runCT(e,n,r,i){let s=Oi(e);return s===1?this.fixedWindowCT(e,n,r):this.wnafCachedCT(this.getWnafPrecomputes(s,e,r,i),n)}mulCT(e,n,r){return this.validateMulInput(e,n),this.runCT(e,n,this.bits,r)}mulCTBlinded(e,n,r){if(this.validateMulInput(e,n),this.randomBytes===void 0)throw new Error("randomBytes is required for scalar blinding");let i=this.Point.Fn.BITS+na,s=this.randomBytes(Ri);if(!Ct(s)||s.length!==Ri)throw new Error("randomBytes returned invalid byte array");s[0]=s[0]&63|128;let o=n+Fn(s)*this.Point.Fn.ORDER;return this.runCT(e,o,i,r)}fixedWindowCT(e,n,r){let i=Ld,s=1<<i,o=zo(i),a=new Array(s);a[0]=this.ZERO;for(let l=1;l<s;l++)a[l]=a[l-1].add(e);let c=Math.ceil(r/i),u=this.ZERO;for(let l=c-1;l>=0;l--){if(l!==c-1)for(let f=0;f<i;f++)u=u.double();let h=Number(n>>BigInt(l*i)&o),d=a[0];for(let f=1;f<s;f++)d=f===h?a[f]:d;u=u.add(d)}return{p:u,f:u}}shouldBlind(e,n){return this.randomBytes===void 0?!1:n===Dt?!0:e!==this.BASE?!1:(this.baseCanBeBlinded===void 0&&(this.baseCanBeBlinded=this.mulUnsafe(this.BASE,this.Point.Fn.ORDER).is0()),this.baseCanBeBlinded)}mulSecret(e,n,r,i){return this.shouldBlind(e,r)?this.mulCTBlinded(e,n,i):this.mulCT(e,n,i)}mulUnsafe(e,n,r){if(this.assertPoint(e),!Oe(n))throw new Error("invalid scalar");let i=Oi(e);if(i===1||n>=this.Point.Fn.ORDER)return qd(this.Point,[e],[n],!0);let s=this.getWnafPrecomputes(i,e,this.bits,r);return this.wnafCachedCT(s,n).p}setWindowSize(e,n){this.assertPoint(e),Md(n,this.bits);let r=Math.ceil((this.bits+na)/n)+1;Ud(r*2**(n-1),this.Point.Fp.BYTES),aa.set(e,n),this.wnafPrecomputes.delete(e)}hasWindowSize(e){return Oi(e)!==1}};function qd(t,e,n,r=!1){if(Lt(t),oa(e,t),ge(r,"allowOversized"),Fd(n,t.Fn,r?t.Fn.ORDER**Dd:void 0),e.length!==n.length)throw new Error("arrays of points and scalars must have equal length");let i=e.map(o=>Hd(o,4)),s=n.map(o=>Vd(o,4));return jd(t.ZERO,i,s)}function ia(t,e,n){if(e){if(e.ORDER!==t)throw new Error("Field.ORDER must match order: Fp == p, Fn == n");return ot(e),e}else return Wn(t,{isLE:n})}function ca(t,e,n={},r){if(t!=="weierstrass"&&t!=="edwards")throw new Error('expected curve type "weierstrass" or "edwards"');if(r===void 0&&(r=t==="edwards"),!e||typeof e!="object")throw new Error(`expected valid ${t} CURVE object`);Ce(n);for(let c of["p","n","h"]){let u=e[c];if(!(Oe(u)&&u!==Ci))throw new Error(`CURVE.${c} must be positive bigint`)}let i=ia(e.p,n.Fp,r),s=ia(e.n,n.Fn,r),a=["Gx","Gy","a",t==="weierstrass"?"b":"d"];for(let c of a)if(!i.isValid(e[c]))throw new Error(`CURVE.${c} must be valid field element of CURVE.Fp`);return e=Object.freeze(Object.assign({},e)),{CURVE:e,Fp:i,Fn:s}}function ua(t,e){return function(r){let i=t(r);return{secretKey:i,publicKey:e(i)}}}var qn=BigInt(0),$n=BigInt(1),zn=BigInt(2),$d=BigInt(4),la=BigInt(8);function zd(t,e,n,r){let i=t.sqr(n),s=t.sqr(r),o=t.add(t.mul(e.a,i),s),a=t.add(t.ONE,t.mul(e.d,t.mul(i,s)));return t.eql(o,a)}function da(t,e={}){Ce(e,{},{},"extraOpts");let n=e,r=ca("edwards",t,n,n.FpFnLE),{Fp:i,Fn:s}=r,o=r.CURVE,{h:a}=o;if(Pt(i,o.a)!==1)throw new Error("edwards: CURVE.a must be a square in Fp for complete addition formulas");if(Pt(i,o.d)!==-1)throw new Error("edwards: CURVE.d must be a non-square in Fp for complete addition formulas");Ce(n,{},{uvRatio:"function",randomBytes:"function"});let c=n.randomBytes===void 0?_i:n.randomBytes,u=zn<<BigInt(i.BYTES*8)-$n;function l(N){if(!i.isOdd)throw new Error("Field does not have .isOdd()");return i.isOdd(N)}let h=n.uvRatio===void 0?(N,p)=>{try{return{isValid:!0,value:i.sqrt(i.div(N,p))}}catch{return{isValid:!1,value:qn}}}:n.uvRatio;if(!zd(i,o,o.Gx,o.Gy))throw new Error("bad curve params: generator point");let d=i.eql(o.a,i.neg(i.ONE))?N=>i.neg(N):i.eql(o.a,i.ONE)?N=>N:N=>i.mul(o.a,N);function f(N,p,_=!1){let w=_?$n:qn;return Ti("coordinate "+N,p,w,u),p}function b(N){if(!(N instanceof I))throw new Error("EdwardsPoint expected")}let S=class S{constructor(p,_,w,D){m(this,"X");m(this,"Y");m(this,"Z");m(this,"T");this.X=f("x",p),this.Y=f("y",_),this.Z=f("z",w,!0),this.T=f("t",D),Object.freeze(this)}static CURVE(){return o}static fromAffine(p){if(p instanceof S)throw new Error("extended point not allowed");let{x:_,y:w}=p||{};return f("x",_),f("y",w),new S(_,w,i.ONE,i.mul(_,w))}static fromBytes(p,_=!1){let w=i.BYTES,{a:D,d:L}=o;p=Nt(Y(p,w,"point")),ge(_,"zip215");let T=Nt(p),x=p[w-1];T[w-1]=x&-129;let U=st(T),H=_?u:i.ORDER;Ti("point.y",U,qn,H);let M=i.sqr(U),y=i.sub(M,i.ONE),A=i.sub(i.mulN(L,M),D),{isValid:k,value:C}=h(y,A);if(!k)throw new Error("bad point: invalid y coordinate");let j=l(C),B=(x&128)!==0;if(!_&&i.is0(C)&&B)throw new Error("bad point: x=0 and x_0=1");return B!==j&&(C=i.neg(C)),S.fromAffine({x:C,y:U})}static fromHex(p,_=!1){return S.fromBytes(jo(p),_)}get x(){return this.toAffine().x}get y(){return this.toAffine().y}precompute(p=6,_=!0){return R.setWindowSize(this,p),_||this.multiply(zn),this}assertValidity(){let p=this,{a:_,d:w}=o;if(p.is0())throw new Error("bad point: ZERO");let{X:D,Y:L,Z:T,T:x}=p,U=i.sqr(D),H=i.sqr(L),M=i.sqr(T),y=i.sqr(M),A=i.mul(U,_),k=i.mul(i.add(A,H),M),C=i.add(y,i.mul(w,i.mul(U,H)));if(!i.eql(k,C))throw new Error("bad point: equation left != right (1)");let j=i.mul(D,L),B=i.mul(T,x);if(!i.eql(j,B))throw new Error("bad point: equation left != right (2)")}equals(p){b(p);let{X:_,Y:w,Z:D}=this,{X:L,Y:T,Z:x}=p,U=i.mul(_,x),H=i.mul(L,D),M=i.mul(w,x),y=i.mul(T,D);return i.eql(U,H)&&i.eql(M,y)}is0(){return this.equals(S.ZERO)}negate(){return new S(i.neg(this.X),this.Y,this.Z,i.neg(this.T))}double(){let{X:p,Y:_,Z:w}=this,D=i.sqr(p),L=i.sqr(_),T=i.mul(i.sqr(w),zn),x=d(D),U=i.addN(p,_),H=i.sub(i.subN(i.sqr(U),D),L),M=i.addN(x,L),y=i.subN(M,T),A=i.subN(x,L),k=i.mul(H,y),C=i.mul(M,A),j=i.mul(H,A),B=i.mul(y,M);return new S(k,C,B,j)}add(p){b(p);let{d:_}=o,{X:w,Y:D,Z:L,T}=this,{X:x,Y:U,Z:H,T:M}=p,y=i.mul(w,x),A=i.mul(D,U),k=i.mul(i.mulN(T,_),M),C=i.mul(L,H),j=i.sub(i.subN(i.mulN(i.addN(w,D),i.addN(x,U)),y),A),B=i.subN(C,k),de=i.addN(C,k),be=i.sub(A,d(y)),ze=i.mul(j,B),Ge=i.mul(de,be),Ne=i.mul(j,be),Bt=i.mul(B,de);return new S(ze,Ge,Bt,Ne)}subtract(p){return b(p),this.add(p.negate())}multiply(p){if(!s.isValidNot0(p))throw new RangeError("invalid scalar: expected 1 <= sc < curve.n");let{p:_,f:w}=R.mulSecret(this,p,a,v);return v([_,w])[0]}multiplyUnsafe(p){if(!s.isValid(p))throw new RangeError("invalid scalar: expected 0 <= sc < curve.n");return p===qn?S.ZERO:this.is0()||p===$n?this:R.mulUnsafe(this,p,v)}isSmallOrder(){return this.clearCofactor().is0()}isTorsionFree(){return R.mulUnsafe(this,o.n).is0()}toAffine(p){let _=this,w=p;if(w!=null&&typeof w!="bigint")throw new TypeError('"invertedZ" expected bigint, got type='+typeof w);let{X:D,Y:L,Z:T}=_,x=_.is0();w==null&&(w=x?i.create(la):i.inv(T));let U=i.mul(D,w),H=i.mul(L,w),M=i.mul(T,w);if(x)return{x:i.ZERO,y:i.ONE};if(!i.eql(M,i.ONE))throw new Error("invZ was invalid");return{x:U,y:H}}clearCofactor(){return a===$n?this:a===zn?this.double():a===$d?this.double().double():a===la?this.double().double().double():this.multiplyUnsafe(a)}toBytes(){let{x:p,y:_}=this.toAffine(),w=i.toBytes(_);return w[w.length-1]|=l(p)?128:0,w}toHex(){return Wo(this.toBytes())}toString(){return`<Point ${this.is0()?"ZERO":this.toHex()}>`}};m(S,"BASE",new S(o.Gx,o.Gy,i.ONE,i.mul(o.Gx,o.Gy))),m(S,"ZERO",new S(i.ZERO,i.ONE,i.ONE,i.ZERO)),m(S,"Fp",i),m(S,"Fn",s);let I=S,v=N=>sa(I,N),R=new jn(I,c);return R.bits>=6&&I.BASE.precompute(6),Object.freeze(I.prototype),Object.freeze(I),I}function ha(t,e,n={}){if(Lt(t),typeof e!="function")throw new Error('"hash" function param is required');let r=e,i=n;Ce(i,{},{adjustScalarBytes:"function",randomBytes:"function",domain:"function",prehash:"function",zip215:"boolean",mapToCurve:"function",toMontgomery:"function",toMontgomerySecret:"function"});let{prehash:s}=i,{BASE:o,Fp:a,Fn:c}=t,u=r.outputLen,l=2*a.BYTES;if(u!==void 0&&(it(u,"hash.outputLen"),u!==l))throw new Error(`hash.outputLen must be ${l}, got ${u}`);let h=i.randomBytes===void 0?_i:i.randomBytes,d=i.toMontgomery,f=i.toMontgomerySecret,b=i.adjustScalarBytes===void 0?y=>y:i.adjustScalarBytes,I=i.domain===void 0?(y,A,k)=>{if(ge(k,"phflag"),A.length||k)throw new Error("Contexts/pre-hash are not supported");return y}:i.domain;function v(y){return c.create(st(y))}function R(y){let A=T.secretKey;Y(y,T.secretKey,"secretKey");let k=Y(r(y),2*A,"hashedSecretKey"),C=b(k.slice(0,A)),j=k.slice(A,2*A),B=v(C);return{head:C,prefix:j,scalar:B}}function S(y){let{head:A,prefix:k,scalar:C}=R(y),j=o.multiply(C),B=j.toBytes();return{head:A,prefix:k,scalar:C,point:j,pointBytes:B}}function N(y){return S(y).pointBytes}function p(y=Uint8Array.of(),...A){let k=Ei(...A);return v(r(I(k,Y(y,void 0,"context"),!!s)))}function _(y,A,k={}){Ce(k,{},{},"options"),y=Nt(Y(y,void 0,"message")),s&&(y=s(y));let{prefix:C,scalar:j,pointBytes:B}=S(A),de=p(k.context,C,y),be=o.multiply(de).toBytes(),ze=p(k.context,be,B,y),Ge=c.create(de+ze*j);if(!c.isValid(Ge))throw new Error("sign failed: invalid s");let Ne=Ei(be,c.toBytes(Ge));return Y(Ne,T.signature,"result")}let w={zip215:i.zip215};function D(y,A,k,C=w){Ce(C);let{context:j}=C,B=C.zip215===void 0?!!w.zip215:C.zip215,de=T.signature;y=Y(y,de,"signature"),A=Y(A,void 0,"message"),k=Y(k,T.publicKey,"publicKey"),B!==void 0&&ge(B,"zip215"),s&&(A=s(A));let be=de/2,ze=y.subarray(0,be),Ge=st(y.subarray(be,de)),Ne,Bt,qi;try{Ne=t.fromBytes(k,B),Bt=t.fromBytes(ze,B),qi=o.multiplyUnsafe(Ge)}catch{return!1}if(!B&&Ne.isSmallOrder())return!1;let Ma=p(j,ze,k,A);return Bt.add(Ne.multiplyUnsafe(Ma)).subtract(qi).clearCofactor().is0()}let L=a.BYTES,T={secretKey:L,publicKey:L,signature:2*L,seed:L};function x(y){return y=y===void 0?h(T.seed):y,Y(y,T.seed,"seed")}function U(y){return Ct(y)&&y.length===T.secretKey}function H(y,A){try{return!!t.fromBytes(y,A===void 0?w.zip215:A)}catch{return!1}}let M={getExtendedPublicKey:S,randomSecretKey:x,isValidSecretKey:U,isValidPublicKey:H,toMontgomery(y){if(d===void 0)throw new Error("Montgomery conversion is not supported for this curve");return d(t.fromBytes(y))},toMontgomerySecret(y){if(f===void 0)throw new Error("Montgomery conversion is not supported for this curve");return f(y)}};return Object.freeze(T),Object.freeze(M),Object.freeze({keygen:ua(x,N),getPublicKey:N,sign:_,verify:D,utils:M,Point:t,lengths:T})}var Ni=BigInt(1),fa=BigInt(2);var Gd=BigInt(5),Kd=BigInt(8),Pi=BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"),Yd={p:Pi,n:BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"),h:Kd,a:BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"),d:BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"),Gx:BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"),Gy:BigInt("0x6666666666666666666666666666666666666666666666666666666666666658")};function Jd(t){let e=BigInt(10),n=BigInt(20),r=BigInt(40),i=BigInt(80),s=Pi,a=t*t%s*t%s,c=ie(a,fa,s)*a%s,u=ie(c,Ni,s)*t%s,l=ie(u,Gd,s)*u%s,h=ie(l,e,s)*l%s,d=ie(h,n,s)*h%s,f=ie(d,r,s)*d%s,b=ie(f,i,s)*f%s,I=ie(b,i,s)*f%s,v=ie(I,e,s)*l%s;return{pow_p_5_8:ie(v,fa,s)*t%s,b2:a}}function ga(t){return t[0]&=248,t[31]&=127,t[31]|=64,t}var pa=BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");function Xd(t,e){let n=Pi,r=F(e*e*e,n),i=F(r*r*e,n),s=Jd(t*i).pow_p_5_8,o=F(t*r*s,n),a=F(e*o*o,n),c=o,u=F(o*pa,n),l=a===t,h=a===F(-t,n),d=a===F(-t*pa,n);return l&&(o=c),(h||d)&&(o=u),ta(o,n)&&(o=F(-o,n)),{isValid:l||h,value:o}}var Di=da(Yd,{uvRatio:Xd}),ma=Di.Fp;function Zd(t){let{y:e}=t;return ma.toBytes(ma.div(Ni+e,Ni-e))}function Qd(t){let e=Di.Fp.BYTES;return q(t,e),ga(Mn(t.subarray(0,e))).subarray(0,e)}function eh(t){return ha(Di,Mn,Object.assign({adjustScalarBytes:ga,toMontgomery:Zd,toMontgomerySecret:Qd,zip215:!0},t))}var Li=eh({});var Gn=class{constructor(e,n){m(this,"oHash");m(this,"iHash");m(this,"blockLen");m(this,"outputLen");m(this,"canXOF",!1);m(this,"finished",!1);m(this,"destroyed",!1);if(Rt(e),q(n,void 0,"key"),this.iHash=e.create(),typeof this.iHash.update!="function")throw new Error("expected Hash instance");this.blockLen=this.iHash.blockLen,this.outputLen=this.iHash.outputLen;let r=this.blockLen,i=new Uint8Array(r);i.set(n.length>r?e.create().update(n).digest():n);for(let s=0;s<i.length;s++)i[s]^=54;this.iHash.update(i),this.oHash=e.create();for(let s=0;s<i.length;s++)i[s]^=106;this.oHash.update(i),ee(i)}update(e){return rt(this),this.iHash.update(e),this}digestInto(e){rt(this),Cn(e,this),this.finished=!0;let n=e.subarray(0,this.outputLen);this.iHash.digestInto(n),this.oHash.update(n),this.oHash.digestInto(n),this.destroy()}digest(){let e=new Uint8Array(this.oHash.outputLen);return this.digestInto(e),e}_cloneInto(e){e||(e=Object.create(Object.getPrototypeOf(this),{}));let{oHash:n,iHash:r,finished:i,destroyed:s,blockLen:o,outputLen:a,canXOF:c}=this;return e=e,e.finished=i,e.destroyed=s,e.blockLen=o,e.outputLen=a,e.canXOF=c,e.oHash=n._cloneInto(e.oHash),e.iHash=r._cloneInto(e.iHash),e}clone(){return this._cloneInto()}destroy(){this.destroyed=!0,this.oHash.destroy(),this.iHash.destroy()}},Mi=(()=>{let t=(e,n,r)=>new Gn(e,n).update(r).digest();return t.create=(e,n)=>new Gn(e,n),t})();var Mt=Uint8Array.of(0),th=Uint8Array.of();function nh(t,e,n,r=32,i){Rt(t),le(r,"length"),q(e,void 0,"prk");let s=t.outputLen;if(e.length<s)throw new Error('"prk" must be at least HashLen octets');if(r>255*s)throw new Error("Length must be <= 255*HashLen");let o=Math.ceil(r/s);if(n===void 0?n=th:q(n,void 0,"info"),!o)return i&&ee(e),new Uint8Array;let a=i&&o===1?e:new Uint8Array(o*s),{iHash:c,oHash:u}=Mi.create(t,e),l=i?e:new Uint8Array(s),h=o>1?i?.iHash||t.create():void 0;for(let f=0;f<o-1;f++){Mt[0]=f+1;let b=c._cloneInto(h);f&&b.update(l),b.update(n).update(Mt).digestInto(l),u._cloneInto(h).update(l).digestInto(l),a.set(l,s*f)}if(Mt[0]=o,o>1&&c.update(l),c.update(n).update(Mt).digestInto(l),u.update(l).digestInto(l),a.set(l,s*(o-1)),c.destroy(),u.destroy(),h?.destroy(),l!==a&&ee(l),ee(Mt),r===a.length)return a;let d=a.slice(0,r);return ee(a),d}var ya=(t,e,n,r,i)=>{Rt(t),n===void 0&&(n=new Uint8Array(t.outputLen));let s=Mi.create(t,n).update(e);return nh(t,s.digest(),r,i,s)};function ba(t){for(let e=0;e<t.length;e++){let n=t.charCodeAt(e);if(n>=55296&&n<=56319){if(e+1>=t.length)return!1;let r=t.charCodeAt(++e);if(r<56320||r>57343)return!1}else if(n>=56320&&n<=57343)return!1}return!0}function rh(t){if(typeof t!="string")throw new TypeError("invalid mnemonic type: "+typeof t);if(!ba(t))throw new TypeError("expected well-formed Unicode string");return t.normalize("NFKD")}function ih(t){let e=rh(t),n=e.split(" ");if(![12,15,18,21,24].includes(n.length))throw new Error("Invalid mnemonic");return{nfkd:e,words:n}}function sh(t){if(q(t),![16,20,24,28,32].includes(t.length))throw new RangeError("invalid entropy length")}var oh=t=>{let e=8-t.length/4;return Ln(t)[0]>>e<<e};function ah(t){if(!Array.isArray(t)||t.length!==2048||typeof t[0]!="string")throw new TypeError("Wordlist: expected array of 2048 strings");t.forEach(e=>{if(typeof e!="string")throw new TypeError("wordlist: non-string element: "+e);if(!ba(e))throw new TypeError("wordlist: expected well-formed Unicode string")})}function ch(t,e){ah(e);let n=t.length/3*4,r=new Uint8Array(n+1),i=0,s=0,o=0;for(let c of t){let u=e.indexOf(c);if(u===-1)throw new Error("Unknown word: "+c);for(i=i<<11|u,s+=11;s>=8;)s-=8,r[o++]=i>>>s&255;i&=(1<<s)-1}s>0&&(r[o]=i<<8-s);let a=r.subarray(0,n);if(r[n]!==oh(a))throw new Error("Invalid checksum");return Uint8Array.from(a)}function Ui(t,e){let{words:n}=ih(t),r=ch(n,e);return sh(r),r}function wa(t,e){try{Ui(t,e)}catch{return!1}return!0}var Bi=Object.freeze(`abandon
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
`));var im=Uint8Array.from([115,101,101,100,109,101,45,118,111,105,99,101,45,110,111,116,101,45,118,49]),Fi="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Kn=Uint8Array.from(Fi,t=>t.charCodeAt(0)),sm=(()=>{let t=new Uint8Array(128);for(let e=0;e<Fi.length;e++)t[Fi.charCodeAt(e)]=e;return t})(),Ea=61,_a=8192;function Hi(t){let e=new Uint8Array(Math.ceil(t.length/3)*4),n=0;for(let i=0;i<t.length;i+=3){let s=t[i],o=i+1<t.length?t[i+1]:0,a=i+2<t.length?t[i+2]:0,c=s<<16|o<<8|a;e[n++]=Kn[c>>18&63],e[n++]=Kn[c>>12&63],e[n++]=i+1<t.length?Kn[c>>6&63]:Ea,e[n++]=i+2<t.length?Kn[c&63]:Ea}let r=[];for(let i=0;i<e.length;i+=_a)r.push(String.fromCharCode.apply(null,e.subarray(i,i+_a)));return r.join("")}var uh=32,Yn=t=>Uint8Array.from(t,e=>e.charCodeAt(0)),lh=Yn("seedme-login-v1"),mm=Yn("seedme-body-v1"),gm=Yn("seedme-wrap-v1");function Ia(t){let e=t.toLowerCase().replace(/\d+[.)]/g," ").trim().split(/\s+/).join(" ");return e.split(" ").length!==12||!wa(e,Bi)?null:Ui(e,Bi)}function dh(t){let e=ya(Ln,t,new Uint8Array(0),lh,uh);return{priv:e,pub:Li.getPublicKey(e)}}function hh(t,e){return`seedme-login-v1|${t}|${e}`}function va(t,e){let{priv:n,pub:r}=dh(t),i=Hi(r),s=Li.sign(Yn(hh(i,e)),n);return{pub:i,at:e,sig:Hi(s)}}var Aa=_r({apiKey:"AIzaSyCH3Km8eDjH1PMjXcMaxsWL2YljDTN84Ck",authDomain:"njm-health.firebaseapp.com",projectId:"njm-health",appId:"1:786773823198:web:b4e6ea51c456f3a778fc4f"}),Jn=ni(Aa),Sa=vo(Aa,"us-central1"),fh=ai(Sa,"keyLogin"),Zn=ai(Sa,"review"),E=t=>document.getElementById(t),at=t=>{for(let e of["signin","loading","deck","done","denied"])E(e).hidden=e!==t},J=t=>{let e=E("toast");e.textContent=t,e.hidden=!1,window.clearTimeout(Number(e.dataset.timer)),e.dataset.timer=String(window.setTimeout(()=>e.hidden=!0,2600))},Ut=t=>{let e=t?.code??"";return e.endsWith("permission-denied")?"This page is for SeedMe beta testers.":e.endsWith("not-found")?"No SeedMe account has these words.":e.endsWith("unavailable")||e.endsWith("internal")?"No connection. Try again.":t?.message||"Something went wrong. Try again."},ye=null;E("signin-form").addEventListener("submit",async t=>{t.preventDefault();let e=E("words"),n=Ia(e.value);if(!n){J("These are not 12 SeedMe words. Check each word and its order.");return}let r=E("signin-go");r.disabled=!0;try{let{data:i}=await fh(va(n,Date.now()));n.fill(0),e.value="",await Xr(Jn,An),await Jr(Jn,i.token)}catch(i){J(Ut(i))}finally{r.disabled=!1}});E("signout").addEventListener("click",()=>Qr(Jn));Zr(Jn,t=>{if(E("signout").hidden=!t,!t)return at("signin");Vi()});async function Vi(){at("loading");try{ka((await Zn({action:"next"})).data)}catch(t){if(t?.code?.endsWith("permission-denied"))return at("denied");J(Ut(t)),at("done")}}function ka(t){ye=t.card;let e=t.counts;if(E("counts").textContent=`${e.waiting} waiting for you \xB7 ${e.settled} settled${e.rethink?` \xB7 ${e.rethink} being rethought`:""}`,!ye)return at("done");let n=ye;Ta(E("question"),n.question,n.names??[]),Ta(E("suggestion"),n.suggestion.text,n.names??[]),E("sugg-why").textContent=n.suggestion.why?`Changed because: ${n.suggestion.why}`:"",E("sugg-why").hidden=!n.suggestion.why,E("approvals").textContent=n.approvals>0?`${n.approvals} of ${n.needed} approvals so far`:`${n.needed} approvals settle it`;let r=[],i=n.subject;i?.local&&r.push(`Original name: ${i.local}`),i?.parent&&r.push(`Family: ${i.parent}`),i?.was?.length&&r.push(`Logged as: ${i.was.map(a=>`\u201C${a}\u201D`).join(", ")}`),i?.people&&i.people>1&&r.push(`Logged by ${i.people} people`),i?.note&&r.push(i.note),r.push(...n.context);let s=E("facts");s.replaceChildren(...r.map(a=>Object.assign(document.createElement("li"),{textContent:a}))),s.hidden=r.length===0,E("before").replaceChildren(...n.before.map(a=>{let c=document.createElement("li");return c.textContent=`\u201C${a.text}\u201D${a.why.length?` Turned down: ${a.why.join(" / ")}`:""}`,c})),E("before-box").hidden=n.before.length===0,E("more").open=!1,Wi(),at("deck"),window.scrollTo({top:0})}function Ta(t,e,n){t.replaceChildren();let r=a=>a.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),i=n.filter(Boolean);if(!i.length)return void(t.textContent=e);let s=new RegExp(`(^|[^\\p{L}])(${i.map(r).join("|")})(?=$|[^\\p{L}])`,"giu"),o=0;for(let a of e.matchAll(s)){let c=a.index+a[1].length;c>o&&t.append(e.slice(o,c)),t.append(Object.assign(document.createElement("mark"),{className:"name",textContent:a[2]})),o=c+a[2].length}t.append(e.slice(o))}async function xa(t,e,n){if(ye){ct(!0);try{let{data:r}=await Zn({action:"judge",card:ye.id,v:ye.suggestion.v,verdict:t,why:e,via:n});J(t==="approve"?r.status==="settled"?"Settled.":"Approved.":"Sent back with your reason. A new suggestion follows."),await mh(t),ka(r),gh()}catch(r){J(Ut(r)),Vi()}finally{ct(!1)}}}async function ph(t,e){if(ye){ct(!0);try{await Zn({action:"note",card:ye.id,v:ye.suggestion.v,text:t,via:e}),J("Feedback sent."),Wi()}catch(n){J(Ut(n))}finally{ct(!1)}}}var Ra=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches,Oa=()=>document.querySelector("#deck .card");async function mh(t){let e=Oa();if(!e||Ra())return;let n=t==="approve"?1:-1,r=t==="approve"?"var(--yes)":"var(--no)";e.style.borderColor=r,await e.animate([{transform:"none",opacity:1},{transform:`translateX(${n*24}px) rotate(${n*1.5}deg)`,opacity:1,offset:.35},{transform:`translateX(${n*110}%) rotate(${n*10}deg)`,opacity:0}],{duration:380,easing:"cubic-bezier(0.5, 0, 0.75, 0)"}).finished.catch(()=>{}),e.style.borderColor=""}function gh(){let t=Oa();!t||Ra()||E("deck").hidden||t.animate([{transform:"translateY(24px) scale(0.97)",opacity:0},{transform:"none",opacity:1}],{duration:300,easing:"cubic-bezier(0.2, 0.8, 0.2, 1)"})}function ct(t){for(let e of["approve","reject","speak","skip","why-send","record"])E(e).disabled=t}E("approve").addEventListener("click",()=>xa("approve"));var Ca="reject";function Na(t){Ca=t,E("why-title").textContent=t==="reject"?"Why is it not right?":"Feedback",E("why-send").className=t==="reject"?"no":"yes",E("why-box").hidden=!1,E("verdict-row").hidden=!0}E("reject").addEventListener("click",()=>{Na("reject"),E("why").focus()});E("speak").addEventListener("click",()=>{Na("feedback"),E("record").click()});E("why-cancel").addEventListener("click",()=>Wi());E("why-send").addEventListener("click",()=>{let t=E("why").value.trim(),e=E("why").dataset.via==="voice"?"voice":"text";if(Ca==="feedback")return t?ph(t,e):J("Say or type your feedback.");if(!t)return J("Say or type why it is not right.");xa("reject",t,e)});E("skip").addEventListener("click",()=>Vi());function Wi(){ji(!1),E("why-box").hidden=!0,E("verdict-row").hidden=!1;let t=E("why");t.value="",delete t.dataset.via}var yh=6e4,$e=null,Xn=[],Pa=0,Da=0;E("record").addEventListener("click",async()=>{if($e)return ji(!0);let t;try{t=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{return J("The microphone is off for this page. Type the reason instead.")}let e=["audio/mp4","audio/webm;codecs=opus","audio/webm"].find(n=>MediaRecorder.isTypeSupported(n))||"";$e=new MediaRecorder(t,e?{mimeType:e}:void 0),Xn=[],$e.ondataavailable=n=>n.data.size&&Xn.push(n.data),$e.onstop=()=>t.getTracks().forEach(n=>n.stop()),$e.start(),Da=Date.now(),E("record").textContent="Stop",E("record").classList.add("live"),La()});function La(){let t=Math.max(0,yh-(Date.now()-Da));if(E("rec-clock").textContent=`0:${String(Math.ceil(t/1e3)).padStart(2,"0")} left`,E("rec-clock").hidden=!1,t<=0)return ji(!0);Pa=window.setTimeout(La,250)}function ji(t){window.clearTimeout(Pa),E("rec-clock").hidden=!0,E("record").textContent="Record",E("record").classList.remove("live");let e=$e;if($e=null,!!e){if(!t){e.onstop=()=>e.stream.getTracks().forEach(n=>n.stop()),e.stop();return}e.addEventListener("stop",async()=>{let n=new Blob(Xn,{type:e.mimeType||"audio/webm"});if(Xn=[],n.size<1e3)return J("Nothing was recorded.");ct(!0),J("Writing down what you said\u2026");try{let r=await bh(n),{data:i}=await Zn({action:"transcribe",audio:r,mime:n.type}),s=i.text;if(!s)return J("No words were heard. Try again or type.");let o=E("why");o.value=o.value.trim()?`${o.value.trim()} ${s}`:s,o.dataset.via="voice"}catch(r){J(Ut(r))}finally{ct(!1)}},{once:!0}),e.stop()}}function bh(t){return new Promise((e,n)=>{let r=new FileReader;r.onload=()=>e(String(r.result).split(",")[1]||""),r.onerror=()=>n(r.error),r.readAsDataURL(t)})}})();
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
