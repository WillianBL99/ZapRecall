import Card from "./Card"

export default function ScreenDeck(){
    return (
        <div className="deckofcards">
            <FillDeck />
        </div>
    )
}

function FillDeck(){
    const cards = []
    for(let i = 1; i <= 8; i++){
        cards.push(<Card key={i} icon={"./images/play.svg"} text={"Pergunta " + i} alt="Icone" />)
    }

    return cards
}