import type { Metadata, Viewport } from 'next';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'AI automation', 'agentic systems', 'on-chain engineering', 'smart contracts',
    'forward-deployed engineers', 'protocol engineering', 'AI agents',
    'blockchain development', 'LLM automation', 'DeFi engineering',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    locale: site.locale,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'technology',
};

export const viewport: Viewport = {
  themeColor: '#f4f2ed',
  width: 'device-width',
  initialScale: 1,
};

/** Organization + the three productised engagements, for rich results. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#organization`,
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  slogan: site.tagline,
  areaServed: ['US', 'CA', 'GB', 'AE', 'IN', 'SG'],
  knowsAbout: [
    'AI automation', 'Agentic systems', 'On-chain engineering',
    'Smart contract development', 'Protocol design', 'Retrieval-augmented generation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Engagements',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Discovery sprint', description: 'Two weeks mapping the seam: architecture, threat model, and a costed plan you own.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Protocol & agent build', description: 'A senior, forward-deployed pod ships your protocol or agentic system to production.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Forward-deployed engineers', description: 'Senior engineers working inside your team on the systems that move value.' } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          // Static object literal above — no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {/* Scroll-reveal ships the content at opacity:0. Without JS the page would
            read as blank to a non-rendering crawler, so force it visible there. */}
        <noscript>
          <style>{'[data-reveal]{opacity:1!important;transform:none!important}'}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
