var rt=Object.create;var p=Object.defineProperty,et=Object.defineProperties,tt=Object.getOwnPropertyDescriptor,it=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,at=Object.getPrototypeOf,j=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable;var O=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))j.call(e,t)&&O(r,t,e[t]);if(A)for(var t of A(e))ot.call(e,t)&&O(r,t,e[t]);return r},b=(r,e)=>et(r,it(e)),st=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ut=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of nt(e))!j.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=tt(e,i))||t.enumerable});return r},I=r=>ut(st(p(r!=null?rt(at(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var N=(r,e,t)=>new Promise((i,a)=>{var s=o=>{try{u(t.next(o))}catch(l){a(l)}},f=o=>{try{u(t.throw(o))}catch(l){a(l)}},u=o=>o.done?i(o.value):Promise.resolve(o.value).then(s,f);u((t=t.apply(r,e)).next())});var E=n((za,_)=>{function dt(r,e,t,i){var a=-1,s=r==null?0:r.length;for(i&&s&&(t=r[++a]);++a<s;)t=e(t,r[a],a,r);return t}_.exports=dt});var V=n((Da,U)=>{function lt(r){return function(e){return r==null?void 0:r[e]}}U.exports=lt});var D=n((La,z)=>{var ct=V(),ft={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},mt=ct(ft);z.exports=mt});var H=n((Ha,L)=>{var ht=typeof global=="object"&&global&&global.Object===Object&&global;L.exports=ht});var B=n((Fa,F)=>{var gt=H(),pt=typeof self=="object"&&self&&self.Object===Object&&self,bt=gt||pt||Function("return this")();F.exports=bt});var x=n((Ba,G)=>{var xt=B(),wt=xt.Symbol;G.exports=wt});var Z=n((Ga,W)=>{function Tt(r,e){for(var t=-1,i=r==null?0:r.length,a=Array(i);++t<i;)a[t]=e(r[t],t,r);return a}W.exports=Tt});var $=n((Wa,J)=>{var vt=Array.isArray;J.exports=vt});var Q=n((Za,X)=>{var Y=x(),K=Object.prototype,yt=K.hasOwnProperty,Pt=K.toString,m=Y?Y.toStringTag:void 0;function Rt(r){var e=yt.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(s){}var a=Pt.call(r);return i&&(e?r[m]=t:delete r[m]),a}X.exports=Rt});var er=n((Ja,rr)=>{var Ct=Object.prototype,St=Ct.toString;function qt(r){return St.call(r)}rr.exports=qt});var ar=n(($a,nr)=>{var tr=x(),Mt=Q(),kt=er(),At="[object Null]",jt="[object Undefined]",ir=tr?tr.toStringTag:void 0;function Ot(r){return r==null?r===void 0?jt:At:ir&&ir in Object(r)?Mt(r):kt(r)}nr.exports=Ot});var sr=n((Ya,or)=>{function It(r){return r!=null&&typeof r=="object"}or.exports=It});var T=n((Ka,ur)=>{var Nt=ar(),_t=sr(),Et="[object Symbol]";function Ut(r){return typeof r=="symbol"||_t(r)&&Nt(r)==Et}ur.exports=Ut});var v=n((Xa,mr)=>{var dr=x(),Vt=Z(),zt=$(),Dt=T(),Lt=1/0,lr=dr?dr.prototype:void 0,cr=lr?lr.toString:void 0;function fr(r){if(typeof r=="string")return r;if(zt(r))return Vt(r,fr)+"";if(Dt(r))return cr?cr.call(r):"";var e=r+"";return e=="0"&&1/r==-Lt?"-0":e}mr.exports=fr});var h=n((Qa,hr)=>{var Ht=v();function Ft(r){return r==null?"":Ht(r)}hr.exports=Ft});var pr=n((ro,gr)=>{var Bt=D(),Gt=h(),Wt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Zt="\\u0300-\\u036f",Jt="\\ufe20-\\ufe2f",$t="\\u20d0-\\u20ff",Yt=Zt+Jt+$t,Kt="["+Yt+"]",Xt=RegExp(Kt,"g");function Qt(r){return r=Gt(r),r&&r.replace(Wt,Bt).replace(Xt,"")}gr.exports=Qt});var xr=n((eo,br)=>{var ri=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ei(r){return r.match(ri)||[]}br.exports=ei});var Tr=n((to,wr)=>{var ti=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ii(r){return ti.test(r)}wr.exports=ii});var zr=n((io,Vr)=>{var vr="\\ud800-\\udfff",ni="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",oi="\\u20d0-\\u20ff",si=ni+ai+oi,yr="\\u2700-\\u27bf",Pr="a-z\\xdf-\\xf6\\xf8-\\xff",ui="\\xac\\xb1\\xd7\\xf7",di="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",li="\\u2000-\\u206f",ci=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Rr="A-Z\\xc0-\\xd6\\xd8-\\xde",fi="\\ufe0e\\ufe0f",Cr=ui+di+li+ci,Sr="['\u2019]",qr="["+Cr+"]",mi="["+si+"]",Mr="\\d+",hi="["+yr+"]",kr="["+Pr+"]",Ar="[^"+vr+Cr+Mr+yr+Pr+Rr+"]",gi="\\ud83c[\\udffb-\\udfff]",pi="(?:"+mi+"|"+gi+")",bi="[^"+vr+"]",jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Or="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Rr+"]",xi="\\u200d",Ir="(?:"+kr+"|"+Ar+")",wi="(?:"+c+"|"+Ar+")",Nr="(?:"+Sr+"(?:d|ll|m|re|s|t|ve))?",_r="(?:"+Sr+"(?:D|LL|M|RE|S|T|VE))?",Er=pi+"?",Ur="["+fi+"]?",Ti="(?:"+xi+"(?:"+[bi,jr,Or].join("|")+")"+Ur+Er+")*",vi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Pi=Ur+Er+Ti,Ri="(?:"+[hi,jr,Or].join("|")+")"+Pi,Ci=RegExp([c+"?"+kr+"+"+Nr+"(?="+[qr,c,"$"].join("|")+")",wi+"+"+_r+"(?="+[qr,c+Ir,"$"].join("|")+")",c+"?"+Ir+"+"+Nr,c+"+"+_r,yi,vi,Mr,Ri].join("|"),"g");function Si(r){return r.match(Ci)||[]}Vr.exports=Si});var Lr=n((no,Dr)=>{var qi=xr(),Mi=Tr(),ki=h(),Ai=zr();function ji(r,e,t){return r=ki(r),e=t?void 0:e,e===void 0?Mi(r)?Ai(r):qi(r):r.match(e)||[]}Dr.exports=ji});var Fr=n((ao,Hr)=>{var Oi=E(),Ii=pr(),Ni=Lr(),_i="['\u2019]",Ei=RegExp(_i,"g");function Ui(r){return function(e){return Oi(Ni(Ii(e).replace(Ei,"")),r,"")}}Hr.exports=Ui});var Gr=n((oo,Br)=>{function Vi(r,e,t){var i=-1,a=r.length;e<0&&(e=-e>a?0:a+e),t=t>a?a:t,t<0&&(t+=a),a=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(a);++i<a;)s[i]=r[i+e];return s}Br.exports=Vi});var y=n((so,Wr)=>{var zi=Gr();function Di(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:zi(r,e,t)}Wr.exports=Di});var g=n((uo,Zr)=>{var Li="\\ud800-\\udfff",Hi="\\u0300-\\u036f",Fi="\\ufe20-\\ufe2f",Bi="\\u20d0-\\u20ff",Gi=Hi+Fi+Bi,Wi="\\ufe0e\\ufe0f",Zi="\\u200d",Ji=RegExp("["+Zi+Li+Gi+Wi+"]");function $i(r){return Ji.test(r)}Zr.exports=$i});var $r=n((lo,Jr)=>{function Yi(r){return r.split("")}Jr.exports=Yi});var ie=n((co,te)=>{var Yr="\\ud800-\\udfff",Ki="\\u0300-\\u036f",Xi="\\ufe20-\\ufe2f",Qi="\\u20d0-\\u20ff",rn=Ki+Xi+Qi,en="\\ufe0e\\ufe0f",tn="["+Yr+"]",P="["+rn+"]",R="\\ud83c[\\udffb-\\udfff]",nn="(?:"+P+"|"+R+")",Kr="[^"+Yr+"]",Xr="(?:\\ud83c[\\udde6-\\uddff]){2}",Qr="[\\ud800-\\udbff][\\udc00-\\udfff]",an="\\u200d",re=nn+"?",ee="["+en+"]?",on="(?:"+an+"(?:"+[Kr,Xr,Qr].join("|")+")"+ee+re+")*",sn=ee+re+on,un="(?:"+[Kr+P+"?",P,Xr,Qr,tn].join("|")+")",dn=RegExp(R+"(?="+R+")|"+un+sn,"g");function ln(r){return r.match(dn)||[]}te.exports=ln});var C=n((fo,ne)=>{var cn=$r(),fn=g(),mn=ie();function hn(r){return fn(r)?mn(r):cn(r)}ne.exports=hn});var oe=n((mo,ae)=>{var gn=y(),pn=g(),bn=C(),xn=h();function wn(r){return function(e){e=xn(e);var t=pn(e)?bn(e):void 0,i=t?t[0]:e.charAt(0),a=t?gn(t,1).join(""):e.slice(1);return i[r]()+a}}ae.exports=wn});var ue=n((ho,se)=>{var Tn=oe(),vn=Tn("toUpperCase");se.exports=vn});var le=n((go,de)=>{var yn=Fr(),Pn=ue(),Rn=yn(function(r,e,t){return r+(t?" ":"")+Pn(e)});de.exports=Rn});var ge=n((wo,he)=>{var Dn=9007199254740991,Ln=Math.floor;function Hn(r,e){var t="";if(!r||e<1||e>Dn)return t;do e%2&&(t+=r),e=Ln(e/2),e&&(r+=r);while(e);return t}he.exports=Hn});var be=n((To,pe)=>{function Fn(r){return function(e){return e==null?void 0:e[r]}}pe.exports=Fn});var we=n((vo,xe)=>{var Bn=be(),Gn=Bn("length");xe.exports=Gn});var Me=n((yo,qe)=>{var Te="\\ud800-\\udfff",Wn="\\u0300-\\u036f",Zn="\\ufe20-\\ufe2f",Jn="\\u20d0-\\u20ff",$n=Wn+Zn+Jn,Yn="\\ufe0e\\ufe0f",Kn="["+Te+"]",q="["+$n+"]",M="\\ud83c[\\udffb-\\udfff]",Xn="(?:"+q+"|"+M+")",ve="[^"+Te+"]",ye="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",Qn="\\u200d",Re=Xn+"?",Ce="["+Yn+"]?",ra="(?:"+Qn+"(?:"+[ve,ye,Pe].join("|")+")"+Ce+Re+")*",ea=Ce+Re+ra,ta="(?:"+[ve+q+"?",q,ye,Pe,Kn].join("|")+")",Se=RegExp(M+"(?="+M+")|"+ta+ea,"g");function ia(r){for(var e=Se.lastIndex=0;Se.test(r);)++e;return e}qe.exports=ia});var k=n((Po,ke)=>{var na=we(),aa=g(),oa=Me();function sa(r){return aa(r)?oa(r):na(r)}ke.exports=sa});var Oe=n((Ro,je)=>{var Ae=ge(),ua=v(),da=y(),la=g(),ca=k(),fa=C(),ma=Math.ceil;function ha(r,e){e=e===void 0?" ":ua(e);var t=e.length;if(t<2)return t?Ae(e,r):e;var i=Ae(e,ma(r/ca(e)));return la(e)?da(fa(i),0,r).join(""):i.slice(0,r)}je.exports=ha});var Ne=n((Co,Ie)=>{var ga=/\s/;function pa(r){for(var e=r.length;e--&&ga.test(r.charAt(e)););return e}Ie.exports=pa});var Ee=n((So,_e)=>{var ba=Ne(),xa=/^\s+/;function wa(r){return r&&r.slice(0,ba(r)+1).replace(xa,"")}_e.exports=wa});var Ve=n((qo,Ue)=>{function Ta(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}Ue.exports=Ta});var He=n((Mo,Le)=>{var va=Ee(),ze=Ve(),ya=T(),De=0/0,Pa=/^[-+]0x[0-9a-f]+$/i,Ra=/^0b[01]+$/i,Ca=/^0o[0-7]+$/i,Sa=parseInt;function qa(r){if(typeof r=="number")return r;if(ya(r))return De;if(ze(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=ze(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=va(r);var t=Ra.test(r);return t||Ca.test(r)?Sa(r.slice(2),t?2:8):Pa.test(r)?De:+r}Le.exports=qa});var Ge=n((ko,Be)=>{var Ma=He(),Fe=1/0,ka=17976931348623157e292;function Aa(r){if(!r)return r===0?r:0;if(r=Ma(r),r===Fe||r===-Fe){var e=r<0?-1:1;return e*ka}return r===r?r:0}Be.exports=Aa});var Ze=n((Ao,We)=>{var ja=Ge();function Oa(r){var e=ja(r),t=e%1;return e===e?t?e-t:e:0}We.exports=Oa});var $e=n((jo,Je)=>{var Ia=Oe(),Na=k(),_a=Ze(),Ea=h();function Ua(r,e,t){r=Ea(r),e=_a(e);var i=e?Na(r):0;return e&&i<e?r+Ia(e-i,t):r}Je.exports=Ua});var fe=I(le());var Cn=`
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
    `,Sn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,qn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,ce=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Mn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,kn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,An=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,On=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,_n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,En={Glide:Cn,"Machine Learning":Nn,General:ce,Array:Mn,Number:qn,Encoding:_n,Text:In,"Data & APIs":On,Image:kn,Fun:An,"Date & Time":jn,Code:Sn};function S({icon:r,category:e}){var t;return(t=r!=null?r:En[e])!=null?t:ce}function Un(r){return b(d({},r),{json:JSON.stringify(Vn(r),null,2)})}function Vn(r){let{name:e,category:t,released:i,description:a,author:s,result:f,params:u,about:o,video:l}=r,Ke=S(r);return{name:e,category:t,released:i,description:a,author:s,result:f,about:o,icon:Ke,video:l,params:Object.entries(u).map(([Xe,Qe])=>d({name:Xe},Qe))}}var zn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:"https://www.loom.com/share/39ab84c058e14adea79ca4442f450351",tests:[],run(){return N(this,null,function*(){})}},w=class{constructor(e={},t=[]){this.definition=d(d({},zn),e),this.requiredParams=[...t]}with(e,t=[]){return new w(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){let{icon:t}=this.definition;return this.with({category:e,icon:S({icon:t,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withFailingTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,fe.default)(t)),this.with({params:b(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withBooleanParam(e,t){return this.withParam("boolean",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredURIParam(e,t){return this.withRequiredParam("uri",e,t)}withRequiredBooleanParam(e,t){return this.withRequiredParam("boolean",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,a=Object.keys(t);function s(...f){let u={};if(f.forEach(({value:o},l)=>{u[a[l]]=o}),!i.some(o=>u[o]===void 0))return e(u)}return Un(b(d({},this.definition),{run:s}))}};function me(r){return new w({name:r})}var Ye=I($e()),Io=me("Pad Text at End").withCategory("Text").withReleased("direct").withDescription("Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withNumberParam("length").withStringParam("chars","Padding").withTest({text:"abc",length:8},"abc     ").run(({text:r,length:e,chars:t})=>r===void 0?void 0:(0,Ye.default)(r,e,t));export{Io as default};
//# sourceMappingURL=function.js.map
