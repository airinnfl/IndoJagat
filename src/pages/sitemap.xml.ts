import {publishedArticles} from '../data/articles';
export const prerender=true;
export function GET({site}:{site:URL}){const paths=['/','/produk/','/rental/','/industri/','/layanan/','/layanan/unit-care/','/layanan/operational-support/','/tentang/','/kontak/','/blog/',...publishedArticles().map(a=>`/blog/${a.slug}/`)];return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${new URL(p,site)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}})}
