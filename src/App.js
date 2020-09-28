import React,{useState} from 'react';
import './App.css';

function App() {
  const [todos,setTodos] = useState(["task1","task2","task3"]);
  const [input,setInput] = useState('');

  const addTodo = (event) =>{
    //console.log("I am in todo")
    event.preventDefault();//this will stop refresh howl page
    setTodos([...todos,input])
    setInput('')//clear up the input after clicking Enter or todo button
  }
  return (
    <div className="App">
      <h1>CKP</h1>
      <form>
        <input value={input} onChange= {event =>setInput(event.target.value)}/>
        <button type="submit" onClick={addTodo}>Add todo</button>
      </form>
      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
