import{S as I,i as M,s as S,G as T,k as p,q as D,a as V,l as b,m as v,r as E,h as m,c as k,n as q,T as w,b as C,H as c,J as H,K as L,L as j,g as J,d as K,o as P,ae as R,w as G}from"./index.38e6a1b1.js";import{m as z}from"./mermaid.core.ffca9792.js";function A(l){let s,i,a,_,u,d,r,o;const h=l[4].default,t=T(h,l,l[3],null);return{c(){s=p("div"),i=p("div"),a=p("pre"),_=D("        "),t&&t.c(),u=D(`
      `),d=V(),r=p("div"),this.h()},l(e){s=b(e,"DIV",{});var n=v(s);i=b(n,"DIV",{});var g=v(i);a=b(g,"PRE",{class:!0});var f=v(a);_=E(f,"        "),t&&t.l(f),u=E(f,`
      `),f.forEach(m),g.forEach(m),d=k(n),r=b(n,"DIV",{}),v(r).forEach(m),n.forEach(m),this.h()},h(){q(a,"class","svelte-mjolgb"),w(a,"hidden",!l[0])},m(e,n){C(e,s,n),c(s,i),c(i,a),c(a,_),t&&t.m(a,null),c(a,u),l[5](a),c(s,d),c(s,r),l[6](r),o=!0},p(e,[n]){t&&t.p&&(!o||n&8)&&H(t,h,e,e[3],o?j(h,e[3],n,null):L(e[3]),null),(!o||n&1)&&w(a,"hidden",!e[0])},i(e){o||(J(t,e),o=!0)},o(e){K(t,e),o=!1},d(e){e&&m(s),t&&t.d(e),l[5](null),l[6](null)}}}function B(l,s,i){let{$$slots:a={},$$scope:_}=s,{debug:u=!1}=s,d,r;async function o(e,n){let g=r.textContent;const{svg:f,bindFunctions:y}=await z.render("m-abstract-base-graph"+e,g);n.innerHTML=f,y==null||y(n)}P(async()=>{let e=Math.random().toString(36).substr(2);await o(e,d)}),R(()=>{});function h(e){G[e?"unshift":"push"](()=>{r=e,i(2,r)})}function t(e){G[e?"unshift":"push"](()=>{d=e,i(1,d)})}return l.$$set=e=>{"debug"in e&&i(0,u=e.debug),"$$scope"in e&&i(3,_=e.$$scope)},[u,d,r,_,a,h,t]}class Q extends I{constructor(s){super(),M(this,s,B,A,S,{debug:0})}}export{Q as G};
