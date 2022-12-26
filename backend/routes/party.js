const router = require("express").Router();

const partyController = require("../controllers/partyController");

//rotas

router.post("/party", (req, res)=>{
    return partyController.create(req, res)
})



module.exports = router