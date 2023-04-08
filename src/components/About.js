import React, { useState } from 'react'

export default function About() {

    const [myStyle , setMyStyle]=useState({
        color:'black',
        backgroundColor:'white',
        border:'1px solid black'
    })

    const handleOnClick=()=>{
        if(myStyle.color==='white'){
            setMyStyle({
                color:'black',
                backgroundColor:'white',
                border:'1px solid white'
            })
        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
        }
    }

  return (
    <div className="container my-3">
        <div className="accordion " id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    About Creator
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    I am Sai Santosh Bonagiri , Currently in 2nd year of BE in Computer Science Specialization at Chaitnaya Bharathi Institute of Technology.<br></br>
                    <i> My skills are</i>
                   :<br></br>
                    <b>Computer Progrmming</b>: C/C++,Java,Python<br></br>
                    <b>Web Technologies</b>: HTML,CSS, Bootstrap, Javascript,Tkinter<br></br>
                    <b>Course Work</b>: Object-Oriented Programming, Data Structures, Design And Analysis of Algorithms, DBMS, I4.0.<br></br>
                    <b>Machine Learning</b>: Regression and Classification, Decison Trees, Random Forests, Artificial Neural<br></br>
                    <b>Softwares</b>: Git/Github, Replit, Postman.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    About TextUtils
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This is a simple website , which helps to convert the text into required format available in the website by just dropping it in the text area and pressing the required button.
                    <br></br>
                    You also have the Preview in order to read the content of your text, it shows the time taken to read the text in the textsummary.
                    <br></br>
                    It is also available in the dark mode.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Techs Used
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TestUtils made using React js Framework, Bootstrap is used for styling.
                    (HTML, Bootstrap, JavaScript, Reactjs)
                </div>
                </div>
            </div>
        </div>
        <button onClick={handleOnClick} className="btn btn-warning my-2">Switch Mode</button>
    </div>
  )
}
