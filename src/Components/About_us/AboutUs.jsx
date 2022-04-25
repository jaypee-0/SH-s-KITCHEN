

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './AboutUs.css'
import Pasta from '../Products/images/pasta.png'



function aboutUs() {
    return (
        <section  className='about_us'>
            <Container>
                <Row>
                    <Col lg='6'>
                    <img src={Pasta} alt="Pasta" className='img' />
                    </Col>

                    <Col>
                        <div>
                            <h4>Who we are ?</h4>
                            <h2>Take a look the benefits we Offer you</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                                veniam, laborum fugit quod natus ab quis quos, error non aperiam
                                iusto temporibus, dicta explicabo nostrum repellat modi debitis
                                perferendis. Repellat possimus tempora magni ab! Id fuga fugit
                                vitae quae saepe.
                            </p>
                            <span><i class="ri-truck-line"></i></span>
                            <h6>Free Home Devilvery</h6>
                            <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.Iusto, quae.</p>

                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default aboutUs