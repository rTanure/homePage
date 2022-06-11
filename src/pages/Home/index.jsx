import HomeAside from "../../components/HomeAside"
import ProjectList from "../../components/ProjectsList"

import "./style.css"

export default function Home() {
    return (
    <div id="bodyApp">
        <HomeAside/>
        <section>
            <ProjectList/>
        </section>
    </div>
    )
} 