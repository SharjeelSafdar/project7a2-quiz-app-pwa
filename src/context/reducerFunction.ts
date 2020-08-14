import { State, Action } from '../types';

export const reducerFunc = (state: State, action: Action): State => {
    switch (action.id) {
        case 'SUBMIT_FORM':
            return {
                ...state,
                selectedCategory: action.payload.category,
                selectedType: action.payload.type,
                slectedDifficulty: action.payload.difficulty,
                selectedNumOfQuestions: action.payload.numQuestions,
            }
        case 'START_QUIZ':
            return {
                ...state,
                quizData: action.payload,
            }
        case 'SUBMIT_ANSWER':
            return {
                ...state,
                quizData: {
                    ...state.quizData,
                    userAnswers: [ ...state.quizData.userAnswers, action.payload ],
                    score: action.payload === state.quizData.correctAnswers[state.quizData.currentQuestion]
                        ? state.quizData.score + 1
                        : state.quizData.score,
                }
            }
        case 'NEXT_QUESTION':
            return {
                ...state,
                quizData: {
                    ...state.quizData,
                    currentQuestion: state.quizData.currentQuestion + 1,
                }
            }
            
        default:
            return state;
    }
}