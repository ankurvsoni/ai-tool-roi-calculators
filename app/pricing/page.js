import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Pricing(){
  return <main className="wrap"><h1>Pricing</h1><p className="muted">Simple self-serve offer.</p><div className="grid">
    <div className="card"><h3>AI ROI Toolkit</h3><p className="muted"><strong>$19</strong> · instant self-serve toolkit.</p><ul><li>ROI spreadsheet + assumptions library</li><li>Role presets + KPI tracker</li><li>Decision memo + pilot checklist</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay & Get Toolkit ($19)</a></div>
  </div><p className="footer">Need a custom audit later? We can add it back once delivery automation is fully connected.</p></main>
}
