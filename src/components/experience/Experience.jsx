import React from 'react'
import "./experience.css"
import { Container, Row, Col } from 'reactstrap'

const developmentExperienceData = [
    {
        year: '2021- Present',
        title: 'FrontEnd Developer Jr',
        desc: 'Al finalizar el curso de React empecé a realizar trabajos como freelancer realizando paginas web para distintos pedidos que recibia así como (ecomarce, carpinteria, etc).'
    },
    {
        year: '2021- Present',
        title: 'BackEnd Developer Jr',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa earum sequi amet, blanditiis in.'
    }
]

const Experience = () => {
  return (
    <section id='experience'>
        <Container>
            <Row>
                <Col lg='12' className='mb-5'>
                    <h2>Experience</h2>
                </Col>
                <Col lg='6' md='6'>
                    <div className="single__experience-container">
                     {
                         developmentExperienceData.map((item, index)=>(
                            <div className="single__experience" key={index}>
                                <span className='experience__icon'><i className="ri-briefcase-line"></i></span>
                                <h6>{item.year}</h6>
                                <h5>{item.title}</h5>
                                <p>{item.desc}</p>
                            </div>
                         ))
                     }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Experience
