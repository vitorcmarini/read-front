import "./card.css"

interface CardProps {
    position: number,
    title: string,
    image: string,
    link: string
}

export function Card({position, title, image, link} : CardProps){
    return(
        <div className="card">
            <img src={image}/>
            <h2>{title}</h2>
            <p><b>Posição:</b>{position}</p>
            <p><b>Link:</b> <a href={link} target="_blank" rel="noopener noreferrer">ir para o site</a></p>
        </div>
    )
}