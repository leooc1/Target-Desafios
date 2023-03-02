function Inverter(str){
    var stringNova = ''
    for(let i=str.length; i>0; i--){
        stringNova += (str[i - 1])
    }
    return stringNova
}

var string = prompt('Digite a string:')
document.write(`String invertida: ${Inverter(string)}`)