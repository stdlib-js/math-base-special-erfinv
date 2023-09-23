// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";function t(t){return t!=t}var n=Math.sqrt;function r(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e,o=r(),i=Object.prototype.toString,a=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,c="function"==typeof u?u.toStringTag:"",f=o&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,u;if(null==t)return i.call(t);r=t[c],u=c,n=null!=(o=t)&&a.call(o,u);try{t[c]=void 0}catch(n){return i.call(t)}return e=i.call(t),n?t[c]=r:delete t[c],e}:function(t){return i.call(t)},l="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;e=function(){var t,n,r;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(l&&r instanceof Uint32Array||"[object Uint32Array]"===f(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?p:function(){throw new Error("not implemented")};var v,b=e,A=r(),d=Object.prototype.toString,m=Object.prototype.hasOwnProperty,g="function"==typeof u?u.toStringTag:"",w=A&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return d.call(t);r=t[g],i=g,n=null!=(o=t)&&m.call(o,i);try{t[g]=void 0}catch(n){return d.call(t)}return e=d.call(t),n?t[g]=r:delete t[g],e}:function(t){return d.call(t)},s="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,h="function"==typeof Float64Array?Float64Array:void 0;v=function(){var t,n,r;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),r=n,t=(s&&r instanceof Float64Array||"[object Float64Array]"===w(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?h:function(){throw new Error("not implemented")};var U,N=v,j=r(),F=Object.prototype.toString,O=Object.prototype.hasOwnProperty,T="function"==typeof u?u.toStringTag:"",I=j&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return F.call(t);r=t[T],i=T,n=null!=(o=t)&&O.call(o,i);try{t[T]=void 0}catch(n){return F.call(t)}return e=F.call(t),n?t[T]=r:delete t[T],e}:function(t){return F.call(t)},E="function"==typeof Uint8Array,P="function"==typeof Uint8Array?Uint8Array:null,x="function"==typeof Uint8Array?Uint8Array:void 0;U=function(){var t,n,r;if("function"!=typeof P)return!1;try{n=new P(n=[1,3.14,-3.14,256,257]),r=n,t=(E&&r instanceof Uint8Array||"[object Uint8Array]"===I(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?x:function(){throw new Error("not implemented")};var V,Y=U,_=r(),q=Object.prototype.toString,G=Object.prototype.hasOwnProperty,M="function"==typeof u?u.toStringTag:"",k=_&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return q.call(t);r=t[M],i=M,n=null!=(o=t)&&G.call(o,i);try{t[M]=void 0}catch(n){return q.call(t)}return e=q.call(t),n?t[M]=r:delete t[M],e}:function(t){return q.call(t)},z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,C="function"==typeof Uint16Array?Uint16Array:void 0;V=function(){var t,n,r;if("function"!=typeof B)return!1;try{n=new B(n=[1,3.14,-3.14,65536,65537]),r=n,t=(z&&r instanceof Uint16Array||"[object Uint16Array]"===k(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?C:function(){throw new Error("not implemented")};var D,H={uint16:V,uint8:Y};(D=new H.uint16(1))[0]=4660;var J=52===new H.uint8(D.buffer)[0],K=!0===J?1:0,L=new N(1),Q=new b(L.buffer);function R(t){return L[0]=t,Q[K]}var W,X=r(),Z=Object.prototype.toString,$=Object.prototype.hasOwnProperty,tt="function"==typeof u?u.toStringTag:"",nt=X&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,e,o,i;if(null==t)return Z.call(t);r=t[tt],i=tt,n=null!=(o=t)&&$.call(o,i);try{t[tt]=void 0}catch(n){return Z.call(t)}return e=Z.call(t),n?t[tt]=r:delete t[tt],e}:function(t){return Z.call(t)},rt="function"==typeof Float64Array,et="function"==typeof Float64Array?Float64Array:null,ot="function"==typeof Float64Array?Float64Array:void 0;W=function(){var t,n,r;if("function"!=typeof et)return!1;try{n=new et([1,3.14,-3.14,NaN]),r=n,t=(rt&&r instanceof Float64Array||"[object Float64Array]"===nt(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?ot:function(){throw new Error("not implemented")};var it=!0===J?1:0,at=new W(1),ut=new b(at.buffer),ct=Number.NEGATIVE_INFINITY,ft=.6931471803691238,lt=1.9082149292705877e-10,yt=1048575;function pt(n){var r,e,o,i,a,u,c,f,l,y,p,v;return 0===n?ct:t(n)||n<0?NaN:(a=0,(e=R(n))<1048576&&(a-=54,e=R(n*=0x40000000000000)),e>=2146435072?n+n:(a+=(e>>20)-1023|0,a+=(f=614244+(e&=yt)&1048576|0)>>20|0,c=(n=function(t,n){return at[0]=t,ut[it]=n>>>0,at[0]}(n,e|1072693248^f))-1,(yt&2+e)<3?0===c?0===a?0:a*ft+a*lt:(u=c*c*(.5-.3333333333333333*c),0===a?c-u:a*ft-(u-a*lt-c)):(f=e-398458|0,l=440401-e|0,i=(p=(v=(y=c/(2+c))*y)*v)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),o=v*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=o+i,(f|=l)>0?(r=.5*c*c,0===a?c-(r-y*(r+u)):a*ft-(r-(y*(r+u)+a*lt)-c)):0===a?c-y*(c-u):a*ft-(y*(c-u)-a*lt-c))))}var vt=Number.POSITIVE_INFINITY;return function(r){var e,o,i,a,u;return t(r)?NaN:1===r?vt:-1===r?ct:0===r?r:r>1||r<-1?NaN:(r<0?(e=-1,o=-r):(e=1,o=r),i=1-o,o<=.5?(a=o*(o+10),u=function(t){var n,r;return 0===t?-.0005087819496582806:((t<0?-t:t)<=1?(n=t*(t*(.03348066254097446+t*(t*(t*(.02198786811111689+t*(.008226878746769157+t*(t*(0+0*t)-.005387729650712429)))-.03656379714117627)-.012692614766297404))-.008368748197417368)-.0005087819496582806,r=1+t*(t*(t*(1.5622155839842302+t*(.662328840472003+t*(t*(t*(.07952836873415717+t*(.0008862163904564247*t-.0023339375937419))-.05273963823400997)-.7122890234154284)))-1.5657455823417585)-.9700050433032906)):(n=0+(t=1/t)*(0+t*(t*(.008226878746769157+t*(.02198786811111689+t*(t*(t*(.03348066254097446+t*(-.0005087819496582806*t-.008368748197417368))-.012692614766297404)-.03656379714117627)))-.005387729650712429)),r=.0008862163904564247+t*(t*(.07952836873415717+t*(t*(t*(.662328840472003+t*(1.5622155839842302+t*(t*(1*t-.9700050433032906)-1.5657455823417585)))-.7122890234154284)-.05273963823400997))-.0023339375937419)),n/r)}(o),e*(.08913147449493408*a+a*u)):i>=.25?(a=n(-2*pt(i)),u=function(t){var n,r;return 0===t?-.20243350835593876:((t<0?-t:t)<=1?(n=t*(.10526468069939171+t*(8.3705032834312+t*(17.644729840837403+t*(t*(t*(17.445385985570866+t*(21.12946554483405+-3.6719225470772936*t))-44.6382324441787)-18.851064805871424))))-.20243350835593876,r=1+t*(6.242641248542475+t*(3.971343795334387+t*(t*(t*(48.560921310873994+t*(10.826866735546016+t*(1.7211476576120028*t-22.643693341313973)))-20.14326346804852)-28.66081804998)))):(n=(t=1/t)*(21.12946554483405+t*(17.445385985570866+t*(t*(t*(17.644729840837403+t*(8.3705032834312+t*(.10526468069939171+-.20243350835593876*t)))-18.851064805871424)-44.6382324441787)))-3.6719225470772936,r=1.7211476576120028+t*(t*(10.826866735546016+t*(48.560921310873994+t*(t*(t*(3.971343795334387+t*(6.242641248542475+1*t))-28.66081804998)-20.14326346804852)))-22.643693341313973)),n/r)}(i-=.25),e*(a/(2.249481201171875+u))):(i=n(-pt(i)))<3?(u=function(t){var n,r;return 0===t?-.1311027816799519:((t<0?-t:t)<=1?(n=t*(t*(.11703015634199525+t*(.38707973897260434+t*(.3377855389120359+t*(.14286953440815717+t*(.029015791000532906+t*(.0021455899538880526+t*(t*(2.8522533178221704e-8+-6.81149956853777e-10*t)-6.794655751811263e-7)))))))-.16379404719331705)-.1311027816799519,r=1+t*(3.4662540724256723+t*(5.381683457070069+t*(4.778465929458438+t*(2.5930192162362027+t*(.848854343457902+t*(.15226433829533179+t*(.011059242293464892+t*(0+t*(0+0*t)))))))))):(n=(t=1/t)*(2.8522533178221704e-8+t*(t*(.0021455899538880526+t*(.029015791000532906+t*(.14286953440815717+t*(.3377855389120359+t*(.38707973897260434+t*(.11703015634199525+t*(-.1311027816799519*t-.16379404719331705)))))))-6.794655751811263e-7))-6.81149956853777e-10,r=0+t*(0+t*(0+t*(.011059242293464892+t*(.15226433829533179+t*(.848854343457902+t*(2.5930192162362027+t*(4.778465929458438+t*(5.381683457070069+t*(3.4662540724256723+1*t)))))))))),n/r)}(i-1.125),e*(.807220458984375*i+u*i)):i<6?(u=function(t){var n,r;return 0===t?-.0350353787183178:((t<0?-t:t)<=1?(n=t*(t*(.018557330651423107+t*(.009508047013259196+t*(.0018712349281955923+t*(.00015754461742496055+t*(460469890584318e-20+t*(26633922742578204e-28*t-2.304047769118826e-10))))))-.0022242652921344794)-.0350353787183178,r=1+t*(1.3653349817554064+t*(.7620591645536234+t*(.22009110576413124+t*(.03415891436709477+t*(.00263861676657016+t*(7646752923027944e-20+t*(0+0*t)))))))):(n=26633922742578204e-28+(t=1/t)*(t*(460469890584318e-20+t*(.00015754461742496055+t*(.0018712349281955923+t*(.009508047013259196+t*(.018557330651423107+t*(-.0350353787183178*t-.0022242652921344794))))))-2.304047769118826e-10),r=0+t*(0+t*(7646752923027944e-20+t*(.00263861676657016+t*(.03415891436709477+t*(.22009110576413124+t*(.7620591645536234+t*(1.3653349817554064+1*t)))))))),n/r)}(i-3),e*(.9399557113647461*i+u*i)):(u=function(t){var n,r;return 0===t?-.016743100507663373:((t<0?-t:t)<=1?(n=t*(t*(.001056288621524929+t*(.00020938631748758808+t*(14962478375834237e-21+t*(4.4969678992770644e-7+t*(4.625961635228786e-9+t*(9905570997331033e-32*t-2811287356288318e-29))))))-.0011295143874558028)-.016743100507663373,r=1+t*(.5914293448864175+t*(.1381518657490833+t*(.016074608709367652+t*(.0009640118070051656+t*(27533547476472603e-21+t*(2.82243172016108e-7+t*(0+0*t)))))))):(n=9905570997331033e-32+(t=1/t)*(t*(4.625961635228786e-9+t*(4.4969678992770644e-7+t*(14962478375834237e-21+t*(.00020938631748758808+t*(.001056288621524929+t*(-.016743100507663373*t-.0011295143874558028))))))-2811287356288318e-29),r=0+t*(0+t*(2.82243172016108e-7+t*(27533547476472603e-21+t*(.0009640118070051656+t*(.016074608709367652+t*(.1381518657490833+t*(.5914293448864175+1*t)))))))),n/r)}(i-6),e*(.9836282730102539*i+u*i)))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).erfinv=n();
//# sourceMappingURL=browser.js.map
