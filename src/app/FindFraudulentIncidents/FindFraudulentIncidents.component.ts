import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../TestService.service';
import { FraudulentIncident } from '../FraudulentIncident';

@Component({
  selector: 'app-FindFraudulentIncidents',
  templateUrl: './FindFraudulentIncidents.component.html',
  styleUrls: ['./FindFraudulentIncidents.component.css']
})
export class FindFraudulentIncidentsComponent implements OnInit {
  incidents: FraudulentIncident[] = [];

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {

    this.testService.getIncidents().subscribe({
      next: (incidents) => {
        this.incidents = incidents;
        console.log(incidents)
      },

      error: (response) => {
        console.error('Error loading incidents', response)
      }
    })


  }


}
