import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product,handelRemoverItemm }) => {
    const {id, name, price, quantity, img,shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="revew-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>{price}</small></p>
                    <p><small>${shipping}</small></p>
                    <p><small>{quantity}</small></p>

                </div>
                <div className="delete-container">
                    <button onClick={()=>handelRemoverItemm(id)}>
                        <FontAwesomeIcon className='delete-icon' icon={faTrash} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;