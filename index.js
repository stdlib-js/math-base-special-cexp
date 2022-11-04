// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),n=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"",u=t&&"symbol"==typeof Symbol.toStringTag?function(r){var t,u,i,f,a;if(null==r)return n.call(r);u=r[o],a=o,t=null!=(f=r)&&e.call(f,a);try{r[o]=void 0}catch(t){return n.call(r)}return i=n.call(r),t?r[o]=u:delete r[o],i}:function(r){return n.call(r)},i="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,a="function"==typeof Uint32Array?Uint32Array:void 0;r=function(){var r,t,n;if("function"!=typeof f)return!1;try{t=new f(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(i&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?a:function(){throw new Error("not implemented")};var c,l=r,y="function"==typeof Float64Array,p="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;c=function(){var r,t,n;if("function"!=typeof p)return!1;try{t=new p([1,3.14,-3.14,NaN]),n=t,r=(y&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?v:function(){throw new Error("not implemented")};var b,s=c,d="function"==typeof Uint8Array,w="function"==typeof Uint8Array?Uint8Array:null,A="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,t,n;if("function"!=typeof w)return!1;try{t=new w(t=[1,3.14,-3.14,256,257]),n=t,r=(d&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=b,h="function"==typeof Uint16Array,N="function"==typeof Uint16Array?Uint16Array:null,U="function"==typeof Uint16Array?Uint16Array:void 0;_=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,65536,65537]),n=t,r=(h&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g,j={uint16:_,uint8:m};(g=new j.uint16(1))[0]=4660;var I,O,S=52===new j.uint8(g.buffer)[0];!0===S?(I=1,O=0):(I=0,O=1);var E={HIGH:I,LOW:O},F=new s(1),T=new l(F.buffer),H=E.HIGH,G=E.LOW;function P(r,t){return F[0]=t,r[0]=T[H],r[1]=T[G],r}function x(r,t){return 1===arguments.length?P([0,0],r):P(r,t)}var L,M,V=!0===S?1:0,W=new s(1),k=new l(W.buffer);function Y(r){return W[0]=r,k[V]}!0===S?(L=1,M=0):(L=0,M=1);var C={HIGH:L,LOW:M},q=new s(1),z=new l(q.buffer),B=C.HIGH,D=C.LOW;function J(r,t){return z[B]=r,z[D]=t,q[0]}var K=[0,0];function Q(r,t){var n,e;return x(K,r),n=K[0],n&=2147483647,e=Y(t),J(n|=e&=2147483648,K[1])}var R="function"==typeof Object.defineProperty?Object.defineProperty:null,X=Object.defineProperty,Z=Object.prototype,$=Z.toString,rr=Z.__defineGetter__,tr=Z.__defineSetter__,nr=Z.__lookupGetter__,er=Z.__lookupSetter__,or=function(){try{return R({},"x",{}),!0}catch(r){return!1}}()?X:function(r,t,n){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===$.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===$.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(nr.call(r,t)||er.call(r,t)?(e=r.__proto__,r.__proto__=Z,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),u="get"in n,i="set"in n,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&rr&&rr.call(r,t,n.get),i&&tr&&tr.call(r,t,n.set),r};function ur(r,t,n){or(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}var ir=!0===S?0:1,fr=new s(1),ar=new l(fr.buffer),cr=Math.floor,lr=Number.POSITIVE_INFINITY,yr=Number.NEGATIVE_INFINITY;function pr(r){return r!=r}function vr(r){return r===lr||r===yr}function br(r,t,n,e){return pr(r)||vr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}ur((function(r){return br(r,[0,0],1,0)}),"assign",br);var sr=[0,0],dr=[0,0];function wr(r,t){var n,e;return 0===t||0===r||pr(r)||vr(r)?r:(br(r,sr,1,0),t+=sr[1],t+=function(r){var t=Y(r);return(t=(2146435072&t)>>>20)-1023|0}(r=sr[0]),t<-1074?Q(0,r):t>1023?r<0?yr:lr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,x(dr,r),n=dr[0],n&=2148532223,e*J(n|=t+1023<<20,dr[1])))}function Ar(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var _r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=16777216,Nr=5.960464477539063e-8,Ur=Ar(20),gr=Ar(20),jr=Ar(20),Ir=Ar(20);function Or(r,t,n,e,o,u,i,f,a){var c,l,y,p,v,b,s,d,w;for(p=u,w=e[n],d=n,v=0;d>0;v++)l=Nr*w|0,Ir[v]=w-hr*l|0,w=e[d-1]+l,d-=1;if(w=wr(w,o),w-=8*cr(.125*w),w-=s=0|w,y=0,o>0?(s+=v=Ir[n-1]>>24-o,Ir[n-1]-=v<<24-o,y=Ir[n-1]>>23-o):0===o?y=Ir[n-1]>>23:w>=.5&&(y=2),y>0){for(s+=1,c=0,v=0;v<n;v++)d=Ir[v],0===c?0!==d&&(c=1,Ir[v]=16777216-d):Ir[v]=16777215-d;if(o>0)switch(o){case 1:Ir[n-1]&=8388607;break;case 2:Ir[n-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=wr(1,o)))}if(0===w){for(d=0,v=n-1;v>=u;v--)d|=Ir[v];if(0===d){for(b=1;0===Ir[u-b];b++);for(v=n+1;v<=n+b;v++){for(a[f+v]=_r[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Or(r,t,n+=b,e,o,u,i,f,a)}}if(0===w)for(n-=1,o-=24;0===Ir[n];)n-=1,o-=24;else(w=wr(w,-o))>=hr?(l=Nr*w|0,Ir[n]=w-hr*l|0,o+=24,Ir[n+=1]=l):Ir[n]=0|w;for(l=wr(1,o),v=n;v>=0;v--)e[v]=l*Ir[v],l*=Nr;for(v=n;v>=0;v--){for(l=0,b=0;b<=p&&b<=n-v;b++)l+=mr[b]*e[v+b];jr[n-v]=l}for(l=0,v=n;v>=0;v--)l+=jr[v];for(t[0]=0===y?l:-l,l=jr[0]-l,v=1;v<=n;v++)l+=jr[v];return t[1]=0===y?l:-l,7&s}function Sr(r,t,n,e){var o,u,i,f,a,c,l;for((u=(n-3)/24|0)<0&&(u=0),f=n-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Ur[a]=c<0?0:_r[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Ur[i+(a-c)];gr[a]=o}return Or(r,t,4,gr,f,4,u,i,Ur)}var Er=Math.round;function Fr(r,t,n){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Er(.6366197723675814*r)),i=6077100506506192e-26*e,f=t>>20|0,n[0]=u-i,f-(Y(n[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),n[0]=u-i,f-(Y(n[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),n[0]=u-i)),n[1]=u-n[0]-i,e}var Tr=1.5707963267341256,Hr=6077100506506192e-26,Gr=2*Hr,Pr=3*Hr,xr=4*Hr,Lr=[0,0,0],Mr=[0,0];function Vr(r,t){var n,e,o,u,i,f,a;if((o=2147483647&Y(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fr(r,o,t):o<=1073928572?r>0?(a=r-Tr,t[0]=a-Hr,t[1]=a-t[0]-Hr,1):(a=r+Tr,t[0]=a+Hr,t[1]=a-t[0]+Hr,-1):r>0?(a=r-2*Tr,t[0]=a-Gr,t[1]=a-t[0]-Gr,2):(a=r+2*Tr,t[0]=a+Gr,t[1]=a-t[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fr(r,o,t):r>0?(a=r-3*Tr,t[0]=a-Pr,t[1]=a-t[0]-Pr,3):(a=r+3*Tr,t[0]=a+Pr,t[1]=a-t[0]+Pr,-3):1075388923===o?Fr(r,o,t):r>0?(a=r-4*Tr,t[0]=a-xr,t[1]=a-t[0]-xr,4):(a=r+4*Tr,t[0]=a+xr,t[1]=a-t[0]+xr,-4);if(o<1094263291)return Fr(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return fr[0]=r,ar[ir]}(r),a=J(o-((e=(o>>20)-1046)<<20|0),n),i=0;i<2;i++)Lr[i]=0|a,a=16777216*(a-Lr[i]);for(Lr[2]=a,u=3;0===Lr[u-1];)u-=1;return f=Sr(Lr,Mr,e,u),r<0?(t[0]=-Mr[0],t[1]=-Mr[1],-f):(t[0]=Mr[0],t[1]=Mr[1],f)}var Wr=-.16666666666666632;function kr(r,t,n,e,o){var u,i,f,a,c;return i=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,n[o]=0===t?r+f*(Wr+c*i):r-(c*(.5*t-f*i)-t-f*Wr),i=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),i+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(u=.5*c),n[o+e]=a+(1-a-u+(c*i-r*t)),n}var Yr=[0,0];function Cr(r,t,n,e){var o,u;if(o=Y(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(t[e]=r,t[e+n]=0),kr(r,0,t,n,e);if(o>=2146435072)return t[e]=NaN,t[e+n]=NaN,t;switch(u=Vr(r,Yr),kr(Yr[0],Yr[1],t,n,e),3&u){case 1:return o=t[e+n],t[e+n]=-t[e],t[e]=o,t;case 2:return t[e]*=-1,t[e+n]*=-1,t;case 3:return o=-t[e+n],t[e+n]=t[e],t[e]=o,t;default:return t}}ur((function(r){return Cr(r,[0,0],1,0)}),"assign",Cr);var qr=Math.ceil;function zr(r){return r<0?qr(r):cr(r)}var Br=1.4426950408889634,Dr=1/(1<<28);function Jr(r){var t;return pr(r)||r===lr?r:r===yr?0:r>709.782712893384?lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Dr?1+r:function(r,t,n){var e,o,u,i;return wr(1-(t-(e=r-t)*(u=e-(o=e*e)*(0===(i=o)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=zr(r<0?Br*r-.5:Br*r+.5)),1.9082149292705877e-10*t,t)}function Kr(r,t,n){var e,o;return pr(t)?(r[0]=NaN,r[1]=0===n?n:t):vr(n)?t===lr?(r[0]=-t,r[1]=NaN):t===yr?(r[0]=-0,r[1]=Q(0,n)):(r[0]=NaN,r[1]=NaN):(o=Jr(t),0===n?(r[0]=o,r[1]=n):(Cr(n,r,1,0),e=r[0],r[0]=r[1]*o,r[1]=e*o)),r}return function(r,t,n){return 2===arguments.length?Kr([0,0],r,t):Kr(r,t,n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).cexp=t();
//# sourceMappingURL=index.js.map
