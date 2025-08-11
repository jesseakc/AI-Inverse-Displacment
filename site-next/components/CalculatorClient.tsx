'use client';

import React, { useState } from 'react';

interface CalculatorClientProps {
  questions: Array<{
    id: string;
    question: string;
    options: Array<{ value: number; label: string }>;
  }>;
}

export default function CalculatorClient({ questions }: CalculatorClientProps) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const calculateRisk = () => {
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    
    if (percentage <= 30) return { level: 'Low', score: percentage, color: 'green' };
    if (percentage <= 70) return { level: 'Medium', score: percentage, color: 'yellow' };
    return { level: 'High', score: percentage, color: 'red' };
  };

  const risk = calculateRisk();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">AI Job Exposure Calculator</h2>
        
        {questions.map((q, index) => (
          <div key={q.id} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {index + 1}. {q.question}
            </h3>
            <div className="space-y-2">
              {q.options.map(option => (
                <label key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    name={q.id}
                    value={option.value}
                    onChange={() => handleAnswer(q.id, option.value)}
                    className="mr-3"
                  />
                  <span className="text-gray-700">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        <button
          onClick={() => setShowResults(true)}
          disabled={Object.keys(answers).length !== questions.length}
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 disabled:bg-gray-400"
        >
          Calculate My Risk
        </button>

        {showResults && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Your Results</h3>
            <div className={`p-4 rounded-lg bg-${risk.color}-100 border border-${risk.color}-300`}>
              <p className="text-lg font-semibold text-gray-800">
                Risk Level: <span className={`text-${risk.color}-600`}>{risk.level}</span>
              </p>
              <p className="text-gray-600">Score: {risk.score.toFixed(1)}%</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}