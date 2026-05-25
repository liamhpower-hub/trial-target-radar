const API_BASE = "https://clinicaltrials.gov/api/v2";
const STORAGE_KEY = "trial-target-radar-targets-v1";
const DEFAULT_FETCH_LIMIT = 10;

const defaultTargets = [
  {
    id: "kras-g12c",
    name: "KRAS G12C",
    disease: "non-small cell lung cancer",
    stocks: ["AMGN", "BMY", "LLY", "MRK"],
    keywords: ["KRAS G12C", "sotorasib", "adagrasib", "olomorasib"],
  },
  {
    id: "her2",
    name: "HER2",
    disease: "breast cancer",
    stocks: ["AZN", "Daiichi Sankyo", "PFE", "RHHBY"],
    keywords: ["HER2", "ERBB2", "trastuzumab", "datopotamab"],
  },
  {
    id: "trop2",
    name: "TROP2",
    disease: "breast cancer",
    stocks: ["GILD", "AZN", "Daiichi Sankyo", "MRK"],
    keywords: ["TROP2", "TACSTD2", "sacituzumab", "datopotamab"],
  },
  {
    id: "bcma",
    name: "BCMA",
    disease: "multiple myeloma",
    stocks: ["JNJ", "BMY", "GSK", "NVS"],
    keywords: ["BCMA", "TNFRSF17", "teclistamab", "idecabtagene"],
  },
  {
    id: "claudin-18-2",
    name: "Claudin 18.2",
    disease: "gastric cancer",
    stocks: ["Astellas", "BMY", "AZN", "GILD"],
    keywords: ["Claudin 18.2", "CLDN18.2", "zolbetuximab"],
  },
  {
    id: "egfr-exon20",
    name: "EGFR exon 20",
    disease: "non-small cell lung cancer",
    stocks: ["JNJ", "TAK", "MRK"],
    keywords: ["EGFR exon 20", "amivantamab", "mobocertinib"],
  },
  {
    id: "psma",
    name: "PSMA",
    disease: "prostate cancer",
    stocks: ["NVS", "LLY", "BMY"],
    keywords: ["PSMA", "prostate specific membrane antigen", "lutetium"],
  },
  {
    id: "glp1",
    name: "GLP-1 receptor",
    disease: "obesity",
    stocks: ["LLY", "NVO", "PFE", "AMGN"],
    keywords: ["GLP-1", "semaglutide", "tirzepatide", "retatrutide"],
  },
  {
    id: "il23",
    name: "IL-23",
    disease: "Crohn disease",
    stocks: ["JNJ", "ABBV", "MRK", "LLY"],
    keywords: ["IL-23", "interleukin-23", "risankizumab", "guselkumab"],
  },
  {
    id: "amyloid-beta",
    name: "Amyloid beta",
    disease: "Alzheimer disease",
    stocks: ["BIIB", "ESALY", "LLY"],
    keywords: ["amyloid beta", "lecanemab", "donanemab", "Abeta"],
  },
  {
    id: "pd-1-pd-l1",
    name: "PD-1 / PD-L1",
    disease: "solid tumor",
    stocks: ["MRK", "BMY", "AZN", "RHHBY", "REGN"],
    keywords: ["PD-1", "PD-L1", "pembrolizumab", "nivolumab", "durvalumab", "atezolizumab"],
  },
  {
    id: "ctla-4",
    name: "CTLA-4",
    disease: "melanoma",
    stocks: ["BMY", "AZN", "MRK"],
    keywords: ["CTLA-4", "ipilimumab", "tremelimumab"],
  },
  {
    id: "cd19",
    name: "CD19",
    disease: "B-cell lymphoma",
    stocks: ["NVS", "GILD", "BMY", "AUTL"],
    keywords: ["CD19", "tisagenlecleucel", "axicabtagene", "lisocabtagene", "CAR-T"],
  },
  {
    id: "cd20",
    name: "CD20",
    disease: "B-cell lymphoma",
    stocks: ["RHHBY", "ABBV", "REGN", "GILD"],
    keywords: ["CD20", "rituximab", "glofitamab", "epcoritamab", "odronextamab"],
  },
  {
    id: "cd3-bispecific",
    name: "CD3 bispecifics",
    disease: "hematologic malignancy",
    stocks: ["RHHBY", "REGN", "JNJ", "ABBV"],
    keywords: ["CD3", "bispecific", "T-cell engager", "teclistamab", "glofitamab"],
  },
  {
    id: "fgfr",
    name: "FGFR",
    disease: "cholangiocarcinoma",
    stocks: ["INCY", "JNJ", "AZN", "BMY"],
    keywords: ["FGFR", "FGFR2", "FGFR3", "pemigatinib", "erdafitinib"],
  },
  {
    id: "met",
    name: "MET",
    disease: "non-small cell lung cancer",
    stocks: ["NVS", "MRK", "AZN", "RHHBY"],
    keywords: ["MET", "c-MET", "capmatinib", "tepotinib", "savolitinib"],
  },
  {
    id: "ret",
    name: "RET",
    disease: "non-small cell lung cancer",
    stocks: ["LLY", "RHHBY", "MRK"],
    keywords: ["RET", "selpercatinib", "pralsetinib"],
  },
  {
    id: "braf",
    name: "BRAF",
    disease: "melanoma",
    stocks: ["NVS", "PFE", "RHHBY"],
    keywords: ["BRAF", "vemurafenib", "dabrafenib", "encorafenib"],
  },
  {
    id: "pi3k-akt-mtor",
    name: "PI3K / AKT / mTOR",
    disease: "breast cancer",
    stocks: ["NVS", "AZN", "RHHBY", "GILD"],
    keywords: ["PI3K", "AKT", "mTOR", "alpelisib", "capivasertib", "ipatasertib"],
  },
  {
    id: "parp",
    name: "PARP",
    disease: "ovarian cancer",
    stocks: ["AZN", "MRK", "GSK", "PFE"],
    keywords: ["PARP", "olaparib", "niraparib", "rucaparib", "talazoparib"],
  },
  {
    id: "cdk4-6",
    name: "CDK4/6",
    disease: "breast cancer",
    stocks: ["PFE", "LLY", "NVS", "GILD"],
    keywords: ["CDK4/6", "CDK4", "CDK6", "palbociclib", "abemaciclib", "ribociclib"],
  },
  {
    id: "bcl2",
    name: "BCL-2",
    disease: "acute myeloid leukemia",
    stocks: ["ABBV", "RHHBY", "AZN"],
    keywords: ["BCL-2", "BCL2", "venetoclax", "navitoclax"],
  },
  {
    id: "menin",
    name: "Menin",
    disease: "acute myeloid leukemia",
    stocks: ["SNDX", "JNJ", "KURA"],
    keywords: ["menin", "revumenib", "ziftomenib", "KMT2A", "NPM1"],
  },
  {
    id: "idh1-idh2",
    name: "IDH1 / IDH2",
    disease: "acute myeloid leukemia",
    stocks: ["BMY", "SERVIER", "BAYRY"],
    keywords: ["IDH1", "IDH2", "ivosidenib", "enasidenib", "vorasidenib"],
  },
  {
    id: "flt3",
    name: "FLT3",
    disease: "acute myeloid leukemia",
    stocks: ["Astellas", "NVS", "Daiichi Sankyo"],
    keywords: ["FLT3", "gilteritinib", "quizartinib", "midostaurin"],
  },
  {
    id: "jak",
    name: "JAK",
    disease: "myelofibrosis",
    stocks: ["INCY", "NVS", "BMY", "PFE"],
    keywords: ["JAK", "JAK1", "JAK2", "ruxolitinib", "fedratinib", "momelotinib"],
  },
  {
    id: "complement-c5",
    name: "Complement C5",
    disease: "paroxysmal nocturnal hemoglobinuria",
    stocks: ["AZN", "RHHBY", "REGN"],
    keywords: ["C5", "complement C5", "eculizumab", "ravulizumab", "crovalimab"],
  },
  {
    id: "factor-xi",
    name: "Factor XI / XIa",
    disease: "thrombosis",
    stocks: ["BMY", "BAYRY", "JNJ", "MRK"],
    keywords: ["Factor XI", "Factor XIa", "milvexian", "asundexian", "abelacimab"],
  },
  {
    id: "pcsk9",
    name: "PCSK9",
    disease: "hypercholesterolemia",
    stocks: ["AMGN", "REGN", "NVS", "MRK"],
    keywords: ["PCSK9", "evolocumab", "alirocumab", "inclisiran"],
  },
  {
    id: "apoc3",
    name: "APOC3",
    disease: "hypertriglyceridemia",
    stocks: ["IONS", "NVS", "REGN"],
    keywords: ["APOC3", "APOC-III", "olezarsen", "volanesorsen"],
  },
  {
    id: "lpa",
    name: "Lp(a)",
    disease: "cardiovascular disease",
    stocks: ["NVS", "AMGN", "LLY", "MRK"],
    keywords: ["Lp(a)", "lipoprotein(a)", "pelacarsen", "olpasiran", "lepodisiran"],
  },
  {
    id: "nash-thr-beta",
    name: "THR-beta",
    disease: "MASH",
    stocks: ["MDGL", "VKTX", "NVO"],
    keywords: ["THR-beta", "thyroid hormone receptor beta", "resmetirom", "MASH", "NASH"],
  },
  {
    id: "fgf21",
    name: "FGF21",
    disease: "MASH",
    stocks: ["AKRO", "89BIO", "BMY"],
    keywords: ["FGF21", "efruxifermin", "pegozafermin"],
  },
  {
    id: "tnf-alpha",
    name: "TNF-alpha",
    disease: "rheumatoid arthritis",
    stocks: ["ABBV", "JNJ", "PFE", "AMGN"],
    keywords: ["TNF", "TNF-alpha", "adalimumab", "infliximab", "etanercept"],
  },
  {
    id: "il17",
    name: "IL-17",
    disease: "psoriasis",
    stocks: ["NVS", "LLY", "UCB"],
    keywords: ["IL-17", "interleukin-17", "secukinumab", "ixekizumab", "bimekizumab"],
  },
  {
    id: "il4-il13",
    name: "IL-4 / IL-13",
    disease: "atopic dermatitis",
    stocks: ["REGN", "SNY", "LLY", "AMGN"],
    keywords: ["IL-4", "IL-13", "dupilumab", "lebrikizumab", "tralokinumab"],
  },
  {
    id: "tslp",
    name: "TSLP",
    disease: "asthma",
    stocks: ["AZN", "AMGN", "GSK"],
    keywords: ["TSLP", "tezepelumab", "thymic stromal lymphopoietin"],
  },
  {
    id: "pcsk9-gene-editing",
    name: "PCSK9 gene editing",
    disease: "hypercholesterolemia",
    stocks: ["VERV", "BEAM", "REGN"],
    keywords: ["PCSK9", "gene editing", "base editing", "VERVE"],
  },
  {
    id: "sma-smn2",
    name: "SMN2",
    disease: "spinal muscular atrophy",
    stocks: ["BIIB", "NVS", "RHHBY"],
    keywords: ["SMN2", "spinal muscular atrophy", "nusinersen", "risdiplam", "onasemnogene"],
  },
  {
    id: "huntingtin",
    name: "Huntingtin",
    disease: "Huntington disease",
    stocks: ["RHHBY", "NVS", "IONS", "PTCT"],
    keywords: ["huntingtin", "HTT", "tominersen", "Huntington"],
  },
  {
    id: "alpha-synuclein",
    name: "Alpha-synuclein",
    disease: "Parkinson disease",
    stocks: ["RHHBY", "BIIB", "MRK", "NVO"],
    keywords: ["alpha-synuclein", "synuclein", "Parkinson"],
  },
  {
    id: "tau",
    name: "Tau",
    disease: "Alzheimer disease",
    stocks: ["BIIB", "LLY", "RHHBY", "JNJ"],
    keywords: ["tau", "anti-tau", "MAPT"],
  },
  {
    id: "cd47",
    name: "CD47",
    disease: "myelodysplastic syndrome",
    stocks: ["GILD", "ALX", "ABBV", "PFIZER"],
    keywords: ["CD47", "magrolimab", "evorpacept", "SIRP"],
  },
  {
    id: "nectin4",
    name: "Nectin-4",
    disease: "urothelial cancer",
    stocks: ["PFE", "Astellas", "MRK"],
    keywords: ["Nectin-4", "nectin 4", "enfortumab"],
  },
  {
    id: "fr-alpha",
    name: "Folate receptor alpha",
    disease: "ovarian cancer",
    stocks: ["ABBV", "IMGN", "BMY"],
    keywords: ["folate receptor alpha", "FRalpha", "mirvetuximab"],
  },
  {
    id: "dll3",
    name: "DLL3",
    disease: "small cell lung cancer",
    stocks: ["AMGN", "BIIB", "MRK"],
    keywords: ["DLL3", "tarlatamab", "delta-like ligand 3"],
  },
  {
    id: "b7-h3",
    name: "B7-H3",
    disease: "solid tumor",
    stocks: ["Daiichi Sankyo", "MRK", "GSK", "BMY"],
    keywords: ["B7-H3", "CD276", "ifinatamab", "enoblituzumab"],
  },
  {
    id: "gpcr-glp1-gip-glucagon",
    name: "GLP-1 / GIP / glucagon",
    disease: "obesity",
    stocks: ["LLY", "NVO", "AMGN", "VKTX"],
    keywords: ["GLP-1", "GIP", "glucagon", "tirzepatide", "retatrutide", "cagrisema"],
  },
];

