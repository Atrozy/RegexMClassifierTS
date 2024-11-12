# Multi-Intent Query Classifier in TypeScript
A robust intent classifier built with TypeScript and integrated into a Next.js frontend, this project uses regex-based pattern matching with categorized keywords and high-weight keywords to classify text inputs across various categories such as Academic, Code, Financial Markets, and more.

## Project Overview

### This classifier:

1-Analyzes text input for keywords to determine likely categories.
2-Prioritizes certain keywords with higher weights to enhance classification accuracy.
3- rovides real-time feedback, ideal for applications like intelligent search orrecommendation systems.
## Features
1-Multi-category classification: Detects and classifies text across a range of predefined categories.
2-Keyword weighting: High-impact keywords receive increased scoring to improve specificity.
3-Real-time feedback: Utilized in a Next.js environment for immediate user feedback.
4-Scalable data collection: Supports diverse data inputs across extensive data categories for robust intent recognition.
## Data Collection Process

### Phase 1: Dataset Creation

1- Initial dataset creation: For each category, a 300-row dataset was created based on sample texts and category-specific examples using GPT-4.
2- Dataset expansion: Additional datasets were sourced for each category, expanding each dataset to approximately 2500-3500 rows.
3- Preprocessing: Stop words were removed using NLTK, ensuring the model focuses on the most relevant keywords in each category.

### Phase 2: Keyword Extraction and Classification

1- Keyword identification: Using frequency analysis, the most common words in each category were identified to serve as category keywords.
2- High-impact keyword selection: GPT-4 was used to refine category-specific keywords by eliminating overlap, creating unique, high-weight keywords exclusive to each category. This differentiation allows these high-impact keywords to significantly influence regex score calculations.

## Code Structure
### Data collection, pre-processing and keywords selection was created using python.
### TypeScript + Next.js
1-lib/classifier.ts: Contains the main classification logic, including keyword definitions, score calculations, and normalization functions.
2-lib/useClassifier.ts: A custom React hook that manages classification processing, feeding the results to the frontend component.
3-components/ClassifierInput.tsx: The Next.js component for the text input and classification display, dynamically updating based on user input.
## Setup Instructions
### Clone the repository:
git clone https://github.com/Atrozy/RegexMClassifierTS.git
cd RegexMClassifierTS
### Install dependencies:
npm install
### Run the application:
npm run dev
This will start the development server. You can access the application at http://localhost:3000.

## Usage
### Enter a sentence into the text input box.
### The classifier will display:
1-Probabilities for each category.
2-Selected categories with confidence above 20%.
3-Processing time in milliseconds.

## Example Output

Academic: 0.44 probability
Code: 0.00 probability
Financial Markets: 0.00 probability
...
URL: 0.40 probability
Chat: 0.00 probability
...
Processing Time: 1 ms

## Documentation Summary

### Data Collection:
Initial datasets and expanded datasets for categories, with stop words removed for refined keyword extraction.
### Keyword Logic:

High-impact keywords identified to boost category confidence scores.

### Classifier Logic:
Keyword matching, score normalization, and filtering logic encapsulated in lib/classifier.ts.

### UI:
Styled UI with real-time feedback on classification and probability outputs.
License
