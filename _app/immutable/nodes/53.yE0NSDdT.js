import"../chunks/Bzak7iHL.js";import{o as ye}from"../chunks/o0JyXpVK.js";import{p as ce,aM as V,a1 as Z,s,f as de,c as a,z as m,A as i,r,b0 as E,t as me,a as pe,b as ue,b1 as J,d as fe,$ as be}from"../chunks/C5fqCc9O.js";import{s as ee}from"../chunks/B0SftDD_.js";import{r as R,e as W,a as _e,b as we}from"../chunks/BYdHoday.js";import{d as ve,a as v,e as le}from"../chunks/DZKNGu60.js";import{b as te}from"../chunks/BLNxmo6t.js";import{p as xe}from"../chunks/CVgGo7LL.js";import{T as Ce}from"../chunks/DTnLv5eS.js";import{b as Se}from"../chunks/JErjH7WM.js";import{r as De}from"../chunks/DtzFuBVJ.js";import{S as ae}from"../chunks/Dv9kDuwq.js";import{g as ge}from"../chunks/DyjPuFJ9.js";import{g as ke}from"../chunks/D6ftfy4_.js";import{M as K}from"../chunks/MFOBLaM2.js";/* empty css                */import{L as Me}from"../chunks/CpRyznCc.js";import"../chunks/CToU6l90.js";import"../chunks/B0XwC4Ot.js";import{s as je}from"../chunks/DT9BoJLz.js";var Ee=fe('<h3 class="text-center">Settings</h3> <article class="select-setting svelte-135qkj9"><div class="select-name svelte-135qkj9">Profile</div> <!> <div class="select-name svelte-135qkj9">Matrix Overlay</div> <!></article> <section class="setting-checks-container svelte-135qkj9"><article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="readonly" tabindex="0"/> <span class="layer-text">Matrix Readonly</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="drawer open" tabindex="0"/> <span class="layer-text">Show Side Capabilities</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="Mapping Mode" tabindex="0"/> <span class="layer-text">Mapping Mode</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">View Technique Comments</span></form></article> <article class="setting"><form class="svelte-135qkj9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">Show Legend</span></form></article> <article class="setting"><div class="select-name svelte-135qkj9">Container Scale<span> </span></div> <div class="size-slider svelte-135qkj9"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article></section>',1);function ze(d,p){var re,ne,se,oe;ce(p,!0);const e=ge(),z=ke();let g=V(null);const P={[K.rootColor]:{name:"multiColor",showLegend:!0},[K.childrenMultiColor]:{name:"childrenMultiColor",showLegend:!1},[K.heatMap]:{name:"heatMap",showLegend:!1},[K["ATT&CK"]]:{name:"Offensive",showLegend:!1}};let l=V(Z(P[(re=e.current)==null?void 0:re.techniqueMappingMode]||null)),u=V(Z(((oe=(ne=e.current)==null?void 0:ne.profiles)==null?void 0:oe[(se=e.current)==null?void 0:se.selectedProfile])||null));const h=(t,o)=>{t.stopPropagation(),e.current[o]=!e.current[o]},X=t=>{var o,G;if(t){const ie=e.current.profiles.findIndex(({id:he})=>he===t.id);e.current.selectedProfile=ie,m(u,((G=(o=e.current)==null?void 0:o.profiles)==null?void 0:G[ie])||null,!0),z.reset()}else e.current.selectedProfile=null,m(u,t,!0)},Y=t=>{if(typeof t=="string")m(l,t,!0);else if(t&&t.name){const{name:o="none",showLegend:G}=t;m(l,t,!0),e.current.techniqueMappingMode=o,e.current.showLegend=G}},Q=t=>{e.current.containerSize=t.target.value/100};var U=Ee(),N=s(de(U),2),$=s(a(N),2);{let t=J(()=>{var o;return(o=e.current)==null?void 0:o.profiles});ae($,{inputClassName:"autocomplete-cursor-select",get items(){return i(t)},readonly:!0,labelFieldName:"name",onChange:o=>X(o),get selectedItem(){return i(u)},set selectedItem(o){m(u,o,!0)}})}var B=s($,4);{let t=J(()=>Object.values(P));ae(B,{inputClassName:"autocomplete-cursor-select",get items(){return i(t)},labelFieldName:"name",readonly:!0,onChange:o=>Y(o),get selectedItem(){return i(l)},set selectedItem(o){m(l,o,!0)}})}r(N);var D=s(N,2),y=a(D),H=a(y),b=a(H);R(b),E(2),r(H),r(y);var _=s(y,2),F=a(_),L=a(F);R(L),E(2),r(F),r(_);var w=s(_,2),q=a(w),O=a(q);R(O),E(2),r(q),r(w);var k=s(w,2),M=a(k),T=a(M);R(T),E(2),r(M),r(k);var x=s(k,2),I=a(x),C=a(I);R(C),E(2),r(I),r(x);var S=s(x,2),A=a(S),n=s(a(A)),c=a(n);r(n),r(A);var f=s(A,2),j=s(a(f),2);te(j,t=>m(g,t),()=>i(g)),E(2),r(f),r(S),r(D),me(t=>{W(b,e.current.isReadonly),W(L,e.current.isDrawerOpen),W(O,e.current.associationMode),W(T,e.current.matrixCommentMode),W(C,e.current.showLegend),ee(c,`(${t??""})`)},[()=>(e.current.containerSize*100).toFixed(0)]),v("click",b,t=>h(t,"isReadonly")),v("click",L,t=>h(t,"isDrawerOpen")),v("click",O,t=>h(t,"associationMode")),v("click",T,t=>h(t,"matrixCommentMode")),v("click",C,t=>h(t,"showLegend")),v("input",j,Q),pe(d,U),ue()}ve(["click","input"]);const Pe=({size:d,domain:p},e="<embed-data>")=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(e,null,2)};

  const post_layers = (event) => {
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

  <svelte:window on:message={post_layers} />

  <main>
    <iframe
      id="iframe"
      bind:this={iframe}
      src="${p}/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${d});
      -moz-transform: scale(${d});
      -o-transform: scale(${d});
      -webkit-transform: scale(${d});
    }
  </style>
  `,Ne=({size:d,domain:p},e="<embed-data>")=>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>D3FEND EMBEDDED</title>

  <script>
    const user_data = ${JSON.stringify(e,null,2)};

    const post_layers = (event) => {
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

      if (event.origin !== "${p}") return;

      post_layers(event);
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${d});
      -moz-transform: scale(${d});
      -o-transform: scale(${d});
      -webkit-transform: scale(${d});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="${p}/profile/"
          title="D3FEND Embedded" />
</main>

</html>
`;var $e=fe('<!> <main class="svelte-yzoejn"><section id="header" class="svelte-yzoejn"><h1 class="svelte-yzoejn"><span class="fancy-font">D3FEND</span> Embeddable Widget</h1> <h6 class="svelte-yzoejn">Use the D3FEND Embeddable Widget to embed an interactive D3FEND Profile in another webpage.</h6></section> <code id="embed-settings" class="svelte-yzoejn"><!></code> <code id="embed-code" class="config-container svelte-yzoejn"><h3 class="svelte-yzoejn">Embed Code <span id="download-options" class="svelte-yzoejn"><!></span></h3> <div id="code-container" class="svelte-yzoejn"><pre class="svelte-yzoejn"> </pre></div> <div id="download-container" class="svelte-yzoejn"><div> </div> <button class="download-code svelte-yzoejn">Download</button> <button class="download-code svelte-yzoejn">Copy to Clipboard</button></div></code> <iframe id="layers-iframe" title="D3FEND Embedded" class="svelte-yzoejn"></iframe> <dialog class="iframe-dialog"><!></dialog></main>',1);function et(d,p){ce(p,!0);const e=ge();let z,g;const P={"Config Settings":{name:"Config Settings",text:"Profile Config Settings",func:()=>i(h)},"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Ne},"Svelte Component":{name:"Svelte Component",download:"D3fendProfile.svelte",text:"Composable Svelte Component runnable in Svelte Application",func:Pe},"Profile data":{name:"Profile data",text:"Export Profile Data",func:()=>JSON.stringify(e.current,null,2).trim()}};let l=V(Z(P["Config Settings"])),u=J(()=>xe.url.origin),h=J(()=>JSON.stringify(e.current,["isReadonly","isDrawerOpen","showLegend","techniqueMappingMode","selectedProfile","matrixSize","containerSize"],2).trim());ye(()=>{e.current.localStorageWarning&&g.showModal()}),Se(()=>{e.current.isReadonly=!1});const X=n=>{var c;if(((c=n.data)==null?void 0:c.call)==="FromParent")try{z.contentWindow.postMessage({call:"toParent",value:e.current},n.origin)}catch(f){console.log(f)}},Y=n=>{n&&n.text&&m(l,n,!0)},Q=async(n,{func:c,download:f})=>{const j=c({size:e.current.containerSize,domain:i(u)},e.current);je(j,f)},U=async(n,{func:c})=>{const f=c({size:e.current.containerSize,domain:i(u)},e.current);try{await navigator.clipboard.writeText(f)}catch(j){console.error("Failed to copy: ",j)}},N=n=>{n.close()};var $=$e();le("message",be,X);var B=de($);Ce(B,{title:"Embedded D3FEND Matrix",og_title:"MITRE Embedded D3FEND Layers",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Capability Layers Analysis."});var D=s(B,2),y=s(a(D),2),H=a(y);ze(H,{}),r(y);var b=s(y,2),_=a(b),F=s(a(_)),L=a(F);{let n=J(()=>Object.values(P));ae(L,{inputClassName:"autocomplete-cursor-select",get items(){return i(n)},labelFieldName:"name",readonly:!0,onChange:c=>Y(c),get selectedItem(){return i(l)},set selectedItem(c){m(l,c,!0)}})}r(F),r(_);var w=s(_,2),q=a(w),O=a(q,!0);r(q),r(w);var k=s(w,2),M=a(k),T=a(M,!0);r(M);var x=s(M,2),I=s(x,2);r(k),r(b);var C=s(b,2);te(C,n=>z=n,()=>z);var S=s(C,2),A=a(S);Me(A,{}),r(S),te(S,n=>g=n,()=>g),r(D),me((n,c)=>{_e(D,`--container-size:${e.current.containerSize??""};`),ee(O,n),ee(T,i(l).text),x.disabled=i(l).name==="Config Settings",I.disabled=i(l).name==="Config Settings",we(C,"src",c)},[()=>i(l).func({size:e.current.containerSize,domain:i(u),data:e.current}),()=>De("/profile/")]),v("click",x,n=>Q(n,i(l))),v("click",I,n=>U(n,i(l))),le("close",S,()=>N(g)),pe(d,$),ue()}ve(["click"]);export{et as component};
