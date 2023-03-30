"use strict";
const posts = [
    {
        id: 1,
        title: "Post 1",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/21/12/19/mountains-7867137_960_720.jpg",
        imageDescription: "Some mountains and hills, a beautiful landscape",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
        read_more: "Read More",
        link_to: "./src/pages/post.html?id=1",
    },
    {
        id: 2,
        title: "Post 2",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_960_720.jpg",
        imageDescription: "A wheat plantation",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
        read_more: "Read More",
        link_to: "./src/pages/post.html?id=2",
    },
    {
        id: 3,
        title: "Post 3",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/02/22/11/belgium-7826588_960_720.jpg",
        imageDescription: "Some buildings in a metropolis",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
        read_more: "Read More",
        link_to: "./src/pages/post.html?id=3",
    },
    {
        id: 4,
        title: "Post 4",
        imageUrl: "https://cdn.pixabay.com/photo/2022/12/18/20/09/christmas-market-7664171_960_720.jpg",
        imageDescription: "A beautiful city at night, with an amusement park",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
        read_more: "Read More",
        link_to: "./src/pages/post.html?id=4",
    },
];
const postComments = [
    {
        id: 1,
        postId: 1,
        email: "newemail@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 2,
        postId: 1,
        email: "newemail2@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 1,
        postId: 2,
        email: "post2example@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    },
    {
        id: 2,
        postId: 2,
        email: "post2example@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 3,
        postId: 2,
        email: "post2example@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
    },
    {
        id: 1,
        postId: 3,
        email: "post3mail@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
        id: 1,
        postId: 4,
        email: "post4mail@outlook.com",
        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
];
class PostComponent {
    constructor(postsArray, postCommentsArray) {
        this.postsArray = postsArray;
        this.postCommentsArray = postCommentsArray;
    }
    renderListOfPosts() {
        const blogList = document.getElementById("blog-list");
        let postComponent = "";
        this.postsArray.map((post) => {
            postComponent += `
      <div class="post" id="post">
        <img src="${post.imageUrl}" alt="${post.imageDescription}">
        <h3 class="post-title" id="post_title">${post.title}</h3>
        <p class="post-resume" id="post-resume">${post.body}</p>
        <a href="${post.link_to}" class="post-link" id="post-link">${post.read_more}</a>
      </div>`;
        });
        blogList.innerHTML = postComponent;
    }
    renderSpecificPost(id) {
        const postDetails = document.getElementById("comments");
        const title = document.getElementById("post-title");
        const image = document.getElementById("post-image");
        const imageDescription = document.getElementById("post-image");
        const body = document.getElementById("post-content");
        let renderPostInformation = "";
        const listOfPosts = this.postsArray;
        const listOfPostsWithComments = this.postCommentsArray;
        listOfPosts.forEach((post) => {
            listOfPostsWithComments.forEach((comment) => {
                if (id === post.id && id === comment.postId) {
                    title.textContent = post.title;
                    image.src = post.imageUrl;
                    imageDescription.alt = post.imageDescription;
                    body.textContent = post.body;
                    renderPostInformation += `
                <div id="comments-list">
                  <div class="comment">
                    <h3>${comment === null || comment === void 0 ? void 0 : comment.email}</h3>
                    <p class="comment-content">${comment === null || comment === void 0 ? void 0 : comment.body}</p>
                  </div>
                </div>
              </section>
            </div>
          `;
                }
            });
        });
        postDetails.innerHTML = renderPostInformation;
    }
    getPostId() {
        const url = window.location.href;
        const id = url.split("=")[1];
        return +id;
    }
    validatePage() {
        if (window.location.pathname === "/index.html" ||
            window.location.pathname === "/") {
            console.log("RENDER HOME PAGE");
            post.renderListOfPosts();
        }
        else if (window.location.pathname === "/src/pages/post.html") {
            console.log("RENDER SPECIFIC POST");
            const id = post.getPostId();
            post.renderSpecificPost(id);
        }
    }
}
const post = new PostComponent(posts, postComments);
post.validatePage();
//# sourceMappingURL=data.js.map