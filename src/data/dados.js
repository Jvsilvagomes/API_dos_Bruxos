const bruxos = [
  {
    id: 1,
    nome: "Harry Potter",
    casa: "Grifinória",
    varinha: "Videira e fibra de coração de dragão, 27cm",
    status: true,
  },
  {
    id: 2,
    nome: "Asuna",
    casa: "Corvinal",
    varinha: "Freixo e pena de fênix, 25cm",
    status: true,
  },
  {
    id: 3,
    nome: "Bradarock",
    casa: "Sonserina",
    varinha: "Ébano e pelo de testrálio, 30cm",
    status: false,
  },
  {
    id: 4,
    nome: "Zayguard",
    casa: "Lufa-Lufa",
    varinha: "Salgueiro e cabelo de unicórnio, 28cm",
    status: false,
  },
  {
    id: 5,
    nome: "Rimuru",
    casa: "Grifinória",
    varinha: "Carvalho vermelho e fibra de coração de dragão, 32cm",
    status: true,
  },
  {
    id: 6,
    nome: "Luffy",
    casa: "Corvinal",
    varinha: "Amieiro e pena de testrálio, 26,5cm",
    status: true,
  },
  {
    id: 7,
    nome: "Frederick",
    casa: "Sonserina",
    varinha: "Pinheiro-negro e espinho de mantícora, 31cm",
    status: false,
  },
  {
    id: 8,
    nome: "Arthur",
    casa: "Lufa-Lufa",
    varinha: "Olmo e crina de kelpie, 27cm",
    status: false, // Assumido como um personagem secundário ou original.
  },
  {
    id: 9,
    nome: "Korozumi Tama",
    casa: "Grifinória",
    varinha: "Teixo e pena de fênix, 29cm",
    status: true, // Personagem de apoio principal em One Piece.
  },
  {
    id: 10,
    nome: "Kasume",
    casa: "Corvinal",
    varinha: "Bétula prateada e cabelo de sereiano, 24cm",
    status: false, // Assumido como um personagem secundário ou original.
  },
  {
    id: 11,
    nome: "Shinra",
    casa: "Grifinória",
    varinha: "Nogueira e pena de fênix, 30cm",
    status: true,
  },
  {
    id: 12,
    nome: "Milly",
    casa: "Lufa-Lufa",
    varinha: "Salgueiro e pelo de unicórnio, 25,5cm",
    status: false,
  },
  {
    id: 13,
    nome: "Amon",
    casa: "Sonserina",
    varinha: "Ébano e fibra de coração de dragão, 32,7cm",
    status: false,
  },
  {
    id: 14,
    nome: "Rin",
    casa: "Corvinal",
    varinha: "Cedro e pena de testrálio, 28cm",
    status: false,
  },
  {
    id: 15,
    nome: "Leona",
    casa: "Grifinória",
    varinha: "Sequóia e chifre de dragão, 26cm",
    status: false,
  },
];

const varinhas = [
  {
    id: 1,
    material: "Azevinho",
    nucleo: "Pena de Fênix",
    comprimento: "28cm",
  },
  {
    id: 2,
    material: "Videira",
    nucleo: "Fibra de Coração de Dragão",
    comprimento: "27cm",
  },
  {
    id: 3,
    material: "Salgueiro",
    nucleo: "Pelo de Unicórnio",
    comprimento: "35cm",
  },
  {
    id: 4,
    material: "Sabugueiro",
    nucleo: "Pelo de Testrálio",
    comprimento: "38cm",
  },
  {
    id: 5,
    material: "Carvalho",
    nucleo: "Pena de Hipogrifo",
    comprimento: "32cm",
  },
];

const mascotes = [
  {
    id: 1,
    nome: "Coruja",
    tipo: "Correio/Companhia",
  },
  {
    id: 2,
    nome: "Gato",
    tipo: "Companhia",
  },
  {
    id: 3,
    nome: "Sapo",
    tipo: "Companhia",
  },
  {
    id: 4,
    nome: "Rato",
    tipo: "Companhia",
  },
  {
    id: 5,
    nome: "Cão",
    tipo: "Companhia",
  },
];

const pocoes = [
  {
    id: 1,
    nome: "Polissuco",
    efeito: "Transforma na aparência de outra pessoa",
  },
  {
    id: 2,
    nome: "Felix Felicis",
    efeito: "Sorte temporária",
  },
  {
    id: 3,
    nome: "Amortentia",
    efeito: "Poção do amor",
  },
  {
    id: 4,
    nome: "Veritaserum",
    efeito: "Força a dizer a verdade",
  },
  {
    id: 5,
    nome: "Wiggenweld",
    efeito: "Cura ferimentos",
  },
];

export default { bruxos, varinhas, pocoes, mascotes };
