import Card from "./Card"

export default function ScreenDecks({modifyFooter}){
    const cards = [
        {n: 1, q: 'O que é JSX?', a: 'Uma extensão de linguagem do JavaScript' },
        {n: 2, q: 'O React é __', a: 'uma biblioteca JavaScript para construção de interfaces' },
        {n: 3, q: 'Componentes devem iniciar com __ ', a: 'letra maiúscula' },
        {n: 4, q: 'Podemos colocar __ dentro do JSX', a: 'expressões' }/*,
        {n: 5, q: 'O ReactDOM nos ajuda __', a: 'interagindo com a DOM para colocar componentes React na mesma' },
        {n: 6, q: 'Usamos o npm para __', a: 'gerenciar os pacotes necessários e suas dependências' },
        {n: 7, q: 'Usamos props para __', a: 'passar diferentes informações para componentes ' },
        {n: 8, q: 'Usamos estado (state) para __', a: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente' }*/

    ]

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