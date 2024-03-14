import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';
import { TransactionHistory } from '../TransactionHistory';

@Component({
  selector: 'app-FilterByAmountAndPayment',
  templateUrl: './FilterByAmountAndPayment.component.html',
  styleUrls: ['./FilterByAmountAndPayment.component.css']
})
export class FilterByAmountAndPaymentComponent implements OnInit {

  amount: number = 0;
  paymentMethod: string = '';
  transactions: any[] = [];
  error: string | undefined;

  constructor(private testService: TestServiceService) {}

  ngOnInit() {}

  findTransactions() {
    this.testService.findTransactions(this.amount, this.paymentMethod).subscribe(
      transactions => {
        this.transactions = transactions;
        this.error = undefined;
      },
      error => {
        console.error('Error fetching transactions', error);
        this.error = 'Error fetching transactions';
      }
    );
  }
}
