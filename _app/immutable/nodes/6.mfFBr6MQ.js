import{m as Y}from"../chunks/matrix.qg38SuKK.js";import{s as Z,A as P,k,i as d,o as q,q as x,r as R,V as W,c as J,e as L,b as E,d as T,f as V,j as O,w as z,l as ee,W as B,u as K,g as Q,a as U}from"../chunks/scheduler.rYb7pZZG.js";import{S as te,i as ne,a as $,e as ae,t as h,g as oe,f as D,c as S,b as j,m as A,d as F}from"../chunks/index.DuGWJhq4.js";import{v as G,d as H}from"../chunks/stores.X8uRkACV.js";import{N as se,F as re}from"../chunks/Notification.jsmeiVPR.js";import{N as le,a as ie}from"../chunks/Nav-mobile.NaZvl2iD.js";import{p as fe}from"../chunks/stores.CeV6jFzo.js";import{s as _e}from"../chunks/lib.FzuLk5Dt.js";async function ue(a){return Y(a)}const we=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function me(a){let n,t,o,s,l,f,b,r,u,m,y,p,g,v;function _(e){a[6](e)}let C={current_path:a[1]};a[0]!==void 0&&(C.open=a[0]),t=new le({props:C}),W.push(()=>D(t,"open",_));function X(e){a[7](e)}let I={current_path:a[1]};a[0]!==void 0&&(I.sidebar=a[0]),l=new ie({props:I}),W.push(()=>D(l,"sidebar",X));const M=a[5].default,c=J(M,a,a[4],null);return m=new se({}),g=new re({}),{c(){n=L("nav"),S(t.$$.fragment),s=E(),S(l.$$.fragment),b=E(),r=L("main"),c&&c.c(),u=E(),S(m.$$.fragment),y=E(),p=L("footer"),S(g.$$.fragment),this.h()},l(e){n=T(e,"NAV",{class:!0});var i=V(n);j(t.$$.fragment,i),s=O(i),j(l.$$.fragment,i),i.forEach(d),b=O(e),r=T(e,"MAIN",{class:!0});var N=V(r);c&&c.l(N),N.forEach(d),u=O(e),j(m.$$.fragment,e),y=O(e),p=T(e,"FOOTER",{class:!0});var w=V(p);j(g.$$.fragment,w),w.forEach(d),this.h()},h(){z(n,"class","svelte-anufko"),z(r,"class","svelte-anufko"),z(p,"class","svelte-anufko")},m(e,i){k(e,n,i),A(t,n,null),ee(n,s),A(l,n,null),k(e,b,i),k(e,r,i),c&&c.m(r,null),k(e,u,i),A(m,e,i),k(e,y,i),k(e,p,i),A(g,p,null),v=!0},p(e,i){const N={};i&2&&(N.current_path=e[1]),!o&&i&1&&(o=!0,N.open=e[0],B(()=>o=!1)),t.$set(N);const w={};i&2&&(w.current_path=e[1]),!f&&i&1&&(f=!0,w.sidebar=e[0],B(()=>f=!1)),l.$set(w),c&&c.p&&(!v||i&16)&&K(c,M,e,e[4],v?U(M,e[4],i,null):Q(e[4]),null)},i(e){v||(h(t.$$.fragment,e),h(l.$$.fragment,e),h(c,e),h(m.$$.fragment,e),h(g.$$.fragment,e),v=!0)},o(e){$(t.$$.fragment,e),$(l.$$.fragment,e),$(c,e),$(m.$$.fragment,e),$(g.$$.fragment,e),v=!1},d(e){e&&(d(n),d(b),d(r),d(u),d(y),d(p)),F(t),F(l),c&&c.d(e),F(m,e),F(g)}}}function pe(a){let n;const t=a[5].default,o=J(t,a,a[4],null);return{c(){o&&o.c()},l(s){o&&o.l(s)},m(s,l){o&&o.m(s,l),n=!0},p(s,l){o&&o.p&&(!n||l&16)&&K(o,t,s,s[4],n?U(t,s[4],l,null):Q(s[4]),null)},i(s){n||(h(o,s),n=!0)},o(s){$(o,s),n=!1},d(s){o&&o.d(s)}}}function ce(a){let n,t,o,s;const l=[pe,me],f=[];function b(r,u){return r[1]==="poster"?0:1}return n=b(a),t=f[n]=l[n](a),{c(){t.c(),o=P()},l(r){t.l(r),o=P()},m(r,u){f[n].m(r,u),k(r,o,u),s=!0},p(r,[u]){let m=n;n=b(r),n===m?f[n].p(r,u):(oe(),$(f[m],1,1,()=>{f[m]=null}),ae(),t=f[n],t?t.p(r,u):(t=f[n]=l[n](r),t.c()),h(t,1),t.m(o.parentNode,o))},i(r){s||(h(t),s=!0)},o(r){$(t),s=!1},d(r){r&&d(o),f[n].d(r)}}}function de(a,n,t){let o,s,l,f;q(a,G,_=>t(8,s=_)),q(a,H,_=>t(9,l=_)),q(a,fe,_=>t(3,f=_));let{$$slots:b={},$$scope:r}=n,{data:u}=n,{remote_d3fend_tree:m,remote_version_info:y}=u,p=!1;x(async()=>{R(H,l=m,l),R(G,s=y,s)});function g(_){p=_,t(0,p)}function v(_){p=_,t(0,p)}return a.$$set=_=>{"data"in _&&t(2,u=_.data),"$$scope"in _&&t(4,r=_.$$scope)},a.$$.update=()=>{a.$$.dirty&8&&t(1,o=_e(f.url.pathname,"/"))},[p,o,u,f,r,b,g,v]}class Ee extends te{constructor(n){super(),ne(this,n,de,ce,Z,{data:2})}}export{Ee as component,we as universal};