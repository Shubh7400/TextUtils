import React, {useState} from 'react'

const TextInputs = (props) => {
  const[text,setText]=useState("Enter Text on First Input Field")
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
<>    
<div className='container-fluid'>
<h1 className='try10'>
<span className='try'>T</span>
<span className='try1'>E</span>
<span className='try2'>X</span>
<span className='try3'>T</span><br/> 
<span className='try4'>C</span>
<span className='try6'>O</span>
<span className='try7'>N</span>
<span className='try8'>V</span>
<span className='try9'>E</span>
<span className='try14'>R</span>
<span className='try11'>T</span>
<span className='try12'>E</span>
<span className='try13'>R</span>
</h1>
</div>
   <div className='myclass'>
        <div className='container text-white'>
          <div className='first'>
  
         <h1 className='text'>{props.heading}</h1>
         <div className="mb-3">
           <textarea className="form-control"   onChange={(event) => setText(event.target.value) }   id="myBox" rows="8"></textarea>
         </div></div>
         <div className='second'>
         <button className='btn btn-success me-3 my-3' onClick={handleUpClick}>Convert to UpperCase</button>
         <button className="btn btn-success me-3 my-3" onClick={handleLoClick}>Convert to Lowercase</button>
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
        <h1 className='here'>Preview</h1>
        <b>{edit}</b>
        </div>
       </div>
       </div>
       
  </>     
      
  )
}

export default TextInputs