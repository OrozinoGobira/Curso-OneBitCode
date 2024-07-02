function diminuirVelocidade(velocity, print){
     let desacelerar = 20

     while (velocity > 0) {
        print(velocity)
        velocity -= desacelerar 
     }
     alert("Nave parada")
}


let naveVelocidade = 150

diminuirVelocidade(naveVelocidade,function(velocity){
   console.log("Velocidade atual "+ velocity)
})