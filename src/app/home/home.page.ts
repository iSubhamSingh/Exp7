import { Component} from '@angular/core';

import { HttpService } from '../services/http.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  users: any[] = [];
  showUsers: boolean = false;

  constructor(private httpService: HttpService) {}

  getUsers() {
    this.httpService.getUsers().subscribe(
      (response: any) => {
        this.users = response.data;
        this.showUsers = true;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addUser() {
    const userData = {
      email: 'subham.singh@spit.ac.in',
      first_name: 'Subham',
      last_name: 'Singh',
      avatar: 'https://img.icons8.com/glyph-neue/64/user--v1.png',
    };

    this.httpService
      .createUser(userData)
      .pipe(
        tap(
          (response: any) => {
            console.log(response);
            this.users.push(response);
          },
          (error) => {
            console.log(error);
          }
        )
      )
      .subscribe();
  }
}
