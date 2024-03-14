import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';
import { NgForm } from '@angular/forms';
import { FraudulentIncident } from '../FraudulentIncident';

@Component({
  selector: 'app-CreateFraudulentIncident',
  templateUrl: './CreateFraudulentIncident.component.html',
  styleUrls: ['./CreateFraudulentIncident.component.css']
})
export class CreateFraudulentIncidentComponent implements OnInit {

  //model:FraudulentIncident;

  initializeIncident(){
    console.log('Initializing Fraudulent incident...')
  }
  constructor(private testService : TestServiceService) { }

  onSubmit(form: NgForm){
    if(form.valid) {
      const formData = form.value;
      this.testService.addIncident(formData).subscribe(
        response => {
          console.log('Fraudulent Incident added successfully!!!', response);
          form.resetForm();
        },
        error => {
          console.error('Error adding fraudulent incident', error);
          if (error.status === 400 && error.error && error.error.errors) {
            // Handle validation errors
            const validationErrors = error.error.errors;
            console.log('Validation errors:', validationErrors);
            // You can display validation errors to the user or handle them as needed
          }
        }
      )
    }
  }

  ngOnInit() {
  }

}
