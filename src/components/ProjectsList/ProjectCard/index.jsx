import "./style.css"

export default function ProjectCard({project}) {
    return(
        <a href={project.url} className="card w-50 project-card" target="_blank">
            <div className="project-title">
                <i className="fa-regular fa-folder"></i>
                <h3>{project.title}</h3>
            </div>
            <div className="project-description">
                <p>{project.description}</p>
            </div>
        </a>
    )

}