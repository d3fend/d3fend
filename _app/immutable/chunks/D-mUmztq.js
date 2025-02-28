import{p as z,d as O}from"./DUUVgi0G.js";import{s as C}from"./DEDCq9jO.js";import{i as U,a as F,l as M,b as V,g as A,c as q}from"./mSRT1lNV.js";import{l as y,X as B,_ as J,$ as N,a0 as L,a1 as P,j as K}from"./kBFUTRoh.js";import{E as Q}from"./CvxyXwL_.js";import{l as Z}from"./ByvImlMB.js";const X=(t,e,a)=>{const{parentById:r}=a,d=new Set;let l=t;for(;l;){if(d.add(l),l===e)return l;l=r[l]}for(l=e;l;){if(d.has(l))return l;l=r[l]}return"root"},D=new Q;let m={};const Y={};let S={};const j=async function(t,e,a,r,d,l,n){const p=a.select(`[id="${e}"]`).insert("g").attr("class","nodes"),c=Object.keys(t);return await Promise.all(c.map(async function(u){const i=t[u];let $="default";i.classes.length>0&&($=i.classes.join(" ")),$=$+" flowchart-label";const w=N(i.styles);let o=i.text!==void 0?i.text:i.id;const f={width:0,height:0},b=[{id:i.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:i.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:i.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:i.id+"-north",layoutOptions:{"port.side":"NORTH"}}];let k=0,h="",g={};switch(i.type){case"round":k=5,h="rect";break;case"square":h="rect";break;case"diamond":h="question",g={portConstraints:"FIXED_SIDE"};break;case"hexagon":h="hexagon";break;case"odd":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"odd_right":h="rect_left_inv_arrow";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"group":h="rect";break;case"doublecircle":h="doublecircle";break;default:h="rect"}const E={labelStyle:w.labelStyle,shape:h,labelText:o,labelType:i.labelType,rx:k,ry:k,class:$,style:w.style,id:i.id,link:i.link,linkTarget:i.linkTarget,tooltip:d.db.getTooltip(i.id)||"",domId:d.db.lookUpDomId(i.id),haveCallback:i.haveCallback,width:i.type==="group"?500:void 0,dir:i.dir,type:i.type,props:i.props,padding:B().flowchart.padding};let T,_;if(E.type!=="group")_=await F(p,E,i.dir),T=_.node().getBBox();else{r.createElementNS("http://www.w3.org/2000/svg","text");const{shapeSvg:v,bbox:x}=await M(p,E,void 0,!0);f.width=x.width,f.wrappingWidth=B().flowchart.wrappingWidth,f.height=x.height,f.labelNode=v.node(),E.labelData=f}const I={id:i.id,ports:i.type==="diamond"?b:[],layoutOptions:g,labelText:o,labelData:f,domId:d.db.lookUpDomId(i.id),width:T==null?void 0:T.width,height:T==null?void 0:T.height,type:i.type,el:_,parent:l.parentById[i.id]};S[E.id]=I})),n},R=(t,e,a)=>{const r={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return r.TD=r.TB,r[a][e][t]},G=(t,e,a)=>{if(y.info("getNextPort",{node:t,edgeDirection:e,graphDirection:a}),!m[t])switch(a){case"TB":case"TD":m[t]={inPosition:"north",outPosition:"south"};break;case"BT":m[t]={inPosition:"south",outPosition:"north"};break;case"RL":m[t]={inPosition:"east",outPosition:"west"};break;case"LR":m[t]={inPosition:"west",outPosition:"east"};break}const r=e==="in"?m[t].inPosition:m[t].outPosition;return e==="in"?m[t].inPosition=R(m[t].inPosition,e,a):m[t].outPosition=R(m[t].outPosition,e,a),r},tt=(t,e)=>{let a=t.start,r=t.end;const d=a,l=r,n=S[a],s=S[r];return!n||!s?{source:a,target:r}:(n.type==="diamond"&&(a=`${a}-${G(a,"out",e)}`),s.type==="diamond"&&(r=`${r}-${G(r,"in",e)}`),{source:a,target:r,sourceId:d,targetId:l})},et=function(t,e,a,r){y.info("abc78 edges = ",t);const d=r.insert("g").attr("class","edgeLabels");let l={},n=e.db.getDirection(),s,p;if(t.defaultStyle!==void 0){const c=N(t.defaultStyle);s=c.style,p=c.labelStyle}return t.forEach(function(c){const u="L-"+c.start+"-"+c.end;l[u]===void 0?(l[u]=0,y.info("abc78 new entry",u,l[u])):(l[u]++,y.info("abc78 new entry",u,l[u]));let i=u+"-"+l[u];y.info("abc78 new link id to be used is",u,i,l[u]);const $="LS-"+c.start,w="LE-"+c.end,o={style:"",labelStyle:""};switch(o.minlen=c.length||1,c.type==="arrow_open"?o.arrowhead="none":o.arrowhead="normal",o.arrowTypeStart="arrow_open",o.arrowTypeEnd="arrow_open",c.type){case"double_arrow_cross":o.arrowTypeStart="arrow_cross";case"arrow_cross":o.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":o.arrowTypeStart="arrow_point";case"arrow_point":o.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":o.arrowTypeStart="arrow_circle";case"arrow_circle":o.arrowTypeEnd="arrow_circle";break}let f="",b="";switch(c.stroke){case"normal":f="fill:none;",s!==void 0&&(f=s),p!==void 0&&(b=p),o.thickness="normal",o.pattern="solid";break;case"dotted":o.thickness="normal",o.pattern="dotted",o.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":o.thickness="thick",o.pattern="solid",o.style="stroke-width: 3.5px;fill:none;";break}if(c.style!==void 0){const _=N(c.style);f=_.style,b=_.labelStyle}o.style=o.style+=f,o.labelStyle=o.labelStyle+=b,c.interpolate!==void 0?o.curve=L(c.interpolate,P):t.defaultInterpolate!==void 0?o.curve=L(t.defaultInterpolate,P):o.curve=L(Y.curve,P),c.text===void 0?c.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c"),o.labelType=c.labelType,o.label=c.text.replace(K.lineBreakRegex,`
`),c.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),o.labelStyle=o.labelStyle.replace("color:","fill:"),o.id=i,o.classes="flowchart-link "+$+" "+w;const k=V(d,o),{source:h,target:g,sourceId:E,targetId:T}=tt(c,n);y.debug("abc78 source and target",h,g),a.edges.push({id:"e"+c.start+c.end,sources:[h],targets:[g],sourceId:E,targetId:T,labelEl:k,labels:[{width:o.width,height:o.height,orgWidth:o.width,orgHeight:o.height,text:o.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:o})}),a},rt=function(t,e,a,r,d){let l="";r&&(l=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,l=l.replace(/\(/g,"\\("),l=l.replace(/\)/g,"\\)")),q(t,e,l,d,a)},ot=function(t,e){return y.info("Extracting classes"),e.db.getClasses()},at=function(t){const e={parentById:{},childrenById:{}},a=t.getSubGraphs();return y.info("Subgraphs - ",a),a.forEach(function(r){r.nodes.forEach(function(d){e.parentById[d]=r.id,e.childrenById[r.id]===void 0&&(e.childrenById[r.id]=[]),e.childrenById[r.id].push(d)})}),a.forEach(function(r){r.id,e.parentById[r.id]!==void 0&&e.parentById[r.id]}),e},st=function(t,e,a){const r=X(t,e,a);if(r===void 0||r==="root")return{x:0,y:0};const d=S[r].offset;return{x:d.posX,y:d.posY}},lt=function(t,e,a,r,d,l){const n=st(e.sourceId,e.targetId,d),s=e.sections[0].startPoint,p=e.sections[0].endPoint,u=(e.sections[0].bendPoints?e.sections[0].bendPoints:[]).map(g=>[g.x+n.x,g.y+n.y]),i=[[s.x+n.x,s.y+n.y],...u,[p.x+n.x,p.y+n.y]],{x:$,y:w}=A(e.edgeData),o=Z().x($).y(w).curve(P),f=t.insert("path").attr("d",o(i)).attr("class","path "+a.classes).attr("fill","none"),b=t.insert("g").attr("class","edgeLabel"),k=C(b.node().appendChild(e.labelEl)),h=k.node().firstChild.getBoundingClientRect();k.attr("width",h.width),k.attr("height",h.height),b.attr("transform",`translate(${e.labels[0].x+n.x}, ${e.labels[0].y+n.y})`),rt(f,a,r.type,r.arrowMarkerAbsolute,l)},H=(t,e)=>{t.forEach(a=>{a.children||(a.children=[]);const r=e.childrenById[a.id];r&&r.forEach(d=>{a.children.push(S[d])}),H(a.children,e)})},it=async function(t,e,a,r){var d;r.db.clear(),S={},m={},r.db.setGen("gen-2"),r.parser.parse(t);const l=C("body").append("div").attr("style","height:400px").attr("id","cy");let n={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(y.info("Drawing flowchart using v3 renderer",D),r.db.getDirection()){case"BT":n.layoutOptions["elk.direction"]="UP";break;case"TB":n.layoutOptions["elk.direction"]="DOWN";break;case"LR":n.layoutOptions["elk.direction"]="RIGHT";break;case"RL":n.layoutOptions["elk.direction"]="LEFT";break}const{securityLevel:p,flowchart:c}=B();let u;p==="sandbox"&&(u=C("#i"+e));const i=p==="sandbox"?C(u.nodes()[0].contentDocument.body):C("body"),$=p==="sandbox"?u.nodes()[0].contentDocument:document,w=i.select(`[id="${e}"]`);U(w,["point","circle","cross"],r.type,e);const f=r.db.getVertices();let b;const k=r.db.getSubGraphs();y.info("Subgraphs - ",k);for(let v=k.length-1;v>=0;v--)b=k[v],r.db.addVertex(b.id,{text:b.title,type:b.labelType},"group",void 0,b.classes,b.dir);const h=w.insert("g").attr("class","subgraphs"),g=at(r.db);n=await j(f,e,i,$,r,g,n);const E=w.insert("g").attr("class","edges edgePath"),T=r.db.getEdges();n=et(T,r,n,w),Object.keys(S).forEach(v=>{const x=S[v];x.parent||n.children.push(x),g.childrenById[v]!==void 0&&(x.labels=[{text:x.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:x.labelData.width,height:x.labelData.height}],delete x.x,delete x.y,delete x.width,delete x.height)}),H(n.children,g),y.info("after layout",JSON.stringify(n,null,2));const I=await D.layout(n);W(0,0,I.children,w,h,r,0),y.info("after layout",I),(d=I.edges)==null||d.map(v=>{lt(E,v,v.edgeData,r,g,e)}),J({},w,c.diagramPadding,c.useMaxWidth),l.remove()},W=(t,e,a,r,d,l,n)=>{a.forEach(function(s){if(s)if(S[s.id].offset={posX:s.x+t,posY:s.y+e,x:t,y:e,depth:n,width:s.width,height:s.height},s.type==="group"){const p=d.insert("g").attr("class","subgraph");p.insert("rect").attr("class","subgraph subgraph-lvl-"+n%5+" node").attr("x",s.x+t).attr("y",s.y+e).attr("width",s.width).attr("height",s.height);const c=p.insert("g").attr("class","label"),u=B().flowchart.htmlLabels?s.labelData.width/2:0;c.attr("transform",`translate(${s.labels[0].x+t+s.x+u}, ${s.labels[0].y+e+s.y+3})`),c.node().appendChild(s.labelData.labelNode),y.info("Id (UGH)= ",s.type,s.labels)}else y.info("Id (UGH)= ",s.id),s.el.attr("transform",`translate(${s.x+t+s.width/2}, ${s.y+e+s.height/2})`)}),a.forEach(function(s){s&&s.type==="group"&&W(t+s.x,e+s.y,s.children,r,d,l,n+1)})},nt={getClasses:ot,draw:it},ct=t=>{let e="";for(let a=0;a<5;a++)e+=`
      .subgraph-lvl-${a} {
        fill: ${t[`surface${a}`]};
        stroke: ${t[`surfacePeer${a}`]};
      }
    `;return e},dt=t=>`.label {
    font-family: ${t.fontFamily};
    color: ${t.nodeTextColor||t.textColor};
  }
  .cluster-label text {
    fill: ${t.titleColor};
  }
  .cluster-label span {
    color: ${t.titleColor};
  }

  .label text,span {
    fill: ${t.nodeTextColor||t.textColor};
    color: ${t.nodeTextColor||t.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${t.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${t.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${t.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${t.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${t.edgeLabelBackground};
      fill: ${t.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${t.clusterBkg};
    stroke: ${t.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${t.titleColor};
  }

  .cluster span {
    color: ${t.titleColor};
  }
  /* .cluster div {
    color: ${t.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${t.fontFamily};
    font-size: 12px;
    background: ${t.tertiaryColor};
    border: 1px solid ${t.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${ct(t)}
`,ht=dt,kt={db:O,renderer:nt,parser:z,styles:ht};export{kt as diagram};
