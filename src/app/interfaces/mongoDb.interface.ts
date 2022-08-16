export interface MongoDbInterface {

  collection: string;
  database: string;
  dataSource: string;
  document: DocumentInterface;

}

export interface DocumentInterface {
  firstName: string;
  name: string;
  present: boolean;
  diet: string;
  remarks: string;
  arrival: string;
}
