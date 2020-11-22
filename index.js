const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const handlebars = require("express-handlebars");

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

apiFalsa = () => {
  return {
    dados: {
      nomeCurso: "Javascript",
      data: "20 de Outubro de 2020",
      nomeAluno: "Raissa Scheeren",
    },
  };
};

app.post("/certificado", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  //Serve o body da página
  //res.render (‘main’, {layout: ‘index’, key1: val1, key2: val2… keyn: valn});
  res.render("main", {
    layout: "index",
    dados: apiFalsa(),
    dadosExistem: true,
  });
});

app.listen(port, function () {
  console.log(`App na porta ${port}`);
});
