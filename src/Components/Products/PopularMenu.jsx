import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { popularMenuFood } from './products-data';
import './product.css'




const PopularMenu = (item) => {
    return (
        <section className='popular-food'>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>Popular Food Menu</h2>
                    </Col>
                    {popularMenuFood.map((item) => (
                        <Col lg='3' key={item.id}  >
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
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default PopularMenu;


