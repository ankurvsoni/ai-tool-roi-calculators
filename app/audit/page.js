import Link from 'next/link';

export default function Audit(){
  return <main className="wrap"><h1>Audit Offer</h1><div className="box"><p className="muted">Audit slots are currently limited. Start with the toolkit for immediate access.</p><p><Link className="btn" href="/toolkit">Go to Toolkit</Link></p></div></main>
}
