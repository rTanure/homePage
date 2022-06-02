import "./style.css"

export default function Home() {
    return (
        <div id="bodyApp">
        <aside>
            <div className="card center">
                <img className="profile-picture w-border" src="https://avatars.githubusercontent.com/u/76454588?v=4" alt="" />
                <div className="profile-description">
                    <h1>Richardy Tanure</h1>
                    <span>Estudante de Sistemas da informação</span>
                </div>
            </div>
            <div className="card list">
                <ul>
                    <li>
                        <div href="#">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="bold">Brasil</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="card list">
                <ul>
                    <li>
                        <a href="https://github.com/rTanure" target="_blank">
                            <i className="fa-brands fa-github"></i>
                            <span className="bold">rTanure</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:richardy.tanure@hotmail.com">
                            <i className="fa-regular fa-envelope"></i>
                            <span className="bold">richardy.tanure@hotmail.com</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/richardy-rodrigues-tanure-342a26207/">
                            <i className="fa-brands fa-linkedin-in"></i>
                            <span className="bold">Richardy Rodrigues Tanure</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="card techs">
                <h2 className="title-margin">Tecnologias</h2>
                <div className="tech-list">
                    <ul>
                        <li><div className="single-tech">JavaScript</div></li>
                        <li><div className="single-tech">HTML</div></li>
                        <li><div className="single-tech">CSS</div></li>
                        <li><div className="single-tech">NodeJS</div></li>
                        <li><div className="single-tech">MySQL</div></li>
                        <li><div className="single-tech">EJS</div></li>
                        <li><div className="single-tech">GIT</div></li>
                        <li><div className="single-tech">GitHub</div></li>
                        <li><div className="single-tech">Python</div></li>
                    </ul>
                </div>
            </div>
            <div className="card experiences">
                <h2 className="title-margin">Experiências</h2>
                <div className="itens-list">
                    <ul>
                        <li>
                            <h4>Voluntário | Primeira IPGV</h4>
                            <span>2019 - 2020</span>
                            <span className="bold">Transmissão Ao Vivo</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
            <div className="card education">
                <h2 className="title-margin">Educação</h2>
                <div className="itens-list">
                    <ul>
                        <li>
                            <h4>UFOP</h4>
                            <span>2022 - atualmente</span>
                            <span className="bold">Sistemas de informação</span>
                        </li>
                        <li>
                            <h4>C. E. Beldani</h4>
                            <span>2021 - 2021</span>
                            <span className="bold">Ensino Médio</span>
                        </li>
                        <li>
                            <h4>C. F. Imaculada Conceição</h4>
                            <span>2019 - 2020</span>
                            <span className="bold">Ensino Médio</span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <section>
            <div className="card w-findmore">
                <h2>Meus Projetos</h2>
                <a href="#">Veja Mais</a>
            </div>
            <div className="cards-group">
                <a href="#" className="card w-50 project-card">
                    <div className="project-title">
                        <i className="fa-regular fa-folder"></i>
                        <h3>Nome do Projeto</h3>
                    </div>
                    <div className="project-description">
                        <p>Texto de teste</p>
                    </div>
                    <div className="project-footer">
                        <div className="stats">
                            <div className="footer-stats">
                                <i className="fa-regular fa-star"></i>
                                <span>100</span>
                            </div>
                        </div>
                        <div className="language">
                            <div className="language-color"></div>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </a>
                <a href="#" className="card w-50 project-card">
                    <div className="project-title">
                        <i className="fa-regular fa-folder"></i>
                        <h3>Nome do Projeto</h3>
                    </div>
                    <div className="project-description">
                        <p>Texto de teste</p>
                    </div>
                    <div className="project-footer">
                        <div className="stats">
                            <div className="footer-stats">
                                <i className="fa-regular fa-star"></i>
                                <span>100</span>
                            </div>
                        </div>
                        <div className="language">
                            <div className="language-color"></div>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </a>
                <a href="#" className="card w-50 project-card">
                    <div className="project-title">
                        <i className="fa-regular fa-folder"></i>
                        <h3>Nome do Projeto</h3>
                    </div>
                    <div className="project-description">
                        <p>Texto de teste</p>
                    </div>
                    <div className="project-footer">
                        <div className="stats">
                            <div className="footer-stats">
                                <i className="fa-regular fa-star"></i>
                                <span>100</span>
                            </div>
                        </div>
                        <div className="language">
                            <div className="language-color"></div>
                            <span>JavaScript</span>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
    )
} 