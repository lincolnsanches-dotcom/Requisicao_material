// Base de Setores Inicializada conforme atualizado
const setoresIniciais = [
  "HORTIFRUTI",
  "COZINHA CENTRAL",
  "AÇOUGUE",
  "CAFÉ DA MANHÃ",
  "CONFEITARIA",
  "GARD MANGER",
  "PADARIA",
  "BANQUETES",
  "RESTRIÇÃO",
  "VEZZOSO CUCINA",
  "ROOM SERVICE",
  "PIZZARIA"
];

// Base Completa de 189 Produtos de Hortifruti
const produtosIniciais = [
  { code: "1001", nome: "ABACATE", unidade: "KG", preco: 0 },
  { code: "1002", nome: "ABACAXI", unidade: "UN", preco: 0 },
  { code: "1003", nome: "ABOBORA CABOTIA", unidade: "KG", preco: 0 },
  { code: "1004", nome: "ABOBORA MENINA", unidade: "KG", preco: 0 },
  { code: "1005", nome: "ABOBORA SERGIPANA", unidade: "KG", preco: 0 },
  { code: "1006", nome: "ABOBRINHA ITALIANA", unidade: "KG", preco: 0 },
  { code: "1007", nome: "ACEROLA", unidade: "KG", preco: 0 },
  { code: "1008", nome: "AGRIAO", unidade: "MACO", preco: 0 },
  { code: "1009", nome: "ALECRIM", unidade: "MACO", preco: 0 },
  { code: "1010", nome: "ALFACE CRESPA", unidade: "MACO", preco: 0 },
  { code: "1011", nome: "ALFACE LISA", unidade: "MACO", preco: 0 },
  { code: "1012", nome: "ALFACE AMERICANA", unidade: "MACO", preco: 0 },
  { code: "1013", nome: "ALFACE ROXA", unidade: "MACO", preco: 0 },
  { code: "1014", nome: "ALHO IN NATURA", unidade: "KG", preco: 0 },
  { code: "1015", nome: "ALHO PORRO", unidade: "KG", preco: 0 },
  { code: "1016", nome: "ALMEIRAO", unidade: "MACO", preco: 0 },
  { code: "1017", nome: "AMEIXA PRETA", unidade: "KG", preco: 0 },
  { code: "1018", nome: "AMEIXA VERMELHA", unidade: "KG", preco: 0 },
  { code: "1019", nome: "AMORA IN NATURA", unidade: "KG", preco: 0 },
  { code: "1020", nome: "ANANAS", unidade: "UN", preco: 0 },
  { code: "1021", nome: "ARETHA", unidade: "KG", preco: 0 },
  { code: "1022", nome: "ASPARGO FRESCO", unidade: "KG", preco: 0 },
  { code: "1023", nome: "AVOCADO", unidade: "KG", preco: 0 },
  { code: "1024", nome: "BANANA CATURRA / NANICA", unidade: "KG", preco: 0 },
  { code: "1025", nome: "BANANA PRATA", unidade: "KG", preco: 0 },
  { code: "1026", nome: "BANANA DA TERRA", unidade: "KG", preco: 0 },
  { code: "1027", nome: "BATATA DOCE", unidade: "KG", preco: 0 },
  { code: "1028", nome: "BATATA ENGLISH / MONALISA", unidade: "KG", preco: 0 },
  { code: "1029", nome: "BATATA BAROA / MANDIQUINHA", unidade: "KG", preco: 0 },
  { code: "1030", nome: "BATATA ASTERIX", unidade: "KG", preco: 0 },
  { code: "1031", nome: "BERINJELA", unidade: "KG", preco: 0 },
  { code: "1032", nome: "BETERRABA", unidade: "KG", preco: 0 },
  { code: "1033", nome: "BROCOLIS NINJA", unidade: "KG", preco: 0 },
  { code: "1034", nome: "BROCOLIS RAMOSO", unidade: "MACO", preco: 0 },
  { code: "1035", nome: "BROTO DE FEIJAO (MOYASHI)", unidade: "KG", preco: 0 },
  { code: "1036", nome: "BROTO DE ALFAFA", unidade: "KG", preco: 0 },
  { code: "1037", nome: "CACAU", unidade: "KG", preco: 0 },
  { code: "1038", nome: "CAQUI", unidade: "KG", preco: 0 },
  { code: "1039", nome: "CARAMBOLA", unidade: "KG", preco: 0 },
  { code: "1040", nome: "CARA", unidade: "KG", preco: 0 },
  { code: "1041", nome: "CEBOLA BRANCA", unidade: "KG", preco: 0 },
  { code: "1042", nome: "CEBOLA ROXA", unidade: "KG", preco: 0 },
  { code: "1043", nome: "CEBOLETE / CIBOULETTE", unidade: "MACO", preco: 0 },
  { code: "1044", nome: "CEBOLINHA", unidade: "MACO", preco: 0 },
  { code: "1045", nome: "CENOURA", unidade: "KG", preco: 0 },
  { code: "1046", nome: "CENOURA BABY", unidade: "KG", preco: 0 },
  { code: "1047", nome: "CEREJA FRESCA", unidade: "KG", preco: 0 },
  { code: "1048", nome: "CHUCHU", unidade: "KG", preco: 0 },
  { code: "1049", nome: "COENTRO", unidade: "MACO", preco: 0 },
  { code: "1050", nome: "COUVE MANTEIGA", unidade: "MACO", preco: 0 },
  { code: "1051", nome: "COUVE DE BRUXELAS", unidade: "KG", preco: 0 },
  { code: "1052", nome: "COUVE-FLOR", unidade: "UN", preco: 0 },
  { code: "1053", nome: "DAMASCO FRESCO", unidade: "KG", preco: 0 },
  { code: "1054", nome: "ENDIVIA", unidade: "KG", preco: 0 },
  { code: "1055", nome: "ERVA DOCE / FUNCHO", unidade: "KG", preco: 0 },
  { code: "1056", nome: "ERVILHA TORTA", unidade: "KG", preco: 0 },
  { code: "1057", nome: "ESPINAFRE", unidade: "MACO", preco: 0 },
  { code: "1058", nome: "FIGO FRESCO", unidade: "KG", preco: 0 },
  { code: "1059", nome: "FOLHA DE LOURO FRESCA", unidade: "MACO", preco: 0 },
  { code: "1060", nome: "FRAMBOESA IN NATURA", unidade: "KG", preco: 0 },
  { code: "1061", nome: "GOIABA VERMELHA", unidade: "KG", preco: 0 },
  { code: "1062", nome: "GOIABA BRANCA", unidade: "KG", preco: 0 },
  { code: "1063", nome: "GRAVIOLA", unidade: "KG", preco: 0 },
  { code: "1064", nome: "INHAME", unidade: "KG", preco: 0 },
  { code: "1065", nome: "JABUTICABA", unidade: "KG", preco: 0 },
  { code: "1066", nome: "JACA", unidade: "KG", preco: 0 },
  { code: "1067", nome: "JAMBO", unidade: "KG", preco: 0 },
  { code: "1068", nome: "JATOBA", unidade: "KG", preco: 0 },
  { code: "1069", nome: "JILO", unidade: "KG", preco: 0 },
  { code: "1070", nome: "KIWI", unidade: "KG", preco: 0 },
  { code: "1071", nome: "LARANJA PERA", unidade: "KG", preco: 0 },
  { code: "1072", nome: "LARANJA LIMA", unidade: "KG", preco: 0 },
  { code: "1073", nome: "LARANJABAHIA / KINNOW", unidade: "KG", preco: 0 },
  { code: "1074", nome: "LIMEIRA / LIMA DA PERSIA", unidade: "KG", preco: 0 },
  { code: "1075", nome: "LIMAO TAHITI", unidade: "KG", preco: 0 },
  { code: "1076", nome: "LIMAO SICILIANO", unidade: "KG", preco: 0 },
  { code: "1077", nome: "LIMAO CRAVO / GALEGO", unidade: "KG", preco: 0 },
  { code: "1078", nome: "MACA FUJI", unidade: "KG", preco: 0 },
  { code: "1079", nome: "MACA GALA", unidade: "KG", preco: 0 },
  { code: "1080", nome: "MACA VERDE", unidade: "KG", preco: 0 },
  { code: "1081", nome: "MACAXEIRA / MANDIOCA", unidade: "KG", preco: 0 },
  { code: "1082", nome: "MANGABA", unidade: "KG", preco: 0 },
  { code: "1083", nome: "MANGA PALMER", unidade: "KG", preco: 0 },
  { code: "1084", nome: "MANGA TOMMY", unidade: "KG", preco: 0 },
  { code: "1085", nome: "MANGA ROSA / ESPADA", unidade: "KG", preco: 0 },
  { code: "1086", nome: "MANJERICO / MANJERICAO", unidade: "MACO", preco: 0 },
  { code: "1087", nome: "MANJERICAO ROXO", unidade: "MACO", preco: 0 },
  { code: "1088", nome: "MARACUJA AZEDO", unidade: "KG", preco: 0 },
  { code: "1089", nome: "MARACUJA DOCE", unidade: "KG", preco: 0 },
  { code: "1090", nome: "MAXIXE", unidade: "KG", preco: 0 },
  { code: "1091", nome: "MELANCIA", unidade: "KG", preco: 0 },
  { code: "1092", nome: "MELANCIA BABY", unidade: "KG", preco: 0 },
  { code: "1093", nome: "MELAO AMARELO", unidade: "KG", preco: 0 },
  { code: "1094", nome: "MELAO PELE DE SAPO", unidade: "KG", preco: 0 },
  { code: "1095", nome: "MELAO CANTALOUPE", unidade: "KG", preco: 0 },
  { code: "1096", nome: "MELAO ORANGE", unidade: "KG", preco: 0 },
  { code: "1097", nome: "MERTILO / BLUEBERRY", unidade: "KG", preco: 0 },
  { code: "1098", nome: "MILHO VERDE NA ESPANHA", unidade: "KG", preco: 0 },
  { code: "1099", nome: "MORTANHA / MIRTILO", unidade: "KG", preco: 0 },
  { code: "1100", nome: "MORANGO", unidade: "KG", preco: 0 },
  { code: "1101", nome: "NARTAN / NECTARINA", unidade: "KG", preco: 0 },
  { code: "1102", nome: "NISPERA / AMEIXA AMARELA", unidade: "KG", preco: 0 },
  { code: "1103", nome: "NOZES IN NATURA", unidade: "KG", preco: 0 },
  { code: "1104", nome: "ORGANO FRESCO", unidade: "MACO", preco: 0 },
  { code: "1105", nome: "PALMITO IN NATURA", unidade: "KG", preco: 0 },
  { code: "1106", nome: "PEPANO JAPONES", unidade: "KG", preco: 0 },
  { code: "1107", nome: "PEPANO COMUM / CAIPIRA", unidade: "KG", preco: 0 },
  { code: "1108", nome: "PERA WILLIANS / D ANJOU", unidade: "KG", preco: 0 },
  { code: "1109", nome: "PERA ERCOLINI / PORTUGUESA", unidade: "KG", preco: 0 },
  { code: "1110", nome: "PESSEGO FRESCO", unidade: "KG", preco: 0 },
  { code: "1111", nome: "PIMENTA DEDO DE MOCA", unidade: "KG", preco: 0 },
  { code: "1112", nome: "PIMENTA DE CHEIRO", unidade: "KG", preco: 0 },
  { code: "1113", nome: "PIMENTA MALAGUETA", unidade: "KG", preco: 0 },
  { code: "1114", nome: "PIMENTAO VERDE", unidade: "KG", preco: 0 },
  { code: "1115", nome: "PIMENTAO VERMELHO", unidade: "KG", preco: 0 },
  { code: "1116", nome: "PIMENTAO AMARELO", unidade: "KG", preco: 0 },
  { code: "1117", nome: "PITAYA", unidade: "KG", preco: 0 },
  { code: "1118", nome: "QUIABO", unidade: "KG", preco: 0 },
  { code: "1119", nome: "RADICCHIO", unidade: "MACO", preco: 0 },
  { code: "1120", nome: "RABANETE", unidade: "MACO", preco: 0 },
  { code: "1121", nome: "REPOLHO BRANCO", unidade: "KG", preco: 0 },
  { code: "1122", nome: "REPOLHO ROXO", unidade: "KG", preco: 0 },
  { code: "1123", nome: "REPOLHO CRESPO / CHINES", unidade: "KG", preco: 0 },
  { code: "1124", nome: "ROMPOM / ROMA", unidade: "KG", preco: 0 },
  { code: "1125", nome: "RUCOLA", unidade: "MACO", preco: 0 },
  { code: "1126", nome: "SALSA / SALSINHA", unidade: "MACO", preco: 0 },
  { code: "1127", nome: "SALSIRAO / AIPO", unidade: "KG", preco: 0 },
  { code: "1128", nome: "SERIGUELA", unidade: "KG", preco: 0 },
  { code: "1129", nome: "TANGERINA / PONKAN", unidade: "KG", preco: 0 },
  { code: "1130", nome: "TANGERINA MURCOTT", unidade: "KG", preco: 0 },
  { code: "1131", nome: "TOMATE DEBORA / SALADA", unidade: "KG", preco: 0 },
  { code: "1132", nome: "TOMATE ITALIANO", unidade: "KG", preco: 0 },
  { code: "1133", nome: "TOMATE CEREJA", unidade: "KG", preco: 0 },
  { code: "1134", nome: "TOMATE GRAPPER", unidade: "KG", preco: 0 },
  { code: "1135", nome: "TOMATILHO", unidade: "KG", preco: 0 },
  { code: "1136", nome: "TOMILHO", unidade: "MACO", preco: 0 },
  { code: "1137", nome: "TORONJA / GRAAPEFRUIT", unidade: "KG", preco: 0 },
  { code: "1138", nome: "UVA ITALIA", unidade: "KG", preco: 0 },
  { code: "1139", nome: "UVA NIAGARA", unidade: "KG", preco: 0 },
  { code: "1140", nome: "UVA THOMPSON (SEM SEMENTE)", unidade: "KG", preco: 0 },
  { code: "1141", nome: "UVA CRIMSON (SEM SEMENTE)", unidade: "KG", preco: 0 },
  { code: "1142", nome: "UVA BLACK (SEM SEMENTE)", unidade: "KG", preco: 0 },
  { code: "1143", nome: "UVA ROXA COM SEMENTE", unidade: "KG", preco: 0 },
  { code: "1144", nome: "VAGEM MACARRAO", unidade: "KG", preco: 0 },
  { code: "1145", nome: "VAGEM MANTEIGA", unidade: "KG", preco: 0 },

  // Higienizados / Processados
  { code: "2001", nome: "ABOBORA CABOTIA DESP. CUBOS", unidade: "KG", preco: 0 },
  { code: "2002", nome: "ABOBRINHA ITALIANA FATIADA", unidade: "KG", preco: 0 },
  { code: "2003", nome: "ALFACE CRESPA HIGIENIZADA", unidade: "KG", preco: 0 },
  { code: "2004", nome: "ALFACE AMERICANA HIGIENIZADA", unidade: "KG", preco: 0 },
  { code: "2005", nome: "ALFACE ROXA HIGIENIZADA", unidade: "KG", preco: 0 },
  { code: "2006", nome: "ALHO DESCASCADO", unidade: "KG", preco: 0 },
  { code: "2007", nome: "BATATA DESCASCADA CUBOS", unidade: "KG", preco: 0 },
  { code: "2008", nome: "BATATA DESCASCADA PALITO", unidade: "KG", preco: 0 },
  { code: "2009", nome: "BETERRABA RALADA", unidade: "KG", preco: 0 },
  { code: "2010", nome: "CENOURA RALADA", unidade: "KG", preco: 0 },
  { code: "2011", nome: "CEBOLA DESCASCADA", unidade: "KG", preco: 0 },
  { code: "2012", nome: "CEBOLA BRUNOISE (CUBINHOS)", unidade: "KG", preco: 0 },
  { code: "2013", nome: "COUVE MANTEIGA PICADA", unidade: "KG", preco: 0 },
  { code: "2014", nome: "ESPINAFRE HIGIENIZADO", unidade: "KG", preco: 0 },
  { code: "2015", nome: "REPOLHO BRANCO TRICOTADO", unidade: "KG", preco: 0 },
  { code: "2016", nome: "RUCOLA HIGIENIZADA", unidade: "KG", preco: 0 }
];

