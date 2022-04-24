import React from 'react'
import './product-card.css'

const Product_Card = (props) => {
    const { title, imgUrl, price } = props.item

    return (
        <div className="single_product">
        <div className="product_img">
            <img src={item.imgUrl} alt="" className="w100" />
        </div>
        <div className="product_content">
            <h6>{item.title}</h6>
            <div className="d-flex aligh-items-center justify-content-between">
                <span className="price"> Price: $<span>{item.price}</span></span>
            </div>
        </div>

    </div>
    )
} 

export default Product_Card