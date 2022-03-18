function adress() {
    let inputConsult = document.querySelector('#inputConsult').value;

    let url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${inputConsult}`;
    fetch(url).then(function (response) {
        response.json().then(function (dados){
           
           let urlCovid = `https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${dados.sigla}`
            fetch(urlCovid).then(function (response) {
                response.json().then(showAdress)
            })


        })


    });
}



function showAdress(dados) {
    let resultado = document.querySelector('#resul')
    if (dados.erro) {
        result.innerHTML = "estado federativo não existente"
    }
    else {

        result.innerHTML = ` <P class="retursearch">Estado:${dados.state}.</P>
                                <P class="retursearch">Uf:${dados.uf}.</P>
                                <P class="retursearch">Id:${dados.uid}.</P>
                                  <P class="retursearch">Casos:${dados.cases}.</P>
                                    <P class="retursearch">Data:${dados.datetime}.<p/>
                                      <P class="retursearch">Mortes:${dados.deaths}.</P>
                                        <P class="retursearch">Recusas:${dados.refuses}.<p/>
                                           <P class="retursearch">Suspeitas:${dados.suspects}.</P>`
                                               
                                                  
    }


}


