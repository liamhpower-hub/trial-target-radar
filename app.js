const disclosures = [
  {
    company: "Theravance Biopharma",
    ticker: "TBPH",
    asset: "Ampreloxetine",
    trial: "CYPRESS",
    phase: "Phase 3",
    indication: "Symptomatic neurogenic orthostatic hypotension due to multiple system atrophy",
    date: "Mar 3, 2026",
    enrollment: 136,
    fixedOps: 24_000_000,
    disclosedCharge: 7_000_000,
    mode: "Primary endpoint miss",
    action: "Strategic review",
    target: "Norepinephrine transporter",
    mechanism: "Norepinephrine reuptake inhibition",
    failureCategory: "Patient-reported symptom endpoint miss",
    targetContext:
      "The pressor biology may still be relevant in autonomic disorders, but future use likely needs cleaner responder selection, endpoint alignment, or combination with standard blood-pressure management.",
    endpoint: "Change in OHSA composite score at Week 8 during the randomized withdrawal period.",
    failure:
      "The patient-reported symptom score was not statistically significant, and secondary endpoints showed similar trends. The company still described blood-pressure and norepinephrine findings as evidence of biological activity.",
    next:
      "Wind down ampreloxetine, complete additional analyses, consult external experts, evaluate whether any regulatory discussion is still merited, reduce operating expenses by roughly 60%, and accelerate strategic alternatives.",
    signal: true,
    disclosureCost: "Company disclosed $5M-$7M expected one-time cash severance costs and roughly $70M full run-rate cost savings.",
    timeline: [
      {
        window: "Q2 2026",
        sort: "2026-06-30",
        milestone: "Additional CYPRESS dataset review",
        status: "Expected",
        confidence: "Medium",
        watch: "Follow-up analysis, external expert review, or regulatory-discussion update.",
      },
      {
        window: "Q3 2026",
        sort: "2026-09-30",
        milestone: "Cost savings reach full run-rate",
        status: "Expected",
        confidence: "High",
        watch: "Quarterly report confirming restructuring progress and cash-flow guidance.",
      },
    ],
    source:
      "https://investor.theravance.com/news-releases/news-release-details/theravance-biopharma-reports-phase-3-cypress-study-did-not-meet",
  },
  {
    company: "Bristol Myers Squibb",
    ticker: "BMY",
    asset: "Opdivo + Yervoy regimen",
    trial: "CheckMate -73L",
    phase: "Phase 3",
    indication: "Unresectable, locally advanced stage III non-small cell lung cancer",
    date: "May 10, 2024",
    enrollment: 925,
    fixedOps: 68_000_000,
    disclosedCharge: 0,
    mode: "Primary endpoint miss",
    action: "Continue analysis",
    target: "PD-1 plus CTLA-4",
    mechanism: "Checkpoint blockade added to concurrent chemoradiotherapy",
    failureCategory: "Combination sequencing / comparator miss",
    targetContext:
      "The targets remain validated in other lung-cancer settings; the failure reads more like regimen timing, disease setting, and comparator challenge than a broad invalidation of PD-1 or CTLA-4 biology.",
    endpoint:
      "Progression-free survival by RECIST 1.1 per blinded independent central review for Arm A versus Arm C.",
    failure:
      "Adding immunotherapy concurrently with definitive chemoradiation did not improve progression-free survival versus the comparator approach.",
    next:
      "Complete full data evaluation and work with investigators to share results with the scientific community while continuing other approved Opdivo-based NSCLC strategies.",
    signal: false,
    disclosureCost: "No trial-specific impairment or charge disclosed in the press release.",
    timeline: [
      {
        window: "2024-2025",
        sort: "2024-12-31",
        milestone: "Full CheckMate -73L data evaluation",
        status: "Disclosure watch",
        confidence: "Medium",
        watch: "Conference abstract, manuscript, or pipeline-prioritization note for unresectable stage III NSCLC.",
      },
    ],
    source:
      "https://investors.bms.com/iframes/press-releases/press-release-details/2024/Bristol-Myers-Squibb-Provides-Update-on-Phase-3-CheckMate--73L-Trial/default.aspx",
  },
  {
    company: "Marinus Pharmaceuticals",
    ticker: "MRNS",
    asset: "Ganaxolone",
    trial: "TrustTSC",
    phase: "Phase 3",
    indication: "Tuberous sclerosis complex-related seizures",
    date: "Oct 24, 2024",
    enrollment: 129,
    fixedOps: 22_000_000,
    disclosedCharge: 0,
    mode: "Statistical miss with signal",
    action: "Strategic review",
    target: "GABA-A receptor",
    mechanism: "Neurosteroid positive allosteric modulation",
    failureCategory: "Statistical miss with directional efficacy",
    targetContext:
      "Ganaxolone remains commercially relevant in CDKL5 deficiency disorder. The TSC miss suggests the target may require narrower seizure phenotypes, different powering, or combination assumptions.",
    endpoint: "Percent change in 28-day TSC-associated seizure frequency.",
    failure:
      "The median seizure-frequency reduction favored ganaxolone, but the primary endpoint did not reach statistical significance at p=0.09.",
    next:
      "Continue supporting commercial ZTALMY, discontinue further ganaxolone clinical development, reduce costs including workforce reduction, and evaluate strategic alternatives with Barclays.",
    signal: true,
    disclosureCost: "Cost reductions disclosed qualitatively; no trial-specific charge quantified in the announcement.",
    timeline: [
      {
        window: "Q4 2024-Q1 2025",
        sort: "2025-03-31",
        milestone: "Strategic alternatives process",
        status: "Disclosure watch",
        confidence: "Medium",
        watch: "Transaction update, restructuring details, or change in ganaxolone development priorities.",
      },
      {
        window: "2025",
        sort: "2025-12-31",
        milestone: "Commercial ZTALMY focus update",
        status: "Expected",
        confidence: "Medium",
        watch: "Revenue guidance and cash runway disclosures after TSC development wind-down.",
      },
    ],
    source:
      "https://ir.marinuspharma.com/news/news-details/2024/Marinus-Pharmaceuticals-Announces-Topline-Results-From-Phase-3-TrustTSC-Trial-of-Oral-Ganaxolone-in-Tuberous-Sclerosis-Complex-and-Commences-Process-to-Explore-Strategic-Alternatives/default.aspx",
  },
  {
    company: "Eli Lilly",
    ticker: "LLY",
    asset: "Solanezumab",
    trial: "EXPEDITION3",
    phase: "Phase 3",
    indication: "Mild dementia due to Alzheimer's disease",
    date: "Nov 23, 2016",
    enrollment: 2100,
    fixedOps: 110_000_000,
    disclosedCharge: 150_000_000,
    mode: "Primary endpoint miss",
    action: "No filing",
    target: "Amyloid beta",
    mechanism: "Soluble amyloid-beta monoclonal antibody",
    failureCategory: "Small effect size / clinical endpoint miss",
    targetContext:
      "The target was not broadly abandoned; later amyloid programs shifted toward earlier disease, stronger plaque clearance, biomarker confirmation, and careful safety monitoring.",
    endpoint: "ADAS-Cog14 cognitive decline versus placebo over the placebo-controlled period.",
    failure:
      "The trial did not show statistically significant slowing of cognitive decline versus placebo; secondary endpoints directionally favored treatment, but effect sizes were small.",
    next:
      "Do not pursue regulatory submissions for mild dementia due to Alzheimer's disease, conclude open-label extensions appropriately, and reassess the remaining solanezumab development program.",
    signal: true,
    disclosureCost: "Company expected a fourth-quarter charge of approximately $150M pre-tax.",
    timeline: [
      {
        window: "Dec 2016",
        sort: "2016-12-31",
        milestone: "Detailed EXPEDITION3 presentation",
        status: "Completed",
        confidence: "High",
        watch: "CTAD presentation and updated financial guidance following the top-line miss.",
      },
      {
        window: "2017",
        sort: "2017-12-31",
        milestone: "Remaining solanezumab program reassessment",
        status: "Historical follow-up",
        confidence: "Medium",
        watch: "Pipeline update on open-label extensions and other Alzheimer's assets.",
      },
    ],
    source:
      "https://investor.lilly.com/news-releases/news-release-details/lilly-announces-top-line-results-solanezumab-phase-3-clinical",
  },
  {
    company: "Gilead Sciences",
    ticker: "GILD",
    asset: "Selonsertib",
    trial: "STELLAR-4",
    phase: "Phase 3",
    indication: "Compensated cirrhosis due to NASH",
    date: "Feb 11, 2019",
    enrollment: 877,
    fixedOps: 64_000_000,
    disclosedCharge: 0,
    mode: "Primary endpoint miss",
    action: "Continue analysis",
    target: "ASK1",
    mechanism: "Apoptosis signal-regulating kinase 1 inhibition",
    failureCategory: "Fibrosis histology endpoint miss",
    targetContext:
      "The monotherapy miss weakened ASK1 as a stand-alone NASH thesis, but stress-kinase biology may still be explored in combination strategies or more inflammatory/fibrotic subgroups.",
    endpoint: "At least 1-stage histologic improvement in fibrosis without worsening of NASH at Week 48.",
    failure:
      "The trial did not meet the pre-specified fibrosis improvement endpoint, a hard histology bar in a disease where placebo response, biopsy variability, and slow biology complicate readouts.",
    next:
      "Gilead said it would continue evaluating NASH approaches, including single-agent and combination therapy programs.",
    signal: false,
    disclosureCost: "No trial-specific impairment or charge quantified in the announcement.",
    timeline: [
      {
        window: "2019",
        sort: "2019-12-31",
        milestone: "STELLAR program read-through",
        status: "Completed",
        confidence: "High",
        watch: "Follow-up NASH pipeline updates on selonsertib, cilofexor, and firsocostat combinations.",
      },
    ],
    source:
      "https://www.gilead.com/news/news-details/2019/gilead-announces-topline-data-from-phase-3-stellar-4-study-of-selonsertib-in-compensated-cirrhosis-f4-due-to-nonalcoholic-steatohepatitis-nash",
  },
  {
    company: "Roche",
    ticker: "ROG",
    asset: "Gantenerumab",
    trial: "GRADUATE I / II",
    phase: "Phase 3",
    indication: "Early Alzheimer's disease",
    date: "Nov 14, 2022",
    enrollment: 1965,
    fixedOps: 120_000_000,
    disclosedCharge: 0,
    mode: "Primary endpoint miss",
    action: "Discontinue program",
    target: "Amyloid beta",
    mechanism: "Subcutaneous amyloid-beta monoclonal antibody",
    failureCategory: "Clinical decline endpoint miss",
    targetContext:
      "The failure reinforces that amyloid programs depend on exposure, plaque removal, disease stage, and safety. It does not automatically invalidate amyloid as a class across all antibodies or populations.",
    endpoint: "Slowing clinical decline in early Alzheimer's disease.",
    failure:
      "Both GRADUATE studies missed the primary endpoint. The disclosure pointed to insufficient clinical slowing despite the amyloid-directed hypothesis.",
    next:
      "Roche discontinued gantenerumab studies while continuing to analyze data and pursue other neurological programs.",
    signal: false,
    disclosureCost: "No trial-specific impairment or charge quantified in the announcement.",
    timeline: [
      {
        window: "2022-2023",
        sort: "2023-12-31",
        milestone: "GRADUATE data analysis and discontinuation follow-up",
        status: "Completed",
        confidence: "High",
        watch: "Detailed presentation, publication, and Roche neuroscience pipeline updates.",
      },
    ],
    source: "https://www.roche.com/investors/updates/inv-update-2022-11-14c",
  },
  {
    company: "Roche",
    ticker: "ROG",
    asset: "Tiragolumab + Tecentriq",
    trial: "SKYSCRAPER-01",
    phase: "Phase 3",
    indication: "PD-L1-high metastatic non-small cell lung cancer",
    date: "May 11, 2022",
    enrollment: 534,
    fixedOps: 76_000_000,
    disclosedCharge: 0,
    mode: "Primary endpoint miss",
    action: "Continue analysis",
    target: "TIGIT",
    mechanism: "Anti-TIGIT checkpoint blockade plus PD-L1 inhibition",
    failureCategory: "Co-primary PFS endpoint miss",
    targetContext:
      "The result raised questions about TIGIT patient selection and combination benefit. TIGIT may still be tested in other tumors, biomarker-defined populations, or different immunotherapy backbones.",
    endpoint: "Co-primary endpoint of progression-free survival at interim analysis.",
    failure:
      "The study missed the PFS co-primary endpoint at interim analysis, meaning the TIGIT plus PD-L1 combination did not clearly beat PD-L1 blockade alone on that measure.",
    next:
      "Roche continued the study to the next overall-survival analysis and maintained parts of the tiragolumab development program.",
    signal: true,
    disclosureCost: "No trial-specific impairment or charge quantified in the announcement.",
    timeline: [
      {
        window: "2023 onward",
        sort: "2023-12-31",
        milestone: "Overall-survival and TIGIT program read-through",
        status: "Historical follow-up",
        confidence: "Medium",
        watch: "OS updates, tumor-specific discontinuations, and biomarker subgroup disclosures.",
      },
    ],
    source: "https://www.roche.com/media/releases/med-cor-2022-05-11",
  },
  {
    company: "Biogen and Eisai",
    ticker: "BIIB",
    asset: "Aducanumab",
    trial: "ENGAGE / EMERGE",
    phase: "Phase 3",
    indication: "Early Alzheimer's disease",
    date: "Mar 21, 2019",
    enrollment: 3285,
    fixedOps: 155_000_000,
    disclosedCharge: 0,
    mode: "Futility / unlikely to meet",
    action: "Discontinue program",
    target: "Amyloid beta",
    mechanism: "Amyloid-beta plaque-directed monoclonal antibody",
    failureCategory: "Futility analysis",
    targetContext:
      "The futility decision did not settle the amyloid question by itself; it highlighted dose, exposure, trial conduct, and patient-stage issues that later amyloid programs continued to test.",
    endpoint: "Clinical Dementia Rating-Sum of Boxes change from baseline.",
    failure:
      "An independent futility analysis indicated the trials were unlikely to meet the primary endpoint upon completion.",
    next:
      "Discontinue ENGAGE and EMERGE, stop the EVOLVE safety study and long-term PRIME extension, and assess any secondary-prevention work separately.",
    signal: false,
    disclosureCost: "No trial-specific charge quantified in the announcement.",
    timeline: [
      {
        window: "2019",
        sort: "2019-12-31",
        milestone: "ENGAGE / EMERGE discontinuation actions",
        status: "Completed",
        confidence: "High",
        watch: "Study termination notices and updates to related aducanumab studies.",
      },
      {
        window: "Post-futility review",
        sort: "2020-12-31",
        milestone: "Secondary-prevention program assessment",
        status: "Historical follow-up",
        confidence: "Low",
        watch: "Any revised regulatory, development, or collaboration disclosures from Biogen and Eisai.",
      },
    ],
    source:
      "https://investors.biogen.com/news-releases/news-release-details/biogen-and-eisai-discontinue-phase-3-engage-and-emerge-trials",
  },
];

