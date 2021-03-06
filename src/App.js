import { useEffect } from "react";
import React from "react";

import "./App.css";
// Components
import IdentificationInfo from "./components/identification-info/IdentificationInfo";
import ProfileInfo from "./components/profile-info/ProfileInfo";
import CareerInfo from "./components/career-info/CareerInfo";
import BirthInfo from "./components/birth-info/BirthInfo";
import SkillsInfo from "./components/skills-info/SkillsInfo";
import ExtraDetails from "./components/extra-details/ExtraDetails";
import EducationalInfo from "./components/educational-info/EducationalInfo";
import NavBar from "./components/navbar/NavBar";
import {
  name,
  dedication,
  profileDescription,
  careerData,
  birthDate,
  birthPlace,
  codingData,
  frameData,
  passiveData,
  detailsData,
  educationalData,
} from "./data/DataCV";

// Resources
import tomasMolina from "./images/jotate.jpg";

const App = () => {
  useEffect(() => {
    document.title = "Tomas' CV";
  }, []);

  return (
    <>
      <NavBar />
      <div id="container" className="container-lg">
        <div className="row align-items-center">
          <div className="col">
            <div className="paper m-3">
              <IdentificationInfo
                name={name}
                dedication={dedication}
                yourImage={tomasMolina}
              />
              <div className="row justify-content-md-center">
                <div className="col">
                  '
                  <div className="row m-3">
                    <ProfileInfo info={profileDescription} />
                  </div>
                  <div className="row m-3">
                    <BirthInfo birthDate={birthDate} birthPlace={birthPlace} />
                  </div>
                  <div className="row m-3">
                    <SkillsInfo
                      codingData={codingData.join(", ")}
                      frameData={frameData}
                      passiveData={passiveData.join(", ")}
                    />
                  </div>
                  <div className="row m-3">
                    <ExtraDetails detailsData={detailsData} />
                  </div>
                </div>
                <div className="col">
                  <div className="row m-3">
                    <CareerInfo careerData={careerData} />
                  </div>
                  <div className="row m-3">
                    <EducationalInfo educationalData={educationalData} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
