async function a({fetch:e}){const n=await(await e("/api/matrix.json")).json(),o=await(await e("/api/version.json")).json();return{remote_d3fend_tree:n,remote_version_info:o}}export{a as m};
