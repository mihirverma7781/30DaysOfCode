import React from 'react'
// FUNCTIONAL COMPONENT EVENT HANDLING
function FunctionClick() {

// click handler
function clickHandler(){
console.log('this is click')
}

    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick
