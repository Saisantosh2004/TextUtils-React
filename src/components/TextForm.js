import React,{useState} from 'react'

//states makes the changes that happend will reflect everywhere where the varisbal is used bina page relaoad honey key waja seyyy
// hooks are made for functional based react js 

export default function TextForm(props) {
    const [text,setText]=useState("");

    // you cnannot do like this -- text="my text"
    // you need to update the text only using the setText function

    const handleOnUpClick=()=>{
        let upText=text.toUpperCase();
        setText(upText);
        text.length && props.showAlert("Converted to Uppercase","success")
    }

    const handleOnLoClick=()=>{
        let upText=text.toLowerCase();
        setText(upText);
        text.length && props.showAlert("Converted to Lowercase","success")
    }
    
    const handleOnClearClick=()=>{
        setText("")  
        text.length && props.showAlert("Text Cleared","success")
    }

    const handleOnRandomClick=()=>{
        let loremContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in fermentum. Sed viverra tellus in hac habitasse. Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. Sit amet consectetur adipiscing elit ut aliquam purus sit. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Interdum velit euismod in pellentesque massa placerat. Scelerisque fermentum dui faucibus in ornare quam viverra. Pretium viverra suspendisse potenti nullam ac tortor. Sem viverra aliquet eget sit amet. Elit ut aliquam purus sit amet luctus venenatis lectus. Suspendisse ultrices gravida dictum fusce ut placerat'  

        setText(loremContent);
        props.showAlert("Lorem content generated","success")
    }

    const handleCopy =()=>{
        let newText=document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        text.length && props.showAlert("Coped to clipboard!","success")

    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        text.length && props.showAlert("Extra Spaces Removed","success")
    }

    const handleOnChange=(event)=>{
        setText(event.target.value)  
    }


    return (
        <>
        <div>
            <div className="container" style={{color:props.mode==='dark'?'white':'#4f5153'}}>
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3 TextForm-bg" id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#4f5153':'white',color:props.mode==='dark'?'white':'#4f5153'}} value={text} onChange={handleOnChange}></textarea>
                    <div className="container">
                        <button className='btn btn-primary mx-1 my-1' onClick={handleOnUpClick}>Convert to UpperCase</button>
                        <button className='btn btn-warning mx-1 my-1' onClick={handleOnLoClick}>Convert to Lowercase</button>
                        <button className='btn btn-danger mx-1 my-1' onClick={handleOnClearClick}>Clear Text</button>
                        <button className='btn btn-success mx-1 my-1' onClick={handleOnRandomClick}>Random Text</button>
                        <button className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
                        <button className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#4f5153'}}>
            <div className="container" style={{border:`2px solid ${props.mode==='dark'?'white':'#4f5153'}`}}>
                <h2>Text Summary</h2>
                <p>{text.length===0?0:text.split(' ').length} words and {text.length} characters</p>
                <p>{0.008*text.split(' ').length }Minutes to Read</p>
            </div>
            <div className="container my-2" style={{border:`2px solid ${props.mode==='dark'?'white':'#4f5153'}`}}>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Enter the Text in TextArea'}</p>
            </div>
        </div>
        </>
    )
}
