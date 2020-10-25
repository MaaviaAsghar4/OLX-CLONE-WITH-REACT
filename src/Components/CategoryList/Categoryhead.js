import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Categoryhead.css'

const Categoryhead = () => {
    const { id } = useParams();
    return (
        <div> 
            <div className='trending'>
                <p>
                    <strong>Popular Searches:</strong>
                    <span>{id}: 1</span>
                    <span>-</span>
                    <span>{id}: 2</span>
                    <span>-</span>
                    <span>{id}: 3</span>
                    <span>-</span>
                    <span>{id}: 4</span>
                    <span>-</span>
                    <span>{id}: 5</span>
                    <span>-</span>
                    <span>{id}: 6</span>
                </p>
            </div>
            <div className='breadcrumb'>
                <span>{<Link to='/'>Home</Link>}/</span>
                <span><Link to={{ id }}>{id}</Link></span>
            </div>
            <div className='category-header'>
                <h2>{id}</h2>
            </div>
        </div>
    )
}

export default Categoryhead
