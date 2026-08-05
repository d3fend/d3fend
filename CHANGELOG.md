# D3FEND UI Change Log

## Version - 0.24.0 - 2026-07-31
 - D3FEND CAD Improvements:
    - New D3FEND CAD App Framework supports modular tabs, views, menus, context actions, ontology extensions, documentation, and feature-specific tools.
    - Added CAD templates, a File Browser backed by the browser File System API, images in Note nodes, Mission Activity nodes, node alignment, and offensive-versus-defensive graph views.
    - Improved property editing with autocomplete and inherited data properties, and added in-app rendering for CAD graph JSON files.
    - Expanded library workflows with colored folders, graph duplication, selected-library persistence for new tabs, clearer import/export controls, and better handling when no library exists.
 - CAD Bugfixes:
    - Fixed updates leaking into inactive tabs, image-node group selection, node content overflow, image label scaling, file-load validation, library text and button layout, view-menu stacking, and fit-to-view behavior.
    - Improved embedded CAD minimap behavior, cold-start performance, and CAD canvas stability through a consolidated graph state and history API.
 - Ontology, Matrix, and Search:
    - New interactive ontology explorer provides graphical and tree navigation across defensive techniques, offensive techniques, artifacts, events, weaknesses, and agents.
    - Redesigned artifact, taxonomy, offensive-technique, and CWE weakness pages with reusable entity detail modals and centralized navigation.
    - Added search, inference, matrices, detail views, and Navigator exports across ATT&CK Enterprise, Mobile, and ICS, MITRE ATLAS, and SPARTA offensive frameworks.
 - Site, Documentation, and Build:
    - Centralized sidebars and a shared color palette improve visual consistency and accessibility throughout the site.
    - Added Content Disarm and Reconstruction blog post, expanded CAD documentation navigation, and direct API documentation links.

## Version - 0.23.1 - 2026-04-01
 - Minor website updates
 - Correct downloadable ontology files.

## Version - 0.23.0 - 2026-03-31
 - CAD Improvements:
    - New CAD view presets provide focused layouts for attack paths, defenders, defenses, events, temporal flows, system composition, and related perspectives.
    - D3FEND CAD Library v2 improves library management and adds library-aware targeting in the SPARQL tab.
    - Property editing in CAD is more discoverable with a class picker, expanded D3FEND info coverage on all node types, object property tooltips, and hover summaries that show the D3FEND class.
    - CAD now preserves node properties when graphs are exported to Turtle and imported back in.
    - CAD documentation now includes a side navigation and improved guidance for IDE and valid path usage.
 - CAD Bugfixes:
    - Fixed library issues affecting rename behavior, revision history clearing, and general library stability.
    - Fixed tab reordering, multi-node selection, note node behavior, edge label display, and example edge relation rendering.
    - Fixed layout and interaction bugs including recursive layout failures, BaseNode effect issues, selectOnClick errors, and missing non-enterprise ATT&CK techniques in CAD context menus.
    - Embedded CAD rendering is improved on OT pages, domain embeds, and other embedded views, including removal of gray bars around embedded CAD.
 - Search, Matrix, and Technique Pages:
    - New CWE Extractor tool identifies CWE weaknesses from source text and adds CWE results to the shared extractor workflow.
    - The D3FEND Matrix now supports grab-to-pan scrolling.
    - Added CWE-to-countermeasure mappings in CAD vulnerability views and improved offense-to-defense graph handling.
    - Fixed ATT&CK lookup behavior, cleaned up taxonomy results by filtering restrictions, and resolved the subtechnique modal bug on technique pages.
 - Site, SEO, and Build:
    - Improved SEO with a generated sitemap.xml, refreshed favicon assets, and new robots.txt and llms.txt files.
    - Improved static prerendering compatibility for CAD and SPARQL-backed routes.
    - Updated dependencies and addressed package-lock security issues.

## Version - 0.22.0 - 2025-12-16
 - CAD Improvements:
    - New D3FEND CAD Library lets you create and share libraries of D3FEND CAD Graphs.
    - New CAD IDE for editing and managing D3FEND graphs, initially with javascript.
    - Added a D3FEND pathfinder tool to explore connections between nodes.
    - Verify edge tool to highlight object property links in a graph which are not defined in the ontology.
    - Added support for CAD attack domains and a CAD library of reusable graph components.
    - Improved handling of deprecated techniques, data property inference, and general DA/events behavior.
    - Improved tab behavior, including better tab naming, drag-to-reorder tabs, max history for state snapshots, and correct tab state persistence when switching or deleting tabs.
    - Improved handling of loading multiple files at once and CAD multi-file choice handling.
    - Enhanced scrolling, keyboard shortcuts, class picker behavior, and keybinds within the CAD.
    - Contenteditable fields now respect native copy/paste behavior.
    - Polished the SPARQL Tab query feature and added documentation.
 - Search and Artifact Pages:
    - Search results are now sorted by closest match and address multiple search page issues.
    - Generalized DAO API routes to all `d3f:Artifact` resources.
    - Improved banner functionality across the site.
 - SPARQL, Ontology, and General:
    - Initial D3FEND for OT release.
    - New domain page replaces prior matrix navbar link.
    - Generalized DA and Events handling and added countermeasure-to-weakness mappings in the weakness API.
    - Major software upgrade to Svelte 5.

