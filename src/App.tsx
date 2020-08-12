import React, { useState } from 'react';
import { useAsyncResource, AsyncResourceContent } from 'use-async-resource';
// Components
import { SelectQuiz, StartQuiz, QuestionCard, Results, Loading, Error } from './components/components';
// Context
import { GlobalProvider } from './context/context';
// Api function
import { fetchQuestions, dataModifier } from './API/API';
// Styles
import { GlobalStyle, Title } from './App.styles';

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
        {appState === 0 && <SelectQuiz fetchNewQuiz={fetchNewQuiz} setAppState={setAppState} />}
        {appState === 1 && <StartQuiz quizReader={quizReader} dataModifier={dataModifier} setAppState={setAppState} />}
        {appState === 2 && <QuestionCard setAppState={setAppState} />}
        {appState === 3 && <Results setAppState={setAppState} />}
      </AsyncResourceContent >
    </GlobalProvider>
  );
}

export default App;
