import React from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
import List from './Api/list.json'
const Categories = () => {

    console.log(List.lists[0])
    return (
        <div>
            <div className='categories'>
                {List.lists.map((list,i)=>{
                    console.log(list)
                    return (
                    <Link to={list}>{list}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Categories
