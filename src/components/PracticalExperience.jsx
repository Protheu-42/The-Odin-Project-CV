function PracticalExperience({
  companyName,
  positionTitle,
  mainResponsibilities,
  workStarted,
  workEnded,
  onChangeHandler,
}) {
  return (
    <>
      <label htmlFor="companyName">
        Company Name
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => onChangeHandler(e.target.value, "companyName")}
        />
      </label>
      <label htmlFor="positionTitle">
        Position Title
        <input
          type="text"
          id="positionTitle"
          value={positionTitle}
          onChange={(e) => onChangeHandler(e.target.value, "positionTitle")}
        />
      </label>
      <label htmlFor="mainResponsibilities">
        Main Responsibilities
        <textarea
          id="mainResponsibilities"
          rows={4}
          cols={50}
          id="mainResponsibilities"
          value={mainResponsibilities}
          onChange={(e) =>
            onChangeHandler(e.target.value, "mainResponsibilities")
          }
        ></textarea>
      </label>
      <label htmlFor="workStarted">
        Work Started
        <input
          type="date"
          id="workStarted"
          value={workStarted}
          onChange={(e) => onChangeHandler(e.target.value, "workStarted")}
        />
      </label>
      <label htmlFor="workEnded">
        Work Ended
        <input
          type="date"
          id="workEnded"
          value={workEnded}
          onChange={(e) => onChangeHandler(e.target.value, "workEnded")}
        />
      </label>
    </>
  );
}

export default PracticalExperience;
