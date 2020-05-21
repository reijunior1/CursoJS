function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
    alert('[ERRO] Digite os valores informados para obter o resultado' )
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', 'menino-crianca.png')
            } else if (idade < 21){
                img.setAttribute('src', 'menino-adolecente.png')
            } else if (idade < 50){
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                img.setAttribute('src', 'homem-idoso.png')
        }

        } else if (fsex[1].checked){
            genero = 'Mulher'
            if ( idade >= 0 && idade <= 13){
                img.setAttribute('src', 'menina-crianca.png')
            } else if (idade < 21){
                img.setAttribute('src', 'menina-adolecente.png')
            }else if (idade <50){
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}