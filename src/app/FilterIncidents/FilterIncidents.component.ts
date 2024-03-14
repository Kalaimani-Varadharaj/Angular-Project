import { Component, OnInit } from '@angular/core';
import { FraudulentIncident } from '../FraudulentIncident';
import { TestServiceService } from '../TestService.service';

@Component({
  selector: 'app-FilterIncidents',
  templateUrl: './FilterIncidents.component.html',
  styleUrls: ['./FilterIncidents.component.css']
})
export class FilterIncidentsComponent implements OnInit {

  incidents: FraudulentIncident[] = [];

  constructor(private testService: TestServiceService) { }

  ngOnInit(): void {

    this.testService.getFilteredIncidents().subscribe({
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
