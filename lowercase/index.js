(()=>{var he=Object.create;var p=Object.defineProperty,xe=Object.defineProperties,Te=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&A(r,t,e[t]);if(R)for(var t of R(e))ve.call(e,t)&&A(r,t,e[t]);return r},g=(r,e)=>xe(r,ye(e)),Pe=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Re=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of we(e))!S.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=Te(e,i))||t.enumerable});return r},q=r=>Re(Pe(p(r!=null?he(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((i,n)=>{var a=s=>{try{o(t.next(s))}catch(f){n(f)}},d=s=>{try{o(t.throw(s))}catch(f){n(f)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var L=u((Yi,O)=>{function Se(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}O.exports=Se});var j=u(($i,M)=>{function Ae(r){return function(e){return r==null?void 0:r[e]}}M.exports=Ae});var U=u((Ki,N)=>{var qe=j(),Oe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Le=qe(Oe);N.exports=Le});var _=u((Qi,k)=>{var Me=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=Me});var E=u((Xi,D)=>{var je=_(),Ne=typeof self=="object"&&self&&self.Object===Object&&self,Ue=je||Ne||Function("return this")();D.exports=Ue});var b=u((rn,I)=>{var ke=E(),_e=ke.Symbol;I.exports=_e});var Z=u((en,V)=>{function De(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}V.exports=De});var G=u((tn,W)=>{var Ee=Array.isArray;W.exports=Ee});var J=u((nn,H)=>{var z=b(),F=Object.prototype,Ie=F.hasOwnProperty,Ve=F.toString,m=z?z.toStringTag:void 0;function Ze(r){var e=Ie.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=Ve.call(r);return i&&(e?r[m]=t:delete r[m]),n}H.exports=Ze});var Y=u((un,B)=>{var We=Object.prototype,Ge=We.toString;function ze(r){return Ge.call(r)}B.exports=ze});var X=u((an,Q)=>{var $=b(),Fe=J(),He=Y(),Je="[object Null]",Be="[object Undefined]",K=$?$.toStringTag:void 0;function Ye(r){return r==null?r===void 0?Be:Je:K&&K in Object(r)?Fe(r):He(r)}Q.exports=Ye});var er=u((sn,rr)=>{function $e(r){return r!=null&&typeof r=="object"}rr.exports=$e});var ir=u((on,tr)=>{var Ke=X(),Qe=er(),Xe="[object Symbol]";function rt(r){return typeof r=="symbol"||Qe(r)&&Ke(r)==Xe}tr.exports=rt});var dr=u((dn,or)=>{var nr=b(),et=Z(),tt=G(),it=ir(),nt=1/0,ur=nr?nr.prototype:void 0,ar=ur?ur.toString:void 0;function sr(r){if(typeof r=="string")return r;if(tt(r))return et(r,sr)+"";if(it(r))return ar?ar.call(r):"";var e=r+"";return e=="0"&&1/r==-nt?"-0":e}or.exports=sr});var h=u((ln,lr)=>{var ut=dr();function at(r){return r==null?"":ut(r)}lr.exports=at});var cr=u((fn,fr)=>{var st=U(),ot=h(),dt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,lt="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",ct="\\u20d0-\\u20ff",mt=lt+ft+ct,pt="["+mt+"]",gt=RegExp(pt,"g");function bt(r){return r=ot(r),r&&r.replace(dt,st).replace(gt,"")}fr.exports=bt});var pr=u((cn,mr)=>{var ht=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(ht)||[]}mr.exports=xt});var br=u((mn,gr)=>{var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yt(r){return Tt.test(r)}gr.exports=yt});var kr=u((pn,Ur)=>{var hr="\\ud800-\\udfff",wt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",vt="\\u20d0-\\u20ff",Pt=wt+Ct+vt,xr="\\u2700-\\u27bf",Tr="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",qt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ot="\\ufe0e\\ufe0f",wr=Rt+St+At+qt,Cr="['\u2019]",vr="["+wr+"]",Lt="["+Pt+"]",Pr="\\d+",Mt="["+xr+"]",Rr="["+Tr+"]",Sr="[^"+hr+wr+Pr+xr+Tr+yr+"]",jt="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+Lt+"|"+jt+")",Ut="[^"+hr+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+yr+"]",kt="\\u200d",Or="(?:"+Rr+"|"+Sr+")",_t="(?:"+c+"|"+Sr+")",Lr="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Mr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=Nt+"?",Nr="["+Ot+"]?",Dt="(?:"+kt+"(?:"+[Ut,Ar,qr].join("|")+")"+Nr+jr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vt=Nr+jr+Dt,Zt="(?:"+[Mt,Ar,qr].join("|")+")"+Vt,Wt=RegExp([c+"?"+Rr+"+"+Lr+"(?="+[vr,c,"$"].join("|")+")",_t+"+"+Mr+"(?="+[vr,c+Or,"$"].join("|")+")",c+"?"+Or+"+"+Lr,c+"+"+Mr,It,Et,Pr,Zt].join("|"),"g");function Gt(r){return r.match(Wt)||[]}Ur.exports=Gt});var Dr=u((gn,_r)=>{var zt=pr(),Ft=br(),Ht=h(),Jt=kr();function Bt(r,e,t){return r=Ht(r),e=t?void 0:e,e===void 0?Ft(r)?Jt(r):zt(r):r.match(e)||[]}_r.exports=Bt});var w=u((bn,Er)=>{var Yt=L(),$t=cr(),Kt=Dr(),Qt="['\u2019]",Xt=RegExp(Qt,"g");function ri(r){return function(e){return Yt(Kt($t(e).replace(Xt,"")),r,"")}}Er.exports=ri});var Vr=u((hn,Ir)=>{function ei(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Ir.exports=ei});var Wr=u((xn,Zr)=>{var ti=Vr();function ii(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ti(r,e,t)}Zr.exports=ii});var C=u((Tn,Gr)=>{var ni="\\ud800-\\udfff",ui="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",oi=ui+ai+si,di="\\ufe0e\\ufe0f",li="\\u200d",fi=RegExp("["+li+ni+oi+di+"]");function ci(r){return fi.test(r)}Gr.exports=ci});var Fr=u((yn,zr)=>{function mi(r){return r.split("")}zr.exports=mi});var Xr=u((wn,Qr)=>{var Hr="\\ud800-\\udfff",pi="\\u0300-\\u036f",gi="\\ufe20-\\ufe2f",bi="\\u20d0-\\u20ff",hi=pi+gi+bi,xi="\\ufe0e\\ufe0f",Ti="["+Hr+"]",v="["+hi+"]",P="\\ud83c[\\udffb-\\udfff]",yi="(?:"+v+"|"+P+")",Jr="[^"+Hr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",wi="\\u200d",$r=yi+"?",Kr="["+xi+"]?",Ci="(?:"+wi+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",vi=Kr+$r+Ci,Pi="(?:"+[Jr+v+"?",v,Br,Yr,Ti].join("|")+")",Ri=RegExp(P+"(?="+P+")|"+Pi+vi,"g");function Si(r){return r.match(Ri)||[]}Qr.exports=Si});var ee=u((Cn,re)=>{var Ai=Fr(),qi=C(),Oi=Xr();function Li(r){return qi(r)?Oi(r):Ai(r)}re.exports=Li});var ie=u((vn,te)=>{var Mi=Wr(),ji=C(),Ni=ee(),Ui=h();function ki(r){return function(e){e=Ui(e);var t=ji(e)?Ni(e):void 0,i=t?t[0]:e.charAt(0),n=t?Mi(t,1).join(""):e.slice(1);return i[r]()+n}}te.exports=ki});var ue=u((Pn,ne)=>{var _i=ie(),Di=_i("toUpperCase");ne.exports=Di});var se=u((Rn,ae)=>{var Ei=w(),Ii=ue(),Vi=Ei(function(r,e,t){return r+(t?" ":"")+Ii(e)});ae.exports=Vi});var me=u((An,ce)=>{var Hi=w(),Ji=Hi(function(r,e,t){return r+(t?" ":"")+e.toLowerCase()});ce.exports=Ji});var oe=q(se());function de(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(de):r}function Zi(r,e){return y(this,null,function*(){var o;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(s){n=void 0;try{a=s.toString()}catch(f){a="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=de(n),d.result={type:"string",value:n}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Wi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Zi(e,r.run)),g(l({},r),{json:JSON.stringify(zi(r),null,2)})}var Gi=`
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
    `,le=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function zi(r){let{name:e,category:t,released:i,description:n,author:a,result:d,params:o,about:s,video:f}=r,{icon:T=le}=r;return T==="glide"&&(T=Gi),{name:e,category:t,released:i,description:n,author:a,result:d,about:s,icon:T,video:f,params:Object.entries(o).map(([ge,be])=>l({name:ge},be))}}var Fi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:le,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Fi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},f)=>{o[n[f]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return Wi(g(l({},this.definition),{run:a}))}};function fe(r){return new x({name:r})}var pe=q(me()),On=fe("Lowercase Text").withCategory("Text").withDescription("Converts string, as space separated words, to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"--Foo-Bar--"},"foo bar").run(({text:r})=>r===void 0?void 0:(0,pe.default)(r));})();
//# sourceMappingURL=index.js.map
