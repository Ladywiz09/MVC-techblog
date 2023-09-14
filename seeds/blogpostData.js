const { Post } = require('../models');

const blogpostData = [
  {
    blogpost_title: "What is ChatGPT?",
    blogpost_text: "ChatGPT is an AI-powered language model developed by OpenAI, capable of generating human-like text based on context and past conversations.",
    user_id: 1,
  },
  {
    blogpost_title: "How to Use Model-View-Controller (MVC)",
    blogpost_text: "From MDN Web Docs, MVC (Model-View-Controller) is used to implement user interfaces, data, and controlling logic. It emphasizes a separation of concerns between logic and display providing a division of labor and improved maintenance.",
    user_id: 2,
  },
  {
    blogpost_title: "Which is harder, front end or backend?",
    blogpost_text: "Front-end development is generally easier to learn than back-end development. Front-end development requires less knowledge of coding languages, and only requires knowledge of HTML, CSS, and JavaScript. Back-end development requires knowledge of both back- and front-end languages, which can be less accessible for those just learning to code.",
    user_id: 3,
  },
];

const seedBlogpost = () => Post.bulkCreate(blogpostData);

module.exports = seedBlogpost;