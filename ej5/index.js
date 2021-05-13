
const express=require("express");

const app=express();

parametro[
    nombre="Oberón",
    apellido="Perro",
    edad=4]

app.get("/parametro/:nombre", function (request,response) {
    let nombre= Request.params.nombre
    response.send(parametro.nombre)

})
app.get("/parametro/:nombre/:apellido", function (request,response) {
    let apellido= Request.params.apellido
    response.send(parametro.apellido)

})
app.get("/parametro/:nombre/:edad", function (request,response) {
    let edad= Request.params.edad
    response.send(parametro.edad)

})

app.listen(process.env.PORT||3000);