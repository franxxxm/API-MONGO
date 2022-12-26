const {Service:ServiceModel} = require("../models/Service")


const create = async (req, res)=>{
    try {
        const service = {
            name:req.body.name,
            description:req.body.description,
            price: req.body.price,
            image:req.body.image
        }

        const response = await ServiceModel.create(service);
        
        return res.status(201).json({response, mensagem:'criado com sucesso'})
    } catch (error) {
        console.log(error)
    }
}

const findAll = async (req, res)=>{
    try {
        const response = await ServiceModel.find();

        return res.status(201).json({response});
    } catch (error) {
        console.log(error);
    }
}

const findId = async (req, res)=>{
    try {
        const id = req.params.id;

        const response = await ServiceModel.findById(id);

        return res.json({response})
    } catch (error) {
        console.log(error)  
    }
}

const remove = async (req, res)=>{
    try {
        const id = req.params.id;
        
        const response = await ServiceModel.findOneAndDelete(id);

        return res.status(200).json({mensagem:"deletado com sucesso"});
    } catch (error) {
        console.log(error)
    }
}

const update = async (req, res)=>{
    try {
        const id = req.params.id;

        const service = {
            name:req.body.name,
            description:req.body.description,
            price: req.body.price,
            image:req.body.image
        }

        const response = await ServiceModel.findOneAndUpdate(id, service);

        return res.status(200).json({mensagem:"modificado com sucesso"})
    } catch (erro) {
        console.log(erro)
    }
}


module.exports = {
    create,
    findAll,
    findId,
    remove,
    update
};