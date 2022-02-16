const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true };
// Middlewares //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(process.cwd() + "/public"));
// passport //
const passport = require("passport");
const loginRoutes = require("../routes/auth");
const homeRoutes = require("../routes/home");
app.use("/", loginRoutes);
app.use(homeRoutes);

dotenv.config();

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_DB,
      mongoOptions: advancedOptions,
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    rolling: true,
    cookie: { maxAge: 600000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
