import React from 'react'
import "./contact.css"
import { Container, Row, Col } from 'reactstrap'
import Form from '../form/Form'

const Contact = () => {
  return (
    <section id='contact'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Ponte en contacto</h2>
                </Col>

                <Col>
                    <div className="contact__info-container">
                        <div className="single__info-box w-50">
                            <h6>Ubicación</h6>
                            <p>Argentina, Buenos Aires</p>
                        </div>

                        <div className="single__info-box w-50">
                            <h6>Email</h6>
                            <p>santiagogonzalezjobs@gmail.com</p>
                        </div>
                    </div>
                </Col>

                <Col lg='6' md='6' className='form__container'>
                    <Form/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Contact
