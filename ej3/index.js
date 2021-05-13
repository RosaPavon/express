

const express=require("express");

const app=express();

persona["Rosa","Jesús","Mary","Oberón","Yuna"]


app.get("/persona/:nombre", function (request,response) {
    for (let i = 0; i < persona.length; i++) {
        let personajillo = persona[i];
        
    }
    response.send(personajillo)

})
app.get("/persona/:parametro", function (request,response) {
    let nombre=request.params.parametro
    if(nombre===persona){
        
        response.send(nombre)

    }
    else{
        response.send("Parametro no encontrado")
  
    }

})

app.listen(process.env.PORT||3000);