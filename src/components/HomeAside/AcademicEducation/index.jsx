export default function AcademicEducation() {
    const list = [
        {
            "title": "UFOP",
            "period": "2022 - atualmente",
            "description": "Sistemas de informação"
        },
        {
            "title": "C. E. Beldani",
            "period": "2021",
            "description": "Ensino Médio"
        },
        {
            "title": "C. F. Imaculada Conceição",
            "period": "2019 - 2020",
            "description": "Ensino Médio"
        },
    ]

    return (
        <div className="card education">
            <h2 className="title-margin">Formação</h2>
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