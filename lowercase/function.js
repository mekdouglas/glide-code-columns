var ge=Object.create;var p=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&R(r,t,e[t]);if(v)for(var t of v(e))Ce.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>xe(r,he(e)),we=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ve=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!S.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=be(e,n))||t.enumerable});return r},P=r=>ve(we(p(r!=null?ge(Te(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var A=(r,e,t)=>new Promise((n,i)=>{var a=o=>{try{s(t.next(o))}catch(f){i(f)}},c=o=>{try{s(t.throw(o))}catch(f){i(f)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,c);s((t=t.apply(r,e)).next())});var O=u((Jn,q)=>{function Se(r,e,t,n){var i=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++i]);++i<a;)t=e(t,r[i],i,r);return t}q.exports=Se});var j=u((Bn,L)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}L.exports=Re});var N=u((Yn,M)=>{var Pe=j(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qe=Pe(Ae);M.exports=qe});var _=u(($n,U)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Oe});var D=u((Kn,E)=>{var Le=_(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();E.exports=Me});var x=u((Qn,k)=>{var Ne=D(),Ue=Ne.Symbol;k.exports=Ue});var Z=u((Xn,I)=>{function _e(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}I.exports=_e});var G=u((ru,W)=>{var Ee=Array.isArray;W.exports=Ee});var H=u((eu,F)=>{var z=x(),V=Object.prototype,De=V.hasOwnProperty,ke=V.toString,m=z?z.toStringTag:void 0;function Ie(r){var e=De.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(a){}var i=ke.call(r);return n&&(e?r[m]=t:delete r[m]),i}F.exports=Ie});var B=u((tu,J)=>{var Ze=Object.prototype,We=Ze.toString;function Ge(r){return We.call(r)}J.exports=Ge});var Q=u((nu,K)=>{var Y=x(),ze=H(),Ve=B(),Fe="[object Null]",He="[object Undefined]",$=Y?Y.toStringTag:void 0;function Je(r){return r==null?r===void 0?He:Fe:$&&$ in Object(r)?ze(r):Ve(r)}K.exports=Je});var rr=u((uu,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=u((iu,er)=>{var Ye=Q(),$e=rr(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}er.exports=Qe});var sr=u((ou,ar)=>{var nr=x(),Xe=Z(),rt=G(),et=tr(),tt=1/0,ur=nr?nr.prototype:void 0,ir=ur?ur.toString:void 0;function or(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,or)+"";if(et(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}ar.exports=or});var b=u((au,fr)=>{var nt=sr();function ut(r){return r==null?"":nt(r)}fr.exports=ut});var lr=u((su,dr)=>{var it=N(),ot=b(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ft+dt,ct="["+lt+"]",mt=RegExp(ct,"g");function pt(r){return r=ot(r),r&&r.replace(at,it).replace(mt,"")}dr.exports=pt});var mr=u((fu,cr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}cr.exports=xt});var gr=u((du,pr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}pr.exports=ht});var Ur=u((lu,Nr)=>{var xr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",wt=yt+Tt+Ct,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",Tr=vt+St+Rt+Pt,Cr="['\u2019]",wr="["+Tr+"]",qt="["+wt+"]",vr="\\d+",Ot="["+br+"]",Sr="["+hr+"]",Rr="[^"+xr+Tr+vr+br+hr+yr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+qt+"|"+Lt+")",Mt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+yr+"]",Nt="\\u200d",qr="(?:"+Sr+"|"+Rr+")",Ut="(?:"+l+"|"+Rr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Mr="["+At+"]?",_t="(?:"+Nt+"(?:"+[Mt,Pr,Ar].join("|")+")"+Mr+jr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Mr+jr+_t,It="(?:"+[Ot,Pr,Ar].join("|")+")"+kt,Zt=RegExp([l+"?"+Sr+"+"+Or+"(?="+[wr,l,"$"].join("|")+")",Ut+"+"+Lr+"(?="+[wr,l+qr,"$"].join("|")+")",l+"?"+qr+"+"+Or,l+"+"+Lr,Dt,Et,vr,It].join("|"),"g");function Wt(r){return r.match(Zt)||[]}Nr.exports=Wt});var Er=u((cu,_r)=>{var Gt=mr(),zt=gr(),Vt=b(),Ft=Ur();function Ht(r,e,t){return r=Vt(r),e=t?void 0:e,e===void 0?zt(r)?Ft(r):Gt(r):r.match(e)||[]}_r.exports=Ht});var y=u((mu,Dr)=>{var Jt=O(),Bt=lr(),Yt=Er(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}Dr.exports=Qt});var Ir=u((pu,kr)=>{function Xt(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(i);++n<i;)a[n]=r[n+e];return a}kr.exports=Xt});var Wr=u((gu,Zr)=>{var rn=Ir();function en(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:rn(r,e,t)}Zr.exports=en});var T=u((xu,Gr)=>{var tn="\\ud800-\\udfff",nn="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",an=nn+un+on,sn="\\ufe0e\\ufe0f",fn="\\u200d",dn=RegExp("["+fn+tn+an+sn+"]");function ln(r){return dn.test(r)}Gr.exports=ln});var Vr=u((bu,zr)=>{function cn(r){return r.split("")}zr.exports=cn});var Qr=u((hu,Kr)=>{var Fr="\\ud800-\\udfff",mn="\\u0300-\\u036f",pn="\\ufe20-\\ufe2f",gn="\\u20d0-\\u20ff",xn=mn+pn+gn,bn="\\ufe0e\\ufe0f",hn="["+Fr+"]",C="["+xn+"]",w="\\ud83c[\\udffb-\\udfff]",yn="(?:"+C+"|"+w+")",Hr="[^"+Fr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="\\u200d",Yr=yn+"?",$r="["+bn+"]?",Cn="(?:"+Tn+"(?:"+[Hr,Jr,Br].join("|")+")"+$r+Yr+")*",wn=$r+Yr+Cn,vn="(?:"+[Hr+C+"?",C,Jr,Br,hn].join("|")+")",Sn=RegExp(w+"(?="+w+")|"+vn+wn,"g");function Rn(r){return r.match(Sn)||[]}Kr.exports=Rn});var re=u((yu,Xr)=>{var Pn=Vr(),An=T(),qn=Qr();function On(r){return An(r)?qn(r):Pn(r)}Xr.exports=On});var te=u((Tu,ee)=>{var Ln=Wr(),jn=T(),Mn=re(),Nn=b();function Un(r){return function(e){e=Nn(e);var t=jn(e)?Mn(e):void 0,n=t?t[0]:e.charAt(0),i=t?Ln(t,1).join(""):e.slice(1);return n[r]()+i}}ee.exports=Un});var ue=u((Cu,ne)=>{var _n=te(),En=_n("toUpperCase");ne.exports=En});var oe=u((wu,ie)=>{var Dn=y(),kn=ue(),In=Dn(function(r,e,t){return r+(t?" ":"")+kn(e)});ie.exports=In});var le=u((Su,de)=>{var Vn=y(),Fn=Vn(function(r,e,t){return r+(t?" ":"")+e.toLowerCase()});de.exports=Fn});var ae=P(oe());function Zn(r){return g(d({},r),{json:JSON.stringify(Gn(r),null,2)})}var Wn=`
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
</svg>`;function Gn(r){let{name:e,category:t,description:n,author:i,result:a,params:c,about:s,video:o}=r,{icon:f=se}=r;return f==="glide"&&(f=Wn),{name:e,category:t,description:n,author:i,result:a,about:s,icon:f,video:o,params:Object.entries(c).map(([me,pe])=>d({name:me},pe))}}var zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,run(){return A(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},zn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,ae.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function a(...c){let s={};if(c.forEach(({value:o},f)=>{s[i[f]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return Zn(g(d({},this.definition),{run:a}))}};function fe(r){return new h({name:r})}var ce=P(le()),Pu=fe("Lowercase Text").withCategory("Text").withDescription("Converts string, as space separated words, to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"--Foo-Bar--"}).run(({text:r})=>r===void 0?void 0:(0,ce.default)(r));export{Pu as default};
//# sourceMappingURL=function.js.map