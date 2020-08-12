export type State = {
    categories: {
        [key: number]: string;
    };
    quizType: {
        [key: string]: string;
    };
    quizDifficulty: {
        [key: string]: string;
    };
    numQuestionsAvailable: number[];
    selectedCategory: number;
    selectedType: string,
    slectedDifficulty: string;
    selectedNumOfQuestions: number;
    quizData: QuizData;
    submitForm?: (formData: FormData) => void;
    startQuiz?: (quizData: QuizData) => void;
    submitAnswer?: (userAnswer: string) => void;
    nextQuestion?: () => void;
}

export type FormData = {
    category: number;
    type: string;
    difficulty: string;
    numQuestions: number;
}

type SetAppState = {
    readonly id: 'SET_APP_STATE';
    readonly payload: number;
}

type SubmitForm = {
    readonly id: 'SUBMIT_FORM';
    readonly payload: FormData;
}

type StartQuiz = {
    readonly id: 'START_QUIZ';
    readonly payload: QuizData;
}

type SubmitAnswer = {
    readonly id: 'SUBMIT_ANSWER';
    readonly payload: string;
}

type NextQuestion = {
    readonly id: 'NEXT_QUESTION';
    readonly payload: null;
}

export type Action = SetAppState | SubmitForm | SubmitAnswer | StartQuiz | NextQuestion;

export type RawQuestion = {
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
}

export type FetchQuestions = {
    (
        category: number,
        quizType: string,
        difficulty: string,
        numQuestions: number,
    ): Promise<RawQuestion[]>
}

export type Question = {
    category: string;
    type: string;
    difficulty: string;
    questionStatement: string;
    options: string[];
}

export type QuizData = {
    totalQuestions: number;
    score: number;
    questions: Question[];
    correctAnswers: string[];
    currentQuestion: number;
    userAnswers: string[];
    isAnswerCorrect: boolean[];
}

export type DataModifier = (rawData: RawQuestion[]) => QuizData;