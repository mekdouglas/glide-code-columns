var Ke=Object.create;var x=Object.defineProperty,Xe=Object.defineProperties,Qe=Object.getOwnPropertyDescriptor,rt=Object.getOwnPropertyDescriptors,et=Object.getOwnPropertyNames,j=Object.getOwnPropertySymbols,tt=Object.getPrototypeOf,M=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var _=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,s=(r,e)=>{for(var t in e||(e={}))M.call(e,t)&&_(r,t,e[t]);if(j)for(var t of j(e))it.call(e,t)&&_(r,t,e[t]);return r},m=(r,e)=>Xe(r,rt(e)),nt=r=>x(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ut=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of et(e))!M.call(r,n)&&n!=="default"&&x(r,n,{get:()=>e[n],enumerable:!(t=Qe(e,n))||t.enumerable});return r},L=r=>ut(nt(x(r!=null?Ke(tt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var N=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{f(t.next(o))}catch(d){u(d)}},l=o=>{try{f(t.throw(o))}catch(d){u(d)}},f=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);f((t=t.apply(r,e)).next())});var U=i((wu,I)=>{function ot(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}I.exports=ot});var z=i((Pu,E)=>{function at(r){return function(e){return r==null?void 0:r[e]}}E.exports=at});var k=i((qu,D)=>{var st=z(),ft={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},dt=st(ft);D.exports=dt});var W=i((Au,Z)=>{var ct=typeof global=="object"&&global&&global.Object===Object&&global;Z.exports=ct});var G=i((Ou,F)=>{var lt=W(),mt=typeof self=="object"&&self&&self.Object===Object&&self,pt=lt||mt||Function("return this")();F.exports=pt});var h=i((ju,V)=>{var bt=G(),gt=bt.Symbol;V.exports=gt});var J=i((Mu,H)=>{function xt(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}H.exports=xt});var $=i((_u,B)=>{var ht=Array.isArray;B.exports=ht});var Q=i((Lu,X)=>{var Y=h(),K=Object.prototype,yt=K.hasOwnProperty,Tt=K.toString,p=Y?Y.toStringTag:void 0;function St(r){var e=yt.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(a){}var u=Tt.call(r);return n&&(e?r[p]=t:delete r[p]),u}X.exports=St});var er=i((Nu,rr)=>{var Ct=Object.prototype,vt=Ct.toString;function Rt(r){return vt.call(r)}rr.exports=Rt});var ur=i((Iu,nr)=>{var tr=h(),wt=Q(),Pt=er(),qt="[object Null]",At="[object Undefined]",ir=tr?tr.toStringTag:void 0;function Ot(r){return r==null?r===void 0?At:qt:ir&&ir in Object(r)?wt(r):Pt(r)}nr.exports=Ot});var ar=i((Uu,or)=>{function jt(r){return r!=null&&typeof r=="object"}or.exports=jt});var T=i((Eu,sr)=>{var Mt=ur(),_t=ar(),Lt="[object Symbol]";function Nt(r){return typeof r=="symbol"||_t(r)&&Mt(r)==Lt}sr.exports=Nt});var S=i((zu,mr)=>{var fr=h(),It=J(),Ut=$(),Et=T(),zt=1/0,dr=fr?fr.prototype:void 0,cr=dr?dr.toString:void 0;function lr(r){if(typeof r=="string")return r;if(Ut(r))return It(r,lr)+"";if(Et(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-zt?"-0":e}mr.exports=lr});var b=i((Du,pr)=>{var Dt=S();function kt(r){return r==null?"":Dt(r)}pr.exports=kt});var gr=i((ku,br)=>{var Zt=k(),Wt=b(),Ft=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Gt="\\u0300-\\u036f",Vt="\\ufe20-\\ufe2f",Ht="\\u20d0-\\u20ff",Jt=Gt+Vt+Ht,Bt="["+Jt+"]",$t=RegExp(Bt,"g");function Yt(r){return r=Wt(r),r&&r.replace(Ft,Zt).replace($t,"")}br.exports=Yt});var hr=i((Zu,xr)=>{var Kt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Xt(r){return r.match(Kt)||[]}xr.exports=Xt});var Tr=i((Wu,yr)=>{var Qt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ri(r){return Qt.test(r)}yr.exports=ri});var Dr=i((Fu,zr)=>{var Sr="\\ud800-\\udfff",ei="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ei+ti+ii,Cr="\\u2700-\\u27bf",vr="a-z\\xdf-\\xf6\\xf8-\\xff",ui="\\xac\\xb1\\xd7\\xf7",oi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ai="\\u2000-\\u206f",si=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",fi="\\ufe0e\\ufe0f",wr=ui+oi+ai+si,Pr="['\u2019]",qr="["+wr+"]",di="["+ni+"]",Ar="\\d+",ci="["+Cr+"]",Or="["+vr+"]",jr="[^"+Sr+wr+Ar+Cr+vr+Rr+"]",li="\\ud83c[\\udffb-\\udfff]",mi="(?:"+di+"|"+li+")",pi="[^"+Sr+"]",Mr="(?:\\ud83c[\\udde6-\\uddff]){2}",_r="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Rr+"]",bi="\\u200d",Lr="(?:"+Or+"|"+jr+")",gi="(?:"+c+"|"+jr+")",Nr="(?:"+Pr+"(?:d|ll|m|re|s|t|ve))?",Ir="(?:"+Pr+"(?:D|LL|M|RE|S|T|VE))?",Ur=mi+"?",Er="["+fi+"]?",xi="(?:"+bi+"(?:"+[pi,Mr,_r].join("|")+")"+Er+Ur+")*",hi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ti=Er+Ur+xi,Si="(?:"+[ci,Mr,_r].join("|")+")"+Ti,Ci=RegExp([c+"?"+Or+"+"+Nr+"(?="+[qr,c,"$"].join("|")+")",gi+"+"+Ir+"(?="+[qr,c+Lr,"$"].join("|")+")",c+"?"+Lr+"+"+Nr,c+"+"+Ir,yi,hi,Ar,Si].join("|"),"g");function vi(r){return r.match(Ci)||[]}zr.exports=vi});var Zr=i((Gu,kr)=>{var Ri=hr(),wi=Tr(),Pi=b(),qi=Dr();function Ai(r,e,t){return r=Pi(r),e=t?void 0:e,e===void 0?wi(r)?qi(r):Ri(r):r.match(e)||[]}kr.exports=Ai});var Fr=i((Vu,Wr)=>{var Oi=U(),ji=gr(),Mi=Zr(),_i="['\u2019]",Li=RegExp(_i,"g");function Ni(r){return function(e){return Oi(Mi(ji(e).replace(Li,"")),r,"")}}Wr.exports=Ni});var Vr=i((Hu,Gr)=>{function Ii(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Gr.exports=Ii});var C=i((Ju,Hr)=>{var Ui=Vr();function Ei(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Ui(r,e,t)}Hr.exports=Ei});var g=i((Bu,Jr)=>{var zi="\\ud800-\\udfff",Di="\\u0300-\\u036f",ki="\\ufe20-\\ufe2f",Zi="\\u20d0-\\u20ff",Wi=Di+ki+Zi,Fi="\\ufe0e\\ufe0f",Gi="\\u200d",Vi=RegExp("["+Gi+zi+Wi+Fi+"]");function Hi(r){return Vi.test(r)}Jr.exports=Hi});var $r=i(($u,Br)=>{function Ji(r){return r.split("")}Br.exports=Ji});var ie=i((Yu,te)=>{var Yr="\\ud800-\\udfff",Bi="\\u0300-\\u036f",$i="\\ufe20-\\ufe2f",Yi="\\u20d0-\\u20ff",Ki=Bi+$i+Yi,Xi="\\ufe0e\\ufe0f",Qi="["+Yr+"]",v="["+Ki+"]",R="\\ud83c[\\udffb-\\udfff]",rn="(?:"+v+"|"+R+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",en="\\u200d",re=rn+"?",ee="["+Xi+"]?",tn="(?:"+en+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",nn=ee+re+tn,un="(?:"+[Kr+v+"?",v,Xr,Qr,Qi].join("|")+")",on=RegExp(R+"(?="+R+")|"+un+nn,"g");function an(r){return r.match(on)||[]}te.exports=an});var w=i((Ku,ne)=>{var sn=$r(),fn=g(),dn=ie();function cn(r){return fn(r)?dn(r):sn(r)}ne.exports=cn});var oe=i((Xu,ue)=>{var ln=C(),mn=g(),pn=w(),bn=b();function gn(r){return function(e){e=bn(e);var t=mn(e)?pn(e):void 0,n=t?t[0]:e.charAt(0),u=t?ln(t,1).join(""):e.slice(1);return n[r]()+u}}ue.exports=gn});var se=i((Qu,ae)=>{var xn=oe(),hn=xn("toUpperCase");ae.exports=hn});var de=i((ro,fe)=>{var yn=Fr(),Tn=se(),Sn=yn(function(r,e,t){return r+(t?" ":"")+Tn(e)});fe.exports=Sn});var pe=i((to,me)=>{var Pn=9007199254740991,qn=Math.floor;function An(r,e){var t="";if(!r||e<1||e>Pn)return t;do e%2&&(t+=r),e=qn(e/2),e&&(r+=r);while(e);return t}me.exports=An});var ge=i((io,be)=>{function On(r){return function(e){return e==null?void 0:e[r]}}be.exports=On});var he=i((no,xe)=>{var jn=ge(),Mn=jn("length");xe.exports=Mn});var qe=i((uo,Pe)=>{var ye="\\ud800-\\udfff",_n="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",Nn="\\u20d0-\\u20ff",In=_n+Ln+Nn,Un="\\ufe0e\\ufe0f",En="["+ye+"]",q="["+In+"]",A="\\ud83c[\\udffb-\\udfff]",zn="(?:"+q+"|"+A+")",Te="[^"+ye+"]",Se="(?:\\ud83c[\\udde6-\\uddff]){2}",Ce="[\\ud800-\\udbff][\\udc00-\\udfff]",Dn="\\u200d",ve=zn+"?",Re="["+Un+"]?",kn="(?:"+Dn+"(?:"+[Te,Se,Ce].join("|")+")"+Re+ve+")*",Zn=Re+ve+kn,Wn="(?:"+[Te+q+"?",q,Se,Ce,En].join("|")+")",we=RegExp(A+"(?="+A+")|"+Wn+Zn,"g");function Fn(r){for(var e=we.lastIndex=0;we.test(r);)++e;return e}Pe.exports=Fn});var O=i((oo,Ae)=>{var Gn=he(),Vn=g(),Hn=qe();function Jn(r){return Vn(r)?Hn(r):Gn(r)}Ae.exports=Jn});var Me=i((ao,je)=>{var Oe=pe(),Bn=S(),$n=C(),Yn=g(),Kn=O(),Xn=w(),Qn=Math.ceil;function ru(r,e){e=e===void 0?" ":Bn(e);var t=e.length;if(t<2)return t?Oe(e,r):e;var n=Oe(e,Qn(r/Kn(e)));return Yn(e)?$n(Xn(n),0,r).join(""):n.slice(0,r)}je.exports=ru});var Le=i((so,_e)=>{var eu=/\s/;function tu(r){for(var e=r.length;e--&&eu.test(r.charAt(e)););return e}_e.exports=tu});var Ie=i((fo,Ne)=>{var iu=Le(),nu=/^\s+/;function uu(r){return r&&r.slice(0,iu(r)+1).replace(nu,"")}Ne.exports=uu});var Ee=i((co,Ue)=>{function ou(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ue.exports=ou});var Ze=i((lo,ke)=>{var au=Ie(),ze=Ee(),su=T(),De=0/0,fu=/^[-+]0x[0-9a-f]+$/i,du=/^0b[01]+$/i,cu=/^0o[0-7]+$/i,lu=parseInt;function mu(r){if(typeof r=="number")return r;if(su(r))return De;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=au(r);var t=du.test(r);return t||cu.test(r)?lu(r.slice(2),t?2:8):fu.test(r)?De:+r}ke.exports=mu});var Ge=i((mo,Fe)=>{var pu=Ze(),We=1/0,bu=17976931348623157e292;function gu(r){if(!r)return r===0?r:0;if(r=pu(r),r===We||r===-We){var e=r<0?-1:1;return e*bu}return r===r?r:0}Fe.exports=gu});var He=i((po,Ve)=>{var xu=Ge();function hu(r){var e=xu(r),t=e%1;return e===e?t?e-t:e:0}Ve.exports=hu});var Be=i((bo,Je)=>{var yu=Me(),Tu=O(),Su=He(),Cu=b();function vu(r,e,t){r=Cu(r),e=Su(e);var n=e?Tu(r):0;return e&&n<e?yu(e-n,t)+r:r}Je.exports=vu});var P=L(de());function Cn(r){return m(s({},r),{json:JSON.stringify(Rn(r),null,2)})}var vn=`
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
    `,ce=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Rn(r){let{name:e,description:t,author:n,result:u,params:a,about:l,video:f}=r,{icon:o=ce}=r;return o==="glide"&&(o=vn),{name:e,description:t,author:n,result:u,about:l,icon:o,video:f,params:Object.entries(a).map(([d,Ye])=>s({name:d},Ye))}}var wn={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ce,about:void 0,video:void 0,run(){return N(this,null,function*(){})}},y=class{constructor(e={},t=[]){this.definition=s(s({},wn),e),this.requiredParams=[...t]}with(e,t=[]){return new y(s(s({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,P.default)(t)),this.with({params:m(s({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return n===void 0&&(n=(0,P.default)(t)),this.with({params:m(s({},this.definition.params),{[t]:{type:e,displayName:n}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let f={};if(l.forEach(({value:o},d)=>{f[u[d]]=o}),!n.some(o=>f[o]===void 0))return e(f)}return Cn(m(s({},this.definition),{run:a}))}};function le(r){return new y({name:r})}var $e=L(Be()),xo=le("Pad Text at Start").withDescription("Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withExample({text:"abc",length:8}).run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,$e.default)(r,e,t));export{xo as default};
//# sourceMappingURL=function.js.map
