const notFound = (req,res)=>{
    return res.status(404).send('notFound')
}
module.exports=notFound