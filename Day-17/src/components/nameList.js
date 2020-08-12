import React from 'react'

function nameList() {
    const names= ['Bruce','Tony','Natasha','Chris','Bruce']
    
    
    const nameList=names.map((element,index)=>{
    return <h2 key={index}>{index}  { element}</h2>
    })
    return (
        <div>
            {nameList}
        </div>
    )
}

export default nameList
