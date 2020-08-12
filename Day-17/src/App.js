import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/welcome'
import  Hello3 from './components/Hello3';
import Message from './components/message'
import Increment from './components/increment';
import FunctionClick from './components/FunctionClick';
import Classclick from './components/Classclick';
import EventBind from './components/EventBind';
import Parentcomponent from './components/Parentcomponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/nameList';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';
function App() {
  return (
    <div className="App">
      
      
      {/* THIS IS A FUNCTIONAL COMPONENT */}
      {/* <Greet name ='Bruce Wayne' heroName ='Batman' >
        <p>This is children prop</p>
      </Greet>
      <Greet name ='Tony Stark' heroName ='Ironman'>
        <button>ACTION</button>
      </Greet>
      <Greet name ='Peter Parker'  heroName ='Spiderman'></Greet> */}

{/* THIS IS CLASS COPMPONENT */}
       {/* <Welcome name ='Bruce Wayne' heroName ='Batman' />
       <Welcome name ='Tony Stark' heroName ='Ironman'/>
       <Welcome name ='Peter Parker'  heroName ='Spiderman'/>  */}
      {/* <Hello3/>

{/* CLICKEVENTS, STATE CAHNGES AND UPDATION */}
      {/* <Message/> */}

  {/* INCREMENTALS  AND FUNCTIONAL STATE CHANGES*/}
  {/* <Increment/> */}

  {/* EVENT HANDLING */}
  {/* <FunctionClick/> */}
  {/* <Classclick/> */}

{/* BINDING EVENT HANDLER */}
{/* <EventBind/> */}


{/* METHODS AS PROPS */}
{/* <Parentcomponent/> */}


{/*   CONDITIONALS */}
{/* <UserGreeting/> */}

{/*   LIST RENDERING  MOR ARE NEEDED*/}
{/* <NameList/> */}

{/* STYLING IN REACT */}
{/* <Stylesheets primary={true}/> */}
<Inline/>
    </div>
  );
}

export default App;
