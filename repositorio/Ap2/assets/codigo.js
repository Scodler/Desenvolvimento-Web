
const entrada = () => {
  sessionStorage.setItem("p\xE1gina", "entrada");
  document.body.innerHTML = "";
  const _0x2375aa = document.createElement("div");
  _0x2375aa.id = "container-entrada";
  _0x2375aa.style.display = "flex";
  const _0x5e3048 = document.createElement("div");
  _0x5e3048.style.textAlign = "center";
  _0x5e3048.style.flex = 1;
  _0x5e3048.style.display = "flex";
  _0x5e3048.style.flexDirection = "column";
  _0x5e3048.style.justifyContent = "center";
  const _0x2b0605 = document.createElement("h1");
  _0x2b0605.innerHTML = "Atletas do Botafogo em 2023-2";
  _0x2b0605.style.margin = 0;
  const _0x47b265 = document.createElement("p");
  _0x47b265.innerHTML =
    "Criado com objetivos exclusivamente did\xE1ticos para a disciplina Desenvolvimento Web do Ibmec Rio.";
  _0x47b265.style.margin = "0 auto";
  _0x47b265.style.maxWidth = "20em";
  _0x5e3048.appendChild(_0x2b0605);
  _0x5e3048.appendChild(_0x47b265);
  const _0x5c1d5a = document.createElement("div");
  _0x5c1d5a.id = "fake-form";
  _0x5c1d5a.style.textAlign = "center";
  _0x5c1d5a.style.flex = 0.6;
  const _0x4dd051 = document.createElement("input");
  _0x4dd051.id = "entrada-senha";
  _0x4dd051.type = "text";
  _0x4dd051.placeholder = "Informe a senha.";
  _0x4dd051.style.padding = ".3em";
  _0x4dd051.style.margin = ".5em";
  _0x4dd051.onchange = () => {
    testa_senha(document.getElementById("entrada-senha").value);
  };
  const _0x2b444e = document.createElement("button");
  configura_botao(_0x2b444e);
  _0x2b444e.innerText = "Entrar";
  _0x2b444e.onclick = () => {
    testa_senha(document.getElementById("entrada-senha").value);
  };
  const _0x3be494 = document.createElement("p");
  _0x3be494.innerHTML = "\n    Efetue login com a senha: SENHA\n  ";
  _0x5c1d5a.appendChild(_0x4dd051);
  _0x5c1d5a.appendChild(_0x2b444e);
  _0x5c1d5a.appendChild(_0x3be494);
  _0x2375aa.appendChild(_0x5e3048);
  _0x2375aa.appendChild(_0x5c1d5a);
  document.body.appendChild(_0x2375aa);
  document.body.style.display = "flex";
  document.body.style.height = "100vh";
};
const configura_entrada = (_0x27eab7) => {
  const _0x7cf179 = document.getElementById("container-entrada");
  const _0x26ee99 = document.getElementById("fake-form");
  const _0x578c32 = document.querySelector(
    "#container-entrada > div:nth-child(1) p"
  );
  const _0x2bbb27 = document.querySelector("#fake-form p");
  switch (_0x27eab7) {
    case "celular":
      _0x7cf179.style.flexDirection = "column";
      _0x7cf179.style.margin = "0";
      _0x7cf179.style.width = "100vw";
      _0x7cf179.style.minWidth = "unset";
      document.body.style.margin = "8px 0";
      _0x26ee99.padding = "auto";
      _0x578c32.style.margin = "0px auto";
      _0x2bbb27.style.margin = "1em auto";
      break;
    case "tablet":
    case "desktop":
      _0x7cf179.style.flexDirection = "row";
      _0x7cf179.style.margin = "auto";
      _0x7cf179.style.width = "70vw";
      _0x7cf179.style.minWidth = "800px";
      document.body.style.margin = "8px";
      _0x26ee99.padding = "2em";
      _0x578c32.style.margin = "0px auto";
      _0x2bbb27.style.margin = "0px auto";
      break;
  }
};

function configura_botao(_0x4d42b3) {
  _0x4d42b3.style.backgroundColor = "black";
  _0x4d42b3.style.border = "none";
  _0x4d42b3.style.color = "white";
  _0x4d42b3.style.textAlign = "center";
  _0x4d42b3.style.textDecoration = "none";
  _0x4d42b3.style.padding = ".5em 1em";
  _0x4d42b3.style.cursor = "pointer";
}

