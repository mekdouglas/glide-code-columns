(()=>{var ge=Object.create;var g=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,we=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&S(r,t,e[t]);if(R)for(var t of R(e))ve.call(e,t)&&S(r,t,e[t]);return r},f=(r,e)=>fe(r,xe(e)),Te=r=>g(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of be(e))!C.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=pe(e,i))||t.enumerable});return r},Pe=r=>ye(Te(g(r!=null?ge(we(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,n)=>{var o=s=>{try{u(t.next(s))}catch(c){n(c)}},l=s=>{try{u(t.throw(s))}catch(c){n(c)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(o,l);u((t=t.apply(r,e)).next())});var M=a((tn,k)=>{function Re(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}k.exports=Re});var q=a((nn,A)=>{function Ce(r){return function(e){return r==null?void 0:r[e]}}A.exports=Ce});var j=a((an,O)=>{var Se=q(),ke={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Me=Se(ke);O.exports=Me});var D=a((on,L)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=Ae});var U=a((sn,V)=>{var qe=D(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,je=qe||Oe||Function("return this")();V.exports=je});var p=a((un,N)=>{var Le=U(),De=Le.Symbol;N.exports=De});var E=a((ln,I)=>{function Ve(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}I.exports=Ve});var _=a((dn,H)=>{var Ue=Array.isArray;H.exports=Ue});var W=a((cn,F)=>{var z=p(),B=Object.prototype,Ne=B.hasOwnProperty,Ie=B.toString,h=z?z.toStringTag:void 0;function Ee(r){var e=Ne.call(r,h),t=r[h];try{r[h]=void 0;var i=!0}catch(o){}var n=Ie.call(r);return i&&(e?r[h]=t:delete r[h]),n}F.exports=Ee});var Z=a((mn,G)=>{var He=Object.prototype,_e=He.toString;function ze(r){return _e.call(r)}G.exports=ze});var K=a((hn,$)=>{var J=p(),Be=W(),Fe=Z(),We="[object Null]",Ge="[object Undefined]",Y=J?J.toStringTag:void 0;function Ze(r){return r==null?r===void 0?Ge:We:Y&&Y in Object(r)?Be(r):Fe(r)}$.exports=Ze});var X=a((gn,Q)=>{function Je(r){return r!=null&&typeof r=="object"}Q.exports=Je});var er=a((fn,rr)=>{var Ye=K(),$e=X(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}rr.exports=Qe});var sr=a((pn,or)=>{var tr=p(),Xe=E(),rt=_(),et=er(),tt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=ar});var x=a((xn,ur)=>{var it=sr();function nt(r){return r==null?"":it(r)}ur.exports=nt});var dr=a((bn,lr)=>{var at=j(),ot=x(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ct=ut+lt+dt,mt="["+ct+"]",ht=RegExp(mt,"g");function gt(r){return r=ot(r),r&&r.replace(st,at).replace(ht,"")}lr.exports=gt});var mr=a((wn,cr)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(ft)||[]}cr.exports=pt});var gr=a((vn,hr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return xt.test(r)}hr.exports=bt});var Lr=a((Tn,jr)=>{var fr="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=wt+vt+Tt,pr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",kt="\\ufe0e\\ufe0f",wr=Pt+Rt+Ct+St,vr="['\u2019]",Tr="["+wr+"]",Mt="["+yt+"]",yr="\\d+",At="["+pr+"]",Pr="["+xr+"]",Rr="[^"+fr+wr+yr+pr+xr+br+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Mt+"|"+qt+")",jt="[^"+fr+"]",Cr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+br+"]",Lt="\\u200d",kr="(?:"+Pr+"|"+Rr+")",Dt="(?:"+m+"|"+Rr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=Ot+"?",Or="["+kt+"]?",Vt="(?:"+Lt+"(?:"+[jt,Cr,Sr].join("|")+")"+Or+qr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=Or+qr+Vt,Et="(?:"+[At,Cr,Sr].join("|")+")"+It,Ht=RegExp([m+"?"+Pr+"+"+Mr+"(?="+[Tr,m,"$"].join("|")+")",Dt+"+"+Ar+"(?="+[Tr,m+kr,"$"].join("|")+")",m+"?"+kr+"+"+Mr,m+"+"+Ar,Nt,Ut,yr,Et].join("|"),"g");function _t(r){return r.match(Ht)||[]}jr.exports=_t});var Vr=a((yn,Dr)=>{var zt=mr(),Bt=gr(),Ft=x(),Wt=Lr();function Gt(r,e,t){return r=Ft(r),e=t?void 0:e,e===void 0?Bt(r)?Wt(r):zt(r):r.match(e)||[]}Dr.exports=Gt});var Nr=a((Pn,Ur)=>{var Zt=M(),Jt=dr(),Yt=Vr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Zt(Yt(Jt(e).replace(Kt,"")),r,"")}}Ur.exports=Qt});var Er=a((Rn,Ir)=>{function Xt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Ir.exports=Xt});var _r=a((Cn,Hr)=>{var ri=Er();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}Hr.exports=ei});var v=a((Sn,zr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ii+ni+ai,si="\\ufe0e\\ufe0f",ui="\\u200d",li=RegExp("["+ui+ti+oi+si+"]");function di(r){return li.test(r)}zr.exports=di});var Fr=a((kn,Br)=>{function ci(r){return r.split("")}Br.exports=ci});var Qr=a((Mn,Kr)=>{var Wr="\\ud800-\\udfff",mi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",fi=mi+hi+gi,pi="\\ufe0e\\ufe0f",xi="["+Wr+"]",T="["+fi+"]",y="\\ud83c[\\udffb-\\udfff]",bi="(?:"+T+"|"+y+")",Gr="[^"+Wr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Yr=bi+"?",$r="["+pi+"]?",vi="(?:"+wi+"(?:"+[Gr,Zr,Jr].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+vi,yi="(?:"+[Gr+T+"?",T,Zr,Jr,xi].join("|")+")",Pi=RegExp(y+"(?="+y+")|"+yi+Ti,"g");function Ri(r){return r.match(Pi)||[]}Kr.exports=Ri});var re=a((An,Xr)=>{var Ci=Fr(),Si=v(),ki=Qr();function Mi(r){return Si(r)?ki(r):Ci(r)}Xr.exports=Mi});var te=a((qn,ee)=>{var Ai=_r(),qi=v(),Oi=re(),ji=x();function Li(r){return function(e){e=ji(e);var t=qi(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ai(t,1).join(""):e.slice(1);return i[r]()+n}}ee.exports=Li});var ne=a((On,ie)=>{var Di=te(),Vi=Di("toUpperCase");ie.exports=Vi});var oe=a((jn,ae)=>{var Ui=Nr(),Ni=ne(),Ii=Ui(function(r,e,t){return r+(t?" ":"")+Ni(e)});ae.exports=Ii});var ue=Pe(oe());var Ei=`
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
    `,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,_i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,se=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
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
`,$i={Glide:Ei,"Machine Learning":Ji,General:se,Array:zi,Number:_i,Encoding:Yi,Text:Zi,"Data & APIs":Gi,Image:Bi,Fun:Fi,"Date & Time":Wi,Code:Hi};function P({icon:r,category:e}){var t;return(t=r!=null?r:$i[e])!=null?t:se}function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Ki(r,e){return w(this,null,function*(){var u;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(s){n=void 0;try{o=s.toString()}catch(c){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=le(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((u=r.source)==null?void 0:u.postMessage).call(u,l,"*")})}function Qi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ki(e,r.run)),f(d({},r),{json:JSON.stringify(Xi(r),null,2)})}function Xi(r){let{name:e,category:t,released:i,description:n,author:o,result:l,params:u,about:s,video:c}=r,ce=P(r);return{name:e,category:t,released:i,description:n,author:o,result:l,about:s,icon:ce,video:c,params:Object.entries(u).map(([me,he])=>d({name:me},he))}}var rn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return w(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=d(d({},rn),e),this.requiredParams=[...t]}with(e,t=[]){return new b(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:P({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,ue.default)(t)),this.with({params:f(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let u={};if(l.forEach(({value:s},c)=>{u[n[c]]=s}),!i.some(s=>u[s]===void 0))return e(u)}return Qi(f(d({},this.definition),{run:o}))}};function de(r){return new b({name:r})}var Nn=de("Uppercase Text").withCategory("Text").withReleased("direct").withDescription("Converts string to upper case.").withRequiredStringParam("text").withStringResult().withTest({text:"Hello, WORLD!"},"HELLO, WORLD!").withTest({text:"--Foo-Bar--"},"--FOO-BAR--").run(({text:r})=>r.toLocaleUpperCase());})();
//# sourceMappingURL=index.js.map