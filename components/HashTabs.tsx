'use client';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

type TabKey = 'current' | 'former' | 'other' | 'blog' | 'contact';

const TABS: TabKey[] = ['current','former','other','blog','contact'];

export default function HashTabs({ render }: {
  render: (active: TabKey) => JSX.Element
}) {
  const [active, setActive] = useState<TabKey>('current');

  useEffect(() => {
    const apply = () => {
      const hash = (window.location.hash || '#current').replace('#','') as TabKey;
      setActive(TABS.includes(hash as TabKey) ? hash : 'current');
    };
    apply();
    window.addEventListener('hashchange', apply);
    return () => window.removeEventListener('hashchange', apply);
  }, []);

  return (
    <section>
      <div className="sticky top-0 z-10 -mx-6 px-6 py-3 bg-white/80 backdrop-blur dark:bg-gray-950/80">
        <div className="flex flex-wrap gap-2">
          {TABS.map(tab => (
            <a key={tab} href={`#${tab}`}
               className={clsx(
                 'rounded-full px-4 py-1.5 text-sm border transition-colors',
                 active===tab ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 border-transparent' : 'border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
               )}>
              {tab[0].toUpperCase()+tab.slice(1)}
            </a>
          ))}
        </div>
      </div>
      <div className="mt-6">{render(active)}</div>
    </section>
  );
}
