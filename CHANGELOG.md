# D3FEND Change Log

## Version - 0.13.0-BETA-1 - 2023-10-30

### Ontology Updates
- New "Restore" tactic and taxonomy of restore techniques. (#173)
- New Analytic Technique Taxonomy and Analytic Characterization Framework.
- Integrate full CWE taxonomy. (#189)
- Added Digital Artifacts for MSHTA Execution.
- Inferred D3FEND countermeasures for CWEs now visualized and with API. (#184)
- Link D3FEND classes to OCSF objects. (#178)
- Refactor csv build and fix double definitions. (#180)
- New defensive technique: Email Filtering. (#172)
- Major refactor of ATT&CK updater script. (#188)


### User Interface Updates
- New countermeasure inference for CWE integration on CWE pages.
- Web page for new ACF framework at /acf.
- Refactored backend into sveltekit frontend middleware.
- Alpha version D3FEND profile building tool.
- New D3FEND Blog capability.
- Added d3f:Process to taxonomies page.
- New favicon.

## Version - 0.12.0-BETA-2 - 2023-03-21

### Ontology Updates
- Add missing identifier for D3-IAA

## Version - 0.12.0-BETA-1 - 2023-01-31

### User Interface Updates
- New taxonomies website tab shows the notable taxonomies in the D3FEND ontology with a new tree viewer and 'matrix' viewer.
- New public D3FEND API page describing public-facing endpoints.
- New defensive tactic selection control on the digital artifact detail pages.
- New CWE integration and weakness visualization of artifacts.
- Updated software dependencies and refactored graphing functions. 
- Migrated from Svelte Sapper to new Svelte Kit framework.

### Ontology Updates
- Updated ATT&CK mappings.
- Added PythonScript subClassOf ExecutableScript. (#101)
- Added defensive techniques: FileEviction techniques (#92, #93), Identifier Activity Analysis (#95), Data and Data Hardening Techniques. (#75) 
- Added digital artifacts: URL Reputation Analysis (#71), Network Traffic Analysis software (#79) Network Traffic Analysis Software. (#80)
- Added top #25 Weaknesses from CWE and relationships to digital artifacts, including new subroutine taxonomy. (#66)
- Fixed errata on version data property (#89) Physical Object subclassing. (#88)
- Fixed bug in technique mapping queries (eliminates some spurious/redundant mappings) in backend.
- Fix misspecified inverseOf relation on :accesses property which caused reasoning errors. (#88)
- Fix version data properties, and broken URLs on some has-link values. (#90)


## Version - 0.11.0-BETA-1 - 2022-10-31

### User Interface
- New ability to optionally render portions of Defensive Technique taxonomy to accomodate supporting techniques.
- Now rendering mappings to NIST 800 53 and DISA CCI on their own pages.

### Ontology Updates
- Added new large section of 'supporting' defensive techniques under Model tactic. (#12)
- Added semantic mappings to NIST 800-53 Rev 5 and DISA CCI (Common Common Control Index). (#68)
- Added large number of new artifact definitions for offensive and defensive techniques. (#67)
- Added a script to automatically create ontology additions for STIX2 based ATT&CK updates and update to ATT&CK V11. (#60)
- Update robot.jar URL. (#57)
- Fix label kerberos ticket. (#53)


## Version - 0.10.1-BETA-1 - 2022-06-13

### User Interface

- New features on the UI are highlighted with green glow.
- ATT&CK to D3FEND mapper tool renamed to ATT&CK Extractor.
- New D3FEND Extractor tool extracts D3FEND techniques from raw text and automatically maps them to ATT&CK. Ability to download results as an ATT&CK navigator layer or a properly formatted table to paste into a spreadsheet, or share the results via URL.
- Redesigned and simplier resources page.
- Link to slack channel on contribute page.
- Now pretty printing in /api JSON serializations.
- Fixed matrix sorting issues in Chrome and Safari.
- Added committing contributors section to contribute page for those who send pull requests.


### Ontology Updates

- Ontology now supports docker builds, thanks @ioggstream. (#5)
- Ontology has Github CI builds, thanks @ioggstream. (#7)
- Ability to load ontology build into blazegraph with make target. (#20)
- Added more detail on key pinning and updated references. (#23)
- Fixed relationship on File Encryption. (#13)
- New reference for D3-PCA. (#18)
- Updated d3f:BiometricAuthentication authenticate UserAccount. (#14)
- New technique D3-NTF, Network Traffic Filtering. (#26)
- Updated Jena testing library. (#31)
- Reviewed and modified Credential Access Technique, Brute Force, and Brute Force subclasses to indicate more precisely the main digital artifacts being accessed (here tested by some means of trial and error.) Result with query from D3-SPP now results in new matches the the password-specific classes under Brute Force. (#30)
- Added grounding references to D3-RRDD Reverse Resolution Domain Denylisting; now it will not be filtered in the D3FEND matrix presentation. (#33)
- Added full pre-commit checks for code linting, syntax checking, and other hooks, thanks @ioggstream. (#35)
- Added Lure as synonym for Decoy Object. (#47)
- New reference for D3-RFS. (#46)
- Corrected definition on D3-FAPA. (#41)
- Changed relation on T1114.001 to 'reads' vs 'accesses'. (#17)
- Additional reference for D3-SPP. (#39)
- Defined additional artifact on D3-IOPR. (#48)
- Fixed capitalization issue on Kerberos Ticket digital artifact. (#51)


## Version - 0.10.0-BETA-2 - 2022-01-31

### User Interface

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

### Ontology Updates

- Refactored any "create -> Process" relationships to "invokes -> Create Process" where "Create Process" is a type of system call.
- ATT&CK V10 included and characterized with Digital Artifacts.
- Refactored object property relationships for future inference support.
- New Defensive Techniques:
  - Application Configuration Hardening
  - Domain Trust Policy
  - User Account Permissions
  - File Encryption
  - System Configuration Permissions
  - Local Account Monitoring
  - Domain Account Monitoring
  - Peripheral Firmware Verification
  - System Firmware Verification
  - IO Port Restriction
  - System Call Filtering
  - Credential Transmission Scoping

## Version - 0.9.3-BETA-1 - 2021-07-09

### User Interface

- Fuzzy search now supports synonyms for D3FEND techniques.
- For tactics and technique pages, render all relevant technique subclasses in table with definitons, IDs, and synonyms.
- Removed "group" concept in favor of tactic and technique routes, addresses fuzzy search wrong URL bug.
- Added placeholder text to search input fields.
- Added hyperlinks to D3FEND ID on technique page to make copy and paste easier.

### Ontology Updates

- Process Spawn Analysis kb-article inaccuracy addressed regarding a discussion of threads.
- Removed overly-strong assertion in Homoglyph Detection technique.
- Fixed identifier for IPC Traffic Analysis to "D3-IPCTA".

## Version - 0.9.2-BETA-3 - 2021-06-22

### User Interface

- Experiemental Digital Artifact Ontology browser.
- Visualize D3FEND technique to Digital Aritfact to ATT&CK relationships.
- Renders D3FEND technique synonyms.
- Renders D3FEND technique IDs.
- Quick fuzzy search for D3FEND and ATT&CK techniques.
- D3FEND technique pages show a clickable graph of digital artifact relationships.
- Visual horizontal scroll indicator on D3FEND Matrix.
- The D3FEND Matrix is now sorted alphabetically at the technique (2nd) level and below.
- New mobile navigation menu.
- Fixed numerous issues with display logic and CSS rending issues.

### Ontology Updates

- Many new countermeasure techniques.
- D3FEND Techniques now have acronym based identifiers.
- Major clean up of data properties and annotation properties.
- Many new offensive technique to digital artifact mappings.
- Defintions on almost all classes and puns, data, objecti, and annotation properties.
- Fixed latent issue from incorporating ATT&CK subtechniques, removed old parent classes from some ATT&CK techniques to fix display on knowledge base.
- Launchd vs Launch Daemon data entry error corrected.
- Ontology version is now depicted on d3f:D3FENDThing as owl:versionInfo.
- Experimental firmware taxonomy.
- Experimental sensor taxonomy.

## Version - 0.9.1

This is the first release of 2021. Our objective for this release is to mature and improve all aspects of the knowledge graph and introduce experimental inference features to aid with specific use cases. D3FEND is still an early stage project and we seek community engagement to improve the knowledge graph.

### User Interface

- Improved styling for knowledge base articles.
- Improved spreadsheet format, now includes technique definitions.
- Updated FAQ.
- Added the ability to hover over terms to show their definitions (if definition annotation present).
- Now rendering release and changelog information on the resources page.

### New Techniques

- Last Branch Call Analysis (for ROP attack detection).
- Certificate Analysis techniques.
- Certificate Pinning.
- Dead Code Elimination.

### Ontology Updates

- Punned classes (OWL2-DL) to support flexibility in ontology and knowledge base use cases.
- Added Network Node taxonomy to articulate various types of clients, servers, and their components.
- Added Application taxonomy to articulate various types of common applications ranging from VCS software to server application software.
- Refined relationships between digital artifacts.
- Updated the metadata for many references.
- Updated to ATT&CK 8.0 and developed digital artifacts where possible, more to be added in future releases.

### Improved Definitions

- Message Authentication.
- Message Encryption.
- DNS Denylisting techniques.
- Process Termination.

### Backend Updates

- Experimental API for offensive techniques to infer defensive techniques and associate digital artifacts.
- Experimental API for digital artifacts to infer offensive techniques and defensive techniques.

### Limitations

- Inferential reasoning about defensive and offensive relationships is experimental and will improve over time.

### Known Issues

- There are some inconsistencies in the ontology serialization files in order to accommodate backend software tooling that we intend to refine in the future.
- Some ontology annotations will be converted to data properties in a future release.

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
