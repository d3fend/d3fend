import"../chunks/Bzak7iHL.js";import{p as M,g as X,s as b,f as I,d as v,a as i,r as f,b as S,aQ as F,c as k,aP as D,a1 as L,z as R,A as c,br as O,t as K,e as B,h as Q}from"../chunks/M0Oc_jcV.js";import{s as U}from"../chunks/BudljjWB.js";import{a as V}from"../chunks/Ljv_TvET.js";import{i as A}from"../chunks/CF3N4BZN.js";import{d as j,e as z,a as H}from"../chunks/DLG85UB6.js";import{b as N}from"../chunks/BumAO1GI.js";import{G as T}from"../chunks/EeV0sUoA.js";import{a as W}from"../chunks/3N4rtv_S.js";import{S as Y,B as J,a as Z,M as $}from"../chunks/knnE51Ks.js";import{C as tt}from"../chunks/DsVgb27G.js";var et=k("<!> <!> <!>",1),at=k("DIAGRAM <div><!></div>",1);function rt(G,p){M(p,!0);let _=new T(p.graph);console.log(_);let g=[],u=0,m=0;p.graph.graph.forEach(a=>{u=u+0,m=m+50;let e={id:a["@id"]};e.data={label:e.id},e.position={x:u,y:m},e.type="default",e.class="tactic",g.push(e)});let w=[];p.graph.graph.forEach(a=>{let e="d3f:contains";e in a&&a[e].forEach(l=>{let t={};t.id=a["@id"]+l["@id"],t.source=a["@id"],t.target=l["@id"],t.label=e,t.type="default",w.push(t)})});const q=F(g),x=F(w),y=[25,25];X();var h=at(),n=b(I(h));W(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Y(E,{get nodes(){return q},get edges(){return x},get snapGrid(){return y},fitView:!0,$$events:{nodeclick:a=>console.log("on node click",a.detail.node)},children:(a,e)=>{var l=et(),t=I(l);tt(t,{});var o=b(t,2);J(o,{get variant(){return Z.Dots}});var r=b(o,2);$(r,{}),i(a,l)},$$slots:{default:!0}}),f(n),i(G,h),S()}var ot=k('<p class="error svelte-18w6sgd"> </p>'),st=k("<p>Loading...</p>"),it=k('<div class="flex"><div><div><textarea class="svelte-18w6sgd"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(G,p){M(p,!0);let _=D(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
  PREFIX owl: <http://www.w3.org/2002/07/owl#>
  PREFIX d3f: <http://d3fend.mitre.org/ontologies/d3fend.owl#>
  PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
  
  CONSTRUCT {
    ?s d3f:contains ?o .
  }
  WHERE {
    ?s rdfs:subClassOf* d3f:DigitalArtifact .
    ?s d3f:contains ?o .
    FILTER (!isBlank(?o))
  }
  ORDER BY ?p
  LIMIT 50
  `),g=D(L(m())),u=D(!0);async function m(){try{R(u,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new T(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,m(),!0)}function q(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var x=it(),y=v(x),h=v(y),n=v(h);O(n),f(h);var E=b(h,2),a=v(E);f(E),f(y);var e=b(y,2),l=v(e);V(l,()=>c(g),t=>{var o=B(),r=I(o);{var d=s=>{var P=Q("hit go!");i(s,P)},C=s=>{var P=st();i(s,P)};A(r,s=>{c(u)?s(d):s(C,-1)})}i(t,o)},(t,o)=>{var r=B(),d=I(r);{var C=s=>{rt(s,{get graph(){return c(o)}})};A(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=ot(),d=v(r);f(r),K(()=>U(d,`Error: ${c(o)??""}`)),i(t,r)}),f(e),f(x),z("keypress",n,q),N(n,()=>c(_),t=>R(_,t)),H("click",a,w),i(G,x),S()}j(["click"]);export{_t as component};
