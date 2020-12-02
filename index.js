const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const puppeteer = require("puppeteer");

const port = 3000;

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
    function (err, html) {
      console.log(html);
      createPDF(html);
      res.send("PDF gerado na pasta do projeto!");
    }
  );
});

app.listen(port, function () {
  console.log(`App na porta ${port}`);
});

async function createPDF(data) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(data);

  await page.pdf({ path: "certificado.pdf" });
  console.log("PDF gerado na pasta do projeto!");
  await browser.close();
}
