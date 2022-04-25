
import React, {useState, useEffect} from 'react'

import './product.css'
import { Container, Row, Col } from 'reactstrap'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from './products-data'

const ProductMenu = () => {

 const [filter, setfilter] = useState ('RICE-MENU')
 const [products, setProducts] = useState(fastFoodProducts)

 useEffect(()=>{
if (filter == 'RICE-MENU')
    setProducts(riceMenuProducts)

if (filter == 'FAST-FOOD')
    setProducts(fastFoodProducts)

if (filter == 'PIZZA')
    setProducts(pizzaProducts)

if (filter == 'DESSERT')
    setProducts(dessertProducts)

 if (filter == 'COFFEE')
    setProducts(coffeeProducts)



 },[filter])


 
    return ( 
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5 '>
                        <h3 className='menu_title'>Our Menu Pack</h3></Col>
                    <Col lg='12' className='text-center mb-4'>
                        <button className='filter-btn'>Fast Food</button>
                        <button className='filter-btn active-btn'>Rice Menu</button>
                        <button className='filter-btn'>Pizza</button>
                        <button className='filter-btn'>Desserts</button>
                        <button className='filter-btn'>Coffee</button>
                    </Col>
                    {
                        products.map(item => (
                            <Col lg='3' key={item.id} className='mb-4' >
                                <div className="single_product">
                                    <div className="product_img">
                                        <img src={item.imgUrl} alt="" />
                                    </div>
                                    <div className="product_content">
                                        <h6>{item.title}</h6>
                                        <div>
                                            <span className="price"> Price: $<span>{item.price}</span></span>
                                        </div>
                                    </div>
                                </div>


                            </Col>

                        ))
                    }


                </Row>
            </Container>
        </section>
    )
}

export default ProductMenu 