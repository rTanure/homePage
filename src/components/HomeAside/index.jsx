import UserInformations from "./UserInformations"
import UserLocation from "./UserLocation"
import ContactInformations from "./ContactInformations"
import TechnologiesList from "./TechnologiesList"
import UserExperiences from "./UserExperiences"
import AcademicEducation from "./AcademicEducation"

export default function HomeAside() {
    return(
        <aside>
            <UserInformations />
            <UserLocation/>
            <ContactInformations/>
            <TechnologiesList/>
            <UserExperiences/>
            <AcademicEducation/>
        </aside>
    )
}