// Estado Global da Aplicação com Suporte ao LocalStorage
let setores = JSON.parse(localStorage.getItem('sys_setores')) || setoresIniciais;
let produtos = JSON.parse(localStorage.getItem('sys_produtos')) || produtosIniciais;
let solicitacoes = JSON.parse(localStorage.getItem('sys_solicitacoes')) || [];

// Inicialização ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
  // Preencher data atual
  const hj = new Date();
  document.getElementById('dataAtualHeader').textContent = hj.toLocaleDateString('pt-BR');
  document.getElementById('solData').valueAsDate = hj;

  renderSelectSetores();
  renderTabelaSolicitante();
  renderAprovacaoChef();
  renderHistorico();
  renderCadastros();
  atualizarBadges();

  // Evento de filtro rápido na aba do solicitante
  document.getElementById('filtroProdutoSolicitante').addEventListener('input', function(e) {
    const termo = e.target.value.toLowerCase();
    document.querySelectorAll('#tbodySolicitante tr').forEach(tr => {
      const nome = tr.children[1].textContent.toLowerCase();
      const code = tr.children[0].textContent.toLowerCase();
      tr.style.display = (nome.includes(termo) || code.includes(termo)) ? '' : 'none';
    });
  });

  // Eventos de filtros no histórico
  document.getElementById('filtroHistSetor').addEventListener('change', renderHistorico);
  document.getElementById('filtroHistStatus').addEventListener('change', renderHistorico);
});

