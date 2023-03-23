document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionnaire-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cloudProvider = form.querySelector("input[name='cloud_provider']:checked").value;
    const budget = form.querySelector("#budget").value;
     const workload = form.querySelector("#workload").value;
    const architecture = form.querySelector("#architecture").value;
    const autoScaling = form.querySelector("input[name='scale']:checked").value;
    const publicAccess = form.querySelector("input[name='public_access']:checked").value;
    const vpnAccess = form.querySelector("input[name='vpn_access']:checked").value;

    // const containerBased = form.querySelector("#container_based").value;
    // const managedDatabase = form.querySelector("#managed_database").value;
    // const languageFramework = form.querySelector("#language_framework").value;
    // buildTools = form.querySelector("#build_tools").value;
    // const environmentConfig = form.querySelector("input[name='environment_config']:checked").value;
    // const environmentConfigDetails = form.querySelector("#environment_config_details textarea").value;

    const result = {
      cloudProvider,
      budget,
      workload,
      architecture,
      autoScaling,
      publicAccess,
      vpnAccess,

      // containerBased,
      // managedDatabase,
      // languageFramework,
      // buildTools,
      // environmentConfig,
      // environmentConfigDetails,
    };

    console.log(result);
  });

//   form.querySelector("#environment_config_yes").addEventListener("change", function () {
//     const environmentConfigDetailsSection = document.getElementById("environment_config_details");
//     if (this.checked) {
//       environmentConfigDetailsSection.style.display = "block";
//     } else {
//       environmentConfigDetailsSection.style.display = "none";
//     }
//   });

//   form.querySelector("#environment_config_no").addEventListener("change", function () {
//     const environmentConfigDetailsSection = document.getElementById("environment_config_details");
//     if (this.checked) {
//       environmentConfigDetailsSection.style.display = "none";
//     } else {
//       environmentConfigDetailsSection.style.display = "block";
//     }
//   });
 });
