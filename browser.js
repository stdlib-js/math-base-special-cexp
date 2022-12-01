// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,t=Object.prototype,e=t.toString,o=t.__defineGetter__,i=t.__defineSetter__,u=t.__lookupGetter__,f=t.__lookupSetter__,a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,l,y,p;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((l="value"in a)&&(u.call(r,n)||f.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),y="get"in a,p="set"in a,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(r,n,a.get),p&&i&&i.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}var l,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,v=Object.prototype.hasOwnProperty,s="function"==typeof Symbol?Symbol.toStringTag:"",b=y&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,i;if(null==r)return p.call(r);t=r[s],i=s,n=null!=(o=r)&&v.call(o,i);try{r[s]=void 0}catch(n){return p.call(r)}return e=p.call(r),n?r[s]=t:delete r[s],e}:function(r){return p.call(r)},d="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,A="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var r,n,t;if("function"!=typeof w)return!1;try{n=new w(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(d&&t instanceof Uint32Array||"[object Uint32Array]"===b(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?A:function(){throw new Error("not implemented")};var _,m=l,h="function"==typeof Float64Array,N="function"==typeof Float64Array?Float64Array:null,g="function"==typeof Float64Array?Float64Array:void 0;_=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N([1,3.14,-3.14,NaN]),t=n,r=(h&&t instanceof Float64Array||"[object Float64Array]"===b(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var U,j=_,I="function"==typeof Uint8Array,O="function"==typeof Uint8Array?Uint8Array:null,S="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var r,n,t;if("function"!=typeof O)return!1;try{n=new O(n=[1,3.14,-3.14,256,257]),t=n,r=(I&&t instanceof Uint8Array||"[object Uint8Array]"===b(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E,F=U,T="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,G="function"==typeof Uint16Array?Uint16Array:void 0;E=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),t=n,r=(T&&t instanceof Uint16Array||"[object Uint16Array]"===b(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P,x={uint16:E,uint8:F};(P=new x.uint16(1))[0]=4660;var L,M,V=52===new x.uint8(P.buffer)[0];!0===V?(L=1,M=0):(L=0,M=1);var W={HIGH:L,LOW:M},k=new j(1),Y=new m(k.buffer),C=W.HIGH,q=W.LOW;function z(r,n,t,e){return k[0]=r,n[e]=Y[C],n[e+t]=Y[q],n}function B(r){return z(r,[0,0],1,0)}c(B,"assign",z);var D,J,K=!0===V?1:0,Q=new j(1),R=new m(Q.buffer);function X(r){return Q[0]=r,R[K]}!0===V?(D=1,J=0):(D=0,J=1);var Z={HIGH:D,LOW:J},$=new j(1),rr=new m($.buffer),nr=Z.HIGH,tr=Z.LOW;function er(r,n){return rr[nr]=r,rr[tr]=n,$[0]}var or=[0,0];function ir(r,n){var t,e;return B.assign(r,or,1,0),t=or[0],t&=2147483647,e=X(n),er(t|=e&=2147483648,or[1])}var ur=!0===V?0:1,fr=new j(1),ar=new m(fr.buffer),cr=Math.floor,lr=Number.POSITIVE_INFINITY,yr=Number.NEGATIVE_INFINITY;function pr(r){return r!=r}function vr(r){return r===lr||r===yr}function sr(r,n,t,e){return pr(r)||vr(r)?(n[e]=r,n[e+t]=0,n):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return sr(r,[0,0],1,0)}),"assign",sr);var br=[0,0],dr=[0,0];function wr(r,n){var t,e;return 0===n||0===r||pr(r)||vr(r)?r:(sr(r,br,1,0),n+=br[1],n+=function(r){var n=X(r);return(n=(2146435072&n)>>>20)-1023|0}(r=br[0]),n<-1074?ir(0,r):n>1023?r<0?yr:lr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,B.assign(r,dr,1,0),t=dr[0],t&=2148532223,e*er(t|=n+1023<<20,dr[1])))}function Ar(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var _r=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],hr=16777216,Nr=5.960464477539063e-8,gr=Ar(20),Ur=Ar(20),jr=Ar(20),Ir=Ar(20);function Or(r,n,t,e,o,i,u,f,a){var c,l,y,p,v,s,b,d,w;for(p=i,w=e[t],d=t,v=0;d>0;v++)l=Nr*w|0,Ir[v]=w-hr*l|0,w=e[d-1]+l,d-=1;if(w=wr(w,o),w-=8*cr(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Ir[t-1]>>24-o,Ir[t-1]-=v<<24-o,y=Ir[t-1]>>23-o):0===o?y=Ir[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Ir[v],0===c?0!==d&&(c=1,Ir[v]=16777216-d):Ir[v]=16777215-d;if(o>0)switch(o){case 1:Ir[t-1]&=8388607;break;case 2:Ir[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=wr(1,o)))}if(0===w){for(d=0,v=t-1;v>=i;v--)d|=Ir[v];if(0===d){for(s=1;0===Ir[i-s];s++);for(v=t+1;v<=t+s;v++){for(a[f+v]=_r[u+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Or(r,n,t+=s,e,o,i,u,f,a)}}if(0===w)for(t-=1,o-=24;0===Ir[t];)t-=1,o-=24;else(w=wr(w,-o))>=hr?(l=Nr*w|0,Ir[t]=w-hr*l|0,o+=24,Ir[t+=1]=l):Ir[t]=0|w;for(l=wr(1,o),v=t;v>=0;v--)e[v]=l*Ir[v],l*=Nr;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=mr[s]*e[v+s];jr[t-v]=l}for(l=0,v=t;v>=0;v--)l+=jr[v];for(n[0]=0===y?l:-l,l=jr[0]-l,v=1;v<=t;v++)l+=jr[v];return n[1]=0===y?l:-l,7&b}function Sr(r,n,t,e){var o,i,u,f,a,c,l;for((i=(t-3)/24|0)<0&&(i=0),f=t-24*(i+1),c=i-(u=e-1),l=u+4,a=0;a<=l;a++)gr[a]=c<0?0:_r[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=u;c++)o+=r[c]*gr[u+(a-c)];Ur[a]=o}return Or(r,n,4,Ur,f,4,i,u,gr)}var Er=Math.round;function Fr(r,n,t){var e,o,i,u,f;return i=r-1.5707963267341256*(e=Er(.6366197723675814*r)),u=6077100506506192e-26*e,f=n>>20|0,t[0]=i-u,f-(X(t[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=i)-(i=o-(u=6077100506303966e-26*e))-u),t[0]=i-u,f-(X(t[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=i)-(i=o-(u=20222662487111665e-37*e))-u),t[0]=i-u)),t[1]=i-t[0]-u,e}var Tr=1.5707963267341256,Hr=6077100506506192e-26,Gr=2*Hr,Pr=3*Hr,xr=4*Hr,Lr=[0,0,0],Mr=[0,0];function Vr(r,n){var t,e,o,i,u,f,a;if((o=2147483647&X(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Fr(r,o,n):o<=1073928572?r>0?(a=r-Tr,n[0]=a-Hr,n[1]=a-n[0]-Hr,1):(a=r+Tr,n[0]=a+Hr,n[1]=a-n[0]+Hr,-1):r>0?(a=r-2*Tr,n[0]=a-Gr,n[1]=a-n[0]-Gr,2):(a=r+2*Tr,n[0]=a+Gr,n[1]=a-n[0]+Gr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Fr(r,o,n):r>0?(a=r-3*Tr,n[0]=a-Pr,n[1]=a-n[0]-Pr,3):(a=r+3*Tr,n[0]=a+Pr,n[1]=a-n[0]+Pr,-3):1075388923===o?Fr(r,o,n):r>0?(a=r-4*Tr,n[0]=a-xr,n[1]=a-n[0]-xr,4):(a=r+4*Tr,n[0]=a+xr,n[1]=a-n[0]+xr,-4);if(o<1094263291)return Fr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return fr[0]=r,ar[ur]}(r),a=er(o-((e=(o>>20)-1046)<<20|0),t),u=0;u<2;u++)Lr[u]=0|a,a=16777216*(a-Lr[u]);for(Lr[2]=a,i=3;0===Lr[i-1];)i-=1;return f=Sr(Lr,Mr,e,i),r<0?(n[0]=-Mr[0],n[1]=-Mr[1],-f):(n[0]=Mr[0],n[1]=Mr[1],f)}var Wr=-.16666666666666632;function kr(r,n,t,e,o){var i,u,f,a,c;return u=.00833333333332249+(c=r*r)*(27557313707070068e-22*c-.0001984126982985795)+c*(a=c*c)*(1.58969099521155e-10*c-2.5050760253406863e-8),f=c*r,t[o]=0===n?r+f*(Wr+c*u):r-(c*(.5*n-f*u)-n-f*Wr),u=c*(.0416666666666666+c*(2480158728947673e-20*c-.001388888888887411)),u+=a*a*(c*(2.087572321298175e-9+-11359647557788195e-27*c)-2.7557314351390663e-7),a=1-(i=.5*c),t[o+e]=a+(1-a-i+(c*u-r*n)),t}var Yr=[0,0];function Cr(r,n,t,e){var o,i;if(o=X(r),(o&=2147483647)<=1072243195)return o<1044381696&&0==(0|r)&&(n[e]=r,n[e+t]=0),kr(r,0,n,t,e);if(o>=2146435072)return n[e]=NaN,n[e+t]=NaN,n;switch(i=Vr(r,Yr),kr(Yr[0],Yr[1],n,t,e),3&i){case 1:return o=n[e+t],n[e+t]=-n[e],n[e]=o,n;case 2:return n[e]*=-1,n[e+t]*=-1,n;case 3:return o=-n[e+t],n[e+t]=n[e],n[e]=o,n;default:return n}}c((function(r){return Cr(r,[0,0],1,0)}),"assign",Cr);var qr=Math.ceil;function zr(r){return r<0?qr(r):cr(r)}var Br=1.4426950408889634,Dr=1/(1<<28);function Jr(r){var n;return pr(r)||r===lr?r:r===yr?0:r>709.782712893384?lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Dr?1+r:function(r,n,t){var e,o,i,u;return wr(1-(n-(e=r-n)*(i=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),t)}(r-.6931471803691238*(n=zr(r<0?Br*r-.5:Br*r+.5)),1.9082149292705877e-10*n,n)}function Kr(r,n,t){var e,o;return pr(n)?(r[0]=NaN,r[1]=0===t?t:n):vr(t)?n===lr?(r[0]=-n,r[1]=NaN):n===yr?(r[0]=-0,r[1]=ir(0,t)):(r[0]=NaN,r[1]=NaN):(o=Jr(n),0===t?(r[0]=o,r[1]=t):(Cr(t,r,1,0),e=r[0],r[0]=r[1]*o,r[1]=e*o)),r}return function(r,n,t){return 2===arguments.length?Kr([0,0],r,n):Kr(r,n,t)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cexp=n();
//# sourceMappingURL=browser.js.map
