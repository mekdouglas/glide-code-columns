(()=>{var pe=Object.create;var p=Object.defineProperty,ge=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,ye=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&P(r,t,e[t]);if(S)for(var t of S(e))Te.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>ge(r,be(e)),Ce=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ve=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of he(e))!R.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=xe(e,n))||t.enumerable});return r},A=r=>ve(Ce(p(r!=null?pe(ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(d){u(d)}},f=o=>{try{s(t.throw(o))}catch(d){u(d)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,f);s((t=t.apply(r,e)).next())});var O=i((Hn,q)=>{function we(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}q.exports=we});var j=i((Fn,L)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}L.exports=Se});var N=i((Jn,M)=>{var Re=j(),Pe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Re(Pe);M.exports=Ae});var E=i((Bn,U)=>{var qe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=qe});var D=i((Yn,_)=>{var Oe=E(),Le=typeof self=="object"&&self&&self.Object===Object&&self,je=Oe||Le||Function("return this")();_.exports=je});var x=i(($n,k)=>{var Me=D(),Ne=Me.Symbol;k.exports=Ne});var Z=i((Kn,I)=>{function Ue(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}I.exports=Ue});var G=i((Qn,W)=>{var Ee=Array.isArray;W.exports=Ee});var F=i((Xn,H)=>{var z=x(),V=Object.prototype,_e=V.hasOwnProperty,De=V.toString,m=z?z.toStringTag:void 0;function ke(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(a){}var u=De.call(r);return n&&(e?r[m]=t:delete r[m]),u}H.exports=ke});var B=i((ru,J)=>{var Ie=Object.prototype,Ze=Ie.toString;function We(r){return Ze.call(r)}J.exports=We});var Q=i((eu,K)=>{var Y=x(),Ge=F(),ze=B(),Ve="[object Null]",He="[object Undefined]",$=Y?Y.toStringTag:void 0;function Fe(r){return r==null?r===void 0?He:Ve:$&&$ in Object(r)?Ge(r):ze(r)}K.exports=Fe});var rr=i((tu,X)=>{function Je(r){return r!=null&&typeof r=="object"}X.exports=Je});var tr=i((nu,er)=>{var Be=Q(),Ye=rr(),$e="[object Symbol]";function Ke(r){return typeof r=="symbol"||Ye(r)&&Be(r)==$e}er.exports=Ke});var sr=i((uu,or)=>{var nr=x(),Qe=Z(),Xe=G(),rt=tr(),et=1/0,ur=nr?nr.prototype:void 0,ir=ur?ur.toString:void 0;function ar(r){if(typeof r=="string")return r;if(Xe(r))return Qe(r,ar)+"";if(rt(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-et?"-0":e}or.exports=ar});var b=i((iu,dr)=>{var tt=sr();function nt(r){return r==null?"":tt(r)}dr.exports=nt});var T=i((au,fr)=>{var ut=N(),it=b(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ft=ot+st+dt,lt="["+ft+"]",ct=RegExp(lt,"g");function mt(r){return r=it(r),r&&r.replace(at,ut).replace(ct,"")}fr.exports=mt});var cr=i((ou,lr)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(r){return r.match(pt)||[]}lr.exports=gt});var pr=i((su,mr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(r){return xt.test(r)}mr.exports=bt});var Nr=i((du,Mr)=>{var gr="\\ud800-\\udfff",ht="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",Ct=ht+yt+Tt,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",yr=vt+wt+St+Rt,Tr="['\u2019]",Cr="["+yr+"]",At="["+Ct+"]",vr="\\d+",qt="["+xr+"]",wr="["+br+"]",Sr="[^"+gr+yr+vr+xr+br+hr+"]",Ot="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+Ot+")",jt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+hr+"]",Mt="\\u200d",Ar="(?:"+wr+"|"+Sr+")",Nt="(?:"+c+"|"+Sr+")",qr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Lt+"?",jr="["+Pt+"]?",Ut="(?:"+Mt+"(?:"+[jt,Rr,Pr].join("|")+")"+jr+Lr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=jr+Lr+Ut,kt="(?:"+[qt,Rr,Pr].join("|")+")"+Dt,It=RegExp([c+"?"+wr+"+"+qr+"(?="+[Cr,c,"$"].join("|")+")",Nt+"+"+Or+"(?="+[Cr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+qr,c+"+"+Or,_t,Et,vr,kt].join("|"),"g");function Zt(r){return r.match(It)||[]}Mr.exports=Zt});var Er=i((fu,Ur)=>{var Wt=cr(),Gt=pr(),zt=b(),Vt=Nr();function Ht(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?Gt(r)?Vt(r):Wt(r):r.match(e)||[]}Ur.exports=Ht});var Dr=i((lu,_r)=>{var Ft=O(),Jt=T(),Bt=Er(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Ft(Bt(Jt(e).replace($t,"")),r,"")}}_r.exports=Kt});var Ir=i((cu,kr)=>{function Qt(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}kr.exports=Qt});var Wr=i((mu,Zr)=>{var Xt=Ir();function rn(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Xt(r,e,t)}Zr.exports=rn});var C=i((pu,Gr)=>{var en="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",un="\\u20d0-\\u20ff",an=tn+nn+un,on="\\ufe0e\\ufe0f",sn="\\u200d",dn=RegExp("["+sn+en+an+on+"]");function fn(r){return dn.test(r)}Gr.exports=fn});var Vr=i((gu,zr)=>{function ln(r){return r.split("")}zr.exports=ln});var Qr=i((xu,Kr)=>{var Hr="\\ud800-\\udfff",cn="\\u0300-\\u036f",mn="\\ufe20-\\ufe2f",pn="\\u20d0-\\u20ff",gn=cn+mn+pn,xn="\\ufe0e\\ufe0f",bn="["+Hr+"]",v="["+gn+"]",w="\\ud83c[\\udffb-\\udfff]",hn="(?:"+v+"|"+w+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",yn="\\u200d",Yr=hn+"?",$r="["+xn+"]?",Tn="(?:"+yn+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",Cn=$r+Yr+Tn,vn="(?:"+[Fr+v+"?",v,Jr,Br,bn].join("|")+")",wn=RegExp(w+"(?="+w+")|"+vn+Cn,"g");function Sn(r){return r.match(wn)||[]}Kr.exports=Sn});var re=i((bu,Xr)=>{var Rn=Vr(),Pn=C(),An=Qr();function qn(r){return Pn(r)?An(r):Rn(r)}Xr.exports=qn});var te=i((hu,ee)=>{var On=Wr(),Ln=C(),jn=re(),Mn=b();function Nn(r){return function(e){e=Mn(e);var t=Ln(e)?jn(e):void 0,n=t?t[0]:e.charAt(0),u=t?On(t,1).join(""):e.slice(1);return n[r]()+u}}ee.exports=Nn});var ue=i((yu,ne)=>{var Un=te(),En=Un("toUpperCase");ne.exports=En});var ae=i((Tu,ie)=>{var _n=Dr(),Dn=ue(),kn=_n(function(r,e,t){return r+(t?" ":"")+Dn(e)});ie.exports=kn});var oe=A(ae());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function In(r,e){return y(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,a;try{u=yield e(...n)}catch(o){u=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let f={key:t};u!==void 0&&(u=se(u),f.result={type:"string",value:u}),a!==void 0&&(f.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function Zn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>In(e,r.run)),g(l({},r),{json:JSON.stringify(Gn(r),null,2)})}var Wn=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gn(r){let{name:e,category:t,description:n,author:u,result:a,params:f,about:s,video:o}=r,{icon:d=de}=r;return d==="glide"&&(d=Wn),{name:e,category:t,description:n,author:u,result:a,about:s,icon:d,video:o,params:Object.entries(f).map(([ce,me])=>l({name:ce},me))}}var zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,run(){return y(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},zn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...f){let s={};if(f.forEach(({value:o},d)=>{s[u[d]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return Zn(g(l({},this.definition),{run:a}))}};function fe(r){return new h({name:r})}var le=A(T()),wu=fe("Deburr Text").withCategory("Text").withDescription("Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"d\xE9j\xE0 vu"}).run(({text:r})=>r===void 0?void 0:(0,le.default)(r));})();
//# sourceMappingURL=index.js.map