const sponsorTickerMap = [
  ["Amgen", "AMGN"],
  ["AstraZeneca", "AZN"],
  ["Bristol-Myers", "BMY"],
  ["Bristol Myers", "BMY"],
  ["Daiichi", "Daiichi Sankyo"],
  ["Eli Lilly", "LLY"],
  ["Genentech", "RHHBY"],
  ["Gilead", "GILD"],
  ["GlaxoSmithKline", "GSK"],
  ["Johnson & Johnson", "JNJ"],
  ["Janssen", "JNJ"],
  ["Merck", "MRK"],
  ["Novartis", "NVS"],
  ["Novo Nordisk", "NVO"],
  ["Pfizer", "PFE"],
  ["Roche", "RHHBY"],
  ["Takeda", "TAK"],
  ["AbbVie", "ABBV"],
  ["Biogen", "BIIB"],
  ["Eisai", "ESALY"],
  ["Astellas", "Astellas"],
];

const therapyRules = [
  {
    id: "cell-gene",
    label: "Gene or cell therapy",
    keywords: [
      "car-t",
      "cart",
      "car t",
      "tcr",
      "cell therapy",
      "cellular therapy",
      "stem cell",
      "nk cell",
      "gene therapy",
      "aav",
      "lentiviral",
      "crispr",
      "autologous",
      "allogeneic",
    ],
    interventionTypes: ["GENETIC"],
  },
  {
    id: "antibody",
    label: "Antibody / ADC",
    keywords: [
      "antibody",
      "monoclonal",
      "mab",
      "adc",
      "antibody-drug conjugate",
      "bispecific",
      "trastuzumab",
      "amivantamab",
      "teclistamab",
      "sacituzumab",
      "datopotamab",
      "zolbetuximab",
    ],
    interventionTypes: [],
  },
  {
    id: "small-molecule",
    label: "Small molecule",
    keywords: [
      "inhibitor",
      "small molecule",
      "sotorasib",
      "adagrasib",
      "olomorasib",
      "garsorasib",
      "tirzepatide",
      "semaglutide",
      "retatrutide",
      "tinib",
    ],
    interventionTypes: ["DRUG"],
  },
];

