import React, {useState} from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

function CreateArea(props) {
  const [isExpanded, setExpanded]=useState(false)
   const [note, setNote]=useState({
    title:'',
    content:''
   }) 

   function holdInput(event){
      const {name,value}=event.target
      setNote(prev=>{
        return {
          ...prev,
          [name]:value
        }
      })
   }
   function submitNote(event){
    props.onAdd(note)
    setNote({
      title:'',
      content:''
    })
   event.preventDefault()
   }
   function expand(){
    setExpanded(true)
   }
    return (
      <div>
        <form className="create-note">
          {isExpanded ? <input  onChange={holdInput} name="title" value={note.title} placeholder="Title" />: null}
          <textarea onClick={expand} onChange={holdInput} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded? 3:1} />
          <Fab className="fab" onClick={submitNote}><AddIcon /></Fab>
        </form>
      </div>
    );
  }
  
  export default CreateArea;