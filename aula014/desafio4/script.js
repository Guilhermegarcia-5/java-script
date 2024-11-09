t = document.getElementById('it');
n = document.getElementById('in');
msg = document.getElementById('msg');
b = document.getElementById('b');

b.addEventListener('click', gerar);

function gerar() {
    if (Number(n.value) > 0 && parseFloat(n.value) == parseInt(n.value)) {
    var tv = Number(t.value);
    var nv = Number(n.value);
    var tv1 = 1;
    msg.innerHTML = '';

    while (tv1 <= nv) {
        msg.innerHTML += `${tv} x ${tv1} = ${tv * tv1}<br>`;
        tv1++;
    }
} else {msg.innerHTML = 'valor inválido'}
}
