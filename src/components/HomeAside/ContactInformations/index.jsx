export default function ContactInformations() {

    const contactList = [
        {
            "name": "GitHub",
            "icon": "fa-brands fa-github",
            "href": "https://github.com/rTanure",
        },
        {
            "name": "Email",
            "icon": "fa-regular fa-envelope",
            "href": "mailto:richardy.tanure@hotmail.com",
        },
        {
            "name": "Linkedin",
            "icon": "fa-brands fa-linkedin-in",
            "href": "https://www.linkedin.com/in/richardy-rodrigues-tanure-342a26207/",
        },
    ]

    return (
        <div className="card list">
            <ul>
                {contactList.map(contact => (
                    <li>
                        <a href={contact.href} target="_blank">
                            <i className={contact.icon}></i>
                            <span className="bold">{contact.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}