var hr=Object.create;var f=Object.defineProperty,fr=Object.defineProperties,gr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&R(e,t,r[t]);if(C)for(var t of C(r))wr.call(r,t)&&R(e,t,r[t]);return e},g=(e,r)=>fr(e,pr(r)),vr=e=>f(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Tr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xr(r))!P.call(e,i)&&i!=="default"&&f(e,i,{get:()=>r[i],enumerable:!(t=gr(r,i))||t.enumerable});return e},yr=e=>Tr(vr(f(e!=null?hr(br(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=(e,r,t)=>new Promise((i,a)=>{var s=u=>{try{o(t.next(u))}catch(d){a(d)}},m=u=>{try{o(t.throw(u))}catch(d){a(d)}},o=u=>u.done?i(u.value):Promise.resolve(u.value).then(s,m);o((t=t.apply(e,r)).next())});var M=n((en,k)=>{function Cr(e,r,t,i){var a=-1,s=e==null?0:e.length;for(i&&s&&(t=e[++a]);++a<s;)t=r(t,e[a],a,e);return t}k.exports=Cr});var q=n((rn,A)=>{function Pr(e){return function(r){return e==null?void 0:e[r]}}A.exports=Pr});var O=n((tn,j)=>{var Rr=q(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},kr=Rr(Sr);j.exports=kr});var V=n((nn,N)=>{var Mr=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Mr});var D=n((an,L)=>{var Ar=V(),qr=typeof self=="object"&&self&&self.Object===Object&&self,jr=Ar||qr||Function("return this")();L.exports=jr});var p=n((un,U)=>{var Or=D(),Nr=Or.Symbol;U.exports=Nr});var _=n((sn,I)=>{function Vr(e,r){for(var t=-1,i=e==null?0:e.length,a=Array(i);++t<i;)a[t]=r(e[t],t,e);return a}I.exports=Vr});var H=n((on,E)=>{var Lr=Array.isArray;E.exports=Lr});var W=n((ln,F)=>{var z=p(),G=Object.prototype,Dr=G.hasOwnProperty,Ur=G.toString,h=z?z.toStringTag:void 0;function Ir(e){var r=Dr.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(s){}var a=Ur.call(e);return i&&(r?e[h]=t:delete e[h]),a}F.exports=Ir});var Z=n((dn,B)=>{var _r=Object.prototype,Er=_r.toString;function Hr(e){return Er.call(e)}B.exports=Hr});var K=n((cn,$)=>{var J=p(),zr=W(),Gr=Z(),Fr="[object Null]",Wr="[object Undefined]",Y=J?J.toStringTag:void 0;function Br(e){return e==null?e===void 0?Wr:Fr:Y&&Y in Object(e)?zr(e):Gr(e)}$.exports=Br});var X=n((mn,Q)=>{function Zr(e){return e!=null&&typeof e=="object"}Q.exports=Zr});var re=n((hn,ee)=>{var Jr=K(),Yr=X(),$r="[object Symbol]";function Kr(e){return typeof e=="symbol"||Yr(e)&&Jr(e)==$r}ee.exports=Kr});var se=n((fn,ue)=>{var te=p(),Qr=_(),Xr=H(),et=re(),rt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(e){if(typeof e=="string")return e;if(Xr(e))return Qr(e,ae)+"";if(et(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-rt?"-0":r}ue.exports=ae});var x=n((gn,oe)=>{var tt=se();function it(e){return e==null?"":tt(e)}oe.exports=it});var de=n((pn,le)=>{var nt=O(),at=x(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",dt=st+ot+lt,ct="["+dt+"]",mt=RegExp(ct,"g");function ht(e){return e=at(e),e&&e.replace(ut,nt).replace(mt,"")}le.exports=ht});var me=n((xn,ce)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(e){return e.match(ft)||[]}ce.exports=gt});var fe=n((bn,he)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return pt.test(e)}he.exports=xt});var Ne=n((wn,Oe)=>{var ge="\\ud800-\\udfff",bt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",Tt=bt+wt+vt,pe="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",we=yt+Ct+Pt+Rt,ve="['\u2019]",Te="["+we+"]",kt="["+Tt+"]",ye="\\d+",Mt="["+pe+"]",Ce="["+xe+"]",Pe="[^"+ge+we+ye+pe+xe+be+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+kt+"|"+At+")",jt="[^"+ge+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+be+"]",Ot="\\u200d",ke="(?:"+Ce+"|"+Pe+")",Nt="(?:"+c+"|"+Pe+")",Me="(?:"+ve+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+ve+"(?:D|LL|M|RE|S|T|VE))?",qe=qt+"?",je="["+St+"]?",Vt="(?:"+Ot+"(?:"+[jt,Re,Se].join("|")+")"+je+qe+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ut=je+qe+Vt,It="(?:"+[Mt,Re,Se].join("|")+")"+Ut,_t=RegExp([c+"?"+Ce+"+"+Me+"(?="+[Te,c,"$"].join("|")+")",Nt+"+"+Ae+"(?="+[Te,c+ke,"$"].join("|")+")",c+"?"+ke+"+"+Me,c+"+"+Ae,Dt,Lt,ye,It].join("|"),"g");function Et(e){return e.match(_t)||[]}Oe.exports=Et});var Le=n((vn,Ve)=>{var Ht=me(),zt=fe(),Gt=x(),Ft=Ne();function Wt(e,r,t){return e=Gt(e),r=t?void 0:r,r===void 0?zt(e)?Ft(e):Ht(e):e.match(r)||[]}Ve.exports=Wt});var Ue=n((Tn,De)=>{var Bt=M(),Zt=de(),Jt=Le(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(e){return function(r){return Bt(Jt(Zt(r).replace($t,"")),e,"")}}De.exports=Kt});var _e=n((yn,Ie)=>{function Qt(e,r,t){var i=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var s=Array(a);++i<a;)s[i]=e[i+r];return s}Ie.exports=Qt});var He=n((Cn,Ee)=>{var Xt=_e();function ei(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Xt(e,r,t)}Ee.exports=ei});var w=n((Pn,ze)=>{var ri="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ai=ti+ii+ni,ui="\\ufe0e\\ufe0f",si="\\u200d",oi=RegExp("["+si+ri+ai+ui+"]");function li(e){return oi.test(e)}ze.exports=li});var Fe=n((Rn,Ge)=>{function di(e){return e.split("")}Ge.exports=di});var Qe=n((Sn,Ke)=>{var We="\\ud800-\\udfff",ci="\\u0300-\\u036f",mi="\\ufe20-\\ufe2f",hi="\\u20d0-\\u20ff",fi=ci+mi+hi,gi="\\ufe0e\\ufe0f",pi="["+We+"]",v="["+fi+"]",T="\\ud83c[\\udffb-\\udfff]",xi="(?:"+v+"|"+T+")",Be="[^"+We+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Ye=xi+"?",$e="["+gi+"]?",wi="(?:"+bi+"(?:"+[Be,Ze,Je].join("|")+")"+$e+Ye+")*",vi=$e+Ye+wi,Ti="(?:"+[Be+v+"?",v,Ze,Je,pi].join("|")+")",yi=RegExp(T+"(?="+T+")|"+Ti+vi,"g");function Ci(e){return e.match(yi)||[]}Ke.exports=Ci});var er=n((kn,Xe)=>{var Pi=Fe(),Ri=w(),Si=Qe();function ki(e){return Ri(e)?Si(e):Pi(e)}Xe.exports=ki});var tr=n((Mn,rr)=>{var Mi=He(),Ai=w(),qi=er(),ji=x();function Oi(e){return function(r){r=ji(r);var t=Ai(r)?qi(r):void 0,i=t?t[0]:r.charAt(0),a=t?Mi(t,1).join(""):r.slice(1);return i[e]()+a}}rr.exports=Oi});var nr=n((An,ir)=>{var Ni=tr(),Vi=Ni("toUpperCase");ir.exports=Vi});var ur=n((qn,ar)=>{var Li=Ue(),Di=nr(),Ui=Li(function(e,r,t){return e+(t?" ":"")+Di(r)});ar.exports=Ui});var or=yr(ur());var Ii=`
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
`,sr=`
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
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Wi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Bi=`
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
`,Yi={Glide:Ii,"Machine Learning":Zi,General:sr,Array:Hi,Number:Ei,Encoding:Ji,Text:Bi,"Data & APIs":Wi,Image:zi,Fun:Gi,"Date & Time":Fi,Code:_i};function y({icon:e,category:r}){var t;return(t=e!=null?e:Yi[r])!=null?t:sr}function $i(e){return g(l({},e),{json:JSON.stringify(Ki(e),null,2)})}function Ki(e){let{name:r,category:t,released:i,description:a,author:s,result:m,params:o,about:u,video:d}=e,dr=y(e);return{name:r,category:t,released:i,description:a,author:s,result:m,about:u,icon:dr,video:d,params:Object.entries(o).map(([cr,mr])=>l({name:cr},mr))}}var Qi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},b=class{constructor(r={},t=[]){this.definition=l(l({},Qi),r),this.requiredParams=[...t]}with(r,t=[]){return new b(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:y({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,or.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function s(...m){let o={};if(m.forEach(({value:u},d)=>{o[a[d]]=u}),!i.some(u=>o[u]===void 0))return r(o)}return $i(g(l({},this.definition),{run:s}))}};function lr(e){return new b({name:e})}var Ln=lr("Text Length").withCategory("Text").withReleased("direct").withDescription("Gets the length of a text snippet").withNumberResult().withRequiredStringParam("text").withTest({text:"This is some text"},17).run(({text:e})=>e.length);export{Ln as default};
//# sourceMappingURL=function.js.map
