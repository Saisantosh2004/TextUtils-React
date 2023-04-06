import React,{useState} from 'react'

//states makes the changes that happend will reflect everywhere where the varisbal is used bina page relaoad honey key waja seyyy
// hooks are made for functional based react js 

export default function TextForm(props) {
    const [text,setText]=useState("Enter here");

    // you cnannot do like this -- text="my text"
    // you need to update the text only using the setText function

    const handleOnUpClick=()=>{
        let upText=text.toUpperCase();
        setText(upText);
    }

    const handleOnLoClick=()=>{
        let upText=text.toLowerCase();
        setText(upText);
    }
    
    const handleOnChange=(event)=>{
        setText(event.target.value)  
    }

    return (
        <>
        <div>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3 TextForm-bg" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                    <button className='btn btn-primary mx-1' onClick={handleOnUpClick}>Convert to UpperCase</button>
                    <button className='btn btn-primary mx-1' onClick={handleOnLoClick}>Convert to Lowercase</button>
                </div>
            </div>
        </div>
        <div className="container">
            <h2>Text Summary</h2>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length }Minutes to Read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
