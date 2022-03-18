import React, { useState } from 'react'

export default function Card({text, question, answer, modifyFooter}) {

    const [card, setCard] = useState(
        { screen: 0, icon: "play.svg", alt: "play", block: false }
    )

    function setAnswer(icon, alt){
        setCard({ ...card, screen: 0, icon: icon, alt: alt, block: true})
        modifyFooter(<img src={"./images/" + icon} alt={icon} /> )
    }

    switch (card.screen) {
        case 0:
            return (
                <div className="card">
                    <p>Pergunta {text}</p>
                    <img onClick={() => !card.block?setCard({ ...card, screen: 1 }):{}} src={"./images/" + card.icon} alt={card.alt} />
                </div>
            )
        case 1:
            return (
                <div className="card-question">
                    <p>{question}</p>
                    <button onClick={() => setCard({ ...card, screen: 2 })}><img src={"./images/spin.svg"} alt="girar" /></button>
                </div>
            )
        case 2:
            return (
                <div className="card-answer">
                    <p>{answer}</p>
                    <div className="buttons">
                        <button onClick={() => setAnswer('bad.svg', 'bad')} className="bad">
                            Não lembrei
                        </button>
                        <button onClick={() => setAnswer('medium.svg', 'medium')} className="medium">
                            Quase não lembrei
                        </button>
                        <button onClick={() => setAnswer('good.svg', 'good')} className="good">
                            Zap
                        </button>
                    </div>
                </div>
            )
    }
}