const router = require("express").Router();
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3001/auth/google/callback",
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ],
  }, (accessToken, refreshToken, profile, done) => {
    done(null, profile)  
  }
));

router.get("/google", passport.authenticate("google"));

router.get('/google/callback', (request, response, next) => {
  passport.authenticate('google', (err, profile, x) => {
    console.log({err, profile, x})
    
    if (err)
      return response.redirect('http://localhost:3001');

    try {
      console.log(profile);
      response.hea
      response.redirect('http://localhost:3001/home');
    } catch (error) {
      next(error);
    }
  })(request, response, next);
});
module.exports = router