// Salvar Dados
function salvarSetores() { localStorage.setItem('sys_setores', JSON.stringify(setores)); }
function salvarProdutos() { localStorage.setItem('sys_produtos', JSON.stringify(produtos)); }
function salvarSolicitacoes() { localStorage.setItem('sys_solicitacoes', JSON.stringify(solicitacoes)); }

// Renderizar Selects de Setores
function renderSelectSetores() {
  const selSol = document.getElementById('solSetor');
  const selHist = document.getElementById('filtroHistSetor');

  selSol.innerHTML = '<option value="">Selecione o setor...</option>';
  selHist.innerHTML = '<option value="">Todos os Setores</option>';

  setores.forEach(setor => {
    selSol.innerHTML += `<option value="${setor}">${setor}</option>`;
    selHist.innerHTML += `<option value="${setor}">${setor}</option>`;
  });
}

// Renderizar Tabela do Solicitante
function renderTabelaSolicitante() {
  const tbody = document.getElementById('tbodySolicitante');
  tbody.innerHTML = '';

  produtos.forEach(p => {
    const tr = document.createElement('tr');
    tr.dataset.code = p.code;
    tr.innerHTML = `
      <td>${p.code}</td>
      <td><strong>${p.nome}</strong></td>
      <td>${p.unidade}</td>
      <td>R$ ${ (p.preco || 0).toFixed(2) }</td>
      <td><input type="number" step="0.1" class="qty-input input-est" value="0" min="0"></td>
      <td><input type="number" step="0.1" class="qty-input input-hosp" value="0" min="0"></td>
      <td><input type="number" step="0.1" class="qty-input input-ref" value="0" min="0"></td>
      <td><input type="number" step="0.1" class="qty-input input-camb" value="0" min="0"></td>
      <td><strong class="sol-total">0</strong></td>
      <td>R$ <span class="sol-valor-total">0.00</span></td>
    `;
    tbody.appendChild(tr);
  });

  // Evento para cálculo automático nas linhas da tabela
  tbody.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
      const tr = this.closest('tr');
      const hosp = parseFloat(tr.querySelector('.input-hosp').value) || 0;
      const ref = parseFloat(tr.querySelector('.input-ref').value) || 0;
      const camb = parseFloat(tr.querySelector('.input-camb').value) || 0;
      
      const total = hosp + ref + camb;
      tr.querySelector('.sol-total').textContent = total.toFixed(1);

      const code = tr.dataset.code;
      const prod = produtos.find(p => p.code === code);
      const preco = prod ? (prod.preco || 0) : 0;
      tr.querySelector('.sol-valor-total').textContent = (total * preco).toFixed(2);
    });
  });
}

