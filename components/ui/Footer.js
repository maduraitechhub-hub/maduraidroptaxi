import Image from 'next/image';
import Link from 'next/link';
import { site } from '../../config/site';
import { CITIES } from '../../config/locations';

const SERVICES = [
  { label: 'Airport Drop/Pickup', href: '/book' },
  { label: 'Outstation Cabs', href: '/book' },
  { label: 'One Way Taxi', href: '/book' },
  { label: 'Round Trip Cabs', href: '/book' },
  { label: 'Local Rentals', href: '/book' },
];

const POPULAR_ROUTES = [
  'Madurai → Chennai',
  'Chennai → Bangalore',
  'Madurai → Coimbatore',
  'Trichy → Chennai',
  'Coimbatore → Ooty',
  'Salem → Chennai',
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo" aria-label={`${site.siteName} Home`}>
              <Image src={site.logo} alt={site.siteName} width={52} height={52} className="footer-logo-img" />
              <div>
                <div className="footer-logo-name">{site.siteName}</div>
                <div className="footer-logo-sub">{site.siteTagline}</div>
              </div>
            </Link>
            <p className="footer-brand-desc">{site.siteDescription}</p>

            {/* Contact */}
            <div className="footer-contact">
              <a href={`tel:${site.phone}`} className="footer-contact-link">📞 {site.phoneDisplay}</a>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                💬 WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="footer-contact-link">📧 {site.email}</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-col-title">Quick Links</div>
            <ul className="footer-links">
              {[
                ['Home', '/'],
                ['Book Taxi', '/book'],
                ['Cities We Serve', '/cities'],
                ['About Us', '/about'],
                ['Partner With Us', '/partner'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              {SERVICES.map((s) => (
                <li key={s.label}>
                  <Link href={s.href}>{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* City SEO Links */}
          <div>
            <div className="footer-col-title">City Taxi Services</div>
            <ul className="footer-links">
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/taxi/${c.slug}`}>{c.name} Drop Taxi</Link>
                </li>
              ))}
              <li>
                <Link href="/cities">View All Cities →</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()}{' '}
            <span className="footer-bottom-brand">{site.siteName}</span>. All rights reserved.
          </span>
          <div className="footer-bottom-links">
            <a href="/sitemap.xml" rel="nofollow">Sitemap</a>
            <span>·</span>
            <Link href="/contact">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
