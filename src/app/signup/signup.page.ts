import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
export interface User {
  uid: string;
  email: string;
  name: string;
  photoURL: string;
  phone: string
  emailVerified: boolean;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  user: any;

  registerUser(form) {


    this.authService.RegisterUser(form)
      .then((res) => {
        console.log(form)
        this.user={
          uid:res.user.uid,
          ...form


        }
        console.log("user "+this.user)
       
        this.authService.addProfile(this.user).subscribe({
          next: (data) => {
            console.log(data)
          },
          error: (err) => {
            console.log(err)

          }
        });


        this.router.navigate(['/login'])
      }).catch((error) => {
        window.alert(error.message)
      })
  }

}
