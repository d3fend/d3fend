import{S,i as w,s as L,k as p,q as D,a as H,l as m,m as g,r as y,h as o,c as q,n as B,b as N,H as i,C,V as O}from"../chunks/index.38e6a1b1.js";import{G as R}from"../chunks/lib.1620f930.js";function G(h,t,s){const a=h.slice();return a[2]=t[s],a}function P(h){let t,s,a,u=h[2]["rdfs:label"]+"",f,d;return{c(){t=p("tr"),s=p("td"),a=p("a"),f=D(u),d=H(),this.h()},l(_){t=m(_,"TR",{});var n=g(t);s=m(n,"TD",{});var v=g(s);a=m(v,"A",{href:!0});var b=g(a);f=y(b,u),b.forEach(o),v.forEach(o),d=q(n),n.forEach(o),this.h()},h(){B(a,"href","/tactic/"+h[2]["@id"])},m(_,n){N(_,t,n),i(t,s),i(s,a),i(a,f),i(t,d)},p:C,d(_){_&&o(t)}}}function V(h){let t,s,a,u,f,d,_,n,v,b=h[0].graph.length+"",k,E=h[0].graph,r=[];for(let e=0;e<E.length;e+=1)r[e]=P(G(h,E,e));return{c(){t=p("table"),s=p("thead"),a=p("th"),u=D("D3FEND Tactic Name"),f=H(),d=p("tbody");for(let e=0;e<r.length;e+=1)r[e].c();_=H(),n=p("p"),v=D("total count: "),k=D(b),this.h()},l(e){t=m(e,"TABLE",{id:!0,class:!0});var c=g(t);s=m(c,"THEAD",{});var l=g(s);a=m(l,"TH",{});var T=g(a);u=y(T,"D3FEND Tactic Name"),T.forEach(o),l.forEach(o),f=q(c),d=m(c,"TBODY",{});var F=g(d);for(let A=0;A<r.length;A+=1)r[A].l(F);F.forEach(o),c.forEach(o),_=q(e),n=m(e,"P",{});var x=g(n);v=y(x,"total count: "),k=y(x,b),x.forEach(o),this.h()},h(){B(t,"id","mappings"),B(t,"class","table-auto")},m(e,c){N(e,t,c),i(t,s),i(s,a),i(a,u),i(t,f),i(t,d);for(let l=0;l<r.length;l+=1)r[l].m(d,null);N(e,_,c),N(e,n,c),i(n,v),i(n,k)},p(e,[c]){if(c&1){E=e[0].graph;let l;for(l=0;l<E.length;l+=1){const T=G(e,E,l);r[l]?r[l].p(T,c):(r[l]=P(T),r[l].c(),r[l].m(d,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=E.length}},i:C,o:C,d(e){e&&o(t),O(r,e),e&&o(_),e&&o(n)}}}function Y(h,t,s){let{data:a}=t,u=new R(a.graph);return h.$$set=f=>{"data"in f&&s(1,a=f.data)},[u,a]}class I extends S{constructor(t){super(),w(this,t,Y,V,L,{data:1})}}export{I as default};
