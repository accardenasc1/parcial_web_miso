import { PlantsService } from './plants.service';
import { Component, OnInit } from '@angular/core';
import { Plants } from './plants';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent implements OnInit {
  plants: Array<Plants> = [];
  totalInterior: number = 0;
  totalExterior: number =0;
  constructor(private plantsService: PlantsService) {

  }

  ngOnInit() {
    this.getPlants();
  }
  getPlants() {
    this.plantsService.getPlants().subscribe(plants => {
      this.plants = plants;
      this.totalInterior= this.plants.filter(x=> x.tipo == "Interior").length;
      this.totalExterior = this.plants.filter(x=> x.tipo == "Exterior").length;
    });


  }

}
