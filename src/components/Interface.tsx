type GUID = string & { isGuid: true };

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
  NoofLeaves:Number;
  StemWeight:Number
}
