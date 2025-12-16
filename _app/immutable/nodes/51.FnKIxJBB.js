import"../chunks/CWj6FrbW.js";import{o as _e}from"../chunks/D0W6Q17Q.js";import{p as le,aG as K,aH as Q,f as ce,s as o,a as de,d as a,t as me,b as pe,c as ue,a3 as p,a5 as c,aW as J,r as n,g as E,$ as he}from"../chunks/dMGUy5QM.js";import{s as Z}from"../chunks/Ceao5OH1.js";import{e as R,r as q,a as be,b as ye}from"../chunks/DipC33mm.js";import{d as ve,e as ie}from"../chunks/BXLGAO8c.js";import{b as ee}from"../chunks/DxJdRxaS.js";import{p as we}from"../chunks/CSYjFUGx.js";import{T as xe}from"../chunks/BzLSA3Ex.js";import{b as Ce}from"../chunks/HRAv-CVa.js";import{b as Se}from"../chunks/D3X03awB.js";import{S as te}from"../chunks/CQgDPQTh.js";import{g as fe}from"../chunks/DBjr6cq_.js";import{g as De}from"../chunks/DAW809Ky.js";import{M as G}from"../chunks/DDWeMiVb.js";/* empty css                */import{L as Me}from"../chunks/DbyysUnY.js";import{s as ke}from"../chunks/Dcej-Xz1.js";var Ee=(t,r)=>r(t,"isReadonly"),Pe=(t,r)=>r(t,"isDrawerOpen"),$e=(t,r)=>r(t,"associationMode"),Ne=(t,r)=>r(t,"matrixCommentMode"),Fe=(t,r)=>r(t,"showLegend"),Le=ce('<h3 class="text-center">Settings</h3> <article class="select-setting svelte-1d9uoe9"><div class="select-name svelte-1d9uoe9">Profile</div> <!> <div class="select-name svelte-1d9uoe9">Matrix Overlay</div> <!></article> <section class="setting-checks-container svelte-1d9uoe9"><article class="setting"><form class="svelte-1d9uoe9"><input class="check-box" type="checkbox" name="readonly" tabindex="0"/> <span class="layer-text">Matrix Readonly</span></form></article> <article class="setting"><form class="svelte-1d9uoe9"><input class="check-box" type="checkbox" name="drawer open" tabindex="0"/> <span class="layer-text">Show Side Capabilities</span></form></article> <article class="setting"><form class="svelte-1d9uoe9"><input class="check-box" type="checkbox" name="Mapping Mode" tabindex="0"/> <span class="layer-text">Mapping Mode</span></form></article> <article class="setting"><form class="svelte-1d9uoe9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">View Technique Comments</span></form></article> <article class="setting"><form class="svelte-1d9uoe9"><input class="check-box" type="checkbox" name="show legend" tabindex="0"/> <span class="layer-text">Show Legend</span></form></article> <article class="setting"><div class="select-name svelte-1d9uoe9">Container Scale<span> </span></div> <div class="size-slider svelte-1d9uoe9"><span>60</span> <input type="range" min="60" max="99" value="80" class="slider" id="myRange"/> <span>100</span></div></article></section>',1);function Te(t,r){var ae,ne,re,se;le(r,!0);const e=fe(),P=De();let f=K(null);const $={[G.rootColor]:{name:"multiColor",showLegend:!0},[G.childrenMultiColor]:{name:"childrenMultiColor",showLegend:!1},[G.heatMap]:{name:"heatMap",showLegend:!1},[G["ATT&CK"]]:{name:"ATT&CK",showLegend:!1}};let d=K(Q($[(ae=e.current)==null?void 0:ae.techniqueMappingMode]||null)),u=K(Q(((se=(ne=e.current)==null?void 0:ne.profiles)==null?void 0:se[(re=e.current)==null?void 0:re.selectedProfile])||null));const g=(s,l)=>{s.stopPropagation(),e.current[l]=!e.current[l]},V=s=>{var l,B;if(s){const oe=e.current.profiles.findIndex(({id:ge})=>ge===s.id);e.current.selectedProfile=oe,p(u,((B=(l=e.current)==null?void 0:l.profiles)==null?void 0:B[oe])||null,!0),P.reset()}else e.current.selectedProfile=null,p(u,s,!0)},X=s=>{if(typeof s=="string")p(d,s,!0);else if(s&&s.name){const{name:l="none",showLegend:B}=s;p(d,s,!0),e.current.techniqueMappingMode=l,e.current.showLegend=B}},Y=s=>{e.current.containerSize=s.target.value/100};var j=Le(),N=o(de(j),2),F=o(a(N),2);{let s=J(()=>{var l;return(l=e.current)==null?void 0:l.profiles});te(F,{inputClassName:"autocomplete-cursor-select",get items(){return c(s)},readonly:!0,labelFieldName:"name",onChange:l=>V(l),get selectedItem(){return c(u)},set selectedItem(l){p(u,l,!0)}})}var H=o(F,4);{let s=J(()=>Object.values($));te(H,{inputClassName:"autocomplete-cursor-select",get items(){return c(s)},labelFieldName:"name",readonly:!0,onChange:l=>X(l),get selectedItem(){return c(d)},set selectedItem(l){p(d,l,!0)}})}n(N);var S=o(N,2),_=a(S),U=a(_),h=a(U);q(h),h.__click=[Ee,g],E(2),n(U),n(_);var b=o(_,2),L=a(b),T=a(L);q(T),T.__click=[Pe,g],E(2),n(L),n(b);var y=o(b,2),O=a(y),I=a(O);q(I),I.__click=[$e,g],E(2),n(O),n(y);var D=o(y,2),M=a(D),z=a(M);q(z),z.__click=[Ne,g],E(2),n(M),n(D);var w=o(D,2),W=a(w),x=a(W);q(x),x.__click=[Fe,g],E(2),n(W),n(w);var C=o(w,2),A=a(C),i=o(a(A)),m=a(i);n(i),n(A);var v=o(A,2),k=o(a(v),2);k.__input=Y,ee(k,s=>p(f,s),()=>c(f)),E(2),n(v),n(C),n(S),me(s=>{R(h,e.current.isReadonly),R(T,e.current.isDrawerOpen),R(I,e.current.associationMode),R(z,e.current.matrixCommentMode),R(x,e.current.showLegend),Z(m,`(${s??""})`)},[()=>(e.current.containerSize*100).toFixed(0)]),pe(t,j),ue()}ve(["click","input"]);const Oe=({size:t,domain:r},e="<embed-data>")=>`
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
      src="${r}/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${t});
      -moz-transform: scale(${t});
      -o-transform: scale(${t});
      -webkit-transform: scale(${t});
    }
  </style>
  `,Ie=({size:t,domain:r},e="<embed-data>")=>`
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

      if (event.origin !== "${r}") return;

      post_layers(event);
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${t});
      -moz-transform: scale(${t});
      -o-transform: scale(${t});
      -webkit-transform: scale(${t});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="${r}/profile/"
          title="D3FEND Embedded" />
</main>

</html>
`;var ze=(t,r,e)=>r(t,c(e)),We=(t,r,e)=>r(t,c(e)),Ae=ce('<!> <main class="svelte-a38n6n"><section id="header" class="svelte-a38n6n"><h1 class="svelte-a38n6n"><span class="fancy-font">D3FEND</span> Embeddable Widget</h1> <h6 class="svelte-a38n6n">Use the D3FEND Embeddable Widget to embed an interactive D3FEND Profile in another webpage.</h6></section> <code id="embed-settings" class="svelte-a38n6n"><!></code> <code id="embed-code" class="config-container svelte-a38n6n"><h3 class="svelte-a38n6n">Embed Code <span id="download-options" class="svelte-a38n6n"><!></span></h3> <div id="code-container" class="svelte-a38n6n"><pre class="svelte-a38n6n"> </pre></div> <div id="download-container" class="svelte-a38n6n"><div> </div> <button class="download-code svelte-a38n6n">Download</button> <button class="download-code svelte-a38n6n">Copy to Clipboard</button></div></code> <iframe id="layers-iframe" title="D3FEND Embedded" class="svelte-a38n6n"></iframe> <dialog class="iframe-dialog"><!></dialog></main>',1);function rt(t,r){le(r,!0);const e=fe();let P,f;const $={"Config Settings":{name:"Config Settings",text:"Profile Config Settings",func:()=>c(g)},"index.html":{name:"index.html",download:"index.html",text:"Complete HTML/Javascript runnable script",func:Ie},"Svelte Component":{name:"Svelte Component",download:"D3fendProfile.svelte",text:"Composable Svelte Component runnable in Svelte Application",func:Oe},"Profile data":{name:"Profile data",text:"Export Profile Data",func:()=>JSON.stringify(e.current,null,2).trim()}};let d=K(Q($["Config Settings"])),u=J(()=>we.url.origin),g=J(()=>JSON.stringify(e.current,["isReadonly","isDrawerOpen","showLegend","techniqueMappingMode","selectedProfile","matrixSize","containerSize"],2).trim());_e(()=>{e.current.localStorageWarning&&f.showModal()}),Ce(()=>{e.current.isReadonly=!1});const V=i=>{var m;if(((m=i.data)==null?void 0:m.call)==="FromParent")try{P.contentWindow.postMessage({call:"toParent",value:e.current},i.origin)}catch(v){console.log(v)}},X=i=>{i&&i.text&&p(d,i,!0)},Y=async(i,{func:m,download:v})=>{const k=m({size:e.current.containerSize,domain:c(u)},e.current);ke(k,v)},j=async(i,{func:m})=>{const v=m({size:e.current.containerSize,domain:c(u)},e.current);try{await navigator.clipboard.writeText(v)}catch(k){console.error("Failed to copy: ",k)}},N=i=>{i.close()};var F=Ae();ie("message",he,V);var H=de(F);xe(H,{title:"Embedded D3FEND Matrix",og_title:"MITRE Embedded D3FEND Layers",og_type:"website",og_url:"https://d3fend.mitre.org/",og_image:"https://d3fend.mitre.org/img/d3fend-og.png",og_description:"D3FEND Capability Layers Analysis."});var S=o(H,2),_=o(a(S),2),U=a(_);Te(U,{}),n(_);var h=o(_,2),b=a(h),L=o(a(b)),T=a(L);{let i=J(()=>Object.values($));te(T,{inputClassName:"autocomplete-cursor-select",get items(){return c(i)},labelFieldName:"name",readonly:!0,onChange:m=>X(m),get selectedItem(){return c(d)},set selectedItem(m){p(d,m,!0)}})}n(L),n(b);var y=o(b,2),O=a(y),I=a(O,!0);n(O),n(y);var D=o(y,2),M=a(D),z=a(M,!0);n(M);var w=o(M,2);w.__click=[ze,Y,d];var W=o(w,2);W.__click=[We,j,d],n(D),n(h);var x=o(h,2);ee(x,i=>P=i,()=>P);var C=o(x,2),A=a(C);Me(A,{}),n(C),ee(C,i=>f=i,()=>f),n(S),me(i=>{be(S,`--container-size:${e.current.containerSize??""};`),Z(I,i),Z(z,c(d).text),w.disabled=c(d).name==="Config Settings",W.disabled=c(d).name==="Config Settings",ye(x,"src",`${Se}/profile/`)},[()=>c(d).func({size:e.current.containerSize,domain:c(u),data:e.current})]),ie("close",C,()=>N(f)),pe(t,F),ue()}ve(["click"]);export{rt as component};
