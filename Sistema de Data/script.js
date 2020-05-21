
function carregar() {
    var msg  = document.getElementById('msg')
    var img  = document.getElementById('imagem')
    var dt = new Date()
    var horas = dt.getHours()
    var minutos = dt.getUTCMinutes()
    var mes = dt.getMonth();
    var ano = dt.getFullYear();
    var diasem = dt.getDay();
    var dia = dt.getDate();

    var meses = new Array("Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro")
    var semana = new Array ("Domingo","Segunda", "Terça-Feira", "Quarta-Feira","Quinta-Feira","Sexta-Feira","Sabado",); 
    
    if (minutos < 10) {
        minutos = '0' + minutos;
    } else {
            minutos = minutos + '';
    }


    msg.innerHTML = `Agora são ${horas}:${minutos} `
    msg.innerHTML += ` ${semana[diasem]} ${dia} / ${meses[mes]} / ${ano}`

   
    if (horas >= 0 && horas < 12 ) {
        img.src = 'manha.png'
        document.body.style.background = '#a26a49'
    } else if (horas >= 12 && horas <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#e69635'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#0d1a2a'
    }
}



