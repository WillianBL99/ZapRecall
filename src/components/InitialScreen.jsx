import '../style/initialScreen.css'

import React, { useState } from 'react'
import ZapRecallLogo from '../assets/logo.svg'

import Decks from '../bd'


export default function InitialScreen() {
    const decksName = new Decks().decksName
    console.log(decksName)
    const [visibleScreen, setVisibleScreen] = useState(true)

    return (
        visibleScreen ?
            <section className="login">
                <InitialLogoRecall />
                <div className='comands'>
                    <InputDeck decksName={decksName} />
                    <Button setVisibleScreen={(value) => setVisibleScreen(value)} />
                </div>
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

function InputGoal() {
}

function InputDeck({ decksName }) {
    return (
        <select required>
            <option value='' disabled selected>Escolha um baralho</option>
            {
                decksName.map(nameDeck => {
                    nameDeck[0].toUpperCase()
                    return <option value={nameDeck}>{nameDeck}</option>
                })
            }
        </select>
    )
}

function Button({ setVisibleScreen }) {
    return (
        <button className="btn-start" onClick={() => setVisibleScreen(false)}>
            Iniciar Recall!
        </button>
    )
}