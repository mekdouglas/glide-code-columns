var he=Object.create;var g=Object.defineProperty,ge=Object.defineProperties,fe=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertyNames,P=Object.getOwnPropertySymbols,be=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&R(e,t,r[t]);if(P)for(var t of P(r))we.call(r,t)&&R(e,t,r[t]);return e},f=(e,r)=>ge(e,pe(r)),ve=e=>g(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Te=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xe(r))!C.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=fe(r,i))||t.enumerable});return e},ye=e=>Te(ve(g(e!=null?he(be(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=(e,r,t)=>new Promise((i,a)=>{var o=u=>{try{s(t.next(u))}catch(d){a(d)}},c=u=>{try{s(t.throw(u))}catch(d){a(d)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(o,c);s((t=t.apply(e,r)).next())});var M=n((rn,k)=>{function Pe(e,r,t,i){var a=-1,o=e==null?0:e.length;for(i&&o&&(t=e[++a]);++a<o;)t=r(t,e[a],a,e);return t}k.exports=Pe});var q=n((en,A)=>{function Ce(e){return function(r){return e==null?void 0:e[r]}}A.exports=Ce});var O=n((tn,j)=>{var Re=q(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ke=Re(Se);j.exports=ke});var N=n((nn,V)=>{var Me=typeof global=="object"&&global&&global.Object===Object&&global;V.exports=Me});var U=n((an,D)=>{var Ae=N(),qe=typeof self=="object"&&self&&self.Object===Object&&self,je=Ae||qe||Function("return this")();D.exports=je});var p=n((un,L)=>{var Oe=U(),Ve=Oe.Symbol;L.exports=Ve});var E=n((on,I)=>{function Ne(e,r){for(var t=-1,i=e==null?0:e.length,a=Array(i);++t<i;)a[t]=r(e[t],t,e);return a}I.exports=Ne});var H=n((sn,_)=>{var De=Array.isArray;_.exports=De});var G=n((ln,F)=>{var z=p(),B=Object.prototype,Ue=B.hasOwnProperty,Le=B.toString,h=z?z.toStringTag:void 0;function Ie(e){var r=Ue.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(o){}var a=Le.call(e);return i&&(r?e[h]=t:delete e[h]),a}F.exports=Ie});var Z=n((dn,W)=>{var Ee=Object.prototype,_e=Ee.toString;function He(e){return _e.call(e)}W.exports=He});var K=n((mn,$)=>{var J=p(),ze=G(),Be=Z(),Fe="[object Null]",Ge="[object Undefined]",Y=J?J.toStringTag:void 0;function We(e){return e==null?e===void 0?Ge:Fe:Y&&Y in Object(e)?ze(e):Be(e)}$.exports=We});var X=n((cn,Q)=>{function Ze(e){return e!=null&&typeof e=="object"}Q.exports=Ze});var er=n((hn,rr)=>{var Je=K(),Ye=X(),$e="[object Symbol]";function Ke(e){return typeof e=="symbol"||Ye(e)&&Je(e)==$e}rr.exports=Ke});var or=n((gn,ur)=>{var tr=p(),Qe=E(),Xe=H(),rt=er(),et=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ar(e){if(typeof e=="string")return e;if(Xe(e))return Qe(e,ar)+"";if(rt(e))return nr?nr.call(e):"";var r=e+"";return r=="0"&&1/e==-et?"-0":r}ur.exports=ar});var x=n((fn,sr)=>{var tt=or();function it(e){return e==null?"":tt(e)}sr.exports=it});var dr=n((pn,lr)=>{var nt=O(),at=x(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",dt=ot+st+lt,mt="["+dt+"]",ct=RegExp(mt,"g");function ht(e){return e=at(e),e&&e.replace(ut,nt).replace(ct,"")}lr.exports=ht});var cr=n((xn,mr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(e){return e.match(gt)||[]}mr.exports=ft});var gr=n((bn,hr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return pt.test(e)}hr.exports=xt});var Vr=n((wn,Or)=>{var fr="\\ud800-\\udfff",bt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",Tt=bt+wt+vt,pr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",wr=yt+Pt+Ct+Rt,vr="['\u2019]",Tr="["+wr+"]",kt="["+Tt+"]",yr="\\d+",Mt="["+pr+"]",Pr="["+xr+"]",Cr="[^"+fr+wr+yr+pr+xr+br+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+kt+"|"+At+")",jt="[^"+fr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+br+"]",Ot="\\u200d",kr="(?:"+Pr+"|"+Cr+")",Vt="(?:"+m+"|"+Cr+")",Mr="(?:"+vr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+vr+"(?:D|LL|M|RE|S|T|VE))?",qr=qt+"?",jr="["+St+"]?",Nt="(?:"+Ot+"(?:"+[jt,Rr,Sr].join("|")+")"+jr+qr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Lt=jr+qr+Nt,It="(?:"+[Mt,Rr,Sr].join("|")+")"+Lt,Et=RegExp([m+"?"+Pr+"+"+Mr+"(?="+[Tr,m,"$"].join("|")+")",Vt+"+"+Ar+"(?="+[Tr,m+kr,"$"].join("|")+")",m+"?"+kr+"+"+Mr,m+"+"+Ar,Ut,Dt,yr,It].join("|"),"g");function _t(e){return e.match(Et)||[]}Or.exports=_t});var Dr=n((vn,Nr)=>{var Ht=cr(),zt=gr(),Bt=x(),Ft=Vr();function Gt(e,r,t){return e=Bt(e),r=t?void 0:r,r===void 0?zt(e)?Ft(e):Ht(e):e.match(r)||[]}Nr.exports=Gt});var Lr=n((Tn,Ur)=>{var Wt=M(),Zt=dr(),Jt=Dr(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(e){return function(r){return Wt(Jt(Zt(r).replace($t,"")),e,"")}}Ur.exports=Kt});var Er=n((yn,Ir)=>{function Qt(e,r,t){var i=-1,a=e.length;r<0&&(r=-r>a?0:a+r),t=t>a?a:t,t<0&&(t+=a),a=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(a);++i<a;)o[i]=e[i+r];return o}Ir.exports=Qt});var Hr=n((Pn,_r)=>{var Xt=Er();function ri(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Xt(e,r,t)}_r.exports=ri});var w=n((Cn,zr)=>{var ei="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ai=ti+ii+ni,ui="\\ufe0e\\ufe0f",oi="\\u200d",si=RegExp("["+oi+ei+ai+ui+"]");function li(e){return si.test(e)}zr.exports=li});var Fr=n((Rn,Br)=>{function di(e){return e.split("")}Br.exports=di});var Qr=n((Sn,Kr)=>{var Gr="\\ud800-\\udfff",mi="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",hi="\\u20d0-\\u20ff",gi=mi+ci+hi,fi="\\ufe0e\\ufe0f",pi="["+Gr+"]",v="["+gi+"]",T="\\ud83c[\\udffb-\\udfff]",xi="(?:"+v+"|"+T+")",Wr="[^"+Gr+"]",Zr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Yr=xi+"?",$r="["+fi+"]?",wi="(?:"+bi+"(?:"+[Wr,Zr,Jr].join("|")+")"+$r+Yr+")*",vi=$r+Yr+wi,Ti="(?:"+[Wr+v+"?",v,Zr,Jr,pi].join("|")+")",yi=RegExp(T+"(?="+T+")|"+Ti+vi,"g");function Pi(e){return e.match(yi)||[]}Kr.exports=Pi});var re=n((kn,Xr)=>{var Ci=Fr(),Ri=w(),Si=Qr();function ki(e){return Ri(e)?Si(e):Ci(e)}Xr.exports=ki});var te=n((Mn,ee)=>{var Mi=Hr(),Ai=w(),qi=re(),ji=x();function Oi(e){return function(r){r=ji(r);var t=Ai(r)?qi(r):void 0,i=t?t[0]:r.charAt(0),a=t?Mi(t,1).join(""):r.slice(1);return i[e]()+a}}ee.exports=Oi});var ne=n((An,ie)=>{var Vi=te(),Ni=Vi("toUpperCase");ie.exports=Ni});var ue=n((qn,ae)=>{var Di=Lr(),Ui=ne(),Li=Di(function(e,r,t){return e+(t?" ":"")+Ui(r)});ae.exports=Li});var se=ye(ue());var Ii=`
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
    `,_i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,oe=`
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
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
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
`,Yi={Glide:Ii,"Machine Learning":Zi,General:oe,Array:Hi,Number:_i,Encoding:Ji,Text:Wi,"Data & APIs":Gi,Image:zi,Fun:Bi,"Date & Time":Fi,Code:Ei};function y({icon:e,category:r}){var t;return(t=e!=null?e:Yi[r])!=null?t:oe}function $i(e){return f(l({},e),{json:JSON.stringify(Ki(e),null,2)})}function Ki(e){let{name:r,category:t,released:i,description:a,author:o,result:c,params:s,about:u,video:d}=e,de=y(e);return{name:r,category:t,released:i,description:a,author:o,result:c,about:u,icon:de,video:d,params:Object.entries(s).map(([me,ce])=>l({name:me},ce))}}var Qi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},b=class{constructor(r={},t=[]){this.definition=l(l({},Qi),r),this.requiredParams=[...t]}with(r,t=[]){return new b(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:y({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:f(l({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:u},d)=>{s[a[d]]=u}),!i.some(u=>s[u]===void 0))return r(s)}return $i(f(l({},this.definition),{run:o}))}};function le(e){return new b({name:e})}var Dn=le("Single Element Array").withCategory("Array").withReleased("direct").withDescription("Convert a solitary value to an array").withPrimitiveArrayResult().withRequiredPrimitiveParam("value").withTest({value:"a"},["a"]).withTest({value:3},[3]).run(({value:e})=>[e]);export{Dn as default};
//# sourceMappingURL=function.js.map
