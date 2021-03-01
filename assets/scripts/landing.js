// add user to db
function createUser() {
  const inputs = document.getElementsByTagName("input");

  fetch("http://127.0.0.1:5000/landing/", {
    method: "POST",
    body: JSON.stringify({
      fullname: inputs[0].value,
      username: inputs[0].value,
      email: inputs[0].value,
      password: inputs[0].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert("New user created successfully");
      document.getElementById("register").reset();
    });
}

function switchReg() {
  reg = document.getElementById("reg");
  reg.style.display = "flex";
}
