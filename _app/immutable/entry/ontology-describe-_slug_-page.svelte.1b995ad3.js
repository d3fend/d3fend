import{S as He,i as xe,s as qe,a as T,k as h,q as j,Y as Ae,h as r,c as D,l as d,m as u,r as k,n as g,b as U,H as e,C as Ee,V as me,D as Be,u as W}from"../chunks/index.38e6a1b1.js";import{p as Ie}from"../chunks/stores.8b24c703.js";function Te(o,l,n){const c=o.slice();return c[3]=l[n],c}function je(o,l,n){const c=o.slice();return c[3]=l[n],c}function De(o){let l,n,c=o[3].subject.value+"",f,A,_,H=o[3].predicate.value+"",b,p,v,x=o[3].object.value+"",B,q;return{c(){l=h("tr"),n=h("td"),f=j(c),A=T(),_=h("td"),b=j(H),p=T(),v=h("td"),B=j(x),q=T(),this.h()},l(i){l=d(i,"TR",{});var a=u(l);n=d(a,"TD",{class:!0});var I=u(n);f=k(I,c),I.forEach(r),A=D(a),_=d(a,"TD",{class:!0});var O=u(_);b=k(O,H),O.forEach(r),p=D(a),v=d(a,"TD",{class:!0});var y=u(v);B=k(y,x),y.forEach(r),q=D(a),a.forEach(r),this.h()},h(){g(n,"class","svelte-gsxars"),g(_,"class","svelte-gsxars"),g(v,"class","svelte-gsxars")},m(i,a){U(i,l,a),e(l,n),e(n,f),e(l,A),e(l,_),e(_,b),e(l,p),e(l,v),e(v,B),e(l,q)},p(i,a){a&1&&c!==(c=i[3].subject.value+"")&&W(f,c),a&1&&H!==(H=i[3].predicate.value+"")&&W(b,H),a&1&&x!==(x=i[3].object.value+"")&&W(B,x)},d(i){i&&r(l)}}}function ke(o){let l,n,c=o[3].subject.value+"",f,A,_,H=o[3].predicate.value+"",b,p,v,x=o[3].object.value+"",B,q;return{c(){l=h("tr"),n=h("td"),f=j(c),A=T(),_=h("td"),b=j(H),p=T(),v=h("td"),B=j(x),q=T(),this.h()},l(i){l=d(i,"TR",{});var a=u(l);n=d(a,"TD",{class:!0});var I=u(n);f=k(I,c),I.forEach(r),A=D(a),_=d(a,"TD",{class:!0});var O=u(_);b=k(O,H),O.forEach(r),p=D(a),v=d(a,"TD",{class:!0});var y=u(v);B=k(y,x),y.forEach(r),q=D(a),a.forEach(r),this.h()},h(){g(n,"class","svelte-gsxars"),g(_,"class","svelte-gsxars"),g(v,"class","svelte-gsxars")},m(i,a){U(i,l,a),e(l,n),e(n,f),e(l,A),e(l,_),e(_,b),e(l,p),e(l,v),e(v,B),e(l,q)},p(i,a){a&1&&c!==(c=i[3].subject.value+"")&&W(f,c),a&1&&H!==(H=i[3].predicate.value+"")&&W(b,H),a&1&&x!==(x=i[3].object.value+"")&&W(B,x)},d(i){i&&r(l)}}}function Le(o){let l,n,c,f,A,_,H,b,p,v,x,B,q,i,a,I,O,y,P,X,V,S,te,se,le,R,Y,z,ae,re,F,ce,oe,G,ne,he,J;document.title=l="Description of "+o[1];let K=o[0].sparql_result.results.bindings,E=[];for(let t=0;t<K.length;t+=1)E[t]=De(je(o,K,t));let M=o[0].inbound_links.results.bindings,m=[];for(let t=0;t<M.length;t+=1)m[t]=ke(Te(o,M,t));return{c(){n=T(),c=h("div"),f=h("h1"),A=j("Outbound Links for: "),_=j(o[1]),H=T(),b=h("table"),p=h("thead"),v=h("th"),x=j("subject"),B=T(),q=h("th"),i=j("predicate"),a=T(),I=h("th"),O=j("object"),y=T(),P=h("tbody");for(let t=0;t<E.length;t+=1)E[t].c();X=T(),V=h("div"),S=h("h1"),te=j("Inbound links for: "),se=j(o[1]),le=T(),R=h("table"),Y=h("thead"),z=h("th"),ae=j("subject"),re=T(),F=h("th"),ce=j("predicate"),oe=T(),G=h("th"),ne=j("object"),he=T(),J=h("tbody");for(let t=0;t<m.length;t+=1)m[t].c();this.h()},l(t){Ae("svelte-1kw8p1x",document.head).forEach(r),n=D(t),c=d(t,"DIV",{class:!0});var s=u(c);f=d(s,"H1",{class:!0});var C=u(f);A=k(C,"Outbound Links for: "),_=k(C,o[1]),C.forEach(r),H=D(s),b=d(s,"TABLE",{class:!0});var Z=u(b);p=d(Z,"THEAD",{});var N=u(p);v=d(N,"TH",{class:!0});var ue=u(v);x=k(ue,"subject"),ue.forEach(r),B=D(N),q=d(N,"TH",{class:!0});var ie=u(q);i=k(ie,"predicate"),ie.forEach(r),a=D(N),I=d(N,"TH",{class:!0});var _e=u(I);O=k(_e,"object"),_e.forEach(r),N.forEach(r),y=D(Z),P=d(Z,"TBODY",{});var fe=u(P);for(let w=0;w<E.length;w+=1)E[w].l(fe);fe.forEach(r),Z.forEach(r),s.forEach(r),X=D(t),V=d(t,"DIV",{class:!0});var $=u(V);S=d($,"H1",{class:!0});var de=u(S);te=k(de,"Inbound links for: "),se=k(de,o[1]),de.forEach(r),le=D($),R=d($,"TABLE",{class:!0});var ee=u(R);Y=d(ee,"THEAD",{});var Q=u(Y);z=d(Q,"TH",{class:!0});var ve=u(z);ae=k(ve,"subject"),ve.forEach(r),re=D(Q),F=d(Q,"TH",{class:!0});var be=u(F);ce=k(be,"predicate"),be.forEach(r),oe=D(Q),G=d(Q,"TH",{class:!0});var ge=u(G);ne=k(ge,"object"),ge.forEach(r),Q.forEach(r),he=D(ee),J=d(ee,"TBODY",{});var pe=u(J);for(let w=0;w<m.length;w+=1)m[w].l(pe);pe.forEach(r),ee.forEach(r),$.forEach(r),this.h()},h(){g(f,"class","text-center"),g(v,"class","svelte-gsxars"),g(q,"class","svelte-gsxars"),g(I,"class","svelte-gsxars"),g(b,"class","font-small bg-light center svelte-gsxars"),g(c,"class","content svelte-gsxars"),g(S,"class","text-center"),g(z,"class","svelte-gsxars"),g(F,"class","svelte-gsxars"),g(G,"class","svelte-gsxars"),g(R,"class","font-small bg-light center svelte-gsxars"),g(V,"class","content svelte-gsxars")},m(t,L){U(t,n,L),U(t,c,L),e(c,f),e(f,A),e(f,_),e(c,H),e(c,b),e(b,p),e(p,v),e(v,x),e(p,B),e(p,q),e(q,i),e(p,a),e(p,I),e(I,O),e(b,y),e(b,P);for(let s=0;s<E.length;s+=1)E[s].m(P,null);U(t,X,L),U(t,V,L),e(V,S),e(S,te),e(S,se),e(V,le),e(V,R),e(R,Y),e(Y,z),e(z,ae),e(Y,re),e(Y,F),e(F,ce),e(Y,oe),e(Y,G),e(G,ne),e(R,he),e(R,J);for(let s=0;s<m.length;s+=1)m[s].m(J,null)},p(t,[L]){if(L&2&&l!==(l="Description of "+t[1])&&(document.title=l),L&1){K=t[0].sparql_result.results.bindings;let s;for(s=0;s<K.length;s+=1){const C=je(t,K,s);E[s]?E[s].p(C,L):(E[s]=De(C),E[s].c(),E[s].m(P,null))}for(;s<E.length;s+=1)E[s].d(1);E.length=K.length}if(L&1){M=t[0].inbound_links.results.bindings;let s;for(s=0;s<M.length;s+=1){const C=Te(t,M,s);m[s]?m[s].p(C,L):(m[s]=ke(C),m[s].c(),m[s].m(J,null))}for(;s<m.length;s+=1)m[s].d(1);m.length=M.length}},i:Ee,o:Ee,d(t){t&&r(n),t&&r(c),me(E,t),t&&r(X),t&&r(V),me(m,t)}}}function Oe(o,l,n){let c;Be(o,Ie,_=>n(2,c=_));let{data:f}=l,A=c.params.slug;return o.$$set=_=>{"data"in _&&n(0,f=_.data)},[f,A]}class Ye extends He{constructor(l){super(),xe(this,l,Oe,Le,qe,{data:0})}}export{Ye as default};
