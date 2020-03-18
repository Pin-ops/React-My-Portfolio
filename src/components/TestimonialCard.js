import React from 'react'
import StarRatings from 'react-star-ratings'
// when we are calling the components from internet, we don't need to use './'

function TestimonialCard({image, person, comment, rating}) {
    return (
        <div style={{width:'50%', height:'300px'}}>
            <div className='m-3 shadow cardBox'>
                <img src={image} alt='brand' style={{padding:'15px'}} />
                <StarRatings
                        rating={rating}
                        starRatedColor='#f8a502'
                        starEmptyColor='lightblue'
                        numberOfStars={5}
                        starDimensions='15px'
                        starSpacing='none'

                />

                <h6 style={{textAlign:'left', fontWeight:'bold', padding:' 15px 15px 0'}}>{person}</h6>
                <p style={{textAlign:'left', color:'grey', padding:'0 15px 15px'}}>{comment} </p>
            </div>
        </div>
    )
}

export default TestimonialCard