import express from "express"
import bruxos from "./src/data/bruxos.js";

const serverPort = 3000;
const app = express().use(express.json());
app.get('/', (req, res) => {
  res.send(`
    <div style="
      background: linear-gradient(135deg, #1a237e, #3949ab);
      color: white;
      padding: 50px;
      text-align: center;
      font-family: 'Georgia', serif;
      min-height: 100vh;
      margin: 0;
    ">
      <h1 style="
        font-size: 3rem;
        color: #ffd700;
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        margin-bottom: 20px;
      ">
        ⚡ Bem-vindo à Hogwarts! ⚡
      </h1>
      <p style="font-size: 1.5rem; margin: 20px 0;">
        🏰 Escola de Magia e Bruxaria
      </p>
      <p style="font-size: 1.2rem; opacity: 0.9;">
        "É preciso muito mais que coragem para enfrentar nossos inimigos, 
        mas muito mais ainda para enfrentar nossos amigos."
      </p>
      <div style="margin-top: 30px;">
        <span style="font-size: 1.1rem;">🦁 Grifinória | 🐍 Sonserina | 🦅 Corvinal | 🦡 Lufa-lufa</span>
      </div>
    </div>
  `);
});

// Rota das casas
app.get("/bruxos/casa/:casa", (req, res) => {
  let casa = req.params.casa;
  const bruxosDaCasa = bruxos.filter(b => b.casa.toLowerCase() === casa.toLowerCase());
  if (bruxosDaCasa.length > 0) {
    res.status(200).json(bruxosDaCasa);
  } else {
    res.status(404).json({
      mensagem: "Nenhum bruxo encontrado nessa casa!"
    })
  }
});

app.get("/bruxos/vivos/", (req, res) => {
  const resultado = bruxos.filter(b => b.status)
  if(resultado) {
    res.status(200).json(resultado)
  } else {
    res.status(404) ({
      mensagem: "Nenhum bruxo vivo encontrado!"
    })
  }
})
app.get("/bruxos/mortos/", (req, res) => {
  const resultado = bruxos.filter(b => !b.status)
  if(resultado) {
    res.status(200).json(resultado)
  } else {
    res.status(404) ({
      mensagem: "Nenhum bruxo morto encontrado!"
    })
  }
})

app.get("/bruxos", (req, res) => {
  res.json(bruxos);
});
app.get("/bruxos/id/:id", (req, res) => {
  let id = req.params.id;
  id = parseInt(id);
  const bruxo = bruxos.find(b => b.id === id);
  if (bruxo) {
    res.status(200).json(bruxo);
  } else {
    res.status(404).json({
      "error": "Bruxo não encontrado com esse id",
    });
  }
});
app.get("/bruxos/nome/:nome", (req, res) => {
  let nome = req.params.nome.toLowerCase();
  const bruxosEncontrados = bruxos.filter(b =>
    b.nome.toLowerCase().includes(nome)
  );
  if (bruxosEncontrados.length > 0) {
    res.status(200).json(bruxosEncontrados);
  } else {
    res.status(404).json({
      mensagem: "Bruxo(s) não encontrado(s) com esse nome!"
    });
  }
});
// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log(`🏰 Pronto para receber novos bruxos!`);
});