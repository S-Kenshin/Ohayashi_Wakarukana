import { Button, Center, Stack, VStack, Text } from "@chakra-ui/react";
import { memo, useEffect, useState, VFC } from "react";
import { CorrectAnswer } from "../atoms/results/CorrectAnswer";
import { FalseAnswer } from "../atoms/results/FalseAnswer";
import { PlaybackYoutube } from "../atoms/youtube/PlaybackYoutube";



export const Quiz: VFC = memo(() => {
    const questions = [
		{
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

    const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [resultAnswer, setResultAnswer] = useState<boolean | null>(null);
	const [correctAnswerResult, setCorrectAnswerResult] = useState<String>("");

	const handleAnswerOptionClick = (isCorrect: boolean) => {
			if (isCorrect === true) 
			{
				setResultAnswer(true);
			} else {
				setResultAnswer(false);
				const res = questions[currentQuestion].answerOptions.find(el => el.isCorrect === true);
				const correctAnswerDisplay = res?.answerText.toString();
				//setCorrectAnswerResult(correctAnswerDisplay);
			}
	};

	const handleNextButtonClick = () => {
		if (resultAnswer === true)
		{
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
		setResultAnswer(null);
	}

    return (
        <>
			<Center>
				<div>
				{showScore ? (
						<div className='score-section'>
							You scored {score} out of {questions.length}
						</div>
					) : (
						<>
							<div className='question-section'>
								<VStack h={50} justify='center'>
								<div className='question-count'>
									<span>Question {currentQuestion + 1}</span>/{questions.length}
								</div>
								</VStack>
								<VStack h={20}>
									<Text fontSize='md'>どの曳山のお囃子でしょう</Text>
									<Text fontSize='md' align='center'>「Play」を押すと曳山のお囃子が聞こえてくるよ</Text>
								</VStack>
									<VStack h={20} marginTop='6'>
									{(() => {
										if (resultAnswer === true) {
											return <CorrectAnswer />
										} else if (resultAnswer === false) {
											return <FalseAnswer />
										} else if (resultAnswer === null) {
											return ;
										}
									})()}
								</VStack>
								<VStack h={100}>
									<PlaybackYoutube url={questions[currentQuestion].url} />
								</VStack>
								<VStack marginTop={2}>
									{/*不正解の場合、こちらに正解を表示させる機能を実装したい*/}
								</VStack>
							</div>
							<div className='answer-section'>
								<Stack>
									{questions[currentQuestion].answerOptions.map((answerOption) => (
										<Button 
											colorScheme="linkedin" 
											onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
										>
											{answerOption.answerText}
										</Button>
								))}
								</Stack>
							</div>
							<VStack h={70} justify='center'>
								<div>
									<Button 
										onClick={() => handleNextButtonClick()}
										colorScheme='yellow'
									>
										次へ
									</Button>
								</div>
							</VStack>
						</>
					)}
				</div>
			</Center>
        </>
    )
})