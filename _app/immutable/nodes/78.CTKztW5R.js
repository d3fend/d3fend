import{s as ye,n as X,d as h,L as ke,y as Ce,a as Y,i as F,b as f,p as ne,a6 as at,v as _,c as v,w as ce,g as S,e as y,f as O,h as p,j as A,t as z,x as we,r as De,I as be,E as de,M as nt,K as Me,N as st,X as it,O as rt,k as oe,Z as ot}from"../chunks/cxan7wOg.js";import{h as Oe,u as ct}from"../chunks/HSwUWEKm.js";import{S as Se,i as Ae,f as dt,d as he,t as me,a as _e,m as ve,c as pe,b as ge}from"../chunks/DASJK2Q2.js";import{w as ze}from"../chunks/QZJxXKAA.js";import{p as ft}from"../chunks/BRvn21wg.js";import{T as ut}from"../chunks/DiN5yw8L.js";import{S as ht}from"../chunks/Dkk-ouyP.js";import{e as le}from"../chunks/Dj50n38G.js";/* empty css                */import{m as Ve}from"../chunks/CesSW9Du.js";import{s as mt}from"../chunks/BtLQq3Gv.js";import{e as _t,n as vt,m as pt}from"../chunks/DSGv_HAR.js";/* empty css                */function He(a,e,t){const l=a.slice();return l[11]=e[t],l[12]=e,l[13]=t,l}function Le(a){let e,t,l,n,s,d,r=a[11].view+"",o,c,i,u;function m(){a[9].call(l,a[12],a[13])}function E(...b){return a[10](a[11],...b)}return{c(){e=p("article"),t=p("form"),l=p("input"),s=A(),d=p("span"),o=z(r),c=A(),this.h()},l(b){e=v(b,"ARTICLE",{class:!0});var w=y(e);t=v(w,"FORM",{class:!0});var k=y(t);l=v(k,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),s=S(k),d=v(k,"SPAN",{class:!0});var g=y(d);o=O(g,r),g.forEach(h),k.forEach(h),c=S(w),w.forEach(h),this.h()},h(){_(l,"class","check-box"),_(l,"type","checkbox"),_(l,"name",n=a[11].field),_(l,"tabindex","0"),_(d,"class","layer-text"),_(t,"class","setting-checks svelte-14q5rrs"),_(e,"class","setting svelte-14q5rrs")},m(b,w){F(b,e,w),f(e,t),f(t,l),l.checked=a[11].checked,f(t,s),f(t,d),f(d,o),f(e,c),i||(u=[ne(l,"change",m),ne(l,"click",at(E))],i=!0)},p(b,w){a=b,w&8&&n!==(n=a[11].field)&&_(l,"name",n),w&8&&(l.checked=a[11].checked),w&8&&r!==(r=a[11].view+"")&&Y(o,r)},d(b){b&&h(e),i=!1,Ce(u)}}}function gt(a){let e,t="Settings",l,n,s,d,r,o,c,i,u,m,E,b,w="60",k,g,C,R,H="100",U,Z,Q,G,L,j,x,D,V="Toggle All Metadata",W,K,se,B=le(Object.values(a[3])),N=[];for(let I=0;I<B.length;I+=1)N[I]=Le(He(a,B,I));return{c(){e=p("h3"),e.textContent=t,l=A(),n=p("section"),s=p("article"),d=p("div"),r=z("Container Scale"),o=p("span"),c=z("("),i=z(a[4]),u=z(")"),m=A(),E=p("div"),b=p("span"),b.textContent=w,k=A(),g=p("input"),C=A(),R=p("span"),R.textContent=H,U=A(),Z=p("br"),Q=A(),G=p("article"),L=p("form"),j=p("input"),x=A(),D=p("span"),D.textContent=V,W=A();for(let I=0;I<N.length;I+=1)N[I].c();this.h()},l(I){e=v(I,"H3",{class:!0,"data-svelte-h":!0}),ce(e)!=="svelte-ihiao5"&&(e.textContent=t),l=S(I),n=v(I,"SECTION",{class:!0});var T=y(n);s=v(T,"ARTICLE",{});var P=y(s);d=v(P,"DIV",{class:!0});var J=y(d);r=O(J,"Container Scale"),o=v(J,"SPAN",{});var te=y(o);c=O(te,"("),i=O(te,a[4]),u=O(te,")"),te.forEach(h),J.forEach(h),m=S(P),E=v(P,"DIV",{class:!0});var ee=y(E);b=v(ee,"SPAN",{"data-svelte-h":!0}),ce(b)!=="svelte-nt3n7g"&&(b.textContent=w),k=S(ee),g=v(ee,"INPUT",{type:!0,min:!0,max:!0,class:!0,id:!0}),C=S(ee),R=v(ee,"SPAN",{"data-svelte-h":!0}),ce(R)!=="svelte-rbuf0z"&&(R.textContent=H),ee.forEach(h),P.forEach(h),U=S(T),Z=v(T,"BR",{}),Q=S(T),G=v(T,"ARTICLE",{});var ue=y(G);L=v(ue,"FORM",{class:!0});var ae=y(L);j=v(ae,"INPUT",{class:!0,type:!0,name:!0,tabindex:!0}),x=S(ae),D=v(ae,"SPAN",{class:!0,"data-svelte-h":!0}),ce(D)!=="svelte-11nf2zc"&&(D.textContent=V),ae.forEach(h),ue.forEach(h),W=S(T);for(let q=0;q<N.length;q+=1)N[q].l(T);T.forEach(h),this.h()},h(){_(e,"class","text-center"),_(d,"class","select-name svelte-14q5rrs"),_(g,"type","range"),_(g,"min","60"),_(g,"max","99"),g.value="80",_(g,"class","slider"),_(g,"id","myRange"),_(E,"class","size-slider svelte-14q5rrs"),_(j,"class","check-box"),_(j,"type","checkbox"),_(j,"name","toggleAll"),j.checked=bt,_(j,"tabindex","0"),_(D,"class","layer-text"),_(L,"class","setting-checks svelte-14q5rrs"),_(n,"class","setting-checks-container svelte-14q5rrs")},m(I,T){F(I,e,T),F(I,l,T),F(I,n,T),f(n,s),f(s,d),f(d,r),f(d,o),f(o,c),f(o,i),f(o,u),f(s,m),f(s,E),f(E,b),f(E,k),f(E,g),a[8](g),f(E,C),f(E,R),f(n,U),f(n,Z),f(n,Q),f(n,G),f(G,L),f(L,j),f(L,x),f(L,D),f(n,W);for(let P=0;P<N.length;P+=1)N[P]&&N[P].m(n,null);K||(se=[ne(g,"input",a[5]),ne(j,"click",at(a[7]))],K=!0)},p(I,[T]){if(T&16&&Y(i,I[4]),T&72){B=le(Object.values(I[3]));let P;for(P=0;P<B.length;P+=1){const J=He(I,B,P);N[P]?N[P].p(J,T):(N[P]=Le(J),N[P].c(),N[P].m(n,null))}for(;P<N.length;P+=1)N[P].d(1);N.length=B.length}},i:X,o:X,d(I){I&&(h(e),h(l),h(n)),a[8](null),ke(N,I),K=!1,Ce(se)}}}let bt=!1;function kt(a,e,t){let l,n=X,s=()=>(n(),n=we(i,C=>t(3,l=C)),i),d,r=X,o=()=>(r(),r=we(c,C=>t(4,d=C)),c);a.$$.on_destroy.push(()=>n()),a.$$.on_destroy.push(()=>r());let{containerSize:c}=e;o();let{metaData:i}=e;s();let u=null;const m=C=>{De(c,d=C.target.value,d)};function E(C){De(i,l[C.field].checked=!l[C.field].checked,l),i.set(l)}function b(C){const R=C.target.checked;De(i,l=Object.values(l).reduce((H,U)=>(U.checked=R,H[U.field]=U,H),{}),l)}function w(C){be[C?"unshift":"push"](()=>{u=C,t(2,u)})}function k(C,R){C[R].checked=this.checked}const g=(C,R)=>E(C);return a.$$set=C=>{"containerSize"in C&&o(t(0,c=C.containerSize)),"metaData"in C&&s(t(1,i=C.metaData))},[c,i,u,l,d,m,E,b,w,k,g]}class Et extends Se{constructor(e){super(),Ae(this,e,kt,gt,ye,{containerSize:0,metaData:1})}}function Re(a,e,t){const l=a.slice();return l[2]=e[t],l}function qe(a,e,t){const l=a.slice();return l[5]=e[t],l}function Ue(a,e,t){const l=a.slice();return l[2]=e[t],l}function je(a){let e,t=a[1].title.value+"",l;return{c(){e=p("h1"),l=z(t),this.h()},l(n){e=v(n,"H1",{class:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){_(e,"class","text-left")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].title.value+"")&&Y(l,t)},d(n){n&&h(e)}}}function Be(a){let e,t=a[1].description.value+"",l;return{c(){e=p("p"),l=z(t),this.h()},l(n){e=v(n,"P",{class:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){_(e,"class","text-large text-left")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].description.value+"")&&Y(l,t)},d(n){n&&h(e)}}}function Je(a){let e,t,l="Orgs",n,s,d=le(a[1].orgs.value),r=[];for(let o=0;o<d.length;o+=1)r[o]=We(Ue(a,d,o));return{c(){e=p("div"),t=p("p"),t.textContent=l,n=A(),s=p("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=v(o,"DIV",{class:!0,style:!0});var c=y(e);t=v(c,"P",{class:!0,style:!0,"data-svelte-h":!0}),ce(t)!=="svelte-kc9jel"&&(t.textContent=l),n=S(c),s=v(c,"DIV",{});var i=y(s);for(let u=0;u<r.length;u+=1)r[u].l(i);i.forEach(h),c.forEach(h),this.h()},h(){_(t,"class","text-bold"),de(t,"margin-bottom","0px"),_(e,"class","headers svelte-bf4y76"),de(e,"margin-top","10px")},m(o,c){F(o,e,c),f(e,t),f(e,n),f(e,s);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,null)},p(o,c){if(c&2){d=le(o[1].orgs.value);let i;for(i=0;i<d.length;i+=1){const u=Ue(o,d,i);r[i]?r[i].p(u,c):(r[i]=We(u),r[i].c(),r[i].m(s,null))}for(;i<r.length;i+=1)r[i].d(1);r.length=d.length}},d(o){o&&h(e),ke(r,o)}}}function We(a){let e,t=a[2]+"",l;return{c(){e=p("span"),l=z(t),this.h()},l(n){e=v(n,"SPAN",{class:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){_(e,"class","view-list svelte-bf4y76")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[2]+"")&&Y(l,t)},d(n){n&&h(e)}}}function Xe(a){let e,t,l,n,s=a[1].published_date.checked&&Ke(a),d=a[1].d3fend_version.checked&&Ye(a);return{c(){e=p("div"),s&&s.c(),t=A(),d&&d.c(),l=A(),n=p("hr"),this.h()},l(r){e=v(r,"DIV",{class:!0});var o=y(e);s&&s.l(o),t=S(o),d&&d.l(o),o.forEach(h),l=S(r),n=v(r,"HR",{}),this.h()},h(){_(e,"class","version-date svelte-bf4y76")},m(r,o){F(r,e,o),s&&s.m(e,null),f(e,t),d&&d.m(e,null),F(r,l,o),F(r,n,o)},p(r,o){r[1].published_date.checked?s?s.p(r,o):(s=Ke(r),s.c(),s.m(e,t)):s&&(s.d(1),s=null),r[1].d3fend_version.checked?d?d.p(r,o):(d=Ye(r),d.c(),d.m(e,null)):d&&(d.d(1),d=null)},d(r){r&&(h(e),h(l),h(n)),s&&s.d(),d&&d.d()}}}function Ke(a){let e,t=lt(a[1].published_date.value)+"",l;return{c(){e=p("p"),l=z(t)},l(n){e=v(n,"P",{});var s=y(e);l=O(s,t),s.forEach(h)},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=lt(n[1].published_date.value)+"")&&Y(l,t)},d(n){n&&h(e)}}}function Ye(a){let e,t=a[1].d3fend_version.value+"",l;return{c(){e=p("p"),l=z(t),this.h()},l(n){e=v(n,"P",{style:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){de(e,"margin-left","auto")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[1].d3fend_version.value+"")&&Y(l,t)},d(n){n&&h(e)}}}function Ze(a){let e,t,l,n,s,d,r=a[1].authors.value.length>1&&Ge(),o=le(a[1].authors.value),c=[];for(let i=0;i<o.length;i+=1)c[i]=Qe(qe(a,o,i));return{c(){e=p("div"),t=p("div"),l=z("Author"),r&&r.c(),n=A(),s=p("p"),d=p("em");for(let i=0;i<c.length;i+=1)c[i].c();this.h()},l(i){e=v(i,"DIV",{class:!0});var u=y(e);t=v(u,"DIV",{class:!0});var m=y(t);l=O(m,"Author"),r&&r.l(m),m.forEach(h),n=S(u),s=v(u,"P",{style:!0});var E=y(s);d=v(E,"EM",{class:!0});var b=y(d);for(let w=0;w<c.length;w+=1)c[w].l(b);b.forEach(h),E.forEach(h),u.forEach(h),this.h()},h(){_(t,"class","text-bold"),_(d,"class","font-large"),de(s,"margin-top","0px"),_(e,"class","headers svelte-bf4y76")},m(i,u){F(i,e,u),f(e,t),f(t,l),r&&r.m(t,null),f(e,n),f(e,s),f(s,d);for(let m=0;m<c.length;m+=1)c[m]&&c[m].m(d,null)},p(i,u){if(i[1].authors.value.length>1?r||(r=Ge(),r.c(),r.m(t,null)):r&&(r.d(1),r=null),u&2){o=le(i[1].authors.value);let m;for(m=0;m<o.length;m+=1){const E=qe(i,o,m);c[m]?c[m].p(E,u):(c[m]=Qe(E),c[m].c(),c[m].m(d,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=o.length}},d(i){i&&h(e),r&&r.d(),ke(c,i)}}}function Ge(a){let e;return{c(){e=z("s")},l(t){e=O(t,"s")},m(t,l){F(t,e,l)},d(t){t&&h(e)}}}function Qe(a){let e,t=a[5]+"",l;return{c(){e=p("span"),l=z(t),this.h()},l(n){e=v(n,"SPAN",{class:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){_(e,"class","view-list svelte-bf4y76")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&2&&t!==(t=n[5]+"")&&Y(l,t)},d(n){n&&h(e)}}}function xe(a){let e,t,l=a[1].references.view+"",n,s,d,r=le(a[1].references.value),o=[];for(let c=0;c<r.length;c+=1)o[c]=et(Re(a,r,c));return{c(){e=p("div"),t=p("b"),n=z(l),s=z(":"),d=A();for(let c=0;c<o.length;c+=1)o[c].c()},l(c){e=v(c,"DIV",{});var i=y(e);t=v(i,"B",{});var u=y(t);n=O(u,l),s=O(u,":"),u.forEach(h),d=S(i);for(let m=0;m<o.length;m+=1)o[m].l(i);i.forEach(h)},m(c,i){F(c,e,i),f(e,t),f(t,n),f(t,s),f(e,d);for(let u=0;u<o.length;u+=1)o[u]&&o[u].m(e,null)},p(c,i){if(i&2&&l!==(l=c[1].references.view+"")&&Y(n,l),i&2){r=le(c[1].references.value);let u;for(u=0;u<r.length;u+=1){const m=Re(c,r,u);o[u]?o[u].p(m,i):(o[u]=et(m),o[u].c(),o[u].m(e,null))}for(;u<o.length;u+=1)o[u].d(1);o.length=r.length}},d(c){c&&h(e),ke(o,c)}}}function et(a){let e,t,l=a[2]+"",n,s;return{c(){e=p("div"),t=p("a"),n=z(l),this.h()},l(d){e=v(d,"DIV",{class:!0});var r=y(e);t=v(r,"A",{href:!0});var o=y(t);n=O(o,l),o.forEach(h),r.forEach(h),this.h()},h(){_(t,"href",s=a[2]),_(e,"class","refs svelte-bf4y76")},m(d,r){F(d,e,r),f(e,t),f(t,n)},p(d,r){r&2&&l!==(l=d[2]+"")&&Y(n,l),r&2&&s!==(s=d[2])&&_(t,"href",s)},d(d){d&&h(e)}}}function tt(a){let e,t=Ve(a[1].article.value)+"",l;return{c(){e=new st(!1),l=Me(),this.h()},l(n){e=nt(n,!1),l=Me(),this.h()},h(){e.a=l},m(n,s){e.m(t,n,s),F(n,l,s)},p(n,s){s&2&&t!==(t=Ve(n[1].article.value)+"")&&e.p(t)},d(n){n&&(h(l),e.d())}}}function Dt(a){let e,t,l,n,s,d,r,o,c=a[1].title.checked&&je(a),i=a[1].description.checked&&Be(a),u=a[1].orgs.checked&&Je(a),m=(a[1].published_date.checked||a[1].d3fend_version.checked)&&Xe(a),E=a[1].authors.checked&&Ze(a),b=a[1].references.checked&&xe(a),w=a[1].article.checked&&tt(a);return{c(){e=p("section"),c&&c.c(),t=A(),i&&i.c(),l=A(),u&&u.c(),n=A(),m&&m.c(),s=A(),E&&E.c(),d=A(),b&&b.c(),r=A(),o=p("div"),w&&w.c(),this.h()},l(k){e=v(k,"SECTION",{class:!0});var g=y(e);c&&c.l(g),t=S(g),i&&i.l(g),l=S(g),u&&u.l(g),n=S(g),m&&m.l(g),s=S(g),E&&E.l(g),d=S(g),b&&b.l(g),r=S(g),o=v(g,"DIV",{});var C=y(o);w&&w.l(C),C.forEach(h),g.forEach(h),this.h()},h(){_(e,"class","content")},m(k,g){F(k,e,g),c&&c.m(e,null),f(e,t),i&&i.m(e,null),f(e,l),u&&u.m(e,null),f(e,n),m&&m.m(e,null),f(e,s),E&&E.m(e,null),f(e,d),b&&b.m(e,null),f(e,r),f(e,o),w&&w.m(o,null)},p(k,[g]){k[1].title.checked?c?c.p(k,g):(c=je(k),c.c(),c.m(e,t)):c&&(c.d(1),c=null),k[1].description.checked?i?i.p(k,g):(i=Be(k),i.c(),i.m(e,l)):i&&(i.d(1),i=null),k[1].orgs.checked?u?u.p(k,g):(u=Je(k),u.c(),u.m(e,n)):u&&(u.d(1),u=null),k[1].published_date.checked||k[1].d3fend_version.checked?m?m.p(k,g):(m=Xe(k),m.c(),m.m(e,s)):m&&(m.d(1),m=null),k[1].authors.checked?E?E.p(k,g):(E=Ze(k),E.c(),E.m(e,d)):E&&(E.d(1),E=null),k[1].references.checked?b?b.p(k,g):(b=xe(k),b.c(),b.m(e,r)):b&&(b.d(1),b=null),k[1].article.checked?w?w.p(k,g):(w=tt(k),w.c(),w.m(o,null)):w&&(w.d(1),w=null)},i:X,o:X,d(k){k&&h(e),c&&c.d(),i&&i.d(),u&&u.d(),m&&m.d(),E&&E.d(),b&&b.d(),w&&w.d()}}}function lt(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function wt(a,e,t){let l,n=X,s=()=>(n(),n=we(d,r=>t(1,l=r)),d);a.$$.on_destroy.push(()=>n());let{metaData:d}=e;return s(),a.$$set=r=>{"metaData"in r&&s(t(0,d=r.metaData))},[d,l]}class yt extends Se{constructor(e){super(),Ae(this,e,wt,Dt,ye,{metaData:0})}}const Ct=({size:a,domain:e},t="<embed-data>",{metadataComp:l,metadata:n})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(t,null,2)};

  const post_cad = (event) => {
    if (event.data?.call === "FromParent") {
      iframe.contentWindow.postMessage(
        {
          call: "toParent",
          value: user_data,
        },
        event.origin
      );
    }
  };
  <\/script>

  <svelte:window on:message={post_cad} />

  <main>
     <div id="metadata-render">
      ${l==null?void 0:l.innerHTML}
    </div>

    <iframe
      id="iframe"
      bind:this={iframe}
      src="${e}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${a}%);
      -moz-transform: scale(${a}%);
      -o-transform: scale(${a}%);
      -webkit-transform: scale(${a}%);
    }
    #metadata-render {
      margin: auto;
      padding: 2em;
    }
    .view-list:first-child {
      margin-left: 1em;
    }
    .view-list + .view-list::before {
      display: inline-block;
      white-space: pre;
      content: ", ";
    }
    .refs {
      margin-left: 2em;
    }
    .headers {
      text-align: left;
      width: 100%;
      margin-top: 10px;
    }
    .version-date {
      display: flex;
      margin-top: -5px;
      margin-bottom: -10px;
      font-weight: 300;
    }
  </style>
  `,St=({size:a,domain:e},t="<embed-data>",{metadataComp:l,metadata:n})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(t,null,2)};

      const post_cad = (event) => {
        const iframe = document.getElementById("iframe");

        if (event.data?.call === "FromParent") {
          iframe.contentWindow.postMessage(
            {
              call: "toParent",
              value: user_data,
            },
            event.origin
          );
        }
      };

      window.addEventListener("message", (event) => {

        if (event.origin !== "${e}") return;

        post_cad(event);
      });
    <\/script>

    <style>
      #iframe {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        transform: scale(${a}%);
        -moz-transform: scale(${a}%);
        -o-transform: scale(${a}%);
        -webkit-transform: scale(${a}%);
      }
      #metadata-render {
        margin: auto;
        padding: 2em;
      }
      .view-list:first-child {
        margin-left: 1em;
      }
      .view-list + .view-list::before {
        display: inline-block;
        white-space: pre;
        content: ", ";
      }
      .refs {
        margin-left: 2em;
      }
      .headers {
        text-align: left;
        width: 100%;
        margin-top: 10px;
      }
      .version-date {
        display: flex;
        margin-top: -5px;
        margin-bottom: -10px;
        font-weight: 300;
      }
    </style>
  </head>

  <main>
    <div id="metadata-render">
      ${l==null?void 0:l.innerHTML}
    </div>

    <iframe
      id="iframe"
      src="${e}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;function At(a){return{c:X,l:X,m:X,p:X,d:X}}function It(a){let e,t=a[25]+"",l;return{c(){e=p("pre"),l=z(t),this.h()},l(n){e=v(n,"PRE",{class:!0});var s=y(e);l=O(s,t),s.forEach(h),this.h()},h(){_(e,"class","svelte-tky2v8")},m(n,s){F(n,e,s),f(e,l)},p(n,s){s&16&&t!==(t=n[25]+"")&&Y(l,t)},d(n){n&&h(e)}}}function Tt(a){let e;return{c(){e=z("...loading")},l(t){e=O(t,"...loading")},m(t,l){F(t,e,l)},p:X,d(t){t&&h(e)}}}function Nt(a){let e,t,l,n,s='<h1 class="svelte-tky2v8"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-tky2v8">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6>',d,r,o,c,i,u,m,E,b,w,k,g,C,R,H,U,Z=a[3].text+"",Q,G,L,j,x,D,V,W,K,se,B,N,I,T,P,J,te,ee;e=new ut({props:{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."}}),o=new Et({props:{containerSize:a[5],metaData:a[6]}});function ue($){a[18]($)}let ae={inputClassName:"autocomplete-cursor-select",items:Object.values(a[7]),labelFieldName:"name",readonly:!0,onChange:a[17]};a[3]!==void 0&&(ae.selectedItem=a[3]),b=new ht({props:ae}),be.push(()=>dt(b,"selectedItem",ue));let q={ctx:a,current:null,token:null,hasCatch:!1,pending:Tt,then:It,catch:At,value:25};return Oe(C=a[4],q),N=new yt({props:{metaData:a[6]}}),{c(){ge(e.$$.fragment),t=A(),l=p("main"),n=p("section"),n.innerHTML=s,d=A(),r=p("code"),ge(o.$$.fragment),c=A(),i=p("code"),u=p("h3"),m=z(`Embed Code

      `),E=p("span"),ge(b.$$.fragment),k=A(),g=p("div"),q.block.c(),R=A(),H=p("div"),U=p("div"),Q=z(Z),G=A(),L=p("button"),j=z("Download"),D=A(),V=p("button"),W=z("Copy to Clipboard"),se=A(),B=p("div"),ge(N.$$.fragment),I=A(),T=p("iframe"),this.h()},l($){pe(e.$$.fragment,$),t=S($),l=v($,"MAIN",{style:!0,class:!0});var M=y(l);n=v(M,"SECTION",{id:!0,class:!0,"data-svelte-h":!0}),ce(n)!=="svelte-1mht16m"&&(n.innerHTML=s),d=S(M),r=v(M,"CODE",{id:!0,class:!0});var fe=y(r);pe(o.$$.fragment,fe),fe.forEach(h),c=S(M),i=v(M,"CODE",{id:!0,class:!0});var ie=y(i);u=v(ie,"H3",{class:!0});var Ee=y(u);m=O(Ee,`Embed Code

      `),E=v(Ee,"SPAN",{id:!0,class:!0});var Ie=y(E);pe(b.$$.fragment,Ie),Ie.forEach(h),Ee.forEach(h),k=S(ie),g=v(ie,"DIV",{id:!0,class:!0});var Te=y(g);q.block.l(Te),Te.forEach(h),R=S(ie),H=v(ie,"DIV",{id:!0,class:!0});var re=y(H);U=v(re,"DIV",{});var Ne=y(U);Q=O(Ne,Z),Ne.forEach(h),G=S(re),L=v(re,"BUTTON",{class:!0});var Pe=y(L);j=O(Pe,"Download"),Pe.forEach(h),D=S(re),V=v(re,"BUTTON",{class:!0});var $e=y(V);W=O($e,"Copy to Clipboard"),$e.forEach(h),re.forEach(h),ie.forEach(h),se=S(M),B=v(M,"DIV",{id:!0,class:!0});var Fe=y(B);pe(N.$$.fragment,Fe),Fe.forEach(h),I=S(M),T=v(M,"IFRAME",{id:!0,src:!0,title:!0,class:!0}),y(T).forEach(h),M.forEach(h),this.h()},h(){_(n,"id","header"),_(n,"class","svelte-tky2v8"),_(r,"id","embed-settings"),_(r,"class","svelte-tky2v8"),_(E,"id","download-options"),_(E,"class","svelte-tky2v8"),_(u,"class","svelte-tky2v8"),_(g,"id","code-container"),_(g,"class","svelte-tky2v8"),_(L,"class","download-code svelte-tky2v8"),L.disabled=x=a[3].name==="Config Settings",_(V,"class","download-code svelte-tky2v8"),V.disabled=K=a[3].name==="Config Settings",_(H,"id","download-container"),_(H,"class","svelte-tky2v8"),_(i,"id","embed-code"),_(i,"class","config-container svelte-tky2v8"),_(B,"id","metadata-render"),_(B,"class","svelte-tky2v8"),_(T,"id","cad-iframe"),rt(T.src,P="/cad-frame/")||_(T,"src",P),_(T,"title","D3FEND Embedded CAD"),_(T,"class","svelte-tky2v8"),de(l,"--container-size",a[1]+"%"),_(l,"class","svelte-tky2v8")},m($,M){ve(e,$,M),F($,t,M),F($,l,M),f(l,n),f(l,d),f(l,r),ve(o,r,null),f(l,c),f(l,i),f(i,u),f(u,m),f(u,E),ve(b,E,null),f(i,k),f(i,g),q.block.m(g,q.anchor=null),q.mount=()=>g,q.anchor=null,f(i,R),f(i,H),f(H,U),f(U,Q),f(H,G),f(H,L),f(L,j),f(H,D),f(H,V),f(V,W),f(l,se),f(l,B),ve(N,B,null),a[21](B),f(l,I),f(l,T),a[22](T),J=!0,te||(ee=[ne(window,"message",a[8]),ne(L,"click",a[19]),ne(V,"click",a[20])],te=!0)},p($,[M]){a=$;const fe={};!w&&M&8&&(w=!0,fe.selectedItem=a[3],it(()=>w=!1)),b.$set(fe),q.ctx=a,M&16&&C!==(C=a[4])&&Oe(C,q)||ct(q,a,M),(!J||M&8)&&Z!==(Z=a[3].text+"")&&Y(Q,Z),(!J||M&8&&x!==(x=a[3].name==="Config Settings"))&&(L.disabled=x),(!J||M&8&&K!==(K=a[3].name==="Config Settings"))&&(V.disabled=K),(!J||M&2)&&de(l,"--container-size",a[1]+"%")},i($){J||(_e(e.$$.fragment,$),_e(o.$$.fragment,$),_e(b.$$.fragment,$),_e(N.$$.fragment,$),J=!0)},o($){me(e.$$.fragment,$),me(o.$$.fragment,$),me(b.$$.fragment,$),me(N.$$.fragment,$),J=!1},d($){$&&(h(t),h(l)),he(e,$),he(o),he(b),q.block.d(),q.token=null,q=null,he(N),a[21](null),a[22](null),te=!1,Ce(ee)}}}function Pt(a,e,t){let l,n,s,d,r,o,c,i;oe(a,_t,D=>t(13,s=D)),oe(a,vt,D=>t(14,d=D)),oe(a,ft,D=>t(16,c=D)),oe(a,pt,D=>t(23,i=D));let u=null,m;const E=ze(90);oe(a,E,D=>t(1,r=D));const b=ze({title:{checked:!1,field:"title",view:"Title",value:i.title},description:{checked:!1,field:"description",view:"Description",value:i.description},authors:{checked:!1,field:"authors",view:"Authors",value:i.authors,tag:"div"},orgs:{checked:!1,field:"orgs",view:"Organizations",value:i.orgs},article:{checked:!1,field:"article",view:"Article",value:i.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:i.d3fend_version},references:{checked:!1,field:"references",view:"References",value:i.references},published_date:{checked:!1,field:"published_date",view:"Date",value:i.published_date}});oe(a,b,D=>t(15,o=D));const w={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:St},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Ct}};let k=w["index.html"];const g=async(D,V,W)=>(await ot(),k.func(D,V,W)),C=D=>{var V;((V=D.data)==null?void 0:V.call)==="FromParent"&&u.contentWindow.postMessage({call:"toParent",value:{nodes:d,edges:s,meta:{settings:{}}}},D.origin)},R=D=>{D&&D.text&&t(3,k=D)},H=async(D,{func:V,download:W})=>{const K=V({size:r,domain:l},{nodes:d,edges:s});mt(K,W)},U=async(D,{func:V})=>{const W=V({size:r,domain:l},{nodes:d,edges:s});try{await navigator.clipboard.writeText(W)}catch(K){console.error("Failed to copy: ",K)}},Z=D=>R(D);function Q(D){k=D,t(3,k)}const G=D=>H(D,k),L=D=>U(D,k);function j(D){be[D?"unshift":"push"](()=>{m=D,t(0,m)})}function x(D){be[D?"unshift":"push"](()=>{u=D,t(2,u)})}return a.$$.update=()=>{a.$$.dirty&65536&&t(12,l=c.url.origin),a.$$.dirty&61443&&t(4,n=g({size:r,domain:l},{nodes:d,edges:s},{metadataComp:m,$metaData:o}))},[m,r,u,k,n,E,b,w,C,R,H,U,l,s,d,o,c,Z,Q,G,L,j,x]}class Jt extends Se{constructor(e){super(),Ae(this,e,Pt,Nt,ye,{})}}export{Jt as component};
