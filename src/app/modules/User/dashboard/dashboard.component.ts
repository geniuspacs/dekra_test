import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/models/user/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private users: User[] = [{
    name: 'Eugenio',
    surname1: 'Páez',
    surname2: 'Casado',
    country: 'Spain',
    username: 'geniux14'
  }]

  dataSource = new MatTableDataSource<User>(this.users);

  displayedColumns: string[] = ['name', 'surname1', 'surname2', 'country', 'username', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}
