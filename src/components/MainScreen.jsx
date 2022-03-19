import React, { useState } from "react";

import ScreenDecks from "./ScreenDecks";
import Footer from "./Footer"
import InitialScreen from "./InitialScreen"

export default function MainScreen() {
    const [footerData, setFooterData] = useState(
        { wrong: true, total: 8, zaps: 0, icons: [] }
    )

    const {wrong, total, zaps, icons } = footerData;

    function cardsUpdate(error, zap, icon, qtdCards) {
        console.log(zap)
        console.log(error)
        setFooterData({
            ...footerData,
            wrong: wrong?error:false,
            total: qtdCards,
            zaps: zaps + zap,
            icons: [...icons, icon]
        })
    }
    console.log(wrong)


    return (
        <>
            <main>
                <InitialScreen />
                <ScreenDecks modifyFooter={(error, zaps, icon, qtdCards) => cardsUpdate(error, zaps, icon, qtdCards)} />
            </main>
            <Footer wrong={wrong} zaps={zaps} total={total} icons={icons} />
        </>
    )
}