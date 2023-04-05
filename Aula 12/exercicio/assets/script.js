function carregar(){
    var msg = document.querySelector('div.msg')
    var img = document.querySelector('div.imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Hora atual: ${hora} horas.`

    
    if(hora >= 0 && hora < 13){
        //bom dia
        img.src = 'img/manha.png'
    }else if (hora >= 13 && hora < 18){
        //boa tarde
        img.src = 'img/tarde.png'
    }else{
        //boa noite
        img.src = 'img/manha.png'
    }
}