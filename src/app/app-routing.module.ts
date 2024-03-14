import { FindTransactionHistoryComponent } from './FindTransactionHistory/FindTransactionHistory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFraudulentIncidentComponent } from './CreateFraudulentIncident/CreateFraudulentIncident.component';
import { FindFraudulentIncidentComponent } from './FindFraudulentIncident/FindFraudulentIncident.component';
import { FindFraudulentIncidentsComponent } from './FindFraudulentIncidents/FindFraudulentIncidents.component';
import { UpdateFraudulentIncidentComponent } from './UpdateFraudulentIncident/UpdateFraudulentIncident.component';
import { FindTransactionHistoriesComponent } from './FindTransactionHistories/FindTransactionHistories.component';
import { TransactionsAndIncidentsComponent } from './TransactionsAndIncidents/TransactionsAndIncidents.component';
import { FilterIncidentsComponent } from './FilterIncidents/FilterIncidents.component';
import { FilterByAmountAndPaymentComponent } from './FilterByAmountAndPayment/FilterByAmountAndPayment.component';

const routes: Routes = [
  {path : 'CreateIncident', component:CreateFraudulentIncidentComponent},
  {path : 'FindIncident', component:FindFraudulentIncidentComponent},
  {path : 'FindIncidents', component:FindFraudulentIncidentsComponent},
  {path : 'UpdateIncident', component:UpdateFraudulentIncidentComponent},
  {path : 'FindTransaction', component:FindTransactionHistoryComponent},
  {path : 'FindAllTransactions', component:FindTransactionHistoriesComponent},
  {path : 'TransactionsAndIncidents', component:TransactionsAndIncidentsComponent},
  {path : 'FilterIncidents', component:FilterIncidentsComponent},
  {path : 'FindTransactions', component:FilterByAmountAndPaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
