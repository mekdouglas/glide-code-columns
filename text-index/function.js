var cr=Object.create;var m=Object.defineProperty,fr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,gr=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var C=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&C(r,t,e[t]);if(v)for(var t of v(e))xr.call(e,t)&&C(r,t,e[t]);return r},p=(r,e)=>fr(r,pr(e)),Tr=r=>m(r,"__esModule",{value:!0});var a=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var wr=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of gr(e))!R.call(r,i)&&i!=="default"&&m(r,i,{get:()=>e[i],enumerable:!(t=mr(e,i))||t.enumerable});return r},yr=r=>wr(Tr(m(r!=null?cr(br(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,n)=>{var u=s=>{try{d(t.next(s))}catch(h){n(h)}},o=s=>{try{d(t.throw(s))}catch(h){n(h)}},d=s=>s.done?i(s.value):Promise.resolve(s.value).then(u,o);d((t=t.apply(r,e)).next())});var A=a((Gi,k)=>{function Pr(r,e,t,i){var n=-1,u=r==null?0:r.length;for(i&&u&&(t=r[++n]);++n<u;)t=e(t,r[n],n,r);return t}k.exports=Pr});var O=a((Wi,q)=>{function vr(r){return function(e){return r==null?void 0:r[e]}}q.exports=vr});var M=a((zi,L)=>{var Rr=O(),Cr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Sr=Rr(Cr);L.exports=Sr});var N=a((Fi,j)=>{var kr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=kr});var D=a((Bi,U)=>{var Ar=N(),qr=typeof self=="object"&&self&&self.Object===Object&&self,Or=Ar||qr||Function("return this")();U.exports=Or});var g=a((Hi,_)=>{var Lr=D(),Mr=Lr.Symbol;_.exports=Mr});var I=a((Ji,E)=>{function jr(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}E.exports=jr});var Z=a((Yi,V)=>{var Nr=Array.isArray;V.exports=Nr});var F=a(($i,z)=>{var G=g(),W=Object.prototype,Ur=W.hasOwnProperty,Dr=W.toString,f=G?G.toStringTag:void 0;function _r(r){var e=Ur.call(r,f),t=r[f];try{r[f]=void 0;var i=!0}catch(u){}var n=Dr.call(r);return i&&(e?r[f]=t:delete r[f]),n}z.exports=_r});var H=a((Ki,B)=>{var Er=Object.prototype,Ir=Er.toString;function Vr(r){return Ir.call(r)}B.exports=Vr});var K=a((Qi,$)=>{var J=g(),Zr=F(),Gr=H(),Wr="[object Null]",zr="[object Undefined]",Y=J?J.toStringTag:void 0;function Fr(r){return r==null?r===void 0?zr:Wr:Y&&Y in Object(r)?Zr(r):Gr(r)}$.exports=Fr});var X=a((Xi,Q)=>{function Br(r){return r!=null&&typeof r=="object"}Q.exports=Br});var re=a((en,ee)=>{var Hr=K(),Jr=X(),Yr="[object Symbol]";function $r(r){return typeof r=="symbol"||Jr(r)&&Hr(r)==Yr}ee.exports=$r});var se=a((rn,ue)=>{var te=g(),Kr=I(),Qr=Z(),Xr=re(),et=1/0,ie=te?te.prototype:void 0,ne=ie?ie.toString:void 0;function ae(r){if(typeof r=="string")return r;if(Qr(r))return Kr(r,ae)+"";if(Xr(r))return ne?ne.call(r):"";var e=r+"";return e=="0"&&1/r==-et?"-0":e}ue.exports=ae});var b=a((tn,oe)=>{var rt=se();function tt(r){return r==null?"":rt(r)}oe.exports=tt});var le=a((nn,de)=>{var it=M(),nt=b(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",dt=ut+st+ot,lt="["+dt+"]",ht=RegExp(lt,"g");function ct(r){return r=nt(r),r&&r.replace(at,it).replace(ht,"")}de.exports=ct});var ce=a((an,he)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(ft)||[]}he.exports=mt});var me=a((un,fe)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return pt.test(r)}fe.exports=gt});var je=a((sn,Me)=>{var pe="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",wt=bt+xt+Tt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Ct="\\ufe0e\\ufe0f",Te=yt+Pt+vt+Rt,we="['\u2019]",ye="["+Te+"]",St="["+wt+"]",Pe="\\d+",kt="["+ge+"]",ve="["+be+"]",Re="[^"+pe+Te+Pe+ge+be+xe+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+St+"|"+At+")",Ot="[^"+pe+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xe+"]",Lt="\\u200d",ke="(?:"+ve+"|"+Re+")",Mt="(?:"+c+"|"+Re+")",Ae="(?:"+we+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+we+"(?:D|LL|M|RE|S|T|VE))?",Oe=qt+"?",Le="["+Ct+"]?",jt="(?:"+Lt+"(?:"+[Ot,Ce,Se].join("|")+")"+Le+Oe+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Le+Oe+jt,_t="(?:"+[kt,Ce,Se].join("|")+")"+Dt,Et=RegExp([c+"?"+ve+"+"+Ae+"(?="+[ye,c,"$"].join("|")+")",Mt+"+"+qe+"(?="+[ye,c+ke,"$"].join("|")+")",c+"?"+ke+"+"+Ae,c+"+"+qe,Ut,Nt,Pe,_t].join("|"),"g");function It(r){return r.match(Et)||[]}Me.exports=It});var Ue=a((on,Ne)=>{var Vt=ce(),Zt=me(),Gt=b(),Wt=je();function zt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Zt(r)?Wt(r):Vt(r):r.match(e)||[]}Ne.exports=zt});var _e=a((dn,De)=>{var Ft=A(),Bt=le(),Ht=Ue(),Jt="['\u2019]",Yt=RegExp(Jt,"g");function $t(r){return function(e){return Ft(Ht(Bt(e).replace(Yt,"")),r,"")}}De.exports=$t});var Ie=a((ln,Ee)=>{function Kt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var u=Array(n);++i<n;)u[i]=r[i+e];return u}Ee.exports=Kt});var Ze=a((hn,Ve)=>{var Qt=Ie();function Xt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Qt(r,e,t)}Ve.exports=Xt});var w=a((cn,Ge)=>{var ei="\\ud800-\\udfff",ri="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ri+ti+ii,ai="\\ufe0e\\ufe0f",ui="\\u200d",si=RegExp("["+ui+ei+ni+ai+"]");function oi(r){return si.test(r)}Ge.exports=oi});var ze=a((fn,We)=>{function di(r){return r.split("")}We.exports=di});var Qe=a((mn,Ke)=>{var Fe="\\ud800-\\udfff",li="\\u0300-\\u036f",hi="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",fi=li+hi+ci,mi="\\ufe0e\\ufe0f",pi="["+Fe+"]",y="["+fi+"]",P="\\ud83c[\\udffb-\\udfff]",gi="(?:"+y+"|"+P+")",Be="[^"+Fe+"]",He="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Ye=gi+"?",$e="["+mi+"]?",xi="(?:"+bi+"(?:"+[Be,He,Je].join("|")+")"+$e+Ye+")*",Ti=$e+Ye+xi,wi="(?:"+[Be+y+"?",y,He,Je,pi].join("|")+")",yi=RegExp(P+"(?="+P+")|"+wi+Ti,"g");function Pi(r){return r.match(yi)||[]}Ke.exports=Pi});var er=a((pn,Xe)=>{var vi=ze(),Ri=w(),Ci=Qe();function Si(r){return Ri(r)?Ci(r):vi(r)}Xe.exports=Si});var tr=a((gn,rr)=>{var ki=Ze(),Ai=w(),qi=er(),Oi=b();function Li(r){return function(e){e=Oi(e);var t=Ai(e)?qi(e):void 0,i=t?t[0]:e.charAt(0),n=t?ki(t,1).join(""):e.slice(1);return i[r]()+n}}rr.exports=Li});var nr=a((bn,ir)=>{var Mi=tr(),ji=Mi("toUpperCase");ir.exports=ji});var ur=a((xn,ar)=>{var Ni=_e(),Ui=nr(),Di=Ni(function(r,e,t){return r+(t?" ":"")+Ui(e)});ar.exports=Di});var sr=yr(ur());function _i(r){return p(l({},r),{json:JSON.stringify(Ii(r),null,2)})}var Ei=`
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
    `,or=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ii(r){let{name:e,category:t,released:i,description:n,author:u,result:o,params:d,about:s,video:h}=r,{icon:T=or}=r;return T==="glide"&&(T=Ei),{name:e,category:t,released:i,description:n,author:u,result:o,about:s,icon:T,video:h,params:Object.entries(d).map(([lr,hr])=>l({name:lr},hr))}}var Vi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:or,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Vi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,sr.default)(t)),this.with({params:p(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...o){let d={};if(o.forEach(({value:s},h)=>{d[n[h]]=s}),!i.some(s=>d[s]===void 0))return e(d)}return _i(p(l({},this.definition),{run:u}))}};function dr(r){return new x({name:r})}var yn=dr("Text Offset").withCategory("Text").withDescription("Gets the zero-based offset of the zero-based N-th occurence of needle in haystack").withNumberResult().withReleased("direct").withRequiredStringParam("haystack").withRequiredStringParam("needle").withNumberParam("nth").withTest({haystack:"there is one @ here",needle:"@"},13).withTest({haystack:"there is one @ here",needle:"@",nth:0},13).withTest({haystack:"there is one @ here",needle:"@",nth:1},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:2},void 0).withTest({haystack:"there is one @ here",needle:"@",nth:-1},13).withTest({haystack:"there is one @ here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@"},void 0).withTest({haystack:"But none here",needle:"@",nth:-2},void 0).withTest({haystack:"But none here",needle:"@",nth:-1},void 0).withTest({haystack:"But none here",needle:"@",nth:0},void 0).withTest({haystack:"But none here",needle:"@",nth:1},void 0).withTest({haystack:"But none here",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-3},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-2},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:-1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:0},14).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:1},24).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:2},void 0).withTest({haystack:"there are two @ here in @ and there",needle:"@",nth:3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-3},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-2},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:-1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:0},0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:1},31).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:2},void 0).withTest({haystack:"@ but there's one in the front @ and middle",needle:"@",nth:3},void 0).withTest({haystack:"@ and we want @ the second @",needle:"@"},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:1},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:2},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-1},27).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-2},14).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-3},0).withTest({haystack:"@ and we want @ the second @",needle:"@",nth:-4},void 0).withTest({haystack:"and == we can do == long == numbers ==",needle:"=="},4).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:1},17).withTest({haystack:"and == we can do == long == numbers ==",needle:"==",nth:2},25).run(({needle:r,haystack:e,nth:t})=>{let i=Math.floor(t!=null?t:0),n=-1;if(i<0){i=-i,n=e.length;for(let u=0;u<i&&(e=e.substring(0,n),n=e.lastIndexOf(r),!(n<0));u++);}else{i++;let u=0;for(let o=0;o<i;o++){if(e=e.substring(n+1),n=e.indexOf(r),n<0){u=-1;break}u+=o===0?n:n+1}n=u}return n<0?void 0:n});export{yn as default};
//# sourceMappingURL=function.js.map