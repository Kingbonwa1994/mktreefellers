"use client"
import React from 'react';
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
      answers: ['1-3yrs', '4-6yrs', '7-10yrs', '10+yrs'],
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
      addResponse(responses);

      // You can also navigate to a different page or perform other actions here
    }
  };

  const handleAnswer = (answer) => {
    addResponse({ question: questions[currentQuestion].question, answer });
  };

  const handleLocationInput = (event) => {
    const location = event.target.value;
    addResponse({ question: questions[currentQuestion].question, answer: location });
  };

  return (
    <div className=" w-full mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{questions[currentQuestion].question}</h1>
      {currentQuestion === questions.length - 1 && questions[currentQuestion].inputType === 'text' ? (
        <input
          type="text"
          className="border p-2 mb-4"
          placeholder="Enter your location"
          onChange={handleLocationInput}
        />
      ) : (
        <div className="space-y-4">
          {questions[currentQuestion].answers.map((answer, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-blue-500"
                name="answer"
                onChange={() => handleAnswer(answer)}
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
  );
};

export default Questionnaire;
