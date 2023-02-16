import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  AddProductModal,
  YieldStat,
  AddAreaDetails,
  AreaDetails,
  YieldOvwData
} from "../components/Interface";
import axios from "axios";

class AgriImpex {
  useridtoken: any;
  currentSeason: string;
  defaultProductData: AddProductModal;
  defaultAreaDetails: AddAreaDetails;
  defaultYieldOveData: YieldOvwData;
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
      Createdby: "karthi.hifi@gmail.com",
    };
    this.defaultAreaDetails = {
      AreaID: "",
      Zone: "",
      AreaName: "",
      TotalHectare: 0,
      TotalHectareRef: "Acre",
      Plantation: [],
      Crop: "Banana",
      PlantationCapacity: 0,
      Owner: "",
      Contactno: 12345678,
      Email: "",
      Village: "",
      TownPanchayat: "",
      District: "",
      Pincode: 0,
      Address: "",
      Createdby: "karthi.hifi@gmail.com"
    };
    this.defaultYieldOveData = {
      YieldData: [{
        Season: "2022-2023", ProductCount: 1,
        ProductData: [{ Product: "Banana", AvgLeavesCount: 1, AvgLength: 2, AvgWeight: 4, NetWeight: 4, TotalCount: 3 }]
      }],
      AllData: [{
        Area: "",
        Product: "Banana",
        Variety: "Cavendish",
        NetWeight: 0,
        NetWeightRef: "Kg",
        Season: prevYear + "-" + currentYear,
        //  SeasonRefid : "z9UFALlRGQS6ZtEnHlbB",
        //  NoofLeaves: 0,
        //  Length: 0,
        //  StemWeight: 0,
        Createdon: new Date(),
        id: "122",
        Length: 1
      }]
    }
  }

  AddNewArea(Area: AddAreaDetails): Promise<any> {
    let AreaDetails: AreaDetails = { ...Area }
    console.log(AreaDetails, "Area Details")
    return axios.post(
      "https://us-central1-agriexp-db.cloudfunctions.net/app/NewArea",
      AreaDetails
    );
  }

  AddNewProduct(Product: AddProductModal): Promise<any> {
    // http://localhost:5001/agriexp-db/us-central1/app/YieldStat
    // https://us-central1-agriexp-db.cloudfunctions.net/app/Product
    return axios.post(
      "https://us-central1-agriexp-db.cloudfunctions.net/app/Product",
      Product
    );
    // var resp: String
    //  axios.post('https://us-central1-agriexp-db.cloudfunctions.net/app/Product', Product)
    //   .then((response) => {
    //     // console.log(response)
    //     resp = String(response)
    //     return resp
    //   }).catch(error => {
    //     console.error('There was an error!', error);
    //     resp = "Error Occured"
    //     return resp
    //   });
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
