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
    
    const handleOnClearClick=()=>{
        setText("")  
    }

    const handleOnRandomClick=()=>{
        let loremContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in fermentum. Sed viverra tellus in hac habitasse. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Sit amet consectetur adipiscing elit ut aliquam purus sit. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Interdum velit euismod in pellentesque massa placerat. Scelerisque fermentum dui faucibus in ornare quam viverra. Pretium viverra suspendisse potenti nullam ac tortor. Sem viverra aliquet eget sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Suspendisse ultrices gravida dictum fusce ut placerat'  

        setText(loremContent);
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
                    <button className='btn btn-warning mx-1' onClick={handleOnLoClick}>Convert to Lowercase</button>
                    <button className='btn btn-danger mx-1' onClick={handleOnClearClick}>Clear Text</button>
                    <button className='btn btn-success mx-1' onClick={handleOnRandomClick}>Random Text</button>
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
