import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './About_Us.css';
import { FontAwesomeIcon as FA } from '@fortawesome/react-fontawesome'

const About_Us = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="choose_content">
              <h4>Who we are ?</h4>
              <h2>Take a look the benefits we Offer you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                veniam, laborum fugit quod natus ab quis quos, error non aperiam
                iusto temporibus, dicta explicabo nostrum repellat modi debitis
                perferendis. Repellat possimus tempora magni ab! Id fuga fugit
                vitae quae saepe.
              </p>
              <div className='features'>
              <div className='features1'  >
                <div className='single_features'  >
                  <span></span>

                </div>

              </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About_Us;
