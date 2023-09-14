// Importing required modules and dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers: require("./utils/helpers") });
const routes = require("./controllers");
const session = require("express-session");
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const path = require("path");

// Creating express app and setting port
const app = express();
const PORT = process.env.PORT || 3001;

// Setting up session
const sessObj = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};

app.use(session(sessObj));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting up handlebars as template engine
app.use(express.static(path.join(__dirname, "public")));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`)
    );
});