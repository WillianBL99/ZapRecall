import React, { useState } from 'react'

import Bad from '../assets/bad.svg'
import Medium from '../assets/medium.svg'
import Good from '../assets/good.svg'
import Play from '../assets/play.svg'
import Spin from '../assets/spin.svg'


export default function Card({text, question, answer, modifyFooter}) {

    const [card, setCard] = useState(
        { screen: 0, icon: Play, alt: "play", block: false }
    )

    function setAnswer(icon, alt){
        setCard({ ...card, screen: 0, icon: icon, alt: alt, block: true})
        modifyFooter(<img src={icon} alt={icon} /> )
    }

    switch (card.screen) {
        case 0:
            return (
                <div className="card">
                    <p>Pergunta {text}</p>
                    <img onClick={() => !card.block?setCard({ ...card, screen: 1 }):{}} src={card.icon} alt={card.alt} />
                </div>
            )
        case 1:
            return (
                <div className="card-question">
                    <p>{question}</p>
                    <button onClick={() => setCard({ ...card, screen: 2 })}><img src={Spin} alt="girar" /></button>
                </div>
            )
        case 2:
            return (
                <div className="card-answer">
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
                </div>
            )
    }
}