## cypress-basico-v2
Projeto basico do curso [**Talking About Testing**](https://udemy.com/user/walmyr) sobre testes automatizados utilizando Cypress.

## Pré-requisitos
É necessário ter o Node.js e o npm instalados para executar este projeto.

Utilizei as versões `v16.13.0` e `8.3.2` do Node.js e npm, respectivamente. Sugiro que você utilize as mesmas versões ou versões mais recentes.

## Instalação
Execute `npm install` (ou `npm i` para a versão curta) para instalar as dependências de desenvolvimento.

### Instalação e inicialização do Cypress
Na raiz do projeto, execute o comando `npx cypress open` para abrir o Cypress pela primeira vez
Por fim, com o Test Runner aberto, delete os exemplos criados automaticamente, crie um arquivo chamado `CAC-TAT.spec.js` e feche o Test Runner.

Obs. 2: Quando inicializado pela primeira vez, o Cypress automaticamente cria o arquivo cypress.json e o diretório cypress/, com os sub-diretórios fixtures/, integration/, plugins/ e support/, com seus respetivos arquivos (com exceção dos exemplos, que acabamos de deletar).


## Testes
Podemos rodar os testes simulando navegadores em Desktop ou Mobile em viewport.

### Desktop
Execute `npm test` (ou `npm t` para a versão curta) para executar o teste em modo headless.

Ou, execute `npm run cy:open` para abrir o Cypress no modo interativo.

### Mobile
Execute `npm test.mobile` (ou `npm t` para a versão curta) para executar o teste em modo headless para mobile.

Ou, execute `npm run cy:open.mobile` para abrir o Cypress no modo interativo para mobile.
