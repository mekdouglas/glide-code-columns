(()=>{var mr=Object.create;var m=Object.defineProperty,gr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,wr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,xr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,Tr=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,h=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&R(r,t,e[t]);if(k)for(var t of k(e))Tr.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>gr(r,wr(e)),yr=r=>m(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var vr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of br(e))!C.call(r,i)&&i!=="default"&&m(r,i,{get:()=>e[i],enumerable:!(t=pr(e,i))||t.enumerable});return r},Pr=r=>vr(yr(m(r!=null?mr(xr(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var x=(r,e,t)=>new Promise((i,n)=>{var s=o=>{try{u(t.next(o))}catch(l){n(l)}},d=o=>{try{u(t.throw(o))}catch(l){n(l)}},u=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,d);u((t=t.apply(r,e)).next())});var M=a((ni,S)=>{function kr(r,e,t,i){var n=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++n]);++n<s;)t=e(t,r[n],n,r);return t}S.exports=kr});var q=a((ii,A)=>{function Cr(r){return function(e){return r==null?void 0:r[e]}}A.exports=Cr});var O=a((ai,j)=>{var Rr=q(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mr=Rr(Sr);j.exports=Mr});var V=a((si,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var D=a((oi,I)=>{var qr=V(),jr=typeof self=="object"&&self&&self.Object===Object&&self,Or=qr||jr||Function("return this")();I.exports=Or});var p=a((ui,L)=>{var Nr=D(),Vr=Nr.Symbol;L.exports=Vr});var _=a((di,U)=>{function Ir(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}U.exports=Ir});var H=a((hi,E)=>{var Dr=Array.isArray;E.exports=Dr});var F=a((li,G)=>{var z=p(),B=Object.prototype,Lr=B.hasOwnProperty,Ur=B.toString,f=z?z.toStringTag:void 0;function _r(r){var e=Lr.call(r,f),t=r[f];try{r[f]=void 0;var i=!0}catch(s){}var n=Ur.call(r);return i&&(e?r[f]=t:delete r[f]),n}G.exports=_r});var Z=a((ci,W)=>{var Er=Object.prototype,Hr=Er.toString;function zr(r){return Hr.call(r)}W.exports=zr});var K=a((fi,$)=>{var J=p(),Br=F(),Gr=Z(),Fr="[object Null]",Wr="[object Undefined]",Y=J?J.toStringTag:void 0;function Zr(r){return r==null?r===void 0?Wr:Fr:Y&&Y in Object(r)?Br(r):Gr(r)}$.exports=Zr});var X=a((mi,Q)=>{function Jr(r){return r!=null&&typeof r=="object"}Q.exports=Jr});var re=a((gi,ee)=>{var Yr=K(),$r=X(),Kr="[object Symbol]";function Qr(r){return typeof r=="symbol"||$r(r)&&Yr(r)==Kr}ee.exports=Qr});var oe=a((pi,se)=>{var te=p(),Xr=_(),et=H(),rt=re(),tt=1/0,ne=te?te.prototype:void 0,ie=ne?ne.toString:void 0;function ae(r){if(typeof r=="string")return r;if(et(r))return Xr(r,ae)+"";if(rt(r))return ie?ie.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}se.exports=ae});var w=a((wi,ue)=>{var nt=oe();function it(r){return r==null?"":nt(r)}ue.exports=it});var he=a((bi,de)=>{var at=O(),st=w(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",lt=ut+dt+ht,ct="["+lt+"]",ft=RegExp(ct,"g");function mt(r){return r=st(r),r&&r.replace(ot,at).replace(ft,"")}de.exports=mt});var ce=a((xi,le)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(gt)||[]}le.exports=pt});var me=a((Ti,fe)=>{var wt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return wt.test(r)}fe.exports=bt});var Ne=a((yi,Oe)=>{var ge="\\ud800-\\udfff",xt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",vt=xt+Tt+yt,pe="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",xe=Pt+kt+Ct+Rt,Te="['\u2019]",ye="["+xe+"]",Mt="["+vt+"]",ve="\\d+",At="["+pe+"]",Pe="["+we+"]",ke="[^"+ge+xe+ve+pe+we+be+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+be+"]",Nt="\\u200d",Se="(?:"+Pe+"|"+ke+")",Vt="(?:"+c+"|"+ke+")",Me="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",qe=jt+"?",je="["+St+"]?",It="(?:"+Nt+"(?:"+[Ot,Ce,Re].join("|")+")"+je+qe+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=je+qe+It,_t="(?:"+[At,Ce,Re].join("|")+")"+Ut,Et=RegExp([c+"?"+Pe+"+"+Me+"(?="+[ye,c,"$"].join("|")+")",Vt+"+"+Ae+"(?="+[ye,c+Se,"$"].join("|")+")",c+"?"+Se+"+"+Me,c+"+"+Ae,Lt,Dt,ve,_t].join("|"),"g");function Ht(r){return r.match(Et)||[]}Oe.exports=Ht});var Ie=a((vi,Ve)=>{var zt=ce(),Bt=me(),Gt=w(),Ft=Ne();function Wt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Bt(r)?Ft(r):zt(r):r.match(e)||[]}Ve.exports=Wt});var Le=a((Pi,De)=>{var Zt=M(),Jt=he(),Yt=Ie(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Zt(Yt(Jt(e).replace(Kt,"")),r,"")}}De.exports=Qt});var _e=a((ki,Ue)=>{function Xt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(n);++i<n;)s[i]=r[i+e];return s}Ue.exports=Xt});var He=a((Ci,Ee)=>{var en=_e();function rn(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:en(r,e,t)}Ee.exports=rn});var T=a((Ri,ze)=>{var tn="\\ud800-\\udfff",nn="\\u0300-\\u036f",an="\\ufe20-\\ufe2f",sn="\\u20d0-\\u20ff",on=nn+an+sn,un="\\ufe0e\\ufe0f",dn="\\u200d",hn=RegExp("["+dn+tn+on+un+"]");function ln(r){return hn.test(r)}ze.exports=ln});var Ge=a((Si,Be)=>{function cn(r){return r.split("")}Be.exports=cn});var Qe=a((Mi,Ke)=>{var Fe="\\ud800-\\udfff",fn="\\u0300-\\u036f",mn="\\ufe20-\\ufe2f",gn="\\u20d0-\\u20ff",pn=fn+mn+gn,wn="\\ufe0e\\ufe0f",bn="["+Fe+"]",y="["+pn+"]",v="\\ud83c[\\udffb-\\udfff]",xn="(?:"+y+"|"+v+")",We="[^"+Fe+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="\\u200d",Ye=xn+"?",$e="["+wn+"]?",yn="(?:"+Tn+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",vn=$e+Ye+yn,Pn="(?:"+[We+y+"?",y,Ze,Je,bn].join("|")+")",kn=RegExp(v+"(?="+v+")|"+Pn+vn,"g");function Cn(r){return r.match(kn)||[]}Ke.exports=Cn});var er=a((Ai,Xe)=>{var Rn=Ge(),Sn=T(),Mn=Qe();function An(r){return Sn(r)?Mn(r):Rn(r)}Xe.exports=An});var tr=a((qi,rr)=>{var qn=He(),jn=T(),On=er(),Nn=w();function Vn(r){return function(e){e=Nn(e);var t=jn(e)?On(e):void 0,i=t?t[0]:e.charAt(0),n=t?qn(t,1).join(""):e.slice(1);return i[r]()+n}}rr.exports=Vn});var ir=a((ji,nr)=>{var In=tr(),Dn=In("toUpperCase");nr.exports=Dn});var sr=a((Oi,ar)=>{var Ln=Le(),Un=ir(),_n=Ln(function(r,e,t){return r+(t?" ":"")+Un(e)});ar.exports=_n});var ur=Pr(sr());var En=`
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
    `,Hn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,or=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Bn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Gn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Yn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,$n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Kn={Glide:En,"Machine Learning":Yn,General:or,Array:Bn,Number:zn,Encoding:$n,Text:Jn,"Data & APIs":Zn,Image:Gn,Fun:Fn,"Date & Time":Wn,Code:Hn};function P({icon:r,category:e}){var t;return(t=r!=null?r:Kn[e])!=null?t:or}function dr(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(dr):r}function Qn(r,e){return x(this,null,function*(){var u;let{data:{key:t,params:i}}=r,n,s;try{n=yield e(...i)}catch(o){n=void 0;try{s=o.toString()}catch(l){s="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=dr(n),d.result={type:"string",value:n}),s!==void 0&&(d.error=s),((u=r.source)==null?void 0:u.postMessage).call(u,d,"*")})}function Xn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Qn(e,r.run)),g(h({},r),{json:JSON.stringify(ei(r),null,2)})}function ei(r){let{name:e,category:t,released:i,description:n,author:s,result:d,params:u,about:o,video:l}=r,lr=P(r);return{name:e,category:t,released:i,description:n,author:s,result:d,about:o,icon:lr,video:l,params:Object.entries(u).map(([cr,fr])=>h({name:cr},fr))}}var ri={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return x(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=h(h({},ri),e),this.requiredParams=[...t]}with(e,t=[]){return new b(h(h({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:P({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,ur.default)(t)),this.with({params:g(h({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function s(...d){let u={};if(d.forEach(({value:o},l)=>{u[n[l]]=o}),!i.some(o=>u[o]===void 0))return e(u)}return Xn(g(h({},this.definition),{run:s}))}};function hr(r){return new b({name:r})}var Li=hr("Text Offset").withCategory("Text").withDescription("Gets the zero-based offset of the zero-based N-th occurence of needle in haystack").withNumberResult().withReleased("direct").withRequiredStringParam("haystack").withRequiredStringParam("needle").withNumberParam("nth").withTest({haystack:"there is one @ here",needle:"@"},13).withTest({haystack:"there is one @ here",needle:"@",nth:0},13).withTest({haystack:"there is one @ here",needle:"@",nth:1},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:2},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:-1},13).withTest({haystack:"there is one @ here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@"},void 0).withTest({haystack:"But none here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@",nth:-1},void 0).withTest({haystack:"But none here",needle:"@",nth:0},void 0).withTest({haystack:"But none here",needle:"@",nth:1},void 0).withTest({haystack:"But none here",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-3},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-2},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:0},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-2},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:0},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:2},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:3},void 0).withTest({haystack:"@ and we want @ the second @",needle:"@"},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:1},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:2},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-1},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-2},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-3},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-4},void 0).withTest({haystack:"and == we can do == long == numbers ==",needle:"=="},4).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:1},17).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:2},25).run(({needle:r,haystack:e,nth:t})=>{let i=Math.floor(t!=null?t:0),n=-1;if(i<0){i=-i,n=e.length;for(let s=0;s<i&&(e=e.substring(0,n),n=e.lastIndexOf(r),!(n<0));s++);}else{i++;let s=0;for(let d=0;d<i;d++){if(e=e.substring(n+1),n=e.indexOf(r),n<0){s=-1;break}s+=d===0?n:n+1}n=s}return n<0?void 0:n});})();
//# sourceMappingURL=index.js.map