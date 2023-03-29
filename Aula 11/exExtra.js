function testar(){
    var pais = document.querySelector('input#cxtexto')
    res.innerHTML = res;

    if (pais.value == ''){
        res.innerHTML = `Digite algum país`
    }else if (pais.value.toUpperCase() == 'BRASIL'){
        res.innerHTML = `Você é <strong>brasileiro</strong>!`
    } else{
        res.innerHTML = `Você é <strong>estrangeiro</strong>`
    }
}