var ge=Object.create;var p=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,ye=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&P(r,t,e[t]);if(C)for(var t of C(e))we.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>xe(r,he(e)),Ce=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ve=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Te(e))!v.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=be(e,i))||t.enumerable});return r},R=r=>ve(Ce(p(r!=null?ge(ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var q=n((Fi,A)=>{function Pe(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}A.exports=Pe});var L=n((Hi,O)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}O.exports=Re});var j=n((Ji,M)=>{var Se=L(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qe=Se(Ae);M.exports=qe});var U=n(($i,N)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Oe});var D=n((Bi,_)=>{var Le=U(),Me=typeof self=="object"&&self&&self.Object===Object&&self,je=Le||Me||Function("return this")();_.exports=je});var x=n((Yi,E)=>{var Ne=D(),Ue=Ne.Symbol;E.exports=Ue});var I=n((Ki,Z)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}Z.exports=_e});var z=n((Qi,k)=>{var De=Array.isArray;k.exports=De});var F=n((Xi,V)=>{var W=x(),G=Object.prototype,Ee=G.hasOwnProperty,Ze=G.toString,m=W?W.toStringTag:void 0;function Ie(r){var e=Ee.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var u=Ze.call(r);return i&&(e?r[m]=t:delete r[m]),u}V.exports=Ie});var J=n((rn,H)=>{var ke=Object.prototype,ze=ke.toString;function We(r){return ze.call(r)}H.exports=We});var K=n((en,Y)=>{var $=x(),Ge=F(),Ve=J(),Fe="[object Null]",He="[object Undefined]",B=$?$.toStringTag:void 0;function Je(r){return r==null?r===void 0?He:Fe:B&&B in Object(r)?Ge(r):Ve(r)}Y.exports=Je});var X=n((tn,Q)=>{function $e(r){return r!=null&&typeof r=="object"}Q.exports=$e});var er=n((nn,rr)=>{var Be=K(),Ye=X(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||Ye(r)&&Be(r)==Ke}rr.exports=Qe});var or=n((un,ar)=>{var tr=x(),Xe=I(),rt=z(),et=er(),tt=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ur(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ur)+"";if(et(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}ar.exports=ur});var b=n((an,sr)=>{var it=or();function nt(r){return r==null?"":it(r)}sr.exports=nt});var dr=n((on,fr)=>{var ut=j(),at=b(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ft+dt,ct="["+lt+"]",mt=RegExp(ct,"g");function pt(r){return r=at(r),r&&r.replace(ot,ut).replace(mt,"")}fr.exports=pt});var cr=n((sn,lr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}lr.exports=xt});var pr=n((fn,mr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}mr.exports=ht});var Nr=n((dn,jr)=>{var gr="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",Ct=Tt+yt+wt,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",Tr=vt+Pt+Rt+St,yr="['\u2019]",wr="["+Tr+"]",qt="["+Ct+"]",Cr="\\d+",Ot="["+xr+"]",vr="["+br+"]",Pr="[^"+gr+Tr+Cr+xr+br+hr+"]",Lt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+qt+"|"+Lt+")",jt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+hr+"]",Nt="\\u200d",Ar="(?:"+vr+"|"+Pr+")",Ut="(?:"+l+"|"+Pr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Mt+"?",Mr="["+At+"]?",_t="(?:"+Nt+"(?:"+[jt,Rr,Sr].join("|")+")"+Mr+Lr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Zt=Mr+Lr+_t,It="(?:"+[Ot,Rr,Sr].join("|")+")"+Zt,kt=RegExp([l+"?"+vr+"+"+qr+"(?="+[wr,l,"$"].join("|")+")",Ut+"+"+Or+"(?="+[wr,l+Ar,"$"].join("|")+")",l+"?"+Ar+"+"+qr,l+"+"+Or,Et,Dt,Cr,It].join("|"),"g");function zt(r){return r.match(kt)||[]}jr.exports=zt});var _r=n((ln,Ur)=>{var Wt=cr(),Gt=pr(),Vt=b(),Ft=Nr();function Ht(r,e,t){return r=Vt(r),e=t?void 0:e,e===void 0?Gt(r)?Ft(r):Wt(r):r.match(e)||[]}Ur.exports=Ht});var Er=n((cn,Dr)=>{var Jt=q(),$t=dr(),Bt=_r(),Yt="['\u2019]",Kt=RegExp(Yt,"g");function Qt(r){return function(e){return Jt(Bt($t(e).replace(Kt,"")),r,"")}}Dr.exports=Qt});var Ir=n((mn,Zr)=>{function Xt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Zr.exports=Xt});var zr=n((pn,kr)=>{var ri=Ir();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}kr.exports=ei});var T=n((gn,Wr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,oi="\\ufe0e\\ufe0f",si="\\u200d",fi=RegExp("["+si+ti+ai+oi+"]");function di(r){return fi.test(r)}Wr.exports=di});var Vr=n((xn,Gr)=>{function li(r){return r.split("")}Gr.exports=li});var Qr=n((bn,Kr)=>{var Fr="\\ud800-\\udfff",ci="\\u0300-\\u036f",mi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",gi=ci+mi+pi,xi="\\ufe0e\\ufe0f",bi="["+Fr+"]",y="["+gi+"]",w="\\ud83c[\\udffb-\\udfff]",hi="(?:"+y+"|"+w+")",Hr="[^"+Fr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="\\u200d",Br=hi+"?",Yr="["+xi+"]?",yi="(?:"+Ti+"(?:"+[Hr,Jr,$r].join("|")+")"+Yr+Br+")*",wi=Yr+Br+yi,Ci="(?:"+[Hr+y+"?",y,Jr,$r,bi].join("|")+")",vi=RegExp(w+"(?="+w+")|"+Ci+wi,"g");function Pi(r){return r.match(vi)||[]}Kr.exports=Pi});var re=n((hn,Xr)=>{var Ri=Vr(),Si=T(),Ai=Qr();function qi(r){return Si(r)?Ai(r):Ri(r)}Xr.exports=qi});var te=n((Tn,ee)=>{var Oi=zr(),Li=T(),Mi=re(),ji=b();function Ni(r){return function(e){e=ji(e);var t=Li(e)?Mi(e):void 0,i=t?t[0]:e.charAt(0),u=t?Oi(t,1).join(""):e.slice(1);return i[r]()+u}}ee.exports=Ni});var ne=n((yn,ie)=>{var Ui=te(),_i=Ui("toUpperCase");ie.exports=_i});var ae=n((wn,ue)=>{var Di=Er(),Ei=ne(),Zi=Di(function(r,e,t){return r+(t?" ":"")+Ei(e)});ue.exports=Zi});var le=n(de=>{"use strict";var Gi=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;de.validate=function(r){if(!r||r.length>254)return!1;var e=Gi.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var i=t[1].split(".");return!i.some(function(u){return u.length>63})}});var oe=R(ae());function Ii(r){return g(d({},r),{json:JSON.stringify(zi(r),null,2)})}var ki=`
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
    `,se=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function zi(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:f=se}=r;return f==="glide"&&(f=ki),{name:e,category:t,description:i,author:u,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([me,pe])=>d({name:me},pe))}}var Wi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[u[f]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return Ii(g(d({},this.definition),{run:o}))}};function fe(r){return new h({name:r})}var ce=R(le()),Rn=fe("Email Validator").withCategory("Text").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withTest({email:"hello@world.co"},!0).run(({email:r})=>r!==void 0&&ce.default.validate(r));export{Rn as default};
//# sourceMappingURL=function.js.map