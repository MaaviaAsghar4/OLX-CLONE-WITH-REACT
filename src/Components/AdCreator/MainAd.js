import React, { useState } from 'react'

const MainAd = () => {
    let [state, setState] = useState(0);

    let nextForm = () => {
        setState(prevState => prevState + 1)
    }

    let prevForm = () => {
        setState(prevState => prevState - 1)
    }

    let handleChange = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h2>POST YOUR AD</h2>
        </div>
    )
}

export default MainAd
