import "./style.css"

export default function UserInformations() {
    const informations = {
        avatar: "https://avatars.githubusercontent.com/u/76454588?v=4",
        name: "Richardy Tanure",
        description: "Desenvolvedor FullStack"
    }
    return (
        <div className="card center" id="UserInformations">
                <img className="profile-picture avatar-border" src={informations.avatar} alt="Foto de usuário" />
                <div className="profile-description">
                    <h1>{informations.name}</h1>
                    <span>{informations.description}</span>
                </div>
        </div>
    )
}