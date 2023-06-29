import React, { useState } from 'react';
import './App.css';

function App() {
  const [content, setContent] = useState('');
  const [todo, setTodo] = useState([]);

  const onChangeContentHandle = (e) => {
    setContent(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      id: Date.now(),
      content: content,
    };
    setTodo([...todo, newTodo]);
    setContent('');
  };

  return (
    <div>
      <div>
      <div className='container'>
        <input type="text" value={content} onChange={onChangeContentHandle} />
        <button className="button" onClick={addTodo}>추가하기</button> 
      </div>
      <h1 className='container'>Todo List</h1>
      </div>
      <div className="boxContainer">
        {todo.map((item) => (
          <div key={item.id} className="box">
            <div className="squareStyle">{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  )
  
}

export default App;
