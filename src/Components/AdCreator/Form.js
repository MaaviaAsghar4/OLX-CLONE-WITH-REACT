import React, { useState } from 'react'
import './Form.css'
import Image from '../../images/images.png'
import { connect } from 'react-redux';


const Form = (props) => {
    let [state, setState] = useState('')
    let user = props.user;
    let isLogged = false
    if(user.displayName) {
        isLogged = true
    }
    let stateChange = () => {
        props.prevForm()
    }

    let getId = (e) => {
        let id = e.target.id;
        props.handleCondition(id)
        setState(e.target.id)
    }

    let loadFile = e => {
        let file = e.target.files[0];
        props.handleFile(file);
    }

    if (props.state !== 2) {
        return null
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
                <input type='text' name='brand' value={props.brand} onChange={props.handleBrand} /><br />
                <label htmlFor='Condition'>Condition* <br /></label>
                <button id='New' onClick={getId} className={(state === "New") ? 'conditionBtn active' : 'conditionBtn'}>New</button>
                <button id='Used' onClick={getId} className={(state === "Used") ? 'conditionBtn active' : 'conditionBtn'}>Used</button><br />
                <label htmlFor='title'> Ad title* <br /></label>
                <input type='text' name='adTitle' value={props.name} onChange={props.handlename} /><br />
                <p>Mention the key features of your item (e.g. brand, model, age, type)</p>
                <label htmlFor='description'> Description* <br /></label>
                <textarea type='text' rows="5" cols='50' name='desctiption' value={props.description} onChange={props.handledescription} />
                <p>Include condition, features and reason for selling</p>
            </div>
            <div className='form-price'>
                <h3>SET A PRICE</h3>
                <label htmlFor='Price'>Price*</label><br />
                <input type='number' name='price' value={props.price} onChange={props.handleprice} />
            </div>
            <div className='form-photo'>
                <h3>UPLOAD PHOTOS</h3>
                <input type='file' accept='image/*' onChange={loadFile} />
            </div>
            <div className='form-location'>
                <h3>CONFIRM YOUR LOCATION</h3>
                <label htmlFor='city'>City*</label><br />
                <input type='text' name='city' value={props.city} onChange={props.handlecity} />
            </div>
            <div className='form-user'>
                <h3>REVIEW YOUR DETAILS</h3>
                <img src={isLogged? user.photoURL: Image} alt='' /><br />
                <label htmlFor='name'>Name*</label><br />
                <input type='text' name='name' value={user.displayName} onChange={props.handleuser} /><br />
                <label htmlFor='number'>Mobile Phone Number*</label><br />
                <input type='number' name='number' value={props.number} onChange={props.handlenumber} />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user
})

export default connect(mapStateToProps,null)(Form)
