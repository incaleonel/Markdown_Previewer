import './App.css';
import text from './components/text';
import Toolbar from './components/toolbar';
import { useState } from 'react'
import { marked } from 'marked'



function App() {

  const [ value, changeValue] = useState(text);
  const handleChange = (e) => {
      changeValue(e.target.value);
  }
  
  return (
    <div id="padre">
      <div className="box-in" id="caja-icono1">
        <Toolbar titulo=" Editor" identificador = "icono1" caja="box-in" bro={["icono2","box-out"]}/>
        <textarea id="editor" type="text" value={value} onChange={handleChange}></textarea>
      </div>
      <div className="box-out" id="caja-icono2">
        <Toolbar titulo=" Previewer" identificador = "icono2" caja="box-out" bro={["icono1","box-in"]}/>
        <div className="preview" id="preview" dangerouslySetInnerHTML={{__html: marked.parse(value)}}>
        </div>
      </div>
    
    </div>
    
  );
}

export default App;
