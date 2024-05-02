let resposta = document.getElementById("resposta")
let consultar = document.getElementById("consultar")

consultar.addEventListener("click", ()=>{
    let endereco = document.getElementById("endereco").value 

    fetch("https://viacep.com.br/ws/"+endereco+"/json/") //endpoint ou rota
    .then(resposta => resposta.json())
    .then(dados => {
        console.log(dados)

        resposta.innerHTML = "CEP:" + dados.cep + "<br>"
        resposta.innerHTML += "Localidade: " + dados.localidade + "<br>"
        resposta.innerHTML += "Logradouro " + dados.logradouro + "<br>"
        resposta.innerHTML += "Bairro: " + dados.bairo + "<br>"
        resposta.innerHTML += "Estado:  " + dados.uf + "<br>"


    })
    .catch((err)=>{
        console.error("erro de busca de dados",err)
    })
})