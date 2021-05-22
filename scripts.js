//variaveis que recebem os valores do formulario
let comprimento = 0, largura = 0, profundidade = 0, peso = 0, quantidade = 0, cep = 0;

//variaveis fixas
const packing = 5.72, picking = 0.28, valorVolume = 49.98, pesoPorkg = 0.91;


//calcula o valor do frete
function precoFrete(){

    let geoComercial = '';

    for( let i in codigoPorCep ){
        if( cep == codigoPorCep[i]["CEP Final"]){
            geoComercial = codigoPorCep[i]["Geografia Comercial"];
            i = codigoPorCep.length;
        }
    }
    if(geoComercial === ''){
        alert('CEP não encontrado!');
    }
    
    let massa = (quantidade*(peso)*0.001).toFixed(2);

    for( let j in codigoePeso ){
        if( geoComercial == codigoePeso[j]["codigo-regiao"] && verificaIntervaloDoPeso(massa, j) === true ){
            alert('valor peso = ' + codigoePeso[j]["preco"]);
            j = codigoePeso.length;
        }
    }
    return;
}

function verificaIntervaloDoPeso( peso, indice ){
    
    let pesoMax = (parseFloat(codigoePeso[indice]["peso-maximo"].replace(',','.')));

    if(indice == 0 ) {
        if( peso <= pesoMax){
            return true;
        }else{
            return false;
        }
    }else{

        if( peso > parseFloat(codigoePeso[indice-1]["peso-maximo"].replace(',','.')) && peso <= pesoMax){
            return true;
        }else{
            return false;
        }
    }  
}


//armazena os valores do formulário nas variaveis e faz uma verificacao de campos vazios
function enviar(){

    comprimento = parseFloat(document.getElementById("comprimento").value);
    largura = parseFloat(document.getElementById("largura").value);
    profundidade = parseFloat(document.getElementById("profundidade").value);
    peso = parseFloat(document.getElementById("peso").value);
    quantidade = parseFloat(document.getElementById("qtd").value);
    cep = parseFloat(document.getElementById("cep").value);

    if( isNaN(comprimento) || isNaN(largura) || isNaN(profundidade) || isNaN(peso) || isNaN(quantidade) || isNaN(cep)){
        alert('existem campos incompletos');
    }
   
    document.querySelector('.armM3').innerHTML = (comprimento*largura*profundidade*valorVolume*quantidade).toFixed(2);
    document.querySelector('.calPacking').innerHTML = (quantidade*packing).toFixed(2);
    document.querySelector('.calcPinking').innerHTML = (quantidade*picking).toFixed(2);
    document.querySelector('.calcPeso').innerHTML = (quantidade*(peso)*pesoPorkg).toFixed(2);
    document.querySelector('.orcamento').innerHTML = (
        (comprimento*largura*profundidade*valorVolume*quantidade) +
        (quantidade*packing)+
        (quantidade*picking)+
        (quantidade*(peso)*pesoPorkg)).toFixed(2);

    precoFrete();
}





//trabalhando o frete

