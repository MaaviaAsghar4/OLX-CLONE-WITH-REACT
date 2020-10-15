import React, { useState } from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import List from './Api/list.json'
const Categories = () => {

    let [isState, setState] = useState(true);
    let display = () =>{
        setState(!isState)
    }

    // console.log(List.lists[0])
    return (
        <div className='category-list'>
            <div>
                <p onClick={display}><strong>All Categories</strong></p>
            </div>
            <div className='categories'>
                {List.lists.map((list, i) => {
                    console.log(list)
                    return (
                        <Link className={isState ? 'nav-links' : 'nav-links open'} to={list}>{list}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
