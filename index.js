const posts = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    post: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
    isLiked: false,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
    isLiked: false,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
    isLiked: false,
  },
];
const mainEl = document.querySelector(".main");

// Liking logic (icon, increase, decrease)
mainEl.addEventListener("click", function (e) {
  if (!e.target.dataset.username) return;

  let pressedPost = e.target.dataset.username;

  posts.forEach((post) => {
    if (post.username === pressedPost) {
      post.isLiked ? post.likes-- : post.likes++;
      post.isLiked = !post.isLiked;
    }
  });

  renderContent();
});

// Render of the content and append to the HTML
function renderContent() {
  let postContnet = "";

  posts.forEach((post) => {
    postContnet += `
        <section class="post">
          <header class="post-header">
            <img
              src="${post.avatar}"
              alt="Avatar of the user"
              class="post-avatar"
            />
            <div class="post-owner">
              <p class="fs-l">${post.name}</p>
              <p>${post.location}</p>
            </div>
          </header>

          <img
            src="${post.post}"
            alt="${post.name} paint"
            class="post-img"
          />

          <footer class="post-interaction">
            <div class="post-icons mb-s">
              <i class="fa-regular fa-heart fa-width-auto ${
                post.isLiked ? "liked" : ""
              }" data-userName ="${post.username}"></i>
              <i class="fa-regular fa-comment fa-width-auto"></i>
              <i class="fa-regular fa-paper-plane fa-width-auto"></i>
            </div>
            <p class="post-likes mb-s" >${post.likes} likes</p>
            <p class="mb-s">
              <span class="fs-m">${post.username}</span> ${post.comment}
            </p>
          </footer>
        </section> 
        `;
  });

  mainEl.innerHTML = postContnet;
}

renderContent();
