type GUID = string & { isGuid: true };

type Plantation = {
  Crop: String;
  PlantationCapacity: Number;
};

export interface RespData {
  id: GUID;
  Season: String;
  Area: String;
  Product: String;
  Variety: String;
  NetWeight: Number;
  NetWeightRef: String;
  Createdon: Date;
  Createdby: String;
  SeasonRefid: GUID;
}

export interface YieldStat {
  id: GUID;
  Season: String;
  Area: String;
  Product: String;
  Variety: String;
  NetWeight: Number;
  NetWeightRef: String;
  Createdon: Date;
  Createdby: String;
  SeasonRefid: GUID;
}

export interface AddProductModal {
  Season: String;
  Area: String;
  Product: String;
  Variety: String;
  NetWeight: Number;
  NetWeightRef: String;
  Length: Number;
  NoofLeaves: Number;
  Createdby: String;
  StemWeight: Number;
}

export interface AddAreaDetails {
  AreaID: String;
  Zone: String;
  AreaName: String;
  TotalHectare: Number;
  TotalHectareRef: String;
  Plantation: Plantation[];
  Crop: String;
  PlantationCapacity: Number;
  Owner: String;
  Contactno: Number;
  Email: String;
  Village: String;
  TownPanchayat: String;
  District: String;
  Pincode: Number;
  Address: String;
}
