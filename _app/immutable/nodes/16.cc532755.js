import{s as ae,a as u,f as m,c as d,g as f,F as C,h as W,d as o,j as y,i as l,x as T,l as B,m as V,y as Q}from"../chunks/scheduler.50831561.js";import{S as ie,i as se,b as F,d as N,m as P,a as I,t as S,e as R}from"../chunks/index.24431cc3.js";import{T as oe}from"../chunks/TaxoMatrix.6afaf9b3.js";import{G as le}from"../chunks/_Graph.6383555f.js";import{G as re}from"../chunks/lib.9e57a3f1.js";import{A as ce}from"../chunks/Alert.d9b74077.js";import{T as me}from"../chunks/Title.28d88b77.js";/* empty css                                                                 */import{S as fe}from"../chunks/ScrollFrame.71b93efe.js";async function pe({params:p,fetch:t}){return await(await t("/api/taxonomies/d3f:AnalyticTechnique.json")).json()}const Ee=Object.freeze(Object.defineProperty({__proto__:null,load:pe},Symbol.toStringTag,{value:"Module"}));function ue(p){let t,n,a="Characterizing D3FEND Techniques with Analytic Techniques ",c;return{c(){t=B(`flowchart TD
            subgraph TITLE[`),n=m("b"),n.textContent=a,c=B(`]
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
            click DP2 href "technique/d4f:NetworkTrafficAnalysis"`)},m(s,r){l(s,t,r),l(s,n,r),l(s,c,r)},p:Q,d(s){s&&(o(t),o(n),o(c))}}}function de(p){let t,n,a="contributions",c;return{c(){t=B("This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),n=m("a"),n.textContent=a,c=B(" from the community."),this.h()},l(s){t=V(s,"This is an alpha-level taxonomy and framework within D3FEND. We are releasing it to request feedback and "),n=f(s,"A",{href:!0,"data-svelte-h":!0}),C(n)!=="svelte-ostqjr"&&(n.textContent=a),c=V(s," from the community."),this.h()},h(){y(n,"href","/contribute")},m(s,r){l(s,t,r),l(s,n,r),l(s,c,r)},p:Q,d(s){s&&(o(t),o(n),o(c))}}}function he(p){let t,n;return t=new oe({props:{g:p[0],root_node_id:ne,max_depth:ve,row_depth:ge,collapsable:!1,subject_base_url:be}}),{c(){F(t.$$.fragment)},l(a){N(t.$$.fragment,a)},m(a,c){P(t,a,c),n=!0},p:Q,i(a){n||(I(t.$$.fragment,a),n=!0)},o(a){S(t.$$.fragment,a),n=!1},d(a){R(t,a)}}}function ye(p){let t,n,a,c='<span class="fancy-font">D3FEND ACF</span>',s,r,D,Y=`<h5 class="text-center"><span class="fancy-font"><i>Analytic Characterization Framework</i></span></h5> <div class="text-center logos svelte-13ynke6"><div class="flex flex-center"><div class="flex-column svelte-13ynke6"><a href="https://ac.cto.mil/"><img class="sponsor_logo svelte-13ynke6" alt="USD R&amp;E logo" src="/img/usdre.png"/></a></div> <div class="flex-column svelte-13ynke6"><a href="https://ac.cto.mil/dte/about-dtea/"><img class="sponsor_logo svelte-13ynke6" alt="USD R&amp;E logo" src="/img/dtea.png"/></a></div></div> <br/> <div class=""><small>This extension to D3FEND is funded by Office of the Undersecretary of Defense (Research and Engineering), 
                Developmental Test, Evaluation, and Assessments (DTE&amp;A)</small></div></div> <br/> <br/> <p>What is an analytic? In technology, this is a term often used, but not often defined. For our purposes we’ll use the Cambridge Dictionary’s definition for the term <b>analytic</b>:</p> <blockquote>&quot;A process in which a computer examines information using mathematical methods in order to find useful patterns.&quot;
            <cite><a href="https://dictionary.cambridge.org/us/dictionary/english/analytics">Cambridge Dictionary</a></cite></blockquote> <p>Technical capabilities often solve a set of domain problems by performing a set of specific technical functions. With D3FEND, we catalog these discreet functions as they pertain to cybersecurity, we call these D3FEND Techniques. Capability developers use analytics to make sense of or act on the data they are processing. Their implementations can be simple conditional logic or matching, or something more sophisticated like in model-driven approaches. Sometimes simple is better than complex. Other times, you need a complex approach to solve a complex problem. It is always situation dependent.</p> <p>The <b class="italic">D3FEND Analytic Characterization Framework</b> provides the language necessary to describe the specific technical 
        implementation of a D3FEND technique or even abstract method.</p>`,X,k,$,v,J,A,Z="Essential ACF Concepts and Relationships",K,_,ee=`<p>The above diagram depicts our intended use of this framework. These analytic techniques are used to characterize the implementation of 
        D3FEND techniques. We envision multiple use cases for this extension to D3FEND.</p> <p>First, we seek to advance the state of the art in testing knowledge management for verification (does the capability meet its specification) and validation (is the capability fit for operational purpose). A knowledgebase is necessary to drive consistency across a community of engineers who design and execute tests. We have not found a sufficient taxonomy of these mathematical methods or &quot;Analytic Techniques&quot;.</p> <p>Another use case is supporting analysis of alternatives. Accurately characterizing a capability&#39;s domain function and implementation logic ensures you&#39;re making valid comparisons between capabilities. 
        It also can also ensure that a capabilty is a good match for the particular situation and intended problem set.</p> <p></p>`,L,M,z,g,H,h,te="Analytic Technique Taxonomy",j,O,U,x,b,G;return t=new me({props:{title:`D3FEND ${p[0].i(ne)["rdfs:label"]} Taxonomy`}}),v=new le({props:{$$slots:{default:[ue]},$$scope:{ctx:p}}}),g=new ce({props:{$$slots:{default:[de]},$$scope:{ctx:p}}}),b=new fe({props:{$$slots:{default:[he]},$$scope:{ctx:p}}}),{c(){F(t.$$.fragment),n=u(),a=m("div"),a.innerHTML=c,s=u(),r=m("div"),D=m("section"),D.innerHTML=Y,X=u(),k=m("div"),$=m("figure"),F(v.$$.fragment),J=u(),A=m("figcaption"),A.textContent=Z,K=u(),_=m("section"),_.innerHTML=ee,L=u(),M=m("br"),z=u(),F(g.$$.fragment),H=u(),h=m("h1"),h.textContent=te,j=u(),O=m("br"),U=u(),x=m("section"),F(b.$$.fragment),this.h()},l(e){N(t.$$.fragment,e),n=d(e),a=f(e,"DIV",{class:!0,"data-svelte-h":!0}),C(a)!=="svelte-a7ce36"&&(a.innerHTML=c),s=d(e),r=f(e,"DIV",{});var i=W(r);D=f(i,"SECTION",{class:!0,"data-svelte-h":!0}),C(D)!=="svelte-9vzt6g"&&(D.innerHTML=Y),X=d(i),k=f(i,"DIV",{class:!0});var q=W(k);$=f(q,"FIGURE",{});var w=W($);N(v.$$.fragment,w),J=d(w),A=f(w,"FIGCAPTION",{class:!0,"data-svelte-h":!0}),C(A)!=="svelte-1rk40wb"&&(A.textContent=Z),w.forEach(o),q.forEach(o),K=d(i),_=f(i,"SECTION",{class:!0,"data-svelte-h":!0}),C(_)!=="svelte-r752xk"&&(_.innerHTML=ee),i.forEach(o),L=d(e),M=f(e,"BR",{}),z=d(e),N(g.$$.fragment,e),H=d(e),h=f(e,"H1",{id:!0,class:!0,"data-svelte-h":!0}),C(h)!=="svelte-1h4jsdk"&&(h.textContent=te),j=d(e),O=f(e,"BR",{}),U=d(e),x=f(e,"SECTION",{class:!0});var E=W(x);N(b.$$.fragment,E),E.forEach(o),this.h()},h(){y(a,"class","logo text-center"),y(D,"class","content svelte-13ynke6"),y(A,"class","s-PalH6l0zoH1z"),y(k,"class","text-center center"),y(_,"class","content svelte-13ynke6"),y(h,"id","acf"),y(h,"class","text-center"),y(x,"class","svelte-13ynke6")},m(e,i){P(t,e,i),l(e,n,i),l(e,a,i),l(e,s,i),l(e,r,i),T(r,D),T(r,X),T(r,k),T(k,$),P(v,$,null),T($,J),T($,A),T(r,K),T(r,_),l(e,L,i),l(e,M,i),l(e,z,i),P(g,e,i),l(e,H,i),l(e,h,i),l(e,j,i),l(e,O,i),l(e,U,i),l(e,x,i),P(b,x,null),G=!0},p(e,[i]){const q={};i&4&&(q.$$scope={dirty:i,ctx:e}),v.$set(q);const w={};i&4&&(w.$$scope={dirty:i,ctx:e}),g.$set(w);const E={};i&4&&(E.$$scope={dirty:i,ctx:e}),b.$set(E)},i(e){G||(I(t.$$.fragment,e),I(v.$$.fragment,e),I(g.$$.fragment,e),I(b.$$.fragment,e),G=!0)},o(e){S(t.$$.fragment,e),S(v.$$.fragment,e),S(g.$$.fragment,e),S(b.$$.fragment,e),G=!1},d(e){e&&(o(n),o(a),o(s),o(r),o(L),o(M),o(z),o(H),o(h),o(j),o(O),o(U),o(x)),R(t,e),R(v),R(g,e),R(b)}}}let ve=9,ge=1,ne="d3f:AnalyticTechnique",be="/acf/technique";function Te(p,t,n){let{data:a}=t,c=new re(a,{index:!0});return p.$$set=s=>{"data"in s&&n(1,a=s.data)},[c,a]}class Fe extends ie{constructor(t){super(),se(this,t,Te,ye,ae,{data:1})}}export{Fe as component,Ee as universal};
