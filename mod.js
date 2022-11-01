// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var e,o="function"==typeof Symbol?Symbol.toStringTag:"";e=r&&"symbol"==typeof Symbol.toStringTag?function(r){var e,a,u,i,f;if(null==r)return t.call(r);a=r[o],f=o,e=null!=(i=r)&&n.call(i,f);try{r[o]=void 0}catch(n){return t.call(r)}return u=t.call(r),e?r[o]=a:delete r[o],u}:function(r){return t.call(r)};var a=e,u="function"==typeof Uint32Array;var i="function"==typeof Uint32Array?Uint32Array:null;var f,c="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var r,t,n;if("function"!=typeof i)return!1;try{t=new i(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(u&&n instanceof Uint32Array||"[object Uint32Array]"===a(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?c:function(){throw new Error("not implemented")};var l=f,y="function"==typeof Float64Array;var v="function"==typeof Float64Array?Float64Array:null;var p,b="function"==typeof Float64Array?Float64Array:void 0;p=function(){var r,t,n;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),n=t,r=(y&&n instanceof Float64Array||"[object Float64Array]"===a(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?b:function(){throw new Error("not implemented")};var w=p,s="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,d="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,t,n;if("function"!=typeof A)return!1;try{t=new A(t=[1,3.14,-3.14,256,257]),n=t,r=(s&&n instanceof Uint8Array||"[object Uint8Array]"===a(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?d:function(){throw new Error("not implemented")};var h=_,m="function"==typeof Uint16Array;var N="function"==typeof Uint16Array?Uint16Array:null;var U,g="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,t,n;if("function"!=typeof N)return!1;try{t=new N(t=[1,3.14,-3.14,65536,65537]),n=t,r=(m&&n instanceof Uint16Array||"[object Uint16Array]"===a(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I={uint16:U,uint8:h};(j=new I.uint16(1))[0]=4660;var O,S,E=52===new I.uint8(j.buffer)[0];!0===E?(O=1,S=0):(O=0,S=1);var F={HIGH:O,LOW:S},H=new w(1),T=new l(H.buffer),G=F.HIGH,P=F.LOW;function L(r,t){return H[0]=t,r[0]=T[G],r[1]=T[P],r}function M(r,t){return 1===arguments.length?L([0,0],r):L(r,t)}var V,W,k=!0===E?1:0,x=new w(1),Y=new l(x.buffer);function C(r){return x[0]=r,Y[k]}!0===E?(V=1,W=0):(V=0,W=1);var q={HIGH:V,LOW:W},z=new w(1),B=new l(z.buffer),D=q.HIGH,J=q.LOW;function K(r,t){return B[D]=r,B[J]=t,z[0]}var Q=[0,0];function R(r,t){var n,e;return M(Q,r),n=Q[0],n&=2147483647,e=C(t),K(n|=e&=2147483648,Q[1])}var X=!0===E?0:1,Z=new w(1),$=new l(Z.buffer);var rr=Math.floor,tr=Number.POSITIVE_INFINITY,nr=Number.NEGATIVE_INFINITY;function er(r){return r!=r}function or(r){return r===tr||r===nr}var ar="function"==typeof Object.defineProperty?Object.defineProperty:null;var ur,ir=Object.defineProperty,fr=Object.prototype,cr=fr.toString,lr=fr.__defineGetter__,yr=fr.__defineSetter__,vr=fr.__lookupGetter__,pr=fr.__lookupSetter__;ur=function(){try{return ar({},"x",{}),!0}catch(r){return!1}}()?ir:function(r,t,n){var e,o,a,u;if("object"!=typeof r||null===r||"[object Array]"===cr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===cr.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((o="value"in n)&&(vr.call(r,t)||pr.call(r,t)?(e=r.__proto__,r.__proto__=fr,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,u="set"in n,o&&(a||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&lr&&lr.call(r,t,n.get),u&&yr&&yr.call(r,t,n.set),r};function br(r,t,n,e){return er(r)||or(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}ur((function(r){return br(r,[0,0],1,0)}),"assign",{configurable:!1,enumerable:!1,writable:!1,value:br});var wr=[0,0],sr=[0,0];function Ar(r,t){var n,e;return 0===t||0===r||er(r)||or(r)?r:(br(r,wr,1,0),t+=wr[1],t+=function(r){var t=C(r);return(t=(2146435072&t)>>>20)-1023|0}(r=wr[0]),t<-1074?R(0,r):t>1023?r<0?nr:tr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,M(sr,r),n=sr[0],n&=2148532223,e*K(n|=t+1023<<20,sr[1])))}function _r(r){return function(r,t){var n,e;for(n=[],e=0;e<t;e++)n.push(r);return n}(0,r)}var dr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],mr=5.960464477539063e-8,Nr=_r(20),Ur=_r(20),gr=_r(20),jr=_r(20);function Ir(r,t,n,e,o,a,u,i,f){var c,l,y,v,p,b,w,s,A;for(v=a,A=e[n],s=n,p=0;s>0;p++)l=mr*A|0,jr[p]=A-16777216*l|0,A=e[s-1]+l,s-=1;if(A=Ar(A,o),A-=8*rr(.125*A),A-=w=0|A,y=0,o>0?(w+=p=jr[n-1]>>24-o,jr[n-1]-=p<<24-o,y=jr[n-1]>>23-o):0===o?y=jr[n-1]>>23:A>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<n;p++)s=jr[p],0===c?0!==s&&(c=1,jr[p]=16777216-s):jr[p]=16777215-s;if(o>0)switch(o){case 1:jr[n-1]&=8388607;break;case 2:jr[n-1]&=4194303}2===y&&(A=1-A,0!==c&&(A-=Ar(1,o)))}if(0===A){for(s=0,p=n-1;p>=a;p--)s|=jr[p];if(0===s){for(b=1;0===jr[a-b];b++);for(p=n+1;p<=n+b;p++){for(f[i+p]=dr[u+p],l=0,s=0;s<=i;s++)l+=r[s]*f[i+(p-s)];e[p]=l}return Ir(r,t,n+=b,e,o,a,u,i,f)}}if(0===A)for(n-=1,o-=24;0===jr[n];)n-=1,o-=24;else(A=Ar(A,-o))>=16777216?(l=mr*A|0,jr[n]=A-16777216*l|0,o+=24,jr[n+=1]=l):jr[n]=0|A;for(l=Ar(1,o),p=n;p>=0;p--)e[p]=l*jr[p],l*=mr;for(p=n;p>=0;p--){for(l=0,b=0;b<=v&&b<=n-p;b++)l+=hr[b]*e[p+b];gr[n-p]=l}for(l=0,p=n;p>=0;p--)l+=gr[p];for(t[0]=0===y?l:-l,l=gr[0]-l,p=1;p<=n;p++)l+=gr[p];return t[1]=0===y?l:-l,7&w}function Or(r,t,n,e){var o,a,u,i,f,c,l;for(4,(a=(n-3)/24|0)<0&&(a=0),i=n-24*(a+1),c=a-(u=e-1),l=u+4,f=0;f<=l;f++)Nr[f]=c<0?0:dr[c],c+=1;for(f=0;f<=4;f++){for(o=0,c=0;c<=u;c++)o+=r[c]*Nr[u+(f-c)];Ur[f]=o}return 4,Ir(r,t,4,Ur,i,4,a,u,Nr)}var Sr=Math.round;function Er(r,t,n){var e,o,a,u,i;return a=r-1.5707963267341256*(e=Sr(.6366197723675814*r)),u=6077100506506192e-26*e,i=t>>20|0,n[0]=a-u,i-(C(n[0])>>20&2047)>16&&(u=20222662487959506e-37*e-((o=a)-(a=o-(u=6077100506303966e-26*e))-u),n[0]=a-u,i-(C(n[0])>>20&2047)>49&&(u=84784276603689e-45*e-((o=a)-(a=o-(u=20222662487111665e-37*e))-u),n[0]=a-u)),n[1]=a-n[0]-u,e}var Fr=1.5707963267341256,Hr=6077100506506192e-26,Tr=2*Hr,Gr=4*Hr,Pr=[0,0,0],Lr=[0,0];function Mr(r,t){var n,e,o,a,u,i,f;if((o=2147483647&C(r)|0)<=1072243195)return t[0]=r,t[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Er(r,o,t):o<=1073928572?r>0?(f=r-Fr,t[0]=f-Hr,t[1]=f-t[0]-Hr,1):(f=r+Fr,t[0]=f+Hr,t[1]=f-t[0]+Hr,-1):r>0?(f=r-2*Fr,t[0]=f-Tr,t[1]=f-t[0]-Tr,2):(f=r+2*Fr,t[0]=f+Tr,t[1]=f-t[0]+Tr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Er(r,o,t):r>0?(f=r-3*Fr,t[0]=f-1.8231301519518578e-10,t[1]=f-t[0]-1.8231301519518578e-10,3):(f=r+3*Fr,t[0]=f+1.8231301519518578e-10,t[1]=f-t[0]+1.8231301519518578e-10,-3):1075388923===o?Er(r,o,t):r>0?(f=r-4*Fr,t[0]=f-Gr,t[1]=f-t[0]-Gr,4):(f=r+4*Fr,t[0]=f+Gr,t[1]=f-t[0]+Gr,-4);if(o<1094263291)return Er(r,o,t);if(o>=2146435072)return t[0]=NaN,t[1]=NaN,0;for(n=function(r){return Z[0]=r,$[X]}(r),f=K(o-((e=(o>>20)-1046)<<20|0),n),u=0;u<2;u++)Pr[u]=0|f,f=16777216*(f-Pr[u]);for(Pr[2]=f,a=3;0===Pr[a-1];)a-=1;return i=Or(Pr,Lr,e,a),r<0?(t[0]=-Lr[0],t[1]=-Lr[1],-i):(t[0]=Lr[0],t[1]=Lr[1],i)}var Vr=-.16666666666666632;function Wr(r,t,n){var e,o,a,u,i;return o=.00833333333332249+(i=t*t)*(27557313707070068e-22*i-.0001984126982985795)+i*(u=i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),a=i*t,r[0]=0===n?t+a*(Vr+i*o):t-(i*(.5*n-a*o)-n-a*Vr),o=i*(.0416666666666666+i*(2480158728947673e-20*i-.001388888888887411)),o+=u*u*(i*(2.087572321298175e-9+-11359647557788195e-27*i)-2.7557314351390663e-7),u=1-(e=.5*i),r[1]=u+(1-u-e+(i*o-t*n)),r}var kr=[0,0];function xr(r,t){var n,e;if(n=C(t),(n&=2147483647)<=1072243195)return n<1044381696&&0==(0|t)&&(r[0]=t,r[1]=0),Wr(r,t,0);if(n>=2146435072)return r[0]=NaN,r[1]=NaN,r;switch(e=Mr(t,kr),Wr(r,kr[0],kr[1]),3&e){case 1:return n=r[1],r[1]=-r[0],r[0]=n,r;case 2:return r[0]*=-1,r[1]*=-1,r;case 3:return n=-r[1],r[1]=r[0],r[0]=n,r;default:return r}}var Yr=Math.ceil;function Cr(r){return r<0?Yr(r):rr(r)}function qr(r){var t;return er(r)||r===tr?r:r===nr?0:r>709.782712893384?tr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,o,a,u;return Ar(1-(t-(e=r-t)*(a=e-(o=e*e)*(0===(u=o)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-.6931471803691238*(t=Cr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function zr(r,t,n){var e,o;return er(t)?(r[0]=NaN,r[1]=0===n?n:t):or(n)?t===tr?(r[0]=-t,r[1]=NaN):t===nr?(r[0]=-0,r[1]=R(0,n)):(r[0]=NaN,r[1]=NaN):(o=qr(t),0===n?(r[0]=o,r[1]=n):(!function(r,t){1===arguments.length?xr([0,0],r):xr(r,t)}(r,n),e=r[0],r[0]=r[1]*o,r[1]=e*o)),r}function Br(r,t,n){return 2===arguments.length?zr([0,0],r,t):zr(r,t,n)}export{Br as default};
//# sourceMappingURL=mod.js.map
