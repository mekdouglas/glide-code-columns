(()=>{var ge=Object.create;var g=Object.defineProperty,fe=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var k=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&k(e,t,r[t]);if(C)for(var t of C(r))ve.call(r,t)&&k(e,t,r[t]);return e},f=(e,r)=>fe(e,be(r)),Te=e=>g(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var ye=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of we(r))!R.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=pe(r,i))||t.enumerable});return e},Pe=e=>ye(Te(g(e!=null?ge(xe(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,r,t)=>new Promise((i,n)=>{var o=u=>{try{s(t.next(u))}catch(c){n(c)}},l=u=>{try{s(t.throw(u))}catch(c){n(c)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,l);s((t=t.apply(e,r)).next())});var M=a((tn,S)=>{function Ce(e,r,t,i){var n=-1,o=e==null?0:e.length;for(i&&o&&(t=e[++n]);++n<o;)t=r(t,e[n],n,e);return t}S.exports=Ce});var q=a((nn,A)=>{function Re(e){return function(r){return e==null?void 0:e[r]}}A.exports=Re});var O=a((an,j)=>{var ke=q(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Me=ke(Se);j.exports=Me});var D=a((on,V)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=Ae});var U=a((un,N)=>{var qe=D(),je=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||je||Function("return this")();N.exports=Oe});var p=a((sn,L)=>{var Ve=U(),De=Ve.Symbol;L.exports=De});var E=a((ln,I)=>{function Ne(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}I.exports=Ne});var H=a((dn,_)=>{var Ue=Array.isArray;_.exports=Ue});var G=a((cn,B)=>{var F=p(),z=Object.prototype,Le=z.hasOwnProperty,Ie=z.toString,h=F?F.toStringTag:void 0;function Ee(e){var r=Le.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(o){}var n=Ie.call(e);return i&&(r?e[h]=t:delete e[h]),n}B.exports=Ee});var Z=a((mn,W)=>{var _e=Object.prototype,He=_e.toString;function Fe(e){return He.call(e)}W.exports=Fe});var K=a((hn,$)=>{var J=p(),ze=G(),Be=Z(),Ge="[object Null]",We="[object Undefined]",Y=J?J.toStringTag:void 0;function Ze(e){return e==null?e===void 0?We:Ge:Y&&Y in Object(e)?ze(e):Be(e)}$.exports=Ze});var X=a((gn,Q)=>{function Je(e){return e!=null&&typeof e=="object"}Q.exports=Je});var er=a((fn,rr)=>{var Ye=K(),$e=X(),Ke="[object Symbol]";function Qe(e){return typeof e=="symbol"||$e(e)&&Ye(e)==Ke}rr.exports=Qe});var ur=a((pn,or)=>{var tr=p(),Xe=E(),rt=H(),et=er(),tt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(e){if(typeof e=="string")return e;if(rt(e))return Xe(e,ar)+"";if(et(e))return nr?nr.call(e):"";var r=e+"";return r=="0"&&1/e==-tt?"-0":r}or.exports=ar});var b=a((bn,sr)=>{var it=ur();function nt(e){return e==null?"":it(e)}sr.exports=nt});var dr=a((wn,lr)=>{var at=O(),ot=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ct=st+lt+dt,mt="["+ct+"]",ht=RegExp(mt,"g");function gt(e){return e=ot(e),e&&e.replace(ut,at).replace(ht,"")}lr.exports=gt});var mr=a((xn,cr)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(ft)||[]}cr.exports=pt});var gr=a((vn,hr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(e){return bt.test(e)}hr.exports=wt});var Vr=a((Tn,Or)=>{var fr="\\ud800-\\udfff",xt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=xt+vt+Tt,pr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wr="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",xr=Pt+Ct+Rt+kt,vr="['\u2019]",Tr="["+xr+"]",Mt="["+yt+"]",yr="\\d+",At="["+pr+"]",Pr="["+br+"]",Cr="[^"+fr+xr+yr+pr+br+wr+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+fr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",kr="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+wr+"]",Vt="\\u200d",Sr="(?:"+Pr+"|"+Cr+")",Dt="(?:"+m+"|"+Cr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=jt+"?",jr="["+St+"]?",Nt="(?:"+Vt+"(?:"+[Ot,Rr,kr].join("|")+")"+jr+qr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=jr+qr+Nt,Et="(?:"+[At,Rr,kr].join("|")+")"+It,_t=RegExp([m+"?"+Pr+"+"+Mr+"(?="+[Tr,m,"$"].join("|")+")",Dt+"+"+Ar+"(?="+[Tr,m+Sr,"$"].join("|")+")",m+"?"+Sr+"+"+Mr,m+"+"+Ar,Lt,Ut,yr,Et].join("|"),"g");function Ht(e){return e.match(_t)||[]}Or.exports=Ht});var Nr=a((yn,Dr)=>{var Ft=mr(),zt=gr(),Bt=b(),Gt=Vr();function Wt(e,r,t){return e=Bt(e),r=t?void 0:r,r===void 0?zt(e)?Gt(e):Ft(e):e.match(r)||[]}Dr.exports=Wt});var Lr=a((Pn,Ur)=>{var Zt=M(),Jt=dr(),Yt=Nr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(e){return function(r){return Zt(Yt(Jt(r).replace(Kt,"")),e,"")}}Ur.exports=Qt});var Er=a((Cn,Ir)=>{function Xt(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(n);++i<n;)o[i]=e[i+r];return o}Ir.exports=Xt});var Hr=a((Rn,_r)=>{var ri=Er();function ei(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ri(e,r,t)}_r.exports=ei});var v=a((kn,Fr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",oi=ii+ni+ai,ui="\\ufe0e\\ufe0f",si="\\u200d",li=RegExp("["+si+ti+oi+ui+"]");function di(e){return li.test(e)}Fr.exports=di});var Br=a((Sn,zr)=>{function ci(e){return e.split("")}zr.exports=ci});var Qr=a((Mn,Kr)=>{var Gr="\\ud800-\\udfff",mi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",gi="\\u20d0-\\u20ff",fi=mi+hi+gi,pi="\\ufe0e\\ufe0f",bi="["+Gr+"]",T="["+fi+"]",y="\\ud83c[\\udffb-\\udfff]",wi="(?:"+T+"|"+y+")",Wr="[^"+Gr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="\\u200d",Yr=wi+"?",$r="["+pi+"]?",vi="(?:"+xi+"(?:"+[Wr,Zr,Jr].join("|")+")"+$r+Yr+")*",Ti=$r+Yr+vi,yi="(?:"+[Wr+T+"?",T,Zr,Jr,bi].join("|")+")",Pi=RegExp(y+"(?="+y+")|"+yi+Ti,"g");function Ci(e){return e.match(Pi)||[]}Kr.exports=Ci});var re=a((An,Xr)=>{var Ri=Br(),ki=v(),Si=Qr();function Mi(e){return ki(e)?Si(e):Ri(e)}Xr.exports=Mi});var te=a((qn,ee)=>{var Ai=Hr(),qi=v(),ji=re(),Oi=b();function Vi(e){return function(r){r=Oi(r);var t=qi(r)?ji(r):void 0,i=t?t[0]:r.charAt(0),n=t?Ai(t,1).join(""):r.slice(1);return i[e]()+n}}ee.exports=Vi});var ne=a((jn,ie)=>{var Di=te(),Ni=Di("toUpperCase");ie.exports=Ni});var oe=a((On,ae)=>{var Ui=Lr(),Li=ne(),Ii=Ui(function(e,r,t){return e+(t?" ":"")+Li(r)});ae.exports=Ii});var se=Pe(oe());var Ei=`
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
    `,_i=`
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
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
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
`,$i={Glide:Ei,"Machine Learning":Ji,General:ue,Array:Fi,Number:Hi,Encoding:Yi,Text:Zi,"Data & APIs":Wi,Image:zi,Fun:Bi,"Date & Time":Gi,Code:_i};function P({icon:e,category:r}){var t;return(t=e!=null?e:$i[r])!=null?t:ue}function le(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(le):e}function Ki(e,r){return x(this,null,function*(){var s;let{data:{key:t,params:i}}=e,n,o;try{n=yield r(...i)}catch(u){n=void 0;try{o=u.toString()}catch(c){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=le(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=e.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Qi(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Ki(r,e.run)),f(d({},e),{json:JSON.stringify(Xi(e),null,2)})}function Xi(e){let{name:r,category:t,released:i,description:n,author:o,result:l,params:s,about:u,video:c}=e,ce=P(e);return{name:r,category:t,released:i,description:n,author:o,result:l,about:u,icon:ce,video:c,params:Object.entries(s).map(([me,he])=>d({name:me},he))}}var rn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return x(this,null,function*(){})}},w=class{constructor(r={},t=[]){this.definition=d(d({},rn),r),this.requiredParams=[...t]}with(r,t=[]){return new w(d(d({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:P({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:f(d({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:u},c)=>{s[n[c]]=u}),!i.some(u=>s[u]===void 0))return r(s)}return Qi(f(d({},this.definition),{run:o}))}};function de(e){return new w({name:e})}var Ln=de("Array Contains Element").withCategory("Array").withReleased("direct").withDescription("True if array contains the element. False otherwise.").withBooleanResult().withRequiredPrimitiveArrayParam("values").withPrimitiveParam("toFind","To find").withTest({values:["a","b","b","c"],toFind:"b"},!0).withTest({values:[3,20,100],toFind:20},!0).withTest({values:[3,20,100],toFind:25},!1).run(({values:e,toFind:r})=>e.includes(r));})();
//# sourceMappingURL=index.js.map
