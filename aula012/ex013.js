var agora = new Date()
diasem = agora.getDay()

switch(diasem) {
    case 0:
        console.log('segunda')
        break
    case 1:
        console.log('terça')
        break
    case 3:
        console.log('quarta')
        break
    case 4:
        console.log('quinta')
        break
    case 5:
        console.log('sexta')
        break
    case 6:
        console.log('sabado')
        break
    case 7:
        console.log('domingo')
}