const phaseColors = ["#0f766e", "#2563eb", "#b7791f", "#be3455", "#64748b"];
let targets = loadTargets();
let focusedTargetId = "";
let latestResults = [];

const els = {
  sourceStatus: document.getElementById("sourceStatus"),
  sourceLabel: document.getElementById("sourceLabel"),
  sourceMeta: document.getElementById("sourceMeta"),
  diseaseInput: document.getElementById("diseaseInput"),
  clearDisease: document.getElementById("clearDisease"),
  targetSearch: document.getElementById("targetSearch"),
  targetCount: document.getElementById("targetCount"),
  targetFocusHint: document.getElementById("targetFocusHint"),
  targetList: document.getElementById("targetList"),
  clearTargetFocus: document.getElementById("clearTargetFocus"),
  statusFilter: document.getElementById("statusFilter"),
  phaseFilter: document.getElementById("phaseFilter"),
  therapyFilter: document.getElementById("therapyFilter"),
  sourceFilter: document.getElementById("sourceFilter"),
  customTarget: document.getElementById("customTarget"),
  customDisease: document.getElementById("customDisease"),
  customStocks: document.getElementById("customStocks"),
  addTarget: document.getElementById("addTarget"),
  refreshButton: document.getElementById("refreshButton"),
  loadingState: document.getElementById("loadingState"),
  cards: document.getElementById("cards"),
  timeline: document.getElementById("timeline"),
  activityChart: document.getElementById("activityChart"),
  phaseChart: document.getElementById("phaseChart"),
  totalTrials: document.getElementById("totalTrials"),
  recruitingCount: document.getElementById("recruitingCount"),
  stockCount: document.getElementById("stockCount"),
  nextUpdate: document.getElementById("nextUpdate"),
  template: document.getElementById("targetCardTemplate"),
};

