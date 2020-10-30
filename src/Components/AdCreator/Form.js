import React, { useState } from 'react'
import './Form.css'
import Image from '../../images/images.png'

const Form = (props) => {
    console.log(props.brand)
    let [state, setState] = useState('')
    let stateChange = () => {
        props.prevForm()
    }

    let getId = (e) => {
        let id = e.target.id;
        props.handleCondition(id)
        setState(e.target.id)
    }
    return (
        <div className='main-form'>
            <div className='form-breadcrumb'>
                <h3>SELECTED CATEGORY</h3>
                <span>{props.tag}</span>
                <span className='change-form' onClick={stateChange}>Change</span>
            </div>
            <div className='form-detail'>
                <h3>INCLUDE SOME DETAILS</h3>
                <label htmlFor='Brand'> Brand* <br /></label>
                <input type='text' name='brand' value={props.brand} onChange={e => { props.handleBrand(e) }} /><br />
                <label htmlFor='Condition'>Condition* <br /></label>
                <button id='New' onClick={getId} className={(state === "New") ? 'conditionBtn active' : 'conditionBtn'}>New</button>
                <button id='Used' onClick={getId} className={(state === "Used") ? 'conditionBtn active' : 'conditionBtn'}>Used</button><br />
                <label htmlFor='title'> Ad title* <br /></label>
                <input type='text' name='adTitle' value={props.adTitle} onChange={e => { props.handleadTitle(e) }} /><br />
                <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
                <label htmlFor='description'> Description* <br /></label>
                <textarea type='text' rows="5" cols='50' name='desctiption' value={props.description} onChange={e => { props.handledescription(e) }} />
                <p>Include condition, features and reason for selling</p>
            </div>
            <div className='form-price'>
                <h3>SET A PRICE</h3>
                <label htmlFor='Price'>Price*</label><br />
                <input type='number' name='price' value={props.price} onChange={e => { props.handleprice(e) }} />
            </div>
            <div className='form-photo'>
                <h3>UPLOAD PHOTOS</h3>
                <input type='file' multiple accept='image/*' />
            </div>
            <div className='form-location'>
                <h3>CONFIRM YOUR LOCATION</h3>
                <label htmlFor='city'>City*</label><br />
                <input type='text' name='city' value={props.city} onChange={e => { props.handlecity(e) }} />
            </div>
            <div className='form-user'>
                <h3>REVIEW YOUR DETAILS</h3>
                <img src={Image} alt='' /><br />
                <label htmlFor='name'>Name*</label><br />
                <input type='text' name='name' value={props.name} onChange={e => { props.handlename(e) }} /><br />
                <label htmlFor='number'>Mobile Phone Number*</label><br />
                <input type='number' name='number' value={props.number} onChange={e => { props.handlenumber(e) }} />
            </div>
        </div>
    )
}

export default Form
