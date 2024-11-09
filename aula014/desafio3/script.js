b = document.getElementById('b')
b.addEventListener('click', contar)
l = document.getElementById('l')
l.addEventListener('click', limpar)
msg = document.getElementById('msg')
msg2 = document.getElementById('msg2')
erro = document.getElementById('erro')

function contar() {
    i = document.getElementById('ii')
    f = document.getElementById('if')
    p = document.getElementById('ipa')

    ni = Number(i.value)
    nf = Number(f.value)
    np = Number(p.value)

    msg.innerHTML = ''

    if (ni && nf && np > 0) {
    for (ni; ni <= nf; ni += np) {
        msg2.innerHTML = `Contando...`
        msg.innerHTML += `${ni}&#x1F449`
        erro.innerHTML = ''
    }

     msg.innerHTML += '🚩'

} else {
    erro.innerHTML = 'valor inválido'
}
}

function limpar() {
    msg.innerHTML = ''
    msg2.innerHTML = 'Preparando a contagem...'
    i.value = ''
    f.value = ''
    p.value = ''
    erro.innerHTML = ''
}
