// start of script.js

const normalizeUnits = (manifest) => {
  const object = {...manifest};
  if(object.unit === "lb") {
    object.weight = object.weight * 0.45;
    object.unit = "kg"
  }
  return object;
}

function validateManifest(manifest) {
  const errors = {};

  if (manifest.containerId === undefined) {
    errors.containerId = "Missing";
  } else if (!(typeof manifest.containerId === "number" && manifest.containerId > 0 && Math.floor(manifest.containerId) === manifest.containerId)) {
    errors.containerId = "Invalid";
  }

  if (manifest.destination === undefined) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }

  if (manifest.weight === undefined) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || manifest.weight !== manifest.weight) {
    errors.weight = "Invalid";
  }

  if (manifest.unit === undefined) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }

  if (manifest.hazmat === undefined) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }

  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);

  if (Object.keys(errors).length === 0) {

    console.log(`Validation success: ${manifest.containerId}`);
    const normalized = normalizeUnits(manifest);
    console.log(`Total weight: ${normalized.weight} kg`);
  } else {

    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}

// end of script.js
