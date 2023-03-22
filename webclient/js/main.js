document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("questionnaire-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const cloudProvider = form.querySelector("input[name='cloud_provider']:checked").value;
    const budget = form.querySelector("#budget").value;
    const workload = form.querySelector("input[name='workload']:checked").value;
    const architecture = form.querySelector("input[name='architecture']:checked").value;
    const autoScaling = form.querySelector("input[name='auto_scaling']:checked").value;
    const publicAccess = form.querySelector("input[name='public_access']:checked").value;
    const vpnAccess = form.querySelector("input[name='vpn_access']:checked").value;
    const containerBased = form.querySelector("input[name='container_based']:checked").value;
    const managedDatabase = form.querySelector("input[name='managed_database']:checked").value;
    const languageFramework = form.querySelector("#language_framework").value;
    const buildTools = form.querySelector("#build_tools").value;
    const environmentConfig = form.querySelector("input[name='environment_config']:checked").value;
    const environmentConfigDetails = form.querySelector("#environment_config_details textarea").value;

    const result = {
      cloudProvider,
      budget,
      workload,
      architecture,
      autoScaling,
      publicAccess,
      vpnAccess,
      containerBased,
      managedDatabase,
      languageFramework,
      buildTools,
      environmentConfig,
      environmentConfigDetails,
    };

    console.log(result);
  });

  form.querySelector("input[name='environment_config']").addEventListener("change", function () {
    const environmentConfigDetailsSection = document.getElementById("environment_config_details");
    if (this.value === "yes") {
      environmentConfigDetailsSection.style.display = "block";
    } else {
      environmentConfigDetailsSection.style.display = "none";
    }
  });
});
