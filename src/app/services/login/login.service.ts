import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:4200/login';
  isLoggedIn = false;
  userSubject = new BehaviorSubject<any>(null);
  errorSubject = new BehaviorSubject<any>(null);
  user = this.userSubject.asObservable();
  errorMessage = this.errorSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (isLoggedIn != undefined) {
      this.isLoggedIn = isLoggedIn == 'true' ? true : false
    }
    const user = localStorage.getItem('user');
    if(user != undefined) {
      this.userSubject.next(JSON.parse(user))
    }

  }

  login(Username: string, Password: string): any {
    this.userSubject.next({
      Accounts: [
        { Balance: 1123 }
      ]
    });
    this.errorSubject.next(null);
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', this.isLoggedIn.toString());
    localStorage.setItem('user',JSON.stringify({
      Accounts: [
        { Balance: 1123 }
      ]
    }));
    this.router.navigateByUrl('/dashboard');
    // this.http.post(this.url, { Username, Password }, httpOptions).toPromise().then((res: any) => {
    //   if (res.Data && res.Data.length) {
    //     this.userSubject.next(res.Data[0]);
    //     this.errorSubject.next(null);
    //     this.isLoggedIn = true;
    //     this.router.navigateByUrl('/dashboard');
    //   } else if (res.Message) {
    //     this.userSubject.next(null);
    //     this.errorSubject.next(res.Message);
    //   }
    // });
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
