import{S as Ae,i as Ce,s as Ne,y as we,a as A,k as _,q as N,z as Me,c as C,l as u,m as p,r as w,h as s,n as K,A as Ie,b,H as i,M as ie,g as Ke,d as Se,B as qe,V as ke,C as Z,p as L,e as Te}from"../chunks/index.38e6a1b1.js";import{T as Fe}from"../chunks/Title.76b3b16c.js";import{G as He,h as ye}from"../chunks/lib.1620f930.js";function Ee(d,e,a){const l=d.slice();return l[6]=e[a],l}function be(d,e,a){const l=d.slice();return l[9]=e[a],l}function Re(d){let e,a,l,o;return{c(){e=_("button"),a=N("select"),this.h()},l(n){e=u(n,"BUTTON",{class:!0});var t=p(e);a=w(t,"select"),t.forEach(s),this.h()},h(){K(e,"class","selector")},m(n,t){b(n,e,t),i(e,a),l||(o=ie(e,"click",d[5]),l=!0)},p:Z,d(n){n&&s(e),l=!1,o()}}}function Ve(d){let e,a,l,o;return{c(){e=_("button"),a=N("deselect"),this.h()},l(n){e=u(n,"BUTTON",{class:!0});var t=p(e);a=w(t,"deselect"),t.forEach(s),this.h()},h(){K(e,"class","selector")},m(n,t){b(n,e,t),i(e,a),l||(o=ie(e,"click",d[2]),l=!0)},p:Z,d(n){n&&s(e),l=!1,o()}}}function Be(d){let e,a,l=d[6]["@id"]+"",o,n,t,f,y,m,v,E;return{c(){e=_("td"),a=_("a"),o=N(l),n=A(),t=_("td"),f=N("not found"),y=A(),m=_("td"),v=_("div"),E=N("not found"),this.h()},l(r){e=u(r,"TD",{});var T=p(e);a=u(T,"A",{style:!0,href:!0});var k=p(a);o=w(k,l),k.forEach(s),T.forEach(s),n=C(r),t=u(r,"TD",{style:!0});var q=p(t);f=w(q,"not found"),q.forEach(s),y=C(r),m=u(r,"TD",{style:!0});var D=p(m);v=u(D,"DIV",{});var h=p(v);E=w(h,"not found"),h.forEach(s),D.forEach(s),this.h()},h(){L(a,"color","red"),K(a,"href",ye(d[6]["@id"])),L(t,"color","red"),L(m,"color","red")},m(r,T){b(r,e,T),i(e,a),i(a,o),b(r,n,T),b(r,t,T),i(t,f),b(r,y,T),b(r,m,T),i(m,v),i(v,E)},p:Z,d(r){r&&s(e),r&&s(n),r&&s(t),r&&s(y),r&&s(m)}}}function Oe(d){let e,a=d[6]["@id"].split(":")[1]+"",l,o,n,t,f=d[6]["rdfs:label"]+"",y,m,v,E,r,T,k=(d[6]["d3f:d3fend-comment"]||"")+"",q,D=d[6]["d3f:related"]&&Pe(d);return{c(){e=_("td"),l=N(a),o=A(),n=_("td"),t=_("a"),y=N(f),m=A(),v=_("td"),D&&D.c(),E=A(),r=_("td"),T=_("small"),q=N(k),this.h()},l(h){e=u(h,"TD",{class:!0});var M=p(e);l=w(M,a),M.forEach(s),o=C(h),n=u(h,"TD",{class:!0});var H=p(n);t=u(H,"A",{href:!0});var F=p(t);y=w(F,f),F.forEach(s),H.forEach(s),m=C(h),v=u(h,"TD",{});var V=p(v);D&&D.l(V),V.forEach(s),E=C(h),r=u(h,"TD",{style:!0});var O=p(r);T=u(O,"SMALL",{});var P=p(T);q=w(P,k),P.forEach(s),O.forEach(s),this.h()},h(){K(e,"class","text-center"),K(t,"href",ye(d[6]["@id"].split(":")[1])),K(n,"class",""),L(r,"width","15rem")},m(h,M){b(h,e,M),i(e,l),b(h,o,M),b(h,n,M),i(n,t),i(t,y),b(h,m,M),b(h,v,M),D&&D.m(v,null),b(h,E,M),b(h,r,M),i(r,T),i(T,q)},p(h,M){h[6]["d3f:related"]&&D.p(h,M)},d(h){h&&s(e),h&&s(o),h&&s(n),h&&s(m),h&&s(v),D&&D.d(),h&&s(E),h&&s(r)}}}function Pe(d){let e,a=d[6]["d3f:related"],l=[];for(let o=0;o<a.length;o+=1)l[o]=De(be(d,a,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=Te()},l(o){for(let n=0;n<l.length;n+=1)l[n].l(o);e=Te()},m(o,n){for(let t=0;t<l.length;t+=1)l[t].m(o,n);b(o,e,n)},p(o,n){if(n&2){a=o[6]["d3f:related"];let t;for(t=0;t<a.length;t+=1){const f=be(o,a,t);l[t]?l[t].p(f,n):(l[t]=De(f),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=a.length}},d(o){ke(l,o),o&&s(e)}}}function De(d){let e,a,l=d[1].get_and_cache("@id",d[9]["@id"])["d3f:d3fend-id"]+"",o,n,t,f,y=d[1].current_node["rdfs:label"]+"",m,v;return{c(){e=_("div"),a=_("span"),o=N(l),n=A(),t=_("span"),f=_("a"),m=N(y),v=A(),this.h()},l(E){e=u(E,"DIV",{class:!0});var r=p(e);a=u(r,"SPAN",{style:!0});var T=p(a);o=w(T,l),T.forEach(s),n=C(r),t=u(r,"SPAN",{});var k=p(t);f=u(k,"A",{href:!0,title:!0});var q=p(f);m=w(q,y),q.forEach(s),k.forEach(s),v=C(r),r.forEach(s),this.h()},h(){L(a,"width","5rem"),L(a,"display","inline-block"),K(f,"href","/technique/"+d[9]["@id"]),K(f,"title",d[1].get("@id",d[9]["@id"])["d3f:definition"]),K(e,"class","center")},m(E,r){b(E,e,r),i(e,a),i(a,o),i(e,n),i(e,t),i(t,f),i(f,m),i(e,v)},p:Z,d(E){E&&s(e)}}}function ge(d){let e,a;function l(t,f){return t[6]?Oe:Be}let n=l(d)(d);return{c(){e=_("tr"),n.c(),a=A()},l(t){e=u(t,"TR",{});var f=p(e);n.l(f),a=C(f),f.forEach(s)},m(t,f){b(t,e,f),n.m(e,null),i(e,a)},p(t,f){n.p(t,f)},d(t){t&&s(e),n.d()}}}function $e(d){let e,a,l,o,n,t,f,y,m,v,E,r,T,k,q,D,h,M,H,F,V,O,P,U,x,ee,G,te,le,z,se,ne,J,ae,re;e=new Fe({props:{title:"ATT&CK Mitigations to D3FEND Mappings"}});function ce(c,S){return c[0]?Ve:Re}let Q=ce(d),R=Q(d),$=d[1].get_by_type("d3f:ATTACKMitigation"),I=[];for(let c=0;c<$.length;c+=1)I[c]=ge(Ee(d,$,c));return{c(){we(e.$$.fragment),a=A(),l=_("section"),o=_("h1"),n=N("ATT&CK Mitigations to D3FEND Technique Mappings"),t=A(),f=_("p"),y=N(`The D3FEND team created this mapping in order to help users navigate between
    the two knowledgebases.`),m=A(),v=_("section"),E=_("div"),r=_("div"),T=_("div"),k=_("div"),R.c(),q=A(),D=_("button"),h=N("copy"),M=A(),H=_("table"),F=_("thead"),V=_("th"),O=N("ATT&CK ID"),P=A(),U=_("th"),x=N("ATT&CK Mitigation"),ee=A(),G=_("th"),te=N("Related D3FEND Techniques"),le=A(),z=_("th"),se=N("Comment"),ne=A();for(let c=0;c<I.length;c+=1)I[c].c();this.h()},l(c){Me(e.$$.fragment,c),a=C(c),l=u(c,"SECTION",{class:!0});var S=p(l);o=u(S,"H1",{});var g=p(o);n=w(g,"ATT&CK Mitigations to D3FEND Technique Mappings"),g.forEach(s),t=C(S),f=u(S,"P",{});var j=p(f);y=w(j,`The D3FEND team created this mapping in order to help users navigate between
    the two knowledgebases.`),j.forEach(s),S.forEach(s),m=C(c),v=u(c,"SECTION",{});var de=p(v);E=u(de,"DIV",{class:!0});var fe=p(E);r=u(fe,"DIV",{class:!0});var he=p(r);T=u(he,"DIV",{class:!0});var W=p(T);k=u(W,"DIV",{class:!0});var X=p(k);R.l(X),q=C(X),D=u(X,"BUTTON",{});var _e=p(D);h=w(_e,"copy"),_e.forEach(s),X.forEach(s),M=C(W),H=u(W,"TABLE",{id:!0,class:!0});var Y=p(H);F=u(Y,"THEAD",{});var B=p(F);V=u(B,"TH",{});var ue=p(V);O=w(ue,"ATT&CK ID"),ue.forEach(s),P=C(B),U=u(B,"TH",{});var pe=p(U);x=w(pe,"ATT&CK Mitigation"),pe.forEach(s),ee=C(B),G=u(B,"TH",{});var me=p(G);te=w(me,"Related D3FEND Techniques"),me.forEach(s),le=C(B),z=u(B,"TH",{});var ve=p(z);se=w(ve,"Comment"),ve.forEach(s),B.forEach(s),ne=C(Y);for(let oe=0;oe<I.length;oe+=1)I[oe].l(Y);Y.forEach(s),W.forEach(s),he.forEach(s),fe.forEach(s),de.forEach(s),this.h()},h(){K(l,"class","content"),K(k,"class","text-right"),K(H,"id","mappings"),K(H,"class","table-auto"),K(T,"class","results-wrap"),K(r,"class","card stretch shrink center"),K(E,"class","")},m(c,S){Ie(e,c,S),b(c,a,S),b(c,l,S),i(l,o),i(o,n),i(l,t),i(l,f),i(f,y),b(c,m,S),b(c,v,S),i(v,E),i(E,r),i(r,T),i(T,k),R.m(k,null),i(k,q),i(k,D),i(D,h),i(T,M),i(T,H),i(H,F),i(F,V),i(V,O),i(F,P),i(F,U),i(U,x),i(F,ee),i(F,G),i(G,te),i(F,le),i(F,z),i(z,se),i(H,ne);for(let g=0;g<I.length;g+=1)I[g].m(H,null);J=!0,ae||(re=ie(D,"click",Le),ae=!0)},p(c,[S]){if(Q===(Q=ce(c))&&R?R.p(c,S):(R.d(1),R=Q(c),R&&(R.c(),R.m(k,q))),S&2){$=c[1].get_by_type("d3f:ATTACKMitigation");let g;for(g=0;g<$.length;g+=1){const j=Ee(c,$,g);I[g]?I[g].p(j,S):(I[g]=ge(j),I[g].c(),I[g].m(H,null))}for(;g<I.length;g+=1)I[g].d(1);I.length=$.length}},i(c){J||(Ke(e.$$.fragment,c),J=!0)},o(c){Se(e.$$.fragment,c),J=!1},d(c){qe(e,c),c&&s(a),c&&s(l),c&&s(m),c&&s(v),R.d(),ke(I,c),ae=!1,re()}}}function Le(){document.execCommand("copy")}function Ue(d,e,a){let{data:l}=e,o=new He(l.mitigations),n=!1;function t(){window.getSelection().removeAllRanges(),a(0,n=!1)}function f(m){const v=window.getSelection();v.removeAllRanges();const E=document.getElementById(m),r=document.createRange();r.selectNodeContents(E),v.addRange(r),a(0,n=!0)}const y=()=>f("mappings");return d.$$set=m=>{"data"in m&&a(4,l=m.data)},[n,o,t,f,l,y]}class Je extends Ae{constructor(e){super(),Ce(this,e,Ue,$e,Ne,{data:4})}}export{Je as default};
