import Navbar from './components/Navbar'
import Vnavbar from './components/Vnavbar'
import Content from './components/Content'
 
import  './App.css'
import { useState } from 'react'




 function App(){


  const[mode,setMode]=useState('light')
  const[text,setText]=useState('dark mode')


function toggleHandler(){


  if(mode=='light')
  {
    setMode('dark');
    document.body.style.backgroundColor='rgb(16, 16, 16)';
    setText('light mode')
  }
else{

  setMode('light');
  document.body.style.backgroundColor='white';
  setText('dark mode')

}



}

  return (
    <div className="App">

      <Navbar mode={mode} toggle={toggleHandler} />
      <div className="flex-container">
      <Vnavbar mode={mode}   />
     <Content mode={mode} />

      </div>
   
     
    </div>
  );
}

export default App;
