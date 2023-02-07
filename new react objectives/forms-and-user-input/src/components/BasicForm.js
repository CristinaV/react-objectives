import useInput from "../hooks/use-input-with-reducer";

const BasicForm = (props) => {

    const { value: enteredFirstName, isValid: enteredFirstNameIsValid, hasError: firstNameHasError,
    valueChangeHandler: firstNameChangedHandler,
        inputBlurHandler: firstNameBlurHandler, reset: resetFirstNameInput } = useInput( value => value.trim() !== '');

    const { value: enteredLastName, isValid: enteredLastNameIsValid, hasError: lastNameHasError,
        valueChangeHandler: lastNameChangedHandler,
        inputBlurHandler: lastNameBlurHandler, reset: resetLastNameInput} = useInput( value => value.trim() !== '');

    const { value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailHasError,
        valueChangeHandler: emailChangedHandler,
        inputBlurHandler: emailBlurHandler, reset: resetEmailInput} = useInput( value => value.includes('@'));

    let formIsValid = false;
    if(enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const submitHandler = event => {
        event.preventDefault();

        if(!formIsValid) {
            return;
        }

        resetFirstNameInput();
        resetLastNameInput();
        resetEmailInput();
    }

    const firstNameClassInput = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClassInput = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClassInput = emailHasError ? 'form-control invalid' : 'form-control';

    return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClassInput}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' value={enteredFirstName} onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler}/>
            {firstNameHasError && <p className="error-text">First Name must not be empty</p> }
        </div>
        <div className={lastNameClassInput}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' value={enteredLastName}  onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler} />
            {lastNameHasError && <p className="error-text">Last Name must not be empty</p> }
        </div>
      </div>
      <div className={emailClassInput}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' value={enteredEmail} onChange={emailChangedHandler} onBlur={emailBlurHandler} />
          {emailHasError && <p className="error-text">Email must contain @</p> }
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
