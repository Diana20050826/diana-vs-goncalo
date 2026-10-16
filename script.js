
const perguntas = [
    {
        categoria: "ROUND 1 · DISCUSSÕES",
        pergunta: "Quem quer ter sempre a última palavra?",
        respostas: [
            "Diana — porque alguém tem de ter razão.",
            "Gonçalo — a confiança é tudo."
        ],
        feedback: [
            "Diana ganhou! O tribunal aceita apenas os argumentos dela. 😂",
            "Gonçalo ganhou! Alguém avise a Diana desta atualização. 😂"
        ]
    },
    {
        categoria: "ROUND 2 · O FAMOSO JÁ VOU",
        pergunta: 'Quem diz "já vou" e aparece só na próxima atualização do Windows?',
        respostas: [
            "Diana — está quase, confia.",
            "Gonçalo — está a carregar..."
        ],
        feedback: [
            "Diana ganhou! A espera faz parte da experiência premium. ⏳",
            "Gonçalo ganhou! O " + '"já vou"' + " dele tem duração ilimitada. 😂"
        ]
    },
    {
        categoria: "ROUND 3 · DETETIVES",
        pergunta: "Quem reparava primeiro se o outro mudasse alguma coisa no telemóvel?",
        respostas: [
            "Diana — investigação profissional.",
            "Gonçalo — modo Sherlock ativado."
        ],
        feedback: [
            "Diana ganhou! Nem o FBI tem este nível de atenção. 🔎",
            "Gonçalo ganhou! Temos um detetive no relacionamento. 🕵️"
        ]
    },
    {
        categoria: "ROUND 4 · FOME",
        pergunta: "Quem fica mais difícil de aturar quando tem fome?",
        respostas: [
            "Diana — alimentem a chefe.",
            "Gonçalo — emergência nacional."
        ],
        feedback: [
            "Diana ganhou! Próxima missão: encontrar comida imediatamente. 🍕",
            "Gonçalo ganhou! Não é mau feitio, é falta de combustível. 🍔"
        ]
    },
    {
        categoria: "ROUND 5 · VIDEOJOGOS",
        pergunta: "Quem ficaria mais irritado depois de perder cinco jogos seguidos?",
        respostas: [
            "Diana — foi lag, obviamente.",
            "Gonçalo — equipa de noobs."
        ],
        feedback: [
            "Diana ganhou! A culpa nunca é da jogadora. 🎮",
            "Gonçalo ganhou! O teclado pede férias. 🎮"
        ]
    },
    {
        categoria: "ROUND 6 · MENSAGENS",
        pergunta: "Quem tem mais probabilidades de responder só com 'ok' e deixar o outro a pensar?",
        respostas: [
            "Diana — duas letras, mil significados.",
            "Gonçalo — resposta minimalista."
        ],
        feedback: [
            "Diana ganhou! O 'ok' foi analisado por especialistas. 📱",
            "Gonçalo ganhou! Economia de palavras, inflação de dúvidas. 😂"
        ]
    },
    {
        categoria: "ROUND 7 · COMIDA",
        pergunta: "Se só houvesse uma batata frita, quem ficava com ela?",
        respostas: [
            "Diana — direitos adquiridos.",
            "Gonçalo — quem chegar primeiro."
        ],
        feedback: [
            "Diana ganhou! A batata está oficialmente reservada. 🍟",
            "Gonçalo ganhou! Sobrevivência do mais rápido. 🍟"
        ]
    },
    {
        categoria: "ROUND 8 · MEMÓRIA SELETIVA",
        pergunta: "Quem se lembra de uma coisa de há seis meses durante uma discussão?",
        respostas: [
            "Diana — arquivo completo.",
            "Gonçalo — memória em alta definição."
        ],
        feedback: [
            "Diana ganhou! O arquivo histórico está impecável. 📚",
            "Gonçalo ganhou! Nada escapa à memória dele. 😂"
        ]
    },
    {
        categoria: "ROUND 9 · PLANOS",
        pergunta: "Quem demora mais tempo a decidir o que fazer quando finalmente têm tempo juntos?",
        respostas: [
            "Diana — tantas opções, tão pouco tempo.",
            "Gonçalo — 'não sei, escolhe tu'."
        ],
        feedback: [
            "Diana ganhou! A reunião para decidir continua aberta. 🗓️",
            "Gonçalo ganhou! Delegação de responsabilidades perfeita. 😂"
        ]
    },
    {
        categoria: "ROUND 10 · CIÚMES",
        pergunta: "Quem faria mais perguntas se o outro dissesse 'depois conto-te'?",
        respostas: [
            "Diana — conta já!",
            "Gonçalo — preciso de contexto."
        ],
        feedback: [
            "Diana ganhou! A curiosidade acabou de subir de nível. 👀",
            "Gonçalo ganhou! A investigação não pode ficar incompleta. 🔎"
        ]
    },
    {
        categoria: "ROUND 11 · CARINHO",
        pergunta: "Quem acaba por ficar mais mimalho quando quer atenção?",
        respostas: [
            "Diana — atenção imediata, por favor.",
            "Gonçalo — afinal também tem o seu lado fofo."
        ],
        feedback: [
            "Diana ganhou! O modo mimo está oficialmente ativado. 💗",
            "Gonçalo ganhou! O durão foi apanhado a pedir carinho. 🧡"
        ]
    },
    {
        categoria: "ROUND 12 · FOTOGRAFIAS",
        pergunta: "Quem tira mais fotografias até conseguir uma de que gosta?",
        respostas: [
            "Diana — esta é quase perfeita.",
            "Gonçalo — mais uma e fica."
        ],
        feedback: [
            "Diana ganhou! A galeria precisa de mais espaço. 📸",
            "Gonçalo ganhou! A sessão fotográfica ainda não terminou. 😂"
        ]
    },
    {
        categoria: "ROUND 13 · DESAFIO SURPRESA",
        pergunta: "Se fossem personagens de um jogo, quem sobreviveria mais tempo?",
        respostas: [
            "Diana — protagonista, obviamente.",
            "Gonçalo — personagem principal, claro."
        ],
        feedback: [
            "Diana ganhou! A protagonista acabou de desbloquear um troféu. 🏆",
            "Gonçalo ganhou! Diana, foste eliminada desta ronda. 🎮"
        ]
    },
    {
        categoria: "ROUND 14 · CONFISSÕES",
        pergunta: "Quem tem mais probabilidades de dizer 'não quero nada' e depois pedir para provar a comida do outro?",
        respostas: [
            "Diana — só quero provar.",
            "Gonçalo — isso conta como partilhar."
        ],
        feedback: [
            "Diana ganhou! A comida dele é sempre mais interessante. 🍕",
            "Gonçalo ganhou! Roubar comida chama-se degustação. 😂"
        ]
    },
    {
        categoria: "ROUND 15 · GRANDE FINAL",
        pergunta: "Quem gosta mais do outro, mesmo quando está a ser insuportável?",
        respostas: [
            "Diana — amor com reclamações incluídas.",
            "Gonçalo — amor com atualizações pendentes."
        ],
        feedback: [
            "Diana ganhou! Pode reclamar, mas o carinho continua. 💗",
            "Gonçalo ganhou! Pode fazer-se de difícil, mas é um querido. 🧡"
        ]
    }
];


let perguntaAtual = 0;
let jogadorAtual = "diana";

const respostasDiana = [];
const respostasGoncalo = [];

let respostaEscolhida = false;

