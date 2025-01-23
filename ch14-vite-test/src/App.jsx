import React, { useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [data, setData] = useState(null);

  const onClick = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        setData(response.data);
      });
  };

  return (
    <div>
      <h1 className='react'>ch14 API 연동해서 뷰어 만들기</h1>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;