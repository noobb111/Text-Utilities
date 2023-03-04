import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        // console.log("handlUpClick has been clicked:"+ text);
        const upText=text.toUpperCase();
        setText(upText);
        props.showAlert('Converted to Uppercase','success');
    }
    const handleDownClick=()=>{
        // console.log("handleDown Change is clicked");
        const downText=text.toLowerCase();
        setText(downText);
        props.showAlert('Converted to Lowercase','success');
    }
//onChange helps to write in textarea without it text will not change

    const handleClear=()=>{
       const clText="";
       setText(clText);
       props.showAlert('Text is Cleared','success');
    }
    const handleCopy=()=>{
        let txt=document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
        props.showAlert('Text is Copied','success');
    }
    const handleSpaces=()=>{
        let sp=text.split(/[ ]+/);
        setText(sp.join(' '));
        props.showAlert('Extra Spaces is Cleared','success');
    }

    const handleOnChange=(event)=>{
       // console.log("handlOnChange has been clicked");
        setText(event.target.value);
    }

    const[text,setText]=useState("Enter text here");
    //setText("qwerty")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#4b5e7a':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
<button className="btn btn-primary" onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-primary mx-3" onClick={handleDownClick}>Convert to lowercase</button>
<button className="btn btn-primary " onClick={handleCopy}>Copy</button>
<button className="btn btn-primary mx-3" onClick={handleSpaces}>Remove extra spaces</button>
<button className="btn btn-danger " onClick={handleClear}>Clear</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} and {text.length} characters</p>
    </div>
</>
  )
}
