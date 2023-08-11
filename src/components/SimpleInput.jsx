import { useRef, useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputNRef = useRef();
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputChangeHandler = (Event) => {
    setEnteredName(Event.target.value);
  };

  const formSubmissionHandler = (Event) => {
    Event.preventDefault();
    setEnteredNameTouched(true);

    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    // nameInputNRef.current.value = ""; => NOT IDEAL! Don't manipulate DOM.

    setEnteredNameIsValid(true);
    console.log(enteredName);
    const enteredValue = nameInputNRef.current.value;
    console.log(enteredValue);
    setEnteredName("");
  };

  const enteredNameIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = enteredNameIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputNRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {enteredNameIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