function loadTargets() {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
  const merged = [...defaultTargets, ...saved];
  return dedupeBy(merged, "id");
}

function dedupeBy(items, key) {
  const seen = new Set();
  return items.filter((item) => {
    if (seen.has(item[key])) return false;
    seen.add(item[key]);
    return true;
  });
}

function init() {
  renderTargetList();
  bindEvents();
  checkSourceVersion();
  refresh();
}

function bindEvents() {
  els.targetSearch.addEventListener("input", renderTargetList);
  els.clearTargetFocus.addEventListener("click", () => {
    focusedTargetId = "";
    renderTargetList();
    refresh();
  });
  els.clearDisease.addEventListener("click", () => {
    els.diseaseInput.value = "";
    refresh();
  });
  els.diseaseInput.addEventListener("change", refresh);
  els.statusFilter.addEventListener("change", refresh);
  els.phaseFilter.addEventListener("change", renderDashboard);
  els.therapyFilter.addEventListener("change", renderDashboard);
  els.sourceFilter.addEventListener("change", refresh);
  els.refreshButton.addEventListener("click", refresh);
  els.addTarget.addEventListener("click", addCustomTarget);
}

function renderTargetList() {
  const query = els.targetSearch.value.trim().toLowerCase();
  const filteredTargets = targets.filter((target) => `${target.name} ${target.disease} ${target.stocks.join(" ")}`.toLowerCase().includes(query));
  els.targetCount.textContent = `${filteredTargets.length} of ${targets.length}`;
  const focusedTarget = getFocusedTarget();
  els.clearTargetFocus.disabled = !focusedTarget;
  els.targetFocusHint.textContent = focusedTarget
    ? `Focused on ${focusedTarget.name}. Clear focus to return to the landscape view.`
    : `Landscape view fetches the first ${DEFAULT_FETCH_LIMIT} targets by default. Click any target to explore it.`;
  els.targetList.innerHTML = "";
  filteredTargets.forEach((target) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `target-option${focusedTargetId === target.id ? " active" : ""}`;
    button.innerHTML = `
      <span class="target-name">${escapeHtml(target.name)}</span>
      <small>${escapeHtml(target.disease)} - ${escapeHtml(target.stocks.join(", "))}</small>
    `;
    button.addEventListener("click", () => {
      focusedTargetId = focusedTargetId === target.id ? "" : target.id;
      renderTargetList();
      refresh();
    });
    els.targetList.appendChild(button);
  });
}

