export function ItemCard({ title, subtitle, meta, href }: { title:string, subtitle?:string, meta?:string, href?:string }) {
  const Wrapper = href ? 'a' : 'div';
  return (
    <div className="group rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between">
        <h3 className="font-semibold">{title}</h3>
        <span className="h-2 w-2 rounded-full bg-brand-accent mt-1.5" />
      </div>
      {subtitle && <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{subtitle}</p>}
      {meta && <div className="mt-3 text-xs text-gray-500">{meta}</div>}
      {href && <div className="mt-3 text-sm underline">Read more →</div>}
    </div>
  );
}
