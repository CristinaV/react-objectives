import {useEffect, useRef, useState} from "react";
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {

    const { value: enteredName, isValid: enteredNameIsValid, hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler, inputBlurHandler: nameBlurHandler, reset: resetNameInput } = useInput(value => value.trim() !== '');

    const { value: enteredEmail, isValid: enteredEmailIsValid, hasError: emailInputHasError,
        valueChangeHandler: emailChangedHandler, inputBlurHandler: emailBlurHandler, reset: resetEmailInput } = useInput(value => value.includes('@'));

    let formIsValid = false;
    if(enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    // const [enteredName, setEnteredName]=useState('');
    // const [enteredNameTouched, setEnteredNameTouched]=useState(false);
    // const [enteredEmail, setEnteredEmail]=useState('');
    // const [enteredEmailTouched, setEnteredEmailTouched]=useState(false);
    // const [formIsValid, setFormIsValid]=useState(false);

    // const enteredNameIsValid = enteredName.trim() !== '';
    // const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
    //
    // const enteredEmailIsValid = enteredEmail.includes('@');
    // const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    // used when you have multiple inputs
    // useEffect(()=> {
    //     if(enteredNameIsValid && enteredEmailIsValid) {
    //         setFormIsValid(true);
    //     } else {
    //         setFormIsValid(false);
    //     }
    // }, [enteredNameIsValid, enteredEmailIsValid])

    // const nameInputChangeHandler = event => {
    //     setEnteredName(event.target.value);
    // }

    // const emailInputChangeHandler = event => {
    //     setEnteredEmail(event.target.value);
    // }

    // const nameInputBlurHandler = event => {
    //     setEnteredNameTouched(true);
    // }

    // const emailInputBlurHandler = event => {
    //     setEnteredEmailTouched(true);
    // }

    const formSubmissionHandler = event => {
        event.preventDefault();
        // setEnteredNameTouched(true);
        // setEnteredEmailTouched(true);
        if(!enteredNameIsValid && !enteredEmailIsValid){
            return;
        }

        resetNameInput();
        resetEmailInput();
        // setEnteredName('');
        // setEnteredEmail('');
        // setEnteredNameTouched(false);
        // setEnteredEmailTouched(false);
    }

    // const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
    // const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';
    const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control'
    const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameChangedHandler} value={enteredName} onBlur={nameBlurHandler} />
          {nameInputHasError && <p className="error-text">Name must not be empty</p> }
      </div>
        <div className={emailInputClasses}>
            <label htmlFor='email'>Your Email</label>
            <input type='text' id='email' onChange={emailChangedHandler} value={enteredEmail} onBlur={emailBlurHandler} />
            {emailInputHasError && <p className="error-text">Email must contain @</p> }
        </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
