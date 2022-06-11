import "./style.css"

export default function UserLocation() {
    const location = "Barão de Cocais | Brasil"
    return (
        <div className="card list">
            <ul>
                <li>
                    <div>
                        <i className="fa-solid fa-location-dot"></i>
                        <span className="bold">{location}</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}