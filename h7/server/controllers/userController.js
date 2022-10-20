const User = require('../models/userModel.js');

// GET - get all users
const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

// GET - get one user
const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400).json({ msg: `No user with the id ${req.params.id}` });
  } else {
    res.status(200).json(user);
  }
};

// POST - create new user
const createUser = async (req, res) => {
  if (!req.body.name) {
    res
      .status(400)
      .json({ msg: 'Error. No user was given. Name is required.' });
  } else {
    const user = await User.create({
      name: req.body.name,
    });
    res.status(200).json(user);
  }
};

// PUT - update user
const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400).json({ msg: `user ${req.params.id} not found` });
  } else {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json(updatedUser);
  }
};

// DELETE - delete user
const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(400).json({ msg: `No user with the id ${req.params.id}` });
  } else {
    await user.remove();
    res.status(200).json({ msg: `Deleted user ${req.params.id}` });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
