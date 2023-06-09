import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Page from './Page';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  function handleClickNum(num) {
    setState({
      count: count + num,
    });
  }
  return (
    <Page
      count={count}
      onClick={handleClick}
      onClickNum={handleClickNum}
    />
  );
}

const root = createRoot(document.getElementById('app'));
root.render(<App />);
