import{a as O,o as S,b as C,e as y,r as N,f as R,h as A,t as M,i as H,j as P,w as L,u as D,k as T,l as E,m as W,p as G,q as I,s as K,F as j,v as V,c as J,x as q,y as Q,z as X,A as $}from"./entry.b209ce67.js";const Y={class:"game-app"},Z=["href"],tt=["src"],et={__name:"GameApp",props:{icon:String,link:String},setup(n){return(r,s)=>(S(),C("div",Y,[y("a",{href:n.link},[y("figure",null,[y("img",{src:n.icon},null,8,tt)]),y("p",null,[N(r.$slots,"default",{},void 0,!0)])],8,Z)]))}},st=O(et,[["__scopeId","data-v-fe01fea4"]]),rt=()=>null;function nt(...n){var u;const r=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(r);let[s,e,t={}]=n;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??rt,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const a=R(),o=()=>a.isHydrating?a.payload.data[s]:a.static.data[s],c=()=>o()!==void 0;a._asyncData[s]||(a._asyncData[s]={data:A(o()??((u=t.default)==null?void 0:u.call(t))??null),pending:A(!c()),error:M(a.payload._errors,s)});const i={...a._asyncData[s]};i.refresh=i.execute=(d={})=>{if(a._asyncDataPromises[s]){if(d.dedupe===!1)return a._asyncDataPromises[s];a._asyncDataPromises[s].cancelled=!0}if(d._initial&&c())return o();i.pending.value=!0;const g=new Promise((l,_)=>{try{l(e(a))}catch(B){_(B)}}).then(l=>{if(g.cancelled)return a._asyncDataPromises[s];let _=l;t.transform&&(_=t.transform(l)),t.pick&&(_=at(_,t.pick)),i.data.value=_,i.error.value=null}).catch(l=>{var _;if(g.cancelled)return a._asyncDataPromises[s];i.error.value=l,i.data.value=D(((_=t.default)==null?void 0:_.call(t))??null)}).finally(()=>{g.cancelled||(i.pending.value=!1,a.payload.data[s]=i.data.value,i.error.value&&(a.payload._errors[s]=T(i.error.value)),delete a._asyncDataPromises[s])});return a._asyncDataPromises[s]=g,a._asyncDataPromises[s]};const f=()=>i.refresh({_initial:!0}),h=t.server!==!1&&a.payload.serverRendered;{const d=E();if(d&&!d._nuxtOnBeforeMountCbs){d._nuxtOnBeforeMountCbs=[];const l=d._nuxtOnBeforeMountCbs;d&&(H(()=>{l.forEach(_=>{_()}),l.splice(0,l.length)}),P(()=>l.splice(0,l.length)))}h&&a.isHydrating&&c()?i.pending.value=!1:d&&(a.payload.serverRendered&&a.isHydrating||t.lazy)&&t.immediate?d._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&L(t.watch,()=>i.refresh());const g=a.hook("app:data:refresh",l=>{if(!l||l.includes(s))return i.refresh()});d&&P(g)}const p=Promise.resolve(a._asyncDataPromises[s]).then(()=>i);return Object.assign(p,i),p}function at(n,r){const s={};for(const e of r)s[e]=n[e];return s}const it={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function ot(n,r={}){r={...it,...r};const s=F(r);return s.dispatch(n),s.toString()}function F(n){const r=[];let s=[];const e=t=>{r.push(t)};return{toString(){return r.join("")},getContext(){return s},dispatch(t){return n.replacer&&(t=n.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const a=/\[object (.*)]/i,o=Object.prototype.toString.call(t),c=a.exec(o),i=c?c[1].toLowerCase():"unknown:["+o.toLowerCase()+"]";let f=null;if((f=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(i!=="object"&&i!=="function"&&i!=="asyncfunction")this["_"+i]?this["_"+i](t):n.ignoreUnknown||this._unkown(t,i);else{let h=Object.keys(t);n.unorderedObjects&&(h=h.sort()),n.respectType!==!1&&!z(t)&&h.splice(0,0,"prototype","__proto__","letructor"),n.excludeKeys&&(h=h.filter(function(p){return!n.excludeKeys(p)})),e("object:"+h.length+":");for(const p of h)this.dispatch(p),e(":"),n.excludeValues||this.dispatch(t[p]),e(",")}},_array(t,a){if(a=typeof a<"u"?a:n.unorderedArrays!==!1,e("array:"+t.length+":"),!a||t.length<=1){for(const i of t)this.dispatch(i);return}const o=[],c=t.map(i=>{const f=F(n);return f.dispatch(i),o.push(f.getContext()),f.toString()});return s=[...s,...o],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,a){if(e(a),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),z(t)?this.dispatch("[native]"):this.dispatch(t.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),n.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_set(t){e("set:");const a=[...t];return this._array(a,n.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(n.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function z(n){return typeof n!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(n))!=null}class k{constructor(r,s){r=this.words=r||[],this.sigBytes=s!==void 0?s:r.length*4}toString(r){return(r||ct).stringify(this)}concat(r){if(this.clamp(),this.sigBytes%4)for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<r.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=r.words[s>>>2];return this.sigBytes+=r.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new k([...this.words])}}const ct={stringify(n){const r=[];for(let s=0;s<n.sigBytes;s++){const e=n.words[s>>>2]>>>24-s%4*8&255;r.push((e>>>4).toString(16),(e&15).toString(16))}return r.join("")}},lt={stringify(n){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<n.sigBytes;e+=3){const t=n.words[e>>>2]>>>24-e%4*8&255,a=n.words[e+1>>>2]>>>24-(e+1)%4*8&255,o=n.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|a<<8|o;for(let i=0;i<4&&e*8+i*6<n.sigBytes*8;i++)s.push(r.charAt(c>>>6*(3-i)&63))}return s.join("")}},ut={parse(n){const r=n.length,s=[];for(let e=0;e<r;e++)s[e>>>2]|=(n.charCodeAt(e)&255)<<24-e%4*8;return new k(s,r)}},ft={parse(n){return ut.parse(unescape(encodeURIComponent(n)))}};class ht{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new k,this._nDataBytes=0}_append(r){typeof r=="string"&&(r=ft.parse(r)),this._data.concat(r),this._nDataBytes+=r.sigBytes}_doProcessBlock(r,s){}_process(r){let s,e=this._data.sigBytes/(this.blockSize*4);r?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,a=Math.min(t*4,this._data.sigBytes);if(t){for(let o=0;o<t;o+=this.blockSize)this._doProcessBlock(this._data.words,o);s=this._data.words.splice(0,t),this._data.sigBytes-=a}return new k(s,a)}}class dt extends ht{update(r){return this._append(r),this._process(),this}finalize(r){r&&this._append(r)}}const _t=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],pt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],x=[];class yt extends dt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new k([..._t])}_doProcessBlock(r,s){const e=this._hash.words;let t=e[0],a=e[1],o=e[2],c=e[3],i=e[4],f=e[5],h=e[6],p=e[7];for(let u=0;u<64;u++){if(u<16)x[u]=r[s+u]|0;else{const v=x[u-15],b=(v<<25|v>>>7)^(v<<14|v>>>18)^v>>>3,w=x[u-2],U=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;x[u]=b+x[u-7]+U+x[u-16]}const d=i&f^~i&h,g=t&a^t&o^a&o,l=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),_=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),B=p+_+d+pt[u]+x[u],m=l+g;p=h,h=f,f=i,i=c+B|0,c=o,o=a,a=t,t=B+m|0}e[0]=e[0]+t|0,e[1]=e[1]+a|0,e[2]=e[2]+o|0,e[3]=e[3]+c|0,e[4]=e[4]+i|0,e[5]=e[5]+f|0,e[6]=e[6]+h|0,e[7]=e[7]+p|0}finalize(r){super.finalize(r);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function gt(n){return new yt().finalize(n).toString(lt)}function mt(n,r={}){const s=typeof n=="string"?n:ot(n,r);return gt(s).slice(0,10)}function wt(n,r,s){const[e={},t]=typeof r=="string"?[{},r]:[r,s],a=e.key||mt([t,D(e.baseURL),typeof n=="string"?n:"",D(e.params||e.query)]);if(!a||typeof a!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+a);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const o=a===t?"$f"+a:a,c=W(()=>{let b=n;return typeof b=="function"&&(b=b()),D(b)});if(!e.baseURL&&typeof c.value=="string"&&c.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:f,default:h,transform:p,pick:u,watch:d,immediate:g,...l}=e,_=G({...l,cache:typeof e.cache=="boolean"?void 0:e.cache}),B={server:i,lazy:f,default:h,transform:p,pick:u,immediate:g,watch:d===!1?[]:[_,c,...d||[]]};let m;return nt(o,()=>{var w;return(w=m==null?void 0:m.abort)==null||w.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(c.value,{signal:m.signal,..._})},B)}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const bt={class:"game-drawer"},xt={class:"wrapper"},Bt={class:"game-drawer-con"},vt={class:"game-drawer-box"},St={__name:"GameDrawer",async setup(n){let r,s;const{data:e}=([r,s]=I(()=>wt("/api/games","$dbWCMSsT8j")),r=await r,s(),r),t=K(e.value.data);return(a,o)=>{const c=st;return S(),C("div",bt,[y("div",xt,[y("div",Bt,[y("div",vt,[(S(!0),C(j,null,V(D(t),i=>(S(),J(c,{icon:i.icon,link:i.link},{default:q(()=>[Q(X(i.title),1)]),_:2},1032,["icon","link"]))),256))])])])])}}},kt=O(St,[["__scopeId","data-v-eba3dfbf"]]),Dt={},Ct={class:"login"},Ot=y("div",{class:"login_overlay"},null,-1),At=y("div",{class:"login_con"},[y("form",null,[y("input",{placeholder:"Username",type:"text"}),y("input",{placeholder:"Password",type:"password"}),y("button",null,"Submit")])],-1),Pt=[Ot,At];function $t(n,r){return S(),C("div",Ct,Pt)}const zt=O(Dt,[["render",$t]]),jt={};function Ft(n,r){const s=kt,e=zt;return S(),C(j,null,[$(s),$(e)],64)}const Nt=O(jt,[["render",Ft]]);export{Nt as default};
