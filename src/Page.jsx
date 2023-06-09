import React from 'react';
import Buttons from './Buttons';
import Counter from './Counter';

export default function Page({ count, onClick, onClickNum }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClick={onClickNum}
      />
    </div>
  );
}
