import{S as x,i as ee,s as te,w as j,F as J,y as v,a as b,k as w,z as I,c as D,l as k,m as P,h as y,n as l,A as E,b as Q,H as d,I as U,g as F,d as q,B as A}from"../chunks/index.38e6a1b1.js";import{g as W}from"../chunks/navigation.0a57db0a.js";import{D as ne}from"../chunks/D3FMatrix.97e8c16b.js";import{T as ae}from"../chunks/Title.76b3b16c.js";import{S as X}from"../chunks/SimpleAutocomplete.2435e796.js";import{H as se}from"../chunks/Header.16622278.js";import{L as oe}from"../chunks/Lookup-DAO.b246baa0.js";import{b as M,c as ie}from"../chunks/lib.1620f930.js";function re(a){let i,g,n,f,N,S,$,s,m,r,C,T,u,p,z,c,e,B,K,h,H;i=new ae({props:{title:"D3FEND Matrix",og_title:"MITRE D3FEND Knowledge Graph",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND is a knowledge base of cybersecurity countermeasure techniques. In the simplest sense, it is a catalog of defensive cybersecurity techniques and their relationships to offensive/adversary techniques. The primary goal of the initial D3FEND release is to help standardize the vocabulary used to describe defensive cybersecurity technology functionality."}}),f=new se({});function Y(t){a[10](t)}let R={items:a[2],labelFunction:a[8],keywordsFunction:a[9],placeholder:"ATT&CK Lookup",onChange:a[6]};a[0]!==void 0&&(R.selectedItem=a[0]),r=new X({props:R}),j.push(()=>J(r,"selectedItem",Y)),p=new oe({props:{da_graph:a[4]}});function Z(t){a[13](t)}let V={items:a[3],labelFunction:a[11],keywordsFunction:a[12],placeholder:"D3FEND Lookup",onChange:a[5]};return a[1]!==void 0&&(V.selectedItem=a[1]),e=new X({props:V}),j.push(()=>J(e,"selectedItem",Z)),h=new ne({props:{theme:"main"}}),{c(){v(i.$$.fragment),g=b(),n=w("div"),v(f.$$.fragment),N=b(),S=w("br"),$=b(),s=w("div"),m=w("span"),v(r.$$.fragment),T=b(),u=w("span"),v(p.$$.fragment),z=b(),c=w("span"),v(e.$$.fragment),K=b(),v(h.$$.fragment),this.h()},l(t){I(i.$$.fragment,t),g=D(t),n=k(t,"DIV",{id:!0,class:!0});var o=P(n);I(f.$$.fragment,o),N=D(o),S=k(o,"BR",{}),$=D(o),s=k(o,"DIV",{id:!0,class:!0});var _=P(s);m=k(_,"SPAN",{id:!0,class:!0});var L=P(m);I(r.$$.fragment,L),L.forEach(y),T=D(_),u=k(_,"SPAN",{id:!0,class:!0});var G=P(u);I(p.$$.fragment,G),G.forEach(y),z=D(_),c=k(_,"SPAN",{id:!0,class:!0});var O=P(c);I(e.$$.fragment,O),O.forEach(y),_.forEach(y),K=D(o),I(h.$$.fragment,o),o.forEach(y),this.h()},h(){l(m,"id","offensive"),l(m,"class","left"),l(u,"id","dao"),l(u,"class","middle svelte-axm6z3"),l(c,"id","defensive"),l(c,"class","right"),l(s,"id","wrapper"),l(s,"class","flex svelte-axm6z3"),l(n,"id","mwrap"),l(n,"class","svelte-axm6z3")},m(t,o){E(i,t,o),Q(t,g,o),Q(t,n,o),E(f,n,null),d(n,N),d(n,S),d(n,$),d(n,s),d(s,m),E(r,m,null),d(s,T),d(s,u),E(p,u,null),d(s,z),d(s,c),E(e,c,null),d(n,K),E(h,n,null),H=!0},p(t,[o]){const _={};!C&&o&1&&(C=!0,_.selectedItem=t[0],U(()=>C=!1)),r.$set(_);const L={};!B&&o&2&&(B=!0,L.selectedItem=t[1],U(()=>B=!1)),e.$set(L)},i(t){H||(F(i.$$.fragment,t),F(f.$$.fragment,t),F(r.$$.fragment,t),F(p.$$.fragment,t),F(e.$$.fragment,t),F(h.$$.fragment,t),H=!0)},o(t){q(i.$$.fragment,t),q(f.$$.fragment,t),q(r.$$.fragment,t),q(p.$$.fragment,t),q(e.$$.fragment,t),q(h.$$.fragment,t),H=!1},d(t){A(i,t),t&&y(g),t&&y(n),A(f),A(r),A(p),A(e),A(h)}}}function le(a,i,g){let{data:n}=i,f=n.a_remote_autocomplete_list["@graph"],N=n.d_remote_autocomplete_list["@graph"],S=n.dao_remote_autocomplete_list,$,s;function m(e){typeof window<"u"&&typeof e<"u"&&W("/technique/"+e["@id"])}function r(e){typeof window<"u"&&typeof e<"u"&&W("/offensive-technique/attack/"+e["d3f:attack-id"])}const C=e=>{if(e!=null)return e["d3f:attack-id"]+" - "+M(e)},T=e=>e["d3f:attack-id"]+" - "+M(e);function u(e){$=e,g(0,$)}const p=e=>{if(e!=null)return e["d3f:d3fend-id"]+" - "+M(e)},z=e=>e["d3f:d3fend-id"]+" - "+M(e)+ie(e);function c(e){s=e,g(1,s)}return a.$$set=e=>{"data"in e&&g(7,n=e.data)},[$,s,f,N,S,m,r,n,C,T,u,p,z,c]}class $e extends x{constructor(i){super(),ee(this,i,le,re,te,{data:7})}}export{$e as default};