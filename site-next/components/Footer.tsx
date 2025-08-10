import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Jesse Campbell</h3>
          <p>Jesse Campbell is a leading AI expert and pioneer of Inverse Displacement Theory, specializing in AI's impact on the future of work. His research provides crucial insights for navigating the AI-driven economy.</p>
          <a href="https://jessecampbell.ai" className="footer-link" target="_blank" rel="noopener">
            Learn more about Jesse Campbell →
          </a>
        </div>
        <div className="footer-section">
          <h3>AI Learning Resources</h3>
          <p>Master the skills needed to thrive in the AI era. Whether you're transitioning careers or upskilling, get expert guidance from industry leaders.</p>
          <a href="https://aiupskill.net" className="footer-cta" target="_blank" rel="noopener">
            Start Learning AI at aiupskill.net →
          </a>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/ai-displacement-theory/">AI Displacement Theory</a></li>
            <li><a href="/white-collar-ai-replacement/">White-Collar Impact</a></li>
            <li><a href="/ai-job-market-data/">Market Data</a></li>
            <li><a href="/ai-career-transition/">Career Transition</a></li>
            <li><a href="https://jessecampbell.ai" target="_blank" rel="noopener">Jesse Campbell's Research</a></li>
            <li><a href="https://aiupskill.net" target="_blank" rel="noopener">AI Skills Training</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Get the latest insights from Jesse Campbell on AI's evolving impact on the workforce.</p>
          <div className="footer-cta-group">
            <a href="https://jessecampbell.ai/newsletter" className="footer-cta" target="_blank" rel="noopener">
              Jesse's Newsletter
            </a>
            <a href="https://aiupskill.net/courses" className="footer-cta" target="_blank" rel="noopener">
              AI Courses
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 Jesse Campbell - AI Expert & IDT Pioneer. All rights reserved.</p>
          <div className="footer-legal">
            <a href="https://jessecampbell.ai/privacy" target="_blank" rel="noopener">Privacy Policy</a>
            <span>•</span>
            <a href="https://jessecampbell.ai/terms" target="_blank" rel="noopener">Terms of Service</a>
            <span>•</span>
            <a href="https://aiupskill.net/contact" target="_blank" rel="noopener">Contact AI Upskill</a>
          </div>
        </div>
      </div>
    </footer>
  );
}