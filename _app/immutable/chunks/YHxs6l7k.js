import"./CWj6FrbW.js";import"./CpdYkqxW.js";import{f as c,s as d,a as h,d as p,r as m,b as u}from"./dMGUy5QM.js";import{l as g,b as f}from"./BHu5K3zf.js";import{B as y}from"./D7Lkm_OI.js";import{_ as k}from"./BtEllFr-.js";const o={title:"Threat Modeling with the D3FEND Ontology & D3FEND CAD",description:"A simple three-step process to model your system, threats, and design countermeasures.",tags:"post, cad, systems_engineering, threat_modeling, how_to",category:"General",publish_date:"Dec 16, 2025 00:00:00",last_modified:"Dec 16, 2025 00:00:00",authors:"Peter Kaloroumakis|@netfl0, Paolo Tolentino|@handle",version:"1.3.0",target_audience:"Cyber Threat Intel Analysts, Incident Responders, Model-based Systems Engineers",layout:"d3fend_post"},{title:$,description:E,tags:N,category:T,publish_date:F,last_modified:q,authors:x,version:z,target_audience:C,layout:O}=o;var w=c('<h2>Background</h2> <p>There is no shortage of methodologies, mental models, frameworks, or tools to help model threats against systems. Some focus on physical threats, some on cyber threats. Additionally, we see significant diversity in the individuals analyzing threats against systems, each with their own somewhat unique approach.</p> <p>We believe the D3FEND Ontology can unify these different contexts for threat modeling activities and normalize the elements represented in various models and tools. You cannot compare one threat model to another if none of their elements share a common ontological foundation. Our goal is that the D3FEND Ontology works with existing methodologies and tools to help unify the content being produced.</p> <p>While our work toward interoperability continues, we see D3FEND CAD users using CAD to build threat models for systems. Therefore we are providing a simple methodology skeleton which walks you through basic threat modeling with D3FEND.</p> <p>Thus, whether you are a security architect, systems engineer, IT security professional, or dedicated threat modeling professional, we hope you can see where your current methodology would plug into this simple process.</p> <h2>Basic Threat Modeling Process</h2> <p>We use a simple three-step process with the D3FEND Ontology to model a system, generate threat scenarios, and begin designing countermeasures.</p> <p>In the diagram below, “link to” labels indicate where one modeled element (event, artifact, action, etc.) should be connected to another along a path in your D3FEND CAD graph.</p> <h4>Step 1. Model what is important</h4> <p>Model the important technology and associated processes in your system in the context of your organization’s mission (corresponding to Steps 1.1 and 1.2 in the diagram below).</p> <blockquote><p><em>Note: there are many different methods for identifying a starting point for which technology systems are important; we are not prescribing a particular process for that.</em></p></blockquote> <h4>Step 2. Model the problems</h4> <p>Select and model an attacker prototype and their specific access to your system’s interfaces and connectivity to the artifacts identified in step one. Depending on your perspective, you might first sketch the attacker’s kill chain (Step 2.3) and then connect it to system artifacts (Step 2.2), or start from the artifacts and work toward a kill chain; the key is to link them along a realistic path.</p> <blockquote><p><em>Note: the goal here is to identify realistic attacker pathways through your system, and how they can connect to and potentially negatively affect the technology and processes modeled in Step 1.</em></p></blockquote> <h4>Step 3. Improve your system design</h4> <p>Select and model security countermeasures which apply to the chain (information pathway) of artifacts identified in steps one through two.</p> <blockquote><p><em>Note: finally, with realistic graphs of artifact chains, design and prioritize your countermeasures to defend your mission-critical processes and technologies from attack.</em></p></blockquote> <div class="mermaid-process text-center svelte-4q30pg"><!></div>',1);function I(a,s){const n=g(s,["children","$$slots","$$events","$$legacy"]);let i=`%%{init: { "theme": "neutral", "themeVariables": { "fontSize": "14px", "labelFontSize": "8px" },
                        "flowchart": { "subGraphTitleMargin": { "top": 20, "bottom": 30 } } } }%%

flowchart TD;
	subgraph step1[Step 1
            Model what is important]
		n1.1["1.1
            Model operational/business events
            (Operational Events)"] -->
        |"link to"| n1.2["1.2 (optional)
            Model supporting technology/system events. (Digital Events)"] -->
        |"link to"| n1.3["1.3
            Model supporting artifact chain
            (Artifacts)"]
        ;
	end
    step1 -->|"proceed"| step2;
    subgraph step2["Step 2
            Model the problem"]
		n2.1["2.1
            Model attacker prototype
            (Agents)"] -->
        |"link to"| n2.2["2.2
            Model attacker system access
            (Artifacts)"] -->
        |"link to"| n2.3["2.3
            Model attacker kill-chain
            (Attack Actions)"] -->
        |"link to"| n2.4["2.4 (optional)
            Model vulnerability dependencies for attack actions
            (Vulnerabilities)"] -->
        |"link to"| n2.5["2.5
            Link attacker artifact chain to artifact chain to the operational artifact chain from step 1.3
            (Artifacts)"]
        ;
	end
    subgraph step3["Step 3
            Model the solution"]
		n3.1["3.1
            Model Countermeasures starting closest to attacker along artifact chain (Defensive Actions)"] -->
        |"link to"| n3.2["3.2
            Create more detailed artifacts as necessary
            (Artifacts)"] -->
        n3.3["3.3
            Prioritize countermeasure implementation with your preferred process"]
        ;
	end
    step2 -->|"proceed"| step3;

    class n1.1 event-node
    class n1.2 event-node
    class n1.3 artifact-node
    class n2.1 agent-node
    class n2.2 artifact-node
    class n2.2.1 condition-node
    class n2.3 attack-node
    class n2.4 vulnerability-node
    class n2.5 artifact-node
    class n3.1 countermeasure-node
    class n3.2 artifact-node

`;y(a,f(()=>n,()=>o,{children:(r,b)=>{var e=w(),t=d(h(e),34),l=p(t);k(l,{mermaid_text:i}),m(t),u(r,e)},$$slots:{default:!0}}))}export{I as default,o as metadata};
