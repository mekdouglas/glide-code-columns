var ot=Object.create;var U=Object.defineProperty,at=Object.defineProperties,ut=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,lt=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ct=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty,ft=Object.prototype.propertyIsEnumerable;var er=(t,r,i)=>r in t?U(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,A=(t,r)=>{for(var i in r||(r={}))rr.call(r,i)&&er(t,i,r[i]);if(Q)for(var i of Q(r))ft.call(r,i)&&er(t,i,r[i]);return t},L=(t,r)=>at(t,st(r)),dt=t=>U(t,"__esModule",{value:!0});var h=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var ht=(t,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let c of lt(r))!rr.call(t,c)&&c!=="default"&&U(t,c,{get:()=>r[c],enumerable:!(i=ut(r,c))||i.enumerable});return t},tr=t=>ht(dt(U(t!=null?ot(ct(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var ir=(t,r,i)=>new Promise((c,d)=>{var m=o=>{try{e(i.next(o))}catch(u){d(u)}},s=o=>{try{e(i.throw(o))}catch(u){d(u)}},e=o=>o.done?c(o.value):Promise.resolve(o.value).then(m,s);e((i=i.apply(t,r)).next())});var or=h((Kn,nr)=>{function mt(t,r,i,c){var d=-1,m=t==null?0:t.length;for(c&&m&&(i=t[++d]);++d<m;)i=r(i,t[d],d,t);return i}nr.exports=mt});var ur=h((Qn,ar)=>{function gt(t){return function(r){return t==null?void 0:t[r]}}ar.exports=gt});var lr=h((ro,sr)=>{var xt=ur(),pt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},wt=xt(pt);sr.exports=wt});var fr=h((eo,cr)=>{var bt=typeof global=="object"&&global&&global.Object===Object&&global;cr.exports=bt});var hr=h((to,dr)=>{var vt=fr(),yt=typeof self=="object"&&self&&self.Object===Object&&self,Tt=vt||yt||Function("return this")();dr.exports=Tt});var E=h((io,mr)=>{var Ct=hr(),Pt=Ct.Symbol;mr.exports=Pt});var xr=h((no,gr)=>{function Rt(t,r){for(var i=-1,c=t==null?0:t.length,d=Array(c);++i<c;)d[i]=r(t[i],i,t);return d}gr.exports=Rt});var wr=h((oo,pr)=>{var St=Array.isArray;pr.exports=St});var Tr=h((ao,yr)=>{var br=E(),vr=Object.prototype,At=vr.hasOwnProperty,Mt=vr.toString,D=br?br.toStringTag:void 0;function kt(t){var r=At.call(t,D),i=t[D];try{t[D]=void 0;var c=!0}catch(m){}var d=Mt.call(t);return c&&(r?t[D]=i:delete t[D]),d}yr.exports=kt});var Pr=h((uo,Cr)=>{var qt=Object.prototype,jt=qt.toString;function Ot(t){return jt.call(t)}Cr.exports=Ot});var Mr=h((so,Ar)=>{var Rr=E(),Nt=Tr(),Vt=Pr(),Dt="[object Null]",zt="[object Undefined]",Sr=Rr?Rr.toStringTag:void 0;function Ut(t){return t==null?t===void 0?zt:Dt:Sr&&Sr in Object(t)?Nt(t):Vt(t)}Ar.exports=Ut});var qr=h((lo,kr)=>{function Lt(t){return t!=null&&typeof t=="object"}kr.exports=Lt});var Or=h((co,jr)=>{var Et=Mr(),It=qr(),_t="[object Symbol]";function Gt(t){return typeof t=="symbol"||It(t)&&Et(t)==_t}jr.exports=Gt});var Lr=h((fo,Ur)=>{var Nr=E(),Ht=xr(),Bt=wr(),Ft=Or(),Wt=1/0,Vr=Nr?Nr.prototype:void 0,Dr=Vr?Vr.toString:void 0;function zr(t){if(typeof t=="string")return t;if(Bt(t))return Ht(t,zr)+"";if(Ft(t))return Dr?Dr.call(t):"";var r=t+"";return r=="0"&&1/t==-Wt?"-0":r}Ur.exports=zr});var I=h((ho,Er)=>{var Zt=Lr();function Xt(t){return t==null?"":Zt(t)}Er.exports=Xt});var _r=h((mo,Ir)=>{var Jt=lr(),Yt=I(),$t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt="\\u0300-\\u036f",Qt="\\ufe20-\\ufe2f",ri="\\u20d0-\\u20ff",ei=Kt+Qt+ri,ti="["+ei+"]",ii=RegExp(ti,"g");function ni(t){return t=Yt(t),t&&t.replace($t,Jt).replace(ii,"")}Ir.exports=ni});var Hr=h((go,Gr)=>{var oi=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ai(t){return t.match(oi)||[]}Gr.exports=ai});var Fr=h((xo,Br)=>{var ui=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function si(t){return ui.test(t)}Br.exports=si});var ce=h((po,le)=>{var Wr="\\ud800-\\udfff",li="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",fi="\\u20d0-\\u20ff",di=li+ci+fi,Zr="\\u2700-\\u27bf",Xr="a-z\\xdf-\\xf6\\xf8-\\xff",hi="\\xac\\xb1\\xd7\\xf7",mi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gi="\\u2000-\\u206f",xi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",pi="\\ufe0e\\ufe0f",Yr=hi+mi+gi+xi,$r="['\u2019]",Kr="["+Yr+"]",wi="["+di+"]",Qr="\\d+",bi="["+Zr+"]",re="["+Xr+"]",ee="[^"+Wr+Yr+Qr+Zr+Xr+Jr+"]",vi="\\ud83c[\\udffb-\\udfff]",yi="(?:"+wi+"|"+vi+")",Ti="[^"+Wr+"]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",j="["+Jr+"]",Ci="\\u200d",ne="(?:"+re+"|"+ee+")",Pi="(?:"+j+"|"+ee+")",oe="(?:"+$r+"(?:d|ll|m|re|s|t|ve))?",ae="(?:"+$r+"(?:D|LL|M|RE|S|T|VE))?",ue=yi+"?",se="["+pi+"]?",Ri="(?:"+Ci+"(?:"+[Ti,te,ie].join("|")+")"+se+ue+")*",Si="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ai="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mi=se+ue+Ri,ki="(?:"+[bi,te,ie].join("|")+")"+Mi,qi=RegExp([j+"?"+re+"+"+oe+"(?="+[Kr,j,"$"].join("|")+")",Pi+"+"+ae+"(?="+[Kr,j+ne,"$"].join("|")+")",j+"?"+ne+"+"+oe,j+"+"+ae,Ai,Si,Qr,ki].join("|"),"g");function ji(t){return t.match(qi)||[]}le.exports=ji});var de=h((wo,fe)=>{var Oi=Hr(),Ni=Fr(),Vi=I(),Di=ce();function zi(t,r,i){return t=Vi(t),r=i?void 0:r,r===void 0?Ni(t)?Di(t):Oi(t):t.match(r)||[]}fe.exports=zi});var me=h((bo,he)=>{var Ui=or(),Li=_r(),Ei=de(),Ii="['\u2019]",_i=RegExp(Ii,"g");function Gi(t){return function(r){return Ui(Ei(Li(r).replace(_i,"")),t,"")}}he.exports=Gi});var xe=h((vo,ge)=>{function Hi(t,r,i){var c=-1,d=t.length;r<0&&(r=-r>d?0:d+r),i=i>d?d:i,i<0&&(i+=d),d=r>i?0:i-r>>>0,r>>>=0;for(var m=Array(d);++c<d;)m[c]=t[c+r];return m}ge.exports=Hi});var we=h((yo,pe)=>{var Bi=xe();function Fi(t,r,i){var c=t.length;return i=i===void 0?c:i,!r&&i>=c?t:Bi(t,r,i)}pe.exports=Fi});var H=h((To,be)=>{var Wi="\\ud800-\\udfff",Zi="\\u0300-\\u036f",Xi="\\ufe20-\\ufe2f",Ji="\\u20d0-\\u20ff",Yi=Zi+Xi+Ji,$i="\\ufe0e\\ufe0f",Ki="\\u200d",Qi=RegExp("["+Ki+Wi+Yi+$i+"]");function rn(t){return Qi.test(t)}be.exports=rn});var ye=h((Co,ve)=>{function en(t){return t.split("")}ve.exports=en});var ke=h((Po,Me)=>{var Te="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",an=tn+nn+on,un="\\ufe0e\\ufe0f",sn="["+Te+"]",B="["+an+"]",F="\\ud83c[\\udffb-\\udfff]",ln="(?:"+B+"|"+F+")",Ce="[^"+Te+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",cn="\\u200d",Se=ln+"?",Ae="["+un+"]?",fn="(?:"+cn+"(?:"+[Ce,Pe,Re].join("|")+")"+Ae+Se+")*",dn=Ae+Se+fn,hn="(?:"+[Ce+B+"?",B,Pe,Re,sn].join("|")+")",mn=RegExp(F+"(?="+F+")|"+hn+dn,"g");function gn(t){return t.match(mn)||[]}Me.exports=gn});var je=h((Ro,qe)=>{var xn=ye(),pn=H(),wn=ke();function bn(t){return pn(t)?wn(t):xn(t)}qe.exports=bn});var Ne=h((So,Oe)=>{var vn=we(),yn=H(),Tn=je(),Cn=I();function Pn(t){return function(r){r=Cn(r);var i=yn(r)?Tn(r):void 0,c=i?i[0]:r.charAt(0),d=i?vn(i,1).join(""):r.slice(1);return c[t]()+d}}Oe.exports=Pn});var De=h((Ao,Ve)=>{var Rn=Ne(),Sn=Rn("toUpperCase");Ve.exports=Sn});var Ue=h((Mo,ze)=>{var An=me(),Mn=De(),kn=An(function(t,r,i){return t+(i?" ":"")+Mn(r)});ze.exports=kn});var Ge=h((_e,Z)=>{(function(t,r,i){function c(e){var o=this,u=s();o.next=function(){var n=2091639*o.s0+o.c*23283064365386963e-26;return o.s0=o.s1,o.s1=o.s2,o.s2=n-(o.c=n|0)},o.c=1,o.s0=u(" "),o.s1=u(" "),o.s2=u(" "),o.s0-=u(e),o.s0<0&&(o.s0+=1),o.s1-=u(e),o.s1<0&&(o.s1+=1),o.s2-=u(e),o.s2<0&&(o.s2+=1),u=null}function d(e,o){return o.c=e.c,o.s0=e.s0,o.s1=e.s1,o.s2=e.s2,o}function m(e,o){var u=new c(e),n=o&&o.state,a=u.next;return a.int32=function(){return u.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,n&&(typeof n=="object"&&d(n,u),a.state=function(){return d(u,{})}),a}function s(){var e=4022871197,o=function(u){u=String(u);for(var n=0;n<u.length;n++){e+=u.charCodeAt(n);var a=.02519603282416938*e;e=a>>>0,a-=e,a*=e,e=a>>>0,a-=e,e+=a*4294967296}return(e>>>0)*23283064365386963e-26};return o}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.alea=m})(_e,typeof Z=="object"&&Z,typeof define=="function"&&define)});var Be=h((He,X)=>{(function(t,r,i){function c(s){var e=this,o="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var n=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^n^n>>>8},s===(s|0)?e.x=s:o+=s;for(var u=0;u<o.length+64;u++)e.x^=o.charCodeAt(u)|0,e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function m(s,e){var o=new c(s),u=e&&e.state,n=function(){return(o.next()>>>0)/4294967296};return n.double=function(){do var a=o.next()>>>11,l=(o.next()>>>0)/4294967296,f=(a+l)/(1<<21);while(f===0);return f},n.int32=o.next,n.quick=n,u&&(typeof u=="object"&&d(u,o),n.state=function(){return d(o,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xor128=m})(He,typeof X=="object"&&X,typeof define=="function"&&define)});var We=h((Fe,J)=>{(function(t,r,i){function c(s){var e=this,o="";e.next=function(){var n=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(n^n<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:o+=s;for(var u=0;u<o.length+64;u++)e.x^=o.charCodeAt(u)|0,u==o.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function d(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function m(s,e){var o=new c(s),u=e&&e.state,n=function(){return(o.next()>>>0)/4294967296};return n.double=function(){do var a=o.next()>>>11,l=(o.next()>>>0)/4294967296,f=(a+l)/(1<<21);while(f===0);return f},n.int32=o.next,n.quick=n,u&&(typeof u=="object"&&d(u,o),n.state=function(){return d(o,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xorwow=m})(Fe,typeof J=="object"&&J,typeof define=="function"&&define)});var Xe=h((Ze,Y)=>{(function(t,r,i){function c(s){var e=this;e.next=function(){var u=e.x,n=e.i,a,l,f;return a=u[n],a^=a>>>7,l=a^a<<24,a=u[n+1&7],l^=a^a>>>10,a=u[n+3&7],l^=a^a>>>3,a=u[n+4&7],l^=a^a<<7,a=u[n+7&7],a=a^a<<13,l^=a^a<<9,u[n]=l,e.i=n+1&7,l};function o(u,n){var a,l,f=[];if(n===(n|0))l=f[0]=n;else for(n=""+n,a=0;a<n.length;++a)f[a&7]=f[a&7]<<15^n.charCodeAt(a)+f[a+1&7]<<13;for(;f.length<8;)f.push(0);for(a=0;a<8&&f[a]===0;++a);for(a==8?l=f[7]=-1:l=f[a],u.x=f,u.i=0,a=256;a>0;--a)u.next()}o(e,s)}function d(s,e){return e.x=s.x.slice(),e.i=s.i,e}function m(s,e){s==null&&(s=+new Date);var o=new c(s),u=e&&e.state,n=function(){return(o.next()>>>0)/4294967296};return n.double=function(){do var a=o.next()>>>11,l=(o.next()>>>0)/4294967296,f=(a+l)/(1<<21);while(f===0);return f},n.int32=o.next,n.quick=n,u&&(u.x&&d(u,o),n.state=function(){return d(o,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xorshift7=m})(Ze,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Ye=h((Je,$)=>{(function(t,r,i){function c(s){var e=this;e.next=function(){var u=e.w,n=e.X,a=e.i,l,f;return e.w=u=u+1640531527|0,f=n[a+34&127],l=n[a=a+1&127],f^=f<<13,l^=l<<17,f^=f>>>15,l^=l>>>12,f=n[a]=f^l,e.i=a,f+(u^u>>>16)|0};function o(u,n){var a,l,f,v,M,P=[],O=128;for(n===(n|0)?(l=n,n=null):(n=n+"\0",l=0,O=Math.max(O,n.length)),f=0,v=-32;v<O;++v)n&&(l^=n.charCodeAt((v+32)%n.length)),v===0&&(M=l),l^=l<<10,l^=l>>>15,l^=l<<4,l^=l>>>13,v>=0&&(M=M+1640531527|0,a=P[v&127]^=l+M,f=a==0?f+1:0);for(f>=128&&(P[(n&&n.length||0)&127]=-1),f=127,v=4*128;v>0;--v)l=P[f+34&127],a=P[f=f+1&127],l^=l<<13,a^=a<<17,l^=l>>>15,a^=a>>>12,P[f]=l^a;u.w=M,u.X=P,u.i=f}o(e,s)}function d(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function m(s,e){s==null&&(s=+new Date);var o=new c(s),u=e&&e.state,n=function(){return(o.next()>>>0)/4294967296};return n.double=function(){do var a=o.next()>>>11,l=(o.next()>>>0)/4294967296,f=(a+l)/(1<<21);while(f===0);return f},n.int32=o.next,n.quick=n,u&&(u.X&&d(u,o),n.state=function(){return d(o,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xor4096=m})(Je,typeof $=="object"&&$,typeof define=="function"&&define)});var Ke=h(($e,K)=>{(function(t,r,i){function c(s){var e=this,o="";e.next=function(){var n=e.b,a=e.c,l=e.d,f=e.a;return n=n<<25^n>>>7^a,a=a-l|0,l=l<<24^l>>>8^f,f=f-n|0,e.b=n=n<<20^n>>>12^a,e.c=a=a-l|0,e.d=l<<16^a>>>16^f,e.a=f-n|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):o+=s;for(var u=0;u<o.length+20;u++)e.b^=o.charCodeAt(u)|0,e.next()}function d(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function m(s,e){var o=new c(s),u=e&&e.state,n=function(){return(o.next()>>>0)/4294967296};return n.double=function(){do var a=o.next()>>>11,l=(o.next()>>>0)/4294967296,f=(a+l)/(1<<21);while(f===0);return f},n.int32=o.next,n.quick=n,u&&(typeof u=="object"&&d(u,o),n.state=function(){return d(o,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.tychei=m})($e,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=h(()=>{});var et=h((rt,G)=>{(function(t,r,i){var c=256,d=6,m=52,s="random",e=i.pow(c,d),o=i.pow(2,m),u=o*2,n=c-1,a;function l(g,x,b){var w=[];x=x==!0?{entropy:!0}:x||{};var p=P(M(x.entropy?[g,N(r)]:g??O(),3),w),y=new f(w),C=function(){for(var T=y.g(d),S=e,R=0;T<o;)T=(T+R)*c,S*=c,R=y.g(1);for(;T>=u;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return y.g(4)|0},C.quick=function(){return y.g(4)/4294967296},C.double=C,P(N(y.S),r),(x.pass||b||function(T,S,R,k){return k&&(k.S&&v(k,y),T.state=function(){return v(y,{})}),R?(i[s]=T,S):T})(C,p,"global"in x?x.global:this==i,x.state)}function f(g){var x,b=g.length,w=this,p=0,y=w.i=w.j=0,C=w.S=[];for(b||(g=[b++]);p<c;)C[p]=p++;for(p=0;p<c;p++)C[p]=C[y=n&y+g[p%b]+(x=C[p])],C[y]=x;(w.g=function(T){for(var S,R=0,k=w.i,z=w.j,V=w.S;T--;)S=V[k=n&k+1],R=R*c+V[n&(V[k]=V[z=n&z+S])+(V[z]=S)];return w.i=k,w.j=z,R})(c)}function v(g,x){return x.i=g.i,x.j=g.j,x.S=g.S.slice(),x}function M(g,x){var b=[],w=typeof g,p;if(x&&w=="object")for(p in g)try{b.push(M(g[p],x-1))}catch(y){}return b.length?b:w=="string"?g:g+"\0"}function P(g,x){for(var b=g+"",w,p=0;p<b.length;)x[n&p]=n&(w^=x[n&p]*19)+b.charCodeAt(p++);return N(x)}function O(){try{var g;return a&&(g=a.randomBytes)?g=g(c):(g=new Uint8Array(c),(t.crypto||t.msCrypto).getRandomValues(g)),N(g)}catch(w){var x=t.navigator,b=x&&x.plugins;return[+new Date,t,b,t.screen,N(r)]}}function N(g){return String.fromCharCode.apply(0,g)}if(P(i.random(),r),typeof G=="object"&&G.exports){G.exports=l;try{a=Qe()}catch(g){}}else typeof define=="function"&&define.amd?define(function(){return l}):i["seed"+s]=l})(typeof self!="undefined"?self:rt,[],Math)});var it=h((Vo,tt)=>{var Fn=Ge(),Wn=Be(),Zn=We(),Xn=Xe(),Jn=Ye(),Yn=Ke(),q=et();q.alea=Fn;q.xor128=Wn;q.xorwow=Zn;q.xorshift7=Xn;q.xor4096=Jn;q.tychei=Yn;tt.exports=q});var Ee=tr(Ue());var qn=`
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
    `,jn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,On=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Le=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Dn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Ln=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,_n={Glide:qn,"Machine Learning":En,General:Le,Array:Nn,Number:On,Encoding:In,Text:Ln,"Data & APIs":Un,Image:Vn,Fun:Dn,"Date & Time":zn,Code:jn};function W({icon:t,category:r}){var i;return(i=t!=null?t:_n[r])!=null?i:Le}function Gn(t){return L(A({},t),{json:JSON.stringify(Hn(t),null,2)})}function Hn(t){let{name:r,category:i,released:c,description:d,author:m,result:s,params:e,about:o,video:u}=t,n=W(t);return{name:r,category:i,released:c,description:d,author:m,result:s,about:o,icon:n,video:u,params:Object.entries(e).map(([a,l])=>A({name:a},l))}}var Bn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return ir(this,null,function*(){})}},_=class{constructor(r={},i=[]){this.definition=A(A({},Bn),r),this.requiredParams=[...i]}with(r,i=[]){return new _(A(A({},this.definition),r),[...this.requiredParams,...i])}withName(r){return this.with({name:r})}withCategory(r){let{icon:i}=this.definition;return this.with({category:r,icon:W({icon:i,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,i){return this.with({author:`${r} <${i}>`})}withTest(r,i){let{tests:c=[]}=this.definition;return this.with({tests:[...c,{params:r,expectedResult:i}]})}withFailingTest(r,i){let{tests:c=[]}=this.definition;return this.with({tests:[...c,{params:r,expectedResult:i,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,i,c){return c===void 0&&(c=(0,Ee.default)(i)),this.with({params:L(A({},this.definition.params),{[i]:{type:r,displayName:c}})})}withRequiredParam(r,i,c){return this.withParam(r,i,c).with({},[i])}withPrimitiveParam(r,i){return this.withParam("primitive",r,i)}withBooleanParam(r,i){return this.withParam("boolean",r,i)}withStringParam(r,i){return this.withParam("string",r,i)}withDateParam(r,i){return this.withParam("date-time",r,i)}withNumberParam(r,i){return this.withParam("number",r,i)}withRequiredPrimitiveParam(r,i){return this.withRequiredParam("primitive",r,i)}withRequiredBooleanParam(r,i){return this.withRequiredParam("boolean",r,i)}withRequiredStringParam(r,i){return this.withRequiredParam("string",r,i)}withRequiredDateParam(r,i){return this.withRequiredParam("date-time",r,i)}withRequiredNumberParam(r,i){return this.withRequiredParam("number",r,i)}withStringArrayParam(r,i){return this.withParam({kind:"array",items:"string"},r,i)}withRequiredStringArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"string"},r,i)}withNumberArrayParam(r,i){return this.withParam({kind:"array",items:"number"},r,i)}withPrimitiveArrayParam(r,i){return this.withParam({kind:"array",items:"primitive"},r,i)}withRequiredPrimitiveArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"primitive"},r,i)}withExample(r){return this.with({example:r})}run(r){let{params:i}=this.definition,c=this.requiredParams,d=Object.keys(i);function m(...s){let e={};if(s.forEach(({value:o},u)=>{e[d[u]]=o}),!c.some(o=>e[o]===void 0))return r(e)}return Gn(L(A({},this.definition),{run:m}))}};function Ie(t){return new _({name:t})}var nt=tr(it()),zo=Ie("Random Number").withCategory("Number").withReleased("direct").withDescription("Turn any value into a stable random number.").withAuthor("davidbau","github.com/davidbau/seedrandom").withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ").withRequiredPrimitiveParam("seed").withNumberResult().withTest({seed:"Glide"},.3711851882348728).run(({seed:t})=>(0,nt.default)(t)());export{zo as default};
//# sourceMappingURL=function.js.map