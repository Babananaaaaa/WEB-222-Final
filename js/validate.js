function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  let validFlag = true;
  console.log(
    "TODO - validate the longitude, latitude values before submitting"
  );
  if (
    -90 > parseFloat(document.getElementById("latitude").value) ||
    parseFloat(document.getElementById("latitude").value) > 90
  ) {
    document.getElementById("latError").innerHTML =
      "* must be a valid Latitude (-90 to 90)";
    validFlag = false;
  } else document.getElementById("latError").innerHTML = "*";
  if (
    -180 > parseFloat(document.getElementById("longitude").value) ||
    parseFloat(document.getElementById("longitude").value) > 180
  ) {
    document.getElementById("longError").innerHTML =
      "* must be a valid Longitude (-180 to 180)";
    validFlag = false;
  } else document.getElementById("longError").innerHTML = "*";
  return validFlag;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function () {
  const form = document.querySelector("form");
  form.onsubmit = validate;
};
