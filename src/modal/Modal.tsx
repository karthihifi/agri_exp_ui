import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class AgriImpex {
  useridtoken: any;
  currentSeason: string;
  constructor() {
    let currentYear = new Date().getFullYear();
    let prevYear = new Date().getFullYear() - 1;
    this.currentSeason = prevYear + " - " + currentYear;
  }

  SigintoApp(auth: any, email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.useridtoken = user.getIdToken();
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
}

export default AgriImpex;
