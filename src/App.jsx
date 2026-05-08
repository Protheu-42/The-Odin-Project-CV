import { useState } from "react";

function GeneralInfoField({ type, value, onChangeHandler }) {
  if (type === "name") {
    return (
      <label for={type}>
        Name:
        <input
          type="text"
          id={type}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value, type)}
        />
      </label>
    );
  }
  if (type === "email") {
    return (
      <label for={type}>
        Email:
        <input
          type={type}
          id={type}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value, type)}
        />
      </label>
    );
  }
  if (type === "phoneNumber") {
    return (
      <label for={type}>
        Phone number:
        <input
          type="tel"
          id={type}
          value={value}
          onChange={(e) => onChangeHandler(e.target.value, type)}
        />
        {value}
      </label>
    );
  }
}

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
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

  return (
    <div>
      <h1>Input your CV</h1>
      <form>
        <fieldset>
          <legend>General Information</legend>
          <GeneralInfoField
            type="name"
            value={generalInfo.name}
            onChangeHandler={handleGeneralChange}
          />
          <GeneralInfoField
            type="email"
            value={generalInfo.email}
            onChangeHandler={handleGeneralChange}
          />
          <GeneralInfoField
            type="phoneNumber"
            value={generalInfo.phoneNumber}
            onChangeHandler={handleGeneralChange}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
