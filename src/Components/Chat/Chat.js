import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import { chat_data } from '../../Store/action'
// import firebase from '../../Config/firebase'
import './Chat.css'

const Chat = (props) => {
    let [message, setMessage] = useState('')
    const dataApi = props.data
    const user = props.user;
    const { id } = useParams();
    const ApiItem = dataApi[id];

    let containerMessages = e => {
        setMessage(e.target.value)
    }

    let getMessage = () => {
        let messageSender = {
            senderName: user.displayName,
            senderPhoto: user.photoURL,
            message: message,
            senderuid: user.uid
        }
        props.chat_data(user.uid, ApiItem.uid, messageSender)
        // setMessage('')
    }



    return (
        <div>
            <div className='user-chatProfile'>
                <img src={ApiItem.photo} className='chat-profile' alt='' />
                <span>{ApiItem.user}</span>
            </div>
            <div className='message-container'>
                <div>
                    <ul className='message-flex'>
                        {/* {
                            chatMessages.map((messageData, i) => {
                                console.log(messageData)
                                return (
                                    // <li key={i} className='message-list'><img src={messageData.senderPhoto} className='chat-photo' alt='' /><span className='message-context'>{messageData.message}</span></li>
                                    <div>
                                        {messageData.message?<li key={i} className='message-list'><img src={messageData.senderPhoto} className='chat-photo' alt='' /><span className='message-context'>{messageData.message}</span></li>:null}
                                    </div>
                                )
                            })
                        } */}
                    </ul>
                </div>
                <div className='message-send'>
                    <input type='text' value={message} onChange={(e) => { containerMessages(e) }} />
                    <button onClick={getMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    data: state.products.data,
    chatreducer: state.chatreducer.chat

})

const mapDispatchToProps = dispatch => ({
    chat_data: (uid1, uid2, chat) => dispatch(chat_data(uid1, uid2, chat))
})

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
