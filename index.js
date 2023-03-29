const express = require("express")
const app = express();

app.set("view engine","ejs");

app.get("/",(req, res) => {
    let name = "Leandro Pacheco"
    let lang = "Javascript"
    res.render("index", {
        name: name,
        lang: lang,
        empresa: "Guia do programado",
        inscritos: 8000
    })
});

app.listen(8080, () =>{
    console.log("APP Rodando")

})