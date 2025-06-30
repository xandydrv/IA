const caixaPrincipal = document.querySelector(".caixa-principal")
const caixaPerguntas = document.querySelector(".caixa-perguntas")
const caixaAlternativas = document.querySelector(".caixa-alternativas")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-resultado")

const perguntas = [
  {
    enunciado:
      "Você está dirigindo em uma estrada deserta durante uma tempestade quando seu carro quebra. À distância, você vê uma casa antiga e aparentemente abandonada. A chuva está ficando mais forte. O que você faz?",
    alternativas: [
      {
        texto: "Corro até a casa para me abrigar da tempestade",
        afirmacao: "Você decidiu buscar abrigo na casa misteriosa, ignorando os sinais de perigo. ",
      },
      {
        texto: "Fico no carro e espero a tempestade passar",
        afirmacao: "Você tentou ficar seguro no carro, mas o frio e a tempestade te forçaram a buscar abrigo. ",
      },
    ],
  },
  {
    enunciado:
      "Ao se aproximar da casa, você nota que a porta da frente está entreaberta, balançando com o vento. Há uma luz fraca vinda do interior. Você também percebe uma entrada lateral que parece levar ao porão. Por onde você entra?",
    alternativas: [
      {
        texto: "Entro pela porta da frente, seguindo a luz",
        afirmacao:
          "Você escolheu o caminho mais óbvio, entrando pela porta principal onde uma presença sinistra já havia notado sua chegada. ",
      },
      {
        texto: "Vou pela entrada lateral para o porão",
        afirmacao:
          "Você optou por uma entrada mais discreta, descendo ao porão onde segredos sombrios aguardavam nas sombras. ",
      },
    ],
  },
  {
    enunciado:
      "Dentro da casa, você ouve passos vindos do andar de cima, mas não vê ninguém. De repente, todas as portas da casa se fecham com um estrondo. Você encontra duas opções: uma escada que leva ao segundo andar ou uma porta que parece levar à cozinha. O que você escolhe?",
    alternativas: [
      {
        texto: "Subo as escadas para investigar os passos",
        afirmacao:
          "Sua curiosidade te levou ao encontro direto com a entidade que habitava a casa, confrontando o terror de frente. ",
      },
      {
        texto: "Vou para a cozinha procurar uma saída",
        afirmacao: "Você tentou encontrar uma rota de fuga, mas descobriu que a casa tinha outros planos para você. ",
      },
    ],
  },
  {
    enunciado:
      "Você encontra um diário antigo sobre uma mesa. As páginas falam sobre rituais sombrios e uma família que desapareceu misteriosamente há 50 anos. Suddenly, você ouve uma voz sussurrando seu nome. A voz parece vir de duas direções diferentes. O que você faz?",
    alternativas: [
      {
        texto: "Sigo a voz que vem de cima, ela parece mais clara",
        afirmacao: "Você seguiu a voz sedutora que te levou diretamente para a armadilha preparada há décadas. ",
      },
      {
        texto: "Sigo a voz que vem do porão, talvez seja uma saída",
        afirmacao:
          "Você desceu em direção à fonte do mal, onde os rituais antigos ainda ecoavam pelas paredes úmidas. ",
      },
    ],
  },
  {
    enunciado:
      "Você se depara com uma figura sombria que bloqueia seu caminho. Ela oferece um acordo: 'Você pode sair, mas deve deixar algo seu para trás - sua memória desta noite ou sua capacidade de sentir medo.' A figura estende duas mãos, cada uma brilhando com uma energia diferente. Qual você escolhe?",
    alternativas: [
      {
        texto: "Aceito perder minha memória desta noite",
        afirmacao:
          "Você escolheu esquecer, mas algumas experiências deixam marcas na alma que a mente não consegue apagar completamente. Você saiu da casa, mas uma parte sombria permaneceu com você para sempre.",
      },
      {
        texto: "Aceito perder minha capacidade de sentir medo",
        afirmacao:
          "Você escolheu viver sem medo, mas descobriu que o medo é o que nos mantém humanos. Agora você caminha pelo mundo sem a proteção que o medo oferece, atraindo perigos que outros evitariam instintivamente.",
      },
    ],
  },
]

let atual = 0
let perguntaAtual
let historiaFinal = ""

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado()
    return
  }
  perguntaAtual = perguntas[atual]
  caixaPerguntas.textContent = perguntaAtual.enunciado
  caixaAlternativas.textContent = ""
  mostraAlternativas()
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativas = document.createElement("button")
    botaoAlternativas.textContent = alternativa.texto
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa))
    caixaAlternativas.appendChild(botaoAlternativas)
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacoes = opcaoSelecionada.afirmacao
  historiaFinal += afirmacoes + " "
  atual++
  mostraPergunta()
}

function mostraResultado() {
  caixaPerguntas.textContent = "Seu destino foi selado..."
  textoResultado.textContent =
    historiaFinal +
    " A casa abandonada permanece lá, esperando pelo próximo visitante desavisado. Algumas escolhas ecoam pela eternidade, e a sua acabou de se tornar parte da lenda sombria daquele lugar amaldiçoado."
  caixaAlternativas.textContent = ""
}

mostraPergunta()
