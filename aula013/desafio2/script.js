botao.addEventListener('click', clicar)

function clicar() {
    var agora = new Date()
var anoatual = agora.getFullYear()

var msg = document.getElementById('msg')
var anotxt = document.getElementById('iano')
var botao = document.getElementById('botao')
var img = document.getElementById('img')

var mas = document.getElementById('mas')
var fem = document.getElementById('fem')

var ano = Number(anotxt.value)
var idade = anoatual - ano

var m1 = document.getElementById('m1')
var m2 = document.getElementById('m2')
var m3 = document.getElementById('m3')
var m4 = document.getElementById('m4')
var m5 = document.getElementById('m5')
var m6 = document.getElementById('m6')

var f1 = document.getElementById('f1')
var f2 = document.getElementById('f2')
var f3 = document.getElementById('f3')
var f4 = document.getElementById('f4')
var f5 = document.getElementById('f5')
var f6 = document.getElementById('f6')

var e = document.getElementById('e')

    //mas

    if (mas.checked && idade < 7) {
        msg.innerHTML = `bebê com ${idade} anos`
        m1.style.display = 'block'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        f1.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (mas.checked && idade < 13) {
        msg.innerHTML = `criança com ${idade} anos`
        m2.style.display = 'block'
        m1.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (mas.checked && idade < 18) {
        msg.innerHTML = `adolesc. com ${idade} anos`
        m3.style.display = 'block'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (mas.checked && idade < 21) {
        msg.innerHTML = `jovem com ${idade} anos`
        m4.style.display = 'block'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (mas.checked && idade < 50) {
        msg.innerHTML = `adulto com ${idade} anos`
        m5.style.display = 'block'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m6.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (mas.checked && idade >= 50) {
        msg.innerHTML = `idoso com ${idade} anos`
        m6.style.display = 'block'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade < 7) {
        msg.innerHTML = `bebê com ${idade} anos`
        f1.style.display = 'block'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade < 13) {
        msg.innerHTML = `criança com ${idade} anos`
        f2.style.display = 'block'
        f1.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade < 18) {
        msg.innerHTML = `adolesc. com ${idade} anos`
        f3.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade < 21) {
        msg.innerHTML = `jovem com ${idade} anos`
        f4.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f5.style.display = 'none'
        f6.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade < 50) {
        msg.innerHTML = `adulta com ${idade} anos`
        f5.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f6.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    } else if (fem.checked && idade >= 50) {
        msg.innerHTML = `idosa com ${idade} anos` 
        f6.style.display = 'block'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'none'
    }

    if (idade > 120 || ano > anoatual) {
        msg.innerHTML = 'valor invalido'
        f6.style.display = 'none'
        f1.style.display = 'none'
        f2.style.display = 'none'
        f3.style.display = 'none'
        f4.style.display = 'none'
        f5.style.display = 'none'
        m1.style.display = 'none'
        m2.style.display = 'none'
        m3.style.display = 'none'
        m4.style.display = 'none'
        m5.style.display = 'none'
        m6.style.display = 'none'
        e.style.display = 'block'
    }
}



