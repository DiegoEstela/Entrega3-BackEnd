const dotenv = require("dotenv");
dotenv.config();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const { userModel } = require("./config/ModelUser");

passport.use(
  "local-login",
  new LocalStrategy((username, password, done) => {
    userModel.findOne({ username: username }, (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        console.log(`User not found`);
        return done(null, false);
      }
      if (!isValidPassword(user, password)) {
        console.log(`Invalid password`);
        return done(null, false);
      }
      return done(null, user);
    });
  })
);

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      passReqToCallback: true,
    },
    (req, username, password, done) => {
      userModel.findOne({ username: username }, (err, user) => {
        if (err) {
          console.log(`Error in signup ${err}`);
        }
        if (user) {
          console.log(`User already exists`);
          return done(null, false);
        }
        const newUser = {
          username: username,
          password: bcrypt.hashSync(password, 10),
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          direccion: req.body.direccion,
          edad: req.body.edad,
          telefono: req.body.telefono,
          foto: req.body.foto,
        };

        userModel.create(newUser, (err, user) => {
          if (err) {
            console.log(`Error in saving user: ${err}`);
            return done(err);
          }
          return done(null, user);
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  userModel.findById(id, done);
});

function isValidPassword(user, password) {
  return bcrypt.compareSync(password, user.password);
}
module.exports = passport;
