export default function Footer(props) {
    return (
        <footer>
            <p>{props.icons.legth}/{props.total} CONCLUÍDOS</p>
            <div className="answers">
                {props.icons}
            </div>
        </footer>
    )
}