import React from 'react'

function Childcomponent(props) {
    
    return (
        <div>
            <button onClick={()=>props.greethandler('mihir')}>GREET PARENT</button>
        </div>
    )
}

export default Childcomponent
