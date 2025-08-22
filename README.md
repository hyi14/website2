# Sandbox Institute — Next.js + Tailwind starter

A minimal site that mirrors sections accessible via hash anchors:
`#current`, `#former`, `#other`, `#blog`, `#contact`. Blog pages live under `/blog/[slug]`.

## Deploy to Vercel (no local setup required)

1. Create a **new GitHub repo** (empty).  
2. Upload these files (or import this zip).
3. Go to **vercel.com → New Project → Import from GitHub**.  
   - Framework: auto-detects **Next.js**  
   - Build command: `next build` (default)
4. Add your **domain** in Vercel (optional).  
   - Apex A record → `76.76.21.21`  
   - `www` CNAME → `cname.vercel-dns.com`

## Update content
- Edit the cards in `app/page.tsx`.
- Add blog posts by creating directories like `app/blog/my-post/page.tsx`.
- Change colors in `tailwind.config.js` (`brand` & `accent`).

## Notes
- This starter uses unoptimized images for simplicity. You can switch to Next/Image later.
- The tabs read the URL hash so links like `/#blog` open the blog grid directly.
