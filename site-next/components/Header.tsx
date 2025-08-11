import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <Link href="/" className="brand-logo">Jesse Campbell</Link>
          <span className="brand-subtitle">AI Expert &amp; IDT Pioneer</span>
        </div>
        <nav className="nav-menu">
<Link href="/ai-displacement-theory/" className="nav-link">AI Displacement Theory</Link>
        <Link href="/white-collar-ai-replacement/" className="nav-link">White-Collar Impact</Link>
        <Link href="/ai-job-market-data/" className="nav-link">Market Data</Link>
        <Link href="/ai-career-transition/" className="nav-link">Career Transition</Link>
<Link href="https://jessecampbell.ai" className="nav-link" target="_blank" rel="noopener">About Jesse</Link>
          <Link href="https://aiupskill.net" className="cta-button" target="_blank" rel="noopener">Learn AI Skills</Link>
        </nav>
        <button className="mobile-menu-toggle" onClick={() => {
          const mobileNav = document.getElementById('mobile-nav');
          if (mobileNav) mobileNav.classList.toggle('active');
        }}>
          <span className="material-icons">menu</span>
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-nav">
        <Link href="/ai-displacement-theory/" className="nav-link">AI Displacement Theory</Link>
        <Link href="/white-collar-ai-replacement/" className="nav-link">White-Collar Impact</Link>
        <Link href="/ai-job-market-data/" className="nav-link">Market Data</Link>
        <Link href="/ai-career-transition/" className="nav-link">Career Transition</Link>
        <Link href="https://jessecampbell.ai" className="nav-link" target="_blank" rel="noopener">About Jesse</Link>
        <Link href="https://aiupskill.net" className="cta-button" target="_blank" rel="noopener">Learn AI Skills</Link>
      </nav>
    </header>
  );
}
