import React from 'react'
import "./testimonial.css"
import Slider from 'react-slick'
import { Container, Row, Col } from 'reactstrap'

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4500,
        swipeToSlide:true,
      };

      const testimonialData = [
          {
              text1: 'Cuestión semántica de las etiquetas, impecable.',
              text2: 'Estructura del código, impecable.',
              text3: 'Responsive, impecable',
              text4: 'Después en cuanto a mi respecta, impecable trabajo hiciste Santi! Felicitaciones por el trabajo hecho.',
              name: 'Lautaro Montaña',
              profession: 'Profesor de desarrollo web',
          },
          {
              text1: 'Buen proyecto, buena aplicación de todos los conceptos vistos en clase, además me gusta la implementación del API del clima. Felicitaciones por finalizar el curso de JS',
              name: 'Daniel Turriago',
              profession: 'Profesor de JavaScript',
          }
      ]

  return (
    <section>
        <Container>
            <Row>
                <Col lg='12' className='mb-5 text-center'>
                    <h2>Devoluciones</h2>
                </Col>

                <Col lg='6' className='m-auto'>
                    <Slider {...settings}>
                        <div>
                            <div className="single__testimonial">
                                <p>Cuestión semántica de las etiquetas, impecable</p>
                                <p>Estructura del código, impecable</p>
                                <p>Responsive, impecable.</p>
                                <p>Después en cuanto a mi respecta, impecable trabajo hiciste Santi! Felicitaciones por el trabajo hecho.</p>

                                <h6>Lautaro Montaña</h6>
                                <p className='title'>Profesor de desarrollo web</p>
                            </div>
                        </div>
                        <div>
                            <div className="single__testimonial">
                                <p>Buen proyecto, buena aplicación de todos los conceptos vistos en clase</p>
                                <p>Me gusta la implementación del API del clima.</p>
                                <p>Felicitaciones por la originalidad y finalizar el curso de JavaScript de CoderHouse</p>

                                <h6>Daniel Turriago</h6>
                                <p className='title'>Profesor de JavaScript</p>
                            </div>
                        </div>
                    </Slider>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Testimonial
