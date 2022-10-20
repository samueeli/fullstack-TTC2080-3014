const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

// You could actually chain together (and save some space) the identical routes like so:
// router.route('/').get(getUsers).post(createUser)
// router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)
// but since I like lists I just keep it like this
router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
