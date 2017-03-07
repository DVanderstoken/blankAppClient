import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Departement } from './departement';
import { DepartementService } from './departement.service';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.css']
})
export class DepartementComponent implements OnInit {

  public departements: Departement[];

  constructor(private departementService: DepartementService) { }

  ngOnInit() {
    this.loadDepartements();
  }

  private loadDepartements() {
    this.departementService.getDepartements()
      .subscribe(departements => {
        this.departements = departements;
      }, err => {
        console.log(err);
      });
  }

}
