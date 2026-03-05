import { PAYMENT_LINKS } from '@/lib/paymentLinks';

export default function Toolkit(){
  return <main className="wrap"><h1>AI ROI Toolkit</h1><div className="box"><p className="muted">Includes ROI spreadsheet, assumptions library, stakeholder pitch deck outline, and 14-day pilot checklist.</p><ul><li>Spreadsheet template (editable CSV)</li><li>Role-based assumptions library</li><li>Decision memo template</li><li>Pilot checklist + stakeholder deck outline</li></ul><a className="btn" href={PAYMENT_LINKS.toolkit} target="_blank" rel="noopener noreferrer">Pay $19 and Access Toolkit</a></div><div className="notice">You can keep a private backup download at <code>/toolkit/ai-roi-toolkit-v1.zip</code> for manual fulfillment fallback.</div></main>
}