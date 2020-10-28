import React from 'react'
import './Filter.css'
import { useParams } from 'react-router-dom'

const Filter = () => {
    const { id } = useParams();
    // console.log(id)

    return (
        <div className='sidebar'>
            <div className='filter-bar'>
                <h3>Filters</h3>
                <hr />
            </div>
            <div className='sidebar-category'>
                <h3>CATEGORIES</h3>
                <p className='pg-name'>{id}</p>
                <p className='pg-list'>{id} : 1</p>
                <p className='pg-list'>{id} : 2</p>
                <hr />
            </div>
            <div className='sidebar-location'>
                <h3>LOCATIONS</h3>
                <p className='sidebar-header'>Pakistan</p>
                <p>Punjab (1234)</p>
                <p>Sindh (1234)</p>
                <p>Khyber Pakhtunkhwa (1234)</p>
                <p>Islamabad Capital Territory (1234)</p>
                <p>Balochistan (1234)</p>
                <p>View more</p>
                <hr />
            </div>
            <div className='sidebar-price'>
                <h3>PRICE</h3>
                <div className='sidebar-input' >
                    <input type='number' placeholder="Min"/>
                    <input type='number' placeholder="Max"/>
                    <button>{'>'}</button>
                </div>
            </div>
        </div>
    )
}

export default Filter
