import React, { useState } from 'react'

export default function Card({text, q:question, a:answer}) {

    const [card, setCard] = useState(
        { screen: 0, icon: "play.svg", alt: "play" }
    )

    switch (card.screen) {
        case 0:
            return (
                <div className="card">
                    <p>Pergunta {text}</p>
                    <img onClick={() => setCard({ ...card, screen: 1 })} src={"./images/" + card.icon} alt={card.alt} />
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
                        <button onClick={() => setCard({ ...card, screen: 0, icon: "bad.svg", alt: "bad"})} className="bad">
                            Não lembrei
                        </button>
                        <button onClick={() => setCard({ ...card, screen: 0, icon: "medium.svg" , alt: "medium"})} className="medium">
                            Quase não lembrei
                        </button>
                        <button onClick={() => setCard({ ...card, screen: 0, icon: "good.svg" , alt: "good"})} className="good">
                            Zap
                        </button>
                    </div>
                </div>
            )
    }
}