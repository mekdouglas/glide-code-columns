(()=>{var xe=Object.create;var p=Object.defineProperty,be=Object.defineProperties,he=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&R(r,t,e[t]);if(w)for(var t of w(e))ve.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>be(r,ye(e)),we=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Se=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Te(e))!S.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=he(e,n))||t.enumerable});return r},P=r=>Se(we(p(r!=null?xe(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(f){u(f)}},l=o=>{try{s(t.throw(o))}catch(f){u(f)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(r,e)).next())});var q=i(($n,A)=>{function Re(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}A.exports=Re});var L=i((Bn,O)=>{function Pe(r){return function(e){return r==null?void 0:r[e]}}O.exports=Pe});var M=i((Yn,j)=>{var Ae=L(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(qe);j.exports=Oe});var U=i((Kn,N)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Le});var E=i((Qn,_)=>{var je=U(),Me=typeof self=="object"&&self&&self.Object===Object&&self,Ne=je||Me||Function("return this")();_.exports=Ne});var x=i((Xn,Z)=>{var Ue=E(),_e=Ue.Symbol;Z.exports=_e});var k=i((ru,D)=>{function Ee(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}D.exports=Ee});var z=i((eu,I)=>{var Ze=Array.isArray;I.exports=Ze});var H=i((tu,V)=>{var W=x(),G=Object.prototype,De=G.hasOwnProperty,ke=G.toString,m=W?W.toStringTag:void 0;function Ie(r){var e=De.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(a){}var u=ke.call(r);return n&&(e?r[m]=t:delete r[m]),u}V.exports=Ie});var J=i((nu,F)=>{var ze=Object.prototype,We=ze.toString;function Ge(r){return We.call(r)}F.exports=Ge});var K=i((uu,Y)=>{var $=x(),Ve=H(),He=J(),Fe="[object Null]",Je="[object Undefined]",B=$?$.toStringTag:void 0;function $e(r){return r==null?r===void 0?Je:Fe:B&&B in Object(r)?Ve(r):He(r)}Y.exports=$e});var X=i((iu,Q)=>{function Be(r){return r!=null&&typeof r=="object"}Q.exports=Be});var er=i((au,rr)=>{var Ye=K(),Ke=X(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&Ye(r)==Qe}rr.exports=Xe});var or=i((ou,ar)=>{var tr=x(),rt=k(),et=z(),tt=er(),nt=1/0,nr=tr?tr.prototype:void 0,ur=nr?nr.toString:void 0;function ir(r){if(typeof r=="string")return r;if(et(r))return rt(r,ir)+"";if(tt(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-nt?"-0":e}ar.exports=ir});var b=i((su,sr)=>{var ut=or();function it(r){return r==null?"":ut(r)}sr.exports=it});var lr=i((fu,fr)=>{var at=M(),ot=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",lt="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ct=ft+lt+dt,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=ot(r),r&&r.replace(st,at).replace(pt,"")}fr.exports=gt});var cr=i((lu,dr)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(xt)||[]}dr.exports=bt});var pr=i((du,mr)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yt(r){return ht.test(r)}mr.exports=yt});var Nr=i((cu,Mr)=>{var gr="\\ud800-\\udfff",Tt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",wt=Tt+Ct+vt,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",yr=St+Rt+Pt+At,Tr="['\u2019]",Cr="["+yr+"]",Ot="["+wt+"]",vr="\\d+",Lt="["+xr+"]",wr="["+br+"]",Sr="[^"+gr+yr+vr+xr+br+hr+"]",jt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Ot+"|"+jt+")",Nt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+hr+"]",Ut="\\u200d",Ar="(?:"+wr+"|"+Sr+")",_t="(?:"+c+"|"+Sr+")",qr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Mt+"?",jr="["+qt+"]?",Et="(?:"+Ut+"(?:"+[Nt,Rr,Pr].join("|")+")"+jr+Lr+")*",Zt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=jr+Lr+Et,It="(?:"+[Lt,Rr,Pr].join("|")+")"+kt,zt=RegExp([c+"?"+wr+"+"+qr+"(?="+[Cr,c,"$"].join("|")+")",_t+"+"+Or+"(?="+[Cr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+qr,c+"+"+Or,Dt,Zt,vr,It].join("|"),"g");function Wt(r){return r.match(zt)||[]}Mr.exports=Wt});var _r=i((mu,Ur)=>{var Gt=cr(),Vt=pr(),Ht=b(),Ft=Nr();function Jt(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Vt(r)?Ft(r):Gt(r):r.match(e)||[]}Ur.exports=Jt});var Zr=i((pu,Er)=>{var $t=q(),Bt=lr(),Yt=_r(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return $t(Yt(Bt(e).replace(Qt,"")),r,"")}}Er.exports=Xt});var kr=i((gu,Dr)=>{function rn(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Dr.exports=rn});var zr=i((xu,Ir)=>{var en=kr();function tn(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:en(r,e,t)}Ir.exports=tn});var T=i((bu,Wr)=>{var nn="\\ud800-\\udfff",un="\\u0300-\\u036f",an="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",sn=un+an+on,fn="\\ufe0e\\ufe0f",ln="\\u200d",dn=RegExp("["+ln+nn+sn+fn+"]");function cn(r){return dn.test(r)}Wr.exports=cn});var Vr=i((hu,Gr)=>{function mn(r){return r.split("")}Gr.exports=mn});var Qr=i((yu,Kr)=>{var Hr="\\ud800-\\udfff",pn="\\u0300-\\u036f",gn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=pn+gn+xn,hn="\\ufe0e\\ufe0f",yn="["+Hr+"]",C="["+bn+"]",v="\\ud83c[\\udffb-\\udfff]",Tn="(?:"+C+"|"+v+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",Cn="\\u200d",Br=Tn+"?",Yr="["+hn+"]?",vn="(?:"+Cn+"(?:"+[Fr,Jr,$r].join("|")+")"+Yr+Br+")*",wn=Yr+Br+vn,Sn="(?:"+[Fr+C+"?",C,Jr,$r,yn].join("|")+")",Rn=RegExp(v+"(?="+v+")|"+Sn+wn,"g");function Pn(r){return r.match(Rn)||[]}Kr.exports=Pn});var re=i((Tu,Xr)=>{var An=Vr(),qn=T(),On=Qr();function Ln(r){return qn(r)?On(r):An(r)}Xr.exports=Ln});var te=i((Cu,ee)=>{var jn=zr(),Mn=T(),Nn=re(),Un=b();function _n(r){return function(e){e=Un(e);var t=Mn(e)?Nn(e):void 0,n=t?t[0]:e.charAt(0),u=t?jn(t,1).join(""):e.slice(1);return n[r]()+u}}ee.exports=_n});var ue=i((vu,ne)=>{var En=te(),Zn=En("toUpperCase");ne.exports=Zn});var ae=i((wu,ie)=>{var Dn=Zr(),kn=ue(),In=Dn(function(r,e,t){return r+(t?" ":"")+kn(e)});ie.exports=In});var ce=i(de=>{"use strict";var Fn=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;de.validate=function(r){if(!r||r.length>254)return!1;var e=Fn.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var n=t[1].split(".");return!n.some(function(u){return u.length>63})}});var oe=P(ae());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function zn(r,e){return y(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,a;try{u=yield e(...n)}catch(o){u=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let l={key:t};u!==void 0&&(u=se(u),l.result={type:"string",value:u}),a!==void 0&&(l.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Wn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>zn(e,r.run)),g(d({},r),{json:JSON.stringify(Vn(r),null,2)})}var Gn=`
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
    `,fe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Vn(r){let{name:e,category:t,description:n,author:u,result:a,params:l,about:s,video:o}=r,{icon:f=fe}=r;return f==="glide"&&(f=Gn),{name:e,category:t,description:n,author:u,result:a,about:s,icon:f,video:o,params:Object.entries(l).map(([pe,ge])=>d({name:pe},ge))}}var Hn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return y(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Hn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,oe.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let s={};if(l.forEach(({value:o},f)=>{s[u[f]]=o}),!n.some(o=>s[o]===void 0))return e(s)}return Wn(g(d({},this.definition),{run:a}))}};function le(r){return new h({name:r})}var me=P(ce()),Au=le("Email Validator").withCategory("Text").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withExample({email:"hello@world.co"}).run(({email:r})=>r!==void 0&&me.default.validate(r));})();
//# sourceMappingURL=index.js.map
