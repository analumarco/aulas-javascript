document.addEventListener('DOMContentLoaded',function(){
    MascaraCPF();
    MascaraTel();
});

function MascaraCPF(){
    var cpfMask = IMask(
        document.getElementById("cpf"), {
            mask: '000.000.000-00',
        }
    );
}

function MascaraTel(){
    var cpfMask = IMask(
        document.getElementById("tel"), {
            mask: '(00) 00000-0000',
        }
    );
}

btn.addEventListener('click',function(){
    var textocpf = document.getElementById('cpf').value;
    alert(textocpf);
});
