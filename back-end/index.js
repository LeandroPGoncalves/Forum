import express from'express';
const app = express();

app.get("/", (req,res) => {
    res.send("oi!");
}
);

app.listen(4000, (erro) => {
    if (erro) {
        console.log("ocorreu um erro!");
    }else {
        console.log("Servidor iniciado com sucesso!");
    }
})
