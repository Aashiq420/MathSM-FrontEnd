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
          <button id="myBtn" class="btn" onclick="openModal()">View comments</button>
          <button class="btn">Post comments</button>
          </div>
          <br><br>
      </div>
      <br><br>
        `;
        list.innerHTML += item;
      });
    });
}
displayPosts();

// is element in viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const form = document.querySelector(".form");

document.addEventListener(
  "scroll",
  function () {
    const dropText = document.getElementById("droptext");
    isInViewport(form) ? (dropText.style.display = "none") : console.log();
    isInViewport(dropText)
      ? (dropText.style.display = "inline-block")
      : (dropText.style.display = "none");
  },
  {
    passive: true,
  }
);

//post comment js
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
function closeModal() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
