(()=>{var at=Object.create;var _=Object.defineProperty,ot=Object.defineProperties,st=Object.getOwnPropertyDescriptor,ft=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,lt=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty,dt=Object.prototype.propertyIsEnumerable;var er=(t,r,i)=>r in t?_(t,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[r]=i,q=(t,r)=>{for(var i in r||(r={}))rr.call(r,i)&&er(t,i,r[i]);if(Q)for(var i of Q(r))dt.call(r,i)&&er(t,i,r[i]);return t},I=(t,r)=>ot(t,ft(r)),mt=t=>_(t,"__esModule",{value:!0});var x=(t,r)=>()=>(r||t((r={exports:{}}).exports,r),r.exports);var xt=(t,r,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let f of ct(r))!rr.call(t,f)&&f!=="default"&&_(t,f,{get:()=>r[f],enumerable:!(i=st(r,f))||i.enumerable});return t},tr=t=>xt(mt(_(t!=null?at(lt(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Z=(t,r,i)=>new Promise((f,l)=>{var m=u=>{try{e(i.next(u))}catch(o){l(o)}},s=u=>{try{e(i.throw(u))}catch(o){l(o)}},e=u=>u.done?f(u.value):Promise.resolve(u.value).then(m,s);e((i=i.apply(t,r)).next())});var nr=x((Zn,ir)=>{function pt(t,r,i,f){var l=-1,m=t==null?0:t.length;for(f&&m&&(i=t[++l]);++l<m;)i=r(i,t[l],l,t);return i}ir.exports=pt});var ar=x((Wn,ur)=>{function gt(t){return function(r){return t==null?void 0:t[r]}}ur.exports=gt});var sr=x((Fn,or)=>{var ht=ar(),bt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},yt=ht(bt);or.exports=yt});var cr=x((Xn,fr)=>{var wt=typeof global=="object"&&global&&global.Object===Object&&global;fr.exports=wt});var dr=x((Hn,lr)=>{var vt=cr(),Tt=typeof self=="object"&&self&&self.Object===Object&&self,Ct=vt||Tt||Function("return this")();lr.exports=Ct});var E=x((Jn,mr)=>{var Pt=dr(),Rt=Pt.Symbol;mr.exports=Rt});var pr=x((Bn,xr)=>{function St(t,r){for(var i=-1,f=t==null?0:t.length,l=Array(f);++i<f;)l[i]=r(t[i],i,t);return l}xr.exports=St});var hr=x((Yn,gr)=>{var qt=Array.isArray;gr.exports=qt});var vr=x(($n,wr)=>{var br=E(),yr=Object.prototype,At=yr.hasOwnProperty,jt=yr.toString,D=br?br.toStringTag:void 0;function Ot(t){var r=At.call(t,D),i=t[D];try{t[D]=void 0;var f=!0}catch(m){}var l=jt.call(t);return f&&(r?t[D]=i:delete t[D]),l}wr.exports=Ot});var Cr=x((Kn,Tr)=>{var Mt=Object.prototype,Lt=Mt.toString;function Nt(t){return Lt.call(t)}Tr.exports=Nt});var qr=x((Qn,Sr)=>{var Pr=E(),kt=vr(),Dt=Cr(),Ut="[object Null]",_t="[object Undefined]",Rr=Pr?Pr.toStringTag:void 0;function It(t){return t==null?t===void 0?_t:Ut:Rr&&Rr in Object(t)?kt(t):Dt(t)}Sr.exports=It});var jr=x((ru,Ar)=>{function Et(t){return t!=null&&typeof t=="object"}Ar.exports=Et});var Mr=x((eu,Or)=>{var zt=qr(),Gt=jr(),Vt="[object Symbol]";function Zt(t){return typeof t=="symbol"||Gt(t)&&zt(t)==Vt}Or.exports=Zt});var _r=x((tu,Ur)=>{var Lr=E(),Wt=pr(),Ft=hr(),Xt=Mr(),Ht=1/0,Nr=Lr?Lr.prototype:void 0,kr=Nr?Nr.toString:void 0;function Dr(t){if(typeof t=="string")return t;if(Ft(t))return Wt(t,Dr)+"";if(Xt(t))return kr?kr.call(t):"";var r=t+"";return r=="0"&&1/t==-Ht?"-0":r}Ur.exports=Dr});var z=x((iu,Ir)=>{var Jt=_r();function Bt(t){return t==null?"":Jt(t)}Ir.exports=Bt});var zr=x((nu,Er)=>{var Yt=sr(),$t=z(),Kt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qt="\\u0300-\\u036f",ri="\\ufe20-\\ufe2f",ei="\\u20d0-\\u20ff",ti=Qt+ri+ei,ii="["+ti+"]",ni=RegExp(ii,"g");function ui(t){return t=$t(t),t&&t.replace(Kt,Yt).replace(ni,"")}Er.exports=ui});var Vr=x((uu,Gr)=>{var ai=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function oi(t){return t.match(ai)||[]}Gr.exports=oi});var Wr=x((au,Zr)=>{var si=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function fi(t){return si.test(t)}Zr.exports=fi});var fe=x((ou,se)=>{var Fr="\\ud800-\\udfff",ci="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",di="\\u20d0-\\u20ff",mi=ci+li+di,Xr="\\u2700-\\u27bf",Hr="a-z\\xdf-\\xf6\\xf8-\\xff",xi="\\xac\\xb1\\xd7\\xf7",pi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",gi="\\u2000-\\u206f",hi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",bi="\\ufe0e\\ufe0f",Br=xi+pi+gi+hi,Yr="['\u2019]",$r="["+Br+"]",yi="["+mi+"]",Kr="\\d+",wi="["+Xr+"]",Qr="["+Hr+"]",re="[^"+Fr+Br+Kr+Xr+Hr+Jr+"]",vi="\\ud83c[\\udffb-\\udfff]",Ti="(?:"+yi+"|"+vi+")",Ci="[^"+Fr+"]",ee="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",M="["+Jr+"]",Pi="\\u200d",ie="(?:"+Qr+"|"+re+")",Ri="(?:"+M+"|"+re+")",ne="(?:"+Yr+"(?:d|ll|m|re|s|t|ve))?",ue="(?:"+Yr+"(?:D|LL|M|RE|S|T|VE))?",ae=Ti+"?",oe="["+bi+"]?",Si="(?:"+Pi+"(?:"+[Ci,ee,te].join("|")+")"+oe+ae+")*",qi="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ai="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",ji=oe+ae+Si,Oi="(?:"+[wi,ee,te].join("|")+")"+ji,Mi=RegExp([M+"?"+Qr+"+"+ne+"(?="+[$r,M,"$"].join("|")+")",Ri+"+"+ue+"(?="+[$r,M+ie,"$"].join("|")+")",M+"?"+ie+"+"+ne,M+"+"+ue,Ai,qi,Kr,Oi].join("|"),"g");function Li(t){return t.match(Mi)||[]}se.exports=Li});var le=x((su,ce)=>{var Ni=Vr(),ki=Wr(),Di=z(),Ui=fe();function _i(t,r,i){return t=Di(t),r=i?void 0:r,r===void 0?ki(t)?Ui(t):Ni(t):t.match(r)||[]}ce.exports=_i});var me=x((fu,de)=>{var Ii=nr(),Ei=zr(),zi=le(),Gi="['\u2019]",Vi=RegExp(Gi,"g");function Zi(t){return function(r){return Ii(zi(Ei(r).replace(Vi,"")),t,"")}}de.exports=Zi});var pe=x((cu,xe)=>{function Wi(t,r,i){var f=-1,l=t.length;r<0&&(r=-r>l?0:l+r),i=i>l?l:i,i<0&&(i+=l),l=r>i?0:i-r>>>0,r>>>=0;for(var m=Array(l);++f<l;)m[f]=t[f+r];return m}xe.exports=Wi});var he=x((lu,ge)=>{var Fi=pe();function Xi(t,r,i){var f=t.length;return i=i===void 0?f:i,!r&&i>=f?t:Fi(t,r,i)}ge.exports=Xi});var W=x((du,be)=>{var Hi="\\ud800-\\udfff",Ji="\\u0300-\\u036f",Bi="\\ufe20-\\ufe2f",Yi="\\u20d0-\\u20ff",$i=Ji+Bi+Yi,Ki="\\ufe0e\\ufe0f",Qi="\\u200d",rn=RegExp("["+Qi+Hi+$i+Ki+"]");function en(t){return rn.test(t)}be.exports=en});var we=x((mu,ye)=>{function tn(t){return t.split("")}ye.exports=tn});var Ae=x((xu,qe)=>{var ve="\\ud800-\\udfff",nn="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",on=nn+un+an,sn="\\ufe0e\\ufe0f",fn="["+ve+"]",F="["+on+"]",X="\\ud83c[\\udffb-\\udfff]",cn="(?:"+F+"|"+X+")",Te="[^"+ve+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",ln="\\u200d",Re=cn+"?",Se="["+sn+"]?",dn="(?:"+ln+"(?:"+[Te,Ce,Pe].join("|")+")"+Se+Re+")*",mn=Se+Re+dn,xn="(?:"+[Te+F+"?",F,Ce,Pe,fn].join("|")+")",pn=RegExp(X+"(?="+X+")|"+xn+mn,"g");function gn(t){return t.match(pn)||[]}qe.exports=gn});var Oe=x((pu,je)=>{var hn=we(),bn=W(),yn=Ae();function wn(t){return bn(t)?yn(t):hn(t)}je.exports=wn});var Le=x((gu,Me)=>{var vn=he(),Tn=W(),Cn=Oe(),Pn=z();function Rn(t){return function(r){r=Pn(r);var i=Tn(r)?Cn(r):void 0,f=i?i[0]:r.charAt(0),l=i?vn(i,1).join(""):r.slice(1);return f[t]()+l}}Me.exports=Rn});var ke=x((hu,Ne)=>{var Sn=Le(),qn=Sn("toUpperCase");Ne.exports=qn});var Ue=x((bu,De)=>{var An=me(),jn=ke(),On=An(function(t,r,i){return t+(i?" ":"")+jn(r)});De.exports=On});var Ve=x((Ge,H)=>{(function(t,r,i){function f(e){var u=this,o=s();u.next=function(){var n=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=n-(u.c=n|0)},u.c=1,u.s0=o(" "),u.s1=o(" "),u.s2=o(" "),u.s0-=o(e),u.s0<0&&(u.s0+=1),u.s1-=o(e),u.s1<0&&(u.s1+=1),u.s2-=o(e),u.s2<0&&(u.s2+=1),o=null}function l(e,u){return u.c=e.c,u.s0=e.s0,u.s1=e.s1,u.s2=e.s2,u}function m(e,u){var o=new f(e),n=u&&u.state,a=o.next;return a.int32=function(){return o.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,n&&(typeof n=="object"&&l(n,o),a.state=function(){return l(o,{})}),a}function s(){var e=4022871197,u=function(o){o=String(o);for(var n=0;n<o.length;n++){e+=o.charCodeAt(n);var a=.02519603282416938*e;e=a>>>0,a-=e,a*=e,e=a>>>0,a-=e,e+=a*4294967296}return(e>>>0)*23283064365386963e-26};return u}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.alea=m})(Ge,typeof H=="object"&&H,typeof define=="function"&&define)});var We=x((Ze,J)=>{(function(t,r,i){function f(s){var e=this,u="";e.x=0,e.y=0,e.z=0,e.w=0,e.next=function(){var n=e.x^e.x<<11;return e.x=e.y,e.y=e.z,e.z=e.w,e.w^=e.w>>>19^n^n>>>8},s===(s|0)?e.x=s:u+=s;for(var o=0;o<u.length+64;o++)e.x^=u.charCodeAt(o)|0,e.next()}function l(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e}function m(s,e){var u=new f(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,c=(u.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xor128=m})(Ze,typeof J=="object"&&J,typeof define=="function"&&define)});var Xe=x((Fe,B)=>{(function(t,r,i){function f(s){var e=this,u="";e.next=function(){var n=e.x^e.x>>>2;return e.x=e.y,e.y=e.z,e.z=e.w,e.w=e.v,(e.d=e.d+362437|0)+(e.v=e.v^e.v<<4^(n^n<<1))|0},e.x=0,e.y=0,e.z=0,e.w=0,e.v=0,s===(s|0)?e.x=s:u+=s;for(var o=0;o<u.length+64;o++)e.x^=u.charCodeAt(o)|0,o==u.length&&(e.d=e.x<<10^e.x>>>4),e.next()}function l(s,e){return e.x=s.x,e.y=s.y,e.z=s.z,e.w=s.w,e.v=s.v,e.d=s.d,e}function m(s,e){var u=new f(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,c=(u.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xorwow=m})(Fe,typeof B=="object"&&B,typeof define=="function"&&define)});var Je=x((He,Y)=>{(function(t,r,i){function f(s){var e=this;e.next=function(){var o=e.x,n=e.i,a,c,d;return a=o[n],a^=a>>>7,c=a^a<<24,a=o[n+1&7],c^=a^a>>>10,a=o[n+3&7],c^=a^a>>>3,a=o[n+4&7],c^=a^a<<7,a=o[n+7&7],a=a^a<<13,c^=a^a<<9,o[n]=c,e.i=n+1&7,c};function u(o,n){var a,c,d=[];if(n===(n|0))c=d[0]=n;else for(n=""+n,a=0;a<n.length;++a)d[a&7]=d[a&7]<<15^n.charCodeAt(a)+d[a+1&7]<<13;for(;d.length<8;)d.push(0);for(a=0;a<8&&d[a]===0;++a);for(a==8?c=d[7]=-1:c=d[a],o.x=d,o.i=0,a=256;a>0;--a)o.next()}u(e,s)}function l(s,e){return e.x=s.x.slice(),e.i=s.i,e}function m(s,e){s==null&&(s=+new Date);var u=new f(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,c=(u.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(o.x&&l(o,u),n.state=function(){return l(u,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xorshift7=m})(He,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Ye=x((Be,$)=>{(function(t,r,i){function f(s){var e=this;e.next=function(){var o=e.w,n=e.X,a=e.i,c,d;return e.w=o=o+1640531527|0,d=n[a+34&127],c=n[a=a+1&127],d^=d<<13,c^=c<<17,d^=d>>>15,c^=c>>>12,d=n[a]=d^c,e.i=a,d+(o^o>>>16)|0};function u(o,n){var a,c,d,w,A,P=[],L=128;for(n===(n|0)?(c=n,n=null):(n=n+"\0",c=0,L=Math.max(L,n.length)),d=0,w=-32;w<L;++w)n&&(c^=n.charCodeAt((w+32)%n.length)),w===0&&(A=c),c^=c<<10,c^=c>>>15,c^=c<<4,c^=c>>>13,w>=0&&(A=A+1640531527|0,a=P[w&127]^=c+A,d=a==0?d+1:0);for(d>=128&&(P[(n&&n.length||0)&127]=-1),d=127,w=4*128;w>0;--w)c=P[d+34&127],a=P[d=d+1&127],c^=c<<13,a^=a<<17,c^=c>>>15,a^=a>>>12,P[d]=c^a;o.w=A,o.X=P,o.i=d}u(e,s)}function l(s,e){return e.i=s.i,e.w=s.w,e.X=s.X.slice(),e}function m(s,e){s==null&&(s=+new Date);var u=new f(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,c=(u.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(o.X&&l(o,u),n.state=function(){return l(u,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.xor4096=m})(Be,typeof $=="object"&&$,typeof define=="function"&&define)});var Ke=x(($e,K)=>{(function(t,r,i){function f(s){var e=this,u="";e.next=function(){var n=e.b,a=e.c,c=e.d,d=e.a;return n=n<<25^n>>>7^a,a=a-c|0,c=c<<24^c>>>8^d,d=d-n|0,e.b=n=n<<20^n>>>12^a,e.c=a=a-c|0,e.d=c<<16^a>>>16^d,e.a=d-n|0},e.a=0,e.b=0,e.c=2654435769|0,e.d=1367130551,s===Math.floor(s)?(e.a=s/4294967296|0,e.b=s|0):u+=s;for(var o=0;o<u.length+20;o++)e.b^=u.charCodeAt(o)|0,e.next()}function l(s,e){return e.a=s.a,e.b=s.b,e.c=s.c,e.d=s.d,e}function m(s,e){var u=new f(s),o=e&&e.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,c=(u.next()>>>0)/4294967296,d=(a+c)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}r&&r.exports?r.exports=m:i&&i.amd?i(function(){return m}):this.tychei=m})($e,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=x(()=>{});var et=x((rt,V)=>{(function(t,r,i){var f=256,l=6,m=52,s="random",e=i.pow(f,l),u=i.pow(2,m),o=u*2,n=f-1,a;function c(p,g,y){var b=[];g=g==!0?{entropy:!0}:g||{};var h=P(A(g.entropy?[p,N(r)]:p??L(),3),b),v=new d(b),C=function(){for(var T=v.g(l),S=e,R=0;T<u;)T=(T+R)*f,S*=f,R=v.g(1);for(;T>=o;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,P(N(v.S),r),(g.pass||y||function(T,S,R,j){return j&&(j.S&&w(j,v),T.state=function(){return w(v,{})}),R?(i[s]=T,S):T})(C,h,"global"in g?g.global:this==i,g.state)}function d(p){var g,y=p.length,b=this,h=0,v=b.i=b.j=0,C=b.S=[];for(y||(p=[y++]);h<f;)C[h]=h++;for(h=0;h<f;h++)C[h]=C[v=n&v+p[h%y]+(g=C[h])],C[v]=g;(b.g=function(T){for(var S,R=0,j=b.i,U=b.j,k=b.S;T--;)S=k[j=n&j+1],R=R*f+k[n&(k[j]=k[U=n&U+S])+(k[U]=S)];return b.i=j,b.j=U,R})(f)}function w(p,g){return g.i=p.i,g.j=p.j,g.S=p.S.slice(),g}function A(p,g){var y=[],b=typeof p,h;if(g&&b=="object")for(h in p)try{y.push(A(p[h],g-1))}catch(v){}return y.length?y:b=="string"?p:p+"\0"}function P(p,g){for(var y=p+"",b,h=0;h<y.length;)g[n&h]=n&(b^=g[n&h]*19)+y.charCodeAt(h++);return N(g)}function L(){try{var p;return a&&(p=a.randomBytes)?p=p(f):(p=new Uint8Array(f),(t.crypto||t.msCrypto).getRandomValues(p)),N(p)}catch(b){var g=t.navigator,y=g&&g.plugins;return[+new Date,t,y,t.screen,N(r)]}}function N(p){return String.fromCharCode.apply(0,p)}if(P(i.random(),r),typeof V=="object"&&V.exports){V.exports=c;try{a=Qe()}catch(p){}}else typeof define=="function"&&define.amd?define(function(){return c}):i["seed"+s]=c})(typeof self!="undefined"?self:rt,[],Math)});var it=x((Tu,tt)=>{var Un=Ve(),_n=We(),In=Xe(),En=Je(),zn=Ye(),Gn=Ke(),O=et();O.alea=Un;O.xor128=_n;O.xorwow=In;O.xorshift7=En;O.xor4096=zn;O.tychei=Gn;tt.exports=O});var _e=tr(Ue());function Ie(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(Ie):t}function Mn(t,r){return Z(this,null,function*(){var e;let{data:{key:i,params:f}}=t,l,m;try{l=yield r(...f)}catch(u){l=void 0;try{m=u.toString()}catch(o){m="Exception can't be stringified."}}let s={key:i};l!==void 0&&(l=Ie(l),s.result={type:"string",value:l}),m!==void 0&&(s.error=m),((e=t.source)==null?void 0:e.postMessage).call(e,s,"*")})}function Ln(t){return typeof window!="undefined"&&window.addEventListener("message",r=>Mn(r,t.run)),I(q({},t),{json:JSON.stringify(kn(t),null,2)})}var Nn=`
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
    `,Ee=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function kn(t){let{name:r,category:i,released:f,description:l,author:m,result:s,params:e,about:u,video:o}=t,{icon:n=Ee}=t;return n==="glide"&&(n=Nn),{name:r,category:i,released:f,description:l,author:m,result:s,about:u,icon:n,video:o,params:Object.entries(e).map(([a,c])=>q({name:a},c))}}var Dn={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Ee,about:void 0,video:void 0,tests:[],run(){return Z(this,null,function*(){})}},G=class{constructor(r={},i=[]){this.definition=q(q({},Dn),r),this.requiredParams=[...i]}with(r,i=[]){return new G(q(q({},this.definition),r),[...this.requiredParams,...i])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,i){return this.with({author:`${r} <${i}>`})}withTest(r,i){let{tests:f=[]}=this.definition;return this.with({tests:[...f,{params:r,expectedResult:i}]})}withFailingTest(r,i){let{tests:f=[]}=this.definition;return this.with({tests:[...f,{params:r,expectedResult:i,allowFailure:!0}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,i,f){return f===void 0&&(f=(0,_e.default)(i)),this.with({params:I(q({},this.definition.params),{[i]:{type:r,displayName:f}})})}withRequiredParam(r,i,f){return this.withParam(r,i,f).with({},[i])}withPrimitiveParam(r,i){return this.withParam("primitive",r,i)}withStringParam(r,i){return this.withParam("string",r,i)}withDateParam(r,i){return this.withParam("date-time",r,i)}withNumberParam(r,i){return this.withParam("number",r,i)}withRequiredPrimitiveParam(r,i){return this.withRequiredParam("primitive",r,i)}withRequiredStringParam(r,i){return this.withRequiredParam("string",r,i)}withRequiredDateParam(r,i){return this.withRequiredParam("date-time",r,i)}withRequiredNumberParam(r,i){return this.withRequiredParam("number",r,i)}withStringArrayParam(r,i){return this.withParam({kind:"array",items:"string"},r,i)}withRequiredStringArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"string"},r,i)}withNumberArrayParam(r,i){return this.withParam({kind:"array",items:"number"},r,i)}withPrimitiveArrayParam(r,i){return this.withParam({kind:"array",items:"primitive"},r,i)}withRequiredPrimitiveArrayParam(r,i){return this.withRequiredParam({kind:"array",items:"primitive"},r,i)}withExample(r){return this.with({example:r})}run(r){let{params:i}=this.definition,f=this.requiredParams,l=Object.keys(i);function m(...s){let e={};if(s.forEach(({value:u},o)=>{e[l[o]]=u}),!f.some(u=>e[u]===void 0))return r(e)}return Ln(I(q({},this.definition),{run:m}))}};function ze(t){return new G({name:t})}var nt=tr(it());function ut(t,r){if(r===0)return;if(r<0)return-ut(t,-r);let i=(0,nt.default)(t)();return Math.floor(r*i)+1}var Pu=ze("Roll Dice").withCategory("Number").withReleased("direct").withDescription("Roll dice of various sizes.").withRequiredPrimitiveParam("seed","Roll Seed").withNumberParam("sides","Sides (default is 6)").withNumberResult().withTest({seed:"I'm feeling lucky!"},1).withTest({seed:"I'm feeling lucky!",sides:6},1).withTest({seed:"I'm feeling lucky!",sides:-6},-1).withTest({seed:"I'm feeling lucky!",sides:0},void 0).run(({seed:t,sides:r=6})=>ut(t,r));})();
//# sourceMappingURL=index.js.map