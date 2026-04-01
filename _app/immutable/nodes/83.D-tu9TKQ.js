import"../chunks/Bzak7iHL.js";import{p as ee,s as d,f as K,t as E,a as g,b as te,d as t,c as b,r as e,A as i,z as J,g as Z,aP as X,e as fe,h as le,a1 as se,$ as pe,b7 as Q,y as ue}from"../chunks/M0Oc_jcV.js";import{s as ne}from"../chunks/DU8SfwID.js";import{s as S}from"../chunks/BudljjWB.js";import{a as ge}from"../chunks/Ljv_TvET.js";import{e as he,r as oe,b as ae,a as _e}from"../chunks/3N4rtv_S.js";import{d as ce,a as W,e as be}from"../chunks/DLG85UB6.js";import{b as $}from"../chunks/9OMzYa6r.js";import{p as De}from"../chunks/CHBPyCYz.js";import{r as we}from"../chunks/D0UoW5A5.js";import{S as ke}from"../chunks/Vw4LF3ys.js";import{T as xe}from"../chunks/Cna3_EMi.js";import{e as Y,i as G}from"../chunks/CpoRs9rA.js";import{a as ye}from"../chunks/BumAO1GI.js";import{p as de}from"../chunks/DUgBX6tD.js";/* empty css                */import{i as A}from"../chunks/CF3N4BZN.js";import{h as Ee}from"../chunks/MaqDuRK8.js";import{m as Se}from"../chunks/CesSW9Du.js";import{s as Ce}from"../chunks/DlCxjdZb.js";import{f as _}from"../chunks/BFEb8Se1.js";/* empty css                */var Ae=b('<article class="setting svelte-1qjsqo9"><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Fe=b('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-1qjsqo9"><article><div class="select-name svelte-1qjsqo9">Container Scale<span> </span></div> <div class="size-slider svelte-1qjsqo9"><span>60</span> <input type="range" min="60" max="100" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-1qjsqo9"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Te(D,s){ee(s,!0);let y=de(s,"containerSize",15),l=de(s,"metaData",15),x=X(null),j=!1;const C=r=>{y(r.target.value)};function H(r,m){r.stopPropagation(),l(Object.entries(l()).reduce((p,[c,u])=>(m.field===c?p[c]={...u,checked:r.target.checked}:p[c]=u,p),{}))}function w(r){r.stopPropagation();const m=r.target.checked;l(Object.values(l()).reduce((p,c)=>(c.checked=m,p[c.field]=c,p),{}))}var I=Fe(),P=d(K(I),2),O=t(P),N=t(O),R=d(t(N)),U=t(R);e(R),e(N);var z=d(N,2),q=d(t(z),2);$(q,r=>J(x,r),()=>i(x)),Z(2),e(z),e(O);var F=d(O,4),M=t(F),a=t(M);oe(a),he(a,j),Z(2),e(M),e(F);var n=d(F,2);Y(n,17,()=>Object.values(l()),G,(r,m)=>{var p=Ae(),c=t(p),u=t(c);oe(u);var v=d(u,2),f=t(v,!0);e(v),e(c),e(p),E(()=>{ae(u,"name",i(m).field),S(f,i(m).view)}),W("click",u,k=>H(k,i(m))),ye(u,()=>l()[i(m).field].checked,k=>l(l()[i(m).field].checked=k,!0)),g(r,p)}),e(P),E(()=>S(U,`(${y()??""})`)),W("input",q,C),W("click",a,w),g(D,I),te()}ce(["input","click"]);var Ne=b('<h1 class="text-left"> </h1>'),qe=b('<p class="text-large text-left"> </p>'),Me=b('<span class="view-list svelte-uw33pp"> </span>'),je=b('<div class="headers svelte-uw33pp" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),Pe=b("<p> </p>"),Oe=b('<p style="margin-left:auto"> </p>'),ze=b('<div class="version-date svelte-uw33pp"><!> <!></div> <hr/>',1),Le=b('<span class="view-list svelte-uw33pp"> </span>'),He=b('<div class="headers svelte-uw33pp"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),Ie=b('<div class="refs svelte-uw33pp"><a> </a></div>'),Re=b("<div><b> </b> <!></div>"),Ue=b('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function Be(D,s){ee(s,!0);function y(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var l=Ue(),x=t(l);{var j=a=>{var n=Ne(),r=t(n,!0);e(n),E(()=>S(r,s.metaData.title.value)),g(a,n)};A(x,a=>{s.metaData.title.checked&&a(j)})}var C=d(x,2);{var H=a=>{var n=qe(),r=t(n,!0);e(n),E(()=>S(r,s.metaData.description.value)),g(a,n)};A(C,a=>{s.metaData.description.checked&&a(H)})}var w=d(C,2);{var I=a=>{var n=je(),r=d(t(n),2);Y(r,21,()=>s.metaData.orgs.value,G,(m,p)=>{var c=Me(),u=t(c,!0);e(c),E(()=>S(u,i(p))),g(m,c)}),e(r),e(n),g(a,n)};A(w,a=>{s.metaData.orgs.checked&&a(I)})}var P=d(w,2);{var O=a=>{var n=ze(),r=K(n),m=t(r);{var p=v=>{var f=Pe(),k=t(f,!0);e(f),E(L=>S(k,L),[()=>y(s.metaData.published_date.value)]),g(v,f)};A(m,v=>{s.metaData.published_date.checked&&v(p)})}var c=d(m,2);{var u=v=>{var f=Oe(),k=t(f,!0);e(f),E(()=>S(k,s.metaData.d3fend_version.value)),g(v,f)};A(c,v=>{s.metaData.d3fend_version.checked&&v(u)})}e(r),Z(2),g(a,n)};A(P,a=>{(s.metaData.published_date.checked||s.metaData.d3fend_version.checked)&&a(O)})}var N=d(P,2);{var R=a=>{var n=He(),r=t(n),m=d(t(r));{var p=v=>{var f=le("s");g(v,f)};A(m,v=>{s.metaData.authors.value.length>1&&v(p)})}e(r);var c=d(r,2),u=t(c);Y(u,21,()=>s.metaData.authors.value,G,(v,f)=>{var k=Le(),L=t(k,!0);e(k),E(()=>S(L,i(f))),g(v,k)}),e(u),e(c),e(n),g(a,n)};A(N,a=>{s.metaData.authors.checked&&a(R)})}var U=d(N,2);{var z=a=>{var n=Re(),r=t(n),m=t(r);e(r);var p=d(r,2);Y(p,17,()=>s.metaData.references.value,G,(c,u)=>{var v=Ie(),f=t(v),k=t(f,!0);e(f),e(v),E(()=>{ae(f,"href",i(u)),S(k,i(u))}),g(c,v)}),e(n),E(()=>S(m,`${s.metaData.references.view??""}:`)),g(a,n)};A(U,a=>{s.metaData.references.checked&&a(z)})}var q=d(U,2),F=t(q);{var M=a=>{var n=fe(),r=K(n);Ee(r,()=>Se(s.metaData.article.value)),g(a,n)};A(F,a=>{s.metaData.article.checked&&a(M)})}e(q),e(l),g(D,l),te()}const Je=({size:D,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
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
  `,We=({size:D,domain:s},y="<embed-data>",{metadataComp:l,metadata:x})=>`
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
`;var Ve=b('<pre class="svelte-k3ritm"> </pre>'),Xe=b('<!> <main class="svelte-k3ritm"><section id="header" class="svelte-k3ritm"><h1 class="svelte-k3ritm"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-k3ritm">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-k3ritm"><!></code> <code id="embed-code" class="config-container svelte-k3ritm"><h3 class="svelte-k3ritm">Embed Code <span id="download-options" class="svelte-k3ritm"><!></span></h3> <div id="code-container" class="svelte-k3ritm"><!></div> <div id="download-container" class="svelte-k3ritm"><div> </div> <button class="download-code svelte-k3ritm">Download</button> <button class="download-code svelte-k3ritm">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-k3ritm"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-k3ritm"></iframe></main>',1);function gt(D,s){ee(s,!0);let y,l,x=X(90);const j=Q(()=>De.url.origin);let C=X(se({title:{checked:!1,field:"title",view:"Title",value:_.meta.title},description:{checked:!1,field:"description",view:"Description",value:_.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:_.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:_.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:_.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:_.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:_.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:_.meta.published_date}}));const H={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:We},"Svelte Component":{name:"Svelte Component",download:"D3fendProfile.svelte",text:"Composable Svelte Component runnable in Svelte Application",func:Je}};let w=X(se(H["index.html"]));const I=async(o,h,T)=>(await ue(),i(w).func(o,h,T)),P=o=>{var h;((h=o.data)==null?void 0:h.call)==="FromParent"&&y.contentWindow.postMessage({call:"toParent",value:{nodes:ne(_.nodes),edges:ne(_.edges),meta:{settings:{}}}},o.origin)},O=o=>{o&&o.text&&J(w,o,!0)},N=async(o,{func:h,download:T})=>{const B=h({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.edges},{metadataComp:l,metaData:i(C)});let me=new Blob([B],{type:"application/html"});Ce(me,T)},R=async(o,{func:h})=>{const T=h({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.edges},{metadataComp:l,metaData:i(C)});try{await navigator.clipboard.writeText(T)}catch(B){console.error("Failed to copy: ",B)}};let U=Q(async()=>{if(i(w))return await I({size:i(x),domain:i(j)},{nodes:_.nodes,edges:_.nodes},{metadataComp:l,metaData:i(C)})});var z=Xe();be("message",pe,P);var q=K(z);xe(q,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var F=d(q,2),M=d(t(F),2),a=t(M);Te(a,{get containerSize(){return i(x)},set containerSize(o){J(x,o,!0)},get metaData(){return i(C)},set metaData(o){J(C,o,!0)}}),e(M);var n=d(M,2),r=t(n),m=d(t(r)),p=t(m);{let o=Q(()=>Object.values(H));ke(p,{inputClassName:"autocomplete-cursor-select",get items(){return i(o)},labelFieldName:"name",readonly:!0,onChange:h=>O(h),get selectedItem(){return i(w)},set selectedItem(h){J(w,h,!0)}})}e(m),e(r);var c=d(r,2),u=t(c);ge(u,()=>i(U),o=>{var h=le("...loading");g(o,h)},(o,h)=>{var T=Ve(),B=t(T,!0);e(T),E(()=>S(B,i(h))),g(o,T)}),e(c);var v=d(c,2),f=t(v),k=t(f,!0);e(f);var L=d(f,2),re=d(L,2);e(v),e(n);var V=d(n,2),ve=t(V);Be(ve,{get metaData(){return i(C)}}),e(V),$(V,o=>l=o,()=>l);var ie=d(V,2);$(ie,o=>y=o,()=>y),e(F),E(o=>{_e(F,`--container-size:${i(x)??""}%;`),S(k,i(w).text),L.disabled=i(w).name=="Config Settings",re.disabled=i(w).name=="Config Settings",ae(ie,"src",o)},[()=>we("/cad-frame/")]),W("click",L,o=>N(o,i(w))),W("click",re,o=>R(o,i(w))),g(D,z),te()}ce(["click"]);export{gt as component};
