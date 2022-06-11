import SectionTitle from "../SectionTitle";
import ProjectCard from "./ProjectCard";

export default function ProjectList() {

    const projectList = [
        {
            "title": "Game of Life",
            "url": "https://rtanure.github.io/GameOfLife/",
            "description": 'Esse projeto se consiste na recriação do jogo da vida, desenvolvido pelo matemático britânico John Horton Conway em 1970 e consiste na simulação de pequenas celulas que interagem entre si formando um "organismo maior".'
        }
    ]

    return (
        <>
            <SectionTitle title="Meus Projetos"/>
            <div className="cards-group">
                {
                    projectList.map(project=>(
                        <ProjectCard project={project}/>
                    ))
                }
            </div>
        </>
    )
}