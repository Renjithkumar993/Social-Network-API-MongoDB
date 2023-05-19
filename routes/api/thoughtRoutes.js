
const router = require('express').Router();



const {createThought,getAllThought}=  require("../../controllers/thoughtControllers")

router.route("/").post(createThought).get(getAllThought)

module.exports = router;