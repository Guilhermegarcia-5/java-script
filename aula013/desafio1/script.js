agora = new Date()
hora = agora.getHours()
var a = document.getElementById('msg')
var b = document.getElementsByTagName("body")[0]
var img = document.getElementsByTagName('div')[0]
a.innerHTML = `Agora são ${hora} horas`
if (hora < 12) {
    b.style.background = 'rgb(240, 240, 113)'
    img.style.backgroundImage = 'url(imagens/fotomanha.png)'
} else if (hora <= 18) {
    b.style.background = 'rgb(148, 41, 2)'
    img.style.backgroundImage = 'url(imagens/fototarde.png)'
} else {
    img.style.backgroundImage = 'url(imagens/fotonoite.png)'
}