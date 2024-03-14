import { Component, OnInit } from '@angular/core';
import { TransactionHistory } from '../TransactionHistory';
import { TestServiceService } from '../TestService.service';

@Component({
  selector: 'app-TransactionsAndIncidents',
  templateUrl: './TransactionsAndIncidents.component.html',
  styleUrls: ['./TransactionsAndIncidents.component.css']
})
export class TransactionsAndIncidentsComponent implements OnInit {

  transactions: TransactionHistory[] = [];
  error: string | undefined;

  constructor(private testService: TestServiceService) {}

  ngOnInit() {
    this.loadTransactionsAndIncidents();
  }

  loadTransactionsAndIncidents() {
    this.testService.getTransactionsAndIncidents().subscribe(
      transactions => {
        this.transactions = transactions;
        this.error = undefined;
      },
      error => {
        console.error('Error fetching transactions and incidents', error);
        this.error = 'Error fetching transactions and incidents';
      }
    );
  }


}
