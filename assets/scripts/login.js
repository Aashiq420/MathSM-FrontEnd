let users;

fetch("https://limitless-river-33387.herokuapp.com/user-data/")
  .then((response) => response.json())
  .then((data) => {
    users = data;
  });

function userLogin() {
  const form = document.getElementById("sign-in-form");
  const inputs = form.getElementsByTagName("input");

  let uname = inputs[0].value;
  let pword = inputs[1].value;

  let log = users.filter((user) => {
    return user.username == uname && user.password == pword;
  });

  if (log.length > 0) {
    alert("You have Successfully Logged in, " + uname); //msg
    //sends user data to localstorage so that i can access it in another html file

    localStorage.setItem("user", JSON.stringify(log[0]));

    window.location.href = "./main.html";
  } else {
    alert("Please enter a valid username and password");
  }
}
