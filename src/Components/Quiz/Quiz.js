import React from 'react'
import "./Quiz.css";
function Quiz() {
  return (
 <div>
{/* 
<div className="navbar">
        <div className="navbar-left">
            <span className="navbar-logo">Quiz Time</span>
        </div>
        <div className="navbar-middle">
            
            <i className="fas fa-search search-icon"></i>
           <input type="text" id="search-input" placeholder="Search"/>
            <button className="start-quiz-button">Start Quiz</button>
        </div>
        <div className="navbar-right">
            
            <div className="next-person-icon"></div>
            <span className="user-name">John Doe</span>
        </div>
    </div> */}

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
                <label><input type="radio" name="answer" value="A"/> Option A</label><br/>
                <label><input type="radio" name="answer" value="B"/> Option B</label><br/>
                <label><input type="radio" name="answer" value="C"/> Option C</label><br/>
                <label><input type="radio" name="answer" value="D"/> Option D</label><br/>
            </form>
        </div>
        <div className="right-section">
            <div className="timer">
                <h1 className="main-heading">Timer</h1>
                <p className="sub-heading">Question 1/5</p>
            </div>
            <div className="question">
                <p>How can we manage electronic waste (e-waste) sustainably? E-waste, which contains hazardous materials and valuable resources, presents both environmental and economic challenges. Effective recycling, responsible disposal, and minimizing e-waste generation are crucial to mitigate its adverse effects on the environment and promote resource conservation.</p>
            </div>
            <div className="submit-card">
                <button id="submit-button">Submit</button>
            </div>
        </div>
    </div>




    {/* this is return div close */}
 </div>
  )
}

export default Quiz
