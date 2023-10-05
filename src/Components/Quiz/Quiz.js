import React, { useState } from 'react'
import "./Quiz.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Quiz() {
const [ans, setans] = useState('');

const [index, setIndex] = useState(0);

const ques =[
    "firts ques",
    "second ques"
]
const check=()=>{
 if(ans==='C')
 alert("right answer");
 else 
 alert("wrong answer");
}

  return (
 <div>


     <Navbar/>

    {/* <!-- MAIN SECTION CODE --> */}
    <div className="main-section">
        <div className="left-section">
            <h1 className="main-heading">E-Waste Quiz</h1>
            <h2 className="sub-heading">Answer the questions below</h2>
            <div className="image-card">
                <img src="https://imgs.search.brave.com/FPoT1Phk2nHwQz0ozB5Fwjp0SYcxw6rf5rJLcd3aheI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY1/NTU5MzczL3Bob3Rv/L29sZC13b29kLWJh/Y2tncm91bmQuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPW1R/NWZKVV80SXdnQ0I4/Vks2ZzU1MXlOVnpz/UUpuN1pZcEk4VWE2/VGVDMEk9" alt="E-Waste"/>
            </div>
            <h2 className="choose-answer-heading">Choose an answer:</h2>
            <form className="answer-options">
                <label><input type="radio" name="answer" value="A" onChange={(e)=>setans(e.target.value)}/> Option A</label><br/>
                <label><input type="radio" name="answer" value="B" onChange={(e)=>setans(e.target.value)}/> Option B</label><br/>
                <label><input type="radio" name="answer" value="C" onChange={(e)=>setans(e.target.value)}/> Option C</label><br/>
                <label><input type="radio" name="answer" value="D" onChange={(e)=>setans(e.target.value)}/> Option D</label><br/>
            </form>
        </div>
        <div className="right-section">
            <div className="timer">
                <h1 className="main-heading">Timer</h1>
                <p className="sub-heading">Question 1/5</p>
            </div>
            <div className="question">
              {ques[index]}
                {/* <p>How can we manage electronic waste (e-waste) sustainably? E-waste, which contains hazardous materials and valuable resources, presents both environmental and economic challenges. Effective recycling, responsible disposal, and minimizing e-waste generation are crucial to mitigate its adverse effects on the environment and promote resource conservation.</p> */}
            </div>
            <div className="submit-card">
                <button id="submit-button" onClick={check}>Submit</button>
                {/* <button id="submit-button" onClick={()=>setIndex(index+1)}>Next</button> */}
            </div>
        </div>
    </div>


<Footer/>

    {/* this is return div close */}
 </div>
  )
}

export default Quiz
