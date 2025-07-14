'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faXmark,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // 500ms fake loader time

    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
          <div className="spinner"></div>
        </div>
      )}

      <header
        id="headerbg"
        className={`header ${pathname !== '/' ? 'blacktext' : ''} ${scrolling ? 'bgcolor' : ''
          }`}
      >
        <div className="container">
          <div
            className={`navbars ${menuOpen ? 'openmenu' : ''}`}
            id="nav-menu"
          >
            <div className="topbar">
              <div className="logo">
                <a href="/" className="logo-brand">
                  <img src="/images/logo.png" alt="Logo" />
                </a>

                <div className={`flexsocial ${pathname === '/' ? 'whitei' : ''}`}>
                  <Link
                    target="black"
                    href="https://www.facebook.com/kennyweiss.net"
                    className="sociallink"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Link>
                  <Link
                    target="black"
                    href="https://twitter.com/kennyweisskw"
                    className="sociallink"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </Link>
                  <Link
                    target="black"
                    href="https://www.instagram.com/kennyweiss.kw"
                    className="sociallink"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                  <Link
                    target="black"
                    href="https://www.tiktok.com/@kennyweisskw"
                    className="sociallink"
                  >
                    <FontAwesomeIcon icon={faTiktok} />
                  </Link>
                </div>
              </div>

              <button
                className="menu-toggle"
                id="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {!menuOpen ? (
                  <FontAwesomeIcon icon={faBars} className="open" />
                ) : (
                  <FontAwesomeIcon icon={faXmark} className="close" />
                )}
              </button>
            </div>

            <ul className="navmenu">
              <li>
                <Link href="/" className={pathname === '/' ? 'active' : ''}>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/meet-kenny"
                  className={pathname === '/meet-kenny' ? 'active' : ''}
                >
                  Meet Kenny
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className={pathname === '/courses' ? 'active' : ''}
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/books"
                  className={pathname === '/books' ? 'active' : ''}
                >
                  Books
                </Link>
              </li>

              <li className="dropreletiv">
                <Link href="#">
                  <span>Free Resources</span>{' '}
                  <FontAwesomeIcon icon={faChevronDown} />
                </Link>
                <ul className="doropmenu">
                  <li>
                    <Link
                      href="/blog"
                      className={pathname === '/blog' ? 'active' : ''}
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/podcast"
                      className={pathname === '/podcast' ? 'active' : ''}
                    >
                      Podcast
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/feelings-wheel"
                      className={pathname === '/feelings-wheel' ? 'active' : ''}
                    >
                      Feelings Wheel
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/worst-day-cycle"
                      className={pathname === '/worst-day-cycle' ? 'active' : ''}
                    >
                      Worst Day Cycle
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className={pathname === '/contact-us' ? 'active' : ''}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link className="contact-nav" href="/book-session">
                  Book a Session
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
