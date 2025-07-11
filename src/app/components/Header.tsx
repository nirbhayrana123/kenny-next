'use client';

'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // ✅ NEW
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

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const pathname = usePathname(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header id="headerbg" className={`header ${scrolling ? 'bgcolor' : ''} ${pathname !== '/' ? 'blacktext' : ''}`}>
      <div className="container">
        <div className={`navbars ${menuOpen ? 'openmenu' : ''}`} id="nav-menu">
          <div className="topbar">
            <div className="logo">
              <a href="/" className="logo-brand">
                <img src="/images/logo.png" alt="Logo" />
              </a>

              <div className="flexsocial whitei">
                <a href="#" className="sociallink">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="sociallink">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#" className="sociallink">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="sociallink">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/meet-kenny">Meet Kenny</a>
            </li>
            <li>
              <a href="/courses">Courses</a>
            </li>
            <li>
              <a href="/books">Books</a>
            </li>
 
            <li className="dropreletiv">
              <a href="#">
                <span>Free Resources</span>{' '}
                <FontAwesomeIcon icon={faChevronDown} />
              </a>
              <ul className="doropmenu">
                <li>
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/podcast">Podcast</a>
                </li>
                <li>
                  <a href="/feelings-wheel">Feelings Wheel</a>
                </li>
                <li>
                  <a href="/worst-day-cycle">Worst Day Cycle</a>
                </li>
              </ul>
            </li>

            <li>
              <a href="/contact-us">Contact</a>
            </li>
            <li>
              <a className="contact-nav" href="/book-session">
                Book a Session
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}



