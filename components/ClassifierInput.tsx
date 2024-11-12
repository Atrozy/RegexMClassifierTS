// components/ClassifierInput.tsx

import React, { useState } from 'react';
import { useClassifier } from '../lib/useClassifier';
import debounce from 'lodash.debounce';

const ClassifierInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const { scores, processingTime } = useClassifier(inputText);

  const handleInputChange = debounce((text: string) => {
    setInputText(text);
  }, 300);

  const allCategories = [
    'Academic/Research', 'Code/Programming', 'Financial Markets', 'Location/Navigation', 'News/Current Events',
    'Social Media', 'Translation', 'Travel Planning', 'URL/Website Search', 'Chat/Conversational', 'Recipe/Cooking',
    'Job/Career', 'Math/Calculations', 'Product Search', 'Question-Answer'
  ];

  // Filter scores to only show those above 0.2
  const highConfidenceCategories = Object.entries(scores)
    .filter(([, score]) => score >= 0.2)
    .map(([category, score]) => ({ category, score }));

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Sentence Classifier</h1>
      <input
        type="text"
        onChange={(e) => handleInputChange(e.target.value)}
        placeholder="Type a sentence..."
        style={styles.input}
      />
      <div style={styles.resultsContainer}>
        <h3 style={styles.subHeader}>Classification Results</h3>
        <div style={styles.scoreContainer}>
          {allCategories.map((category) => (
            <p key={category} style={styles.score}>
              <strong>{category}:</strong> {(scores[category] ?? 0 * 100).toFixed(2)} probability
            </p>
          ))}
        </div>
        <p style={styles.processingTime}>
          <strong>Processing Time:</strong> {(processingTime * 1000).toFixed(0)} ms
        </p>
        
        {highConfidenceCategories.length > 0 && (
          <div style={styles.selectedCategories}>
            <h3 style={styles.subHeader}>Selected Classes (Above 0.2 Probability)</h3>
            {highConfidenceCategories.map(({ category, score }) => (
              <p key={category} style={styles.highConfidence}>
                <strong>{category}:</strong> {(score * 100).toFixed(2)}% probability
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    textAlign: 'center' as const,
    backgroundColor: '#f4f4f9',
    padding: '20px',
    maxWidth: '600px',
    margin: '40px auto',
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    color: '#333',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  input: {
    padding: '12px',
    width: '100%',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '20px',
    boxSizing: 'border-box' as const,
  },
  resultsContainer: {
    textAlign: 'left' as const,
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  },
  subHeader: {
    color: '#333',
    fontSize: '1.25rem',
    borderBottom: '2px solid #ddd',
    paddingBottom: '8px',
    marginBottom: '15px',
  },
  scoreContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '10px',
  },
  score: {
    flex: '1 1 45%',
    fontSize: '0.9rem',
    color: '#666',
    margin: '5px 0',
  },
  processingTime: {
    fontSize: '0.9rem',
    color: '#333',
    marginTop: '20px',
    fontWeight: 'bold' as const,
  },
  selectedCategories: {
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid #ddd',
  },
  highConfidence: {
    fontSize: '1rem',
    color: '#444',
    fontWeight: 'bold' as const,
  },
};

export default ClassifierInput;