function addCustomTarget() {
  const name = els.customTarget.value.trim();
  if (!name) return;
  const disease = els.customDisease.value.trim() || els.diseaseInput.value.trim() || "custom disease";
  const stocks = els.customStocks.value
    .split(",")
    .map((stock) => stock.trim())
    .filter(Boolean);
  const target = {
    id: slugify(name),
    name,
    disease,
    stocks,
    keywords: [name],
  };
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]").filter((item) => item.id !== target.id);
  saved.push(target);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
  targets = loadTargets();
  focusedTargetId = target.id;
  els.customTarget.value = "";
  els.customDisease.value = "";
  els.customStocks.value = "";
  renderTargetList();
  refresh();
}

async function checkSourceVersion() {
  try {
    const response = await fetch(`${API_BASE}/version`);
    if (!response.ok) throw new Error(`Source returned ${response.status}`);
    const version = await response.json();
    const stamp = version.dataTimestamp ? formatDate(version.dataTimestamp) : "timestamp unavailable";
    els.sourceStatus.className = "status-dot ok";
    els.sourceLabel.textContent = "ClinicalTrials.gov API connected";
    els.sourceMeta.textContent = `Data timestamp: ${stamp}. China registry follow-up links use ChiCTR.`;
  } catch (error) {
    els.sourceStatus.className = "status-dot error";
    els.sourceLabel.textContent = "ClinicalTrials.gov API unavailable";
    els.sourceMeta.textContent = "The dashboard will retry on refresh. Check network access or CORS restrictions.";
  }
}

async function refresh() {
  const activeTargets = getActiveTargets();
  if (!activeTargets.length) {
    latestResults = [];
    renderDashboard();
    return;
  }
  els.loadingState.textContent = "Fetching live trials";
  els.refreshButton.disabled = true;
  try {
    const results = await Promise.all(activeTargets.map(fetchTargetStudies));
    latestResults = results;
    renderDashboard();
    els.loadingState.textContent = `Updated ${new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })}`;
  } catch (error) {
    els.loadingState.textContent = "API fetch failed";
    latestResults = [];
    renderDashboard(error.message);
  } finally {
    els.refreshButton.disabled = false;
  }
}

function getFocusedTarget() {
  return focusedTargetId ? targets.find((target) => target.id === focusedTargetId) : null;
}

function getActiveTargets() {
  const focusedTarget = getFocusedTarget();
  if (focusedTarget) return [focusedTarget];
  return targets.slice(0, DEFAULT_FETCH_LIMIT);
}

