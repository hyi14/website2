import HashTabs from "@/components/HashTabs";
import PostCard from "@/components/PostCard";
import { ItemCard } from "@/components/Cards";

export default function Home() {
  return (
    <HashTabs render={(active) => {
      switch(active){
        case 'current':
          return (
            <div className="grid gap-4 sm:grid-cols-2">
              <ItemCard title="Research: AI Risk & GRC" subtitle="Sandbox Grid project on enabling innovation within frameworks." meta="2025 — present" />
              <ItemCard title="Program Mgmt: Security & Compliance" subtitle="Leading controls mapping & readiness." meta="Ongoing" />
              <ItemCard title="Teaching & Talks" subtitle="Workshops on NIST CSF 2.0, AI RMF, EU AI Act." meta="Quarterly" />
            </div>
          );
        case 'former':
          return (
            <div className="grid gap-4 sm:grid-cols-2">
              <ItemCard title="Data Governance Initiative" subtitle="Built first undergrad data science program." meta="2015–2020" />
              <ItemCard title="Privacy Consulting" subtitle="Assessments, DPIAs, vendor risk." meta="Various" />
              <ItemCard title="Security Engineering" subtitle="Network hardening, incident response." meta="Early career" />
            </div>
          );
        case 'other':
          return (
            <div className="grid gap-4 sm:grid-cols-2">
              <ItemCard title="Open-source" subtitle="Small utilities for compliance automation." />
              <ItemCard title="Writing" subtitle="Essays on risk culture & measurement." />
              <ItemCard title="Community" subtitle="Mentoring early-career GRC folks." />
            </div>
          );
        case 'blog':
          return (
            <div className="grid gap-4 sm:grid-cols-2">
              <PostCard slug="metric-mediated-atrophy" title="Metric‑Mediated Atrophy" date="2024‑08‑10" excerpt="When teams optimize the metric instead of the mission, capability quietly withers." />
              <PostCard slug="freedom-within-frameworks" title="Freedom Within Frameworks" date="2024‑09‑03" excerpt="Why governance done well increases—not decreases—innovation." />
            </div>
          );
        case 'contact':
          return (
            <div className="max-w-lg">
              <h2 className="font-semibold text-lg">Get in touch</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Email us and we’ll reply within 1–2 business days.
              </p>
              <a href="mailto:hello@sandbox.example" className="mt-4 inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                <span className="h-2 w-2 rounded-full bg-brand-accent" />
                hello@sandbox.example
              </a>
            </div>
          );
      }
    }} />
  );
}
