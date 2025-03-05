import { useState } from 'react';
import Buttons from './components/Buttons';
import Display from './components/Display';
import TopBar from './components/TopBar';

function App() {
  const [expression, setExpression] = useState('');

  return (
    <div className="w-full h-screen bg-background flex flex-col">
      <TopBar />
      <Display Value={expression || '0'} />
      <Buttons setExpression={setExpression} />
    </div>
  );
}

export default App;
