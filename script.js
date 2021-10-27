
const listaImagens = [
    {
        nomeImagem: "cachorro",
        alt:"imagem de um cachorro"
    },
    {
        nomeImagem: "gato",
        alt: "imagem de um gato"
    },
    {
        nomeImagem: "papagaio",
        alt:"imagem de um papagaio"
    },
    {
        nomeImagem: "peixe",
        alt: "imagem de um peixe"
    },
]

const slidesRolagem = document.querySelector("#slides-rolagem");
const divPausa = document.querySelector(".pausa");

let imagemAtual = 0;
let pausado = false;



(function carregaImagens() {
    slidesRolagem.style.width = `${listaImagens.length * 100}%`;
    for(let imagem of listaImagens) {

        const img = document.createElement("img");
        img.src = `imagens/${imagem.nomeImagem}.jpg`;
        img.alt = imagem.alt;
        img.classList = "imagem-unidade";

        slidesRolagem.appendChild(img);
    }
}());


(function slideBotaoPausa() {

    divPausa.innerHTML = "<span>&#10074;&#10074;</span>";
}())







function atualizaMargem() {

    // adiciona uma nova margem para o slide para fazer o efeito de rolagem
    let margem = (imagemAtual * document.querySelector(".imagem-unidade").clientWidth);
    slidesRolagem.style.marginLeft = `-${margem}px`;
}



function proximoSlide() {

    //caso imagemAtual ultrapasse a quantidade de imagens, imagemAtual volta a ser 0
    if(imagemAtual === listaImagens.length - 1) {
        imagemAtual = 0;
    } else {
        imagemAtual++;
    }

    atualizaMargem();
}


function slideAnterior() {

    // caso imagemAtual seja 0 ele volta para a posicao final do slide
    if(imagemAtual === 0) {
        imagemAtual = listaImagens.length - 1;
    } else {
        imagemAtual--;
    }

    atualizaMargem();
}



function slidePausa() {
    pausado = !pausado;

    if(pausado) {
        divPausa.innerHTML = "<span>&#9658;</span>"
    } else {
        divPausa.innerHTML = "<span>&#10074;&#10074;</span>";
    }
}


setInterval(()=>{
    if(!pausado) {  
        proximoSlide();
    }
}, 3000)