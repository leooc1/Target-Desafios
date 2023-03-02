function Percentual(estado, total){
    return (estado / total) * 100
}

var SP = 67836.43
var RJ = 36678.66
var MG = 29229.88
var ES = 27165.48
var Outros = 19849.53

var total = SP+RJ+MG+ES+Outros
var Opcao = prompt(`Qual o estado que deseja ver o percentual de representação?
                            1 - SP
                            2 - RJ
                            3 - MG
                            4 - ES
                            5 - Outros
    Opção:`)
switch(Number(Opcao)){
    case 1:
        document.write(`Representação de SP: ${Percentual(SP,total).toFixed(2)}%`)
        break
    case 2:
        document.write(`Representação de RJ: ${Percentual(RJ,total).toFixed(2)}%`)
        break
    case 3:
        document.write(`Representação de MG: ${Percentual(MG,total).toFixed(2)}%`)
        break
    case 4:
        document.write(`Representação de ES: ${Percentual(ES,total).toFixed(2)}%`)
        break
    case 5:
        document.write(`Representação dos outros estados: ${Percentual(Outros,total).toFixed(2)}%`)
        break
    default:
        document.write('Opção inválida!')
}