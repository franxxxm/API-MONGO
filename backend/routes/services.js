const router = require("express").Router();

const serviceController = require("../controllers/serviceController");

//rotas

router.post("/services", (req, res)=>{
    return serviceController.create(req, res)
})

router.get("/services", (req, res)=>{
    return serviceController.findAll(req, res);
})

router.get("/services/:id", (req, res)=>{
     return serviceController.findId(req, res);
})

router.delete("/services/:id", (req, res)=>{
    return serviceController.remove(req, res);
})

router.put("/services/:id", (req, res)=>{
    return serviceController.update(req, res);
})



module.exports = router;