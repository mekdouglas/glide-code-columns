(()=>{var Mr=Object.create;var w=Object.defineProperty,kr=Object.defineProperties,Ar=Object.getOwnPropertyDescriptor,jr=Object.getOwnPropertyDescriptors,qr=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,Or=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Dr=Object.prototype.propertyIsEnumerable;var j=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&j(e,t,r[t]);if(k)for(var t of k(r))Dr.call(r,t)&&j(e,t,r[t]);return e},b=(e,r)=>kr(e,jr(r)),Ir=e=>w(e,"__esModule",{value:!0});var s=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Ur=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of qr(r))!A.call(e,i)&&i!=="default"&&w(e,i,{get:()=>r[i],enumerable:!(t=Ar(r,i))||t.enumerable});return e},Nr=e=>Ur(Ir(w(e!=null?Mr(Or(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var m=(e,r,t)=>new Promise((i,n)=>{var o=a=>{try{d(t.next(a))}catch(u){n(u)}},l=a=>{try{d(t.throw(a))}catch(u){n(u)}},d=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,l);d((t=t.apply(e,r)).next())});var I=s((Cn,D)=>{function Vr(e,r,t,i){var n=-1,o=e==null?0:e.length;for(i&&o&&(t=e[++n]);++n<o;)t=r(t,e[n],n,e);return t}D.exports=Vr});var N=s((Rn,U)=>{function Er(e){return function(r){return e==null?void 0:e[r]}}U.exports=Er});var E=s((Sn,V)=>{var Lr=N(),_r={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Hr=Lr(_r);V.exports=Hr});var _=s((Mn,L)=>{var zr=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=zr});var z=s((kn,H)=>{var Fr=_(),Gr=typeof self=="object"&&self&&self.Object===Object&&self,Wr=Fr||Gr||Function("return this")();H.exports=Wr});var x=s((An,F)=>{var Br=z(),Zr=Br.Symbol;F.exports=Zr});var W=s((jn,G)=>{function $r(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}G.exports=$r});var Z=s((qn,B)=>{var Jr=Array.isArray;B.exports=Jr});var K=s((On,Y)=>{var $=x(),J=Object.prototype,Yr=J.hasOwnProperty,Kr=J.toString,p=$?$.toStringTag:void 0;function Qr(e){var r=Yr.call(e,p),t=e[p];try{e[p]=void 0;var i=!0}catch(o){}var n=Kr.call(e);return i&&(r?e[p]=t:delete e[p]),n}Y.exports=Qr});var X=s((Dn,Q)=>{var Xr=Object.prototype,et=Xr.toString;function rt(e){return et.call(e)}Q.exports=rt});var ie=s((In,te)=>{var ee=x(),tt=K(),it=X(),nt="[object Null]",at="[object Undefined]",re=ee?ee.toStringTag:void 0;function st(e){return e==null?e===void 0?at:nt:re&&re in Object(e)?tt(e):it(e)}te.exports=st});var ae=s((Un,ne)=>{function ot(e){return e!=null&&typeof e=="object"}ne.exports=ot});var oe=s((Nn,se)=>{var ut=ie(),dt=ae(),lt="[object Symbol]";function ct(e){return typeof e=="symbol"||dt(e)&&ut(e)==lt}se.exports=ct});var he=s((Vn,me)=>{var ue=x(),mt=W(),ht=Z(),ft=oe(),gt=1/0,de=ue?ue.prototype:void 0,le=de?de.toString:void 0;function ce(e){if(typeof e=="string")return e;if(ht(e))return mt(e,ce)+"";if(ft(e))return le?le.call(e):"";var r=e+"";return r=="0"&&1/e==-gt?"-0":r}me.exports=ce});var v=s((En,fe)=>{var pt=he();function wt(e){return e==null?"":pt(e)}fe.exports=wt});var pe=s((Ln,ge)=>{var bt=E(),xt=v(),vt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Ct=Tt+yt+Pt,Rt="["+Ct+"]",St=RegExp(Rt,"g");function Mt(e){return e=xt(e),e&&e.replace(vt,bt).replace(St,"")}ge.exports=Mt});var be=s((_n,we)=>{var kt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function At(e){return e.match(kt)||[]}we.exports=At});var ve=s((Hn,xe)=>{var jt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function qt(e){return jt.test(e)}xe.exports=qt});var Le=s((zn,Ee)=>{var Te="\\ud800-\\udfff",Ot="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",It="\\u20d0-\\u20ff",Ut=Ot+Dt+It,ye="\\u2700-\\u27bf",Pe="a-z\\xdf-\\xf6\\xf8-\\xff",Nt="\\xac\\xb1\\xd7\\xf7",Vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Et="\\u2000-\\u206f",Lt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",_t="\\ufe0e\\ufe0f",Re=Nt+Vt+Et+Lt,Se="['\u2019]",Me="["+Re+"]",Ht="["+Ut+"]",ke="\\d+",zt="["+ye+"]",Ae="["+Pe+"]",je="[^"+Te+Re+ke+ye+Pe+Ce+"]",Ft="\\ud83c[\\udffb-\\udfff]",Gt="(?:"+Ht+"|"+Ft+")",Wt="[^"+Te+"]",qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Oe="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Ce+"]",Bt="\\u200d",De="(?:"+Ae+"|"+je+")",Zt="(?:"+f+"|"+je+")",Ie="(?:"+Se+"(?:d|ll|m|re|s|t|ve))?",Ue="(?:"+Se+"(?:D|LL|M|RE|S|T|VE))?",Ne=Gt+"?",Ve="["+_t+"]?",$t="(?:"+Bt+"(?:"+[Wt,qe,Oe].join("|")+")"+Ve+Ne+")*",Jt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Yt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Kt=Ve+Ne+$t,Qt="(?:"+[zt,qe,Oe].join("|")+")"+Kt,Xt=RegExp([f+"?"+Ae+"+"+Ie+"(?="+[Me,f,"$"].join("|")+")",Zt+"+"+Ue+"(?="+[Me,f+De,"$"].join("|")+")",f+"?"+De+"+"+Ie,f+"+"+Ue,Yt,Jt,ke,Qt].join("|"),"g");function ei(e){return e.match(Xt)||[]}Ee.exports=ei});var He=s((Fn,_e)=>{var ri=be(),ti=ve(),ii=v(),ni=Le();function ai(e,r,t){return e=ii(e),r=t?void 0:r,r===void 0?ti(e)?ni(e):ri(e):e.match(r)||[]}_e.exports=ai});var Fe=s((Gn,ze)=>{var si=I(),oi=pe(),ui=He(),di="['\u2019]",li=RegExp(di,"g");function ci(e){return function(r){return si(ui(oi(r).replace(li,"")),e,"")}}ze.exports=ci});var We=s((Wn,Ge)=>{function mi(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(n);++i<n;)o[i]=e[i+r];return o}Ge.exports=mi});var Ze=s((Bn,Be)=>{var hi=We();function fi(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:hi(e,r,t)}Be.exports=fi});var P=s((Zn,$e)=>{var gi="\\ud800-\\udfff",pi="\\u0300-\\u036f",wi="\\ufe20-\\ufe2f",bi="\\u20d0-\\u20ff",xi=pi+wi+bi,vi="\\ufe0e\\ufe0f",Ti="\\u200d",yi=RegExp("["+Ti+gi+xi+vi+"]");function Pi(e){return yi.test(e)}$e.exports=Pi});var Ye=s(($n,Je)=>{function Ci(e){return e.split("")}Je.exports=Ci});var nr=s((Jn,ir)=>{var Ke="\\ud800-\\udfff",Ri="\\u0300-\\u036f",Si="\\ufe20-\\ufe2f",Mi="\\u20d0-\\u20ff",ki=Ri+Si+Mi,Ai="\\ufe0e\\ufe0f",ji="["+Ke+"]",C="["+ki+"]",R="\\ud83c[\\udffb-\\udfff]",qi="(?:"+C+"|"+R+")",Qe="[^"+Ke+"]",Xe="(?:\\ud83c[\\udde6-\\uddff]){2}",er="[\\ud800-\\udbff][\\udc00-\\udfff]",Oi="\\u200d",rr=qi+"?",tr="["+Ai+"]?",Di="(?:"+Oi+"(?:"+[Qe,Xe,er].join("|")+")"+tr+rr+")*",Ii=tr+rr+Di,Ui="(?:"+[Qe+C+"?",C,Xe,er,ji].join("|")+")",Ni=RegExp(R+"(?="+R+")|"+Ui+Ii,"g");function Vi(e){return e.match(Ni)||[]}ir.exports=Vi});var sr=s((Yn,ar)=>{var Ei=Ye(),Li=P(),_i=nr();function Hi(e){return Li(e)?_i(e):Ei(e)}ar.exports=Hi});var ur=s((Kn,or)=>{var zi=Ze(),Fi=P(),Gi=sr(),Wi=v();function Bi(e){return function(r){r=Wi(r);var t=Fi(r)?Gi(r):void 0,i=t?t[0]:r.charAt(0),n=t?zi(t,1).join(""):r.slice(1);return i[e]()+n}}or.exports=Bi});var lr=s((Qn,dr)=>{var Zi=ur(),$i=Zi("toUpperCase");dr.exports=$i});var mr=s((Xn,cr)=>{var Ji=Fe(),Yi=lr(),Ki=Ji(function(e,r,t){return e+(t?" ":"")+Yi(r)});cr.exports=Ki});var br=s((g,wr)=>{"use strict";var gn=function(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof h!="undefined")return h;throw new Error("unable to locate global object")},h=gn();wr.exports=g=h.fetch;h.fetch&&(g.default=h.fetch.bind(h));g.Headers=h.Headers;g.Request=h.Request;g.Response=h.Response});var Pr=s((ia,yr)=>{"use strict";function pn(e){if(e&&e.__esModule)return e;var r=Object.create(null);return e&&Object.keys(e).forEach(function(t){if(t!=="default"){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})}}),r.default=e,Object.freeze(r)}var xr="https://secure.gravatar.com",M={defaultIcon:"404",rating:"G",size:"80"},wn=e=>Object.entries(e).map(r=>r.map(encodeURIComponent).join("=")).join("&"),bn=e=>{for(var r=[],t=0;t<64;)r[t]=0|Math.sin(++t%Math.PI)*4294967296;var i,n,o,l=[i=1732584193,n=4023233417,~i,~n],d=[],a=unescape(encodeURI(e))+"\x80",u=a.length;for(e=--u/4+2|15,d[--e]=u*8;~u;)d[u>>2]|=a.charCodeAt(u)<<8*u--;for(t=a=0;t<e;t+=16){for(u=l;a<64;u=[o=u[3],i+((o=u[0]+[i&n|~i&o,o&i|~o&n,i^n^o,n^(i|~o)][u=a>>4]+r[a]+~~d[t|[a,5*a+1,3*a+5,7*a][u]&15])<<(u=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*u+a++%4])|o>>>-u),i,n])i=u[1]|0,n=u[2];for(a=4;a;)l[--a]+=u[a]}for(e="";a<32;)e+=(l[a>>3]>>(1^a++)*4&15).toString(16);return e},vr=e=>bn(e.trim().toLowerCase()),Tr=async function(){return typeof window!="undefined"?window.fetch(...arguments):await Promise.resolve().then(function(){return pn(br())}).then(e=>e.default(...arguments))},xn={url(e,r={}){let t={d:r.defaultIcon||M.defaultIcon,r:r.rating||M.rating,s:r.size||M.size};return`${xr}/avatar/${vr(e)}?${wn(t)}`},async profiles(e,r={format:"json"}){let t=`${xr}/${r.hash===!1?e:vr(e)}.${r.format}`;return Tr(t).then(i=>i.json()).then(i=>i.entry)},async resolve(e,r={}){let t=this.url(e,r);return Tr(t,{method:"HEAD"}).then(i=>i.status===200?t:Promise.reject("Avatar does not exist"))}};yr.exports=xn});var q={timeoutSeconds:5*60};function O(e){return(new Date().getTime()-e.getTime())/1e3}var y=class{constructor(r=q){this.cache=new Map;this.props=c(c({},r),q)}get(r){return m(this,null,function*(){var n;let{timestamp:t,item:i}=(n=this.cache.get(r))!=null?n:{timestamp:new Date(0)};if(O(t)<this.props.timeoutSeconds)return i;this.cache.delete(r)})}getWith(r,t){return m(this,null,function*(){var o;let{timestamp:i,item:n}=(o=this.cache.get(r))!=null?o:{timestamp:new Date(0)};if(O(i)<this.props.timeoutSeconds)return n;{let l=yield t(r);return this.set(r,l),l}})}set(r,t){return this.cache.set(r,{timestamp:new Date,item:t})}fetch(i){return m(this,arguments,function*(r,t=r){return yield this.getWith(t,()=>fetch(r).then(n=>n.json()))})}};var fr=Nr(mr());var Qi=`
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
    `,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,en=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,hr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,rn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,tn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,an=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,sn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,on=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,dn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,ln={Glide:Qi,"Machine Learning":un,General:hr,Array:rn,Number:en,Encoding:dn,Text:on,"Data & APIs":sn,Image:tn,Fun:nn,"Date & Time":an,Code:Xi};function S({icon:e,category:r}){var t;return(t=e!=null?e:ln[r])!=null?t:hr}function gr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(gr):e}function cn(e,r){return m(this,null,function*(){var d;let{data:{key:t,params:i}}=e,n,o;try{n=yield r(...i)}catch(a){n=void 0;try{o=a.toString()}catch(u){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=gr(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((d=e.source)==null?void 0:d.postMessage).call(d,l,"*")})}function mn(e){return typeof window!="undefined"&&window.addEventListener("message",r=>cn(r,e.run)),b(c({},e),{json:JSON.stringify(hn(e),null,2)})}function hn(e){let{name:r,category:t,released:i,description:n,author:o,result:l,params:d,about:a,video:u}=e,Cr=S(e);return{name:r,category:t,released:i,description:n,author:o,result:l,about:a,icon:Cr,video:u,params:Object.entries(d).map(([Rr,Sr])=>c({name:Rr},Sr))}}var fn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return m(this,null,function*(){})}},T=class{constructor(r={},t=[]){this.definition=c(c({},fn),r),this.requiredParams=[...t]}with(r,t=[]){return new T(c(c({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:S({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,fr.default)(t)),this.with({params:b(c({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let d={};if(l.forEach(({value:a},u)=>{d[n[u]]=a}),!i.some(a=>d[a]===void 0))return r(d)}return mn(b(c({},this.definition),{run:o}))}};function pr(e){return new T({name:e})}var vn=Pr(),Tn=new y,sa=pr("Email to Photo").withCategory("Image").withReleased("direct").withDescription("Uses gravatar.com to find a person's photo given their email address.").withRequiredStringParam("email").withNumberParam("size").withImageResult().withFailingTest({email:"david@glideapps.com"},"???").run(t=>m(void 0,[t],function*({email:e,size:r=200}){try{return yield Tn.getWith(e,()=>vn.resolve(e,{defaultIcon:"404",size:r}))}catch(i){return}}));})();
//# sourceMappingURL=index.js.map