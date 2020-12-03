## Gerador de Certificado em PDF

Esse projeto utiliza Node.js, Handlebars e Puppeteer.

## Pra rodar com Heroku

Use o postman (ou similar) para executa um POST em https://gerador-certificado-pdf.herokuapp.com/certificado com um body nesta estrutura:  
{  
 "data": {  
 "courseName": "Jogos Digitais",  
 "date": "Outubro de 2020",  
 "studentName": "Raissa Scheeren"  
 }  
}.  
(Também há um exemplo em imagem no repositório).  
Para fazer download pleo browser, faça F5 e o pop-up de download será aberto.

## Pra rodar localmente

Primeiramente, instale as dependências do projeto com "npm install".  
Use o comando "node index.js".  
Use o postman (ou similar) para executa um POST em localhost:3000/certificado com um body nesta estrutura:  
{  
 "data": {  
 "courseName": "Jogos Digitais",  
 "date": "Outubro de 2020",  
 "studentName": "Raissa Scheeren"  
 }  
}.  
(Também há um exemplo em imagem no repositório).  
O PDF será criado na pasta do projeto.
Para fazer download pleo browser, faça F5 e o pop-up de download será aberto.
