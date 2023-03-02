import { useState, useEffect } from 'react'
import axios from 'axios'
import PreResponse from './margaret/PreResponse.js'
import PostResponse from './margaret/PostResponse.js'
import './margaret/App.css'


const App = () => {
  const [notes, setNotes] = useState({})
  const [show, setShow] = useState(false)
  const email = "name@missporters.org"
  const url = '/api/data'

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setNotes(response.data)
        console.log(response.data)
      })
  }, [])

 
  const onClick = (i) => {
    axios
      .post(url, {vote: i})
      .then(res => {
        setNotes(res.data)
        setShow(true);
      })
  }

if(show){
  console.log(notes)
  return (
   
    <div className="App">
      <PostResponse
        question={notes.question}
        percent1={(notes.voting1*100/(notes.voting1+notes.voting2)).toFixed(0)}
        percent2={(notes.voting2*100/(notes.voting1+notes.voting2)).toFixed(0)}
        caption1={notes.caption1}
        caption2={notes.caption2}
      />
    </div>

  )
} else{
    return (
      <div className="App">
        <PreResponse
          question={notes.question}
          callback1={() => {onClick(0)}}
          callback2={() => {onClick(1)}}
          caption1={notes.caption1}
          caption2={notes.caption2}
        />
      </div>
  
    )
  }
}

export default App
