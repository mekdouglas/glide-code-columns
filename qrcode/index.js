(()=>{var le=Object.create;var p=Object.defineProperty,fe=Object.defineProperties,de=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyDescriptors,pe=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,me=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,ge=Object.prototype.propertyIsEnumerable;var T=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,b=(r,e)=>{for(var t in e||(e={}))y.call(e,t)&&T(r,t,e[t]);if(C)for(var t of C(e))ge.call(e,t)&&T(r,t,e[t]);return r},v=(r,e)=>fe(r,ce(e)),xe=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var be=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of pe(e))!y.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=de(e,i))||t.enumerable});return r},he=r=>be(xe(p(r!=null?le(me(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var m=(r,e,t)=>new Promise((i,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},l=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,l);s((t=t.apply(r,e)).next())});var R=u((kn,w)=>{function He(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}w.exports=He});var P=u((zn,S)=>{function Ve(r){return function(e){return r==null?void 0:r[e]}}S.exports=Ve});var q=u((Wn,M)=>{var Ce=P(),ye={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Te=Ce(ye);M.exports=Te});var O=u((Gn,A)=>{var ve=typeof global=="object"&&global&&global.Object===Object&&global;A.exports=ve});var L=u((Fn,j)=>{var we=O(),Re=typeof self=="object"&&self&&self.Object===Object&&self,Se=we||Re||Function("return this")();j.exports=Se});var g=u((Jn,Z)=>{var Pe=L(),Me=Pe.Symbol;Z.exports=Me});var N=u(($n,U)=>{function qe(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}U.exports=qe});var D=u((Bn,_)=>{var Ae=Array.isArray;_.exports=Ae});var z=u((Qn,k)=>{var E=g(),I=Object.prototype,Oe=I.hasOwnProperty,je=I.toString,c=E?E.toStringTag:void 0;function Le(r){var e=Oe.call(r,c),t=r[c];try{r[c]=void 0;var i=!0}catch(o){}var n=je.call(r);return i&&(e?r[c]=t:delete r[c]),n}k.exports=Le});var G=u((Yn,W)=>{var Ze=Object.prototype,Ue=Ze.toString;function Ne(r){return Ue.call(r)}W.exports=Ne});var B=u((Kn,$)=>{var F=g(),_e=z(),De=G(),Ee="[object Null]",Ie="[object Undefined]",J=F?F.toStringTag:void 0;function ke(r){return r==null?r===void 0?Ie:Ee:J&&J in Object(r)?_e(r):De(r)}$.exports=ke});var Y=u((Xn,Q)=>{function ze(r){return r!=null&&typeof r=="object"}Q.exports=ze});var X=u((ri,K)=>{var We=B(),Ge=Y(),Fe="[object Symbol]";function Je(r){return typeof r=="symbol"||Ge(r)&&We(r)==Fe}K.exports=Je});var ur=u((ei,ir)=>{var rr=g(),$e=N(),Be=D(),Qe=X(),Ye=1/0,er=rr?rr.prototype:void 0,tr=er?er.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Be(r))return $e(r,nr)+"";if(Qe(r))return tr?tr.call(r):"";var e=r+"";return e=="0"&&1/r==-Ye?"-0":e}ir.exports=nr});var x=u((ti,or)=>{var Ke=ur();function Xe(r){return r==null?"":Ke(r)}or.exports=Xe});var sr=u((ni,ar)=>{var rt=q(),et=x(),tt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nt="\\u0300-\\u036f",it="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",ot=nt+it+ut,at="["+ot+"]",st=RegExp(at,"g");function lt(r){return r=et(r),r&&r.replace(tt,rt).replace(st,"")}ar.exports=lt});var fr=u((ii,lr)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function dt(r){return r.match(ft)||[]}lr.exports=dt});var cr=u((ui,dr)=>{var ct=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function pt(r){return ct.test(r)}dr.exports=pt});var Ar=u((oi,qr)=>{var pr="\\ud800-\\udfff",mt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",xt="\\u20d0-\\u20ff",bt=mt+gt+xt,mr="\\u2700-\\u27bf",gr="a-z\\xdf-\\xf6\\xf8-\\xff",ht="\\xac\\xb1\\xd7\\xf7",Ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Vt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",yt="\\ufe0e\\ufe0f",br=ht+Ht+Vt+Ct,hr="['\u2019]",Hr="["+br+"]",Tt="["+bt+"]",Vr="\\d+",vt="["+mr+"]",Cr="["+gr+"]",yr="[^"+pr+br+Vr+mr+gr+xr+"]",wt="\\ud83c[\\udffb-\\udfff]",Rt="(?:"+Tt+"|"+wt+")",St="[^"+pr+"]",Tr="(?:\\ud83c[\\udde6-\\uddff]){2}",vr="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+xr+"]",Pt="\\u200d",wr="(?:"+Cr+"|"+yr+")",Mt="(?:"+d+"|"+yr+")",Rr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Sr="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",Pr=Rt+"?",Mr="["+yt+"]?",qt="(?:"+Pt+"(?:"+[St,Tr,vr].join("|")+")"+Mr+Pr+")*",At="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jt=Mr+Pr+qt,Lt="(?:"+[vt,Tr,vr].join("|")+")"+jt,Zt=RegExp([d+"?"+Cr+"+"+Rr+"(?="+[Hr,d,"$"].join("|")+")",Mt+"+"+Sr+"(?="+[Hr,d+wr,"$"].join("|")+")",d+"?"+wr+"+"+Rr,d+"+"+Sr,Ot,At,Vr,Lt].join("|"),"g");function Ut(r){return r.match(Zt)||[]}qr.exports=Ut});var jr=u((ai,Or)=>{var Nt=fr(),_t=cr(),Dt=x(),Et=Ar();function It(r,e,t){return r=Dt(r),e=t?void 0:e,e===void 0?_t(r)?Et(r):Nt(r):r.match(e)||[]}Or.exports=It});var Zr=u((si,Lr)=>{var kt=R(),zt=sr(),Wt=jr(),Gt="['\u2019]",Ft=RegExp(Gt,"g");function Jt(r){return function(e){return kt(Wt(zt(e).replace(Ft,"")),r,"")}}Lr.exports=Jt});var Nr=u((li,Ur)=>{function $t(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Ur.exports=$t});var Dr=u((fi,_r)=>{var Bt=Nr();function Qt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Bt(r,e,t)}_r.exports=Qt});var h=u((di,Er)=>{var Yt="\\ud800-\\udfff",Kt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",rn="\\u20d0-\\u20ff",en=Kt+Xt+rn,tn="\\ufe0e\\ufe0f",nn="\\u200d",un=RegExp("["+nn+Yt+en+tn+"]");function on(r){return un.test(r)}Er.exports=on});var kr=u((ci,Ir)=>{function an(r){return r.split("")}Ir.exports=an});var Qr=u((pi,Br)=>{var zr="\\ud800-\\udfff",sn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",fn="\\u20d0-\\u20ff",dn=sn+ln+fn,cn="\\ufe0e\\ufe0f",pn="["+zr+"]",H="["+dn+"]",V="\\ud83c[\\udffb-\\udfff]",mn="(?:"+H+"|"+V+")",Wr="[^"+zr+"]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Fr="[\\ud800-\\udbff][\\udc00-\\udfff]",gn="\\u200d",Jr=mn+"?",$r="["+cn+"]?",xn="(?:"+gn+"(?:"+[Wr,Gr,Fr].join("|")+")"+$r+Jr+")*",bn=$r+Jr+xn,hn="(?:"+[Wr+H+"?",H,Gr,Fr,pn].join("|")+")",Hn=RegExp(V+"(?="+V+")|"+hn+bn,"g");function Vn(r){return r.match(Hn)||[]}Br.exports=Vn});var Kr=u((mi,Yr)=>{var Cn=kr(),yn=h(),Tn=Qr();function vn(r){return yn(r)?Tn(r):Cn(r)}Yr.exports=vn});var re=u((gi,Xr)=>{var wn=Dr(),Rn=h(),Sn=Kr(),Pn=x();function Mn(r){return function(e){e=Pn(e);var t=Rn(e)?Sn(e):void 0,i=t?t[0]:e.charAt(0),n=t?wn(t,1).join(""):e.slice(1);return i[r]()+n}}Xr.exports=Mn});var te=u((xi,ee)=>{var qn=re(),An=qn("toUpperCase");ee.exports=An});var ie=u((bi,ne)=>{var On=Zr(),jn=te(),Ln=On(function(r,e,t){return r+(t?" ":"")+jn(e)});ne.exports=Ln});var Zn=he(ie());function ue(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(ue):r}function Un(r,e){return m(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=ue(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function oe(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Un(e,r.run)),v(b({},r),{json:JSON.stringify(Dn(r),null,2)})}var Nn=`
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
    `,_n=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Dn(r){let{name:e,description:t,author:i,result:n,params:o,about:l,video:s}=r,{icon:a=_n}=r;return a==="glide"&&(a=Nn),{name:e,description:t,author:i,result:n,about:l,icon:a,video:s,params:Object.entries(o).map(([f,se])=>b({name:f},se))}}function ae(r,e){let t="?"+Object.entries(e).map(([i,n])=>`${encodeURIComponent(i)}=${encodeURIComponent(n)}`).join("&");return r+t}var En=(r,e)=>m(void 0,null,function*(){let{value:t}=r,{value:i=500}=e;if(t!==void 0)return ae("https://api.qrserver.com/v1/create-qr-code/",{data:t,size:`${i}x${i}`,margin:0})}),yi=oe({name:"QR Code",description:"Generate QR codes",about:`
      Uses [goQR.me](https://goqr.me/api/)'s QR code generation API.
    `,video:"https://www.youtube.com/watch?v=142TGhaTMtI",author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:"https://glideapps.com",size:250},result:{type:"image-uri"},run:En,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `});})();
//# sourceMappingURL=index.js.map
