import"../chunks/Bzak7iHL.js";import{p as ee,s as d,f as G,c as a,r as e,A as i,z as B,b0 as Z,t as E,a as h,b as te,aM as V,d as k,e as ue,b7 as ve,a1 as se,$ as ge,b1 as Q,y as he}from"../chunks/C5fqCc9O.js";import{s as ne}from"../chunks/jugdKq5g.js";import{s as S}from"../chunks/B0SftDD_.js";import{a as _e}from"../chunks/Lq8toa_j.js";import{r as oe,e as be,b as ae,a as De}from"../chunks/BYdHoday.js";import{d as me,a as J,e as we}from"../chunks/DZKNGu60.js";import{b as $}from"../chunks/BLNxmo6t.js";import{p as de}from"../chunks/cfLrblqv.js";import{r as ke}from"../chunks/BcPLfliy.js";import{S as xe}from"../chunks/Dv9kDuwq.js";import{T as ye}from"../chunks/DTnLv5eS.js";import{e as X,i as Y}from"../chunks/DzcpJ-1p.js";import{b as Ee}from"../chunks/K5CjhWwp.js";import{p as le}from"../chunks/BAIJt-Fa.js";/* empty css                */import{i as A}from"../chunks/B7bOfw0f.js";import{h as Se}from"../chunks/BhUBJ9bE.js";import{m as Ce}from"../chunks/CesSW9Du.js";import{s as Ae}from"../chunks/DT9BoJLz.js";/* empty css                */var Fe=k('<article class="setting svelte-1qjsqo9"><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Te=k('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-1qjsqo9"><article><div class="select-name svelte-1qjsqo9">Container Scale<span> </span></div> <div class="size-slider svelte-1qjsqo9"><span>60</span> <input type="range" min="60" max="100" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Ne(D,s){ee(s,!0);let y=le(s,"containerSize",15),l=le(s,"metaData",15),x=V(null),j=!1;const p=r=>{y(r.target.value)};function C(r,v){r.stopPropagation(),l(Object.entries(l()).reduce((u,[c,m])=>(v.field===c?u[c]={...m,checked:r.target.checked}:u[c]=m,u),{}))}function P(r){r.stopPropagation();const v=r.target.checked;l(Object.values(l()).reduce((u,c)=>(c.checked=v,u[c.field]=c,u),{}))}var w=Te(),O=d(G(w),2),z=a(O),T=a(z),L=d(a(T)),H=a(L);e(L),e(T);var I=d(T,2),N=d(a(I),2);$(N,r=>B(x,r),()=>i(x)),Z(2),e(I),e(z);var M=d(z,4),q=a(M),t=a(q);oe(t),be(t,j),Z(2),e(q),e(M);var n=d(M,2);X(n,17,()=>Object.values(l()),Y,(r,v)=>{var u=Fe(),c=a(u),m=a(c);oe(m);var f=d(m,2),g=a(f,!0);e(f),e(c),e(u),E(()=>{ae(m,"name",i(v).field),S(g,i(v).view)}),J("click",m,_=>C(_,i(v))),Ee(m,()=>l()[i(v).field].checked,_=>l(l()[i(v).field].checked=_,!0)),h(r,u)}),e(O),E(()=>S(H,`(${y()??""})`)),J("input",N,p),J("click",t,P),h(D,w),te()}me(["input","click"]);var Me=k('<h1 class="text-left"> </h1>'),qe=k('<p class="text-large text-left"> </p>'),ce=k('<span class="view-list svelte-uw33pp"> </span>'),je=k('<div class="headers svelte-uw33pp" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),Pe=k("<p> </p>"),Oe=k('<p style="margin-left:auto"> </p>'),ze=k('<div class="version-date svelte-uw33pp"><!> <!></div> <hr/>',1),Le=k('<div class="headers svelte-uw33pp"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),He=k('<div class="refs svelte-uw33pp"><a> </a></div>'),Ie=k("<div><b> </b> <!></div>"),Re=k('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function Ue(D,s){ee(s,!0);function y(t){return new Date(t).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var l=Re(),x=a(l);{var j=t=>{var n=Me(),r=a(n,!0);e(n),E(()=>S(r,s.metaData.title.value)),h(t,n)};A(x,t=>{s.metaData.title.checked&&t(j)})}var p=d(x,2);{var C=t=>{var n=qe(),r=a(n,!0);e(n),E(()=>S(r,s.metaData.description.value)),h(t,n)};A(p,t=>{s.metaData.description.checked&&t(C)})}var P=d(p,2);{var w=t=>{var n=je(),r=d(a(n),2);X(r,21,()=>s.metaData.orgs.value,Y,(v,u)=>{var c=ce(),m=a(c,!0);e(c),E(()=>S(m,i(u))),h(v,c)}),e(r),e(n),h(t,n)};A(P,t=>{s.metaData.orgs.checked&&t(w)})}var O=d(P,2);{var z=t=>{var n=ze(),r=G(n),v=a(r);{var u=f=>{var g=Pe(),_=a(g,!0);e(g),E(R=>S(_,R),[()=>y(s.metaData.published_date.value)]),h(f,g)};A(v,f=>{s.metaData.published_date.checked&&f(u)})}var c=d(v,2);{var m=f=>{var g=Oe(),_=a(g,!0);e(g),E(()=>S(_,s.metaData.d3fend_version.value)),h(f,g)};A(c,f=>{s.metaData.d3fend_version.checked&&f(m)})}e(r),Z(2),h(t,n)};A(O,t=>{(s.metaData.published_date.checked||s.metaData.d3fend_version.checked)&&t(z)})}var T=d(O,2);{var L=t=>{var n=Le(),r=a(n),v=d(a(r));{var u=f=>{var g=ve("s");h(f,g)};A(v,f=>{s.metaData.authors.value.length>1&&f(u)})}e(r);var c=d(r,2),m=a(c);X(m,21,()=>s.metaData.authors.value,Y,(f,g)=>{var _=ce(),R=a(_,!0);e(_),E(()=>S(R,i(g))),h(f,_)}),e(m),e(c),e(n),h(t,n)};A(T,t=>{s.metaData.authors.checked&&t(L)})}var H=d(T,2);{var I=t=>{var n=Ie(),r=a(n),v=a(r);e(r);var u=d(r,2);X(u,17,()=>s.metaData.references.value,Y,(c,m)=>{var f=He(),g=a(f),_=a(g,!0);e(g),e(f),E(()=>{ae(g,"href",i(m)),S(_,i(m))}),h(c,f)}),e(n),E(()=>S(v,`${s.metaData.references.view??""}:`)),h(t,n)};A(H,t=>{s.metaData.references.checked&&t(I)})}var N=d(H,2),M=a(N);{var q=t=>{var n=ue(),r=G(n);Se(r,()=>Ce(s.metaData.article.value)),h(t,n)};A(M,t=>{s.metaData.article.checked&&t(q)})}e(N),e(l),h(D,l),te()}const Be=({size:D,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(y,null,2)};

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
      src="${s}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${D}%);
      -moz-transform: scale(${D}%);
      -o-transform: scale(${D}%);
      -webkit-transform: scale(${D}%);
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
  `,Je=({size:D,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(y,null,2)};

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

        if (event.origin !== "${s}") return;

        post_cad(event);
      });
    <\/script>

    <style>
      #iframe {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100vh;
        transform: scale(${D}%);
        -moz-transform: scale(${D}%);
        -o-transform: scale(${D}%);
        -webkit-transform: scale(${D}%);
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
      src="${s}/cad-frame/"
      title="D3FEND CAD Embedded"
    ></iframe>
  </main>
</html>
`;var We=k('<pre class="svelte-k3ritm"> </pre>'),Ve=k('<!> <main class="svelte-k3ritm"><section id="header" class="svelte-k3ritm"><h1 class="svelte-k3ritm"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-k3ritm">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-k3ritm"><!></code> <code id="embed-code" class="config-container svelte-k3ritm"><h3 class="svelte-k3ritm">Embed Code <span id="download-options" class="svelte-k3ritm"><!></span></h3> <div id="code-container" class="svelte-k3ritm"><!></div> <div id="download-container" class="svelte-k3ritm"><div> </div> <button class="download-code svelte-k3ritm">Download</button> <button class="download-code svelte-k3ritm">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-k3ritm"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-k3ritm"></iframe></main>',1);function pt(D,s){ee(s,!0);let y,l,x=V(90);const j=Q(()=>de.url.origin),p=de.state.cad_embed_graph??{nodes:[],edges:[],meta:{}};let C=V(se({title:{checked:!1,field:"title",view:"Title",value:p.meta.title},description:{checked:!1,field:"description",view:"Description",value:p.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:p.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:p.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:p.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:p.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:p.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:p.meta.published_date}}));const P={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Je},"Svelte Component":{name:"Svelte Component",download:"D3fendProfile.svelte",text:"Composable Svelte Component runnable in Svelte Application",func:Be}};let w=V(se(P["index.html"]));const O=async(o,b,F)=>(await he(),i(w).func(o,b,F)),z=o=>{var b;((b=o.data)==null?void 0:b.call)==="FromParent"&&y.contentWindow.postMessage({call:"toParent",value:{nodes:ne(p.nodes),edges:ne(p.edges),meta:{settings:{}}}},o.origin)},T=o=>{o&&o.text&&B(w,o,!0)},L=async(o,{func:b,download:F})=>{const U=b({size:i(x),domain:i(j)},{nodes:p.nodes,edges:p.nodes},{metadataComp:l,metaData:i(C)});let pe=new Blob([U],{type:"application/html"});Ae(pe,F)},H=async(o,{func:b})=>{const F=b({size:i(x),domain:i(j)},{nodes:p.nodes,edges:p.edges},{metadataComp:l,metaData:i(C)});try{await navigator.clipboard.writeText(F)}catch(U){console.error("Failed to copy: ",U)}};let I=Q(async()=>{if(i(w))return await O({size:i(x),domain:i(j)},{nodes:p.nodes,edges:p.edges},{metadataComp:l,metaData:i(C)})});var N=Ve();we("message",ge,z);var M=G(N);ye(M,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var q=d(M,2),t=d(a(q),2),n=a(t);Ne(n,{get containerSize(){return i(x)},set containerSize(o){B(x,o,!0)},get metaData(){return i(C)},set metaData(o){B(C,o,!0)}}),e(t);var r=d(t,2),v=a(r),u=d(a(v)),c=a(u);{let o=Q(()=>Object.values(P));xe(c,{inputClassName:"autocomplete-cursor-select",get items(){return i(o)},labelFieldName:"name",readonly:!0,onChange:b=>T(b),get selectedItem(){return i(w)},set selectedItem(b){B(w,b,!0)}})}e(u),e(v);var m=d(v,2),f=a(m);_e(f,()=>i(I),o=>{var b=ve("...loading");h(o,b)},(o,b)=>{var F=We(),U=a(F,!0);e(F),E(()=>S(U,i(b))),h(o,F)}),e(m);var g=d(m,2),_=a(g),R=a(_,!0);e(_);var K=d(_,2),re=d(K,2);e(g),e(r);var W=d(r,2),fe=a(W);Ue(fe,{get metaData(){return i(C)}}),e(W),$(W,o=>l=o,()=>l);var ie=d(W,2);$(ie,o=>y=o,()=>y),e(q),E(o=>{De(q,`--container-size:${i(x)??""}%;`),S(R,i(w).text),K.disabled=i(w).name=="Config Settings",re.disabled=i(w).name=="Config Settings",ae(ie,"src",o)},[()=>ke("/cad-frame/")]),J("click",K,o=>L(o,i(w))),J("click",re,o=>H(o,i(w))),h(D,N),te()}me(["click"]);export{pt as component};
