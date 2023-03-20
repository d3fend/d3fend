import{S as le,i as re,s as ie,y as ne,a as p,k as n,q as u,z as ae,c as b,l as a,m as s,r as d,h as l,n as I,A as se,b as w,H as t,g as ce,d as he,B as fe,V as Zt,u as oe}from"../chunks/index.38e6a1b1.js";import{T as ue}from"../chunks/Title.76b3b16c.js";function Jt(g,i,f){const o=g.slice();return o[1]=i[f],o}function Xt(g,i,f){const o=g.slice();return o[1]=i[f],o}function Yt(g){let i,f,o,h,E,H,F,M,A,q,V,P,y,U,k,j=g[0].contributors.commited,v=[];for(let e=0;e<j.length;e+=1)v[e]=te(Xt(g,j,e));let C=g[0].contributors.contributors,m=[];for(let e=0;e<C.length;e+=1)m[e]=ee(Jt(g,C,e));return{c(){i=n("h2"),f=u("Commiting Contributors"),o=p(),h=n("p"),E=u("The D3FEND project team would like to thank all of the contributors who have submitted pull requests on Github."),H=p(),F=n("ul");for(let e=0;e<v.length;e+=1)v[e].c();M=p(),A=n("h2"),q=u("Contributors"),V=p(),P=n("p"),y=u(`The D3FEND project team would like to thank all of the contributors in the
      community who have provided content to grow the knowledge graph for public
      benefit.`),U=p(),k=n("ul");for(let e=0;e<m.length;e+=1)m[e].c();this.h()},l(e){i=a(e,"H2",{class:!0});var _=s(i);f=d(_,"Commiting Contributors"),_.forEach(l),o=b(e),h=a(e,"P",{});var r=s(h);E=d(r,"The D3FEND project team would like to thank all of the contributors who have submitted pull requests on Github."),r.forEach(l),H=b(e),F=a(e,"UL",{});var T=s(F);for(let L=0;L<v.length;L+=1)v[L].l(T);T.forEach(l),M=b(e),A=a(e,"H2",{});var S=s(A);q=d(S,"Contributors"),S.forEach(l),V=b(e),P=a(e,"P",{});var G=s(P);y=d(G,`The D3FEND project team would like to thank all of the contributors in the
      community who have provided content to grow the knowledge graph for public
      benefit.`),G.forEach(l),U=b(e),k=a(e,"UL",{});var z=s(k);for(let L=0;L<m.length;L+=1)m[L].l(z);z.forEach(l),this.h()},h(){I(i,"class","glow")},m(e,_){w(e,i,_),t(i,f),w(e,o,_),w(e,h,_),t(h,E),w(e,H,_),w(e,F,_);for(let r=0;r<v.length;r+=1)v[r].m(F,null);w(e,M,_),w(e,A,_),t(A,q),w(e,V,_),w(e,P,_),t(P,y),w(e,U,_),w(e,k,_);for(let r=0;r<m.length;r+=1)m[r].m(k,null)},p(e,_){if(_&1){j=e[0].contributors.commited;let r;for(r=0;r<j.length;r+=1){const T=Xt(e,j,r);v[r]?v[r].p(T,_):(v[r]=te(T),v[r].c(),v[r].m(F,null))}for(;r<v.length;r+=1)v[r].d(1);v.length=j.length}if(_&1){C=e[0].contributors.contributors;let r;for(r=0;r<C.length;r+=1){const T=Jt(e,C,r);m[r]?m[r].p(T,_):(m[r]=ee(T),m[r].c(),m[r].m(k,null))}for(;r<m.length;r+=1)m[r].d(1);m.length=C.length}},d(e){e&&l(i),e&&l(o),e&&l(h),e&&l(H),e&&l(F),Zt(v,e),e&&l(M),e&&l(A),e&&l(V),e&&l(P),e&&l(U),e&&l(k),Zt(m,e)}}}function te(g){let i,f=g[1]+"",o;return{c(){i=n("li"),o=u(f)},l(h){i=a(h,"LI",{});var E=s(i);o=d(E,f),E.forEach(l)},m(h,E){w(h,i,E),t(i,o)},p(h,E){E&1&&f!==(f=h[1]+"")&&oe(o,f)},d(h){h&&l(i)}}}function ee(g){let i,f=g[1]+"",o;return{c(){i=n("li"),o=u(f)},l(h){i=a(h,"LI",{});var E=s(i);o=d(E,f),E.forEach(l)},m(h,E){w(h,i,E),t(i,o)},p(h,E){E&1&&f!==(f=h[1]+"")&&oe(o,f)},d(h){h&&l(i)}}}function de(g){let i,f,o,h,E,H,F,M,A,q,V,P,y,U,k,j,v,C,m,e,_,r,T,S,G,z,L,at,st,x,ct,O,ht,ft,ut,$,X,dt,mt,Y,_t,pt,tt,bt,Et,et,vt,Dt,B,R,W,gt,Nt,K,Q,wt,kt,Ft,yt,Ct,Lt,lt,ot,Tt,rt;i=new ue({props:{title:"Contribute"}});let N=g[0].contributors&&Yt(g);return{c(){ne(i.$$.fragment),f=p(),o=n("section"),h=n("h1"),E=u("Contribute to D3FEND"),H=p(),F=n("p"),M=u(`D3FEND is an early stage initiative and needs community input to grow. We
    welcome any feedback or contributions to the project.`),A=p(),q=n("p"),V=u("There are numerous ways to connect with the D3FEND team or submit contributions or feedback."),P=p(),y=n("ul"),U=n("li"),k=n("a"),j=u("D3FEND Github"),v=p(),C=n("li"),m=n("a"),e=u("D3FEND Slack"),_=p(),r=n("li"),T=u("Email "),S=n("a"),G=u("d3fend@mitre.org"),z=p(),L=n("h2"),at=u("Contribution Processes:"),st=p(),x=n("p"),ct=u("Are you interested in contributing to the "),O=n("a"),ht=u("next version of D3FEND"),ft=u("?"),ut=p(),$=n("ul"),X=n("li"),dt=u("Is there a defensive technique or digital artifact you want added?"),mt=p(),Y=n("li"),_t=u("Are there missing or incorrect relationships?"),pt=p(),tt=n("li"),bt=u("Does a knowledgebase article seem incomplete, dated, or inaccurate?"),Et=p(),et=n("h3"),vt=u("Content Submission Forms"),Dt=p(),B=n("ul"),R=n("li"),W=n("a"),gt=u("New Technique Proposal Form"),Nt=p(),K=n("li"),Q=n("a"),wt=u("Contributing to the D3FEND Ontology"),kt=p(),Ft=n("br"),yt=p(),Ct=n("br"),Lt=p(),N&&N.c(),lt=p(),ot=n("p"),Tt=u("Thank you!"),this.h()},l(D){ae(i.$$.fragment,D),f=b(D),o=a(D,"SECTION",{class:!0});var c=s(o);h=a(c,"H1",{});var At=s(h);E=d(At,"Contribute to D3FEND"),At.forEach(l),H=b(c),F=a(c,"P",{});var Pt=s(F);M=d(Pt,`D3FEND is an early stage initiative and needs community input to grow. We
    welcome any feedback or contributions to the project.`),Pt.forEach(l),A=b(c),q=a(c,"P",{});var Ut=s(q);V=d(Ut,"There are numerous ways to connect with the D3FEND team or submit contributions or feedback."),Ut.forEach(l),P=b(c),y=a(c,"UL",{});var Z=s(y);U=a(Z,"LI",{});var jt=s(U);k=a(jt,"A",{href:!0});var qt=s(k);j=d(qt,"D3FEND Github"),qt.forEach(l),jt.forEach(l),v=b(Z),C=a(Z,"LI",{class:!0});var St=s(C);m=a(St,"A",{href:!0});var $t=s(m);e=d($t,"D3FEND Slack"),$t.forEach(l),St.forEach(l),_=b(Z),r=a(Z,"LI",{});var It=s(r);T=d(It,"Email "),S=a(It,"A",{href:!0});var Ht=s(S);G=d(Ht,"d3fend@mitre.org"),Ht.forEach(l),It.forEach(l),Z.forEach(l),z=b(c),L=a(c,"H2",{});var Mt=s(L);at=d(Mt,"Contribution Processes:"),Mt.forEach(l),st=b(c),x=a(c,"P",{});var it=s(x);ct=d(it,"Are you interested in contributing to the "),O=a(it,"A",{href:!0});var Vt=s(O);ht=d(Vt,"next version of D3FEND"),Vt.forEach(l),ft=d(it,"?"),it.forEach(l),ut=b(c),$=a(c,"UL",{});var J=s($);X=a(J,"LI",{});var xt=s(X);dt=d(xt,"Is there a defensive technique or digital artifact you want added?"),xt.forEach(l),mt=b(J),Y=a(J,"LI",{});var Bt=s(Y);_t=d(Bt,"Are there missing or incorrect relationships?"),Bt.forEach(l),pt=b(J),tt=a(J,"LI",{});var Gt=s(tt);bt=d(Gt,"Does a knowledgebase article seem incomplete, dated, or inaccurate?"),Gt.forEach(l),J.forEach(l),Et=b(c),et=a(c,"H3",{});var zt=s(et);vt=d(zt,"Content Submission Forms"),zt.forEach(l),Dt=b(c),B=a(c,"UL",{});var nt=s(B);R=a(nt,"LI",{class:!0});var Ot=s(R);W=a(Ot,"A",{href:!0});var Rt=s(W);gt=d(Rt,"New Technique Proposal Form"),Rt.forEach(l),Ot.forEach(l),Nt=b(nt),K=a(nt,"LI",{class:!0});var Wt=s(K);Q=a(Wt,"A",{href:!0});var Kt=s(Q);wt=d(Kt,"Contributing to the D3FEND Ontology"),Kt.forEach(l),Wt.forEach(l),nt.forEach(l),kt=b(c),Ft=a(c,"BR",{}),yt=b(c),Ct=a(c,"BR",{}),Lt=b(c),N&&N.l(c),lt=b(c),ot=a(c,"P",{});var Qt=s(ot);Tt=d(Qt,"Thank you!"),Qt.forEach(l),c.forEach(l),this.h()},h(){I(k,"href","https://github.com/d3fend"),I(m,"href","https://join.slack.com/t/mitre-d3fend/shared_invite/zt-108eicnoj-fpZPD9EFNtuMNDVrlRWQlA"),I(C,"class","glow"),I(S,"href","mailto:d3fend@mitre.org"),I(O,"href","https://next.d3fend.mitre.org"),I(W,"href","https://forms.office.com/Pages/ResponsePage.aspx?id=SNwgxlAdUkmLOd9NVNdNgnMBKyUeqgtLlzLvGbM9fblUMzNNTFMzVlA5MlpHWDlDUEM5VjBVN0g3Vy4u"),I(R,"class",""),I(Q,"href","https://github.com/d3fend/d3fend-ontology/blob/develop/CONTRIBUTING.md"),I(K,"class",""),I(o,"class","content")},m(D,c){se(i,D,c),w(D,f,c),w(D,o,c),t(o,h),t(h,E),t(o,H),t(o,F),t(F,M),t(o,A),t(o,q),t(q,V),t(o,P),t(o,y),t(y,U),t(U,k),t(k,j),t(y,v),t(y,C),t(C,m),t(m,e),t(y,_),t(y,r),t(r,T),t(r,S),t(S,G),t(o,z),t(o,L),t(L,at),t(o,st),t(o,x),t(x,ct),t(x,O),t(O,ht),t(x,ft),t(o,ut),t(o,$),t($,X),t(X,dt),t($,mt),t($,Y),t(Y,_t),t($,pt),t($,tt),t(tt,bt),t(o,Et),t(o,et),t(et,vt),t(o,Dt),t(o,B),t(B,R),t(R,W),t(W,gt),t(B,Nt),t(B,K),t(K,Q),t(Q,wt),t(o,kt),t(o,Ft),t(o,yt),t(o,Ct),t(o,Lt),N&&N.m(o,null),t(o,lt),t(o,ot),t(ot,Tt),rt=!0},p(D,[c]){D[0].contributors?N?N.p(D,c):(N=Yt(D),N.c(),N.m(o,lt)):N&&(N.d(1),N=null)},i(D){rt||(ce(i.$$.fragment,D),rt=!0)},o(D){he(i.$$.fragment,D),rt=!1},d(D){fe(i,D),D&&l(f),D&&l(o),N&&N.d()}}}function me(g,i,f){let{data:o}=i;return g.$$set=h=>{"data"in h&&f(0,o=h.data)},[o]}class be extends le{constructor(i){super(),re(this,i,me,de,ie,{data:0})}}export{be as default};
