import React, { useState} from 'react';
import "./about.css";
import { Container, Row, Col } from 'reactstrap';
import aboutImg from "../../assets/images/hero-img.jpg";
import Education from './Education'
import Skills from './Skills';
import Award from './Award';

const About = () => {
    
    const [aboutFilter, setAboutFilter] = useState('ABOUT');

  return( 
    <section id="about">
      <Container>
          <Row>
              <Col lg='12' className='mb-5'> <h2> Sobre Mi</h2></Col>
              <Col lg='4' md='3'>
                  <div className="about__btns d-flex flex-column align-items-center">
                      <button className={`about__btn ${aboutFilter === 'ABOUT' ? 'about__btn-active' : ''} `} onClick={()=>setAboutFilter('ABOUT')}>Sobre Mi</button>
                      <button className={`about__btn ${aboutFilter === 'EDUCATION' ? 'about__btn-active' : ''} `} onClick={()=>setAboutFilter('EDUCATION')}>Educación</button>
                      <button className={`about__btn ${aboutFilter === 'SKILLS' ? 'about__btn-active' : ''} `} onClick={()=>setAboutFilter('SKILLS')}>Habilidades</button>
                      <button className={`about__btn ${aboutFilter === 'AWARD' ? 'about__btn-active' : ''} `} onClick={()=>setAboutFilter('AWARD')}>Premios</button>
                  </div>
              </Col>
              <Col lg='8' md='9'>

                {
                    aboutFilter === 'ABOUT' && <div className="about__content__wrapper d-flex gap-5">
                    <div className="about__img w-25">
                        <img src={aboutImg} alt="" className='w-100'/>
                    </div>

                    <div className="about__content w-75">
                        <h2>Soy santiago gonzalez</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est vel soluta quos odio deserunt rerum, quas nemo aliquam quaerat animi voluptas explicabo? Doloremque sed laudantium consequatur accusamus itaque ea quod.</p>

                        <div className="social__links">
                            <h6 className='mb-4'>Conecta conmigo</h6>
                            <span><a href="https://www.facebook.com/profile.php?id=1288235961" target="_blank"><i className="ri-facebook-line"></i></a></span>
                            <span><a href="https://www.instagram.com/santi_gonzalez17/" target="_blank"><i className="ri-instagram-line"></i></a></span>
                            <span><a href="https://github.com/Santy-Gonzalez" target="_blank"><i className="ri-github-line"></i></a></span>
                            <span><a href="https://www.linkedin.com/in/santiago-alejandro-gonzalez/" target="_blank"><i className="ri-linkedin-line"></i></a></span>
                        </div>
                    </div>
                </div>
                }

                {
                    aboutFilter === 'EDUCATION' && <Education/>
                }

                {
                    aboutFilter === 'SKILLS' && <Skills/>
                }

                {
                    aboutFilter === 'AWARD' && <Award/>
                }

              </Col>
          </Row>
      </Container>
    </section>
  )
}

export default About
