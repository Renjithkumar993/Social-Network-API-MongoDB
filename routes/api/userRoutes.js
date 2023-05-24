
const router = require('express').Router();

const {createUser,getAllUsers,getsingleUser,updateUser,deleteUser,addFriend,delFriend} =  require("../../controllers/userController")


router.route("/").post(createUser).get(getAllUsers);

router.route("/:userId").get(getsingleUser).post(updateUser).delete(deleteUser)

router.route("/:userId/friends/:friendId").post(addFriend).delete(delFriend)


module.exports = router;