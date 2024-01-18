const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const passport = require("passport");
const jwt = require("jsonwebtoken");





async function registerUser(req, res) {
  const { username, email, password, DOB } = req.body;
  const testobject = req.body;
  console.log(`This is ${testobject}`);
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  console.log(testobject);
  const availableUser = await userModel.findOne({ email });
  if (availableUser) {
    console.log("User Exists");
    throw new Error("User already exist");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    username,
    email,
    password: hashedPassword,
    DOB,
  });

  if (newUser) {
    console.log(`New User created successfully ${newUser.id}`);
    res.json({ newUser });
  } else {
    res.status(400);
    throw new Erro("User registration failed");
  }
}

async function userLoginWithGoogle(req, res,next){
  passport.authenticate("google", { scope: ["profile", "email"] })(req, res, next);
}
async function userLogin(req, res) {

  
  
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const availableUser = await userModel.findOne({
    email,
  });

  if (
    availableUser &&
    (await bcrypt.compare(password, availableUser.password))
  ) {
    const accessToken = jwt.sign(
      {
        user: {
          username: availableUser.username,
          email: availableUser.email,
          id: availableUser.id,
        },
      },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res
      .status(200)
      .cookie("accesstoken", accessToken, {
        httpOnly: true,
      })
      .json({ msg: "login succesful" });
  } else {
    throw new Error("Incorrect password or Email");
  }
}

async function getCurrentUser(req, res) {
  res.json(req.user);
}
async function userLoginWithGoogleCallback(req, res, next) {
  passport.authenticate("google", { failureRedirect: "/" }, async (err, authenticatedUser) => {
    if (err) {
      return next(err);
    }

    if (!authenticatedUser) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    try {


      let user = await userModel.findOne({ email: authenticatedUser.email });
  
      // If you want to save user data to the database, do it here
      // Example: await userModel.create({ username: user.username, email: user.email, googleId: user.id });
 console.log(user);

      const accessToken = jwt.sign(
        {
          user: {
            username: user.username,
            email: user.email,
            id: user.id,
          },
        },
        process.env.TOKEN_SECRET,
        {
          expiresIn: "1h",
        }
      );

      res
        .status(200)
        .cookie("accesstoken", accessToken, {
          httpOnly: true,
        })
        .json({ msg: "login successful" });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
}

module.exports = {
  registerUser,
  userLogin,
  userLoginWithGoogle,
  userLoginWithGoogleCallback,
  getCurrentUser,
};