// Submeter Solicitação (Solicitante)
document.getElementById('formSolicitante').addEventListener('submit', function(e) {
  e.preventDefault();

  const setor = document.getElementById('solSetor').value;
  const data = document.getElementById('solData').value;
  const observacao = document.getElementById('solObs').value;

  if (!setor) {
    alert("Por favor, selecione um setor!");
    return;
  }

  const itens = [];
  document.querySelectorAll('#tbodySolicitante tr').forEach(tr => {
    const code = tr.dataset.code;
    const est = parseFloat(tr.querySelector('.input-est').value) || 0;
    const hosp = parseFloat(tr.querySelector('.input-hosp').value) || 0;
    const ref = parseFloat(tr.querySelector('.input-ref').value) || 0;
    const camb = parseFloat(tr.querySelector('.input-camb').value) || 0;
    const total = parseFloat(tr.querySelector('.sol-total').textContent) || 0;

    if (total > 0) {
      const prodObj = produtos.find(p => p.code === code);
      itens.push({
        code: code,
        nome: prodObj ? prodObj.nome : code,
        unidade: prodObj ? prodObj.unidade : 'UN',
        preco: prodObj ? (prodObj.preco || 0) : 0,
        estoque: est,
        hospedes: hosp,
        refeitorio: ref,
        cambusa: camb,
        qtdPedida: total,
        qtdAprovada: total
      });
    }
  });

  if (itens.length === 0) {
    alert("Selecione pelo menos um item com quantidade maior que zero!");
    return;
  }

  const novaSolicitacao = {
    id: 'REQ-' + Date.now(),
    numeroOficial: '',
    setor: setor,
    data: data,
    observacao: observacao,
    status: 'PENDENTE',
    dataEnvio: new Date().toLocaleString('pt-BR'),
    itens: itens
  };

  solicitacoes.push(novaSolicitacao);
  salvarSolicitacoes();

  alert("Requisição enviada com sucesso ao Chef para aprovação!");

  this.reset();
  renderTabelaSolicitante();
  renderAprovacaoChef();
  renderHistorico();
  atualizarBadges();
});

