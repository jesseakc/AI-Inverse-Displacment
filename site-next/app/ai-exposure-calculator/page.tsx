import React, { useState, useEffect } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Job Exposure Calculator - Check Your Risk Level | Jesse Campbell',
  description: 'Interactive AI job exposure calculator based on Jesse Campbell\'s Inverse Displacement Theory. Assess your risk of AI automation and get personalized career guidance.',
  keywords: 'AI job exposure calculator, AI risk assessment, career automation risk, Jesse Campbell AI tool',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-exposure-calculator/',
  },
};

export default function AiExposureCalculator() {
  const [role, setRole] = useState('');
  const [repetitive, setRepetitive] = useState('');
  const [experience, setExperience] = useState('');
  const [aiUsage, setAiUsage] = useState('');
  const [riskScore, setRiskScore] = useState(0);
  const [riskLevel, setRiskLevel] = useState('');
  const [riskDescription, setRiskDescription] = useState('');
  const [showResults, setShowResults] = useState(false);

  const calculateRisk = () => {
    let totalRisk = 0;

    const roleRisk = document.querySelector(`input[name="role"][value="${role}"]`)?.getAttribute('data-risk');
    if (roleRisk) totalRisk += parseInt(roleRisk);

    const repetitiveRisk = document.querySelector(`input[name="repetitive"][value="${repetitive}"]`)?.getAttribute('data-risk');
    if (repetitiveRisk) totalRisk += parseInt(repetitiveRisk);

    const experienceRisk = document.querySelector(`input[name="experience"][value="${experience}"]`)?.getAttribute('data-risk');
    if (experienceRisk) totalRisk += parseInt(experienceRisk);

    const aiUsageRisk = document.querySelector(`input[name="ai-usage"][value="${aiUsage}"]`)?.getAttribute('data-risk');
    if (aiUsageRisk) totalRisk += parseInt(aiUsageRisk);

    totalRisk = Math.max(0, Math.min(100, totalRisk));
    setRiskScore(totalRisk);
    displayResults(totalRisk);
  };

  const displayResults = (risk: number) => {
    if (risk < 30) {
      setRiskLevel('Low Risk');
      setRiskDescription('Your role has relatively low exposure to AI automation. Focus on staying current with AI tools to maintain your advantage.');
    } else if (risk < 60) {
      setRiskLevel('Medium Risk');
      setRiskDescription('Your role faces moderate AI exposure. Start developing AI-complementary skills and consider strategic career moves.');
    } else {
      setRiskLevel('High Risk');
      setRiskDescription('Your role has high AI automation risk. Immediate action is recommended to future-proof your career.');
    }
    setShowResults(true);
  };

  const getTransitionRole = (selectedRole: string) => {
    const transitions: { [key: string]: string } = {
      software: 'AI engineering management',
      data: 'AI strategy consulting',
      legal: 'AI ethics and policy',
      finance: 'AI risk management',
      marketing: 'AI brand strategy',
      medical: 'AI medical consulting',
    };
    return transitions[selectedRole] || 'AI-complementary roles';
  };

  const getTrainingProgram = (selectedRole: string) => {
    return `<a href="https://aiupskill.net/courses/${selectedRole}" target="_blank">AIUpskill.net ${selectedRole} specialization</a>`;
  };

  const getCommunity = (selectedRole: string) => {
    return `<a href="https://vibestl.ai/groups/${selectedRole}" target="_blank">VibeSTL.ai ${selectedRole} professionals</a>`;
  };

  const updateRecommendations = (selectedRole: string, risk: number) => {
    const recommendations: { [key: string]: string[] } = {
      software: [
        'Learn GitHub Copilot and AI coding assistants',
        'Focus on system architecture and AI integration',
        'Develop expertise in AI model deployment',
      ],
      data: [
        'Master AI-powered analytics tools',
        'Learn prompt engineering for data analysis',
        'Focus on business strategy and interpretation',
      ],
      legal: [
        'Learn AI contract review tools',
        'Focus on complex litigation and strategy',
        'Develop expertise in AI law and ethics',
      ],
      finance: [
        'Master AI financial modeling tools',
        'Focus on strategic advisory and client relations',
        'Develop expertise in AI risk management',
      ],
      marketing: [
        'Learn AI content generation tools',
        'Focus on brand strategy and human creativity',
        'Develop expertise in AI marketing analytics',
      ],
      medical: [
        'Learn AI diagnostic tools',
        'Focus on patient care and complex cases',
        'Develop expertise in AI medical ethics',
      ],
    };

    const immediateActionsList = recommendations[selectedRole]?.map(action => <li key={action}>{action}</li>) || [];
    let careerStrategyList;

    if (risk > 60) {
      careerStrategyList = (
        <>
          <li>Consider transitioning to {getTransitionRole(selectedRole)}</li>
          <li dangerouslySetInnerHTML={{ __html: `Start ${getTrainingProgram(selectedRole)}` }}></li>
          <li dangerouslySetInnerHTML={{ __html: `Join ${getCommunity(selectedRole)} for networking` }}></li>
        </>
      );
    } else {
      careerStrategyList = (
        <>
          <li>Enhance your role with AI collaboration skills</li>
          <li dangerouslySetInnerHTML={{ __html: `Take ${getTrainingProgram(selectedRole)}` }}></li>
          <li dangerouslySetInnerHTML={{ __html: `Connect with ${getCommunity(selectedRole)} professionals` }}></li>
        </>
      );
    }
    return { immediateActionsList, careerStrategyList };
  };

  const { immediateActionsList, careerStrategyList } = updateRecommendations(role, riskScore);

  return (
    <div className="container">
      <div className="hero">
        <h1><i className="material-icons">assessment</i>AI Job Exposure Calculator</h1>
        <p>Based on Jesse Campbell's Inverse Displacement Theory, assess your risk of AI automation and get personalized career guidance.</p>
      </div>

      <div className="calculator-container">
        <form onSubmit={(e) => { e.preventDefault(); calculateRisk(); }}>
          <div className="question-card">
            <div className="question-title">1. What's your current role type?</div>
            <div className="options">
              <label className={`option ${role === 'software' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="software" data-risk="85" onChange={(e) => setRole(e.target.value)} checked={role === 'software'} />
                <span>Software Engineer/Developer</span>
              </label>
              <label className={`option ${role === 'data' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="data" data-risk="80" onChange={(e) => setRole(e.target.value)} checked={role === 'data'} />
                <span>Data Analyst/Scientist</span>
              </label>
              <label className={`option ${role === 'legal' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="legal" data-risk="75" onChange={(e) => setRole(e.target.value)} checked={role === 'legal'} />
                <span>Legal Professional</span>
              </label>
              <label className={`option ${role === 'finance' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="finance" data-risk="78" onChange={(e) => setRole(e.target.value)} checked={role === 'finance'} />
                <span>Finance/Accounting</span>
              </label>
              <label className={`option ${role === 'marketing' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="marketing" data-risk="70" onChange={(e) => setRole(e.target.value)} checked={role === 'marketing'} />
                <span>Marketing/Content</span>
              </label>
              <label className={`option ${role === 'medical' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="medical" data-risk="65" onChange={(e) => setRole(e.target.value)} checked={role === 'medical'} />
                <span>Medical Professional</span>
              </label>
              <label className={`option ${role === 'trades' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="trades" data-risk="15" onChange={(e) => setRole(e.target.value)} checked={role === 'trades'} />
                <span>Skilled Trades</span>
              </label>
              <label className={`option ${role === 'education' ? 'selected' : ''}`}>
                <input type="radio" name="role" value="education" data-risk="55" onChange={(e) => setRole(e.target.value)} checked={role === 'education'} />
                <span>Education</span>
              </label>
            </div>
          </div>

          <div className="question-card">
            <div className="question-title">2. How much of your work involves repetitive cognitive tasks?</div>
            <div className="options">
              <label className={`option ${repetitive === 'high' ? 'selected' : ''}`}>
                <input type="radio" name="repetitive" value="high" data-risk="30" onChange={(e) => setRepetitive(e.target.value)} checked={repetitive === 'high'} />
                <span>Most of my work (80%+)</span>
              </label>
              <label className={`option ${repetitive === 'medium' ? 'selected' : ''}`}>
                <input type="radio" name="repetitive" value="medium" data-risk="15" onChange={(e) => setRepetitive(e.target.value)} checked={repetitive === 'medium'} />
                <span>About half (40-60%)</span>
              </label>
              <label className={`option ${repetitive === 'low' ? 'selected' : ''}`}>
                <input type="radio" name="repetitive" value="low" data-risk="5" onChange={(e) => setRepetitive(e.target.value)} checked={repetitive === 'low'} />
                <span>Minimal (20% or less)</span>
              </label>
            </div>
          </div>

          <div className="question-card">
            <div className="question-title">3. What's your experience level?</div>
            <div className="options">
              <label className={`option ${experience === 'junior' ? 'selected' : ''}`}>
                <input type="radio" name="experience" value="junior" data-risk="25" onChange={(e) => setExperience(e.target.value)} checked={experience === 'junior'} />
                <span>Entry-level (0-2 years)</span>
              </label>
              <label className={`option ${experience === 'mid' ? 'selected' : ''}`}>
                <input type="radio" name="experience" value="mid" data-risk="15" onChange={(e) => setExperience(e.target.value)} checked={experience === 'mid'} />
                <span>Mid-level (3-7 years)</span>
              </label>
              <label className={`option ${experience === 'senior' ? 'selected' : ''}`}>
                <input type="radio" name="experience" value="senior" data-risk="5" onChange={(e) => setExperience(e.target.value)} checked={experience === 'senior'} />
                <span>Senior (8+ years)</span>
              </label>
            </div>
          </div>

          <div className="question-card">
            <div className="question-title">4. How often do you use AI tools in your work?</div>
            <div className="options">
              <label className={`option ${aiUsage === 'never' ? 'selected' : ''}`}>
                <input type="radio" name="ai-usage" value="never" data-risk="20" onChange={(e) => setAiUsage(e.target.value)} checked={aiUsage === 'never'} />
                <span>Never</span>
              </label>
              <label className={`option ${aiUsage === 'sometimes' ? 'selected' : ''}`}>
                <input type="radio" name="ai-usage" value="sometimes" data-risk="10" onChange={(e) => setAiUsage(e.target.value)} checked={aiUsage === 'sometimes'} />
                <span>Occasionally</span>
              </label>
              <label className={`option ${aiUsage === 'frequently' ? 'selected' : ''}`}>
                <input type="radio" name="ai-usage" value="frequently" data-risk="-10" onChange={(e) => setAiUsage(e.target.value)} checked={aiUsage === 'frequently'} />
                <span>Regularly</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn" id="calculate-btn">
            <i className="material-icons">calculate</i>
            Calculate My Risk
          </button>
        </form>
      </div>

      {showResults && (
        <div className="results" id="results">
          <h2>Your AI Exposure Results</h2>
          <div className={`risk-level ${riskLevel === 'Low Risk' ? 'risk-low' : riskLevel === 'Medium Risk' ? 'risk-medium' : 'risk-high'}`}>
            <div className="risk-score">{riskScore}%</div>
            <h3>{riskLevel}</h3>
            <p>{riskDescription}</p>
          </div>

          <div className="recommendations" id="recommendations">
            <div className="recommendation-card">
              <h4><i className="material-icons">school</i>Immediate Actions</h4>
              <ul id="immediate-actions">
                {immediateActionsList}
              </ul>
            </div>

            <div className="recommendation-card">
              <h4><i className="material-icons">trending_up</i>Career Strategy</h4>
              <ul id="career-strategy">
                {careerStrategyList}
              </ul>
            </div>

            <div className="recommendation-card">
              <h4><i className="material-icons">groups</i>Resources</h4>
              <ul>
                <li><a href="https://aiupskill.net" target="_blank">AIUpskill.net training programs</a></li>
                <li><a href="https://jessecampbell.ai/career-guide" target="_blank">Jesse Campbell's career guide</a></li>
                <li><a href="https://vibestl.ai" target="_blank">VibeSTL.ai local community</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
