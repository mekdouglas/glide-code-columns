var $t=Object.create;var O=Object.defineProperty,er=Object.defineProperties,tr=Object.getOwnPropertyDescriptor,rr=Object.getOwnPropertyDescriptors,ir=Object.getOwnPropertyNames,te=Object.getOwnPropertySymbols,nr=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,ar=Object.prototype.propertyIsEnumerable;var ie=(e,t,r)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,E=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&ie(e,r,t[r]);if(te)for(var r of te(t))ar.call(t,r)&&ie(e,r,t[r]);return e},I=(e,t)=>er(e,rr(t)),or=e=>O(e,"__esModule",{value:!0});var sr=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,r)=>(typeof require!="undefined"?require:t)[r]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var h=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ur=(e,t,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of ir(t))!re.call(e,i)&&i!=="default"&&O(e,i,{get:()=>t[i],enumerable:!(r=tr(t,i))||r.enumerable});return e},F=e=>ur(or(O(e!=null?$t(nr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var ne=(e,t,r)=>new Promise((i,n)=>{var a=u=>{try{o(r.next(u))}catch(l){n(l)}},s=u=>{try{o(r.throw(u))}catch(l){n(l)}},o=u=>u.done?i(u.value):Promise.resolve(u.value).then(a,s);o((r=r.apply(e,t)).next())});var oe=h((zn,ae)=>{function fr(e,t,r,i){var n=-1,a=e==null?0:e.length;for(i&&a&&(r=e[++n]);++n<a;)r=t(r,e[n],n,e);return r}ae.exports=fr});var ue=h((Qn,se)=>{function lr(e){return function(t){return e==null?void 0:e[t]}}se.exports=lr});var le=h((Wn,fe)=>{var hr=ue(),dr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},gr=hr(dr);fe.exports=gr});var de=h((Kn,he)=>{var cr=typeof global=="object"&&global&&global.Object===Object&&global;he.exports=cr});var ce=h((Jn,ge)=>{var mr=de(),pr=typeof self=="object"&&self&&self.Object===Object&&self,vr=mr||pr||Function("return this")();ge.exports=vr});var q=h((Xn,me)=>{var wr=ce(),br=wr.Symbol;me.exports=br});var ve=h((Yn,pe)=>{function xr(e,t){for(var r=-1,i=e==null?0:e.length,n=Array(i);++r<i;)n[r]=t(e[r],r,e);return n}pe.exports=xr});var be=h(($n,we)=>{var Tr=Array.isArray;we.exports=Tr});var Ce=h((ea,ye)=>{var xe=q(),Te=Object.prototype,yr=Te.hasOwnProperty,Cr=Te.toString,B=xe?xe.toStringTag:void 0;function Pr(e){var t=yr.call(e,B),r=e[B];try{e[B]=void 0;var i=!0}catch(a){}var n=Cr.call(e);return i&&(t?e[B]=r:delete e[B]),n}ye.exports=Pr});var He=h((ta,Pe)=>{var Hr=Object.prototype,Rr=Hr.toString;function Mr(e){return Rr.call(e)}Pe.exports=Mr});var Ve=h((ra,Ee)=>{var Re=q(),Er=Ce(),Vr=He(),Ar="[object Null]",kr="[object Undefined]",Me=Re?Re.toStringTag:void 0;function Dr(e){return e==null?e===void 0?kr:Ar:Me&&Me in Object(e)?Er(e):Vr(e)}Ee.exports=Dr});var ke=h((ia,Ae)=>{function Lr(e){return e!=null&&typeof e=="object"}Ae.exports=Lr});var Le=h((na,De)=>{var Sr=Ve(),Br=ke(),_r="[object Symbol]";function Nr(e){return typeof e=="symbol"||Br(e)&&Sr(e)==_r}De.exports=Nr});var Ie=h((aa,Oe)=>{var Se=q(),Or=ve(),Ir=be(),qr=Le(),Ur=1/0,Be=Se?Se.prototype:void 0,_e=Be?Be.toString:void 0;function Ne(e){if(typeof e=="string")return e;if(Ir(e))return Or(e,Ne)+"";if(qr(e))return _e?_e.call(e):"";var t=e+"";return t=="0"&&1/e==-Ur?"-0":t}Oe.exports=Ne});var U=h((oa,qe)=>{var jr=Ie();function Fr(e){return e==null?"":jr(e)}qe.exports=Fr});var je=h((sa,Ue)=>{var Zr=le(),Gr=U(),zr=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Qr="\\u0300-\\u036f",Wr="\\ufe20-\\ufe2f",Kr="\\u20d0-\\u20ff",Jr=Qr+Wr+Kr,Xr="["+Jr+"]",Yr=RegExp(Xr,"g");function $r(e){return e=Gr(e),e&&e.replace(zr,Zr).replace(Yr,"")}Ue.exports=$r});var Ze=h((ua,Fe)=>{var ei=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ti(e){return e.match(ei)||[]}Fe.exports=ti});var ze=h((fa,Ge)=>{var ri=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ii(e){return ri.test(e)}Ge.exports=ii});var ht=h((la,lt)=>{var Qe="\\ud800-\\udfff",ni="\\u0300-\\u036f",ai="\\ufe20-\\ufe2f",oi="\\u20d0-\\u20ff",si=ni+ai+oi,We="\\u2700-\\u27bf",Ke="a-z\\xdf-\\xf6\\xf8-\\xff",ui="\\xac\\xb1\\xd7\\xf7",fi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",li="\\u2000-\\u206f",hi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Je="A-Z\\xc0-\\xd6\\xd8-\\xde",di="\\ufe0e\\ufe0f",Xe=ui+fi+li+hi,Ye="['\u2019]",$e="["+Xe+"]",gi="["+si+"]",et="\\d+",ci="["+We+"]",tt="["+Ke+"]",rt="[^"+Qe+Xe+et+We+Ke+Je+"]",mi="\\ud83c[\\udffb-\\udfff]",pi="(?:"+gi+"|"+mi+")",vi="[^"+Qe+"]",it="(?:\\ud83c[\\udde6-\\uddff]){2}",nt="[\\ud800-\\udbff][\\udc00-\\udfff]",k="["+Je+"]",wi="\\u200d",at="(?:"+tt+"|"+rt+")",bi="(?:"+k+"|"+rt+")",ot="(?:"+Ye+"(?:d|ll|m|re|s|t|ve))?",st="(?:"+Ye+"(?:D|LL|M|RE|S|T|VE))?",ut=pi+"?",ft="["+di+"]?",xi="(?:"+wi+"(?:"+[vi,it,nt].join("|")+")"+ft+ut+")*",Ti="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",yi="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ci=ft+ut+xi,Pi="(?:"+[ci,it,nt].join("|")+")"+Ci,Hi=RegExp([k+"?"+tt+"+"+ot+"(?="+[$e,k,"$"].join("|")+")",bi+"+"+st+"(?="+[$e,k+at,"$"].join("|")+")",k+"?"+at+"+"+ot,k+"+"+st,yi,Ti,et,Pi].join("|"),"g");function Ri(e){return e.match(Hi)||[]}lt.exports=Ri});var gt=h((ha,dt)=>{var Mi=Ze(),Ei=ze(),Vi=U(),Ai=ht();function ki(e,t,r){return e=Vi(e),t=r?void 0:t,t===void 0?Ei(e)?Ai(e):Mi(e):e.match(t)||[]}dt.exports=ki});var mt=h((da,ct)=>{var Di=oe(),Li=je(),Si=gt(),Bi="['\u2019]",_i=RegExp(Bi,"g");function Ni(e){return function(t){return Di(Si(Li(t).replace(_i,"")),e,"")}}ct.exports=Ni});var vt=h((ga,pt)=>{function Oi(e,t,r){var i=-1,n=e.length;t<0&&(t=-t>n?0:n+t),r=r>n?n:r,r<0&&(r+=n),n=t>r?0:r-t>>>0,t>>>=0;for(var a=Array(n);++i<n;)a[i]=e[i+t];return a}pt.exports=Oi});var bt=h((ca,wt)=>{var Ii=vt();function qi(e,t,r){var i=e.length;return r=r===void 0?i:r,!t&&r>=i?e:Ii(e,t,r)}wt.exports=qi});var Z=h((ma,xt)=>{var Ui="\\ud800-\\udfff",ji="\\u0300-\\u036f",Fi="\\ufe20-\\ufe2f",Zi="\\u20d0-\\u20ff",Gi=ji+Fi+Zi,zi="\\ufe0e\\ufe0f",Qi="\\u200d",Wi=RegExp("["+Qi+Ui+Gi+zi+"]");function Ki(e){return Wi.test(e)}xt.exports=Ki});var yt=h((pa,Tt)=>{function Ji(e){return e.split("")}Tt.exports=Ji});var At=h((va,Vt)=>{var Ct="\\ud800-\\udfff",Xi="\\u0300-\\u036f",Yi="\\ufe20-\\ufe2f",$i="\\u20d0-\\u20ff",en=Xi+Yi+$i,tn="\\ufe0e\\ufe0f",rn="["+Ct+"]",G="["+en+"]",z="\\ud83c[\\udffb-\\udfff]",nn="(?:"+G+"|"+z+")",Pt="[^"+Ct+"]",Ht="(?:\\ud83c[\\udde6-\\uddff]){2}",Rt="[\\ud800-\\udbff][\\udc00-\\udfff]",an="\\u200d",Mt=nn+"?",Et="["+tn+"]?",on="(?:"+an+"(?:"+[Pt,Ht,Rt].join("|")+")"+Et+Mt+")*",sn=Et+Mt+on,un="(?:"+[Pt+G+"?",G,Ht,Rt,rn].join("|")+")",fn=RegExp(z+"(?="+z+")|"+un+sn,"g");function ln(e){return e.match(fn)||[]}Vt.exports=ln});var Dt=h((wa,kt)=>{var hn=yt(),dn=Z(),gn=At();function cn(e){return dn(e)?gn(e):hn(e)}kt.exports=cn});var St=h((ba,Lt)=>{var mn=bt(),pn=Z(),vn=Dt(),wn=U();function bn(e){return function(t){t=wn(t);var r=pn(t)?vn(t):void 0,i=r?r[0]:t.charAt(0),n=r?mn(r,1).join(""):t.slice(1);return i[e]()+n}}Lt.exports=bn});var _t=h((xa,Bt)=>{var xn=St(),Tn=xn("toUpperCase");Bt.exports=Tn});var Ot=h((Ta,Nt)=>{var yn=mt(),Cn=_t(),Pn=yn(function(e,t,r){return e+(r?" ":"")+Cn(t)});Nt.exports=Pn});var Zt=h((Ha,J)=>{function jt(e){this.mode=w.MODE_8BIT_BYTE,this.data=e,this.parsedData=[];for(var t=0,r=this.data.length;t<r;t++){var i=[],n=this.data.charCodeAt(t);n>65536?(i[0]=240|(n&1835008)>>>18,i[1]=128|(n&258048)>>>12,i[2]=128|(n&4032)>>>6,i[3]=128|n&63):n>2048?(i[0]=224|(n&61440)>>>12,i[1]=128|(n&4032)>>>6,i[2]=128|n&63):n>128?(i[0]=192|(n&1984)>>>6,i[1]=128|n&63):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}jt.prototype={getLength:function(e){return this.parsedData.length},write:function(e){for(var t=0,r=this.parsedData.length;t<r;t++)e.put(this.parsedData[t],8)}};function C(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}C.prototype={addData:function(e){var t=new jt(e);this.dataList.push(t),this.dataCache=null},isDark:function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(e,t){this.moduleCount=this.typeNumber*4+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),this.dataCache==null&&(this.dataCache=C.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(e,t){for(var r=-1;r<=7;r++)if(!(e+r<=-1||this.moduleCount<=e+r))for(var i=-1;i<=7;i++)t+i<=-1||this.moduleCount<=t+i||(0<=r&&r<=6&&(i==0||i==6)||0<=i&&i<=6&&(r==0||r==6)||2<=r&&r<=4&&2<=i&&i<=4?this.modules[e+r][t+i]=!0:this.modules[e+r][t+i]=!1)},getBestMaskPattern:function(){for(var e=0,t=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=d.getLostPoint(this);(r==0||e>i)&&(e=i,t=r)}return t},createMovieClip:function(e,t,r){var i=e.createEmptyMovieClip(t,r),n=1;this.make();for(var a=0;a<this.modules.length;a++)for(var s=a*n,o=0;o<this.modules[a].length;o++){var u=o*n,l=this.modules[a][o];l&&(i.beginFill(0,100),i.moveTo(u,s),i.lineTo(u+n,s),i.lineTo(u+n,s+n),i.lineTo(u,s+n),i.endFill())}return i},setupTimingPattern:function(){for(var e=8;e<this.moduleCount-8;e++)this.modules[e][6]==null&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)this.modules[6][t]==null&&(this.modules[6][t]=t%2==0)},setupPositionAdjustPattern:function(){for(var e=d.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var r=0;r<e.length;r++){var i=e[t],n=e[r];if(this.modules[i][n]==null)for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)a==-2||a==2||s==-2||s==2||a==0&&s==0?this.modules[i+a][n+s]=!0:this.modules[i+a][n+s]=!1}},setupTypeNumber:function(e){for(var t=d.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!e&&(t>>r&1)==1;this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(var r=0;r<18;r++){var i=!e&&(t>>r&1)==1;this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(e,t){for(var r=this.errorCorrectLevel<<3|t,i=d.getBCHTypeInfo(r),n=0;n<15;n++){var a=!e&&(i>>n&1)==1;n<6?this.modules[n][8]=a:n<8?this.modules[n+1][8]=a:this.modules[this.moduleCount-15+n][8]=a}for(var n=0;n<15;n++){var a=!e&&(i>>n&1)==1;n<8?this.modules[8][this.moduleCount-n-1]=a:n<9?this.modules[8][15-n-1+1]=a:this.modules[8][15-n-1]=a}this.modules[this.moduleCount-8][8]=!e},mapData:function(e,t){for(var r=-1,i=this.moduleCount-1,n=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(s==6&&s--;;){for(var o=0;o<2;o++)if(this.modules[i][s-o]==null){var u=!1;a<e.length&&(u=(e[a]>>>n&1)==1);var l=d.getMask(t,i,s-o);l&&(u=!u),this.modules[i][s-o]=u,n--,n==-1&&(a++,n=7)}if(i+=r,i<0||this.moduleCount<=i){i-=r,r=-r;break}}}};C.PAD0=236;C.PAD1=17;C.createData=function(e,t,r){for(var i=P.getRSBlocks(e,t),n=new Ft,a=0;a<r.length;a++){var s=r[a];n.put(s.mode,4),n.put(s.getLength(),d.getLengthInBits(s.mode,e)),s.write(n)}for(var o=0,a=0;a<i.length;a++)o+=i[a].dataCount;if(n.getLengthInBits()>o*8)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+o*8+")");for(n.getLengthInBits()+4<=o*8&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=o*8||(n.put(C.PAD0,8),n.getLengthInBits()>=o*8));)n.put(C.PAD1,8);return C.createBytes(n,i)};C.createBytes=function(e,t){for(var r=0,i=0,n=0,a=new Array(t.length),s=new Array(t.length),o=0;o<t.length;o++){var u=t[o].dataCount,l=t[o].totalCount-u;i=Math.max(i,u),n=Math.max(n,l),a[o]=new Array(u);for(var f=0;f<a[o].length;f++)a[o][f]=255&e.buffer[f+r];r+=u;var p=d.getErrorCorrectPolynomial(l),H=new D(a[o],p.getLength()-1),b=H.mod(p);s[o]=new Array(p.getLength()-1);for(var f=0;f<s[o].length;f++){var R=f+b.getLength()-s[o].length;s[o][f]=R>=0?b.get(R):0}}for(var M=0,f=0;f<t.length;f++)M+=t[f].totalCount;for(var m=new Array(M),y=0,f=0;f<i;f++)for(var o=0;o<t.length;o++)f<a[o].length&&(m[y++]=a[o][f]);for(var f=0;f<n;f++)for(var o=0;o<t.length;o++)f<s[o].length&&(m[y++]=s[o][f]);return m};var w={MODE_NUMBER:1<<0,MODE_ALPHA_NUM:1<<1,MODE_8BIT_BYTE:1<<2,MODE_KANJI:1<<3},V={L:1,M:0,Q:3,H:2},A={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},d={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,G18:1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,G15_MASK:1<<14|1<<12|1<<10|1<<4|1<<1,getBCHTypeInfo:function(e){for(var t=e<<10;d.getBCHDigit(t)-d.getBCHDigit(d.G15)>=0;)t^=d.G15<<d.getBCHDigit(t)-d.getBCHDigit(d.G15);return(e<<10|t)^d.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;d.getBCHDigit(t)-d.getBCHDigit(d.G18)>=0;)t^=d.G18<<d.getBCHDigit(t)-d.getBCHDigit(d.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;e!=0;)t++,e>>>=1;return t},getPatternPosition:function(e){return d.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,r){switch(e){case A.PATTERN000:return(t+r)%2==0;case A.PATTERN001:return t%2==0;case A.PATTERN010:return r%3==0;case A.PATTERN011:return(t+r)%3==0;case A.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case A.PATTERN101:return t*r%2+t*r%3==0;case A.PATTERN110:return(t*r%2+t*r%3)%2==0;case A.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new D([1],0),r=0;r<e;r++)t=t.multiply(new D([1,c.gexp(r)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case w.MODE_NUMBER:return 10;case w.MODE_ALPHA_NUM:return 9;case w.MODE_8BIT_BYTE:return 8;case w.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case w.MODE_NUMBER:return 12;case w.MODE_ALPHA_NUM:return 11;case w.MODE_8BIT_BYTE:return 16;case w.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else if(t<41)switch(e){case w.MODE_NUMBER:return 14;case w.MODE_ALPHA_NUM:return 13;case w.MODE_8BIT_BYTE:return 16;case w.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}else throw new Error("type:"+t)},getLostPoint:function(e){for(var t=e.getModuleCount(),r=0,i=0;i<t;i++)for(var n=0;n<t;n++){for(var a=0,s=e.isDark(i,n),o=-1;o<=1;o++)if(!(i+o<0||t<=i+o))for(var u=-1;u<=1;u++)n+u<0||t<=n+u||o==0&&u==0||s==e.isDark(i+o,n+u)&&a++;a>5&&(r+=3+a-5)}for(var i=0;i<t-1;i++)for(var n=0;n<t-1;n++){var l=0;e.isDark(i,n)&&l++,e.isDark(i+1,n)&&l++,e.isDark(i,n+1)&&l++,e.isDark(i+1,n+1)&&l++,(l==0||l==4)&&(r+=3)}for(var i=0;i<t;i++)for(var n=0;n<t-6;n++)e.isDark(i,n)&&!e.isDark(i,n+1)&&e.isDark(i,n+2)&&e.isDark(i,n+3)&&e.isDark(i,n+4)&&!e.isDark(i,n+5)&&e.isDark(i,n+6)&&(r+=40);for(var n=0;n<t;n++)for(var i=0;i<t-6;i++)e.isDark(i,n)&&!e.isDark(i+1,n)&&e.isDark(i+2,n)&&e.isDark(i+3,n)&&e.isDark(i+4,n)&&!e.isDark(i+5,n)&&e.isDark(i+6,n)&&(r+=40);for(var f=0,n=0;n<t;n++)for(var i=0;i<t;i++)e.isDark(i,n)&&f++;var p=Math.abs(100*f/t/t-50)/5;return r+=p*10,r}},c={glog:function(e){if(e<1)throw new Error("glog("+e+")");return c.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return c.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)};for(g=0;g<8;g++)c.EXP_TABLE[g]=1<<g;var g;for(g=8;g<256;g++)c.EXP_TABLE[g]=c.EXP_TABLE[g-4]^c.EXP_TABLE[g-5]^c.EXP_TABLE[g-6]^c.EXP_TABLE[g-8];var g;for(g=0;g<255;g++)c.LOG_TABLE[c.EXP_TABLE[g]]=g;var g;function D(e,t){if(e.length==null)throw new Error(e.length+"/"+t);for(var r=0;r<e.length&&e[r]==0;)r++;this.num=new Array(e.length-r+t);for(var i=0;i<e.length-r;i++)this.num[i]=e[i+r]}D.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<e.getLength();i++)t[r+i]^=c.gexp(c.glog(this.get(r))+c.glog(e.get(i)));return new D(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=c.glog(this.get(0))-c.glog(e.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(var i=0;i<e.getLength();i++)r[i]^=c.gexp(c.glog(e.get(i))+t);return new D(r,0).mod(e)}};function P(e,t){this.totalCount=e,this.dataCount=t}P.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];P.getRSBlocks=function(e,t){var r=P.getRsBlockTable(e,t);if(r==null)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var i=r.length/3,n=[],a=0;a<i;a++)for(var s=r[a*3+0],o=r[a*3+1],u=r[a*3+2],l=0;l<s;l++)n.push(new P(o,u));return n};P.getRsBlockTable=function(e,t){switch(t){case V.L:return P.RS_BLOCK_TABLE[(e-1)*4+0];case V.M:return P.RS_BLOCK_TABLE[(e-1)*4+1];case V.Q:return P.RS_BLOCK_TABLE[(e-1)*4+2];case V.H:return P.RS_BLOCK_TABLE[(e-1)*4+3];default:return}};function Ft(){this.buffer=[],this.length=0}Ft.prototype={get:function(e){var t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(var r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var W=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function K(e){var t=this;if(this.options={padding:4,width:256,height:256,typeNumber:4,color:"#000000",background:"#ffffff",ecl:"M"},typeof e=="string"&&(e={content:e}),e)for(var r in e)this.options[r]=e[r];if(typeof this.options.content!="string")throw new Error("Expected 'content' as string!");if(this.options.content.length===0)throw new Error("Expected 'content' to be non-empty!");if(!(this.options.padding>=0))throw new Error("Expected 'padding' value to be non-negative!");if(!(this.options.width>0)||!(this.options.height>0))throw new Error("Expected 'width' or 'height' value to be higher than zero!");function i(l){switch(l){case"L":return V.L;case"M":return V.M;case"Q":return V.Q;case"H":return V.H;default:throw new Error("Unknwon error correction level: "+l)}}function n(l,f){for(var p=a(l),H=1,b=0,R=0,M=W.length;R<=M;R++){var m=W[R];if(!m)throw new Error("Content too long: expected "+b+" but got "+p);switch(f){case"L":b=m[0];break;case"M":b=m[1];break;case"Q":b=m[2];break;case"H":b=m[3];break;default:throw new Error("Unknwon error correction level: "+f)}if(p<=b)break;H++}if(H>W.length)throw new Error("Content too long");return H}function a(l){var f=encodeURI(l).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return f.length+(f.length!=l?3:0)}var s=this.options.content,o=n(s,this.options.ecl),u=i(this.options.ecl);this.qrcode=new C(o,u),this.qrcode.addData(s),this.qrcode.make()}K.prototype.svg=function(e){var t=this.options||{},r=this.qrcode.modules;typeof e=="undefined"&&(e={container:t.container||"svg"});for(var i=typeof t.pretty!="undefined"?!!t.pretty:!0,n=i?"  ":"",a=i?`\r
`:"",s=t.width,o=t.height,u=r.length,l=s/(u+2*t.padding),f=o/(u+2*t.padding),p=typeof t.join!="undefined"?!!t.join:!1,H=typeof t.swap!="undefined"?!!t.swap:!1,b=typeof t.xmlDeclaration!="undefined"?!!t.xmlDeclaration:!0,R=typeof t.predefined!="undefined"?!!t.predefined:!1,M=R?n+'<defs><path id="qrmodule" d="M0 0 h'+f+" v"+l+' H0 z" style="fill:'+t.color+';shape-rendering:crispEdges;" /></defs>'+a:"",m=n+'<rect x="0" y="0" width="'+s+'" height="'+o+'" style="fill:'+t.background+';shape-rendering:crispEdges;"/>'+a,y="",ee="",_=0;_<u;_++)for(var N=0;N<u;N++){var Xt=r[N][_];if(Xt){var x=N*l+t.padding*l,T=_*f+t.padding*f;if(H){var Yt=x;x=T,T=Yt}if(p){var L=l+x,S=f+T;x=Number.isInteger(x)?Number(x):x.toFixed(2),T=Number.isInteger(T)?Number(T):T.toFixed(2),L=Number.isInteger(L)?Number(L):L.toFixed(2),S=Number.isInteger(S)?Number(S):S.toFixed(2),ee+="M"+x+","+T+" V"+S+" H"+L+" V"+T+" H"+x+" Z "}else R?y+=n+'<use x="'+x.toString()+'" y="'+T.toString()+'" href="#qrmodule" />'+a:y+=n+'<rect x="'+x.toString()+'" y="'+T.toString()+'" width="'+l+'" height="'+f+'" style="fill:'+t.color+';shape-rendering:crispEdges;"/>'+a}}p&&(y=n+'<path x="0" y="0" style="fill:'+t.color+';shape-rendering:crispEdges;" d="'+ee+'" />');var v="";switch(e.container){case"svg":b&&(v+='<?xml version="1.0" standalone="yes"?>'+a),v+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="'+s+'" height="'+o+'">'+a,v+=M+m+y,v+="</svg>";break;case"svg-viewbox":b&&(v+='<?xml version="1.0" standalone="yes"?>'+a),v+='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 '+s+" "+o+'">'+a,v+=M+m+y,v+="</svg>";break;case"g":v+='<g width="'+s+'" height="'+o+'">'+a,v+=M+m+y,v+="</g>";break;default:v+=(M+m+y).replace(/^\s+/,"");break}return v};K.prototype.save=function(e,t){var r=this.svg();typeof t!="function"&&(t=function(n,a){});try{var i=sr("fs");i.writeFile(e,r,t)}catch(n){t(n)}};typeof J!="undefined"&&(J.exports=K)});var zt=h((Ra,Gt)=>{Gt.exports={aqua:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,azure:/#f0ffff(ff)?(?!\w)/gi,beige:/#f5f5dc(ff)?(?!\w)/gi,bisque:/#ffe4c4(ff)?(?!\w)/gi,black:/#000000(ff)?(?!\w)|#000(f)?(?!\w)/gi,blue:/#0000ff(ff)?(?!\w)|#00f(f)?(?!\w)/gi,brown:/#a52a2a(ff)?(?!\w)/gi,coral:/#ff7f50(ff)?(?!\w)/gi,cornsilk:/#fff8dc(ff)?(?!\w)/gi,crimson:/#dc143c(ff)?(?!\w)/gi,cyan:/#00ffff(ff)?(?!\w)|#0ff(f)?(?!\w)/gi,darkblue:/#00008b(ff)?(?!\w)/gi,darkcyan:/#008b8b(ff)?(?!\w)/gi,darkgrey:/#a9a9a9(ff)?(?!\w)/gi,darkred:/#8b0000(ff)?(?!\w)/gi,deeppink:/#ff1493(ff)?(?!\w)/gi,dimgrey:/#696969(ff)?(?!\w)/gi,gold:/#ffd700(ff)?(?!\w)/gi,green:/#008000(ff)?(?!\w)/gi,grey:/#808080(ff)?(?!\w)/gi,honeydew:/#f0fff0(ff)?(?!\w)/gi,hotpink:/#ff69b4(ff)?(?!\w)/gi,indigo:/#4b0082(ff)?(?!\w)/gi,ivory:/#fffff0(ff)?(?!\w)/gi,khaki:/#f0e68c(ff)?(?!\w)/gi,lavender:/#e6e6fa(ff)?(?!\w)/gi,lime:/#00ff00(ff)?(?!\w)|#0f0(f)?(?!\w)/gi,linen:/#faf0e6(ff)?(?!\w)/gi,maroon:/#800000(ff)?(?!\w)/gi,moccasin:/#ffe4b5(ff)?(?!\w)/gi,navy:/#000080(ff)?(?!\w)/gi,oldlace:/#fdf5e6(ff)?(?!\w)/gi,olive:/#808000(ff)?(?!\w)/gi,orange:/#ffa500(ff)?(?!\w)/gi,orchid:/#da70d6(ff)?(?!\w)/gi,peru:/#cd853f(ff)?(?!\w)/gi,pink:/#ffc0cb(ff)?(?!\w)/gi,plum:/#dda0dd(ff)?(?!\w)/gi,purple:/#800080(ff)?(?!\w)/gi,red:/#ff0000(ff)?(?!\w)|#f00(f)?(?!\w)/gi,salmon:/#fa8072(ff)?(?!\w)/gi,seagreen:/#2e8b57(ff)?(?!\w)/gi,seashell:/#fff5ee(ff)?(?!\w)/gi,sienna:/#a0522d(ff)?(?!\w)/gi,silver:/#c0c0c0(ff)?(?!\w)/gi,skyblue:/#87ceeb(ff)?(?!\w)/gi,snow:/#fffafa(ff)?(?!\w)/gi,tan:/#d2b48c(ff)?(?!\w)/gi,teal:/#008080(ff)?(?!\w)/gi,thistle:/#d8bfd8(ff)?(?!\w)/gi,tomato:/#ff6347(ff)?(?!\w)/gi,violet:/#ee82ee(ff)?(?!\w)/gi,wheat:/#f5deb3(ff)?(?!\w)/gi,white:/#ffffff(ff)?(?!\w)|#fff(f)?(?!\w)/gi}});var Wt=h((Ma,Qt)=>{var X=zt(),Y={whitespace:/\s+/g,urlHexPairs:/%[\dA-F]{2}/g,quotes:/"/g};function qn(e){return e.trim().replace(Y.whitespace," ")}function Un(e){return encodeURIComponent(e).replace(Y.urlHexPairs,Fn)}function jn(e){return Object.keys(X).forEach(function(t){X[t].test(e)&&(e=e.replace(X[t],t))}),e}function Fn(e){switch(e){case"%20":return" ";case"%3D":return"=";case"%3A":return":";case"%2F":return"/";default:return e.toLowerCase()}}function $(e){if(typeof e!="string")throw new TypeError("Expected a string, but received "+typeof e);e.charCodeAt(0)===65279&&(e=e.slice(1));var t=jn(qn(e)).replace(Y.quotes,"'");return"data:image/svg+xml,"+Un(t)}$.toSrcset=function(t){return $(t).replace(/ /g,"%20")};Qt.exports=$});var qt=F(Ot());var Hn=`
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
    `,Rn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
    `,Mn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48"
          height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
</svg>
`,It=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
</svg>
`,En=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
`,Vn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,An=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,kn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
`,Dn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
</svg>
`,Ln=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
</svg>
`,Sn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
</svg>
`,Bn=`
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
</svg>
`,_n={Glide:Hn,"Machine Learning":Sn,General:It,Array:En,Number:Mn,Encoding:Bn,Text:Ln,"Data & APIs":Dn,Image:Vn,Fun:An,"Date & Time":kn,Code:Rn};function Q({icon:e,category:t}){var r;return(r=e!=null?e:_n[t])!=null?r:It}function Nn(e){return I(E({},e),{json:JSON.stringify(On(e),null,2)})}function On(e){let{name:t,category:r,released:i,description:n,author:a,result:s,params:o,about:u,video:l}=e,f=Q(e);return{name:t,category:r,released:i,description:n,author:a,result:s,about:u,icon:f,video:l,params:Object.entries(o).map(([p,H])=>E({name:p},H))}}var In={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:void 0,about:void 0,video:void 0,tests:[],run(){return ne(this,null,function*(){})}},j=class{constructor(t={},r=[]){this.definition=E(E({},In),t),this.requiredParams=[...r]}with(t,r=[]){return new j(E(E({},this.definition),t),[...this.requiredParams,...r])}withName(t){return this.with({name:t})}withCategory(t){let{icon:r}=this.definition;return this.with({category:t,icon:Q({icon:r,category:t})})}withReleased(t){return this.with({released:t})}withDescription(t){return this.with({description:t})}withAbout(t){return this.with({about:t})}withVideo(t){return this.with({video:t})}withIcon(t){return this.with({icon:t})}withAuthor(t,r){return this.with({author:`${t} <${r}>`})}withTest(t,r){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:t,expectedResult:r}]})}withFailingTest(t,r){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:t,expectedResult:r,allowFailure:!0}]})}withResult(t){return this.with({result:{type:t}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(t,r,i){return i===void 0&&(i=(0,qt.default)(r)),this.with({params:I(E({},this.definition.params),{[r]:{type:t,displayName:i}})})}withRequiredParam(t,r,i){return this.withParam(t,r,i).with({},[r])}withPrimitiveParam(t,r){return this.withParam("primitive",t,r)}withStringParam(t,r){return this.withParam("string",t,r)}withDateParam(t,r){return this.withParam("date-time",t,r)}withNumberParam(t,r){return this.withParam("number",t,r)}withRequiredPrimitiveParam(t,r){return this.withRequiredParam("primitive",t,r)}withRequiredStringParam(t,r){return this.withRequiredParam("string",t,r)}withRequiredDateParam(t,r){return this.withRequiredParam("date-time",t,r)}withRequiredNumberParam(t,r){return this.withRequiredParam("number",t,r)}withStringArrayParam(t,r){return this.withParam({kind:"array",items:"string"},t,r)}withRequiredStringArrayParam(t,r){return this.withRequiredParam({kind:"array",items:"string"},t,r)}withNumberArrayParam(t,r){return this.withParam({kind:"array",items:"number"},t,r)}withPrimitiveArrayParam(t,r){return this.withParam({kind:"array",items:"primitive"},t,r)}withRequiredPrimitiveArrayParam(t,r){return this.withRequiredParam({kind:"array",items:"primitive"},t,r)}withExample(t){return this.with({example:t})}run(t){let{params:r}=this.definition,i=this.requiredParams,n=Object.keys(r);function a(...s){let o={};if(s.forEach(({value:u},l)=>{o[n[l]]=u}),!i.some(u=>o[u]===void 0))return t(o)}return Nn(I(E({},this.definition),{run:a}))}};function Ut(e){return new j({name:e})}var Kt=F(Zt()),Jt=F(Wt()),Zn=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      `,Va=Ut("QR Code").withCategory("Image").withDescription("Generate QR codes from any value.").withAuthor("David Siegel","david@glideapps.com").withIcon(Zn).withVideo("https://www.youtube.com/watch?v=142TGhaTMtI").withReleased("direct").withRequiredPrimitiveParam("content").withNumberParam("size").withImageResult().withFailingTest({content:"https://wwww.glideapps.com"},"way too big to put here").run(({content:e,size:t=250})=>{let r=new Kt.default({content:e,width:t,height:t,join:!0}).svg();return(0,Jt.default)(r)});export{Va as default};
//# sourceMappingURL=function.js.map
