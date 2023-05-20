import LogoFazenda from '../../assets/logo.png';
import imgAbobora from '../../assets/frutas/Abobora.png';
import imgBatata from '../../assets/frutas/Batata.png';
import imgBrocolis from '../../assets/frutas/Brocolis.png';
import imgPepino from '../../assets/frutas/Pepino.png';
import imgTomate from '../../assets/frutas/Tomate.png';

const cesta = {
    topo: {
        titulo: "Detalhes da Cesta",
    },
    detalhes: {
        nomeCesta: "Cesta de Verduras",
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadozamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        imagemFazenda: LogoFazenda,
        descBotao: "Comprar"
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: imgTomate
            },
            {
                nome: "Abóbora",
                imagem: imgAbobora
            },
            {
                nome: "Batata",
                imagem: imgBatata
            },
            {
                nome: "Brócolis",
                imagem: imgBrocolis
            },
            {
                nome: "Pepino",
                imagem: imgPepino
            },
        ]
    }
}

export default cesta;