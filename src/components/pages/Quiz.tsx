import { memo, useState, VFC } from "react";
import { SubmitButton } from "../atoms/button/SubumitButton";
import { SelectAnswer } from "../atoms/select/SelectAnswer";
import { PlaybackYoutube } from "../atoms/youtube/PlaybackYoutube";


export const Quiz: VFC = memo(() => {
    const onClickSubmitButton = () => {
        console.log("submit")
    };

    const questions = [
		{
			questionText: 'どの曳山でしょう',
            url: "https://www.youtube.com/watch?v=B6GW2gfLj7o",
			answerOptions: [
				{ answerText: '赤獅子', isCorrect: false },
				{ answerText: '青獅子', isCorrect: false },
				{ answerText: '亀と浦島太郎', isCorrect: true },
				{ answerText: '源義経の兜', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            url: "https://www.youtube.com/watch?v=-kHx1RWiZPw",
			answerOptions: [
				{ answerText: '鯛山', isCorrect: false },
				{ answerText: '鳳凰丸', isCorrect: true },
				{ answerText: '飛龍', isCorrect: false },
				{ answerText: '金獅子', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            url: "https://www.youtube.com/watch?v=r-IbqvLxipI",
			answerOptions: [
				{ answerText: '武田信玄の兜', isCorrect: true },
				{ answerText: '上杉謙信の兜', isCorrect: false },
				{ answerText: '酒呑童子と源頼光の兜', isCorrect: false },
				{ answerText: '珠取獅子', isCorrect: false },
			],
		},
		{
			questionText: 'どの曳山でしょう?',
            url: "https://www.youtube.com/watch?v=blS7C5hxd4U",
			answerOptions: [
				{ answerText: '水主町 鯱', isCorrect: false },
				{ answerText: '江川町 七宝丸', isCorrect: false },
				{ answerText: '刀町 赤獅子', isCorrect: false },
				{ answerText: '中町 青獅子', isCorrect: true },
			],
		},
	];

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect: any) => {
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
        <>
            <p>クイズ画面です</p>
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
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		  </div>
        </>
    )
})