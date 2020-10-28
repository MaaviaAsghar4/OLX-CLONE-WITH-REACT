import React, { useState } from 'react'
import './Categories.css'
import { Link } from 'react-router-dom'
// import List from './Api/list.json'
import { connect } from 'react-redux'
const Categories = (props) => {

    let [isState, setState] = useState(true);
    let display = () =>{
        setState(!isState)
    } 

    // console.log(List.lists[0])
    // console.log(props.list)
    let listApi = props.list
    return (
        <div className='category-list'>
            <div>
                <p onClick={display}><strong>All Categories</strong></p>
            </div>
            <div className='categories'>
                {listApi.map((list, i) => {
                    return (
                        <Link key={i} className={isState ? 'nav-links' : 'nav-links open'} to={list}>{list}</Link>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.categoriesList.list
})

export default connect(mapStateToProps,null)(Categories)
