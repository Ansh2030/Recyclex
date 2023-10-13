import React, { useState } from 'react'
import "./Quiz.css";
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
function Quiz() {
const [ans, setans] = useState('');
const [cred, setCred] = useState(0);
const [index, setIndex] = useState(0);

const ques =[
    "Which of the following element/s is/are cause of e-waste?",
    " How are electronic items dangerous?",
    "Which toxic compound is not found in e-waste?",
    "What are the health hazards which can be caused by E-Waste?",
    "How much lead is in a cathode ray tube (CRT), commonly called a picture tube?"


]

const answer=[
    [
        " Lead "," Cadmium","Beryllium, or Brominates flame retardants","All of the above","D"
    ],
    [
        "They degrade over time, releasing cancer-causing chemicals into the air.",
        "Lead and mercury in components can cause metabolic changes in users.",
        "They leach toxic metals in landfills and into ground water.",
        " They create electromagnetic fields that interfere with animal reproduction.",
        "C"
    ],
    [
        "Mercury","Cadmium","Neon"," Lead","C"
    ],
    [
       " Lung cancer"," DNA damage","Brain","All of the above","D"
    ],
    [
         "1.75 pounds"," Between 2 and 3 pounds","19 pounds","Between 4 and 7 pounds","D"
    ]

]
const check=()=>{
 if(ans===answer[index][4])
 {  setCred(cred+1);
    alert("Yeah you got it right. 1 credit in your pocket !!");}
 else 
 alert("Oops Try Again!!");
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
                <label><input type="radio" name="answer" value="A" onChange={(e)=>setans(e.target.value)}/> {answer[index][0]}</label><br/>
                <label><input type="radio" name="answer" value="B" onChange={(e)=>setans(e.target.value)}/> {answer[index][1]}</label><br/>
                <label><input type="radio" name="answer" value="C" onChange={(e)=>setans(e.target.value)}/> {answer[index][2]}</label><br/>
                <label><input type="radio" name="answer" value="D" onChange={(e)=>setans(e.target.value)}/> {answer[index][3]}</label><br/>
            </form>
        </div>
        <div className="right-section">
            <div className="timer">
                <h1 className="main-heading">Timer</h1>
                <p className="sub-heading">Question {index+1}/{ques.length}</p>
            </div>
            <div className="question">
              {ques[index]}
                {/* <p>How can we manage electronic waste (e-waste) sustainably? E-waste, which contains hazardous materials and valuable resources, presents both environmental and economic challenges. Effective recycling, responsible disposal, and minimizing e-waste generation are crucial to mitigate its adverse effects on the environment and promote resource conservation.</p> */}
            </div>
            <div className="submit-card">
                <button id="submit-button" onClick={check}>Submit</button>
                <button id="next-button" onClick={()=> index<ques.length-1?setIndex(index+1): alert("All done ! Thank You")}>Next</button>
            </div>
        </div>
    </div>


<Footer/>

    {/* this is return div close */}
 </div>
  )
}

export default Quiz
