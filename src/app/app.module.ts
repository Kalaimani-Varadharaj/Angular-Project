import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateFraudulentIncidentComponent } from './CreateFraudulentIncident/CreateFraudulentIncident.component';
import { FindFraudulentIncidentComponent } from './FindFraudulentIncident/FindFraudulentIncident.component';
import { FindFraudulentIncidentsComponent } from './FindFraudulentIncidents/FindFraudulentIncidents.component';
import { UpdateFraudulentIncidentComponent } from './UpdateFraudulentIncident/UpdateFraudulentIncident.component';
import { FindTransactionHistoryComponent } from './FindTransactionHistory/FindTransactionHistory.component';
import { FindTransactionHistoriesComponent } from './FindTransactionHistories/FindTransactionHistories.component';
import { TestServiceService } from './TestService.service';
import { HttpClientModule } from '@angular/common/http';
import { TransactionsAndIncidentsComponent } from './TransactionsAndIncidents/TransactionsAndIncidents.component';
import { FilterIncidentsComponent } from './FilterIncidents/FilterIncidents.component';
import { FilterByAmountAndPaymentComponent } from './FilterByAmountAndPayment/FilterByAmountAndPayment.component';

@NgModule({
  declarations: [			
    AppComponent,
      CreateFraudulentIncidentComponent,
      FindFraudulentIncidentComponent,
      FindFraudulentIncidentsComponent,
      UpdateFraudulentIncidentComponent,
      FindTransactionHistoryComponent,
      FindTransactionHistoriesComponent,
      TransactionsAndIncidentsComponent,
      FilterIncidentsComponent,
      FilterByAmountAndPaymentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [TestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
