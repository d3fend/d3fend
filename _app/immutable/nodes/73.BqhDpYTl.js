import{s as w,n as d,d as p,i as D,v as A,c as u,w as T,h as y,b as h,e as b,g as x,M as E,j as v,N as F}from"../chunks/cxan7wOg.js";import{S as k,i as C,d as j,t as q,a as S,m as I,c as z,b as _}from"../chunks/DASJK2Q2.js";import{m as L}from"../chunks/CesSW9Du.js";/* empty css                */function O(r){let e,t='<div style="display: flex; just-content: space-between; align-items: center;"><div style="text-align: center; flex-grow: 1;"><h1 class="fancy-font">D3FEND <span class="snakes">☤</span> <span class="CAD"><span style="color:#e62929;">C</span><span class="A" style="color:white;text-border:1px;">A</span><span style="color:blue;">D</span></span></h1> <div style="text-align: center; padding: 0 px"><i>Cyber Attack-Defense Utility for Capturing Engagements and Understandable Scenarios</i></div> <br/></div></div>';return{c(){e=y("div"),e.innerHTML=t,this.h()},l(a){e=u(a,"DIV",{class:!0,"data-svelte-h":!0}),T(e)!=="svelte-60rjil"&&(e.innerHTML=t),this.h()},h(){A(e,"class","title-egg")},m(a,s){D(a,e,s)},p:d,i:d,o:d,d(a){a&&p(e)}}}class P extends k{constructor(e){super(),C(this,e,null,O,w,{})}}function R(r){let e,t,a,s,c,N=L(r[0])+"",f,o,m=`.content {
      min-width: 800px;
      max-width: 100%;
      overflow-x: auto;
      overflow: visible;
    }

    .content img {
      max-width: 95%;
      max-height: 400px;
      height: auto;
      display: block;
      margin: 1rem auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }

    /* Additional Styles - keep your existing table styles here */
    .content table {
      width: 100%;
      border-collapse: collapse;
      margin-bottom: 1rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    .content th, .content td {
      padding: 12px;
      border: 1px solid #ddd;
      text-align: left;
    }

    .content th {
      background-color: #3a3a3a; /* Using neutral color */
      color: white;
      font-weight: bold;
    }

    .content tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    .content tr:hover {
      background-color: #f1f1f1;
    }

    .zoom {
    padding: 0px;
    transition: transform .2s; /* Animation */
    width: auto;
    height: auto;
    margin: 0 auto;
  }

  .zoom:hover {
    transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
  }`,l;return t=new P({}),{c(){e=y("div"),_(t.$$.fragment),a=v(),s=y("section"),c=new F(!1),f=v(),o=y("style"),o.textContent=m,this.h()},l(n){e=u(n,"DIV",{});var i=b(e);z(t.$$.fragment,i),a=x(i),s=u(i,"SECTION",{class:!0});var g=b(s);c=E(g,!1),g.forEach(p),f=x(i),o=u(i,"STYLE",{"data-svelte-h":!0}),T(o)!=="svelte-1u50i2u"&&(o.textContent=m),i.forEach(p),this.h()},h(){c.a=null,A(s,"class","content")},m(n,i){D(n,e,i),I(t,e,null),h(e,a),h(e,s),c.m(N,s),h(e,f),h(e,o),l=!0},p:d,i(n){l||(S(t.$$.fragment,n),l=!0)},o(n){q(t.$$.fragment,n),l=!1},d(n){n&&p(e),j(t)}}}function U(r){return[`
# D3FEND CAD User Guide
Put the D3FEND ontology into action with the D3FEND **CAD** Tool!

CAD is a versatile tool designed to support many modeling and graphing use cases. A CAD graph serves as a realization of the D3FEND ontology, representing specific instances of the ontology's classes and relationships. 

## 1. Quickstart
- Load one of the the example CAD graphs by clicking <button>File</button> → <button>Example Graphs</button>.
  - The \`shadowcat.json\` example models the data contained within a CTI Report.
  - The \`bushwalk.json\` examples models malware "procedures".
  - The \`disk-formatting-contribution.json\` represents an advanced use case of CAD.
- Start building your own CAD graph
  - Drag and drop nodes onto the canvas to create your scenario, and connect them with relationships by hovering over the edges of a node.
  - Click the \`<d3fend class>\` on any node to filter on and select the desired class.
  - Right click on the various node types to apply ontology inference results to your graph.
- Extend the D3FEND ontology yourself! See the \`disk-formatting-contribution.json\` example graph.

## 2. CAD UI Elements
<div class="zoom"><p align="left"><img src="/img/ui_overview.jpg" style="border: 3px solid #555" alt="CAD UI Overview"></p></div>

### 2.1 Menu Bar
The CAD menu bar is where the options for things like saving CAD graphs, editing graph metadata, and fullscreen mode are found.

#### 2.1.1 File Menu
The <button>File</button> menu includes the following options:

- <button>Clear</button>: this clears the existing CAD graph. Note that if a graph has not been saved, it will be permanently gone when cleared
- <button>Load</button>: this loads a previously saved CAD JSON graph from the file system. For more information on loading CAD graphs, see section 4.1 below.
- <button>Import</button>
  - <button>STIX 2.1</button>: this imports a STIX 2.1 JSON document and attempts to render it in CAD, using a mapping between STIX 2.1 Objects and D3FEND ontology classes.
- <button>Example Graphs</button>: this displays the currently available example graphs. For more information on each graph see section 1. 
- <button>Save</button>: this saves the current graph as CAD JSON; before saving, it displays a dialog which allows the saved filename to be changed (the default value is \`d3fend-cad.json\`). For more information on saving and exporting CAD graphs, see section 5 below.
- <button>Save As</button>: this contains other options for saving the CAD graph; for more information, see section 5 below.
- <button>Share</button>: this allows for sharing the CAD graph as a URL; for more information, see section 6.1 below.
- <button>CAD Embed</button>: this allows for embedding the CAD graph in another web page; for more information, see section 6.2 below.

#### 2.1.2 Edit Menu
The <button>Edit</button> menu includes the following options:

- <button>Graph Metadata</button>: this brings up the CAD graph metadata editor, which allows for editing common metadata such as title, authors, organization, etc. In addition, it allows for the inclusion of one or more references applicable to the graph. 

#### 2.1.3 View Menu
The <button>View</button> menu includes the following options: 

- <button>Reset View</button>: this resets the zoom and orientation of the CAD graph to the default values. 
- <button>Fullscreen</button>: this sets the CAD browser tab to fullscreen mode, which can be helpful when working with larger graphs. Pressing \`Escape\` on the keyboard will exit fullscreen mode.

#### 2.1.4 Help Menu
The <button>Help</button> menu includes the following options: 

- <button>Documentation</button>: this navigates to this user guide.

### 2.2 Canvas
CAD's canvas is the space used to build out graphs and is empty by default. To start building a CAD graph, simply drag and drop one of the available nodes (see section 2.3 below) onto the canvas. 

<div class="zoom"><p align="left"><img src="/img/canvas_overview.jpg" style="border: 3px solid #555" alt="CAD Canvas Overview"></p></div>

#### 2.2.1 Canvas Features and Navigation
The CAD canvas includes several features to help with editing and navigating graphs:

- An overview pane which shows a zoomed-out version of the CAD graph, for help with navigating around large graphs.
- A set of buttons for zooming in/out of a graph, reverting to the default zoom level, and locking the graph so no further changes can be made. 

Additionally, the CAD canvas supports mouse-based navigation:
- Left-clicking and dragging the canvas can be used to move around a graph.
- The mouse-wheel can be used zoom in/out of a graph.

### 2.3 Nodes
Nodes are the building blocks of CAD graphs, and are used to represent various entities derived from the D3FEND ontology. CAD groups its nodes into several categories (e.g., 'Action') based on similarities in their semantics and purpose. 

#### 2.2.1 Action nodes
Action nodes are intended to capture actions that occurred or may occur in the cyber domain.

|Node|Description|Example|
|----|-----------|-------|
|Event|This node captures instances of digital events and is therefore mapped to the \`d3f:DigitalEvent\` ontology class.|Remote Command|
|Attack|This node captures instances of attacker steps (i.e., as part of a kill chain) and is therefore mapped to the \`d3f:ATTACKEnterprise\` ontology class which captures the full set of ATT&CK Techniques.|Keylogging|
|Countermeasure|This node captures instances of cyber countermeasures and is therefore mapped to the full set of defensive Tactics and Techniques available in D3FEND.|File Carving|

#### 2.2.2 Object nodes
Object nodes are intended to granularly capture objects associated with the cyber domain.

|Node|Description|Example|
|----|-----------|-------|
|Digital Artifact|This node captures instances information bearing artifacts associated with a digital computer system and is therefore mapped to the \`d3f:DigitalArtifact\` ontology class.|Network Packet|
|Agent|This node captures an instance of a person or non-person entity, including threat actors.|APT39|

#### 2.2.3 State nodes
State nodes are intended to capture states or conditions that may be associated with other CAD nodes. 

|Node|Description|Example|
|----|-----------|-------|
|Vulnerability|This node captures instances of software vulnerabilities (e.g., a particular CVE) and their underlying weaknesses, and is therefore mapped to the \`d3f:Weakness\` ontology class.|Absolute Path Traversal|
|Condition|This node captures any condition associated with another CAD entity, and is therefore open-ended in nature.|The resulting effect of a particular Attack node.|

#### 2.2.4 Miscellaneous nodes
Miscellaneous nodes are entities that can provide additional context about other nodes or capture things that aren't in the CAD menus (either because they are too abstract for general scenario use or are out of scope for the D3FEND ontology).

|Node|Description|Example|
|----|-----------|-------|
|Note|This node is intended to capture any notes, comments, or annotations that can provide additional context in a CAD graph.|N/A|
|Thing|This node is intended to capture any objects or concepts that are outside the scope of D3FEND, such as non-cyber physical entities.|Data Center|

### 2.4 Node Details
The node details tab allows for the editing of several node instance components. For information on its usage, see section 3.1.1.2 below. 

### 2.5 Current Filename
The current filename dialog displays the name of the currently active CAD graph JSON file. When loading files (see section 4.1 for more information), this will display the name of the loaded JSON file. When constructing new CAD graphs, this defaults to a value of \`d3fend-cad.json\`. Left-clicking on this dialog also allow for the filename to be edited (e.g., before saving a CAD graph).

## 3. Working with CAD Graphs
### 3.1 Adding and Editing Nodes
To add a node to a CAD graph, simply click and drag the required node onto the graph. Once the node has been placed, it can be populated with information (either free-form or derived from the D3FEND ontology, depending on the node) and moved around as needed.

Once a node has been added to a CAD graph, it is referred to as a 'node instance.' 

#### 3.1.1 Editing Node Instances
<p align="left"><img src="/img/node_anatomy.jpg" style="border: 3px solid #555" alt="CAD Node Overview"></p>

Node instances have several components that can be edited: 

1. A label, which serves as a short identifier of the node instance. For example, if the intent is to capture an instance of the Cisco Web Application Firewall, an appropriate label for a Digital Artifact node with a class of \`d3f:WebApplicationFirewall\` could be 'Cisco WAF'. The default value for all labels is \`<label>\`; if a class is set for a node instance, the label is automatically updated to the name of the class. 
    - To edit a label, simply left-click on its value and type the desired text. 
2. The D3FEND class or custom class that the node is an instance of. For example, if the intent is capture an instance of the Process Injection ATT&CK Technique, an Attack node instance with a class value of \`d3f:T1055\` should be used. Note that the Thing node type is the only one which, by design, supports custom classes that are not mapped to the D3FEND ontology.
    - Nodes which have classes that are mapped to the D3FEND ontology (see table below) include a picker dialog with hierarchical view of corresponding D3FEND classes. This also supports keyword-based filtering; for example, to view all of the D3FEND file-related digital artifacts, simply select the \`<d3fend class>\` on a Digital Artifact node, and type 'file' into the \`Filter/Save\` text box.
3. Properties, which are key/value pairs that capture additional information relating to the instance. For example, a property with a key of "MD5 hash" could be used to capture an MD5 cryptographic hash value on a Digital Artifact that is an instance of the \`d3f:File\` class. Properties are not included by default on node instances, and therefore need to be manually populated.
    - To add a property to a node instance, hover over the node and click on the \`+\` icon in the bottom-left corner. This will create an empty property, with the key on the left and the value on the right. Properties can be deleted, added, and edited by clicking on a node instance and then opening the node details tab; see section 3.1.1.2 below for more information.

##### 3.1.1.1 Using the D3FEND Class Picker on Node Instances 
<p align="left"><img src="/img/class_picker_example.jpg" style="border: 3px solid #555" alt="Class Picker Example"></p>

For choosing the appropriate D3FEND class for a node instance, CAD includes a class picker dialog which includes both list-based and ontology-based views of the available classes. The left pane of the picker dialog is where the list-based view is shown and where any keywords can be typed to help filter down the list. The right pane of the picker dialog shows the ontology-based view of the classes. Hovering over class values in the list-based view automatically shows the full taxonomy in the ontology-based view under which the class is found; left-clicking a class in either pane will select it for the node instance and will close the dialog. 

##### 3.1.1.2 Available Node Instance Components
All node instances have labels, but availability of the other components depends on the class of node. See the below table for the breakdown. 

|Node|Has D3FEND Class Mapping|Has Properties|Has Arbitrary Class Mapping|
|----|------------------------|--------------|---------------------------|
|Agent|No|**Yes**|No|
|Attack|**Yes**|**Yes**|No|
|Condition|No|**Yes**|No|
|Countermeasure|**Yes**|**Yes**|No|
|Digital Artifact|**Yes**|**Yes**|No|
|Event|**Yes**|**Yes**|No|
|Note|No|No|No|
|Thing|No|**Yes**|**Yes**|
|Vulnerability|**Yes**|**Yes**|No|

##### 3.1.1.3 Using the Node Details Tab
The node details tab is found in the upper right corner of CAD (to the right of all of the nodes).  It's a black triangle with a \`<\` symbol.

<p align="left"><img src="/img/node_details_example.jpg" style="border: 3px solid #555" alt="Node Details Example"></p>

To make use of the node details tab, select a node instance by left-clicking on it (its edges will be highlighted in blue) and then open the node details tab. Once opened, it presents the following options:

- \`id\`: This allows editing the identifier assigned to the node instance. CAD generates these identifiers automatically, but a custom value can be used if desired.
- \`label\`: This allows editing the label given to the node instance. 
- \`properties\`: This allows adding, editing, or removing properties on a node instance. Existing node instance properties will show up as entries under this section, and can be deleted by clicking on the \`x\` to their right. To add a new property, click on \`Add Property\`, which will appear as an empty entry in this section as well as on the node instance itself. 

#### 3.1.2 Resizing and Moving Nodes
Node instances can be resized by selecting a node with left-click (its edges will be highlighted in blue) and then hovering the mouse cursor over one of the corners so that the resize icon (a diagonal two-headed arrow) appears. This allows the node instance to be resized on both the horizontal and vertical axes. Note that node instances always have a minimum size on the horizontal axis, so they cannot be resized any smaller than this value; additionally, adding any properties to a node instance increases this minimum size.

To move a node instance around the CAD canvas, simply use the mouse to left-click and hold the inside of the instance, and then drag it around the graph as needed.

#### 3.1.3 Context Menus and Deleting and Duplicating Node Instances
<p align="left"><img src="/img/node_context_menu.jpg" style="border: 3px solid #555" alt="Node Context Menu Example"></p>

All CAD node instances in a graph include a context menu, which is available by right-clicking on the node. By default, all node instances include the options of \`duplicate\` and \`delete\`, which either create a copy of the node, or delete it from the CAD graph, respectively. Certain types of nodes also include other options in this menu that make use of inferences in the D3FEND ontology; for more information on these options, refer to section 3.3 below.

### 3.2 Adding and Editing Relationships
<p align="left"><img src="/img/relationships_overview.jpg" style="border: 3px solid #555" alt="Relationships Overview"></p>

Relationships between two node instances can be added by left-clicking on one of the black circles that appear on each side of a node instance after it has been selected (its edges will be highlighted in blue), and then (while still holding down the mouse button) dragging the dotted line that appears to another node.  Note that relationships are directional, and the direction is determined automatically as going from the starting node (source) to the destination node (target).

#### 3.2.1 Relationship Labels
Each relationship includes a label that describes the 'type' of the relationship, and is set to a value of \`undefined\` by default. To change the label, simply left-click on it, which brings up a context menu that includes all of the relationships currently defined in D3FEND; this menu also supports adding any custom relationships as needed. CAD includes a set of relationship types based on those defined in the D3FEND ontology, which are shown as a hierarchical view in a picker dialog that supports filtering, just as with D3FEND classes on node instances. 

#### 3.2.1.1 Available Relationships
The following table lists the relationships currently available in D3FEND, and therefore as labels in CAD.

|Relationship|Alternative Labels|Definition|
|------------|------------------|----------|
|abuses|misapplies, misuses|x abuses y: The entity x applies an artifact y to a wrong thing or person; x applies y badly or incorrectly.|
|accessed-by|---|---|
|accesses|---|x accesses y: An subject x takes the action of reading from, writing into, or executing the stored information in the object y. Reads, writes, and executes are specific cases of accesses.|
|addressed-by|---|x addressed-by y: Relates a resource x (e.g., network host, peripheral device, disk sector, a memory cell or other logical or physical entity) to a discrete address y in an address space that points to it.|
|addresses|points-to|x addresses y: Relates a pointer x to a digital artifact y located in the address space to which x points. The address space is part of some digital store, whether it be in memory, an image, or a persistent storage device.|
|adds|---|x adds y: The subject x adds a data object y, such as a file, to some other digital artifact, such as a directory. Examples include an agent or technique adding a record to a database. or a domain entry to a DNS server.|
|analyzes|---|x analyzes y: The subject x break down object y into components or essential features, assessing y by quantitative methods, qualitative methods, or both.  Usually the analysis is done in terms of some model or framework.|
|assessed-by|---|---|
|assesses|---|---|
|associated-with|---|x associated-with y: The subject x and object y are associated in some way.  This is the most general definite relationship in d3fend (i.e., most general relationship that is not prefixed by 'may-').|
|attached-to|---|x attached-to y: A subject x is joined in close association to an object y.|
|attack-may-be-countered-by|---|---|
|authenticates|---|x authenticates y: The subject x establishes the authenticity of some y. This relation indicates an authentication event has occurred.|
|author|---|---|
|authorizes|---|x authorizes y: A subject x grants authorization or clearance for an agent y to use an object.  This relation indicates an authorization event has occurred.|
|blocks|---|x blocks y: The entity x blocks off the use of digital artifact y by reference to a block or allow list (or both).|
|broader|---|---|
|broader-transitive|---|---|
|caused-by|---|x caused-by y: The event or action x occurs as a consequence of event or action y.|
|causes|---|x causes y: The event or action x brings about event or action y as a consequence.|
|cited-by|---|---|
|cites|---|---|
|claimed-by|---|---|
|claims|---|---|
|configures|---|---|
|connects|---|x connects y: The subject x joins system y by means of communication equipment (to some other system, typically the adversary-targeted host).|
|contained-by|---|---|
|contains|---|---|
|copies|---|x copies y: An technique or agent x reproduces or makes and exact copy of some digital artifact y.|
|copy-of|---|x copy-of y: The subject x is a duplicate of the object y.|
|counters|---|---|
|created-by|---|---|
|creates|---|x creates y: The subject x bring into existence an object y.  Some technique or agent x creates a persistent digital artifact y (as opposed to production of a consumable or transient object.); i.e., bring forth or generate.|
|creator|---|---|
|deceives|---|---|
|deceives-with|---|---|
|deletes|---|x deletes y: A technique or agent x wipes out the digitally or magnetically recorded information of digital object y.|
|dependent|---|x dependent y: A dependent y is an entity that requires the fulfillment of the requirements specified in dependency x.|
|depends-on|---|x depends-on y: The entity x is contingent on y being available; x relies on y.|
|detects|---|---|
|disables|---|x disables y: The technique or agent x makes an entity y unable to perform its actions or capabilities.|
|drives|---|x drives y: The device driver x causes a system component y to function by controlling it.|
|employed-by|---|x employed-by y: An entity x is put into service by a technique or agent y.  Inverse of y employs x.|
|employs|---|---|
|enabled-by|---|x enabled-by y: A top level technique y enables a tactic x, that is, the property indicates that a technique y is used to put a particular tactic x into action. In other words, y renders x capable or able for some task.  Inverse of enables.|
|enables|---|x enables y: A top level technique x enables a tactic y, that is, the property indicates that a technique x is used to put a particular tactic y into action. In other words, x renders y capable or able for some task.|
|encrypts|---|x encrypts y: The entity x converts the ordinary representation of a digital artifact y into a secret code.|
|end|---|---|
|enumerates|---|x enumerates y: The subject x takes the action of reading from a digital source y to acquire data and create a list of its contents.|
|erases|---|---|
|evaluated-by|---|---|
|evaluates|---|---|
|evaluator|---|---|
|evicts|---|---|
|exactly|---|---|
|executed-by|---|---|
|executes|---|x executes y: The subject x takes the action of carrying out (executing) y, which is a single software module, function, or instruction.|
|extends|---|x extends y: The entity x extend the scope or range or area of entity y, especially in the sense of widen the range of applications.|
|features|---|---|
|filters|---|x filters y: An technique or agent x removes some specified set of of entities from the content of a digital artifact y, by passing an artifact's content through a filter.  A filter is a device that removes something from whatever passes through it.|
|forges|---|x forges y: An technique or agent x counterfeits a digital artifact y, such as a fake credential, with the intent to deceive.|
|fork|---|---|
|hardens|---|---|
|has-account|---|x has-account y: The subject x has ownership or possession of some account y.|
|has-agent|---|---|
|has-contribution|---|---|
|has-contributor|---|---|
|has-dependent|---|---|
|has-evidence|---|---|
|has-feature|---|---|
|has-implementation|---|---|
|has-location|located_in|x has-location y: The entity x is situated in a particular spot or position y.|
|has-mediator|---|---|
|has-member|---|---|
|has-participant|---|x has-participant y: The event x involves an object y as a participant, indicating that y plays some role in the event, whether actively, passively, or otherwise.|
|has-procedure|---|---|
|has-recipient|---|x has_recipient y: An agent y is the intended recipient and decoder of the information contained in communication x.|
|has-sender|---|x has_sender y: An agent y is the sender and encoder of the information contained in communication x.|
|has-weakness|---|---|
|hides|---|x hides y: A technique or operation x conceals the digital artifact y.|
|identified-by|---|---|
|identifies|---|---|
|impairs|---|---|
|implemented-by|---|---|
|implements|---|---|
|initiates|---|---|
|injects|---|x injects y: The subject x takes the action of exploiting a security flaw by introducing (injecting) y, which is code or data that will change the course of execution or state of a computing process to an alternate course or state. Typically code injection is associated with adversaries intending the alternate course to facilitate a malevolent purpose; however, code injection can be unintentional or the intentions behind it may be good or benign.|
|installs|---|x installs y: An entity x sets up a digital artifact y for subsequent use.  For example, an installation program can install application software.|
|instructed-by|---|x instructed-by y: A subject x takes machine instructions from object y.|
|instructs|---|x instructs y: A subject x delivers machine instructions to object y.|
|interprets|---|x interprets y: The subject x interprets the executable script y. The sense of interprets is here 'Parse the source code and perform its behavior directly.'|
|inventoried-by|---|---|
|inventories|---|---|
|invoked-by|---|---|
|invokes|calls|x invokes y: The subject x invokes a system service y by use of an instruction object y that interrupts the program being executed and passes control to the operating system to perform that operation.|
|isolates|---|x isolates y: The technique or agent x sets digital artifact y apart from other digital artifacts, sequestering y.|
|kb-reference|has-technique-reference|---|
|kb-reference-of|kb-is-example-of|x kb-is-example-of y: The reference x is an example of technique y.|
|license|---|---|
|limits|cutoff|x limits y: An entity x specifies a designated limit beyond which some entity y cannot function or must be terminated.|
|loaded-by|---|---|
|loads|---|x loads y: The technique or process x transfers a software from a storage y to a computer's memory for subsequent execution.|
|manages|oversees, supervises|x manages y: The technique or agent x watches and directs the use of a digital artifact y.|
|mapped-by|---|---|
|maps|---|---|
|may-access|---|x may-access y: They entity x may access the thing y; that is, 'x accesses y' may be true.|
|may-add|---|x may-add y: They entity x may add the thing y; that is, 'x adds y' may be true.|
|may-be-accessed-by|---|---|
|may-be-associated-with|---|x may-be-associated-with y: The subject x and object y may be associated in some way.|
|may-be-contained-by|---|---|
|may-be-created-by|---|---|
|may-be-deceived-by|---|---|
|may-be-detected-by|---|---|
|may-be-evicted-by|---|---|
|may-be-hardened-against-by|---|---|
|may-be-invoked-by|---|---|
|may-be-isolated-by|---|---|
|may-be-modified-by|---|---|
|may-be-tactically-associated-with|---|x may-be-tactically-associated-with y: the defensive technique x may be a tactic that counters offensive technique y.|
|may-be-weakness-of|---|---|
|may-contain|---|to potentially have as contents or constituent parts; comprise; include.|
|may-counter|---|---|
|may-counter-attack|---|---|
|may-create|---|x may-create y: They entity x may create the entity y; that is, 'x creates y' may be true.|
|may-deceive|---|---|
|may-detect|---|---|
|may-disable|---|---|
|may-evaluate|---|---|
|may-evict|---|---|
|may-execute|---|x may execute y: The subject x might take the action of carrying out (executing) y, which is a single software module, function, or instruction.|
|may-harden|---|---|
|may-have-weakness|---|---|
|may-interpret|---|x may-interpret y: They entity x may interpret the thing y; that is, 'x interprets y' may be true.|
|may-invoke|---|x may-invoke y: They entity x may invoke the thing y; that is, 'x invokes y' may be true.|
|may-isolate|---|---|
|may-map|---|---|
|may-modify|---|x may-modify y: They entity x may modify the thing y; that is, 'x modifies y' may be true.|
|may-produce|---|x may-produce y: They entity x may produce the thing y; that is, 'x produces y' may be true.|
|may-query|---|---|
|may-run|---|x may-run y: They entity x may run the thing y; that is, 'x runs y' may be true.|
|may-transfer|---|x may-transfer y: They entity x might send the thing y; that is, 'x transfers y' may be true.|
|member-of|---|---|
|modified-by|---|---|
|modifies|alters|x modifies y: A technique or agent x causes a digital object y to change; become different; or undertake a transformation.  Afterwards, the data or state held by a digital object is changed.|
|modifies-part|---|x modifies-part y: The entity x modifies a part of y.  [Note: This is a rolification property for the rule 'if one modifies a part of a whole, they modify the whole.'  Reasoning for this and similar semantics to come are under evaluation and not part of current d3fend inferences.]|
|monitors|---|x monitors y: The technique or agent x keep tabs on; keeps an eye on; or keep the digital artifact y under surveillance.|
|narrower|---|---|
|narrower-transitive|---|---|
|neutralizes|---|x neutralizes y: The technique x makes the execution of actions of y ineffective by preventing or counterbalancing the effect of y.|
|next|---|---|
|obfuscates|---|x obfuscates y: The technique x makes the digital artifact y unclear or obscure.  Typically obfuscation is a way to hide a digital artifact from discovery, use, or both.|
|originates-from|---|x originates-from y: The digital event or artifact x began its network transit from a physical location y.|
|owns|possesses|x owns y: The subject x has ownership or possession of some object y.|
|participates-in|---|x participates-in y: The object x takes part in the event y, signifying that x contributes to or is affected by the event’s occurrence in some way.|
|preceded-by|---|x preceded-by y: The event or action x occurs after event or action y in time.|
|precedes|---|x precedes y: The event or action x occurs before event or action y in time.|
|process-ancestor|---|x process-ancestor y: The process y is a process ancestor of process x, indicating one or more process creation events were conducted were started at process y and subsequently created process x.|
|process-image-path|processImagePath|x process-image-path y: The filepath y is the process image path for the process x, indicating the path to the resource from which the process's image was loaded.|
|process-parent|processParent|x process-parent y: The process y created the process x (directly) with a create process event.|
|process-property|---|x process-property y: Process x has the a process-property y.  This is generalization for specific process object properties.|
|process-user|processUser|x process-user y: The process x has been executed by the user y.|
|produced-by|---|---|
|producer|---|---|
|produces|outputs|x produces y: The subject entity x or process produces a data object y, which may be discrete digital object or a stream (e.g., a stream such as network traffic.)|
|provider|---|x provider y: A provider y is an entity that supplies a service, system, or data resources to a dependent entity x.|
|provides|---|---|
|publisher|---|---|
|publishes|---|---|
|queries|---|---|
|reads|---|x reads y: The subject x takes the action of reading from a digital source y to acquire data and placing it into volatile memory for processing.|
|recorded-in|---|---|
|records|---|x records y: The digital artifact x makes a record of events y; set down in permanent form.|
|regenerates|---|x regenerates y: The entity x discards the current digital artifact y and creates a new version that serves the same function.|
|related|---|x related y: x has a symmetric associative relation to y.|
|restores|---|---|
|restricted-by|---|---|
|restricts|---|x restricts y: An entity x bounds the use of entity y.|
|resume|---|The agent or technique x continues a previous action on entity y. Usually occurs after suspension on y.|
|resumes|---|The agent or technique x continues a previous action on entity y. Usually occurs after suspension on y.|
|runs|---|x runs y: To carry out a process or program y, as on a computer or a machine x; where y may be a large software assembly or a specific module or instruction.  Examples: "run a new program on the Mac"; "the computer runs the application software".|
|seller|---|---|
|sells|---|---|
|semantic-relation|---|---|
|spoofs|---|x spoofs y: The technique x creates a fake instance of a digital artifact y; that is, y is a decoy, fake, or counterfeit.|
|start|---|---|
|strengthens|---|x strengthens y: The technique x make digital artifact y resistant (to harm or misuse.)|
|submitter|---|---|
|summarizes|---|x summarizes y: The sensor x summarizes a set y of events concerning digital artifacts over time.|
|suspends|---|x suspends y: The agent or technique x pauses entity y.|
|terminates|---|x terminates y: The technique x brings to an end or halt to some activity y.|
|unloads|---|x unloads y: The technique or artifact performs the action of unloading some artifact (applications, kernel modules, or hardware drivers, etc.) from a computer's memory.|
|unmounts|---|x unmounts y: An operation x removes the access via computer system's file system the availability of files and directories on a storage artifact y.  Unmounts reverse or undo prior mount operations.|
|updates|---|x updates y: The technique x updates the software for component y.|
|use-limits|---|x use-limits y: An entity x specifies a designated number of uses beyond which some entity y cannot function or must be terminated.|
|used-by|---|x used-by y: is inverse of y uses x.|
|uses|---|x uses y: An entity x puts into service a resource or implement y; makes y work or employ for a particular purpose or for its inherent or natural purpose.|
|validates|---|x validates y: The technique x proves the digital artifact y is valid; that is, x shows or confirms the validity of y.|
|validator|---|---|
|verifies|---|x verifies y: A technique x confirms the truth of a digital artifact y.|
|weakness-of|---|---|
|writes|---|x writes y: The subject x takes the action of writing to a digital artifact y to store data and placing it into persistent memory for later reference.|

#### 3.2.2 Deleting Relationships
To delete a relationship, select a relationship between two nodes by left-clicking on it and hit the backspace button. Note: make sure that the relationship itself is selected, versus its label. Once selected, the edge that constitutes the relationship will be highlighted in black. Selecting relationships is typically easier by clicking closer to the start or end of the relationship, and zooming in on the relationship can also be helpful.

### 3.3 Nodes and D3FEND Inferences
CAD harnesses the power of the D3FEND ontology to perform automated reasoning on certain types of nodes, which are available in the context menu that pops up when right-clicking on a node instance.

For example, let's consider a defensive use case where it's important to include in the CAD graph the set of sensors that are capable of detecting on a Executable Binary (\`d3f:ExecutableBinary\`) digital artifact. In the D3FEND ontology, Executable Binary is a sub-class of the File class; in addition, there is a File System Sensor (\`d3f:FileSystemSensor\`) which includes the following axiom: \`monitors some File\`. Using this axiom in combination with the File class taxonomy allows the ontology to inference that Executable Binary can likewise be monitored by the File System Sensor. CAD provides this for free - in this case, simply right-clicking on the Executable Binary node and selecting \`add sensors\` will show that the File System Sensor can be used here. 

The following types of inferences are currently available in CAD:
- **artifacts**: the digital artifacts associated with an Attack or Countermeasure.
- **defensive techniques**: the techniques (based on D3FEND's tactics such as Model, Harden, Detect etc.) that can be used to defend against a particular Attack.
- **offensive techniques**: the techniques that can be remediated/addressed by a particular Countermeasure.
- **add sensors**: the sensors that can be used to monitor or detect on a particular Digital Artifact.
- **add weakness**: the software weaknesses (i.e., CWEs) that can be present in a function or code modeled as a Digital Artifact.
- **explode**
   - **explode all**: the full set of class inferences for a Digital Artifact.
   - **explode parts**: the part inferences (i.e., child components) for a Digital Artifact.
   - **explode control**: the neighbor inferences for a Digital Artifact.
- **events**: the events that are associated with (e.g., can provide information on) a Digital Artifact.

Note that not all CAD nodes support these types of inferences. See the below table for more details. 

|Node Type|Supported Types of Inferences|
|----|-----------------------------|
|Agent|N/A|
|Attack|artifacts, defensive techniques|
|Condition|N/A|
|Countermeasure|artifacts, defensive techniques|
|Digital Artifact|offensive techniques, defensive techniques, weaknesses, sensors, explode, events|
|Event|N/A|
|Note|N/A|
|Thing|N/A|
|Vulnerability|N/A|

#### 3.3.1 Inserting Data from Inferences
CAD makes it easy to insert D3FEND ontology classes identified through inferences into a graph. To do so, simply select the appropriate context menu (e.g., \`add sensors\`) on a node instance. This will pop up a window that displays the available inferences and allows the selection of the classes to be inserted. In this window, left click on the desired classes, and click on the <button>Insert</button> button in the bottom left-hand corner (this button also track the number of classes being inserted). Once done, these classes will be inserted and automatically linked to the node instance with relationships and appropriate values.

Returning to the previous example of the Executable Binary digital artifact, adding the File Sensor digital artifact with the correct relationship can be achieved with only a few clicks through CAD and D3FEND ontology inferences.

<div class="zoom"><p align="left"><img src="/img/inference_example.jpg" style="border: 3px solid #555" alt="Inference Example"></p></div>

### 3.4 Custom Node Instance Classes and Relationships
CAD supports defining and using custom classes and relationships for cases where they are not already available in the D3FEND ontology. To do so, simply type the custom value for the \`<d3fend class>\` on a node instance, or the value of a relationship. Although not required, it is recommended that any custom values be prepended with a \`:\` (e.g., \`:foo\`), as this tells CAD that this is a custom value and it marks it as such with a green background. 

<p align="left"><img src="/img/custom_values_example.jpg" style="border: 3px solid #555" alt="Custom Values Example"></p>

## 4. Loading and Importing Graphs
### 4.1 Loading CAD JSON Graphs
To load a previously exported D3FEND CAD JSON file from the file system, click <button>File</button> → <button>Load</button>. This will create the \`open file\` dialog where the desired file can be selected.
### 4.2 Importing STIX JSON
CAD supports the importing of STIX 2.1 JSON files and attempts to render their data as a CAD graph. For more information on how CAD maps STIX objects to the D3FEND ontology, see section 8.1 below.

## 5. Saving and Exporting CAD Graphs
### 5.1 D3FEND CAD JSON
CAD JSON is the native format used to represent and store CAD graphs. To save a local copy of D3FEND CAD JSON file, click <button>File</button> → <button>Save</button>.
### 5.2 D3FEND CAD TTL
CAD TTL stores D3FEND instances in Terse Triple Language (TTL). To export a local copy of the D3FEND CAD TTL file, click <button>File</button> → <button>Save As...</button> → <button>Turtle</button>.
### 5.3 D3FEND Extension (TTL)
This format creates a D3FEND Extension file which can be submitted to the D3FEND team to add new concepts and relationships to the D3FEND ontology. An extension is serialized in the Terse Triple Language (TTL). To export a local copy of the D3FEND Extension file, click <button>File</button> → <button>Save As...</button> → <button>D3FEND Extension</button>.
### 5.4 PNG
The entire CAD graph can be saved as a PNG image file. Note that large graphs wil result in large file sizes. To export a CAD graph as a PNG file, click <button>File</button> → <button>Save As...</button> → <button>PNG</button>.

## 6. Sharing and Embedding CAD Graphs
### 6.1 URL Sharing
Smaller CAD graphs (on the order of 20 nodes & relationships or smaller) can easily be shared with other users through the URL Sharing feature, which encodes the contents of the graph as a URL. To do so, simply click on the <button>File</button> -> <button>Share</button> button in the CAD menu bar. This will perform the graph to URL conversion, and will pop up a dialog with the URL once the process is finished. 
### 6.2 Web Embedding
CAD also includes a feature for directly embedding CAD graphs on web pages. This can be accessed through <button>File</button>→<button>CAD Embed</button> in the menu bar. Note that this option is greyed out and inaccessible on empty graphs. 

Once clicked, this presents a page with two panes: Settings and Embed Code. The Settings pane allows for customization of how the graph will be presented, such as the zoom scale of the container which includes the graph. The Embed Code pane includes the actual HTML code that generates the graph; this code can be copied to the clipboard or downloaded through the respective buttons in this pane. 

## 7. Modeling Norms and Best Practices 
There are some nuances and best practices to creating graphs based on the D3FEND ontology in CAD, which are documented in this section.

### 7.1 Best Practices

#### 7.1.1 Make Use of Inferences
One of the most powerful capabilities stemming from D3FEND being represented as an ontology is that allows for the derivation of inferences between classes. CAD provides this capability on certain types of nodes (see section 3.3), which gives users the ability to easily insert attacks, defenses, and other useful information pertaining to the data that they're modeling. Besides helping flesh out CAD diagrams, inferences can also serve as a useful insight into the D3FEND ontology and how it models certain concepts.

#### 7.1.2 Re-use Node Instances
While it can be tempting to create copies of node instances in a graph and use them as needed, this only serves to complicate the semantics of a CAD graph (i.e., what it is trying to represent). For example, if a graph is trying to depict the behaviors exhibited by a particular malware binary, having multiple node instances which represent the binary raises questions such as "Are these the same thing?" and "Is this representing different versions of the malware?". Instead, having a single node instance with relationships to corresponding instances would make it clear that the graph is showing the behaviors of the same malware binary.

#### 7.1.3 Use Standard Relationships
D3FEND's ontology defines a large list of relationships which can be used between node instances (see section 3.2.1.1 for the full list). Finding the right relationships in this list for a particular CAD graph can take some time and effort, but doing so ensures that graphs use the same terminology and are consistent with each other. For example, to state that one Attack node instance occurs before another, the 'precedes' relationship should be used instead of a custom relationship such as 'comes-before'. 

#### 7.1.4 Use Notes
The note node type can be linked to any node instance to provide helpful context on modeling assumptions, issues, or other considerations that can't be directly expressed through a CAD graph. As such, it should be used in those situations where providing this context may be useful for the consumers of a CAD graph.

#### 7.1.5 Use Properties Correctly 
Node instance properties (see section 3.1.1 for more information) are a great way of adding details to a node instance. However, they should only be used for adding properties that are intrinsic to the digital artifact and not for other artifacts that are best represented through additional node instances and relationships. Capturing such details as properties when they should be node instances and relationships negates the value of graph-based modeling provided by CAD. 

For example, let's say that a CAD graph is capturing the results of malware analysis, where an executable binary was observed using a specific named pipe for inter-process communication. While it is possible to capture the named pipe as a property (e.g., using a key of 'uses_pipe') on an Executable Binary Digital Artifact, this should really be captured as a 'uses' relationship from the Executable Binary digital artifact to a Named Pipe digital artifact. 

<p align="left"><img src="/img/using_object_properties.jpg" style="border: 3px solid #555" alt="Using Node Instance Properties Correctly"></p>

#### 7.1.6 Use Custom Entities as Needed
CAD supports the use of custom classes on node instances and also custom relationship values (see section 3.4). These custom entities should be used as needed in CAD graphs in order to include classes or relationships that haven yet to be defined or are out of scope of D3FEND. Therefore, before using custom entities, double-check that they are not already defined in D3FEND. 

### 7.2 Modeling Norms

#### 7.2.1 Knowledge is a Graph
When modeling cyber security data in CAD, it's helpful to remember that everything in CAD is represented as a graph. This means that, besides identifying and understanding the types of nodes in the graph, it's also important to consider the relationships between them and the directions of those relationships. 

In addition, because CAD graphs are directed, it is important to identify the start and end nodes of the graph. For example, when modeling a cyber attack, it would be reasonable for the starting node to be an Attack node instance that represents a step at the beginning of the kill chain (e.g., initial access), and the end node an Attack node instance that represents the last step in the kill chain (i.e., the attacker's ultimate goal). Similarly, when modeling cyber defenses, the starting node could be a Digital Artifact node instance that represents a particular cyber sensor, and the end node an Event node instance that represents an event generated by the sensor.

#### 7.2.2 Power in Granularity
From the outside, the D3FEND ontology may seem complex, as it defines a wide variety of classes through different taxonomies, as well as relationships and restrictions on those classes. However, this is also why D3FEND can be incredibly useful, in that it provides the necessary details around entities in the cyber domain that allow for extremely precise characterizations of cyber attacks and defenses.

With regards to modeling in CAD, this means that CAD graphs should make use of these granular elements as much as possible. For example, modeling a malware instance as just as a Digital Artifact with a class of \`d3f:ExecutableBinary\` leaves out important details such as the process that executed the binary and any subroutines extracted from its code, all of which can be expressed in D3FEND and therefore CAD. 

## 8. CAD Design
- Requirements around the design for CAD as well as CAD graph to semantic graph conversions can be found [here](design).
- The CAD JSON schema can be found [here](schema).
- STIX 2.1 → D3FEND Mappings [here](stix21mappings).

## 9 Terminology

The D3FEND ontology is represented in the OWL2-DL specification. Ontologies in OWL2-DL can be serialized into \`json-ld\`, \`rdf/xml\`, and \`ttl\` formats. The D3FEND team prefers the ttl format.

The ontology comprises classes, object properties, data properties, and annotation properties. Additionally, it includes OWL axioms.

`]}class Y extends k{constructor(e){super(),C(this,e,U,R,w,{})}}export{Y as component};
