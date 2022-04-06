import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userId: number;

  form: FormGroup;

  users: User[] = JSON.parse(localStorage.getItem('users') || '[]');

  userSelected: User | null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = parseInt(params['userId']);
      this.userSelected = this.users.find(it => it.id === this.userId) || null;
    });

    this.initForms();
  }

  initForms() {
    this.form = this.fb.group({
      id: [this.userSelected?.id || uuidv4(), [Validators.required]],
      username: [this.userSelected?.username, [Validators.required]],
      password: [this.userSelected?.password, [Validators.required]],
      email: [this.userSelected?.email, [Validators.email, Validators.required]],
      name: [this.userSelected?.name, [Validators.required]],
      surname1: [this.userSelected?.surname1, [Validators.required]],
      surname2: [this.userSelected?.surname2],
      age: [this.userSelected?.age, [Validators.required, Validators.min(1), Validators.max(99)]],
      creationDate: [new Date()]
    });
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }

  createUser() {
    if (this.form.valid) {
      if (!this.userId) {
        localStorage.setItem('users', JSON.stringify([...this.users, this.form.value]));
      } else {
        localStorage.setItem('users', JSON.stringify(this.users.map(it => it.id === this.userId ? this.form.value : it)))
      }


      this.goBack();
    }
  }

}
