import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user/user.model';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>(this.users);

  dataSource$: BehaviorSubject<User[]>;

  displayedColumns: string[] = ['name', 'surname1', 'surname2', 'email', 'username', 'age', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.dataSource$ = this.dataSource.connect();
    this.loadDataSource();
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    if (this.dataSource$) {
      this.dataSource$.unsubscribe();
    }
  }

  createUser(id?: number) {
    this.router.navigate([id ? `/dashboard/edit/${id}` : '/dashboard/create']);
  }

  deleteUser(id: number) {
    let dialogOpened = this.dialog.open(ModalComponent, {
      data: {
        message: 'Are you sure you want to delete it?',
        labelAccept: 'Yes',
        labelCancel: 'No'
      },
      width: '250px',
      disableClose: true
    });

    dialogOpened.afterClosed().subscribe(result => {
      if (result) {
        this.deleteItem(id);
      }
    });
  }

  private loadDataSource() {
    this.dataSource$.next(this.users);
  }

  private deleteItem(id: number) {
    const newList = JSON.stringify(this.users.filter(it => it.id !== id));
    localStorage.setItem('users', newList);
    this.users = JSON.parse(newList);
    this.loadDataSource();
  }

}
