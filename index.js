const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const session = require("express-session");
const mongoStore = require("connect-mongo");
// Middlewares //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
// passport //
const passport = require("./passport");
dotenv.config();

app.use(
  session({
    store: mongoStore.create({
      mongoUrl: process.env.MONGO_DB,
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Ruta bienvenida

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Ruta login

app.get("/login", (req, res) => {
  res.sendFile(`${__dirname}/public/login.html`);
});

app.get("/signup", (req, res) => {
  res.sendFile(`${__dirname}/public/signup.html`);
});

app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/login",
    failureRedirect: "/signup",
  })
);

app.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

app.get("/logout", (req, res) => {
  req.logOut();
  res.redirect("/login");
});

app.get("/info", (req, res) => {
  let data = {
    "argumentos de entrada": process.argv.slice(2),
    "sistema opertativo": process.platform,
    "version de node": process.version,
    rss: process.memoryUsage().rss,
    path: process.execPath,
    processId: process.pid,
    "carpeta proyecto": process.cwd(),
  };
  res.json({ data });
});

app.listen(PORT, () => {
  console.log(`Server ${process.pid} run on port ${PORT}`);
});
