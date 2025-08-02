import{b as L}from"../chunks/Bj-k5Abv.js";import{s as ie,d as o,i as r,b as T,v as y,g as u,c as f,w as C,e as B,j as d,h as p,n as Y,f as V,t as X}from"../chunks/cxan7wOg.js";import{S as se,i as oe,d as N,t as P,a as F,m as I,c as S,b as R}from"../chunks/CkylGIUQ.js";import{T as le}from"../chunks/I0tJ8mvG.js";import{G as re}from"../chunks/Dyk00VT0.js";import{G as ce}from"../chunks/qu8NB47l.js";import{A as me}from"../chunks/TK7MvqYL.js";import{T as fe}from"../chunks/qRhcbVRZ.js";/* empty css                */import{S as pe}from"../chunks/DNef3Dqf.js";async function ue({params:m,fetch:t}){return await(await t(`${L}/api/taxonomies/d3f:AnalyticTechnique.json`)).json()}const Ne=Object.freeze(Object.defineProperty({__proto__:null,load:ue},Symbol.toStringTag,{value:"Module"}));function de(m){let t,n,a="Characterizing D3FEND Techniques with Analytic Techniques ",c;return{c(){t=X(`flowchart TD
            subgraph TITLE[`),n=p("b"),n.textContent=a,c=X(`]
                direction LR
                subgraph Capabilities Mapped to D3FEND Techniques
                direction LR
                P1["Cyber capability/product X"] -->|solves domain problem| DP1["Network Traffic Analysis"]
                P1 -->|solves domain problem| DP2["User Behavior Analysis"]
                end

                subgraph Specific Analtyic Techniques Used by Implementation
                direction LR
                DP1["File Analysis"] -->|may be implemented with| AT1["Decision Trees"]
                DP1 -->|may be implemented with| AT2["String Pattern Matching"]
                DP2["Network Traffic Analysis"] -->|may be implemented with| AT3["Regression Analysis"]
                AT1 -->|is a | CA["Analytic Technique"]
                AT2 -->|is a | CA
                AT3 -->|is a | CA
                end
            end


            class DP1 DefensiveTechniqueNode
            click DP1 href "technique/d3f:FileAnalysis"
            class DP2 DefensiveTechniqueNode
            click DP2 href "technique/d4f:NetworkTrafficAnalysis"`)},l(s){t=V(s,`flowchart TD
            subgraph TITLE[`),n=f(s,"B",{"data-svelte-h":!0}),C(n)!=="svelte-1s2xcu5"&&(n.textContent=a),c=V(s,`]
                direction LR
                subgraph Capabilities Mapped to D3FEND Techniques
                direction LR
                P1["Cyber capability/product X"] -->|solves domain problem| DP1["Network Traffic Analysis"]
                P1 -->|solves domain problem| DP2["User Behavior Analysis"]
                end

                subgraph Specific Analtyic Techniques Used by Implementation
                direction LR
                DP1["File Analysis"] -->|may be implemented with| AT1["Decision Trees"]
                DP1 -->|may be implemented with| AT2["String Pattern Matching"]
                DP2["Network Traffic Analysis"] -->|may be implemented with| AT3["Regression Analysis"]
                AT1 -->|is a | CA["Analytic Technique"]
                AT2 -->|is a | CA
                AT3 -->|is a | CA
                end
            end


            class DP1 DefensiveTechniqueNode
            click DP1 href "technique/d3f:FileAnalysis"
            class DP2 DefensiveTechniqueNode
            click DP2 href "technique/d4f:NetworkTrafficAnalysis"`)},m(s,l){r(s,t,l),r(s,n,l),r(s,c,l)},p:Y,d(s){s&&(o(t),o(n),o(c))}}}function he(m){let t,n,a="contributions",c;return{c(){t=X("This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),n=p("a"),n.textContent=a,c=X(" from the community."),this.h()},l(s){t=V(s,"This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),n=f(s,"A",{href:!0,"data-svelte-h":!0}),C(n)!=="svelte-3ipaze"&&(n.textContent=a),c=V(s," from the community."),this.h()},h(){y(n,"href",L+"/contribute")},m(s,l){r(s,t,l),r(s,n,l),r(s,c,l)},p:Y,d(s){s&&(o(t),o(n),o(c))}}}function ye(m){let t,n;return t=new le({props:{g:m[0],root_node_id:ae,max_depth:ve,row_depth:ge,collapsable:!1,subject_base_url:m[1]}}),{c(){R(t.$$.fragment)},l(a){S(t.$$.fragment,a)},m(a,c){I(t,a,c),n=!0},p:Y,i(a){n||(F(t.$$.fragment,a),n=!0)},o(a){P(t.$$.fragment,a),n=!1},d(a){N(t,a)}}}function be(m){let t,n,a,c='<span class="fancy-font">D3FEND ACF</span>',s,l,$,Z=`<h5 class="text-center"><span class="fancy-font"><i>Analytic Characterization Framework</i></span></h5> <div class="text-center logos svelte-13ynke6"><div class="flex flex-center"><div class="flex-column svelte-13ynke6"><a href="https://ac.cto.mil/"><img class="sponsor_logo svelte-13ynke6" alt="USD R&amp;E logo" src="${L}/img/usdre.png"/></a></div> <div class="flex-column svelte-13ynke6"><a href="https://ac.cto.mil/dte/about-dtea/"><img class="sponsor_logo svelte-13ynke6" alt="USD R&amp;E logo" src="${L}/img/dtea.png"/></a></div></div> <br/> <div class=""><small>This extension to D3FEND is funded by Office of the Undersecretary of Defense (Research and Engineering), 
                Developmental Test, Evaluation, and Assessments (DTE&amp;A)</small></div></div> <br/> <br/> <p>What is an analytic? In technology, this is a term often used, but not often defined. For our purposes we’ll use the Cambridge Dictionary’s definition for the term <b>analytic</b>:</p> <blockquote>&quot;A process in which a computer examines information using mathematical methods in order to find useful patterns.&quot;
            <cite><a href="https://dictionary.cambridge.org/us/dictionary/english/analytics">Cambridge Dictionary</a></cite></blockquote> <p>Technical capabilities often solve a set of domain problems by performing a set of specific technical functions. With D3FEND, we catalog these discreet functions as they pertain to cybersecurity, we call these D3FEND Techniques. Capability developers use analytics to make sense of or act on the data they are processing. Their implementations can be simple conditional logic or matching, or something more sophisticated like in model-driven approaches. Sometimes simple is better than complex. Other times, you need a complex approach to solve a complex problem. It is always situation dependent.</p> <p>The <b class="italic">D3FEND Analytic Characterization Framework</b> provides the language necessary to describe the specific technical 
        implementation of a D3FEND technique or even abstract method.</p>`,J,k,D,b,K,A,ee="Essential ACF Concepts and Relationships",Q,_,te=`<p>The above diagram depicts our intended use of this framework. These analytic techniques are used to characterize the implementation of 
        D3FEND techniques. We envision multiple use cases for this extension to D3FEND.</p> <p>First, we seek to advance the state of the art in testing knowledge management for verification (does the capability meet its specification) and validation (is the capability fit for operational purpose). A knowledgebase is necessary to drive consistency across a community of engineers who design and execute tests. We have not found a sufficient taxonomy of these mathematical methods or &quot;Analytic Techniques&quot;.</p> <p>Another use case is supporting analysis of alternatives. Accurately characterizing a capability&#39;s domain function and implementation logic ensures you&#39;re making valid comparisons between capabilities. 
        It also can also ensure that a capabilty is a good match for the particular situation and intended problem set.</p> <p></p>`,M,z,H,v,j,h,ne="Analytic Technique Taxonomy",O,U,G,x,g,W;return t=new fe({props:{title:`D3FEND ${m[0].i(ae)["rdfs:label"]} Taxonomy`}}),b=new re({props:{$$slots:{default:[de]},$$scope:{ctx:m}}}),v=new me({props:{$$slots:{default:[he]},$$scope:{ctx:m}}}),g=new pe({props:{$$slots:{default:[ye]},$$scope:{ctx:m}}}),{c(){R(t.$$.fragment),n=d(),a=p("div"),a.innerHTML=c,s=d(),l=p("div"),$=p("section"),$.innerHTML=Z,J=d(),k=p("div"),D=p("figure"),R(b.$$.fragment),K=d(),A=p("figcaption"),A.textContent=ee,Q=d(),_=p("section"),_.innerHTML=te,M=d(),z=p("br"),H=d(),R(v.$$.fragment),j=d(),h=p("h1"),h.textContent=ne,O=d(),U=p("br"),G=d(),x=p("section"),R(g.$$.fragment),this.h()},l(e){S(t.$$.fragment,e),n=u(e),a=f(e,"DIV",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-a7ce36"&&(a.innerHTML=c),s=u(e),l=f(e,"DIV",{});var i=B(l);$=f(i,"SECTION",{class:!0,"data-svelte-h":!0}),C($)!=="svelte-9ipray"&&($.innerHTML=Z),J=u(i),k=f(i,"DIV",{class:!0});var q=B(k);D=f(q,"FIGURE",{});var w=B(D);S(b.$$.fragment,w),K=u(w),A=f(w,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),C(A)!=="svelte-1rk40wb"&&(A.textContent=ee),w.forEach(o),q.forEach(o),Q=u(i),_=f(i,"SECTION",{class:!0,"data-svelte-h":!0}),C(_)!=="svelte-r752xk"&&(_.innerHTML=te),i.forEach(o),M=u(e),z=f(e,"BR",{}),H=u(e),S(v.$$.fragment,e),j=u(e),h=f(e,"H1",{id:!0,class:!0,"data-svelte-h":!0}),C(h)!=="svelte-1h4jsdk"&&(h.textContent=ne),O=u(e),U=f(e,"BR",{}),G=u(e),x=f(e,"SECTION",{class:!0});var E=B(x);S(g.$$.fragment,E),E.forEach(o),this.h()},h(){y(a,"class","logo text-center"),y($,"class","content svelte-13ynke6"),y(A,"class","s-PalH6l0zoH1z"),y(k,"class","text-center center"),y(_,"class","content svelte-13ynke6"),y(h,"id","acf"),y(h,"class","text-center"),y(x,"class","svelte-13ynke6")},m(e,i){I(t,e,i),r(e,n,i),r(e,a,i),r(e,s,i),r(e,l,i),T(l,$),T(l,J),T(l,k),T(k,D),I(b,D,null),T(D,K),T(D,A),T(l,Q),T(l,_),r(e,M,i),r(e,z,i),r(e,H,i),I(v,e,i),r(e,j,i),r(e,h,i),r(e,O,i),r(e,U,i),r(e,G,i),r(e,x,i),I(g,x,null),W=!0},p(e,[i]){const q={};i&8&&(q.$$scope={dirty:i,ctx:e}),b.$set(q);const w={};i&8&&(w.$$scope={dirty:i,ctx:e}),v.$set(w);const E={};i&8&&(E.$$scope={dirty:i,ctx:e}),g.$set(E)},i(e){W||(F(t.$$.fragment,e),F(b.$$.fragment,e),F(v.$$.fragment,e),F(g.$$.fragment,e),W=!0)},o(e){P(t.$$.fragment,e),P(b.$$.fragment,e),P(v.$$.fragment,e),P(g.$$.fragment,e),W=!1},d(e){e&&(o(n),o(a),o(s),o(l),o(M),o(z),o(H),o(j),o(h),o(O),o(U),o(G),o(x)),N(t,e),N(b),N(v,e),N(g)}}}let ve=9,ge=1,ae="d3f:AnalyticTechnique";function Te(m,t,n){let{data:a}=t,c=new ce(a,{index:!0}),s=`${L}/acf/technique`;return m.$$set=l=>{"data"in l&&n(2,a=l.data)},[c,s,a]}class Pe extends se{constructor(t){super(),oe(this,t,Te,be,ie,{data:2})}}export{Pe as component,Ne as universal};
