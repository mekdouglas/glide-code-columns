var lt=Object.create;var L=Object.defineProperty,ct=Object.defineProperties,ft=Object.getOwnPropertyDescriptor,dt=Object.getOwnPropertyDescriptors,mt=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,pt=Object.getPrototypeOf,ie=Object.prototype.hasOwnProperty,ht=Object.prototype.propertyIsEnumerable;var oe=(r,e,n)=>e in r?L(r,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[e]=n,k=(r,e)=>{for(var n in e||(e={}))ie.call(e,n)&&oe(r,n,e[n]);if(ne)for(var n of ne(e))ht.call(e,n)&&oe(r,n,e[n]);return r},I=(r,e)=>ct(r,dt(e)),gt=r=>L(r,"__esModule",{value:!0});var m=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var xt=(r,e,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of mt(e))!ie.call(r,l)&&l!=="default"&&L(r,l,{get:()=>e[l],enumerable:!(n=ft(e,l))||n.enumerable});return r},ae=r=>xt(gt(L(r!=null?lt(pt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var ue=(r,e,n)=>new Promise((l,d)=>{var p=o=>{try{t(n.next(o))}catch(u){d(u)}},s=o=>{try{t(n.throw(o))}catch(u){d(u)}},t=o=>o.done?l(o.value):Promise.resolve(o.value).then(p,s);t((n=n.apply(r,e)).next())});var le=m((to,se)=>{function bt(r,e,n,l){var d=-1,p=r==null?0:r.length;for(l&&p&&(n=r[++d]);++d<p;)n=e(n,r[d],d,r);return n}se.exports=bt});var fe=m((no,ce)=>{function wt(r){return function(e){return r==null?void 0:r[e]}}ce.exports=wt});var me=m((io,de)=>{var yt=fe(),vt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Tt=yt(vt);de.exports=Tt});var he=m((oo,pe)=>{var Ct=typeof global=="object"&&global&&global.Object===Object&&global;pe.exports=Ct});var xe=m((ao,ge)=>{var Pt=he(),Rt=typeof self=="object"&&self&&self.Object===Object&&self,St=Pt||Rt||Function("return this")();ge.exports=St});var G=m((uo,be)=>{var kt=xe(),Mt=kt.Symbol;be.exports=Mt});var ye=m((so,we)=>{function At(r,e){for(var n=-1,l=r==null?0:r.length,d=Array(l);++n<l;)d[n]=e(r[n],n,r);return d}we.exports=At});var Te=m((lo,ve)=>{var qt=Array.isArray;ve.exports=qt});var Se=m((co,Re)=>{var Ce=G(),Pe=Object.prototype,jt=Pe.hasOwnProperty,Ot=Pe.toString,N=Ce?Ce.toStringTag:void 0;function Vt(r){var e=jt.call(r,N),n=r[N];try{r[N]=void 0;var l=!0}catch(p){}var d=Ot.call(r);return l&&(e?r[N]=n:delete r[N]),d}Re.exports=Vt});var Me=m((fo,ke)=>{var Dt=Object.prototype,zt=Dt.toString;function Nt(r){return zt.call(r)}ke.exports=Nt});var Oe=m((mo,je)=>{var Ae=G(),Ut=Se(),Lt=Me(),It="[object Null]",Gt="[object Undefined]",qe=Ae?Ae.toStringTag:void 0;function Ht(r){return r==null?r===void 0?Gt:It:qe&&qe in Object(r)?Ut(r):Lt(r)}je.exports=Ht});var De=m((po,Ve)=>{function _t(r){return r!=null&&typeof r=="object"}Ve.exports=_t});var Ne=m((ho,ze)=>{var Et=Oe(),Ft=De(),Bt="[object Symbol]";function Wt(r){return typeof r=="symbol"||Ft(r)&&Et(r)==Bt}ze.exports=Wt});var _e=m((go,He)=>{var Ue=G(),Zt=ye(),Xt=Te(),$t=Ne(),Jt=1/0,Le=Ue?Ue.prototype:void 0,Ie=Le?Le.toString:void 0;function Ge(r){if(typeof r=="string")return r;if(Xt(r))return Zt(r,Ge)+"";if($t(r))return Ie?Ie.call(r):"";var e=r+"";return e=="0"&&1/r==-Jt?"-0":e}He.exports=Ge});var H=m((xo,Ee)=>{var Kt=_e();function Yt(r){return r==null?"":Kt(r)}Ee.exports=Yt});var Be=m((bo,Fe)=>{var Qt=me(),en=H(),rn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",an=tn+nn+on,un="["+an+"]",sn=RegExp(un,"g");function ln(r){return r=en(r),r&&r.replace(rn,Qt).replace(sn,"")}Fe.exports=ln});var Ze=m((wo,We)=>{var cn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function fn(r){return r.match(cn)||[]}We.exports=fn});var $e=m((yo,Xe)=>{var dn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function mn(r){return dn.test(r)}Xe.exports=mn});var pr=m((vo,mr)=>{var Je="\\ud800-\\udfff",pn="\\u0300-\\u036f",hn="\\ufe20-\\ufe2f",gn="\\u20d0-\\u20ff",xn=pn+hn+gn,Ke="\\u2700-\\u27bf",Ye="a-z\\xdf-\\xf6\\xf8-\\xff",bn="\\xac\\xb1\\xd7\\xf7",wn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yn="\\u2000-\\u206f",vn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Qe="A-Z\\xc0-\\xd6\\xd8-\\xde",Tn="\\ufe0e\\ufe0f",er=bn+wn+yn+vn,rr="['\u2019]",tr="["+er+"]",Cn="["+xn+"]",nr="\\d+",Pn="["+Ke+"]",ir="["+Ye+"]",or="[^"+Je+er+nr+Ke+Ye+Qe+"]",Rn="\\ud83c[\\udffb-\\udfff]",Sn="(?:"+Cn+"|"+Rn+")",kn="[^"+Je+"]",ar="(?:\\ud83c[\\udde6-\\uddff]){2}",ur="[\\ud800-\\udbff][\\udc00-\\udfff]",O="["+Qe+"]",Mn="\\u200d",sr="(?:"+ir+"|"+or+")",An="(?:"+O+"|"+or+")",lr="(?:"+rr+"(?:d|ll|m|re|s|t|ve))?",cr="(?:"+rr+"(?:D|LL|M|RE|S|T|VE))?",fr=Sn+"?",dr="["+Tn+"]?",qn="(?:"+Mn+"(?:"+[kn,ar,ur].join("|")+")"+dr+fr+")*",jn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",On="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vn=dr+fr+qn,Dn="(?:"+[Pn,ar,ur].join("|")+")"+Vn,zn=RegExp([O+"?"+ir+"+"+lr+"(?="+[tr,O,"$"].join("|")+")",An+"+"+cr+"(?="+[tr,O+sr,"$"].join("|")+")",O+"?"+sr+"+"+lr,O+"+"+cr,On,jn,nr,Dn].join("|"),"g");function Nn(r){return r.match(zn)||[]}mr.exports=Nn});var gr=m((To,hr)=>{var Un=Ze(),Ln=$e(),In=H(),Gn=pr();function Hn(r,e,n){return r=In(r),e=n?void 0:e,e===void 0?Ln(r)?Gn(r):Un(r):r.match(e)||[]}hr.exports=Hn});var br=m((Co,xr)=>{var _n=le(),En=Be(),Fn=gr(),Bn="['\u2019]",Wn=RegExp(Bn,"g");function Zn(r){return function(e){return _n(Fn(En(e).replace(Wn,"")),r,"")}}xr.exports=Zn});var yr=m((Po,wr)=>{function Xn(r,e,n){var l=-1,d=r.length;e<0&&(e=-e>d?0:d+e),n=n>d?d:n,n<0&&(n+=d),d=e>n?0:n-e>>>0,e>>>=0;for(var p=Array(d);++l<d;)p[l]=r[l+e];return p}wr.exports=Xn});var Tr=m((Ro,vr)=>{var $n=yr();function Jn(r,e,n){var l=r.length;return n=n===void 0?l:n,!e&&n>=l?r:$n(r,e,n)}vr.exports=Jn});var W=m((So,Cr)=>{var Kn="\\ud800-\\udfff",Yn="\\u0300-\\u036f",Qn="\\ufe20-\\ufe2f",ei="\\u20d0-\\u20ff",ri=Yn+Qn+ei,ti="\\ufe0e\\ufe0f",ni="\\u200d",ii=RegExp("["+ni+Kn+ri+ti+"]");function oi(r){return ii.test(r)}Cr.exports=oi});var Rr=m((ko,Pr)=>{function ai(r){return r.split("")}Pr.exports=ai});var Vr=m((Mo,Or)=>{var Sr="\\ud800-\\udfff",ui="\\u0300-\\u036f",si="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",ci=ui+si+li,fi="\\ufe0e\\ufe0f",di="["+Sr+"]",Z="["+ci+"]",X="\\ud83c[\\udffb-\\udfff]",mi="(?:"+Z+"|"+X+")",kr="[^"+Sr+"]",Mr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",pi="\\u200d",qr=mi+"?",jr="["+fi+"]?",hi="(?:"+pi+"(?:"+[kr,Mr,Ar].join("|")+")"+jr+qr+")*",gi=jr+qr+hi,xi="(?:"+[kr+Z+"?",Z,Mr,Ar,di].join("|")+")",bi=RegExp(X+"(?="+X+")|"+xi+gi,"g");function wi(r){return r.match(bi)||[]}Or.exports=wi});var zr=m((Ao,Dr)=>{var yi=Rr(),vi=W(),Ti=Vr();function Ci(r){return vi(r)?Ti(r):yi(r)}Dr.exports=Ci});var Ur=m((qo,Nr)=>{var Pi=Tr(),Ri=W(),Si=zr(),ki=H();function Mi(r){return function(e){e=ki(e);var n=Ri(e)?Si(e):void 0,l=n?n[0]:e.charAt(0),d=n?Pi(n,1).join(""):e.slice(1);return l[r]()+d}}Nr.exports=Mi});var Ir=m((jo,Lr)=>{var Ai=Ur(),qi=Ai("toUpperCase");Lr.exports=qi});var Hr=m((Oo,Gr)=>{var ji=br(),Oi=Ir(),Vi=ji(function(r,e,n){return r+(n?" ":"")+Oi(e)});Gr.exports=Vi});var Wr=m((Br,J)=>{(function(r,e,n){function l(t){var o=this,u=s();o.next=function(){var i=2091639*o.s0+o.c*23283064365386963e-26;return o.s0=o.s1,o.s1=o.s2,o.s2=i-(o.c=i|0)},o.c=1,o.s0=u(" "),o.s1=u(" "),o.s2=u(" "),o.s0-=u(t),o.s0<0&&(o.s0+=1),o.s1-=u(t),o.s1<0&&(o.s1+=1),o.s2-=u(t),o.s2<0&&(o.s2+=1),u=null}function d(t,o){return o.c=t.c,o.s0=t.s0,o.s1=t.s1,o.s2=t.s2,o}function p(t,o){var u=new l(t),i=o&&o.state,a=u.next;return a.int32=function(){return u.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,i&&(typeof i=="object"&&d(i,u),a.state=function(){return d(u,{})}),a}function s(){var t=4022871197,o=function(u){u=String(u);for(var i=0;i<u.length;i++){t+=u.charCodeAt(i);var a=.02519603282416938*t;t=a>>>0,a-=t,a*=t,t=a>>>0,a-=t,t+=a*4294967296}return(t>>>0)*23283064365386963e-26};return o}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.alea=p})(Br,typeof J=="object"&&J,typeof define=="function"&&define)});var Xr=m((Zr,K)=>{(function(r,e,n){function l(s){var t=this,o="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var i=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^i^i>>>8},s===(s|0)?t.x=s:o+=s;for(var u=0;u<o.length+64;u++)t.x^=o.charCodeAt(u)|0,t.next()}function d(s,t){return t.x=s.x,t.y=s.y,t.z=s.z,t.w=s.w,t}function p(s,t){var o=new l(s),u=t&&t.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do var a=o.next()>>>11,c=(o.next()>>>0)/4294967296,f=(a+c)/(1<<21);while(f===0);return f},i.int32=o.next,i.quick=i,u&&(typeof u=="object"&&d(u,o),i.state=function(){return d(o,{})}),i}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.xor128=p})(Zr,typeof K=="object"&&K,typeof define=="function"&&define)});var Jr=m(($r,Y)=>{(function(r,e,n){function l(s){var t=this,o="";t.next=function(){var i=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(i^i<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,s===(s|0)?t.x=s:o+=s;for(var u=0;u<o.length+64;u++)t.x^=o.charCodeAt(u)|0,u==o.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function d(s,t){return t.x=s.x,t.y=s.y,t.z=s.z,t.w=s.w,t.v=s.v,t.d=s.d,t}function p(s,t){var o=new l(s),u=t&&t.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do var a=o.next()>>>11,c=(o.next()>>>0)/4294967296,f=(a+c)/(1<<21);while(f===0);return f},i.int32=o.next,i.quick=i,u&&(typeof u=="object"&&d(u,o),i.state=function(){return d(o,{})}),i}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.xorwow=p})($r,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Yr=m((Kr,Q)=>{(function(r,e,n){function l(s){var t=this;t.next=function(){var u=t.x,i=t.i,a,c,f;return a=u[i],a^=a>>>7,c=a^a<<24,a=u[i+1&7],c^=a^a>>>10,a=u[i+3&7],c^=a^a>>>3,a=u[i+4&7],c^=a^a<<7,a=u[i+7&7],a=a^a<<13,c^=a^a<<9,u[i]=c,t.i=i+1&7,c};function o(u,i){var a,c,f=[];if(i===(i|0))c=f[0]=i;else for(i=""+i,a=0;a<i.length;++a)f[a&7]=f[a&7]<<15^i.charCodeAt(a)+f[a+1&7]<<13;for(;f.length<8;)f.push(0);for(a=0;a<8&&f[a]===0;++a);for(a==8?c=f[7]=-1:c=f[a],u.x=f,u.i=0,a=256;a>0;--a)u.next()}o(t,s)}function d(s,t){return t.x=s.x.slice(),t.i=s.i,t}function p(s,t){s==null&&(s=+new Date);var o=new l(s),u=t&&t.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do var a=o.next()>>>11,c=(o.next()>>>0)/4294967296,f=(a+c)/(1<<21);while(f===0);return f},i.int32=o.next,i.quick=i,u&&(u.x&&d(u,o),i.state=function(){return d(o,{})}),i}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.xorshift7=p})(Kr,typeof Q=="object"&&Q,typeof define=="function"&&define)});var et=m((Qr,ee)=>{(function(r,e,n){function l(s){var t=this;t.next=function(){var u=t.w,i=t.X,a=t.i,c,f;return t.w=u=u+1640531527|0,f=i[a+34&127],c=i[a=a+1&127],f^=f<<13,c^=c<<17,f^=f>>>15,c^=c>>>12,f=i[a]=f^c,t.i=a,f+(u^u>>>16)|0};function o(u,i){var a,c,f,y,M,P=[],V=128;for(i===(i|0)?(c=i,i=null):(i=i+"\0",c=0,V=Math.max(V,i.length)),f=0,y=-32;y<V;++y)i&&(c^=i.charCodeAt((y+32)%i.length)),y===0&&(M=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,y>=0&&(M=M+1640531527|0,a=P[y&127]^=c+M,f=a==0?f+1:0);for(f>=128&&(P[(i&&i.length||0)&127]=-1),f=127,y=4*128;y>0;--y)c=P[f+34&127],a=P[f=f+1&127],c^=c<<13,a^=a<<17,c^=c>>>15,a^=a>>>12,P[f]=c^a;u.w=M,u.X=P,u.i=f}o(t,s)}function d(s,t){return t.i=s.i,t.w=s.w,t.X=s.X.slice(),t}function p(s,t){s==null&&(s=+new Date);var o=new l(s),u=t&&t.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do var a=o.next()>>>11,c=(o.next()>>>0)/4294967296,f=(a+c)/(1<<21);while(f===0);return f},i.int32=o.next,i.quick=i,u&&(u.X&&d(u,o),i.state=function(){return d(o,{})}),i}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.xor4096=p})(Qr,typeof ee=="object"&&ee,typeof define=="function"&&define)});var tt=m((rt,re)=>{(function(r,e,n){function l(s){var t=this,o="";t.next=function(){var i=t.b,a=t.c,c=t.d,f=t.a;return i=i<<25^i>>>7^a,a=a-c|0,c=c<<24^c>>>8^f,f=f-i|0,t.b=i=i<<20^i>>>12^a,t.c=a=a-c|0,t.d=c<<16^a>>>16^f,t.a=f-i|0},t.a=0,t.b=0,t.c=2654435769|0,t.d=1367130551,s===Math.floor(s)?(t.a=s/4294967296|0,t.b=s|0):o+=s;for(var u=0;u<o.length+20;u++)t.b^=o.charCodeAt(u)|0,t.next()}function d(s,t){return t.a=s.a,t.b=s.b,t.c=s.c,t.d=s.d,t}function p(s,t){var o=new l(s),u=t&&t.state,i=function(){return(o.next()>>>0)/4294967296};return i.double=function(){do var a=o.next()>>>11,c=(o.next()>>>0)/4294967296,f=(a+c)/(1<<21);while(f===0);return f},i.int32=o.next,i.quick=i,u&&(typeof u=="object"&&d(u,o),i.state=function(){return d(o,{})}),i}e&&e.exports?e.exports=p:n&&n.amd?n(function(){return p}):this.tychei=p})(rt,typeof re=="object"&&re,typeof define=="function"&&define)});var nt=m(()=>{});var ot=m((it,E)=>{(function(r,e,n){var l=256,d=6,p=52,s="random",t=n.pow(l,d),o=n.pow(2,p),u=o*2,i=l-1,a;function c(h,g,w){var b=[];g=g==!0?{entropy:!0}:g||{};var x=P(M(g.entropy?[h,D(e)]:h??V(),3),b),v=new f(b),C=function(){for(var T=v.g(d),S=t,R=0;T<o;)T=(T+R)*l,S*=l,R=v.g(1);for(;T>=u;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,P(D(v.S),e),(g.pass||w||function(T,S,R,A){return A&&(A.S&&y(A,v),T.state=function(){return y(v,{})}),R?(n[s]=T,S):T})(C,x,"global"in g?g.global:this==n,g.state)}function f(h){var g,w=h.length,b=this,x=0,v=b.i=b.j=0,C=b.S=[];for(w||(h=[w++]);x<l;)C[x]=x++;for(x=0;x<l;x++)C[x]=C[v=i&v+h[x%w]+(g=C[x])],C[v]=g;(b.g=function(T){for(var S,R=0,A=b.i,U=b.j,z=b.S;T--;)S=z[A=i&A+1],R=R*l+z[i&(z[A]=z[U=i&U+S])+(z[U]=S)];return b.i=A,b.j=U,R})(l)}function y(h,g){return g.i=h.i,g.j=h.j,g.S=h.S.slice(),g}function M(h,g){var w=[],b=typeof h,x;if(g&&b=="object")for(x in h)try{w.push(M(h[x],g-1))}catch(v){}return w.length?w:b=="string"?h:h+"\0"}function P(h,g){for(var w=h+"",b,x=0;x<w.length;)g[i&x]=i&(b^=g[i&x]*19)+w.charCodeAt(x++);return D(g)}function V(){try{var h;return a&&(h=a.randomBytes)?h=h(l):(h=new Uint8Array(l),(r.crypto||r.msCrypto).getRandomValues(h)),D(h)}catch(b){var g=r.navigator,w=g&&g.plugins;return[+new Date,r,w,r.screen,D(e)]}}function D(h){return String.fromCharCode.apply(0,h)}if(P(n.random(),e),typeof E=="object"&&E.exports){E.exports=c;try{a=nt()}catch(h){}}else typeof define=="function"&&define.amd?define(function(){return c}):n["seed"+s]=c})(typeof self!="undefined"?self:it,[],Math)});var ut=m((Lo,at)=>{var $i=Wr(),Ji=Xr(),Ki=Jr(),Yi=Yr(),Qi=et(),eo=tt(),q=ot();q.alea=$i;q.xor128=Ji;q.xorwow=Ki;q.xorshift7=Yi;q.xor4096=Qi;q.tychei=eo;at.exports=q});var Er=ae(Hr());var Di=`
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
    `,zi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Ni=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,_r=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,Ui=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Li=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Ii=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Gi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Hi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,_i=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Ei=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Fi=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,Bi={Glide:Di,"Machine Learning":Ei,General:_r,Array:Ui,Number:Ni,Encoding:Fi,Text:_i,"Data & APIs":Hi,Image:Li,Fun:Ii,"Date & Time":Gi,Code:zi};function $({icon:r,category:e}){var n;return(n=r!=null?r:Bi[e])!=null?n:_r}function Wi(r){return I(k({},r),{json:JSON.stringify(Zi(r),null,2)})}function Zi(r){let{name:e,category:n,released:l,description:d,author:p,result:s,params:t,about:o,video:u}=r,i=$(r);return{name:e,category:n,released:l,description:d,author:p,result:s,about:o,icon:i,video:u,params:Object.entries(t).map(([a,c])=>k({name:a},c))}}var Xi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return ue(this,null,function*(){})}},_=class{constructor(e={},n=[]){this.definition=k(k({},Xi),e),this.requiredParams=[...n]}with(e,n=[]){return new _(k(k({},this.definition),e),[...this.requiredParams,...n])}withName(e){return this.with({name:e})}withCategory(e){let{icon:n}=this.definition;return this.with({category:e,icon:$({icon:n,category:e})})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,n){return this.with({author:`${e} <${n}>`})}withTest(e,n){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:e,expectedResult:n}]})}withFailingTest(e,n){let{tests:l=[]}=this.definition;return this.with({tests:[...l,{params:e,expectedResult:n,allowFailure:!0}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,n,l){return l===void 0&&(l=(0,Er.default)(n)),this.with({params:I(k({},this.definition.params),{[n]:{type:e,displayName:l}})})}withRequiredParam(e,n,l){return this.withParam(e,n,l).with({},[n])}withPrimitiveParam(e,n){return this.withParam("primitive",e,n)}withStringParam(e,n){return this.withParam("string",e,n)}withDateParam(e,n){return this.withParam("date-time",e,n)}withNumberParam(e,n){return this.withParam("number",e,n)}withRequiredPrimitiveParam(e,n){return this.withRequiredParam("primitive",e,n)}withRequiredStringParam(e,n){return this.withRequiredParam("string",e,n)}withRequiredDateParam(e,n){return this.withRequiredParam("date-time",e,n)}withRequiredNumberParam(e,n){return this.withRequiredParam("number",e,n)}withStringArrayParam(e,n){return this.withParam({kind:"array",items:"string"},e,n)}withRequiredStringArrayParam(e,n){return this.withRequiredParam({kind:"array",items:"string"},e,n)}withNumberArrayParam(e,n){return this.withParam({kind:"array",items:"number"},e,n)}withPrimitiveArrayParam(e,n){return this.withParam({kind:"array",items:"primitive"},e,n)}withRequiredPrimitiveArrayParam(e,n){return this.withRequiredParam({kind:"array",items:"primitive"},e,n)}withExample(e){return this.with({example:e})}run(e){let{params:n}=this.definition,l=this.requiredParams,d=Object.keys(n);function p(...s){let t={};if(s.forEach(({value:o},u)=>{t[d[u]]=o}),!l.some(o=>t[o]===void 0))return e(t)}return Wi(I(k({},this.definition),{run:p}))}};function Fr(r){return new _({name:r})}var st=ae(ut()),F=["doz","mar","bin","wan","sam","lit","sig","hid","fid","lis","sog","dir","wac","sab","wis","sib","rig","sol","dop","mod","fog","lid","hop","dar","dor","lor","hod","fol","rin","tog","sil","mir","hol","pas","lac","rov","liv","dal","sat","lib","tab","han","tic","pid","tor","bol","fos","dot","los","dil","for","pil","ram","tir","win","tad","bic","dif","roc","wid","bis","das","mid","lop","ril","nar","dap","mol","san","loc","nov","sit","nid","tip","sic","rop","wit","nat","pan","min","rit","pod","mot","tam","tol","sav","pos","nap","nop","som","fin","fon","ban","mor","wor","sip","ron","nor","bot","wic","soc","wat","dol","mag","pic","dav","bid","bal","tim","tas","mal","lig","siv","tag","pad","sal","div","dac","tan","sid","fab","tar","mon","ran","nis","wol","mis","pal","las","dis","map","rab","tob","rol","lat","lon","nod","nav","fig","nom","nib","pag","sop","ral","bil","had","doc","rid","moc","pac","rav","rip","fal","tod","til","tin","hap","mic","fan","pat","tac","lab","mog","sim","son","pin","lom","ric","tap","fir","has","bos","bat","poc","hac","tid","hav","sap","lin","dib","hos","dab","bit","bar","rac","par","lod","dos","bor","toc","hil","mac","tom","dig","fil","fas","mit","hob","har","mig","hin","rad","mas","hal","rag","lag","fad","top","mop","hab","nil","nos","mil","fop","fam","dat","nol","din","hat","nac","ris","fot","rib","hoc","nim","lar","fit","wal","rap","sar","nal","mos","lan","don","dan","lad","dov","riv","bac","pol","lap","tal","pit","nam","bon","ros","ton","fod","pon","sov","noc","sor","lav","mat","mip","fip"],te=["zod","nec","bud","wes","sev","per","sut","let","ful","pen","syt","dur","wep","ser","wyl","sun","ryp","syx","dyr","nup","heb","peg","lup","dep","dys","put","lug","hec","ryt","tyv","syd","nex","lun","mep","lut","sep","pes","del","sul","ped","tem","led","tul","met","wen","byn","hex","feb","pyl","dul","het","mev","rut","tyl","wyd","tep","bes","dex","sef","wyc","bur","der","nep","pur","rys","reb","den","nut","sub","pet","rul","syn","reg","tyd","sup","sem","wyn","rec","meg","net","sec","mul","nym","tev","web","sum","mut","nyx","rex","teb","fus","hep","ben","mus","wyx","sym","sel","ruc","dec","wex","syr","wet","dyl","myn","mes","det","bet","bel","tux","tug","myr","pel","syp","ter","meb","set","dut","deg","tex","sur","fel","tud","nux","rux","ren","wyt","nub","med","lyt","dus","neb","rum","tyn","seg","lyx","pun","res","red","fun","rev","ref","mec","ted","rus","bex","leb","dux","ryn","num","pyx","ryg","ryx","fep","tyr","tus","tyc","leg","nem","fer","mer","ten","lus","nus","syl","tec","mex","pub","rym","tuc","fyl","lep","deb","ber","mug","hut","tun","byl","sud","pem","dev","lur","def","bus","bep","run","mel","pex","dyt","byt","typ","lev","myl","wed","duc","fur","fex","nul","luc","len","ner","lex","rup","ned","lec","ryd","lyd","fen","wel","nyd","hus","rel","rud","nes","hes","fet","des","ret","dun","ler","nyr","seb","hul","ryl","lud","rem","lys","fyn","wer","ryc","sug","nys","nyl","lyn","dyn","dem","lux","fed","sed","bec","mun","lyr","tes","mud","nyt","byr","sen","weg","fyr","mur","tel","rep","teg","pec","nel","nev","fes"];function j(r,e){let n=e();return r[Math.floor(n*r.length)]}var B={galaxy(r){return`~${j(F,r)}`},star(r){let e=j(F,r),n=j(te,r);return`~${e}${n}`},planet(r){let e=j(F,r),n=j(te,r),l=j(F,r),d=j(te,r);return`~${e}${n}-${l}${d}`}},Go=Fr("Urbit Name").withCategory("Fun").withDescription("Galaxy, star, and planet names in the Urbit computational metaverse.").withAbout(`
    This is just a playful implementation of Urbit names. Don't expect reliable or faithful
    results when compared to official implementation.


    More details [on Stack Overflow](https://stackoverflow.com/questions/38139453/how-are-urbit-phonetic-names-encoded).
  `).withAuthor("urbit Project","urbit.org").withVideo("https://www.youtube.com/watch?v=M04AKTCDavc").withIcon(`
  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2"/>
    <path d="M22 14.0488H19.6306C19.4522 15.0976 18.9936 15.7317 18.1783 15.7317C16.7006 15.7317 15.8599 14 13.5669 14C11.3503 14 10.1783 15.3659 10 17.9756H12.3694C12.5478 16.9024 13.0064 16.2683 13.8471 16.2683C15.3248 16.2683 16.1146 18 18.4586 18C20.6242 18 21.8217 16.6341 22 14.0488Z" fill="currentColor"/>
  </svg>
  `).withRequiredPrimitiveParam("value").withStringParam("kind",`Kind (${Object.keys(B).join(", ")})`).withStringResult().withTest({value:"Glide"},"~micmec-talrun").withTest({value:"Glide",kind:"galaxy"},"~sop").withTest({value:"Glide",kind:"star"},"~ranwes").withTest({value:"Glide",kind:"planet"},"~micmec-talrun").run(({value:r,kind:e="planet"})=>{var l;let n=(0,st.default)(""+r+e);return(l=B[e])==null?void 0:l.call(B,n)});export{Go as default};
//# sourceMappingURL=function.js.map
