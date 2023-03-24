import './App.css';
import { useState } from 'react';
import Header from './Component.js/Header';
import Footer from './Component.js/Footer';
import Note from './Component.js/Note';
import Create from './Component.js/Create';

function App() {
  const [note, setNote] = useState([]);

  function deleteNote(id) {
    setNote((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function addNote(newNote) {
    setNote(prevItems => {
      return [...prevItems, newNote];
    });
  }
  return (
    <div>
      <Header />
      <Create addNote={addNote} />
      {note.map((noteItem, index) => <Note key={index} id={index} title={noteItem.title}
        content={noteItem.content} deleteNote={deleteNote} />)}
      <Footer />
    </div>
  );
}

export default App;
