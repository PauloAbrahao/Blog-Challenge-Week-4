"use strict";
const blogList = document.getElementById("blog-list");
const posts = [
    {
        id: 1,
        title: "Post 1",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/21/12/19/mountains-7867137_960_720.jpg",
        imageDescription: "Some mountains and hills, a beautiful landscape",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
        read_more: "Read More",
        link_to: "#"
    },
    {
        id: 2,
        title: "Post 2",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_960_720.jpg",
        imageDescription: "A wheat plantation",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
        read_more: "Read More",
        link_to: "#"
    },
    {
        id: 3,
        title: "Post 3",
        imageUrl: "https://cdn.pixabay.com/photo/2023/03/02/22/11/belgium-7826588_960_720.jpg",
        imageDescription: "Some buildings in a metropolis",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
        read_more: "Read More",
        link_to: "#"
    },
    {
        id: 4,
        title: "Post 4",
        imageUrl: "https://cdn.pixabay.com/photo/2022/12/18/20/09/christmas-market-7664171_960_720.jpg",
        imageDescription: "A beautiful city at night, with an amusement park",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
        read_more: "Read More",
        link_to: "#"
    }
];
function setDataOfPosts() {
    let postComponent = "";
    posts.map((post) => {
        postComponent += `
    <div class="post" id="post">
      <img src="${post.imageUrl}" alt="${post.imageDescription}">
      <h3 class="post-title" id="post_title">${post.title}</h3>
      <p class="post-content" id="post-content">${post.body}</p>
      <a href="${post.link_to}" class="post-link">${post.read_more}</a>
    </div>`;
    });
    blogList.innerHTML = postComponent;
}
setDataOfPosts();
//# sourceMappingURL=data.js.map