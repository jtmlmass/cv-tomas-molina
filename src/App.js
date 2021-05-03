import './App.css';

// Components
import IdentificationInfo from "./components/identification-info/IdentificationInfo.js";
import ContactInfo from "./components/contact-info/ContactInfo";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import CareerInfo from "./components/career-info/CareerInfo";
import BirthInfo from "./components/birth-info/BirthInfo";
import SkillsInfo from "./components/skills-info/SkillsInfo";
import ExtraDetails from "./components/extra-details/ExtraDetails"
import EducationalInfo from "./components/educational-info/EducationalInfo";
import {
  name,
  dedication,
  contactData,
  profileDescription,
  careerData,
  birthDate, birthPlace,
  codingData, frameData, passiveData,
  detailsData,
  educationalData
} from "./data/DataCV";

// Resources
import tomasMolina from "./images/jotate.jpg";

function App() {
  return (
    <div className="App">
      <div className="paper">
        <div class="row">
          <IdentificationInfo name={name} dedication={dedication} yourImage={tomasMolina}/>
        </div>
        <div className="row">
          <ContactInfo contactData={contactData} />
        </div>
        <div className="row">
          <ProfileInfo info={profileDescription}/>
          <BirthInfo birthDate={birthDate} birthPlace={birthPlace}/>
          <SkillsInfo codingData={codingData.join(", ")} frameData={frameData} passiveData={passiveData.join(", ")}/>
          <ExtraDetails detailsData={detailsData} />
          <CareerInfo careerData={careerData}/>
          <EducationalInfo educationalData={educationalData}/>
        </div>
      </div>                                                      
    </div>
  );
}

export default App;
