const express=require("express");

const app=express();
let saludo=require("./function")
app.get("/string", function (request,response) {
    response.send(`<h1>Hola ${saludo}</h1>`)

})

app.listen(process.env.PORT||3000);