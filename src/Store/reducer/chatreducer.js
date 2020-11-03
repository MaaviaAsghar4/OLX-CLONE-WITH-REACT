const chatState = {
    chat: [{}]
}


export default (state = chatState, action) => {
    switch (action.type) {
        case "SetChat":
            return ({
                ...state,
                chat: [action.senderDetail, ...state.chat]
            })
        default:
            return state
    }
}