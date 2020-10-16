import React from 'react'
import './Filter.css'
import { useParams } from 'react-router-dom'

const Filter = () => {
    const { id } = useParams();
    console.log(id)

    return (
        <div className='sidebar'>
            <div>
                <h3>Filters</h3>
                <hr />
            </div>
            <div>
                <h3>CATEGORIES</h3>
                <p>{id}</p>
                <p>{id} : 1</p>
                <p>{id} : 2</p>
                <hr />
            </div>
            <div>
                <h3>LOCATIONS</h3>
                <p>Pakistan</p>
                <p>Punjab (1234)</p>
                <p>Sindh (1234)</p>
                <p>Khyber Pakhtunkhwa (1234)</p>
                <p>Islamabad Capital Territory (1234)</p>
                <p>Balochistan (1234)</p>
                <p>View more</p>
                <hr />
            </div>
            <div>
                <h3>PRICE</h3>
                <input type='number' />
                <input type='number' />
                <button> ) </button>
            </div>
        </div>
    )
}

export default Filter