// Renderizar Painel de Aprovação do Chef
function renderAprovacaoChef() {
  const container = document.getElementById('listaAprovacaoChef');
  container.innerHTML = '';

  const pendentes = solicitacoes.filter(s => s.status === 'PENDENTE');

  if (pendentes.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">Nenhuma requisição pendente para aprovação no momento.</p>';
    return;
  }

  pendentes.forEach(req => {
    const card = document.createElement('div');
    card.className = 'req-card';

    let itensHTML = '';
    req.itens.forEach((item, index) => {
      itensHTML += `
        <tr>
          <td>${item.code} - ${item.nome}</td>
          <td>${item.unidade}</td>
          <td>${item.estoque}</td>
          <td>${item.qtdPedida}</td>
          <td>
            <input type="number" step="0.1" class="qty-input" value="${item.qtdAprovada}" 
              onchange="atualizarQtdAprovada('${req.id}', ${index}, this.value)">
          </td>
        </tr>
      `;
    });

    card.innerHTML = `
      <div class="req-header">
        <span>Setor: ${req.setor} | Data Pedido: ${req.data}</span>
        <span class="status-badge status-PENDENTE">Aguardando Chef</span>
      </div>
      <p style="font-size: 0.85rem; margin-bottom: 10px;"><strong>Obs:</strong> ${req.observacao || 'Nenhuma'}</p>
      
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>UN</th>
              <th>Estoque Informado</th>
              <th>Qtd. Solicitada</th>
              <th>Qtd. Aprovada pelo Chef</th>
            </tr>
          </thead>
          <tbody>
            ${itensHTML}
          </tbody>
        </table>
      </div>

      <div style="margin-top: 15px; display: flex; gap: 10px; justify-content: flex-end;">
        <button class="btn btn-danger" onclick="decisaoChef('${req.id}', 'REJEITADO')">Rejeitar Requisição</button>
        <button class="btn btn-primary" onclick="decisaoChef('${req.id}', 'APROVADO')">Aprovar e Enviar à Secretaria</button>
      </div>
    `;

    container.appendChild(card);
  });
}

