import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FraudulentIncident } from './FraudulentIncident';
import { TransactionHistory } from './TransactionHistory';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  private addUrl = 'https://localhost:7270/api/FraudulentIncidentDetailApi/AddFraudulentIncident'
  private fetchAll = 'https://localhost:7270/api/FraudulentIncidentDetailApi/GetAllIncidents'
  private fetchIncident = 'https://localhost:7270/api/FraudulentIncidentDetailApi'
  private updateUrl = 'https://localhost:7270/api/FraudulentIncidentDetailApi';
  private fetchTransaction = 'https://localhost:7270/api/TransactionHistoryApi';
  private fetchAllTransactions = 'https://localhost:7270/api/TransactionHistoryApi/GetAllTransactions';
  private transactionAndIncident = 'https://localhost:7270/api/TransactionHistoryApi';
  private filteredIncidents = 'https://localhost:7270/api/FraudulentIncidentDetailApi/GetFilteredIncidents';
  private apiUrl = 'https://localhost:7270/api/TransactionHistoryApi';

  // Define the HTTP headers
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

constructor(private http: HttpClient) { }

getIncidents(): Observable<FraudulentIncident[]> {
  return this.http.get<FraudulentIncident[]>(this.fetchAll);
}

getTransactions(): Observable<TransactionHistory[]> {
  return this.http.get<TransactionHistory[]>(this.fetchAllTransactions);
}

addIncident(formData: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.addUrl, formData, { headers });
}

getIncident(incidentId: number): Observable<any> {
  const url = `${this.fetchIncident}/GetIncident/${incidentId}`;
  return this.http.get(url);
}

getTransaction(transactionReferenceNumber: number): Observable<any>{
  const url = `${this.fetchTransaction}/GetTransaction/${transactionReferenceNumber}`;
  return this.http.get(url);
}

updateIncident(incidentId: number, updatedIncident: any): Observable<any> {
  // Use httpOptions when making the HTTP request
  console.log('Update Payload:', updatedIncident); // Log the payload
  return this.http.put<any>(
    `${this.updateUrl}/UpdateIncident/${incidentId}`,
    updatedIncident,
    this.httpOptions
  );
}

getTransactionsAndIncidents(): Observable<TransactionHistory[]> {
  return this.http.get<TransactionHistory[]>(`${this.transactionAndIncident}/GetTransactionsWithIncidents`);
}

getFilteredIncidents(): Observable<FraudulentIncident[]> {
  return this.http.get<FraudulentIncident[]>(this.filteredIncidents);
}

findTransactions(amount: number, paymentMethod: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl}/FindTransactions?amount=${amount}&paymentMethod=${paymentMethod}`);
}
}
