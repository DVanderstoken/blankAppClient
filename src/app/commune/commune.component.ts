import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Commune } from './commune';
import { CommuneService } from './commune.service';

@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent implements OnInit {

  public communes: Commune[];

  constructor(private communeService: CommuneService) { }

  ngOnInit() {
    this.loadCommunes();
  }

  private loadCommunes() {
    this.communeService.getCommunes()
      .subscribe(communes => {
        this.communes = communes;
      }, err => {
        console.log(err);
      });
  }

}
