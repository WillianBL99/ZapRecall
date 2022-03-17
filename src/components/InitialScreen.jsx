import React, {useState} from 'react'


export default function InitialScreen(){
    
    const [visible, setVisible] = useState(true)

    return (
        visible?
        <section className="login">
            <InitialLogoRecall />
            <button className="btn-start" onClick={()=>setVisible(false)}>Iniciar Recall!</button>
        </section>:
        <></>
    )
}

function InitialLogoRecall(){
    return (
        <div className="logo">
            <img src="./images/logo.svg" alt="Logo" />
            <h1>ZapRecall</h1>
        </div>
    )
}