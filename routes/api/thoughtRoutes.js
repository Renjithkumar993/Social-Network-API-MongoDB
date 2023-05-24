
const router = require('express').Router();



const {createThought,getAllThought, getsingleThought,delThought,addReaction,delReaction }=  require("../../controllers/thoughtControllers")

router.route("/").post(createThought).get(getAllThought)
router.route("/:id").get(getsingleThought).delete(delThought);

router.route("/:thoughtId/reactions").post(addReaction)

router.route("/:thoughtId/reactions/:reactionId").delete(delReaction)
module.exports = router;