function atualizarQtdAprovada(reqId, itemIndex, valor) {
  const req = solicitacoes.find(s => s.id === reqId);
  if (req && req.itens[itemIndex]) {
    req.itens[itemIndex].qtdAprovada = parseFloat(valor) || 0;
    salvarSolicitacoes();
  }
}

function decisaoChef(reqId, novoStatus) {
  const req = solicitacoes.find(s => s.id === reqId);
  if (req) {
    req.status = novoStatus;
    salvarSolicitacoes();
    renderAprovacaoChef();
    renderHistorico();
    atualizarBadges();
  }
}

// Renderizar Histórico e Secretaria
function renderHistorico() {
  const container = document.getElementById('listaHistorico');
  container.innerHTML = '';

  const fSetor = document.getElementById('filtroHistSetor').value;
  const fStatus = document.getElementById('filtroHistStatus').value;

  let filtrados = solicitacoes.filter(s => {
    const matchSetor = fSetor ? s.setor === fSetor : true;
    const matchStatus = fStatus ? s.status === fStatus : true;
    return matchSetor && matchStatus;
  });

  if (filtrados.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: #888; padding: 20px;">Nenhum registro encontrado.</p>';
    return;
  }

  filtrados.reverse().forEach(req => {
    const card = document.createElement('div');
    card.className = 'req-card';

    let totalGeralReq = 0;
    let itensHTML = '';
    req.itens.forEach(item => {
      const subtotal = item.qtdAprovada * item.preco;
      totalGeralReq += subtotal;
      itensHTML += `
        <tr>
          <td>${item.code}</td>
          <td>${item.nome}</td>
          <td>${item.unidade}</td>
          <td>${item.qtdPedida}</td>
          <td><strong>${item.qtdAprovada}</strong></td>
          <td>R$ ${item.preco.toFixed(2)}</td>
          <td>R$ ${subtotal.toFixed(2)}</td>
        </tr>
      `;
    });

    const acaoSecretaria = req.status === 'APROVADO' ? `
      <div style="margin-top: 15px; background: #e3f2fd; padding: 10px; border-radius: 4px; display: flex; gap: 10px; align-items: center;">
        <label>Atribuir Nº de Requisição Oficial:</label>
        <input type="text" id="numOficial-${req.id}" placeholder="Ex: REQ-2026-001" style="width: 200px;">
        <button class="btn btn-info" onclick="concluirSecretaria('${req.id}')">Concluir / Registrar</button>
      </div>
    ` : '';

    card.innerHTML = `
      <div class="req-header">
        <span>Setor: ${req.setor} | Nº Oficial: ${req.numeroOficial || 'Pendente'}</span>
        <span class="status-badge status-${req.status}">${req.status}</span>
      </div>
      <p style="font-size: 0.85rem;"><strong>Data:</strong> ${req.data} | <strong>Enviado em:</strong> ${req.dataEnvio}</p>
      <p style="font-size: 0.85rem; margin-bottom: 10px;"><strong>Valor Total Aprovado:</strong> R$ ${totalGeralReq.toFixed(2)}</p>
      
      <div class="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Cód.</th>
              <th>Produto</th>
              <th>UN</th>
              <th>Qtd. Solicitada</th>
              <th>Qtd. Aprovada</th>
              <th>Preço Un.</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${itensHTML}
          </tbody>
        </table>
      </div>

      ${acaoSecretaria}
    `;

    container.appendChild(card);
  });
}

