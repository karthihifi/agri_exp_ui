import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class AgriImpex {

    useridtoken: any;
    
    SigintoApp(auth: any, email: string, password: string) {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                this.useridtoken = user.getIdToken()
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
    }
}

export default AgriImpex