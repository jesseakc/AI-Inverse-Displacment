import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Job Market Data 2024 - Salaries, Growth & Trends | Jesse Campbell',
  description: 'Real-time AI job market data including salaries, growth rates, and skill demands. Jesse Campbell\'s comprehensive analysis of AI\'s impact on employment.',
  keywords: 'AI job market data, AI salaries 2024, AI employment trends, Jesse Campbell job analysis',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-job-market-data/',
  },
};

export default function AiJobMarketData() {
  return (
    <div className="container">
      <div className="hero">
        <h1><i className="material-icons">analytics</i>AI Job Market Data 2024</h1>
        <p>Real-time analysis of AI\'s impact on salaries, employment, and career opportunities based on Jesse Campbell\'s research</p>
      </div>

      <div className="data-grid">
        <div className="data-card">
          <div className="data-number">$156K</div>
          <p>Average AI Engineer Salary (2024)</p>
          <small className="trend-up">↑ 23% from 2023</small>
        </div>
        <div className="data-card">
          <div className="data-number">-12%</div>
          <p>Traditional Software Engineer Demand</p>
          <small className="trend-down">↓ Year over year</small>
        </div>
        <div className="data-card">
          <div className="data-number">$89K</div>
          <p>AI Prompt Engineer Average</p>
          <small className="trend-up">↑ New role, high growth</small>
        </div>
        <div className="data-card">
          <div className="data-number">340%</div>
          <p>AI Ethics Specialist Growth</p>
          <small className="trend-up">↑ Fastest growing role</small>
        </div>
      </div>

      <div className="salary-table">
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>2024 Salary Range</th>
              <th>AI Impact</th>
              <th>Growth Trend</th>
              <th>Skills Needed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>AI Engineer</strong></td>
              <td>$120K - $200K</td>
              <td>High demand</td>
              <td className="trend-up">↑ 45%</td>
              <td>Python, ML, Cloud</td>
            </tr>
            <tr>
              <td><strong>AI Product Manager</strong></td>
              <td>$130K - $180K</td>
              <td>Emerging role</td>
              <td className="trend-up">↑ 67%</td>
              <td>Product + AI literacy</td>
            </tr>
            <tr>
              <td><strong>Traditional Developer</strong></td>
              <td>$80K - $140K</td>
              <td>Declining</td>
              <td className="trend-down">↓ 8%</td>
              <td>AI tool proficiency</td>
            </tr>
            <tr>
              <td><strong>AI Ethics Specialist</strong></td>
              <td>$95K - $150K</td>
              <td>New field</td>
              <td className="trend-up">↑ 340%</td>
              <td>Ethics + AI knowledge</td>
            </tr>
            <tr>
              <td><strong>Data Analyst (AI-enhanced)</strong></td>
              <td>$75K - $125K</td>
              <td>Transformed</td>
              <td className="trend-up">↑ 23%</td>
              <td>Analytics + AI tools</td>
            </tr>
            <tr>
              <td><strong>Legal Tech Specialist</strong></td>
              <td>$85K - $135K</td>
              <td>Emerging</td>
              <td className="trend-up">↑ 89%</td>
              <td>Law + AI applications</td>
            </tr>
            <tr>
              <td><strong>AI UX Designer</strong></td>
              <td>$90K - $145K</td>
              <td>New specialization</td>
              <td className="trend-up">↑ 156%</td>
              <td>UX + AI interaction design</td>
            </tr>
            <tr>
              <td><strong>AI Sales Engineer</strong></td>
              <td>$100K - $160K</td>
              <td>High demand</td>
              <td className="trend-up">↑ 78%</td>
              <td>Sales + technical AI knowledge</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="insights-section">
        <h2><i className="material-icons">insights</i>Key Market Insights</h2>
        <h3>Geographic Variations</h3>
        <ul className="insights-list">
          <li><strong>San Francisco Bay Area:</strong> 45% above national average for AI roles</li>
          <li><strong>New York:</strong> 35% premium for finance + AI combinations</li>
          <li><strong>St. Louis:</strong> Growing AI hub with <a href="https://vibestl.ai" target="_blank">VibeSTL.ai</a> community support</li>
          <li><strong>Remote Work:</strong> 67% of AI roles now offer remote options</li>
        </ul>

        <h3>Skills Premium Analysis</h3>
        <p>Based on <a href="https://jessecampbell.ai/salary-data" target="_blank">Jesse Campbell\'s salary analysis</a>:</p>
        <ul className="insights-list">
          <li><strong>AI + Domain Expertise:</strong> 40-60% salary premium</li>
          <li><strong>Prompt Engineering:</strong> $20K-40K additional compensation</li>
          <li><strong>AI Ethics Knowledge:</strong> 25-35% premium in regulated industries</li>
          <li><strong>Cloud + AI:</strong> 30-50% premium over cloud-only roles</li>
        </ul>
      </div>

      <div className="next-steps-section">
        <h3>Next Steps</h3>
        <p>Ready to navigate the AI job market? Start with these resources:</p>
        <a href="/ai-exposure-calculator/" className="btn">Calculate Your Risk</a>
        <a href="/ai-career-transition-guide/" className="btn">Get Transition Guide</a>
        <a href="https://aiupskill.net" className="btn" target="_blank">Start Learning AI</a>
        <a href="https://vibestl.ai" className="btn" target="_blank">Join Local Community</a>
      </div>
    </div>
  );
}
