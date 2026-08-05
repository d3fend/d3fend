import"../chunks/Bzak7iHL.js";import{p as ee,s as d,f as K,c as t,r as e,A as i,z as J,b0 as Z,t as E,a as g,b as te,aM as X,d as k,e as pe,b7 as ce,a1 as se,$ as ue,b1 as Q,y as ge}from"../chunks/C5fqCc9O.js";import{s as ne}from"../chunks/jugdKq5g.js";import{s as S}from"../chunks/B0SftDD_.js";import{a as he}from"../chunks/Lq8toa_j.js";import{r as oe,e as _e,b as ae,a as be}from"../chunks/BYdHoday.js";import{d as ve,a as W,e as De}from"../chunks/DZKNGu60.js";import{b as $}from"../chunks/BLNxmo6t.js";import{p as we}from"../chunks/CVgGo7LL.js";import{r as ke}from"../chunks/DtzFuBVJ.js";import{S as xe}from"../chunks/Dv9kDuwq.js";import{T as ye}from"../chunks/DTnLv5eS.js";import{e as Y,i as G}from"../chunks/DzcpJ-1p.js";import{b as Ee}from"../chunks/K5CjhWwp.js";import{p as de}from"../chunks/BAIJt-Fa.js";/* empty css                */import{i as A}from"../chunks/B7bOfw0f.js";import{h as Se}from"../chunks/BhUBJ9bE.js";import{m as Ce}from"../chunks/CesSW9Du.js";import{s as Ae}from"../chunks/DT9BoJLz.js";import{c as _}from"../chunks/B_R902k6.js";/* empty css                */var Fe=k('<article class="setting svelte-1qjsqo9"><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Te=k('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-1qjsqo9"><article><div class="select-name svelte-1qjsqo9">Container Scale<span> </span></div> <div class="size-slider svelte-1qjsqo9"><span>60</span> <input type="range" min="60" max="100" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Ne(b,s){ee(s,!0);let y=de(s,"containerSize",15),l=de(s,"metaData",15),x=X(null),j=!1;const C=r=>{y(r.target.value)};function H(r,m){r.stopPropagation(),l(Object.entries(l()).reduce((p,[c,u])=>(m.field===c?p[c]={...u,checked:r.target.checked}:p[c]=u,p),{}))}function D(r){r.stopPropagation();const m=r.target.checked;l(Object.values(l()).reduce((p,c)=>(c.checked=m,p[c.field]=c,p),{}))}var I=Te(),P=d(K(I),2),O=t(P),N=t(O),R=d(t(N)),U=t(R);e(R),e(N);var z=d(N,2),M=d(t(z),2);$(M,r=>J(x,r),()=>i(x)),Z(2),e(z),e(O);var F=d(O,4),q=t(F),a=t(q);oe(a),_e(a,j),Z(2),e(q),e(F);var n=d(F,2);Y(n,17,()=>Object.values(l()),G,(r,m)=>{var p=Fe(),c=t(p),u=t(c);oe(u);var v=d(u,2),f=t(v,!0);e(v),e(c),e(p),E(()=>{ae(u,"name",i(m).field),S(f,i(m).view)}),W("click",u,w=>H(w,i(m))),Ee(u,()=>l()[i(m).field].checked,w=>l(l()[i(m).field].checked=w,!0)),g(r,p)}),e(P),E(()=>S(U,`(${y()??""})`)),W("input",M,C),W("click",a,D),g(b,I),te()}ve(["input","click"]);var Me=k('<h1 class="text-left"> </h1>'),qe=k('<p class="text-large text-left"> </p>'),le=k('<span class="view-list svelte-uw33pp"> </span>'),je=k('<div class="headers svelte-uw33pp" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),Pe=k("<p> </p>"),Oe=k('<p style="margin-left:auto"> </p>'),ze=k('<div class="version-date svelte-uw33pp"><!> <!></div> <hr/>',1),Le=k('<div class="headers svelte-uw33pp"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),He=k('<div class="refs svelte-uw33pp"><a> </a></div>'),Ie=k("<div><b> </b> <!></div>"),Re=k('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function Ue(b,s){ee(s,!0);function y(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var l=Re(),x=t(l);{var j=a=>{var n=Me(),r=t(n,!0);e(n),E(()=>S(r,s.metaData.title.value)),g(a,n)};A(x,a=>{s.metaData.title.checked&&a(j)})}var C=d(x,2);{var H=a=>{var n=qe(),r=t(n,!0);e(n),E(()=>S(r,s.metaData.description.value)),g(a,n)};A(C,a=>{s.metaData.description.checked&&a(H)})}var D=d(C,2);{var I=a=>{var n=je(),r=d(t(n),2);Y(r,21,()=>s.metaData.orgs.value,G,(m,p)=>{var c=le(),u=t(c,!0);e(c),E(()=>S(u,i(p))),g(m,c)}),e(r),e(n),g(a,n)};A(D,a=>{s.metaData.orgs.checked&&a(I)})}var P=d(D,2);{var O=a=>{var n=ze(),r=K(n),m=t(r);{var p=v=>{var f=Pe(),w=t(f,!0);e(f),E(L=>S(w,L),[()=>y(s.metaData.published_date.value)]),g(v,f)};A(m,v=>{s.metaData.published_date.checked&&v(p)})}var c=d(m,2);{var u=v=>{var f=Oe(),w=t(f,!0);e(f),E(()=>S(w,s.metaData.d3fend_version.value)),g(v,f)};A(c,v=>{s.metaData.d3fend_version.checked&&v(u)})}e(r),Z(2),g(a,n)};A(P,a=>{(s.metaData.published_date.checked||s.metaData.d3fend_version.checked)&&a(O)})}var N=d(P,2);{var R=a=>{var n=Le(),r=t(n),m=d(t(r));{var p=v=>{var f=ce("s");g(v,f)};A(m,v=>{s.metaData.authors.value.length>1&&v(p)})}e(r);var c=d(r,2),u=t(c);Y(u,21,()=>s.metaData.authors.value,G,(v,f)=>{var w=le(),L=t(w,!0);e(w),E(()=>S(L,i(f))),g(v,w)}),e(u),e(c),e(n),g(a,n)};A(N,a=>{s.metaData.authors.checked&&a(R)})}var U=d(N,2);{var z=a=>{var n=Ie(),r=t(n),m=t(r);e(r);var p=d(r,2);Y(p,17,()=>s.metaData.references.value,G,(c,u)=>{var v=He(),f=t(v),w=t(f,!0);e(f),e(v),E(()=>{ae(f,"href",i(u)),S(w,i(u))}),g(c,v)}),e(n),E(()=>S(m,`${s.metaData.references.view??""}:`)),g(a,n)};A(U,a=>{s.metaData.references.checked&&a(z)})}var M=d(U,2),F=t(M);{var q=a=>{var n=pe(),r=K(n);Se(r,()=>Ce(s.metaData.article.value)),g(a,n)};A(F,a=>{s.metaData.article.checked&&a(q)})}e(M),e(l),g(b,l),te()}const Be=({size:b,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
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
      transform: scale(${b}%);
      -moz-transform: scale(${b}%);
      -o-transform: scale(${b}%);
      -webkit-transform: scale(${b}%);
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
  `,Je=({size:b,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
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
        transform: scale(${b}%);
        -moz-transform: scale(${b}%);
        -o-transform: scale(${b}%);
        -webkit-transform: scale(${b}%);
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
`;var We=k('<pre class="svelte-k3ritm"> </pre>'),Ve=k('<!> <main class="svelte-k3ritm"><section id="header" class="svelte-k3ritm"><h1 class="svelte-k3ritm"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-k3ritm">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-k3ritm"><!></code> <code id="embed-code" class="config-container svelte-k3ritm"><h3 class="svelte-k3ritm">Embed Code <span id="download-options" class="svelte-k3ritm"><!></span></h3> <div id="code-container" class="svelte-k3ritm"><!></div> <div id="download-container" class="svelte-k3ritm"><div> </div> <button class="download-code svelte-k3ritm">Download</button> <button class="download-code svelte-k3ritm">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-k3ritm"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-k3ritm"></iframe></main>',1);function ut(b,s){ee(s,!0);let y,l,x=X(90);const j=Q(()=>we.url.origin);let C=X(se({title:{checked:!1,field:"title",view:"Title",value:_.meta.title},description:{checked:!1,field:"description",view:"Description",value:_.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:_.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:_.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:_.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:_.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:_.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:_.meta.published_date}}));const H={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Je},"Svelte Component":{name:"Svelte Component",download:"D3fendProfile.svelte",text:"Composable Svelte Component runnable in Svelte Application",func:Be}};let D=X(se(H["index.html"]));const I=async(o,h,T)=>(await ge(),i(D).func(o,h,T)),P=o=>{var h;((h=o.data)==null?void 0:h.call)==="FromParent"&&y.contentWindow.postMessage({call:"toParent",value:{nodes:ne(_.nodes),edges:ne(_.edges),meta:{settings:{}}}},o.origin)},O=o=>{o&&o.text&&J(D,o,!0)},N=async(o,{func:h,download:T})=>{const B=h({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.nodes},{metadataComp:l,metaData:i(C)});let fe=new Blob([B],{type:"application/html"});Ae(fe,T)},R=async(o,{func:h})=>{const T=h({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.edges},{metadataComp:l,metaData:i(C)});try{await navigator.clipboard.writeText(T)}catch(B){console.error("Failed to copy: ",B)}};let U=Q(async()=>{if(i(D))return await I({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.edges},{metadataComp:l,metaData:i(C)})});var z=Ve();De("message",ue,P);var M=K(z);ye(M,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var F=d(M,2),q=d(t(F),2),a=t(q);Ne(a,{get containerSize(){return i(x)},set containerSize(o){J(x,o,!0)},get metaData(){return i(C)},set metaData(o){J(C,o,!0)}}),e(q);var n=d(q,2),r=t(n),m=d(t(r)),p=t(m);{let o=Q(()=>Object.values(H));xe(p,{inputClassName:"autocomplete-cursor-select",get items(){return i(o)},labelFieldName:"name",readonly:!0,onChange:h=>O(h),get selectedItem(){return i(D)},set selectedItem(h){J(D,h,!0)}})}e(m),e(r);var c=d(r,2),u=t(c);he(u,()=>i(U),o=>{var h=ce("...loading");g(o,h)},(o,h)=>{var T=We(),B=t(T,!0);e(T),E(()=>S(B,i(h))),g(o,T)}),e(c);var v=d(c,2),f=t(v),w=t(f,!0);e(f);var L=d(f,2),re=d(L,2);e(v),e(n);var V=d(n,2),me=t(V);Ue(me,{get metaData(){return i(C)}}),e(V),$(V,o=>l=o,()=>l);var ie=d(V,2);$(ie,o=>y=o,()=>y),e(F),E(o=>{be(F,`--container-size:${i(x)??""}%;`),S(w,i(D).text),L.disabled=i(D).name=="Config Settings",re.disabled=i(D).name=="Config Settings",ae(ie,"src",o)},[()=>ke("/cad-frame/")]),W("click",L,o=>N(o,i(D))),W("click",re,o=>R(o,i(D))),g(b,z),te()}ve(["click"]);export{ut as component};
