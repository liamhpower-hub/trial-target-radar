# Trial Target Radar

A static clinical-trial target dashboard that queries the ClinicalTrials.gov v2 API from the browser.

## Run

From this folder:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\serve.ps1
```

Then open:

```text
http://127.0.0.1:8080/
```

Stop the server with `Ctrl+C`.

## What It Tracks

- Disease filter and searchable target browser
- Default landscape mode with click-to-focus target exploration
- Built-in catalog of 180+ clinical development targets
- Recruiting and not-yet-recruiting trial status
- Phase filters
- Therapy type filters for small molecules, antibodies/ADCs, and gene or cell therapies
- China-site filtering using ClinicalTrials.gov location fields
- ChiCTR search links for official China registry follow-up
- Target activity chart
- Phase mix chart
- Sponsor/target stock tickers from the editable watchlist and inferred sponsor matches
- Upcoming primary completion, completion, or update dates
- Custom watch targets saved in browser localStorage

ClinicalTrials.gov data is fetched live from `https://clinicaltrials.gov/api/v2`.
