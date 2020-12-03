const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const puppeteer = require("puppeteer");
const fs = require("fs");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

configuraDados = (dados) => {
  return {
    dados: {
      nomeCurso: dados.courseName,
      data: dados.date,
      nomeAluno: dados.studentName,
    },
  };
};

app.post("/certificado", (req, res) => {
  console.log(req.body);
  res.render(
    "main",
    {
      layout: "index",
      dados: configuraDados(req.body.data),
      dadosExistem: true,
    },
    async function (err, html) {
      console.log(html);
      await createPDF(html);
      var data = fs.readFileSync("./tmp/certificado.pdf");
      res.contentType("application/pdf");
      res.send(data);
    }
  );
});

app.get("/", (req, res) => {
  /*let dados = {
    courseName: "Jogos Digitais",
    date: "Outubro de 2020",
    studentName: "Raissa Scheeren",
  };

  res.render(
    "main",
    {
      layout: "index",
      dados: configuraDados(dados),
      dadosExistem: true,
    },
    function (err, html) {
      console.log(html);
      createPDF(html);
      var data = fs.readFileSync("./tmp/certificado.pdf");
      res.contentType("application/pdf");
      res.send(data);
    }
  );*/
  res.download("./tmp/certificado.pdf");
});

const host = "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, function () {
  console.log(`App na porta ${port}`);
});

async function createPDF(data) {
  const browser = await puppeteer.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage();
  await page.setContent(data);

  await page.pdf({ path: "./tmp/certificado.pdf" });
  console.log("PDF gerado na pasta do projeto!");
  await browser.close();
}
