
const express=require("express");

const app=express();

persona["Rosa","Hugo","Rocio","Blas","Naroa","Ander","Victor","Jorge","Pablo"]

app.get("/persona", function (request,response) {
    let nombre= Request.params.nombre
    let clase=nombre.push(persona)

    response.send(clase)

})


app.listen(process.env.PORT||3000);