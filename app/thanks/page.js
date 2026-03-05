import Link from 'next/link';

export default function Thanks(){
  return (
    <main className="wrap">
      <div className="success">
        <h1 style={{marginTop:0}}>Thanks — request received.</h1>
        <p>We got your submission and will follow up soon.</p>
      </div>
      <div className="box">
        <p className="muted">While you wait, you can run more scenarios in our calculators.</p>
        <Link className="btn" href="/">Back to calculators</Link>
      </div>
    </main>
  );
}
