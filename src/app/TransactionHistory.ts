import { FraudulentIncident } from "./FraudulentIncident";

export interface TransactionHistory {
  transactionReferenceNumber : number,
  transactionDateTime : Date,
  amount : number,
  senderAccountNumber : number,
  beneficiaryAccountNumber : number,
  senderName : string,
  beneficiaryName : string,
  paymentMethod : string,
  createdAt : Date,
  modifiedAt : Date,
  incidents: FraudulentIncident[];
}
