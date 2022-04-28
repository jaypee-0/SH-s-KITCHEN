import React from 'react'
import Accordion from './Accordion'
import Data from './Data'
import './FAQ.css'

const FAQ=()=> {
    
    return (
        <div className='FAQ'>
            <h1>Frequently Asked Questions</h1>
            <div className='container'>

                <div className='faqsBlock'>
                    {Data.map((val) => {

                        return (
                            <>
                                <Accordion {...val} />
                            </>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}

export default FAQ