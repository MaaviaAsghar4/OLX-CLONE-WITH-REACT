import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Chat.css'

const Chat = (props) => {
    const dataApi = props.data
    const user = props.user;
    const { id } = useParams();
    const ApiItem = dataApi[id];
    return (
        <div>
            <div className='user-chatProfile'>
                <img src={ApiItem.photo} className='chat-profile' alt='' />
                <span>{ApiItem.user}</span>
            </div>
            <div className='message-container'>
                <ul>
                    <li><img src={user.photoURL} alt='' /> {user.uid}</li>
                </ul>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    data: state.products.data
})

export default connect(mapStateToProps, null)(Chat)
