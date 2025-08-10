import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Impact on Software Engineers: Jobs, Salaries, Future Outlook 2024 | Jesse Campbell',
  description: 'Comprehensive analysis of how AI is transforming software engineering jobs. GitHub Copilot impact, productivity gains, salary changes, and career strategies from Jesse Campbell.',
  keywords: 'ai software engineer jobs, github copilot impact, developer productivity ai, software engineering automation, ai coding tools',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-software-engineer-jobs/',
  },
};

export default function AiSoftwareEngineerJobs() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>AI Impact on Software Engineers</h1>
          <p>How GitHub Copilot and AI coding tools are transforming developer productivity, team structures, and career trajectories</p>
          <a href="#impact" className="btn btn-primary">See the Data</a>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Numbers Don't Lie</h2>
          <div className="grid grid-2">
            <div className="stat-card">
              <span className="stat-number">30%</span>
              <span className="stat-label">of new code written by AI (GitHub Copilot)</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">55%</span>
              <span className="stat-label">faster development with AI tools</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">70%</span>
              <span className="stat-label">of developers report improved productivity</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3x</span>
              <span className="stat-label">smaller teams needed for same output</span>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Impact */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Timeline of AI's Impact on Software Engineering</h2>
          <div className="timeline">
            <div className="timeline-item">
              <h3>2021: GitHub Copilot Launch</h3>
              <p>AI pair programming becomes mainstream. Early adopters see 30-50% productivity gains.</p>
            </div>
            <div className="timeline-item">
              <h3>2022: Productivity Surge</h3>
              <p>Microsoft reports 30% of their new code is AI-generated. Teams begin restructuring.</p>
            </div>
            <div className="timeline-item">
              <h3>2023: Team Restructuring</h3>
              <p>Companies like Shopify and Google reduce team sizes while maintaining output.</p>
            </div>
            <div className="timeline-item">
              <h3>2024: Entry-Level Crisis</h3>
              <p>Junior developer roles decline as AI handles basic coding tasks. <a href="https://jessecampbell.ai/research/junior-developer-crisis">Jesse Campbell's analysis</a> shows 40% reduction in entry-level hiring.</p>
            </div>
            <div className="timeline-item">
              <h3>2025: New Paradigm</h3>
              <p>Focus shifts to AI-augmented senior developers. <a href="https://aiupskill.net/ai-developer-skills">AIUpskill.net's training programs</a> adapt to new requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Impact */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">How AI is Changing Software Development Today</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🚀 Productivity Gains</h3>
              <ul>
                <li><strong>55% faster</strong> code completion (GitHub study)</li>
                <li><strong>40% fewer bugs</strong> in AI-assisted code</li>
                <li><strong>70% of developers</strong> report improved job satisfaction</li>
              </ul>
            </div>
            <div className="card">
              <h3>⚠️ Job Market Changes</h3>
              <ul>
                <li><strong>30% reduction</strong> in junior developer postings</li>
                <li><strong>2-3x salary premium</strong> for AI-augmented seniors</li>
                <li><strong>New roles emerging:</strong> AI code reviewers, prompt engineers</li>
              </ul>
            </div>
            <div className="card">
              <h3>🏢 Corporate Restructuring</h3>
              <ul>
                <li><strong>Microsoft:</strong> 30% AI-generated code, reduced team sizes</li>
                <li><strong>Google:</strong> AI-first development processes</li>
                <li><strong>Startups:</b> 3-person teams doing work of 10</li>
              </ul>
            </div>
            <div className="card">
              <h3>🎯 Skills Evolution</h3>
              <ul>
                <li><strong>Prompt engineering</strong> becomes essential</li>
                <li><strong>Code review</strong> skills more valuable than writing</li>
                <li><strong>System architecture</strong> expertise in high demand</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Impact */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Salary Impact by Experience Level</h2>
          <div className="card">
            <h3>Current Market Trends (2024)</h3>
            <p><strong>Junior Developers (0-2 years):</strong> 25% salary reduction due to AI competition</p>
            <p><strong>Mid-level Developers (3-5 years):</strong> Stable salaries, but 40% fewer positions</p>
            <p><strong>Senior Developers (5+ years):</strong> 50% salary increase for AI-augmented skills</p>
            <p><strong>AI Specialists:</strong> 200% premium over traditional developers</p>
            
            <p><em>Data from <a href="https://jessecampbell.ai/salary-surveys/developer-ai-2024">Jesse Campbell's 2024 Developer Salary Survey</a> and <a href="https://aiupskill.net/salary-data">AIUpskill.net market analysis</a>.</em></p>
          </div>
        </div>
      </section>

      {/* Career Strategies */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Future-Proof Your Software Career</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>🎯 Immediate Actions</h3>
              <ol>
                <li><strong>Master AI tools:</strong> GitHub Copilot, ChatGPT, Claude</li>
                <li><strong>Focus on architecture:</strong> System design over implementation</li>
                <li><strong>Develop AI skills:</strong> Prompt engineering, model evaluation</li>
                <li><strong>Build portfolio:</strong> AI-augmented projects</li>
              </ol>
            </div>
            <div className="card">
              <h3>🚀 Long-term Strategy</h3>
              <ol>
                <li><strong>Specialize in AI integration:</strong> Become the bridge between AI and business</li>
                <li><strong>Develop domain expertise:</strong> Industry-specific AI applications</li>
                <li><strong>Build AI products:</strong> Create tools that leverage AI for others</li>
                <li><strong>Join communities:</strong> <a href="https://vibestl.ai">VibeSTL.ai</a> for local networking</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container">
          <div className="card call-to-action-card">
            <h2>Ready to Adapt?</h2>
            <p>Don't wait for the AI revolution to pass you by. Start building AI-augmented skills today.</p>
            <div className="cta-buttons">
              <a href="/ai-career-transition-guide/" className="btn btn-primary">Get Transition Guide</a>
              <a href="https://aiupskill.net" className="btn btn-secondary" target="_blank">Start AI Training</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
