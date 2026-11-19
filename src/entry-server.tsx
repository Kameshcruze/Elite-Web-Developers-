import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HeadCollector, HeadProvider, renderHeadTags } from './components/SeoHead';
import { PAGE_SEO, PRERENDER_ROUTES, SITE_URL } from './seo';
import App from './App.tsx';

export { PAGE_SEO, PRERENDER_ROUTES, SITE_URL };

export function render(url: string): { html: string; headTags: string } {
  const collector: HeadCollector = { current: null };

  const html = renderToString(
    <HeadProvider collector={collector}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HeadProvider>
  );

  const headTags = collector.current ? renderHeadTags(collector.current) : '';
  return { html, headTags };
}
