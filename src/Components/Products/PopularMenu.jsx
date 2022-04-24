import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { popularMenuFood } from './products-data';
import Product_Card from './Product_Card';



const PopularMenu = () =>  {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <h2>Popular Food Menu</h2>
                    </Col>
                    {popularMenuFood.map((item) => (
                            <Col lg='3' key={item.id}>
                              <Product_Card item={item} />
                            </Col>
                        ))}
                </Row>
            </Container>
        </section>
    );
}

export default PopularMenu;


