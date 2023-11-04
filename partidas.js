const jogosDaRodada1 = [
  {
    horario: "16:00",
    timeMandante: "Flamengo",
    timeVisitante: "Flamengo",
    arbitro: "Anderson Daronco",
    data: "01/10/2023",
    arena: "Maracanã",
  },
  {
    horario: "18:30",
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    arbitro: "Wilmar Roldán",
    data: "02/10/2023",
    arena: "Morumbi",
  },
  {
    horario: "15:00",
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    arbitro: "Ricardo Marques Ribeiro",
    data: "03/10/2023",
    arena: "Mineirão",
  },
  // Adicione mais jogos conforme necessário
];

const jogosDaRodada2 = [
  {
    horario: "16:00",
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    arbitro: "Leandro Pedro Vuaden",
    data: "08/10/2023",
    arena: "Allianz Parque",
  },
  {
    horario: "19:00",
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    arbitro: "Braulio Machado",
    data: "09/10/2023",
    arena: "Arena do Grêmio",
  },
  {
    horario: "17:30",
    timeMandante: "Internacional",
    timeVisitante: "Flamengo",
    arbitro: "Wilton Pereira Sampaio",
    data: "10/10/2023",
    arena: "São Januário",
  },
  // Adicione mais jogos conforme necessário
];

const partidasEncerradasRodada1 = [
  {
    timeMandante: "Flamengo",
    timeVisitante: "Flamengo",
    placarMandante: 3,
    placarVisitante: 1,
    arbitro: "Anderson Daronco",
    horario: "16:00",
    data: "01/10/2023",
    arena: "Maracanã",
  },
  {
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    placarMandante: 2,
    placarVisitante: 2,
    arbitro: "Wilmar Roldán",
    horario: "18:30",
    data: "02/10/2023",
    arena: "Morumbi",
  },
  {
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    placarMandante: 1,
    placarVisitante: 0,
    arbitro: "Ricardo Marques Ribeiro",
    horario: "15:00",
    data: "03/10/2023",
    arena: "Mineirão",
  },
  // Adicione mais partidas encerradas conforme necessário
];

const partidasEncerradasRodada2 = [
  {
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    placarMandante: 2,
    placarVisitante: 1,
    arbitro: "Leandro Pedro Vuaden",
    horario: "16:00",
    data: "08/10/2023",
    arena: "Allianz Parque",
  },
  {
    timeMandante: "Internacional",
    timeVisitante: "Internacional",
    placarMandante: 0,
    placarVisitante: 0,
    arbitro: "Braulio Machado",
    horario: "19:00",
    data: "09/10/2023",
    arena: "Arena do Grêmio",
  },
  {
    timeMandante: "Internacional",
    timeVisitante: "Flamengo",
    placarMandante: 1,
    placarVisitante: 2,
    arbitro: "Wilton Pereira Sampaio",
    horario: "17:30",
    data: "10/10/2023",
    arena: "São Januário",
  },
  // Adicione mais partidas encerradas conforme necessário
];

const rodadaSelect = document.getElementById("rodada-select");
const tabelaJogosProximos = document.getElementById("jogos-proximos");
const rodadaEncerradasSelect = document.getElementById(
  "rodada-encerradas-select"
);
const tabelaPartidasEncerradas = document.getElementById("partidas-encerradas");

function preencherTabela(tabela, jogos) {
  // Limpar o conteúdo existente da tabela
  tabela.innerHTML = "";

  // Criar a linha de cabeçalho da tabela
  const cabecalho = document.createElement("tr");
  cabecalho.innerHTML = `
    <th class="none">Horário</th>
    <th>Time Mandante</th>
    <th>Time Visitante</th>
    <th class="none">Árbitro</th>
    <th class="none">Data</th>
    <th class="none">Arena</th>
    <th>Sobre</th>
  `;
  tabela.appendChild(cabecalho);

  // Preencher a tabela com dados de jogos
  jogos.forEach((jogo) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td class="none">${jogo.horario}</td>
      <td>
        <img class="logo-time" src="assets/img/${jogo.timeMandante}.png" alt="Logo ${jogo.timeMandante}" />
        <p>${jogo.timeMandante}</p>
      </td>
      <td>
        <img class="logo-time" src="assets/img/${jogo.timeVisitante}.png" alt="Logo ${jogo.timeVisitante}" />
        <p>${jogo.timeVisitante}</p>
      </td>
      <td class="none">${jogo.arbitro}</td>
      <td class="none">${jogo.data}</td>
      <td class="none">${jogo.arena}</td>
      <td><a href="detalhePartida.html">Ver mais</a></td>
    `;
    tabela.appendChild(linha);
  });
}

function preencherTabelaPartidasEncerradas(tabela, partidasEncerradas) {
  // Limpar o conteúdo existente da tabela
  tabela.innerHTML = "";

  // Criar a linha de cabeçalho da tabela
  const cabecalho = document.createElement("tr");
  cabecalho.innerHTML = `
    <th>Time Mandante</th>
    <th>Placar</th>
    <th>Time Visitante</th>
    <th class="none">Árbitro</th>
    <th class="none">Horário</th>
    <th class="none">Data</th>
    <th class="none">Estádio</th>
  `;
  tabela.appendChild(cabecalho);

  // Preencher a tabela com dados das partidas encerradas
  partidasEncerradas.forEach((partida) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
    
      <td>
      <img class="logo-time" src="assets/img/${partida.timeMandante}.png" alt="Logo ${partida.timeMandante}" />
      <p>${partida.timeMandante}</p>
    </td>
    <td>${partida.placarMandante} - ${partida.placarVisitante}</td>
    <td>
      <img class="logo-time" src="assets/img/${partida.timeVisitante}.png" alt="Logo ${partida.timeVisitante}" />
      <p>${partida.timeVisitante}</p>
    </td>
      <td class="none">${partida.arbitro}</td>
      <td class="none">${partida.horario}</td>
      <td class="none">${partida.data}</td>
      <td class="none">${partida.arena}</td>
    `;
    tabela.appendChild(linha);
  });
}

function preencherTabelas(rodada) {
  const jogos =
    rodada === "rodada1"
      ? jogosDaRodada1
      : rodada === "rodada2"
      ? jogosDaRodada2
      : [];

  preencherTabela(tabelaJogosProximos, jogos);
}

function preencherTabelaEncerradas(rodada) {
  const partidasEncerradas =
    rodada === "rodada1"
      ? partidasEncerradasRodada1
      : rodada === "rodada2"
      ? partidasEncerradasRodada2
      : [];

  preencherTabelaPartidasEncerradas(
    tabelaPartidasEncerradas,
    partidasEncerradas
  );
}

// Event listener para a mudança na seleção de rodada
rodadaSelect.addEventListener("change", () => {
  const selectedRodada = rodadaSelect.value;
  preencherTabelas(selectedRodada);
});

// Event listener para a mudança na seleção de rodada para partidas encerradas
rodadaEncerradasSelect.addEventListener("change", () => {
  const selectedRodadaEncerradas = rodadaEncerradasSelect.value;
  preencherTabelaEncerradas(selectedRodadaEncerradas);
});

// Preencher as tabelas inicialmente com a rodada selecionada
const selectedRodada = rodadaSelect.value;
preencherTabelas(selectedRodada);
const selectedRodadaEncerradas = rodadaEncerradasSelect.value;
preencherTabelaEncerradas(selectedRodadaEncerradas);
