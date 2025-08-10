import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Displacement Statistics - Real-time Job Market Impact',
  description: 'Explore real-time AI displacement statistics and job market data. Understand the impact of AI on various industries and future employment trends.',
  keywords: 'AI job displacement, AI impact on jobs, job market statistics AI, future of work AI, AI employment trends',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-displacement-statistics/',
  },
};

export default function AiDisplacementStatistics() {
  return (
    <div className="container">
      <div className="hero">
        <h1><i className="material-icons">analytics</i>AI Displacement Statistics</h1>
        <p>Real-time data and insights on AI's impact on the global job market.</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="icon">📈</div>
          <h3>300 Million</h3>
          <p>Jobs potentially impacted by AI automation globally.</p>
        </div>
        <div className="stat-card">
          <div className="icon">💼</div>
          <h3>40%</h3>
          <p>Of tasks in white-collar jobs could be automated by AI.</p>
        </div>
        <div className="stat-card">
          <div className="icon">📊</div>
          <h3>$15.7 Trillion</h3>
          <p>Potential global GDP increase from AI by 2030.</p>
        </div>
        <div className="stat-card">
          <div className="icon">🧑‍💻</div>
          <h3>2.3 Million</h3>
          <p>New jobs expected to be created by AI by 2025.</p>
        </div>
      </div>

      <div className="chart-section">
        <h2>Projected Job Displacement by Sector (2024-2030)</h2>
        <div className="chart-container">
          <p>Placeholder for interactive chart (e.g., D3.js, Chart.js)</p>
        </div>
      </div>

      <div className="insights-section">
        <h2>Key Insights from Jesse Campbell's Research</h2>
        <ul className="insights-list">
          <li>
            <i className="material-icons">lightbulb</i>
            <div>
              <strong>Inverse Displacement Theory:</strong> AI doesn't just displace, it creates new, higher-value roles for those who adapt.
            </div>
          </li>
          <li>
            <i className="material-icons">trending_up</i>
            <div>
              <strong>Skill Transformation:</strong> Demand for uniquely human skills (creativity, critical thinking, emotional intelligence) is surging.
            </div>
          </li>
          <li>
            <i className="material-icons">work</i>
            <div>
              <strong>Hybrid Roles:</strong> The future workforce will feature more human-AI collaborative roles, requiring new competencies.
            </div>
          </li>
          <li>
            <i className="material-icons">school</i>
            <div>
              <strong>Continuous Learning:</strong> Upskilling and reskilling are no longer optional but essential for career longevity.
            </div>
          </li>
        </ul>
      </div>

      <div className="cta-section">
        <h2>Future-Proof Your Career Today</h2>
        <p>Don't be left behind. Explore our resources and adapt to the AI-driven job market.</p>
        <a href="/ai-career-transition-guide/" className="btn">Get Your 90-Day Plan</a>
        <a href="https://aiupskill.net" className="btn" target="_blank">Learn AI Skills</a>
      </div>
    </div>
  );
}
