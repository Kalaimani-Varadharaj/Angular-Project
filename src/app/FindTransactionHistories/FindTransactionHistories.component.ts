import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from '../TransactionHistory';
import { TestServiceService } from '../TestService.service';

@Component({
  selector: 'app-FindTransactionHistories',
  templateUrl: './FindTransactionHistories.component.html',
  styleUrls: ['./FindTransactionHistories.component.css']
})
export class FindTransactionHistoriesComponent implements OnInit {

  transactions: TransactionHistory[] = [];

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {

    this.testService.getTransactions().subscribe({
      next: (transactions) => {
        this.transactions = transactions;
        console.log(transactions)
      },

      error: (response) => {
        console.error('Error when fetching transaction histories...', response)
      }
    })


  }

}
