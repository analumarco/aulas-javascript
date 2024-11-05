function Somar(){
    var num1 = parseFloat(document.getElementById('one').value);
    var num2 = parseFloat(document.getElementById('two').value);
    
    var sum = num1 + num2;
    var ans = document.getElementById('result');
    ans.innerHTML = "O resultado é "+ sum;
}