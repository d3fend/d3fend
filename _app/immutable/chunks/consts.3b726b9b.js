const t={isReadonly:!1,isDrawerOpen:!0,showLegend:!0,techniqueMappingMode:"multiColor",selectedPortfolio:0,containerSize:.8,matrixSize:1,update:!1,localStorageWarning:!0,portfolios:[{id:0,description:"Testing the description",name:"Profile 1",includedMeasures:["claimed","tested","integration"]},{id:1,description:"Testing the description",name:"Profile 2",includedMeasures:["firewall","zero-trust"]},{id:2,description:"Testing the description",name:"Profile 3",includedMeasures:["next-generation firewall","zero-trust"]}],measures:{firewall:{id:0,description:"Testing the description",name:"Firewall",techniques:["d3f:DataInventory"],scores:[0,3,4],risk:10,weight:100,checked:!0,color:"#001eb0"},"zero-trust":{id:1,description:"Testing the description",name:"Zero-Trust",techniques:[],color:"#ef0b0b",children:["role-based access","least priviledge","continuous verification","geo location"],checked:!0},"role-based access":{id:2,description:"Testing the description",name:"Role-Based Access",techniques:["d3f:DataInventory","d3f:ServiceDependencyMapping","d3f:AccessModeling","d3f:AssetInventory"],checked:!0},"least priviledge":{id:3,description:"Testing the description",name:"Least Priviledge",techniques:[]},"continuous verification":{id:4,description:"Testing the description",name:"Continuous Verification",techniques:[],children:[]},"geo location":{id:5,description:"Testing the description",name:"Geo Location",techniques:["d3f:TransferAgentAuthentication","d3f:ServiceDependencyMapping","d3f:AccessModeling"]},"bandwidth control and monitoring":{id:6,description:"Testing the description",name:"Bandwidth Control and Monitoring",techniques:[],children:[],checked:!1},"web filtering":{id:7,description:"Testing the description",name:"Web Filtering",techniques:[],children:[]},logging:{id:8,description:"Testing the description",name:"Logging",techniques:[],children:[]},sandboxing:{id:9,description:"Testing the description",name:"Sandboxing",techniques:[],children:[]},"threat prevention":{id:10,description:"Testing the description",name:"Threat Prevention",techniques:[],children:[]},"application and identiy-based inspection":{id:11,description:"Testing the description",name:"Application and Identiy-based Inspection",techniques:[],children:[]},scalability:{id:12,description:"Testing the description",name:"Scalability",techniques:[],children:[]},"next-generation firewall":{id:13,description:"Testing the description",name:"Next-Generation Firewall",techniques:[],color:"#ef0b0b",children:["bandwidth control and monitoring","web filtering","logging","sandboxing","threat prevention","application and identiy-based inspection","scalability"]},claimed:{id:14,description:"Testing the description",name:"claimed",checked:!0,techniques:["d3f:HomoglyphDetection","d3f:URLAnalysis","d3f:CertificateAnalysis","d3f:PassiveCertificateAnalysis","d3f:IPCTrafficAnalysis","d3f:AuthenticationEventThresholding","d3f:AuthorizationEventThresholding","d3f:DomainAccountMonitoring","d3f:JobFunctionAccessPatternAnalysis","d3f:LocalAccountMonitoring","d3f:ResourceAccessPatternAnalysis","d3f:SessionDurationAnalysis","d3f:UserDataTransferAnalysis","d3f:UserGeolocationLogonPatternAnalysis","d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],color:"#98d0A9"},tested:{id:15,description:"Testing the description",name:"Tested",checked:!0,techniques:["d3f:AdministrativeNetworkActivityAnalysis","d3f:Client-serverPayloadProfiling","d3f:ConnectionAttemptAnalysis","d3f:DNSTrafficAnalysis","d3f:NetworkTrafficCommunityDeviation","d3f:PerHostDownload-UploadRatioAnalysis","d3f:ProtocolMetadataAnomalyDetection","d3f:RelayPatternAnalysis","d3f:RemoteTerminalSessionDetection","d3f:RPCTrafficAnalysis"],color:"#7eec9f"},integration:{id:16,description:"Testing the description",name:"Integration",techniques:["d3f:DNSAllowlisting","d3f:DNSDenylisting","d3f:ForwardResolutionDomainDenylisting","d3f:HierarchicalDomainDenylisting","d3f:HomoglyphDenylisting","d3f:ForwardResolutionIPDenylisting","d3f:ReverseResolutionIPDenylisting","d3f:InboundTrafficFiltering","d3f:OutboundTrafficFiltering","d3f:AccountLocking","d3f:ProcessTermination"],checked:!0,color:"#ffcc80"}},shownTactics:{"d3f:Model":!1,"d3f:Harden":!1,"d3f:Detect":!1,"d3f:Isolate":!1,"d3f:Deceive":!1,"d3f:Evict":!1}},n={isReadonly:!1,isDrawerOpen:!0,showLegend:!0,techniqueMappingMode:"multiColor",selectedPortfolio:0,containerSize:.8,matrixSize:1,update:!1,localStorageWarning:!0,portfolios:[{id:0,name:"Profile 1",description:"Description for Profile 1",includedMeasures:["capability 1","capability 2","capability 3"]}],measures:{"capability 1":{id:1,name:"Capability 1",description:"Description for all associated D3FEND techniques for Capability 1",techniques:["d3f:NetworkNodeInventory","d3f:PointerAuthentication","d3f:SoftwareUpdate","d3f:ByteSequenceEmulation","d3f:JobFunctionAccessPatternAnalysis","d3f:NetworkTrafficFiltering"],checked:!0,color:"#8db5e2"},"capability 2":{id:2,name:"Capability 2",description:"Capability 2 Description with associated sub-capabilities",techniques:[],checked:!0,color:"#d84f64",children:["sub-capability 2-1","sub-capability 2-2","sub-capability 2-3"]},"sub-capability 2-1":{id:3,name:"Sub-capability 2-1",description:"Sub-capability description",checked:!0,techniques:["d3f:IdentifierReputationAnalysis","d3f:FileHashReputationAnalysis","d3f:DomainNameReputationAnalysis","d3f:IPReputationAnalysis","d3f:URLReputationAnalysis","d3f:URLAnalysis","d3f:IdentifierActivityAnalysis","d3f:SenderMTAReputationAnalysis","d3f:SenderReputationAnalysis"]},"sub-capability 2-2":{id:4,name:"Sub-capability 2-2",description:"Description for sub-capability",checked:!0,techniques:["d3f:CredentialCompromiseScopeAnalysis","d3f:DomainAccountMonitoring","d3f:JobFunctionAccessPatternAnalysis","d3f:LocalAccountMonitoring","d3f:ResourceAccessPatternAnalysis","d3f:SessionDurationAnalysis"]},"sub-capability 2-3":{id:5,name:"Sub-capability 2-3",description:"Description for sub-capability ",checked:!0,techniques:["d3f:EncryptedTunnels","d3f:NetworkTrafficFiltering","d3f:InboundTrafficFiltering","d3f:EmailFiltering","d3f:DecoySessionToken","d3f:DecoyUserCredential"]},"capability 3":{id:6,name:"Capability 3",description:"Capability 3 Description with Associated Techniques",techniques:["d3f:CertificatePinning","d3f:CredentialTransmissionScoping","d3f:DomainTrustPolicy","d3f:Multi-factorAuthentication","d3f:One-timePassword","d3f:StrongPasswordPolicy","d3f:CredentialRotation","d3f:JobFunctionAccessPatternAnalysis","d3f:ExecutableAllowlisting","d3f:ExecutableDenylisting","d3f:Hardware-basedProcessIsolation","d3f:IOPortRestriction","d3f:Kernel-basedProcessIsolation"],checked:!0,color:"#71d677",children:[]}},shownTactics:{"d3f:Model":!1,"d3f:Harden":!1,"d3f:Detect":!1,"d3f:Isolate":!1,"d3f:Deceive":!1,"d3f:Evict":!1}},a=({size:e},i="<embed-data>")=>`
<script>
  let iframe = null;

  const user_data = ${JSON.stringify(i,null,2)};

  const post_measures = (event) => {
    if (event.data?.call === "FromParent") {
      iframe.contentWindow.postMessage(
        {
          call: "toParent",
          value: user_data,
        },
        event.origin
      );
    }
  };
  <\/script>

  <svelte:window on:message={post_measures} />

  <main>
    <iframe
      id="iframe"
      bind:this={iframe}
      src="https://next.d3fend.mitre.org/profile/"
      title="D3FEND Embedded" />
  </main>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${e});
      -moz-transform: scale(${e});
      -o-transform: scale(${e});
      -webkit-transform: scale(${e});
    }
  </style>
  `,s=({size:e},i="<embed-data>")=>`
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>D3FEND EMBEDDED</title>

  <script>
    const user_data = ${JSON.stringify(i,null,2)};

    const post_measures = (event) => {
      const iframe = document.getElementById("iframe");

      if (event.data?.call === "FromParent") {
        iframe.contentWindow.postMessage(
          {
            call: "toParent",
            value: user_data,
          },
          event.origin
        );
      }
    };

    window.addEventListener("message", (event) => {

      if (event.origin === "https://d3fend.mitre.org" || 
          event.origin === "https://next.d3fend.mitre.org") {
            post_measures(event);
      };
    });
  <\/script>

  <style>
    #iframe {
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 100vh;
      transform: scale(${e});
      -moz-transform: scale(${e});
      -o-transform: scale(${e});
      -webkit-transform: scale(${e});
    }
  </style>
</head>

<main>
  <iframe
          id="iframe"
          src="https://next.d3fend.mitre.org/profile/"
          title="D3FEND Embedded" />
</main>

</html>
  `;export{a,s as d,n as e,t as f};
