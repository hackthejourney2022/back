# #Partiu back

Bem vindo ao partiu back! Este projeto faz parte do projeto do grupo 7, que tem o intuito de apresentar uma ideia de utilização das APIs da Amadeus para fornecer uma experiência rica e satisfatória para nômades e digitais.

# Tecnologias utilizadas

Este projeto é estruturado utilizando inteiramente nestjs, com uma arquitetura que nos permite plugar de maneira desacoplada diversos provedores de informação, separando a parte de infra estrutura das regras de negócio.
A arquitetura é inspirada na arquitetura hexagonal, mas simplificada, de forma que ganhamos velocidade, mas perdemos um pouco de separação de responsabilidads.
Também utilizamos o winston logger, a fim de termos logs mais agradáveis de se ler, e Redis, para cache de resultados.
Finalmente, utilizamos jest como nosso test runner

## Estrutura do Projeto

**Entrypoint**
> Nesta pasta temos os controllers que definem as rotas que a aplicação responde, das quais muitas são rotas de "proxy" das APIs da Amadeus, isto é, que apenas as chama e retorna o resultado sem mais tratamentos. As utilizamos para explorarmos e conhecermos melhor a API,a forma de utilizá-la, e conseguirmos também gerar automaticamente mapeamentos de interface da API para Typescript, afim de acelerar nosso desenvolvimento.
As rotas que, de fato, estão sendo utilizadas pela aplicação do hackathon são:
* GET /recommendation/flight, presente no FlightRecommendationController
* POST /shopping/summary-flight, presente no FlightShoppingController

Além disso, nesta camada também temos os "DTOs", que utilizamos para mapear os dados fornecidos pelo usuário com uma validação forte de formato, evitando, assim, que dados inválidos cheguem a ser processados.
Outras rotas planejadas, mas não implementados, são:
* POST /shopping/flight-pricing, rota para tarifação de voo
* POST /booking, rota para criação de reserva
* GET /booking/:id, rota para consulta de reserva
* DELETE /booking/:id, rota para cancelamento de reserva
* POST /issuing, rota para emissão de reserva
* GET /issuing/:id, rota para consulta de ticket emitido
* DELETE /issuing/:id, rota para cancelamento de ticket emitido

**Core**
> A pasta Core contempla a regra de negócio principal, além de abstratos para acesso a infraestrtura que são implementados depois, algumas funções utilitárias, e classes de parsers.
As classes principais são:

* core/domain/service/flight-recommendation-service.ts, classe responsável por compor as chamadas para a api da Amadeus, gerando sugestões com base no score dos lugares a serem sugeridos. A ideia aqui é ter um cruzamento com as preferências do usuário e sugerir lugares que se enquadrem em seu perfil, no entanto, nesta versão, o algoritmo de seleção é mais simplificado, apenas para exemplo, onde só somamos o score total e ordenand pelo maior;

* core/domain/service/flight-shopping-service.ts, classe responsável por retornar os voos disponíveis para compra. O método utilizado para retornar os dados que o front exibe é o **getSummarizedFlights**, e nesta versão retornamos apenas os três mais baratos solicitados.
Seria nesta classe, também, que implementaríamos a rotina de tarifação do voo, para confirmar o seu preço, caso o cliente queira adquirí-lo.

Outras classes planejadas, mas não implementadas, para entrar no domain são:
* core/domian/service/flight-booking-service.ts, classe responsável por efetuar reserva, consulta de reserva, e cancelamento de reserva;
* core/domian/service/fight-issuing-service.ts, classe responsável por efetuar emissão, consulta de ticket emitido, e cancelamento de ticket emitido;

Temos também no dominio a declaração dos contratos praticados na API. Tais contratos, para fins de simplificação, foram em sua maioria baseados nos payloads da própria Amadeus, que foram gerados automaticamente a partir dos retornos das APIs, de forma que conseguimos ter contratos suficientemente válidos para o intuito do repositório.

