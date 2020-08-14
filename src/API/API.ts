import { FetchQuestions, RawQuestion, DataModifier, Question } from '../types';

export const fetchQuestions: FetchQuestions = async (category, quizType, difficulty, numQuestions) => {
    try {
        const endpoint = `https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=${quizType}`;
        const response = await (await fetch(endpoint)).json();
        return response;
    }
    catch (error) {
        console.log(`Error: ${error}`);
    }
}

export const dataModifier: DataModifier = (rawData) => {
    const questions = rawData.results.length ?
        rawData.results.map( (question: RawQuestion) => ({
            category: question.category,
            type: question.type,
            difficulty: question.difficulty,
            questionStatement: question.question,
            options: [...question.incorrect_answers, question.correct_answer].sort(() => Math.random() - 0.5),
        }))
        // Assign an empty array if no questions are returned.
        : Array<Question>(); 

    const correctAnswers = rawData.results.length 
        ? rawData.results.map( (question: RawQuestion) => question.correct_answer )
        // Assign an empty array if no questions are returned.
        : Array<string>();

    return {
        responseCode: rawData.response_code,
        totalQuestions: rawData.results.length,
        score: 0,
        questions,
        correctAnswers,
        currentQuestion: 0,
        userAnswers: Array<string>(),
    }
}