import React, { useState } from "react";

import ScreenDecks from "./ScreenDecks";
import Footer from "./Footer"
import InitialScreen from "./InitialScreen"

export default function MainScreen() {
    const [footerData, setFooterData] = useState(
        { total: 8, answered: 0, icons: [] }
    )

    const { total, answered, icons } = footerData;

    function cardsUpdate(icon, qtdCards) {
        setFooterData({ ...footerData, total: qtdCards, answered: answered + 1, icons: [...icons, icon] })
    }


    return (
        <>
            <main>
                <InitialScreen />
                <ScreenDecks modifyFooter={(icon, qtdCards) => cardsUpdate(icon, qtdCards)} />
            </main>
            <Footer answered={answered} total={total} icons={icons} />
        </>
    )
}