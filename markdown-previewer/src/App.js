import './App.css';
import { useState } from 'react';
import { marked } from 'marked';

function App() {

  const [text, setText] = useState(`
  # Beginning of Markdowns 
  ## Another Header
  ### Hee Hee 
  [Link](https://www.freecodecamp.org)

  \`code\`
  \`\`\`
  {
    "firstName": "Nadia",
    "lastName": "Mckenzie",
    "age": 100
  }
  \`\`\`
  ~~**This was EASY.**~~
  >*I enjoyed this project*

  1. Responsive Web Design
  2. JavaScript
  3. Frontend Libraries
  
  ![cat](https://tse1.mm.bing.net/th?id=OIP.23o4iI3R8sAJaHxN78SxKgHaFj&pid=Api&rs=1&c=1&qlt=95&w=129&h=96)
  
  `);
  marked.setOptions({
    breaks: true
  })

  return (
    <div className="App">
      
      <textarea 
        id="editor" 
        onChange={(event) => {
        setText(event.target.value);
        }} 
        value={text}>
      </textarea>
      
      <div 
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
      ></div>
    
    
    
    
    
    </div>
  );
}

export default App;
