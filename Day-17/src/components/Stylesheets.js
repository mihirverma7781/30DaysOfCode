import React from 'react'
import './Mystyle.css'
function Stylesheets(props) {
let className = props.primary ? 'primary ':''
    return (
        <div>
        <h1 className={`${className} font`}>Styling In React</h1>
        </div>
    )
}

export default Stylesheets