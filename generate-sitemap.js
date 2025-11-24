const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://kanhasrestaurant.com' });

// List all your website pages here
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/menu', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
  { url: '/about', changefreq: 'monthly', priority: 0.5 },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7 }
];

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap)
  .then(sm => {
    createWriteStream('./dist/sitemap.xml').write(sm);
    console.log('Sitemap generated successfully at ./dist/sitemap.xml');
  })
  .catch(err => console.error(err));
