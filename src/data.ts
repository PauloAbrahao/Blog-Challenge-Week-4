const blogList = document.getElementById("blog-list") as HTMLElement;

// A interface to define the data type of the posts array
interface PostsData {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
  read_more: string;
  link_to: string;
}

const posts: PostsData[] = [
  {
    id: 1,
    title: "Post 1",
    imageUrl: "https://cdn.pixabay.com/photo/2023/03/21/12/19/mountains-7867137_960_720.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
    read_more: "Read More",
    link_to: "#"
  },
  {
    id: 2,
    title: "Post 2",
    imageUrl: "https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_960_720.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
    read_more: "Read More",
    link_to: "#"
  },
  {
    id: 3,
    title: "Post 3",
    imageUrl: "https://cdn.pixabay.com/photo/2023/03/02/22/11/belgium-7826588_960_720.jpg",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
    read_more: "Read More",
    link_to: "#"
  },
  {
    id: 4,
    title: "Post 4",
    imageUrl: "https://cdn.pixabay.com/photo/2022/12/18/20/09/christmas-market-7664171_960_720.jpg",
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
      <img src=${post.imageUrl} alt="">
      <h3 class="post-title" id="post_title">${post.title}</h3>
      <p class="post-content" id="post-content">${post.body}</p>
      <a href=${post.link_to} class="post-link">${post.read_more}</a>
    </div>`;
  });

  blogList.innerHTML = postComponent;
}

setDataOfPosts();
