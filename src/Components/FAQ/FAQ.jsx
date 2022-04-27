import React from 'react'
import './FAQ.scss';

const FAQ = ({title, active, setActive}) => {
  return (
    <div className='accordion'>
        <div className='accordionheading'>
            <div className='container'>
                <p>{title}</p>
                <span onClick={() => setActive()}>
                    {active === title ? "x" : "+"}
                </span>
            </div>
        </div>

        <div className={(active === title ? "show" : "") + " accordioncontent"}>
            <div className='container'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac posuere elit. Phasellus quis felis venenatis, eleifend arcu at,
                 fringilla nisi. Sed viverra nec odio fermentum convallis. Ut ultrices felis at libero tincidunt, ac cursus est interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur laoreet neque hendrerit maximus tincidunt.
                </p>
            </div>
        </div>
    </div>
  )
}

export default FAQ