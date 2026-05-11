import { useState } from "react";
import GeneralInfoField from "./components/GeneralInfoField";
import EducationalFieldInfo from "./components/EducationalFieldInfo";

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
      </form>
    </div>
  );
}

export default App;
