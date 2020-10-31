import React, { useState } from 'react'
import './MainAd.css'
import CategorySelect from './CategorySelect'
import Form from './Form'
import { connect } from 'react-redux'
import { set_data } from '../../Store/action'

const MainAd = (props) => {
    // props.set_data()
    let [state, setState] = useState(1);
    let [brand, setBrand] = useState('');
    let [user, setuser] = useState('');
    let [description, setdescription] = useState('');
    let [price, setprice] = useState('');
    let [city, setcity] = useState('');
    let [number, setnumber] = useState('');
    let [name, setname] = useState('');
    let [tag, setTag] = useState('');
    let [condition, setCondition] = useState('');
    let [img, setimg] = useState('');

    let nextForm = () => {
        setState(prevState => prevState + 1)
    }

    let prevForm = () => {
        setState(prevState => prevState - 1)
    }

    let handleTag = input => {
        setTag(input)
    }

    let handleCondition = input => {
        setCondition(input)
    }

    let handleBrand = e => {
        e.preventDefault()
        setBrand(e.target.value)
    }

    let handleuser = e => {
        e.preventDefault()
        setuser(e.target.value)
    }

    let handleprice = e => {
        e.preventDefault()
        setprice(e.target.value)
    }

    let handledescription = e => {
        e.preventDefault()
        setdescription(e.target.value)
    }

    let handlenumber = e => {
        e.preventDefault()
        setnumber(e.target.value)
    }

    let handlename = e => {
        e.preventDefault()
        setname(e.target.value)
    }

    let handlecity = e => {
        e.preventDefault()
        setcity(e.target.value)
    }

    let handleFile = file => {
        setimg(URL.createObjectURL(file))
    }

    let adProduct = {
        tag,
        brand,
        price,
        number,
        img,
        name,
        description,
        condition,
        city,
        user
    }
    
    return (
        <div className='form-button'>
            <h2>POST YOUR AD</h2>
            <CategorySelect
                handleTag={handleTag}
                nextForm={nextForm}
                state={state}
            />
            <Form
                prevForm={prevForm}
                handleCondition={handleCondition}
                handleprice={handleprice}
                handleBrand={handleBrand}
                handleuser={handleuser}
                handlecity={handlecity}
                handlenumber={handlenumber}
                handlename={handlename}
                handledescription={handledescription}
                handleFile={handleFile}
                brand={brand}
                user={user}
                description={description}
                tag={tag}
                price={price}
                city={city}
                number={number}
                name={name}
                condition={condition}
                state={state}
            />
            <div className='form-btn'>
                {(state === 2) ? <button className='previous' onClick={prevForm}>Previous</button> : null}
                {(state === 2) ? <button className='submit' onClick={() => {props.set_data(adProduct); alert("Ad Created")}}>POST AD</button> : null}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    set_data: (adProduct) => dispatch(set_data(adProduct))
})

export default connect(null, mapDispatchToProps)(MainAd)
