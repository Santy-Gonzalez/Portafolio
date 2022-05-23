import React from 'react'
import "./portafolio.css"
import { Container, Row, Col } from 'reactstrap'

import img01 from '../../assets/images/portafolio-01.png'
import img02 from '../../assets/images/portafolio-02.png'
import img03 from '../../assets/images/portafolio-03.png'

const portafolioData = [
    {
        imgUrl: img01,
        title: 'Carpinteria el tablon',
        url: 'https://eltablon.vercel.app/'
    },
    {
        imgUrl: img02,
        title: 'Aplicación del clima',
        url: 'https://clima-proyect.vercel.app/'
    },
    {
        imgUrl: img03,
        title: 'Anise E-commerce',
        url: 'https://github.com/Santy-Gonzalez/Anise-Ecommers'
    },
]

const Portafolio = () => {
  return (
    <section id='portafolio'>
        <Container>
            <Row>
                <Col lg='12' className='portafolio__top mb-5'>
                     <h6>Mi trabajo realizado hasta el momento</h6>
                     <h2>Portafolio</h2>
                </Col>
                {
                    portafolioData.map((item,index)=>(
                        <Col lg='4' md='6' sm='6' key={index}>
                            <div className="portafolio__card">
                                <div className="portafolio__img">
                                    <img src={item.imgUrl} alt="" className='w-100'/>
                                </div>
                                <div className="portafolio__content">
                                    <h5>{item.title}</h5>
                                    <a href={item.url} target='_blank'>Ver en vivo</a>
                                </div>
                            </div>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    </section>
  )
}

export default Portafolio
