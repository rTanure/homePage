export default function UserExperiences() {

    const list = [
        {
            "title": "Voluntário | Primeira IPGV",
            "period": "2019 - 2020",
            "description": "Transmissão Ao Vivo"
        }
    ]

    return (
        <div className="card experiences">
            <h2 className="title-margin">Experiências</h2>
            <div className="itens-list">
                <ul>
                    {
                        list.map(item=>(
                            <li>
                                <h4>{item.title}</h4>
                                <span>{item.period}</span>
                                <span className="bold">{item.description}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}