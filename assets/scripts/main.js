//navbar scroll jquery
$(document).ready(function () {
  $(window).bind("scroll", function () {
    var navHeight = $(window).height() - 70;
    if ($(window).scrollTop() > navHeight) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });
});

//passing user data (fetching here actually)
let retrievedObject = JSON.parse(localStorage.getItem("user"));
console.log(retrievedObject);

//displayng specialised welcome message
let head = document.getElementById("heading");
head.innerHTML = " " + retrievedObject.full_name + "!";

//SECTION 3
function createPost() {
  const form = document.getElementById("create-post");
  const inputs = form.getElementsByTagName("input");
  const texta = form.getElementsByTagName("textarea");

  // https://limitless-river-33387.herokuapp.com/create-post/
  fetch("https://limitless-river-33387.herokuapp.com/create-post/", {
    method: "POST",
    body: JSON.stringify({
      title: inputs[0].value,
      message: texta[0].value,
      image: inputs[1].value,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
      console.log(json);
      document.getElementById("create-post").reset();
      location.reload();
    });
}

// logout function
function logout() {
  localStorage.removeItem("user");
  alert("You have logged out successfully");
  window.location.href = "./index.html";
}

//display post functionality
function displayPosts() {
  fetch("https://limitless-river-33387.herokuapp.com/post-data/")
    .then((response) => response.json())
    .then((data) => {
      console.table(data);
      let list = document.getElementById("posts");
      data.forEach((post) => {
        let item = `
        <div class="post-container"><br>
          <div class="title">
            <h2>${post.title}</h2>
          </div><br>
          <div class="message">
            <p>${post.message}</p>
          </div>
          <div class="image">
            <p>${post.image}</p>
          </div>
          <div class="button">
          <button class="btn">View comments</button>
          <button class="btn">Post comments</button>

          </div>
      </div>
      <br><br>
        `;
        list.innerHTML += item;
      });
    });
}
displayPosts();
