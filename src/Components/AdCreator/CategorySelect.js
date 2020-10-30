import React from 'react'
import { connect } from 'react-redux'
import './CategorySelect.css'

const CategorySelect = (props) => {
    let listApi = props.list

    const getId = e => {
        let id = e.target.id
        props.handleTag(id)
        props.nextForm();
    }
    return (
        <div className='category-container'>
            <span>CHOOSE A CATEGORY</span>
            <div className='list-container'>
                {listApi.map((list, i) => {
                    return (
                        <li className='list-element' onClick={getId} id={list} key={i}>{list}</li>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.categoriesList.list
})

export default connect(mapStateToProps, null)(CategorySelect)
