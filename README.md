<h1>Facebook Messenger Clone in React</h1>

<h3><a href="https://github.com/joshwcomeau/react-flip-move">React-Flip-Move</a></h3>
<p>That animation which appears when a new message appears is done using this module. This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes.</p>

<h3><a href="#">useState</a></h3>
<p>This helps create a state variable inside a functional component.<br><br>
<b>Syntax : <br><i>const [messages, setMessages] = useState([{}]);</b></i><br><br>
In above syntax "messages" is the name of state created. "setMessages" is a function that helps changing state just like setState in class component. The argument inside useState is the initial value of the state which in this case is a list of objects.
</p>

<h3><a href="https://medium.com/trabe/react-useeffect-hook-44d8aa7cccd0">useEffect</a></h3>
<p>This function executes on a given condition.
<br><br>
<b>Syntax : <br><i>
useEffect(() => {
    setUsername(prompt('Please enter your name : '));
  }, [])
  </b></i><br><br>
Above function executes once because it's second argument is an empty list here. As long as we only want our effect (subscribe to resizes) to be called once, we pass an empty array as the second parameter of the function useEffect . An effect can optionally return a function (the cleanup function) that React will call when the component unmounts and before running the effect next time.
</p>

<h3><a href="#">Firebase Commands Used</a></h3>
<ul>
    <li>
        <p>
            Saving Data from Frontend to Firestore.<br/>
            <i>
                db.collection('messages').add({
                    message : input,
                    username : username,
                    timestamp : firebase.firestore.FieldValue.serverTimestamp()
                });
            </i>
        </p>
    </li>
    <li>
        <p>
            Reading Data from Firestore.<br/>
            <i>
                db.collection('messages').orderBy( 'timestamp',   'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => ({id : doc.id, message: doc.data()})))
                ))
            </i>
        </p>
    </li>
</ul>