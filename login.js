
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Hardcoded list of admin emails for demonstration purposes
const adminEmails = ["admin@example.com", "anotheradmin@example.com"];

function signIn(isAdmin) {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;

      // Check if the user is an admin
      if (isAdmin && !adminEmails.includes(user.email)) {
        // If a non-admin user tries to sign in as admin, sign them out and show an error
        auth.signOut();
        alert("You are not authorized to sign in as an admin.");
        return;
      }

      // Redirect to the appropriate page after successful login
      if (isAdmin) {
        window.location.href = "/admin_dashboard-_business_overview/code.html";
      } else {
        window.location.href = "/primary_dashboard/code.html";
      }
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorCode, errorMessage);
      alert("Error signing in: " + errorMessage);
    });
}
