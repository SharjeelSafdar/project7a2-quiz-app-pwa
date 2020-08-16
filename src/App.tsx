import React, { useState, lazy } from 'react';
import { useAsyncResource, AsyncResourceContent } from 'use-async-resource';
// Components
import { SelectQuiz, /* StartQuiz, QuestionCard, Results, */ Loading, Error } from './components/components';
// Context
import { GlobalProvider } from './context/context';
// Api function
import { fetchQuestions, dataModifier } from './API/API';
// Styles
import { GlobalStyle, Title, Box } from './styles/styles';

const StartQuiz = lazy( () => import('./components/StartQuiz/StartQuiz') );
const QuestionCard = lazy( () => import('./components/QuestionCard/QuestionCard') );
const Results = lazy( () => import('./components/Results/Results') );

const App = () => {
  const [ quizReader, fetchNewQuiz ] = useAsyncResource(fetchQuestions)
  const [ appState, setAppState ] = useState(0);
  
  return (
    <GlobalProvider>
      <GlobalStyle />
      <Title>It's Quiz Time</Title>
      <AsyncResourceContent  
        fallback={<Loading />}
        errorMessage={<Error />}
      >
        <Box>
          {appState === 0 && 
            <SelectQuiz fetchNewQuiz={fetchNewQuiz} setAppState={setAppState} />}
          {appState === 1 && 
            <StartQuiz quizReader={quizReader} dataModifier={dataModifier} setAppState={setAppState} />}
          {appState === 2 && 
            <QuestionCard setAppState={setAppState} />}
          {appState === 3 && 
            <Results setAppState={setAppState} />}
        </Box>
      </AsyncResourceContent >
    </GlobalProvider>
  );
}

export default App;
