(()=>{var ct=Object.create;var L=Object.defineProperty,ft=Object.defineProperties,dt=Object.getOwnPropertyDescriptor,mt=Object.getOwnPropertyDescriptors,pt=Object.getOwnPropertyNames,ie=Object.getOwnPropertySymbols,ht=Object.getPrototypeOf,oe=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable;var ae=(r,e,n)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,k=(r,e)=>{for(var n in e||(e={}))oe.call(e,n)&&ae(r,n,e[n]);if(ie)for(var n of ie(e))gt.call(e,n)&&ae(r,n,e[n]);return r},I=(r,e)=>ft(r,mt(e)),xt=r=>L(r,"__esModule",{value:!0});var p=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var bt=(r,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of pt(e))!oe.call(r,l)&&l!=="default"&&L(r,l,{get:()=>e[l],enumerable:!(n=dt(e,l))||n.enumerable});return r},ue=r=>bt(xt(L(r!=null?ct(ht(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var W=(r,e,n)=>new Promise((l,f)=>{var m=i=>{try{t(n.next(i))}catch(u){f(u)}},s=i=>{try{t(n.throw(i))}catch(u){f(u)}},t=i=>i.done?l(i.value):Promise.resolve(i.value).then(m,s);t((n=n.apply(r,e)).next())});var le=p((io,se)=>{function wt(r,e,n,l){var f=-1,m=r==null?0:r.length;for(l&&m&&(n=r[++f]);++f<m;)n=e(n,r[f],f,r);return n}se.exports=wt});var fe=p((oo,ce)=>{function yt(r){return function(e){return r==null?void 0:r[e]}}ce.exports=yt});var me=p((ao,de)=>{var vt=fe(),Tt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ct=vt(Tt);de.exports=Ct});var he=p((uo,pe)=>{var Pt=typeof global=="object"&&global&&global.Object===Object&&global;pe.exports=Pt});var xe=p((so,ge)=>{var Rt=he(),St=typeof self=="object"&&self&&self.Object===Object&&self,kt=Rt||St||Function("return this")();ge.exports=kt});var G=p((lo,be)=>{var Mt=xe(),At=Mt.Symbol;be.exports=At});var ye=p((co,we)=>{function qt(r,e){for(var n=-1,l=r==null?0:r.length,f=Array(l);++n<l;)f[n]=e(r[n],n,r);return f}we.exports=qt});var Te=p((fo,ve)=>{var jt=Array.isArray;ve.exports=jt});var Se=p((mo,Re)=>{var Ce=G(),Pe=Object.prototype,Ot=Pe.hasOwnProperty,Vt=Pe.toString,N=Ce?Ce.toStringTag:void 0;function Dt(r){var e=Ot.call(r,N),n=r[N];try{r[N]=void 0;var l=!0}catch(m){}var f=Vt.call(r);return l&&(e?r[N]=n:delete r[N]),f}Re.exports=Dt});var Me=p((po,ke)=>{var zt=Object.prototype,Nt=zt.toString;function Ut(r){return Nt.call(r)}ke.exports=Ut});var Oe=p((ho,je)=>{var Ae=G(),Lt=Se(),It=Me(),Gt="[object Null]",Ht="[object Undefined]",qe=Ae?Ae.toStringTag:void 0;function _t(r){return r==null?r===void 0?Ht:Gt:qe&&qe in Object(r)?Lt(r):It(r)}je.exports=_t});var De=p((go,Ve)=>{function Et(r){return r!=null&&typeof r=="object"}Ve.exports=Et});var Ne=p((xo,ze)=>{var Bt=Oe(),Ft=De(),Wt="[object Symbol]";function Zt(r){return typeof r=="symbol"||Ft(r)&&Bt(r)==Wt}ze.exports=Zt});var _e=p((bo,He)=>{var Ue=G(),Xt=ye(),$t=Te(),Jt=Ne(),Kt=1/0,Le=Ue?Ue.prototype:void 0,Ie=Le?Le.toString:void 0;function Ge(r){if(typeof r=="string")return r;if($t(r))return Xt(r,Ge)+"";if(Jt(r))return Ie?Ie.call(r):"";var e=r+"";return e=="0"&&1/r==-Kt?"-0":e}He.exports=Ge});var H=p((wo,Ee)=>{var Yt=_e();function Qt(r){return r==null?"":Yt(r)}Ee.exports=Qt});var Fe=p((yo,Be)=>{var en=me(),rn=H(),tn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,nn="\\u0300-\\u036f",on="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",un=nn+on+an,sn="["+un+"]",ln=RegExp(sn,"g");function cn(r){return r=rn(r),r&&r.replace(tn,en).replace(ln,"")}Be.exports=cn});var Ze=p((vo,We)=>{var fn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function dn(r){return r.match(fn)||[]}We.exports=dn});var $e=p((To,Xe)=>{var mn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function pn(r){return mn.test(r)}Xe.exports=pn});var pr=p((Co,mr)=>{var Je="\\ud800-\\udfff",hn="\\u0300-\\u036f",gn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=hn+gn+xn,Ke="\\u2700-\\u27bf",Ye="a-z\\xdf-\\xf6\\xf8-\\xff",wn="\\xac\\xb1\\xd7\\xf7",yn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vn="\\u2000-\\u206f",Tn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qe="A-Z\\xc0-\\xd6\\xd8-\\xde",Cn="\\ufe0e\\ufe0f",er=wn+yn+vn+Tn,rr="['\u2019]",tr="["+er+"]",Pn="["+bn+"]",nr="\\d+",Rn="["+Ke+"]",ir="["+Ye+"]",or="[^"+Je+er+nr+Ke+Ye+Qe+"]",Sn="\\ud83c[\\udffb-\\udfff]",kn="(?:"+Pn+"|"+Sn+")",Mn="[^"+Je+"]",ar="(?:\\ud83c[\\udde6-\\uddff]){2}",ur="[\\ud800-\\udbff][\\udc00-\\udfff]",O="["+Qe+"]",An="\\u200d",sr="(?:"+ir+"|"+or+")",qn="(?:"+O+"|"+or+")",lr="(?:"+rr+"(?:d|ll|m|re|s|t|ve))?",cr="(?:"+rr+"(?:D|LL|M|RE|S|T|VE))?",fr=kn+"?",dr="["+Cn+"]?",jn="(?:"+An+"(?:"+[Mn,ar,ur].join("|")+")"+dr+fr+")*",On="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Vn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dn=dr+fr+jn,zn="(?:"+[Rn,ar,ur].join("|")+")"+Dn,Nn=RegExp([O+"?"+ir+"+"+lr+"(?="+[tr,O,"$"].join("|")+")",qn+"+"+cr+"(?="+[tr,O+sr,"$"].join("|")+")",O+"?"+sr+"+"+lr,O+"+"+cr,Vn,On,nr,zn].join("|"),"g");function Un(r){return r.match(Nn)||[]}mr.exports=Un});var gr=p((Po,hr)=>{var Ln=Ze(),In=$e(),Gn=H(),Hn=pr();function _n(r,e,n){return r=Gn(r),e=n?void 0:e,e===void 0?In(r)?Hn(r):Ln(r):r.match(e)||[]}hr.exports=_n});var br=p((Ro,xr)=>{var En=le(),Bn=Fe(),Fn=gr(),Wn="['\u2019]",Zn=RegExp(Wn,"g");function Xn(r){return function(e){return En(Fn(Bn(e).replace(Zn,"")),r,"")}}xr.exports=Xn});var yr=p((So,wr)=>{function $n(r,e,n){var l=-1,f=r.length;e<0&&(e=-e>f?0:f+e),n=n>f?f:n,n<0&&(n+=f),f=e>n?0:n-e>>>0,e>>>=0;for(var m=Array(f);++l<f;)m[l]=r[l+e];return m}wr.exports=$n});var Tr=p((ko,vr)=>{var Jn=yr();function Kn(r,e,n){var l=r.length;return n=n===void 0?l:n,!e&&n>=l?r:Jn(r,e,n)}vr.exports=Kn});var Z=p((Mo,Cr)=>{var Yn="\\ud800-\\udfff",Qn="\\u0300-\\u036f",ei="\\ufe20-\\ufe2f",ri="\\u20d0-\\u20ff",ti=Qn+ei+ri,ni="\\ufe0e\\ufe0f",ii="\\u200d",oi=RegExp("["+ii+Yn+ti+ni+"]");function ai(r){return oi.test(r)}Cr.exports=ai});var Rr=p((Ao,Pr)=>{function ui(r){return r.split("")}Pr.exports=ui});var Vr=p((qo,Or)=>{var Sr="\\ud800-\\udfff",si="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",fi=si+li+ci,di="\\ufe0e\\ufe0f",mi="["+Sr+"]",X="["+fi+"]",$="\\ud83c[\\udffb-\\udfff]",pi="(?:"+X+"|"+$+")",kr="[^"+Sr+"]",Mr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="\\u200d",qr=pi+"?",jr="["+di+"]?",gi="(?:"+hi+"(?:"+[kr,Mr,Ar].join("|")+")"+jr+qr+")*",xi=jr+qr+gi,bi="(?:"+[kr+X+"?",X,Mr,Ar,mi].join("|")+")",wi=RegExp($+"(?="+$+")|"+bi+xi,"g");function yi(r){return r.match(wi)||[]}Or.exports=yi});var zr=p((jo,Dr)=>{var vi=Rr(),Ti=Z(),Ci=Vr();function Pi(r){return Ti(r)?Ci(r):vi(r)}Dr.exports=Pi});var Ur=p((Oo,Nr)=>{var Ri=Tr(),Si=Z(),ki=zr(),Mi=H();function Ai(r){return function(e){e=Mi(e);var n=Si(e)?ki(e):void 0,l=n?n[0]:e.charAt(0),f=n?Ri(n,1).join(""):e.slice(1);return l[r]()+f}}Nr.exports=Ai});var Ir=p((Vo,Lr)=>{var qi=Ur(),ji=qi("toUpperCase");Lr.exports=ji});var Hr=p((Do,Gr)=>{var Oi=br(),Vi=Ir(),Di=Oi(function(r,e,n){return r+(n?" ":"")+Vi(e)});Gr.exports=Di});var Zr=p((Wr,K)=>{(function(r,e,n){function l(t){var i=this,u=s();i.next=function(){var o=2091639*i.s0+i.c*23283064365386963e-26;return i.s0=i.s1,i.s1=i.s2,i.s2=o-(i.c=o|0)},i.c=1,i.s0=u(" "),i.s1=u(" "),i.s2=u(" "),i.s0-=u(t),i.s0<0&&(i.s0+=1),i.s1-=u(t),i.s1<0&&(i.s1+=1),i.s2-=u(t),i.s2<0&&(i.s2+=1),u=null}function f(t,i){return i.c=t.c,i.s0=t.s0,i.s1=t.s1,i.s2=t.s2,i}function m(t,i){var u=new l(t),o=i&&i.state,a=u.next;return a.int32=function(){return u.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,o&&(typeof o=="object"&&f(o,u),a.state=function(){return f(u,{})}),a}function s(){var t=4022871197,i=function(u){u=String(u);for(var o=0;o<u.length;o++){t+=u.charCodeAt(o);var a=.02519603282416938*t;t=a>>>0,a-=t,a*=t,t=a>>>0,a-=t,t+=a*4294967296}return(t>>>0)*23283064365386963e-26};return i}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.alea=m})(Wr,typeof K=="object"&&K,typeof define=="function"&&define)});var $r=p((Xr,Y)=>{(function(r,e,n){function l(s){var t=this,i="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var o=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^o^o>>>8},s===(s|0)?t.x=s:i+=s;for(var u=0;u<i.length+64;u++)t.x^=i.charCodeAt(u)|0,t.next()}function f(s,t){return t.x=s.x,t.y=s.y,t.z=s.z,t.w=s.w,t}function m(s,t){var i=new l(s),u=t&&t.state,o=function(){return(i.next()>>>0)/4294967296};return o.double=function(){do var a=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},o.int32=i.next,o.quick=o,u&&(typeof u=="object"&&f(u,i),o.state=function(){return f(i,{})}),o}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.xor128=m})(Xr,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Kr=p((Jr,Q)=>{(function(r,e,n){function l(s){var t=this,i="";t.next=function(){var o=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(o^o<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,s===(s|0)?t.x=s:i+=s;for(var u=0;u<i.length+64;u++)t.x^=i.charCodeAt(u)|0,u==i.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function f(s,t){return t.x=s.x,t.y=s.y,t.z=s.z,t.w=s.w,t.v=s.v,t.d=s.d,t}function m(s,t){var i=new l(s),u=t&&t.state,o=function(){return(i.next()>>>0)/4294967296};return o.double=function(){do var a=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},o.int32=i.next,o.quick=o,u&&(typeof u=="object"&&f(u,i),o.state=function(){return f(i,{})}),o}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.xorwow=m})(Jr,typeof Q=="object"&&Q,typeof define=="function"&&define)});var Qr=p((Yr,ee)=>{(function(r,e,n){function l(s){var t=this;t.next=function(){var u=t.x,o=t.i,a,c,d;return a=u[o],a^=a>>>7,c=a^a<<24,a=u[o+1&7],c^=a^a>>>10,a=u[o+3&7],c^=a^a>>>3,a=u[o+4&7],c^=a^a<<7,a=u[o+7&7],a=a^a<<13,c^=a^a<<9,u[o]=c,t.i=o+1&7,c};function i(u,o){var a,c,d=[];if(o===(o|0))c=d[0]=o;else for(o=""+o,a=0;a<o.length;++a)d[a&7]=d[a&7]<<15^o.charCodeAt(a)+d[a+1&7]<<13;for(;d.length<8;)d.push(0);for(a=0;a<8&&d[a]===0;++a);for(a==8?c=d[7]=-1:c=d[a],u.x=d,u.i=0,a=256;a>0;--a)u.next()}i(t,s)}function f(s,t){return t.x=s.x.slice(),t.i=s.i,t}function m(s,t){s==null&&(s=+new Date);var i=new l(s),u=t&&t.state,o=function(){return(i.next()>>>0)/4294967296};return o.double=function(){do var a=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},o.int32=i.next,o.quick=o,u&&(u.x&&f(u,i),o.state=function(){return f(i,{})}),o}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.xorshift7=m})(Yr,typeof ee=="object"&&ee,typeof define=="function"&&define)});var rt=p((et,re)=>{(function(r,e,n){function l(s){var t=this;t.next=function(){var u=t.w,o=t.X,a=t.i,c,d;return t.w=u=u+1640531527|0,d=o[a+34&127],c=o[a=a+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,d=o[a]=d^c,t.i=a,d+(u^u>>>16)|0};function i(u,o){var a,c,d,y,M,P=[],V=128;for(o===(o|0)?(c=o,o=null):(o=o+"\0",c=0,V=Math.max(V,o.length)),d=0,y=-32;y<V;++y)o&&(c^=o.charCodeAt((y+32)%o.length)),y===0&&(M=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,y>=0&&(M=M+1640531527|0,a=P[y&127]^=c+M,d=a==0?d+1:0);for(d>=128&&(P[(o&&o.length||0)&127]=-1),d=127,y=4*128;y>0;--y)c=P[d+34&127],a=P[d=d+1&127],c^=c<<13,a^=a<<17,c^=c>>>15,a^=a>>>12,P[d]=c^a;u.w=M,u.X=P,u.i=d}i(t,s)}function f(s,t){return t.i=s.i,t.w=s.w,t.X=s.X.slice(),t}function m(s,t){s==null&&(s=+new Date);var i=new l(s),u=t&&t.state,o=function(){return(i.next()>>>0)/4294967296};return o.double=function(){do var a=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},o.int32=i.next,o.quick=o,u&&(u.X&&f(u,i),o.state=function(){return f(i,{})}),o}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.xor4096=m})(et,typeof re=="object"&&re,typeof define=="function"&&define)});var nt=p((tt,te)=>{(function(r,e,n){function l(s){var t=this,i="";t.next=function(){var o=t.b,a=t.c,c=t.d,d=t.a;return o=o<<25^o>>>7^a,a=a-c|0,c=c<<24^c>>>8^d,d=d-o|0,t.b=o=o<<20^o>>>12^a,t.c=a=a-c|0,t.d=c<<16^a>>>16^d,t.a=d-o|0},t.a=0,t.b=0,t.c=2654435769|0,t.d=1367130551,s===Math.floor(s)?(t.a=s/4294967296|0,t.b=s|0):i+=s;for(var u=0;u<i.length+20;u++)t.b^=i.charCodeAt(u)|0,t.next()}function f(s,t){return t.a=s.a,t.b=s.b,t.c=s.c,t.d=s.d,t}function m(s,t){var i=new l(s),u=t&&t.state,o=function(){return(i.next()>>>0)/4294967296};return o.double=function(){do var a=i.next()>>>11,c=(i.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},o.int32=i.next,o.quick=o,u&&(typeof u=="object"&&f(u,i),o.state=function(){return f(i,{})}),o}e&&e.exports?e.exports=m:n&&n.amd?n(function(){return m}):this.tychei=m})(tt,typeof te=="object"&&te,typeof define=="function"&&define)});var it=p(()=>{});var at=p((ot,E)=>{(function(r,e,n){var l=256,f=6,m=52,s="random",t=n.pow(l,f),i=n.pow(2,m),u=i*2,o=l-1,a;function c(h,g,w){var b=[];g=g==!0?{entropy:!0}:g||{};var x=P(M(g.entropy?[h,D(e)]:h??V(),3),b),v=new d(b),C=function(){for(var T=v.g(f),S=t,R=0;T<i;)T=(T+R)*l,S*=l,R=v.g(1);for(;T>=u;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,P(D(v.S),e),(g.pass||w||function(T,S,R,A){return A&&(A.S&&y(A,v),T.state=function(){return y(v,{})}),R?(n[s]=T,S):T})(C,x,"global"in g?g.global:this==n,g.state)}function d(h){var g,w=h.length,b=this,x=0,v=b.i=b.j=0,C=b.S=[];for(w||(h=[w++]);x<l;)C[x]=x++;for(x=0;x<l;x++)C[x]=C[v=o&v+h[x%w]+(g=C[x])],C[v]=g;(b.g=function(T){for(var S,R=0,A=b.i,U=b.j,z=b.S;T--;)S=z[A=o&A+1],R=R*l+z[o&(z[A]=z[U=o&U+S])+(z[U]=S)];return b.i=A,b.j=U,R})(l)}function y(h,g){return g.i=h.i,g.j=h.j,g.S=h.S.slice(),g}function M(h,g){var w=[],b=typeof h,x;if(g&&b=="object")for(x in h)try{w.push(M(h[x],g-1))}catch(v){}return w.length?w:b=="string"?h:h+"\0"}function P(h,g){for(var w=h+"",b,x=0;x<w.length;)g[o&x]=o&(b^=g[o&x]*19)+w.charCodeAt(x++);return D(g)}function V(){try{var h;return a&&(h=a.randomBytes)?h=h(l):(h=new Uint8Array(l),(r.crypto||r.msCrypto).getRandomValues(h)),D(h)}catch(b){var g=r.navigator,w=g&&g.plugins;return[+new Date,r,w,r.screen,D(e)]}}function D(h){return String.fromCharCode.apply(0,h)}if(P(n.random(),e),typeof E=="object"&&E.exports){E.exports=c;try{a=it()}catch(h){}}else typeof define=="function"&&define.amd?define(function(){return c}):n["seed"+s]=c})(typeof self!="undefined"?self:ot,[],Math)});var st=p((Go,ut)=>{var Ki=Zr(),Yi=$r(),Qi=Kr(),eo=Qr(),ro=rt(),to=nt(),q=at();q.alea=Ki;q.xor128=Yi;q.xorwow=Qi;q.xorshift7=eo;q.xor4096=ro;q.tychei=to;ut.exports=q});var Er=ue(Hr());var zi=`
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
    `,Ni=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Ui=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,_r=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Li=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Ii=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,_i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Bi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Wi={Glide:zi,"Machine Learning":Bi,General:_r,Array:Li,Number:Ui,Encoding:Fi,Text:Ei,"Data & APIs":_i,Image:Ii,Fun:Gi,"Date & Time":Hi,Code:Ni};function J({icon:r,category:e}){var n;return(n=r!=null?r:Wi[e])!=null?n:_r}function Br(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(Br):r}function Zi(r,e){return W(this,null,function*(){var t;let{data:{key:n,params:l}}=r,f,m;try{f=yield e(...l)}catch(i){f=void 0;try{m=i.toString()}catch(u){m="Exception can't be stringified."}}let s={key:n};f!==void 0&&(f=Br(f),s.result={type:"string",value:f}),m!==void 0&&(s.error=m),((t=r.source)==null?void 0:t.postMessage).call(t,s,"*")})}function Xi(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Zi(e,r.run)),I(k({},r),{json:JSON.stringify($i(r),null,2)})}function $i(r){let{name:e,category:n,released:l,description:f,author:m,result:s,params:t,about:i,video:u}=r,o=J(r);return{name:e,category:n,released:l,description:f,author:m,result:s,about:i,icon:o,video:u,params:Object.entries(t).map(([a,c])=>k({name:a},c))}}var Ji={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return W(this,null,function*(){})}},_=class{constructor(e={},n=[]){this.definition=k(k({},Ji),e),this.requiredParams=[...n]}with(e,n=[]){return new _(k(k({},this.definition),e),[...this.requiredParams,...n])}withName(e){return this.with({name:e})}withCategory(e){let{icon:n}=this.definition;return this.with({category:e,icon:J({icon:n,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,n){return this.with({author:`${e} <${n}>`})}withTest(e,n){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:e,expectedResult:n}]})}withFailingTest(e,n){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:e,expectedResult:n,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,n,l){return l===void 0&&(l=(0,Er.default)(n)),this.with({params:I(k({},this.definition.params),{[n]:{type:e,displayName:l}})})}withRequiredParam(e,n,l){return this.withParam(e,n,l).with({},[n])}withPrimitiveParam(e,n){return this.withParam("primitive",e,n)}withBooleanParam(e,n){return this.withParam("boolean",e,n)}withStringParam(e,n){return this.withParam("string",e,n)}withDateParam(e,n){return this.withParam("date-time",e,n)}withNumberParam(e,n){return this.withParam("number",e,n)}withRequiredPrimitiveParam(e,n){return this.withRequiredParam("primitive",e,n)}withRequiredBooleanParam(e,n){return this.withRequiredParam("boolean",e,n)}withRequiredStringParam(e,n){return this.withRequiredParam("string",e,n)}withRequiredDateParam(e,n){return this.withRequiredParam("date-time",e,n)}withRequiredNumberParam(e,n){return this.withRequiredParam("number",e,n)}withStringArrayParam(e,n){return this.withParam({kind:"array",items:"string"},e,n)}withRequiredStringArrayParam(e,n){return this.withRequiredParam({kind:"array",items:"string"},e,n)}withNumberArrayParam(e,n){return this.withParam({kind:"array",items:"number"},e,n)}withPrimitiveArrayParam(e,n){return this.withParam({kind:"array",items:"primitive"},e,n)}withRequiredPrimitiveArrayParam(e,n){return this.withRequiredParam({kind:"array",items:"primitive"},e,n)}withExample(e){return this.with({example:e})}run(e){let{params:n}=this.definition,l=this.requiredParams,f=Object.keys(n);function m(...s){let t={};if(s.forEach(({value:i},u)=>{t[f[u]]=i}),!l.some(i=>t[i]===void 0))return e(t)}return Xi(I(k({},this.definition),{run:m}))}};function Fr(r){return new _({name:r})}var lt=ue(st()),B=["doz","mar","bin","wan","sam","lit","sig","hid","fid","lis","sog","dir","wac","sab","wis","sib","rig","sol","dop","mod","fog","lid","hop","dar","dor","lor","hod","fol","rin","tog","sil","mir","hol","pas","lac","rov","liv","dal","sat","lib","tab","han","tic","pid","tor","bol","fos","dot","los","dil","for","pil","ram","tir","win","tad","bic","dif","roc","wid","bis","das","mid","lop","ril","nar","dap","mol","san","loc","nov","sit","nid","tip","sic","rop","wit","nat","pan","min","rit","pod","mot","tam","tol","sav","pos","nap","nop","som","fin","fon","ban","mor","wor","sip","ron","nor","bot","wic","soc","wat","dol","mag","pic","dav","bid","bal","tim","tas","mal","lig","siv","tag","pad","sal","div","dac","tan","sid","fab","tar","mon","ran","nis","wol","mis","pal","las","dis","map","rab","tob","rol","lat","lon","nod","nav","fig","nom","nib","pag","sop","ral","bil","had","doc","rid","moc","pac","rav","rip","fal","tod","til","tin","hap","mic","fan","pat","tac","lab","mog","sim","son","pin","lom","ric","tap","fir","has","bos","bat","poc","hac","tid","hav","sap","lin","dib","hos","dab","bit","bar","rac","par","lod","dos","bor","toc","hil","mac","tom","dig","fil","fas","mit","hob","har","mig","hin","rad","mas","hal","rag","lag","fad","top","mop","hab","nil","nos","mil","fop","fam","dat","nol","din","hat","nac","ris","fot","rib","hoc","nim","lar","fit","wal","rap","sar","nal","mos","lan","don","dan","lad","dov","riv","bac","pol","lap","tal","pit","nam","bon","ros","ton","fod","pon","sov","noc","sor","lav","mat","mip","fip"],ne=["zod","nec","bud","wes","sev","per","sut","let","ful","pen","syt","dur","wep","ser","wyl","sun","ryp","syx","dyr","nup","heb","peg","lup","dep","dys","put","lug","hec","ryt","tyv","syd","nex","lun","mep","lut","sep","pes","del","sul","ped","tem","led","tul","met","wen","byn","hex","feb","pyl","dul","het","mev","rut","tyl","wyd","tep","bes","dex","sef","wyc","bur","der","nep","pur","rys","reb","den","nut","sub","pet","rul","syn","reg","tyd","sup","sem","wyn","rec","meg","net","sec","mul","nym","tev","web","sum","mut","nyx","rex","teb","fus","hep","ben","mus","wyx","sym","sel","ruc","dec","wex","syr","wet","dyl","myn","mes","det","bet","bel","tux","tug","myr","pel","syp","ter","meb","set","dut","deg","tex","sur","fel","tud","nux","rux","ren","wyt","nub","med","lyt","dus","neb","rum","tyn","seg","lyx","pun","res","red","fun","rev","ref","mec","ted","rus","bex","leb","dux","ryn","num","pyx","ryg","ryx","fep","tyr","tus","tyc","leg","nem","fer","mer","ten","lus","nus","syl","tec","mex","pub","rym","tuc","fyl","lep","deb","ber","mug","hut","tun","byl","sud","pem","dev","lur","def","bus","bep","run","mel","pex","dyt","byt","typ","lev","myl","wed","duc","fur","fex","nul","luc","len","ner","lex","rup","ned","lec","ryd","lyd","fen","wel","nyd","hus","rel","rud","nes","hes","fet","des","ret","dun","ler","nyr","seb","hul","ryl","lud","rem","lys","fyn","wer","ryc","sug","nys","nyl","lyn","dyn","dem","lux","fed","sed","bec","mun","lyr","tes","mud","nyt","byr","sen","weg","fyr","mur","tel","rep","teg","pec","nel","nev","fes"];function j(r,e){let n=e();return r[Math.floor(n*r.length)]}var F={galaxy(r){return`~${j(B,r)}`},star(r){let e=j(B,r),n=j(ne,r);return`~${e}${n}`},planet(r){let e=j(B,r),n=j(ne,r),l=j(B,r),f=j(ne,r);return`~${e}${n}-${l}${f}`}},_o=Fr("Urbit Name").withCategory("Fun").withDescription("Galaxy, star, and planet names in the Urbit computational metaverse.").withAbout(`
    This is just a playful implementation of Urbit names. Don't expect reliable or faithful
    results when compared to official implementation.


    More details [on Stack Overflow](https://stackoverflow.com/questions/38139453/how-are-urbit-phonetic-names-encoded).
  `).withAuthor("urbit Project","urbit.org").withVideo("https://www.youtube.com/watch?v=M04AKTCDavc").withIcon(`
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M22 14.0488H19.6306C19.4522 15.0976 18.9936 15.7317 18.1783 15.7317C16.7006 15.7317 15.8599 14 13.5669 14C11.3503 14 10.1783 15.3659 10 17.9756H12.3694C12.5478 16.9024 13.0064 16.2683 13.8471 16.2683C15.3248 16.2683 16.1146 18 18.4586 18C20.6242 18 21.8217 16.6341 22 14.0488Z" fill="currentColor"/>
  </svg>
  `).withRequiredPrimitiveParam("value").withStringParam("kind",`Kind (${Object.keys(F).join(", ")})`).withStringResult().withTest({value:"Glide"},"~micmec-talrun").withTest({value:"Glide",kind:"galaxy"},"~sop").withTest({value:"Glide",kind:"star"},"~ranwes").withTest({value:"Glide",kind:"planet"},"~micmec-talrun").run(({value:r,kind:e="planet"})=>{var l;let n=(0,lt.default)(""+r+e);return(l=F[e])==null?void 0:l.call(F,n)});})();
//# sourceMappingURL=index.js.map