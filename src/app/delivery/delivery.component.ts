import { Component, OnInit } from '@angular/core';
import { Person } from '../shared/utitlities/person-model';
import { DataService } from '../shared/services/data.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})

export class DeliveryComponent implements OnInit {
  pageSize = 7;
  currentPage = 1;
  data: Person[] = [];

  constructor(private dataService: DataService) {}

  get paginatedData(): Person[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.data.length / this.pageSize);
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe(
      (val: Person[]) => {
        this.data = val;
      }
    )
  }

  changePage(page: number) {
    this.currentPage = page;
  }

}
