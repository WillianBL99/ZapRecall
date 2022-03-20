
import '../style/footer.css'

export default function Footer({wrong, zaps, total, icons, restart}) {

    let title;
    const finished = icons.length === total;

    if(finished){
        title = wrong?
        <><h2>🥳PARABÉNS</h2><p>Você não esqueceu de nenhum flashcard!</p></>:
        <><h2>😥PUTZ!</h2><p>Ainda faltaram alguns...      Mas não desanime!</p></>
        
    } else {
        title = <p className='qtd-finished'>{icons.length}/{total} CONCLUÍDOS</p>
    }
    
    return (
        <footer>
            {title}
            <div className="answers">
                {icons}
            </div>
            <ButtonRestart visible={finished} restart={restart} />
        </footer>
    )
}


function ButtonRestart({visible, restart}){

    return (
        visible?<button className='btn-restart' onClick={restart}>REINICIAR RECALL </button>:<></>
    )
}