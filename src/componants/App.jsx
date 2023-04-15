import React, { useState } from "react";
import Heading from "./header";
import Footer from "./footer";
import Note from "./Note";
import Form from "./form";
import CreateArea from "./creatArea";

function App() {
  const [notes, setNotes]=useState([])
  function addItem(newNote){
  setNotes(prevnotes=>{
    if(newNote.title===''){
    newNote.title="No title"
    }
    if(newNote.content===''){
      newNote.content="No content"
      }
    return [
      ...prevnotes, newNote
    ]
    
    
  })
  
  }
  function deleteNote(id){
  setNotes(prevItem=>{
    return prevItem.filter((note,index)=>{
      return index!==id
    })
  })
  }
 
  return  <div>
  <Heading />
  <CreateArea onAdd={addItem}  />

  {notes.map((newNoteItem, index)=>{
    return <Note
    key={index}
    id={index}
    title={newNoteItem.title}
    content={newNoteItem.content}
    onDelete={deleteNote}
     />
  })}
  
  <Footer />
    
  </div>

}


export default App;