//variaveis que recebem os valores do formulario
let comprimento = 0, largura = 0, profundidade = 0, peso = 0, quantidade = 0, cep = 0;

//variaveis fixas
const packing = 5.72, picking = 0.28, valorVolume = 49.98, pesoPorkg = 0.91;

//variaveis para calcular o orçamento total
let valorFrete = 0, logistica = 0;

//monitora display da class imagem, para ajudar na recursividade do site
function statusDivImagem(){
    if(document.querySelector('.imagem').style.display == "none"){
        return true;
    }else{
        return false;          
    }
}

//mostra o valor do orçamento a partir dos dados enviados 
function mostrarOrcamento(){
    
    setTimeout(()=>{

        if( window.screen.width < 768 ){
            document.querySelector('.imagem').style.display = "none";
        }else{
            document.querySelector('.imagem').style.display = '';
        }
        if(statusDivImagem() == true){
            document.querySelector('.questionario').style.display = 'none';
        }else{
            document.querySelector('.imagem').style.display = "none";
            document.querySelector('.questionario').style.display = '';
        }
        document.querySelector('.resultado').style.display = 'block';
        document.querySelector('.botao').style.display = 'none';
        document.querySelector('button').style.display = 'inline';
    },400);
    
}

//permite que retorna para o layout anteriaor para que possa ser feito mais um orçamentp
function mostrarImagem(){
    setTimeout(()=>{
        if( window.screen.width < 768 ){
            document.querySelector('.imagem').style.display = "none";
        }else{
            document.querySelector('.imagem').style.display = 'block';
        }      
        if(statusDivImagem() == true){
            document.querySelector('.imagem').style.display = 'none';
        }else{
            document.querySelector('.imagem').style.display = 'block';
        }
        document.querySelector('.resultado').style.display = 'none';
        document.querySelector('.questionario').style.display = '';
        document.querySelector('button').style.display = 'none';
        document.querySelector('.botao').style.display = '';
    },400);
    
}

//calcula o valor do frete
function precoFrete(){

    //variavel para armazenar "Geografia Comercial" de acordo com o CEP
    let geoComercial = '';

    for( let i = 0; i < codigoPorCep.length; i++ ){

        //verifica em qual intervalo esta o CEP do formulario e armazena a "Geografia Comercial" em que se encontra
        if( cep >= codigoPorCep[i]["CEP Inicial"] && cep <= codigoPorCep[i]["CEP Final"]){
            geoComercial = codigoPorCep[i]["Geografia Comercial"];
            //linha abaixo é pra sair do loop
            i = codigoPorCep.length;
        }

    }

    //faz uma verificação caso a "Geografia Comercial" nao tenha sido encontrada
    if(geoComercial == ''){
        alert('CEP não encontrado!');
        return;
    }
    
    //peso unitario convertido para kg
    let massa = (peso*0.001).toFixed(2);

    
    
    for( let j = 0; j < codigoePeso.length; j++ ){
        //verifica a "Geografia Comercial" e o intervalo do peso para saber o valor do frete
        if( geoComercial == codigoePeso[j]["codigo-regiao"] && verificaIntervaloDoPeso(massa, j) == true ){

            //preenche a tabela do frete quando encontra o valor do frete a partir da "Geografia Comercial" e do peso do pedido
            document.querySelector('.geoComercial').innerHTML = geoComercial;
            document.querySelector('.pesoMaxi').innerHTML = codigoePeso[j]["peso-maximo"]+"g";
            document.querySelector('.pesoPedido').innerHTML = massa.replace('.',',') +"kg";
            valorFrete = (parseFloat(codigoePeso[j]["preco"].replace(',','.')));
            document.querySelector('.valorFrete').innerHTML = "R$ " + codigoePeso[j]["preco"];
            document.querySelector('.freteTotal').innerHTML = "RS " + (valorFrete*quantidade).toFixed(2).replace('.',',');
            //linha abaixo para sair do loop
            j = codigoePeso.length;
            
        }
    }
    
    return;
}

//verifica o intervalo do peso do produto na variavel "codigoEPeso" para retornar o valor do frete
function verificaIntervaloDoPeso( peso, indice ){
    
    let pesoMax = (parseFloat(codigoePeso[indice]["peso-maximo"].replace(',','.')));
    if( peso <= pesoMax ){
        return true;
    }else{
        return false;
    }
}

//armazena os valores do formulário nas variaveis, verificacao de campos vazios e preenche as tabelas
function enviar(){

    //armazena os dados do formulario nas variais
    comprimento = parseFloat(document.getElementById("comprimento").value);
    largura = parseFloat(document.getElementById("largura").value);
    profundidade = parseFloat(document.getElementById("profundidade").value);
    peso = parseFloat(document.getElementById("peso").value);
    quantidade = parseFloat(document.getElementById("qtd").value);
    cep = parseFloat(document.getElementById("cep").value);

    //verifica se alguma variavel do formulario nao foi preenchida
    if( isNaN(comprimento) || isNaN(largura) || isNaN(profundidade) || isNaN(peso) || isNaN(quantidade) || isNaN(cep)){
        alert('existem campos incompletos');
        return;
    }
   
    //preenche a tabela de logistica a partir dos dados informados
    document.querySelector('.armM3').innerHTML = "R$ " + (comprimento*largura*profundidade*valorVolume*quantidade).toFixed(2).replace('.',',');
    document.querySelector('.calPacking').innerHTML = "R$ " + (quantidade*packing).toFixed(2).replace('.',',');
    document.querySelector('.calcPinking').innerHTML = "R$ " + (quantidade*picking).toFixed(2).replace('.',',');
    document.querySelector('.calcPeso').innerHTML = "R$ " + (quantidade*peso*0.001*pesoPorkg).toFixed(2).replace('.',',');
    logistica = (
        (comprimento*largura*profundidade*valorVolume*quantidade) +
        (quantidade*packing)+
        (quantidade*picking)+
        (quantidade*peso*0.001*pesoPorkg));
    document.querySelector('.orcamento').innerHTML = "R$ " + logistica.toFixed(2).replace('.',',');

    //vai para a funcao para preencher a tabela do frete
    precoFrete();
    
    //Soma o valor da logistica com o valor do frete
    let total = (logistica+(valorFrete*quantidade)).toFixed(2).replace('.',',');

    document.querySelector('.preco').innerHTML = "R$ " + total;

    //mostra o valor do orçamento
    mostrarOrcamento();

}

