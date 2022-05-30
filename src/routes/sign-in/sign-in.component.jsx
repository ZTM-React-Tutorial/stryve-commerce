import { Fragment } from "react";
import SignUp from "../../components/sign-up-form/sign-up-form.component";
import {
  //   auth,
  createUserFromAuth,
  signInWithGooglePopup,
  //   signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
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

  const logInUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    await createUserFromAuth(user);
  };

  //   const logInUserWithRedirect = async () => {
  //     signInWithGoogleRedirect();
  //   };

  return (
    <Fragment>
      <h1>Sign In page</h1>
      <button onClick={logInUser}>Sign in with google</button>
      <SignUp />
      <br></br>
      {/* <button onClick={logInUserWithRedirect}>
        Sign in with google Redirect
      </button> */}
    </Fragment>
  );
};

export default SignIn;
