import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';
import { TransactionHistory } from '../TransactionHistory';

@Component({
  selector: 'app-FindTransactionHistory',
  templateUrl: './FindTransactionHistory.component.html',
  styleUrls: ['./FindTransactionHistory.component.css']
})
export class FindTransactionHistoryComponent implements OnInit {

  transactionReferenceNumber: number = 0;
  transactionData: TransactionHistory | undefined;
  error: string | undefined;

  constructor(private testService: TestServiceService) { }

  fetchTransaction(id: string | undefined) {
    if (id) {
      // Convert the string ID to a number before making the API call
      const numericId = Number(id);
      if (!isNaN(numericId)) {
        this.testService.getTransaction(numericId).subscribe(
          response => {
            this.transactionData = response;
            this.error = undefined;
            console.log('Incident details:', this.transactionData);
          },
          error => {
            console.error('Error fetching transaction history details', error);
            this.error = 'Transaction Reference Number is not found';
          }
        );
      }
      else {
        this.error = 'Transaction Reference Number';
        console.error('Transaction Reference Number');
      }
    }
  }


  ngOnInit() {
  }

}
