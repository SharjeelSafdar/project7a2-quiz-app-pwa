import { FetchQuestions, RawQuestion, DataModifier } from '../types';

export const fetchQuestions: FetchQuestions = async (category, quizType, difficulty, numQuestions) => {
    try {
        const endpoint = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${quizType}`;
        const response = await (await fetch(endpoint)).json();
        if (response.response_code === 1) {
            throw Error;
        }
        return response.results;
    }
    catch (error) {
        // console.log(error);
    }
}

export const dataModifier: DataModifier = (rawData) => {
    const questions = rawData.map( (question: RawQuestion) => ({
        category: question.category,
        type: question.type,
        difficulty: question.difficulty,
        questionStatement: question.question,
        options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
    }));
    const correctAnswers = rawData.map( (question: RawQuestion) => question.correct_answer );

    return {
        totalQuestions: rawData.length,
        score: 0,
        questions,
        correctAnswers,
        currentQuestion: 0,
        userAnswers: Array<string>(),
        isAnswerCorrect: Array<boolean>(),
    }
}