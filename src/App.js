import React, { useState } from 'react';

//https://www.youtube.com/watch?v=Lya-qYiDqIA
//sourceytlink

export default function App() {
	const questions = [
    {
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'Hyperlinks and Text Markup Language', isCorrect: false },
				{ answerText: 'Hyper Text Markup Language', isCorrect: true },
				{ answerText: 'Home Tool Markup Language', isCorrect: false },
				{ answerText: 'None of these', isCorrect: false },
			],
		},
    {
			questionText: 'The correct sequence of HTML tags for starting a webpage is ',
			answerOptions: [
				{ answerText: 'Head, Title, HTML, body', isCorrect: false },
				{ answerText: 'HTML, Body, Title, Head', isCorrect: false },
				{ answerText: 'HTML, Head, Title, Body', isCorrect: false },
				{ answerText: 'HTML, Head, Title, Body', isCorrect: true },
			],
		},
    {
			questionText: 'How to create a checkbox in HTML?',
			answerOptions: [
				{ answerText: '<input type = "checkbox">', isCorrect: true },
				{ answerText: '<input type = "button">', isCorrect: false },
				{ answerText: '<checkbox>', isCorrect: false },
				{ answerText: '<input type = "check">', isCorrect: false },
			],
		},
    {
			questionText: 'HTML tags are enclosed in-',
			answerOptions: [
				{ answerText: '# and #', isCorrect: false },
				{ answerText: '{ and }', isCorrect: false },
				{ answerText: '{ and }', isCorrect: false },
				{ answerText: '< and >', isCorrect: true },
			],
		},
    {
			questionText: 'Which of the following attribute is used to provide a unique name to an element?',
			answerOptions: [
				{ answerText: 'class', isCorrect: false },
				{ answerText: 'id', isCorrect: true },
				{ answerText: 'type', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
    {
			questionText: 'Which of the following is the correct way to send mail in HTML?',
			answerOptions: [
				{ answerText: '<a href = "mailto: xy@y">', isCorrect: true },
				{ answerText: '<a href = "xy@y">', isCorrect: false },
				{ answerText: '<mail xy@y</mail>', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
    {
			questionText: 'Which of the following HTML attribute is used to define inline styles?',
			answerOptions: [
				{ answerText: 'style', isCorrect: true },
				{ answerText: 'type', isCorrect: false },
				{ answerText: 'class', isCorrect: false },
				{ answerText: 'None of the above', isCorrect: false },
			],
		},
    {
			questionText: 'The tags in HTML are -',
			answerOptions: [
				{ answerText: 'case-sensitive', isCorrect: false },
				{ answerText: 'in upper case', isCorrect: false },
				{ answerText: 'not case sensitive', isCorrect: true },
				{ answerText: 'in lowercase', isCorrect: false },
			],
		},
    {
			questionText: 'Which of the following is the root tag of the HTML document?',
			answerOptions: [
				{ answerText: '<body>', isCorrect: false },
				{ answerText: '<head>', isCorrect: false },
				{ answerText: '<title>', isCorrect: false },
				{ answerText: '<html>', isCorrect: true },
			],
		},
    {
			questionText: ' In HTML5, which of the following tag is used to initialize the document type?',
			answerOptions: [
				{ answerText: '<Doctype HTML>', isCorrect: false },
				{ answerText: '<\Doctype html>', isCorrect: false },
				{ answerText: '<Doctype>', isCorrect: false },
				{ answerText: '<!DOCTYPE html>', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
				  <h2>{score >= 5 ? "😎": "😢" }	You scored {score} out of {questions.length} {score >= 5 ? "😎": "😢" }</h2>
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span> Question {currentQuestion + 1}</span>/{questions.length} :
							<hr />
						</div>
						<div className='question-text'><b>{questions[currentQuestion].questionText}</b></div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}