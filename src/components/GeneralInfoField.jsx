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

export default GeneralInfoField;
