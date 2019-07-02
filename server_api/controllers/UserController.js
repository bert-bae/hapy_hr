'use strict';
const User = require('../models/user');

exports.authenticateUser = async (req, res, next) => {
  const user = req.body.user;
  try {
    let verifyUser = await User.getUserByEmail(user.email);
    if (!verifyUser) {
      await User.createUser({
        email: user.email,
        username: user.nickname,
        created_at: new Date(),
        last_login: new Date()
      });
      res.send({ success: true, err: null, message: "User entered into the database."})
      return;
    }
    res.send({ success: true, err: null, user: verifyUser})
  } catch(err) {
    res.send({ success: false, err: true, message: "Error retrieving or creating user in server."})    
  }
}

exports.getUserByEmail = async (req, res, next) => {
  const email = req.params.email;
  try {
    const user = await User.getUserByEmail(email);
    res.send({ success: true, err: null, user });
  } catch(err) {
    res.send({ success: false, err: "User not found or specified.", user: null });
  }
}