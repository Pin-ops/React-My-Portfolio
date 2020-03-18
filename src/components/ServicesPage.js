
import React from 'react'
import { servicesData } from '../data';
import Flip from 'react-reveal/Flip';
import './ServicesPage.css'
import { CardGroup } from 'react-bootstrap';
import ServicesCard from './ServicesCard';



function ServicesPage() {
    return (
        <div>
            <div className="servicesbanner-bg">
                <div className="servicesbanner-text">
                    <Flip left>
                        <h1>{servicesData.title}</h1>
                        <p>{servicesData.subTitle}</p>
                    </Flip>
                </div>
            </div>

            <CardGroup className="container">
                {
                servicesData.cards.map( item => <ServicesCard key={item.id} {...item} />)
                }
            </CardGroup>
        </div>
    )
}

export default ServicesPage