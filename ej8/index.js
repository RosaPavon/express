
const express=require("express");

const app=express();

app.get("/:resultado", function (request,response) {
    let numero=request.params.numero
    for (let o = 0; o < numero.length; o++) {
        numero[i]=resultado()
        
    }
 
    response.send(numero)

})

app.get("/borrar/:numero", function (request,response) {
    let numero=request.params.numero

    if(numero<numero.length || numero>0){
        response.send(0)
    }
    else{response.send("Numero no valido")}

     

})

app.listen(process.env.PORT||3000);