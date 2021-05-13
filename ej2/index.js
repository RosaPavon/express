
const express=require("express");
const app=express

numeross[0,0,0,0,0,0,0,0,0,0]

app.get("/:numero", function (request,response) {
    let numero=request.params.numero//recogemos el parametro y lo ponemos en una variable
    let numerillo= Math.floor(Math.random()*(numero-1)+1)
    response.send(`${numerillo}`)

})

app.listen(process.env.PORT||3000);