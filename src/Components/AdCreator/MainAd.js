import React, { useState } from 'react'
import './MainAd.css'
import CategorySelect from './CategorySelect'
import Form from './Form'

const MainAd = () => {
    let [state, setState] = useState(1);

    let nextForm = () => {
        setState(prevState => prevState + 1)
    }

    let prevForm = () => {
        setState(prevState => prevState - 1)
    }

    let handleChange = input => (e) => {
        e.preventDefault();
        console.log(input)
    }

    const FormSteps = () => {
        if (state === 1) {
            return (
                <CategorySelect
                    handleChange={handleChange}
                />
            )
        }
        if (state === 2) {
            return (
                <Form
                    handleChange={handleChange}
                />
            )
        }
    }
    return (
        <div className='form-button'>
            <h2>POST YOUR AD</h2>
            <FormSteps />
            <div>
                {(state === 2) ? <button className='previous' onClick={prevForm}>Previous</button> : null}
                {(state === 1) ? <button className='next' onClick={nextForm}>Next</button> : null}
                {(state === 2) ? <button className='submit' onClick={nextForm}>POST AD</button> : null}
            </div>
        </div>
    )
}

export default MainAd
