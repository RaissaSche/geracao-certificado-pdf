## Gerador de Certificado em PDF

Esse projeto utiliza Node.js, Handlebars e Puppeteer.

## Pra rodar

Primeiramente, instale as dependências do projeto com "npm install".
Use o comando "node index.js".
Use o postman (ou similar) para executa um POST em localhost:3000/certificado com o seguinte body: {
"data": {
"courseName": "Jogos Digitais",
"date": "Outubro de 2020",
"studentName": "Raissa Scheeren"
}
}. (Também há um exemplo em imagem no repositório).
O PDF será criado na pasta do projeto.
