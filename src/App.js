import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages]  =useState([
    {username: 'deepu', message: 'hey guys !'},
    {username: 'sibbu', message: 'Im fine, how are you'}
  ]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt('Please enter your name : '));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, message: input}]);
    setInput("");
  }

  return (
    <div className="App">

      <form>
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      
      {
        messages.map(message => (
          <Message username={username} message={message}/>
        ))
      }
    </div>
  );
}

export default App;
