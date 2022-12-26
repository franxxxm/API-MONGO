const router = require("express").Router();


// Services router 
const servicesRouter = require("./services");
const partyRouter = require("./party");


router.use("/", servicesRouter);

router.use("/", partyRouter)

module.exports = router;