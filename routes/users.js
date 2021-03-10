var express = require('express');
var router = express.Router();
var User = require('../models/user');

var tokenService = require('../services/auth')
var passwordService = require('../services/password')

//route for user registration (Add user) -> /register
router.post('/register', async (req, res, next) => {
  try{
    console.log(req.body);
    let newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: passwordService.hashpassword(req.body.password)
    });
    console.log(newUser)
    let result = await newUser.save();
    console.log(result);
    res.send("user created");
  }
  catch(err){
    console.log(err);
    res.send("error")
  }
})

//route for login -> /login
router.post('/login', async (req, res, next) => {
  // console.log(req.body)
  User.findOne({username: req.body.username}, function(err, user){
    if(err){
      console.log(err)
      res.json({
        message: "Error accessing Database",
        status: 500
      })
    }
    console.log(user);
    if(user){
      let passwordMatch = passwordService.comparePasswords(req.body.password, user.password);
      if (passwordMatch) {
        let token = tokenService.assignToken(user);
        res.json({
          message: "Login Was Successful",
          status: 200,
          token
      })
    }
      else{
        console.log("Wrong Password")
        res.json({
          message: "Wrong Password",
          status: 403,
        })
      }
    }
    else{
      res.json({
        message: "Wrong Username",
        status: 403,
    })
  }
})})

//route to get user profile -> /profile
router.post('/profile', async (req, res, next) => {
  // console.log(req.headers)
  let myToken = req.headers.authorization;
  console.log(myToken);

  if(myToken){
    let currentUser = await tokenService.verifyToken(myToken);
    console.log(currentUser);
    let responseUser = {
      firstName: currentUser.firstName,
      lastName: currentUser.lastName,
      email: currentUser.email,
      username: currentUser.username,
      deleted: currentUser.deleted,
      admin: currentUser.admin
    }
    if(currentUser){
      res.json({
        message:"user profile information loaded successfully",
        status: 200,
        user
      })
    }
    else(
      res.json({
        message:"Token Was Invalid Or Expired",
        status:403
      })
    )
  }
  else{
    res.json({
      message:"No Token Received",
      status: 403
    })
  }
})

//route for menu -> /menu
router.post('/menu', async (req, res, next) => {

})

//route for cart -> /cart
router.post('/cart', async (req, res, next) => {

})

//route for checkout -> /checkout
router.post('/checkout', async (req, res, next) => {

})

module.exports = router;
