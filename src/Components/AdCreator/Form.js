import React from 'react'
import Image from '../../images/images.png'

const Form = (props) => {
    return (
        <div className='main-form'>
            <h3>SELECTED CATEGORY</h3>
            <div className='form-breadcrumb'>
                <span>Mobile</span>
                <span>/</span>
                <span>Mobile Phone</span>
                <span>Change</span>
            </div>
            <div className='form-detail'>
                <h3>INCLUDE SOME DETAILS</h3>
                <label htmlFor='Make'> Make* <br /></label>
                <input type='text' name='Make' /><br />
                <label htmlFor='Condition'>Condition* <br /></label>
                <button>New</button> 
                <button>Used</button><br />
                <label htmlFor='Make'> Ad title* <br /></label>
                <input type='text' name='Make' /><br />
                <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
                <label htmlFor='Make'> Description* <br /></label>
                <textarea style={{resize: 'none'}} type='text' name='Make' />
                <p>Include condition, features and reason for selling</p>
            </div>
            <div className='form-price'>
                <h3>SET A PRICE</h3>
                <label htmlFor='Price'>Price*</label><br />
                <input type='number' />
            </div>
            <div className='form-photo'>
                <h3>UPLOAD PHOTOS UPTO 12</h3>
                <input type='file' multiple accept='image/*' />
            </div>
            <div className='form-location'>
                <h3>CONFIRM YOUR LOCATION</h3>
                <input type='text' />
            </div>
            <div className='form-details'>
                <h3>REVIEW YOUR DETAILS</h3>
                <img src={Image} alt='' />
                <label htmlFor='name'>Name*</label>
                <input type='text' /><br />
                <label htmlFor='number'>Mobile Phone Number*</label><br />
                <input type='number' />
            </div>
        </div>
    )
}

export default Form
