import React from 'react'

// THIS IS A FUNCTIONAL COMPONENT EXAMPLE 


// function Greet(){
//     return <h1>Hello All... <br/>
//     First Functional Component</h1>
// }

const Greet = (props)=> {
    const {name,heroName} =props
console.log(name,heroName)
return (
   <div> 
    <h1>Hello {name} AKA {heroName}</h1>
{heroName.children}
    </div>
)
}

export default Greet