## MinimoChallenge
Desafio de Programação - Minimo 2021


Olá!! 

Se você está aqui, provavelmente está participando do processo seletivo da Minimo! Seja muito bem-vindo, e esperamos que goste do desafio que vamos propor. Pensamos nesta etapa como meio de tornar esta experiência mais construtiva para você e também para nos ajudar a avaliar o seu alinhamento com os valores da empresa.

Como dissemos na descrição da vaga no site da Preparo, nós não esperamos nenhum conhecimento técnico prévio de nenhum dos candidatos. Mas uma coisa que valorizamos muito por aqui, é a **capacidade de aprender** e a **autonomia** de cada um. No dia a dia da empresa você irá se deparar com inúmeras situações onde terá que:

* entender uma necessidade do cliente
* converter esta necessidade em requisitos técnicos
* pesquisar a melhor maneira de cumprir os requisitos
* Implementar uma solução aplicando o que pesquisou
* Apresentar ao cliente o resultado obtido e coletar feedbacks
* Realizar os ajustes necessários e colocar em produção
* Monitoramento e manutenção da solução 
* Prospecção de novas oportunidades 

Pensando nisso, desenvolvemos este desafio, que consta de uma simulação de uma pequena parte do processo descrito acima. Não nos prendemos a uma tecnologia ou metodologia específica para solucionar nossos problemas. 

# O Desafio
## Descrição do case
Imagine-se trabalhando para um determinado cliente da Minimo, cuja área de atuação é o **e-commerce**, chamado **Vendas Mil**. Este cliente possui diversos parceiros de logística para entregar os seus produtos na casa de seus clientes, e cada parceiro possui uma maneira diferente de calcular o preço cobrado pelo envio dos pedidos. Um deles é o **Logística Inteligente** e ele cobra do **Vendas Mil** por meio de duas frentes diferentes: Logística e Frete. A soma das duas frentes compõe o preço final que será cobrado por pedido. O preço é formado a partir da seguinte regra: 

### Custo de Logística:
O custo de logística é o preço cobrado para receber, empacotar, armazenar e enviar os pedidos. Basicamente, ele depende do peso e das dimensões do produto e da quantidade de itens comprados. As instruções de cobrança foram enviadas pelo fornecedor e foram baseadas em uma simulação de 150 pedidos contendo de 1 a 2 unidades de produto por pedido. Segue o e-mail: 

![image](https://user-images.githubusercontent.com/53821307/118880233-044c2080-b8c8-11eb-933e-70f628ab0910.png)

Para realizar a simulação acima, considerou-se o seguinte preço para cada um dos parâmetros:
* preço packing: 5.72 por pedido
* preço picking: 0.28 por produto
* preço por volume: 49.98 por m3
* preço por peso: 0.91 por kg

## Observações do candidato:
Segundo a imagem da simulação acima, o peso do item é 0.5g que para chegar no valor cobrado a partir do peso foi feita a multiplicação (150 * 0.5 * 0.91 ) =  68.25, que pode ser visto na imagem. Porem, ao meu ver esta errado, pois, foi esquecido de fazer a conversão do peso para kg, já que o preço por peso é 0.91 por kg. No meu programa eu fiz a conversão de grama para kg.
 
observações:
 * Desconsidere o custo do SKU
 * Packing é o preço por empacotar um pedido
 * Picking é o preço por receber cada unidade de produto


### Custo de Frete:
O custo de frete é o preço cobrado para levar o pedido até a casa do comprador. Ele é calculado com base no CEP do comprador e do peso total do pacote a ser enviado. Para calcular o preço do frete, é necessário consultar as tabelas em csv disponibilizadas neste repositório dentro da pasta "CSVs". 

Basicamente basta consultar a coluna "Geografia Comercial" para determinado intervalo de "CEP Inicial" e "CEP Final" que contém o CEP do comprador no arquivo "codigo-por-cep.csv". E então consultar qual o preço para o código encontrado no processo anterior e peso do total do pedido no arquivo "preco-por-codigo-e-peso.csv". 

## Regras
Desenvolva uma solução para automatizar o cálculo do preço que será cobrado por pedido utilizando sua tecnologia de preferência.

O programa que você desenvolver deve ter como **entrada** os seguintes **parâmetros**: 

* largura, profundidade e altura para cada unidade de produto em **metros**
* peso de cada unidade do produto em **gramas**
* Quantidade comprada (un. de produtos) 
* CEP de entrega

E deve ter como **saída** o preço que será cobrado por pedido. 

### Casos de teste
A seguir constam casos de teste para serem usados na validação da sua solução. Insira nos casos 2 e 3 os valores obtidos com a sua solução. 

#### Caso 1:
**Parâmetros**: 
* Peso do produto: 250g
* Dimensões do produto: 0.2 x 0.2 x 0.3m
* Quantidade de produtos: 2un.
* CEP: 05612-050 

**Saída esperada**:
* R$ 26,19

#### Caso 2:
**Parâmetros**: 
* Peso do produto: 1200g
* Dimensões do produto: 0,4 x 0,2 x 0,5m
* Quantidade de produtos: 3un.
* CEP: 04520-010 

**Saída esperada**:
* R$ 54,69

#### Caso 3:
**Parâmetros**: 
* Peso do produto: 2000g
* Dimensões do produto: 1 x 1 x 0,5m
* Quantidade de produtos: 1un.
* CEP: 07115-000 

**Saída esperada**:
* R$ 41,95

Além dos casos acima, desenvolva mais 3 casos para testar sua aplicação. Insira abaixo os valores que você usou para cada caso de teste que você desenvolveu:

#### Caso 4 (desenvolvido pelo cadidato):
**Parâmetros**: 
* Peso do produto: 1500g
* Dimensões do produto: 0.5 x 0.5 x 0.5m
* Quantidade de produtos: 2un.
* CEP: 1010009

**Saída esperada**:
* R$ 45,50

#### Caso 5 (desenvolvido pelo cadidato):
**Parâmetros**: 
* Peso do produto: 2000g
* Dimensões do produto: 2 x 1 x 0.5m
* Quantidade de produtos: 1un.
* CEP: 6172081

**Saída esperada**:
* R$ 66,94

#### Caso 6 (desenvolvido pelo cadidato):
**Parâmetros**: 
* Peso do produto: 1100g
* Dimensões do produto: 0.3 x 0.3 x 0.3m
* Quantidade de produtos: 2un.
* CEP: 12331641

**Saída esperada**:
* R$ 42,04

### Forma de entrega: 
Subir a sua solução em um repósitório no GitHub e nos avisar por e-mail (bruno.porto@minimo.com.br).

### Em caso de dúvidas:
Ficamos a disposição no mesmo contato do e-mail acima. 

### Prazo para entrega **21hrs 27/05/2021**


# Boa Sorte
 

