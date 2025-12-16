import"../chunks/CWj6FrbW.js";import{p as S,g as A,f as k,s as y,a as G,d as v,b as i,r as f,c as T,aG as F,aH as L,a3 as R,a5 as c,bb as O,t as H,e as P,h as K}from"../chunks/dMGUy5QM.js";import{s as U}from"../chunks/Ceao5OH1.js";import{a as V}from"../chunks/CLe25FU5.js";import{i as B}from"../chunks/DEe5j1qu.js";import{d as j,e as N}from"../chunks/BXLGAO8c.js";import{b as Q}from"../chunks/BslLmUHW.js";import{G as X}from"../chunks/V_wAXu9h.js";import{a as W}from"../chunks/DipC33mm.js";import{w as M}from"../chunks/BBf696Yb.js";import{S as Y,B as z,a as J,M as Z}from"../chunks/B7Hsas_h.js";import{C as $}from"../chunks/D9gpRY6A.js";var tt=k("<!> <!> <!>",1),at=k("DIAGRAM <div><!></div>",1);function et(I,p){S(p,!0);let _=new X(p.graph);console.log(_);let g=[],m=0,u=0;p.graph.graph.forEach(e=>{m=m+0,u=u+50;let a={id:e["@id"]};a.data={label:a.id},a.position={x:m,y:u},a.type="default",a.class="tactic",g.push(a)});let w=[];p.graph.graph.forEach(e=>{let a="d3f:contains";a in e&&e[a].forEach(l=>{let t={};t.id=e["@id"]+l["@id"],t.source=e["@id"],t.target=l["@id"],t.label=a,t.type="default",w.push(t)})});const q=M(g),b=M(w),x=[25,25];A();var h=at(),n=y(G(h));W(n,"",{},{height:"1000px",width:"1000px"});var E=v(n);Y(E,{get nodes(){return q},get edges(){return b},get snapGrid(){return x},fitView:!0,$$events:{nodeclick:e=>console.log("on node click",e.detail.node)},children:(e,a)=>{var l=tt(),t=G(l);$(t,{});var o=y(t,2);z(o,{get variant(){return J.Dots}});var r=y(o,2);Z(r,{}),i(e,l)},$$slots:{default:!0}}),f(n),i(I,h),T()}var rt=k('<p class="error svelte-521b0l"> </p>'),ot=k("<p>Loading...</p>"),st=k('<div class="flex"><div><div><textarea class="svelte-521b0l"></textarea></div> <div><button>Run Query</button></div></div> <div><!></div></div>');function _t(I,p){S(p,!0);let _=F(`PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
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
  `),g=F(L(u())),m=F(!0);async function u(){try{R(m,!1),console.log("making request");let t="/api/sparql?query="+encodeURIComponent(c(_));console.log(t);const r=await(await fetch(t)).json();let d=new X(r);R(g,d,!0)}catch(t){t.message}}function w(){R(g,u(),!0)}function q(t){t.ctrlKey==!0&&t.keyCode==13&&w()}var b=st(),x=v(b),h=v(x),n=v(h);O(n),f(h);var E=y(h,2),e=v(E);e.__click=w,f(E),f(x);var a=y(x,2),l=v(a);V(l,()=>c(g),t=>{var o=P(),r=G(o);{var d=s=>{var D=K("hit go!");i(s,D)},C=s=>{var D=ot();i(s,D)};B(r,s=>{c(m)?s(d):s(C,!1)})}i(t,o)},(t,o)=>{var r=P(),d=G(r);{var C=s=>{et(s,{get graph(){return c(o)}})};B(d,s=>{c(o)&&s(C)})}i(t,r)},(t,o)=>{var r=rt(),d=v(r);f(r),H(()=>U(d,`Error: ${c(o)??""}`)),i(t,r)}),f(a),f(b),N("keypress",n,q),Q(n,()=>c(_),t=>R(_,t)),i(I,b),T()}j(["click"]);export{_t as component};
