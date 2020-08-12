import React  from 'react'

// JSX VERSION FOR WRITING A COMPONENT

// const Hello = ()=> <div className ='dummyClass'><h1>Hello All</h1></div>

// NOT JSX VERSION
const Hello = ()=>{
    return React.createElement('div', 
    {id:'hello'},
    React.createElement('h1',{className:'this'},'Hello All.....'));
}

export default Hello