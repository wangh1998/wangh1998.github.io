(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"0371":function(e,t,n){"use strict";n("28be")},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),i=n("e330"),c=n("d784"),s=n("44e7"),o=n("825a"),l=n("1d80"),u=n("4840"),d=n("8aa5"),f=n("50c4"),p=n("577e"),v=n("dc4a"),h=n("4dae"),g=n("14c3"),x=n("9263"),b=n("9f7f"),m=n("d039"),y=b.UNSUPPORTED_Y,E=4294967295,I=Math.min,w=[].push,A=i(/./.exec),R=i(w),_=i("".slice),k=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));c("split",(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=p(l(this)),c=void 0===n?E:n>>>0;if(0===c)return[];if(void 0===e)return[i];if(!s(e))return a(t,i,e,c);var o,u,d,f=[],v=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,b=new RegExp(e.source,v+"g");while(o=a(x,b,i)){if(u=b.lastIndex,u>g&&(R(f,_(i,g,o.index)),o.length>1&&o.index<i.length&&r(w,f,h(o,1)),d=o[0].length,g=u,f.length>=c))break;b.lastIndex===o.index&&b.lastIndex++}return g===i.length?!d&&A(b,"")||R(f,""):R(f,_(i,g)),f.length>c?h(f,0,c):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:a(t,this,e,n)}:t,[function(t,n){var r=l(this),c=void 0==t?void 0:v(t,e);return c?a(c,t,r,n):a(i,p(r),t,n)},function(e,r){var a=o(this),c=p(e),s=n(i,a,c,r,i!==t);if(s.done)return s.value;var l=u(a,RegExp),v=a.unicode,h=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(y?"g":"y"),x=new l(y?"^(?:"+a.source+")":a,h),b=void 0===r?E:r>>>0;if(0===b)return[];if(0===c.length)return null===g(x,c)?[c]:[];var m=0,w=0,A=[];while(w<c.length){x.lastIndex=y?0:w;var k,C=g(x,y?_(c,w):c);if(null===C||(k=I(f(x.lastIndex+(y?w:0)),c.length))===m)w=d(c,w,v);else{if(R(A,_(c,m,w)),A.length===b)return A;for(var K=1;K<=C.length-1;K++)if(R(A,C[K]),A.length===b)return A;w=m=k}}return R(A,_(c,m)),A}]}),!k,y)},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),i=n("825a"),c=n("1626"),s=n("c6b6"),o=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&i(r),r}if("RegExp"===s(e))return a(o,e,t);throw l("RegExp#exec called on incompatible receiver")}},"28be":function(e,t,n){},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),i=n("b622"),c=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[c])?!!t:"RegExp"==a(e))}},"7d36":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game-box"},[n("div",{staticClass:"button",on:{click:e.random}},[e._v("重新发牌")]),e._l(e.players,(function(t,r){return n("div",{key:r,staticClass:"player"},[n("div",{staticClass:"card-list"},e._l(t.cards,(function(t,r){return n("div",{key:t,staticClass:"card-item"},[n("div",{class:{black:e.black.includes(t.split("")[0]),red:e.red.includes(t.split("")[0])}},[e._v(" "+e._s(e._f("numberFilter")(t))+" ")]),n("div",{class:{black:e.black.includes(t.split("")[0]),red:e.red.includes(t.split("")[0])}},[e._v(" \b"+e._s(t.split("")[0])+" ")]),2===r?n("div",{class:{black:e.black.includes(t.split("")[0]),red:e.red.includes(t.split("")[0]),"absolute-icon":!0}},[e._v(" \b"+e._s(t.split("")[0])+" ")]):e._e()])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"play.name"}],staticClass:"name-info",attrs:{type:"text"},domProps:{value:t.name},on:{input:function(n){n.target.composing||e.$set(t,"name",n.target.value)}}})])}))],2)},a=[],i=(n("ac1f"),n("1276"),n("a434"),n("a15b"),n("d3b7"),n("159b"),n("99af"),n("caad"),{name:"Game",data:function(){return{icon:["♠","♥","♣","♦"],black:["♠","♣"],red:["♥","♦"],numbers:["A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K"],players:[{name:"玩家一",cards:[]},{name:"玩家二",cards:[]},{name:"玩家三",cards:[]}]}},filters:{numberFilter:function(e){var t=e.split("");return t.splice(0,1),t.join("")}},created:function(){this.random()},methods:{random:function(){this.numbers=["A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K","A","2","3","4","5","6","7","8","9","10","J","Q","K"],this.players.forEach((function(e){e.cards=[],e.cards=[],e.cards=[]}));for(var e=[],t=0;t<9;t++){var n=this.icon[Math.floor(4*Math.random())+1-1],r=Math.floor(Math.random()*(52-t))+1-1,a=this.numbers.splice(r,1)[0],i="".concat(n).concat(a);e.includes(i)?(this.numbers.push(a),t--):e.push(i)}this.players.forEach((function(t,n){t.cards.push(e[n]),t.cards.push(e[n+3]),t.cards.push(e[n+6])}))}}}),c=i,s=(n("0371"),n("2877")),o=Object(s["a"])(c,r,a,!1,null,"b09af3ac",null);t["default"]=o.exports},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),i=n("577e"),c=n("ad6d"),s=n("9f7f"),o=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),f=n("107c"),p=o("native-string-replace",String.prototype.replace),v=RegExp.prototype.exec,h=v,g=a("".charAt),x=a("".indexOf),b=a("".replace),m=a("".slice),y=function(){var e=/a/,t=/b*/g;return r(v,e,"a"),r(v,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),E=s.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],w=y||I||E||d||f;w&&(h=function(e){var t,n,a,s,o,d,f,w=this,A=u(w),R=i(e),_=A.raw;if(_)return _.lastIndex=w.lastIndex,t=r(h,_,R),w.lastIndex=_.lastIndex,t;var k=A.groups,C=E&&w.sticky,K=r(c,w),J=w.source,M=0,Q=R;if(C&&(K=b(K,"y",""),-1===x(K,"g")&&(K+="g"),Q=m(R,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==g(R,w.lastIndex-1))&&(J="(?: "+J+")",Q=" "+Q,M++),n=new RegExp("^(?:"+J+")",K)),I&&(n=new RegExp("^"+J+"$(?!\\s)",K)),y&&(a=w.lastIndex),s=r(v,C?n:w,Q),C?s?(s.input=m(s.input,M),s[0]=m(s[0],M),s.index=w.lastIndex,w.lastIndex+=s[0].length):w.lastIndex=0:y&&s&&(w.lastIndex=w.global?s.index+s[0].length:a),I&&s&&s.length>1&&r(p,s[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(s[o]=void 0)})),s&&k)for(s.groups=d=l(null),o=0;o<k.length;o++)f=k[o],d[f[0]]=s[f[1]];return s}),e.exports=h},"99af":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("d039"),c=n("e8b5"),s=n("861d"),o=n("7b0b"),l=n("07fa"),u=n("8418"),d=n("65f0"),f=n("1dde"),p=n("b622"),v=n("2d00"),h=p("isConcatSpreadable"),g=9007199254740991,x="Maximum allowed index exceeded",b=a.TypeError,m=v>=51||!i((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),y=f("concat"),E=function(e){if(!s(e))return!1;var t=e[h];return void 0!==t?!!t:c(e)},I=!m||!y;r({target:"Array",proto:!0,arity:1,forced:I},{concat:function(e){var t,n,r,a,i,c=o(this),s=d(c,0),f=0;for(t=-1,r=arguments.length;t<r;t++)if(i=-1===t?c:arguments[t],E(i)){if(a=l(i),f+a>g)throw b(x);for(n=0;n<a;n++,f++)n in i&&u(s,f,i[n])}else{if(f>=g)throw b(x);u(s,f++,i)}return s.length=f,s}})},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp,c=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),s=c||r((function(){return!i("a","y").sticky})),o=c||r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:s,UNSUPPORTED_Y:c}},a15b:function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),i=n("44ad"),c=n("fc6a"),s=n("a640"),o=a([].join),l=i!=Object,u=s("join",",");r({target:"Array",proto:!0,forced:l||!u},{join:function(e){return o(c(this),void 0===e?",":e)}})},a434:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),i=n("23cb"),c=n("5926"),s=n("07fa"),o=n("7b0b"),l=n("65f0"),u=n("8418"),d=n("1dde"),f=d("splice"),p=a.TypeError,v=Math.max,h=Math.min,g=9007199254740991,x="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f},{splice:function(e,t){var n,r,a,d,f,b,m=o(this),y=s(m),E=i(e,y),I=arguments.length;if(0===I?n=r=0:1===I?(n=0,r=y-E):(n=I-2,r=h(v(c(t),0),y-E)),y+n-r>g)throw p(x);for(a=l(m,r),d=0;d<r;d++)f=E+d,f in m&&u(a,d,m[f]);if(a.length=r,n<r){for(d=E;d<y-r;d++)f=d+r,b=d+n,f in m?m[b]=m[f]:delete m[b];for(d=y;d>y-r+n;d--)delete m[d-1]}else if(n>r)for(d=y-r;d>E;d--)f=d+r-1,b=d+n-1,f in m?m[b]=m[f]:delete m[b];for(d=0;d<n;d++)m[d+E]=arguments[d+2];return m.length=y-r+n,a}})},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},caad:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").includes,i=n("d039"),c=n("44d2"),s=i((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:s},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("cb2d"),i=n("9263"),c=n("d039"),s=n("b622"),o=n("9112"),l=s("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var f=s(e),p=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),v=p&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!v||n){var h=r(/./[f]),g=t(f,""[e],(function(e,t,n,a,c){var s=r(e),o=t.exec;return o===i||o===u.exec?p&&!c?{done:!0,value:h(t,n,a)}:{done:!0,value:s(n,t,a)}:{done:!1}}));a(String.prototype,e,g[0]),a(u,f,g[1])}d&&o(u[f],"sham",!0)}},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),i=a.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=game.9ee9e77d.js.map