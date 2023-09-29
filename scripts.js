function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.querySelector('input#txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Erro! Verifique os dados e tente novamente');
    } else {
        let fsex = document.getElementsByName("radsex")
        let idade = ano - Number(fano.value) 
        let gênero = ""
        let img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.src = "/imgs/bebeMas.jpg"
            } else if (idade < 21) {
                img.src = "/imgs/jovemMas.jpg"
            }   else if (idade < 64) {
                img.src = "/imgs/adultoMas.jpg"
            } else {
                img.src = "/imgs/idoso.jpg"
            }
        } else {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.src = "/imgs/bebeFem.jpg"
            } else if (idade < 21) {
                img.src = "/imgs/jovemFem.jpg"
            }   else if (idade < 64) {
                img.src = "/imgs/adultoFem.jpg"
            } else {
                img.src = "/imgs/idosa.jpg"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos!`
        res.appendChild(img)
    }
}

