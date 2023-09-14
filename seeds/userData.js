const { User } = require('../models');

const userData = [
  {
    username: "BisonHero",
    email: "douglass@howard.edu",
    password: "HUyouknow!1867",
  },
  {
    username: "ElephantKing",
    email: " alabamatheGREAT@bama.com",
    password: "Bama4Life",
  },
  {
    username: "loveChristmastime",
    email: "charliebrown@christmas.com",
    password: "Polar3xpress",
  },
  {
    username: "BeautyQueen",
    email: "teenqueen@test.com",
    password: "p@geantLife",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;