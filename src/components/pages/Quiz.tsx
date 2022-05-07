import { Button } from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { CorrectAnswer } from "../atoms/results/CorrectAnswer";
import { FalseAnswer } from "../atoms/results/FalseAnswer";
import { PlaybackYoutube } from "../atoms/youtube/PlaybackYoutube";



export const Quiz: VFC = memo(() => {
    const onClickSubmitButton = () => {
        console.log("submit")
    };

    const questions = [
		{
			questionText: 'どの曳山でしょう',
            correct: "亀と浦島太郎",
            image: "",
            url: "https://www.youtube.com/watch?v=O082i6sfCRU",
			answerOptions: [
				{ answerText: '七宝丸', isCorrect: false },
				{ answerText: '青獅子', isCorrect: false },
				{ answerText: '亀と浦島太郎', isCorrect: true },
				{ answerText: '鳳凰丸', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            correct: "鳳凰丸",
            image: "",
            url: "https://www.youtube.com/watch?v=EdSMDmgZXts",
			answerOptions: [
				{ answerText: '上杉謙信の兜', isCorrect: false },
				{ answerText: '鳳凰丸', isCorrect: true },
				{ answerText: '武田信玄の兜', isCorrect: false },
				{ answerText: '亀と浦島太郎', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            correct: "武田信玄の兜",
            image: "",
            url: "https://www.youtube.com/watch?v=43rRhvIYpRo",
			answerOptions: [
				{ answerText: '武田信玄の兜', isCorrect: true },
				{ answerText: '上杉謙信の兜', isCorrect: false },
				{ answerText: '酒呑童子と源頼光の兜', isCorrect: false },
				{ answerText: '珠取獅子', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            correct: "青獅子",
            image: "",
            url: "https://www.youtube.com/watch?v=blS7C5hxd4U",
			answerOptions: [
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '源義経の兜', isCorrect: false },
				{ answerText: '珠取獅子', isCorrect: false },
				{ answerText: '青獅子', isCorrect: true },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "七宝丸",
            image: "",
            url: "https://www.youtube.com/watch?v=FacJYh2Ds5E",
			answerOptions: [
				{ answerText: '源義経の兜', isCorrect: false },
				{ answerText: '鳳凰丸', isCorrect: false },
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '七宝丸', isCorrect: true },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "源義経の兜",
            image: "",
            url: "https://www.youtube.com/watch?v=YaVOWuPLYK0",
			answerOptions: [
				{ answerText: '源義経の兜', isCorrect: true },
				{ answerText: '金獅子', isCorrect: false },
				{ answerText: '武田信玄の兜', isCorrect: false },
				{ answerText: '七宝丸', isCorrect: false },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "鯱",
            image: "",
            url: "https://www.youtube.com/watch?v=9R9DQtn9cYI&t=1s",
			answerOptions: [
				{ answerText: '鯛山', isCorrect: false },
				{ answerText: '酒呑童子と源頼光', isCorrect: false },
				{ answerText: '鯱', isCorrect: true },
				{ answerText: '青獅子', isCorrect: false },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "珠取獅子",
            image: "",
            url: "https://www.youtube.com/watch?v=QvrzMgqtNEU",
			answerOptions: [
				{ answerText: '珠取獅子', isCorrect: true },
				{ answerText: '金獅子', isCorrect: false },
				{ answerText: '源義経の兜', isCorrect: false },
				{ answerText: '青獅子', isCorrect: false },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "金獅子",
            image: "",
            url: "https://www.youtube.com/watch?v=SX-QSAnK0IM",
			answerOptions: [
				{ answerText: '鯱', isCorrect: false },
				{ answerText: '飛龍', isCorrect: false },
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '金獅子', isCorrect: true },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "上杉謙信の兜",
            image: "",
            url: "https://www.youtube.com/watch?v=eS18mHXnyPY",
			answerOptions: [
				{ answerText: '鯱', isCorrect: false },
				{ answerText: '鯛山', isCorrect: false },
				{ answerText: '上杉謙信の兜', isCorrect: true },
				{ answerText: '金獅子', isCorrect: false },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "鯛山",
            image: "",
            url: "https://www.youtube.com/watch?v=MkCk2Pv8ybE",
			answerOptions: [
				{ answerText: '鯱', isCorrect: false },
				{ answerText: '亀と浦島太郎', isCorrect: false },
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '鯛', isCorrect: true },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "飛龍",
            image: "",
            url: "https://www.youtube.com/watch?v=fMq2ZIrLoPY",
			answerOptions: [
				{ answerText: '飛龍', isCorrect: true },
				{ answerText: '鯛山', isCorrect: false },
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '金獅子', isCorrect: false },
			],
		},
        {
			questionText: 'どの曳山でしょう?',
            correct: "酒呑童子と源頼光",
            image: "",
            url: "https://www.youtube.com/watch?v=x3Lgv2gNPEk",
			answerOptions: [
				{ answerText: '飛龍', isCorrect: false },
				{ answerText: '酒呑童子と源頼光', isCorrect: true },
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '金獅子', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            correct: "赤獅子",
            image: "",
            url: "https://www.youtube.com/watch?v=x3Lgv2gNPEk",
			answerOptions: [
				{ answerText: '上杉謙信の兜', isCorrect: false },
				{ answerText: '酒呑童子と源頼光', isCorrect: false },
				{ answerText: '赤獅子', isCorrect: true },
				{ answerText: '鯛', isCorrect: false },
			],
		},
	];

	const [qList, setQList] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [resultAnswer, setResultAnswer] = useState<boolean | null>(null);

	const handleAnswerOptionClick = (isCorrect: boolean) => {
			if (isCorrect === true) 
			{
				setScore(score + 1);
				setResultAnswer(true);
			} else {
				setResultAnswer(false);
			}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
    return (
        <>
          <div>
          {showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
                        <PlaybackYoutube url={questions[currentQuestion].url} />
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<Button 
								colorScheme="linkedin" 
								onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
							>
								{answerOption.answerText}
							</Button>
						))}
					</div>
					<div>
						{(() => {
							if (resultAnswer === true) {
								return <CorrectAnswer />
							} else if (resultAnswer === false) {
								return <FalseAnswer />
							} else if (resultAnswer === null) {
								return ;
							}
						})()}
					</div>
				</>
			)}
		  </div>
        </>
    )
})