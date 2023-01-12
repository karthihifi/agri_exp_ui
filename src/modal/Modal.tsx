import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AddProductModal, YieldStat } from "../components/Interface";
import axios from "axios";

class AgriImpex {
  useridtoken: any;
  currentSeason: string;
  defaultProductData: AddProductModal;
  constructor() {
    let currentYear = new Date().getFullYear();
    let prevYear = new Date().getFullYear() - 1;
    this.currentSeason = prevYear + "-" + currentYear;
    this.defaultProductData = {
      Area: "",
      Product: "Banana",
      Variety: "Cavendish",
      NetWeight: 0,
      NetWeightRef: "Kg",
      Season: prevYear + "-" + currentYear,
      NoofLeaves: 0,
      Length: 0,
      StemWeight: 0,
      Createdby: "karthi.hifi@gmail.com"
    };

  }

  AddNewProduct(Product: AddProductModal) {
    // http://localhost:5001/agriexp-db/us-central1/app/YieldStat
    // https://us-central1-agriexp-db.cloudfunctions.net/app/Product
    axios.post('https://us-central1-agriexp-db.cloudfunctions.net/app/Product', Product)
      .then(response => console.log(response))
      .catch(error => {
        console.error('There was an error!', error);
      });
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
