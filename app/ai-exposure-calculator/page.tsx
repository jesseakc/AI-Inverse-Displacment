import type { Metadata } from 'next';
import CalculatorClient from '@/components/CalculatorClient';

export const metadata: Metadata = {
  title: 'AI Job Exposure Calculator - Check Your Risk Level | Jesse Campbell',
  description: 'Interactive AI job exposure calculator based on Jesse Campbell\'s Inverse Displacement Theory. Assess your risk of AI automation and get personalized career guidance.',
  keywords: 'AI job exposure calculator, AI risk assessment, career automation risk, Jesse Campbell AI tool',
  alternates: {
    canonical: 'https://inversedisplacement.com/ai-exposure-calculator/',
  },
};

const questions = [
  {
    id: 'automation',
    question: 'How much of your daily work involves repetitive, rule-based tasks?',
    options: [
      { value: 1, label: 'Very little - mostly creative/strategic work' },
      { value: 3, label: 'Some - about 25% of my work' },
      { value: 4, label: 'Significant - about 50% of my work' },
      { value: 5, label: 'Most - about 75% or more of my work' },
    ],
  },
  {
    id: 'data',
    question: 'How much of your work involves processing or analyzing large datasets?',
    options: [
      { value: 1, label: 'Very little - I work with minimal data' },
      { value: 2, label: 'Some - I occasionally work with data' },
      { value: 4, label: 'Significant - data analysis is a major part' },
      { value: 5, label: 'Critical - I work with data constantly' },
    ],
  },
];

export default function AiExposureCalculator() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Job Exposure Calculator
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Based on Jesse Campbell's Inverse Displacement Theory, assess your risk of AI automation 
            and get personalized career guidance.
          </p>
        </div>
        
        <CalculatorClient questions={questions} />
      </div>
    </div>
  );
}