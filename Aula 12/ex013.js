function msg(texto){
    console.log(texto)
}

var agora = new Date()
var diaSem = agora.getDay()

/* 
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/

console.log(`Hoje é `)
switch (diaSem){
    case 0:
        msg('Domingo')
        break
    case 1:
        msg('Segunda-feira')
        break
    case 2:
        msg('Terça-feira')
        break
    case 3:
        msg('Quarta-feira')
        break
    case 4:
        msg('Quinta-feira')
        break
    case 5:
        msg('Sexta-feira')
        break
    case 6:
        msg('Sábado')
        break
    default:
        msg('[ERRO] Dia inválido')
}