var cr=Object.create;var g=Object.defineProperty,gr=Object.defineProperties,fr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))C.call(e,t)&&R(r,t,e[t]);if(P)for(var t of P(e))wr.call(e,t)&&R(r,t,e[t]);return r},f=(r,e)=>gr(r,pr(e)),Tr=r=>g(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var vr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of xr(e))!C.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=fr(e,i))||t.enumerable});return r},yr=r=>vr(Tr(g(r!=null?cr(br(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,a)=>{var u=s=>{try{o(t.next(s))}catch(d){a(d)}},h=s=>{try{o(t.throw(s))}catch(d){a(d)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,h);o((t=t.apply(r,e)).next())});var M=n((en,k)=>{function Pr(r,e,t,i){var a=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++a]);++a<u;)t=e(t,r[a],a,r);return t}k.exports=Pr});var q=n((rn,A)=>{function Cr(r){return function(e){return r==null?void 0:r[e]}}A.exports=Cr});var O=n((tn,j)=>{var Rr=q(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},kr=Rr(Sr);j.exports=kr});var V=n((nn,N)=>{var Mr=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Mr});var U=n((an,D)=>{var Ar=V(),qr=typeof self=="object"&&self&&self.Object===Object&&self,jr=Ar||qr||Function("return this")();D.exports=jr});var p=n((sn,L)=>{var Or=U(),Nr=Or.Symbol;L.exports=Nr});var _=n((un,I)=>{function Vr(r,e){for(var t=-1,i=r==null?0:r.length,a=Array(i);++t<i;)a[t]=e(r[t],t,r);return a}I.exports=Vr});var H=n((on,E)=>{var Dr=Array.isArray;E.exports=Dr});var F=n((ln,B)=>{var z=p(),G=Object.prototype,Ur=G.hasOwnProperty,Lr=G.toString,c=z?z.toStringTag:void 0;function Ir(r){var e=Ur.call(r,c),t=r[c];try{r[c]=void 0;var i=!0}catch(u){}var a=Lr.call(r);return i&&(e?r[c]=t:delete r[c]),a}B.exports=Ir});var Z=n((dn,W)=>{var _r=Object.prototype,Er=_r.toString;function Hr(r){return Er.call(r)}W.exports=Hr});var K=n((mn,$)=>{var J=p(),zr=F(),Gr=Z(),Br="[object Null]",Fr="[object Undefined]",Y=J?J.toStringTag:void 0;function Wr(r){return r==null?r===void 0?Fr:Br:Y&&Y in Object(r)?zr(r):Gr(r)}$.exports=Wr});var X=n((hn,Q)=>{function Zr(r){return r!=null&&typeof r=="object"}Q.exports=Zr});var re=n((cn,ee)=>{var Jr=K(),Yr=X(),$r="[object Symbol]";function Kr(r){return typeof r=="symbol"||Yr(r)&&Jr(r)==$r}ee.exports=Kr});var ue=n((gn,se)=>{var te=p(),Qr=_(),Xr=H(),et=re(),rt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(r){if(typeof r=="string")return r;if(Xr(r))return Qr(r,ae)+"";if(et(r))return ne?ne.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}se.exports=ae});var x=n((fn,oe)=>{var tt=ue();function it(r){return r==null?"":tt(r)}oe.exports=it});var de=n((pn,le)=>{var nt=O(),at=x(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",dt=ut+ot+lt,mt="["+dt+"]",ht=RegExp(mt,"g");function ct(r){return r=at(r),r&&r.replace(st,nt).replace(ht,"")}le.exports=ct});var he=n((xn,me)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(r){return r.match(gt)||[]}me.exports=ft});var ge=n((bn,ce)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return pt.test(r)}ce.exports=xt});var Ne=n((wn,Oe)=>{var fe="\\ud800-\\udfff",bt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",vt=bt+wt+Tt,pe="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",we=yt+Pt+Ct+Rt,Te="['\u2019]",ve="["+we+"]",kt="["+vt+"]",ye="\\d+",Mt="["+pe+"]",Pe="["+xe+"]",Ce="[^"+fe+we+ye+pe+xe+be+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+kt+"|"+At+")",jt="[^"+fe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+be+"]",Ot="\\u200d",ke="(?:"+Pe+"|"+Ce+")",Nt="(?:"+m+"|"+Ce+")",Me="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",qe=qt+"?",je="["+St+"]?",Vt="(?:"+Ot+"(?:"+[jt,Re,Se].join("|")+")"+je+qe+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lt=je+qe+Vt,It="(?:"+[Mt,Re,Se].join("|")+")"+Lt,_t=RegExp([m+"?"+Pe+"+"+Me+"(?="+[ve,m,"$"].join("|")+")",Nt+"+"+Ae+"(?="+[ve,m+ke,"$"].join("|")+")",m+"?"+ke+"+"+Me,m+"+"+Ae,Ut,Dt,ye,It].join("|"),"g");function Et(r){return r.match(_t)||[]}Oe.exports=Et});var De=n((Tn,Ve)=>{var Ht=he(),zt=ge(),Gt=x(),Bt=Ne();function Ft(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?zt(r)?Bt(r):Ht(r):r.match(e)||[]}Ve.exports=Ft});var Le=n((vn,Ue)=>{var Wt=M(),Zt=de(),Jt=De(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Wt(Jt(Zt(e).replace($t,"")),r,"")}}Ue.exports=Kt});var _e=n((yn,Ie)=>{function Qt(r,e,t){var i=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(a);++i<a;)u[i]=r[i+e];return u}Ie.exports=Qt});var He=n((Pn,Ee)=>{var Xt=_e();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Xt(r,e,t)}Ee.exports=ei});var w=n((Cn,ze)=>{var ri="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ai=ti+ii+ni,si="\\ufe0e\\ufe0f",ui="\\u200d",oi=RegExp("["+ui+ri+ai+si+"]");function li(r){return oi.test(r)}ze.exports=li});var Be=n((Rn,Ge)=>{function di(r){return r.split("")}Ge.exports=di});var Qe=n((Sn,Ke)=>{var Fe="\\ud800-\\udfff",mi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",gi=mi+hi+ci,fi="\\ufe0e\\ufe0f",pi="["+Fe+"]",T="["+gi+"]",v="\\ud83c[\\udffb-\\udfff]",xi="(?:"+T+"|"+v+")",We="[^"+Fe+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Ye=xi+"?",$e="["+fi+"]?",wi="(?:"+bi+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",Ti=$e+Ye+wi,vi="(?:"+[We+T+"?",T,Ze,Je,pi].join("|")+")",yi=RegExp(v+"(?="+v+")|"+vi+Ti,"g");function Pi(r){return r.match(yi)||[]}Ke.exports=Pi});var er=n((kn,Xe)=>{var Ci=Be(),Ri=w(),Si=Qe();function ki(r){return Ri(r)?Si(r):Ci(r)}Xe.exports=ki});var tr=n((Mn,rr)=>{var Mi=He(),Ai=w(),qi=er(),ji=x();function Oi(r){return function(e){e=ji(e);var t=Ai(e)?qi(e):void 0,i=t?t[0]:e.charAt(0),a=t?Mi(t,1).join(""):e.slice(1);return i[r]()+a}}rr.exports=Oi});var nr=n((An,ir)=>{var Ni=tr(),Vi=Ni("toUpperCase");ir.exports=Vi});var sr=n((qn,ar)=>{var Di=Le(),Ui=nr(),Li=Di(function(r,e,t){return r+(t?" ":"")+Ui(e)});ar.exports=Li});var or=yr(sr());var Ii=`
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
    `,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ur=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Ji=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Yi={Glide:Ii,"Machine Learning":Zi,General:ur,Array:Hi,Number:Ei,Encoding:Ji,Text:Wi,"Data & APIs":Fi,Image:zi,Fun:Gi,"Date & Time":Bi,Code:_i};function y({icon:r,category:e}){var t;return(t=r!=null?r:Yi[e])!=null?t:ur}function $i(r){return f(l({},r),{json:JSON.stringify(Ki(r),null,2)})}function Ki(r){let{name:e,category:t,released:i,description:a,author:u,result:h,params:o,about:s,video:d}=r,dr=y(r);return{name:e,category:t,released:i,description:a,author:u,result:h,about:s,icon:dr,video:d,params:Object.entries(o).map(([mr,hr])=>l({name:mr},hr))}}var Qi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},b=class{constructor(e={},t=[]){this.definition=l(l({},Qi),e),this.requiredParams=[...t]}with(e,t=[]){return new b(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:y({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,or.default)(t)),this.with({params:f(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function u(...h){let o={};if(h.forEach(({value:s},d)=>{o[a[d]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return $i(f(l({},this.definition),{run:u}))}};function lr(r){return new b({name:r})}var Dn=lr("Text Slice").withReleased("direct").withCategory("Text").withDescription('Gets a substring out of text, from zero-indexed "start" with an optional length').withStringResult().withRequiredStringParam("text").withRequiredNumberParam("start").withNumberParam("length").withTest({text:"substring this",start:0},"substring this").withTest({text:"substring this",start:3},"string this").withTest({text:"substring this",start:3,length:6},"string").withTest({text:"substring this",start:0,length:3},"sub").run(({text:r,start:e,length:t})=>r.substring(e,t===void 0?void 0:t+e));export{Dn as default};
//# sourceMappingURL=function.js.map
