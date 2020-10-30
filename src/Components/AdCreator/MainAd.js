import React, { useState } from 'react'
import './MainAd.css'
import CategorySelect from './CategorySelect'
import Form from './Form'
import { connect } from 'react-redux'
import { set_data } from '../../Store/action'

const MainAd = (props) => {
    props.set_data()
    let [state, setState] = useState(1);
    let [brand, setBrand] = useState('');
    let [adTitle, setadTitle] = useState('');
    let [description, setdescription] = useState('');
    let [price, setprice] = useState('');
    let [city, setcity] = useState('');
    let [number, setnumber] = useState('');
    let [name, setname] = useState('');
    let [tag, setTag] = useState('');
    let [condition, setCondition] = useState('');

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
        setBrand(e.target.value)
    }

    let handleadTitle = e => {
        setadTitle(e.target.value)
    }

    let handleprice = e => {
        setprice(e.target.value)
    }

    let handledescription = e => {
        setdescription(e.target.value)
    }

    let handlenumber = e => {
        setnumber(e.target.value)
    }

    let handlename = e => {
        setname(e.target.value)
    }

    let handlecity = e => {
        setcity(e.target.value)
    }

    let adProduct = {
            tag,
            brand,
            price,
            number,
            name,
            description,
            condition,
            city,
            adTitle,
        }

    const FormSteps = () => {
        if (state === 1) {
            return (
                <CategorySelect
                    handleTag={handleTag}
                    nextForm={nextForm}
                />
            )
        }
        if (state === 2) {
            return (
                <Form
                    prevForm={prevForm}
                    handleCondition={handleCondition}
                    handleprice={handleprice}
                    handleBrand={handleBrand}
                    handleadTitle={handleadTitle}
                    handlecity={handlecity}
                    handlenumber={handlenumber}
                    handlename={handlename}
                    handledescription={handledescription}
                    brand={brand}
                    adTitle={adTitle}
                    description={description}
                    tag={tag}
                    price={price}
                    city={city}
                    number={number}
                    name={name}
                    condition={condition}
                />
            )
        }
    }
    return (
        <div className='form-button'>
            <h2>POST YOUR AD</h2>
            <FormSteps />
            <div className='form-btn'>
                {(state === 2) ? <button className='previous' onClick={prevForm}>Previous</button> : null}
                {(state === 2) ? <button className='submit' onClick={()=> props.set_data(adProduct)}>POST AD</button> : null}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    set_data: (adProduct) => dispatch(set_data(adProduct))
})

export default connect(null, mapDispatchToProps)(MainAd)
