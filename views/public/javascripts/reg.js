$(document).ready(function () {
  /** Retrive data from database if session is stored. */
  $.ajax({
    url: "/contacts/?deviceId=f2e7e233422e9108d5f98ba16c6e0a2dd5e933db4d2cfb18b92a7aa70e9cffef",
    data: "",
    type: "GET",
    dataType: "json",
    contentType: "application/json; charset=utf-8",
    success: function (data) {
      var trHTML = "";
      var count = 1;
      $.each(data, function (key, value) {
        trHTML +=
          "<tr><th scope='row'>" +
          count +
          "</th><td>" +
          value.deviceDetected +
          "</td><td>" +
          value.contactDate +
          "</td><td>" +
          value.distance +
          " m" +
          "</td><td>" +
          value.position +
          "</td></tr>";
        count++;
      });

      $("#contactsTable").append(trHTML);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {},
  });
});

/** Validate email from pattern */
function validateEmail(email) {
  // Email RegExp.
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //ok
  return re.test(email);
}

/** Validate password from pattern */
function validatePassword(password) {
  // Password RegExp. Password containing at least 1 number, 1 lowercase letter, 1 uppercase letter, and password between 6 and 20 characters.
  let re = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,20}$/; //controllare
  return re.test(password);
}
