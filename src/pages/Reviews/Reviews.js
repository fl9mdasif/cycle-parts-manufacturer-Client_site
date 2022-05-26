import React, { useEffect, useState } from 'react';
import Review from './Review';
import quote from '../../img/quote.svg'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data));

    }, [])
    return (
        <section className='my-28 container mx-auto' >
            <div className='flex justify-between' >
                <div className='text-start'>
                    <h4 className="  text-4xl text-primary font-bold">REVIEWS</h4>
                    <h2 className='text-xl' > What our Patients say</h2 >
                </div >
                <div>
                    <img src={quote} className="w-24 lg:w-36" alt="" />
                </div>
            </div >
            <div className="text-4xl text-primary">CUSTOMER REVIEWS {reviews.length}</div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' >
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Reviews;