import express from "express";
import bruxos from "./src/data/bruxos.js";

const app = express();
const serverPort = 4000;

app.use(express.json());

// Rota principal - Hogwarts
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

//Rota dos bruxos 

app.get("/bruxos", (req, res) => {
    res.json(bruxos)
})

app.get("/bruxos/:id", (req, res) =>{

  let id = req.params.id;

  // Transforma id em numero
  id = parseInt(id)
  const bruxo = bruxos.find(b => b.id === id);

       if (bruxo) {
        res.json({
            success: true,
            message: `Bruxo ${bruxo.nome} encontrado! ⚡`,
            data: bruxo
        });
    } else {
        // Se não encontrou, retorna erro 404
        res.status(404).json({
            success: false,
            error: "Bruxo não encontrado 😕",
            message: `Nenhum bruxo com ID ${id} foi encontrado`,
            codigo: "WIZARD_NOT_FOUND"
        });
    }
});

// Iniciar servidor
app.listen(serverPort, () => {
  console.log(`⚡ Servidor Hogwarts iniciado em: http://localhost:${serverPort}`);
  console.log(`🏰 API dos bruxos está no ar na porta 3000!`);
});
// get by name
app.get("/bruxos/:nome", (req, res) =>{
  let nome = req.params.nome.toLowerCase();

  const bruxosEncontrados = bruxos.filter(b => b.nome.toLowerCase().includes(nome));

  if(bruxosEncontrados.length > 0){
    res.status(200).json(bruxosEncontrados);
  } else {
    res.status(404).json({
    mensagem: "Nome não encontrado"
    })
  }
})