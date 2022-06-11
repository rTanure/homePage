import "./style.css"

export default function TechnologiesList() {

    const techs = [
        "JavaScript",
        "HTML",
        "CSS",
        "NodeJS",
        "MySQL",
        "EJS",
        "GIT",
        "GitHub",
        "Python",
    ]

    return (
        <div className="card techs">
            <h2 className="title-margin">Tecnologias</h2>
            <div className="tech-list">
                <ul>
                    {
                        techs.map(tech => (
                            <li><div className="single-tech">{tech}</div></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}