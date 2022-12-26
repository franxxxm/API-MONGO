const PartyModel = require("../models/Party")


const checkParty = (budget, services)=>{
    const priceSum = services.price;

    if(priceSum > budget){
        return true
    }

    return false
}


const create = async (req, res)=>{
    try {
      const party = {
        title:req.body.title,
        author:req.body.author,
        description:req.body.description,
        budget:req.body.budget,
        image:req.body.image,
        services:req.body.services,
      }  
      if(party.services && checkParty(party.budget, party.services)){
        return res.status(406).json({mensagem})
      }
      const response = await PartyModel.create(party);

      return res.status(200).json({mensagem:"criado com sucesso"})
    } catch (erro) {
        console.log(erro)
    }
}

module.exports = {
    create,
}