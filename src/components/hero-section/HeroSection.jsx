import React from 'react';
import "./hero-section.css"

import { Container, Row, Col } from 'reactstrap'

import { useTypewriter } from 'react-simple-typewriter'

import heroImg from "../../assets/images/hero-img.jpg"

const HeroSection = () => {

    const { text } = useTypewriter({
        words: ['Santiago Gonzalez', 'Desarrollador web', 'FrontEnd Developer'],
        loop: 0,
      });

  return <section className='hero__section' id='home'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                  <div className="hero">
                    <div className="hero__content">

                        <p className='mb-3'>Bienvenido a mi mundo!</p>
                        <h2 className='hero__title mb-4'>
                            Soy <span>{text}</span>
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus omnis voluptatem necessitatibus quisquam, fuga tenetur accusantium sint quidem voluptate natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, aut!</p>

                        <div className="mt-4 hero__btns d-flex align-items-center gap-4">
                            <button className="btn hire__btn"><a href="https://github.com/Santy-Gonzalez" target="_blank">Clickeame</a></button>
                            <button className="btn"><a href="#contact">Contactame</a></button>
                        </div>
                    </div>
                  </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className="hero__img">
                        <img src={heroImg} alt="" className='w-100'/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default HeroSection
