import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import './Chat.css'

const Chat = (props) => {
    let [message, setMessage] = useState('')
    const dataApi = props.data
    const user = props.user;
    const { id } = useParams();
    const ApiItem = dataApi[id];
    let [messagestate, setMessageState] = useState([])
    let getMessage = () => {
        messagestate.push ({
            senderName: user.displayName,
            senderPhoto: user.photoURL,
            message: message,
            senderuid: user.uid
        })
        setMessageState(messagestate)
        setMessage('')
    }


    return (
        <div>
            <div className='user-chatProfile'>
                <img src={ApiItem.photo} className='chat-profile' alt='' />
                <span>{ApiItem.user}</span>
            </div>
            <div className='message-container'>
                <div className='messages-place'>
                    <ul className='message-flex'>
                        {messagestate.map((v,i)=>{
                            console.log(v)
                            return ( v.senderuid &&
                                <div key={i}>
                                    <li className='message-list'><img className='chat-photo' src={v.senderPhoto} alt=''/> <span className='message-context' style={(v.senderuid===user.uid)?{backgroundColor: '#f7f7f7', color: "#002f34"}:null}>{v.message}</span></li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className='message-send'>
                    <input type='text' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    <button onClick={getMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    user: state.authentication.user,
    data: state.products.data,

})

export default connect(mapStateToProps, null)(Chat)
