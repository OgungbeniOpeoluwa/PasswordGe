const {allCharacter,alphaNumeric,alphabeth,numeric,alphaSymbol,numericSymbol} = require('../service/Passwordservice')

const allCharacters = async(request,response)=>{
    try{
        const res = await allCharacter(request.body)
        response.status(200).json({res})

    }catch(error){
    response.status(400).json(error.message)
    }
}
const alphaNumerics = async(req,response)=>{
    try{
        const res =await alphaNumeric(req.body)
        response.status(200).json({res})
    }catch(error){
        response.status(400).json(error.message)
    }
}
const alphabeths = async(req,res)=>{
    return await alphabeth(req.body)
    .then((response)=> res.status(200).json({"res":response}))
    .catch((error) => res.status(400).json(error.message))

}
const numerics = async(req,res) => {
    return await numeric(req.body)
    .then((response)=> res.status(200).json({"res":response}))
    .catch((error) => res.status(400).json(error.message))
}

const alphaSymbols = async(req,res) => {
    return await alphaSymbol(req.body)
    .then((response)=> res.status(200).json({"res":response}))
    .catch((error) => res.status(400).json(error.message))
}

const numericSymbols = async(req,res) => {
    return await numericSymbol(req.body)
    .then((response)=> res.status(200).json({"res":response}))
    .catch((error) => res.status(400).json(error.message))
}
module.exports = {allCharacters,alphaNumerics,alphabeths,numerics,alphaSymbols,numericSymbols}