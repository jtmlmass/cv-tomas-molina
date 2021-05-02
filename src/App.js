import './App.css';

// Components
import HeaderIdentification from './components/header-identification/HeaderIdentification';
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
  cellphone,
  email,
  address,
  linkedin,
  github,
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
        <HeaderIdentification name={name} dedication={dedication} yourImage={tomasMolina}/>
        <ContactInfo cellphone={cellphone} email={email} address={address} linkedin={linkedin} github={github}/>
        <div className="row">
          <div className="col">
            <ProfileInfo info={profileDescription}/>
            <BirthInfo birthDate={birthDate} birthPlace={birthPlace}/>
            <SkillsInfo codingData={codingData.join(", ")} frameData={frameData} passiveData={passiveData.join(", ")}/>
            <ExtraDetails detailsData={detailsData} />
          </div>
          <div className="col">
            <CareerInfo careerData={careerData}/>
            <EducationalInfo educationalData={educationalData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