const pega_elenco = async (_0x29e4b8) => {
  const _0x28c962 = await fetch(
    "https://botafogo-atletas.mange.li/" + _0x29e4b8
  );
  const _0x120563 = await _0x28c962.json();
  return _0x120563;
};
const jogadores = () => {
  sessionStorage.setItem("p\xE1gina", "jogadores");
  document.body.innerHTML = "";
  const _0x2c95bc = document.createElement("header");
  _0x2c95bc.style.backgroundColor = "grey";
  _0x2c95bc.style.padding = ".5em 1em";
  _0x2c95bc.style.position = "relative";
  _0x2c95bc.style.display = "flex";
  _0x2c95bc.style.flexDirection = "row";
  const _0x3bf1d1 = document.createElement("h1");
  _0x3bf1d1.style.color = "white";
  _0x3bf1d1.innerHTML = "Atletas Botafogo 2023-2";
  _0x3bf1d1.style.margin = 0;
  _0x3bf1d1.style.flexGrow = 1;
  _0x2c95bc.appendChild(_0x3bf1d1);
  const _0x51e6bd = document.createElement("button");
  _0x51e6bd.innerText = "Sair";
  configura_botao(_0x51e6bd);
  _0x51e6bd.onclick = () => {
    sessionStorage.removeItem("token");
    window.location = "/";
  };
  _0x2c95bc.appendChild(_0x51e6bd);
  document.body.appendChild(_0x2c95bc);
  const _0x36111a = document.createElement("div");
  _0x36111a.id = "barra-escolhas";
  _0x36111a.style.display = "flex";
  _0x36111a.style.flexDirection = "row";
  _0x36111a.style.justifyContent = "center";
  _0x36111a.style.gap = "2em";
  _0x36111a.style.margin = "2em 0 3em 0";
  const _0x53b340 = {
    titulo: "Masculino",
    caminho: "masculino",
  };
  const _0x4e00fb = {
    titulo: "Feminino",
    caminho: "feminino",
  };
  const _0x37475a = {
    titulo: "Elenco Completo",
    caminho: "all",
  };
  const _0x36668b = [_0x53b340, _0x4e00fb, _0x37475a];
  const _0x35a3e4 = document.createElement("select");
  _0x35a3e4.id = "select-plantel";
  _0x35a3e4.style.backgroundColor = "black";
  _0x35a3e4.style.border = "none";
  _0x35a3e4.style.color = "white";
  _0x35a3e4.style.textAlign = "center";
  _0x35a3e4.style.textDecoration = "none";
  _0x35a3e4.style.padding = "1em 1.5em";
  _0x35a3e4.style.display = "block";
  _0x35a3e4.style.margin = "1em auto";
  _0x35a3e4.onchange = (_0x52d83e) => {
    handleElenco(_0x52d83e.target.value);
  };
  _0x35a3e4.style.fontSize = "larger";
  const _0x59c959 = document.createElement("option");
  _0x59c959.value = "";
  _0x59c959.disabled = true;
  _0x59c959.selected = true;
  _0x59c959.innerHTML = "Escolha o elenco";
  _0x35a3e4.appendChild(_0x59c959);
  for (const _0x83110c of _0x36668b) {
    const _0x9d67cf = document.createElement("button");
    _0x9d67cf.innerText = _0x83110c.titulo;
    _0x9d67cf.value = _0x83110c.caminho;
    _0x9d67cf.onclick = (_0x5da9d9) => {
      handleElenco(_0x5da9d9.target.value);
    };
    configura_botao(_0x9d67cf);
    _0x9d67cf.style.fontSize = "1.3em";
    _0x9d67cf.style.maxWidth = "6em";
    _0x36111a.appendChild(_0x9d67cf);
    const _0x212073 = document.createElement("option");
    _0x212073.innerHTML = _0x83110c.titulo;
    _0x212073.value = _0x83110c.caminho;
    _0x35a3e4.appendChild(_0x212073);
  }
  document.body.appendChild(_0x36111a);
  document.body.appendChild(_0x35a3e4);
  const _0x35c10c = document.createElement("div");
  _0x35c10c.id = "container-jogadores";
  _0x35c10c.style.display = "grid";
  _0x35c10c.style.gap = "1em";
  _0x35c10c.style.maxWidth = "1200px";
  _0x35c10c.style.margin = "auto";
  const _0x2db2e9 = document.createElement("h2");
  _0x2db2e9.id = "texto-espera";
  _0x2db2e9.style.animation = "blink 1s ease-out infinite";
  _0x2db2e9.style.display = "none";
  _0x2db2e9.style.margin = "auto";
  _0x2db2e9.style.width = "min-content";
  _0x2db2e9.innerHTML = "Carregando...";
  document.body.appendChild(_0x2db2e9);
  document.body.appendChild(_0x35c10c);
};
const configura_jogadores = (_0x2374f9) => {
  const _0x2e97b8 = document.getElementById("select-plantel");
  const _0x37f81a = document.getElementById("barra-escolhas");
  const _0x4333e3 = document.getElementById("container-jogadores");
  switch (_0x2374f9) {
    case "celular":
      _0x2e97b8.style.display = "block";
      _0x37f81a.style.display = "none";
      _0x4333e3.style.gridTemplateColumns = "1fr";
      break;
    case "tablet":
      _0x4333e3.style.gridTemplateColumns = "1fr 1fr";
      _0x2e97b8.style.display = "none";
      _0x37f81a.style.display = "flex";
      break;
    case "desktop":
      _0x2e97b8.style.display = "none";
      _0x37f81a.style.display = "flex";
      _0x4333e3.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
      break;
  }
};
const handleElenco = (_0x5c5650) => {
  const _0x1afb93 = document.getElementById("texto-espera");
  const _0x238eb5 = document.getElementById("container-jogadores");
  _0x1afb93.style.display = "grid";
  _0x238eb5.style.display = "none";
  pega_elenco(_0x5c5650).then((_0x117312) => {
    mostra_atletas(_0x117312, _0x238eb5);
    _0x238eb5.style.display = "grid";
    _0x1afb93.style.display = "none";
  });
};


