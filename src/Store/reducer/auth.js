const userState = {
    user: [{}]
}


export default (state = userState, action) => {
    switch (action.type) {
        case "SetUser":
            return ({
                user: action.user
            })
        case "SignOut":
            console.log('signout')
            return ({user: []})
        default:
            return state
    }
}