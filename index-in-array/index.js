(()=>{var fr=Object.create;var f=Object.defineProperty,gr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,xr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,wr=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var k=(r,e,t)=>e in r?f(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&k(r,t,e[t]);if(C)for(var t of C(e))vr.call(e,t)&&k(r,t,e[t]);return r},g=(r,e)=>gr(r,xr(e)),Tr=r=>f(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var yr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of br(e))!R.call(r,i)&&i!=="default"&&f(r,i,{get:()=>e[i],enumerable:!(t=pr(e,i))||t.enumerable});return r},Pr=r=>yr(Tr(f(r!=null?fr(wr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((i,n)=>{var u=o=>{try{s(t.next(o))}catch(m){n(m)}},l=o=>{try{s(t.throw(o))}catch(m){n(m)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,l);s((t=t.apply(r,e)).next())});var M=a((tn,S)=>{function Cr(r,e,t,i){var n=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++n]);++n<u;)t=e(t,r[n],n,r);return t}S.exports=Cr});var q=a((nn,A)=>{function Rr(r){return function(e){return r==null?void 0:r[e]}}A.exports=Rr});var O=a((an,j)=>{var kr=q(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mr=kr(Sr);j.exports=Mr});var V=a((un,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var I=a((on,D)=>{var qr=V(),jr=typeof self=="object"&&self&&self.Object===Object&&self,Or=qr||jr||Function("return this")();D.exports=Or});var p=a((sn,U)=>{var Nr=I(),Vr=Nr.Symbol;U.exports=Vr});var _=a((ln,L)=>{function Dr(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}L.exports=Dr});var H=a((dn,E)=>{var Ir=Array.isArray;E.exports=Ir});var G=a((mn,B)=>{var F=p(),z=Object.prototype,Ur=z.hasOwnProperty,Lr=z.toString,h=F?F.toStringTag:void 0;function _r(r){var e=Ur.call(r,h),t=r[h];try{r[h]=void 0;var i=!0}catch(u){}var n=Lr.call(r);return i&&(e?r[h]=t:delete r[h]),n}B.exports=_r});var Z=a((cn,W)=>{var Er=Object.prototype,Hr=Er.toString;function Fr(r){return Hr.call(r)}W.exports=Fr});var K=a((hn,$)=>{var J=p(),zr=G(),Br=Z(),Gr="[object Null]",Wr="[object Undefined]",Y=J?J.toStringTag:void 0;function Zr(r){return r==null?r===void 0?Wr:Gr:Y&&Y in Object(r)?zr(r):Br(r)}$.exports=Zr});var X=a((fn,Q)=>{function Jr(r){return r!=null&&typeof r=="object"}Q.exports=Jr});var re=a((gn,ee)=>{var Yr=K(),$r=X(),Kr="[object Symbol]";function Qr(r){return typeof r=="symbol"||$r(r)&&Yr(r)==Kr}ee.exports=Qr});var oe=a((pn,ue)=>{var te=p(),Xr=_(),et=H(),rt=re(),tt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(r){if(typeof r=="string")return r;if(et(r))return Xr(r,ae)+"";if(rt(r))return ne?ne.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}ue.exports=ae});var x=a((xn,se)=>{var it=oe();function nt(r){return r==null?"":it(r)}se.exports=nt});var de=a((bn,le)=>{var at=O(),ut=x(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",mt=st+lt+dt,ct="["+mt+"]",ht=RegExp(ct,"g");function ft(r){return r=ut(r),r&&r.replace(ot,at).replace(ht,"")}le.exports=ft});var ce=a((wn,me)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(gt)||[]}me.exports=pt});var fe=a((vn,he)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return xt.test(r)}he.exports=bt});var Ne=a((Tn,Oe)=>{var ge="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=wt+vt+Tt,pe="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",we=Pt+Ct+Rt+kt,ve="['\u2019]",Te="["+we+"]",Mt="["+yt+"]",ye="\\d+",At="["+pe+"]",Pe="["+xe+"]",Ce="[^"+ge+we+ye+pe+xe+be+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+ge+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+be+"]",Nt="\\u200d",Se="(?:"+Pe+"|"+Ce+")",Vt="(?:"+c+"|"+Ce+")",Me="(?:"+ve+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+ve+"(?:D|LL|M|RE|S|T|VE))?",qe=jt+"?",je="["+St+"]?",Dt="(?:"+Nt+"(?:"+[Ot,Re,ke].join("|")+")"+je+qe+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lt=je+qe+Dt,_t="(?:"+[At,Re,ke].join("|")+")"+Lt,Et=RegExp([c+"?"+Pe+"+"+Me+"(?="+[Te,c,"$"].join("|")+")",Vt+"+"+Ae+"(?="+[Te,c+Se,"$"].join("|")+")",c+"?"+Se+"+"+Me,c+"+"+Ae,Ut,It,ye,_t].join("|"),"g");function Ht(r){return r.match(Et)||[]}Oe.exports=Ht});var De=a((yn,Ve)=>{var Ft=ce(),zt=fe(),Bt=x(),Gt=Ne();function Wt(r,e,t){return r=Bt(r),e=t?void 0:e,e===void 0?zt(r)?Gt(r):Ft(r):r.match(e)||[]}Ve.exports=Wt});var Ue=a((Pn,Ie)=>{var Zt=M(),Jt=de(),Yt=De(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Zt(Yt(Jt(e).replace(Kt,"")),r,"")}}Ie.exports=Qt});var _e=a((Cn,Le)=>{function Xt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(n);++i<n;)u[i]=r[i+e];return u}Le.exports=Xt});var He=a((Rn,Ee)=>{var ei=_e();function ri(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ei(r,e,t)}Ee.exports=ri});var v=a((kn,Fe)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",ui=ii+ni+ai,oi="\\ufe0e\\ufe0f",si="\\u200d",li=RegExp("["+si+ti+ui+oi+"]");function di(r){return li.test(r)}Fe.exports=di});var Be=a((Sn,ze)=>{function mi(r){return r.split("")}ze.exports=mi});var Qe=a((Mn,Ke)=>{var Ge="\\ud800-\\udfff",ci="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",gi=ci+hi+fi,pi="\\ufe0e\\ufe0f",xi="["+Ge+"]",T="["+gi+"]",y="\\ud83c[\\udffb-\\udfff]",bi="(?:"+T+"|"+y+")",We="[^"+Ge+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Ye=bi+"?",$e="["+pi+"]?",vi="(?:"+wi+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",Ti=$e+Ye+vi,yi="(?:"+[We+T+"?",T,Ze,Je,xi].join("|")+")",Pi=RegExp(y+"(?="+y+")|"+yi+Ti,"g");function Ci(r){return r.match(Pi)||[]}Ke.exports=Ci});var er=a((An,Xe)=>{var Ri=Be(),ki=v(),Si=Qe();function Mi(r){return ki(r)?Si(r):Ri(r)}Xe.exports=Mi});var tr=a((qn,rr)=>{var Ai=He(),qi=v(),ji=er(),Oi=x();function Ni(r){return function(e){e=Oi(e);var t=qi(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ai(t,1).join(""):e.slice(1);return i[r]()+n}}rr.exports=Ni});var nr=a((jn,ir)=>{var Vi=tr(),Di=Vi("toUpperCase");ir.exports=Di});var ur=a((On,ar)=>{var Ii=Ue(),Ui=nr(),Li=Ii(function(r,e,t){return r+(t?" ":"")+Ui(e)});ar.exports=Li});var sr=Pr(ur());var _i=`
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
`,or=`
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
`,$i={Glide:_i,"Machine Learning":Ji,General:or,Array:Fi,Number:Hi,Encoding:Yi,Text:Zi,"Data & APIs":Wi,Image:zi,Fun:Bi,"Date & Time":Gi,Code:Ei};function P({icon:r,category:e}){var t;return(t=r!=null?r:$i[e])!=null?t:or}function lr(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(lr):r}function Ki(r,e){return w(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,u;try{n=yield e(...i)}catch(o){n=void 0;try{u=o.toString()}catch(m){u="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=lr(n),l.result={type:"string",value:n}),u!==void 0&&(l.error=u),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Qi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ki(e,r.run)),g(d({},r),{json:JSON.stringify(Xi(r),null,2)})}function Xi(r){let{name:e,category:t,released:i,description:n,author:u,result:l,params:s,about:o,video:m}=r,mr=P(r);return{name:e,category:t,released:i,description:n,author:u,result:l,about:o,icon:mr,video:m,params:Object.entries(s).map(([cr,hr])=>d({name:cr},hr))}}var en={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=d(d({},en),e),this.requiredParams=[...t]}with(e,t=[]){return new b(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:P({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...l){let s={};if(l.forEach(({value:o},m)=>{s[n[m]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return Qi(g(d({},this.definition),{run:u}))}};function dr(r){return new b({name:r})}var Un=dr("Index of").withCategory("Array").withReleased("direct").withDescription("Finds the first index of an element in an array").withNumberResult().withRequiredPrimitiveArrayParam("values").withPrimitiveParam("toFind","To find").withTest({values:["a","b","b","c"],toFind:"b"},1).withTest({values:[3,20,100],toFind:"20"},1).withTest({values:[3,20,100],toFind:25},void 0).run(({values:r,toFind:e})=>{let t=r.findIndex(i=>i==e);return t===-1?void 0:t});})();
//# sourceMappingURL=index.js.map
