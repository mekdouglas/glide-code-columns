(()=>{var se=Object.create;var m=Object.defineProperty,de=Object.defineProperties,fe=Object.getOwnPropertyDescriptor,le=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertyNames,T=Object.getOwnPropertySymbols,me=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var w=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&w(r,t,e[t]);if(T)for(var t of T(e))pe.call(e,t)&&w(r,t,e[t]);return r},S=(r,e)=>de(r,le(e)),ge=r=>m(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var be=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ce(e))!v.call(r,i)&&i!=="default"&&m(r,i,{get:()=>e[i],enumerable:!(t=fe(e,i))||t.enumerable});return r},xe=r=>be(ge(m(r!=null?se(me(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var p=(r,e,t)=>new Promise((i,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},d=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,d);s((t=t.apply(r,e)).next())});var P=u((zn,R)=>{function he(r,e,t,i){var n=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}R.exports=he});var q=u((Fn,A)=>{function ye(r){return function(e){return r==null?void 0:r[e]}}A.exports=ye});var L=u((Gn,O)=>{var Ce=q(),Te={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ve=Ce(Te);O.exports=ve});var M=u((Hn,j)=>{var we=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=we});var N=u((Jn,U)=>{var Se=M(),Re=typeof self=="object"&&self&&self.Object===Object&&self,Pe=Se||Re||Function("return this")();U.exports=Pe});var g=u((Bn,_)=>{var Ae=N(),qe=Ae.Symbol;_.exports=qe});var E=u((Yn,D)=>{function Oe(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}D.exports=Oe});var Z=u(($n,k)=>{var Le=Array.isArray;k.exports=Le});var z=u((Kn,V)=>{var I=g(),W=Object.prototype,je=W.hasOwnProperty,Me=W.toString,c=I?I.toStringTag:void 0;function Ue(r){var e=je.call(r,c),t=r[c];try{r[c]=void 0;var i=!0}catch(o){}var n=Me.call(r);return i&&(e?r[c]=t:delete r[c]),n}V.exports=Ue});var G=u((Qn,F)=>{var Ne=Object.prototype,_e=Ne.toString;function De(r){return _e.call(r)}F.exports=De});var Y=u((Xn,B)=>{var H=g(),Ee=z(),ke=G(),Ze="[object Null]",Ie="[object Undefined]",J=H?H.toStringTag:void 0;function We(r){return r==null?r===void 0?Ie:Ze:J&&J in Object(r)?Ee(r):ke(r)}B.exports=We});var K=u((ru,$)=>{function Ve(r){return r!=null&&typeof r=="object"}$.exports=Ve});var X=u((eu,Q)=>{var ze=Y(),Fe=K(),Ge="[object Symbol]";function He(r){return typeof r=="symbol"||Fe(r)&&ze(r)==Ge}Q.exports=He});var ir=u((tu,ur)=>{var rr=g(),Je=E(),Be=Z(),Ye=X(),$e=1/0,er=rr?rr.prototype:void 0,tr=er?er.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Be(r))return Je(r,nr)+"";if(Ye(r))return tr?tr.call(r):"";var e=r+"";return e=="0"&&1/r==-$e?"-0":e}ur.exports=nr});var b=u((nu,or)=>{var Ke=ir();function Qe(r){return r==null?"":Ke(r)}or.exports=Qe});var sr=u((uu,ar)=>{var Xe=L(),rt=b(),et=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,tt="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",it=tt+nt+ut,ot="["+it+"]",at=RegExp(ot,"g");function st(r){return r=rt(r),r&&r.replace(et,Xe).replace(at,"")}ar.exports=st});var fr=u((iu,dr)=>{var dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(r){return r.match(dt)||[]}dr.exports=ft});var cr=u((ou,lr)=>{var lt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ct(r){return lt.test(r)}lr.exports=ct});var jr=u((au,Lr)=>{var mr="\\ud800-\\udfff",mt="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",gt="\\u20d0-\\u20ff",bt=mt+pt+gt,pr="\\u2700-\\u27bf",gr="a-z\\xdf-\\xf6\\xf8-\\xff",xt="\\xac\\xb1\\xd7\\xf7",ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",Tt="\\ufe0e\\ufe0f",xr=xt+ht+yt+Ct,hr="['\u2019]",yr="["+xr+"]",vt="["+bt+"]",Cr="\\d+",wt="["+pr+"]",Tr="["+gr+"]",vr="[^"+mr+xr+Cr+pr+gr+br+"]",St="\\ud83c[\\udffb-\\udfff]",Rt="(?:"+vt+"|"+St+")",Pt="[^"+mr+"]",wr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+br+"]",At="\\u200d",Rr="(?:"+Tr+"|"+vr+")",qt="(?:"+l+"|"+vr+")",Pr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",qr=Rt+"?",Or="["+Tt+"]?",Ot="(?:"+At+"(?:"+[Pt,wr,Sr].join("|")+")"+Or+qr+")*",Lt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mt=Or+qr+Ot,Ut="(?:"+[wt,wr,Sr].join("|")+")"+Mt,Nt=RegExp([l+"?"+Tr+"+"+Pr+"(?="+[yr,l,"$"].join("|")+")",qt+"+"+Ar+"(?="+[yr,l+Rr,"$"].join("|")+")",l+"?"+Rr+"+"+Pr,l+"+"+Ar,jt,Lt,Cr,Ut].join("|"),"g");function _t(r){return r.match(Nt)||[]}Lr.exports=_t});var Ur=u((su,Mr)=>{var Dt=fr(),Et=cr(),kt=b(),Zt=jr();function It(r,e,t){return r=kt(r),e=t?void 0:e,e===void 0?Et(r)?Zt(r):Dt(r):r.match(e)||[]}Mr.exports=It});var _r=u((du,Nr)=>{var Wt=P(),Vt=sr(),zt=Ur(),Ft="['\u2019]",Gt=RegExp(Ft,"g");function Ht(r){return function(e){return Wt(zt(Vt(e).replace(Gt,"")),r,"")}}Nr.exports=Ht});var Er=u((fu,Dr)=>{function Jt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++i<n;)o[i]=r[i+e];return o}Dr.exports=Jt});var Zr=u((lu,kr)=>{var Bt=Er();function Yt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Bt(r,e,t)}kr.exports=Yt});var h=u((cu,Ir)=>{var $t="\\ud800-\\udfff",Kt="\\u0300-\\u036f",Qt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",rn=Kt+Qt+Xt,en="\\ufe0e\\ufe0f",tn="\\u200d",nn=RegExp("["+tn+$t+rn+en+"]");function un(r){return nn.test(r)}Ir.exports=un});var Vr=u((mu,Wr)=>{function on(r){return r.split("")}Wr.exports=on});var $r=u((pu,Yr)=>{var zr="\\ud800-\\udfff",an="\\u0300-\\u036f",sn="\\ufe20-\\ufe2f",dn="\\u20d0-\\u20ff",fn=an+sn+dn,ln="\\ufe0e\\ufe0f",cn="["+zr+"]",y="["+fn+"]",C="\\ud83c[\\udffb-\\udfff]",mn="(?:"+y+"|"+C+")",Fr="[^"+zr+"]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Hr="[\\ud800-\\udbff][\\udc00-\\udfff]",pn="\\u200d",Jr=mn+"?",Br="["+ln+"]?",gn="(?:"+pn+"(?:"+[Fr,Gr,Hr].join("|")+")"+Br+Jr+")*",bn=Br+Jr+gn,xn="(?:"+[Fr+y+"?",y,Gr,Hr,cn].join("|")+")",hn=RegExp(C+"(?="+C+")|"+xn+bn,"g");function yn(r){return r.match(hn)||[]}Yr.exports=yn});var Qr=u((gu,Kr)=>{var Cn=Vr(),Tn=h(),vn=$r();function wn(r){return Tn(r)?vn(r):Cn(r)}Kr.exports=wn});var re=u((bu,Xr)=>{var Sn=Zr(),Rn=h(),Pn=Qr(),An=b();function qn(r){return function(e){e=An(e);var t=Rn(e)?Pn(e):void 0,i=t?t[0]:e.charAt(0),n=t?Sn(t,1).join(""):e.slice(1);return i[r]()+n}}Xr.exports=qn});var te=u((xu,ee)=>{var On=re(),Ln=On("toUpperCase");ee.exports=Ln});var ue=u((hu,ne)=>{var jn=_r(),Mn=te(),Un=jn(function(r,e,t){return r+(t?" ":"")+Mn(e)});ne.exports=Un});var Nn=xe(ue());function ie(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(ie):r}function _n(r,e){return p(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,o;try{n=yield e(...i)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=ie(n),d.result={type:"string",value:n}),o!==void 0&&(d.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function oe(r){return typeof window!="undefined"&&window.addEventListener("message",e=>_n(e,r.run)),S(x({},r),{json:JSON.stringify(kn(r),null,2)})}var Dn=`
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
    `,En=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function kn(r){let{name:e,description:t,author:i,result:n,params:o,about:d,video:s}=r,{icon:a=En}=r;return a==="glide"&&(a=Dn),{name:e,description:t,author:i,result:n,about:d,icon:a,video:s,params:Object.entries(o).map(([f,ae])=>x({name:f},ae))}}function Zn(r){let e=r.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]{10,12})/);return e==null?void 0:e[1]}function In(r){let e=Zn(r);return e===void 0?void 0:`https://i.ytimg.com/vi/${e}/maxresdefault.jpg`}var Wn=r=>p(void 0,null,function*(){if(r.value!==void 0)return In(r.value)}),Tu=oe({name:"YouTube Thumbnail",description:"Display video thumbnail images",author:"David Siegel <david@glideapps.com>",params:{videoUrl:{displayName:"Video URL",type:"uri"}},result:{type:"image-uri"},example:{videoUrl:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},run:Wn,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M47.5 14.4C47.5 14.4 47 11.1 45.6 9.59998C43.8 7.69998 41.7 7.69998 40.8 7.59998C34.1 7.09998 24 7.09998 24 7.09998C24 7.09998 13.9 7.09998 7.2 7.59998C6.3 7.69998 4.2 7.69998 2.4 9.59998C1 11.1 0.5 14.4 0.5 14.4C0.5 14.4 0 18.3 0 22.2V25.8C0 29.7 0.5 33.6 0.5 33.6C0.5 33.6 1 36.9 2.4 38.4C4.2 40.3 6.6 40.3 7.7 40.5C11.5 40.9 24 41 24 41C24 41 34.1 41 40.8 40.5C41.7 40.4 43.8 40.4 45.6 38.5C47 37 47.5 33.7 47.5 33.7C47.5 33.7 48 29.8 48 25.9V22.3C48 18.3 47.5 14.4 47.5 14.4ZM19 30.2V16.7L32 23.5L19 30.2Z" fill="currentColor"/>
</svg>
    `});})();
//# sourceMappingURL=index.js.map