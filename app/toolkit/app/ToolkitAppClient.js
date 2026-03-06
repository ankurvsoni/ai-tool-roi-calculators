'use client';
import { useMemo, useState } from 'react';

function calc(v, scenario) {
  const mult = scenario === 'conservative' ? 0.7 : scenario === 'aggressive' ? 1.3 : 1;
  const hoursSaved = v.hoursSavedPerPerson * mult;
  const monthlySavings = (v.teamSize * hoursSaved * v.hourlyRate) - (v.monthlyToolCost + v.extraMonthlyCost);
  const baseCost = (v.monthlyToolCost + v.extraMonthlyCost) || 1;
  const roiPercent = (monthlySavings / baseCost) * 100;
  const paybackMonths = (v.setupHours * v.hourlyRate) / Math.max(monthlySavings, 1);
  return { monthlySavings, roiPercent, paybackMonths };
}

export default function ToolkitAppClient() {
  const [step, setStep] = useState(1);
  const [scenario, setScenario] = useState('base');
  const [v, setV] = useState({
    company: '',
    teamSize: 5,
    monthlyToolCost: 10,
    hoursSavedPerPerson: 8,
    hourlyRate: 40,
    setupHours: 6,
    extraMonthlyCost: 0,
  });

  const r = useMemo(() => calc(v, scenario), [v, scenario]);
  const update = (k) => (e) => setV({ ...v, [k]: e.target.type === 'number' ? Number(e.target.value || 0) : e.target.value });

  const memo = `ROI Decision Memo\n\nCompany: ${v.company || 'N/A'}\nScenario: ${scenario}\nMonthly Savings: $${r.monthlySavings.toFixed(0)}\nROI: ${r.roiPercent.toFixed(1)}%\nPayback: ${r.paybackMonths.toFixed(1)} months\n\nRecommendation: ${r.roiPercent > 120 ? 'Adopt and monitor weekly KPIs.' : r.roiPercent > 30 ? 'Run a 14-day pilot before scaling.' : 'Do not scale yet; improve workflow first.'}`;

  const downloadMemo = () => {
    const blob = new Blob([memo], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'roi-decision-memo.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <main className="wrap">
      <h1>Toolkit Web App (v2)</h1>
      <p className="muted">Simple guided workflow for non-technical users.</p>

      <div className="box">
        <div className="badge">Step {step} of 3</div>
        {step === 1 && (
          <>
            <label>Company / Project name</label>
            <input value={v.company} onChange={update('company')} placeholder="Acme Marketing" />
            <label>Team size</label>
            <input type="number" value={v.teamSize} onChange={update('teamSize')} />
            <label>Monthly tool cost ($)</label>
            <input type="number" value={v.monthlyToolCost} onChange={update('monthlyToolCost')} />
            <button className="btn" onClick={() => setStep(2)}>Next</button>
          </>
        )}

        {step === 2 && (
          <>
            <label>Hours saved per person per month</label>
            <input type="number" value={v.hoursSavedPerPerson} onChange={update('hoursSavedPerPerson')} />
            <label>Blended hourly rate ($)</label>
            <input type="number" value={v.hourlyRate} onChange={update('hourlyRate')} />
            <label>One-time setup hours</label>
            <input type="number" value={v.setupHours} onChange={update('setupHours')} />
            <label>Extra monthly costs ($)</label>
            <input type="number" value={v.extraMonthlyCost} onChange={update('extraMonthlyCost')} />
            <div style={{display:'flex',gap:10}}>
              <button className="btn" onClick={() => setStep(1)}>Back</button>
              <button className="btn" onClick={() => setStep(3)}>Next</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <label>Scenario</label>
            <select value={scenario} onChange={(e)=>setScenario(e.target.value)}>
              <option value="conservative">Conservative</option>
              <option value="base">Base</option>
              <option value="aggressive">Aggressive</option>
            </select>
            <div className="grid">
              <div className="card"><div className="muted">Monthly savings</div><div className="kpi">${r.monthlySavings.toFixed(0)}</div></div>
              <div className="card"><div className="muted">ROI %</div><div className="kpi">{r.roiPercent.toFixed(1)}%</div></div>
              <div className="card"><div className="muted">Payback</div><div className="kpi">{r.paybackMonths.toFixed(1)} mo</div></div>
            </div>
            <div className="success" style={{marginTop:12}}>{r.roiPercent > 120 ? 'Strong ROI' : r.roiPercent > 30 ? 'Promising ROI' : 'Low ROI'}</div>
            <div style={{display:'flex',gap:10,marginTop:12,flexWrap:'wrap'}}>
              <button className="btn" onClick={downloadMemo}>Download Decision Memo</button>
              <button className="btn" onClick={() => navigator.clipboard.writeText(memo)}>Copy Summary</button>
              <button className="btn" onClick={() => setStep(2)}>Back</button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
