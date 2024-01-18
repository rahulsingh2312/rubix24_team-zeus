// passport-setup.js
const passport = require("passport");
const userModel = require("../models/user");
const GoogleStrategy = require("passport-google-oauth20").Strategy;


passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/user/auth/google/callback", 
      scope: ["profile", "email"],
    },
    async (accessToken, refreshToken, profile, done) => {
       
        
  
      try {
        let user = await userModel.findOne({ email: profile.emails[0].value });

        if (!user) {
          // If the user doesn't exist, create a new user with Google profile information
          user = await userModel.create({
            username: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            profilePicture: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
          });
        }

        // Return the user object to the done callback
        return done(null, user);
      } catch (error) {
        // Handle errors
        return done(error, null);
      }
        
      }
    )
  );
  
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
});