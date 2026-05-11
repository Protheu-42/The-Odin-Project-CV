import { useState } from "react";
import GeneralInfoField from "./components/GeneralInfoField";
import EducationalFieldInfo from "./components/EducationalFieldInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [educationalInfo, setEducationalInfo] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStart: "",
    dateOfEnding: "",
  });
  const [experienceInfo, setExperienceInfo] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    workStarted: "",
    workEnded: "",
  });

  function handleGeneralChange(value, type) {
    if (type === "name") {
      setGeneralInfo((previousState) => ({ ...previousState, name: value }));
    }
    if (type === "email") {
      setGeneralInfo((previousState) => ({ ...previousState, email: value }));
    }
    if (type === "phoneNumber") {
      setGeneralInfo((previousState) => ({
        ...previousState,
        phoneNumber: value,
      }));
    }
  }

  function handleEducationalChange(value, type) {
    if (type === "schoolName") {
      setEducationalInfo((previousState) => ({
        ...previousState,
        schoolName: value,
      }));
    }
    if (type === "titleOfStudy") {
      setEducationalInfo((previousState) => ({
        ...previousState,
        titleOfStudy: value,
      }));
    }
    if (type === "dateOfStart") {
      setEducationalInfo((previousState) => ({
        ...previousState,
        dateOfStart: value,
      }));
    }
    if (type === "dateOfEnding") {
      setEducationalInfo((previousState) => ({
        ...previousState,
        dateOfEnding: value,
      }));
    }
  }

  function handlePracticalExperience(value, type) {
    if (type === "companyName") {
      setExperienceInfo((previousState) => ({
        ...previousState,
        companyName: value,
      }));
    }
    if (type === "positionTitle") {
      setExperienceInfo((previousState) => ({
        ...previousState,
        positionTitle: value,
      }));
    }
    if (type === "mainResponsibilities") {
      setExperienceInfo((previousState) => ({
        ...previousState,
        mainResponsibilities: value,
      }));
    }
    if (type === "workStarted") {
      setExperienceInfo((previousState) => ({
        ...previousState,
        workStarted: value,
      }));
    }
    if (type === "workEnded") {
      setExperienceInfo((previousState) => ({
        ...previousState,
        workEnded: value,
      }));
    }
  }
  return (
    <div>
      <h1>Input your CV</h1>
      <form>
        <fieldset>
          <legend>General Information</legend>
          <GeneralInfoField
            name={generalInfo.name}
            email={generalInfo.email}
            phoneNumber={generalInfo.phoneNumber}
            onChangeHandler={handleGeneralChange}
          />
        </fieldset>
        <fieldset>
          <legend>Educational experience</legend>
          <EducationalFieldInfo
            schoolName={educationalInfo.schoolName}
            titleOfStudy={educationalInfo.titleOfStudy}
            dateOfStart={educationalInfo.dateOfStart}
            dateOfEnding={educationalInfo.dateOfEnding}
            onChangeHandler={handleEducationalChange}
          />
        </fieldset>
        <fieldset>
          <legend>Practical Experience</legend>
          <PracticalExperience
            companyName={experienceInfo.companyName}
            positionTitle={experienceInfo.positionTitle}
            mainResponsibilities={experienceInfo.mainResponsibilities}
            workStarted={experienceInfo.workStarted}
            workEnded={experienceInfo.workEnded}
            onChangeHandler={handlePracticalExperience}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
