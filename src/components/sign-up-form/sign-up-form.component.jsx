// import { useContext, useState } from "react";
// import { UserContext } from "../../contexts/user.context";

import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserFromAuth,
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  let { displayName, email, password, confirmPassword } = formFields;

  // const { setCurrentUser } = useContext(UserContext);

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    // prevent default form submit behavior and the method below will handle.
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      // async function createAuthUser() {
      // creates a user within firebases AUTH.. username and password are stored within the authentication section.
      let response = await createAuthUserWithEmailAndPassword(email, password);
      if (response) {
        // commented in lieu of observer patter
        // setCurrentUser(response.user);
        // creates user within firestore database (different than firebase auth)
        await createUserFromAuth(response.user, { displayName });
        resetFormFields();
      }
    } catch (error) {
      if (error.message === "auth/email-already-in-use") {
        alert("User already in use.");
      }
      console.log("Error with user creation", error.message);
    }
    // }
    // createAuthUser();
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={onChangeHandler}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={onChangeHandler}
        />
        <Button type="submit">Sign Up</Button>
        {/* <button type="submit">Sign Up</button> */}
      </form>
    </div>
  );
};

export default SignUpForm;
