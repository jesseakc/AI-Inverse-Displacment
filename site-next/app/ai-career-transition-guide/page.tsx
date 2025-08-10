import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Career Transition Guide - 90-Day Plan by Jesse Campbell',
  description: 'Complete 90-day AI career transition guide based on Jesse Campbell\'s Inverse Displacement Theory. Step-by-step process to future-proof your career.',
  keywords: 'AI career transition, career pivot AI, future-proof skills, Jesse Campbell career guide',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-career-transition-guide/',
  },
};

export default function AiCareerTransitionGuide() {
  return (
    <div className="container">
      <div className="hero">
        <h1><i className="material-icons" style={{ verticalAlign: 'middle' }}>trending_up</i>AI Career Transition Guide</h1>
        <p>Your complete 90-day roadmap to future-proof your career based on Jesse Campbell's Inverse Displacement Theory</p>
      </div>

      <div className="timeline">
        {/* Week 1-2: Assessment & Planning */}
        <div className="timeline-item">
          <div className="week-header">
            <div className="week-number">1-2</div>
            <div>
              <h2>Assessment & Strategic Planning</h2>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '11%' }}></div>
              </div>
            </div>
          </div>
          <ul className="task-list">
            <li className="task-item">
              <i className="material-icons task-icon">assessment</i>
              <div>
                <strong>Use the <a href="/ai-exposure-calculator/">AI Exposure Calculator</a></strong><br />
                Get your personalized risk assessment based on Jesse Campbell's methodology
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">school</i>
              <div>
                <strong>Complete Skills Gap Analysis</strong><br />
                Identify AI-resistant skills you need to develop
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">timeline</i>
              <div>
                <strong>Set 90-Day Goals</strong><br />
                Define specific, measurable career transition objectives
              </div>
            </li>
          </ul>
        </div>

        {/* Week 3-4: Foundation Building */}
        <div className="timeline-item">
          <div className="week-header">
            <div className="week-number">3-4</div>
            <div>
              <h2>Foundation Building</h2>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '22%' }}></div>
              </div>
            </div>
          </div>
          <ul className="task-list">
            <li className="task-item">
              <i className="material-icons task-icon">psychology</i>
              <div>
                <strong>Master AI Tools in Your Domain</strong><br />
                Start with <a href="https://aiupskill.net/courses" target="_blank">AIUpskill.net courses</a> specific to your industry
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">groups</i>
              <div>
                <strong>Join Professional Networks</strong><br />
                Connect with <a href="https://vibestl.ai" target="_blank">VibeSTL.ai community</a> for local support
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">book</i>
              <div>
                <strong>Study Jesse Campbell's Research</strong><br />
                Read <a href="https://jessecampbell.ai/research" target="_blank">latest AI displacement studies</a>
              </div>
            </li>
          </ul>
        </div>

        {/* Week 5-8: Skill Development */}
        <div className="timeline-item">
          <div className="week-header">
            <div className="week-number">5-8</div>
            <div>
              <h2>Skill Development & Certification</h2>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '44%' }}></div>
              </div>
            </div>
          </div>
          <ul className="task-list">
            <li className="task-item">
              <i className="material-icons task-icon">workspace_premium</i>
              <div>
                <strong>Complete AI Certification</strong><br />
                Earn credentials from <a href="https://aiupskill.net/certifications" target="_blank">AIUpskill.net certification programs</a>
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">build</i>
              <div>
                <strong>Build AI-Enhanced Portfolio</strong><br />
                Create projects demonstrating AI-human collaboration
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">record_voice_over</i>
              <div>
                <strong>Practice AI Communication</strong><br />
                Master prompt engineering and AI interaction skills
              </div>
            </li>
          </ul>
        </div>

        {/* Week 9-12: Implementation & Networking */}
        <div className="timeline-item">
          <div className="week-header">
            <div className="week-number">9-12</div>
            <div>
              <h2>Implementation & Job Market Entry</h2>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
          <ul className="task-list">
            <li className="task-item">
              <i className="material-icons task-icon">work</i>
              <div>
                <strong>Apply for AI-Enhanced Roles</strong><br />
                Target positions that leverage your new AI skills
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">handshake</i>
              <div>
                <strong>Network Strategically</strong><br />
                Attend <a href="https://vibestl.ai/events" target="_blank">VibeSTL.ai events</a> and industry meetups
              </div>
            </li>
            <li className="task-item">
              <i className="material-icons task-icon">analytics</i>
              <div>
                <strong>Track Progress & Iterate</strong><br />
                Monitor results and adjust strategy based on market feedback
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="resource-grid">
        <div className="resource-card">
          <div className="icon">🎯</div>
          <h3>Personalized Assessment</h3>
          <p>Start with our <a href="/ai-exposure-calculator/">AI Exposure Calculator</a> to get your personalized risk profile</p>
          <a href="/ai-exposure-calculator/" className="btn">Take Assessment</a>
        </div>

        <div className="resource-card">
          <div className="icon">📚</div>
          <h3>Learning Resources</h3>
          <p>Access curated courses and certifications at <a href="https://aiupskill.net" target="_blank">AIUpskill.net</a></p>
          <a href="https://aiupskill.net" className="btn" target="_blank">Start Learning</a>
        </div>

        <div className="resource-card">
          <div className="icon">🤝</div>
          <h3>Community Support</h3>
          <p>Join the <a href="https://vibestl.ai" target="_blank">VibeSTL.ai</a> community for networking and support</p>
          <a href="https://vibestl.ai" className="btn" target="_blank">Join Community</a>
        </div>

        <div className="resource-card">
          <div className="icon">📊</div>
          <h3>Market Data</h3>
          <p>Stay updated with <a href="/ai-job-market-data/">real-time job market data</a> and salary trends</p>
          <a href="/ai-job-market-data/" className="btn">View Data</a>
        </div>
      </div>

      <div style={{ background: 'white', borderRadius: '12px', padding: '2rem', margin: '2rem 0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <h3><i className="material-icons">lightbulb</i>Success Stories</h3>
        <p>Read how professionals successfully transitioned their careers using Jesse Campbell's framework:</p>
        <ul style={{ margin: '1rem 0', paddingLeft: '2rem' }}>
          <li><a href="https://jessecampbell.ai/case-studies/software-engineer" target="_blank">Software Engineer → AI Product Manager</a></li>
          <li><a href="https://jessecampbell.ai/case-studies/marketing-manager" target="_blank">Marketing Manager → AI Marketing Strategist</a></li>
          <li><a href="https://jessecampbell.ai/case-studies/financial-analyst" target="_blank">Financial Analyst → AI Risk Consultant</a></li>
        </ul>
      </div>
    </div>
  );
}