(()=>{var ot=Object.create;var U=Object.defineProperty,ut=Object.defineProperties,st=Object.getOwnPropertyDescriptor,lt=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertyNames,rr=Object.getOwnPropertySymbols,ft=Object.getPrototypeOf,er=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var tr=(t,r,i)=>r in t?U(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,q=(t,r)=>{for(var i in r||(r={}))er.call(r,i)&&tr(t,i,r[i]);if(rr)for(var i of rr(r))dt.call(r,i)&&tr(t,i,r[i]);return t},L=(t,r)=>ut(t,lt(r)),ht=t=>U(t,"__esModule",{value:!0});var m=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var mt=(t,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let l of ct(r))!er.call(t,l)&&l!=="default"&&U(t,l,{get:()=>r[l],enumerable:!(i=st(r,l))||i.enumerable});return t},ir=t=>mt(ht(U(t!=null?ot(ft(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var H=(t,r,i)=>new Promise((l,f)=>{var h=n=>{try{e(i.next(n))}catch(u){f(u)}},s=n=>{try{e(i.throw(n))}catch(u){f(u)}},e=n=>n.done?l(n.value):Promise.resolve(n.value).then(h,s);e((i=i.apply(t,r)).next())});var ar=m((ra,nr)=>{function gt(t,r,i,l){var f=-1,h=t==null?0:t.length;for(l&&h&&(i=t[++f]);++f<h;)i=r(i,t[f],f,t);return i}nr.exports=gt});var ur=m((ea,or)=>{function pt(t){return function(r){return t==null?void 0:t[r]}}or.exports=pt});var lr=m((ta,sr)=>{var xt=ur(),wt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},bt=xt(wt);sr.exports=bt});var fr=m((ia,cr)=>{var vt=typeof global=="object"&&global&&global.Object===Object&&global;cr.exports=vt});var hr=m((na,dr)=>{var yt=fr(),Tt=typeof self=="object"&&self&&self.Object===Object&&self,Ct=yt||Tt||Function("return this")();dr.exports=Ct});var I=m((aa,mr)=>{var Pt=hr(),Rt=Pt.Symbol;mr.exports=Rt});var pr=m((oa,gr)=>{function St(t,r){for(var i=-1,l=t==null?0:t.length,f=Array(l);++i<l;)f[i]=r(t[i],i,t);return f}gr.exports=St});var wr=m((ua,xr)=>{var qt=Array.isArray;xr.exports=qt});var Tr=m((sa,yr)=>{var br=I(),vr=Object.prototype,At=vr.hasOwnProperty,Mt=vr.toString,D=br?br.toStringTag:void 0;function kt(t){var r=At.call(t,D),i=t[D];try{t[D]=void 0;var l=!0}catch(h){}var f=Mt.call(t);return l&&(r?t[D]=i:delete t[D]),f}yr.exports=kt});var Pr=m((la,Cr)=>{var jt=Object.prototype,Ot=jt.toString;function Nt(t){return Ot.call(t)}Cr.exports=Nt});var Ar=m((ca,qr)=>{var Rr=I(),Vt=Tr(),Dt=Pr(),zt="[object Null]",Ut="[object Undefined]",Sr=Rr?Rr.toStringTag:void 0;function Lt(t){return t==null?t===void 0?Ut:zt:Sr&&Sr in Object(t)?Vt(t):Dt(t)}qr.exports=Lt});var kr=m((fa,Mr)=>{function It(t){return t!=null&&typeof t=="object"}Mr.exports=It});var Or=m((da,jr)=>{var Et=Ar(),_t=kr(),Gt="[object Symbol]";function Ht(t){return typeof t=="symbol"||_t(t)&&Et(t)==Gt}jr.exports=Ht});var Lr=m((ha,Ur)=>{var Nr=I(),Bt=pr(),Ft=wr(),Wt=Or(),Zt=1/0,Vr=Nr?Nr.prototype:void 0,Dr=Vr?Vr.toString:void 0;function zr(t){if(typeof t=="string")return t;if(Ft(t))return Bt(t,zr)+"";if(Wt(t))return Dr?Dr.call(t):"";var r=t+"";return r=="0"&&1/t==-Zt?"-0":r}Ur.exports=zr});var E=m((ma,Ir)=>{var Xt=Lr();function Jt(t){return t==null?"":Xt(t)}Ir.exports=Jt});var _r=m((ga,Er)=>{var Yt=lr(),$t=E(),Kt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qt="\\u0300-\\u036f",ri="\\ufe20-\\ufe2f",ei="\\u20d0-\\u20ff",ti=Qt+ri+ei,ii="["+ti+"]",ni=RegExp(ii,"g");function ai(t){return t=$t(t),t&&t.replace(Kt,Yt).replace(ni,"")}Er.exports=ai});var Hr=m((pa,Gr)=>{var oi=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ui(t){return t.match(oi)||[]}Gr.exports=ui});var Fr=m((xa,Br)=>{var si=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function li(t){return si.test(t)}Br.exports=li});var ce=m((wa,le)=>{var Wr="\\ud800-\\udfff",ci="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",hi=ci+fi+di,Zr="\\u2700-\\u27bf",Xr="a-z\\xdf-\\xf6\\xf8-\\xff",mi="\\xac\\xb1\\xd7\\xf7",gi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",pi="\\u2000-\\u206f",xi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",wi="\\ufe0e\\ufe0f",Yr=mi+gi+pi+xi,$r="['\u2019]",Kr="["+Yr+"]",bi="["+hi+"]",Qr="\\d+",vi="["+Zr+"]",re="["+Xr+"]",ee="[^"+Wr+Yr+Qr+Zr+Xr+Jr+"]",yi="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+bi+"|"+yi+")",Ci="[^"+Wr+"]",te="(?:\\ud83c[\\udde6-\\uddff]){2}",ie="[\\ud800-\\udbff][\\udc00-\\udfff]",j="["+Jr+"]",Pi="\\u200d",ne="(?:"+re+"|"+ee+")",Ri="(?:"+j+"|"+ee+")",ae="(?:"+$r+"(?:d|ll|m|re|s|t|ve))?",oe="(?:"+$r+"(?:D|LL|M|RE|S|T|VE))?",ue=Ti+"?",se="["+wi+"]?",Si="(?:"+Pi+"(?:"+[Ci,te,ie].join("|")+")"+se+ue+")*",qi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ai="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mi=se+ue+Si,ki="(?:"+[vi,te,ie].join("|")+")"+Mi,ji=RegExp([j+"?"+re+"+"+ae+"(?="+[Kr,j,"$"].join("|")+")",Ri+"+"+oe+"(?="+[Kr,j+ne,"$"].join("|")+")",j+"?"+ne+"+"+ae,j+"+"+oe,Ai,qi,Qr,ki].join("|"),"g");function Oi(t){return t.match(ji)||[]}le.exports=Oi});var de=m((ba,fe)=>{var Ni=Hr(),Vi=Fr(),Di=E(),zi=ce();function Ui(t,r,i){return t=Di(t),r=i?void 0:r,r===void 0?Vi(t)?zi(t):Ni(t):t.match(r)||[]}fe.exports=Ui});var me=m((va,he)=>{var Li=ar(),Ii=_r(),Ei=de(),_i="['\u2019]",Gi=RegExp(_i,"g");function Hi(t){return function(r){return Li(Ei(Ii(r).replace(Gi,"")),t,"")}}he.exports=Hi});var pe=m((ya,ge)=>{function Bi(t,r,i){var l=-1,f=t.length;r<0&&(r=-r>f?0:f+r),i=i>f?f:i,i<0&&(i+=f),f=r>i?0:i-r>>>0,r>>>=0;for(var h=Array(f);++l<f;)h[l]=t[l+r];return h}ge.exports=Bi});var we=m((Ta,xe)=>{var Fi=pe();function Wi(t,r,i){var l=t.length;return i=i===void 0?l:i,!r&&i>=l?t:Fi(t,r,i)}xe.exports=Wi});var B=m((Ca,be)=>{var Zi="\\ud800-\\udfff",Xi="\\u0300-\\u036f",Ji="\\ufe20-\\ufe2f",Yi="\\u20d0-\\u20ff",$i=Xi+Ji+Yi,Ki="\\ufe0e\\ufe0f",Qi="\\u200d",rn=RegExp("["+Qi+Zi+$i+Ki+"]");function en(t){return rn.test(t)}be.exports=en});var ye=m((Pa,ve)=>{function tn(t){return t.split("")}ve.exports=tn});var Me=m((Ra,Ae)=>{var Te="\\ud800-\\udfff",nn="\\u0300-\\u036f",an="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",un=nn+an+on,sn="\\ufe0e\\ufe0f",ln="["+Te+"]",F="["+un+"]",W="\\ud83c[\\udffb-\\udfff]",cn="(?:"+F+"|"+W+")",Ce="[^"+Te+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",fn="\\u200d",Se=cn+"?",qe="["+sn+"]?",dn="(?:"+fn+"(?:"+[Ce,Pe,Re].join("|")+")"+qe+Se+")*",hn=qe+Se+dn,mn="(?:"+[Ce+F+"?",F,Pe,Re,ln].join("|")+")",gn=RegExp(W+"(?="+W+")|"+mn+hn,"g");function pn(t){return t.match(gn)||[]}Ae.exports=pn});var je=m((Sa,ke)=>{var xn=ye(),wn=B(),bn=Me();function vn(t){return wn(t)?bn(t):xn(t)}ke.exports=vn});var Ne=m((qa,Oe)=>{var yn=we(),Tn=B(),Cn=je(),Pn=E();function Rn(t){return function(r){r=Pn(r);var i=Tn(r)?Cn(r):void 0,l=i?i[0]:r.charAt(0),f=i?yn(i,1).join(""):r.slice(1);return l[t]()+f}}Oe.exports=Rn});var De=m((Aa,Ve)=>{var Sn=Ne(),qn=Sn("toUpperCase");Ve.exports=qn});var Ue=m((Ma,ze)=>{var An=me(),Mn=De(),kn=An(function(t,r,i){return t+(i?" ":"")+Mn(r)});ze.exports=kn});var He=m((Ge,X)=>{(function(t,r,i){function l(e){var n=this,u=s();n.next=function(){var a=2091639*n.s0+n.c*23283064365386963e-26;return n.s0=n.s1,n.s1=n.s2,n.s2=a-(n.c=a|0)},n.c=1,n.s0=u(" "),n.s1=u(" "),n.s2=u(" "),n.s0-=u(e),n.s0<0&&(n.s0+=1),n.s1-=u(e),n.s1<0&&(n.s1+=1),n.s2-=u(e),n.s2<0&&(n.s2+=1),u=null}function f(e,n){return n.c=e.c,n.s0=e.s0,n.s1=e.s1,n.s2=e.s2,n}function h(e,n){var u=new l(e),a=n&&n.state,o=u.next;return o.int32=function(){return u.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a=="object"&&f(a,u),o.state=function(){return f(u,{})}),o}function s(){var e=4022871197,n=function(u){u=String(u);for(var a=0;a<u.length;a++){e+=u.charCodeAt(a);var o=.02519603282416938*e;e=o>>>0,o-=e,o*=e,e=o>>>0,o-=e,e+=o*4294967296}return(e>>>0)*23283064365386963e-26};return n}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.alea=h})(Ge,typeof X=="object"&&X,typeof define=="function"&&define)});var Fe=m((Be,J)=>{(function(t,r,i){function l(s){var e=this,n="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var a=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^a^a>>>8},s===(s|0)?e.x=s:n+=s;for(var u=0;u<n.length+64;u++)e.x^=n.charCodeAt(u)|0,e.next()}function f(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function h(s,e){var n=new l(s),u=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var o=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},a.int32=n.next,a.quick=a,u&&(typeof u=="object"&&f(u,n),a.state=function(){return f(n,{})}),a}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xor128=h})(Be,typeof J=="object"&&J,typeof define=="function"&&define)});var Ze=m((We,Y)=>{(function(t,r,i){function l(s){var e=this,n="";e.next=function(){var a=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(a^a<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:n+=s;for(var u=0;u<n.length+64;u++)e.x^=n.charCodeAt(u)|0,u==n.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function f(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function h(s,e){var n=new l(s),u=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var o=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},a.int32=n.next,a.quick=a,u&&(typeof u=="object"&&f(u,n),a.state=function(){return f(n,{})}),a}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xorwow=h})(We,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Je=m((Xe,$)=>{(function(t,r,i){function l(s){var e=this;e.next=function(){var u=e.x,a=e.i,o,c,d;return o=u[a],o^=o>>>7,c=o^o<<24,o=u[a+1&7],c^=o^o>>>10,o=u[a+3&7],c^=o^o>>>3,o=u[a+4&7],c^=o^o<<7,o=u[a+7&7],o=o^o<<13,c^=o^o<<9,u[a]=c,e.i=a+1&7,c};function n(u,a){var o,c,d=[];if(a===(a|0))c=d[0]=a;else for(a=""+a,o=0;o<a.length;++o)d[o&7]=d[o&7]<<15^a.charCodeAt(o)+d[o+1&7]<<13;for(;d.length<8;)d.push(0);for(o=0;o<8&&d[o]===0;++o);for(o==8?c=d[7]=-1:c=d[o],u.x=d,u.i=0,o=256;o>0;--o)u.next()}n(e,s)}function f(s,e){return e.x=s.x.slice(),e.i=s.i,e}function h(s,e){s==null&&(s=+new Date);var n=new l(s),u=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var o=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},a.int32=n.next,a.quick=a,u&&(u.x&&f(u,n),a.state=function(){return f(n,{})}),a}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xorshift7=h})(Xe,typeof $=="object"&&$,typeof define=="function"&&define)});var $e=m((Ye,K)=>{(function(t,r,i){function l(s){var e=this;e.next=function(){var u=e.w,a=e.X,o=e.i,c,d;return e.w=u=u+1640531527|0,d=a[o+34&127],c=a[o=o+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,d=a[o]=d^c,e.i=o,d+(u^u>>>16)|0};function n(u,a){var o,c,d,v,A,P=[],O=128;for(a===(a|0)?(c=a,a=null):(a=a+"\0",c=0,O=Math.max(O,a.length)),d=0,v=-32;v<O;++v)a&&(c^=a.charCodeAt((v+32)%a.length)),v===0&&(A=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,v>=0&&(A=A+1640531527|0,o=P[v&127]^=c+A,d=o==0?d+1:0);for(d>=128&&(P[(a&&a.length||0)&127]=-1),d=127,v=4*128;v>0;--v)c=P[d+34&127],o=P[d=d+1&127],c^=c<<13,o^=o<<17,c^=c>>>15,o^=o>>>12,P[d]=c^o;u.w=A,u.X=P,u.i=d}n(e,s)}function f(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function h(s,e){s==null&&(s=+new Date);var n=new l(s),u=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var o=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},a.int32=n.next,a.quick=a,u&&(u.X&&f(u,n),a.state=function(){return f(n,{})}),a}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.xor4096=h})(Ye,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=m((Ke,Q)=>{(function(t,r,i){function l(s){var e=this,n="";e.next=function(){var a=e.b,o=e.c,c=e.d,d=e.a;return a=a<<25^a>>>7^o,o=o-c|0,c=c<<24^c>>>8^d,d=d-a|0,e.b=a=a<<20^a>>>12^o,e.c=o=o-c|0,e.d=c<<16^o>>>16^d,e.a=d-a|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):n+=s;for(var u=0;u<n.length+20;u++)e.b^=n.charCodeAt(u)|0,e.next()}function f(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function h(s,e){var n=new l(s),u=e&&e.state,a=function(){return(n.next()>>>0)/4294967296};return a.double=function(){do var o=n.next()>>>11,c=(n.next()>>>0)/4294967296,d=(o+c)/(1<<21);while(d===0);return d},a.int32=n.next,a.quick=a,u&&(typeof u=="object"&&f(u,n),a.state=function(){return f(n,{})}),a}r&&r.exports?r.exports=h:i&&i.amd?i(function(){return h}):this.tychei=h})(Ke,typeof Q=="object"&&Q,typeof define=="function"&&define)});var rt=m(()=>{});var tt=m((et,G)=>{(function(t,r,i){var l=256,f=6,h=52,s="random",e=i.pow(l,f),n=i.pow(2,h),u=n*2,a=l-1,o;function c(g,p,b){var w=[];p=p==!0?{entropy:!0}:p||{};var x=P(A(p.entropy?[g,N(r)]:g??O(),3),w),y=new d(w),C=function(){for(var T=y.g(f),S=e,R=0;T<n;)T=(T+R)*l,S*=l,R=y.g(1);for(;T>=u;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return y.g(4)|0},C.quick=function(){return y.g(4)/4294967296},C.double=C,P(N(y.S),r),(p.pass||b||function(T,S,R,M){return M&&(M.S&&v(M,y),T.state=function(){return v(y,{})}),R?(i[s]=T,S):T})(C,x,"global"in p?p.global:this==i,p.state)}function d(g){var p,b=g.length,w=this,x=0,y=w.i=w.j=0,C=w.S=[];for(b||(g=[b++]);x<l;)C[x]=x++;for(x=0;x<l;x++)C[x]=C[y=a&y+g[x%b]+(p=C[x])],C[y]=p;(w.g=function(T){for(var S,R=0,M=w.i,z=w.j,V=w.S;T--;)S=V[M=a&M+1],R=R*l+V[a&(V[M]=V[z=a&z+S])+(V[z]=S)];return w.i=M,w.j=z,R})(l)}function v(g,p){return p.i=g.i,p.j=g.j,p.S=g.S.slice(),p}function A(g,p){var b=[],w=typeof g,x;if(p&&w=="object")for(x in g)try{b.push(A(g[x],p-1))}catch(y){}return b.length?b:w=="string"?g:g+"\0"}function P(g,p){for(var b=g+"",w,x=0;x<b.length;)p[a&x]=a&(w^=p[a&x]*19)+b.charCodeAt(x++);return N(p)}function O(){try{var g;return o&&(g=o.randomBytes)?g=g(l):(g=new Uint8Array(l),(t.crypto||t.msCrypto).getRandomValues(g)),N(g)}catch(w){var p=t.navigator,b=p&&p.plugins;return[+new Date,t,b,t.screen,N(r)]}}function N(g){return String.fromCharCode.apply(0,g)}if(P(i.random(),r),typeof G=="object"&&G.exports){G.exports=c;try{o=rt()}catch(g){}}else typeof define=="function"&&define.amd?define(function(){return c}):i["seed"+s]=c})(typeof self!="undefined"?self:et,[],Math)});var nt=m((Da,it)=>{var Zn=He(),Xn=Fe(),Jn=Ze(),Yn=Je(),$n=$e(),Kn=Qe(),k=tt();k.alea=Zn;k.xor128=Xn;k.xorwow=Jn;k.xorshift7=Yn;k.xor4096=$n;k.tychei=Kn;it.exports=k});var Ie=ir(Ue());var jn=`
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
    `,On=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Nn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,Le=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Dn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,zn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Un=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ln=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,In=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,_n=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Gn={Glide:jn,"Machine Learning":En,General:Le,Array:Vn,Number:Nn,Encoding:_n,Text:In,"Data & APIs":Ln,Image:Dn,Fun:zn,"Date & Time":Un,Code:On};function Z({icon:t,category:r}){var i;return(i=t!=null?t:Gn[r])!=null?i:Le}function Ee(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(Ee):t}function Hn(t,r){return H(this,null,function*(){var e;let{data:{key:i,params:l}}=t,f,h;try{f=yield r(...l)}catch(n){f=void 0;try{h=n.toString()}catch(u){h="Exception can't be stringified."}}let s={key:i};f!==void 0&&(f=Ee(f),s.result={type:"string",value:f}),h!==void 0&&(s.error=h),((e=t.source)==null?void 0:e.postMessage).call(e,s,"*")})}function Bn(t){return typeof window!="undefined"&&window.addEventListener("message",r=>Hn(r,t.run)),L(q({},t),{json:JSON.stringify(Fn(t),null,2)})}function Fn(t){let{name:r,category:i,released:l,description:f,author:h,result:s,params:e,about:n,video:u}=t,a=Z(t);return{name:r,category:i,released:l,description:f,author:h,result:s,about:n,icon:a,video:u,params:Object.entries(e).map(([o,c])=>q({name:o},c))}}var Wn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return H(this,null,function*(){})}},_=class{constructor(r={},i=[]){this.definition=q(q({},Wn),r),this.requiredParams=[...i]}with(r,i=[]){return new _(q(q({},this.definition),r),[...this.requiredParams,...i])}withName(r){return this.with({name:r})}withCategory(r){let{icon:i}=this.definition;return this.with({category:r,icon:Z({icon:i,category:r})})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,i){return this.with({author:`${r} <${i}>`})}withTest(r,i){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:r,expectedResult:i}]})}withFailingTest(r,i){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:r,expectedResult:i,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withDateResult(){return this.withResult("date-time")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,i,l){return l===void 0&&(l=(0,Ie.default)(i)),this.with({params:L(q({},this.definition.params),{[i]:{type:r,displayName:l}})})}withRequiredParam(r,i,l){return this.withParam(r,i,l).with({},[i])}withPrimitiveParam(r,i){return this.withParam("primitive",r,i)}withBooleanParam(r,i){return this.withParam("boolean",r,i)}withStringParam(r,i){return this.withParam("string",r,i)}withDateParam(r,i){return this.withParam("date-time",r,i)}withNumberParam(r,i){return this.withParam("number",r,i)}withRequiredPrimitiveParam(r,i){return this.withRequiredParam("primitive",r,i)}withRequiredURIParam(r,i){return this.withRequiredParam("uri",r,i)}withRequiredBooleanParam(r,i){return this.withRequiredParam("boolean",r,i)}withRequiredStringParam(r,i){return this.withRequiredParam("string",r,i)}withRequiredDateParam(r,i){return this.withRequiredParam("date-time",r,i)}withRequiredNumberParam(r,i){return this.withRequiredParam("number",r,i)}withStringArrayParam(r,i){return this.withParam({kind:"array",items:"string"},r,i)}withRequiredStringArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"string"},r,i)}withNumberArrayParam(r,i){return this.withParam({kind:"array",items:"number"},r,i)}withPrimitiveArrayParam(r,i){return this.withParam({kind:"array",items:"primitive"},r,i)}withRequiredPrimitiveArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"primitive"},r,i)}withExample(r){return this.with({example:r})}run(r){let{params:i}=this.definition,l=this.requiredParams,f=Object.keys(i);function h(...s){let e={};if(s.forEach(({value:n},u)=>{e[f[u]]=n}),!l.some(n=>e[n]===void 0))return r(e)}return Bn(L(q({},this.definition),{run:h}))}};function _e(t){return new _({name:t})}var at=ir(nt()),Ua=_e("Random Number").withCategory("Number").withReleased("direct").withDescription("Turn any value into a stable random number.").withAuthor("davidbau","github.com/davidbau/seedrandom").withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ").withRequiredPrimitiveParam("seed").withNumberResult().withTest({seed:"Glide"},.3711851882348728).run(({seed:t})=>(0,at.default)(t)());})();
//# sourceMappingURL=index.js.map
