// lib/useClassifier.ts

import { useState, useEffect } from 'react';
import { classifySentence } from './classifier';

export function useClassifier(inputText: string) {
  const [scores, setScores] = useState<{ [category: string]: number }>({});
  const [processingTime, setProcessingTime] = useState(0);

  useEffect(() => {
    if (inputText.trim() === '') {
      setScores({});
      setProcessingTime(0);
      return;
    }

    const [rawScores, time] = classifySentence(inputText);
    setProcessingTime(time);

    // Normalize the scores so they add up to 1
    const totalScore = Object.values(rawScores).reduce((sum, score) => sum + score, 0);
    const normalizedScores = Object.fromEntries(
      Object.entries(rawScores).map(([category, score]) => [category, score / totalScore])
    );

    setScores(normalizedScores);
  }, [inputText]);

  return { scores, processingTime };
}