async function fetchTargetStudies(target) {
  const disease = els.diseaseInput.value.trim() || target.disease;
  const query = [target.name, disease].filter(Boolean).join(" ");
  const sourceMode = els.sourceFilter.value;
  const params = new URLSearchParams({
    format: "json",
    pageSize: "25",
    "query.term": query,
  });
  if (sourceMode === "china") {
    params.set("query.locn", "China");
  }
  const response = await fetch(`${API_BASE}/studies?${params}`);
  if (!response.ok) throw new Error(`ClinicalTrials.gov returned ${response.status}`);
  const data = await response.json();
  let studies = (data.studies || [])
    .map((study) => normalizeStudy(study, target))
    .filter((study) => includeStudy(study, target));
  if (sourceMode === "global-china") {
    studies = studies.sort((a, b) => Number(b.hasChinaSite) - Number(a.hasChinaSite));
  }
  return {
    target,
    disease,
    sourceMode,
    totalCount: data.totalCount || studies.length,
    studies,
  };
}

function normalizeStudy(study, target) {
  const protocol = study.protocolSection || {};
  const id = protocol.identificationModule || {};
  const status = protocol.statusModule || {};
  const design = protocol.designModule || {};
  const conditions = protocol.conditionsModule || {};
  const arms = protocol.armsInterventionsModule || {};
  const sponsor = protocol.sponsorCollaboratorsModule || {};
  const sponsors = [
    sponsor.leadSponsor?.name,
    ...(sponsor.collaborators || []).map((item) => item.name),
  ].filter(Boolean);
  const interventionDetails = (arms.interventions || []).map((item) => ({
    name: item.name || "",
    type: item.type || "",
    text: [item.name, item.type, item.description, ...(item.otherNames || [])].filter(Boolean).join(" "),
  }));
  const interventions = interventionDetails.map((item) => item.text);
  const locations = (protocol.contactsLocationsModule?.locations || []).map((item) => [item.facility, item.city, item.state, item.country].filter(Boolean).join(", "));
  const searchable = [
    id.briefTitle,
    id.officialTitle,
    ...(conditions.conditions || []),
    ...interventions,
    ...sponsors,
    ...locations,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return {
    nctId: id.nctId,
    title: id.briefTitle || id.officialTitle || "Untitled study",
    status: status.overallStatus || "UNKNOWN",
    phases: design.phases || [],
    conditions: conditions.conditions || [],
    interventions: interventionDetails,
    therapyTypes: inferTherapyTypes(interventionDetails),
    sponsors,
    locations,
    hasChinaSite: locations.some((location) => location.toLowerCase().includes("china")),
    startDate: status.startDateStruct?.date || "",
    primaryCompletionDate: status.primaryCompletionDateStruct?.date || "",
    completionDate: status.completionDateStruct?.date || "",
    lastUpdatePostDate: status.lastUpdatePostDateStruct?.date || "",
    searchable,
    targetName: target.name,
    tickers: inferTickers(target, sponsors),
  };
}

function includeStudy(study, target) {
  const statusMode = els.statusFilter.value;
  if (statusMode === "active" && !["RECRUITING", "NOT_YET_RECRUITING"].includes(study.status)) return false;
  if (statusMode !== "active" && statusMode !== "all" && study.status !== statusMode) return false;
  const keywords = target.keywords.length ? target.keywords : [target.name];
  return keywords.some((keyword) => study.searchable.includes(keyword.toLowerCase()));
}

function inferTherapyTypes(interventions) {
  const text = interventions.map((item) => item.text).join(" ").toLowerCase();
  const types = interventions.map((item) => item.type.toUpperCase());
  const matches = therapyRules.filter((rule) => {
    const typeMatch = rule.interventionTypes.some((type) => types.includes(type));
    const keywordMatch = rule.keywords.some((keyword) => text.includes(keyword));
    return typeMatch || keywordMatch;
  });
  if (!matches.length) return [{ id: "other", label: "Other / unclear" }];
  if (matches.some((item) => item.id === "cell-gene")) {
    return matches.filter((item) => item.id !== "small-molecule");
  }
  if (matches.some((item) => item.id === "antibody")) {
    return matches.filter((item) => item.id !== "small-molecule");
  }
  return matches;
}

function inferTickers(target, sponsors) {
  const mapped = sponsors.flatMap((sponsor) =>
    sponsorTickerMap
      .filter(([name]) => sponsor.toLowerCase().includes(name.toLowerCase()))
      .map(([, ticker]) => ticker),
  );
  return [...new Set([...(target.stocks || []), ...mapped])];
}

function renderDashboard(errorMessage = "") {
  const filtered = latestResults.map((result) => ({
    ...result,
    studies: result.studies.filter((study) => {
      const phase = els.phaseFilter.value;
      const therapyType = els.therapyFilter.value;
      const phaseMatch = !phase || study.phases.includes(phase);
      const therapyMatch = !therapyType || study.therapyTypes.some((item) => item.id === therapyType);
      return phaseMatch && therapyMatch;
    }),
  }));
  renderMetrics(filtered);
  renderCards(filtered, errorMessage);
  renderActivityChart(filtered);
  renderPhaseChart(filtered);
  renderTimeline(filtered);
}

function renderMetrics(results) {
  const studies = results.flatMap((result) => result.studies);
  const uniqueStudies = new Set(studies.map((study) => study.nctId));
  const tickers = new Set(studies.flatMap((study) => study.tickers));
  const next = getUpcomingMilestones(studies)[0];
  els.totalTrials.textContent = uniqueStudies.size.toLocaleString();
  els.recruitingCount.textContent = studies.filter((study) => study.status === "RECRUITING").length.toLocaleString();
  els.stockCount.textContent = tickers.size.toLocaleString();
  els.nextUpdate.textContent = next ? formatShortDate(next.date) : "None";
}

function renderCards(results, errorMessage) {
  els.cards.innerHTML = "";
  if (errorMessage) {
    els.cards.innerHTML = `<div class="empty">${escapeHtml(errorMessage)}</div>`;
    return;
  }
  const active = results.filter((result) => result.studies.length);
  if (!active.length) {
    els.cards.innerHTML = '<div class="empty">No matching active studies found. Try broadening the disease, status, phase, or target filters.</div>';
    return;
  }
  const focusedTarget = getFocusedTarget();
  const visibleCards = focusedTarget ? active : active.slice(0, 4);
  visibleCards.forEach((result) => {
    const node = els.template.content.cloneNode(true);
    const card = node.querySelector(".target-card");
    card.querySelector("h3").textContent = result.target.name;
    card.querySelector(".subline").textContent = `${result.disease} - ${result.studies.length} shown from ${result.totalCount.toLocaleString()} API matches`;
    card.querySelector(".badge").textContent = result.studies[0]?.status.replaceAll("_", " ") || "WATCH";
    card.querySelector(".card-metrics").innerHTML = metricHtml(result.studies);
    card.querySelector(".stock-row").innerHTML = stockHtml(result.studies, result.target);
    card.querySelector(".study-list").innerHTML = chinaRegistryHtml(result.target, result.disease) + result.studies.slice(0, 4).map(studyHtml).join("");
    els.cards.appendChild(node);
  });
  if (!focusedTarget && active.length > visibleCards.length) {
    const prompt = document.createElement("div");
    prompt.className = "empty";
    prompt.textContent = `Showing top ${visibleCards.length} target cards. Click a target in the browser to drill into its full result set.`;
    els.cards.appendChild(prompt);
  }
}

function metricHtml(studies) {
  const phase3 = studies.filter((study) => study.phases.includes("PHASE3")).length;
  const recruiting = studies.filter((study) => study.status === "RECRUITING").length;
  const sponsors = new Set(studies.flatMap((study) => study.sponsors));
  const next = getUpcomingMilestones(studies)[0];
  return [
    ["Studies", studies.length],
    ["Recruiting", recruiting],
    ["Phase 3", phase3],
    ["Next date", next ? formatShortDate(next.date) : "N/A"],
  ]
    .map(([label, value]) => `<div class="mini-metric"><strong>${escapeHtml(String(value))}</strong><span>${escapeHtml(label)}${label === "Studies" ? ` - ${sponsors.size} sponsors` : ""}</span></div>`)
    .join("");
}

function stockHtml(studies, target) {
  const tickers = [...new Set([...target.stocks, ...studies.flatMap((study) => study.tickers)])].filter(Boolean);
  if (!tickers.length) return '<span class="stock-chip">No stock map yet</span>';
  return tickers.map((ticker) => `<span class="stock-chip">${escapeHtml(ticker)}</span>`).join("");
}

function studyHtml(study) {
  const phase = study.phases.length ? study.phases.map(cleanPhase).join(", ") : "Phase not listed";
  const sponsor = study.sponsors[0] || "Sponsor not listed";
  const date = study.primaryCompletionDate || study.completionDate || study.lastUpdatePostDate || "";
  const therapy = study.therapyTypes.map((item) => item.label).join(", ");
  const china = study.hasChinaSite ? " - China site" : "";
  return `
    <div class="study-item">
      <a href="https://clinicaltrials.gov/study/${encodeURIComponent(study.nctId)}" target="_blank" rel="noreferrer">${escapeHtml(study.title)}</a>
      <span>${escapeHtml(study.nctId)} - ${escapeHtml(cleanStatus(study.status))} - ${escapeHtml(phase)} - ${escapeHtml(therapy)} - ${escapeHtml(sponsor)}${date ? ` - ${escapeHtml(formatShortDate(date))}` : ""}${china}</span>
    </div>
  `;
}

function chinaRegistryHtml(target, disease) {
  const query = encodeURIComponent(`${target.name} ${disease}`);
  const chictrUrl = `https://www.chictr.org.cn/searchproj.html?title=${query}`;
  return `
    <div class="registry-links">
      <a href="${chictrUrl}" target="_blank" rel="noreferrer">Search ChiCTR for ${escapeHtml(target.name)}</a>
      <span>Official China registry follow-up link</span>
    </div>
  `;
}

function renderActivityChart(results) {
  const rows = results
    .map((result) => ({ label: result.target.name, value: result.studies.length }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 8);
  const max = Math.max(1, ...rows.map((row) => row.value));
  els.activityChart.innerHTML = rows.length
    ? rows.map((row) => `
      <div class="bar-row">
        <div class="bar-label" title="${escapeHtml(row.label)}">${escapeHtml(row.label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${Math.max(4, (row.value / max) * 100)}%"></div></div>
        <div class="bar-value">${row.value}</div>
      </div>`).join("")
    : '<div class="empty">Select at least one target.</div>';
}

function renderPhaseChart(results) {
  const studies = results.flatMap((result) => result.studies);
  const counts = new Map();
  studies.forEach((study) => {
    const phases = study.phases.length ? study.phases : ["UNKNOWN"];
    phases.forEach((phase) => counts.set(cleanPhase(phase), (counts.get(cleanPhase(phase)) || 0) + 1));
  });
  const entries = [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 5);
  const total = entries.reduce((sum, [, count]) => sum + count, 0) || 1;
  let start = 0;
  const segments = entries.map(([, count], index) => {
    const end = start + (count / total) * 100;
    const segment = `${phaseColors[index]} ${start}% ${end}%`;
    start = end;
    return segment;
  });
  els.phaseChart.innerHTML = `
    <div class="donut" style="background: conic-gradient(${segments.join(", ") || "#e2e8f0 0 100%"})"></div>
    <div class="phase-legend">
      ${entries.map(([label, count], index) => `
        <div class="legend-item"><span><i style="display:inline-block;background:${phaseColors[index]}"></i> ${escapeHtml(label)}</span><strong>${count}</strong></div>
      `).join("") || '<div class="empty">No phase data.</div>'}
    </div>
  `;
}

function renderTimeline(results) {
  const milestones = getUpcomingMilestones(results.flatMap((result) => result.studies)).slice(0, 8);
  els.timeline.innerHTML = milestones.length
    ? milestones.map((item) => `
      <div class="timeline-item">
        <strong>${escapeHtml(formatShortDate(item.date))} - ${escapeHtml(item.type)}</strong>
        <span>${escapeHtml(item.study.targetName)} - ${escapeHtml(item.study.title)} - ${escapeHtml(item.study.nctId)}</span>
      </div>
    `).join("")
    : '<div class="empty">No upcoming milestone dates in the current result set.</div>';
}

function getUpcomingMilestones(studies) {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return studies
    .flatMap((study) => [
      { date: study.primaryCompletionDate, type: "Primary completion", study },
      { date: study.completionDate, type: "Study completion", study },
      { date: study.lastUpdatePostDate, type: "Last update posted", study },
    ])
    .filter((item) => item.date && parseFlexibleDate(item.date) >= now)
    .sort((a, b) => parseFlexibleDate(a.date) - parseFlexibleDate(b.date));
}

function cleanStatus(status) {
  return status.toLowerCase().replaceAll("_", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function cleanPhase(phase) {
  if (phase === "UNKNOWN") return "Unknown";
  return phase.replace("PHASE", "Phase ");
}

function parseFlexibleDate(value) {
  const parts = value.split("-");
  if (parts.length === 1) return new Date(`${parts[0]}-12-31T00:00:00`);
  if (parts.length === 2) return new Date(`${parts[0]}-${parts[1]}-28T00:00:00`);
  return new Date(`${value}T00:00:00`);
}

function formatDate(value) {
  return new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: value.includes("T") ? "short" : undefined }).format(new Date(value));
}

function formatShortDate(value) {
  return new Intl.DateTimeFormat(undefined, { month: "short", year: "numeric" }).format(parseFlexibleDate(value));
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[char]);
}

init();
