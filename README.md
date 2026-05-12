# MITRE D3FEND Static Website

This repository contains a static copy of the latest version of the D3FEND website. It contains all of the "live" website material (including CAD, tools, mappings, etc.) and can be hosted locally to provide an offline version of D3FEND.

## Local Hosting

To host a local copy of the D3FEND website, we recommend using your favorite lightweight HTTP server.

As an example, Python3 includes a web server module by default. Therefore, to use Python3 to host the static D3FEND website, use the following command-line:

`python3 -m http.server --directory /path/to/d3fend`

Where "/path/to/d3fend" is the local path to the static copy of the D3FEND website. This will serve the website at port 8000 on your local machine (http://localhost:8000). To use a different port (e.g., 8080), simply include the port number after `http.server` in the command-line:

`python3 -m http.server 8080 --directory /path/to/d3fend`



