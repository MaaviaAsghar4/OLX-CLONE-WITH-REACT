const alter_data = () => {
    console.log("Running");

}

const set_data = (data) => {
    return dispatch => {
        dispatch({ type: 'SETDATA', data: data })
    }
}

export {
    alter_data,
    set_data
}