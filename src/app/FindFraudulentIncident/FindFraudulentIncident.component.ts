import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';

@Component({
  selector: 'app-FindFraudulentIncident',
  templateUrl: './FindFraudulentIncident.component.html',
  styleUrls: ['./FindFraudulentIncident.component.css']
})
export class FindFraudulentIncidentComponent implements OnInit {

  incidentId: string | undefined;
  incidentData: any;
  error: string | undefined;

  constructor(private testService: TestServiceService) { }

  fetchIncident(id: string | undefined) {
    if (id) {
      // Convert the string ID to a number before making the API call
      const numericId = Number(id);

      if (!isNaN(numericId)) {
        this.testService.getIncident(numericId).subscribe(
          response => {
            this.incidentData = response;
            this.error = undefined;
            console.log('Incident details:', this.incidentData);
          },
          error => {
            console.error('Error fetching incident details', error);
            this.error = 'Incident Id is not found';
          }
        );
      } else {
        this.error = 'Invalid incident ID';
        console.error('Invalid incident ID');
      }
    }
  }

  ngOnInit() {
  }

}
