'use client';
import { useMemo, useState } from 'react';
import { computeROI } from '@/lib/formulas';
import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function CalculatorClient({ title, defaults }) {
  const [v, setV] = useState(defaults);
  const [scenario, setScenario] = useState('base');

  const adjusted = useMemo(() => {
    const mult = scenario === 'conservative' ? 0.7 : scenario === 'aggressive' ? 1.3 : 1;
    return { ...v, hoursSavedPerUser: Number((v.hoursSavedPerUser * mult).toFixed(2)) };
  }, [v, scenario]);

  const r = useMemo(() => computeROI(adjusted), [adjusted]);
  const f = (k) => (e) => setV({ ...v, [k]: Number(e.target.value || 0) });

  const verdict = r.roiPercent > 150 ? 'Strong positive ROI' : r.roiPercent > 30 ? 'Promising ROI' : 'Marginal ROI — test before committing';
  const summary = `${title}: ${verdict}. Monthly savings $${r.monthlySavings.toFixed(0)}, ROI ${r.roiPercent.toFixed(1)}%, payback ${r.paybackMonths.toFixed(1)} months.`;

  return (
    <>
      <div className="box">
        <h1 style={{marginTop:0}}>{title}</h1>
        <p className="muted">Adjust your inputs and scenario assumptions to get a realistic ROI view.</p>
        <label>Scenario</label>
        <select value={scenario} onChange={(e)=>setScenario(e.target.value)}>
          <option value="conservative">Conservative (70% savings)</option>
          <option value="base">Base case</option>
          <option value="aggressive">Aggressive (130% savings)</option>
        </select>
        <div className="row">
          <div>
            <label>Users</label><input type="number" value={v.users} onChange={f('users')} />
            <label>Monthly Tool Cost ($)</label><input type="number" value={v.monthlyToolCost} onChange={f('monthlyToolCost')} />
            <label>Hours Saved / User / Month</label><input type="number" value={v.hoursSavedPerUser} onChange={f('hoursSavedPerUser')} />
            <label>Hourly Rate ($)</label><input type="number" value={v.hourlyRate} onChange={f('hourlyRate')} />
          </div>
          <div>
            <label>One-time Setup Hours</label><input type="number" value={v.setupHours} onChange={f('setupHours')} />
            <label>Additional Monthly Cost ($)</label><input type="number" value={v.additionalMonthlyCost} onChange={f('additionalMonthlyCost')} />
            <label>Savings per Output ($)</label><input type="number" value={v.savingsPerOutput} onChange={f('savingsPerOutput')} />
          </div>
        </div>
      </div>
      <div className="grid">
        <div className="box"><div className="muted">Monthly Savings</div><div className="kpi">${r.monthlySavings.toFixed(0)}</div></div>
        <div className="box"><div className="muted">ROI %</div><div className="kpi">{r.roiPercent.toFixed(1)}%</div></div>
        <div className="box"><div className="muted">Payback Period</div><div className="kpi">{r.paybackMonths.toFixed(1)} mo</div></div>
        <div className="box"><div className="muted">Break-even Outputs</div><div className="kpi">{r.breakEvenOutputs.toFixed(0)}</div></div>
      </div>

      <div className="success" style={{marginTop:12}}>{verdict}</div>

      <div className="box">
        <strong>Recommended next action</strong>
        <p className="muted">Run this with your real last-30-day numbers, then compare 2 implementation paths.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:8}}>
          <a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer" target="_blank" rel="noopener noreferrer">Get ROI Toolkit ($19)</a>
          <a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get ROI Toolkit ($19)</a>
          <a className="btn" href="/pricing">See all options</a>
          <button className="btn" onClick={() => navigator.clipboard.writeText(summary)}>Copy result summary</button>
        </div>
      </div>

      <div className="notice">Want the full implementation pack? Get the toolkit and apply it to your workflow today.</div>
    </>
  );
}
