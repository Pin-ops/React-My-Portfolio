import React from 'react'
import {testimonialData} from '../data'
import { CardGroup } from 'react-bootstrap'
import TestimonialCard from './TestimonialCard'


function TestimonialPage() {
    return (
        <div>
            <div className="text-center my-5 py-5">
                <h1>{testimonialData.title}</h1>
                <p>{testimonialData.subTitle}</p>
            </div>

            <CardGroup className="container">
                {
                    testimonialData.cards.map( item => <TestimonialCard key={item.id} {...item}/> )
                }
            </CardGroup>
        </div>
    )
}

export default TestimonialPage;
