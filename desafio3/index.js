fetch('../dados.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        var maior = []
        var menor = []
        data.forEach(d => {
            if (maior.length == 0 || maior.valor <= d.valor) {
                maior = d
            }
        })

        menor=maior
        data.forEach(d=>{
            if(d.valor==0){}
            else if (maior.length == 0 || menor.valor >= d.valor) {
                menor = d
            }
        })
        
        var quantidadePMedia = 0
        var media=0
        data.forEach(d=>{
            media+=d.valor
            if(d.valor == 0){
                quantidadePMedia--
            }
            quantidadePMedia++
        })
        media/=quantidadePMedia

        var MaiorQMedia = 0
        data.forEach(d=>{
            if(d.valor > media){
                MaiorQMedia++
            }
        })

        document.write(`Sem contar os dias sem faturamento, o com menor faturamento foi o dia ${menor.dia} com o valor ${menor.valor}<br/>
                        O dia com maior faturamento foi o ${maior.dia} com valor ${maior.valor}<br/>
                        Foram ${MaiorQMedia} dias no mês que o faturamento diário foi superior à média`)
    })
