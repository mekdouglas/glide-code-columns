(()=>{var fr=Object.create;var f=Object.defineProperty,gr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,br=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,wr=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,vr=Object.prototype.propertyIsEnumerable;var k=(e,r,t)=>r in e?f(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))R.call(r,t)&&k(e,t,r[t]);if(C)for(var t of C(r))vr.call(r,t)&&k(e,t,r[t]);return e},g=(e,r)=>gr(e,br(r)),Tr=e=>f(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var yr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of xr(r))!R.call(e,i)&&i!=="default"&&f(e,i,{get:()=>r[i],enumerable:!(t=pr(r,i))||t.enumerable});return e},Pr=e=>yr(Tr(f(e!=null?fr(wr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var w=(e,r,t)=>new Promise((i,n)=>{var u=o=>{try{s(t.next(o))}catch(c){n(c)}},l=o=>{try{s(t.throw(o))}catch(c){n(c)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,l);s((t=t.apply(e,r)).next())});var M=a((tn,S)=>{function Cr(e,r,t,i){var n=-1,u=e==null?0:e.length;for(i&&u&&(t=e[++n]);++n<u;)t=r(t,e[n],n,e);return t}S.exports=Cr});var q=a((nn,A)=>{function Rr(e){return function(r){return e==null?void 0:e[r]}}A.exports=Rr});var O=a((an,j)=>{var kr=q(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mr=kr(Sr);j.exports=Mr});var V=a((un,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var U=a((on,D)=>{var qr=V(),jr=typeof self=="object"&&self&&self.Object===Object&&self,Or=qr||jr||Function("return this")();D.exports=Or});var p=a((sn,L)=>{var Nr=U(),Vr=Nr.Symbol;L.exports=Vr});var _=a((ln,I)=>{function Dr(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}I.exports=Dr});var H=a((dn,E)=>{var Ur=Array.isArray;E.exports=Ur});var G=a((cn,F)=>{var z=p(),B=Object.prototype,Lr=B.hasOwnProperty,Ir=B.toString,h=z?z.toStringTag:void 0;function _r(e){var r=Lr.call(e,h),t=e[h];try{e[h]=void 0;var i=!0}catch(u){}var n=Ir.call(e);return i&&(r?e[h]=t:delete e[h]),n}F.exports=_r});var Z=a((mn,W)=>{var Er=Object.prototype,Hr=Er.toString;function zr(e){return Hr.call(e)}W.exports=zr});var K=a((hn,$)=>{var J=p(),Br=G(),Fr=Z(),Gr="[object Null]",Wr="[object Undefined]",Y=J?J.toStringTag:void 0;function Zr(e){return e==null?e===void 0?Wr:Gr:Y&&Y in Object(e)?Br(e):Fr(e)}$.exports=Zr});var X=a((fn,Q)=>{function Jr(e){return e!=null&&typeof e=="object"}Q.exports=Jr});var re=a((gn,ee)=>{var Yr=K(),$r=X(),Kr="[object Symbol]";function Qr(e){return typeof e=="symbol"||$r(e)&&Yr(e)==Kr}ee.exports=Qr});var oe=a((pn,ue)=>{var te=p(),Xr=_(),et=H(),rt=re(),tt=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(e){if(typeof e=="string")return e;if(et(e))return Xr(e,ae)+"";if(rt(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-tt?"-0":r}ue.exports=ae});var b=a((bn,se)=>{var it=oe();function nt(e){return e==null?"":it(e)}se.exports=nt});var de=a((xn,le)=>{var at=O(),ut=b(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ct=st+lt+dt,mt="["+ct+"]",ht=RegExp(mt,"g");function ft(e){return e=ut(e),e&&e.replace(ot,at).replace(ht,"")}le.exports=ft});var me=a((wn,ce)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(gt)||[]}ce.exports=pt});var fe=a((vn,he)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return bt.test(e)}he.exports=xt});var Ne=a((Tn,Oe)=>{var ge="\\ud800-\\udfff",wt="\\u0300-\\u036f",vt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=wt+vt+Tt,pe="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",Pt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",kt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",we=Pt+Ct+Rt+kt,ve="['\u2019]",Te="["+we+"]",Mt="["+yt+"]",ye="\\d+",At="["+pe+"]",Pe="["+be+"]",Ce="[^"+ge+we+ye+pe+be+xe+"]",qt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+Mt+"|"+qt+")",Ot="[^"+ge+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",ke="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+xe+"]",Nt="\\u200d",Se="(?:"+Pe+"|"+Ce+")",Vt="(?:"+m+"|"+Ce+")",Me="(?:"+ve+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+ve+"(?:D|LL|M|RE|S|T|VE))?",qe=jt+"?",je="["+St+"]?",Dt="(?:"+Nt+"(?:"+[Ot,Re,ke].join("|")+")"+je+qe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Lt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",It=je+qe+Dt,_t="(?:"+[At,Re,ke].join("|")+")"+It,Et=RegExp([m+"?"+Pe+"+"+Me+"(?="+[Te,m,"$"].join("|")+")",Vt+"+"+Ae+"(?="+[Te,m+Se,"$"].join("|")+")",m+"?"+Se+"+"+Me,m+"+"+Ae,Lt,Ut,ye,_t].join("|"),"g");function Ht(e){return e.match(Et)||[]}Oe.exports=Ht});var De=a((yn,Ve)=>{var zt=me(),Bt=fe(),Ft=b(),Gt=Ne();function Wt(e,r,t){return e=Ft(e),r=t?void 0:r,r===void 0?Bt(e)?Gt(e):zt(e):e.match(r)||[]}Ve.exports=Wt});var Le=a((Pn,Ue)=>{var Zt=M(),Jt=de(),Yt=De(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(e){return function(r){return Zt(Yt(Jt(r).replace(Kt,"")),e,"")}}Ue.exports=Qt});var _e=a((Cn,Ie)=>{function Xt(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(n);++i<n;)u[i]=e[i+r];return u}Ie.exports=Xt});var He=a((Rn,Ee)=>{var ei=_e();function ri(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ei(e,r,t)}Ee.exports=ri});var v=a((kn,ze)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ai="\\u20d0-\\u20ff",ui=ii+ni+ai,oi="\\ufe0e\\ufe0f",si="\\u200d",li=RegExp("["+si+ti+ui+oi+"]");function di(e){return li.test(e)}ze.exports=di});var Fe=a((Sn,Be)=>{function ci(e){return e.split("")}Be.exports=ci});var Qe=a((Mn,Ke)=>{var Ge="\\ud800-\\udfff",mi="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",gi=mi+hi+fi,pi="\\ufe0e\\ufe0f",bi="["+Ge+"]",T="["+gi+"]",y="\\ud83c[\\udffb-\\udfff]",xi="(?:"+T+"|"+y+")",We="[^"+Ge+"]",Ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",Ye=xi+"?",$e="["+pi+"]?",vi="(?:"+wi+"(?:"+[We,Ze,Je].join("|")+")"+$e+Ye+")*",Ti=$e+Ye+vi,yi="(?:"+[We+T+"?",T,Ze,Je,bi].join("|")+")",Pi=RegExp(y+"(?="+y+")|"+yi+Ti,"g");function Ci(e){return e.match(Pi)||[]}Ke.exports=Ci});var er=a((An,Xe)=>{var Ri=Fe(),ki=v(),Si=Qe();function Mi(e){return ki(e)?Si(e):Ri(e)}Xe.exports=Mi});var tr=a((qn,rr)=>{var Ai=He(),qi=v(),ji=er(),Oi=b();function Ni(e){return function(r){r=Oi(r);var t=qi(r)?ji(r):void 0,i=t?t[0]:r.charAt(0),n=t?Ai(t,1).join(""):r.slice(1);return i[e]()+n}}rr.exports=Ni});var nr=a((jn,ir)=>{var Vi=tr(),Di=Vi("toUpperCase");ir.exports=Di});var ur=a((On,ar)=>{var Ui=Le(),Li=nr(),Ii=Ui(function(e,r,t){return e+(t?" ":"")+Li(r)});ar.exports=Ii});var sr=Pr(ur());var _i=`
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
`,$i={Glide:_i,"Machine Learning":Ji,General:or,Array:zi,Number:Hi,Encoding:Yi,Text:Zi,"Data & APIs":Wi,Image:Bi,Fun:Fi,"Date & Time":Gi,Code:Ei};function P({icon:e,category:r}){var t;return(t=e!=null?e:$i[r])!=null?t:or}function lr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(lr):e}function Ki(e,r){return w(this,null,function*(){var s;let{data:{key:t,params:i}}=e,n,u;try{n=yield r(...i)}catch(o){n=void 0;try{u=o.toString()}catch(c){u="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=lr(n),l.result={type:"string",value:n}),u!==void 0&&(l.error=u),((s=e.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Qi(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Ki(r,e.run)),g(d({},e),{json:JSON.stringify(Xi(e),null,2)})}function Xi(e){let{name:r,category:t,released:i,description:n,author:u,result:l,params:s,about:o,video:c}=e,cr=P(e);return{name:r,category:t,released:i,description:n,author:u,result:l,about:o,icon:cr,video:c,params:Object.entries(s).map(([mr,hr])=>d({name:mr},hr))}}var en={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},x=class{constructor(r={},t=[]){this.definition=d(d({},en),r),this.requiredParams=[...t]}with(r,t=[]){return new x(d(d({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){let{icon:t}=this.definition;return this.with({category:r,icon:P({icon:t,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withFailingTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withBooleanParam(r,t){return this.withParam("boolean",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredURIParam(r,t){return this.withRequiredParam("uri",r,t)}withRequiredBooleanParam(r,t){return this.withRequiredParam("boolean",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withRequiredStringArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withRequiredPrimitiveArrayParam(r,t){return this.withRequiredParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...l){let s={};if(l.forEach(({value:o},c)=>{s[n[c]]=o}),!i.some(o=>s[o]===void 0))return r(s)}return Qi(g(d({},this.definition),{run:u}))}};function dr(e){return new x({name:e})}var Ln=dr("Not").withCategory("General").withReleased("direct").withDescription("True becomes false. False (and blank) become true.").withBooleanParam("value").withBooleanResult().withTest({value:!0},!1).withTest({value:!1},!0).withTest({value:void 0},!0).run(({value:e})=>!Boolean(e));})();
//# sourceMappingURL=index.js.map
