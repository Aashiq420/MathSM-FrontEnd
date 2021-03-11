let user;

fetch("https://limitless-river-33387.herokuapp.com/user-data/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function userLogin() {
  const form = document.getElementById("sign-in-form");
  const inputs = form.getElementsByTagName("input");

  let uname = inputs[0].value;
  let pword = inputs[1].value;
  console.log(uname);
  console.log(pword);

  let log = users.filter((user) => {
    return user.username == uname && user.password == pword;
  });

  //   console.log(users);

  if (log.length > 0) {
    alert("You have Successfully Logged in, " + uname); //msg
    console.log(log[0]);
    //sends user data to localstorage so that i can access it in another html file

    localStorage.setItem("user", JSON.stringify(log[0]));

    window.location.href = "./main.html";
  } else {
    alert("Please enter a valid username and password");
  }
}
