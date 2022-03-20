import '../style/screenDecks.css'

import Decks from '../bd'

import Card from "./Card"


export default function ScreenDecks({modifyFooter}){
    let cards = new Decks().decks

    return (
        <div className="deckofcards">
            <FillDeck cards={cards} modifyFooter={(error, zaps, icon)=> modifyFooter(error, zaps, icon, cards.length)} />
        </div>
    )
}

function FillDeck({cards, modifyFooter}){
    console.log(cards)
    return cards.map((card, id) => {
        const {q:question, a:answer} = card
        return <Card text={(id + 1)} question={question} answer={answer} modifyFooter={(error, zaps, icon)=> modifyFooter(error, zaps, icon)} />
    })
}