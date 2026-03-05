'use client';
import { useMemo, useState } from 'react';
import { computeROI } from '@/lib/formulas';

export default function CalculatorClient({ title, defaults }) {
  const [v, setV] = useState(defaults);
  const r = useMemo(() => computeROI(v), [v]);
  const f = (k) => (e) => setV({ ...v, [k]: Number(e.target.value || 0) });

  return (
    <>
      <div className="box">
        <h2>{title}</h2>
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
    </>
  );
}
