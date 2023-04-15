import DeleteIcon from '@mui/icons-material/Delete';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
function Note(props) {
const [fav,setfav]=useState(false)
  function deleteItem(){
  props.onDelete(props.id)
  
  }
  function addfav(){
    setfav(!fav)
  }
    return (
      <div className="note">
      <div className='fav-icon'>
      <h1>{props.title}</h1>
      <button onClick={addfav}>{fav? <StarIcon />:<StarBorderIcon /> }</button>
      </div>
        
        <p>{props.content}</p>
        <button onClick={deleteItem}><DeleteIcon /></button>
      </div>
    );
  }
  
  export default Note;