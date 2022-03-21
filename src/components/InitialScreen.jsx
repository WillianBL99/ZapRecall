import '../style/initialScreen.css'

import React, { useState } from 'react'
import ZapRecallLogo from '../assets/logo.svg'

import Decks from '../bd'


export default function InitialScreen({ setChosenDeckInfo }) {
    const [visibleScreen, setVisibleScreen] = useState(true)

    return (
        visibleScreen ?
            <section className="login">
                <InitialLogoRecall />
                <div className='comands'>
                    <InputDeck setChosenDeckInfo={setChosenDeckInfo} />
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

function InputDeck({ setChosenDeckInfo }) {

    const decksInfo = new Decks().decksInfo
    
    return (
        <select required onChange={(e) => {const [index, qtd] = e.target.value.split(' ');console.log(index,qtd);setChosenDeckInfo({index: index, qtdCards: qtd});}}>
            <option value='' disabled selected >Escolha um baralho</option>
            {
                decksInfo.map((infoDeck) => {
                    return  <option key={infoDeck.toString()} value={`${infoDeck.index} ${infoDeck.qtdCards}`}>{infoDeck.name}</option>
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







