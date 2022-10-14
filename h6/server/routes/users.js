import { Router } from 'express';
import { users } from '../Users.js';

export const router = Router();

// get all users
router.get('/', (req, res) => {
  const markup = `
  <div>
    <span><a href="/users">List All Users</a></span> |
    <span><a href="/adder">Add New User</a></span>
    <br />
    <hr />
    <br />
    <ul>
      ${users
        .map((user) => {
          return `<li>${user.name}</li>`;
        })
        .join('')}
    </ul>
  </div>
  `;
  res.send(markup);
  // res.json(users);
});

// get single user
router.get('/:id', (req, res) => {
  const queryID = req.params.id;
  const userExists = users.some((user) => user.id === queryID);
  if (userExists) {
    res.json(users.filter((user) => user.id === queryID));
  } else {
    res
      .status(404)
      .json({ msg: `Couldn't find a user with the id ${queryID}` });
  }
});

// add user
router.post('/', (req, res) => {
  const maxId = Math.max(...users.map((user) => user.id), 0);
  const newUser = {
    id: (maxId + 1).toString(),
    name: req.body.name,
  };
  users.push(newUser);
  res.redirect('/users');
  // res.json({ newUser, msg: 'Just Added a new user', users });
});

// delete user
router.delete('/:id', (req, res) => {
  const queryID = req.params.id;
  const userExists = users.some((user) => user.id === queryID);
  if (userExists) {
    const remainingUsers = users.filter((user) => user.id !== queryID);
    res.json({
      msg: `Deleted user with ID: ${queryID}`,
      remainingUsers: remainingUsers,
    });
  } else {
    res
      .status(404)
      .json({ msg: `Couldn't find a user with the id ${queryID}` });
  }
});

// edit user
router.put('/:id', (req, res) => {
  const queryID = req.params.id;
  const userExists = users.some((user) => user.id === queryID);
  if (userExists) {
    users.forEach((user) => {
      user.id === queryID
        ? (user.name = req.body.name)
        : (user.name = user.name);
    });
    res.json({ msg: `Updated user with ID: ${queryID}`, users });
  } else {
    res
      .status(404)
      .json({ msg: `Couldn't find a user with the id ${queryID}` });
  }
});
