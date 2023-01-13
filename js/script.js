function troca() {
    img = document.getElementById("imagem")
    x = document.getElementById("btn360")


    x.innerHTML = `<input type="image" src="image/fechar.svg" onclick = "fechar()">`
    img.innerHTML = `<img src="image/sofa-gif.gif" width = 450px height: 223px>`
}

function fechar() {
    img = document.getElementById("imagem")
    x = document.getElementById("btn360")


    x.innerHTML = `<input type="image" src="image/360.svg" onclick = "troca()">`
    img.innerHTML = `<img src="image/sofa.svg" alt="Imagem de um sofá cor de rosa">`
}