// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,a=t.__defineSetter__,u=t.__lookupGetter__,i=t.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,f){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(u.call(r,n)||i.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=f.value,r.__proto__=c):r[n]=f.value),y="get"in f,v="set"in f,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,f.get),v&&a&&a.call(r,n,f.set),r};function c(r,n,t){f(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var y=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var p="function"==typeof Symbol?Symbol.toStringTag:"";var b=l&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,a;if(null==r)return y.call(r);t=r[p],a=p,n=null!=(o=r)&&v.call(o,a);try{r[p]=void 0}catch(n){return y.call(r)}return e=y.call(r),n?r[p]=t:delete r[p],e}:function(r){return y.call(r)},s="function"==typeof Uint32Array;var w="function"==typeof Uint32Array?Uint32Array:null;var A,_="function"==typeof Uint32Array?Uint32Array:void 0;A=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?_:function(){throw new Error("not implemented")};var d=A,m="function"==typeof Float64Array;var N="function"==typeof Float64Array?Float64Array:null;var h,U="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(m&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g=h,j="function"==typeof Uint8Array;var I="function"==typeof Uint8Array?Uint8Array:null;var O,S="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,256,257]),t=n,r=(j&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint16Array;var H="function"==typeof Uint16Array?Uint16Array:null;var T,G="function"==typeof Uint16Array?Uint16Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(F&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,L={uint16:T,uint8:E};(P=new L.uint16(1))[0]=4660;var M,V,W=52===new L.uint8(P.buffer)[0];!0===W?(M=1,V=0):(M=0,V=1);var k={HIGH:M,LOW:V},x=new g(1),Y=new d(x.buffer),C=k.HIGH,q=k.LOW;function z(r,n,t,e){return x[0]=r,n[e]=Y[C],n[e+t]=Y[q],n}function B(r){return z(r,[0,0],1,0)}c(B,"assign",z);var D,J,K=!0===W?1:0,Q=new g(1),R=new d(Q.buffer);function X(r){return Q[0]=r,R[K]}!0===W?(D=1,J=0):(D=0,J=1);var Z={HIGH:D,LOW:J},$=new g(1),rr=new d($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return rr[nr]=r,rr[tr]=n,$[0]}var or=[0,0];function ar(r,n){var t,e;return B.assign(r,or,1,0),t=or[0],t&=2147483647,e=X(n),er(t|=e&=2147483648,or[1])}var ur=!0===W?0:1,ir=new g(1),fr=new d(ir.buffer);var cr=Math.floor,lr=Number.POSITIVE_INFINITY,yr=Number.NEGATIVE_INFINITY;function vr(r){return r!=r}function pr(r){return r===lr||r===yr}function br(r,n,t,e){return vr(r)||pr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return br(r,[0,0],1,0)}),"assign",br);var sr=[0,0],wr=[0,0];function Ar(r,n){var t,e;return 0===n||0===r||vr(r)||pr(r)?r:(br(r,sr,1,0),n+=sr[1],n+=function(r){var n=X(r);return(n=(2146435072&n)>>>20)-1023|0}(r=sr[0]),n<-1074?ar(0,r):n>1023?r<0?yr:lr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,B.assign(r,wr,1,0),t=wr[0],t&=2148532223,e*er(t|=n+1023<<20,wr[1])))}function _r(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var dr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Nr=5.960464477539063e-8,hr=_r(20),Ur=_r(20),gr=_r(20),jr=_r(20);function Ir(r,n,t,e,o,a,u,i,f){var c,l,y,v,p,b,s,w,A;for(v=a,A=e[t],w=t,p=0;w>0;p++)l=Nr*A|0,jr[p]=A-16777216*l|0,A=e[w-1]+l,w-=1;if(A=Ar(A,o),A-=8*cr(.125*A),A-=s=0|A,y=0,o>0?(s+=p=jr[t-1]>>24-o,jr[t-1]-=p<<24-o,y=jr[t-1]>>23-o):0===o?y=jr[t-1]>>23:A>=.5&&(y=2),y>0){for(s+=1,c=0,p=0;p<t;p++)w=jr[p],0===c?0!==w&&(c=1,jr[p]=16777216-w):jr[p]=16777215-w;if(o>0)switch(o){case 1:jr[t-1]&=8388607;break;case 2:jr[t-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Ar(1,o)))}if(0===A){for(w=0,p=t-1;p>=a;p--)w|=jr[p];if(0===w){for(b=1;0===jr[a-b];b++);for(p=t+1;p<=t+b;p++){for(f[i+p]=dr[u+p],l=0,w=0;w<=i;w++)l+=r[w]*f[i+(p-w)];e[p]=l}return Ir(r,n,t+=b,e,o,a,u,i,f)}}if(0===A)for(t-=1,o-=24;0===jr[t];)t-=1,o-=24;else(A=Ar(A,-o))>=16777216?(l=Nr*A|0,jr[t]=A-16777216*l|0,o+=24,jr[t+=1]=l):jr[t]=0|A;for(l=Ar(1,o),p=t;p>=0;p--)e[p]=l*jr[p],l*=Nr;for(p=t;p>=0;p--){for(l=0,b=0;b<=v&&b<=t-p;b++)l+=mr[b]*e[p+b];gr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=gr[p];for(n[0]=0===y?l:-l,l=gr[0]-l,p=1;p<=t;p++)l+=gr[p];return n[1]=0===y?l:-l,7&s}function Or(r,n,t,e){var o,a,u,i,f,c,l;for(4,(a=(t-3)/24|0)<0&&(a=0),i=t-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)hr[f]=c<0?0:dr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*hr[u+(f-c)];Ur[f]=o}return 4,Ir(r,n,4,Ur,i,4,a,u,hr)}var Sr=Math.round;function Er(r,n,t){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Sr(.6366197723675814*r)),u=6077100506506192e-26*e,i=n>>20|0,t[0]=a-u,i-(X(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),t[0]=a-u,i-(X(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),t[0]=a-u)),t[1]=a-t[0]-u,e}var Fr=1.5707963267341256,Hr=6077100506506192e-26,Tr=2*Hr,Gr=4*Hr,Pr=[0,0,0],Lr=[0,0];function Mr(r,n){var t,e,o,a,u,i,f;if((o=2147483647&X(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Er(r,o,n):o<=1073928572?r>0?(f=r-Fr,n[0]=f-Hr,n[1]=f-n[0]-Hr,1):(f=r+Fr,n[0]=f+Hr,n[1]=f-n[0]+Hr,-1):r>0?(f=r-2*Fr,n[0]=f-Tr,n[1]=f-n[0]-Tr,2):(f=r+2*Fr,n[0]=f+Tr,n[1]=f-n[0]+Tr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Er(r,o,n):r>0?(f=r-3*Fr,n[0]=f-1.8231301519518578e-10,n[1]=f-n[0]-1.8231301519518578e-10,3):(f=r+3*Fr,n[0]=f+1.8231301519518578e-10,n[1]=f-n[0]+1.8231301519518578e-10,-3):1075388923===o?Er(r,o,n):r>0?(f=r-4*Fr,n[0]=f-Gr,n[1]=f-n[0]-Gr,4):(f=r+4*Fr,n[0]=f+Gr,n[1]=f-n[0]+Gr,-4);if(o<1094263291)return Er(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ir[0]=r,fr[ur]}(r),f=er(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Pr[u]=0|f,f=16777216*(f-Pr[u]);for(Pr[2]=f,a=3;0===Pr[a-1];)a-=1;return i=Or(Pr,Lr,e,a),r<0?(n[0]=-Lr[0],n[1]=-Lr[1],-i):(n[0]=Lr[0],n[1]=Lr[1],i)}var Vr=-.16666666666666632;function Wr(r,n,t,e,o){var a,u,i,f,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(f=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),i=c*r,t[o]=0===n?r+i*(Vr+c*u):r-(c*(.5*n-i*u)-n-i*Vr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=f*f*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),f=1-(a=.5*c),t[o+e]=f+(1-f-a+(c*u-r*n)),t}var kr=[0,0];function xr(r,n,t,e){var o,a;if(o=X(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),Wr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(a=Mr(r,kr),Wr(kr[0],kr[1],n,t,e),3&a){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}c((function(r){return xr(r,[0,0],1,0)}),"assign",xr);var Yr=Math.ceil;function Cr(r){return r<0?Yr(r):cr(r)}function qr(r){var n;return vr(r)||r===lr?r:r===yr?0:r>709.782712893384?lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,a,u;return Ar(1-(n-(e=r-n)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),t)}(r-.6931471803691238*(n=Cr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function zr(r,n,t){var e,o;return vr(n)?(r[0]=NaN,r[1]=0===t?t:n):pr(t)?n===lr?(r[0]=-n,r[1]=NaN):n===yr?(r[0]=-0,r[1]=ar(0,t)):(r[0]=NaN,r[1]=NaN):(o=qr(n),0===t?(r[0]=o,r[1]=t):(xr(t,r,1,0),e=r[0],r[0]=r[1]*o,r[1]=e*o)),r}function Br(r,n,t){return 2===arguments.length?zr([0,0],r,n):zr(r,n,t)}export{Br as default};
//# sourceMappingURL=mod.js.map