const mostra_atletas = (_0xadbb15, _0x24f776) => {
  const _0x22f281 = {
    kXarw: "article",
  };
  _0x22f281.SkJlG = "selecionado atleta com id ";
  _0x22f281.wcwRI = "img";
  _0x22f281.INxpS = "-2em";
  _0x22f281.SwBEv = ".5em";
  _0x22f281.JCuKi = "Saiba mais";
  _0x22f281.rhBvj = "relative";
  _0x22f281.piOcx = "gold";
  _0x22f281.FJAzn = "auto";
  _0x22f281.jkAVN = "center";
  _0x22f281.KLHqB = "grey";
  _0x22f281.MsCdB = "pointer";
  _0x24f776.innerHTML = "";
  for (const _0x1079be of _0xadbb15) {
    const _0x4a53b5 = document.createElement("article");
    const _0x790c4e = document.createElement(_0x22f281.wcwRI);
    _0x790c4e.src = _0x1079be.imagem;
    _0x790c4e.alt =
      "Imagem de " +
      _0x1079be.nome_completo +
      ", atleta de futebol do Botafogo.";
    const _0x28bb64 = document.createElement("h2");
    _0x28bb64.innerHTML = _0x1079be.nome;
    _0x28bb64.style.marginTop = _0x22f281.INxpS;
    const _0x216146 = document.createElement("h3");
    _0x216146.style.padding = _0x22f281.SwBEv;
    _0x216146.innerHTML = _0x22f281.JCuKi;
    _0x216146.style.position = _0x22f281.rhBvj;
    _0x216146.style.top = "-2.3em";
    _0x216146.style.backgroundColor = _0x22f281.piOcx;
    _0x4a53b5.dataset.id = _0x1079be.id;
    _0x4a53b5.style.width = "min-content";
    _0x4a53b5.style.margin = _0x22f281.FJAzn;
    _0x4a53b5.style.textAlign = _0x22f281.jkAVN;
    _0x4a53b5.style.backgroundColor = _0x22f281.KLHqB;
    _0x4a53b5.style.padding = _0x22f281.SwBEv;
    _0x4a53b5.style.cursor = _0x22f281.MsCdB;
    _0x4a53b5.onclick = (_0xa12e8b) => {
      const _0x493073 = _0xa12e8b.target.closest("article").dataset.id;
      console.log(_0x22f281.SkJlG, _0x493073);
      window.location = "detalhes.html?id=" + _0x493073;
    };
    _0x4a53b5.appendChild(_0x790c4e);
    _0x4a53b5.appendChild(_0x216146);
    _0x4a53b5.appendChild(_0x28bb64);
    _0x24f776.appendChild(_0x4a53b5);
  }
};
const tabletSize = 768;
const desktopSize = 1024;
const larguraTablet = window.matchMedia("(min-width: 768px)");
const larguraDesktop = window.matchMedia("(min-width: 1024px)");
function handleTablet(_0x29708e) {
  if (_0x29708e.matches) {
    console.log("tablet-alto", window.visualViewport.width);
    if (sessionStorage.getItem("página") === "entrada") {
      configura_entrada("tablet");
    } else {
      configura_jogadores("tablet");
    }
  } else {
    console.log("celular", window.visualViewport.width);
    if (sessionStorage.getItem("p\xE1gina") === "entrada") {
      configura_entrada("celular");
    } else {
      configura_jogadores("celular");
    }
  }
}
function handleDesktop(_0x36d65e) {
  if (_0x36d65e.matches) {
    console.log("desktop", window.visualViewport.width);
    if (sessionStorage.getItem("p\xE1gina") === "entrada") {
      configura_entrada("desktop");
    } else {
      configura_jogadores("desktop");
    }
  } else {
    if (window.visualViewport.width >= 768) {
      console.log("tablet2", window.visualViewport.width);
      if (sessionStorage.getItem("p\xE1gina") === "entrada") {
        configura_entrada("tablet");
      } else {
        configura_jogadores("tablet");
      }
    }
  }
}
function _0x1b39() {
  const _0x38cea0 = [
    "setItem",
    "800px",
    "cursor",
    "IHKMX",
    "Etaya",
    "all",
    "KHvVR",
    "matches",
    "Sair",
    "px)",
    "HKLdh",
    "MhjEx",
    "appendChil",
    "Senha inco",
    "tablet",
    "column",
    "FJAzn",
    "RBKEv",
    "RSast",
    "-2.3em",
    "teColumns",
    "hSGOB",
    "nome",
    "NveeU",
    "ZmXpt",
    "AxzlN",
    "text",
    "WeoRH",
    "piOcx",
    "src",
    ".5em",
    "#fake-form",
    "RXAko",
    "raUHA",
    "bHycP",
    "página",
    "XIgcn",
    "ZdBBq",
    "disabled",
    "white",
    "6|3",
    "YfNkP",
    "sdEWu",
    "{}.constru",
    "JdRgJ",
    "nZXBe",
    "return (fu",
    "IycpC",
    "QLbgD",
    "Criado com",
    "fontSize",
    "auto",
    "rOYxs",
    "vgYCu",
    "INxpS",
    "DnICr",
    "desktop",
    "mOxnd",
    "HwjXc",
    "pYybt",
    "block",
    "target",
    "tor",
    "margin",
    "(min-width",
    "ZydWl",
    "tent",
    "zxrMh",
    "titulo",
    "div",
    "dataset",
    "SkJlG",
    "flexDirect",
    "rNYDh",
    "FTQJu",
    "vZfCC",
    "article",
    "11HgPRrs",
    "createElem",
    "LpfjV",
    "Sdbca",
    "gold",
    "qjtrz",
    "TjXRN",
    "masculino",
    "WEdGh",
    "innerHTML",
    " Botafogo ",
    "entrada-se",
    "GChcu",
    "width",
    "selected",
    "token",
    "SwBEv",
    " SENHA\n  ",
    "none",
    "mente did\xE1",
    "tLKDT",
    "fmiKb",
    "xkrso",
    "MVWwk",
    "55a9af2657",
    "byPzX",
    "nFrRU",
    "row",
    "cEuEr",
    "lGGep",
    "nRlfm",
    "log",
    "DkoDg",
    "ovKKa",
    "flexGrow",
    "glCvw",
    "e login co",
    "53088980XDYLUX",
    "RkGtO",
    "DpWvK",
    "eto",
    "trKvB",
    "ZicDP",
    "getElement",
    "prototype",
    "UVUaw",
    "uTyVY",
    "e futebol ",
    ".li",
    "flex",
    "plAsf",
    "oDFCI",
    "-2em",
    "ent",
    "yenJn",
    "FkFIR",
    "body",
    "feminino",
    "avaOZ",
    "constructo",
    "dSVoP",
    "qVbME",
    "nction() ",
    "Escolha o ",
    "TTfXn",
    "apply",
    "hlNjW",
    ".5em 1em",
    "GCxiT",
    "oAVzk",
    "QyZPF",
    "SfsPz",
    "ZgLXb",
    "top",
    "elenco",
    'rn this")(',
    "border",
    "position",
    "sfNUr",
    "type",
    "port",
    "Carregando",
    "dEYNT",
    "jusStifyCon",
    ", atleta d",
    "aYbjP",
    "tablet-alt",
    "MAkVf",
    "r 1fr",
    "EHrXP",
    "then",
    "animation",
    "gBPXh",
    "NCUfv",
    "cRTzD",
    "kXarw",
    "jxUAw",
    "marginTop",
    "GLwon",
    "daeTi",
    "3-2",
    "value",
    "tml?id=",
    "GSaZz",
    "ZfVcT",
    "HWgFN",
    "unset",
    "ec Rio.",
    "cjnVg",
    "finite",
    "om id ",
    "UtGga",
    "VQxAg",
    "min-conten",
    "uLbll",
    "selecionad",
    "UQXwe",
    "ZAqPB",
    "o atleta c",
    "1fr 1fr 1f",
    "onclick",
    "HjNDE",
    "center",
    "aLsqR",
    " a discipl",
    "kMTeh",
    "85ee0fe4f1",
    "UOBXy",
    "closest",
    "textDecora",
    "ZXbSb",
    "select",
    "5EAQttp",
    "EHDFd",
    "Entrar",
    "Color",
    "__proto__",
    "toString",
    "xxjwt",
    "nha",
    "oScFV",
    "ById",
    "nkPTF",
    "xCHzn",
    "2em 0 3em ",
    "visualView",
    "MsCdB",
    " exclusiva",
    "20em",
    "Informe a ",
    "JCuKi",
    "2em",
    "etas.mange",
    "mQXjV",
    "hiVcJ",
    " objetivos",
    "10uqwYEc",
    "6em",
    "caminho",
    "ase-out in",
    "zykyg",
    "tafogo 202",
    "img",
    "kCORZ",
    "input",
    "container-",
    "NxAZc",
    "IztTG",
    "KfthB",
    "rhBvj",
    "KXOhA",
    "SWdij",
    "blink 1s e",
    "pLJjT",
    "REiWU",
    "table",
    "2258046UqRZAi",
    "1200px",
    "larger",
    "stener",
    "zRIqd",
    "querySelec",
    "REKGO",
    "bind",
    "location",
    "innerText",
    "SpGDJ",
    "fake-form",
    "background",
    "-entrada >",
    "JvKPr",
    ".3em",
    "exception",
    "removeItem",
    "matchMedia",
    "HlAhS",
    "console",
    "llnWh",
    "gridTempla",
    "RlCOI",
    "senha.",
    "DmKwk",
    "\n    Efetu",
    "7114864ZAWvrB",
    "JXrYd",
    "ion",
    "XwPUi",
    "BvCCn",
    "yHJJX",
    "1em",
    "jNASy",
    "dZzDq",
    "textAlign",
    "imESf",
    "JPtxj",
    "button",
    "LDcim",
    "GjcBc",
    "tion",
    "getItem",
    "wcwRI",
    "ina Desenv",
    "1|5|0|4|2|",
    "xIaOI",
    "pbQac",
    "1fr",
    "pmWkH",
    "imagem",
    "UnCoQ",
    "search",
    "info",
    "Djgar",
    "color",
    "tafogo-atl",
    "1em 1.5em",
    "rfYUL",
    "gouXz",
    "detalhes.h",
    "padding",
    "minWidth",
    "WTEHB",
    "texto-espe",
    "SAqMA",
    "wRbUV",
    "length",
    "3834210tTGoJR",
    "tnJGv",
    "XFwft",
    "lsXYb",
    "AcpGN",
    "HSMJF",
    "celular",
    "option",
    "sOjcy",
    "1em auto",
    "style",
    "ticos para",
    "pointer",
    'ctor("retu',
    "jkAVN",
    "barra-esco",
    "...",
    "8px",
    "112616UfQOmw",
    "relative",
    "Feminino",
    "cRJwy",
    "huUBw",
    "maxWidth",
    "hild(1) p",
    "mEHpP",
    "Web do Ibm",
    "lhas",
    "KWlqf",
    "lcoYU",
    " div:nth-c",
    "Atletas do",
    "hmGRi",
    "ntel",
    "DxSge",
    "gap",
    "json",
    "(((.+)+)+)",
    "DmQmj",
    "#container",
    "DYHTv",
    "IOBdn",
    "m a senha:",
    "ubUai",
    "onchange",
    "placeholde",
    "XiCul",
    "piJaV",
    "VdsSx",
    "DQNbH",
    "KLHqB",
    "KDdgQ",
    "trace",
    "sbacM",
    "yAKmP",
    "grey",
    "YyyRp",
    "264525VyVbSM",
    "kjtqu",
    "gozQJ",
    "eoUvu",
    "XbERh",
    "black",
    "warn",
    "display",
    "7RDUtAf",
    "100vh",
    "JKhTh",
    "rFJgq",
    "grid",
    "LpWVy",
    "OkQEf",
    "pxKjj",
    "8253522lmmweM",
    "entrada",
    "HcbcS",
  ];
  _0x1b39 = function () {
    return _0x38cea0;
  };
  return _0x1b39();
}
larguraTablet.addEventListener("change", handleTablet);
larguraDesktop.addEventListener("change", handleDesktop);
window.onload = () => {
  if (sessionStorage.getItem("token")) {
    jogadores();
  } else {
    entrada();
  }
  handleTablet(larguraTablet);
  handleDesktop(larguraDesktop);
};
