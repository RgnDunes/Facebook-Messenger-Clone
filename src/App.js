import './App.css';
import React, {useState, useEffect} from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function App() {

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() =>{
    db.collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setMessages(snapshot.docs.map(doc => ({id : doc.id, message: doc.data()})))
    ))
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name : '));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput("");
  }

  return (
    <div className="App">

      {/* <form> */}
        <FormControl>
          <InputLabel>Enter a message...</InputLabel>
          <Input value={input} onChange={event=>setInput(event.target.value)}/>
          <Button disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message</Button>
        </FormControl>
      {/* </form> */}
      
      <FlipMove>
        {
          messages.map(({id, message}) => (
            <Message key={id} username={username} message={message}/>
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
