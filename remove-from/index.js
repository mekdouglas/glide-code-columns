(()=>{var he=Object.create;var h=Object.defineProperty,ge=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,we=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?h(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&k(r,t,e[t]);if(C)for(var t of C(e))ve.call(e,t)&&k(r,t,e[t]);return r},g=(r,e)=>ge(r,xe(e)),Te=r=>h(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of be(e))!R.call(r,i)&&i!=="default"&&h(r,i,{get:()=>e[i],enumerable:!(t=pe(e,i))||t.enumerable});return r},Pe=r=>ye(Te(h(r!=null?he(we(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,n)=>{var o=u=>{try{s(t.next(u))}catch(m){n(m)}},l=u=>{try{s(t.throw(u))}catch(m){n(m)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);s((t=t.apply(r,e)).next())});var M=a((tn,S)=>{function Ce(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}S.exports=Ce});var q=a((nn,A)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}A.exports=Re});var O=a((an,j)=>{var ke=q(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Me=ke(Se);j.exports=Me});var N=a((on,V)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=Ae});var L=a((un,D)=>{var qe=N(),je=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||je||Function("return this")();D.exports=Oe});var p=a((sn,U)=>{var Ve=L(),Ne=Ve.Symbol;U.exports=Ne});var _=a((ln,I)=>{function De(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}I.exports=De});var H=a((dn,E)=>{var Le=Array.isArray;E.exports=Le});var W=a((mn,G)=>{var z=p(),F=Object.prototype,Ue=F.hasOwnProperty,Ie=F.toString,f=z?z.toStringTag:void 0;function _e(r){var e=Ue.call(r,f),t=r[f];try{r[f]=void 0;var i=!0}catch(o){}var n=Ie.call(r);return i&&(e?r[f]=t:delete r[f]),n}G.exports=_e});var Z=a((cn,B)=>{var Ee=Object.prototype,He=Ee.toString;function ze(r){return He.call(r)}B.exports=ze});var K=a((fn,$)=>{var J=p(),Fe=W(),Ge=Z(),We="[object Null]",Be="[object Undefined]",Y=J?J.toStringTag:void 0;function Ze(r){return r==null?r===void 0?Be:We:Y&&Y in Object(r)?Fe(r):Ge(r)}$.exports=Ze});var X=a((hn,Q)=>{function Je(r){return r!=null&&typeof r=="object"}Q.exports=Je});var er=a((gn,rr)=>{var Ye=K(),$e=X(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}rr.exports=Qe});var ur=a((pn,or)=>{var tr=p(),Xe=_(),rt=H(),et=er(),tt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=ar});var x=a((xn,sr)=>{var it=ur();function nt(r){return r==null?"":it(r)}sr.exports=nt});var dr=a((bn,lr)=>{var at=O(),ot=x(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",mt=st+lt+dt,ct="["+mt+"]",ft=RegExp(ct,"g");function ht(r){return r=ot(r),r&&r.replace(ut,at).replace(ft,"")}lr.exports=ht});var cr=a((wn,mr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(gt)||[]}mr.exports=pt});var hr=a((vn,fr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return xt.test(r)}fr.exports=bt});var Vr=a((Tn,Or)=>{var gr="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=wt+vt+Tt,pr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",wr=Pt+Ct+Rt+kt,vr="['\u2019]",Tr="["+wr+"]",Mt="["+yt+"]",yr="\\d+",At="["+pr+"]",Pr="["+xr+"]",Cr="[^"+gr+wr+yr+pr+xr+br+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",kr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+br+"]",Vt="\\u200d",Sr="(?:"+Pr+"|"+Cr+")",Nt="(?:"+c+"|"+Cr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=jt+"?",jr="["+St+"]?",Dt="(?:"+Vt+"(?:"+[Ot,Rr,kr].join("|")+")"+jr+qr+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=jr+qr+Dt,_t="(?:"+[At,Rr,kr].join("|")+")"+It,Et=RegExp([c+"?"+Pr+"+"+Mr+"(?="+[Tr,c,"$"].join("|")+")",Nt+"+"+Ar+"(?="+[Tr,c+Sr,"$"].join("|")+")",c+"?"+Sr+"+"+Mr,c+"+"+Ar,Ut,Lt,yr,_t].join("|"),"g");function Ht(r){return r.match(Et)||[]}Or.exports=Ht});var Dr=a((yn,Nr)=>{var zt=cr(),Ft=hr(),Gt=x(),Wt=Vr();function Bt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Ft(r)?Wt(r):zt(r):r.match(e)||[]}Nr.exports=Bt});var Ur=a((Pn,Lr)=>{var Zt=M(),Jt=dr(),Yt=Dr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Zt(Yt(Jt(e).replace(Kt,"")),r,"")}}Lr.exports=Qt});var _r=a((Cn,Ir)=>{function Xt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Ir.exports=Xt});var Hr=a((Rn,Er)=>{var ri=_r();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}Er.exports=ei});var v=a((kn,zr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ii+ni+ai,ui="\\ufe0e\\ufe0f",si="\\u200d",li=RegExp("["+si+ti+oi+ui+"]");function di(r){return li.test(r)}zr.exports=di});var Gr=a((Sn,Fr)=>{function mi(r){return r.split("")}Fr.exports=mi});var Qr=a((Mn,Kr)=>{var Wr="\\ud800-\\udfff",ci="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",hi="\\u20d0-\\u20ff",gi=ci+fi+hi,pi="\\ufe0e\\ufe0f",xi="["+Wr+"]",T="["+gi+"]",y="\\ud83c[\\udffb-\\udfff]",bi="(?:"+T+"|"+y+")",Br="[^"+Wr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Yr=bi+"?",$r="["+pi+"]?",vi="(?:"+wi+"(?:"+[Br,Zr,Jr].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+vi,yi="(?:"+[Br+T+"?",T,Zr,Jr,xi].join("|")+")",Pi=RegExp(y+"(?="+y+")|"+yi+Ti,"g");function Ci(r){return r.match(Pi)||[]}Kr.exports=Ci});var re=a((An,Xr)=>{var Ri=Gr(),ki=v(),Si=Qr();function Mi(r){return ki(r)?Si(r):Ri(r)}Xr.exports=Mi});var te=a((qn,ee)=>{var Ai=Hr(),qi=v(),ji=re(),Oi=x();function Vi(r){return function(e){e=Oi(e);var t=qi(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ai(t,1).join(""):e.slice(1);return i[r]()+n}}ee.exports=Vi});var ne=a((jn,ie)=>{var Ni=te(),Di=Ni("toUpperCase");ie.exports=Di});var oe=a((On,ae)=>{var Li=Ur(),Ui=ne(),Ii=Li(function(r,e,t){return r+(t?" ":"")+Ui(e)});ae.exports=Ii});var se=Pe(oe());var _i=`
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
    `,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ue=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,$i={Glide:_i,"Machine Learning":Ji,General:ue,Array:zi,Number:Hi,Encoding:Yi,Text:Zi,"Data & APIs":Bi,Image:Fi,Fun:Gi,"Date & Time":Wi,Code:Ei};function P({icon:r,category:e}){var t;return(t=r!=null?r:$i[e])!=null?t:ue}function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Ki(r,e){return w(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(u){n=void 0;try{o=u.toString()}catch(m){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=le(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Qi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ki(e,r.run)),g(d({},r),{json:JSON.stringify(Xi(r),null,2)})}function Xi(r){let{name:e,category:t,released:i,description:n,author:o,result:l,params:s,about:u,video:m}=r,me=P(r);return{name:e,category:t,released:i,description:n,author:o,result:l,about:u,icon:me,video:m,params:Object.entries(s).map(([ce,fe])=>d({name:ce},fe))}}var rn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=d(d({},rn),e),this.requiredParams=[...t]}with(e,t=[]){return new b(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:P({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:u},m)=>{s[n[m]]=u}),!i.some(u=>s[u]===void 0))return e(s)}return Qi(g(d({},this.definition),{run:o}))}};function de(r){return new b({name:r})}var Un=de("Remove item").withCategory("Array").withReleased("direct").withDescription("Remove all instances of an item from an array").withPrimitiveArrayResult().withRequiredPrimitiveArrayParam("values").withPrimitiveParam("toRemove","To remove").withTest({values:["a","b","b","c"],toRemove:"b"},["a","c"]).withTest({values:[3,20,100],toRemove:"20"},[3,100]).run(({values:r,toRemove:e})=>e===void 0?r:r.filter(t=>t!=e));})();
//# sourceMappingURL=index.js.map
