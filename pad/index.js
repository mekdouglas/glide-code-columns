(()=>{var Qe=Object.create;var x=Object.defineProperty,rt=Object.defineProperties,et=Object.getOwnPropertyDescriptor,tt=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertyNames,_=Object.getOwnPropertySymbols,nt=Object.getPrototypeOf,L=Object.prototype.hasOwnProperty,ut=Object.prototype.propertyIsEnumerable;var N=(r,e,t)=>e in r?x(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))L.call(e,t)&&N(r,t,e[t]);if(_)for(var t of _(e))ut.call(e,t)&&N(r,t,e[t]);return r},m=(r,e)=>rt(r,tt(e)),ot=r=>x(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var at=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of it(e))!L.call(r,i)&&i!=="default"&&x(r,i,{get:()=>e[i],enumerable:!(t=et(e,i))||t.enumerable});return r},U=r=>at(ot(x(r!=null?Qe(nt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var h=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var E=n((Ou,I)=>{function st(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}I.exports=st});var D=n((Mu,z)=>{function ft(r){return function(e){return r==null?void 0:r[e]}}z.exports=ft});var Z=n((ju,k)=>{var dt=D(),ct={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},lt=dt(ct);k.exports=lt});var W=n((_u,F)=>{var mt=typeof global=="object"&&global&&global.Object===Object&&global;F.exports=mt});var V=n((Lu,G)=>{var pt=W(),bt=typeof self=="object"&&self&&self.Object===Object&&self,gt=pt||bt||Function("return this")();G.exports=gt});var y=n((Nu,H)=>{var xt=V(),ht=xt.Symbol;H.exports=ht});var B=n((Uu,J)=>{function yt(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}J.exports=yt});var Y=n((Iu,$)=>{var Tt=Array.isArray;$.exports=Tt});var rr=n((Eu,Q)=>{var K=y(),X=Object.prototype,St=X.hasOwnProperty,Ct=X.toString,p=K?K.toStringTag:void 0;function vt(r){var e=St.call(r,p),t=r[p];try{r[p]=void 0;var i=!0}catch(o){}var u=Ct.call(r);return i&&(e?r[p]=t:delete r[p]),u}Q.exports=vt});var tr=n((zu,er)=>{var Rt=Object.prototype,wt=Rt.toString;function Pt(r){return wt.call(r)}er.exports=Pt});var or=n((Du,ur)=>{var ir=y(),qt=rr(),At=tr(),Ot="[object Null]",Mt="[object Undefined]",nr=ir?ir.toStringTag:void 0;function jt(r){return r==null?r===void 0?Mt:Ot:nr&&nr in Object(r)?qt(r):At(r)}ur.exports=jt});var sr=n((ku,ar)=>{function _t(r){return r!=null&&typeof r=="object"}ar.exports=_t});var C=n((Zu,fr)=>{var Lt=or(),Nt=sr(),Ut="[object Symbol]";function It(r){return typeof r=="symbol"||Nt(r)&&Lt(r)==Ut}fr.exports=It});var v=n((Fu,pr)=>{var dr=y(),Et=B(),zt=Y(),Dt=C(),kt=1/0,cr=dr?dr.prototype:void 0,lr=cr?cr.toString:void 0;function mr(r){if(typeof r=="string")return r;if(zt(r))return Et(r,mr)+"";if(Dt(r))return lr?lr.call(r):"";var e=r+"";return e=="0"&&1/r==-kt?"-0":e}pr.exports=mr});var b=n((Wu,br)=>{var Zt=v();function Ft(r){return r==null?"":Zt(r)}br.exports=Ft});var xr=n((Gu,gr)=>{var Wt=Z(),Gt=b(),Vt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ht="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",Bt="\\u20d0-\\u20ff",$t=Ht+Jt+Bt,Yt="["+$t+"]",Kt=RegExp(Yt,"g");function Xt(r){return r=Gt(r),r&&r.replace(Vt,Wt).replace(Kt,"")}gr.exports=Xt});var yr=n((Vu,hr)=>{var Qt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ri(r){return r.match(Qt)||[]}hr.exports=ri});var Sr=n((Hu,Tr)=>{var ei=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ti(r){return ei.test(r)}Tr.exports=ti});var kr=n((Ju,Dr)=>{var Cr="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",oi=ii+ni+ui,vr="\\u2700-\\u27bf",Rr="a-z\\xdf-\\xf6\\xf8-\\xff",ai="\\xac\\xb1\\xd7\\xf7",si="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fi="\\u2000-\\u206f",di=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",wr="A-Z\\xc0-\\xd6\\xd8-\\xde",ci="\\ufe0e\\ufe0f",Pr=ai+si+fi+di,qr="['\u2019]",Ar="["+Pr+"]",li="["+oi+"]",Or="\\d+",mi="["+vr+"]",Mr="["+Rr+"]",jr="[^"+Cr+Pr+Or+vr+Rr+wr+"]",pi="\\ud83c[\\udffb-\\udfff]",bi="(?:"+li+"|"+pi+")",gi="[^"+Cr+"]",_r="(?:\\ud83c[\\udde6-\\uddff]){2}",Lr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+wr+"]",xi="\\u200d",Nr="(?:"+Mr+"|"+jr+")",hi="(?:"+l+"|"+jr+")",Ur="(?:"+qr+"(?:d|ll|m|re|s|t|ve))?",Ir="(?:"+qr+"(?:D|LL|M|RE|S|T|VE))?",Er=bi+"?",zr="["+ci+"]?",yi="(?:"+xi+"(?:"+[gi,_r,Lr].join("|")+")"+zr+Er+")*",Ti="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Si="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ci=zr+Er+yi,vi="(?:"+[mi,_r,Lr].join("|")+")"+Ci,Ri=RegExp([l+"?"+Mr+"+"+Ur+"(?="+[Ar,l,"$"].join("|")+")",hi+"+"+Ir+"(?="+[Ar,l+Nr,"$"].join("|")+")",l+"?"+Nr+"+"+Ur,l+"+"+Ir,Si,Ti,Or,vi].join("|"),"g");function wi(r){return r.match(Ri)||[]}Dr.exports=wi});var Fr=n((Bu,Zr)=>{var Pi=yr(),qi=Sr(),Ai=b(),Oi=kr();function Mi(r,e,t){return r=Ai(r),e=t?void 0:e,e===void 0?qi(r)?Oi(r):Pi(r):r.match(e)||[]}Zr.exports=Mi});var Gr=n(($u,Wr)=>{var ji=E(),_i=xr(),Li=Fr(),Ni="['\u2019]",Ui=RegExp(Ni,"g");function Ii(r){return function(e){return ji(Li(_i(e).replace(Ui,"")),r,"")}}Wr.exports=Ii});var Hr=n((Yu,Vr)=>{function Ei(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Vr.exports=Ei});var R=n((Ku,Jr)=>{var zi=Hr();function Di(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:zi(r,e,t)}Jr.exports=Di});var g=n((Xu,Br)=>{var ki="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Fi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Gi=Zi+Fi+Wi,Vi="\\ufe0e\\ufe0f",Hi="\\u200d",Ji=RegExp("["+Hi+ki+Gi+Vi+"]");function Bi(r){return Ji.test(r)}Br.exports=Bi});var Yr=n((Qu,$r)=>{function $i(r){return r.split("")}$r.exports=$i});var ne=n((ro,ie)=>{var Kr="\\ud800-\\udfff",Yi="\\u0300-\\u036f",Ki="\\ufe20-\\ufe2f",Xi="\\u20d0-\\u20ff",Qi=Yi+Ki+Xi,rn="\\ufe0e\\ufe0f",en="["+Kr+"]",w="["+Qi+"]",P="\\ud83c[\\udffb-\\udfff]",tn="(?:"+w+"|"+P+")",Xr="[^"+Kr+"]",Qr="(?:\\ud83c[\\udde6-\\uddff]){2}",re="[\\ud800-\\udbff][\\udc00-\\udfff]",nn="\\u200d",ee=tn+"?",te="["+rn+"]?",un="(?:"+nn+"(?:"+[Xr,Qr,re].join("|")+")"+te+ee+")*",on=te+ee+un,an="(?:"+[Xr+w+"?",w,Qr,re,en].join("|")+")",sn=RegExp(P+"(?="+P+")|"+an+on,"g");function fn(r){return r.match(sn)||[]}ie.exports=fn});var q=n((eo,ue)=>{var dn=Yr(),cn=g(),ln=ne();function mn(r){return cn(r)?ln(r):dn(r)}ue.exports=mn});var ae=n((to,oe)=>{var pn=R(),bn=g(),gn=q(),xn=b();function hn(r){return function(e){e=xn(e);var t=bn(e)?gn(e):void 0,i=t?t[0]:e.charAt(0),u=t?pn(t,1).join(""):e.slice(1);return i[r]()+u}}oe.exports=hn});var fe=n((io,se)=>{var yn=ae(),Tn=yn("toUpperCase");se.exports=Tn});var ce=n((no,de)=>{var Sn=Gr(),Cn=fe(),vn=Sn(function(r,e,t){return r+(t?" ":"")+Cn(e)});de.exports=vn});var ge=n((oo,be)=>{var On=9007199254740991,Mn=Math.floor;function jn(r,e){var t="";if(!r||e<1||e>On)return t;do e%2&&(t+=r),e=Mn(e/2),e&&(r+=r);while(e);return t}be.exports=jn});var he=n((ao,xe)=>{function _n(r){return function(e){return e==null?void 0:e[r]}}xe.exports=_n});var Te=n((so,ye)=>{var Ln=he(),Nn=Ln("length");ye.exports=Nn});var Oe=n((fo,Ae)=>{var Se="\\ud800-\\udfff",Un="\\u0300-\\u036f",In="\\ufe20-\\ufe2f",En="\\u20d0-\\u20ff",zn=Un+In+En,Dn="\\ufe0e\\ufe0f",kn="["+Se+"]",O="["+zn+"]",M="\\ud83c[\\udffb-\\udfff]",Zn="(?:"+O+"|"+M+")",Ce="[^"+Se+"]",ve="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",Fn="\\u200d",we=Zn+"?",Pe="["+Dn+"]?",Wn="(?:"+Fn+"(?:"+[Ce,ve,Re].join("|")+")"+Pe+we+")*",Gn=Pe+we+Wn,Vn="(?:"+[Ce+O+"?",O,ve,Re,kn].join("|")+")",qe=RegExp(M+"(?="+M+")|"+Vn+Gn,"g");function Hn(r){for(var e=qe.lastIndex=0;qe.test(r);)++e;return e}Ae.exports=Hn});var j=n((co,Me)=>{var Jn=Te(),Bn=g(),$n=Oe();function Yn(r){return Bn(r)?$n(r):Jn(r)}Me.exports=Yn});var Le=n((lo,_e)=>{var je=ge(),Kn=v(),Xn=R(),Qn=g(),ru=j(),eu=q(),tu=Math.ceil;function iu(r,e){e=e===void 0?" ":Kn(e);var t=e.length;if(t<2)return t?je(e,r):e;var i=je(e,tu(r/ru(e)));return Qn(e)?Xn(eu(i),0,r).join(""):i.slice(0,r)}_e.exports=iu});var Ue=n((mo,Ne)=>{var nu=/\s/;function uu(r){for(var e=r.length;e--&&nu.test(r.charAt(e)););return e}Ne.exports=uu});var Ee=n((po,Ie)=>{var ou=Ue(),au=/^\s+/;function su(r){return r&&r.slice(0,ou(r)+1).replace(au,"")}Ie.exports=su});var De=n((bo,ze)=>{function fu(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}ze.exports=fu});var We=n((go,Fe)=>{var du=Ee(),ke=De(),cu=C(),Ze=0/0,lu=/^[-+]0x[0-9a-f]+$/i,mu=/^0b[01]+$/i,pu=/^0o[0-7]+$/i,bu=parseInt;function gu(r){if(typeof r=="number")return r;if(cu(r))return Ze;if(ke(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ke(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=du(r);var t=mu.test(r);return t||pu.test(r)?bu(r.slice(2),t?2:8):lu.test(r)?Ze:+r}Fe.exports=gu});var He=n((xo,Ve)=>{var xu=We(),Ge=1/0,hu=17976931348623157e292;function yu(r){if(!r)return r===0?r:0;if(r=xu(r),r===Ge||r===-Ge){var e=r<0?-1:1;return e*hu}return r===r?r:0}Ve.exports=yu});var Be=n((ho,Je)=>{var Tu=He();function Su(r){var e=Tu(r),t=e%1;return e===e?t?e-t:e:0}Je.exports=Su});var Ke=n((yo,Ye)=>{var $e=Le(),Cu=j(),vu=Be(),Ru=b(),wu=Math.ceil,Pu=Math.floor;function qu(r,e,t){r=Ru(r),e=vu(e);var i=e?Cu(r):0;if(!e||i>=e)return r;var u=(e-i)/2;return $e(Pu(u),t)+r+$e(wu(u),t)}Ye.exports=qu});var A=U(ce());function le(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(le):r}function Rn(r,e){return h(this,null,function*(){var s;let{data:{key:t,params:i}}=r,u,o;try{u=yield e(...i)}catch(a){u=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let c={key:t};u!==void 0&&(u=le(u),c.result={type:"string",value:u}),o!==void 0&&(c.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,c,"*")})}function wn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Rn(e,r.run)),m(d({},r),{json:JSON.stringify(qn(r),null,2)})}var Pn=`
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
    `,me=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function qn(r){let{name:e,description:t,author:i,result:u,params:o,about:c,video:s}=r,{icon:a=me}=r;return a==="glide"&&(a=Pn),{name:e,description:t,author:i,result:u,about:c,icon:a,video:s,params:Object.entries(o).map(([f,S])=>d({name:f},S))}}var An={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:me,about:void 0,video:void 0,run(){return h(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=d(d({},An),e),this.requiredParams=[...t]}with(e,t=[]){return new T(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,A.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return i===void 0&&(i=(0,A.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:i}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){return h(this,null,function*(){let s={};if(c.forEach(({value:f},S)=>{s[u[S]]=f}),i.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return wn(m(d({},this.definition),{run:o}))}};function pe(r){return new T({name:r})}var Xe=U(Ke()),So=pe("Pad Text").withDescription("Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withExample({text:"abc",length:8}).run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Xe.default)(r,e,t));})();
//# sourceMappingURL=index.js.map