// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var n=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var e="function"==typeof Symbol?Symbol.toStringTag:"";var o=r&&"symbol"==typeof Symbol.toStringTag?function(r){var o,f,a,u,i;if(null==r)return n.call(r);f=r[e],i=e,o=null!=(u=r)&&t.call(u,i);try{r[e]=void 0}catch(t){return n.call(r)}return a=n.call(r),o?r[e]=f:delete r[e],a}:function(r){return n.call(r)},f="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var u,i="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,n,t;if("function"!=typeof a)return!1;try{n=new a(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(f&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?i:function(){throw new Error("not implemented")};var c=u,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var l,p="function"==typeof Float64Array?Float64Array:void 0;l=function(){var r,n,t;if("function"!=typeof v)return!1;try{n=new v([1,3.14,-3.14,NaN]),t=n,r=(y&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var A=l,w="function"==typeof Uint8Array;var N="function"==typeof Uint8Array?Uint8Array:null;var b,h="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,n,t;if("function"!=typeof N)return!1;try{n=new N(n=[1,3.14,-3.14,256,257]),t=n,r=(w&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?h:function(){throw new Error("not implemented")};var U=b,s="function"==typeof Uint16Array;var m="function"==typeof Uint16Array?Uint16Array:null;var d,I="function"==typeof Uint16Array?Uint16Array:void 0;d=function(){var r,n,t;if("function"!=typeof m)return!1;try{n=new m(n=[1,3.14,-3.14,65536,65537]),t=n,r=(s&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?I:function(){throw new Error("not implemented")};var g,F={uint16:d,uint8:U};(g=new F.uint16(1))[0]=4660;var S,H,O=52===new F.uint8(g.buffer)[0];!0===O?(S=1,H=0):(S=0,H=1);var E={HIGH:S,LOW:H},j=new A(1),T=new c(j.buffer),G=E.HIGH,L=E.LOW;function M(r,n){return j[0]=n,r[0]=T[G],r[1]=T[L],r}function W(r,n){return 1===arguments.length?M([0,0],r):M(r,n)}var P,V,Y=!0===O?1:0,_=new A(1),k=new c(_.buffer);function x(r){return _[0]=r,k[Y]}!0===O?(P=1,V=0):(P=0,V=1);var q={HIGH:P,LOW:V},z=new A(1),B=new c(z.buffer),C=q.HIGH,D=q.LOW;function J(r,n){return B[C]=r,B[D]=n,z[0]}var K=[0,0];function Q(r,n){var t,e;return W(K,r),t=K[0],t&=2147483647,e=x(n),J(t|=e&=2147483648,K[1])}var R=!0===O?0:1,X=new A(1),Z=new c(X.buffer);var $=Math.floor,rr=Number.POSITIVE_INFINITY,nr=Number.NEGATIVE_INFINITY;function tr(r){return r!=r}function er(r){return r===rr||r===nr}function or(r,n){return tr(n)||er(n)?(r[0]=n,r[1]=0,r):0!==n&&function(r){return Math.abs(r)}(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var fr=[0,0],ar=[0,0];function ur(r,n){var t,e;return 0===n||0===r||tr(r)||er(r)?r:(function(r,n){1===arguments.length?or([0,0],r):or(r,n)}(fr,r),n+=fr[1],n+=function(r){var n=x(r);return(n=(2146435072&n)>>>20)-1023|0}(r=fr[0]),n<-1074?Q(0,r):n>1023?r<0?nr:rr:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,W(ar,r),t=ar[0],t&=2148532223,e*J(t|=n+1023<<20,ar[1])))}function ir(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var cr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],yr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],vr=5.960464477539063e-8,lr=ir(20),pr=ir(20),Ar=ir(20),wr=ir(20);function Nr(r,n,t,e,o,f,a,u,i){var c,y,v,l,p,A,w,N,b;for(l=f,b=e[t],N=t,p=0;N>0;p++)y=vr*b|0,wr[p]=b-16777216*y|0,b=e[N-1]+y,N-=1;if(b=ur(b,o),b-=8*$(.125*b),b-=w=0|b,v=0,o>0?(w+=p=wr[t-1]>>24-o,wr[t-1]-=p<<24-o,v=wr[t-1]>>23-o):0===o?v=wr[t-1]>>23:b>=.5&&(v=2),v>0){for(w+=1,c=0,p=0;p<t;p++)N=wr[p],0===c?0!==N&&(c=1,wr[p]=16777216-N):wr[p]=16777215-N;if(o>0)switch(o){case 1:wr[t-1]&=8388607;break;case 2:wr[t-1]&=4194303}2===v&&(b=1-b,0!==c&&(b-=ur(1,o)))}if(0===b){for(N=0,p=t-1;p>=f;p--)N|=wr[p];if(0===N){for(A=1;0===wr[f-A];A++);for(p=t+1;p<=t+A;p++){for(i[u+p]=cr[a+p],y=0,N=0;N<=u;N++)y+=r[N]*i[u+(p-N)];e[p]=y}return Nr(r,n,t+=A,e,o,f,a,u,i)}}if(0===b)for(t-=1,o-=24;0===wr[t];)t-=1,o-=24;else(b=ur(b,-o))>=16777216?(y=vr*b|0,wr[t]=b-16777216*y|0,o+=24,wr[t+=1]=y):wr[t]=0|b;for(y=ur(1,o),p=t;p>=0;p--)e[p]=y*wr[p],y*=vr;for(p=t;p>=0;p--){for(y=0,A=0;A<=l&&A<=t-p;A++)y+=yr[A]*e[p+A];Ar[t-p]=y}for(y=0,p=t;p>=0;p--)y+=Ar[p];for(n[0]=0===v?y:-y,y=Ar[0]-y,p=1;p<=t;p++)y+=Ar[p];return n[1]=0===v?y:-y,7&w}function br(r,n,t,e){var o,f,a,u,i,c,y;for(4,(f=(t-3)/24|0)<0&&(f=0),u=t-24*(f+1),c=f-(a=e-1),y=a+4,i=0;i<=y;i++)lr[i]=c<0?0:cr[c],c+=1;for(i=0;i<=4;i++){for(o=0,c=0;c<=a;c++)o+=r[c]*lr[a+(i-c)];pr[i]=o}return 4,Nr(r,n,4,pr,u,4,f,a,lr)}var hr=Math.round;function Ur(r,n,t){var e,o,f,a,u;return f=r-1.5707963267341256*(e=hr(.6366197723675814*r)),a=6077100506506192e-26*e,u=n>>20|0,t[0]=f-a,u-(x(t[0])>>20&2047)>16&&(a=20222662487959506e-37*e-((o=f)-(f=o-(a=6077100506303966e-26*e))-a),t[0]=f-a,u-(x(t[0])>>20&2047)>49&&(a=84784276603689e-45*e-((o=f)-(f=o-(a=20222662487111665e-37*e))-a),t[0]=f-a)),t[1]=f-t[0]-a,e}var sr=1.5707963267341256,mr=6077100506506192e-26,dr=2*mr,Ir=4*mr,gr=[0,0,0],Fr=[0,0];function Sr(r,n){var t,e,o,f,a,u,i;if((o=2147483647&x(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Ur(r,o,n):o<=1073928572?r>0?(i=r-sr,n[0]=i-mr,n[1]=i-n[0]-mr,1):(i=r+sr,n[0]=i+mr,n[1]=i-n[0]+mr,-1):r>0?(i=r-2*sr,n[0]=i-dr,n[1]=i-n[0]-dr,2):(i=r+2*sr,n[0]=i+dr,n[1]=i-n[0]+dr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Ur(r,o,n):r>0?(i=r-3*sr,n[0]=i-1.8231301519518578e-10,n[1]=i-n[0]-1.8231301519518578e-10,3):(i=r+3*sr,n[0]=i+1.8231301519518578e-10,n[1]=i-n[0]+1.8231301519518578e-10,-3):1075388923===o?Ur(r,o,n):r>0?(i=r-4*sr,n[0]=i-Ir,n[1]=i-n[0]-Ir,4):(i=r+4*sr,n[0]=i+Ir,n[1]=i-n[0]+Ir,-4);if(o<1094263291)return Ur(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return X[0]=r,Z[R]}(r),i=J(o-((e=(o>>20)-1046)<<20|0),t),a=0;a<2;a++)gr[a]=0|i,i=16777216*(i-gr[a]);for(gr[2]=i,f=3;0===gr[f-1];)f-=1;return u=br(gr,Fr,e,f),r<0?(n[0]=-Fr[0],n[1]=-Fr[1],-u):(n[0]=Fr[0],n[1]=Fr[1],u)}var Hr=-.16666666666666632;function Or(r,n,t){var e,o,f,a,u;return o=.00833333333332249+(u=n*n)*(27557313707070068e-22*u-.0001984126982985795)+u*(a=u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),f=u*n,r[0]=0===t?n+f*(Hr+u*o):n-(u*(.5*t-f*o)-t-f*Hr),o=u*(.0416666666666666+u*(2480158728947673e-20*u-.001388888888887411)),o+=a*a*(u*(2.087572321298175e-9+-11359647557788195e-27*u)-2.7557314351390663e-7),a=1-(e=.5*u),r[1]=a+(1-a-e+(u*o-n*t)),r}var Er=[0,0];function jr(r,n){var t,e;if(t=x(n),(t&=2147483647)<=1072243195)return t<1044381696&&0==(0|n)&&(r[0]=n,r[1]=0),Or(r,n,0);if(t>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Sr(n,Er),Or(r,Er[0],Er[1]),3&e){case 1:return t=r[1],r[1]=-r[0],r[0]=t,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return t=-r[1],r[1]=r[0],r[0]=t,r;default:return r}}var Tr=Math.ceil;function Gr(r){return r<0?Tr(r):$(r)}function Lr(r){var n;return tr(r)||r===rr?r:r===nr?0:r>709.782712893384?rr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,o,f,a;return ur(1-(n-(e=r-n)*(f=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=Gr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Mr(r,n,t){var e,o;return tr(n)?(r[0]=NaN,r[1]=0===t?t:n):er(t)?n===rr?(r[0]=-n,r[1]=NaN):n===nr?(r[0]=-0,r[1]=Q(0,t)):(r[0]=NaN,r[1]=NaN):(o=Lr(n),0===t?(r[0]=o,r[1]=t):(!function(r,n){1===arguments.length?jr([0,0],r):jr(r,n)}(r,t),e=r[0],r[0]=r[1]*o,r[1]=e*o)),r}function Wr(r,n,t){return 2===arguments.length?Mr([0,0],r,n):Mr(r,n,t)}export{Wr as default};
//# sourceMappingURL=mod.js.map
