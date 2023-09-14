const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "I surround myself with positive, productive people.",
    user_id: 1,
    blogpost_id: 1,
  },
  {
    comment_text: "You can do whatever you set your mind to.",
    user_id: 2,
    blogpost_id: 1,
  },
  {
    comment_text: "Everything will work out in the end.",
    user_id: 3,
    blogpost_id: 2,
  }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;