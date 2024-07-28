// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,g=/^(\d+)$/,d=/^(\d+)e/,h=/\.0$/,v=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=l.call(n,w,"$1e"),n=l.call(n,v,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,y,"e-0$1"),r.alternate&&(n=l.call(n,g,"$1."),n=l.call(n,d,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):f.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var E=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function N(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,a,o,c,f,s,l,p,y,g,d;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(n=r[s]))c+=n;else{if(e=void 0!==n.precision,!(n=N(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,_(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):E(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=b(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,g=n.padRight,d=void 0,(d=y-p.length)<0?p:p=g?p+m(d):m(d)+p)),c+=n.arg||"",f+=1}return c}var T=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,t,n,i;for(t=[],i=0,n=T.exec(r);n;)(e=r.slice(i,T.lastIndex-n[0].length)).length&&t.push(e),t.push(U(n)),i=T.lastIndex,n=T.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function x(r){var e,t;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var j=Object.prototype,k=j.toString,F=j.__defineGetter__,O=j.__defineSetter__,V=j.__lookupGetter__,L=j.__lookupSetter__,P=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===k.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===k.call(t))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(V.call(r,e)||L.call(r,e)?(n=r.__proto__,r.__proto__=j,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&F&&F.call(r,e,t.get),o&&O&&O.call(r,e,t.set),r};function $(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}function C(r){return"number"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function R(){return G&&"symbol"==typeof Symbol.toStringTag}var H=Object.prototype.toString,W=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,Z="function"==typeof M?M.toStringTag:"",Y=R()?function(r){var e,t,n,i,a;if(null==r)return H.call(r);t=r[Z],a=Z,e=null!=(i=r)&&W.call(i,a);try{r[Z]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[Z]=t:delete r[Z],n}:function(r){return H.call(r)},B=Number,X=B.prototype.toString,z=R();function J(r){return"object"==typeof r&&(r instanceof B||(z?function(r){try{return X.call(r),!0}catch(r){return!1}}(r):"[object Number]"===Y(r)))}function q(r){return C(r)||J(r)}function D(r,e){if(!(this instanceof D))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!C(r))throw new TypeError(x("invalid argument. Real component must be a number. Value: `%s`.",r));if(!C(e))throw new TypeError(x("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}$(q,"isPrimitive",C),$(q,"isObject",J),$(D,"BYTES_PER_ELEMENT",8),$(D.prototype,"BYTES_PER_ELEMENT",8),$(D.prototype,"byteLength",16),$(D.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),$(D.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var K,Q=2147483648,rr=2147483647,er="function"==typeof Uint32Array,tr="function"==typeof Uint32Array?Uint32Array:null,nr="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,t;if("function"!=typeof tr)return!1;try{e=new tr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(er&&t instanceof Uint32Array||"[object Uint32Array]"===Y(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?nr:function(){throw new Error("not implemented")};var ir,ar=K,or="function"==typeof Float64Array,ur="function"==typeof Float64Array?Float64Array:null,cr="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,t;if("function"!=typeof ur)return!1;try{e=new ur([1,3.14,-3.14,NaN]),t=e,r=(or&&t instanceof Float64Array||"[object Float64Array]"===Y(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,sr=ir,lr="function"==typeof Uint8Array,pr="function"==typeof Uint8Array?Uint8Array:null,yr="function"==typeof Uint8Array?Uint8Array:void 0;fr=function(){var r,e,t;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,256,257]),t=e,r=(lr&&t instanceof Uint8Array||"[object Uint8Array]"===Y(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?yr:function(){throw new Error("not implemented")};var gr,dr=fr,hr="function"==typeof Uint16Array,vr="function"==typeof Uint16Array?Uint16Array:null,wr="function"==typeof Uint16Array?Uint16Array:void 0;gr=function(){var r,e,t;if("function"!=typeof vr)return!1;try{e=new vr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(hr&&t instanceof Uint16Array||"[object Uint16Array]"===Y(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?wr:function(){throw new Error("not implemented")};var br,mr={uint16:gr,uint8:dr};(br=new mr.uint16(1))[0]=4660;var Er,Ar,_r=52===new mr.uint8(br.buffer)[0];!0===_r?(Er=1,Ar=0):(Er=0,Ar=1);var Nr={HIGH:Er,LOW:Ar},Sr=new sr(1),Tr=new ar(Sr.buffer),Ur=Nr.HIGH,Ir=Nr.LOW;function xr(r,e,t,n){return Sr[0]=r,e[n]=Tr[Ur],e[n+t]=Tr[Ir],e}function jr(r){return xr(r,[0,0],1,0)}$(jr,"assign",xr);var kr,Fr,Or=!0===_r?1:0,Vr=new sr(1),Lr=new ar(Vr.buffer);function Pr(r){return Vr[0]=r,Lr[Or]}!0===_r?(kr=1,Fr=0):(kr=0,Fr=1);var $r={HIGH:kr,LOW:Fr},Cr=new sr(1),Gr=new ar(Cr.buffer),Rr=$r.HIGH,Hr=$r.LOW;function Wr(r,e){return Gr[Rr]=r,Gr[Hr]=e,Cr[0]}var Mr=[0,0];function Zr(r,e){var t,n;return jr.assign(r,Mr,1,0),t=Mr[0],t&=rr,n=Pr(e),Wr(t|=n&=Q,Mr[1])}var Yr=2146435072,Br=1048575,Xr=!0===_r?0:1,zr=new sr(1),Jr=new ar(zr.buffer),qr=Math.floor,Dr=Number.POSITIVE_INFINITY,Kr=B.NEGATIVE_INFINITY,Qr=1023,re=1023,ee=-1023,te=-1074;function ne(r){return r!=r}function ie(r){return r===Dr||r===Kr}var ae=22250738585072014e-324,oe=4503599627370496;function ue(r,e,t,n){return ne(r)||ie(r)?(e[n]=r,e[n+t]=0,e):0!==r&&function(r){return Math.abs(r)}(r)<ae?(e[n]=r*oe,e[n+t]=-52,e):(e[n]=r,e[n+t]=0,e)}$((function(r){return ue(r,[0,0],1,0)}),"assign",ue);var ce=2220446049250313e-31,fe=2148532223,se=[0,0],le=[0,0];function pe(r,e){var t,n;return 0===e||0===r||ne(r)||ie(r)?r:(ue(r,se,1,0),r=se[0],e+=se[1],e+=function(r){var e=Pr(r);return(e=(e&Yr)>>>20)-Qr|0}(r),e<te?Zr(0,r):e>re?r<0?Kr:Dr:(e<=ee?(e+=52,n=ce):n=1,jr.assign(r,le,1,0),t=le[0],t&=fe,n*Wr(t|=e+Qr<<20,le[1])))}function ye(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ge=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],de=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],he=16777216,ve=5.960464477539063e-8,we=ye(20),be=ye(20),me=ye(20),Ee=ye(20);function Ae(r,e,t,n,i,a,o,u,c){var f,s,l,p,y,g,d,h,v;for(p=a,v=n[t],h=t,y=0;h>0;y++)s=ve*v|0,Ee[y]=v-he*s|0,v=n[h-1]+s,h-=1;if(v=pe(v,i),v-=8*qr(.125*v),v-=d=0|v,l=0,i>0?(d+=y=Ee[t-1]>>24-i,Ee[t-1]-=y<<24-i,l=Ee[t-1]>>23-i):0===i?l=Ee[t-1]>>23:v>=.5&&(l=2),l>0){for(d+=1,f=0,y=0;y<t;y++)h=Ee[y],0===f?0!==h&&(f=1,Ee[y]=16777216-h):Ee[y]=16777215-h;if(i>0)switch(i){case 1:Ee[t-1]&=8388607;break;case 2:Ee[t-1]&=4194303}2===l&&(v=1-v,0!==f&&(v-=pe(1,i)))}if(0===v){for(h=0,y=t-1;y>=a;y--)h|=Ee[y];if(0===h){for(g=1;0===Ee[a-g];g++);for(y=t+1;y<=t+g;y++){for(c[u+y]=ge[o+y],s=0,h=0;h<=u;h++)s+=r[h]*c[u+(y-h)];n[y]=s}return Ae(r,e,t+=g,n,i,a,o,u,c)}}if(0===v)for(t-=1,i-=24;0===Ee[t];)t-=1,i-=24;else(v=pe(v,-i))>=he?(s=ve*v|0,Ee[t]=v-he*s|0,i+=24,Ee[t+=1]=s):Ee[t]=0|v;for(s=pe(1,i),y=t;y>=0;y--)n[y]=s*Ee[y],s*=ve;for(y=t;y>=0;y--){for(s=0,g=0;g<=p&&g<=t-y;g++)s+=de[g]*n[y+g];me[t-y]=s}for(s=0,y=t;y>=0;y--)s+=me[y];for(e[0]=0===l?s:-s,s=me[0]-s,y=1;y<=t;y++)s+=me[y];return e[1]=0===l?s:-s,7&d}function _e(r,e,t,n){var i,a,o,u,c,f,s;for((a=(t-3)/24|0)<0&&(a=0),u=t-24*(a+1),f=a-(o=n-1),s=o+4,c=0;c<=s;c++)we[c]=f<0?0:ge[f],f+=1;for(c=0;c<=4;c++){for(i=0,f=0;f<=o;f++)i+=r[f]*we[o+(c-f)];be[c]=i}return Ae(r,e,4,be,u,4,a,o,we)}var Ne=Math.round,Se=.6366197723675814,Te=1.5707963267341256,Ue=6077100506506192e-26,Ie=6077100506303966e-26,xe=20222662487959506e-37,je=20222662487111665e-37,ke=84784276603689e-45,Fe=2047;function Oe(r,e,t){var n,i,a,o,u;return a=r-(n=Ne(r*Se))*Te,o=n*Ue,u=e>>20|0,t[0]=a-o,u-(Pr(t[0])>>20&Fe)>16&&(o=n*xe-((i=a)-(a=i-(o=n*Ie))-o),t[0]=a-o,u-(Pr(t[0])>>20&Fe)>49&&(o=n*ke-((i=a)-(a=i-(o=n*je))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var Ve=0,Le=16777216,Pe=1.5707963267341256,$e=6077100506506192e-26,Ce=2*$e,Ge=3*$e,Re=4*$e,He=598523,We=1072243195,Me=1073928572,Ze=1074752122,Ye=1074977148,Be=1075183036,Xe=1075388923,ze=1075594811,Je=1094263291,qe=[0,0,0],De=[0,0];function Ke(r,e){var t,n,i,a,o,u,c;if((i=Pr(r)&rr|0)<=We)return e[0]=r,e[1]=0,0;if(i<=Ze)return(i&Br)===He?Oe(r,i,e):i<=Me?r>0?(c=r-Pe,e[0]=c-$e,e[1]=c-e[0]-$e,1):(c=r+Pe,e[0]=c+$e,e[1]=c-e[0]+$e,-1):r>0?(c=r-2*Pe,e[0]=c-Ce,e[1]=c-e[0]-Ce,2):(c=r+2*Pe,e[0]=c+Ce,e[1]=c-e[0]+Ce,-2);if(i<=ze)return i<=Be?i===Ye?Oe(r,i,e):r>0?(c=r-3*Pe,e[0]=c-Ge,e[1]=c-e[0]-Ge,3):(c=r+3*Pe,e[0]=c+Ge,e[1]=c-e[0]+Ge,-3):i===Xe?Oe(r,i,e):r>0?(c=r-4*Pe,e[0]=c-Re,e[1]=c-e[0]-Re,4):(c=r+4*Pe,e[0]=c+Re,e[1]=c-e[0]+Re,-4);if(i<Je)return Oe(r,i,e);if(i>=Yr)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return zr[0]=r,Jr[Xr]}(r),c=Wr(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)qe[o]=0|c,c=(c-qe[o])*Le;for(qe[2]=c,a=3;qe[a-1]===Ve;)a-=1;return u=_e(qe,De,n,a),r<0?(e[0]=-De[0],e[1]=-De[1],-u):(e[0]=De[0],e[1]=De[1],u)}var Qe=-.16666666666666632,rt=.00833333333332249,et=-.0001984126982985795,tt=27557313707070068e-22,nt=-2.5050760253406863e-8,it=1.58969099521155e-10,at=.0416666666666666,ot=-.001388888888887411,ut=2480158728947673e-20,ct=-2.7557314351390663e-7,ft=2.087572321298175e-9,st=-11359647557788195e-27;function lt(r,e,t,n,i){var a,o,u,c,f;return o=rt+(f=r*r)*(et+f*tt)+f*(c=f*f)*(nt+f*it),u=f*r,t[i]=0===e?r+u*(Qe+f*o):r-(f*(.5*e-u*o)-e-u*Qe),o=f*(at+f*(ot+f*ut)),o+=c*c*(ct+f*(ft+f*st)),c=1-(a=.5*f),t[i+n]=c+(1-c-a+(f*o-r*e)),t}var pt=1072243195,yt=1044381696,gt=[0,0];function dt(r,e,t,n){var i,a;if(i=Pr(r),(i&=rr)<=pt)return i<yt&&0==(0|r)&&(e[n]=r,e[n+t]=0),lt(r,0,e,t,n);if(i>=Yr)return e[n]=NaN,e[n+t]=NaN,e;switch(a=Ke(r,gt),lt(gt[0],gt[1],e,t,n),3&a){case 1:return i=e[n+t],e[n+t]=-e[n],e[n]=i,e;case 2:return e[n]*=-1,e[n+t]*=-1,e;case 3:return i=-e[n+t],e[n+t]=e[n],e[n]=i,e;default:return e}}function ht(r){return dt(r,[0,0],1,0)}$(ht,"assign",dt);var vt=Math.ceil;function wt(r){return r<0?vt(r):qr(r)}var bt=.6931471803691238,mt=1.9082149292705877e-10,Et=1.4426950408889634,At=709.782712893384,_t=-745.1332191019411,Nt=1/(1<<28),St=-Nt;function Tt(r){var e;return ne(r)||r===Dr?r:r===Kr?0:r>At?Dr:r<_t?0:r>St&&r<Nt?1+r:function(r,e,t){var n,i,a,o;return pe(1-(e-(n=r-e)*(a=n-(i=n*n)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-(e=wt(r<0?Et*r-.5:Et*r+.5))*bt,e*mt,e)}return function(r){var e,t,n,i;return n=function(r){return r.re}(r),t=function(r){return r.im}(r),ne(n)?(n=NaN,t=0===t?t:n):ie(t)?n===Dr?(n=-n,t=NaN):n===Kr?(n=-0,t=Zr(0,t)):(n=NaN,t=NaN):(i=Tt(n),0===t?n=i:(n=(e=ht(t))[1]*i,t=e[0]*i)),new D(n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).cexp=e();
//# sourceMappingURL=browser.js.map
