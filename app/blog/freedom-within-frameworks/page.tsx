export const metadata = { title: "Freedom Within Frameworks — Sandbox Institute" };

export default function Post(){
  return (
    <article className="prose dark:prose-invert max-w-none">
      <a href="/#blog" className="no-underline text-sm">← Back to blog</a>
      <h1>Freedom Within Frameworks</h1>
      <p>Frameworks are not cages. Done well, they create safe room for exploration.</p>
      <h2>Guardrails, not gates</h2>
      <p>Governance clarifies the boundaries so teams can move faster inside them.</p>
      <h2>Principles</h2>
      <ul>
        <li>Automate the checks; keep human judgment for ambiguity.</li>
        <li>Integrate compliance early (“shift‑left” risk).</li>
        <li>Publish decisions to build organizational memory.</li>
      </ul>
      <p>Return to the <a href="/#blog">blog</a>.</p>
    </article>
  );
}
