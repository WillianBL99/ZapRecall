export default function Footer({wrong, zaps, total, icons}) {

    let title;
    if(icons.length === total){
        title = wrong?
        <><h2>🥳PARABÉNS</h2><p>Você não esqueceu de nenhum flashcard!</p></>:
        <><h2>😥PUTZ!</h2><p>Ainda faltaram alguns...      Mas não desanime!</p></>
        
    } else {
        title = <p>{icons.length}/{total} CONCLUÍDOS</p>
    }
    
    return (
        <footer>
            {title}
            <div className="answers">
                {icons}
            </div>
        </footer>
    )
}