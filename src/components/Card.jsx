export default function Card({ text, icon, alt}) {
    const question = 'Porque alguma coisa?'
    const answer = 'Porque sim'
    return (
        <>
            <div className="card">
                <p>{text}</p>
                <img src={icon} alt={alt} />
            </div>
            <div className="card-question">
                <p>{question}</p>
                <button><img src="./images/spin.svg" alt="girar" /></button>
            </div>
            <div className="card-answer">
                <p>{answer}</p>
                <div className="buttons">
                    <button className="bad">Não lembrei</button>
                    <button className="medium">Quase não lembrei</button>
                    <button className="good">Zap</button>
                </div>
            </div>
        </>
    )
}