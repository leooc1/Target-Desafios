var numberMax = prompt('Digite um número para buscá-lo na sequência de Fibonacci: ')

var i = 1; //índice
var Fib = [0]; //Fibonacci

while (Fib[i - 1] < Number(numberMax)) {
  if (i == 1) {
    Fib[i] = 1
  } else {
    Fib[i] = Fib[i - 1] + Fib[i - 2]
  }
  i++;
}
if(Fib[i - 1] > Number(numberMax)){
    document.write('<br/>Esse número não está na sequencia de Fibonacci')
}
else{
    document.write(`<br/>O número ${Fib[i-1]} foi encontrado e é o ${i}º na sequência`)
}