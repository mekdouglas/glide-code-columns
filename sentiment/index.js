(()=>{var vn=Object.create;var j=Object.defineProperty,xn=Object.defineProperties,yn=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyDescriptors,Cn=Object.getOwnPropertyNames,ve=Object.getOwnPropertySymbols,Pn=Object.getPrototypeOf,xe=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable;var ye=(r,e,t)=>e in r?j(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,w=(r,e)=>{for(var t in e||(e={}))xe.call(e,t)&&ye(r,t,e[t]);if(ve)for(var t of ve(e))Rn.call(e,t)&&ye(r,t,e[t]);return r},N=(r,e)=>xn(r,Tn(e)),Sn=r=>j(r,"__esModule",{value:!0});var l=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var qn=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Cn(e))!xe.call(r,i)&&i!=="default"&&j(r,i,{get:()=>e[i],enumerable:!(t=yn(e,i))||t.enumerable});return r},Te=r=>qn(Sn(j(r!=null?vn(Pn(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var v=(r,e,t)=>new Promise((i,n)=>{var s=c=>{try{u(t.next(c))}catch(f){n(f)}},a=c=>{try{u(t.throw(c))}catch(f){n(f)}},u=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,a);u((t=t.apply(r,e)).next())});var Pe=l((eo,Ce)=>{function An(r,e,t,i){var n=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++n]);++n<s;)t=e(t,r[n],n,r);return t}Ce.exports=An});var Se=l((ro,Re)=>{function En(r){return function(e){return r==null?void 0:r[e]}}Re.exports=En});var Ae=l((to,qe)=>{var On=Se(),kn={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mn=On(kn);qe.exports=Mn});var Oe=l((no,Ee)=>{var jn=typeof global=="object"&&global&&global.Object===Object&&global;Ee.exports=jn});var Me=l((io,ke)=>{var Nn=Oe(),Un=typeof self=="object"&&self&&self.Object===Object&&self,Dn=Nn||Un||Function("return this")();ke.exports=Dn});var U=l((so,je)=>{var Ln=Me(),In=Ln.Symbol;je.exports=In});var Ue=l((ao,Ne)=>{function Bn(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}Ne.exports=Bn});var Le=l((oo,De)=>{var _n=Array.isArray;De.exports=_n});var He=l((uo,_e)=>{var Ie=U(),Be=Object.prototype,Hn=Be.hasOwnProperty,Vn=Be.toString,E=Ie?Ie.toStringTag:void 0;function Fn(r){var e=Hn.call(r,E),t=r[E];try{r[E]=void 0;var i=!0}catch(s){}var n=Vn.call(r);return i&&(e?r[E]=t:delete r[E]),n}_e.exports=Fn});var Fe=l((lo,Ve)=>{var zn=Object.prototype,Wn=zn.toString;function Jn(r){return Wn.call(r)}Ve.exports=Jn});var Ge=l((co,Je)=>{var ze=U(),Gn=He(),Zn=Fe(),$n="[object Null]",Kn="[object Undefined]",We=ze?ze.toStringTag:void 0;function Xn(r){return r==null?r===void 0?Kn:$n:We&&We in Object(r)?Gn(r):Zn(r)}Je.exports=Xn});var $e=l((fo,Ze)=>{function Yn(r){return r!=null&&typeof r=="object"}Ze.exports=Yn});var Xe=l((ho,Ke)=>{var Qn=Ge(),ei=$e(),ri="[object Symbol]";function ti(r){return typeof r=="symbol"||ei(r)&&Qn(r)==ri}Ke.exports=ti});var nr=l((po,tr)=>{var Ye=U(),ni=Ue(),ii=Le(),si=Xe(),ai=1/0,Qe=Ye?Ye.prototype:void 0,er=Qe?Qe.toString:void 0;function rr(r){if(typeof r=="string")return r;if(ii(r))return ni(r,rr)+"";if(si(r))return er?er.call(r):"";var e=r+"";return e=="0"&&1/r==-ai?"-0":e}tr.exports=rr});var D=l((mo,ir)=>{var oi=nr();function ui(r){return r==null?"":oi(r)}ir.exports=ui});var ar=l((go,sr)=>{var li=Ae(),ci=D(),di=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,fi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",mi=fi+hi+pi,gi="["+mi+"]",wi=RegExp(gi,"g");function bi(r){return r=ci(r),r&&r.replace(di,li).replace(wi,"")}sr.exports=bi});var ur=l((wo,or)=>{var vi=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xi(r){return r.match(vi)||[]}or.exports=xi});var cr=l((bo,lr)=>{var yi=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Ti(r){return yi.test(r)}lr.exports=Ti});var Er=l((vo,Ar)=>{var dr="\\ud800-\\udfff",Ci="\\u0300-\\u036f",Pi="\\ufe20-\\ufe2f",Ri="\\u20d0-\\u20ff",Si=Ci+Pi+Ri,fr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",qi="\\xac\\xb1\\xd7\\xf7",Ai="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ei="\\u2000-\\u206f",Oi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pr="A-Z\\xc0-\\xd6\\xd8-\\xde",ki="\\ufe0e\\ufe0f",mr=qi+Ai+Ei+Oi,gr="['\u2019]",wr="["+mr+"]",Mi="["+Si+"]",br="\\d+",ji="["+fr+"]",vr="["+hr+"]",xr="[^"+dr+mr+br+fr+hr+pr+"]",Ni="\\ud83c[\\udffb-\\udfff]",Ui="(?:"+Mi+"|"+Ni+")",Di="[^"+dr+"]",yr="(?:\\ud83c[\\udde6-\\uddff]){2}",Tr="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+pr+"]",Li="\\u200d",Cr="(?:"+vr+"|"+xr+")",Ii="(?:"+P+"|"+xr+")",Pr="(?:"+gr+"(?:d|ll|m|re|s|t|ve))?",Rr="(?:"+gr+"(?:D|LL|M|RE|S|T|VE))?",Sr=Ui+"?",qr="["+ki+"]?",Bi="(?:"+Li+"(?:"+[Di,yr,Tr].join("|")+")"+qr+Sr+")*",_i="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Hi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vi=qr+Sr+Bi,Fi="(?:"+[ji,yr,Tr].join("|")+")"+Vi,zi=RegExp([P+"?"+vr+"+"+Pr+"(?="+[wr,P,"$"].join("|")+")",Ii+"+"+Rr+"(?="+[wr,P+Cr,"$"].join("|")+")",P+"?"+Cr+"+"+Pr,P+"+"+Rr,Hi,_i,br,Fi].join("|"),"g");function Wi(r){return r.match(zi)||[]}Ar.exports=Wi});var kr=l((xo,Or)=>{var Ji=ur(),Gi=cr(),Zi=D(),$i=Er();function Ki(r,e,t){return r=Zi(r),e=t?void 0:e,e===void 0?Gi(r)?$i(r):Ji(r):r.match(e)||[]}Or.exports=Ki});var jr=l((yo,Mr)=>{var Xi=Pe(),Yi=ar(),Qi=kr(),es="['\u2019]",rs=RegExp(es,"g");function ts(r){return function(e){return Xi(Qi(Yi(e).replace(rs,"")),r,"")}}Mr.exports=ts});var Ur=l((To,Nr)=>{function ns(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(n);++i<n;)s[i]=r[i+e];return s}Nr.exports=ns});var Lr=l((Co,Dr)=>{var is=Ur();function ss(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:is(r,e,t)}Dr.exports=ss});var J=l((Po,Ir)=>{var as="\\ud800-\\udfff",os="\\u0300-\\u036f",us="\\ufe20-\\ufe2f",ls="\\u20d0-\\u20ff",cs=os+us+ls,ds="\\ufe0e\\ufe0f",fs="\\u200d",hs=RegExp("["+fs+as+cs+ds+"]");function ps(r){return hs.test(r)}Ir.exports=ps});var _r=l((Ro,Br)=>{function ms(r){return r.split("")}Br.exports=ms});var Zr=l((So,Gr)=>{var Hr="\\ud800-\\udfff",gs="\\u0300-\\u036f",ws="\\ufe20-\\ufe2f",bs="\\u20d0-\\u20ff",vs=gs+ws+bs,xs="\\ufe0e\\ufe0f",ys="["+Hr+"]",G="["+vs+"]",Z="\\ud83c[\\udffb-\\udfff]",Ts="(?:"+G+"|"+Z+")",Vr="[^"+Hr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",zr="[\\ud800-\\udbff][\\udc00-\\udfff]",Cs="\\u200d",Wr=Ts+"?",Jr="["+xs+"]?",Ps="(?:"+Cs+"(?:"+[Vr,Fr,zr].join("|")+")"+Jr+Wr+")*",Rs=Jr+Wr+Ps,Ss="(?:"+[Vr+G+"?",G,Fr,zr,ys].join("|")+")",qs=RegExp(Z+"(?="+Z+")|"+Ss+Rs,"g");function As(r){return r.match(qs)||[]}Gr.exports=As});var Kr=l((qo,$r)=>{var Es=_r(),Os=J(),ks=Zr();function Ms(r){return Os(r)?ks(r):Es(r)}$r.exports=Ms});var Yr=l((Ao,Xr)=>{var js=Lr(),Ns=J(),Us=Kr(),Ds=D();function Ls(r){return function(e){e=Ds(e);var t=Ns(e)?Us(e):void 0,i=t?t[0]:e.charAt(0),n=t?js(t,1).join(""):e.slice(1);return i[r]()+n}}Xr.exports=Ls});var et=l((Eo,Qr)=>{var Is=Yr(),Bs=Is("toUpperCase");Qr.exports=Bs});var tt=l((Oo,rt)=>{var _s=jr(),Hs=et(),Vs=_s(function(r,e,t){return r+(t?" ":"")+Hs(e)});rt.exports=Vs});var X=l((Uo,lt)=>{"use strict";lt.exports=function(e,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return e.apply(t,n)}}});var m=l((Do,ft)=>{"use strict";var sa=X(),T=Object.prototype.toString;function Y(r){return T.call(r)==="[object Array]"}function Q(r){return typeof r=="undefined"}function aa(r){return r!==null&&!Q(r)&&r.constructor!==null&&!Q(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function oa(r){return T.call(r)==="[object ArrayBuffer]"}function ua(r){return typeof FormData!="undefined"&&r instanceof FormData}function la(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function ca(r){return typeof r=="string"}function da(r){return typeof r=="number"}function ct(r){return r!==null&&typeof r=="object"}function I(r){if(T.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function fa(r){return T.call(r)==="[object Date]"}function ha(r){return T.call(r)==="[object File]"}function pa(r){return T.call(r)==="[object Blob]"}function dt(r){return T.call(r)==="[object Function]"}function ma(r){return ct(r)&&dt(r.pipe)}function ga(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function wa(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function ba(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function ee(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Y(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function re(){var r={};function e(n,s){I(r[s])&&I(n)?r[s]=re(r[s],n):I(n)?r[s]=re({},n):Y(n)?r[s]=n.slice():r[s]=n}for(var t=0,i=arguments.length;t<i;t++)ee(arguments[t],e);return r}function va(r,e,t){return ee(e,function(n,s){t&&typeof n=="function"?r[s]=sa(n,t):r[s]=n}),r}function xa(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}ft.exports={isArray:Y,isArrayBuffer:oa,isBuffer:aa,isFormData:ua,isArrayBufferView:la,isString:ca,isNumber:da,isObject:ct,isPlainObject:I,isUndefined:Q,isDate:fa,isFile:ha,isBlob:pa,isFunction:dt,isStream:ma,isURLSearchParams:ga,isStandardBrowserEnv:ba,forEach:ee,merge:re,extend:va,trim:wa,stripBOM:xa}});var te=l((Lo,pt)=>{"use strict";var R=m();function ht(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}pt.exports=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(R.isURLSearchParams(t))n=t.toString();else{var s=[];R.forEach(t,function(c,f){c===null||typeof c=="undefined"||(R.isArray(c)?f=f+"[]":c=[c],R.forEach(c,function(d){R.isDate(d)?d=d.toISOString():R.isObject(d)&&(d=JSON.stringify(d)),s.push(ht(f)+"="+ht(d))}))}),n=s.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e}});var gt=l((Io,mt)=>{"use strict";var ya=m();function B(){this.handlers=[]}B.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};B.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};B.prototype.forEach=function(e){ya.forEach(this.handlers,function(i){i!==null&&e(i)})};mt.exports=B});var bt=l((Bo,wt)=>{"use strict";var Ta=m();wt.exports=function(e,t){Ta.forEach(e,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[s])})}});var ne=l((_o,vt)=>{"use strict";vt.exports=function(e,t,i,n,s){return e.config=t,i&&(e.code=i),e.request=n,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}});var ie=l((Ho,xt)=>{"use strict";var Ca=ne();xt.exports=function(e,t,i,n,s){var a=new Error(e);return Ca(a,t,i,n,s)}});var Tt=l((Vo,yt)=>{"use strict";var Pa=ie();yt.exports=function(e,t,i){var n=i.config.validateStatus;!i.status||!n||n(i.status)?e(i):t(Pa("Request failed with status code "+i.status,i.config,null,i.request,i))}});var Pt=l((Fo,Ct)=>{"use strict";var _=m();Ct.exports=_.isStandardBrowserEnv()?function(){return{write:function(t,i,n,s,a,u){var c=[];c.push(t+"="+encodeURIComponent(i)),_.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),_.isString(s)&&c.push("path="+s),_.isString(a)&&c.push("domain="+a),u===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var i=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var St=l((zo,Rt)=>{"use strict";Rt.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}});var At=l((Wo,qt)=>{"use strict";qt.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}});var Ot=l((Jo,Et)=>{"use strict";var Ra=St(),Sa=At();Et.exports=function(e,t){return e&&!Ra(t)?Sa(e,t):t}});var Mt=l((Go,kt)=>{"use strict";var se=m(),qa=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];kt.exports=function(e){var t={},i,n,s;return e&&se.forEach(e.split(`
`),function(u){if(s=u.indexOf(":"),i=se.trim(u.substr(0,s)).toLowerCase(),n=se.trim(u.substr(s+1)),i){if(t[i]&&qa.indexOf(i)>=0)return;i==="set-cookie"?t[i]=(t[i]?t[i]:[]).concat([n]):t[i]=t[i]?t[i]+", "+n:n}}),t}});var Ut=l((Zo,Nt)=>{"use strict";var jt=m();Nt.exports=jt.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),i;function n(s){var a=s;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return i=n(window.location.href),function(a){var u=jt.isString(a)?n(a):a;return u.protocol===i.protocol&&u.host===i.host}}():function(){return function(){return!0}}()});var O=l(($o,Dt)=>{"use strict";function ae(r){this.message=r}ae.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};ae.prototype.__CANCEL__=!0;Dt.exports=ae});var ue=l((Ko,Lt)=>{"use strict";var H=m(),Aa=Tt(),Ea=Pt(),Oa=te(),ka=Ot(),Ma=Mt(),ja=Ut(),oe=ie(),Na=k(),Ua=O();Lt.exports=function(e){return new Promise(function(i,n){var s=e.data,a=e.headers,u=e.responseType,c;function f(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}H.isFormData(s)&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",p=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(d+":"+p)}var A=ka(e.baseURL,e.url);o.open(e.method.toUpperCase(),Oa(A,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function we(){if(!!o){var b="getAllResponseHeaders"in o?Ma(o.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?o.responseText:o.response,y={data:C,status:o.status,statusText:o.statusText,headers:b,config:e,request:o};Aa(function(W){i(W),f()},function(W){n(W),f()},y),o=null}}if("onloadend"in o?o.onloadend=we:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(we)},o.onabort=function(){!o||(n(oe("Request aborted",e,"ECONNABORTED",o)),o=null)},o.onerror=function(){n(oe("Network Error",e,null,o)),o=null},o.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",y=e.transitional||Na.transitional;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(oe(C,e,y.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",o)),o=null},H.isStandardBrowserEnv()){var be=(e.withCredentials||ja(A))&&e.xsrfCookieName?Ea.read(e.xsrfCookieName):void 0;be&&(a[e.xsrfHeaderName]=be)}"setRequestHeader"in o&&H.forEach(a,function(C,y){typeof s=="undefined"&&y.toLowerCase()==="content-type"?delete a[y]:o.setRequestHeader(y,C)}),H.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(b){!o||(n(!b||b&&b.type?new Ua("canceled"):b),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),o.send(s)})}});var k=l((Xo,_t)=>{"use strict";var h=m(),It=bt(),Da=ne(),La={"Content-Type":"application/x-www-form-urlencoded"};function Bt(r,e){!h.isUndefined(r)&&h.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Ia(){var r;return typeof XMLHttpRequest!="undefined"?r=ue():typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]"&&(r=ue()),r}function Ba(r,e,t){if(h.isString(r))try{return(e||JSON.parse)(r),h.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var V={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Ia(),transformRequest:[function(e,t){return It(t,"Accept"),It(t,"Content-Type"),h.isFormData(e)||h.isArrayBuffer(e)||h.isBuffer(e)||h.isStream(e)||h.isFile(e)||h.isBlob(e)?e:h.isArrayBufferView(e)?e.buffer:h.isURLSearchParams(e)?(Bt(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):h.isObject(e)||t&&t["Content-Type"]==="application/json"?(Bt(t,"application/json"),Ba(e)):e}],transformResponse:[function(e){var t=this.transitional||V.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&h.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(s)throw a.name==="SyntaxError"?Da(a,this,"E_JSON_PARSE"):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};h.forEach(["delete","get","head"],function(e){V.headers[e]={}});h.forEach(["post","put","patch"],function(e){V.headers[e]=h.merge(La)});_t.exports=V});var Vt=l((Yo,Ht)=>{"use strict";var _a=m(),Ha=k();Ht.exports=function(e,t,i){var n=this||Ha;return _a.forEach(i,function(a){e=a.call(n,e,t)}),e}});var le=l((Qo,Ft)=>{"use strict";Ft.exports=function(e){return!!(e&&e.__CANCEL__)}});var Jt=l((eu,Wt)=>{"use strict";var zt=m(),ce=Vt(),Va=le(),Fa=k(),za=O();function de(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new za("canceled")}Wt.exports=function(e){de(e),e.headers=e.headers||{},e.data=ce.call(e,e.data,e.headers,e.transformRequest),e.headers=zt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),zt.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Fa.adapter;return t(e).then(function(n){return de(e),n.data=ce.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Va(n)||(de(e),n&&n.response&&(n.response.data=ce.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})}});var fe=l((ru,Gt)=>{"use strict";var g=m();Gt.exports=function(e,t){t=t||{};var i={};function n(o,d){return g.isPlainObject(o)&&g.isPlainObject(d)?g.merge(o,d):g.isPlainObject(d)?g.merge({},d):g.isArray(d)?d.slice():d}function s(o){if(g.isUndefined(t[o])){if(!g.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function a(o){if(!g.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(g.isUndefined(t[o])){if(!g.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function c(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var f={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:c};return g.forEach(Object.keys(e).concat(Object.keys(t)),function(d){var p=f[d]||s,A=p(d);g.isUndefined(A)&&p!==c||(i[d]=A)}),i}});var he=l((tu,Zt)=>{Zt.exports={version:"0.23.0"}});var Xt=l((nu,Kt)=>{"use strict";var Wa=he().version,pe={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){pe[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var $t={};pe.transitional=function(e,t,i){function n(s,a){return"[Axios v"+Wa+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,u){if(e===!1)throw new Error(n(a," has been removed"+(t?" in "+t:"")));return t&&!$t[a]&&($t[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,a,u):!0}};function Ja(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var i=Object.keys(r),n=i.length;n-- >0;){var s=i[n],a=e[s];if(a){var u=r[s],c=u===void 0||a(u,s,r);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+s)}}Kt.exports={assertOptions:Ja,validators:pe}});var nn=l((iu,tn)=>{"use strict";var Yt=m(),Ga=te(),Qt=gt(),en=Jt(),F=fe(),rn=Xt(),S=rn.validators;function M(r){this.defaults=r,this.interceptors={request:new Qt,response:new Qt}}M.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=F(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&rn.assertOptions(t,{silentJSONParsing:S.transitional(S.boolean),forcedJSONParsing:S.transitional(S.boolean),clarifyTimeoutError:S.transitional(S.boolean)},!1);var i=[],n=!0;this.interceptors.request.forEach(function(p){typeof p.runWhen=="function"&&p.runWhen(e)===!1||(n=n&&p.synchronous,i.unshift(p.fulfilled,p.rejected))});var s=[];this.interceptors.response.forEach(function(p){s.push(p.fulfilled,p.rejected)});var a;if(!n){var u=[en,void 0];for(Array.prototype.unshift.apply(u,i),u=u.concat(s),a=Promise.resolve(e);u.length;)a=a.then(u.shift(),u.shift());return a}for(var c=e;i.length;){var f=i.shift(),o=i.shift();try{c=f(c)}catch(d){o(d);break}}try{a=en(c)}catch(d){return Promise.reject(d)}for(;s.length;)a=a.then(s.shift(),s.shift());return a};M.prototype.getUri=function(e){return e=F(this.defaults,e),Ga(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Yt.forEach(["delete","get","head","options"],function(e){M.prototype[e]=function(t,i){return this.request(F(i||{},{method:e,url:t,data:(i||{}).data}))}});Yt.forEach(["post","put","patch"],function(e){M.prototype[e]=function(t,i,n){return this.request(F(n||{},{method:e,url:t,data:i}))}});tn.exports=M});var an=l((su,sn)=>{"use strict";var Za=O();function q(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(i){if(!!t._listeners){var n,s=t._listeners.length;for(n=0;n<s;n++)t._listeners[n](i);t._listeners=null}}),this.promise.then=function(i){var n,s=new Promise(function(a){t.subscribe(a),n=a}).then(i);return s.cancel=function(){t.unsubscribe(n)},s},r(function(n){t.reason||(t.reason=new Za(n),e(t.reason))})}q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};q.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};q.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};q.source=function(){var e,t=new q(function(n){e=n});return{token:t,cancel:e}};sn.exports=q});var un=l((au,on)=>{"use strict";on.exports=function(e){return function(i){return e.apply(null,i)}}});var cn=l((ou,ln)=>{"use strict";ln.exports=function(e){return typeof e=="object"&&e.isAxiosError===!0}});var hn=l((uu,me)=>{"use strict";var dn=m(),$a=X(),z=nn(),Ka=fe(),Xa=k();function fn(r){var e=new z(r),t=$a(z.prototype.request,e);return dn.extend(t,z.prototype,e),dn.extend(t,e),t.create=function(n){return fn(Ka(r,n))},t}var x=fn(Xa);x.Axios=z;x.Cancel=O();x.CancelToken=an();x.isCancel=le();x.VERSION=he().version;x.all=function(e){return Promise.all(e)};x.spread=un();x.isAxiosError=cn();me.exports=x;me.exports.default=x});var mn=l((lu,pn)=>{pn.exports=hn()});var it=Te(tt());var Fs=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,zs=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Ws=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,nt=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Js=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Gs=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Zs=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,$s=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ks=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Xs=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Ys=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Qs=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,ea={Glide:Fs,"Machine Learning":Ys,General:nt,Array:Js,Number:Ws,Encoding:Qs,Text:Xs,"Data & APIs":Ks,Image:Gs,Fun:Zs,"Date & Time":$s,Code:zs};function $({icon:r,category:e}){var t;return(t=r!=null?r:ea[e])!=null?t:nt}function st(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(st):r}function ra(r,e){return v(this,null,function*(){var u;let{data:{key:t,params:i}}=r,n,s;try{n=yield e(...i)}catch(c){n=void 0;try{s=c.toString()}catch(f){s="Exception can't be stringified."}}let a={key:t};n!==void 0&&(n=st(n),a.result={type:"string",value:n}),s!==void 0&&(a.error=s),((u=r.source)==null?void 0:u.postMessage).call(u,a,"*")})}function ta(r){return typeof window!="undefined"&&window.addEventListener("message",e=>ra(e,r.run)),N(w({},r),{json:JSON.stringify(na(r),null,2)})}function na(r){let{name:e,category:t,released:i,description:n,author:s,result:a,params:u,about:c,video:f}=r,o=$(r);return{name:e,category:t,released:i,description:n,author:s,result:a,about:c,icon:o,video:f,params:Object.entries(u).map(([d,p])=>w({name:d},p))}}var ia={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return v(this,null,function*(){})}},L=class{constructor(e={},t=[]){this.definition=w(w({},ia),e),this.requiredParams=[...t]}with(e,t=[]){return new L(w(w({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:$({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,it.default)(t)),this.with({params:N(w({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function s(...a){let u={};if(a.forEach(({value:c},f)=>{u[n[f]]=c}),!i.some(c=>u[c]===void 0))return e(u)}return ta(N(w({},this.definition),{run:s}))}};function at(r){return new L({name:r})}var ot={timeoutSeconds:5*60};function ut(r){return(new Date().getTime()-r.getTime())/1e3}var K=class{constructor(e=ot){this.cache=new Map;this.props=w(w({},e),ot)}get(e){return v(this,null,function*(){var n;let{timestamp:t,item:i}=(n=this.cache.get(e))!=null?n:{timestamp:new Date(0)};if(ut(t)<this.props.timeoutSeconds)return i;this.cache.delete(e)})}getWith(e,t){return v(this,null,function*(){var s;let{timestamp:i,item:n}=(s=this.cache.get(e))!=null?s:{timestamp:new Date(0)};if(ut(i)<this.props.timeoutSeconds)return n;{let a=yield t(e);return this.set(e,a),a}})}set(e,t){return this.cache.set(e,{timestamp:new Date,item:t})}fetch(i){return v(this,arguments,function*(e,t=e){return yield this.getWith(t,()=>fetch(e).then(n=>n.json()))})}};var gn=Te(mn()),Ya=new K({timeoutSeconds:5*60}),ge={sentiment:r=>r.type,score:r=>r.score,full:JSON.stringify},wn="sentiment",fu=at("Text Sentiment").withAuthor("twinword inc.","help@twinword.com").withCategory("Data & APIs").withDescription("Is this comment positive or negative? Find out the tone.").withAbout(`
    Subscribe and get an API key at [rapidapi.com/twinword/api/sentiment-analysis](https://rapidapi.com/twinword/api/sentiment-analysis/).
  `).withRequiredStringParam("text").withRequiredStringParam("apiKey","API Key").withStringParam("interpretation",`Result (${Object.keys(ge).join(", ")})`).withPrimitiveResult().run(i=>v(void 0,[i],function*({text:r,apiKey:e,interpretation:t=wn}){var u;let n=(u=ge[t])!=null?u:ge[wn];function s(){return v(this,null,function*(){try{return(yield gn.default.get("https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",{params:{text:r},headers:{"x-rapidapi-host":"twinword-sentiment-analysis.p.rapidapi.com","x-rapidapi-key":e}})).data}catch(c){return}})}let a=yield Ya.getWith(r,s);return n(a)}));})();
//# sourceMappingURL=index.js.map