function concluirSecretaria(reqId) {
  const numInput = document.getElementById(`numOficial-${reqId}`);
  const valorNum = numInput ? numInput.value.trim() : '';

  if (!valorNum) {
    alert("Digite o número oficial da requisição!");
    return;
  }

  const req = solicitacoes.find(s => s.id === reqId);
  if (req) {
    req.numeroOficial = valorNum;
    req.status = 'CONCLUIDO';
    salvarSolicitacoes();
    renderHistorico();
    atualizarBadges();
  }
}

// Renderizar e Gerenciar Cadastros
function renderCadastros() {
  // Renderizar Lista de Setores
  const ulSetores = document.getElementById('listaSetoresCadastrados');
  ulSetores.innerHTML = '';
  setores.forEach((s, index) => {
    ulSetores.innerHTML += `
      <li style="margin-bottom: 5px;">
        ${s} <button style="color: red; border: none; background: none; cursor: pointer;" onclick="removerSetor(${index})">❌</button>
      </li>
    `;
  });

  // Renderizar Lista de Produtos
  const tbodyProd = document.getElementById('tbodyCadProdutos');
  tbodyProd.innerHTML = '';
  produtos.forEach(p => {
    tbodyProd.innerHTML += `
      <tr>
        <td>${p.code}</td>
        <td>${p.nome}</td>
        <td>${p.unidade}</td>
        <td>R$ ${(p.preco || 0).toFixed(2)}</td>
      </tr>
    `;
  });
}

