export default function Card({text, icon, alt}){
    return (
        <div className="card">
            <p>{text}</p>
            <img src={icon} alt={alt} />
        </div>
    )
}