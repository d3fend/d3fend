import"./Bzak7iHL.js";import{p as E,e as F,f as y,a as A,b as H,A as l,b1 as m,c as I,r as J,s as K,t as M,d as P}from"./C5fqCc9O.js";import{s as G}from"./B0SftDD_.js";import{i as Q}from"./B7bOfw0f.js";import{p as a}from"./BAIJt-Fa.js";import{r as N}from"./DtzFuBVJ.js";import{_ as S}from"./DmYbJq7Z.js";import{G as U,g as _,T as V}from"./EKIAAFjW.js";import{c as b}from"./DdW7pLuw.js";var W=P("<code> </code> ",1);function no(R,o){E(o,!0);let q=a(o,"empty_message",3,"has no direct neighbors in this release.");a(o,"outbound_color",19,()=>b["artifact-node"]);let c=a(o,"inbound_color",19,()=>b["artifact-node"]),h=a(o,"root_color",19,()=>b["artifact-node"]),s=a(o,"inbound_class",3,"inbound_node"),k=a(o,"link_function",3,i=>N(`/dao/artifact/${i["@id"]}`)),v=a(o,"inbound_link_function",19,k),u=a(o,"root_link_function",3,i=>N(`/dao/artifact/${i}`)),C=a(o,"outbound_link_function",19,k),g=m(()=>new U(o.neighbors,{index:!0})),O=new V,w=m(()=>_(o.root_node)),T=m(()=>L(l(g),O));function D(i,r,n,f,e,t){return i.i(r)&&n["@id"]!=r&&f["@id"]!=r&&t.edge_is_unique(r,e["@id"],f["@id"])}function L(i,r){let n=`graph LR
`;const f=i.graph.filter(e=>e["@id"]!=o.root_node);r.reset();for(const e of f)for(const t of(e==null?void 0:e["d3f:outbound"])||[])for(const d of e[t["@id"]])r.edge_is_unique(e["@id"],t["@id"],d["@id"])&&(n+=`${e["@id"]}["${e["rdfs:label"][0]}"] --> | ${_(t["@id"])} | ${d["@id"]}["${i.i(d["@id"])["rdfs:label"][0]}"];
`),n+=`
class ${e["@id"]} ${s()};
style ${e["@id"]} fill:${c()};
`,D(i,o.root_node,e,d,t,r)?n+=`${o.root_node}["${i.i(o.root_node)["rdfs:label"][0]}"] -.-> | ${_(t["@id"])} | ${d["@id"]}["${i.i(d["@id"])["rdfs:label"][0]}"];
class ${d["@id"]} ${s()};
style ${d["@id"]} fill:${c()};
`:n+=`class ${d["@id"]} RootArtifactNode;
style ${d["@id"]} fill:${h()};
`,n+=`click ${e["@id"]} href "${v()(e)}";
click ${d["@id"]} href "${u()(d["@id"])}";
`;if(i.i(o.root_node)&&i.i(o.root_node)["d3f:outbound"])for(const e of i.i(o.root_node)["d3f:outbound"])for(const t of i.i(o.root_node)[e["@id"]])r.edge_is_unique(o.root_node,e["@id"],t["@id"])&&(n+=`
${o.root_node}["${i.i(o.root_node)["rdfs:label"][0]}"] --> | ${_(e["@id"])} | ${t["@id"]}["${i.graph[i.index[t["@id"]]]["rdfs:label"][0]}"];
`),n+=`
          class ${o.root_node} RootArtifactNode; 
          class ${t["@id"]} ArtifactNode; 
          click ${o.root_node} href "${u()(o.root_node)}";
          click ${t["@id"]} href "${C()(t)}";
`;if(i.i(o.root_node)&&i.i(o.root_node)["rdfs:subClassOf"])for(const e of i.i(o.root_node)["rdfs:subClassOf"])for(const t of i.graph.filter(d=>d["@id"]==e["@id"]))n+=`${o.root_node}["${i.i(o.root_node)["rdfs:label"][0]}"] --> | subClassOf | ${t["@id"]}["${t["rdfs:label"][0]}"];
          
          class ${t["@id"]} ${s()};
          style ${t["@id"]} fill:${c()};

          class ${o.root_node} RootArtifactNode;
          style ${o.root_node} fill:${h()};

          click ${t["@id"]} href "${v()(t)}";
          click ${o.root_node} href "${u()(o.root_node)}";
`;return n}var x=F(),j=y(x);{var z=i=>{S(i,{get mermaid_text(){return l(T)}})},B=i=>{var r=W(),n=y(r),f=I(n,!0);J(n);var e=K(n);M(()=>{G(f,l(w)),G(e,` ${q()??""}`)}),A(i,r)};Q(j,i=>{l(g).graph.length>0?i(z):i(B,-1)})}A(R,x),H()}export{no as G};
