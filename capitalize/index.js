(()=>{var we=Object.create;var f=Object.defineProperty,be=Object.defineProperties,ve=Object.getOwnPropertyDescriptor,Te=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Pe=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&k(r,t,e[t]);if(R)for(var t of R(e))Ce.call(e,t)&&k(r,t,e[t]);return r},p=(r,e)=>be(r,Te(e)),Re=r=>f(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Se=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ye(e))!S.call(r,i)&&i!=="default"&&f(r,i,{get:()=>e[i],enumerable:!(t=ve(e,i))||t.enumerable});return r},M=r=>Se(Re(f(r!=null?we(Pe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var b=(r,e,t)=>new Promise((i,n)=>{var o=u=>{try{s(t.next(u))}catch(c){n(c)}},l=u=>{try{s(t.throw(u))}catch(c){n(c)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);s((t=t.apply(r,e)).next())});var q=a((ln,A)=>{function ke(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}A.exports=ke});var O=a((dn,j)=>{function Me(r){return function(e){return r==null?void 0:r[e]}}j.exports=Me});var L=a((cn,V)=>{var Ae=O(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},je=Ae(qe);V.exports=je});var D=a((mn,N)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Oe});var I=a((hn,U)=>{var Ve=D(),Le=typeof self=="object"&&self&&self.Object===Object&&self,Ne=Ve||Le||Function("return this")();U.exports=Ne});var x=a((gn,E)=>{var De=I(),Ue=De.Symbol;E.exports=Ue});var _=a((fn,H)=>{function Ie(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}H.exports=Ie});var F=a((pn,z)=>{var Ee=Array.isArray;z.exports=Ee});var Z=a((xn,W)=>{var B=x(),G=Object.prototype,He=G.hasOwnProperty,_e=G.toString,h=B?B.toStringTag:void 0;function ze(r){var e=He.call(r,h),t=r[h];try{r[h]=void 0;var i=!0}catch(o){}var n=_e.call(r);return i&&(e?r[h]=t:delete r[h]),n}W.exports=ze});var Y=a((wn,J)=>{var Fe=Object.prototype,Be=Fe.toString;function Ge(r){return Be.call(r)}J.exports=Ge});var X=a((bn,Q)=>{var $=x(),We=Z(),Ze=Y(),Je="[object Null]",Ye="[object Undefined]",K=$?$.toStringTag:void 0;function $e(r){return r==null?r===void 0?Ye:Je:K&&K in Object(r)?We(r):Ze(r)}Q.exports=$e});var er=a((vn,rr)=>{function Ke(r){return r!=null&&typeof r=="object"}rr.exports=Ke});var ir=a((Tn,tr)=>{var Qe=X(),Xe=er(),rt="[object Symbol]";function et(r){return typeof r=="symbol"||Xe(r)&&Qe(r)==rt}tr.exports=et});var lr=a((yn,sr)=>{var nr=x(),tt=_(),it=F(),nt=ir(),at=1/0,ar=nr?nr.prototype:void 0,or=ar?ar.toString:void 0;function ur(r){if(typeof r=="string")return r;if(it(r))return tt(r,ur)+"";if(nt(r))return or?or.call(r):"";var e=r+"";return e=="0"&&1/r==-at?"-0":e}sr.exports=ur});var g=a((Pn,dr)=>{var ot=lr();function ut(r){return r==null?"":ot(r)}dr.exports=ut});var mr=a((Cn,cr)=>{var st=L(),lt=g(),dt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ct="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",gt=ct+mt+ht,ft="["+gt+"]",pt=RegExp(ft,"g");function xt(r){return r=lt(r),r&&r.replace(dt,st).replace(pt,"")}cr.exports=xt});var gr=a((Rn,hr)=>{var wt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(wt)||[]}hr.exports=bt});var pr=a((Sn,fr)=>{var vt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(r){return vt.test(r)}fr.exports=Tt});var Nr=a((kn,Lr)=>{var xr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Pt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",Rt=yt+Pt+Ct,wr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Mt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",vr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",Tr=St+kt+Mt+At,yr="['\u2019]",Pr="["+Tr+"]",jt="["+Rt+"]",Cr="\\d+",Ot="["+wr+"]",Rr="["+br+"]",Sr="[^"+xr+Tr+Cr+wr+br+vr+"]",Vt="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+jt+"|"+Vt+")",Nt="[^"+xr+"]",kr="(?:\\ud83c[\\udde6-\\uddff]){2}",Mr="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+vr+"]",Dt="\\u200d",Ar="(?:"+Rr+"|"+Sr+")",Ut="(?:"+m+"|"+Sr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Or=Lt+"?",Vr="["+qt+"]?",It="(?:"+Dt+"(?:"+[Nt,kr,Mr].join("|")+")"+Vr+Or+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ht="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Vr+Or+It,zt="(?:"+[Ot,kr,Mr].join("|")+")"+_t,Ft=RegExp([m+"?"+Rr+"+"+qr+"(?="+[Pr,m,"$"].join("|")+")",Ut+"+"+jr+"(?="+[Pr,m+Ar,"$"].join("|")+")",m+"?"+Ar+"+"+qr,m+"+"+jr,Ht,Et,Cr,zt].join("|"),"g");function Bt(r){return r.match(Ft)||[]}Lr.exports=Bt});var Ur=a((Mn,Dr)=>{var Gt=gr(),Wt=pr(),Zt=g(),Jt=Nr();function Yt(r,e,t){return r=Zt(r),e=t?void 0:e,e===void 0?Wt(r)?Jt(r):Gt(r):r.match(e)||[]}Dr.exports=Yt});var Er=a((An,Ir)=>{var $t=q(),Kt=mr(),Qt=Ur(),Xt="['\u2019]",ri=RegExp(Xt,"g");function ei(r){return function(e){return $t(Qt(Kt(e).replace(ri,"")),r,"")}}Ir.exports=ei});var _r=a((qn,Hr)=>{function ti(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Hr.exports=ti});var Fr=a((jn,zr)=>{var ii=_r();function ni(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ii(r,e,t)}zr.exports=ni});var v=a((On,Br)=>{var ai="\\ud800-\\udfff",oi="\\u0300-\\u036f",ui="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",li=oi+ui+si,di="\\ufe0e\\ufe0f",ci="\\u200d",mi=RegExp("["+ci+ai+li+di+"]");function hi(r){return mi.test(r)}Br.exports=hi});var Wr=a((Vn,Gr)=>{function gi(r){return r.split("")}Gr.exports=gi});var re=a((Ln,Xr)=>{var Zr="\\ud800-\\udfff",fi="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",xi="\\u20d0-\\u20ff",wi=fi+pi+xi,bi="\\ufe0e\\ufe0f",vi="["+Zr+"]",T="["+wi+"]",y="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+T+"|"+y+")",Jr="[^"+Zr+"]",Yr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",yi="\\u200d",Kr=Ti+"?",Qr="["+bi+"]?",Pi="(?:"+yi+"(?:"+[Jr,Yr,$r].join("|")+")"+Qr+Kr+")*",Ci=Qr+Kr+Pi,Ri="(?:"+[Jr+T+"?",T,Yr,$r,vi].join("|")+")",Si=RegExp(y+"(?="+y+")|"+Ri+Ci,"g");function ki(r){return r.match(Si)||[]}Xr.exports=ki});var te=a((Nn,ee)=>{var Mi=Wr(),Ai=v(),qi=re();function ji(r){return Ai(r)?qi(r):Mi(r)}ee.exports=ji});var ne=a((Dn,ie)=>{var Oi=Fr(),Vi=v(),Li=te(),Ni=g();function Di(r){return function(e){e=Ni(e);var t=Vi(e)?Li(e):void 0,i=t?t[0]:e.charAt(0),n=t?Oi(t,1).join(""):e.slice(1);return i[r]()+n}}ie.exports=Di});var P=a((Un,ae)=>{var Ui=ne(),Ii=Ui("toUpperCase");ae.exports=Ii});var ue=a((In,oe)=>{var Ei=Er(),Hi=P(),_i=Ei(function(r,e,t){return r+(t?" ":"")+Hi(e)});oe.exports=_i});var he=a((zn,me)=>{var an=g(),on=P();function un(r){return on(an(r).toLowerCase())}me.exports=un});var le=M(ue());var zi=`
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
    `,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,se=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Gi=`
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
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Yi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,$i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Ki=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Qi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Xi={Glide:zi,"Machine Learning":Ki,General:se,Array:Gi,Number:Bi,Encoding:Qi,Text:$i,"Data & APIs":Yi,Image:Wi,Fun:Zi,"Date & Time":Ji,Code:Fi};function C({icon:r,category:e}){var t;return(t=r!=null?r:Xi[e])!=null?t:se}function de(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(de):r}function rn(r,e){return b(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(u){n=void 0;try{o=u.toString()}catch(c){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=de(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function en(r){return typeof window!="undefined"&&window.addEventListener("message",e=>rn(e,r.run)),p(d({},r),{json:JSON.stringify(tn(r),null,2)})}function tn(r){let{name:e,category:t,released:i,description:n,author:o,result:l,params:s,about:u,video:c}=r,fe=C(r);return{name:e,category:t,released:i,description:n,author:o,result:l,about:u,icon:fe,video:c,params:Object.entries(s).map(([pe,xe])=>d({name:pe},xe))}}var nn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return b(this,null,function*(){})}},w=class{constructor(e={},t=[]){this.definition=d(d({},nn),e),this.requiredParams=[...t]}with(e,t=[]){return new w(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:C({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,le.default)(t)),this.with({params:p(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:u},c)=>{s[n[c]]=u}),!i.some(u=>s[u]===void 0))return e(s)}return en(p(d({},this.definition),{run:o}))}};function ce(r){return new w({name:r})}var ge=M(he()),Bn=ce("Capitalize Text").withCategory("Text").withReleased("direct").withDescription("Converts the first character of string to upper case and the remaining to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withRequiredStringParam("text").withTest({text:"HELLO"},"Hello").run(({text:r})=>(0,ge.default)(r));})();
//# sourceMappingURL=index.js.map
