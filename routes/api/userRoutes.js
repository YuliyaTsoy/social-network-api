const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// GET all and POST at /api/users
router.route("/")
    // GET route to get all users: /api/users
    .get(getAllUsers)
    // POST route to create a new user: /api/users
    .post(createUser);

// GET, PUT and DELETE routes by user id
router.route("/:id")
    // GET route to get a user by id: /api/users/:id
    .get(getUserById)
    // PUT route to update a user by id: /api/users/:id
    .put(updateUser)
    // DELETE route to remove a user by id: /api/users/:id
    .delete(deleteUser);

// POST and DELETE routes for friends
router.route("/:id/friends/:friendsId")
    // POST: add a friend by id /api/:id/friends/:friendsId
    .post(addFriend)
    // DELETE: remove a friend by id /api/:id/friends/:friendsId
    .delete(removeFriend);

module.exports = router;