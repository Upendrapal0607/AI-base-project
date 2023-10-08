import React, { useState } from 'react'
import style from "./Interview.module.css"
import annyang from 'annyang';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGlobe,
  faCartShopping,
  faMicrophone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

// { type, customPrompt, topics, userPreferences, experienceLevel, questionStyle }
const Question = ({ sevectValue }) => {
  // console.log({sevectValue})
  const [inputvalue, setInputValue] = React.useState("")
  const [micStart, setMicStart] = React.useState(false)
   let [data,setData]=useState([])
   let arr=[]
  const miceStyle = {
    color: "#0c66ec",
    fontSize: "20px"
  }
  const sendIconStyle = {
    color: "#ffff",
    background: "#06e450",
  }

  const handleClick = () => {
    setMicStart(!micStart)
    if (annyang && !micStart) {
      // Initialize annyang with your commands
      annyang.start()

      // Define a command to capture speech
      annyang.addCallback('result', (phrases) => {
        const capturedSpeech = phrases[0]; // Get the first recognized phrase
        console.log('Captured Speech:', capturedSpeech);
        setInputValue(prev => prev += capturedSpeech)
        // Now you can store `capturedSpeech` in your state or perform any other actions.
      });
    }
    else {
      annyang.abort()
    }

  }

  const handleFetchData = () => {
    // sevectValue=="JavaScript Developer"?
    let topicArr=[]
    let bodyObject = {
      type:sevectValue,
      customPrompt: ``,
      topics:topicArr,
      userPreferences: "", experienceLevel: "beginner",
      questionStyle: "theoretical"
    }
    console.log({bodyObject})
   
    axios.post("http://localhost:8080/interview/generate-interview-questions", bodyObject).then(res => {
      console.log(res.data)
    }).catch(err => {
      console.log({ err })
    })
    setInputValue("")
  }

  return (
    <div style={{ width: "100%", border: "2px solid red" }}>
      {arr.map((el, i) => <div className={style.sow_message_box}>
        <div className={style.input}>how I can assist youhow I can assist you how I can assist you how I can assist youhow I can assist you how I can assist youhow I can assist you how I can assist you how I can assist youhow I can assist you</div>
        <div className={style.output}>how I can assist youhow I can assist you how I can assist you how I can assist youhow I can assist you how I can assist youhow I can assist you how I can assist you how I can assist youhow I can assist you</div>
      </div>)}

      <div className={style.messsage_box}>
        <input  value={inputvalue} onChange={e => setInputValue(e.target.value)} required className={style.input_text} placeholder="Chat with"></input>
        <div className='flex gap-1 justify-center items-center' style={{ marginLeft: "-125px" }}>
          <button disabled={inputvalue==""} onClick={handleFetchData} className={style.input_btn} style={inputvalue ? sendIconStyle : { background: "hwb(0 0% 100% / 0.192)", color: "#fff" }} >
            <FontAwesomeIcon icon={faPaperPlane} />
          </button>
          {/* style={inputvalue&&sendIconStyle} */}
          {/* style={miceStyle&&micStart} */}
          <FontAwesomeIcon onClick={handleClick} icon={faMicrophone} style={micStart ? miceStyle : { color: "black" }} />
        </div>

      </div>
    </div>
  )
}

export default Question
