export default function Footer({answered, total, icons}) {
    
    return (
        <footer>
            <p>{icons.length}/{total} CONCLUÍDOS</p>
            <div className="answers">
                {icons}
            </div>
        </footer>
    )
}