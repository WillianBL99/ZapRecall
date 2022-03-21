import React, { useState } from "react";

import ScreenDecks from "./ScreenDecks";
import Footer from "./Footer"
import InitialScreen from "./InitialScreen"
import Decks from "../bd";


export default function MainScreen() {

    const [chosenDeckInfo, setChosenDeckInfo] = useState({ index: '', qtdCards: 0 })

    const [footerData, setFooterData] = useState(
        { wrong: true, zaps: 0, icons: [], keyComponents: 1 }
    )

    const { wrong, zaps, icons, keyComponents } = footerData

    function cardsUpdate(error, zap, icon, qtdCards) {
        setFooterData({
            ...footerData,
            wrong: wrong ? error : false,
            zaps: zaps + zap,
            icons: [...icons, icon]
        })
    }

    function restartRecall() {
        setFooterData({ wrong: true, zaps: 0, icons: [], keyComponents: keyComponents + 1 })
    }

    return (
        <>
            <main>
                <InitialScreen setChosenDeckInfo={(info) => setChosenDeckInfo(info)} />
                {chosenDeckInfo.index ?
                    <ScreenDecks
                        key={keyComponents}
                        modifyFooter={(error, zaps, icon, qtdCards) => cardsUpdate(error, zaps, icon, qtdCards)}
                        chosenDeckInfo={chosenDeckInfo}
                    /> : <></>
                }
            </main>
            {chosenDeckInfo.index ?
                <Footer
                    key={keyComponents}
                    wrong={wrong}
                    zaps={zaps}
                    total={chosenDeckInfo.qtdCards}
                    icons={icons}
                    restart={restartRecall}
                /> : <></>
            }
        </>
    )
}