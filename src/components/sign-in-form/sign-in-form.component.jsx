import { useContext, useState } from "react";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import {
  signInWithGooglePopup,
  createUserFromAuth,
  signInAuthUserWithEmailAndPassowrd,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";
// import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  let { email, password } = formFields;

  // retrieve "setCurrentUser" property from UserContext.
  // const { setCurrentUser } = useContext(UserContext);
  // **** commented above as using observer pattern

  const logInUser = async () => {
    await signInWithGooglePopup();
    // await createUserFromAuth(user);
  };

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //
      await signInAuthUserWithEmailAndPassowrd(email, password);

      // Sets User to UserContext's setCurrentUser propery..
      // this inturn updates user.context state resulting in the dependent components to be reloaded.
      // setCurrentUser(user);

      // console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password");
          break;
        case "auth/user-not-found":
          alert("No User associated Password");
          break;
        default:
          alert(error.code);
      }
    }
    // }
    // createAuthUser();
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          {/* type should be set because by default a button is submit causing alert */}
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logInUser}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
