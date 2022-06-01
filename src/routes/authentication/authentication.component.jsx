import { Fragment } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  //   auth,
  createUserFromAuth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";
import "./authentication.styles.scss";

const Authentication = () => {
  //  used with redirection as the after redirection the application looses session.
  // after google authentication , the page is re-rendered and the component is mounted resulting in the useeffect method to be executed.
  // as "auth" is singleton , it holds the state of the previous invocation.
  //   useEffect(() => {
  //     async function checkRedirectionResult() {
  //       const response = await getRedirectResult(auth);
  //       if (response) {
  //         await createUserFromAuth(response.user);
  //       }
  //     }
  //     checkRedirectionResult();
  //   }, []);
  // moved to Sign in form
  // const logInUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   console.log(user);
  //   await createUserFromAuth(user);
  // };

  //   const logInUserWithRedirect = async () => {
  //     signInWithGoogleRedirect();
  //   };

  return (
    <Fragment>
      {/* <button onClick={logInUser}>Sign in with google</button> */}
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
      <br></br>
      {/* <button onClick={logInUserWithRedirect}>
        Sign in with google Redirect
      </button> */}
    </Fragment>
  );
};

export default Authentication;
