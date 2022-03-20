import React, { useState } from "react";

import ScreenDecks from "./ScreenDecks";
import Footer from "./Footer"
import InitialScreen from "./InitialScreen"


export default function MainScreen() {
    
    const [footerData, setFooterData] = useState(
        { wrong: true, total: 8, zaps: 0, icons: [] , keyDeck: 1}
    )

    const { wrong, total, zaps, icons, keyDeck} = footerData

    function cardsUpdate(error, zap, icon, qtdCards) {
        setFooterData({
            ...footerData,
            wrong: wrong ? error : false,
            total: qtdCards,
            zaps: zaps + zap,
            icons: [...icons, icon]
        })
    }

    function restartRecall(){
        setFooterData({wrong: true, total: 8, zaps: 0, icons: [], keyDeck: keyDeck + 1})
    }

    return (
        <>
            <main>
                <InitialScreen />
                {console.log(keyDeck)}
                <ScreenDecks key={keyDeck} modifyFooter={(error, zaps, icon, qtdCards) => cardsUpdate(error, zaps, icon, qtdCards)} />
            </main>
            <Footer key={keyDeck} wrong={wrong} zaps={zaps} total={total} icons={icons} restart={restartRecall} />
        </>
    )
}