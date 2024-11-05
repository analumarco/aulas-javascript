function Calcular(){
    var dist = parseFloat(document.getElementById('distancia').value);
    var cda = parseFloat(document.getElementById('cda').value);
    var veloPer = parseFloat(document.getElementById('veloPer').value);
    
    var calc = 15.946 * Math.sqrt(dist * cda);
    var veloMed = document.getElementById('result');

    if(calc <= veloPer){
        veloMed.innerHTML = "O resultado é "+ calc + ", velocidade permitida.";
        veloMed.style.color = 'green';
    }
    else{
        veloMed.innerHTML = "O resultado é "+ calc + ", velocidade não permitida.";
        veloMed.style.color = 'red';
    }
}