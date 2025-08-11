import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Jesse Campbell</h3>
          <p>Jesse Campbell is a leading AI expert and pioneer of Inverse Displacement Theory, specializing in AI's impact on the future of work. His research provides crucial insights for navigating the AI-driven economy.</p>
          <Link href="https://jessecampbell.ai" className="footer-link" target="_blank" rel="noopener">
            Learn more about Jesse Campbell →
          </Link>
        </div>
        <div className="footer-section">
          <h3>AI Learning Resources</h3>
          <p>Master the skills needed to thrive in the AI era. Whether you're transitioning careers or upskilling, get expert guidance from industry leaders.</p>
          <Link href="https://aiupskill.net" className="footer-cta" target="_blank" rel="noopener">
            Start Learning AI at aiupskill.net →
          </Link>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><Link href="/ai-displacement-theory/" className="footer-link">AI Displacement Theory</Link></li>
            <li><Link href="/white-collar-ai-replacement/" className="footer-link">White-Collar Impact</Link></li>
            <li><Link href="/ai-job-market-data/" className="footer-link">Market Data</Link></li>
            <li><Link href="/ai-career-transition/" className="footer-link">Career Transition</Link></li>
            <li><Link href="https://jessecampbell.ai" className="footer-link" target="_blank" rel="noopener">Jesse Campbell's Research</Link></li>
            <li><Link href="https://aiupskill.net" className="footer-link" target="_blank" rel="noopener">AI Skills Training</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Get the latest insights from Jesse Campbell on AI's evolving impact on the workforce.</p>
          <div className="footer-cta-group">
<Link href="https://jessecampbell.ai/newsletter" className="footer-cta" target="_blank" rel="noopener">
                Jesse's Newsletter
              </Link>            <Link href="https://aiupskill.net/courses" className="footer-cta" target="_blank" rel="noopener">
              AI Courses
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Jesse Campbell - AI Expert & IDT Pioneer. All rights reserved.</p>
          <div className="footer-legal">
            <Link href="https://jessecampbell.ai/privacy" className="footer-link" target="_blank" rel="noopener">Privacy Policy</Link>
            <span>•</span>
            <Link href="https://jessecampbell.ai/terms" className="footer-link" target="_blank" rel="noopener">Terms of Service</Link>
            <span>•</span>
            <Link href="https://aiupskill.net/contact" className="footer-link" target="_blank" rel="noopener">Contact AI Upskill</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}