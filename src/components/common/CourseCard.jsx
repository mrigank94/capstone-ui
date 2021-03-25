import React from 'react';

const CourseCard = ({title, onDetailsClick}) => {
    return ( 
        <div className='card'>
            <h4 className='card-heading'>{title}</h4>
            <button onClick={onDetailsClick}>Course Details</button>
            <button>Subscribe</button>
        </div>
     );
}
 
export default CourseCard;