const BASE_PATIENT_COST = 175_000;

const state = {
  query: "",
};

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
  notation: "compact",
});

const fullCurrency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const els = {
  trialList: document.querySelector("#trialList"),
  timelineList: document.querySelector("#timelineList"),
  timelineCount: document.querySelector("#timelineCount"),
  targetList: document.querySelector("#targetList"),
  targetCount: document.querySelector("#targetCount"),
  searchInput: document.querySelector("#searchInput"),
  portfolioReadout: document.querySelector("#portfolioReadout"),
  resetFilters: document.querySelector("#resetFilters"),
  exportView: document.querySelector("#exportView"),
  memoDialog: document.querySelector("#memoDialog"),
  memoOutput: document.querySelector("#memoOutput"),
};

function modeledCost(record) {
  return record.enrollment * BASE_PATIENT_COST + record.fixedOps + record.disclosedCharge;
}

function getChecked(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function filteredRecords() {
  const modes = getChecked("mode");
  const actions = getChecked("action");
  const query = state.query.trim().toLowerCase();

  return disclosures.filter((record) => {
    const haystack =
      `${record.company} ${record.ticker} ${record.asset} ${record.trial} ${record.indication} ${record.target} ${record.mechanism} ${record.failureCategory} ${record.endpoint} ${record.targetContext}`.toLowerCase();
    return modes.includes(record.mode) && actions.includes(record.action) && (!query || haystack.includes(query));
  });
}

function median(values) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

function actionClass(action) {
  if (action === "Discontinue program" || action === "No filing") return "red";
  if (action === "Strategic review") return "blue";
  return "";
}

function renderSummary(records) {
  const signalCount = records.filter((record) => record.signal).length;

  if (!records.length) {
    els.portfolioReadout.textContent =
      "No disclosures match the current filters. Reset filters or broaden the search to bring records back.";
    return;
  }

  const discontinue = records.filter((record) =>
    ["Discontinue program", "No filing", "Strategic review"].includes(record.action),
  ).length;
  const targetCount = targetGroups(records).length;
  els.portfolioReadout.textContent = `${records.length} failure record${
    records.length === 1 ? "" : "s"
  } indexed across ${targetCount} target${targetCount === 1 ? "" : "s"}. ${signalCount} showed residual efficacy or biological signal, while ${discontinue} pointed to no filing, program wind-down, or strategic review. Search by company, target, mechanism, endpoint, or failure pattern.`;
}

function renderCards(records) {
  const maxCost = Math.max(...records.map(modeledCost), 1);
  els.trialList.innerHTML = records
    .map((record) => {
      const cost = modeledCost(record);
      const meter = Math.max(8, Math.round((cost / maxCost) * 100));
      return `
        <article class="trial-card">
          <div>
            <header>
              <div>
                <h3>${record.company}: ${record.asset}</h3>
                <div class="meta">${record.trial} / ${record.phase} / ${record.date} / ${record.enrollment.toLocaleString()} randomized</div>
              </div>
            </header>
            <div class="pill-row">
              <span class="pill">${record.mode}</span>
              <span class="pill ${actionClass(record.action)}">${record.action}</span>
              <span class="pill amber">${record.target}</span>
              <span class="pill blue">${record.indication}</span>
            </div>
            <div class="explain">
              <section>
                <h4>Target / Mechanism</h4>
                <p>${record.target}: ${record.mechanism}</p>
              </section>
              <section>
                <h4>Failure Pattern</h4>
                <p>${record.failureCategory}</p>
              </section>
              <section>
                <h4>Endpoint That Failed</h4>
                <p>${record.endpoint}</p>
              </section>
              <section>
                <h4>Plain-English Failure</h4>
                <p>${record.failure}</p>
              </section>
              <section>
                <h4>Company-Disclosed Next Steps</h4>
                <p>${record.next}</p>
              </section>
              <section>
                <h4>Could Target Matter Elsewhere?</h4>
                <p>${record.targetContext}</p>
              </section>
            </div>
          </div>
          <aside class="cost-box">
            <div>
              <h4>Modeled Cost Basis</h4>
              <span class="cost-number">${currency.format(cost)}</span>
            </div>
            <div class="bar-meter" style="--meter: ${meter}%"><span></span></div>
            <dl class="cost-lines">
              <div><dt>Randomized patients</dt><dd>${record.enrollment.toLocaleString()}</dd></div>
              <div><dt>Patient basis</dt><dd>${fullCurrency.format(BASE_PATIENT_COST)}</dd></div>
              <div><dt>Fixed operations</dt><dd>${currency.format(record.fixedOps)}</dd></div>
              <div><dt>Disclosed charge</dt><dd>${record.disclosedCharge ? currency.format(record.disclosedCharge) : "Not disclosed"}</dd></div>
            </dl>
            <p>${record.disclosureCost}</p>
            <a class="source-link" href="${record.source}" target="_blank" rel="noreferrer">Open public disclosure</a>
          </aside>
        </article>
      `;
    })
    .join("");
}

function timelineItems(records) {
  const priority = {
    Expected: 0,
    "Disclosure watch": 1,
    "Historical follow-up": 2,
    Completed: 3,
  };

  return records
    .flatMap((record) =>
      record.timeline.map((item) => ({
        ...item,
        company: record.company,
        ticker: record.ticker,
        asset: record.asset,
        trial: record.trial,
        action: record.action,
      })),
    )
    .sort((a, b) => priority[a.status] - priority[b.status] || a.sort.localeCompare(b.sort));
}

function statusClass(status) {
  if (status === "Expected") return "expected";
  if (status === "Completed") return "completed";
  if (status === "Historical follow-up") return "historical";
  return "watch";
}

function renderTimeline(records) {
  const items = timelineItems(records);
  els.timelineCount.textContent = `${items.length} tracked event${items.length === 1 ? "" : "s"}`;

  if (!items.length) {
    els.timelineList.innerHTML = `
      <article class="timeline-empty">
        <strong>No scheduled events match the current filters.</strong>
        <span>Reset filters or broaden the search to restore the timeline.</span>
      </article>
    `;
    return;
  }

  els.timelineList.innerHTML = items
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-date">
            <span>${item.window}</span>
            <strong>${item.confidence}</strong>
          </div>
          <div class="timeline-body">
            <div class="timeline-title">
              <h3>${item.company}: ${item.milestone}</h3>
              <span class="status ${statusClass(item.status)}">${item.status}</span>
            </div>
            <p>${item.asset} / ${item.trial}</p>
            <dl>
              <dt>Watch for</dt>
              <dd>${item.watch}</dd>
            </dl>
          </div>
        </article>
      `,
    )
    .join("");
}

function targetGroups(records) {
  const groups = new Map();

  records.forEach((record) => {
    if (!groups.has(record.target)) {
      groups.set(record.target, {
        target: record.target,
        mechanisms: new Set(),
        categories: new Set(),
        contexts: [],
        records: [],
      });
    }

    const group = groups.get(record.target);
    group.mechanisms.add(record.mechanism);
    group.categories.add(record.failureCategory);
    group.contexts.push(record.targetContext);
    group.records.push(record);
  });

  return Array.from(groups.values()).sort((a, b) => b.records.length - a.records.length || a.target.localeCompare(b.target));
}

function renderTargetMap(records) {
  const groups = targetGroups(records);
  els.targetCount.textContent = `${groups.length} target${groups.length === 1 ? "" : "s"} mapped`;

  if (!groups.length) {
    els.targetList.innerHTML = `
      <article class="timeline-empty">
        <strong>No target lessons match the current filters.</strong>
        <span>Search by target, mechanism, endpoint, indication, company, or trial.</span>
      </article>
    `;
    return;
  }

  els.targetList.innerHTML = groups
    .map((group) => {
      const companies = group.records.map((record) => `${record.company} (${record.asset})`).join("; ");
      const contexts = Array.from(new Set(group.contexts)).slice(0, 2).join(" ");

      return `
        <article class="target-item">
          <div>
            <span class="target-kicker">${group.records.length} failure${group.records.length === 1 ? "" : "s"}</span>
            <h3>${group.target}</h3>
            <p>${Array.from(group.mechanisms).join("; ")}</p>
          </div>
          <div>
            <dl>
              <div><dt>Failure patterns</dt><dd>${Array.from(group.categories).join("; ")}</dd></div>
              <div><dt>Companies / assets</dt><dd>${companies}</dd></div>
              <div><dt>Investor read-through</dt><dd>${contexts}</dd></div>
            </dl>
          </div>
        </article>
      `;
    })
    .join("");
}

function render() {
  const records = filteredRecords();
  renderSummary(records);
  renderTimeline(records);
  renderTargetMap(records);
  renderCards(records);
}

function buildMemo(records) {
  return records
    .map((record) => {
      return `${record.company} (${record.ticker}) - ${record.asset}
Trial: ${record.trial}, ${record.phase}, ${record.indication}
Target: ${record.target}
Mechanism: ${record.mechanism}
Failure pattern: ${record.failureCategory}
Failure: ${record.failure}
Cost basis: ${currency.format(modeledCost(record))} modeled; ${record.disclosureCost}
Timeline: ${record.timeline.map((item) => `${item.window} - ${item.milestone} (${item.status})`).join("; ")}
Target read-through: ${record.targetContext}
Next steps: ${record.next}
Source: ${record.source}`;
    })
    .join("\n\n---\n\n");
}

els.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  render();
});

document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener("change", render);
});

els.resetFilters.addEventListener("click", () => {
  state.query = "";
  els.searchInput.value = "";
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    checkbox.checked = true;
  });
  render();
});

els.exportView.addEventListener("click", () => {
  els.memoOutput.value = buildMemo(filteredRecords());
  els.memoDialog.showModal();
});

render();
