import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../store/auth-context";
import { createUser } from "../utils/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser("signUp", email, password);
      authCtx.authenticate(token);
    } catch (e) {
      const errorMessage = e.response.data.error.message.toLowerCase();
      Alert.alert("Authentication Failed!", errorMessage);
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user ..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
