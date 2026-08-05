const e=`@prefix : <http://d3fend.mitre.org/ontologies/cad-example#> .
@prefix d3f: <http://d3fend.mitre.org/ontologies/d3fend.owl#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

:ExampleEvent
  a owl:Class ;
  rdfs:label "Example Event" ;
  rdfs:subClassOf d3f:Event .

:example-related-to
  a owl:ObjectProperty ;
  rdfs:label "example related to" .
`;export{e as default};
