import{S as z,i as A,s as B,e as m,t as k,c as b,a as g,h as E,d as c,b as S,g as N,G as f,n as y,k as P,m as T,H as F,j as H,l as j,I as M}from"./index-931a37f3.js";function w(a,e,s){const l=a.slice();return l[13]=e[s],l}function q(a){let e,s,l,t,n,i;return{c(){e=m("p"),s=m("strong"),l=k("Fecha"),t=k(": "),n=m("b"),i=k(a[3]),this.h()},l(r){e=b(r,"P",{class:!0});var o=g(e);s=b(o,"STRONG",{});var _=g(s);l=E(_,"Fecha"),_.forEach(c),t=E(o,": "),n=b(o,"B",{});var h=g(n);i=E(h,a[3]),h.forEach(c),o.forEach(c),this.h()},h(){S(e,"class","has-text-light")},m(r,o){N(r,e,o),f(e,s),f(s,l),f(e,t),f(e,n),f(n,i)},p:y,d(r){r&&c(e)}}}function C(a){let e,s,l,t,n;return{c(){e=m("p"),s=m("strong"),l=k("Ubicaci\xF3n:"),t=P(),n=k(a[5]),this.h()},l(i){e=b(i,"P",{class:!0});var r=g(e);s=b(r,"STRONG",{});var o=g(s);l=E(o,"Ubicaci\xF3n:"),o.forEach(c),t=T(r),n=E(r,a[5]),r.forEach(c),this.h()},h(){S(e,"class","has-text-light has-text-left")},m(i,r){N(i,e,r),f(e,s),f(s,l),f(e,t),f(e,n)},p:y,d(i){i&&c(e)}}}function J(a){let e,s,l,t,n;return{c(){e=m("p"),s=m("strong"),l=k("Ponente:"),t=P(),n=k(a[6]),this.h()},l(i){e=b(i,"P",{class:!0});var r=g(e);s=b(r,"STRONG",{});var o=g(s);l=E(o,"Ponente:"),o.forEach(c),t=T(r),n=E(r,a[6]),r.forEach(c),this.h()},h(){S(e,"class","has-text-light has-text-left")},m(i,r){N(i,e,r),f(e,s),f(s,l),f(e,t),f(e,n)},p:y,d(i){i&&c(e)}}}function K(a){let e,s,l,t,n;return{c(){e=m("p"),s=m("strong"),l=k("Organizado por:"),t=P(),n=k(a[7]),this.h()},l(i){e=b(i,"P",{class:!0});var r=g(e);s=b(r,"STRONG",{});var o=g(s);l=E(o,"Organizado por:"),o.forEach(c),t=T(r),n=E(r,a[7]),r.forEach(c),this.h()},h(){S(e,"class","has-text-light has-text-left")},m(i,r){N(i,e,r),f(e,s),f(s,l),f(e,t),f(e,n)},p:y,d(i){i&&c(e)}}}function L(a){let e,s,l,t,n;return{c(){e=m("p"),s=m("strong"),l=k("Moderado por:"),t=P(),n=k(a[8]),this.h()},l(i){e=b(i,"P",{class:!0});var r=g(e);s=b(r,"STRONG",{});var o=g(s);l=E(o,"Moderado por:"),o.forEach(c),t=T(r),n=E(r,a[8]),r.forEach(c),this.h()},h(){S(e,"class","has-text-light has-text-left")},m(i,r){N(i,e,r),f(e,s),f(s,l),f(e,t),f(e,n)},p:y,d(i){i&&c(e)}}}function Q(a){let e,s,l,t,n;function i(h,u){return h[0]?X:W}let r=i(a),o=r(a),_=!a[10]&&Y(a);return{c(){e=m("strong"),s=k("Descripci\xF3n"),l=P(),t=m("div"),o.c(),n=P(),_&&_.c(),this.h()},l(h){e=b(h,"STRONG",{});var u=g(e);s=E(u,"Descripci\xF3n"),u.forEach(c),l=T(h),t=b(h,"DIV",{class:!0});var v=g(t);o.l(v),n=T(v),_&&_.l(v),v.forEach(c),this.h()},h(){S(t,"class","has-text-light is-info mb-3")},m(h,u){N(h,e,u),f(e,s),N(h,l,u),N(h,t,u),o.m(t,null),f(t,n),_&&_.m(t,null)},p(h,u){r===(r=i(h))&&o?o.p(h,u):(o.d(1),o=r(h),o&&(o.c(),o.m(t,n))),h[10]||_.p(h,u)},d(h){h&&c(e),h&&c(l),h&&c(t),o.d(),_&&_.d()}}}function W(a){let e,s=a[2][0]+"",l;return{c(){e=m("p"),l=k(s)},l(t){e=b(t,"P",{});var n=g(e);l=E(n,s),n.forEach(c)},m(t,n){N(t,e,n),f(e,l)},p:y,d(t){t&&c(e)}}}function X(a){let e,s=a[2],l=[];for(let t=0;t<s.length;t+=1)l[t]=U(w(a,s,t));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=j()},l(t){for(let n=0;n<l.length;n+=1)l[n].l(t);e=j()},m(t,n){for(let i=0;i<l.length;i+=1)l[i].m(t,n);N(t,e,n)},p(t,n){if(n&4){s=t[2];let i;for(i=0;i<s.length;i+=1){const r=w(t,s,i);l[i]?l[i].p(r,n):(l[i]=U(r),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},d(t){M(l,t),t&&c(e)}}}function U(a){let e,s=a[13]+"",l,t;return{c(){e=m("p"),l=k(s),t=P()},l(n){e=b(n,"P",{});var i=g(e);l=E(i,s),t=T(i),i.forEach(c)},m(n,i){N(n,e,i),f(e,l),f(e,t)},p:y,d(n){n&&c(e)}}}function Y(a){let e,s,l=a[0]?"Ver menos":"Ver m\xE1s",t,n,i;return{c(){e=m("span"),s=m("button"),t=k(l),this.h()},l(r){e=b(r,"SPAN",{class:!0});var o=g(e);s=b(o,"BUTTON",{class:!0});var _=g(s);t=E(_,l),_.forEach(c),o.forEach(c),this.h()},h(){S(s,"class","column is-narrow is-centered button is-primary is-rounded is-small is-fullwidth"),S(e,"class","is-text is-clickable is-small has-text-primary is-underlined is-clickable has-text-weight-bold is-flex is-justify-content-center pt-2")},m(r,o){N(r,e,o),f(e,s),f(s,t),n||(i=F(e,"click",a[12]),n=!0)},p(r,o){o&1&&l!==(l=r[0]?"Ver menos":"Ver m\xE1s")&&H(t,l)},d(r){r&&c(e),n=!1,i()}}}function Z(a){let e,s;return{c(){e=m("a"),s=k("Inscr\xEDbete"),this.h()},l(l){e=b(l,"A",{href:!0,class:!0,target:!0});var t=g(e);s=E(t,"Inscr\xEDbete"),t.forEach(c),this.h()},h(){S(e,"href",a[4]),S(e,"class","mt-3 button is-primary"),S(e,"target","_blank")},m(l,t){N(l,e,t),f(e,s)},p:y,d(l){l&&c(e)}}}function $(a){let e,s,l,t,n,i,r,o,_,h,u=a[3]!==void 0&&q(a),v=a[5]!==void 0&&C(a),G=a[6]!==void 0&&J(a),O=a[7]!==void 0&&K(a),V=a[8]!==void 0&&L(a),R=a[9]&&Q(a),I=a[4]!==void 0&&Z(a);return{c(){e=m("div"),s=m("h3"),l=k(a[1]),t=P(),u&&u.c(),n=P(),v&&v.c(),i=P(),G&&G.c(),r=P(),O&&O.c(),o=P(),V&&V.c(),_=P(),R&&R.c(),h=P(),I&&I.c(),this.h()},l(p){e=b(p,"DIV",{class:!0});var d=g(e);s=b(d,"H3",{class:!0});var D=g(s);l=E(D,a[1]),D.forEach(c),t=T(d),u&&u.l(d),n=T(d),v&&v.l(d),i=T(d),G&&G.l(d),r=T(d),O&&O.l(d),o=T(d),V&&V.l(d),_=T(d),R&&R.l(d),h=T(d),I&&I.l(d),d.forEach(c),this.h()},h(){S(s,"class","subtitle is-4 has-text-primary mb-1"),S(e,"class","box has-background-grey-dark")},m(p,d){N(p,e,d),f(e,s),f(s,l),f(e,t),u&&u.m(e,null),f(e,n),v&&v.m(e,null),f(e,i),G&&G.m(e,null),f(e,r),O&&O.m(e,null),f(e,o),V&&V.m(e,null),f(e,_),R&&R.m(e,null),f(e,h),I&&I.m(e,null)},p(p,[d]){p[3]!==void 0&&u.p(p,d),p[5]!==void 0&&v.p(p,d),p[6]!==void 0&&G.p(p,d),p[7]!==void 0&&O.p(p,d),p[8]!==void 0&&V.p(p,d),p[9]&&R.p(p,d),p[4]!==void 0&&I.p(p,d)},i:y,o:y,d(p){p&&c(e),u&&u.d(),v&&v.d(),G&&G.d(),O&&O.d(),V&&V.d(),R&&R.d(),I&&I.d()}}}function x(a,e,s){let{evento:l}=e;const{title:t,description:n,date:i,url:r,ubicacion:o,ponente:_,tutor:h,moderador:u}=l,v=n!==void 0,G=v&&n.length==1;let O=G;const V=()=>s(0,O=!O);return a.$$set=R=>{"evento"in R&&s(11,l=R.evento)},[O,t,n,i,r,o,_,h,u,v,G,l,V]}class te extends z{constructor(e){super();A(this,e,x,$,B,{evento:11})}}export{te as T};
