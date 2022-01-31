# D3FEND Change Log

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
