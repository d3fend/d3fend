import"../chunks/Bzak7iHL.js";import{o as Fa}from"../chunks/o0JyXpVK.js";import{p as Pa,aM as W,a1 as Na,f as me,s as i,c as a,r as e,b0 as E,t as x,a as h,b as qa,d as v,z as A,A as o,e as Wa}from"../chunks/C5fqCc9O.js";import{s as u}from"../chunks/B0SftDD_.js";import{i as Ma}from"../chunks/B7bOfw0f.js";import{e as F}from"../chunks/DzcpJ-1p.js";import{b as n,s as Ha}from"../chunks/BYdHoday.js";import{d as za,a as Oa,e as Ga}from"../chunks/DZKNGu60.js";import{b as Ia}from"../chunks/BLNxmo6t.js";import{r as s}from"../chunks/DDYLM6Yj.js";import{T as ja}from"../chunks/DTnLv5eS.js";/* empty css                */var Ba=v('<tr><td><a class="ontology-entity-name"> </a></td><td class="ontology-entity-description"> </td></tr>'),La=v('<details class="ontology-addition-group"><summary><b> </b> </summary> <table class="table-auto content ontology-addition-table"><thead><tr><th>D3FEND Entity Name</th><th>D3FEND Entity Description</th></tr></thead><tbody></tbody></table></details>'),Ua=v('<article class="card"><a><div class="media"><img loading="lazy"/></div> <h3 class="title"> </h3></a></article>'),Va=v("<tr><td> </td><td><a> </a></td></tr>"),Xa=v('<tr><td data-label="SPARTA Technique"><a> </a></td><td class="font-smallp" data-label="Artifact Restrictions"><table class="table-auto sparta-restrictions-table"><tbody></tbody></table></td></tr>'),$a=v('<div class="sparta-table-actions"><button type="button" title="Copies the SPARTA table so you can paste it into Excel or into a CSV/text file." aria-live="polite"> </button></div> <p id="sparta-table-scroll-hint" class="data-table-scroll-affordance sparta-table-scroll-affordance">↔ Scroll horizontally to see all columns</p> <div class="data-table-scroll-region sparta-table-scroll-region" role="region" aria-label="SPARTA integration data table" aria-describedby="sparta-table-scroll-hint" tabindex="0"><table class="table-auto content responsive-card-table sparta-integration-table"><thead><tr><th>SPARTA Technique</th><th>Artifact Restrictions</th></tr></thead><tbody></tbody></table></div>',1),Ja=v('<p class="font-smallp">Loading SPARTA technique artifact restrictions.</p>'),Qa=v('<p class="font-smallp"> </p>'),Ka=v('<p class="font-smallp">No SPARTA technique artifact restrictions are currently available.</p>'),Ya=v(`<!> <section class="content"><style>h1 {
      background-image: url("../../img/domain/space/d4s_background.jpeg");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 500px;
      color: var(--d3fend-text-inverse);
      margin: 0;
      margin-top: 0;
      position: relative;
      font-size: 2.5rem;
      border-radius: 6px;
    }

    h1 span {
      position: absolute;
      top: -30px;
      left: -70px;
      padding: 100px;
      text-align: left;
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
      background-color: var(--d3fend-table-header-background);
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
      border-collapse: collapse;
    }

    .responsive-card-table td:first-child,
    .responsive-card-table th:first-child {
      width: 200px;
    }

    .ot-examples {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      gap: 1rem;
    }

    .card {
      width: 190px;
      background-color: var(--d3fend-surface-wash-alt);
    }

    .media img {
      width: 100%;
      aspect-ratio: 3 / 2;
      object-fit: cover;
      border-radius: 0.4rem;
      border: 2px solid var(--d3fend-border-subtle);
    }

    .title {
      margin: 0.6rem 1rem 0.25rem;
      font-weight: 600;
      font-size: medium;
      line-height: 1.2;
      text-align: center;
    }

    .font-smallp {
      font-size: 0.95rem;
    }

    .sparta-integration-table td:first-child,
    .sparta-integration-table th:first-child {
      width: 280px;
    }

    .responsive-card-table ul {
      margin-block: 0;
      padding-left: 1.25rem;
    }

    .space-jump-list {
      margin: 1.5rem 0;
      padding: 0.75rem 1rem;
      border: 1px solid var(--d3fend-border-default);
      border-radius: 6px;
      background-color: var(--d3fend-surface-panel);
    }

    .space-jump-list-title {
      margin: 0 0 0.5rem;
      font-size: 1.1rem;
    }

    .space-jump-list ul {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
      gap: 0.35rem 1.5rem;
      margin: 0;
      padding-left: 1.25rem;
    }

    .space-section-heading {
      scroll-margin-top: 5rem;
    }

    .data-table-scroll-region {
      max-width: 100%;
      overflow-x: auto;
      overscroll-behavior-inline: contain;
      border: 1px solid var(--d3fend-border-default);
      border-radius: 5px;
      box-shadow: 0 0 10px var(--d3fend-overlay-low);
      scrollbar-gutter: stable;
    }

    .data-table-scroll-region:focus-visible {
      outline: 2px solid var(--d3fend-focus-control);
      outline-offset: 2px;
    }

    .content .data-table-scroll-region > table {
      margin-bottom: 0;
      border: 0;
      border-radius: 0;
      box-shadow: none;
    }

    .data-table-scroll-region > table > thead > tr > th {
      position: sticky;
      top: 0;
      z-index: 2;
    }

    .data-table-scroll-region > table > tbody > tr > td:first-child {
      position: sticky;
      left: 0;
      z-index: 1;
      background-color: var(--d3fend-surface-panel);
    }

    .data-table-scroll-region > table > thead > tr > th:first-child {
      left: 0;
      z-index: 3;
    }

    .data-table-scroll-region > table > tbody > tr:nth-child(even) > td:first-child {
      background-color: var(--d3fend-table-row-even-background);
    }

    .data-table-scroll-region > table > tbody > tr:hover > td:first-child {
      background-color: var(--d3fend-table-row-hover-background);
    }

    .data-table-scroll-affordance {
      display: none;
      margin: 0 0 0.35rem;
      color: var(--d3fend-text-muted);
      font-size: 0.875rem;
      font-weight: 600;
    }

    .ontology-additions {
      display: grid;
      min-width: 0;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .ontology-addition-group {
      min-width: 0;
      border: 1px solid var(--d3fend-border-default);
      border-radius: 6px;
      background-color: var(--d3fend-surface-panel);
    }

    .ontology-addition-group summary {
      cursor: pointer;
      padding: 0.75rem 1rem;
      font-weight: 600;
    }

    .content .ontology-addition-table {
      width: calc(100% - 2rem);
      table-layout: fixed;
      margin: 0 1rem 1rem;
      box-shadow: none;
    }

    .ontology-addition-table td:first-child,
    .ontology-addition-table th:first-child {
      width: min(260px, 38%);
    }

    .ontology-entity-name {
      font-weight: 600;
      overflow-wrap: anywhere;
    }

    .ontology-entity-description {
      font-size: 0.95rem;
      line-height: 1.4;
      overflow-wrap: anywhere;
    }

    .sparta-table-actions {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
    }

    .sparta-table-copy-button.copied {
      border-color: var(--d3fend-status-success);
      color: var(--d3fend-status-success);
    }

    .sparta-table-copy-button.error {
      border-color: var(--d3fend-status-danger);
      color: var(--d3fend-status-danger);
    }

    .sparta-restrictions-table {
      width: 100%;
      margin-bottom: 0;
      box-shadow: none;
    }

    .sparta-mappings-link {
      display: block;
      width: 100%;
      max-width: 960px;
      margin: 1rem auto;
      cursor: zoom-in;
    }

    .sparta-mappings-image {
      display: block;
      width: 100%;
      height: auto;
    }

    .sparta-restrictions-table td:first-child,
    .sparta-restrictions-table th:first-child {
      width: 140px;
    }

    .sparta-restrictions-table td {
      overflow-wrap: anywhere;
    }

    .space-sponsor {
      display: grid;
      align-items: center;
      justify-content: center;
      grid-template-columns: minmax(120px, 180px) minmax(0, 38rem) minmax(120px, 180px);
      column-gap: 1rem;
      margin-top: 1rem;
    }

    .space-sponsor-logo {
      justify-self: center;
      max-width: 100%;
      max-height: 80px;
      height: auto;
    }

    .space-sponsor-text {
      margin: 0;
      text-align: center;
    }

    @media (max-width: 720px) {
      h1 span {
        right: 0;
        left: 0;
        padding-inline: 1rem;
        text-align: center;
      }

      .data-table-scroll-affordance {
        display: block;
      }

      .sparta-table-scroll-affordance {
        display: none;
      }

      .sparta-table-scroll-region {
        border: 0;
        overflow-x: auto;
        box-shadow: none;
        scrollbar-gutter: auto;
      }

      .content .responsive-card-table {
        display: block;
        border: 0;
        overflow: visible;
        box-shadow: none;
      }

      .responsive-card-table > thead {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }

      .content .responsive-card-table > tbody {
        display: grid;
        gap: 1rem;
      }

      .content .responsive-card-table > tbody > tr,
      .content .responsive-card-table > tbody > tr > td {
        display: block;
        width: auto;
      }

      .content .responsive-card-table > tbody > tr {
        overflow: hidden;
        border: 1px solid var(--d3fend-border-default);
        border-radius: 5px;
        background-color: var(--d3fend-surface-panel);
        box-shadow: 0 0 10px var(--d3fend-overlay-low);
      }

      .content .responsive-card-table > tbody > tr > td {
        position: static;
        padding: 0.75rem;
        border: 0;
        overflow-wrap: anywhere;
      }

      .content .responsive-card-table > tbody > tr > td:not(:last-child) {
        border-bottom: 1px solid var(--d3fend-border-subtle);
      }

      .content .responsive-card-table > tbody > tr > td::before {
        display: block;
        margin-bottom: 0.35rem;
        content: attr(data-label);
        font-size: 0.875rem;
        font-weight: 700;
      }

      .content .responsive-card-table > tbody > tr:nth-child(even) {
        background-color: var(--d3fend-table-row-even-background);
      }

      .content .responsive-card-table > tbody > tr:hover {
        background-color: var(--d3fend-table-row-hover-background);
      }

      .sparta-restrictions-table td:first-child {
        width: 40%;
      }

      .space-sponsor {
        grid-template-columns: 1fr;
        row-gap: 0.75rem;
      }
    }</style> <h1><span><div class="text-center logo fancy-font">D3FEND<sup style="font-size:1.5rem">Space</sup></div></span></h1> <div class="space-sponsor"><img class="space-sponsor-logo" alt="United States Space Force logo"/> <i class="space-sponsor-text">This work was proudly sponsored by the United States Space Force’s cyberspace warfare
      acquisition unit, the 6th Sustainment Squadron.</i> <img class="space-sponsor-logo" alt="Mission Delta 6 logo"/></div> <h2>Background</h2> <p>D3FEND was designed to model computers, devices, networks, and the information flows between
    them. As users applied it to cyber-physical systems, space emerged as a domain that needed a
    more explicit security model.</p> <p>D3FEND for Space extends the core ontology with a security-oriented view of spacecraft, ground
    systems, and related components. It builds on <a>D3FEND for OT</a> while incorporating space-specific
    concepts and mappings to Aerospace's <a href="https://sparta.aerospace.org/">SPARTA</a> framework.</p> <h2>Purpose and Scope</h2> <p>D3FEND for Space enables space engineers, security engineers, and cyber threat intelligence
    analysts to model space security scenarios using the <a>D3FEND ontology</a>.</p> <p>The extension adds space-relevant artifacts, events, and countermeasures; models supporting
    concepts such as software-defined radios and watchdog timers; and maps SPARTA techniques to the
    D3FEND artifacts they target.</p> <b><i>What it is:</i></b> <ul class="font-smallp"><li>An extension of the D3FEND ontology tailored to space domains, adding space-specific
      artifacts, events, and countermeasures.</li> <li>A high-fidelity modeling framework for space engineers, defenders, and cyber threat
      intelligence analysts to represent systems, threats, and detections in CAD or SysML (please <a href="mailto:d3fend@mitre.org">contact</a> us to use D3FEND in SysML).</li> <li>A bridge to existing space security resources, including mappings to Aerospace's SPARTA
      framework.</li></ul> <b><i>What it is not:</i></b> <ul class="font-smallp"><li>A separate or standalone ontology or framework that replaces core D3FEND.</li> <li>A comprehensive or complete model of the space domain.</li> <li>A compliance checklist, product catalog, or prescriptive configuration guide.</li></ul> <nav class="space-jump-list" aria-labelledby="space-jump-list-title"><h2 id="space-jump-list-title" class="space-jump-list-title">On this page</h2> <ul><li><a href="#design-philosophy">Design Philosophy</a></li> <li><a href="#intended-audience">Intended Audience & Use Cases</a></li> <li><a href="#quick-start">Quick Start</a></li> <li><a href="#ontology-additions">Ontology Additions</a></li> <li><a href="#common-space-threats">Common Space System Threats</a></li> <li><a href="#example-space-graphs">Example Space-focused Graphs</a></li> <li><a href="#sparta-integration">Aerospace SPARTA Integration</a></li></ul></nav> <h2 id="design-philosophy" class="space-section-heading">Design Philosophy</h2> <p>D3FEND for Space follows the core D3FEND approach: model attacks and defenses through precise
    artifacts, not broad subsystem labels.</p> <ul class="font-smallp"><li><b>Threat-model driven:</b> SPARTA techniques are mapped to the D3FEND artifacts they target.</li> <li><b>Artifact-first:</b> Spacecraft components such as computers, flight software, radios, and sensors
      are modeled directly so users can represent their own systems.</li> <li><b>Built on OT:</b> Space concepts reuse and extend D3FEND's cyber-physical / OT model where
      appropriate, such as with <a>d3f:SpacecraftComputer</a>.</li></ul> <h2 id="intended-audience" class="space-section-heading">Intended Audience & Use Cases</h2> <p>D3FEND for Space supports several roles across engineering, analysis, and acquisition.</p> <table class="table-auto content responsive-card-table"><thead><tr><th>Role</th><th>Use Case</th></tr></thead><tbody><tr><td data-label="Role">Space Defensive Cyber Engineer</td><td data-label="Use Case"><ul><li>Map ground and space system artifacts to weaknesses, attack paths, and defenses.</li> <li>Connect sensor-reported events to artifacts and likely attack types.</li></ul></td></tr><tr><td data-label="Role">Space Cyber Threat Intelligence Analyst</td><td data-label="Use Case"><ul><li>Represent observed threats and incidents with concrete technical targets.</li> <li>Create space security analytical products grounded in the D3FEND ontology.</li></ul></td></tr><tr><td data-label="Role">Space Systems Developer or Architect</td><td data-label="Use Case"><ul><li>Model software, hardware, bus, and data-flow relationships to identify attack
              surfaces.</li> <li>Use those models to guide more secure flight and ground software design.</li></ul></td></tr><tr><td data-label="Role">Space Systems Acquisition Specialist</td><td data-label="Use Case"><ul><li>Compare cybersecurity properties of candidate space and ground products.</li> <li>Request <a>D3FEND CAD</a> models from vendors to support structured technical review.</li></ul></td></tr></tbody></table> <h2 id="quick-start" class="space-section-heading">Quick Start</h2> <p>Applying D3FEND for Space to your scenario requires foundational knowledge that is outside the
    scope of this page, which focuses on added space content and examples. Since D3FEND for Space
    was built on the foundation of D3FEND for OT, we recommend its <a>quick start blog post</a> as a
    useful primer.</p> <p>Reviewing the CAD diagrams that the the D3FEND team has modeled, such as one of the <a>satellite firmware modification attacks</a> from J.Willbold's <a href="https://jwillbold.com/paper/willbold2023spaceodyssey.pdf">Space Odyssey</a> paper, is another good way to understand what we've built.</p> <h2 id="ontology-additions" class="space-section-heading">Ontology Additions</h2> <p>The D3FEND team has added the following items to the D3FEND ontology to support D3FEND for
    Space.</p> <div class="ontology-additions"></div> <h2 id="common-space-threats" class="space-section-heading">Common Space System Threats & Related Artifacts</h2> <p>These examples show how common space-system threats can be anchored to concrete D3FEND artifacts
    in a model.</p> <table class="table-auto content responsive-card-table"><thead><tr><th>Threat Vector</th><th>Examples</th><th>Related Artifacts</th></tr></thead><tbody><tr><td data-label="Threat Vector"><b>Supply Chain</b></td><td class="font-smallp" data-label="Examples"><ul><li>Malicious flight software builds</li> <li>Firmware tampering</li> <li>Compromised COTS components</li></ul></td><td class="font-smallp" data-label="Related Artifacts"><ul><li><a>d3f:Firmware</a></li> <li><a>d3f:FlightSoftware</a></li> <li><a>d3f:SpacecraftComputer</a></li></ul></td></tr><tr><td data-label="Threat Vector"><b>RF and Physical Access</b></td><td class="font-smallp" data-label="Examples"><ul><li>RF jamming or denial</li> <li>Signal spoofing</li> <li>Passive eavesdropping</li></ul></td><td class="font-smallp" data-label="Related Artifacts"><ul><li><a>d3f:WirelessLink</a></li> <li><a>d3f:Software-definedRadio</a></li></ul></td></tr><tr><td data-label="Threat Vector"><b>Software Modification</b></td><td class="font-smallp" data-label="Examples"><ul><li>Flight software modification</li> <li>Bootloader or firmware replacement</li> <li>Unsafe on-orbit update</li></ul></td><td class="font-smallp" data-label="Related Artifacts"><ul><li><a>d3f:FlightSoftware</a></li> <li><a>d3f:BootLoader</a></li> <li><a>d3f:BootROM</a></li></ul></td></tr><tr><td data-label="Threat Vector"><b>Unauthorized Commanding</b></td><td class="font-smallp" data-label="Examples"><ul><li>Malicious telecommanding</li> <li>Command path abuse</li></ul></td><td class="font-smallp" data-label="Related Artifacts"><ul><li><a>d3f:WirelessCommand</a></li> <li><a>d3f:Transmitter</a></li> <li><a>d3f:Transceiver</a></li> <li><a>d3f:Receiver</a></li></ul></td></tr></tbody></table> <h2 id="example-space-graphs" class="space-section-heading">Example Space-focused D3FEND Graphs</h2> <section class="ot-examples"></section> <h2 id="sparta-integration" class="space-section-heading">Aerospace SPARTA Integration</h2> <p>D3FEND for Space maps a subset of SPARTA techniques to D3FEND's ontology-defined artifacts, providing
    a mechanism for understanding the precise targets of these techniques along with potential
    defensive countermeasures.</p> <a class="sparta-mappings-link" title="Open SPARTA mappings image"><img class="sparta-mappings-image" alt="Diagram of D3FEND for Space mappings to Aerospace SPARTA techniques and artifacts"/></a> <!> <h2>Acknowledgements</h2> <p>We'd like to thank the following organizations and people who contributed to the development of
    D3FEND for Space.</p> <ul class="font-smallp"><li><b>Brandon Bailey, <a href="https://aerospace.org/">Aerospace</a>:</b> for developing SPARTA and
      answering our numerous questions.</li> <li><b><a href="https://spaceisac.org/">Space ISAC</a>:</b> for providing valuable insight on space
      CTI and giving us the opportunity to present and discuss our work with your community.</li> <li><b>MITRE SMEs:</b> for answering our questions and sanity checking our work.</li></ul></section>`,1);function pt(je,Be){Pa(Be,!0);const Le="/api/domain/space/sparta-technique-artifact-restrictions.json",Ue=[{name:"Space Odyssey Firmware Attack",description:"A model of a firmware manipulation attack against a real satellite.",model:"ops-sat-firmware-mod",image:"/domain/space/ops-sat-firmware-mod.webp"},{name:"D3FEND for Space Overview",description:"An overview of the D3FEND for Space model, with a focus on artifacts and countermeasures.",model:"d4s-overview",image:"/domain/space/d4s-overview.webp"},{name:"Satellite User Terminal Example",description:"An example of a satellite user terminal modeled using D3FEND for Space artifacts.",model:"d4s-user-terminal-example",image:"/domain/space/d4s-user-terminal-example.webp"},{name:"SPARTA IA-0002: Software Defined Radio",description:"A model of a SPARTA technique with artifacts, events, and countermeasures.",model:"sparta-ia-0002",image:"/domain/space/sparta-ia-0002.webp"},{name:"SPARTA EX-0014.04: Position, Navigation, and Timing (PNT) Spoofing",description:"A model of a SPARTA technique with artifacts, events, and countermeasures.",model:"sparta-ex-0014.04",image:"/domain/space/sparta-ex-0014.04.webp"},{name:"SPARTA EX-0001.02: Bus Traffic Replay",description:"A model of a SPARTA technique with artifacts, events, and countermeasures.",model:"sparta-ex-0001.02",image:"/domain/space/sparta-ex-0001.02.webp"},{name:"SPARTA EX-0016.01: Uplink Jamming",description:"A model of a SPARTA technique with artifacts, events, and countermeasures.",model:"sparta-ex-0016.01",image:"/domain/space/sparta-ex-0016.01.webp"},{name:"SPARTA IOB MIRE-5: Flight Software Memory Corruption",description:"A model of a SPARTA indicator of behavior (IOB) with artifacts, events, and countermeasures.",model:"sparta-iob-mire5",image:"/domain/space/sparta-iob-mire5.webp"},{name:"SPARTA IOB UACE-10: Processed Command Log Flooding",description:"A model of a SPARTA indicator of behavior (IOB) with artifacts, events, and countermeasures.",model:"sparta-iob-uace10",image:"/domain/space/sparta-iob-uace10.webp"}],Ve={"d3f:AtomicClock":"An atomic clock is a clock that measures time by monitoring the resonant frequency of atoms.","d3f:BootROM":"Boot ROM is a piece of read-only memory (ROM) that is used for booting a computer system.","d3f:Clock":"A mechanism that generates periodic, accurately spaced signals for timekeeping applications.","d3f:DigitalSignalProcessingApplication":"A Digital Signal Processing (DSP) application is a software system that ingests discrete-time or discrete-space signals (from sensors, ADCs, or files) and applies digital signal processing algorithms to analyze, transform, synthesize, or make decisions about those signals, often under real-time throughput and latency constraints.","d3f:ElectricalSignal":"A guided signal in the form of a time-varying voltage or current propagating along an electrical conductor such as a wire, circuit-board trace, twisted pair, or coaxial cable.","d3f:FlightSoftware":"Flight Software (FSW) is software that runs on a processor embedded in a spacecraft's avionics.","d3f:FPGABitstream":"A binary configuration file generated by synthesizing and placing-and-routing an HDL design, which is loaded into a Field-Programmable Gate Array (FPGA) to physically define its internal logic, interconnects, and I/O behavior.","d3f:GNSSReceiver":"A GNSS (Global Navigation Satellite System) receiver is an electronic device that picks up signals from one or more satellite constellations (like GPS, GLONASS, Galileo, BeiDou) to calculate precise location, velocity, and time.","d3f:GNSSSatellite":"A GNSS satellite is part of a space-based constellation that transmits signals, allowing receivers on Earth to determine their position, navigation, and timing (PNT) through trilateration.","d3f:GNSSSignal":"A GNSS (Global Navigation Satellite System) signal is a low-power radio signal broadcast from satellites that contains a carrier wave, a ranging code, and a navigation message.","d3f:GNSSTimeRecord":"A GNSS Time Record is an information content entity encoded in a GNSS signal that represents the transmission time of that signal as determined by the transmitting satellite, expressed relative to a constellation-specific time standard and epoch.","d3f:HardwareClock":"A clock implemented using physical electronic components, typically providing timekeeping independent of system power or software state.","d3f:HardwareClockDeviceDriver":"A device driver for a hardware clock.","d3f:HardwareDeviceConfiguration":"Information used to configure the parameters and settings for hardware devices.","d3f:HardwareTimer":"A hardware timer is defined as an electronic component that serves as an 8-bit or 16-bit counter, capable of measuring time intervals, generating timed outputs, and driving loads through mechanisms such as pulse width modulation (PWM).","d3f:HardwareTimerDeviceDriver":"A device driver for a hardware timer.","d3f:HardwareWatchdogTimer":"A hardware watchdog timer is a watchdog timer implemented using electronic components.","d3f:OperatingSystemClock":"An operating system clock is the primary software clock maintained by the operating system, representing the system's current time.","d3f:Real-timeClock":"A real-time clock (RTC) is an electronic device (most often in the form of an integrated circuit) that measures the passage of time.","d3f:Real-timeOperatingSystem":"A real-time operating system (RTOS) is an operating system (OS) for real-time computing applications that processes data and events that have critically defined time constraints.","d3f:Receiver":"A receiver is a device or system that acquires signals and converts them into usable information.","d3f:SafeMode":"An intentionally constrained operating mode of a system in which nonessential functions are disabled or limited and control is shifted to a minimal, well-tested configuration that prioritizes preventing harm (to the system, its environment, or data), maintaining basic stability and monitoring, and enabling diagnosis and recovery back to normal operation.","d3f:Satellite":"A satellite or an artificial satellite is an object, typically a spacecraft, placed into orbit around a celestial body.","d3f:SatelliteTransponder":"A communications satellite's transponder is the series of interconnected units that form a communications channel between the receiving and the transmitting antennas.","d3f:Signal":"In electronics and telecommunications, signal refers to any time-varying voltage, current, or electromagnetic wave that carries information.","d3f:SoftwareClock":"A clock implemented in software which may synchronize with hardware clocks or external time sources.","d3f:SoftwareTimer":"A timer implemented in software, typically managed by the operating system or application code.","d3f:SoftwareWatchdogTimer":"A software watchdog timer is a watchdog timer implemented in software.","d3f:Software-definedRadio":"Software-defined radio (SDR) is a radio communication system where components that conventionally have been implemented in analog hardware (e.g. mixers, filters, amplifiers, modulators/demodulators, detectors, etc.) are instead implemented by means of software on a computer or embedded system.","d3f:Software-definedRadioComputer":"An embedded computer that includes a self-contained radio system, onboard compute (e.g., SoC/CPU/DSP/FPGA), and software/firmware sufficient to run waveforms and manage RF functions without requiring a continuously attached host PC.","d3f:Software-definedRadioConfiguration":"The physical radio hardware parameters used by a software-defined radio (SDR), including center frequency, bandwidth, gain settings, antenna selection, ADC/DAC sample rates, filter characteristics, power output, and others.","d3f:Software-definedRadioDevice":"A hardware device that functions primarily as an RF front end plus data conversion and transport, relying on an external host computer to run most waveform/DSP processing and to control operation.","d3f:Software-definedRadioWaveformApplication":"A software implementation of a radio waveform that executes on the programmable processing elements of a software-defined radio and realizes the signal processing functions necessary to transmit and receive a specific radio signal.","d3f:Spacecraft":"A spacecraft is a vehicle that is designed to fly and operate in outer space.","d3f:SpacecraftComputer":"A vehicle computer installed on a spacecraft, executing real-time control or data-handling logic under spaceflight conditions (vacuum, radiation, extended communication latency) and communicating over buses such as MIL-STD-1553, SpaceWire, or CAN.","d3f:SpacecraftSafeMode":"Safe mode is an operating mode of a modern uncrewed spacecraft during which all non-essential systems are shut down and only essential functions such as thermal management, radio reception and attitude control are active.","d3f:SystemTime":"In computing, system time represents a computer system's notion of a point in time.","d3f:WirelessCommand":"A wireless command is a remote command transmitted to a system over a non-wired medium.","d3f:TimeRecord":"A time record either records, describes, represents, or is generally about Time.","d3f:Timer":"A timer or countdown timer is a type of clock that starts from a specified time duration and stops upon reaching 00:00.","d3f:Transceiver":"A transceiver is a device that contains both a transmitter and receiver.","d3f:Transmitter":"A device or system that takes information and generates a signal suitable for propagation.","d3f:Transponder":"In telecommunications, a transponder is a device that, upon receiving a signal, emits a different signal in response.","d3f:Vehicle":"A vehicle is an electronically controlled machine designed for self-propulsion, usually to transport people, cargo, or both.","d3f:VehicleComputer":"An embedded computing system within a vehicle that monitors, controls, or supports vehicle functions by processing data, communicating with other components, and interacting with sensors, actuators, and external interfaces.","d3f:VehicleControlSoftware":"A specialized subset of vehicle software strictly responsible for the direct management of the vehicle's physical state, orientation, and safety-critical dynamics.","d3f:VehicleOperatingMode":"The current functional state or control regime of a vehicle that determines how it is configured, how its systems behave, and what kind of operation it is performing at a given time.","d3f:VehicleSoftware":"Any software residing on a vehicle's onboard compute platforms.","d3f:WatchdogTimer":"A watchdog timer (WDT, or simply a watchdog) is an electronic or software timer that is used to detect and recover from computer malfunctions.","d3f:WiredLink":"A physical link that uses a physical conductor or waveguide to constrain and direct signal propagation between endpoints.","d3f:WirelessLink":"A physical link that transmits signals through free space or an unguided medium without physical connectors between endpoints.","d3f:BusMessageAuthentication":"Applies cryptographic primitives to individual bus frames to verify the sender's identity and ensure the integrity of the data payload.","d3f:ElectromagneticRadiationHardening":"The application of physical and material-level design measures to electronic systems, components, or facilities to reduce their susceptibility to damage or disruption from electromagnetic threats.","d3f:RadiationHardening":"Radiation hardening is the process of making electronic components and circuits resistant to damage or malfunction caused by high levels of ionizing radiation.","d3f:ClockEvent":"An event involving a clock artifact, characterized by changes to or readings from a timekeeping mechanism that maintains a representation of temporal progression.","d3f:ClockSynchronizationEvent":"An event in which a software clock adjusts its value based on an external time reference (e.g., NTP server, GPS time signal).","d3f:HardwareClockEvent":"A clock event involving a physical timekeeping mechanism implemented in hardware components.","d3f:HardwareTimerConfigurationEvent":"An event in which a hardware timer's registers or operational parameters are programmed or modified.","d3f:HardwareTimerEvent":"A timer event involving a physical timer mechanism implemented in hardware components.","d3f:HardwareTimerInterruptEvent":"An event in which a hardware timer generates an interrupt signal upon expiration or interval completion.","d3f:PowerAndThermalDeviceEvent":"An event involving power supplies, batteries, or thermal management devices.","d3f:RTCUpdateEvent":"An event in which a Real-Time Clock's stored time value is read from or written to its battery-backed storage.","d3f:SoftwareClockEvent":"A clock event involving a software-based timekeeping mechanism maintained by an operating system or application.","d3f:SoftwareTimerEvent":"A clock event involving a software-based timekeeping mechanism maintained by an operating system or application.","d3f:Software-definedRadioEvent":"An event involving a software-defined radio (SDR) device indicating that the SDR's lifecycle state, operational state, configuration, data-streaming status, timing/reference status, or fault condition has changed.","d3f:Software-definedRadioRFStateChangeEvent":"A software-defined radio (SDR) event where one or more radio-frequency (RF) parameters have been changed in a way that affects reception or emission (e.g., center frequency retune, gain/attenuation update, bandwidth/filter selection, antenna/port switch, TX enable/disable, etc).","d3f:Software-definedRadioWaveformApplicationConfigurationEvent":"An SDR event where the waveform application's operational parameters have been applied and validated (e.g., sample rate, bandwidth, channel selection, framing/modulation options), placing the waveform in a state ready to run.","d3f:Software-definedRadioWaveformApplicationLoadEvent":"An SDR event where a waveform application (software/firmware/FPGA image and associated descriptors) has been installed or selected on the SDR and is available to be configured.","d3f:SystemClockUpdateEvent":"An event in which the operating system's primary timekeeping value is modified or synchronized.","d3f:TimerEvent":"An event involving a timer artifact, characterized by the initiation, expiration, modification, or cancellation of a countdown or interval-based temporal mechanism.","d3f:TimerExpirationEvent":"An event in which a software timer reaches its configured duration and triggers associated actions (callbacks, interrupts, or signals).","d3f:TimerModificationEvent":"An event in which the duration or expiration time of an active timer is changed.","d3f:TimerSetEvent":"An event in which a software timer is initialized with a specific duration or expiration time.","d3f:WatchdogTimerConfigurationEvent":"An event in which a watchdog timer's timeout period or recovery action is configured.","d3f:WatchdogTimerEvent":"A watchdog timer event is any occurrence in which a watchdog timer is started, updated, reset, expired, or otherwise interacts with the system it monitors, resulting in a state change, status report, or corrective action intended to detect, signal, or recover from abnormal or stalled system behavior.","d3f:WatchdogTimerExpirationEvent":"An event indicating the watchdog timer was not serviced in time and triggers a reset or escalation action.","d3f:WatchdogTimerResetEvent":"An event where a watchdog timer is reset as a consequence of watchdog timer expiry or watchdog timer escalation policy.","d3f:WatchdogTimerServiceEvent":"An event in which the watchdog timer is serviced (kicked/pet), extending the time until expiry."},Xe=[{name:"Artifacts",route:"/dao/artifact",entities:[{id:"d3f:AtomicClock",label:"Atomic Clock"},{id:"d3f:BootROM",label:"Boot ROM"},{id:"d3f:Clock",label:"Clock"},{id:"d3f:DigitalSignalProcessingApplication",label:"Digital Signal Processing Application"},{id:"d3f:ElectricalSignal",label:"Electrical Signal"},{id:"d3f:FlightSoftware",label:"Flight Software"},{id:"d3f:FPGABitstream",label:"FPGA Bitstream"},{id:"d3f:GNSSReceiver",label:"GNSS Receiver"},{id:"d3f:GNSSSatellite",label:"GNSS Satellite"},{id:"d3f:GNSSSignal",label:"GNSS Signal"},{id:"d3f:GNSSTimeRecord",label:"GNSS Time Record"},{id:"d3f:HardwareClock",label:"Hardware Clock"},{id:"d3f:HardwareClockDeviceDriver",label:"Hardware Clock Device Driver"},{id:"d3f:HardwareDeviceConfiguration",label:"Hardware Device Configuration"},{id:"d3f:HardwareTimer",label:"Hardware Timer"},{id:"d3f:HardwareTimerDeviceDriver",label:"Hardware Timer Device Driver"},{id:"d3f:HardwareWatchdogTimer",label:"Hardware Watchdog Timer"},{id:"d3f:OperatingSystemClock",label:"Operating System Clock"},{id:"d3f:Real-timeClock",label:"Real-time Clock"},{id:"d3f:Real-timeOperatingSystem",label:"Real-time operating system"},{id:"d3f:Receiver",label:"Receiver"},{id:"d3f:SafeMode",label:"Safe Mode"},{id:"d3f:Satellite",label:"Satellite"},{id:"d3f:SatelliteTransponder",label:"Satellite Transponder"},{id:"d3f:Signal",label:"Signal"},{id:"d3f:SoftwareClock",label:"Software Clock"},{id:"d3f:SoftwareTimer",label:"Software Timer"},{id:"d3f:SoftwareWatchdogTimer",label:"Software Watchdog Timer"},{id:"d3f:Software-definedRadio",label:"Software-defined Radio"},{id:"d3f:Software-definedRadioComputer",label:"Software-Defined Radio Computer"},{id:"d3f:Software-definedRadioConfiguration",label:"Software-defined Radio Configuration"},{id:"d3f:Software-definedRadioDevice",label:"Software-Defined Radio Device"},{id:"d3f:Software-definedRadioWaveformApplication",label:"Software-defined Radio Waveform Application"},{id:"d3f:Spacecraft",label:"Spacecraft"},{id:"d3f:SpacecraftComputer",label:"Spacecraft Computer"},{id:"d3f:SpacecraftSafeMode",label:"Spacecraft Safe Mode"},{id:"d3f:SystemTime",label:"System Time"},{id:"d3f:TimeRecord",label:"Time Record"},{id:"d3f:Timer",label:"Timer"},{id:"d3f:Transceiver",label:"Transceiver"},{id:"d3f:Transmitter",label:"Transmitter"},{id:"d3f:Transponder",label:"Transponder"},{id:"d3f:Vehicle",label:"Vehicle"},{id:"d3f:VehicleComputer",label:"Vehicle Computer"},{id:"d3f:VehicleControlSoftware",label:"Vehicle Control Software"},{id:"d3f:VehicleOperatingMode",label:"Vehicle Operating Mode"},{id:"d3f:VehicleSoftware",label:"Vehicle Software"},{id:"d3f:WatchdogTimer",label:"Watchdog Timer"},{id:"d3f:WiredLink",label:"Wired Link"},{id:"d3f:WirelessCommand",label:"Wireless Command"},{id:"d3f:WirelessLink",label:"Wireless Link"}]},{name:"Countermeasures",route:"/technique",entities:[{id:"d3f:BusMessageAuthentication",label:"Bus Message Authentication"},{id:"d3f:ElectromagneticRadiationHardening",label:"Electromagnetic Radiation Hardening"},{id:"d3f:RadiationHardening",label:"Radiation Hardening"}]},{name:"Events",route:"/event",entities:[{id:"d3f:ClockEvent",label:"Clock Event"},{id:"d3f:ClockSynchronizationEvent",label:"Clock Synchronization Event"},{id:"d3f:HardwareClockEvent",label:"Hardware Clock Event"},{id:"d3f:HardwareTimerConfigurationEvent",label:"Hardware Timer Configuration Event"},{id:"d3f:HardwareTimerEvent",label:"Hardware Timer Event"},{id:"d3f:HardwareTimerInterruptEvent",label:"Hardware Timer Interrupt Event"},{id:"d3f:PowerAndThermalDeviceEvent",label:"Power and Thermal Device Event"},{id:"d3f:RTCUpdateEvent",label:"RTC Update Event"},{id:"d3f:SoftwareClockEvent",label:"Software Clock Event"},{id:"d3f:SoftwareTimerEvent",label:"Software Timer Event"},{id:"d3f:Software-definedRadioEvent",label:"Software-defined Radio Event"},{id:"d3f:Software-definedRadioRFStateChangeEvent",label:"Software-defined Radio RF State Change Event"},{id:"d3f:Software-definedRadioWaveformApplicationConfigurationEvent",label:"Software-defined Radio Waveform Application Configuration Event"},{id:"d3f:Software-definedRadioWaveformApplicationLoadEvent",label:"Software-defined Radio Waveform Application Load Event"},{id:"d3f:SystemClockUpdateEvent",label:"System Clock Update Event"},{id:"d3f:TimerEvent",label:"Timer Event"},{id:"d3f:TimerExpirationEvent",label:"Timer Expiration Event"},{id:"d3f:TimerModificationEvent",label:"Timer Modification Event"},{id:"d3f:TimerSetEvent",label:"Timer Set Event"},{id:"d3f:WatchdogTimerConfigurationEvent",label:"Watchdog Timer Configuration Event"},{id:"d3f:WatchdogTimerEvent",label:"Watchdog Timer Event"},{id:"d3f:WatchdogTimerExpirationEvent",label:"Watchdog Timer Expiration Event"},{id:"d3f:WatchdogTimerResetEvent",label:"Watchdog Timer Reset Event"},{id:"d3f:WatchdogTimerServiceEvent",label:"Watchdog Timer Service Event"}]}];let P=W(Na([])),M=W(""),G=W(!0),k=W(void 0),N=W("idle"),I;Fa(()=>{$e()});async function $e(){A(G,!0),A(M,"");try{const t=await fetch(s(Le));if(!t.ok)throw new Error(`SPARTA technique artifact restrictions returned HTTP ${t.status}.`);const r=await t.json();if(!Array.isArray(r.sparta_technique_artifact_rows))throw new Error("SPARTA technique artifact restrictions returned an unexpected shape.");A(P,r.sparta_technique_artifact_rows,!0)}catch(t){console.error(t),A(P,[],!0),A(M,"SPARTA technique artifact restrictions could not be loaded.")}finally{A(G,!1)}}function Je(){try{Qe(),he("copied")}catch(t){console.error(t),he("error")}}function Qe(){if(!o(k))throw new Error("SPARTA integration table element was not found for clipboard copy.");const t=window.getSelection();if(!t)throw new Error("Window selection API is unavailable for the SPARTA integration table.");t.removeAllRanges();const r=document.createRange();r.selectNodeContents(o(k)),t.addRange(r);const d=document.execCommand("copy");if(t.removeAllRanges(),!d)throw new Error("The browser failed to copy the SPARTA integration table.")}function he(t){I&&clearTimeout(I),A(N,t,!0),t!=="idle"&&(I=setTimeout(()=>{A(N,"idle")},2500))}function Ke(){return o(N)==="copied"?"Copied":o(N)==="error"?"Copy failed":"Copy"}function Ye(t){if(!t.clipboardData)throw new Error("Clipboard data is unavailable for the SPARTA integration table.");t.preventDefault();const r=ea(o(P));t.clipboardData.setData("text/plain",r),t.clipboardData.setData("text/csv",r),t.clipboardData.setData("text/html",Ze())}function Ze(){if(!o(k))throw new Error("SPARTA integration table element was not found for HTML serialization.");const t=o(k).cloneNode(!0);for(const r of t.querySelectorAll("a"))r.setAttribute("href",r.href);return t.outerHTML}function ea(t){const r=[ge(["SPARTA Technique ID","SPARTA Technique","Relation","Artifact"])];for(const d of aa(t))r.push(ge([d.technique_id,d.technique_name,d.relation_label,d.artifact_name]));return r.join(`\r
`)}function aa(t){const r=[];for(const d of t)for(const l of d.relationship_groups)for(const c of l.artifacts)r.push({technique_id:d.technique_id,technique_name:d.technique_name,relation_label:l.relation_label,artifact_name:c.artifact_name??c.artifact_id});return r}function ge(t){return t.map(ta).join(",")}function ta(t){const r=String(t??"");return r.includes(",")||r.includes('"')||r.includes(`
`)||r.includes("\r")?`"${r.replaceAll('"','""')}"`:r}var ue=Ya(),ve=me(ue);ja(ve,{title:"D3FEND for Space",og_title:"MITRE D3FEND for Space",og_type:"website",og_url:"https://d3fend.mitre.org/domain/space/",og_image:"https://d3fend.mitre.org/img/domain/space/d4s_background.jpeg",og_description:"D3FEND for Space extends the MITRE D3FEND ontology with space-specific artifacts, events, and countermeasures to model spacecraft, ground stations, and related systems."});var be=i(ve,2),j=i(a(be),4),we=a(j),ia=i(we,4);e(j);var B=i(j,6),ra=i(a(B));E(3),e(B);var L=i(B,4),oa=i(a(L));E(),e(L);var U=i(L,18),ye=i(a(U),4),na=i(a(ye),2);E(),e(ye),e(U);var V=i(U,6),Se=i(a(V)),_e=i(a(Se),3),Ae=i(a(_e)),Te=a(Ae),xe=i(a(Te),2),sa=i(a(xe));E(),e(xe),e(Te),e(Ae),e(_e),e(Se),e(V);var X=i(V,4),da=i(a(X));E(),e(X);var $=i(X,2),la=i(a($));E(3),e($);var J=i($,6);F(J,21,()=>Xe,t=>t.name,(t,r)=>{var d=La(),l=a(d),c=a(l),b=a(c,!0);e(c);var m=i(c);e(l);var w=i(l,2),p=i(a(w));F(p,21,()=>o(r).entities,f=>f.id,(f,g)=>{var y=Ba(),S=a(y),T=a(S),D=a(T,!0);e(T),e(S);var R=i(S),C=a(R,!0);e(R),e(y),x(_=>{n(T,"href",_),n(T,"title",o(g).id),u(D,o(g).label),u(C,Ve[o(g).id])},[()=>s(`${o(r).route}/${o(g).id}`)]),h(f,y)}),e(p),e(w),e(d),x(()=>{u(b,o(r).entities.length),u(m,` ${o(r).name??""}`)}),h(t,d)}),e(J);var Q=i(J,6),Re=i(a(Q)),K=a(Re),Ee=i(a(K),2),ke=a(Ee),Y=a(ke),ca=a(Y);e(Y);var Z=i(Y,2),pa=a(Z);e(Z);var De=i(Z,2),fa=a(De);e(De),e(ke),e(Ee),e(K);var ee=i(K),Ce=i(a(ee),2),Fe=a(Ce),ae=a(Fe),ma=a(ae);e(ae);var Pe=i(ae,2),ha=a(Pe);e(Pe),e(Fe),e(Ce),e(ee);var te=i(ee),Ne=i(a(te),2),qe=a(Ne),ie=a(qe),ga=a(ie);e(ie);var re=i(ie,2),ua=a(re);e(re);var We=i(re,2),va=a(We);e(We),e(qe),e(Ne),e(te);var Me=i(te),He=i(a(Me),2),ze=a(He),oe=a(ze),ba=a(oe);e(oe);var ne=i(oe,2),wa=a(ne);e(ne);var se=i(ne,2),ya=a(se);e(se);var Oe=i(se,2),Sa=a(Oe);e(Oe),e(ze),e(He),e(Me),e(Re),e(Q);var de=i(Q,4);F(de,21,()=>Ue,t=>t.model,(t,r)=>{var d=Ua(),l=a(d),c=a(l),b=a(c);e(c);var m=i(c,2),w=a(m,!0);e(m),e(l),e(d),x((p,f)=>{n(l,"href",p),n(b,"src",f),n(b,"alt",o(r).name),u(w,o(r).name)},[()=>s(`/cad/?load=../resources/cad/domain/space/${o(r).model}.json&render_meta=true`),()=>s(o(r).image)]),h(t,d)}),e(de);var H=i(de,6),_a=a(H);e(H);var Aa=i(H,2);{var Ta=t=>{var r=$a(),d=me(r),l=a(d),c=a(l,!0);e(l),e(d);var b=i(d,4),m=a(b),w=i(a(m));F(w,21,()=>o(P),p=>p.technique_id,(p,f)=>{var g=Xa(),y=a(g),S=a(y),T=a(S);e(S),e(y);var D=i(y),R=a(D),C=a(R);F(C,21,()=>o(f).relationship_groups,_=>_.relation_label,(_,z)=>{var O=Wa(),le=me(O);F(le,17,()=>o(z).artifacts,q=>q.artifact_id,(q,Ge)=>{var ce=Va(),pe=a(ce),ka=a(pe,!0);e(pe);var Ie=i(pe),fe=a(Ie),Da=a(fe,!0);e(fe),e(Ie),e(ce),x(Ca=>{u(ka,o(z).relation_label),n(fe,"href",Ca),u(Da,o(Ge).artifact_name)},[()=>s(`/dao/artifact/${o(Ge).artifact_id}`)]),h(q,ce)}),h(_,O)}),e(C),e(R),e(D),e(g),x(_=>{n(S,"href",_),u(T,`${o(f).technique_id??""}: ${o(f).technique_name??""}`)},[()=>s(`/offensive-technique/attack/${o(f).technique_id}/`)]),h(p,g)}),e(w),e(m),Ia(m,p=>A(k,p),()=>o(k)),e(b),x(p=>{Ha(l,1,"sparta-table-copy-button "+o(N)),u(c,p)},[()=>Ke()]),Oa("click",l,Je),Ga("copy",m,Ye),h(t,r)},xa=t=>{var r=Ja();h(t,r)},Ra=t=>{var r=Qa(),d=a(r,!0);e(r),x(()=>u(d,o(M))),h(t,r)},Ea=t=>{var r=Ka();h(t,r)};Ma(Aa,t=>{o(P).length>0?t(Ta):o(G)?t(xa,1):o(M)?t(Ra,2):t(Ea,-1)})}E(6),e(be),x((t,r,d,l,c,b,m,w,p,f,g,y,S,T,D,R,C,_,z,O,le,q)=>{n(we,"src",t),n(ia,"src",r),n(ra,"href",d),n(oa,"href",l),n(na,"href",c),n(sa,"href",b),n(da,"href",m),n(la,"href",w),n(ca,"href",p),n(pa,"href",f),n(fa,"href",g),n(ma,"href",y),n(ha,"href",S),n(ga,"href",T),n(ua,"href",D),n(va,"href",R),n(ba,"href",C),n(wa,"href",_),n(ya,"href",z),n(Sa,"href",O),n(H,"href",le),n(_a,"src",q)},[()=>s("/img/domain/space/ussf_logo.png"),()=>s("/img/domain/space/md6_logo.png"),()=>s("/blog/getting-started-with-d3fend-for-ot/"),()=>s("/ontology"),()=>s("/dao/artifact/d3f:SpacecraftComputer"),()=>s("/cad"),()=>s("/blog/getting-started-with-d3fend-for-ot/"),()=>s("/cad/?load=../resources/cad/domain/space/ops-sat-firmware-mod.json&render_meta=true"),()=>s("/dao/artifact/d3f:Firmware"),()=>s("/dao/artifact/d3f:FlightSoftware"),()=>s("/dao/artifact/d3f:SpacecraftComputer"),()=>s("/dao/artifact/d3f:WirelessLink"),()=>s("/dao/artifact/d3f:Software-definedRadio"),()=>s("/dao/artifact/d3f:FlightSoftware"),()=>s("/dao/artifact/d3f:BootLoader"),()=>s("/dao/artifact/d3f:BootROM"),()=>s("/dao/artifact/d3f:WirelessCommand"),()=>s("/dao/artifact/d3f:Transmitter"),()=>s("/dao/artifact/d3f:Transceiver"),()=>s("/dao/artifact/d3f:Receiver"),()=>s("/img/domain/space/sparta_mappings.jpg"),()=>s("/img/domain/space/sparta_mappings.jpg")]),h(je,ue),qa()}za(["click"]);export{pt as component};
