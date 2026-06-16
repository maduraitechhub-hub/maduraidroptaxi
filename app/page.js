import { buildMetadata, PAGE_SEO } from '../lib/seo';
import { buildFaqSchema, buildBreadcrumbSchema } from '../lib/schema';
import { GLOBAL_FAQS } from '../config/locations';
import HomePageClient from '../components/sections/HomePageClient';

export const metadata = buildMetadata(PAGE_SEO.home);

export default function HomePage() {
  const faqSchema = buildFaqSchema(GLOBAL_FAQS);
  const breadcrumbSchema = buildBreadcrumbSchema([{ name: 'Home', url: '/' }]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HomePageClient />
    </>
  );
}