const contador = document.getElementById("contador");
const barraProgresso = document.getElementById("progresso-barra");
const categoria = document.getElementById("categoria");
const perguntaTexto = document.getElementById("pergunta");
const feedback = document.getElementById("feedback");

const zonaPergunta = document.getElementById("zona-pergunta");
const zonaResultado = document.getElementById("zona-resultado");

const botaoProxima = document.getElementById("proxima");
const botaoReiniciar = document.getElementById("reiniciar");

const botoesResposta = document.querySelectorAll(".opcao");
const arena = document.getElementById("arena");

// Criar o ecrã de passagem entre jogadores
const zonaPassagem = document.createElement("div");
zonaPassagem.id = "zona-passagem";
zonaPassagem.hidden = true;
zonaPassagem.className = "cartao";
zonaPassagem.style.cssText =
    "text-align:center;padding:40px 24px;margin:24px 0;";

arena.insertBefore(zonaPassagem, zonaResultado);

// Criar a zona onde serão mostradas as respostas diferentes
const comparacaoFinal = document.createElement("div");
comparacaoFinal.id = "comparacao-final";
comparacaoFinal.style.cssText =
    "margin-top:28px;display:grid;gap:14px;";

zonaResultado.appendChild(comparacaoFinal);

function mostrarPergunta() {
    const pergunta = perguntas[perguntaAtual];

    contador.textContent =
        (jogadorAtual === "diana" ? "💗 DIANA · " : "🧡 GONÇALO · ") +
        String(perguntaAtual + 1).padStart(2, "0") +
        " / " +
        String(perguntas.length).padStart(2, "0");

    const progressoTotal =
        ((jogadorAtual === "diana" ? 0 : perguntas.length) +
            perguntaAtual + 1) /
        (perguntas.length * 2) * 100;

    barraProgresso.style.width = progressoTotal + "%";

    categoria.textContent = pergunta.categoria;
    perguntaTexto.textContent = pergunta.pergunta;

    botoesResposta[0].innerHTML =
        '<span class="opcao-emoji">💗</span><span>' +
        pergunta.respostas[0] +
        '</span><span class="seta">→</span>';

    botoesResposta[1].innerHTML =
        '<span class="opcao-emoji">🧡</span><span>' +
        pergunta.respostas[1] +
        '</span><span class="seta">→</span>';

    feedback.textContent = "";
    respostaEscolhida = false;

    botoesResposta.forEach((botao) => {
        botao.disabled = false;
    });

    botaoProxima.hidden = true;
    botaoProxima.textContent =
        perguntaAtual === perguntas.length - 1
            ? "TERMINAR RONDA →"
            : "PRÓXIMA PERGUNTA →";
}

function escolherResposta(escolha) {
    if (respostaEscolhida) return;

    respostaEscolhida = true;

    const indiceEscolhido = escolha === "diana" ? 0 : 1;

    if (jogadorAtual === "diana") {
        respostasDiana[perguntaAtual] = indiceEscolhido;
    } else {
        respostasGoncalo[perguntaAtual] = indiceEscolhido;
    }

    feedback.textContent =
        perguntas[perguntaAtual].feedback[indiceEscolhido];

    botoesResposta.forEach((botao) => {
        botao.disabled = true;
    });

    botaoProxima.hidden = false;
}

function proximaPergunta() {
    if (!respostaEscolhida) return;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta();
        return;
    }

    if (jogadorAtual === "diana") {
        mostrarPassagem();
    } else {
        mostrarResultado();
    }
}

