var dr=Object.create;var c=Object.defineProperty,lr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,cr=Object.getOwnPropertyDescriptors,fr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,pr=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable;var P=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,h=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&P(e,t,r[t]);if(w)for(var t of w(r))gr.call(r,t)&&P(e,t,r[t]);return e},R=(e,r)=>lr(e,cr(r)),br=e=>c(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var hr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of fr(r))!v.call(e,n)&&n!=="default"&&c(e,n,{get:()=>r[n],enumerable:!(t=mr(r,n))||t.enumerable});return e},xr=e=>hr(br(c(e!=null?dr(pr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var x=(e,r,t)=>new Promise((n,u)=>{var a=o=>{try{d(t.next(o))}catch(l){u(l)}},g=o=>{try{d(t.throw(o))}catch(l){u(l)}},d=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,g);d((t=t.apply(e,r)).next())});var A=i((Zi,S)=>{function yr(e,r,t,n){var u=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}S.exports=yr});var O=i((Vi,q)=>{function Tr(e){return function(r){return e==null?void 0:e[r]}}q.exports=Tr});var M=i((zi,L)=>{var Cr=O(),wr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},vr=Cr(wr);L.exports=vr});var N=i((Gi,j)=>{var Pr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Pr});var k=i((Wi,U)=>{var Rr=N(),Sr=typeof self=="object"&&self&&self.Object===Object&&self,Ar=Rr||Sr||Function("return this")();U.exports=Ar});var f=i((Hi,D)=>{var qr=k(),Or=qr.Symbol;D.exports=Or});var E=i((Fi,_)=>{function Lr(e,r){for(var t=-1,n=e==null?0:e.length,u=Array(n);++t<n;)u[t]=r(e[t],t,e);return u}_.exports=Lr});var Z=i((Ji,I)=>{var Mr=Array.isArray;I.exports=Mr});var W=i((Bi,G)=>{var V=f(),z=Object.prototype,jr=z.hasOwnProperty,Nr=z.toString,m=V?V.toStringTag:void 0;function Ur(e){var r=jr.call(e,m),t=e[m];try{e[m]=void 0;var n=!0}catch(a){}var u=Nr.call(e);return n&&(r?e[m]=t:delete e[m]),u}G.exports=Ur});var F=i(($i,H)=>{var kr=Object.prototype,Dr=kr.toString;function _r(e){return Dr.call(e)}H.exports=_r});var Y=i((Yi,$)=>{var J=f(),Er=W(),Ir=F(),Zr="[object Null]",Vr="[object Undefined]",B=J?J.toStringTag:void 0;function zr(e){return e==null?e===void 0?Vr:Zr:B&&B in Object(e)?Er(e):Ir(e)}$.exports=zr});var Q=i((Ki,K)=>{function Gr(e){return e!=null&&typeof e=="object"}K.exports=Gr});var ee=i((Qi,X)=>{var Wr=Y(),Hr=Q(),Fr="[object Symbol]";function Jr(e){return typeof e=="symbol"||Hr(e)&&Wr(e)==Fr}X.exports=Jr});var ae=i((Xi,ue)=>{var re=f(),Br=E(),$r=Z(),Yr=ee(),Kr=1/0,te=re?re.prototype:void 0,ie=te?te.toString:void 0;function ne(e){if(typeof e=="string")return e;if($r(e))return Br(e,ne)+"";if(Yr(e))return ie?ie.call(e):"";var r=e+"";return r=="0"&&1/e==-Kr?"-0":r}ue.exports=ne});var p=i((en,oe)=>{var Qr=ae();function Xr(e){return e==null?"":Qr(e)}oe.exports=Xr});var de=i((rn,se)=>{var et=M(),rt=p(),tt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",ut="\\u20d0-\\u20ff",at=it+nt+ut,ot="["+at+"]",st=RegExp(ot,"g");function dt(e){return e=rt(e),e&&e.replace(tt,et).replace(st,"")}se.exports=dt});var me=i((tn,le)=>{var lt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(e){return e.match(lt)||[]}le.exports=mt});var fe=i((nn,ce)=>{var ct=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ft(e){return ct.test(e)}ce.exports=ft});var je=i((un,Me)=>{var pe="\\ud800-\\udfff",pt="\\u0300-\\u036f",gt="\\ufe20-\\ufe2f",bt="\\u20d0-\\u20ff",ht=pt+gt+bt,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",xt="\\xac\\xb1\\xd7\\xf7",yt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Tt="\\u2000-\\u206f",Ct=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",he="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\ufe0e\\ufe0f",xe=xt+yt+Tt+Ct,ye="['\u2019]",Te="["+xe+"]",vt="["+ht+"]",Ce="\\d+",Pt="["+ge+"]",we="["+be+"]",ve="[^"+pe+xe+Ce+ge+be+he+"]",Rt="\\ud83c[\\udffb-\\udfff]",St="(?:"+vt+"|"+Rt+")",At="[^"+pe+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+he+"]",qt="\\u200d",Se="(?:"+we+"|"+ve+")",Ot="(?:"+s+"|"+ve+")",Ae="(?:"+ye+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+ye+"(?:D|LL|M|RE|S|T|VE))?",Oe=St+"?",Le="["+wt+"]?",Lt="(?:"+qt+"(?:"+[At,Pe,Re].join("|")+")"+Le+Oe+")*",Mt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Nt=Le+Oe+Lt,Ut="(?:"+[Pt,Pe,Re].join("|")+")"+Nt,kt=RegExp([s+"?"+we+"+"+Ae+"(?="+[Te,s,"$"].join("|")+")",Ot+"+"+qe+"(?="+[Te,s+Se,"$"].join("|")+")",s+"?"+Se+"+"+Ae,s+"+"+qe,jt,Mt,Ce,Ut].join("|"),"g");function Dt(e){return e.match(kt)||[]}Me.exports=Dt});var Ue=i((an,Ne)=>{var _t=me(),Et=fe(),It=p(),Zt=je();function Vt(e,r,t){return e=It(e),r=t?void 0:r,r===void 0?Et(e)?Zt(e):_t(e):e.match(r)||[]}Ne.exports=Vt});var De=i((on,ke)=>{var zt=A(),Gt=de(),Wt=Ue(),Ht="['\u2019]",Ft=RegExp(Ht,"g");function Jt(e){return function(r){return zt(Wt(Gt(r).replace(Ft,"")),e,"")}}ke.exports=Jt});var Ee=i((sn,_e)=>{function Bt(e,r,t){var n=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++n<u;)a[n]=e[n+r];return a}_e.exports=Bt});var Ze=i((dn,Ie)=>{var $t=Ee();function Yt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:$t(e,r,t)}Ie.exports=Yt});var y=i((ln,Ve)=>{var Kt="\\ud800-\\udfff",Qt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",ei="\\u20d0-\\u20ff",ri=Qt+Xt+ei,ti="\\ufe0e\\ufe0f",ii="\\u200d",ni=RegExp("["+ii+Kt+ri+ti+"]");function ui(e){return ni.test(e)}Ve.exports=ui});var Ge=i((mn,ze)=>{function ai(e){return e.split("")}ze.exports=ai});var Ke=i((cn,Ye)=>{var We="\\ud800-\\udfff",oi="\\u0300-\\u036f",si="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",li=oi+si+di,mi="\\ufe0e\\ufe0f",ci="["+We+"]",T="["+li+"]",C="\\ud83c[\\udffb-\\udfff]",fi="(?:"+T+"|"+C+")",He="[^"+We+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="\\u200d",Be=fi+"?",$e="["+mi+"]?",gi="(?:"+pi+"(?:"+[He,Fe,Je].join("|")+")"+$e+Be+")*",bi=$e+Be+gi,hi="(?:"+[He+T+"?",T,Fe,Je,ci].join("|")+")",xi=RegExp(C+"(?="+C+")|"+hi+bi,"g");function yi(e){return e.match(xi)||[]}Ye.exports=yi});var Xe=i((fn,Qe)=>{var Ti=Ge(),Ci=y(),wi=Ke();function vi(e){return Ci(e)?wi(e):Ti(e)}Qe.exports=vi});var rr=i((pn,er)=>{var Pi=Ze(),Ri=y(),Si=Xe(),Ai=p();function qi(e){return function(r){r=Ai(r);var t=Ri(r)?Si(r):void 0,n=t?t[0]:r.charAt(0),u=t?Pi(t,1).join(""):r.slice(1);return n[e]()+u}}er.exports=qi});var ir=i((gn,tr)=>{var Oi=rr(),Li=Oi("toUpperCase");tr.exports=Li});var ur=i((bn,nr)=>{var Mi=De(),ji=ir(),Ni=Mi(function(e,r,t){return e+(t?" ":"")+ji(r)});nr.exports=Ni});var Ui=xr(ur());function ar(e){return R(h({},e),{json:JSON.stringify(_i(e),null,2)})}var ki=`
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
    `,Di=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function _i(e){let{name:r,category:t,released:n,description:u,author:a,result:g,params:d,about:o,video:l}=e,{icon:b=Di}=e;return b==="glide"&&(b=ki),{name:r,category:t,released:n,description:u,author:a,result:g,about:o,icon:b,video:l,params:Object.entries(d).map(([or,sr])=>h({name:or},sr))}}var Ei=(e,r,t)=>x(void 0,null,function*(){let{value:n=600}=e,{value:u="1"}=t,{value:a=""}=r;return a==="random"&&(a=""),`https://doodleipsum.com/${n}/${a}?n=${encodeURIComponent(u)}`}),yn=ar({name:"Doodle Ipsum",category:"Image",description:"Generate random illustrations from data",video:"https://www.youtube.com/watch?v=kvUU1N-B_Ok",about:`
      [Doodle Ipsum](https://doodleipsum.com) is the *lorem ipsum* of illustrations. Learn more at [doodleipsum.com](https://doodleipsum.com).
    `,author:"David Siegel <david@glideapps.com>",params:{size:{displayName:"Size",type:"number"},category:{displayName:"Category (random|flat|hand-drawn|outline|abstract|avatar)",type:"string"},random:{displayName:"Random Seed",type:"primitive"}},example:{size:200,category:"avatar",random:42},result:{type:"image-uri"},run:Ei,icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M37 26C42.5228 26 47 21.5228 47 16C47 10.4772 42.5228 6 37 6C31.4772 6 27 10.4772 27 16C27 21.5228 31.4772 26 37 26Z" fill="currentColor"/>
        <path d="M27 27H11C10.4477 27 10 27.4477 10 28V44C10 44.5523 10.4477 45 11 45H27C27.5523 45 28 44.5523 28 44V28C28 27.4477 27.5523 27 27 27Z" fill="currentColor"/>
        <path d="M3.99981 21H21.9998C22.1768 21 22.3506 20.9529 22.5035 20.8638C22.6564 20.7746 22.7829 20.6464 22.87 20.4923C22.9572 20.3383 23.0019 20.1639 22.9995 19.9869C22.9972 19.8099 22.948 19.6367 22.8568 19.485L13.8568 4.48498C13.7612 4.34597 13.6333 4.23229 13.484 4.15375C13.3347 4.07522 13.1685 4.03418 12.9998 4.03418C12.8311 4.03418 12.6649 4.07522 12.5156 4.15375C12.3663 4.23229 12.2384 4.34597 12.1428 4.48498L3.14281 19.485C3.05166 19.6367 3.00241 19.8099 3.00009 19.9869C2.99777 20.1639 3.04246 20.3383 3.12961 20.4923C3.21675 20.6464 3.34323 20.7746 3.49611 20.8638C3.649 20.9529 3.82281 21 3.99981 21Z" fill="currentColor"/>
      </svg>
    `});export{yn as default};
//# sourceMappingURL=function.js.map