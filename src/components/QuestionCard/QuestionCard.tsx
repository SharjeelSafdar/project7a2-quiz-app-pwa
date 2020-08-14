import React, { useContext } from 'react';
// Context
import { GlobalContext } from '../../context/context';
// Styles
import { Wrapper } from './QuestionCard.styles';
import { Button, OptionButton } from '../../styles/styles';

type Props = {
    setAppState: React.Dispatch<React.SetStateAction<number>>;
}
const QuestionCard: React.FC<Props> = ({ setAppState }) => {
    let { quizType, quizDifficulty, submitAnswer, nextQuestion,
        quizData: { 
            score, 
            totalQuestions, 
            currentQuestion, 
            questions, 
            correctAnswers,
            userAnswers,
        } } = useContext(GlobalContext);
    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        submitAnswer && submitAnswer(e.currentTarget.value);
    }
    const nextHandler = () => {
        if (currentQuestion === totalQuestions - 1) {
            setAppState(3); // Show Results component on next render.
        } else {
            nextQuestion && nextQuestion();
        }
    }
    return (
        <Wrapper>
            <div className="score">
                {`Score: ${score}`}
            </div>
            <div className="qNum">
                <span>{'Question #'}</span>
                <span>{currentQuestion + 1}/{totalQuestions}</span>
            </div>
            <div className="category">
                <span>{'Category: '}</span>
                <span>{questions[currentQuestion].category}</span>
            </div>
            <div className="type">
                <span>{'Type: '}</span>
                <span>{quizType[questions[currentQuestion].type]}</span>
            </div>
            <div className="difficulty">
                <span>{'Difficulty: '}</span>
                <span>{quizDifficulty[questions[currentQuestion].difficulty]}</span>
            </div>
            <div className="qStatement">{questions[currentQuestion].questionStatement}</div>
            {questions[currentQuestion].options.map( (option: string) => (
                <OptionButton
                    key={option}
                    correct={(userAnswers[currentQuestion] && correctAnswers[currentQuestion]) === option}
                    userClicked={(userAnswers[currentQuestion] && userAnswers[currentQuestion]) === option}
                >
                    <button disabled={!!userAnswers[currentQuestion]} value={option} onClick={clickHandler}>
                        <span dangerouslySetInnerHTML={{ __html: option }} />
                    </button>
                </OptionButton>
            ))}
            <Button onClick={nextHandler} disabled={!userAnswers[currentQuestion]}>
                {currentQuestion === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question'}
            </Button>
        </Wrapper>
    )
}

export default QuestionCard;