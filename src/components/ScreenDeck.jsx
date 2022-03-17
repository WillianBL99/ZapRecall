import Card from "./Card"

export default function ScreenDeck({cards}){
    return (
        <div className="deckofcards">
            <FillDeck cards={cards}/>
        </div>
    )
}

function FillDeck({cards}){
    console.log(cards)
    return cards.map((card, id) => {
        const {q:question, a:answer} = card
        return <Card text={(id + 1)} q={question} a={answer} />
    })
}