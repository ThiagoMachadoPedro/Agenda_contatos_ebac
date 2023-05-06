const form =document.getElementById("form-contatos");
let linhas ='';
const inputNomes= [];
const inputTelefones =[];


function agendar(){

  const inputNome =document.getElementById("nome");
const inputTelefone = document.getElementById("telefone");


if(inputNomes.includes(inputNome.value)){
  alert(`Contato: ${inputNome.value} ja foi Inserida,`)
  }else{
    inputNomes.push(inputNome.value); //push adiciona dados no array
    inputTelefones.push(parseInt(inputTelefone.value));

      let linha = '<tr>'; //abrir linha
    linha += `<td>${inputNome.value}</td>`;//aqui o parametro que a linha vai receber getbyID
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    linhas += linha;


  }
  inputNome.value ='';
  inputTelefone.value ='';

  }

  function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

  }


form.addEventListener('submit', function(e){
  e.preventDefault();

  agendar();
  atualizaTabela();


  });