## Version - 0.21.0 - 2025-08-01
 - CAD:
    - Add graph auto-layout feature with multiple algorithms.
    - Add new SPARQL Query Tab capability, documentation, and example queries.
    - Improve d3fend extension and TTL exports.
    - Fix property name vertical align on nodes.
    - Add agent taxonomy support in CAD and UI.
 - Resolve ATT&CK, D3FEND, and Universal Extractor matching issues.
 - Improve shadowcat example.
 - Fix recursive restrictions in da-to-events.
 - Merge feature/365-pkalo-example-ttl-queries into develop. (#365)
 - Add example TTL queries.
 - Loading indicator on site to show longer page loads.
 - D3FEND website uses fully relative links now.

## Version - 0.20.0 - 2025-04-21
 - CAD Improvements:
    - __CAD Tabs!__ Ability to open multiple D3FEND Graphs at once, each in its own tab.
    - Ability to rename D3FEND Graphs by clicking on filename in tab selector, replacing center filename input.
    - Automatic highlighting of inbound/outbound edges when a node is selected.
    - In context menu graphs, the nodes set to be inserted are shown in the bottom bar.
    - Ability to load multiple D3FEND Graphs at once via File dialog or drag-and-drop, options appear to merge or split into new tabs.
    - Ability to infer events from events via "add related events" context menu option on Event nodes.
    - Visualize risk (impact & likelihood) by adding properties to Attack nodes, visualized in Risk Matrix modal.
  - CAD Bugfixes:
    - Fix accidental self-edges creating ghost edge in D3FEND Graph .json
    - Fix special characters in dropdowns crashing the site (Chrome).
    - Fix PNG export broken due to package version upgrade.

## Version - 0.19.0 - 2025-01-10
 - CAD Improvements:
    - Ability to import Caldera Operation Reports automatically mapped to the correct D3FEND Ontology classes.
    - Ability to import JSON-LD graphs.
    - New recommended relationships between two nodes based on node and class types, dynamically generated using the ontology.
    - New recommended data property relationships on nodes generated using the ontology.
    - Cleaned up styling on sidebar
    - Fixed copy and paste behavior, you can copy and paste nodes and edges.
    - Copy and paste into the text fields on the nodes themselves while stripping formatting to plain text.
    - Ability to create multiple edges between two nodes.
    - Fully interactive taxonomical selection on nodes and edges.
    - Full undo and redo functionality with standard keyboard shortcuts and Edit menu items.
    - Correctly visualizing multiple edges between nodes.

## Version - 0.18.0 - 2024-12-20

 - New flexible ontology-based diagramming tool with inference: D3FEND CAD.
    - Drag-and-drop user interface.
    - Select from the many taxonomies in D3FEND for both nodes and edges.
    - Supports inferential mappings for defenses, composition, sensors, events, weaknesses, and attacks when the correct "D3FEND Class" is selected for a given node.
    - Create custom text properties on D3FEND "instance" nodes.
    - Save and share D3FEND Graphs in various formats, including JSON, TTL, and PNG.
    - Embed interactive D3FEND Graphs in third-party tools or web pages.
    - Import STIX 2.1 documents and auto-map to D3FEND Ontology classes.
- Documentation pages for the new D3FEND CAD Tool.
- Dedicated pages for the D3FEND Digital Events.

## Version - 0.17.0 - 2024-10-11

 - Alpha-level diagramming tool.
 - Update software dependencies.

## Version - 0.16.0 - 2024-07-10

 - New D3FEND Universal Extractor alpha release.
 - New D3FEND search feature.
 - Improved DAO page with high-Level artifacts.
 - Fix link bug in neighbors panel on Access Mediator artifact page. (#254)

 ## Version - 0.15.0 - 2024-04-26

 - Improvements to mapping screens
 - Updates to D3FEND Profile Studio


## Version - 0.14.0 - 2024-01-26

- Improvements to D3FEND profile building tool.
- Ability to import and export D3FEND profiles.
- Fixed minor rendering issues on blog.
- Upgraded website build software library.


## Version - 0.13.0-BETA-1 - 2023-10-30

- New countermeasure inference for CWE integration on CWE pages.
- Web page for new ACF framework at /acf.
- Refactored backend into sveltekit frontend middleware.
- Alpha version D3FEND profile building tool.
- New D3FEND Blog capability.
- Added d3f:Process to taxonomies page.
- New favicon.

## Version - 0.12.0-BETA-2 - 2023-03-21

- Add missing identifier for D3-IAA

## Version - 0.12.0-BETA-1 - 2023-01-31

- New taxonomies website tab shows the notable taxonomies in the D3FEND ontology with a new tree viewer and 'matrix' viewer.
- New public D3FEND API page describing public-facing endpoints.
- New defensive tactic selection control on the digital artifact detail pages.
- New CWE integration and weakness visualization of artifacts.
- Updated software dependencies and refactored graphing functions.
- Migrated from Svelte Sapper to new Svelte Kit framework.


## Version - 0.11.0-BETA-1 - 2022-10-31

- New ability to optionally render portions of Defensive Technique taxonomy to accommodate supporting techniques.
- Now rendering mappings to NIST 800 53 and DISA CCI on their own pages.

## Version - 0.10.1-BETA-1 - 2022-06-13
- New features on the UI are highlighted with green glow.
- ATT&CK to D3FEND mapper tool renamed to ATT&CK Extractor.
- New D3FEND Extractor tool extracts D3FEND techniques from raw text and automatically maps them to ATT&CK. Ability to download results as an ATT&CK navigator layer or a properly formatted table to paste into a spreadsheet, or share the results via URL.
- Redesigned and simpler resources page.
- Link to slack channel on contribute page.
- Now pretty printing in /api JSON serializations.
- Fixed matrix sorting issues in Chrome and Safari.
- Added committing contributors section to contribute page for those who send pull requests.


## Version - 0.10.0-BETA-2 - 2022-01-31

- Search feature on Digital Artifact pages.
- Graph neighbors section added to Digital Artifact pages to illustrate contains relationships.
- Digital artifact parent classes are now shown on tree view on digital artifact pages.
- Automatic mapping tool extracts ATT&CK IDs from text and renders relevant D3FEND techniques, on resources page under tools.
- Contributors section on contributions page.
- Past releases of ontology now available on resources page.
- D3FEND to ATT&CK Mitigations mappings on resources page.
- Updated relationship display logic for offensive technique and digital artifact pages. Now shows additional offensive artifacts for which there is no inferred defensive relationships.
- New poster generator view, link on resources page.
- Fixed navigation component caching issues with some technique pages.
- Fixed issue with offensive technique detail pages where artifacts were only shown if there was also an associated defensive technique. Now pages render all digital artifacts of the offensive technique.
- Fixed mobile navigation CSS issues.
- Fixed 404 on d3f:KerberosTicketGrantingTicket artifact page.


## Version - 0.9.3-BETA-1 - 2021-07-09

- Fuzzy search now supports synonyms for D3FEND techniques.
- For tactics and technique pages, render all relevant technique subclasses in table with definitions, IDs, and synonyms.
- Removed "group" concept in favor of tactic and technique routes, addresses fuzzy search wrong URL bug.
- Added placeholder text to search input fields.
- Added hyperlinks to D3FEND ID on technique page to make copy and paste easier.

## Version - 0.9.2-BETA-3 - 2021-06-22

- Experimental Digital Artifact Ontology browser.
- Visualize D3FEND technique to Digital Artifact to ATT&CK relationships.
- Renders D3FEND technique synonyms.
- Renders D3FEND technique IDs.
- Quick fuzzy search for D3FEND and ATT&CK techniques.
- D3FEND technique pages show a clickable graph of digital artifact relationships.
- Visual horizontal scroll indicator on D3FEND Matrix.
- The D3FEND Matrix is now sorted alphabetically at the technique (2nd) level and below.
- New mobile navigation menu.
- Fixed numerous issues with display logic and CSS rending issues.

## Version - 0.9.1

This is the first release of 2021. Our objective for this release is to mature and improve all aspects of the knowledge graph and introduce experimental inference features to aid with specific use cases. D3FEND is still an early stage project and we seek community engagement to improve the knowledge graph.

- Improved styling for knowledge base articles.
- Improved spreadsheet format, now includes technique definitions.
- Updated FAQ.
- Added the ability to hover over terms to show their definitions (if definition annotation present).
- Now rendering release and changelog information on the resources page.

## Version - 0.9.0

- Added DNS isolation techniques.
- Improved styling for knowledgebase articles.
- Added FAQ section.
- Added downloadable ontology files.
- Improved digital artifact relationships.
- Resources page includes downloads for D3FEND paper, D3FEND Ontology files, and D3FEND Spreadsheet.

## Version - 0.0.1

Initial release of D3FEND knowledgebase UI, ontology, and backend API.

- Countermeasure technique taxonomy portion of graph is rendered as primary home page.
- Ability to release static "exported" version of website and serve live version of website from same codebase.
- Basic inference for defensive techniques to related offensive techniques.
