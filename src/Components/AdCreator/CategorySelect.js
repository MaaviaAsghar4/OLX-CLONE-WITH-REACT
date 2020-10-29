import React from 'react'
import { connect } from 'react-redux'
import './CategorySelect.css'

const CategorySelect = (props) => {

    console.log(props.list)
    let listApi = props.list
    return (
        <div className='category-container'>
            <span>CHOOSE A CATEGORY</span>
            <div className='list-container'>
                {listApi.map((list, i) => {
                    return (
                        <li className='list-element' key={i}>{list}</li>
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
