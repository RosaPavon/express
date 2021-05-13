
const express=require("express");

const app=express();
 
app.get("/", function (request,response) {
    response.send("<h1>Hola Mundo</h1>")
    response.send("<h1>desde express</h1>")

})

app.listen(process.env.PORT||3000);