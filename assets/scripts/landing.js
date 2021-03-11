// add user to db
function createUser() {
  const form = document.getElementById("create-user");
  const inputs = form.getElementsByTagName("input");

  fetch("https://limitless-river-33387.herokuapp.com/register/", {
    method: "POST",
    body: JSON.stringify({
      fullname: inputs[0].value,
      username: inputs[1].value,
      email: inputs[2].value,
      password: inputs[3].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
      document.getElementById("create-user").reset();
      location.reload();
    });
}

//jquery stuff for login/register modal
$(document).ready(function () {
  $("#account").on("click", function () {
    $("#login").addClass("hide");
    $("#login").removeClass("show");
    $("#register").addClass("show");
    $("#register").removeClass("hide");
    $(".content").addClass("high");
  });

  $("#back").on("click", function () {
    $("#login").addClass("show");
    $("#login").removeClass("hide");
    $("#register").addClass("hide");
    $("#register").removeClass("show");
    $(".content").removeClass("high");
  });
});
