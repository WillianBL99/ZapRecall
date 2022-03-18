import React, { useState } from 'react'

import ZapRecallLogo from '../assets/logo.svg'


export default function InitialScreen() {

    const [visible, setVisible] = useState(true)

    return (
        visible ?
            <section className="login">
                <InitialLogoRecall />
                <Button setVisible={(value) => setVisible(value)} />
            </section> :
            <></>
    )
}

function InitialLogoRecall() {
    return (
        <div className="logo">
            <img src={ZapRecallLogo} alt="Logo" />
            <h1>ZapRecall</h1>
        </div>
    )
}

function Button({ setVisible }) {
    return (
        <button className="btn-start" onClick={() => setVisible(false)}>
            Iniciar Recall!
        </button>
    )
}