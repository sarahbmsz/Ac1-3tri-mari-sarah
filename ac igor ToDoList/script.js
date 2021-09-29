//Adicionar todos os elementos do formulário (um por um)
/* Exemplo: */ const x = document.querySelector("#x");

//Incluir botão
const bnt = undefined;

bnt.addEventListner("click", addItem);

function addItem() {
    //Criando um elemento
    //Criando um sub elemento (quantas vezes forem necessárias)
    //elementoNovo.innerHTML (atributos necessários)
    //elementoNovo.className (atributos necessários)

    //O elemento novo deve ser filho de UL
}

/*

<li>                     <- elemento
    <p> Tarefa XPTO </p> <- subElemento
    <p> 12/10 </p>

    </li>

    */

var enterButton = document.getElementById("btn");   
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    function crossOut(){
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);

}