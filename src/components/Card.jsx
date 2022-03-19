import '../style/card.css'

import React, { useState } from 'react'

import Bad from '../assets/bad.svg'
import Medium from '../assets/medium.svg'
import Good from '../assets/good.svg'
import Play from '../assets/play.svg'
import Spin from '../assets/spin.svg'


export default function Card({ text, question, answer, modifyFooter }) {

    const [card, setCard] = useState(
        { screen: 0, icon: Play, alt: "play", block: false }
    )

    function setAnswer(icon, alt) {
        setCard({ ...card, screen: 0, icon: icon, alt: alt, block: true })
        modifyFooter(alt==='bad'?false:true, alt==='good'?1:0, <img src={icon} alt={icon} />)
    }

    const css = card.screen === 1 ? 'card question ' : card.screen === 2 ? 'card answer ' : 'card '
    const cssAnswer = card.alt === 'play'?'':card.alt;

    const screen0 = <>
        <p>Pergunta {text}</p>
        <img onClick={() => !card.block ? setCard({ ...card, screen: 1 }) : {}} src={card.icon} alt={card.alt} />
    </>

    const screen1 = <>
        <p>{question}</p>
        <button onClick={() => setCard({ ...card, screen: 2 })}><img src={Spin} alt="girar" /></button>
    </>

    const screen2 = <>
        <p>{answer}</p>
        <div className="buttons">
            <button onClick={() => setAnswer(Bad, 'bad')} className="bad">
                Não lembrei
            </button>
            <button onClick={() => setAnswer(Medium, 'medium')} className="medium">
                Quase não lembrei
            </button>
            <button onClick={() => setAnswer(Good, 'good')} className="good">
                Zap
            </button>
        </div>
    </>


    return (
        <div className={css + cssAnswer}>{
            card.screen === 0 ? screen0 :
                card.screen === 1 ? screen1 :
                    screen2
        }</div>
    )
}