import React,{useState,useEffect} from 'react';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';
import Todo from "./Component/Todo"
import './App.css';
import db from "./firebase"
import firebase from "firebase"

function App() {
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');
 // when the app loads we need to listen to the database like updating addding or removing

  useEffect(() => {
    db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id:doc.id,todo : doc.data().text})))
    })
    
  }, [])
  const addTodo = (event) =>{
    //console.log("I am in todo")
    event.preventDefault();//this will stop refresh howl page
    
    db.collection("todos").add({
      text : input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')//clear up the input after clicking Enter or todo button
  }
  return (
    <div className="App">
      <h1>CKP</h1>
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange= {event =>setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} variant="contained" type="submit" onClick={addTodo} color="primary">
          Add ToDo
        </Button>
        {/*<button type="submit" onClick={addTodo}>Add todo</button>*/}
        </form>
      <ul>
        {todos.map(todo =>(
          <Todo todo = {todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
