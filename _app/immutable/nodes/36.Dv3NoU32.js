import"../chunks/Bzak7iHL.js";import"../chunks/z-zb-vOA.js";import{p as Uo,f as Vo,s as a,c as e,b0 as i,r as t,A as c,t as v,a as g,b as zo,a8 as Ho,d as Vt}from"../chunks/C5fqCc9O.js";import{s as Wo}from"../chunks/B0SftDD_.js";import{i as jo}from"../chunks/B7bOfw0f.js";import{e as Bo,i as Ko}from"../chunks/DzcpJ-1p.js";import{b as o}from"../chunks/BYdHoday.js";import{i as Go}from"../chunks/C-xjQbAt.js";import{r}from"../chunks/DDYLM6Yj.js";/* empty css                */import{T as $o}from"../chunks/DTnLv5eS.js";import{C as Qo}from"../chunks/CRELrDvo.js";var ra=Vt('<img alt="CAD Model" loading="lazy"/>'),Jo=Vt('<article class="card"><a><div class="media"><!></div> <h6 class="title"> </h6></a></article>'),Xo=Vt(`<!> <section class="content"><style>h1 {
      background-image: url("../../img/domain/ot/seven.jpg");
      background-size: contain;
      background-position: top;
      background-repeat: no-repeat;
      height: 500px;
      color: var(--d3fend-text-inverse);
      margin: 0;
      margin-top: 0;
      position: relative;
      font-size: 2.5rem;
    }

    h1 span {
      position: absolute;
      top: 70px;
      left: -50px;
      padding: 100px;
      text-align: left;
    }

    .italic {
      font-style: italic;
    }
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      border: 1px solid var(--d3fend-border-default);
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 10px var(--d3fend-overlay-low);
    }

    .content th,
    .content td {
      padding: 12px;
      border: 1px solid var(--d3fend-border-subtle);
      text-align: left;
    }

    .content th {
      background-color: var(--d3fend-table-header-background); /* Using neutral color */
      color: var(--d3fend-text-inverse);
      font-weight: bold;
    }

    .content tr:nth-child(even) {
      background-color: var(--d3fend-table-row-even-background);
    }

    .content tr:hover {
      background-color: var(--d3fend-table-row-hover-background);
    }

    table {
      width: 100%;
      /* Table spans the full width of the section */
      border-collapse: collapse;
      /* Remove gaps between table cells */
    }

    table td:first-child,
    table th:first-child {
      width: 200px;
    }

    .sponsor_logo {
      width: 100px;
    }
    .logos .flex-column {
      width: 30%;
    }</style> <h1><span><div class="text-center logo fancy-font svelte-1ib5bv6">D3FEND<sup style="font-size:1.5rem">OT</sup></div></span></h1> <div class="text-center"><i>This work was funded by the Office of the Under Secretary of Defense for Acquisition &
      Sustainment OUSD (A&S)</i></div> <h2>Background</h2> <p>D3FEND was designed to model computers, devices, computer networks, and their associated
    information flows. After our initial release, we received frequent requests for the ability to
    apply the ontology to specific domains, including cyber-physical systems. These systems are
    programmed to sense and effect physical changes in their environments through sensors and
    actuators respectively. Systems whose control processes sense and produce physical effects are
    known as Operational Technology (OT) and have their own distinct cybersecurity properties; thus:
    we introduce D3FEND for OT. We take a broad view of OT and intend to extend this work to
    additional domains—for example, space.</p> <h2>Purpose and Scope</h2> <p>Our primary goal in D3FEND for OT is to enable application of the D3FEND Ontology to OT
    environments. Because information technology (IT) and OT share a common foundation, D3FEND’s
    unified <b>technology</b> ontology accommodates additions for OT-specific concepts; these additions
    extend the core ontology rather than forming a separate body of work.</p> <p>D3FEND for OT enables OT engineers, security engineers, and cyber threat intelligence analysts
    to model their security scenarios using the D3FEND ontology. New OT specific artifacts such as
    controllers, sensors, actuators, OT events, countermeasures, and OT network components are
    mapped to linked to other OT resources where possible.</p> <b><i>What it is:</i></b> <ul class="font-smallp svelte-nk8kr2"><li>An extension of the D3FEND ontology tailored to operational technology domains, adding
      OT-specific artifacts, events, and countermeasures.</li> <li>A high-fidelity modeling framework for OT engineers, defenders, and cyber threat intelligence
      analysts to represent systems, threats, and detections in CAD or SysML (please contact us to
      use D3FEND in SysML).</li> <li>A bridge to existing OT resources, including mappings to ATT&CK for ICS and relationships
      among artifacts and techniques.</li></ul> <b><i>What it is not:</i></b> <ul class="font-smallp svelte-nk8kr2"><li>A separate or standalone ontology or framework that replaces core D3FEND—it builds on and
      extends the core.</li> <li>A comprehensive or complete model of the OT domain.</li> <li>A compliance checklist, product catalog, or prescriptive configuration guide.</li> <li>A replacement for existing OT cybersecurity standards or guidance.</li></ul> <h2>Quick Start</h2> <p>Applying D3FEND for OT to your scenario requires foundational knowledge that is outside the
    scope of this page, which focuses on the added OT content. Please see our quick start blog post, <a>"Getting Started with D3FEND for OT"</a>, which walks through the basics.</p> <h2>Intended Audience & Use Cases</h2> <div></div> <p>D3FEND for OT was developed for the following roles and use cases.</p> <table class="table-auto content"><thead><tr><th>Role</th><th>Use Case</th></tr></thead><tbody><tr><td>OT Defensive Cyber Engineer</td><td><ul><li>Modeling artifacts of a system to understand weaknesses, vulnerabilities, and attack
              paths for better defenses.</li> <li>Mapping logs and events produced by sensors and systems to understand system attack
              detection.</li></ul></td></tr><tr><td>OT Cyber Threat Intel Analyst</td><td><ul><li>Modeling observed threats and incidents at a technical level to convey high- and
              low-level technical understandings of past or possible attacks.</li></ul></td></tr><tr><td>OT Systems Architect</td><td><ul><li>Modeling systems to understand weaknesses and vulnerabilities to design more secure
              systems.</li></ul></td></tr><tr><td>OT Systems Acquisition Specialist</td><td><ul><li>Comparing cybersecurity aspects of different products at a fine-grained level.</li></ul></td></tr></tbody></table> <h2>Example OT-focused D3FEND Graphs</h2> <section class="ot-examples"></section> <style>.ot-examples {
      width: 110%;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-left: -4rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .ot-weak-img {
      margin-inline: -3rem;
    }
    .card {
      width: 190px;
      background-color: #f9f9f9;
    }
    .media img {
      width: 100%;
      aspect-ratio: 3 / 2;
      object-fit: cover;
      border-radius: 0.4rem;
      border: 2px solid #ddd;
    }
    .title {
      margin: 0.6rem 1rem 0.25rem;
      font-weight: 600;
      font-size: medium;
      line-height: 1.2;
      /* font-family: "Times New Roman", Times, serif; */
      text-align: center;
    }
    .key-insights {
      text-align: left;
      list-style: disc;
      margin: 0;
      font-size: smaller;
      padding: 0.5rem 1rem 1rem;
    }</style> <style>.ot-examples {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .ot-weak-img {
    margin-inline: -3rem;
  }
  .card {
    width: 190px;
    background-color: var(--d3fend-surface-wash-alt);
  }
  .media img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: .4rem;
    border: 2px solid var(--d3fend-border-subtle);
  }
  .title {
    margin: 0.6rem 1rem 0.25rem;
    font-weight: 600;
    font-size: medium;
    line-height: 1.2;
    /* font-family: "Times New Roman", Times, serif; */
    text-align: center;
  }
  .key-insights {
    text-align: left;
    list-style: disc;
    margin: 0;
    font-size: smaller;
    padding: 0.5rem 1rem 1rem;
  }</style> <h3>ATT&CK &reg; for ICS</h3> <div></div> <p>MITRE ATT&CK for ICS has also been added to the D3FEND Ontology for use in CAD as a part of
    D3FEND for OT.</p> <div></div> <h3>OT Countermeasures</h3> <div></div> <p>The following are the new defensive techniques added to the D3FEND ontology. Not included below
    are the additional new relationships between existing countermeasures to the new OT Artifacts
    which have also been added.</p> <div></div> <table class="table-auto content"><thead><tr><th>Name</th><th>Defensive Property</th><th>Range</th><th>Description</th></tr></thead><tbody><tr><td><a>Change Default Password</a></td><td style="font-style: italic;">strengthens, hardens</td><td><a>Password</a>, <a>User Account</a>,<a>OT Controller</a></td><td>Changing the default password means replacing the factory-set credentials with a strong,
          unique password before the device is deployed, preventing unauthorized access.</td></tr><tr><td><a>Domain Logic Validation</a></td><td style="font-style: italic;">validates</td><td><a>Subroutine</a></td><td>Validation of variable state in the context of the domain application.</td></tr><tr><td><a>Operational Logic Validation</a></td><td style="font-style: italic;">validates</td><td><a>OT Control Function</a></td><td>Validation of variable state in the context of the control logic of the operational
          application.</td></tr><tr><td><a>Remote Firmware Update Monitoring</a></td><td style="font-style: italic;">monitors, detects</td><td><a>OT Network Traffic</a>, <a>OT Device Firmware Command</a></td><td>Monitoring of remote firmware update commands to identify unauthorized software
          installations.</td></tr><tr><td><a>Platform Uptime Monitoring</a></td><td style="font-style: italic;">monitors</td><td><a>Platform Uptime</a></td><td>Monitor the amount of time since the last power cycle or restart.</td></tr><tr><td><a>Operational Process Monitoring</a></td><td style="font-style: italic;">uses</td><td><a>OT Process Data Historian</a></td><td>Monitoring physical parameters and operator actions related to an operational
          environment.</td></tr><tr><td><a>Operating Mode Monitoring</a></td><td style="font-style: italic;">monitors</td><td><a>Operating Mode</a></td><td>Detects operating modes such as Program, Run, Remote, or Stop.</td></tr><tr><td><a>Operating Mode Restriction</a></td><td style="font-style: italic;">restricts</td><td><a>Operating Mode</a></td><td>Restricting unauthorized changes to the operating mode prevents devices from switching
          into inappropriate or vulnerable states during normal use.</td></tr><tr><td><a>Physical Access Mediation</a></td><td style="font-style: italic;">isolates</td><td>Physical Artifact</td><td>Physical access mediation is the process of granting or denying specific requests to
          enter specific physical facilities (e.g., Federal buildings, military establishments,
          border crossing entrances.)</td></tr><tr><td><a>Physical Locking</a></td><td style="font-style: italic;">mediates-access-to</td><td><a>Computer Enclosure</a></td><td>Employ a mechanical locking device for securing moveable portions of physical barriers
          (e.g., doors, gates, drawers) in a secured position.</td></tr><tr><td><a>OT Variable Access Restriction</a></td><td style="font-style: italic;">limits, restricts</td><td><a>OT Logic Variable</a>, <a>OT Write Command</a></td><td>Assign read/write access controls on designated registers or data tags to prevent
          unauthorized writes.</td></tr><tr><td><a>User Group Permissions</a></td><td style="font-style: italic;">restricts</td><td><a>User Group</a></td><td>Access control where access is determined based on attributes associated with users and
          the objects being accessed.</td></tr><tr><td><a>Directional Network Link</a></td><td style="font-style: italic;">restricts</td><td><a>Physical Link</a></td><td>Enforce one-way network communication by preventing two-way communication.</td></tr><tr><td><a>Hardware-based Write Protection</a></td><td style="font-style: italic;">hardens</td><td><a>Storage</a></td><td>Physical methods of preventing data from being written to computer storage.</td></tr><tr><td><a>Physical Enclosure Hardening</a></td><td style="font-style: italic;">hardens</td><td><a>Computer Enclosure</a></td><td>Physical changes to a computer enclosure which reduce the ability for agents or the
          environment to affect the contained computer system.</td></tr><tr><td><a>Application Performance Monitoring</a></td><td style="font-style: italic;">monitors</td><td><a>Log</a>, <a>System Application Cycle Count</a>, <a>Application Failure Count Variable</a>, <a>Application Scan Time</a></td><td>Monitoring the count and duration of the application or program cycle.</td></tr><tr><td><a>Application Exception Monitoring</a></td><td style="font-style: italic;">monitors</td><td><a>Log</a>, <a>Application Failure Count Variable</a></td><td>Monitoring the failures of system counters and timers.</td></tr></tbody></table> <h3>Key Digital Artifacts and Events</h3> <div></div> <p>The following are the artifacts and events added to the D3FEND ontology as a part of the D3FEND
    for OT effort.</p> <div></div> <table class="table-auto"><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><a>Computer Cabinet</a></td><td>A computer cabinet houses one or more computers and can range in size and material.</td></tr><tr><td><a>Computer Case</a></td><td>A computer case is a computer enclosure which encloses a single primary computer.</td></tr><tr><td><a>Computer Enclosure</a></td><td>A part providing protection of computer equipment against certain external influences and
          protects against direct contact.</td></tr><tr><td><a>Data Acquisition Agent</a></td><td>A software component which connects to data sources to gather raw, time-stamped data. It
          often connects to databases or historian gateways for storage and analysis.</td></tr><tr><td><a>Data Acquisition Unit</a></td><td>The hardware component which connects to data sources to gather raw, time-stamped data.
          It often connects to databases or historian gateways for storage and analysis.</td></tr><tr><td><a>Digital Access Badge</a></td><td>A credential used to gain entry to an area having automated access control entry points.
          Example media being magnetic stripe, proximity, barcode, or smart cards are examples.</td></tr><tr><td><a>Digital Camera</a></td><td>An optical instrument that can capture an image. A digital camera that captures
          photographs in digital memory.</td></tr><tr><td><a>Electronic Combination Lock</a></td><td>A system comprised of an automatic door closer on the door, an input device, a
          controlling device, and a lock, usually mechanical, which is released or activated when
          the correct combination is entered or correct token is presented.</td></tr><tr><td><a>HMI Application</a></td><td>Application software which runs the main program in an HMI.</td></tr><tr><td><a>HMI Application Process</a></td><td>The instructions within an HMI defined by user programming to interpret visual (and
          potentially audio) inputs and define visual (and potentially) audio outputs.</td></tr><tr><td><a>Motion Detector</a></td><td>An electrical device that utilizes a sensor to detect nearby motion.</td></tr><tr><td><a>Operating Mode</a></td><td>The Operating Mode designates the specific, selectable state of an OT controller that
          delineates its operational behavior and governs access to engineering functions, commonly
          including Program, Run, Remote, Test, or Stop.</td></tr><tr><td><a>OT Actuator</a></td><td>An OT actuator is an industrial-grade actuator optimized for operational technology (OT)
          environments, such as SCADA or process-control systems. It tolerates harsher conditions,
          meets stricter safety and reliability standards, and integrates seamlessly with ICS
          protocols to enable real-time mechanical motion or adjustments in production lines and
          critical infrastructure.</td></tr><tr><td><a>OT Controller</a></td><td>An OT Controller is an industrial control device that automatically regulates one or more
          controlled variables in response to command inputs and real-time feedback signals.</td></tr><tr><td><a>OT Control Logic Process</a></td><td>The instructions and algorithms within an OT Controller defined by user programming to
          interpret inputs, process information, and determine outputs.</td></tr><tr><td><a>OT Control Program</a></td><td>The file stored in controller memory that is used to operate the controller.</td></tr><tr><td><a>OT Embedded Computer</a></td><td>A ruggedized computational device, embedded in industrial control systems, designed to
          handle real-time tasks and environmental stressors common in OT.</td></tr><tr><td><a>OT Engineering Software</a></td><td>Software used in an industrial process to help engineers design, test, and maintain OT.
          This software enables the programming of OT controllers.</td></tr><tr><td><a>OT Engineering Workstation</a></td><td>An Engineering Workstation (EWS) is used to perform various maintenance, configuration,
          or diagnostics functions for a control system. The EWS will likely require dedicated
          application software to interface with various devices (e.g., RTUs, PLCs), and may be used
          to transfer data or files between the control system devices and other networks.</td></tr><tr><td><a>OT Event</a> <i>(45 subclasses)</i></td><td>A discrete occurrence within an operational technology environment that denotes a
          significant change in state, execution of a command, or transmission of information.</td></tr><tr><td><a>OT Human Machine Interface</a></td><td>Human-Machine Interfaces (HMIs) are systems used by an operator to monitor the real-time
          status of an operational process and to perform necessary control functions, including the
          adjustment of device parameters.</td></tr><tr><td><a>OT I/O Module</a></td><td>An I/O Module is a hardware device that translates signals between external sensors or
          actuators and control systems. It typically handles analog-to-digital (and vice versa)
          conversion, serving as the data interface that allows physical processes to be monitored
          and controlled by digital controllers.</td></tr><tr><td><a>OT Mode Switch</a></td><td>An OT Mode Switch is a dedicated mechanism, implemented as either a physical keyswitch or
          a software control, that permits authorized users to transition an OT controller between
          its operating modes.</td></tr><tr><td><a>OT Network</a></td><td>A computer network which connects OT devices.</td></tr><tr><td><a>OT Network Traffic</a></td><td>Network traffic generated by operational technology devices, e.g. programmable logic
          controllers</td></tr><tr><td><a>OT Power Supply</a></td><td>An OT power supply is a power supply whose control amplifier is optimized for
          signal-processing tasks rather than supplying mere steady-state power to a load. It is a
          self-contained combination of operational amplifiers, power amplifiers, and integral power
          circuits designed for higher-level operations in industrial or OT contexts.</td></tr><tr><td><a>OT Process Data Historian</a></td><td>A system used to collect and store data, including telemetry, events, alerts, and alarms
          about the operational process and supporting devices.</td></tr><tr><td><a>OT Protocol Message</a> <i>(45 subclasses)</i></td><td>Packets generated by an operational technology protocol contain an OT protocol message.</td></tr><tr><td><a>OT Sensor</a></td><td>An OT Sensor is an industrial-grade sensing device engineered for operational technology
          (OT) environments (e.g. SCADA, ICS). It measures physical variables—such as pressure,
          temperature, or flow—under demanding conditions, converting them into reliable signals for
          real-time monitoring and process control loops.</td></tr><tr><td><a>Physical Access Alarm Event</a> <i>(3 subclasses)</i></td><td>An event occurring when combination lock's bolt changes position.</td></tr><tr><td><a>Physical Data Diode</a></td><td>A device that physically enforces one-way (unidirectional) network communication.</td></tr><tr><td><a>Physical Key</a></td><td>A physical key is used to operate a lock, typically metal, designed with specific markers
          that match the internal mechanism of a lock, allowing it to rotate the lock when inserted.</td></tr><tr><td><a>Physical Key Lock</a></td><td>A mechanical locking device for securing moveable portions of physical barriers (e.g.,
          doors, gates, drawers) in a secured position.</td></tr><tr><td><a>Proximity Sensor</a></td><td>A sensor able to detect the presence of nearby objects without any physical contact.</td></tr><tr><td><a>Runtime Variable</a> <i>(11 subclasses)</i></td><td>A runtime variable is an abstract storage location paired with an associated symbolic
          name, which contains some known or unknown quantity of data or object referred to as a
          value, which can change during the execution of a computer program.</td></tr><tr><td><a>Time Series Database</a></td><td>A specialized database optimized for storing and retrieving time-stamped data.</td></tr><tr><td><a>Write Protect Switch</a></td><td>A physical device used to restrict configuration of a device.</td></tr></tbody></table> <h2>OT Weaknesses and Vulnerabilities - CWE & CVE</h2> Based on public reporting, we have identified CVEs and CWEs relevant to OT device manufacturers.
  We have modeled them against the new D3FEND for OT ontology additions in order to illustrate which
  parts of the devices were affected, and how they related to the D3FEND Ontology. <br/> <br/> <a>Open in D3FEND CAD</a> <!></section>`,1);function li(oa,ia){Uo(ia,!1);const na=[{name:"Colonial Pipeline Incident",description:"A model of the 2021 Colonial Pipeline ransomware attack.",model:"colonial-pipeline",image:"colonial.webp"},{name:"NotPetya Ransomware Attack",description:"A model of the 2017 NotPetya ransomware attack.",model:"notpetya"},{name:"Water System Unitronics PLC Attacks",description:"A model of the December 2023 attack against Unitronics Vision Series PLCs in US water systems.",model:"water-unitronics"},{name:"TRITON",description:"A model of the attack against the TRITON Safety Instrumented Systems.",model:"trisis",image:"triton.png"},{name:"Industroyer Attack",description:"A model of an attack on Ukrainian power substations using the Industroyer malware.",model:"industroyer-attack",image:"industroyer-attack.png"},{name:"Black Energy",description:"A model of an attack on Ukrainian power substations using the BlackEnergy3 malware.",model:"blackenergy",image:"blackenergy.png"},{name:"Detailed Purdue Model Represented in the D3FEND Ontology",description:"Detailed artifacts from D3FEND for OT mapped to the Purdue model.",model:"purdue",image:"purdue.png"},{name:"Simple Purdue Model Represented in the D3FEND Ontology",description:"High level artifacts from D3FEND for OT mapped to the Purdue model.",model:"purdue-simple",image:"purdue-simple.png"},{name:"Electric Vehicle Regenerative Braking System",description:"A model of an electric vehicle regenerative braking system.",model:"electricvehicle"}];Go();var zt=Xo(),Ht=Vo(zt);$o(Ht,{title:"D3FEND for OT",og_title:"MITRE D3FEND for OT",og_type:"website",og_url:"https://d3fend.mitre.org/domain/ot/",og_image:"https://d3fend.mitre.org/img/domain/ot/seven.jpg",og_description:"D3FEND for OT extends the MITRE D3FEND ontology with operational technology (OT) artifacts, events, and countermeasures to model cyber-physical systems."});var Wt=a(Ht,2),y=a(e(Wt),26),da=a(e(y));i(),t(y);var _=a(y,12);Bo(_,5,()=>na,Ko,(l,d)=>{var f=Jo(),h=e(f),m=e(h),qt=e(m);{var Rt=n=>{var s=ra();v(p=>o(s,"src",p),[()=>r(`/domain/ot/examples/${c(d).image}`)]),g(n,s)},Lt=n=>{var s=ra();v(p=>o(s,"src",p),[()=>r(`/domain/ot/examples/${c(d).model}.webp`)]),g(n,s)};jo(qt,n=>{c(d).image?n(Rt):n(Lt,-1)})}t(m);var u=a(m,2),Ut=e(u,!0);t(u),t(h),t(f),v(n=>{o(h,"href",n),Wo(Ut,c(d).name)},[()=>r(`/cad/?load=../resources/cad/domain/ot/${c(d).model}.json&render_meta=true`)]),g(l,f)}),t(_);var b=a(_,22),jt=a(e(b)),w=e(jt),T=e(w),sa=e(T);t(T);var Bt=a(T,2),Kt=e(Bt),Gt=a(Kt,2),ca=a(Gt,2);t(Bt),i(),t(w);var O=a(w),k=e(O),la=e(k);t(k);var $t=a(k,2),fa=e($t);t($t),i(),t(O);var A=a(O),D=e(A),ha=e(D);t(D);var Qt=a(D,2),ma=e(Qt);t(Qt),i(),t(A);var C=a(A),E=e(C),pa=e(E);t(E);var Jt=a(E,2),Xt=e(Jt),ua=a(Xt,2);t(Jt),i(),t(C);var P=a(C),x=e(P),va=e(x);t(x);var Yt=a(x,2),ga=e(Yt);t(Yt),i(),t(P);var M=a(P),S=e(M),ya=e(S);t(S);var Zt=a(S,2),_a=e(Zt);t(Zt),i(),t(M);var N=a(M),F=e(N),ba=e(F);t(F);var te=a(F,2),wa=e(te);t(te),i(),t(N);var I=a(N),q=e(I),Ta=e(q);t(q);var ee=a(q,2),Oa=e(ee);t(ee),i(),t(I);var R=a(I),ae=e(R),ka=e(ae);t(ae),i(3),t(R);var L=a(R),U=e(L),Aa=e(U);t(U);var re=a(U,2),Da=e(re);t(re),i(),t(L);var V=a(L),z=e(V),Ca=e(z);t(z);var oe=a(z,2),ie=e(oe),Ea=a(ie,2);t(oe),i(),t(V);var H=a(V),W=e(H),Pa=e(W);t(W);var ne=a(W,2),xa=e(ne);t(ne),i(),t(H);var j=a(H),B=e(j),Ma=e(B);t(B);var de=a(B,2),Sa=e(de);t(de),i(),t(j);var K=a(j),G=e(K),Na=e(G);t(G);var se=a(G,2),Fa=e(se);t(se),i(),t(K);var $=a(K),Q=e($),Ia=e(Q);t(Q);var ce=a(Q,2),qa=e(ce);t(ce),i(),t($);var J=a($),X=e(J),Ra=e(X);t(X);var le=a(X,2),fe=e(le),he=a(fe,2),me=a(he,2),La=a(me,2);t(le),i(),t(J);var pe=a(J),Y=e(pe),Ua=e(Y);t(Y);var ue=a(Y,2),ve=e(ue),Va=a(ve,2);t(ue),i(),t(pe),t(jt),t(b);var Z=a(b,10),ge=a(e(Z)),tt=e(ge),ye=e(tt),za=e(ye);t(ye),i(),t(tt);var et=a(tt),_e=e(et),Ha=e(_e);t(_e),i(),t(et);var at=a(et),be=e(at),Wa=e(be);t(be),i(),t(at);var rt=a(at),we=e(rt),ja=e(we);t(we),i(),t(rt);var ot=a(rt),Te=e(ot),Ba=e(Te);t(Te),i(),t(ot);var it=a(ot),Oe=e(it),Ka=e(Oe);t(Oe),i(),t(it);var nt=a(it),ke=e(nt),Ga=e(ke);t(ke),i(),t(nt);var dt=a(nt),Ae=e(dt),$a=e(Ae);t(Ae),i(),t(dt);var st=a(dt),De=e(st),Qa=e(De);t(De),i(),t(st);var ct=a(st),Ce=e(ct),Ja=e(Ce);t(Ce),i(),t(ct);var lt=a(ct),Ee=e(lt),Xa=e(Ee);t(Ee),i(),t(lt);var ft=a(lt),Pe=e(ft),Ya=e(Pe);t(Pe),i(),t(ft);var ht=a(ft),xe=e(ht),Za=e(xe);t(xe),i(),t(ht);var mt=a(ht),Me=e(mt),tr=e(Me);t(Me),i(),t(mt);var pt=a(mt),Se=e(pt),er=e(Se);t(Se),i(),t(pt);var ut=a(pt),Ne=e(ut),ar=e(Ne);t(Ne),i(),t(ut);var vt=a(ut),Fe=e(vt),rr=e(Fe);t(Fe),i(),t(vt);var gt=a(vt),Ie=e(gt),or=e(Ie);t(Ie),i(),t(gt);var yt=a(gt),qe=e(yt),ir=e(qe);t(qe),i(),t(yt);var _t=a(yt),Re=e(_t),nr=e(Re);i(2),t(Re),i(),t(_t);var bt=a(_t),Le=e(bt),dr=e(Le);t(Le),i(),t(bt);var wt=a(bt),Ue=e(wt),sr=e(Ue);t(Ue),i(),t(wt);var Tt=a(wt),Ve=e(Tt),cr=e(Ve);t(Ve),i(),t(Tt);var Ot=a(Tt),ze=e(Ot),lr=e(ze);t(ze),i(),t(Ot);var kt=a(Ot),He=e(kt),fr=e(He);t(He),i(),t(kt);var At=a(kt),We=e(At),hr=e(We);t(We),i(),t(At);var Dt=a(At),je=e(Dt),mr=e(je);t(je),i(),t(Dt);var Ct=a(Dt),Be=e(Ct),pr=e(Be);i(2),t(Be),i(),t(Ct);var Et=a(Ct),Ke=e(Et),ur=e(Ke);t(Ke),i(),t(Et);var Pt=a(Et),Ge=e(Pt),vr=e(Ge);i(2),t(Ge),i(),t(Pt);var xt=a(Pt),$e=e(xt),gr=e($e);t($e),i(),t(xt);var Mt=a(xt),Qe=e(Mt),yr=e(Qe);t(Qe),i(),t(Mt);var St=a(Mt),Je=e(St),_r=e(Je);t(Je),i(),t(St);var Nt=a(St),Xe=e(Nt),br=e(Xe);t(Xe),i(),t(Nt);var Ft=a(Nt),Ye=e(Ft),wr=e(Ye);i(2),t(Ye),i(),t(Ft);var It=a(Ft),Ze=e(It),Tr=e(Ze);t(Ze),i(),t(It);var ta=a(It),ea=e(ta),Or=e(ea);t(ea),i(),t(ta),t(ge),t(Z);var aa=a(Z,8),kr=a(aa,2);{let l=Ho(()=>r("/resources/cad/domain/ot/ot-weaknesses-simple.json"));Qo(kr,{get src(){return c(l)},height:"500px"})}t(Wt),v((l,d,f,h,m,qt,Rt,Lt,u,Ut,n,s,p,Ar,Dr,Cr,Er,Pr,xr,Mr,Sr,Nr,Fr,Ir,qr,Rr,Lr,Ur,Vr,zr,Hr,Wr,jr,Br,Kr,Gr,$r,Qr,Jr,Xr,Yr,Zr,to,eo,ao,ro,oo,io,no,so,co,lo,fo,ho,mo,po,uo,vo,go,yo,_o,bo,wo,To,Oo,ko,Ao,Do,Co,Eo,Po,xo,Mo,So,No,Fo,Io,qo,Ro,Lo)=>{o(da,"href",l),o(sa,"href",d),o(Kt,"href",f),o(Gt,"href",h),o(ca,"href",m),o(la,"href",qt),o(fa,"href",Rt),o(ha,"href",Lt),o(ma,"href",u),o(pa,"href",Ut),o(Xt,"href",n),o(ua,"href",s),o(va,"href",p),o(ga,"href",Ar),o(ya,"href",Dr),o(_a,"href",Cr),o(ba,"href",Er),o(wa,"href",Pr),o(Ta,"href",xr),o(Oa,"href",Mr),o(ka,"href",Sr),o(Aa,"href",Nr),o(Da,"href",Fr),o(Ca,"href",Ir),o(ie,"href",qr),o(Ea,"href",Rr),o(Pa,"href",Lr),o(xa,"href",Ur),o(Ma,"href",Vr),o(Sa,"href",zr),o(Na,"href",Hr),o(Fa,"href",Wr),o(Ia,"href",jr),o(qa,"href",Br),o(Ra,"href",Kr),o(fe,"href",Gr),o(he,"href",$r),o(me,"href",Qr),o(La,"href",Jr),o(Ua,"href",Xr),o(ve,"href",Yr),o(Va,"href",Zr),o(za,"href",to),o(Ha,"href",eo),o(Wa,"href",ao),o(ja,"href",ro),o(Ba,"href",oo),o(Ka,"href",io),o(Ga,"href",no),o($a,"href",so),o(Qa,"href",co),o(Ja,"href",lo),o(Xa,"href",fo),o(Ya,"href",ho),o(Za,"href",mo),o(tr,"href",po),o(er,"href",uo),o(ar,"href",vo),o(rr,"href",go),o(or,"href",yo),o(ir,"href",_o),o(nr,"href",bo),o(dr,"href",wo),o(sr,"href",To),o(cr,"href",Oo),o(lr,"href",ko),o(fr,"href",Ao),o(hr,"href",Do),o(mr,"href",Co),o(pr,"href",Eo),o(ur,"href",Po),o(vr,"href",xo),o(gr,"href",Mo),o(yr,"href",So),o(_r,"href",No),o(br,"href",Fo),o(wr,"href",Io),o(Tr,"href",qo),o(Or,"href",Ro),o(aa,"href",Lo)},[()=>r("/blog/getting-started-with-d3fend-for-ot/"),()=>r("/technique/d3f:ChangeDefaultPassword/"),()=>r("/dao/artifact/d3f:Password/"),()=>r("/dao/artifact/d3f:UserAccount/"),()=>r("/dao/artifact/d3f:OTController/"),()=>r("/technique/d3f:DomainLogicValidation/"),()=>r("/dao/artifact/d3f:Subroutine/"),()=>r("/technique/d3f:OperationalLogicValidation/"),()=>r("/dao/artifact/d3f:OTControlFunction/"),()=>r("/technique/d3f:RemoteFirmwareUpdateMonitoring/"),()=>r("/dao/artifact/d3f:OTNetworkTraffic/"),()=>r("/dao/artifact/d3f:OTDeviceFirmwareCommand/"),()=>r("/technique/d3f:PlatformUptimeMonitoring/"),()=>r("/dao/artifact/d3f:PlatformUptime/"),()=>r("/technique/d3f:OperationalProcessMonitoring/"),()=>r("/dao/artifact/d3f:OTProcessDataHistorian/"),()=>r("/technique/d3f:OperatingModeMonitoring/"),()=>r("/dao/artifact/d3f:OperatingMode/"),()=>r("/technique/d3f:OperatingModeRestriction/"),()=>r("/dao/artifact/d3f:OperatingMode/"),()=>r("/technique/d3f:PhysicalAccessMediation/"),()=>r("/technique/d3f:PhysicalLocking/"),()=>r("/dao/artifact/d3f:ComputerEnclosure/"),()=>r("/technique/d3f:OTVariableAccessRestriction/"),()=>r("/dao/artifact/d3f:OTLogicVariable/"),()=>r("/dao/artifact/d3f:OTWriteCommand/"),()=>r("/technique/d3f:UserGroupPermissions/"),()=>r("/dao/artifact/d3f:UserGroup/"),()=>r("/technique/d3f:DirectionalNetworkLink/"),()=>r("/dao/artifact/d3f:PhysicalLink/"),()=>r("/technique/d3f:Hardware-basedWriteProtection/"),()=>r("/dao/artifact/d3f:Storage/"),()=>r("/technique/d3f:PhysicalEnclosureHardening/"),()=>r("/dao/artifact/d3f:ComputerEnclosure/"),()=>r("/technique/d3f:ApplicationPerformanceMonitoring/"),()=>r("/dao/artifact/d3f:Log/"),()=>r("/dao/artifact/d3f:SystemApplicationCycleCount/"),()=>r("/dao/artifact/d3f:ApplicationFailureCountVariable/"),()=>r("/dao/artifact/d3f:ApplicationScanTime/"),()=>r("/technique/d3f:ApplicationExceptionMonitoring/"),()=>r("/dao/artifact/d3f:Log/"),()=>r("/dao/artifact/d3f:ApplicationFailureCountVariable/"),()=>r("/dao/artifact/d3f:ComputerCabinet/"),()=>r("/dao/artifact/d3f:ComputerCase/"),()=>r("/dao/artifact/d3f:ComputerEnclosure/"),()=>r("/dao/artifact/d3f:DataAcquisitionAgent/"),()=>r("/dao/artifact/d3f:DataAcquisitionUnit/"),()=>r("/dao/artifact/d3f:DigitalAccessBadge/"),()=>r("/dao/artifact/d3f:DigitalCamera/"),()=>r("/dao/artifact/d3f:ElectronicCombinationLock/"),()=>r("/dao/artifact/d3f:HMIApplication/"),()=>r("/dao/artifact/d3f:HMIApplicationProcess/"),()=>r("/dao/artifact/d3f:MotionDetector/"),()=>r("/dao/artifact/d3f:OperatingMode/"),()=>r("/dao/artifact/d3f:OTActuator/"),()=>r("/dao/artifact/d3f:OTController/"),()=>r("/dao/artifact/d3f:OTControlLogicProcess/"),()=>r("/dao/artifact/d3f:OTControlProgram/"),()=>r("/dao/artifact/d3f:OTEmbeddedComputer/"),()=>r("/dao/artifact/d3f:OTEngineeringSoftware/"),()=>r("/dao/artifact/d3f:OTEngineeringWorkstation/"),()=>r("/event/d3f:OTEvent/"),()=>r("/dao/artifact/d3f:OTHumanMachineInterface/"),()=>r("/dao/artifact/d3f:OTIOModule/"),()=>r("/dao/artifact/d3f:OTModeSwitch/"),()=>r("/dao/artifact/d3f:OTNetwork/"),()=>r("/dao/artifact/d3f:OTNetworkTraffic/"),()=>r("/dao/artifact/d3f:OTPowerSupply/"),()=>r("/dao/artifact/d3f:OTProcessDataHistorian/"),()=>r("/dao/artifact/d3f:OTProtocolMessage/"),()=>r("/dao/artifact/d3f:OTSensor/"),()=>r("/event/d3f:PhysicalAccessAlarmEvent/"),()=>r("/dao/artifact/d3f:PhysicalDataDiode/"),()=>r("/dao/artifact/d3f:PhysicalKey/"),()=>r("/dao/artifact/d3f:PhysicalKeyLock/"),()=>r("/dao/artifact/d3f:ProximitySensor/"),()=>r("/dao/artifact/d3f:RuntimeVariable/"),()=>r("/dao/artifact/d3f:TimeSeriesDatabase/"),()=>r("/dao/artifact/d3f:WriteProtectSwitch/"),()=>r("/cad/?load=../resources/cad/domain/ot/ot-weaknesses-simple.json&render_meta=true")]),g(oa,zt),zo()}export{li as component};
