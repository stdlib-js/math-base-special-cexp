// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,v,"e-0$1"),r.alternate&&(n=p.call(n,g,"$1."),n=p.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,N=isNaN,S=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function I(r){var e,t,n,a,o,f,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,N(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){return"string"==typeof r}function F(r){var e,t,n;if(!x(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return I.apply(null,t)}var O=Object.prototype,V=O.toString,L=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,C=O.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function R(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString;var Y=Object.prototype.hasOwnProperty;var B="function"==typeof Symbol?Symbol:void 0,X="function"==typeof B?B.toStringTag:"";var z=M()?function(r){var e,t,n,i,a;if(null==r)return Z.call(r);t=r[X],a=X,e=null!=(i=r)&&Y.call(i,a);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)},J=Number,q=J.prototype.toString;var D=M();function K(r){return"object"==typeof r&&(r instanceof J||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Q(r){return H(r)||K(r)}function rr(r,e){if(!(this instanceof rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(r))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",r));if(!H(e))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}R(Q,"isPrimitive",H),R(Q,"isObject",K),R(rr,"BYTES_PER_ELEMENT",8),R(rr.prototype,"BYTES_PER_ELEMENT",8),R(rr.prototype,"byteLength",16),R(rr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),R(rr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var er="function"==typeof Uint32Array;var tr="function"==typeof Uint32Array?Uint32Array:null;var nr,ir="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ir:function(){throw new Error("not implemented")};var ar=nr,or="function"==typeof Float64Array;var ur="function"==typeof Float64Array?Float64Array:null;var cr,fr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var sr=cr,lr="function"==typeof Uint8Array;var pr="function"==typeof Uint8Array?Uint8Array:null;var yr,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr=yr,hr="function"==typeof Uint16Array;var dr="function"==typeof Uint16Array?Uint16Array:null;var wr,br="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,t;if("function"!=typeof dr)return!1;try{e=new dr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?br:function(){throw new Error("not implemented")};var mr,Er={uint16:wr,uint8:gr};(mr=new Er.uint16(1))[0]=4660;var Ar,_r,Nr=52===new Er.uint8(mr.buffer)[0];!0===Nr?(Ar=1,_r=0):(Ar=0,_r=1);var Sr={HIGH:Ar,LOW:_r},Ur=new sr(1),Ir=new ar(Ur.buffer),Tr=Sr.HIGH,kr=Sr.LOW;function jr(r,e,t,n){return Ur[0]=r,e[n]=Ir[Tr],e[n+t]=Ir[kr],e}function xr(r){return jr(r,[0,0],1,0)}R(xr,"assign",jr);var Fr,Or,Vr=!0===Nr?1:0,Lr=new sr(1),Pr=new ar(Lr.buffer);function $r(r){return Lr[0]=r,Pr[Vr]}!0===Nr?(Fr=1,Or=0):(Fr=0,Or=1);var Cr={HIGH:Fr,LOW:Or},Gr=new sr(1),Rr=new ar(Gr.buffer),Hr=Cr.HIGH,Wr=Cr.LOW;function Mr(r,e){return Rr[Hr]=r,Rr[Wr]=e,Gr[0]}var Zr=[0,0];function Yr(r,e){var t,n;return xr.assign(r,Zr,1,0),t=Zr[0],t&=2147483647,n=$r(e),Mr(t|=n&=2147483648,Zr[1])}var Br=!0===Nr?0:1,Xr=new sr(1),zr=new ar(Xr.buffer);var Jr=Math.floor,qr=Number.POSITIVE_INFINITY,Dr=J.NEGATIVE_INFINITY;function Kr(r){return r!=r}function Qr(r){return r===qr||r===Dr}function re(r,e,t,n){return Kr(r)||Qr(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}R((function(r){return re(r,[0,0],1,0)}),"assign",re);var ee=[0,0],te=[0,0];function ne(r,e){var t,n;return 0===e||0===r||Kr(r)||Qr(r)?r:(re(r,ee,1,0),e+=ee[1],e+=function(r){var e=$r(r);return(e=(2146435072&e)>>>20)-1023|0}(r=ee[0]),e<-1074?Yr(0,r):e>1023?r<0?Dr:qr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,xr.assign(r,te,1,0),t=te[0],t&=2148532223,n*Mr(t|=e+1023<<20,te[1])))}function ie(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ae=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],oe=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ue=5.960464477539063e-8,ce=ie(20),fe=ie(20),se=ie(20),le=ie(20);function pe(r,e,t,n,i,a,o,u,c){var f,s,l,p,y,v,g,h,d;for(p=a,d=n[t],h=t,y=0;h>0;y++)s=ue*d|0,le[y]=d-16777216*s|0,d=n[h-1]+s,h-=1;if(d=ne(d,i),d-=8*Jr(.125*d),d-=g=0|d,l=0,i>0?(g+=y=le[t-1]>>24-i,le[t-1]-=y<<24-i,l=le[t-1]>>23-i):0===i?l=le[t-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<t;y++)h=le[y],0===f?0!==h&&(f=1,le[y]=16777216-h):le[y]=16777215-h;if(i>0)switch(i){case 1:le[t-1]&=8388607;break;case 2:le[t-1]&=4194303}2===l&&(d=1-d,0!==f&&(d-=ne(1,i)))}if(0===d){for(h=0,y=t-1;y>=a;y--)h|=le[y];if(0===h){for(v=1;0===le[a-v];v++);for(y=t+1;y<=t+v;y++){for(c[u+y]=ae[o+y],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(y-h)];n[y]=s}return pe(r,e,t+=v,n,i,a,o,u,c)}}if(0===d)for(t-=1,i-=24;0===le[t];)t-=1,i-=24;else(d=ne(d,-i))>=16777216?(s=ue*d|0,le[t]=d-16777216*s|0,i+=24,le[t+=1]=s):le[t]=0|d;for(s=ne(1,i),y=t;y>=0;y--)n[y]=s*le[y],s*=ue;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=oe[v]*n[y+v];se[t-y]=s}for(s=0,y=t;y>=0;y--)s+=se[y];for(e[0]=0===l?s:-s,s=se[0]-s,y=1;y<=t;y++)s+=se[y];return e[1]=0===l?s:-s,7&g}function ye(r,e,t,n){var i,a,o,u,c,f,s;for(4,(a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),f=a-(o=n-1),s=o+4,c=0;c<=s;c++)ce[c]=f<0?0:ae[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*ce[o+(c-f)];fe[c]=i}return 4,pe(r,e,4,fe,u,4,a,o,ce)}var ve=Math.round;function ge(r,e,t){var n,i,a,o,u;return a=r-1.5707963267341256*(n=ve(.6366197723675814*r)),o=6077100506506192e-26*n,u=e>>20|0,t[0]=a-o,u-($r(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,u-($r(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var he=1.5707963267341256,de=6077100506506192e-26,we=2*de,be=4*de,me=[0,0,0],Ee=[0,0];function Ae(r,e){var t,n,i,a,o,u,c;if((i=2147483647&$r(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?ge(r,i,e):i<=1073928572?r>0?(c=r-he,e[0]=c-de,e[1]=c-e[0]-de,1):(c=r+he,e[0]=c+de,e[1]=c-e[0]+de,-1):r>0?(c=r-2*he,e[0]=c-we,e[1]=c-e[0]-we,2):(c=r+2*he,e[0]=c+we,e[1]=c-e[0]+we,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?ge(r,i,e):r>0?(c=r-3*he,e[0]=c-1.8231301519518578e-10,e[1]=c-e[0]-1.8231301519518578e-10,3):(c=r+3*he,e[0]=c+1.8231301519518578e-10,e[1]=c-e[0]+1.8231301519518578e-10,-3):1075388923===i?ge(r,i,e):r>0?(c=r-4*he,e[0]=c-be,e[1]=c-e[0]-be,4):(c=r+4*he,e[0]=c+be,e[1]=c-e[0]+be,-4);if(i<1094263291)return ge(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Xr[0]=r,zr[Br]}(r),c=Mr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)me[o]=0|c,c=16777216*(c-me[o]);for(me[2]=c,a=3;0===me[a-1];)a-=1;return u=ye(me,Ee,n,a),r<0?(e[0]=-Ee[0],e[1]=-Ee[1],-u):(e[0]=Ee[0],e[1]=Ee[1],u)}var _e=-.16666666666666632;function Ne(r,e,t,n,i){var a,o,u,c,f;return o=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,t[i]=0===e?r+u*(_e+f*o):r-(f*(.5*e-u*o)-e-u*_e),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(a=.5*f),t[i+n]=c+(1-c-a+(f*o-r*e)),t}var Se=[0,0];function Ue(r,e,t,n){var i,a;if(i=$r(r),(i&=2147483647)<=1072243195)return i<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),Ne(r,0,e,t,n);if(i>=2146435072)return e[n]=NaN,e[n+t]=NaN,e;switch(a=Ae(r,Se),Ne(Se[0],Se[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}function Ie(r){return Ue(r,[0,0],1,0)}R(Ie,"assign",Ue);var Te=Math.ceil;function ke(r){return r<0?Te(r):Jr(r)}function je(r){var e;return Kr(r)||r===qr?r:r===Dr?0:r>709.782712893384?qr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,e,t){var n,i,a,o;return ne(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=ke(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*e,e)}function xe(r){var e,t,n,i;return n=function(r){return r.re}(r),t=function(r){return r.im}(r),Kr(n)?(n=NaN,t=0===t?t:n):Qr(t)?n===qr?(n=-n,t=NaN):n===Dr?(n=-0,t=Yr(0,t)):(n=NaN,t=NaN):(i=je(n),0===t?n=i:(n=(e=Ie(t))[1]*i,t=e[0]*i)),new rr(n,t)}export{xe as default};
//# sourceMappingURL=mod.js.map