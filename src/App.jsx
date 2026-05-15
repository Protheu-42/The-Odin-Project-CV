import { useState } from "react";
import GeneralInfoField from "./components/GeneralInfoField";
import EducationalFieldInfo from "./components/EducationalFieldInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  const [visualizationMode, setVisualizationMode] = useState("form");

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
  if (visualizationMode === "form") {
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
          <button onClick={() => setVisualizationMode("read")}>Submit</button>
        </form>
      </div>
    );
  }

  if (visualizationMode === "read") {
    return (
      <div>
        <h1>{generalInfo.name}</h1>

        <h2>Educational History</h2>
        <h3>{educationalInfo.schoolName}</h3>
        <p>Title of Study: {educationalInfo.titleOfStudy}</p>
        <p>
          Start at {educationalInfo.dateOfStart} until{" "}
          {educationalInfo.dateOfEnding}
        </p>

        <h2>Career History</h2>
        <h3>{experienceInfo.companyName}</h3>
        <p>Position Title: {experienceInfo.positionTitle}</p>
        <p>
          My main responsibilities were {experienceInfo.mainResponsibilities}
        </p>
        <p>
          Work there from {experienceInfo.dateOfStart} to{" "}
          {experienceInfo.dateOfEnding}
        </p>
        <h3>Contact</h3>
        <ul>
          <li>Phone Number: {generalInfo.phoneNumber}</li>
          <li>email: {generalInfo.email}</li>
        </ul>

        <button onClick={() => setVisualizationMode("form")}>Edit</button>
      </div>
    );
  }
}

export default App;
