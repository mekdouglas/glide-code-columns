(()=>{var He=Object.create;var g=Object.defineProperty,Be=Object.defineProperties,Je=Object.getOwnPropertyDescriptor,$e=Object.getOwnPropertyDescriptors,Ye=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,Xe=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Ke=Object.prototype.propertyIsEnumerable;var O=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))A.call(e,t)&&O(r,t,e[t]);if(q)for(var t of q(e))Ke.call(e,t)&&O(r,t,e[t]);return r},b=(r,e)=>Be(r,$e(e)),Qe=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var rt=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Ye(e))!A.call(r,n)&&n!=="default"&&g(r,n,{get:()=>e[n],enumerable:!(t=Je(e,n))||t.enumerable});return r},j=r=>rt(Qe(g(r!=null?He(Xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var w=(r,e,t)=>new Promise((n,u)=>{var a=s=>{try{o(t.next(s))}catch(c){u(c)}},d=s=>{try{o(t.throw(s))}catch(c){u(c)}},o=s=>s.done?n(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var I=i((bu,L)=>{function et(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}L.exports=et});var N=i((xu,M)=>{function tt(r){return function(e){return r==null?void 0:r[e]}}M.exports=tt});var E=i((hu,_)=>{var it=N(),nt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ut=it(nt);_.exports=ut});var U=i((yu,k)=>{var at=typeof global=="object"&&global&&global.Object===Object&&global;k.exports=at});var F=i((Tu,D)=>{var st=U(),ot=typeof self=="object"&&self&&self.Object===Object&&self,dt=st||ot||Function("return this")();D.exports=dt});var x=i((wu,G)=>{var ft=F(),ct=ft.Symbol;G.exports=ct});var Z=i((Pu,V)=>{function mt(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}V.exports=mt});var z=i((Ru,W)=>{var lt=Array.isArray;W.exports=lt});var $=i((Cu,J)=>{var H=x(),B=Object.prototype,pt=B.hasOwnProperty,gt=B.toString,l=H?H.toStringTag:void 0;function bt(r){var e=pt.call(r,l),t=r[l];try{r[l]=void 0;var n=!0}catch(a){}var u=gt.call(r);return n&&(e?r[l]=t:delete r[l]),u}J.exports=bt});var X=i((vu,Y)=>{var xt=Object.prototype,ht=xt.toString;function yt(r){return ht.call(r)}Y.exports=yt});var P=i((Su,rr)=>{var K=x(),Tt=$(),wt=X(),Pt="[object Null]",Rt="[object Undefined]",Q=K?K.toStringTag:void 0;function Ct(r){return r==null?r===void 0?Rt:Pt:Q&&Q in Object(r)?Tt(r):wt(r)}rr.exports=Ct});var tr=i((qu,er)=>{function vt(r){return r!=null&&typeof r=="object"}er.exports=vt});var R=i((Au,ir)=>{var St=P(),qt=tr(),At="[object Symbol]";function Ot(r){return typeof r=="symbol"||qt(r)&&St(r)==At}ir.exports=Ot});var dr=i((Ou,or)=>{var nr=x(),jt=Z(),Lt=z(),It=R(),Mt=1/0,ur=nr?nr.prototype:void 0,ar=ur?ur.toString:void 0;function sr(r){if(typeof r=="string")return r;if(Lt(r))return jt(r,sr)+"";if(It(r))return ar?ar.call(r):"";var e=r+"";return e=="0"&&1/r==-Mt?"-0":e}or.exports=sr});var p=i((ju,fr)=>{var Nt=dr();function _t(r){return r==null?"":Nt(r)}fr.exports=_t});var mr=i((Lu,cr)=>{var Et=E(),kt=p(),Ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Dt="\\u0300-\\u036f",Ft="\\ufe20-\\ufe2f",Gt="\\u20d0-\\u20ff",Vt=Dt+Ft+Gt,Zt="["+Vt+"]",Wt=RegExp(Zt,"g");function zt(r){return r=kt(r),r&&r.replace(Ut,Et).replace(Wt,"")}cr.exports=zt});var pr=i((Iu,lr)=>{var Ht=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Bt(r){return r.match(Ht)||[]}lr.exports=Bt});var br=i((Mu,gr)=>{var Jt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function $t(r){return Jt.test(r)}gr.exports=$t});var _r=i((Nu,Nr)=>{var xr="\\ud800-\\udfff",Yt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",Kt="\\u20d0-\\u20ff",Qt=Yt+Xt+Kt,hr="\\u2700-\\u27bf",yr="a-z\\xdf-\\xf6\\xf8-\\xff",ri="\\xac\\xb1\\xd7\\xf7",ei="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ti="\\u2000-\\u206f",ii=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",ni="\\ufe0e\\ufe0f",wr=ri+ei+ti+ii,Pr="['\u2019]",Rr="["+wr+"]",ui="["+Qt+"]",Cr="\\d+",ai="["+hr+"]",vr="["+yr+"]",Sr="[^"+xr+wr+Cr+hr+yr+Tr+"]",si="\\ud83c[\\udffb-\\udfff]",oi="(?:"+ui+"|"+si+")",di="[^"+xr+"]",qr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+Tr+"]",fi="\\u200d",Or="(?:"+vr+"|"+Sr+")",ci="(?:"+m+"|"+Sr+")",jr="(?:"+Pr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Pr+"(?:D|LL|M|RE|S|T|VE))?",Ir=oi+"?",Mr="["+ni+"]?",mi="(?:"+fi+"(?:"+[di,qr,Ar].join("|")+")"+Mr+Ir+")*",li="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",pi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",gi=Mr+Ir+mi,bi="(?:"+[ai,qr,Ar].join("|")+")"+gi,xi=RegExp([m+"?"+vr+"+"+jr+"(?="+[Rr,m,"$"].join("|")+")",ci+"+"+Lr+"(?="+[Rr,m+Or,"$"].join("|")+")",m+"?"+Or+"+"+jr,m+"+"+Lr,pi,li,Cr,bi].join("|"),"g");function hi(r){return r.match(xi)||[]}Nr.exports=hi});var kr=i((_u,Er)=>{var yi=pr(),Ti=br(),wi=p(),Pi=_r();function Ri(r,e,t){return r=wi(r),e=t?void 0:e,e===void 0?Ti(r)?Pi(r):yi(r):r.match(e)||[]}Er.exports=Ri});var Dr=i((Eu,Ur)=>{var Ci=I(),vi=mr(),Si=kr(),qi="['\u2019]",Ai=RegExp(qi,"g");function Oi(r){return function(e){return Ci(Si(vi(e).replace(Ai,"")),r,"")}}Ur.exports=Oi});var Gr=i((ku,Fr)=>{function ji(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Fr.exports=ji});var Zr=i((Uu,Vr)=>{var Li=Gr();function Ii(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Li(r,e,t)}Vr.exports=Ii});var C=i((Du,Wr)=>{var Mi="\\ud800-\\udfff",Ni="\\u0300-\\u036f",_i="\\ufe20-\\ufe2f",Ei="\\u20d0-\\u20ff",ki=Ni+_i+Ei,Ui="\\ufe0e\\ufe0f",Di="\\u200d",Fi=RegExp("["+Di+Mi+ki+Ui+"]");function Gi(r){return Fi.test(r)}Wr.exports=Gi});var Hr=i((Fu,zr)=>{function Vi(r){return r.split("")}zr.exports=Vi});var re=i((Gu,Qr)=>{var Br="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Wi="\\ufe20-\\ufe2f",zi="\\u20d0-\\u20ff",Hi=Zi+Wi+zi,Bi="\\ufe0e\\ufe0f",Ji="["+Br+"]",v="["+Hi+"]",S="\\ud83c[\\udffb-\\udfff]",$i="(?:"+v+"|"+S+")",Jr="[^"+Br+"]",$r="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",Yi="\\u200d",Xr=$i+"?",Kr="["+Bi+"]?",Xi="(?:"+Yi+"(?:"+[Jr,$r,Yr].join("|")+")"+Kr+Xr+")*",Ki=Kr+Xr+Xi,Qi="(?:"+[Jr+v+"?",v,$r,Yr,Ji].join("|")+")",rn=RegExp(S+"(?="+S+")|"+Qi+Ki,"g");function en(r){return r.match(rn)||[]}Qr.exports=en});var te=i((Vu,ee)=>{var tn=Hr(),nn=C(),un=re();function an(r){return nn(r)?un(r):tn(r)}ee.exports=an});var ne=i((Zu,ie)=>{var sn=Zr(),on=C(),dn=te(),fn=p();function cn(r){return function(e){e=fn(e);var t=on(e)?dn(e):void 0,n=t?t[0]:e.charAt(0),u=t?sn(t,1).join(""):e.slice(1);return n[r]()+u}}ie.exports=cn});var ae=i((Wu,ue)=>{var mn=ne(),ln=mn("toUpperCase");ue.exports=ln});var oe=i((zu,se)=>{var pn=Dr(),gn=ae(),bn=pn(function(r,e,t){return r+(t?" ":"")+gn(e)});se.exports=bn});var pe=i((Bu,le)=>{var Pn=9007199254740991,Rn=Math.floor;function Cn(r,e){var t="";if(!r||e<1||e>Pn)return t;do e%2&&(t+=r),e=Rn(e/2),e&&(r+=r);while(e);return t}le.exports=Cn});var be=i((Ju,ge)=>{function vn(r,e){return r===e||r!==r&&e!==e}ge.exports=vn});var y=i(($u,xe)=>{function Sn(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}xe.exports=Sn});var ye=i((Yu,he)=>{var qn=P(),An=y(),On="[object AsyncFunction]",jn="[object Function]",Ln="[object GeneratorFunction]",In="[object Proxy]";function Mn(r){if(!An(r))return!1;var e=qn(r);return e==jn||e==Ln||e==On||e==In}he.exports=Mn});var we=i((Xu,Te)=>{var Nn=9007199254740991;function _n(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Nn}Te.exports=_n});var Re=i((Ku,Pe)=>{var En=ye(),kn=we();function Un(r){return r!=null&&kn(r.length)&&!En(r)}Pe.exports=Un});var ve=i((Qu,Ce)=>{var Dn=9007199254740991,Fn=/^(?:0|[1-9]\d*)$/;function Gn(r,e){var t=typeof r;return e=e??Dn,!!e&&(t=="number"||t!="symbol"&&Fn.test(r))&&r>-1&&r%1==0&&r<e}Ce.exports=Gn});var qe=i((ra,Se)=>{var Vn=be(),Zn=Re(),Wn=ve(),zn=y();function Hn(r,e,t){if(!zn(t))return!1;var n=typeof e;return(n=="number"?Zn(t)&&Wn(e,t.length):n=="string"&&e in t)?Vn(t[e],r):!1}Se.exports=Hn});var Oe=i((ea,Ae)=>{var Bn=/\s/;function Jn(r){for(var e=r.length;e--&&Bn.test(r.charAt(e)););return e}Ae.exports=Jn});var Le=i((ta,je)=>{var $n=Oe(),Yn=/^\s+/;function Xn(r){return r&&r.slice(0,$n(r)+1).replace(Yn,"")}je.exports=Xn});var _e=i((ia,Ne)=>{var Kn=Le(),Ie=y(),Qn=R(),Me=0/0,ru=/^[-+]0x[0-9a-f]+$/i,eu=/^0b[01]+$/i,tu=/^0o[0-7]+$/i,iu=parseInt;function nu(r){if(typeof r=="number")return r;if(Qn(r))return Me;if(Ie(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=Ie(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Kn(r);var t=eu.test(r);return t||tu.test(r)?iu(r.slice(2),t?2:8):ru.test(r)?Me:+r}Ne.exports=nu});var Ue=i((na,ke)=>{var uu=_e(),Ee=1/0,au=17976931348623157e292;function su(r){if(!r)return r===0?r:0;if(r=uu(r),r===Ee||r===-Ee){var e=r<0?-1:1;return e*au}return r===r?r:0}ke.exports=su});var Fe=i((ua,De)=>{var ou=Ue();function du(r){var e=ou(r),t=e%1;return e===e?t?e-t:e:0}De.exports=du});var Ve=i((aa,Ge)=>{var fu=pe(),cu=qe(),mu=Fe(),lu=p();function pu(r,e,t){return(t?cu(r,e,t):e===void 0)?e=1:e=mu(e),fu(lu(r),e)}Ge.exports=pu});var de=j(oe());function fe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(fe):r}function xn(r,e){return w(this,null,function*(){var o;let{data:{key:t,params:n}}=r,u,a;try{u=yield e(...n)}catch(s){u=void 0;try{a=s.toString()}catch(c){a="Exception can't be stringified."}}let d={key:t};u!==void 0&&(u=fe(u),d.result={type:"string",value:u}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function hn(r){return typeof window!="undefined"&&window.addEventListener("message",e=>xn(e,r.run)),b(f({},r),{json:JSON.stringify(Tn(r),null,2)})}var yn=`
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
</svg>`;function Tn(r){let{name:e,category:t,released:n,description:u,author:a,result:d,params:o,about:s,video:c}=r,{icon:T=ce}=r;return T==="glide"&&(T=yn),{name:e,category:t,released:n,description:u,author:a,result:d,about:s,icon:T,video:c,params:Object.entries(o).map(([We,ze])=>f({name:We},ze))}}var wn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ce,about:void 0,video:void 0,tests:[],run(){return w(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=f(f({},wn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,de.default)(t)),this.with({params:b(f({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},c)=>{o[u[c]]=s}),!n.some(s=>o[s]===void 0))return e(o)}return hn(b(f({},this.definition),{run:a}))}};function me(r){return new h({name:r})}var Ze=j(Ve()),oa=me("Repeat Text").withCategory("Text").withDescription("Repeats the given string n times.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withRequiredNumberParam("n","Repetitions").withStringResult().withTest({text:"*",n:8},"********").run(({text:r,n:e})=>(0,Ze.default)(r,e));})();
//# sourceMappingURL=index.js.map
