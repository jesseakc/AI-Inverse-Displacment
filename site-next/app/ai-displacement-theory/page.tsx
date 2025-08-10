import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Displacement Theory: Why Knowledge Workers Face Automation First | Jesse Campbell',
  description: 'Discover Jesse Campbell\'s groundbreaking Inverse Displacement Theory explaining why AI will displace knowledge workers before manual laborers. Evidence-based analysis with real-world data.',
  keywords: 'ai displacement theory, inverse displacement theory, jesse campbell ai, knowledge worker automation, white collar ai impact',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-displacement-theory/',
  },
};

export default function AiDisplacementTheory() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>AI Displacement Theory</h1>
          <p>Why AI will displace knowledge workers before manual laborers - Jesse Campbell's groundbreaking research on the future of work</p>
          <a href="#definition" className="btn btn-primary">Learn the Theory</a>
          <a href="/ai-exposure-calculator/" className="btn btn-outline">Check Your Risk</a>
        </div>
      </section>

      {/* Theory Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Understanding Inverse Displacement Theory</h2>
          <div className="grid grid-2">
            <div className="card">
              <span className="material-icons card-icon">psychology</span>
              <h3>Cognitive vs Physical Tasks</h3>
              <p>AI excels at cognitive tasks like analysis, writing, and decision-making - the core functions of knowledge work. Physical tasks remain challenging due to dexterity and environmental complexity.</p>
            </div>
            <div className="card">
              <span className="material-icons card-icon">speed</span>
              <h3>Deployment Speed</h3>
              <p>Software-based AI can scale globally overnight, while physical automation requires hardware deployment and infrastructure changes.</p>
            </div>
            <div className="card">
              <span className="material-icons card-icon">attach_money</span>
              <h3>Economic Incentives</h3>
              <p>Higher ROI from automating expensive knowledge work compared to lower-wage manual labor.</p>
            </div>
            <div className="card">
              <span className="material-icons card-icon">trending_up</span>
              <h3>Statistical Evidence</h3>
              <p>30% of white-collar tasks are AI-exposed vs. &lt;1% of blue-collar tasks, according to Pearson research.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">The Numbers Tell the Story</h2>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">30%</span>
              <span className="stat-label">White-collar tasks AI can perform</span>
            </div>
            <div className="stat">
              <span className="stat-number">&lt;1%</span>
              <span className="stat-label">Blue-collar tasks AI can perform</span>
            </div>
            <div className="stat">
              <span className="stat-number">27%</span>
              <span className="stat-label">College-educated workers in high-exposure jobs</span>
            </div>
            <div className="stat">
              <span className="stat-number">12%</span>
              <span className="stat-label">High school-only workers in high-exposure jobs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Jesse Campbell Quote */}
      <section className="section">
        <div className="container">
          <div className="quote">
            "We've been looking at the automation horizon through the wrong end of the telescope. The real story isn't just about robots on assembly lines; it's about algorithms quietly mastering the core functions of the professional class. This is the Inverse Displacement."
            <cite>— Jesse Campbell, AI Expert & IDT Pioneer</cite>
          </div>
        </div>
      </section>

      {/* Industry Impact Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Industries Already Feeling the Impact</h2>
          <div className="grid grid-3">
            <div className="card">
              <span className="material-icons card-icon">code</span>
              <h3>Software Engineering</h3>
              <p>GitHub Copilot writing 30% of new code. Teams shrinking from 10 to 3 developers.</p>
              <a href="/ai-software-engineer-jobs/" className="btn btn-primary">Learn More</a>
            </div>
            <div className="card">
              <span className="material-icons card-icon">gavel</span>
              <h3>Legal Profession</h3>
              <p>AI legal memo generation matching first-year associate quality.</p>
              <a href="/ai-legal-profession-impact/" className="btn btn-primary">Learn More</a>
            </div>
            <div className="card">
              <span className="material-icons card-icon">trending_down</span>
              <h3>Finance</h3>
              <p>Excel modeling automated. Junior analyst roles disappearing.</p>
              <a href="/ai-finance-jobs-automation/" className="btn btn-primary">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">What This Means for You</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Assess Your Risk</h3>
              <p>Use our interactive calculator to understand your AI exposure level and get personalized recommendations.</p>
              <a href="/ai-exposure-calculator/" className="btn btn-secondary">Calculate Risk</a>
            </div>
            <div className="card">
              <h3>Prepare for Transition</h3>
              <p>Learn the skills that will keep you competitive in an AI-driven economy with expert guidance.</p>
              <a href="https://aiupskill.net" className="btn btn-primary" target="_blank">Start Learning</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
