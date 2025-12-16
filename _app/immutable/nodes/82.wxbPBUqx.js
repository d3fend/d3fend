import"../chunks/CWj6FrbW.js";import{p as $,f as k,s as o,a as Y,d as i,t as x,b as p,c as ee,r as t,a5 as n,aG as G,a3 as J,g as Q,e as ve,h as de,aH as ie,aW as K,$ as me,C as fe}from"../chunks/dMGUy5QM.js";import{s as se}from"../chunks/zVuwtWzQ.js";import{s as E}from"../chunks/Ceao5OH1.js";import{a as pe}from"../chunks/CLe25FU5.js";import{e as ue,r as ne,b as te,a as _e}from"../chunks/DipC33mm.js";import{d as le,e as ge}from"../chunks/BXLGAO8c.js";import{b as Z}from"../chunks/DxJdRxaS.js";import{p as he}from"../chunks/CSYjFUGx.js";import{b as be}from"../chunks/D3X03awB.js";import{S as De}from"../chunks/CQgDPQTh.js";import{T as ke}from"../chunks/BzLSA3Ex.js";import{e as V,i as X}from"../chunks/vxpmWPHk.js";import{a as ye}from"../chunks/BslLmUHW.js";import{p as oe}from"../chunks/BHu5K3zf.js";/* empty css                */import{i as C}from"../chunks/DEe5j1qu.js";import{h as we}from"../chunks/BNQKUd2u.js";import{m as xe}from"../chunks/CesSW9Du.js";import{s as Ee}from"../chunks/Dcej-Xz1.js";import{f as D}from"../chunks/B8FoDMt0.js";/* empty css                */const Se=(d,e)=>{e(d.target.value)};function Ce(d,e){d.stopPropagation();const m=d.target.checked;e(Object.values(e()).reduce((l,u)=>(u.checked=m,l[u.field]=u,l),{}))}var Ae=(d,e,m)=>e(d,n(m)),Fe=k('<article class="setting svelte-14q5rrs"><form class="setting-checks svelte-14q5rrs"><input class="check-box" type="checkbox" tabindex="0"/> <span class="layer-text"> </span></form></article>'),Te=k('<h3 class="text-center">Settings</h3> <section class="setting-checks-container svelte-14q5rrs"><article><div class="select-name svelte-14q5rrs">Container Scale<span> </span></div> <div class="size-slider svelte-14q5rrs"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article> <br/> <article><form class="setting-checks svelte-14q5rrs"><input class="check-box" type="checkbox" name="toggleAll" tabindex="0"/> <span class="layer-text">Toggle All Metadata</span></form></article> <!></section>',1);function Ne(d,e){$(e,!0);let m=oe(e,"containerSize",15),l=oe(e,"metaData",15),u=G(null),O=!1;function A(a,r){a.stopPropagation(),l(Object.entries(l()).reduce((s,[_,g])=>(r.field===_?s[_]={...g,checked:a.target.checked}:s[_]=g,s),{}))}var q=Te(),y=o(Y(q),2),z=i(y),N=i(z),I=o(i(N)),R=i(I);t(I),t(N);var U=o(N,2),L=o(i(U),2);L.__input=[Se,m],Z(L,a=>J(u,a),()=>n(u)),Q(2),t(U),t(z);var M=o(z,4),P=i(M),F=i(P);ne(F),ue(F,O),F.__click=[Ce,l],Q(2),t(P),t(M);var H=o(M,2);V(H,17,()=>Object.values(l()),X,(a,r)=>{var s=Fe(),_=i(s),g=i(_);ne(g),g.__click=[Ae,A,r];var h=o(g,2),w=i(h,!0);t(h),t(_),t(s),x(()=>{te(g,"name",n(r).field),E(w,n(r).view)}),ye(g,()=>l()[n(r).field].checked,v=>l(l()[n(r).field].checked=v,!0)),p(a,s)}),t(y),x(()=>E(R,`(${m()??""})`)),p(d,q),ee()}le(["input","click"]);var Me=k('<h1 class="text-left"> </h1>'),Pe=k('<p class="text-large text-left"> </p>'),Oe=k('<span class="view-list svelte-bf4y76"> </span>'),qe=k('<div class="headers svelte-bf4y76" style="margin-top: 10px"><p class="text-bold" style="margin-bottom: 0px">Orgs</p> <div></div></div>'),ze=k("<p> </p>"),Le=k('<p style="margin-left:auto"> </p>'),He=k('<div class="version-date svelte-bf4y76"><!> <!></div> <hr/>',1),je=k('<span class="view-list svelte-bf4y76"> </span>'),Ie=k('<div class="headers svelte-bf4y76"><div class="text-bold">Author<!></div> <p style="margin-top: 0px"><em class="font-large"></em></p></div>'),Re=k('<div class="refs svelte-bf4y76"><a> </a></div>'),Ue=k("<div><b> </b> <!></div>"),We=k('<section class="content"><!> <!> <!> <!> <!> <!> <div><!></div></section>');function Je(d,e){$(e,!0);function m(a){return new Date(a).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}var l=We(),u=i(l);{var O=a=>{var r=Me(),s=i(r,!0);t(r),x(()=>E(s,e.metaData.title.value)),p(a,r)};C(u,a=>{e.metaData.title.checked&&a(O)})}var A=o(u,2);{var q=a=>{var r=Pe(),s=i(r,!0);t(r),x(()=>E(s,e.metaData.description.value)),p(a,r)};C(A,a=>{e.metaData.description.checked&&a(q)})}var y=o(A,2);{var z=a=>{var r=qe(),s=o(i(r),2);V(s,21,()=>e.metaData.orgs.value,X,(_,g)=>{var h=Oe(),w=i(h,!0);t(h),x(()=>E(w,n(g))),p(_,h)}),t(s),t(r),p(a,r)};C(y,a=>{e.metaData.orgs.checked&&a(z)})}var N=o(y,2);{var I=a=>{var r=He(),s=Y(r),_=i(s);{var g=v=>{var f=ze(),S=i(f,!0);t(f),x(j=>E(S,j),[()=>m(e.metaData.published_date.value)]),p(v,f)};C(_,v=>{e.metaData.published_date.checked&&v(g)})}var h=o(_,2);{var w=v=>{var f=Le(),S=i(f,!0);t(f),x(()=>E(S,e.metaData.d3fend_version.value)),p(v,f)};C(h,v=>{e.metaData.d3fend_version.checked&&v(w)})}t(s),Q(2),p(a,r)};C(N,a=>{(e.metaData.published_date.checked||e.metaData.d3fend_version.checked)&&a(I)})}var R=o(N,2);{var U=a=>{var r=Ie(),s=i(r),_=o(i(s));{var g=v=>{var f=de("s");p(v,f)};C(_,v=>{e.metaData.authors.value.length>1&&v(g)})}t(s);var h=o(s,2),w=i(h);V(w,21,()=>e.metaData.authors.value,X,(v,f)=>{var S=je(),j=i(S,!0);t(S),x(()=>E(j,n(f))),p(v,S)}),t(w),t(h),t(r),p(a,r)};C(R,a=>{e.metaData.authors.checked&&a(U)})}var L=o(R,2);{var M=a=>{var r=Ue(),s=i(r),_=i(s);t(s);var g=o(s,2);V(g,17,()=>e.metaData.references.value,X,(h,w)=>{var v=Re(),f=i(v),S=i(f,!0);t(f),t(v),x(()=>{te(f,"href",n(w)),E(S,n(w))}),p(h,v)}),t(r),x(()=>E(_,`${e.metaData.references.view??""}:`)),p(a,r)};C(L,a=>{e.metaData.references.checked&&a(M)})}var P=o(L,2),F=i(P);{var H=a=>{var r=ve(),s=Y(r);we(s,()=>xe(e.metaData.article.value)),p(a,r)};C(F,a=>{e.metaData.article.checked&&a(H)})}t(P),t(l),p(d,l),ee()}const Be=({size:d,domain:e},m="<embed-data>",{metadataComp:l,metadata:u})=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(m,null,2)};

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
      transform: scale(${d}%);
      -moz-transform: scale(${d}%);
      -o-transform: scale(${d}%);
      -webkit-transform: scale(${d}%);
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
  `,Ge=({size:d,domain:e},m="<embed-data>",{metadataComp:l,metadata:u})=>`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>D3FEND EMBEDDED</title>

    <script>
      const user_data = ${JSON.stringify(m,null,2)};

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
        transform: scale(${d}%);
        -moz-transform: scale(${d}%);
        -o-transform: scale(${d}%);
        -webkit-transform: scale(${d}%);
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
`;var Ve=k('<pre class="svelte-tky2v8"> </pre>'),Xe=(d,e,m)=>e(d,n(m)),Ye=(d,e,m)=>e(d,n(m)),Ke=k('<!> <main class="svelte-tky2v8"><section id="header" class="svelte-tky2v8"><h1 class="svelte-tky2v8"><span class="fancy-font">D3FEND</span> Embeddable CAD</h1> <h6 class="svelte-tky2v8">Use the D3FEND Embeddable CAD to embed an interactive D3FEND CAD in another webpage.</h6></section> <code id="embed-settings" class="svelte-tky2v8"><!></code> <code id="embed-code" class="config-container svelte-tky2v8"><h3 class="svelte-tky2v8">Embed Code <span id="download-options" class="svelte-tky2v8"><!></span></h3> <div id="code-container" class="svelte-tky2v8"><!></div> <div id="download-container" class="svelte-tky2v8"><div> </div> <button class="download-code svelte-tky2v8">Download</button> <button class="download-code svelte-tky2v8">Copy to Clipboard</button></div></code> <div id="metadata-render" class="svelte-tky2v8"><!></div> <iframe id="cad-iframe" title="D3FEND Embedded CAD" class="svelte-tky2v8"></iframe></main>',1);function bt(d,e){$(e,!0);let m,l,u=G(90);const O=K(()=>he.url.origin);let A=G(ie({title:{checked:!1,field:"title",view:"Title",value:D.meta.title},description:{checked:!1,field:"description",view:"Description",value:D.meta.description},authors:{checked:!1,field:"authors",view:"Authors",value:D.meta.authors},orgs:{checked:!1,field:"orgs",view:"Organizations",value:D.meta.orgs},article:{checked:!1,field:"article",view:"Article",value:D.meta.article},d3fend_version:{checked:!1,field:"d3fend_version",view:"D3FEND Version",value:D.meta.d3fend_version},references:{checked:!1,field:"references",view:"References",value:D.meta.references},published_date:{checked:!1,field:"published_date",view:"Date",value:D.meta.published_date}}));const q={"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Ge},"Svelte Compenent":{name:"Svelte Compenent",download:"D3fendProfile.svelte",text:"Composable Svelte Compoenent runnable in Svelte Application",func:Be}};let y=G(ie(q["index.html"]));const z=async(c,b,T)=>(await fe(),n(y).func(c,b,T)),N=c=>{var b;((b=c.data)==null?void 0:b.call)==="FromParent"&&m.contentWindow.postMessage({call:"toParent",value:{nodes:se(D.nodes),edges:se(D.edges),meta:{settings:{}}}},c.origin)},I=c=>{c&&c.text&&J(y,c,!0)},R=async(c,{func:b,download:T})=>{const W=b({size:n(u),domain:n(O)},{nodes:D.nodes,edges:D.nodes});Ee(W,T)},U=async(c,{func:b})=>{const T=b({size:n(u),domain:n(O)},{nodes:D.nodes,edges:D.nodes});try{await navigator.clipboard.writeText(T)}catch(W){console.error("Failed to copy: ",W)}},L=K(async()=>await z({size:n(u),domain:n(O)},{nodes:D.nodes,edges:D.nodes},{metadataComp:l,metaData:n(A)}));var M=Ke();ge("message",me,N);var P=Y(M);ke(P,{title:"Embedded D3FEND CAD",og_title:"MITRE Embedded D3FEND CAD",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND CAD Analysis."});var F=o(P,2),H=o(i(F),2),a=i(H);Ne(a,{get containerSize(){return n(u)},set containerSize(c){J(u,c,!0)},get metaData(){return n(A)},set metaData(c){J(A,c,!0)}}),t(H);var r=o(H,2),s=i(r),_=o(i(s)),g=i(_);{let c=K(()=>Object.values(q));De(g,{inputClassName:"autocomplete-cursor-select",get items(){return n(c)},labelFieldName:"name",readonly:!0,onChange:b=>I(b),get selectedItem(){return n(y)},set selectedItem(b){J(y,b,!0)}})}t(_),t(s);var h=o(s,2),w=i(h);pe(w,()=>n(L),c=>{var b=de("...loading");p(c,b)},(c,b)=>{var T=Ve(),W=i(T,!0);t(T),x(()=>E(W,n(b))),p(c,T)}),t(h);var v=o(h,2),f=i(v),S=i(f,!0);t(f);var j=o(f,2);j.__click=[Xe,R,y];var ae=o(j,2);ae.__click=[Ye,U,y],t(v),t(r);var B=o(r,2),ce=i(B);Je(ce,{get metaData(){return n(A)}}),t(B),Z(B,c=>l=c,()=>l);var re=o(B,2);Z(re,c=>m=c,()=>m),t(F),x(()=>{_e(F,`--container-size:${n(u)??""}%;`),E(S,n(y).text),j.disabled=n(y).name==="Config Settings",ae.disabled=n(y).name==="Config Settings",te(re,"src",`${be}/cad-frame/`)}),p(d,M),ee()}le(["click"]);export{bt as component};
