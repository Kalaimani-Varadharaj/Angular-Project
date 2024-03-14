import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';
import { FraudulentIncident } from '../FraudulentIncident';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-UpdateFraudulentIncident',
  templateUrl: './UpdateFraudulentIncident.component.html',
  styleUrls: ['./UpdateFraudulentIncident.component.css']
})
export class UpdateFraudulentIncidentComponent implements OnInit {

  updateIncidentRequest= {
    incidentNumber: 0,
    incidentStatus: '',
    fraudulentType: '',
    comments: ''
  };

  fetchedDetails: FraudulentIncident | null = null;
  error: string | null = null;

  constructor(private testService: TestServiceService) {}

  ngOnInit() {
    // Initialize your component, fetch existing data, etc.
  }

  fetchIncidentDetails(): void {
    if (this.updateIncidentRequest.incidentNumber) {
      this.testService.getIncident(this.updateIncidentRequest.incidentNumber).subscribe(
        response => {
          // Populate the form with the fetched data
          this.fetchedDetails = response;
          this.error = null; // Reset error if data is successfully fetched
        },
        error => {
          // Handle error
          this.error = 'Incident not found';
        }
      );
    }
  }

  onSubmit(): void {
    if (this.updateIncidentRequest.incidentNumber && this.fetchedDetails) {
      // Send the updated data to your server using your service
      this.testService.updateIncident(this.updateIncidentRequest.incidentNumber, {
        IncidentStatus: this.fetchedDetails.incidentStatus,
        FraudulentType: this.fetchedDetails.fraudulentType,
        Comments: this.fetchedDetails.comments
      }).subscribe(
        response => {
          // Handle success
          console.log('Incident details updated successfully:', response);
        },
        error => {
          // Handle error
          console.error('Error updating incident details', error);
        }
      );
    }
  }


}
