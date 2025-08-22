import Link from 'next/link';

export default function PostCard({ slug, title, excerpt, date }:{ slug:string, title:string, excerpt:string, date:string}){
  return (
    <Link href={`/blog/${slug}#blog`} className="block rounded-xl border border-gray-200 dark:border-gray-800 p-4 hover:shadow-sm">
      <div className="text-xs text-gray-500">{date}</div>
      <h3 className="mt-1 font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{excerpt}</p>
    </Link>
  );
}
