
const express=require("express");

const app=express();

app.get("/:resultado", function (request,response) {
    let numero=request.params.numero
    for (let o = 0; o < numero.length; o++) {
        numero[i]=resultado()
        
    }
 
    response.send(numero)

})

app.listen(process.env.PORT||3000);