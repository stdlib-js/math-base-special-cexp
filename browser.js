// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function c(r){return"string"==typeof r}var f=Math.abs,s=String.prototype.toLowerCase,l=String.prototype.toUpperCase,p=String.prototype.replace,y=/e\+(\d)$/,g=/e-(\d)$/,h=/^(\d+)$/,d=/^(\d+)e/,v=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=p.call(n,b,"$1e"),n=p.call(n,w,"e"),n=p.call(n,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=p.call(n,y,"e+0$1"),n=p.call(n,g,"e-0$1"),r.alternate&&(n=p.call(n,h,"$1."),n=p.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):s.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var _=String.fromCharCode,N=isNaN,S=Array.isArray;function T(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function U(r){var e,t,n,a,o,f,s,l,p;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",s=1,l=0;l<r.length;l++)if(c(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,p=0;p<t.length;p++)switch(a=t.charAt(p)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,N(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,N(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!N(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=N(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),f+=n.arg||"",s+=1}return f}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function x(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=I.exec(r);n;)(e=r.slice(i,I.lastIndex-n[0].length)).length&&t.push(e),t.push(x(n)),i=I.lastIndex,n=I.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function k(r){return"string"==typeof r}function F(r){var e,t,n;if(!k(r))throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=j(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return U.apply(null,t)}var O=Object.prototype,V=O.toString,L=O.__defineGetter__,P=O.__defineSetter__,$=O.__lookupGetter__,C=O.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&($.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=O,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(r,e,t.get),o&&P&&P.call(r,e,t.set),r};function R(r,e,t){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return W&&"symbol"==typeof Symbol.toStringTag}var Z=Object.prototype.toString,Y=Object.prototype.hasOwnProperty,B="function"==typeof Symbol?Symbol:void 0,X="function"==typeof B?B.toStringTag:"",z=M()?function(r){var e,t,n,i,a;if(null==r)return Z.call(r);t=r[X],a=X,e=null!=(i=r)&&Y.call(i,a);try{r[X]=void 0}catch(e){return Z.call(r)}return n=Z.call(r),e?r[X]=t:delete r[X],n}:function(r){return Z.call(r)},J=Number,q=J.prototype.toString,D=M();function K(r){return"object"==typeof r&&(r instanceof J||(D?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Q(r){return H(r)||K(r)}function rr(r,e){if(!(this instanceof rr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!H(r))throw new TypeError(F("invalid argument. Real component must be a number. Value: `%s`.",r));if(!H(e))throw new TypeError(F("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return G(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),G(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}R(Q,"isPrimitive",H),R(Q,"isObject",K),R(rr,"BYTES_PER_ELEMENT",8),R(rr.prototype,"BYTES_PER_ELEMENT",8),R(rr.prototype,"byteLength",16),R(rr.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),R(rr.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var er,tr=2147483647,nr="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;er=function(){var r,e,t;if("function"!=typeof ir)return!1;try{e=new ir(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(nr&&t instanceof Uint32Array||"[object Uint32Array]"===z(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=er,cr="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,e,t;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),t=e,r=(cr&&t instanceof Float64Array||"[object Float64Array]"===z(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr,pr=or,yr="function"==typeof Uint8Array,gr="function"==typeof Uint8Array?Uint8Array:null,hr="function"==typeof Uint8Array?Uint8Array:void 0;lr=function(){var r,e,t;if("function"!=typeof gr)return!1;try{e=new gr(e=[1,3.14,-3.14,256,257]),t=e,r=(yr&&t instanceof Uint8Array||"[object Uint8Array]"===z(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?hr:function(){throw new Error("not implemented")};var dr,vr=lr,wr="function"==typeof Uint16Array,br="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;dr=function(){var r,e,t;if("function"!=typeof br)return!1;try{e=new br(e=[1,3.14,-3.14,65536,65537]),t=e,r=(wr&&t instanceof Uint16Array||"[object Uint16Array]"===z(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Er,Ar={uint16:dr,uint8:vr};(Er=new Ar.uint16(1))[0]=4660;var _r,Nr,Sr=52===new Ar.uint8(Er.buffer)[0];!0===Sr?(_r=1,Nr=0):(_r=0,Nr=1);var Tr={HIGH:_r,LOW:Nr},Ur=new pr(1),Ir=new ur(Ur.buffer),xr=Tr.HIGH,jr=Tr.LOW;function kr(r,e,t,n){return Ur[0]=r,e[n]=Ir[xr],e[n+t]=Ir[jr],e}function Fr(r){return kr(r,[0,0],1,0)}R(Fr,"assign",kr);var Or,Vr,Lr=!0===Sr?1:0,Pr=new pr(1),$r=new ur(Pr.buffer);function Cr(r){return Pr[0]=r,$r[Lr]}!0===Sr?(Or=1,Vr=0):(Or=0,Vr=1);var Gr={HIGH:Or,LOW:Vr},Rr=new pr(1),Hr=new ur(Rr.buffer),Wr=Gr.HIGH,Mr=Gr.LOW;function Zr(r,e){return Hr[Wr]=r,Hr[Mr]=e,Rr[0]}var Yr=[0,0];function Br(r,e){var t,n;return Fr.assign(r,Yr,1,0),t=Yr[0],t&=tr,n=Cr(e),Zr(t|=n&=2147483648,Yr[1])}var Xr=2146435072,zr=!0===Sr?0:1,Jr=new pr(1),qr=new ur(Jr.buffer),Dr=Math.floor,Kr=Number.POSITIVE_INFINITY,Qr=J.NEGATIVE_INFINITY;function re(r){return r!=r}function ee(r){return r===Kr||r===Qr}function te(r,e,t,n){return re(r)||ee(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(e[n]=4503599627370496*r,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}R((function(r){return te(r,[0,0],1,0)}),"assign",te);var ne=[0,0],ie=[0,0];function ae(r,e){var t,n;return 0===e||0===r||re(r)||ee(r)?r:(te(r,ne,1,0),e+=ne[1],e+=function(r){var e=Cr(r);return(e=(e&Xr)>>>20)-1023|0}(r=ne[0]),e<-1074?Br(0,r):e>1023?r<0?Qr:Kr:(e<=-1023?(e+=52,n=2220446049250313e-31):n=1,Fr.assign(r,ie,1,0),t=ie[0],t&=2148532223,n*Zr(t|=e+1023<<20,ie[1])))}function oe(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ue=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ce=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],fe=16777216,se=5.960464477539063e-8,le=oe(20),pe=oe(20),ye=oe(20),ge=oe(20);function he(r,e,t,n,i,a,o,u,c){var f,s,l,p,y,g,h,d,v;for(p=a,v=n[t],d=t,y=0;d>0;y++)s=se*v|0,ge[y]=v-fe*s|0,v=n[d-1]+s,d-=1;if(v=ae(v,i),v-=8*Dr(.125*v),v-=h=0|v,l=0,i>0?(h+=y=ge[t-1]>>24-i,ge[t-1]-=y<<24-i,l=ge[t-1]>>23-i):0===i?l=ge[t-1]>>23:v>=.5&&(l=2),l>0){for(h+=1,f=0,y=0;y<t;y++)d=ge[y],0===f?0!==d&&(f=1,ge[y]=16777216-d):ge[y]=16777215-d;if(i>0)switch(i){case 1:ge[t-1]&=8388607;break;case 2:ge[t-1]&=4194303}2===l&&(v=1-v,0!==f&&(v-=ae(1,i)))}if(0===v){for(d=0,y=t-1;y>=a;y--)d|=ge[y];if(0===d){for(g=1;0===ge[a-g];g++);for(y=t+1;y<=t+g;y++){for(c[u+y]=ue[o+y],s=0,d=0;d<=u;d++)s+=r[d]*c[u+(y-d)];n[y]=s}return he(r,e,t+=g,n,i,a,o,u,c)}}if(0===v)for(t-=1,i-=24;0===ge[t];)t-=1,i-=24;else(v=ae(v,-i))>=fe?(s=se*v|0,ge[t]=v-fe*s|0,i+=24,ge[t+=1]=s):ge[t]=0|v;for(s=ae(1,i),y=t;y>=0;y--)n[y]=s*ge[y],s*=se;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=ce[g]*n[y+g];ye[t-y]=s}for(s=0,y=t;y>=0;y--)s+=ye[y];for(e[0]=0===l?s:-s,s=ye[0]-s,y=1;y<=t;y++)s+=ye[y];return e[1]=0===l?s:-s,7&h}function de(r,e,t,n){var i,a,o,u,c,f,s;for((a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),f=a-(o=n-1),s=o+4,c=0;c<=s;c++)le[c]=f<0?0:ue[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*le[o+(c-f)];pe[c]=i}return he(r,e,4,pe,u,4,a,o,le)}var ve=Math.round;function we(r,e,t){var n,i,a,o,u;return a=r-1.5707963267341256*(n=ve(.6366197723675814*r)),o=6077100506506192e-26*n,u=e>>20|0,t[0]=a-o,u-(Cr(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,u-(Cr(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var be=1.5707963267341256,me=6077100506506192e-26,Ee=2*me,Ae=3*me,_e=4*me,Ne=[0,0,0],Se=[0,0];function Te(r,e){var t,n,i,a,o,u,c;if((i=Cr(r)&tr|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?we(r,i,e):i<=1073928572?r>0?(c=r-be,e[0]=c-me,e[1]=c-e[0]-me,1):(c=r+be,e[0]=c+me,e[1]=c-e[0]+me,-1):r>0?(c=r-2*be,e[0]=c-Ee,e[1]=c-e[0]-Ee,2):(c=r+2*be,e[0]=c+Ee,e[1]=c-e[0]+Ee,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?we(r,i,e):r>0?(c=r-3*be,e[0]=c-Ae,e[1]=c-e[0]-Ae,3):(c=r+3*be,e[0]=c+Ae,e[1]=c-e[0]+Ae,-3):1075388923===i?we(r,i,e):r>0?(c=r-4*be,e[0]=c-_e,e[1]=c-e[0]-_e,4):(c=r+4*be,e[0]=c+_e,e[1]=c-e[0]+_e,-4);if(i<1094263291)return we(r,i,e);if(i>=Xr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return Jr[0]=r,qr[zr]}(r),c=Zr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)Ne[o]=0|c,c=16777216*(c-Ne[o]);for(Ne[2]=c,a=3;0===Ne[a-1];)a-=1;return u=de(Ne,Se,n,a),r<0?(e[0]=-Se[0],e[1]=-Se[1],-u):(e[0]=Se[0],e[1]=Se[1],u)}var Ue=-.16666666666666632;function Ie(r,e,t,n,i){var a,o,u,c,f;return o=.00833333333332249+(f=r*r)*(27557313707070068e-22*f-.0001984126982985795)+f*(c=f*f)*(1.58969099521155e-10*f-2.5050760253406863e-8),u=f*r,t[i]=0===e?r+u*(Ue+f*o):r-(f*(.5*e-u*o)-e-u*Ue),o=f*(.0416666666666666+f*(2480158728947673e-20*f-.001388888888887411)),o+=c*c*(f*(2.087572321298175e-9+-11359647557788195e-27*f)-2.7557314351390663e-7),c=1-(a=.5*f),t[i+n]=c+(1-c-a+(f*o-r*e)),t}var xe=[0,0];function je(r,e,t,n){var i,a;if(i=Cr(r),(i&=tr)<=1072243195)return i<1044381696&&0==(0|r)&&(e[n]=r,e[n+t]=0),Ie(r,0,e,t,n);if(i>=Xr)return e[n]=NaN,e[n+t]=NaN,e;switch(a=Te(r,xe),Ie(xe[0],xe[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}function ke(r){return je(r,[0,0],1,0)}R(ke,"assign",je);var Fe=Math.ceil;function Oe(r){return r<0?Fe(r):Dr(r)}var Ve=1.4426950408889634,Le=1/(1<<28);function Pe(r){var e;return re(r)||r===Kr?r:r===Qr?0:r>709.782712893384?Kr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Le?1+r:function(r,e,t){var n,i,a,o;return ae(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(e=Oe(r<0?Ve*r-.5:Ve*r+.5)),1.9082149292705877e-10*e,e)}return function(r){var e,t,n,i;return n=function(r){return r.re}(r),t=function(r){return r.im}(r),re(n)?(n=NaN,t=0===t?t:n):ee(t)?n===Kr?(n=-n,t=NaN):n===Qr?(n=-0,t=Br(0,t)):(n=NaN,t=NaN):(i=Pe(n),0===t?n=i:(n=(e=ke(t))[1]*i,t=e[0]*i)),new rr(n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cexp=e();
//# sourceMappingURL=browser.js.map
