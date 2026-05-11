function EducationalFieldInfo({
  schoolName,
  titleOfStudy,
  dateOfStart,
  dateOfEnding,
  onChangeHandler,
}) {
  return (
    <>
      <label htmlFor="schoolName">
        School Name
        <input
          type="text"
          id="schoolName"
          value={schoolName}
          onChange={(e) => onChangeHandler(e.target.value, "schoolName")}
        />
      </label>
      <label htmlFor="titleOfStudy">
        Title of Study
        <input
          type="text"
          id="titleOfStudy"
          value={titleOfStudy}
          onChange={(e) => onChangeHandler(e.target.value, "titleOfStudy")}
        />
      </label>
      <label htmlFor="dateOfStudyStart">
        Date of Start:
        <input
          type="date"
          id="dateOfStudyStart"
          value={dateOfStart}
          onChange={(e) => onChangeHandler(e.target.value, "dateOfStart")}
        />
      </label>
      <label htmlFor="dateOfStudyEnd">
        Date of Ending:
        <input
          type="date"
          id="dateOfStudyEnd"
          value={dateOfEnding}
          onChange={(e) => onChangeHandler(e.target.value, "dateOfEnding")}
        />
      </label>
    </>
  );
}

export default EducationalFieldInfo;
