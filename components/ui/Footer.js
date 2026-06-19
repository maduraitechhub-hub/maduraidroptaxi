'use client';

import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
  { label: 'One-Way Drop Taxi',             href: '/book'                          },
  { label: 'Outstation Cab Booking',        href: '/book'                          },
  { label: 'Airport Taxi Service',          href: '/book'                          },
  { label: 'Corporate Cab Service',         href: '/book'                          },
  { label: 'Madurai Local & Round Trip',    href: '/madurai-local-round-trip-taxi' },
  { label: 'Driver Partner Programme',      href: '/partner'                       },
];

const QUICK_LINKS = [
  { label: 'Home',           href: '/'        },
  { label: 'Book a Taxi',    href: '/book'    },
  { label: 'Our Cities',     href: '/cities'  },
  { label: 'About Us',       href: '/about'   },
  { label: 'Contact Us',     href: '/contact' },
  { label: 'Partner With Us',href: '/partner' },
];

const TOP_ROUTES = [
  { label: 'Chennai → Madurai',     href: '/taxi/madurai'     },
  { label: 'Chennai → Coimbatore',  href: '/taxi/coimbatore'  },
  { label: 'Chennai → Trichy',      href: '/taxi/trichy'      },
  { label: 'Madurai → Chennai',     href: '/taxi/chennai'     },
  { label: 'Coimbatore → Chennai',  href: '/taxi/chennai'     },
  { label: 'Trichy → Chennai',      href: '/taxi/chennai'     },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand column */}
          <div className="footer-brand-col">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/logo-white.png"
                alt="TamilNadu Drop Taxi logo"
                width={180}
                height={48}
                priority={false}
              />
            </Link>
            <p className="footer-tagline">
              Tamil Nadu&apos;s most trusted one-way outstation taxi service.
              Transparent fares. Verified drivers. 24/7 availability.
            </p>
            <div className="footer-contact">
              <a href="tel:+919751500800" className="footer-contact-link">
                <span className="footer-contact-icon">📞</span>
                +91-97515 00800
              </a>
              <a href="mailto:info@tamilnadudroptaxi.com" className="footer-contact-link">
                <span className="footer-contact-icon">✉️</span>
                info@tamilnadudroptaxi.com
              </a>
            </div>
          </div>

          {/* Services column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Our Services</h4>
            <ul className="footer-link-list">
              {SERVICES.map((s) => (
                <li key={s.href + s.label}>
                  <Link href={s.href} className="footer-link">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Quick Links</h4>
            <ul className="footer-link-list">
              {QUICK_LINKS.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="footer-link">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Top routes column */}
          <div className="footer-links-col">
            <h4 className="footer-col-heading">Popular Routes</h4>
            <ul className="footer-link-list">
              {TOP_ROUTES.map((r) => (
                <li key={r.href + r.label}>
                  <Link href={r.href} className="footer-link">{r.label}</Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {year} TamilNadu Drop Taxi. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy"    className="footer-bottom-link">Privacy Policy</Link>
            <Link href="/terms-conditions"  className="footer-bottom-link">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
