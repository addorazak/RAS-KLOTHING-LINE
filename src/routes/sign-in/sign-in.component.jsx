import SignUpForm from "../../components/sign-up-form/sign-up-compnent";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";


const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>I am the Sign In Page</div>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
