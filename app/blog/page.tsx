import PostCard from "@/components/PostCard";

export default function BlogIndex(){
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <PostCard slug="metric-mediated-atrophy" title="Metric‑Mediated Atrophy" date="2024‑08‑10" excerpt="When teams optimize the metric instead of the mission, capability quietly withers." />
      <PostCard slug="freedom-within-frameworks" title="Freedom Within Frameworks" date="2024‑09‑03" excerpt="Why governance done well increases innovation." />
    </div>
  );
}