**Infraestructure**
> A camada de Infraestrutura tem o objetivo de isolar todo recurso externo ao domínio de negócio que entende-se como componentes de infra estrutura ou de serviço, que tenham comunicação externa ao core da aplicação; entende-se como recurso externo, APIs e serviços, Banco de dados, Sistemas de fila e mensagem, Repositórios de consumo de dados do banco de dados (abstração conceitual de exposição dos dados), assim como comunicação com o SO, taís como escrita e leitura de arquivos, etc.
A separação das implementações de recurso de infra do domínio somado à inversão de dependência, permite que pluguemos, com facilidade, diferentes provedores de informação. Um exemplo que deixamos foi a implementação do cliente de geocoding, que temos iplementação usando os serviços da Amadeus, e também da Nominatim, permitindo que mudemos facilmente entre um e outro.
Nas implementações com a api da Amadeus, criamos vários clients separados para categorizar as diversas funcionalidades que a api oferecem em grupos semelhantes, mas todos, por trás, utiliando a biblioteca do npm da Amadeus.

Para facilitar nosso desenvolvimento, também geramos uma tipagem automática do pacote amadeus, o que acelera a sua utilização em código.

Temos também implementações de repositórios para alguns recursos necessários para a nossa aplicação. Para fins de apresentação de nossa ideia, no entanto, tais repositórios foram implementados apenas para consulta e retornando dados escolhidos aleatoriamente, o que diversifica um pouco mais os possíveis resultados retornados.

Finalmente, tanto nos repositórios como nas chamadas das APIs da Amadeus, criamos um cache do resultado, de forma a diminuir o número de requisições feitas na api do parceiro e proteger a nossa infraestrutura de volumes mais intensos de requisições.


## Testes Unitários

Neste projeto utilizamos **Jest** para implementar os testes unitários.
Para rodar os testes da aplicação é necessário executar:
> npm run test:coverage

Fizemos apenas a implementação de alguns poucos métodos para exemplificar o padrão de teste que adotaríamos.


## Configurações
Temos configurações na aplicação, com valores defaults definidos, que podem ser visto no fonte **load-configuration**. Tais configuraões, para teste via o comando **npm run start:dev**, podem ser alteradas no arquivo .env.

Segue lista de variáveis de ambiente utilizadas:
 > **HTTP_PORT**: Porta que a aplicação deve ser disponibilizada (Porta default: 3000);
 
 > **REDIS_URL**: Endereço do Redis utilizado pelo nosso cache. Padrão localhost:6379;
 
 > **REDIS_PASSWORD**: Senha do Redis quando houver. Padrão não informado;
 
 > **AMADEUS_CLIENT_ID**: Id do cliente oauth da Amadeus. Obrigatório informar para que a aplicação possa funcionar corretamente;
 
 > **AMADEUS_CLIENT_SECRET**: Segredo do cliente oauth da Amadeus. Obrigatório informar para que a aplicação possa funcionar corretamente;

## Instruções para Execução do Projeto

Para executar o projeto, caso exista uma instância do Redis acessível e sendo apontada pela aplicação, execute o comando **npm run start:dev**
No entanto, deixamos um docker-compose.yml pronto para podermos fazer o teste da aplicação com mais facilidade, lembrando, claro, da necessidade do arquivo .env preenchido com as credenciais da api da Amadeus.


## Como acessar a aplicação

O objetivo desta aplicação é viabilizar via endpoint a inclusão, consulta geral e específica de "Samples" cadastrados. Segue abaixo detalhamento dos endpoint:

URL da Aplicação: http://localhost:3000

> **GET** /health-check
> Consulta da saude do serviço
```
{ "ok": true }
```

Para uma lista completa de exemplos de rotas desta aplicação, você pode acessar nosso Workspace público do Postman:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/112354-2ac33112-cf06-47be-b822-a6544234939f?action=collection%2Ffork&collection-url=entityId%3D112354-2ac33112-cf06-47be-b822-a6544234939f%26entityType%3Dcollection%26workspaceId%3Dee5bb36d-8aca-4997-8a77-eb5cb1e53ef1#?env%5Bhackaton%20aws%5D=W3sia2V5IjoidXJsIiwidmFsdWUiOiJodHRwOi8vMTguMjE1LjExNy40ODozMDAwIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
