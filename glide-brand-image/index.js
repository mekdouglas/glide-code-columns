(()=>{var lr=Object.create;var g=Object.defineProperty,mr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,br=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,xr=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable;var w=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))S.call(r,t)&&w(e,t,r[t]);if(v)for(var t of v(r))hr.call(r,t)&&w(e,t,r[t]);return e},R=(e,r)=>mr(e,gr(r)),yr=e=>g(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Tr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of br(r))!S.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=pr(r,i))||t.enumerable});return e},Cr=e=>Tr(yr(g(e!=null?lr(xr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var d=(e,r,t)=>new Promise((i,n)=>{var a=o=>{try{c(t.next(o))}catch(f){n(f)}},s=o=>{try{c(t.throw(o))}catch(f){n(f)}},c=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,s);c((t=t.apply(e,r)).next())});var O=u((Bn,q)=>{function vr(e,r,t,i){var n=-1,a=e==null?0:e.length;for(i&&a&&(t=e[++n]);++n<a;)t=r(t,e[n],n,e);return t}q.exports=vr});var L=u(($n,j)=>{function Sr(e){return function(r){return e==null?void 0:e[r]}}j.exports=Sr});var D=u((Yn,M)=>{var wr=L(),Rr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pr=wr(Rr);M.exports=Pr});var U=u((Kn,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var E=u((Xn,_)=>{var qr=U(),Or=typeof self=="object"&&self&&self.Object===Object&&self,jr=qr||Or||Function("return this")();_.exports=jr});var b=u((Qn,I)=>{var Lr=E(),Mr=Lr.Symbol;I.exports=Mr});var Z=u((ei,W)=>{function Dr(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}W.exports=Dr});var G=u((ri,k)=>{var Nr=Array.isArray;k.exports=Nr});var H=u((ti,F)=>{var V=b(),z=Object.prototype,Ur=z.hasOwnProperty,_r=z.toString,p=V?V.toStringTag:void 0;function Er(e){var r=Ur.call(e,p),t=e[p];try{e[p]=void 0;var i=!0}catch(a){}var n=_r.call(e);return i&&(r?e[p]=t:delete e[p]),n}F.exports=Er});var B=u((ni,J)=>{var Ir=Object.prototype,Wr=Ir.toString;function Zr(e){return Wr.call(e)}J.exports=Zr});var X=u((ii,K)=>{var $=b(),kr=H(),Gr=B(),Vr="[object Null]",zr="[object Undefined]",Y=$?$.toStringTag:void 0;function Fr(e){return e==null?e===void 0?zr:Vr:Y&&Y in Object(e)?kr(e):Gr(e)}K.exports=Fr});var ee=u((ui,Q)=>{function Hr(e){return e!=null&&typeof e=="object"}Q.exports=Hr});var te=u((ai,re)=>{var Jr=X(),Br=ee(),$r="[object Symbol]";function Yr(e){return typeof e=="symbol"||Br(e)&&Jr(e)==$r}re.exports=Yr});var se=u((oi,oe)=>{var ne=b(),Kr=Z(),Xr=G(),Qr=te(),et=1/0,ie=ne?ne.prototype:void 0,ue=ie?ie.toString:void 0;function ae(e){if(typeof e=="string")return e;if(Xr(e))return Kr(e,ae)+"";if(Qr(e))return ue?ue.call(e):"";var r=e+"";return r=="0"&&1/e==-et?"-0":r}oe.exports=ae});var x=u((si,ce)=>{var rt=se();function tt(e){return e==null?"":rt(e)}ce.exports=tt});var fe=u((ci,de)=>{var nt=D(),it=x(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ct=at+ot+st,dt="["+ct+"]",ft=RegExp(dt,"g");function lt(e){return e=it(e),e&&e.replace(ut,nt).replace(ft,"")}de.exports=lt});var me=u((di,le)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(mt)||[]}le.exports=pt});var ge=u((fi,pe)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function bt(e){return gt.test(e)}pe.exports=bt});var Ne=u((li,De)=>{var be="\\ud800-\\udfff",xt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Tt=xt+ht+yt,xe="\\u2700-\\u27bf",he="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ye="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",Te=Ct+vt+St+wt,Ce="['\u2019]",ve="["+Te+"]",Pt="["+Tt+"]",Se="\\d+",At="["+xe+"]",we="["+he+"]",Re="[^"+be+Te+Se+xe+he+ye+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",jt="[^"+be+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ye+"]",Lt="\\u200d",qe="(?:"+we+"|"+Re+")",Mt="(?:"+m+"|"+Re+")",Oe="(?:"+Ce+"(?:d|ll|m|re|s|t|ve))?",je="(?:"+Ce+"(?:D|LL|M|RE|S|T|VE))?",Le=Ot+"?",Me="["+Rt+"]?",Dt="(?:"+Lt+"(?:"+[jt,Pe,Ae].join("|")+")"+Me+Le+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Me+Le+Dt,Et="(?:"+[At,Pe,Ae].join("|")+")"+_t,It=RegExp([m+"?"+we+"+"+Oe+"(?="+[ve,m,"$"].join("|")+")",Mt+"+"+je+"(?="+[ve,m+qe,"$"].join("|")+")",m+"?"+qe+"+"+Oe,m+"+"+je,Ut,Nt,Se,Et].join("|"),"g");function Wt(e){return e.match(It)||[]}De.exports=Wt});var _e=u((mi,Ue)=>{var Zt=me(),kt=ge(),Gt=x(),Vt=Ne();function zt(e,r,t){return e=Gt(e),r=t?void 0:r,r===void 0?kt(e)?Vt(e):Zt(e):e.match(r)||[]}Ue.exports=zt});var Ie=u((pi,Ee)=>{var Ft=O(),Ht=fe(),Jt=_e(),Bt="['\u2019]",$t=RegExp(Bt,"g");function Yt(e){return function(r){return Ft(Jt(Ht(r).replace($t,"")),e,"")}}Ee.exports=Yt});var Ze=u((gi,We)=>{function Kt(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+r];return a}We.exports=Kt});var Ge=u((bi,ke)=>{var Xt=Ze();function Qt(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Xt(e,r,t)}ke.exports=Qt});var y=u((xi,Ve)=>{var en="\\ud800-\\udfff",rn="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",un=rn+tn+nn,an="\\ufe0e\\ufe0f",on="\\u200d",sn=RegExp("["+on+en+un+an+"]");function cn(e){return sn.test(e)}Ve.exports=cn});var Fe=u((hi,ze)=>{function dn(e){return e.split("")}ze.exports=dn});var Qe=u((yi,Xe)=>{var He="\\ud800-\\udfff",fn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",pn=fn+ln+mn,gn="\\ufe0e\\ufe0f",bn="["+He+"]",T="["+pn+"]",C="\\ud83c[\\udffb-\\udfff]",xn="(?:"+T+"|"+C+")",Je="[^"+He+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",hn="\\u200d",Ye=xn+"?",Ke="["+gn+"]?",yn="(?:"+hn+"(?:"+[Je,Be,$e].join("|")+")"+Ke+Ye+")*",Tn=Ke+Ye+yn,Cn="(?:"+[Je+T+"?",T,Be,$e,bn].join("|")+")",vn=RegExp(C+"(?="+C+")|"+Cn+Tn,"g");function Sn(e){return e.match(vn)||[]}Xe.exports=Sn});var rr=u((Ti,er)=>{var wn=Fe(),Rn=y(),Pn=Qe();function An(e){return Rn(e)?Pn(e):wn(e)}er.exports=An});var nr=u((Ci,tr)=>{var qn=Ge(),On=y(),jn=rr(),Ln=x();function Mn(e){return function(r){r=Ln(r);var t=On(r)?jn(r):void 0,i=t?t[0]:r.charAt(0),n=t?qn(t,1).join(""):r.slice(1);return i[e]()+n}}tr.exports=Mn});var ur=u((vi,ir)=>{var Dn=nr(),Nn=Dn("toUpperCase");ir.exports=Nn});var or=u((Si,ar)=>{var Un=Ie(),_n=ur(),En=Un(function(e,r,t){return e+(t?" ":"")+_n(r)});ar.exports=En});var P={timeoutSeconds:5*60};function A(e){return(new Date().getTime()-e.getTime())/1e3}var h=class{constructor(r=P){this.cache=new Map;this.props=l(l({},r),P)}get(r){return d(this,null,function*(){var n;let{timestamp:t,item:i}=(n=this.cache.get(r))!=null?n:{timestamp:new Date(0)};if(A(t)<this.props.timeoutSeconds)return i;this.cache.delete(r)})}getWith(r,t){return d(this,null,function*(){var a;let{timestamp:i,item:n}=(a=this.cache.get(r))!=null?a:{timestamp:new Date(0)};if(A(i)<this.props.timeoutSeconds)return n;{let s=yield t(r);return this.set(r,s),s}})}set(r,t){return this.cache.set(r,{timestamp:new Date,item:t})}fetch(i){return d(this,arguments,function*(r,t=r){return yield this.getWith(t,()=>fetch(r).then(n=>n.json()))})}};var In=Cr(or());function sr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(sr):e}function Wn(e,r){return d(this,null,function*(){var c;let{data:{key:t,params:i}}=e,n,a;try{n=yield r(...i)}catch(o){n=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let s={key:t};n!==void 0&&(n=sr(n),s.result={type:"string",value:n}),a!==void 0&&(s.error=a),((c=e.source)==null?void 0:c.postMessage).call(c,s,"*")})}function cr(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Wn(r,e.run)),R(l({},e),{json:JSON.stringify(Gn(e),null,2)})}var Zn=`
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
    `,kn=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gn(e){let{name:r,description:t,author:i,result:n,params:a,about:s,video:c}=e,{icon:o=kn}=e;return o==="glide"&&(o=Zn),{name:r,description:t,author:i,result:n,about:s,icon:o,video:c,params:Object.entries(a).map(([f,fr])=>l({name:f},fr))}}function Vn(e){let r=`${e}`,t=0;if(r.length===0)return t;for(let i=0;i<r.length;i++){let n=r.charCodeAt(i);t=(t<<5)-t+n,t=t&t}return t}var dr="3d",zn=new h({timeoutSeconds:Number.MAX_SAFE_INTEGER}),Fn=(e,r)=>d(void 0,null,function*(){var o;let{value:t=dr}=e,{value:i}=r;if(i===void 0)return;let n=yield zn.fetch("/glide-brand-image/images.json"),a=(o=n[t])!=null?o:n[dr],s=Math.abs(Vn(i));return`https://column.sh${a[s%a.length]}`}),Ai=cr({name:"Glide Brand Image",description:"Glide 3D Data Shapes",author:"David Siegel <david@glideapps.com>",params:{category:{displayName:"Category (3d, avatar, or gradient)",type:"string"},random:{displayName:"Seed Value",type:"string"}},example:{category:"3d",random:"glideapps.com"},result:{type:"image-uri"},run:Fn,icon:"glide"});})();
//# sourceMappingURL=index.js.map
