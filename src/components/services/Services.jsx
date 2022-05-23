import React from 'react'
import "./services.css"
import { Container, Row, Col } from 'reactstrap';

const servicesData = [
    {
        icon: 'ri-code-line',
        title: 'Diseño web',
        desc: 'Diseño de sitio web moderno y adaptable que utiliza HTML5, CSS3, Javascript, Scss, Bootstrap5, compatibilidad entre navegadores, código legible y buena estructura.'
    },
    {
        icon: 'ri-code-s-slash-line',
        title: 'Desarrollo Front-end',
        desc: 'Aplicaciones web moderna totalmente adaptable que utiliza React.Js, Firebase, Scss, Bootstrap / ReactStrap con componentes reutilizables, código mantenible, integración de API.'
    },
    {
        icon: 'ri-qr-code-line',
        title: 'Interfaz con backend',
        desc: 'Desarrollo de aplicaciones web utilizando Firebase, rutas API, base de datos mongoDB basico, integración de API de terceros, etc. Código escalable y mantenible.'
    },
    {
        icon: 'ri-search-line',
        title: 'SEO',
        desc: 'Conocimientos de SEO para mejorar el posicionamiento de un sitio web en cualquier navegador.'
    },
    {
        icon: 'ri-gallery-line',
        title: 'UI -UX',
        desc: 'Creo interfaces para satisfacer a los usuarios, proporcionar una experiencia intuitiva, agradable y positiva posible.'
    },
    {
        icon: 'ri-landscape-line',
        title: 'Graphics Design',
        desc: 'Conocimiento basico en Adobe Photoshop diseñando logos y mejorando calidad de fotos.'
    },
]

const Services = () => {
  return (
    <section id="services">
        <Container>
            <Row>
                <Col lg='12' className='service__top mb-5'>
                    <h6>Características</h6>
                    <h2>Los servicios que brindo</h2>
                </Col>
                    {
                        servicesData.map((item,index)=>(
                            <Col lg='4' md='6' sm='6' key={index} className='mb-4'>
                                <div className="single__service">
                                    <span className="service__icon">
                                        <i className={item.icon}></i>
                                    </span>

                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }
            </Row>
        </Container>
    </section>
  )
}

export default Services
