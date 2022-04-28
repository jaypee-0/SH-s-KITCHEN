import React, { useState } from 'react'

const Accordion = ({question,answer}) => {

    const [text, setText] = useState(false);

    const display=()=>{
        setText(!text);
    }

  return (
<>
    <div className='question'>
        <h2>{question}</h2>
        <p onClick={display}>{text ? "x" : "|||"}
        </p>
    </div>
    <div className='answer'>
        {text && <p>{answer}</p> }
    </div>
</>
  )
}

export default Accordion