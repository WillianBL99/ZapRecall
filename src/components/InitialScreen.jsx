export default function InitialScreen(){
    return (
        <>
            <InitialLogoRecall />
            <ButtonStart />
        </>
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

function ButtonStart(){
    return (
        <button className="btn-start">Iniciar Recall!</button>
    )
}