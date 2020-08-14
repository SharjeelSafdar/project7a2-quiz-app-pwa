import React, { useReducer, createContext } from 'react';
import { reducerFunc } from './reducerFunction';
// types
import { State, Action, Question, FormData, QuizData } from '../types';

const categories = {
    0: 'Any Category',
    9: 'General Knowledge',
    10: 'Entertainment: Books',
    11: 'Entertainment: Film',
    12: 'Entertainment: Music',
    13: 'Entertainment: Musical & Theaters',
    14: 'Entertainment: Television',
    15: 'Entertainment: Video Games',
    16: 'Entertainment: Board Games',
    17: 'Science & Nature',
    18: 'Science: Computers',
    19: 'Science: Mathematics',
    20: 'Mythology',
    21: 'Sports',
    22: 'Geography',
    23: 'History',
    24: 'Politics',
    25: 'Art',
    26: 'Celebrities',
    27: 'Animals',
    28: 'Vehicles',
    29: 'Entertainment: Comics',
    30: 'Science: Gadgets',
    31: 'Entertainment: Japanese Anime & Manga',
    32: 'Entertainment: Cartoon & Animations',
};
const quizType = {
    '': 'Any Type',
    'multiple': 'Multiple Choice Questions',
    'boolean': 'True/False',
};
const quizDifficulty = {
    '': 'Any Difficulty',
    'easy': 'Easy',
    'medium': 'Medium',
    'hard': 'Hard',
};
const numQuestionsAvailable = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

const initialState: State = {
    categories,
    quizType,
    quizDifficulty,
    numQuestionsAvailable,
    selectedCategory: 0,
    selectedType: '',
    slectedDifficulty: '',
    selectedNumOfQuestions: 5,
    quizData: {
        responseCode: 0,
        totalQuestions: 5,
        score: 0,
        questions: Array<Question>(1),
        correctAnswers: Array<string>(1),
        currentQuestion: 0,
        userAnswers: Array<string>(1),
    },
}

export const GlobalContext = createContext<State>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
    const [ state, dispatch ] = useReducer<React.Reducer<State, Action>>(reducerFunc, initialState);
    const submitForm = (formData: FormData) => {
        dispatch({ id: 'SUBMIT_FORM', payload: formData });
    }
    const startQuiz = (quizData: QuizData) => {
        dispatch({ id: 'START_QUIZ', payload: quizData });
    }
    const submitAnswer = (userAnswer: string) => {
        dispatch({ id: 'SUBMIT_ANSWER', payload: userAnswer });
    }
    const nextQuestion = () => {
        dispatch({ id: 'NEXT_QUESTION', payload: null });
    }
    return (
        <GlobalContext.Provider value={{
            ...state,
            submitForm,
            startQuiz,
            submitAnswer,
            nextQuestion,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}