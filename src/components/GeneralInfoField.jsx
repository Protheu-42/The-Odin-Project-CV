// function GeneralInfoField({ type, value, onChangeHandler }) {
//   if (type === "name") {
//     return (
//       <label for={type}>
//         Name:
//         <input
//           type="text"
//           id={type}
//           value={value}
//           onChange={(e) => onChangeHandler(e.target.value, type)}
//         />
//       </label>
//     );
//   }
//   if (type === "email") {
//     return (
//       <label for={type}>
//         Email:
//         <input
//           type={type}
//           id={type}
//           value={value}
//           onChange={(e) => onChangeHandler(e.target.value, type)}
//         />
//       </label>
//     );
//   }
//   if (type === "phoneNumber") {
//     return (
//       <label for={type}>
//         Phone number:
//         <input
//           type="tel"
//           id={type}
//           value={value}
//           onChange={(e) => onChangeHandler(e.target.value, type)}
//         />
//         {value}
//       </label>
//     );
//   }
// }

// export default GeneralInfoField;

function GeneralInfoField({ name, email, phoneNumber, onChangeHandler }) {
  return (
    <>
      <label for="name">
        Name:
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => onChangeHandler(e.target.value, "name")}
        />
      </label>
      <label for="email">
        Email:
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => onChangeHandler(e.target.value, "email")}
        />
      </label>
      <label for="phoneNumber">
        Phone number:
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(e) => onChangeHandler(e.target.value, "phoneNumber")}
        />
      </label>
    </>
  );
}

export default GeneralInfoField;
