import React, {useState} from 'react'

const TextInputs = (props) => {
  const[text,setText]=useState("enter text here")
  const[edit,setEdit]=useState('')


  const handleUpClick=()=>{
    console.log("uppercase was clicked",text)
    let newText=text.toUpperCase();
    setEdit(newText)
  }
  const handleLoClick = () => {
     console.log('lower')
     let loText=text.toLowerCase();
     setEdit(loText)
   }


   const handleOnChange = (event) => {
     console.log("on change")
     setText(event.target.value)
    

     }

    const removeAll = () => {
      alert("are you sure?")
      setEdit([]);
     
 }
  return (
<>        <h2 className='here3' >TEXTUTILS</h2>
          <div className='myclass'>
        <div className='container text-white'>
          <div className='first'>
         <h1 className='text'>{props.heading}</h1>
         <div className="mb-3">
           <textarea className="form-control"   onChange={(event) => setText(event.target.value) }   id="myBox" rows="8"></textarea>
         </div></div>
         <div className='second'>
         <button className='btn btn-success me-3' onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-success me-3" onClick={handleLoClick}>Convert to Lowercase</button>
         <button className="btn btn-danger" onClick={removeAll}>Remove all</button>
         </div>
       </div>

       <div className='container my-3'>
        <div className='third'>
     <textarea className='form-control' value={edit} onChange={handleOnChange}  id="myBox" rows="8"></textarea> 
     </div></div>
       <div className="container my-3">
       <div className='four'>
        <h1 className='here1'>Your Text summary</h1>
        <b>{text.split(" ").length} Words And {text.length} Characters</b><br/>
        <b>{0.008* text.split(" ").length} Minutes Read</b>
        <h2 className='here'>Preview</h2>
        <b>{edit}</b>
        </div>
       </div>
       </div>
  </>     
      
  )
}

export default TextInputs