function adicionarSetor() {
  const input = document.getElementById('novoSetorNome');
  const nome = input.value.trim().toUpperCase();
  if (nome && !setores.includes(nome)) {
    setores.push(nome);
    salvarSetores();
    input.value = '';
    renderSelectSetores();
    renderCadastros();
  }
}

function removerSetor(index) {
  setores.splice(index, 1);
  salvarSetores();
  renderSelectSetores();
  renderCadastros();
}

function salvarProduto() {
  const code = document.getElementById('cadCodigo').value.trim();
  const nome = document.getElementById('cadNome').value.trim().toUpperCase();
  const unidade = document.getElementById('cadUnidade').value.trim().toUpperCase();
  const preco = parseFloat(document.getElementById('cadPreco').value) || 0;

  if (!code || !nome) {
    alert("Código e Nome são obrigatórios!");
    return;
  }

  const index = produtos.findIndex(p => p.code === code);
  if (index >= 0) {
    produtos[index].nome = nome;
    produtos[index].unidade = unidade;
    produtos[index].preco = preco;
  } else {
    produtos.push({ code, nome, unidade, preco });
  }

  salvarProdutos();
  renderTabelaSolicitante();
  renderCadastros();

  document.getElementById('cadCodigo').value = '';
  document.getElementById('cadNome').value = '';
  document.getElementById('cadUnidade').value = '';
  document.getElementById('cadPreco').value = '';
}

// Atualizar Badges de Notificação
function atualizarBadges() {
  const pendentesChef = solicitacoes.filter(s => s.status === 'PENDENTE').length;
  const pendentesSec = solicitacoes.filter(s => s.status === 'APROVADO').length;

  document.getElementById('badgeChef').textContent = pendentesChef;
  document.getElementById('badgeSecretaria').textContent = pendentesSec;
}

// Controle de Navegação das Abas
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    this.classList.add('active');
    const targetId = this.getAttribute('data-tab');
    document.getElementById(targetId).classList.add('active');

    if (targetId === 'tab-chef') {
      renderAprovacaoChef();
    } else if (targetId === 'tab-secretaria') {
      renderHistorico();
    } else if (targetId === 'tab-cadastros') {
      renderCadastros();
    }
    atualizarBadges();
  });
});