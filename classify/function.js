var wr=Object.create;var g=Object.defineProperty,xr=Object.defineProperties,vr=Object.getOwnPropertyDescriptor,yr=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertyNames,M=Object.getOwnPropertySymbols,Cr=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,Pr=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))k.call(e,t)&&A(r,t,e[t]);if(M)for(var t of M(e))Pr.call(e,t)&&A(r,t,e[t]);return r},p=(r,e)=>xr(r,yr(e)),Rr=r=>g(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Sr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Tr(e))!k.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=vr(e,i))||t.enumerable});return r},qr=r=>Sr(Rr(g(r!=null?wr(Cr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var j=(r,e,t)=>new Promise((i,n)=>{var o=s=>{try{l(t.next(s))}catch(d){n(d)}},u=s=>{try{l(t.throw(s))}catch(d){n(d)}},l=s=>s.done?i(s.value):Promise.resolve(s.value).then(o,u);l((t=t.apply(r,e)).next())});var z=a((dn,O)=>{function Mr(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}O.exports=Mr});var D=a((cn,E)=>{function kr(r){return function(e){return r==null?void 0:r[e]}}E.exports=kr});var V=a((fn,N)=>{var Ar=D(),jr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Or=Ar(jr);N.exports=Or});var L=a((hn,I)=>{var zr=typeof global=="object"&&global&&global.Object===Object&&global;I.exports=zr});var _=a((mn,U)=>{var Er=L(),Dr=typeof self=="object"&&self&&self.Object===Object&&self,Nr=Er||Dr||Function("return this")();U.exports=Nr});var b=a((gn,F)=>{var Vr=_(),Ir=Vr.Symbol;F.exports=Ir});var B=a((pn,H)=>{function Lr(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}H.exports=Lr});var J=a((bn,G)=>{var Ur=Array.isArray;G.exports=Ur});var K=a((wn,Y)=>{var W=b(),Z=Object.prototype,_r=Z.hasOwnProperty,Fr=Z.toString,m=W?W.toStringTag:void 0;function Hr(r){var e=_r.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var n=Fr.call(r);return i&&(e?r[m]=t:delete r[m]),n}Y.exports=Hr});var Q=a((xn,$)=>{var Br=Object.prototype,Gr=Br.toString;function Jr(r){return Gr.call(r)}$.exports=Jr});var te=a((vn,re)=>{var X=b(),Wr=K(),Zr=Q(),Yr="[object Null]",Kr="[object Undefined]",ee=X?X.toStringTag:void 0;function $r(r){return r==null?r===void 0?Kr:Yr:ee&&ee in Object(r)?Wr(r):Zr(r)}re.exports=$r});var ne=a((yn,ie)=>{function Qr(r){return r!=null&&typeof r=="object"}ie.exports=Qr});var oe=a((Tn,ae)=>{var Xr=te(),et=ne(),rt="[object Symbol]";function tt(r){return typeof r=="symbol"||et(r)&&Xr(r)==rt}ae.exports=tt});var fe=a((Cn,ce)=>{var se=b(),it=B(),nt=J(),at=oe(),ot=1/0,ue=se?se.prototype:void 0,le=ue?ue.toString:void 0;function de(r){if(typeof r=="string")return r;if(nt(r))return it(r,de)+"";if(at(r))return le?le.call(r):"";var e=r+"";return e=="0"&&1/r==-ot?"-0":e}ce.exports=de});var w=a((Pn,he)=>{var st=fe();function ut(r){return r==null?"":st(r)}he.exports=ut});var ge=a((Rn,me)=>{var lt=V(),dt=w(),ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",gt=ft+ht+mt,pt="["+gt+"]",bt=RegExp(pt,"g");function wt(r){return r=dt(r),r&&r.replace(ct,lt).replace(bt,"")}me.exports=wt});var be=a((Sn,pe)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function vt(r){return r.match(xt)||[]}pe.exports=vt});var xe=a((qn,we)=>{var yt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return yt.test(r)}we.exports=Tt});var Ie=a((Mn,Ve)=>{var ve="\\ud800-\\udfff",Ct="\\u0300-\\u036f",Pt="\\ufe20-\\ufe2f",Rt="\\u20d0-\\u20ff",St=Ct+Pt+Rt,ye="\\u2700-\\u27bf",Te="a-z\\xdf-\\xf6\\xf8-\\xff",qt="\\xac\\xb1\\xd7\\xf7",Mt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",kt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ce="A-Z\\xc0-\\xd6\\xd8-\\xde",jt="\\ufe0e\\ufe0f",Pe=qt+Mt+kt+At,Re="['\u2019]",Se="["+Pe+"]",Ot="["+St+"]",qe="\\d+",zt="["+ye+"]",Me="["+Te+"]",ke="[^"+ve+Pe+qe+ye+Te+Ce+"]",Et="\\ud83c[\\udffb-\\udfff]",Dt="(?:"+Ot+"|"+Et+")",Nt="[^"+ve+"]",Ae="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",h="["+Ce+"]",Vt="\\u200d",Oe="(?:"+Me+"|"+ke+")",It="(?:"+h+"|"+ke+")",ze="(?:"+Re+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+Re+"(?:D|LL|M|RE|S|T|VE))?",De=Dt+"?",Ne="["+jt+"]?",Lt="(?:"+Vt+"(?:"+[Nt,Ae,je].join("|")+")"+Ne+De+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ft=Ne+De+Lt,Ht="(?:"+[zt,Ae,je].join("|")+")"+Ft,Bt=RegExp([h+"?"+Me+"+"+ze+"(?="+[Se,h,"$"].join("|")+")",It+"+"+Ee+"(?="+[Se,h+Oe,"$"].join("|")+")",h+"?"+Oe+"+"+ze,h+"+"+Ee,_t,Ut,qe,Ht].join("|"),"g");function Gt(r){return r.match(Bt)||[]}Ve.exports=Gt});var Ue=a((kn,Le)=>{var Jt=be(),Wt=xe(),Zt=w(),Yt=Ie();function Kt(r,e,t){return r=Zt(r),e=t?void 0:e,e===void 0?Wt(r)?Yt(r):Jt(r):r.match(e)||[]}Le.exports=Kt});var Fe=a((An,_e)=>{var $t=z(),Qt=ge(),Xt=Ue(),ei="['\u2019]",ri=RegExp(ei,"g");function ti(r){return function(e){return $t(Xt(Qt(e).replace(ri,"")),r,"")}}_e.exports=ti});var Be=a((jn,He)=>{function ii(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}He.exports=ii});var Je=a((On,Ge)=>{var ni=Be();function ai(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ni(r,e,t)}Ge.exports=ai});var C=a((zn,We)=>{var oi="\\ud800-\\udfff",si="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",di=si+ui+li,ci="\\ufe0e\\ufe0f",fi="\\u200d",hi=RegExp("["+fi+oi+di+ci+"]");function mi(r){return hi.test(r)}We.exports=mi});var Ye=a((En,Ze)=>{function gi(r){return r.split("")}Ze.exports=gi});var ir=a((Dn,tr)=>{var Ke="\\ud800-\\udfff",pi="\\u0300-\\u036f",bi="\\ufe20-\\ufe2f",wi="\\u20d0-\\u20ff",xi=pi+bi+wi,vi="\\ufe0e\\ufe0f",yi="["+Ke+"]",P="["+xi+"]",R="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+P+"|"+R+")",$e="[^"+Ke+"]",Qe="(?:\\ud83c[\\udde6-\\uddff]){2}",Xe="[\\ud800-\\udbff][\\udc00-\\udfff]",Ci="\\u200d",er=Ti+"?",rr="["+vi+"]?",Pi="(?:"+Ci+"(?:"+[$e,Qe,Xe].join("|")+")"+rr+er+")*",Ri=rr+er+Pi,Si="(?:"+[$e+P+"?",P,Qe,Xe,yi].join("|")+")",qi=RegExp(R+"(?="+R+")|"+Si+Ri,"g");function Mi(r){return r.match(qi)||[]}tr.exports=Mi});var ar=a((Nn,nr)=>{var ki=Ye(),Ai=C(),ji=ir();function Oi(r){return Ai(r)?ji(r):ki(r)}nr.exports=Oi});var sr=a((Vn,or)=>{var zi=Je(),Ei=C(),Di=ar(),Ni=w();function Vi(r){return function(e){e=Ni(e);var t=Ei(e)?Di(e):void 0,i=t?t[0]:e.charAt(0),n=t?zi(t,1).join(""):e.slice(1);return i[r]()+n}}or.exports=Vi});var lr=a((In,ur)=>{var Ii=sr(),Li=Ii("toUpperCase");ur.exports=Li});var cr=a((Ln,dr)=>{var Ui=Fe(),_i=lr(),Fi=Ui(function(r,e,t){return r+(t?" ":"")+_i(e)});dr.exports=Fi});var pr=a((Hn,v)=>{v.exports=function(r){return new f(r)};var gr=v.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","vocabularySize","wordCount","wordFrequencyCount","options"];v.exports.fromJson=function(r){var e;try{e=JSON.parse(r)}catch(i){throw new Error("Naivebayes.fromJson expects a valid JSON string.")}var t=new f(e.options);return gr.forEach(function(i){if(typeof e[i]=="undefined"||e[i]===null)throw new Error("Naivebayes.fromJson: JSON string is missing an expected property: `"+i+"`.");t[i]=e[i]}),t};var an=function(r){var e=/[^(a-zA-ZA-Яa-я0-9_)+\s]/g,t=r.replace(e," ");return t.split(/\s+/)};function f(r){if(this.options={},typeof r!="undefined"){if(!r||typeof r!="object"||Array.isArray(r))throw TypeError("NaiveBayes got invalid `options`: `"+r+"`. Pass in an object.");this.options=r}this.tokenizer=this.options.tokenizer||an,this.vocabulary={},this.vocabularySize=0,this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories={}}f.prototype.initializeCategory=function(r){return this.categories[r]||(this.docCount[r]=0,this.wordCount[r]=0,this.wordFrequencyCount[r]={},this.categories[r]=!0),this};f.prototype.learn=async function(r,e){var t=this;t.initializeCategory(e),t.docCount[e]++,t.totalDocuments++;var i=await t.tokenizer(r),n=t.frequencyTable(i);return Object.keys(n).forEach(function(o){t.vocabulary[o]||(t.vocabulary[o]=!0,t.vocabularySize++);var u=n[o];t.wordFrequencyCount[e][o]?t.wordFrequencyCount[e][o]+=u:t.wordFrequencyCount[e][o]=u,t.wordCount[e]+=u}),t};f.prototype.categorize=async function(r){var e=this,t=-1/0,i=null,n=await e.tokenizer(r),o=e.frequencyTable(n);return Object.keys(e.categories).forEach(function(u){var l=e.docCount[u]/e.totalDocuments,s=Math.log(l);Object.keys(o).forEach(function(d){var y=o[d],T=e.tokenProbability(d,u);s+=y*Math.log(T)}),s>t&&(t=s,i=u)}),i};f.prototype.tokenProbability=function(r,e){var t=this.wordFrequencyCount[e][r]||0,i=this.wordCount[e];return(t+1)/(i+this.vocabularySize)};f.prototype.frequencyTable=function(r){var e=Object.create(null);return r.forEach(function(t){e[t]?e[t]++:e[t]=1}),e};f.prototype.toJson=function(){var r={},e=this;gr.forEach(function(i){r[i]=e[i]});var t=JSON.stringify(r);return t}});var hr=qr(cr());var Hi=`
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
    `,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,fr=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ki=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Xi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,en={Glide:Hi,"Machine Learning":Qi,General:fr,Array:Ji,Number:Gi,Encoding:Xi,Text:$i,"Data & APIs":Ki,Image:Wi,Fun:Zi,"Date & Time":Yi,Code:Bi};function S({icon:r,category:e}){var t;return(t=r!=null?r:en[e])!=null?t:fr}function rn(r){return p(c({},r),{json:JSON.stringify(tn(r),null,2)})}function tn(r){let{name:e,category:t,released:i,description:n,author:o,result:u,params:l,about:s,video:d}=r,y=S(r);return{name:e,category:t,released:i,description:n,author:o,result:u,about:s,icon:y,video:d,params:Object.entries(l).map(([T,br])=>c({name:T},br))}}var nn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return j(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=c(c({},nn),e),this.requiredParams=[...t]}with(e,t=[]){return new x(c(c({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:S({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,hr.default)(t)),this.with({params:p(c({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...u){let l={};if(u.forEach(({value:s},d)=>{l[n[d]]=s}),!i.some(s=>l[s]===void 0))return e(l)}return rn(p(c({},this.definition),{run:o}))}};function mr(r){return new x({name:r})}var on=pr(),sn="",q={};function un(r){var e;return(e=q[r])!=null?e:q[r]=on()}var Gn=mr("Classify Text").withCategory("Machine Learning").withDescription("Categorize text based on examples.").withAuthor("ttezel","https://github.com/ttezel/bayes").withAbout(`
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`).withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0").withRequiredStringParam("phrase").withStringParam("category","Training Data").withStringParam("id","Classifier ID").withStringResult().run(({id:r=sn,phrase:e,category:t})=>{let i=un(r);return t!==void 0?(i.learn(e,t),t):i.categorize(e)});export{Gn as default};
//# sourceMappingURL=function.js.map
