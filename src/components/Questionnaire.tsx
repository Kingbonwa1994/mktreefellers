"use client"
import React, { FormEvent } from 'react';
import useQuestionnaireStore from '../store/questionnaireStore';

const Questionnaire = () => {
  const {
    currentQuestion,
    responses,
    setCurrentQuestion,
    addResponse,
  } = useQuestionnaireStore();

  const questions = [
    {
      question: 'What is the size of the project?',
      answers: ['1-3 yrs', '4-6 yrs', '7-10 yrs', '10+ yrs'],
    },
    {
      question: 'How tall are the trees?',
      answers: ['small', 'medium', 'large', 'large plus'],
    },
    {
      question: 'Urgency of the job?',
      answers: ['As Soon As Possible', "I'm Flexible", 'In the Next Few days', 'In the next few weeks'],
    },
    {
      question: 'Types of Property?',
      answers: ['Residential', 'Commercial', 'Industrial', 'Public/Government', 'Agricultural land', 'Communal garden'],
    },
    {
      question: 'Share your location:',
      inputType: 'text', // 'text' for regular text input
    },
  ];

 

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Last question reached, save responses
      const concatenatedResponses = questions
        .map((question, index) => {
          if (question.inputType === 'text') {
            
            const response = responses.find((r) => r.question === question.question);
            
            return response ? `${response.question} : ${response.answer || ''}` : '';
          } else {
            
            const selectedAnswer = responses[index] ? responses[index].answer : question.answers[0];
            return `${question.question} : ${selectedAnswer}`;
          }
        })
        .join('\n');
  
      const whatsappMessageLink = `https://wa.me/+27664108764?text=${encodeURIComponent(concatenatedResponses)}`;
      
      window.open(whatsappMessageLink, '_blank');
    }
  };
  
  
  

  const handleAnswer = (answer: string) => {
    addResponse({ question: questions[currentQuestion].question, answer });
  };

  const handleLocationInput = (event) => {
    const location = event.target.value;
    // Find the index of the "Share your location" question in the responses array
    const locationIndex = responses.findIndex(response => response.question === 'Share your location:');
    
    // Update or add the response based on whether it already exists
    if (locationIndex !== -1) {
      responses[locationIndex] = { question: 'Share your location:', answer: location };
    } else {
      addResponse({ question: 'Share your location:', answer: location });
    }
  };
  

  return (
    <div className="flex items-center justify-center h-full ">
    <div className="w-full max-w-md p-4">
      <h1 className="text-2xl text-white font-bold mb-4">{questions[currentQuestion].question}</h1>
      {currentQuestion === questions.length - 1 && questions[currentQuestion].inputType === 'text' ? (
        <input
          type="text"
          className="border p-2 mb-4"
          placeholder="Enter your location"
          onChange={handleLocationInput}
        />
      ) : (
        <div className="space-y-4">
        {questions &&
          questions[currentQuestion].answers.map((answer, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-500"
                name="answer"
                onChange={() => handleAnswer(answer)}
                checked={answer === responses[currentQuestion]?.answer}
              />
              <span>{answer}</span>
            </label>
          ))}
        
        </div>
      )}
      {currentQuestion !== questions.length - 1 ? (
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={handleNext}>
          Next
        </button>
      ) : (
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded" onClick={handleNext}>
          Send
        </button>
      )}
    </div>
    </div>
  );
};

export default Questionnaire;
