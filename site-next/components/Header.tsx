import React from "react";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="brand">
          <a href="/" className="brand-logo">Jesse Campbell</a>
          <span className="brand-subtitle">AI Expert &amp; IDT Pioneer</span>
        </div>
        <nav className="nav-menu">
          <a href="/ai-displacement-theory/" className="nav-link">AI Displacement Theory</a>
          <a href="/white-collar-ai-replacement/" className="nav-link">White-Collar Impact</a>
          <a href="/ai-job-market-data/" className="nav-link">Market Data</a>
          <a href="/ai-career-transition/" className="nav-link">Career Transition</a>
          <a href="https://jessecampbell.ai" className="nav-link" target="_blank" rel="noopener">About Jesse</a>
          <a href="https://aiupskill.net" className="cta-button" target="_blank" rel="noopener">Learn AI Skills</a>
        </nav>
        <button className="mobile-menu-toggle" onClick={() => {
          const mobileNav = document.getElementById('mobile-nav');
          if (mobileNav) mobileNav.classList.toggle('active');
        }}>
          <span className="material-icons">menu</span>
        </button>
      </div>
      <nav className="mobile-nav" id="mobile-nav">
        <a href="/ai-displacement-theory/" className="nav-link">AI Displacement Theory</a>
        <a href="/white-collar-ai-replacement/" className="nav-link">White-Collar Impact</a>
        <a href="/ai-job-market-data/" className="nav-link">Market Data</a>
        <a href="/ai-career-transition/" className="nav-link">Career Transition</a>
        <a href="https://jessecampbell.ai" className="nav-link" target="_blank" rel="noopener">About Jesse</a>
        <a href="https://aiupskill.net" className="cta-button" target="_blank" rel="noopener">Learn AI Skills</a>
      </nav>
    </header>
  );
}