function mostrarPassagem() {
    zonaPergunta.hidden = true;
    zonaResultado.hidden = true;
    zonaPassagem.hidden = false;

    feedback.textContent = "";

    zonaPassagem.replaceChildren();

    const emoji = document.createElement("div");
    emoji.textContent = "🧡";
    emoji.style.fontSize = "3rem";

    const titulo = document.createElement("h2");
    titulo.textContent = "Agora é a vez do Gonçalo!";

    const texto = document.createElement("p");
    texto.textContent =
        "Diana, passa o telemóvel ao Gonçalo. Não vale espreitar as respostas um do outro!";

    const aviso = document.createElement("p");
    aviso.textContent =
        "🔒 As respostas da Diana ficam escondidas até ao final.";

    const botao = document.createElement("button");
    botao.className = "botao-hero";
    botao.textContent = "GONÇALO, ESTÁS PRONTO? 🎮";

    botao.addEventListener("click", () => {
        jogadorAtual = "goncalo";
        perguntaAtual = 0;

        zonaPassagem.hidden = true;
        zonaPergunta.hidden = false;

        mostrarPergunta();

        arena.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    zonaPassagem.append(emoji, titulo, texto, aviso, botao);
    zonaPassagem.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function mostrarResultado() {
    zonaPergunta.hidden = true;
    zonaPassagem.hidden = true;
    zonaResultado.hidden = false;

    feedback.textContent = "";
    comparacaoFinal.replaceChildren();

    let concordaram = 0;
    let escolhidosDiana = 0;
    let escolhidosGoncalo = 0;
    const discordancias = [];

    perguntas.forEach((pergunta, indice) => {
        const respostaDiana = respostasDiana[indice];
        const respostaGoncalo = respostasGoncalo[indice];

        if (respostaDiana === respostaGoncalo) {
            concordaram++;
        } else {
            discordancias.push({
                pergunta: pergunta.pergunta,
                diana: pergunta.respostas[respostaDiana],
                goncalo: pergunta.respostas[respostaGoncalo]
            });
        }

        if (respostaDiana === 0) escolhidosDiana++;
        if (respostaGoncalo === 0) escolhidosDiana++;

        if (respostaDiana === 1) escolhidosGoncalo++;
        if (respostaGoncalo === 1) escolhidosGoncalo++;
    });

    document.getElementById("resultado-diana").textContent =
        escolhidosDiana;

    document.getElementById("resultado-goncalo").textContent =
        escolhidosGoncalo;

    const vencedor = document.getElementById("vencedor");
    const mensagem = document.getElementById("mensagem-final");

   
const compatibilidade = Math.round(
    (concordaram / perguntas.length) * 100
);

vencedor.textContent = "💗 " + compatibilidade + "% de compatibilidade!";

const tituloCompatibilidade = document.createElement("p");
tituloCompatibilidade.textContent =
    "Diana 💗 + Gonçalo 🧡";

tituloCompatibilidade.style.cssText = `
    font-size: 1.2rem;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 15px 0;
`;

const numeroCompatibilidade = document.createElement("div");
numeroCompatibilidade.textContent = compatibilidade + "%";
numeroCompatibilidade.style.cssText = `
    font-size: clamp(3rem, 12vw, 6rem);
    font-weight: 900;
    background: linear-gradient(90deg, #ff70b8, #ff9b50);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 10px 0;
`;

const barraCompatibilidade = document.createElement("div");
barraCompatibilidade.style.cssText = `
    max-width: 400px;
    height: 12px;
    background: #302632;
    border-radius: 20px;
    overflow: hidden;
    margin: 0 auto 25px;
`;

const preenchimentoCompatibilidade = document.createElement("div");
preenchimentoCompatibilidade.style.cssText = `
    width: ${compatibilidade}%;
    height: 100%;
    background: linear-gradient(90deg, #ff70b8, #ff9b50);
    border-radius: 20px;
    transition: width 1s ease;
`;

barraCompatibilidade.appendChild(preenchimentoCompatibilidade);

comparacaoFinal.append(
    tituloCompatibilidade,
    numeroCompatibilidade,
    barraCompatibilidade
);

    if (concordaram === perguntas.length) {
        mensagem.textContent =
            "Telepatia de casal desbloqueada! Acertaram em tudo. 💗🧡";
    } else if (concordaram >= 10) {
        mensagem.textContent =
            "Conhecem-se muito bem! Mas ainda há umas respostas suspeitas... 😂";
    } else if (concordaram >= 5) {
        mensagem.textContent =
            "Há amor, mas as opiniões nem sempre vêm em conjunto! 👀";
    } else {
        mensagem.textContent =
            "Temos aqui um casal que precisa de uma reunião de emergência! 😂";
    }

    const tituloDiscordancias = document.createElement("h3");
    tituloDiscordancias.textContent =
        "🔥 As vossas discordâncias (" + discordancias.length + ")";

    comparacaoFinal.appendChild(tituloDiscordancias);

    if (discordancias.length === 0) {
        const texto = document.createElement("p");
        texto.textContent =
            "Concordaram em tudo! É caso para desconfiar... 😂";
        comparacaoFinal.appendChild(texto);
    }

    discordancias.forEach((item, indice) => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";
        cartao.style.cssText = "padding:18px;";

        const numero = document.createElement("p");
        numero.textContent = "DISCORDÂNCIA " + (indice + 1);
        numero.style.fontWeight = "bold";

        const pergunta = document.createElement("p");
        pergunta.textContent = item.pergunta;

        const respostaD = document.createElement("p");
        respostaD.textContent = "💗 Diana escolheu: " + item.diana;

        const respostaG = document.createElement("p");
        respostaG.textContent = "🧡 Gonçalo escolheu: " + item.goncalo;

        cartao.append(numero, pergunta, respostaD, respostaG);
        comparacaoFinal.appendChild(cartao);
    });

    const nota = document.createElement("p");
    nota.textContent =
        "Nota: os números nos cartões acima mostram quantas vezes cada pessoa foi escolhida nas respostas dos dois.";

    comparacaoFinal.appendChild(nota);

    barraProgresso.style.width = "100%";

    zonaResultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function reiniciarJogo() {
    perguntaAtual = 0;
    jogadorAtual = "diana";
    respostaEscolhida = false;

    respostasDiana.length = 0;
    respostasGoncalo.length = 0;

    zonaPergunta.hidden = false;
    zonaResultado.hidden = true;
    zonaPassagem.hidden = true;

    mostrarPergunta();

    arena.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

botoesResposta.forEach((botao) => {
    botao.addEventListener("click", () => {
        escolherResposta(botao.dataset.jogador);
    });
});

botaoProxima.addEventListener("click", proximaPergunta);
botaoReiniciar.addEventListener("click", reiniciarJogo);

mostrarPergunta();

/* =================================
   VERDADE OU DESAFIO — JAVASCRIPT
================================= */



const vdCartas = {
    verdade: [
        "Qual foi o momento em que percebeste que eu era especial para ti?",
        "Qual é o teu maior medo numa relação?",
        "Há alguma coisa que gostasses que fizéssemos mais vezes juntos?",
        "Qual foi a altura em que mais sentiste a minha falta?",
        "O que achas que mudou mais em ti desde que estamos juntos?",
        "Qual é uma coisa que tens dificuldade em dizer-me pessoalmente?",
        "O que é que eu faço que te faz sentir verdadeiramente amado?",
        "Qual foi a tua primeira impressão de mim e o que mudou entretanto?",
        "Qual é uma memória nossa que nunca gostarias de esquecer?",
        "O que achas que é o nosso maior ponto forte como casal?",
        "Qual é uma coisa que gostavas que eu compreendesse melhor sobre ti?",
        "Quando estás chateado comigo, o que gostavas que eu fizesse?",
        "Qual é uma insegurança tua que gostavas de conseguir ultrapassar?",
        "Qual foi a surpresa minha que mais te marcou?",
        "O que gostarias que ainda vivêssemos juntos nos próximos anos?",
        "Qual é uma coisa pequena que faço e que significa muito para ti?",
        "Em que aspeto achas que somos mais diferentes um do outro?",
        "Qual foi uma situação em que sentiste orgulho de nós como casal?",
        "O que achas que nunca devemos deixar de fazer na nossa relação?",
        "Se pudesses reviver um único dia nosso, qual escolherias e porquê?",
        "Qual é uma coisa que gostavas de experimentar comigo, mas ainda não propuseste?",
        "O que achas que eu ainda não percebi completamente sobre a tua personalidade?",
        "Qual foi a conversa nossa que mais te ficou na memória?",
        "O que te faz sentir mais seguro e confortável comigo?",
        "Se tivesses de descrever a nossa relação em três palavras, quais seriam?"
    ],

    desafio: [
        "Olha o outro nos olhos durante 20 segundos sem te rires.",
        "Conta uma história embaraçosa tua que o outro ainda não conheça.",
        "Faz uma imitação do outro até ele adivinhar o que estás a imitar.",
        "Deixa o outro escolher uma música e faz uma atuação de 20 segundos.",
        "Diz cinco coisas de que gostas no outro em apenas 15 segundos.",
        "Faz o teu melhor discurso a convencer o outro de que mereces ganhar este jogo.",
        "Deixa o outro escolher uma palavra e inventa uma declaração dramática com ela.",
        "Imita a tua própria reação quando ficas com ciúmes, sem dizer o motivo.",
        "Tenta fazer o outro rir em 30 segundos, sem lhe tocares.",
        "Conta a vossa história como se fosse o resumo de uma novela dramática.",
        "Faz uma pose ridícula e mantém-na durante 15 segundos.",
        "Diz uma frase romântica com a voz mais séria e dramática possível.",
        "Deixa o outro escolher uma expressão e usa-a três vezes numa história inventada.",
        "Faz uma competição de olhar sério: quem se rir primeiro perde.",
        "Inventa uma alcunha nova para o outro e explica a escolha.",
        "Faz uma dança improvisada durante 15 segundos, sem escolher a música.",
        "Descreve o outro como se estivesses a apresentá-lo num programa de televisão.",
        "Tenta dizer o alfabeto ao contrário até onde conseguires, sem ajuda.",
        "Deixa o outro fazer-te três perguntas rápidas e responde sem demorar mais de cinco segundos a cada uma.",
        "Faz uma declaração de amor como se estivesses a receber um Óscar.",
        "Escolhe um objeto que esteja perto e inventa um anúncio publicitário para o vender ao outro.",
        "Conta uma piada. Se o outro não se rir, tens de inventar outra.",
        "Faz uma previsão engraçada sobre como serão vocês daqui a dez anos.",
        "Descreve o teu dia como se fosse um trailer de um filme de ação.",
        "Deixa o outro escolher um tema e canta uma música inventada sobre esse tema."
    ]
};

/* =================================
   BOTÕES — VERDADE OU DESAFIO
================================= */

function iniciarVerdadeDesafio() {
    const vdNome = document.getElementById("vd-jogador");
    const vdResultado = document.getElementById("vd-resultado");
    const vdTipo = document.getElementById("vd-tipo");
    const vdTexto = document.getElementById("vd-texto");

    const btnVerdade = document.getElementById("vd-verdade");
    const btnDesafio = document.getElementById("vd-desafio");
    const btnOutro = document.getElementById("vd-outro");
    const btnPassar = document.getElementById("vd-passar");

    // Confirmar que os elementos existem no HTML
    if (
        !vdNome || !vdResultado || !vdTipo || !vdTexto ||
        !btnVerdade || !btnDesafio || !btnOutro || !btnPassar
    ) {
        console.error(
            "Verdade ou Desafio: não foram encontrados todos os elementos HTML."
        );
        return;
    }

    let jogadorAtual = "Diana";

    const cartasUsadas = {
        verdade: [],
        desafio: []
    };

    function escolherJogador(nome) {
        jogadorAtual = nome;
        vdNome.textContent = nome;
        vdResultado.hidden = true;

        document.querySelectorAll(".vd-jogador").forEach(botao => {
            botao.classList.toggle(
                "ativo",
                botao.dataset.nome === nome
            );
        });
    }

    document.querySelectorAll(".vd-jogador").forEach(botao => {
        botao.addEventListener("click", () => {
            escolherJogador(botao.dataset.nome);
        });
    });

    function sortearCarta(tipo) {
        const cartas = vdCartas[tipo];

        if (!cartas || cartas.length === 0) {
            console.error("Não existem cartas para esta categoria.");
            return;
        }

        // Voltar a disponibilizar as cartas quando todas forem usadas
        if (cartasUsadas[tipo].length >= cartas.length) {
            cartasUsadas[tipo] = [];
        }

        const disponiveis = cartas
            .map((texto, indice) => ({ texto, indice }))
            .filter(carta => !cartasUsadas[tipo].includes(carta.indice));

        const carta = disponiveis[
            Math.floor(Math.random() * disponiveis.length)
        ];

        cartasUsadas[tipo].push(carta.indice);

        vdTipo.textContent = tipo === "verdade"
            ? "💭 HORA DA VERDADE"
            : "🎲 É UM DESAFIO!";

       
vdTexto.textContent = carta.texto;

// Uma hipótese de 1 em 5 de sair uma carta especial
const especial = Math.random() < 0.20;

vdResultado.classList.remove("vd-especial", "vd-revelar");

// Remover o selo especial anterior, se existir
const seloAntigo = vdResultado.querySelector(".vd-selo-especial");
if (seloAntigo) {
    seloAntigo.remove();
}

if (especial) {
    vdResultado.classList.add("vd-especial");

    const selo = document.createElement("span");
    selo.className = "vd-selo-especial";
    selo.textContent = "✨ CARTA SURPRESA ✨";

    vdTexto.before(selo);

    vdTexto.textContent =
        "🎁 DESAFIO EXTRA! " + carta.texto;
}

vdResultado.hidden = false;

// Reiniciar a animação para voltar a funcionar em cada carta
void vdResultado.offsetWidth;
vdResultado.classList.add("vd-revelar");

    }

    btnVerdade.addEventListener("click", () => {
        sortearCarta("verdade");
    });

    btnDesafio.addEventListener("click", () => {
        sortearCarta("desafio");
    });

    btnOutro.addEventListener("click", () => {
        const tipo = vdTipo.textContent.includes("VERDADE")
            ? "verdade"
            : "desafio";

        sortearCarta(tipo);
    });

    btnPassar.addEventListener("click", () => {
        escolherJogador(
            jogadorAtual === "Diana" ? "Gonçalo" : "Diana"
        );
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        iniciarVerdadeDesafio
    );
} else {
    iniciarVerdadeDesafio();
}

/* =================================
   CORAÇÕES, BRILHOS E CONFETTIS
================================= */

function iniciarEfeitosDVG() {
    const fundo = document.getElementById("efeitos-fundo");

    if (!fundo) {
        console.warn("Não foi encontrada a camada de efeitos no HTML.");
        return;
    }

    // Respeitar a preferência por menos movimento
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const decoracoes = ["💗", "♡", "💕", "✨", "✦", "💖"];

    function criarParticula() {
        const particula = document.createElement("span");
        const brilho = Math.random() < 0.3;

        particula.className = brilho
            ? "dvg-particula dvg-brilho"
            : "dvg-particula dvg-coracao";

        particula.textContent = decoracoes[
            Math.floor(Math.random() * decoracoes.length)
        ];

        particula.style.setProperty(
            "--posicao-x",
            Math.random() * 100 + "%"
        );

        particula.style.setProperty(
            "--duracao",
            (8 + Math.random() * 6) + "s"
        );

        particula.style.fontSize =
            (12 + Math.random() * 16) + "px";

        fundo.appendChild(particula);

        particula.addEventListener("animationend", () => {
            particula.remove();
        }, { once: true });

        // Segurança extra para não acumular elementos
        setTimeout(() => particula.remove(), 16000);
    }

    // Criar algumas partículas iniciais
    for (let i = 0; i < 8; i++) {
        setTimeout(criarParticula, i * 350);
    }

    // Continuar a criar partículas suavemente
    setInterval(criarParticula, 1200);

    /* CONFETTIS QUANDO HÁ UM VENCEDOR */

    function celebrarVitoria() {
        const simbolos = ["♥", "✦", "●", "◆", "✧"];
        const cores = [
            "#e88ba8",
            "#f6b99c",
            "#f4d58d",
            "#c8a2c8",
            "#a94768"
        ];

        for (let i = 0; i < 90; i++) {
            const confetti = document.createElement("span");

            confetti.className = "dvg-confetti";
            confetti.textContent =
                simbolos[Math.floor(Math.random() * simbolos.length)];

            confetti.style.color =
                cores[Math.floor(Math.random() * cores.length)];

            confetti.style.setProperty(
                "--posicao-x",
                Math.random() * 100 + "vw"
            );

            confetti.style.setProperty(
                "--duracao",
                (2.5 + Math.random() * 2.5) + "s"
            );

            confetti.style.setProperty(
                "--desvio-x",
                (Math.random() * 240 - 120) + "px"
            );

            confetti.style.setProperty(
                "--rotacao",
                (Math.random() * 1000 - 500) + "deg"
            );

            confetti.style.fontSize =
                (10 + Math.random() * 15) + "px";

            document.body.appendChild(confetti);

            confetti.addEventListener("animationend", () => {
                confetti.remove();
            }, { once: true });

            setTimeout(() => confetti.remove(), 6000);
        }
    }

    // Detetar quando o jogo principal apresenta um vencedor
    const elementoVencedor = document.getElementById("vencedor");

    if (elementoVencedor) {
        let ultimoVencedor = elementoVencedor.textContent.trim();

        const observador = new MutationObserver(() => {
            const texto = elementoVencedor.textContent.trim();

            // Um resultado vazio permite celebrar novamente no próximo jogo
            if (!texto) {
                ultimoVencedor = "";
                return;
            }

            if (
                texto !== ultimoVencedor &&
                !/aguarda|à espera|por determinar/i.test(texto)
            ) {
                ultimoVencedor = texto;
                celebrarVitoria();
            }
        });

        observador.observe(elementoVencedor, {
            childList: true,
            characterData: true,
            subtree: true
        });

        // Também permitir uma nova celebração após reiniciar
        ["reiniciar", "jogar-novamente"].forEach(id => {
            const botao = document.getElementById(id);

            if (botao) {
                botao.addEventListener("click", () => {
                    ultimoVencedor = "";
                });
            }
        });
    }
}

// Executar apenas quando o HTML estiver preparado
if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        iniciarEfeitosDVG
    );
} else {
    iniciarEfeitosDVG();
}

/* =================================
   ESCAPE ROOM — JAVASCRIPT
================================= */

(() => {
    const formulario = document.getElementById("escape-formulario");

    if (!formulario) return;

    const niveis = [
        {
            titulo: "A Porta Misteriosa",
            enigma: "Estou sempre presente nas vossas fotografias, mas não sou uma pessoa. O que sou?",
            respostas: ["uma memória", "memoria", "uma fotografia", "fotografia", "uma foto", "foto"],
            pista: "É algo que podem guardar para recordar um momento.",
            pontos: 100
        },
        {
            titulo: "O Código Escondido",
            enigma: "Tenho quatro letras, começo por A e é o nome de uma coisa que sentimos um pelo outro. O que sou?",
            respostas: ["amor"],
            pista: "É uma palavra que aparece muitas vezes nas histórias de casais.",
            pontos: 150
        },
        {
            titulo: "O Cofre Final",
            enigma: "Quanto mais boas memórias partilham, mais especial fica. Não se pode comprar numa loja. O que é?",
            respostas: ["a vossa historia", "vossa historia", "a vossa relação", "vossa relacao", "a vossa relacao", "a relação", "a relacao", "a vossa vida juntos", "a vossa vida"],
            pista: "É aquilo que vocês estão a construir juntos.",
            pontos: 200
        }
    ];

    let nivelAtual = 0;
    let pontos = 0;
    let pistaUsada = false;

    const titulo = document.getElementById("escape-titulo");
    const enigma = document.getElementById("escape-enigma");
    const campoResposta = document.getElementById("escape-resposta");
    const feedback = document.getElementById("escape-feedback");
    const indicadorNivel = document.getElementById("escape-nivel");
    const indicadorPontos = document.getElementById("escape-pontos");
    const barra = document.getElementById("escape-barra-preenchida");
    const caixaPista = document.getElementById("escape-pista");
    const textoPista = document.getElementById("escape-texto-pista");
    const botaoPista = document.getElementById("escape-mostrar-pista");
    const caixaFinal = document.getElementById("escape-final");
    const botaoVerificar = document.getElementById("escape-verificar");

    function normalizar(texto) {
        return texto
            .toLocaleLowerCase("pt-PT")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[.,!?;:]/g, "")
            .trim();
    }

    function mostrarNivel() {
        const atual = niveis[nivelAtual];

        titulo.textContent = atual.titulo;
        enigma.textContent = atual.enigma;
        indicadorNivel.textContent = `NÍVEL ${nivelAtual + 1} DE ${niveis.length}`;
        indicadorPontos.textContent = `⭐ ${pontos} pontos`;
        barra.style.width = `${(nivelAtual / niveis.length) * 100}%`;

        campoResposta.value = "";
        feedback.textContent = "";
        caixaPista.hidden = true;
        textoPista.textContent = "";
        botaoPista.disabled = false;
        botaoPista.hidden = false;
        formulario.hidden = false;
        caixaFinal.hidden = true;
        pistaUsada = false;
        campoResposta.focus();
    }

    botaoPista.addEventListener("click", () => {
        textoPista.textContent = niveis[nivelAtual].pista;
        caixaPista.hidden = false;
        pistaUsada = true;
        botaoPista.disabled = true;
    });

    formulario.addEventListener("submit", evento => {
        evento.preventDefault();

        const resposta = normalizar(campoResposta.value);
        const respostasAceites = niveis[nivelAtual].respostas.map(normalizar);

        if (!resposta) {
            feedback.textContent = "Escrevam uma resposta primeiro! 💗";
            return;
        }

        if (respostasAceites.includes(resposta)) {
            if (!pistaUsada) {
                pontos += niveis[nivelAtual].pontos;
            } else {
                pontos += Math.floor(niveis[nivelAtual].pontos / 2);
            }

            indicadorPontos.textContent = `⭐ ${pontos} pontos`;
            feedback.textContent = "🔓 Resposta certa! Conseguiram desbloquear o nível!";

            nivelAtual++;

            if (nivelAtual >= niveis.length) {
                barra.style.width = "100%";
                indicadorNivel.textContent = "MISSÃO CONCLUÍDA!";
                formulario.hidden = true;
                botaoPista.hidden = true;
                caixaPista.hidden = true;
                caixaFinal.hidden = false;
                feedback.textContent = `🏆 Conseguiram ${pontos} pontos!`;
                return;
            }

            botaoVerificar.disabled = true;

            setTimeout(() => {
                botaoVerificar.disabled = false;
                mostrarNivel();
            }, 1400);
        } else {
            feedback.textContent = "Ainda não! 🤔 Pensem juntos ou peçam uma pista.";
            campoResposta.select();
        }
    });

    document.getElementById("escape-recomecar").addEventListener("click", () => {
        nivelAtual = 0;
        pontos = 0;
        mostrarNivel();
    });

    mostrarNivel();
})();

/* ===================================
   ANIMAÇÕES DE ENTRADA AO FAZER SCROLL
=================================== */

function iniciarAnimacoesScroll() {
    const elementos = document.querySelectorAll(
        "section, .jogador-card, .player-card, " +
        ".cartao-jogador, .vd-cartao, " +
        ".escape-cartao, .foto-memoria"
    );

    const unicos = [...new Set(elementos)];

    // Não esconder conteúdo se o dispositivo
    // preferir animações reduzidas.
    if (window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    const observador = new IntersectionObserver(
        (entradas, observer) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add(
                        "dvg-visivel"
                    );

                    observer.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    unicos.forEach((elemento) => {
        // Não alterar elementos escondidos de propósito.
        if (
            elemento.hidden ||
            elemento.closest("[hidden]")
        ) {
            return;
        }

        elemento.classList.add("dvg-revelar");
        observador.observe(elemento);
    });
}

if (document.readyState === "loading") {
    document.addEventListener(
        "DOMContentLoaded",
        iniciarAnimacoesScroll
    );
} else {
    iniciarAnimacoesScroll();
}

/* ===================================
   SEGREDO ROMÂNTICO — JAVASCRIPT
=================================== */

(() => {
    const botaoSegredo = document.getElementById("segredo-botao");
    const modalSegredo = document.getElementById("segredo-modal");
    const botaoFechar = document.getElementById("segredo-fechar");
    const botaoRevelar = document.getElementById("segredo-revelar");
    const mensagem = document.getElementById("segredo-mensagem");

    // Se os elementos não existirem, não executar.
    if (
        !botaoSegredo ||
        !modalSegredo ||
        !botaoFechar ||
        !botaoRevelar ||
        !mensagem
    ) {
        return;
    }

    const mensagensSecretas = [
        "Os melhores momentos nem sempre são os mais planeados. Às vezes, são as pequenas coisas que acabam por significar mais. 💗",

        "Se a nossa história fosse um livro, cada gargalhada, cada fotografia e cada aventura seria mais uma página para guardar. 📖",

        "Um segredo para guardar: nunca subestimem o poder de um abraço, de uma conversa sincera ou de um momento só vosso. 💌",

        "Missão especial: criem uma memória nova esta semana. Pode ser um passeio, um jogo ou simplesmente fazer algo diferente juntos. ✨",

        "Parabéns! Encontraram um dos segredos do site. Mas a melhor parte da história continua a ser tudo aquilo que ainda vão descobrir. 💕"
    ];

    let ultimaMensagem = -1;

    function abrirSegredo() {
        modalSegredo.hidden = false;
        document.body.style.overflow = "hidden";
        botaoFechar.focus();
    }

    function fecharSegredo() {
        modalSegredo.hidden = true;
        document.body.style.overflow = "";
        botaoSegredo.focus();
    }

    function revelarMensagem() {
        let indice;

        do {
            indice = Math.floor(
                Math.random() * mensagensSecretas.length
            );
        } while (
            mensagensSecretas.length > 1 &&
            indice === ultimaMensagem
        );

        ultimaMensagem = indice;

        mensagem.animate(
            [
                { opacity: 0, transform: "translateY(8px)" },
                { opacity: 1, transform: "translateY(0)" }
            ],
            {
                duration: 450,
                easing: "ease-out"
            }
        );

        mensagem.textContent = mensagensSecretas[indice];
    }

    botaoSegredo.addEventListener("click", abrirSegredo);
    botaoFechar.addEventListener("click", fecharSegredo);
    botaoRevelar.addEventListener("click", revelarMensagem);

    // Fechar ao clicar no fundo escuro.
    modalSegredo.addEventListener("click", (evento) => {
        if (evento.target === modalSegredo) {
            fecharSegredo();
        }
    });

    // Fechar com a tecla Escape.
    document.addEventListener("keydown", (evento) => {
        if (
            evento.key === "Escape" &&
            !modalSegredo.hidden
        ) {
            fecharSegredo();
        }
    });
})();

/* ==========================================
   DUELO DE MINIJOGOS — DIANA VS. GONÇALO
   Sistema independente dos restantes jogos
========================================== */

(() => {
    const obter = (id) => document.getElementById(id);

    const inicio = obter("duelo-inicio");
    const area = obter("duelo-area");
    const final = obter("duelo-final");

    // Se a secção ainda não existir, não executar.
    if (!inicio || !area || !final) return;

    const nomes = ["Diana", "Gonçalo"];
    const emojis = ["💗", "💕"];
    const simbolos = ["🌸", "⭐", "💎", "🦋", "🍓", "🌙"];

    const jogos = [
        {
            titulo: "Reflexos relâmpago ⚡",
            instrucoes:
                "Espera que o botão fique verde. Clica nele o mais depressa possível! Não cliques antes do sinal.",
            pontos: 100
        },
        {
            titulo: "Desafio da memória 🧠",
            instrucoes:
                "Memoriza a sequência de quatro símbolos. Quando desaparecer, repete-a pela ordem correta.",
            pontos: 100
        },
        {
            titulo: "Mira certeira 🎯",
            instrucoes:
                "Tens 10 segundos para acertar em tantos alvos ⭐ quanto conseguires. Cada acerto vale 10 pontos.",
            pontos: 10
        }
    ];
let jogador = 0;
let jogo = 0;
let pontos = [0, 0];
let resultados = [[], []];
let temporizadores = [];
let bloqueado = false;
let sequencia = [];
let proximoSimbolo = 0;
let acertos = 0;
let fimReflexos = false;
let instanteInicio = 0;
let iniciou = false;

    const mensagem = obter("duelo-mensagem");
    const acao = obter("duelo-acao");
    const opcoes = obter("duelo-opcoes");
    const alvos = obter("duelo-alvos");
    const feedback = obter("duelo-feedback");
    const continuar = obter("duelo-continuar");

    function limparTemporizadores() {
        temporizadores.forEach((id) => {
            clearTimeout(id);
            clearInterval(id);
        });

        temporizadores = [];
    }

    function esperar(funcao, tempo) {
        const id = setTimeout(funcao, tempo);
        temporizadores.push(id);
        return id;
    }

    function atualizarPlacar() {
        obter("duelo-pontos-diana").textContent =
            `${pontos[0]} pontos`;

        obter("duelo-pontos-goncalo").textContent =
            `${pontos[1]} pontos`;

        const turnosConcluidos = resultados[0].length +
            resultados[1].length;

        obter("duelo-numero").textContent =
            `${turnosConcluidos} / 6 turnos`;

        obter("duelo-barra-preenchida").style.width =
            `${(turnosConcluidos / 6) * 100}%`;
    }

    function prepararTurno() {
        limparTemporizadores();

        bloqueado = false;
        fimReflexos = false;
        acao.hidden = true;
        opcoes.hidden = true;
        alvos.hidden = true;
        continuar.hidden = true;

        acao.classList.remove(
            "duelo-perigo",
            "duelo-pronto"
        );

        feedback.textContent = "";
        mensagem.textContent = "A preparar o desafio...";
        area.hidden = false;
        inicio.hidden = true;
        final.hidden = true;

        obter("duelo-jogo-numero").textContent =
            `MINIJOGO ${jogo + 1} DE 3`;

        obter("duelo-jogador-atual").textContent =
            `Vez de ${nomes[jogador]} ${emojis[jogador]}`;

        obter("duelo-titulo").textContent =
            jogos[jogo].titulo;

        obter("duelo-instrucoes").textContent =
            jogos[jogo].instrucoes;

        obter("duelo-etapa").textContent =
            `${nomes[jogador]} joga: ${jogos[jogo].titulo}`;

        atualizarPlacar();

        esperar(() => iniciarJogo(), 500);
    }

    function iniciarJogo() {
        if (jogo === 0) iniciarReflexos();
        if (jogo === 1) iniciarMemoria();
        if (jogo === 2) iniciarMira();
    }


    // --------------------------------------
    // JOGO 1 — REFLEXOS RELÂMPAGO
    // --------------------------------------

    function iniciarReflexos() {
        bloqueado = false;

        acao.hidden = false;
        acao.disabled = false;
        acao.textContent = "ESPERA...";
        acao.classList.remove("duelo-pronto");
        acao.classList.add("duelo-perigo");

        mensagem.textContent =
            "Não cliques ainda! Espera pelo sinal verde...";

        feedback.textContent = "";

        // O clique antes do sinal conta como falsa partida.
        acao.onclick = () => {
            if (bloqueado) return;

            if (acao.classList.contains("duelo-pronto")) {
                // O sinal verde já apareceu: calcular o tempo.
                const tempo = performance.now() - instanteInicio;

                bloqueado = true;
                acao.disabled = true;

                const ganho = Math.max(
                    0,
                    Math.round(100 - tempo / 10)
                );

                pontos[jogador] += ganho;
                resultados[jogador][jogo] = ganho;

                mensagem.textContent =
                    `Reação: ${(tempo / 1000).toFixed(3)} segundos!`;

                feedback.textContent =
                    `Ganhaste ${ganho} pontos! ⚡`;

                terminarTurno();
            } else {
                // Clicou antes do sinal verde.
                bloqueado = true;
                acao.disabled = true;

                limparTemporizadores();

                resultados[jogador][jogo] = 0;

                mensagem.textContent =
                    "Clicaste antes do sinal!";

                feedback.textContent =
                    "Falsa partida! Este turno vale 0 pontos. 🙈";

                terminarTurno();
            }
        };

        // Esperar um intervalo aleatório antes do sinal.
        const atraso = 1500 + Math.random() * 2500;

        esperar(() => {
            if (bloqueado) return;

            instanteInicio = performance.now();

            acao.textContent = "CLICA!";
            acao.classList.remove("duelo-perigo");
            acao.classList.add("duelo-pronto");

            mensagem.textContent = "AGORA! ⚡";
        }, atraso);
    }


    // --------------------------------------
    // JOGO 2 — DESAFIO DA MEMÓRIA
    // --------------------------------------

    function iniciarMemoria() {
        bloqueado = true;
        sequencia = [];

        for (let i = 0; i < 4; i++) {
            sequencia.push(
                simbolos[Math.floor(Math.random() * simbolos.length)]
            );
        }

        proximoSimbolo = 0;
        opcoes.hidden = true;

        mensagem.textContent =
            "Memoriza estes quatro símbolos!";

        let posicao = 0;

        function mostrarProximo() {
            if (posicao >= sequencia.length) {
                mensagem.textContent =
                    "Agora repete a sequência pela mesma ordem!";

                opcoes.hidden = false;
                criarBotoesMemoria();
                bloqueado = false;
                return;
            }

            mensagem.textContent = sequencia[posicao];

            posicao++;
            esperar(mostrarProximo, 750);
        }

        esperar(mostrarProximo, 500);
    }

    function criarBotoesMemoria() {
        opcoes.replaceChildren();

        const baralhados = [...simbolos].sort(
            () => Math.random() - 0.5
        );

        baralhados.forEach((simbolo) => {
            const botao = document.createElement("button");

            botao.type = "button";
            botao.className = "duelo-simbolo";
            botao.textContent = simbolo;
            botao.setAttribute(
                "aria-label",
                `Escolher ${simbolo}`
            );

            botao.addEventListener("click", () => {
                if (bloqueado) return;

                const esperado = sequencia[proximoSimbolo];

                if (simbolo === esperado) {
                    botao.classList.add("duelo-acerto");
                    botao.disabled = true;
                    proximoSimbolo++;

                    if (proximoSimbolo === sequencia.length) {
                        bloqueado = true;

                        const ganho = 100;
                        pontos[jogador] += ganho;
                        resultados[jogador][jogo] = ganho;

                        mensagem.textContent =
                            "Sequência perfeita! 🧠";

                        feedback.textContent =
                            `Acertaste tudo! +${ganho} pontos!`;

                        terminarTurno();
                    } else {
                        mensagem.textContent =
                            `Correto! ${proximoSimbolo} de 4`;
                    }
                } else {
                    bloqueado = true;
                    botao.classList.add("duelo-erro");

                    const ganho = proximoSimbolo * 25;
                    pontos[jogador] += ganho;
                    resultados[jogador][jogo] = ganho;

                    mensagem.textContent =
                        "A sequência terminou!";

                    feedback.textContent =
                        `Acertaste ${proximoSimbolo} de 4. Ganhaste ${ganho} pontos.`;

                    terminarTurno();
                }
            });

            opcoes.appendChild(botao);
        });
    }

    // --------------------------------------
    // JOGO 3 — MIRA CERTEIRA
    // --------------------------------------

    function iniciarMira() {
        bloqueado = false;
        acertos = 0;

        alvos.hidden = false;
        alvos.replaceChildren();

        mensagem.textContent = "Tempo: 10 segundos";

        for (let i = 0; i < 12; i++) {
            const alvo = document.createElement("button");

            alvo.type = "button";
            alvo.className = "duelo-alvo";
            alvo.textContent = "⭐";
            alvo.setAttribute("aria-label", "Acertar no alvo");

            alvo.addEventListener("click", () => {
                if (bloqueado || alvo.disabled) return;

                acertos++;
                alvo.disabled = true;
                alvo.textContent = "💗";
                alvo.classList.add("duelo-acertado");

                mensagem.textContent =
                    `Tempo restante: ${Math.max(0, Math.ceil(tempoFim - (Date.now() - tempoInicio) / 1000))} segundos`;

                feedback.textContent =
                    `${acertos} alvos acertados!`;

                alvo.animate(
                    [
                        { transform: "scale(1)" },
                        { transform: "scale(1.2)" },
                        { transform: "scale(1)" }
                    ],
                    { duration: 220 }
                );
            });

            alvos.appendChild(alvo);
        }

        const tempoInicio = Date.now();
        const tempoFim = 10;

        const relogio = setInterval(() => {
            const restante = Math.max(
                0,
                tempoFim - Math.floor((Date.now() - tempoInicio) / 1000)
            );

            mensagem.textContent = `Tempo: ${restante} segundos`;

            if (restante <= 0) {
                clearInterval(relogio);

                if (!bloqueado) terminarMira();
            }
        }, 200);

        temporizadores.push(relogio);
    }

    function terminarMira() {
        if (bloqueado) return;

        bloqueado = true;

        const ganho = acertos * 10;

        pontos[jogador] += ganho;
        resultados[jogador][jogo] = ganho;

        mensagem.textContent = "Tempo esgotado! 🎯";

        feedback.textContent =
            `Acertaste ${acertos} alvos e ganhaste ${ganho} pontos!`;

        [...alvos.children].forEach((alvo) => {
            alvo.disabled = true;
        });

        terminarTurno();
    }

    // --------------------------------------
    // TERMINAR TURNO E AVANÇAR
    // --------------------------------------

    function terminarTurno() {
        limparTemporizadores();

        bloqueado = true;
        acao.disabled = true;
        continuar.hidden = false;

        atualizarPlacar();

        if (jogo === 2 && jogador === 1) {
            continuar.textContent = "Ver classificação 🏆";
        } else {
            continuar.textContent = "Próximo turno →";
        }
    }

    continuar.addEventListener("click", () => {
        if (!iniciou) return;

        limparTemporizadores();

        if (jogador === 0) {
            // Primeiro joga a Diana; depois, o Gonçalo.
            jogador = 1;
            prepararTurno();
            return;
        }

        // Os dois terminaram este minijogo.
        jogador = 0;
        jogo++;

        if (jogo >= jogos.length) {
            mostrarResultado();
        } else {
            prepararTurno();
        }
    });

    // --------------------------------------
    // CLASSIFICAÇÃO FINAL
    // --------------------------------------

    function mostrarResultado() {
        limparTemporizadores();

        area.hidden = true;
        final.hidden = false;

        obter("duelo-final-diana").textContent =
            `${pontos[0]} pontos`;

        obter("duelo-final-goncalo").textContent =
            `${pontos[1]} pontos`;

        const vencedor = obter("duelo-vencedor");
        const trofeu = obter("duelo-trofeu");
        const resumo = obter("duelo-resumo");

        if (pontos[0] > pontos[1]) {
            vencedor.textContent = "Diana é a campeã! 👑";
            trofeu.textContent = "🏆💗";
            resumo.textContent =
                "A Diana conquistou mais pontos neste duelo. Gonçalo, há sempre uma desforra!";
        } else if (pontos[1] > pontos[0]) {
            vencedor.textContent = "Gonçalo é o campeão! 👑";
            trofeu.textContent = "🏆💕";
            resumo.textContent =
                "O Gonçalo conquistou mais pontos neste duelo. Diana, está na hora da desforra!";
        } else {
            vencedor.textContent = "Empate perfeito! 💞";
            trofeu.textContent = "🏆💗🏆";
            resumo.textContent =
                "Os dois terminaram com a mesma pontuação. Vai ser preciso uma desforra!";
        }

        const classificacao = obter("duelo-classificacao");
        classificacao.replaceChildren();

        jogos.forEach((minijogo, indice) => {
            const linha = document.createElement("div");
            linha.className = "duelo-linha-classificacao";

            const nome = document.createElement("strong");
            nome.textContent = minijogo.titulo;

            const detalhe = document.createElement("p");
            detalhe.textContent =
                `Diana: ${resultados[0][indice] ?? 0} pontos · ` +
                `Gonçalo: ${resultados[1][indice] ?? 0} pontos`;

            linha.append(nome, detalhe);
            classificacao.appendChild(linha);
        });

        atualizarPlacar();

        final.classList.remove("duelo-celebracao");
        void final.offsetWidth;
        final.classList.add("duelo-celebracao");
    }

    // --------------------------------------
    // COMEÇAR E REPETIR O TORNEIO
    // --------------------------------------

    function reiniciarTorneio() {
        limparTemporizadores();

        jogador = 0;
        jogo = 0;
        pontos = [0, 0];
        resultados = [[], []];
        bloqueado = false;
        sequencia = [];
        proximoSimbolo = 0;
        acertos = 0;
        fimReflexos = false;
        iniciou = true;

        atualizarPlacar();
        prepararTurno();
    }

    obter("duelo-comecar").addEventListener(
        "click",
        reiniciarTorneio
    );

    obter("duelo-repetir").addEventListener(
        "click",
        reiniciarTorneio
    );
})();

/* INTRO: MOSTRAR O SITE A PARTIR DO TOPO */
(() => {
    const intro = document.getElementById("intro-site");

    if (!intro) return;

    if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
    }

    // Remove uma eventual âncora antiga, como #escape-room.
    if (window.location.hash) {
        history.replaceState(
            null,
            "",
            window.location.pathname + window.location.search
        );
    }

    window.scrollTo(0, 0);

    const mostrarSite = () => {
        window.scrollTo(0, 0);
        intro.classList.add("intro-sair");

        setTimeout(() => {
            intro.remove();
        }, 900);
    };

    window.addEventListener("load", () => {
        window.scrollTo(0, 0);
        setTimeout(mostrarSite, 1900);
    }, { once: true });
})();

/* ROLETA DO DESTINO DO CS2 */
(() => {
    const roda = document.getElementById("roleta-roda");
    const botao = document.getElementById("roleta-girar");
    const novamente = document.getElementById("roleta-novamente");
    const resultado = document.getElementById("roleta-resultado");
    const titulo = document.getElementById("roleta-titulo");
    const mensagem = document.getElementById("roleta-mensagem");
    const emoji = document.getElementById("roleta-emoji");

    if (!roda || !botao || !resultado) return;

    const destinos = [
        {
            titulo: "SIM! VAI HAVER CS2! 🎮",
            mensagem: "A Diana que se prepare. O Gonçalo já está a imaginar a primeira partida.",
            emoji: "🎮"
        },
        {
            titulo: "HOJE É NOITE DE CASAL! 💗",
            mensagem: "Milagre confirmado! O computador pode descansar e a Diana ganha pontos.",
            emoji: "💕"
        },
        {
            titulo: "SÓ UMA PARTIDA... 🤡",
            mensagem: "A frase mais perigosa da noite. Volta a consultar a roleta daqui a três horas.",
            emoji: "🤡"
        },
        {
            titulo: "CS2 ATÉ ÀS TANTAS! 🌙",
            mensagem: "A roleta prevê um 'já vou' seguido de mais uma partida. Previsão não oficial!",
            emoji: "🌙"
        },
        {
            titulo: "O AMOR GANHOU! 💞",
            mensagem: "Hoje a prioridade é fazer memórias juntos. O CS2 fica à espera!",
            emoji: "💞"
        },
        {
            titulo: "RANKED ACTIVADA! 🔥",
            mensagem: "O Gonçalo ouviu falar em ranked e desapareceu misteriosamente do chat.",
            emoji: "🔥"
        }
    ];

    let rodacao = 0;
    let aGirar = false;

    function girar() {
        if (aGirar) return;

        aGirar = true;
        botao.disabled = true;
        resultado.hidden = true;

        const indice = Math.floor(Math.random() * destinos.length);
        const destino = destinos[indice];

        // Cada setor ocupa 60 graus.
        // A seta fica no topo; este cálculo coloca o setor escolhido na seta.
        const centroSetor = indice * 60 + 30;
        const voltas = 360 * (5 + Math.floor(Math.random() * 3));
        const anguloFinal = voltas + (360 - centroSetor);

        rodacao += anguloFinal;
        roda.style.transform = `rotate(${rodacao}deg)`;

        window.setTimeout(() => {
            titulo.textContent = destino.titulo;
            mensagem.textContent = destino.mensagem;
            emoji.textContent = destino.emoji;
            resultado.hidden = false;
            botao.disabled = false;
            aGirar = false;
        }, 4200);
    }

    botao.addEventListener("click", girar);
    novamente?.addEventListener("click", girar);
})();

/* MODO VINGANÇA DA DIANA */
(() => {
    const painel = document.getElementById("vinganca-diana");
    const mensagem = document.getElementById("vinganca-mensagem");
    const missao = document.getElementById("vinganca-missao");
    const botao = document.getElementById("vinganca-outra");
    const roda = document.getElementById("roleta-roda");

    if (!painel || !mensagem || !missao || !roda) return;

    const missoes = [
        "O Gonçalo tem de escolher a próxima atividade do casal. Sem dizer 'não sei'! 😂",
        "O Gonçalo tem de dar à Diana um elogio sincero, sem falar de Counter-Strike.",
        "Pausa no gaming: escolham juntos uma música para ouvir.",
        "O Gonçalo tem de planear um encontro para os dois, mesmo que seja em casa. 💗",
        "Desafio relâmpago: cada um diz uma memória favorita da relação.",
        "A Diana escolhe a próxima atividade de 15 minutos. O Gonçalo aceita sem reclamar! 😈"
    ];

    let ultimaRotacao = 0;

    function verificarRoleta() {
        const transformacao = getComputedStyle(roda).transform;
        if (transformacao === "none") return;

        const matriz = new DOMMatrixReadOnly(transformacao);
        let graus = Math.atan2(matriz.b, matriz.a) * 180 / Math.PI;
        graus = (graus + 360) % 360;

        // A roleta terminou de girar quando a transição deixa de estar ativa.
        if (roda.matches(":hover")) {
            // Não precisamos de fazer nada enquanto está a girar.
        }
    }

    function ativarMissao() {
        mensagem.textContent =
            "A roleta decidiu provocar-te! Está na hora de trocares uma partida por um momento a dois. 😂";

        missao.textContent =
            missoes[Math.floor(Math.random() * missoes.length)];

        painel.hidden = false;
    }

    botao?.addEventListener("click", () => {
        missao.textContent =
            missoes[Math.floor(Math.random() * missoes.length)];
    });

    // O resultado é detetado pelo título apresentado pela roleta.
    document.getElementById("roleta-girar")?.addEventListener("click", () => {
        painel.hidden = true;
        ultimaRotacao++;
        const rodadaAtual = ultimaRotacao;

        window.setTimeout(() => {
            if (rodadaAtual !== ultimaRotacao) return;

            const titulo = document.getElementById("roleta-titulo");
            if (!titulo || painel.hidden === false) return;

            if (/SÓ UMA|ATÉ ÀS TANTAS|RANKED/i.test(titulo.textContent)) {
                ativarMissao();
            }
        }, 4500);
    });

    document.getElementById("roleta-novamente")?.addEventListener("click", () => {
        painel.hidden = true;
    });
})();
const musica = document.getElementById("musica-site");
const botaoMusica = document.getElementById("botao-musica");

if (musica && botaoMusica) {
    botaoMusica.addEventListener("click", async () => {
        if (musica.paused) {
            try {
                await musica.play();
                botaoMusica.textContent = "🔇 Parar música";
            } catch (erro) {
                alert("Não foi possível reproduzir a música. Confirma se o ficheiro existe na pasta imagens.");
            }
        } else {
            musica.pause();
            botaoMusica.textContent = "🎵 Ouvir música";
        }
    });
}