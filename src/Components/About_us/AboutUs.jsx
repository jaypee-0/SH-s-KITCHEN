

import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import './AboutUs.css'
import Pasta from '../Products/images/pasta.png'
import 'remixicon/fonts/remixicon.css'



function aboutUs() {
    return (
        <section className='about_us'>
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
                        </div>

                        <div  className='features mt-4'>
                            <div className='feature1 d-flex align-items-center gap-5' >
                                <div className='single_feature'>
                                    <span ><i class="ri-truck-line"></i></span>
                                    <h6>Free Home Devilvery</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur.</p>
                                </div>

                                <div className='single_feature'>
                                    <span  className='feature_icon1'><i class="ri-money-dollar-circle-line"></i></span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur.</p>
                                </div>
                            </div>



                            <div className='feature1 mt-3 d-flex align-items-center gap-5' >
                                <div className='single_feature'>
                                    <span className='feature_icon2'><i class="ri-secure-payment-line"></i></span>
                                    <h6>Secure Payment</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur.</p>
                                </div>

                                <div className='single_feature'>
                                    <span className='feature_icon3'><i class="ri-24-hours-line"></i></span>
                                    <h6>24/7 Hours Support</h6>
                                    <p>Lorem ipsum dolor, sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default aboutUs