// A interface to define the data type of the posts array
interface PostsData {
  id: number;
  title: string;
  imageUrl: string;
  imageDescription: string;
  body: string;
  read_more: string;
  link_to: string;
}

// An array of objects to store the posts data
const posts: PostsData[] = [
  {
    id: 1,
    title: "Post 1",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/21/12/19/mountains-7867137_960_720.jpg",
    imageDescription: "Some mountains and hills, a beautiful landscape",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
    read_more: "Read More",
    link_to: "./src/pages/post.html?id=1",
  },
  {
    id: 2,
    title: "Post 2",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/14/12/41/wheat-7852286_960_720.jpg",
    imageDescription: "A wheat plantation",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae.",
    read_more: "Read More",
    link_to: "./src/pages/post.html?id=2",
  },
  {
    id: 3,
    title: "Post 3",
    imageUrl:
      "https://cdn.pixabay.com/photo/2023/03/02/22/11/belgium-7826588_960_720.jpg",
    imageDescription: "Some buildings in a metropolis",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
    read_more: "Read More",
    link_to: "./src/pages/post.html?id=3",
  },
  {
    id: 4,
    title: "Post 4",
    imageUrl:
      "https://cdn.pixabay.com/photo/2022/12/18/20/09/christmas-market-7664171_960_720.jpg",
    imageDescription: "A beautiful city at night, with an amusement park",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt. Quisquam, quae. Quisquam voluptas, quod, quia, quae voluptates quibusdam voluptatibus voluptatum quidem quos quas nesciunt.",
    read_more: "Read More",
    link_to: "./src/pages/post.html?id=4",
  },
];

// A interface to define the data type of the posts comments array
interface PostsComments {
  id: number;
  postId: number;
  email: string;
  body: string;
}

// An array of objects to store the posts comments data
const postComments: PostsComments[] = [
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
  constructor(
    public postsArray: PostsData[],
    public postCommentsArray: PostsComments[]
  ) {}

  // A method to render the list of posts in the home page (index.html)
  renderListOfPosts() {
    const blogList = document.getElementById("blog-list") as HTMLElement;

    let postComponent = "";

    // A loop to render the posts in the home page 
    this.postsArray.map((post) => {
      // Render the posts in the home page 
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

  // A method to render the post details in the post page (post.html)
  renderSpecificPost(id: number) {
    const postDetails = document.getElementById("comments") as HTMLElement;
    const title = document.getElementById("post-title") as HTMLElement;
    const image = document.getElementById("post-image") as HTMLImageElement;
    const imageDescription = document.getElementById(
      "post-image"
    ) as HTMLImageElement;
    const body = document.getElementById(
      "post-content"
    ) as HTMLParagraphElement;

    let renderPostInformation = "";

    // A variable to store the posts array and the posts comments array
    const listOfPosts = this.postsArray;
    const listOfPostsWithComments = this.postCommentsArray;

    // A loop to access the post data inside each post object
    listOfPosts.forEach((post) => {
      // A loop to access the comments data inside each comment post object
      listOfPostsWithComments.forEach((comment) => {
        // A conditional to check if the post id (id) is equal to the comment post id (postId) 
        if (id === post.id && id === comment.postId) {
          // Set the post information in the post page (pages/post.html)
          title.textContent = post.title;
          image.src = post.imageUrl;
          imageDescription.alt = post.imageDescription;
          body.textContent = post.body;

          // Render post comments in the post page (pages/post.html)
          renderPostInformation += `
                <div id="comments-list">
                  <div class="comment">
                    <h3>${comment?.email}</h3>
                    <p class="comment-content">${comment?.body}</p>
                  </div>
                </div>
              </section>
            </div>
          `;
        }
      });
    });

    // Render the post information and the comments
    postDetails.innerHTML = renderPostInformation;
  }

  // A method to get the post id from the url and convert it to a number
  // The id is used to render the correct post information in the post page (pages/post.html)
  // The id is also used to render the correct comments in the post page 
  // This id is passed in the url by the "link_to" key in the posts object
  getPostId() {
    const url = window.location.href;
    const id = url.split("=")[1];
    return +id;
  }

  // A method to validate the page and render the correct information
  validatePage() {
    if (
      window.location.pathname === "/index.html" ||
      window.location.pathname === "/"
    ) {
      console.log("RENDER HOME PAGE");
      post.renderListOfPosts();
    } else if (window.location.pathname === "/src/pages/post.html") {
      console.log("RENDER SPECIFIC POST");

      const id = post.getPostId();
      post.renderSpecificPost(id);
    }
  }
}

// Create a new instance of the PostComponent class
const post = new PostComponent(posts, postComments);
// Call the validatePage method to render the correct information
post.validatePage();