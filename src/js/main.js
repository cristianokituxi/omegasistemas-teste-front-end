function endereco() {
    let inputConsult = document.querySelector('#inputConsult').value;

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${inputConsult}`;
    fetch(url).then(function (response) {
        response.json().then(function (dados){
           
           let urlCovid = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${dados.sigla}`
            fetch(urlCovid).then(function (response) {
                response.json().then(mostraEndereco)
            })


        })


    });
}



function mostraEndereco(dados) {
    let resultado = document.querySelector('#resultado')
    if (dados.erro) {
        resultado.innerHTML = "nao da porra"
    }
    else {

        resultado.innerHTML = ` <P>Estado:${dados.state}.</P>
                                  <P>Casos:${dados.cases}.</P>
                                    <P>Data:${dados.datetime}.<p/>
                                      <P>Mortes:${dados.deaths}.</P>
                                        <P>Recusas:${dados.refuses}.<p/>
                                           <P>Suspeitas:${dados.suspects}.</P>
                                                <P>Uf:${dados.uf}.</P>
                                                  <P>Id:${dados.uid}.</P> `
    }


}


